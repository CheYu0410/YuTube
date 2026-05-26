import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dns from 'dns';
import https from 'https';
import { execFile } from 'child_process';
import os from 'os';

dns.setDefaultResultOrder('ipv4first');

// 強制 IPv4 的 https Agent（這台機器 IPv6 連不出去）
const v4Agent = new https.Agent({
  family: 4,
  keepAlive: true,
});

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 4501;

// === Piped 鏡像（多數已失效，只保留可運作的） ===
const PIPED_APIS = [
  'https://api.piped.private.coffee',
];

// === Invidious 鏡像（API 開放的） ===
const INVIDIOUS_APIS = [
  'https://invidious.materialio.us',
  'https://invidious.protokolla.fi',
];

// 簡單 in-memory cache：60 秒
const cache = new Map();
function cacheGet(k) {
  const v = cache.get(k);
  if (!v) return null;
  if (Date.now() - v.t > 60_000) { cache.delete(k); return null; }
  return v.d;
}
function cacheSet(k, d) {
  cache.set(k, { d, t: Date.now() });
  if (cache.size > 200) cache.delete(cache.keys().next().value);
}

function httpGetJson(url, timeout = 10000) {
  return new Promise((resolve, reject) => {
    const req = https.request(url, {
      agent: v4Agent,
      headers: { 'User-Agent': 'Mozilla/5.0 YuTube/1.0', 'Accept': 'application/json' },
      timeout,
    }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        res.resume();
        return reject(new Error(`redirect ${res.statusCode}`));
      }
      if (res.statusCode !== 200) {
        res.resume();
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      const ct = res.headers['content-type'] || '';
      if (!/json/i.test(ct)) {
        res.resume();
        return reject(new Error(`non-json (${ct})`));
      }
      let body = '';
      res.setEncoding('utf8');
      res.on('data', c => body += c);
      res.on('end', () => {
        try {
          const data = JSON.parse(body);
          if (data && data.error) return reject(new Error(`api: ${data.error}`));
          resolve(data);
        } catch (e) { reject(e); }
      });
    });
    req.on('error', reject);
    req.on('timeout', () => req.destroy(new Error('timeout')));
    req.end();
  });
}

// === Invidious -> Piped 格式正規化 ===
function videoIdToThumb(id) {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

function invVideoToPiped(v) {
  const id = v.videoId || v.video_id || v.id || (() => {
    const raw = v.url || v.videoUrl || v.webpage_url || v.original_url || '';
    const m = String(raw).match(/[?&]v=([^&]+)/) || String(raw).match(/\/shorts\/([^/?]+)/);
    return m ? m[1] : null;
  })();
  if (!id) return {
    url: '',
    type: 'stream',
    title: v.title || '',
    thumbnail: '',
    uploaderName: v.author || v.uploaderName || v.uploader || '',
    uploaderUrl: v.authorId ? `/channel/${v.authorId}` : (v.authorUrl || v.uploaderUrl || ''),
    uploaderAvatar: '',
    uploaderVerified: !!(v.authorVerified || v.uploaderVerified),
    duration: v.lengthSeconds || v.duration || 0,
    views: v.viewCount || v.views || 0,
    uploaded: v.published ? v.published * 1000 : (v.uploaded || 0),
    uploadedDate: v.publishedText || v.uploadedDate || '',
    shortDescription: v.description || v.shortDescription || '',
    isShort: !!v.isShort,
  };
  const thumb = (v.videoThumbnails && v.videoThumbnails.find(t => t.quality === 'hqdefault'))
    || (v.videoThumbnails && v.videoThumbnails[0])
    || (v.thumbnails && v.thumbnails[0]);
  return {
    url: `/watch?v=${id}`,
    type: 'stream',
    title: v.title,
    thumbnail: thumb ? thumb.url : (v.thumbnail || videoIdToThumb(id)),
    uploaderName: v.author || v.uploaderName || v.uploader,
    uploaderUrl: v.authorUrl || v.uploaderUrl || (v.authorId ? `/channel/${v.authorId}` : ''),
    uploaderAvatar: (v.authorThumbnails && v.authorThumbnails.length)
      ? v.authorThumbnails[v.authorThumbnails.length - 1].url : (v.uploaderAvatar || ''),
    uploaderVerified: !!(v.authorVerified || v.uploaderVerified),
    duration: v.lengthSeconds || v.duration || 0,
    views: v.viewCount || v.views || 0,
    uploaded: v.published ? v.published * 1000 : (v.uploaded || 0),
    uploadedDate: v.publishedText || v.uploadedDate || '',
    shortDescription: v.description || v.shortDescription || '',
    isShort: !!v.isShort,
  };
}

function invStreamsToPiped(s) {
  return {
    title: s.title,
    description: s.description || s.descriptionHtml || '',
    uploadDate: s.published ? new Date(s.published * 1000).toISOString() : '',
    uploader: s.author,
    uploaderUrl: s.authorUrl || (s.authorId ? `/channel/${s.authorId}` : ''),
    uploaderAvatar: (s.authorThumbnails && s.authorThumbnails.length)
      ? s.authorThumbnails[s.authorThumbnails.length - 1].url : '',
    uploaderVerified: !!s.authorVerified,
    uploaderSubscriberCount: s.subCountText
      ? parseInt(String(s.subCountText).replace(/[^\d]/g, '')) || 0
      : 0,
    duration: s.lengthSeconds || 0,
    views: s.viewCount || 0,
    likes: s.likeCount || 0,
    dislikes: s.dislikeCount || 0,
    thumbnailUrl: videoIdToThumb(s.videoId),
    relatedStreams: (s.recommendedVideos || []).map(r => ({
      url: `/watch?v=${r.videoId}`,
      type: 'stream',
      title: r.title,
      thumbnail: (r.videoThumbnails && r.videoThumbnails[0]) ? r.videoThumbnails[0].url : videoIdToThumb(r.videoId),
      uploaderName: r.author,
      uploaderUrl: r.authorUrl || '',
      uploaderAvatar: '',
      uploaderVerified: !!r.authorVerified,
      duration: r.lengthSeconds || 0,
      views: r.viewCount || 0,
      uploaded: 0,
      uploadedDate: '',
    })),
  };
}

function invChannelToPiped(c) {
  return {
    name: c.author,
    description: c.description || '',
    avatarUrl: (c.authorThumbnails && c.authorThumbnails.length)
      ? c.authorThumbnails[c.authorThumbnails.length - 1].url : '',
    bannerUrl: (c.authorBanners && c.authorBanners.length) ? c.authorBanners[0].url : '',
    subscriberCount: c.subCount || 0,
    verified: !!c.authorVerified,
    relatedStreams: (c.latestVideos || [])
      .filter(v => v && v.type !== 'parse-error' && (v.videoId || v.video_id || v.id || v.url))
      .map(invVideoToPiped)
      .filter(v => v && v.url),
  };
}

function invSearchToPiped(arr) {
  return {
    items: (arr || [])
      .filter(v => v.type === 'video')
      .map(invVideoToPiped),
    nextpage: null,
  };
}

function invCommentsToPiped(c) {
  return {
    comments: (c.comments || []).map(x => ({
      author: x.author,
      thumbnail: (x.authorThumbnails && x.authorThumbnails.length) ? x.authorThumbnails[x.authorThumbnails.length - 1].url : '',
      commentText: x.content || x.contentHtml || '',
      commentedTime: x.publishedText || '',
      likeCount: x.likeCount || 0,
      authorIsChannelOwner: !!x.authorIsChannelOwner,
      pinned: !!x.isPinned,
      verified: !!x.verified,
      hearted: !!x.creatorHeart,
    })),
  };
}

// === 統一 fetch：先 Piped，再 Invidious 補位 ===
const mirrorScore = new Map();
function bumpScore(base, delta) {
  mirrorScore.set(base, (mirrorScore.get(base) || 0) + delta);
}
function sortByScore(list) {
  return [...list].sort((a, b) => (mirrorScore.get(b) || 0) - (mirrorScore.get(a) || 0));
}

// === yt-dlp 終極 fallback ===
const YTDLP = `${os.homedir()}/.local/bin/yt-dlp`;
function ytdlpExec(args, timeout = 30000) {
  return new Promise((resolve, reject) => {
    execFile(YTDLP, args, { timeout, maxBuffer: 50 * 1024 * 1024 }, (err, stdout, stderr) => {
      if (err) return reject(new Error(`yt-dlp: ${stderr || err.message}`));
      resolve(stdout);
    });
  });
}

function ytdlpEntryId(v) {
  if (v?.id) return String(v.id);
  const raw = v?.url || v?.webpage_url || v?.original_url || '';
  if (!raw) return null;
  const m = String(raw).match(/[?&]v=([^&]+)/) || String(raw).match(/\/shorts\/([^/?]+)/);
  return m ? m[1] : null;
}

function ytdlpVideoToPiped(v) {
  const id = ytdlpEntryId(v);
  if (!id) return null;
  return {
    url: `/watch?v=${id}`,
    type: 'stream',
    title: v.title,
    thumbnail: v.thumbnail || `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
    uploaderName: v.channel || v.uploader,
    uploaderUrl: v.channel_id ? `/channel/${v.channel_id}` : '',
    uploaderAvatar: '',
    uploaderVerified: false,
    duration: v.duration || 0,
    views: v.view_count || 0,
    uploaded: v.timestamp ? v.timestamp * 1000 : 0,
    uploadedDate: v.upload_date || '',
    shortDescription: v.description || '',
    isShort: false,
  };
}

async function ytdlpStreams(id) {
  const stdout = await ytdlpExec([
    '-j', '--no-warnings', '--skip-download', '--no-playlist',
    '--extractor-args', 'youtube:player_client=android,web',
    `https://www.youtube.com/watch?v=${id}`
  ], 25000);
  const v = JSON.parse(stdout.split('\n').filter(Boolean)[0]);
  // 相關影片：用 description 抓，避免再開一次 yt-dlp（很慢）
  // 取頻道首頁前 15 部當相關
  let related = [];
  if (v.channel_id) {
    try {
      const relStr = await ytdlpExec([
        '--flat-playlist', '-j', '--no-warnings', '--playlist-end', '15',
        `https://www.youtube.com/channel/${v.channel_id}/videos`
      ], 12000);
      related = relStr.split('\n').filter(Boolean).map(l => {
        try { return JSON.parse(l); } catch { return null; }
      }).filter(x => ytdlpEntryId(x) && ytdlpEntryId(x) !== id).slice(0, 12).map(ytdlpVideoToPiped).filter(Boolean);
    } catch {}
  }
  return {
    title: v.title,
    description: v.description || '',
    uploadDate: v.upload_date ? `${v.upload_date.slice(0,4)}-${v.upload_date.slice(4,6)}-${v.upload_date.slice(6,8)}` : '',
    uploader: v.channel || v.uploader,
    uploaderUrl: v.channel_id ? `/channel/${v.channel_id}` : '',
    uploaderAvatar: v.channel_thumbnail || '',
    uploaderVerified: false,
    uploaderSubscriberCount: v.channel_follower_count || 0,
    duration: v.duration || 0,
    views: v.view_count || 0,
    likes: v.like_count || 0,
    dislikes: 0,
    thumbnailUrl: v.thumbnail || `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`,
    relatedStreams: related,
    hls: v.hls_url || null,
  };
}

async function ytdlpSearch(q) {
  const stdout = await ytdlpExec([
    '--flat-playlist', '-j', '--no-warnings', '--playlist-end', '30',
    `ytsearch30:${q}`
  ], 25000);
  const items = stdout.split('\n').filter(Boolean).map(l => {
    try { return JSON.parse(l); } catch { return null; }
  }).map(ytdlpVideoToPiped).filter(Boolean);
  return { items, nextpage: null };
}

async function ytdlpTrending(region) {
  // YouTube Trending 頁
  const url = `https://www.youtube.com/feed/trending?gl=${region}`;
  try {
    const stdout = await ytdlpExec([
      '--flat-playlist', '-j', '--no-warnings', '--playlist-end', '30', url
    ], 30000);
    const items = stdout.split('\n').filter(Boolean).map(l => {
      try { return JSON.parse(l); } catch { return null; }
    }).map(ytdlpVideoToPiped).filter(Boolean);
    if (items.length) return items;
  } catch {}
  // 退回搜尋熱門關鍵字
  const queries = { TW: '台灣 熱門', US: 'trending', JP: '日本 トレンド', KR: '한국 인기', HK: '香港 熱門', GB: 'UK trending', DE: 'Deutschland trends' };
  return (await ytdlpSearch(queries[region] || 'trending')).items;
}

async function ytdlpChannel(id, tab = 'videos') {
  // tab: videos | streams (live) | shorts
  const path = tab === 'streams' ? 'streams' : tab === 'shorts' ? 'shorts' : 'videos';
  const stdout = await ytdlpExec([
    '--flat-playlist', '-j', '--no-warnings', '--playlist-end', '40',
    `https://www.youtube.com/channel/${id}/${path}`
  ], 30000);
  const lines = stdout.split('\n').filter(Boolean).map(l => {
    try { return JSON.parse(l); } catch { return null; }
  }).filter(Boolean);
  const channelInfo = lines[0] || {};
  const items = lines
    .filter(x => x && x._type !== 'playlist' && ytdlpEntryId(x))
    .map(ytdlpVideoToPiped)
    .filter(Boolean);
  return {
    name: channelInfo.channel || channelInfo.uploader || id,
    description: channelInfo.description || '',
    avatarUrl: '',
    bannerUrl: '',
    subscriberCount: channelInfo.channel_follower_count || 0,
    verified: false,
    relatedStreams: items,
    tab,
  };
}

async function tryAll(mirrors, pathFn, transformFn = x => x) {
  const errors = [];
  for (const base of sortByScore(mirrors)) {
    try {
      const url = base + pathFn(base);
      const data = await httpGetJson(url, 10000);
      bumpScore(base, 1);
      return { data: transformFn(data, base), source: base };
    } catch (e) {
      bumpScore(base, -1);
      errors.push(`${base}: ${e.message}`);
    }
  }
  throw new Error('all mirrors failed: ' + errors.join(' | '));
}

async function getTrending(region) {
  const ck = `trending:${region}`;
  const c = cacheGet(ck);
  if (c) return c;
  try {
    const r = await tryAll(PIPED_APIS, () => `/trending?region=${region}`);
    cacheSet(ck, r.data);
    return r.data;
  } catch {}
  try {
    const r = await tryAll(INVIDIOUS_APIS,
      () => `/api/v1/trending?region=${region}`,
      arr => arr.map(invVideoToPiped)
    );
    cacheSet(ck, r.data);
    return r.data;
  } catch {}
  // 終極 fallback：yt-dlp 抓 YouTube 熱門
  const data = await ytdlpTrending(region);
  cacheSet(ck, data);
  return data;
}

async function getSearch(q) {
  const ck = `search:${q}`;
  const c = cacheGet(ck);
  if (c) return c;
  try {
    const r = await tryAll(PIPED_APIS, () => `/search?q=${encodeURIComponent(q)}&filter=videos`);
    cacheSet(ck, r.data);
    return r.data;
  } catch {}
  try {
    const r = await tryAll(INVIDIOUS_APIS,
      () => `/api/v1/search?q=${encodeURIComponent(q)}&type=video`,
      invSearchToPiped
    );
    cacheSet(ck, r.data);
    return r.data;
  } catch {}
  // 終極 fallback：yt-dlp 搜尋
  const data = await ytdlpSearch(q);
  cacheSet(ck, data);
  return data;
}

async function getStreams(id) {
  const ck = `streams:${id}`;
  const c = cacheGet(ck);
  if (c) return c;
  try {
    const r = await tryAll(PIPED_APIS, () => `/streams/${id}`);
    cacheSet(ck, r.data);
    return r.data;
  } catch {}
  try {
    const r = await tryAll(INVIDIOUS_APIS,
      () => `/api/v1/videos/${id}`,
      invStreamsToPiped
    );
    cacheSet(ck, r.data);
    return r.data;
  } catch {}
  // 終極 fallback：yt-dlp 直接抓
  const data = await ytdlpStreams(id);
  cacheSet(ck, data);
  return data;
}

async function getChannel(id, tab = 'videos') {
  const ck = `channel:${id}:${tab}`;
  const c = cacheGet(ck);
  if (c) return c;

  // videos 一律以 yt-dlp 影片列表為準，避免 Piped/Invidious channel payload 夾帶壞掉 relatedStreams
  if (tab === 'videos') {
    let baseMeta = null;
    try {
      const r = await tryAll(PIPED_APIS, () => `/channel/${id}`);
      baseMeta = r.data;
    } catch {}
    try {
      const r = await tryAll(INVIDIOUS_APIS, () => `/api/v1/channels/${id}`, invChannelToPiped);
      if (!baseMeta) baseMeta = r.data;
    } catch {}

    const yt = await ytdlpChannel(id, 'videos');
    const out = {
      name: baseMeta?.name || yt.name,
      description: baseMeta?.description || yt.description,
      avatarUrl: baseMeta?.avatarUrl || yt.avatarUrl,
      bannerUrl: baseMeta?.bannerUrl || yt.bannerUrl,
      subscriberCount: baseMeta?.subscriberCount || yt.subscriberCount,
      verified: baseMeta?.verified ?? yt.verified,
      relatedStreams: (yt.relatedStreams || [])
        .filter(v => v && v.url && !v.url.includes('undefined'))
        .map(v => ({
          ...v,
          uploaderName: v.uploaderName || baseMeta?.name || yt.name || '',
          uploaderUrl: v.uploaderUrl || `/channel/${id}`,
          uploaderAvatar: v.uploaderAvatar || baseMeta?.avatarUrl || yt.avatarUrl || '',
          uploaderVerified: v.uploaderVerified ?? baseMeta?.verified ?? yt.verified ?? false,
        })),
      tab,
    };
    cacheSet(ck, out);
    return out;
  }

  // live/shorts 先試 Invidious 子端點，失敗再回 yt-dlp
  try {
    const subPath = tab === 'streams' || tab === 'live' ? 'streams' : 'shorts';
    const r = await tryAll(INVIDIOUS_APIS,
      () => `/api/v1/channels/${id}/${subPath}`,
      d => ({
        name: '', description: '', avatarUrl: '', bannerUrl: '',
        subscriberCount: 0, verified: false,
        relatedStreams: (d.videos || [])
          .filter(v => v && v.type !== 'parse-error' && (v.videoId || v.video_id || v.id || v.url))
          .map(invVideoToPiped)
          .filter(v => v && v.url && !v.url.includes('undefined')),
        tab,
      })
    );
    cacheSet(ck, r.data);
    return r.data;
  } catch {}

  const ytTab = tab === 'live' ? 'streams' : tab;
  const data = await ytdlpChannel(id, ytTab);
  cacheSet(ck, data);
  return data;
}

async function getComments(id) {
  const ck = `comments:${id}`;
  const c = cacheGet(ck);
  if (c) return c;
  try {
    const r = await tryAll(PIPED_APIS, () => `/comments/${id}`);
    cacheSet(ck, r.data);
    return r.data;
  } catch {}
  const r = await tryAll(INVIDIOUS_APIS,
    () => `/api/v1/comments/${id}`,
    invCommentsToPiped
  );
  cacheSet(ck, r.data);
  return r.data;
}

async function getSuggest(q) {
  // Piped 有，Invidious 沒原生 suggest API（有 /api/v1/search/suggestions）
  try {
    const r = await tryAll(PIPED_APIS, () => `/suggestions?query=${encodeURIComponent(q)}`);
    return r.data;
  } catch {}
  try {
    const r = await tryAll(INVIDIOUS_APIS,
      () => `/api/v1/search/suggestions?q=${encodeURIComponent(q)}`,
      d => d.suggestions || []
    );
    return r.data;
  } catch {}
  return [];
}

// === 路由 ===
app.get('/api/search', async (req, res) => {
  const q = (req.query.q || '').trim();
  if (!q) return res.json({ items: [] });
  try {
    res.json(await getSearch(q));
  } catch (e) {
    console.error('[search]', e.message);
    res.status(502).json({ error: e.message });
  }
});

app.get('/api/trending', async (req, res) => {
  try {
    res.json(await getTrending(req.query.region || 'US'));
  } catch (e) {
    console.error('[trending]', e.message);
    res.status(502).json({ error: e.message });
  }
});

// 首頁無限滾動 feed：page=0 已用 trending；這裡處理 page>=1
const FEED_KEYWORDS = {
  TW: ['台灣 vlog', '台灣 美食', 'kpop', '電競', '遊戲實況', '搞笑', '動漫', '電影預告'],
  US: ['music video', 'gaming', 'comedy', 'movie trailer', 'podcast', 'tech review', 'vlog', 'sports highlights'],
  JP: ['日本 音楽', 'ゲーム実況', 'アニメ', 'お笑い', 'vlog', '料理'],
  KR: ['kpop', '한국 게임', '한국 vlog', '한국 음식', '예능'],
  HK: ['香港 vlog', '香港 美食', 'kpop', '搞笑'],
  GB: ['uk music', 'uk vlog', 'gaming', 'football highlights', 'comedy'],
  DE: ['deutsch musik', 'deutsch vlog', 'gaming', 'bundesliga', 'comedy'],
};

async function getFeed(region, page) {
  const ck = `feed:${region}:${page}`;
  const c = cacheGet(ck);
  if (c) return c;
  const list = FEED_KEYWORDS[region] || FEED_KEYWORDS.US;
  // 每頁挑 2 個 keyword 避免一次太慢
  const startIdx = ((page - 1) * 2) % list.length;
  const picks = [list[startIdx], list[(startIdx + 1) % list.length]];
  const seen = new Set();
  const merged = [];
  const results = await Promise.allSettled(picks.map(q => getSearch(q)));
  for (const r of results) {
    if (r.status !== 'fulfilled') continue;
    const items = r.value?.items || [];
    for (const v of items) {
      const id = v.url?.split('v=')[1]?.split('&')[0];
      if (!id || seen.has(id)) continue;
      if (v.type !== 'stream') continue;
      seen.add(id);
      merged.push(v);
    }
  }
  // 隨機打散
  merged.sort(() => Math.random() - 0.5);
  const out = merged.slice(0, 24);
  cacheSet(ck, out);
  return out;
}

app.get('/api/feed', async (req, res) => {
  try {
    const region = req.query.region || 'TW';
    const page = parseInt(req.query.page) || 1;
    res.json(await getFeed(region, page));
  } catch (e) {
    console.error('[feed]', e.message);
    res.status(502).json({ error: e.message });
  }
});

app.get('/api/streams/:id', async (req, res) => {
  try {
    res.json(await getStreams(req.params.id));
  } catch (e) {
    console.error('[streams]', e.message);
    res.status(502).json({ error: e.message });
  }
});

app.get('/proxy/img', async (req, res) => {
  const url = req.query.url;
  if (!url) return res.status(400).end();
  https.get(url, { agent: v4Agent, timeout: 10000 }, (r) => {
    res.set('Content-Type', r.headers['content-type'] || 'image/jpeg');
    res.set('Cache-Control', 'public, max-age=86400');
    r.pipe(res);
  }).on('error', () => res.status(502).end());
});

app.get('/api/suggest', async (req, res) => {
  const q = (req.query.q || '').trim();
  if (!q) return res.json([]);
  res.json(await getSuggest(q));
});

app.get('/api/channel/:id', async (req, res) => {
  try {
    const tab = ['videos', 'streams', 'live', 'shorts'].includes(req.query.tab) ? req.query.tab : 'videos';
    res.json(await getChannel(req.params.id, tab));
  } catch (e) {
    console.error('[channel]', e.message);
    res.status(502).json({ error: e.message });
  }
});

app.get('/api/comments/:id', async (req, res) => {
  try {
    res.json(await getComments(req.params.id));
  } catch (e) {
    console.error('[comments]', e.message);
    res.status(502).json({ error: e.message });
  }
});

// 健康檢查
app.get('/api/health', (req, res) => {
  res.json({
    piped: PIPED_APIS.map(b => ({ url: b, score: mirrorScore.get(b) || 0 })),
    invidious: INVIDIOUS_APIS.map(b => ({ url: b, score: mirrorScore.get(b) || 0 })),
    cache_size: cache.size,
  });
});

// Shorts：用多組關鍵字搜尋合併，filter duration < 90s
const SHORTS_QUERIES = {
  TW: ['shorts 台灣', '搞笑 shorts', '美食 shorts', '寵物 shorts', 'kpop shorts'],
  US: ['shorts viral', 'funny shorts', 'satisfying shorts', 'pets shorts', 'food shorts'],
  JP: ['shorts 日本', 'ショート 面白い', 'ショート 動物', 'ショート 料理'],
  KR: ['shorts 한국', '쇼츠 웃긴', '쇼츠 음식', '쇼츠 동물'],
  HK: ['shorts 香港', '搞笑 shorts', '美食 shorts'],
  GB: ['shorts uk', 'funny shorts', 'satisfying shorts'],
  DE: ['shorts deutsch', 'lustig shorts', 'tiere shorts'],
};
async function getShorts(region) {
  const ck = `shorts:${region}`;
  const c = cacheGet(ck);
  if (c) return c;
  const queries = SHORTS_QUERIES[region] || SHORTS_QUERIES.US;
  const results = await Promise.allSettled(queries.map(q => getSearch(q)));
  const seen = new Set();
  const merged = [];
  for (const r of results) {
    if (r.status !== 'fulfilled') continue;
    const items = r.value?.items || [];
    for (const v of items) {
      const id = v.url?.split('v=')[1]?.split('&')[0];
      if (!id || seen.has(id)) continue;
      const d = v.duration;
      if (typeof d !== 'number' || d <= 0 || d > 90) continue;
      seen.add(id);
      merged.push(v);
    }
  }
  // 隨機洗牌讓畫面有變化
  merged.sort(() => Math.random() - 0.5);
  const out = merged.slice(0, 60);
  cacheSet(ck, out);
  return out;
}

app.get('/api/shorts', async (req, res) => {
  try {
    res.json(await getShorts(req.query.region || 'TW'));
  } catch (e) {
    console.error('[shorts]', e.message);
    res.status(502).json({ error: e.message });
  }
});

app.use(express.static(path.join(__dirname, 'public')));

// SPA fallback
app.get(['/watch', '/results', '/channel/:id', '/history', '/library', '/playlist', '/shorts', '/explore', '/feed'], (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`[YuTube] http://0.0.0.0:${PORT} (Piped:${PIPED_APIS.length} + Invidious:${INVIDIOUS_APIS.length})`);
});
