// ===== i18n =====
const REGION_LANG = { TW:'zh', HK:'zh', US:'en', GB:'en', JP:'ja', KR:'ko', DE:'de' };
const I18N = {
  zh: {
    'app.title': 'YuTube',
    'topbar.search': '搜尋', 'topbar.clear': '清除', 'topbar.voice': '語音搜尋',
    'topbar.kbd': '鍵盤快捷鍵', 'topbar.settings': '設定', 'topbar.notify': '通知', 'topbar.account': '帳號',
    'topbar.notify_empty': '目前沒有新通知', 'topbar.account_hint': '這是 YuTube — 不需要登入',
    'sb.home': '首頁', 'sb.shorts': 'Shorts', 'sb.feed': '訂閱',
    'sb.you': '你', 'sb.library': '媒體庫', 'sb.history': '觀看紀錄',
    'sb.watch_later': '稍後觀看', 'sb.liked': '喜歡的影片',
    'sb.explore': '探索', 'sb.music': '音樂', 'sb.movies': '電影', 'sb.live': '直播',
    'sb.gaming': '遊戲', 'sb.news': '新聞', 'sb.sports': '體育', 'sb.learning': '學習',
    'sb.fashion': '時尚', 'sb.podcasts': 'Podcast',
    'sb.regions': '熱門地區', 'sb.region.TW': '台灣', 'sb.region.US': '美國', 'sb.region.JP': '日本',
    'sb.region.KR': '韓國', 'sb.region.HK': '香港', 'sb.region.GB': '英國', 'sb.region.DE': '德國',
    'sb.footer': '© 2026 YuTube · 基於 Piped API',
    'chip.all': '全部', 'chip.music': '音樂', 'chip.mv': 'MV', 'chip.gaming': '遊戲',
    'chip.news': '新聞', 'chip.comedy': '喜劇', 'chip.anime': '動畫', 'chip.movies': '電影',
    'chip.cooking': '料理', 'chip.travel': '旅遊', 'chip.vlog': 'Vlog', 'chip.tech': '科技',
    'chip.kpop': 'K-Pop', 'chip.lofi': 'Lo-fi', 'chip.podcast': 'Podcast', 'chip.live': 'Live',
    'chip.scroll_left': '向左捲動', 'chip.scroll_right': '向右捲動',
    'load.loading': '載入中…', 'load.error': '載入失敗', 'load.search_error': '搜尋失敗',
    'load.channel_error': '載入頻道失敗', 'load.subs_error': '無法載入訂閱頻道',
    'empty.no_results': '沒有結果', 'empty.no_history': '沒有觀看紀錄',
    'empty.history_hint': '看過的影片會在這裡', 'empty.no_content': '沒有內容',
    'empty.no_subs_title': '還沒有訂閱任何頻道',
    'empty.no_subs_hint': '在影片或頻道頁按「訂閱」就會出現在這裡',
    'empty.go_home': '回到首頁',
    'lib.title': '媒體庫', 'lib.history': '觀看紀錄', 'lib.watch_later': '稍後觀看',
    'lib.liked': '喜歡的影片', 'lib.subs': '訂閱頻道',
    'lib.video_count': '部影片', 'lib.channel_count': '個頻道',
    'lib.empty_wl_msg': '在影片上點時鐘按鈕加入稍後觀看',
    'lib.empty_liked_msg': '在影片上點喜歡會加入這裡',
    'lib.no_subs_msg': '到喜歡的頻道按訂閱就會出現在這裡',
    'history.clear_all': '清除全部', 'history.cleared': '觀看紀錄已清除',
    'set.title': '設定', 'set.theme': '主題', 'set.theme_hint': '深色或淺色介面',
    'set.dark': '深色', 'set.light': '淺色', 'set.auto': '跟隨系統',
    'set.region': '預設地區', 'set.region_hint': '首頁熱門影片與介面語言',
    'set.autoplay': '自動播放下一部', 'set.autoplay_hint': '看完影片自動播放下一個相關影片',
    'set.keep_scroll': '重新整理時記住捲動位置', 'set.keep_scroll_hint': '回首頁時保持原本看到的位置',
    'set.hide_shorts': '隱藏 Shorts', 'set.hide_shorts_hint': '在首頁隱藏 60 秒以下短片',
    'set.clear_data': '清除所有資料', 'set.clear_data_hint': '訂閱、紀錄、稍後觀看、喜歡的影片',
    'set.clear': '清除', 'set.applied_theme': '主題已套用',
    'set.region_updated': '地區已更新', 'set.cleared': '已清除所有資料',
    'kbd.title': '鍵盤快捷鍵',
    'kbd.focus_search': '聚焦搜尋框', 'kbd.close': '關閉視窗 / 取消',
    'kbd.show_help': '顯示這個視窗', 'kbd.toggle_sidebar': '切換 sidebar',
    'kbd.go_home': '回首頁', 'kbd.go_library': '媒體庫', 'kbd.go_history': '觀看紀錄',
    'kbd.go_wl': '稍後觀看', 'kbd.toggle_theme': '切換主題', 'kbd.open_settings': '開啟設定',
    'share.title': '分享', 'share.copy': '複製連結', 'share.email': 'Email',
    'share.from_time': '從目前時間開始',
    'ctx.watch_later': '稍後觀看', 'ctx.copy': '複製連結', 'ctx.share': '分享',
    'ctx.hide': '不感興趣', 'ctx.block': '封鎖頻道',
    'toast.added_wl': '已加入稍後觀看', 'toast.copied': '已複製連結',
    'toast.hidden': '已標記為不感興趣', 'toast.blocked': '已封鎖該頻道',
    'toast.no_channel': '沒有頻道資訊', 'toast.dislike': '已記錄不喜歡 ¯\\_(ツ)_/¯',
    'toast.no_voice': '語音搜尋暫不支援，請輸入文字 ◔_◔',
    'toast.voice_unsupported': '此瀏覽器不支援語音搜尋',
    'toast.voice_listen': '請說話…', 'toast.voice_error': '語音辨識失敗',
    'toast.voice_fail': '語音功能無法啟動',
    'search.results': '搜尋結果',
  },
  en: {
    'app.title': 'YuTube',
    'topbar.search': 'Search', 'topbar.clear': 'Clear', 'topbar.voice': 'Voice search',
    'topbar.kbd': 'Keyboard shortcuts', 'topbar.settings': 'Settings', 'topbar.notify': 'Notifications', 'topbar.account': 'Account',
    'topbar.notify_empty': 'No new notifications', 'topbar.account_hint': 'This is YuTube — no login required',
    'sb.home': 'Home', 'sb.shorts': 'Shorts', 'sb.feed': 'Subscriptions',
    'sb.you': 'You', 'sb.library': 'Library', 'sb.history': 'History',
    'sb.watch_later': 'Watch later', 'sb.liked': 'Liked videos',
    'sb.explore': 'Explore', 'sb.music': 'Music', 'sb.movies': 'Movies', 'sb.live': 'Live',
    'sb.gaming': 'Gaming', 'sb.news': 'News', 'sb.sports': 'Sports', 'sb.learning': 'Learning',
    'sb.fashion': 'Fashion & beauty', 'sb.podcasts': 'Podcasts',
    'sb.regions': 'Trending regions', 'sb.region.TW': 'Taiwan', 'sb.region.US': 'United States', 'sb.region.JP': 'Japan',
    'sb.region.KR': 'Korea', 'sb.region.HK': 'Hong Kong', 'sb.region.GB': 'United Kingdom', 'sb.region.DE': 'Germany',
    'sb.footer': '© 2026 YuTube · Powered by Piped API',
    'chip.all': 'All', 'chip.music': 'Music', 'chip.mv': 'Music videos', 'chip.gaming': 'Gaming',
    'chip.news': 'News', 'chip.comedy': 'Comedy', 'chip.anime': 'Animation', 'chip.movies': 'Movies',
    'chip.cooking': 'Cooking', 'chip.travel': 'Travel', 'chip.vlog': 'Vlog', 'chip.tech': 'Tech',
    'chip.kpop': 'K-Pop', 'chip.lofi': 'Lo-fi', 'chip.podcast': 'Podcasts', 'chip.live': 'Live',
    'chip.scroll_left': 'Scroll left', 'chip.scroll_right': 'Scroll right',
    'load.loading': 'Loading…', 'load.error': 'Failed to load', 'load.search_error': 'Search failed',
    'load.channel_error': 'Failed to load channel', 'load.subs_error': 'Could not load subscriptions',
    'empty.no_results': 'No results', 'empty.no_history': 'No history',
    'empty.history_hint': 'Videos you watch will appear here', 'empty.no_content': 'Nothing here',
    'empty.no_subs_title': 'No subscriptions yet',
    'empty.no_subs_hint': 'Subscribe to channels to see them here',
    'empty.go_home': 'Back to home',
    'lib.title': 'Library', 'lib.history': 'History', 'lib.watch_later': 'Watch later',
    'lib.liked': 'Liked videos', 'lib.subs': 'Subscriptions',
    'lib.video_count': 'videos', 'lib.channel_count': 'channels',
    'lib.empty_wl_msg': 'Click the clock icon to save videos for later',
    'lib.empty_liked_msg': 'Like videos to save them here',
    'lib.no_subs_msg': 'Subscribe to channels you like',
    'history.clear_all': 'Clear all', 'history.cleared': 'History cleared',
    'set.title': 'Settings', 'set.theme': 'Theme', 'set.theme_hint': 'Light or dark interface',
    'set.dark': 'Dark', 'set.light': 'Light', 'set.auto': 'Use system',
    'set.region': 'Default region', 'set.region_hint': 'Trending source and interface language',
    'set.autoplay': 'Autoplay next', 'set.autoplay_hint': 'Play next related video automatically',
    'set.keep_scroll': 'Restore scroll position', 'set.keep_scroll_hint': 'Stay where you were on home',
    'set.hide_shorts': 'Hide Shorts', 'set.hide_shorts_hint': 'Hide videos under 60s on home',
    'set.clear_data': 'Clear all data', 'set.clear_data_hint': 'Subscriptions, history, watch later, liked',
    'set.clear': 'Clear', 'set.applied_theme': 'Theme applied',
    'set.region_updated': 'Region updated', 'set.cleared': 'All data cleared',
    'kbd.title': 'Keyboard shortcuts',
    'kbd.focus_search': 'Focus search box', 'kbd.close': 'Close window / cancel',
    'kbd.show_help': 'Show this window', 'kbd.toggle_sidebar': 'Toggle sidebar',
    'kbd.go_home': 'Go home', 'kbd.go_library': 'Go to Library', 'kbd.go_history': 'Go to History',
    'kbd.go_wl': 'Go to Watch later', 'kbd.toggle_theme': 'Toggle theme', 'kbd.open_settings': 'Open settings',
    'share.title': 'Share', 'share.copy': 'Copy link', 'share.email': 'Email',
    'share.from_time': 'Start at current time',
    'ctx.watch_later': 'Save to Watch later', 'ctx.copy': 'Copy link', 'ctx.share': 'Share',
    'ctx.hide': 'Not interested', 'ctx.block': 'Block channel',
    'toast.added_wl': 'Added to Watch later', 'toast.copied': 'Link copied',
    'toast.hidden': 'Marked as not interested', 'toast.blocked': 'Channel blocked',
    'toast.no_channel': 'No channel info', 'toast.dislike': 'Disliked ¯\\_(ツ)_/¯',
    'toast.no_voice': 'Voice search not supported, type instead ◔_◔',
    'toast.voice_unsupported': 'Voice search unsupported in this browser',
    'toast.voice_listen': 'Listening…', 'toast.voice_error': 'Voice recognition failed',
    'toast.voice_fail': 'Voice could not start',
    'search.results': 'Results for',
  },
  ja: {
    'app.title': 'YuTube',
    'topbar.search': '検索', 'topbar.clear': 'クリア', 'topbar.voice': '音声検索',
    'topbar.kbd': 'キーボードショートカット', 'topbar.settings': '設定', 'topbar.notify': '通知', 'topbar.account': 'アカウント',
    'topbar.notify_empty': '新しい通知はありません', 'topbar.account_hint': 'YuTube にはログイン不要です',
    'sb.home': 'ホーム', 'sb.shorts': 'Shorts', 'sb.feed': '登録チャンネル',
    'sb.you': 'あなた', 'sb.library': 'ライブラリ', 'sb.history': '履歴',
    'sb.watch_later': '後で見る', 'sb.liked': '高く評価した動画',
    'sb.explore': '探索', 'sb.music': '音楽', 'sb.movies': '映画', 'sb.live': 'ライブ',
    'sb.gaming': 'ゲーム', 'sb.news': 'ニュース', 'sb.sports': 'スポーツ', 'sb.learning': '学び',
    'sb.fashion': 'ファッション', 'sb.podcasts': 'ポッドキャスト',
    'sb.regions': '人気の地域', 'sb.region.TW': '台湾', 'sb.region.US': 'アメリカ', 'sb.region.JP': '日本',
    'sb.region.KR': '韓国', 'sb.region.HK': '香港', 'sb.region.GB': 'イギリス', 'sb.region.DE': 'ドイツ',
    'sb.footer': '© 2026 YuTube · Piped API ベース',
    'chip.all': 'すべて', 'chip.music': '音楽', 'chip.mv': 'MV', 'chip.gaming': 'ゲーム',
    'chip.news': 'ニュース', 'chip.comedy': 'お笑い', 'chip.anime': 'アニメ', 'chip.movies': '映画',
    'chip.cooking': '料理', 'chip.travel': '旅行', 'chip.vlog': 'Vlog', 'chip.tech': 'テクノロジー',
    'chip.kpop': 'K-Pop', 'chip.lofi': 'Lo-fi', 'chip.podcast': 'ポッドキャスト', 'chip.live': 'ライブ',
    'chip.scroll_left': '左へスクロール', 'chip.scroll_right': '右へスクロール',
    'load.loading': '読み込み中…', 'load.error': '読み込みに失敗しました', 'load.search_error': '検索に失敗しました',
    'load.channel_error': 'チャンネルの読み込みに失敗', 'load.subs_error': '登録チャンネルを読み込めません',
    'empty.no_results': '結果がありません', 'empty.no_history': '履歴がありません',
    'empty.history_hint': '視聴した動画はここに表示されます', 'empty.no_content': '何もありません',
    'empty.no_subs_title': 'まだ登録チャンネルがありません',
    'empty.no_subs_hint': 'チャンネルを登録するとここに表示されます',
    'empty.go_home': 'ホームへ戻る',
    'lib.title': 'ライブラリ', 'lib.history': '履歴', 'lib.watch_later': '後で見る',
    'lib.liked': '高く評価した動画', 'lib.subs': '登録チャンネル',
    'lib.video_count': '本の動画', 'lib.channel_count': 'チャンネル',
    'lib.empty_wl_msg': '時計アイコンをタップして後で見るに追加',
    'lib.empty_liked_msg': '高評価した動画はここに保存されます',
    'lib.no_subs_msg': '好きなチャンネルを登録しましょう',
    'history.clear_all': 'すべて消去', 'history.cleared': '履歴を消去しました',
    'set.title': '設定', 'set.theme': 'テーマ', 'set.theme_hint': 'ダークまたはライトの外観',
    'set.dark': 'ダーク', 'set.light': 'ライト', 'set.auto': 'システムに合わせる',
    'set.region': 'デフォルト地域', 'set.region_hint': 'トレンド元と表示言語',
    'set.autoplay': '次の動画を自動再生', 'set.autoplay_hint': '関連する次の動画を自動で再生',
    'set.keep_scroll': 'スクロール位置を保持', 'set.keep_scroll_hint': 'ホームに戻ったときに位置を維持',
    'set.hide_shorts': 'Shorts を非表示', 'set.hide_shorts_hint': 'ホームで 60 秒以下の動画を隠す',
    'set.clear_data': 'すべてのデータを消去', 'set.clear_data_hint': '登録、履歴、後で見る、高評価',
    'set.clear': '消去', 'set.applied_theme': 'テーマを適用しました',
    'set.region_updated': '地域を更新しました', 'set.cleared': 'データをすべて消去しました',
    'kbd.title': 'キーボードショートカット',
    'kbd.focus_search': '検索ボックスにフォーカス', 'kbd.close': 'ウィンドウを閉じる / キャンセル',
    'kbd.show_help': 'このウィンドウを表示', 'kbd.toggle_sidebar': 'サイドバーを切り替え',
    'kbd.go_home': 'ホームへ', 'kbd.go_library': 'ライブラリへ', 'kbd.go_history': '履歴へ',
    'kbd.go_wl': '後で見るへ', 'kbd.toggle_theme': 'テーマ切り替え', 'kbd.open_settings': '設定を開く',
    'share.title': '共有', 'share.copy': 'リンクをコピー', 'share.email': 'メール',
    'share.from_time': '現在の時間から開始',
    'ctx.watch_later': '後で見るに保存', 'ctx.copy': 'リンクをコピー', 'ctx.share': '共有',
    'ctx.hide': '興味なし', 'ctx.block': 'チャンネルをブロック',
    'toast.added_wl': '後で見るに追加しました', 'toast.copied': 'リンクをコピーしました',
    'toast.hidden': '興味なしとマーク', 'toast.blocked': 'チャンネルをブロック',
    'toast.no_channel': 'チャンネル情報がありません', 'toast.dislike': '低評価を記録 ¯\\_(ツ)_/¯',
    'toast.no_voice': '音声検索は非対応、テキストでどうぞ ◔_◔',
    'toast.voice_unsupported': 'このブラウザは音声検索に対応していません',
    'toast.voice_listen': 'お話しください…', 'toast.voice_error': '音声認識に失敗',
    'toast.voice_fail': '音声機能を起動できません',
    'search.results': '検索結果',
  },
  ko: {
    'app.title': 'YuTube',
    'topbar.search': '검색', 'topbar.clear': '지우기', 'topbar.voice': '음성 검색',
    'topbar.kbd': '키보드 단축키', 'topbar.settings': '설정', 'topbar.notify': '알림', 'topbar.account': '계정',
    'topbar.notify_empty': '새 알림이 없습니다', 'topbar.account_hint': 'YuTube — 로그인 필요 없음',
    'sb.home': '홈', 'sb.shorts': 'Shorts', 'sb.feed': '구독',
    'sb.you': '나', 'sb.library': '보관함', 'sb.history': '시청 기록',
    'sb.watch_later': '나중에 볼 동영상', 'sb.liked': '좋아요 표시한 동영상',
    'sb.explore': '탐색', 'sb.music': '음악', 'sb.movies': '영화', 'sb.live': '라이브',
    'sb.gaming': '게임', 'sb.news': '뉴스', 'sb.sports': '스포츠', 'sb.learning': '학습',
    'sb.fashion': '패션', 'sb.podcasts': '팟캐스트',
    'sb.regions': '인기 지역', 'sb.region.TW': '대만', 'sb.region.US': '미국', 'sb.region.JP': '일본',
    'sb.region.KR': '한국', 'sb.region.HK': '홍콩', 'sb.region.GB': '영국', 'sb.region.DE': '독일',
    'sb.footer': '© 2026 YuTube · Piped API 기반',
    'chip.all': '전체', 'chip.music': '음악', 'chip.mv': 'MV', 'chip.gaming': '게임',
    'chip.news': '뉴스', 'chip.comedy': '코미디', 'chip.anime': '애니메이션', 'chip.movies': '영화',
    'chip.cooking': '요리', 'chip.travel': '여행', 'chip.vlog': 'Vlog', 'chip.tech': '기술',
    'chip.kpop': 'K-Pop', 'chip.lofi': 'Lo-fi', 'chip.podcast': '팟캐스트', 'chip.live': '라이브',
    'chip.scroll_left': '왼쪽으로 스크롤', 'chip.scroll_right': '오른쪽으로 스크롤',
    'load.loading': '불러오는 중…', 'load.error': '불러오기 실패', 'load.search_error': '검색 실패',
    'load.channel_error': '채널 불러오기 실패', 'load.subs_error': '구독 채널을 불러올 수 없음',
    'empty.no_results': '결과 없음', 'empty.no_history': '시청 기록 없음',
    'empty.history_hint': '시청한 동영상이 여기에 표시됩니다', 'empty.no_content': '내용 없음',
    'empty.no_subs_title': '구독한 채널이 없습니다',
    'empty.no_subs_hint': '채널을 구독하면 여기에 표시됩니다',
    'empty.go_home': '홈으로 돌아가기',
    'lib.title': '보관함', 'lib.history': '시청 기록', 'lib.watch_later': '나중에 볼 동영상',
    'lib.liked': '좋아요 표시한 동영상', 'lib.subs': '구독 채널',
    'lib.video_count': '개 동영상', 'lib.channel_count': '개 채널',
    'lib.empty_wl_msg': '시계 아이콘을 눌러 나중에 볼 동영상에 추가',
    'lib.empty_liked_msg': '좋아요 표시한 동영상이 여기에 저장됩니다',
    'lib.no_subs_msg': '좋아하는 채널을 구독하세요',
    'history.clear_all': '모두 지우기', 'history.cleared': '시청 기록을 지웠습니다',
    'set.title': '설정', 'set.theme': '테마', 'set.theme_hint': '어두운/밝은 인터페이스',
    'set.dark': '어두운', 'set.light': '밝은', 'set.auto': '시스템 설정',
    'set.region': '기본 지역', 'set.region_hint': '인기 동영상 출처 및 언어',
    'set.autoplay': '자동 재생', 'set.autoplay_hint': '동영상이 끝나면 다음 영상 자동 재생',
    'set.keep_scroll': '스크롤 위치 기억', 'set.keep_scroll_hint': '홈으로 돌아갈 때 위치 유지',
    'set.hide_shorts': 'Shorts 숨기기', 'set.hide_shorts_hint': '홈에서 60초 미만 영상 숨김',
    'set.clear_data': '모든 데이터 지우기', 'set.clear_data_hint': '구독, 기록, 나중에 볼 동영상, 좋아요',
    'set.clear': '지우기', 'set.applied_theme': '테마 적용됨',
    'set.region_updated': '지역이 업데이트됨', 'set.cleared': '모든 데이터 지움',
    'kbd.title': '키보드 단축키',
    'kbd.focus_search': '검색창 포커스', 'kbd.close': '창 닫기 / 취소',
    'kbd.show_help': '이 창 표시', 'kbd.toggle_sidebar': '사이드바 토글',
    'kbd.go_home': '홈으로', 'kbd.go_library': '보관함으로', 'kbd.go_history': '시청 기록',
    'kbd.go_wl': '나중에 볼 동영상', 'kbd.toggle_theme': '테마 전환', 'kbd.open_settings': '설정 열기',
    'share.title': '공유', 'share.copy': '링크 복사', 'share.email': '이메일',
    'share.from_time': '현재 시간부터 시작',
    'ctx.watch_later': '나중에 볼 동영상에 저장', 'ctx.copy': '링크 복사', 'ctx.share': '공유',
    'ctx.hide': '관심 없음', 'ctx.block': '채널 차단',
    'toast.added_wl': '나중에 볼 동영상에 추가됨', 'toast.copied': '링크 복사됨',
    'toast.hidden': '관심 없음으로 표시', 'toast.blocked': '채널을 차단했습니다',
    'toast.no_channel': '채널 정보 없음', 'toast.dislike': '싫어요 기록 ¯\\_(ツ)_/¯',
    'toast.no_voice': '음성 검색 미지원, 텍스트로 입력 ◔_◔',
    'toast.voice_unsupported': '이 브라우저는 음성 검색을 지원하지 않습니다',
    'toast.voice_listen': '말씀하세요…', 'toast.voice_error': '음성 인식 실패',
    'toast.voice_fail': '음성 기능을 시작할 수 없음',
    'search.results': '검색 결과',
  },
  de: {
    'app.title': 'YuTube',
    'topbar.search': 'Suchen', 'topbar.clear': 'Löschen', 'topbar.voice': 'Sprachsuche',
    'topbar.kbd': 'Tastenkürzel', 'topbar.settings': 'Einstellungen', 'topbar.notify': 'Benachrichtigungen', 'topbar.account': 'Konto',
    'topbar.notify_empty': 'Keine neuen Benachrichtigungen', 'topbar.account_hint': 'YuTube — kein Login nötig',
    'sb.home': 'Startseite', 'sb.shorts': 'Shorts', 'sb.feed': 'Abos',
    'sb.you': 'Du', 'sb.library': 'Mediathek', 'sb.history': 'Verlauf',
    'sb.watch_later': 'Später ansehen', 'sb.liked': '„Mag ich“-Videos',
    'sb.explore': 'Entdecken', 'sb.music': 'Musik', 'sb.movies': 'Filme', 'sb.live': 'Live',
    'sb.gaming': 'Gaming', 'sb.news': 'Nachrichten', 'sb.sports': 'Sport', 'sb.learning': 'Lernen',
    'sb.fashion': 'Mode & Beauty', 'sb.podcasts': 'Podcasts',
    'sb.regions': 'Beliebte Regionen', 'sb.region.TW': 'Taiwan', 'sb.region.US': 'USA', 'sb.region.JP': 'Japan',
    'sb.region.KR': 'Korea', 'sb.region.HK': 'Hongkong', 'sb.region.GB': 'Vereinigtes Königreich', 'sb.region.DE': 'Deutschland',
    'sb.footer': '© 2026 YuTube · Powered by Piped API',
    'chip.all': 'Alle', 'chip.music': 'Musik', 'chip.mv': 'Musikvideos', 'chip.gaming': 'Gaming',
    'chip.news': 'Nachrichten', 'chip.comedy': 'Comedy', 'chip.anime': 'Animation', 'chip.movies': 'Filme',
    'chip.cooking': 'Kochen', 'chip.travel': 'Reisen', 'chip.vlog': 'Vlog', 'chip.tech': 'Technik',
    'chip.kpop': 'K-Pop', 'chip.lofi': 'Lo-fi', 'chip.podcast': 'Podcasts', 'chip.live': 'Live',
    'chip.scroll_left': 'Nach links scrollen', 'chip.scroll_right': 'Nach rechts scrollen',
    'load.loading': 'Lädt…', 'load.error': 'Laden fehlgeschlagen', 'load.search_error': 'Suche fehlgeschlagen',
    'load.channel_error': 'Kanal konnte nicht geladen werden', 'load.subs_error': 'Abos konnten nicht geladen werden',
    'empty.no_results': 'Keine Ergebnisse', 'empty.no_history': 'Kein Verlauf',
    'empty.history_hint': 'Angesehene Videos erscheinen hier', 'empty.no_content': 'Nichts hier',
    'empty.no_subs_title': 'Noch keine Abonnements',
    'empty.no_subs_hint': 'Abonniere Kanäle, um sie hier zu sehen',
    'empty.go_home': 'Zurück zur Startseite',
    'lib.title': 'Mediathek', 'lib.history': 'Verlauf', 'lib.watch_later': 'Später ansehen',
    'lib.liked': '„Mag ich“-Videos', 'lib.subs': 'Abonnements',
    'lib.video_count': 'Videos', 'lib.channel_count': 'Kanäle',
    'lib.empty_wl_msg': 'Tippe auf das Uhrsymbol, um später anzusehen',
    'lib.empty_liked_msg': 'Mit Daumen hoch hier speichern',
    'lib.no_subs_msg': 'Abonniere Kanäle, die du magst',
    'history.clear_all': 'Alle löschen', 'history.cleared': 'Verlauf gelöscht',
    'set.title': 'Einstellungen', 'set.theme': 'Design', 'set.theme_hint': 'Helles oder dunkles Design',
    'set.dark': 'Dunkel', 'set.light': 'Hell', 'set.auto': 'System verwenden',
    'set.region': 'Standardregion', 'set.region_hint': 'Trends-Quelle und Oberflächensprache',
    'set.autoplay': 'Autoplay', 'set.autoplay_hint': 'Nächstes ähnliches Video automatisch abspielen',
    'set.keep_scroll': 'Scroll-Position merken', 'set.keep_scroll_hint': 'Position auf Startseite beibehalten',
    'set.hide_shorts': 'Shorts ausblenden', 'set.hide_shorts_hint': 'Videos unter 60 s auf Startseite verstecken',
    'set.clear_data': 'Alle Daten löschen', 'set.clear_data_hint': 'Abos, Verlauf, später ansehen, „Mag ich“',
    'set.clear': 'Löschen', 'set.applied_theme': 'Design angewendet',
    'set.region_updated': 'Region aktualisiert', 'set.cleared': 'Alle Daten gelöscht',
    'kbd.title': 'Tastenkürzel',
    'kbd.focus_search': 'Suchfeld fokussieren', 'kbd.close': 'Fenster schließen / abbrechen',
    'kbd.show_help': 'Dieses Fenster anzeigen', 'kbd.toggle_sidebar': 'Seitenleiste umschalten',
    'kbd.go_home': 'Zur Startseite', 'kbd.go_library': 'Zur Mediathek', 'kbd.go_history': 'Zum Verlauf',
    'kbd.go_wl': 'Später ansehen', 'kbd.toggle_theme': 'Design wechseln', 'kbd.open_settings': 'Einstellungen öffnen',
    'share.title': 'Teilen', 'share.copy': 'Link kopieren', 'share.email': 'E-Mail',
    'share.from_time': 'Bei aktueller Zeit beginnen',
    'ctx.watch_later': 'In „Später ansehen“ speichern', 'ctx.copy': 'Link kopieren', 'ctx.share': 'Teilen',
    'ctx.hide': 'Nicht interessiert', 'ctx.block': 'Kanal blockieren',
    'toast.added_wl': 'Zu „Später ansehen“ hinzugefügt', 'toast.copied': 'Link kopiert',
    'toast.hidden': 'Als „Nicht interessiert“ markiert', 'toast.blocked': 'Kanal blockiert',
    'toast.no_channel': 'Keine Kanal-Info', 'toast.dislike': 'Daumen runter ¯\\_(ツ)_/¯',
    'toast.no_voice': 'Sprachsuche nicht unterstützt, bitte tippen ◔_◔',
    'toast.voice_unsupported': 'Sprachsuche in diesem Browser nicht unterstützt',
    'toast.voice_listen': 'Bitte sprechen…', 'toast.voice_error': 'Spracherkennung fehlgeschlagen',
    'toast.voice_fail': 'Sprachfunktion startet nicht',
    'search.results': 'Suchergebnisse für',
  },
};
function regionToLang(region) { return REGION_LANG[region] || 'zh'; }
function t(key) {
  const lang = (window.__lang) || 'zh';
  return (I18N[lang] && I18N[lang][key]) || I18N.zh[key] || key;
}
function applyI18n(root) {
  root = root || document;
  root.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const txt = t(key);
    el.textContent = txt;
  });
  root.querySelectorAll('[data-i18n-attr]').forEach(el => {
    // format: "attr1:key1;attr2:key2"
    el.dataset.i18nAttr.split(';').forEach(pair => {
      const [attr, k] = pair.split(':');
      if (attr && k) el.setAttribute(attr.trim(), t(k.trim()));
    });
  });
  root.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.setAttribute('placeholder', t(el.dataset.i18nPlaceholder));
  });
}
function setLangByRegion(region) {
  const lang = regionToLang(region);
  window.__lang = lang;
  document.documentElement.lang = lang === 'zh' ? 'zh-TW' : lang;
  applyI18n();
}

// ===== Storage helpers =====
const Store = {
  get(key, def) {
    try { return JSON.parse(localStorage.getItem('yutube:' + key)) ?? def; }
    catch { return def; }
  },
  set(key, val) { localStorage.setItem('yutube:' + key, JSON.stringify(val)); },

  // 觀看紀錄（最多 200 筆）
  history: {
    list() { return Store.get('history', []); },
    add(v) {
      const list = Store.history.list().filter(x => x.id !== v.id);
      list.unshift({ ...v, watchedAt: Date.now() });
      Store.set('history', list.slice(0, 200));
    },
    clear() { Store.set('history', []); },
  },

  // 稍後觀看
  watchLater: {
    list() { return Store.get('watchLater', []); },
    has(id) { return Store.watchLater.list().some(v => v.id === id); },
    toggle(v) {
      const list = Store.watchLater.list();
      const i = list.findIndex(x => x.id === v.id);
      if (i >= 0) { list.splice(i, 1); Store.set('watchLater', list); return false; }
      list.unshift({ ...v, addedAt: Date.now() });
      Store.set('watchLater', list);
      return true;
    },
  },

  // 喜歡的影片
  liked: {
    list() { return Store.get('liked', []); },
    has(id) { return Store.liked.list().some(v => v.id === id); },
    toggle(v) {
      const list = Store.liked.list();
      const i = list.findIndex(x => x.id === v.id);
      if (i >= 0) { list.splice(i, 1); Store.set('liked', list); return false; }
      list.unshift({ ...v, likedAt: Date.now() });
      Store.set('liked', list);
      return true;
    },
  },

  // 訂閱
  subs: {
    list() { return Store.get('subs', []); },
    has(id) { return Store.subs.list().some(c => c.id === id); },
    toggle(c) {
      const list = Store.subs.list();
      const i = list.findIndex(x => x.id === c.id);
      if (i >= 0) { list.splice(i, 1); Store.set('subs', list); return false; }
      list.unshift(c);
      Store.set('subs', list);
      return true;
    },
  },

  // 設定
  settings: {
    get all() {
      return Store.get('settings', {
        theme: 'dark', region: 'TW', autoplay: true,
        keepScroll: false, hideShorts: false,
        avatarText: 'Y', avatarColor: '#2962ff', avatarImage: '',
      });
    },
    set(key, val) {
      const s = Store.settings.all;
      s[key] = val;
      Store.set('settings', s);
      applySettings();
    },
  },

  // 不感興趣 / 封鎖頻道
  hidden: {
    list() { return Store.get('hidden', []); },
    has(id) { return Store.hidden.list().includes(id); },
    add(id) {
      const list = Store.hidden.list();
      if (!list.includes(id)) { list.push(id); Store.set('hidden', list); }
    },
  },
  blocked: {
    list() { return Store.get('blocked', []); },
    has(id) { return Store.blocked.list().includes(id); },
    add(id) {
      const list = Store.blocked.list();
      if (!list.includes(id)) { list.push(id); Store.set('blocked', list); }
    },
  },

  // 觀看進度（給卡片紅條）
  progress: {
    all() { return Store.get('progress', {}); },
    set(id, pct) {
      const all = Store.progress.all();
      all[id] = pct;
      Store.set('progress', all);
    },
    get(id) { return Store.progress.all()[id] || 0; },
  },

  // 全清
  clearAll() {
    ['history', 'watchLater', 'liked', 'subs', 'hidden', 'blocked', 'progress'].forEach(k => {
      localStorage.removeItem('yutube:' + k);
    });
  },
};

// ===== State =====
const state = { region: Store.get('region', 'TW') };
window.__lang = regionToLang(Store.settings.all.region || state.region);

// ===== DOM =====
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);
const app = $('#app');
const page = $('#page');
const chipbar = $('#chipbar');
const searchForm = $('#searchForm');
const searchInput = $('#searchInput');
const suggest = $('#suggest');
const menuBtn = $('#menuBtn');
const toastEl = $('#toast');
const shareModal = $('#shareModal');
const mobileSearchSheet = $('#mobileSearchSheet');
const mobileSearchInput = $('#mobileSearchInput');
const mobileSuggest = $('#mobileSuggest');

// ===== Utils =====
function proxyImg(url) {
  if (!url) return '';
  const m = url.match(/\/vi\/([^/]+)\/(hq720|hqdefault|maxresdefault|mqdefault|sddefault)\.jpg/);
  if (m) return '/proxy/img?url=' + encodeURIComponent(`https://i.ytimg.com/vi/${m[1]}/${m[2]}.jpg`);
  const a = url.match(/https?:\/\/proxy\.piped[^/]*\/([^?]+)\?host=([^&]+)/);
  if (a) {
    const path = a[1];
    const host = decodeURIComponent(a[2]);
    return '/proxy/img?url=' + encodeURIComponent(`https://${host}/${path}`);
  }
  const b = url.match(/^https?:\/\/[^/]+\/([^?]+)\?host=([^&]+)/);
  if (b) {
    const path = b[1];
    const host = decodeURIComponent(b[2]);
    return '/proxy/img?url=' + encodeURIComponent(`https://${host}/${path}`);
  }
  return '/proxy/img?url=' + encodeURIComponent(url);
}

function pickAvatar(...sources) {
  for (const src of sources) {
    if (!src) continue;
    if (typeof src === 'string' && src.trim()) return src;
    if (Array.isArray(src)) {
      const picked = [...src].reverse().find(v => v?.url)?.url || src.find(v => v?.url)?.url;
      if (picked) return picked;
    }
    if (typeof src === 'object' && src.url) return src.url;
  }
  return '';
}

function getFallbackInitial(text, fallback = 'Y') {
  return String(text || '').trim().charAt(0) || fallback;
}

function setAvatarContent(el, avatarUrl, fallbackText = 'Y') {
  if (!el) return;
  el.dataset.fallbackText = fallbackText;
  if (!avatarUrl) {
    el.textContent = fallbackText;
    return;
  }
  el.innerHTML = `<img src="${proxyImg(avatarUrl)}" alt="">`;
  const img = el.querySelector('img');
  if (img) {
    img.onerror = () => {
      el.textContent = fallbackText;
    };
  }
}

async function getChannelCached(channelId, tab = 'videos') {
  if (!channelId) return null;
  state._chCache = state._chCache || {};
  const cacheKey = `${channelId}:${tab}`;
  if (!state._chCache[cacheKey]) {
    state._chCache[cacheKey] = await api(`/api/channel/${channelId}?tab=${tab}`);
  }
  return state._chCache[cacheKey];
}

function getChannelAvatarFromData(data) {
  return pickAvatar(
    data?.avatarUrl,
    data?.uploaderAvatar,
    data?.authorThumbnail,
    data?.authorThumbnails,
    data?.uploaderThumbnails,
    data?.uploaderAvatars,
    data?.authorImages
  );
}

async function hydrateChannelAvatar(el, channelId) {
  if (!el || !channelId) return '';
  try {
    const chInfo = await getChannelCached(channelId, 'videos');
    const avatarUrl = getChannelAvatarFromData(chInfo);
    if (!avatarUrl) return '';
    setAvatarContent(el, avatarUrl, el.dataset.fallbackText || 'Y');
    return avatarUrl;
  } catch {
    return '';
  }
}

function fmtViews(n) {
  if (!n || n < 0) return '';
  if (n >= 1e8) return (n / 1e8).toFixed(1).replace(/\.0$/, '') + '億';
  if (n >= 1e4) return (n / 1e4).toFixed(1).replace(/\.0$/, '') + '萬';
  if (n >= 1e3) return (n / 1e3).toFixed(1).replace(/\.0$/, '') + '千';
  return n.toString();
}

function fmtDuration(sec) {
  if (!sec || sec < 0) return null;
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;
  if (h) return `${h}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  return `${m}:${String(s).padStart(2,'0')}`;
}

function fmtUploadDate(text) {
  if (!text) return '';
  if (typeof text === 'number') {
    if (text <= 0) return '';
    const days = Math.floor((Date.now() - text) / 86400000);
    if (days < 0) return '';
    if (days < 1) return '今天';
    if (days < 30) return `${days} 天前`;
    if (days < 365) return `${Math.floor(days / 30)} 個月前`;
    return `${Math.floor(days / 365)} 年前`;
  }
  return String(text).replace('Streamed ', '').replace('hours', '小時').replace('hour', '小時')
    .replace('minutes', '分鐘').replace('minute', '分鐘')
    .replace('days', '天').replace('day', '天')
    .replace('weeks', '週').replace('week', '週')
    .replace('months', '個月').replace('month', '個月')
    .replace('years', '年').replace('year', '年')
    .replace('ago', '前');
}

function videoIdFromUrl(url) {
  if (!url) return null;
  const m = url.match(/[?&]v=([^&]+)/);
  return m ? m[1] : null;
}

function channelIdFromUrl(url) {
  if (!url) return null;
  const m = url.match(/\/channel\/([^/?]+)/);
  return m ? m[1] : null;
}

function escapeHtml(s) {
  return String(s ?? '').replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' })[c]);
}

// 容錯 fetch：強制 JSON，502/非 JSON 都拋出友善訊息，自動重試一次
async function api(url, opts) {
  const tryOnce = async () => {
    let r;
    try {
      r = await fetch(url, opts);
    } catch (e) {
      throw new Error('NET');
    }
    const ct = r.headers.get('content-type') || '';
    let body;
    try {
      body = ct.includes('json') ? await r.json() : await r.text();
    } catch {
      throw new Error('PARSE');
    }
    if (!r.ok) {
      const msg = (body && typeof body === 'object' && body.error) ? body.error : `HTTP_${r.status}`;
      const err = new Error(msg);
      err.status = r.status;
      throw err;
    }
    if (typeof body === 'string') throw new Error('PARSE');
    return body;
  };
  try {
    return await tryOnce();
  } catch (e) {
    // 502 / 網路錯誤 / 解析錯誤 自動重試一次
    if (e.status === 502 || e.message === 'NET' || e.message === 'PARSE') {
      await new Promise(r => setTimeout(r, 600));
      try {
        return await tryOnce();
      } catch (e2) {
        if (e2.status === 502) throw new Error('影音來源繁忙，請過幾秒再試');
        if (e2.message === 'NET') throw new Error('網路連線失敗，請稍後再試');
        if (e2.message === 'PARSE') throw new Error('伺服器回應格式錯誤');
        throw e2;
      }
    }
    throw e;
  }
}

function toast(msg) {
  toastEl.textContent = msg;
  toastEl.hidden = false;
  clearTimeout(toast._t);
  toast._t = setTimeout(() => { toastEl.hidden = true; }, 2200);
}

// ===== Card =====
function videoCard(v) {
  const id = v.id || videoIdFromUrl(v.url);
  if (!id) return '';
  // 篩掉不感興趣 / 封鎖頻道
  if (Store.hidden.has(id)) return '';
  const channelId = channelIdFromUrl(v.uploaderUrl);
  if (channelId && Store.blocked.has(channelId)) return '';
  const titleStr = String(v.title || '');
  const isLive = v.isShort === false && (
    /\b(LIVE|live)\b/.test(titleStr) ||
    /🔴|🟢/.test(titleStr) ||
    /直播|24\s*小時|24h/i.test(titleStr)
  );
  const dur = fmtDuration(v.duration);
  const durBadge = isLive
    ? '<span class="live">LIVE</span>'
    : (dur ? `<span class="duration">${dur}</span>` : '');
  const dateText = isLive ? '正在直播' : fmtUploadDate(v.uploadedDate);
  const inWatchLater = Store.watchLater.has(id);
  const progress = Store.progress.get(id);
  const cardData = JSON.stringify({
    id, title: v.title, thumbnail: v.thumbnail,
    uploaderName: v.uploaderName, uploaderUrl: v.uploaderUrl,
    uploaderAvatar: v.uploaderAvatar, duration: v.duration,
  }).replace(/'/g, '&#39;');
  return `
    <div class="card" data-id="${id}" data-title="${escapeHtml(v.title)}" data-card='${cardData}'>
      <div class="thumb">
        <img loading="lazy" src="${proxyImg(v.thumbnail)}" alt="">
        ${durBadge}
        ${progress > 0 ? `<div class="progress-bar" style="width:${Math.min(100, progress)}%"></div>` : ''}
        <div class="card-actions">
          <button class="card-action card-action-more" data-act="more" data-channel-id="${channelId || ''}" title="更多" aria-label="更多">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 7a1.75 1.75 0 1 0 0 .001A1.75 1.75 0 0 0 12 7zm0 3.25A1.75 1.75 0 1 0 12 12a1.75 1.75 0 0 0 0-1.75zm0 5a1.75 1.75 0 1 0 0 .001A1.75 1.75 0 0 0 12 15.25z"/></svg>
          </button>
        </div>
      </div>
      <div class="meta">
        <div class="avatar" data-act="channel" data-channel-url="${v.uploaderUrl || ''}">${v.uploaderAvatar ? `<img src="${proxyImg(v.uploaderAvatar)}" alt="">` : ''}</div>
        <div class="info">
          <div class="title">${escapeHtml(v.title || '')}</div>
          <div class="sub">
            <span class="channel" data-act="channel" data-channel-url="${v.uploaderUrl || ''}">${escapeHtml(v.uploaderName || '')}${v.uploaderVerified ? ' ✓' : ''}</span>
            <span class="stats">
              ${v.views > 0 ? `${fmtViews(v.views)} 次觀看` : ''}
              ${v.views > 0 && dateText ? '<span class="dot"></span>' : ''}
              ${dateText}
            </span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function bindCards(root = page) {
  root.querySelectorAll('.card').forEach(c => {
    c.addEventListener('click', (e) => {
      const act = e.target.closest('[data-act]');
      if (act) {
        e.stopPropagation();
        const card = JSON.parse(c.dataset.card);
        if (act.dataset.act === 'watch-later') {
          const added = Store.watchLater.toggle(card);
          toast(added ? '已加入稍後觀看' : '已從稍後觀看移除');
          act.title = added ? '從稍後觀看移除' : '稍後觀看';
        } else if (act.dataset.act === 'share') {
          openShare(card.id, card.title);
        } else if (act.dataset.act === 'hide') {
          Store.hidden.add(card.id);
          c.style.display = 'none';
          toast('已標記為不感興趣');
        } else if (act.dataset.act === 'channel') {
          const chId = act.dataset.channelId || channelIdFromUrl(act.dataset.channelUrl);
          if (chId) navigate(`/channel/${chId}`);
          else toast('沒有頻道資訊');
        } else if (act.dataset.act === 'more') {
          openCtxMenu(e.clientX, e.clientY, c, card, act.dataset.channelId);
        }
        return;
      }
      navigate(`/watch?v=${c.dataset.id}`, c.dataset.title);
    });
  });
}

// ===== Page renderers =====
function showChipbar(show) {
  $('.chipbar').style.display = show ? '' : 'none';
  const subsStrip = $('#subsStrip');
  if (subsStrip) subsStrip.style.display = show && !subsStrip.hidden ? '' : 'none';
}
function showLoader(msg = t('load.loading')) { page.innerHTML = `<div class="loader">${msg}</div>`; }
function getChannelTabItems(data) {
  return (data?.relatedStreams || data?.videos || data?.items || [])
    .filter(v => v?.type === 'stream' || v?.url?.includes('/watch?v='));
}
function relabelRegionSelect() {
  const sel = $('#setRegion');
  if (!sel) return;
  [...sel.options].forEach(opt => {
    const code = opt.value;
    const flag = opt.textContent.trim().split(' ')[0] || '';
    opt.textContent = `${flag} ${t('sb.region.' + code)}`.trim();
  });
}

async function renderHome(region) {
  region = region || state.region;
  state.region = region;
  Store.set('region', region);
  $('#brandRegion') && ($('#brandRegion').textContent = region);
  setLangByRegion(region);
  relabelRegionSelect();
  showChipbar(true);
  $('.grid-wrap').style.padding = '';
  showLoader();
  setActive('region', region);
  setActive('route', 'home');
  // reset 無限滾動狀態
  state.feed = { region, page: 0, loading: false, end: false, seen: new Set() };
  try {
    const data = await api(`/api/trending?region=${region}`);
    let items = (data || []).map(v => ({
      id: videoIdFromUrl(v.url), url: v.url, title: v.title, thumbnail: v.thumbnail,
      uploaderName: v.uploaderName, uploaderAvatar: v.uploaderAvatar,
      uploaderUrl: v.uploaderUrl, uploaderVerified: v.uploaderVerified,
      duration: v.duration, views: v.views,
      uploadedDate: v.uploadedDate || v.uploaded || '',
    }));
    // 套用設定：隱藏短片
    if (Store.settings.all.hideShorts) {
      items = items.filter(v => !(v.duration > 0 && v.duration < 60));
    }
    items.forEach(v => state.feed.seen.add(v.id));
    renderGrid(items);
    // 把哨兵加到 page 末端，觸發無限載入
    appendFeedSentinel();
  } catch (e) {
    page.innerHTML = `<div class="empty"><div class="empty-icon">${MS_ICONS.warning}</div><div class="empty-title">載入失敗</div>${e.message}</div>`;
  }
}

function appendFeedSentinel() {
  const old = document.getElementById('feedSentinel');
  if (old) old.remove();
  const grid = page.querySelector('.grid');
  if (!grid) return;
  const sentinel = document.createElement('div');
  sentinel.id = 'feedSentinel';
  sentinel.style.cssText = 'grid-column:1/-1;height:80px;display:flex;align-items:center;justify-content:center;color:var(--text-2);';
  sentinel.textContent = '';
  grid.appendChild(sentinel);
  if (state.feedObserver) state.feedObserver.disconnect();
  state.feedObserver = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) loadMoreFeed();
  }, { rootMargin: '600px' });
  state.feedObserver.observe(sentinel);
}

async function loadMoreFeed() {
  const f = state.feed;
  if (!f || f.loading || f.end) return;
  if (location.pathname !== '/' || new URLSearchParams(location.search).get('search') || state.region !== f.region) return;
  f.loading = true;
  f.page += 1;
  const sentinel = document.getElementById('feedSentinel');
  if (sentinel) sentinel.textContent = '載入中…';
  try {
    const data = await api(`/api/feed?region=${f.region}&page=${f.page}`);
    let items = (data || []).map(v => ({
      id: videoIdFromUrl(v.url), url: v.url, title: v.title, thumbnail: v.thumbnail,
      uploaderName: v.uploaderName, uploaderAvatar: v.uploaderAvatar,
      uploaderUrl: v.uploaderUrl, uploaderVerified: v.uploaderVerified,
      duration: v.duration, views: v.views,
      uploadedDate: v.uploadedDate || v.uploaded || '',
    })).filter(v => v.id && !f.seen.has(v.id));
    if (Store.settings.all.hideShorts) {
      items = items.filter(v => !(v.duration > 0 && v.duration < 60));
    }
    items.forEach(v => f.seen.add(v.id));
    if (items.length === 0) {
      // 連續 3 頁空就停
      f._empty = (f._empty || 0) + 1;
      if (f._empty >= 3) { f.end = true; if (sentinel) sentinel.textContent = '已經到底了'; return; }
    } else {
      f._empty = 0;
      const grid = page.querySelector('.grid');
      if (grid) {
        const html = items.map(videoCard).join('');
        // 插在哨兵前面
        const tmp = document.createElement('div');
        tmp.innerHTML = html;
        while (tmp.firstChild) grid.insertBefore(tmp.firstChild, sentinel);
        bindCards();
      }
    }
    if (sentinel && !f.end) sentinel.textContent = '';
  } catch (e) {
    if (sentinel) sentinel.textContent = '載入失敗';
  } finally {
    f.loading = false;
  }
}

function appendSearchSentinel() {
  const old = document.getElementById('searchSentinel');
  if (old) old.remove();
  const grid = page.querySelector('.grid');
  if (!grid) return;
  const sentinel = document.createElement('div');
  sentinel.id = 'searchSentinel';
  sentinel.style.cssText = 'grid-column:1/-1;height:80px;display:flex;align-items:center;justify-content:center;color:var(--text-2);';
  sentinel.textContent = '';
  grid.appendChild(sentinel);
  if (state.searchObserver) state.searchObserver.disconnect();
  state.searchObserver = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) loadMoreSearch();
  }, { rootMargin: '600px' });
  state.searchObserver.observe(sentinel);
}

async function loadMoreSearch() {
  const s = state.search;
  if (!s || s.loading || s.end) return;
  if (location.pathname !== '/' || new URLSearchParams(location.search).get('search') !== s.q) return;
  s.loading = true;
  s.page += 1;
  const sentinel = document.getElementById('searchSentinel');
  if (sentinel) sentinel.textContent = '載入更多結果中…';
  try {
    const data = await api(`/api/search?q=${encodeURIComponent(s.q)}&page=${s.page}`);
    const items = (data.items || []).filter(v => (v.type === 'stream' || v.url?.includes('/watch?v='))).map(v => ({
      id: videoIdFromUrl(v.url), url: v.url, title: v.title, thumbnail: v.thumbnail,
      uploaderName: v.uploaderName, uploaderAvatar: v.uploaderAvatar,
      uploaderUrl: v.uploaderUrl, uploaderVerified: v.uploaderVerified,
      duration: v.duration, views: v.views,
      uploadedDate: v.uploadedDate || v.uploaded || '',
    })).filter(v => v.id && !s.seen.has(v.id));
    items.forEach(v => s.seen.add(v.id));
    if (items.length === 0) {
      s._empty = (s._empty || 0) + 1;
      if (s._empty >= 2) {
        s.end = true;
        if (sentinel) sentinel.textContent = '沒有更多結果了';
        return;
      }
    } else {
      s._empty = 0;
      const grid = page.querySelector('.grid');
      if (grid) {
        const html = items.map(videoCard).join('');
        const tmp = document.createElement('div');
        tmp.innerHTML = html;
        while (tmp.firstChild) grid.insertBefore(tmp.firstChild, sentinel);
        bindCards();
      }
      const countEl = page.querySelector('.section-title .count');
      if (countEl) countEl.textContent = s.seen.size;
    }
    if (sentinel && !s.end) sentinel.textContent = '';
  } catch (e) {
    if (sentinel) sentinel.textContent = '載入更多失敗';
  } finally {
    s.loading = false;
  }
}

function renderGrid(items, opts = {}) {
  const filtered = (items || []).filter(v => v.id || videoIdFromUrl(v.url));
  if (filtered.length === 0) {
    page.innerHTML = `<div class="empty"><div class="empty-icon">${opts.emptyIcon || MS_ICONS.search}</div><div class="empty-title">${opts.emptyTitle || '沒有結果'}</div>${opts.emptyMsg || ''}</div>`;
    return;
  }
  const cards = filtered.map(videoCard).join('');
  const header = opts.title ? `
    <h2 class="section-title">${opts.title}<span class="count">${filtered.length}</span></h2>
    ${opts.actions ? `<div class="section-actions">${opts.actions}</div>` : ''}
  ` : '';
  page.innerHTML = header + `<div class="grid${opts.shorts ? ' shorts' : ''}">${cards}</div>`;
  bindCards();
  if (opts.onActions) opts.onActions();
}

async function renderSearch(q) {
  showChipbar(true);
  $('.grid-wrap').style.padding = '';
  showLoader('搜尋中…');
  searchInput.value = q;
  if (mobileSearchInput) mobileSearchInput.value = q;
  document.title = `搜尋：${q} - YuTube`;
  state.search = { q, page: 1, loading: false, end: false, seen: new Set() };
  try {
    const data = await api('/api/search?q=' + encodeURIComponent(q) + '&page=1');
    const items = (data.items || []).filter(v => v.type === 'stream' || v.url?.includes('/watch?v=')).map(v => ({
      id: videoIdFromUrl(v.url), url: v.url, title: v.title, thumbnail: v.thumbnail,
      uploaderName: v.uploaderName, uploaderAvatar: v.uploaderAvatar,
      uploaderUrl: v.uploaderUrl, uploaderVerified: v.uploaderVerified,
      duration: v.duration, views: v.views,
      uploadedDate: v.uploadedDate || v.uploaded || '',
    })).filter(v => v.id);
    items.forEach(v => state.search.seen.add(v.id));
    renderGrid(items, { title: `搜尋結果：${escapeHtml(q)}` });
    if (items.length > 0) appendSearchSentinel();
  } catch (e) {
    page.innerHTML = `<div class="empty"><div class="empty-icon">${MS_ICONS.warning}</div><div class="empty-title">搜尋失敗</div>${e.message}</div>`;
  }
}

async function renderWatch(id) {
  showChipbar(false);
  $('.grid-wrap').style.padding = '0';
  showLoader();
  try {
    const data = await api(`/api/streams/${id}`);
    if (data.error) throw new Error(data.error);
    const related = (data.relatedStreams || []).filter(v => v.type === 'stream');
    const channelId = channelIdFromUrl(data.uploaderUrl);
    const channelAvatar = getChannelAvatarFromData(data);
    const liked = Store.liked.has(id);
    const inWL = Store.watchLater.has(id);
    const subbed = channelId && Store.subs.has(channelId);

    // 加入觀看紀錄
    Store.history.add({
      id, title: data.title, thumbnail: data.thumbnailUrl,
      uploaderName: data.uploader, uploaderAvatar: channelAvatar,
      uploaderUrl: data.uploaderUrl, duration: data.duration,
    });

    // 假進度：60% 就好（因為 iframe 拿不到真實進度）
    Store.progress.set(id, 60);

    const nextVideo = related[0]; // 下一部相關影片用於自動播放

    page.innerHTML = `
      <div class="watch">
        <div class="watch-main">
          <div class="player">
            <iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>
          </div>
          <h1 class="watch-title">${escapeHtml(data.title || '')}</h1>
          <div class="watch-channel">
            <div class="avatar watch-channel-avatar" data-act="channel" data-channel-url="${data.uploaderUrl || ''}" data-fallback-text="${escapeHtml(getFallbackInitial(data.uploader, 'Y'))}">${channelAvatar ? `<img src="${proxyImg(channelAvatar)}" alt="">` : escapeHtml(getFallbackInitial(data.uploader, 'Y'))}</div>
            <div class="ch-info">
              <div class="ch-name" data-act="channel" data-channel-url="${data.uploaderUrl || ''}">${escapeHtml(data.uploader || '')}${data.uploaderVerified ? ' ✓' : ''}</div>
              <div class="ch-subs">${data.uploaderSubscriberCount ? fmtViews(data.uploaderSubscriberCount) + ' 位訂閱者' : ''}</div>
            </div>
            <button class="subscribe-btn ${subbed ? 'subscribed' : ''}" id="subBtn">${subbed ? '已訂閱' : '訂閱'}</button>
            <div class="action-row">
              <div class="like-group">
                <button class="action-pill ${liked ? 'active' : ''}" id="likeBtn">
                  <svg viewBox="0 0 24 24"><path d="M18.77 11h-4.23l1.52-4.94C16.38 5.03 15.54 4 14.38 4c-.58 0-1.14.24-1.52.65L7 11h-4v10h17.43c1.06 0 1.98-.67 2.19-1.61l1.34-6c.27-1.24-.78-2.39-2.19-2.39zM7 20H4v-8h3v8z"/></svg>
                  <span>${fmtViews(data.likes) || '喜歡'}</span>
                </button>
                <div class="divider"></div>
                <button class="action-pill" id="dislikeBtn">
                  <svg viewBox="0 0 24 24" style="transform:rotate(180deg)"><path d="M18.77 11h-4.23l1.52-4.94C16.38 5.03 15.54 4 14.38 4c-.58 0-1.14.24-1.52.65L7 11h-4v10h17.43c1.06 0 1.98-.67 2.19-1.61l1.34-6c.27-1.24-.78-2.39-2.19-2.39zM7 20H4v-8h3v8z"/></svg>
                </button>
              </div>
              <button class="action-pill" id="shareBtn">
                <svg viewBox="0 0 24 24"><path d="M15 5.63L20.66 12 15 18.37V14h-1c-3.96 0-7.14 1-9.75 3.09 1.84-4.07 5.11-6.4 9.7-6.91l1.05-.12V5.63M14 3v7C6.45 10.74 3 16 2 21c2.5-3.5 6-5.1 12-5.1V21l9-9-9-9z"/></svg>
                分享
              </button>
              <button class="action-pill" id="saveBtn">
                <svg viewBox="0 0 24 24"><path d="M${inWL ? '19 13H5v-2h14v2z' : '11 17h2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3v-1h4V8h-2V7h-2v1h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1H9v2h2v1zm9-9h-1V3h-2v5H7V3H5v5H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H4V10h16v10z'}"/></svg>
                ${inWL ? '已儲存' : '儲存'}
              </button>
            </div>
          </div>
          <div class="description collapsed" id="desc">
            <div class="desc-stats">${fmtViews(data.views)} 次觀看 · ${fmtUploadDate(data.uploadDate)}</div>
            <div class="desc-body">${(data.description || '').replace(/\n/g, '<br>')}</div>
            <div class="more-btn">顯示完整內容</div>
          </div>

          <div class="comments" id="comments">
            <h3>留言</h3>
            <div class="comments-loader">載入留言中…</div>
          </div>
        </div>

        <aside class="related">
          <div class="watch-sidebar-head">
            <h3 style="font-size:14px;color:var(--text-2)">相關影片</h3>
            <label class="autoplay-row">
              自動播放
              <label class="switch"><input type="checkbox" id="autoplayToggle" ${Store.settings.all.autoplay ? 'checked' : ''}><span class="slider"></span></label>
            </label>
          </div>
          ${related.slice(0, 25).map(v => {
            const rid = videoIdFromUrl(v.url);
            if (!rid) return '';
            const dur = fmtDuration(v.duration);
            const card = JSON.stringify({ id: rid, title: v.title, thumbnail: v.thumbnail, uploaderName: v.uploaderName, uploaderUrl: v.uploaderUrl, uploaderAvatar: v.uploaderAvatar, duration: v.duration }).replace(/'/g, '&#39;');
            return `
              <div class="related-card card" data-id="${rid}" data-title="${escapeHtml(v.title)}" data-card='${card}'>
                <div class="thumb">
                  <img loading="lazy" src="${proxyImg(v.thumbnail)}" alt="">
                  ${(/\b(LIVE|live)\b|🔴|🟢|直播/.test(v.title || '') ? '<span class="live">LIVE</span>' : (dur ? `<span class="duration">${dur}</span>` : ''))}
                </div>
                <div class="info">
                  <div class="title">${escapeHtml(v.title || '')}</div>
                  <div class="sub">
                    <div class="channel">${escapeHtml(v.uploaderName || '')}${v.uploaderVerified ? ' ✓' : ''}</div>
                    <div class="stats">${v.views > 0 ? fmtViews(v.views) + ' 次觀看' : ''} ${v.uploadedDate ? ' · ' + fmtUploadDate(v.uploadedDate) : ''}</div>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </aside>
      </div>
    `;
    bindCards();
    page.querySelectorAll('.watch-channel [data-act="channel"]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        const chId = el.dataset.channelId || channelIdFromUrl(el.dataset.channelUrl);
        if (chId) navigate(`/channel/${chId}`);
        else toast('沒有頻道資訊');
      });
    });
    const watchAvatarEl = page.querySelector('.watch-channel .avatar');
    if (watchAvatarEl && channelAvatar) {
      setAvatarContent(watchAvatarEl, channelAvatar, watchAvatarEl.dataset.fallbackText || 'Y');
    }
    if (!channelAvatar && channelId) {
      (async () => {
        try {
          const fallbackAvatar = await hydrateChannelAvatar(watchAvatarEl, channelId);
          if (!fallbackAvatar) return;
          const historyItem = { id, title: data.title, thumbnail: data.thumbnailUrl, uploaderName: data.uploader, uploaderAvatar: fallbackAvatar, uploaderUrl: data.uploaderUrl, duration: data.duration };
          Store.history.add(historyItem);
        } catch {}
      })();
    }
    window.scrollTo(0, 0);

    // ===== Bind watch actions =====
    $('#likeBtn').addEventListener('click', () => {
      const card = { id, title: data.title, thumbnail: data.thumbnailUrl, uploaderName: data.uploader, uploaderAvatar: data.uploaderAvatar, uploaderUrl: data.uploaderUrl, duration: data.duration };
      const liked = Store.liked.toggle(card);
      $('#likeBtn').classList.toggle('active', liked);
      toast(liked ? '已加入喜歡的影片' : '已從喜歡移除');
    });
    $('#dislikeBtn').addEventListener('click', () => toast('已記錄不喜歡 ¯\\_(ツ)_/¯'));
    $('#shareBtn').addEventListener('click', () => openShare(id, data.title));
    $('#saveBtn').addEventListener('click', () => {
      const card = { id, title: data.title, thumbnail: data.thumbnailUrl, uploaderName: data.uploader, uploaderAvatar: data.uploaderAvatar, uploaderUrl: data.uploaderUrl, duration: data.duration };
      const added = Store.watchLater.toggle(card);
      toast(added ? '已儲存到稍後觀看' : '已從稍後觀看移除');
      const btn = $('#saveBtn');
      btn.innerHTML = btn.innerHTML.replace(added ? '儲存' : '已儲存', added ? '已儲存' : '儲存');
    });
    $('#subBtn').addEventListener('click', () => {
      if (!channelId) return toast('沒有頻道資訊');
      const ch = { id: channelId, name: data.uploader, avatar: data.uploaderAvatar, url: data.uploaderUrl };
      const subbed = Store.subs.toggle(ch);
      const btn = $('#subBtn');
      btn.classList.toggle('subscribed', subbed);
      btn.textContent = subbed ? '已訂閱' : '訂閱';
      toast(subbed ? `已訂閱 ${data.uploader}` : `已取消訂閱 ${data.uploader}`);
      renderSubsList();
    });
    $('#desc').addEventListener('click', () => $('#desc').classList.toggle('collapsed'));

    // Autoplay toggle
    const autoToggle = $('#autoplayToggle');
    if (autoToggle) {
      autoToggle.addEventListener('change', () => {
        Store.settings.set('autoplay', autoToggle.checked);
        toast(autoToggle.checked ? '已開啟自動播放' : '已關閉自動播放');
      });
    }

    // 自動播放下一部：30 秒後（簡化版，因為 iframe 拿不到 ended 事件）
    if (Store.settings.all.autoplay && nextVideo) {
      const nextId = videoIdFromUrl(nextVideo.url);
      const dur = data.duration > 0 ? Math.min(data.duration * 1000, 30 * 60 * 1000) : 5 * 60 * 1000;
      clearTimeout(state.autoplayTimer);
      state.autoplayTimer = setTimeout(() => {
        if (location.pathname === '/watch' && new URLSearchParams(location.search).get('v') === id) {
          if (nextId && Store.settings.all.autoplay) {
            navigate(`/watch?v=${nextId}`);
          }
        }
      }, dur);
    }

    // 載入評論
    loadComments(id);

    document.title = (data.title ? data.title + ' - ' : '') + 'YuTube';
  } catch (e) {
    page.innerHTML = `<div class="empty"><div class="empty-icon">⚠️</div><div class="empty-title">載入失敗</div>${escapeHtml(e.message)}</div>`;
  }
}

async function loadComments(id) {
  try {
    const data = await api(`/api/comments/${id}`);
    const comments = data.comments || [];
    if (comments.length === 0) {
      $('#comments').innerHTML = `<h3>留言</h3><div class="empty" style="padding:20px">沒有留言</div>`;
      return;
    }
    $('#comments').innerHTML = `
      <h3>${data.commentCount ? fmtViews(data.commentCount) + ' 則' : ''}留言</h3>
      ${comments.slice(0, 30).map(c => `
        <div class="comment">
          <div class="avatar">${c.thumbnail ? `<img src="${proxyImg(c.thumbnail)}" alt="">` : ''}</div>
          <div class="c-body">
            <div class="c-head">
              <span class="c-author">${escapeHtml(c.author || '')}${c.verified ? ' ✓' : ''}</span>
              <span class="c-time">${escapeHtml(c.commentedTime || '')}</span>
            </div>
            <div class="c-text">${escapeHtml(c.commentText || '')}</div>
            <div class="c-stats">
              <span>${MS_ICONS.thumb_up} ${fmtViews(c.likeCount) || 0}</span>
              ${c.replyCount ? `<span>💬 ${c.replyCount} 則回覆</span>` : ''}
            </div>
          </div>
        </div>
      `).join('')}
    `;
  } catch (e) {
    $('#comments').innerHTML = `<h3>留言</h3><div class="empty" style="padding:20px">無法載入留言</div>`;
  }
}

async function renderChannel(channelId, tab = 'videos') {
  showChipbar(false);
  $('.grid-wrap').style.padding = '24px';
  showLoader();
  // 先抓基本資料（videos tab 一定有 banner/avatar/name）
  let baseInfo = state._chCache?.[`${channelId}:videos`];
  try {
    if (!baseInfo) {
      baseInfo = await getChannelCached(channelId, 'videos');
    }
    if (baseInfo.error) throw new Error(baseInfo.error);
    const subbed = Store.subs.has(channelId);

    // 當前 tab 內容
    let tabData;
    let items = [];
    if (tab === 'videos') {
      tabData = baseInfo;
    } else if (tab === 'about') {
      tabData = baseInfo;
    } else {
      // live or shorts → 多打一次
      const apiTab = tab === 'live' ? 'streams' : 'shorts';
      try {
        tabData = await api(`/api/channel/${channelId}?tab=${apiTab}`);
      } catch {
        tabData = { relatedStreams: [] };
      }
    }
    items = getChannelTabItems(tabData);

    const tabsHtml = `
      <div class="channel-tabs">
        <button class="ch-tab ${tab==='videos'?'active':''}" data-ch-tab="videos">影片</button>
        <button class="ch-tab ${tab==='live'?'active':''}" data-ch-tab="live">直播</button>
        <button class="ch-tab ${tab==='shorts'?'active':''}" data-ch-tab="shorts">Shorts</button>
        <button class="ch-tab ${tab==='about'?'active':''}" data-ch-tab="about">關於</button>
      </div>
    `;

    let bodyHtml;
    if (tab === 'about') {
      bodyHtml = `
        <div class="empty" style="padding:24px;text-align:left;max-width:800px">
          <h3 style="margin-bottom:12px">說明</h3>
          <p style="color:var(--text-2);line-height:1.6;white-space:pre-wrap">${escapeHtml(baseInfo.description || '此頻道尚未提供說明')}</p>
          <h3 style="margin-top:24px;margin-bottom:12px">統計資料</h3>
          <p style="color:var(--text-2)">訂閱者：${fmtViews(baseInfo.subscriberCount)} 位</p>
          <p style="color:var(--text-2)">影片數：${(baseInfo.relatedStreams || []).length}</p>
        </div>
      `;
    } else if (items.length === 0) {
      const emptyMsg = tab === 'live' ? '此頻道沒有直播' : tab === 'shorts' ? '此頻道沒有 Shorts' : '沒有內容';
      bodyHtml = `<div class="empty"><div class="empty-icon">${MS_ICONS.tv}</div><div class="empty-title">${emptyMsg}</div></div>`;
    } else {
      const cls = tab === 'shorts' ? 'grid shorts' : 'grid';
      bodyHtml = `<div class="${cls}">${items.map(videoCard).join('')}</div>`;
    }

    page.innerHTML = `
      ${baseInfo.bannerUrl ? `<div class="channel-banner"><img src="${proxyImg(baseInfo.bannerUrl)}" alt=""></div>` : ''}
      <div class="channel-header">
        <div class="channel-avatar-large">${baseInfo.avatarUrl ? `<img src="${proxyImg(baseInfo.avatarUrl)}" alt="">` : ''}</div>
        <div class="channel-info">
          <h1>${escapeHtml(baseInfo.name || '')}${baseInfo.verified ? ' ✓' : ''}</h1>
          <div class="ch-stats">${fmtViews(baseInfo.subscriberCount)} 位訂閱者 · ${(baseInfo.relatedStreams || []).length} 部影片</div>
          <div class="ch-desc">${escapeHtml((baseInfo.description || '').slice(0, 200))}</div>
        </div>
        <button class="subscribe-btn ${subbed ? 'subscribed' : ''}" id="chSubBtn">${subbed ? '已訂閱' : '訂閱'}</button>
      </div>
      ${tabsHtml}
      ${bodyHtml}
    `;
    bindCards();

    // tab 切換
    page.querySelectorAll('.ch-tab').forEach(t => {
      t.addEventListener('click', () => navigate(`/channel/${channelId}?tab=${t.dataset.chTab}`));
    });

    $('#chSubBtn').addEventListener('click', () => {
      const ch = { id: channelId, name: baseInfo.name, avatar: baseInfo.avatarUrl, url: `/channel/${channelId}` };
      const s = Store.subs.toggle(ch);
      const btn = $('#chSubBtn');
      btn.classList.toggle('subscribed', s);
      btn.textContent = s ? '已訂閱' : '訂閱';
      toast(s ? `已訂閱 ${baseInfo.name}` : `已取消訂閱 ${baseInfo.name}`);
      renderSubsList();
    });
    document.title = baseInfo.name + ' - YuTube';
  } catch (e) {
    page.innerHTML = `<div class="empty"><div class="empty-icon">${MS_ICONS.warning}</div><div class="empty-title">載入頻道失敗</div>${escapeHtml(e.message)}</div>`;
  }
}

function renderHistory() {
  showChipbar(false);
  $('.grid-wrap').style.padding = '24px';
  setActive('route', 'history');
  const list = Store.history.list();
  renderGrid(list, {
    title: '觀看紀錄',
    actions: list.length ? `<button class="action-pill" id="clearHistory"><svg viewBox="0 0 24 24"><path d="M11 17H9V8h2v9zm4 0h-2V8h2v9zM6 4v1h12V4H6zm-1 4v13h14V8H5zm12 12H6V9h11v11z"/></svg>清除全部</button>` : '',
    emptyIcon: MS_ICONS.history, emptyTitle: '沒有觀看紀錄', emptyMsg: '看過的影片會在這裡',
  });
  if (list.length) {
    $('#clearHistory').addEventListener('click', () => {
      if (confirm('確定要清除全部觀看紀錄？')) {
        Store.history.clear();
        toast('觀看紀錄已清除');
        renderHistory();
      }
    });
  }
  document.title = '觀看紀錄 - YuTube';
}

// 媒體庫圖示 SVG (Material Symbols, 24×24)
const MS_ICONS = {
  history: '<svg viewBox="0 -960 960 960" fill="currentColor"><path d="M480-120q-138 0-240.5-91.5T122-440h82q14 104 92.5 172T480-200q117 0 198.5-81.5T760-480q0-117-81.5-198.5T480-760q-69 0-129 32t-101 88h110v80H120v-240h80v94q51-64 124.5-99T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z"/></svg>',
  schedule: '<svg viewBox="0 -960 960 960" fill="currentColor"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>',
  thumb_up: '<svg viewBox="0 -960 960 960" fill="currentColor"><path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z"/></svg>',
  subscriptions: '<svg viewBox="0 -960 960 960" fill="currentColor"><path d="M160-120q-33 0-56.5-23.5T80-200v-360h800v360q0 33-23.5 56.5T800-120H160Zm0-80h640v-280H160v280Zm240-40 200-120-200-120v240ZM200-640v-80h560v80H200Zm120-120v-80h320v80H320ZM160-480v280-280Z"/></svg>',
  search: '<svg viewBox="0 -960 960 960" fill="currentColor"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>',
  warning: '<svg viewBox="0 -960 960 960" fill="currentColor"><path d="m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z"/></svg>',
  tv: '<svg viewBox="0 -960 960 960" fill="currentColor"><path d="M320-120v-80h80v-80H160q-33 0-56.5-23.5T80-360v-400q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v400q0 33-23.5 56.5T800-280H560v80h80v80H320ZM160-360h640v-400H160v400Zm0 0v-400 400Z"/></svg>',
};

function renderLibrary(tab) {
  showChipbar(false);
  $('.grid-wrap').style.padding = '24px';
  setActive('route', tab || 'library');
  let list, title, icon, emptyMsg;
  if (tab === 'watch-later') {
    list = Store.watchLater.list();
    title = '稍後觀看'; icon = MS_ICONS.schedule; emptyMsg = '在影片上點時鐘按鈕加入稍後觀看';
  } else if (tab === 'liked') {
    list = Store.liked.list();
    title = '喜歡的影片'; icon = MS_ICONS.thumb_up; emptyMsg = '在影片上點喜歡會加入這裡';
  } else if (tab === 'subs') {
    list = []; // TODO: 從訂閱頻道抓最新
    title = '訂閱內容';
    const subs = Store.subs.list();
    if (subs.length === 0) {
      page.innerHTML = `<div class="empty"><div class="empty-icon">${MS_ICONS.subscriptions}</div><div class="empty-title">還沒有訂閱任何頻道</div>到喜歡的頻道按訂閱就會出現在這裡</div>`;
      document.title = '訂閱內容 - YuTube';
      return;
    }
    page.innerHTML = `
      <h2 class="section-title">訂閱內容<span class="count">${subs.length}</span></h2>
      <div class="grid">
        ${subs.map(s => {
          const cid = s.id || channelIdFromUrl(s.url);
          return `
            <div class="card" data-channel-id="${cid}" style="text-align:center">
              <div class="thumb" style="aspect-ratio:1;border-radius:50%;max-width:200px;margin:0 auto">
                ${s.avatar ? `<img src="${proxyImg(s.avatar)}" alt="">` : ''}
              </div>
              <div class="meta" style="justify-content:center">
                <div class="info" style="text-align:center"><div class="title">${escapeHtml(s.name)}</div></div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
    page.querySelectorAll('.card[data-channel-id]').forEach(c => {
      c.addEventListener('click', () => navigate(`/channel/${c.dataset.channelId}`));
    });
    document.title = '訂閱內容 - YuTube';
    return;
  } else {
    // library 主頁：總覽
    page.innerHTML = `
      <h2 class="section-title">媒體庫</h2>
      <div class="library-overview">
        <button class="library-card" data-link="/history">
          <div class="lib-icon">${MS_ICONS.history}</div>
          <div class="lib-text">
            <div class="lib-title">觀看紀錄</div>
            <div class="lib-meta">${Store.history.list().length} 部影片</div>
          </div>
        </button>
        <button class="library-card" data-link="/library?tab=watch-later">
          <div class="lib-icon">${MS_ICONS.schedule}</div>
          <div class="lib-text">
            <div class="lib-title">稍後觀看</div>
            <div class="lib-meta">${Store.watchLater.list().length} 部影片</div>
          </div>
        </button>
        <button class="library-card" data-link="/library?tab=liked">
          <div class="lib-icon">${MS_ICONS.thumb_up}</div>
          <div class="lib-text">
            <div class="lib-title">喜歡的影片</div>
            <div class="lib-meta">${Store.liked.list().length} 部影片</div>
          </div>
        </button>
        <button class="library-card" data-link="/library?tab=subs">
          <div class="lib-icon">${MS_ICONS.subscriptions}</div>
          <div class="lib-text">
            <div class="lib-title">訂閱頻道</div>
            <div class="lib-meta">${Store.subs.list().length} 個頻道</div>
          </div>
        </button>
      </div>
    `;
    document.title = '媒體庫 - YuTube';
    return;
  }
  renderGrid(list, { title, emptyIcon: icon, emptyTitle: `沒有${title}`, emptyMsg });
  document.title = `${title} - YuTube`;
}

function renderShorts() {
  showChipbar(false);
  $('.grid-wrap').style.padding = '';
  setActive('route', 'shorts');
  showLoader();
  document.title = 'Shorts - YuTube';
  api(`/api/shorts?region=${state.region}`).then(data => {
    const arr = Array.isArray(data) ? data : (data?.items || []);
    const items = arr.map(v => ({
      id: videoIdFromUrl(v.url),
      url: v.url,
      title: v.title,
      thumbnail: v.thumbnail,
      uploaderName: v.uploaderName,
      uploaderAvatar: v.uploaderAvatar,
      uploaderUrl: v.uploaderUrl,
      duration: v.duration,
      views: v.views,
    })).filter(v => v.id);
    if (items.length === 0) {
      page.innerHTML = `<div class="empty"><div class="empty-icon">⚡</div><div class="empty-title">目前沒有 Shorts</div>等等再來看看</div>`;
      return;
    }
    mountShortsViewer(items);
  }).catch(() => {
    page.innerHTML = `<div class="empty"><div class="empty-icon">${MS_ICONS.warning}</div><div class="empty-title">載入失敗</div></div>`;
  });
}

function mountShortsViewer(items) {
  // 把 grid-wrap 清掉，改成全螢幕 viewer 直接掛在 main 上
  page.innerHTML = '';
  // 先移除舊的 viewer
  document.getElementById('shortsViewer')?.remove();

  const viewer = document.createElement('div');
  viewer.className = 'shorts-viewer';
  viewer.id = 'shortsViewer';
  viewer.innerHTML = items.map((v, idx) => buildShortsSlide(v, idx)).join('');
  document.querySelector('.content').appendChild(viewer);

  // 為每張卡片掛事件
  let activeIdx = 0;
  const slides = viewer.querySelectorAll('.shorts-slide');

  function activateSlide(idx) {
    if (idx < 0 || idx >= slides.length) return;
    activeIdx = idx;
    slides.forEach((sl, i) => {
      const stage = sl.querySelector('.shorts-stage');
      const id = sl.dataset.id;
      if (i === idx) {
        // 替換 poster 為 iframe（自動播放、無聲、循環）
        if (!stage.querySelector('iframe')) {
          stage.querySelector('.shorts-poster')?.remove();
          const iframe = document.createElement('iframe');
          iframe.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&playsinline=1&loop=1&playlist=${id}&modestbranding=1&rel=0&controls=0&showinfo=0&iv_load_policy=3&disablekb=1&fs=0`;
          iframe.allow = 'autoplay; encrypted-media; picture-in-picture';
          iframe.allowFullscreen = true;
          stage.appendChild(iframe);
        }
        // 加入觀看紀錄
        const item = items[i];
        Store.history.add({
          id: item.id, title: item.title, thumbnail: item.thumbnail,
          uploaderName: item.uploaderName, uploaderUrl: item.uploaderUrl,
          duration: item.duration,
        });
      } else {
        // 非當前 slide：把 iframe 拔掉換回 poster，避免多影片同時播
        const ifr = stage.querySelector('iframe');
        if (ifr) {
          ifr.remove();
          const poster = document.createElement('div');
          poster.className = 'shorts-poster';
          poster.style.backgroundImage = `url('${proxyImg(items[i].thumbnail)}')`;
          poster.innerHTML = `<div class="play-icon"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>`;
          stage.insertBefore(poster, stage.firstChild);
        }
      }
    });
  }

  // 滑動 snap 偵測：以中心點判斷哪一片是 active
  let scrollTimer;
  viewer.addEventListener('scroll', () => {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      const center = viewer.scrollTop + viewer.clientHeight / 2;
      let best = 0, bestDist = Infinity;
      slides.forEach((sl, i) => {
        const dist = Math.abs(sl.offsetTop + sl.offsetHeight / 2 - center);
        if (dist < bestDist) { bestDist = dist; best = i; }
      });
      if (best !== activeIdx) activateSlide(best);
    }, 80);
  });

  // 上下箭頭
  viewer.addEventListener('click', e => {
    const nav = e.target.closest('.shorts-nav button');
    if (nav) {
      const dir = nav.dataset.dir;
      const target = dir === 'up' ? activeIdx - 1 : activeIdx + 1;
      if (target >= 0 && target < slides.length) {
        slides[target].scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }
    // 點擊頻道名/頭像 → 跳到頻道
    const chBtn = e.target.closest('[data-act="channel"]');
    if (chBtn) {
      const cid = chBtn.dataset.channelId;
      if (cid) navigate(`/channel/${cid}`);
      else toast('沒有頻道資訊');
      return;
    }
    // 訂閱
    const subBtn = e.target.closest('[data-act="subscribe"]');
    if (subBtn) {
      const cid = subBtn.dataset.channelId;
      if (!cid) return toast('沒有頻道資訊');
      const item = items[activeIdx];
      const channel = { id: cid, name: item.uploaderName, avatar: item.uploaderAvatar, url: item.uploaderUrl };
      const subbed = Store.subs.toggle(channel);
      subBtn.classList.toggle('subbed', subbed);
      subBtn.textContent = subbed ? '已訂閱' : '訂閱';
      toast(subbed ? `已訂閱 ${item.uploaderName}` : `已取消訂閱`);
      return;
    }
    // 喜歡
    const likeBtn = e.target.closest('[data-act="like"]');
    if (likeBtn) {
      const idx = +likeBtn.closest('.shorts-slide').dataset.idx;
      const item = items[idx];
      const liked = Store.liked.toggle({ id: item.id, title: item.title, thumbnail: item.thumbnail, uploaderName: item.uploaderName, uploaderUrl: item.uploaderUrl, duration: item.duration });
      likeBtn.classList.toggle('active', liked);
      toast(liked ? '已加入喜歡' : '已從喜歡移除');
      return;
    }
    // 稍後觀看
    const wlBtn = e.target.closest('[data-act="later"]');
    if (wlBtn) {
      const idx = +wlBtn.closest('.shorts-slide').dataset.idx;
      const item = items[idx];
      const added = Store.watchLater.toggle({ id: item.id, title: item.title, thumbnail: item.thumbnail, uploaderName: item.uploaderName, uploaderUrl: item.uploaderUrl, duration: item.duration });
      wlBtn.classList.toggle('active', added);
      toast(added ? '已加入稍後觀看' : '已從稍後觀看移除');
      return;
    }
    // 分享
    const shareBtn = e.target.closest('[data-act="share"]');
    if (shareBtn) {
      const idx = +shareBtn.closest('.shorts-slide').dataset.idx;
      const url = `${location.origin}/watch?v=${items[idx].id}`;
      navigator.clipboard?.writeText(url);
      toast('已複製連結');
      return;
    }
    // 開啟詳細頁
    const watchBtn = e.target.closest('[data-act="watch"]');
    if (watchBtn) {
      const idx = +watchBtn.closest('.shorts-slide').dataset.idx;
      navigate(`/watch?v=${items[idx].id}`);
      return;
    }
    // 點 poster 直接開播該片
    const poster = e.target.closest('.shorts-poster');
    if (poster) {
      const idx = +poster.closest('.shorts-slide').dataset.idx;
      activateSlide(idx);
    }
  });

  // 鍵盤上下切換
  const keyHandler = (e) => {
    if (location.pathname !== '/shorts') return;
    if (e.target.matches('input, textarea')) return;
    if (e.key === 'ArrowUp' || e.key === 'k') {
      e.preventDefault();
      slides[Math.max(0, activeIdx - 1)]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (e.key === 'ArrowDown' || e.key === 'j' || e.key === ' ') {
      e.preventDefault();
      slides[Math.min(slides.length - 1, activeIdx + 1)]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  document.addEventListener('keydown', keyHandler);
  // 退出時把 listener 移掉（藉由 MutationObserver 偵測 viewer 被移除）
  const obs = new MutationObserver(() => {
    if (!document.getElementById('shortsViewer')) {
      document.removeEventListener('keydown', keyHandler);
      obs.disconnect();
    }
  });
  obs.observe(document.querySelector('.content'), { childList: true });

  // 啟動第一片
  activateSlide(0);
}

function buildShortsSlide(v, idx) {
  const cid = channelIdFromUrl(v.uploaderUrl);
  const subbed = cid && Store.subs.has(cid);
  const liked = Store.liked.has(v.id);
  const inWL = Store.watchLater.has(v.id);
  const views = v.views ? fmtViews(v.views) : '';
  return `
    <div class="shorts-slide" data-id="${v.id}" data-idx="${idx}">
      <div class="shorts-stage">
        <div class="shorts-poster" style="background-image:url('${proxyImg(v.thumbnail)}')">
          <div class="play-icon"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>
        </div>
        <div class="shorts-info">
          <div class="si-channel">
            <div class="si-avatar" data-act="channel" data-channel-id="${cid || ''}" style="cursor:pointer">
              ${v.uploaderAvatar ? `<img src="${proxyImg(v.uploaderAvatar)}" alt="">` : ''}
            </div>
            <span class="si-name" data-act="channel" data-channel-id="${cid || ''}" style="cursor:pointer">${escapeHtml(v.uploaderName || '')}</span>
            <button class="si-subscribe ${subbed ? 'subbed' : ''}" data-act="subscribe" data-channel-id="${cid || ''}">${subbed ? '已訂閱' : '訂閱'}</button>
          </div>
          <div class="si-title">${escapeHtml(v.title || '')}</div>
        </div>
        <div class="shorts-actions">
          <div class="shorts-action-wrap">
            <button class="${liked ? 'active' : ''}" data-act="like" title="喜歡">
              <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </button>
          </div>
          <div class="shorts-action-wrap">
            <button data-act="watch" title="開啟完整版">
              <svg viewBox="0 0 24 24"><path d="M21.582 6.186a2.506 2.506 0 0 0-1.768-1.768C18.254 4 12 4 12 4s-6.254 0-7.814.418a2.506 2.506 0 0 0-1.768 1.768C2 7.746 2 12 2 12s0 4.254.418 5.814a2.506 2.506 0 0 0 1.768 1.768C5.746 20 12 20 12 20s6.254 0 7.814-.418a2.506 2.506 0 0 0 1.768-1.768C22 16.254 22 12 22 12s0-4.254-.418-5.814zM10 15.464V8.536L16 12l-6 3.464z"/></svg>
            </button>
          </div>
          <div class="shorts-action-wrap">
            <button class="${inWL ? 'active' : ''}" data-act="later" title="稍後觀看">
              <svg viewBox="0 0 24 24"><path d="M14.97 16.95L10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12 6.49 2 12 2s10 4.49 10 10z"/></svg>
            </button>
          </div>
          <div class="shorts-action-wrap">
            <button data-act="share" title="分享">
              <svg viewBox="0 0 24 24"><path d="M14 9V5l7 7-7 7v-4.1c-5 0-8.5 1.6-11 5.1 1-5 4-10 11-11z"/></svg>
            </button>
          </div>
          ${views ? `<div class="sa-count">${views}</div>` : ''}
        </div>
        <div class="shorts-nav">
          <button data-dir="up" title="上一個 (↑)" aria-label="上一個短片">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg>
          </button>
          <button data-dir="down" title="下一個 (↓)" aria-label="下一個短片">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
          </button>
        </div>
      </div>
    </div>
  `;
}

// ===== Sidebar subscriptions =====
function renderSubsList() {
  const container = $('#subsList');
  const strip = $('#subsStrip');
  const track = $('#subsTrack');
  const subs = Store.subs.list();
  if (subs.length === 0) {
    container.innerHTML = '';
    if (track) track.innerHTML = '';
    if (strip) {
      strip.hidden = true;
      strip.style.display = 'none';
    }
    return;
  }
  container.innerHTML = `<div class="sb-title">訂閱內容</div>` +
    subs.slice(0, 10).map(s => {
      const cid = s.id || channelIdFromUrl(s.url);
      return `
        <div class="sb-item" data-link="/channel/${cid}">
          <div class="sb-channel-avatar">${s.avatar ? `<img src="${proxyImg(s.avatar)}" alt="">` : ''}</div>
          <span class="sb-label">${escapeHtml(s.name).slice(0, 20)}</span>
        </div>
      `;
    }).join('');
  if (track && strip) {
    const currentPath = location.pathname;
    track.innerHTML = subs.map(s => {
      const cid = s.id || channelIdFromUrl(s.url);
      const active = currentPath === `/channel/${cid}` ? ' active' : '';
      const fallback = escapeHtml(getFallbackInitial(s.name, '頻'));
      return `
        <button class="subs-pill${active}" data-link="/channel/${cid}" title="${escapeHtml(s.name || '')}">
          <span class="subs-pill-avatar">${s.avatar ? `<img src="${proxyImg(s.avatar)}" alt="">` : fallback}</span>
          <span class="subs-pill-name">${escapeHtml(s.name || '')}</span>
        </button>
      `;
    }).join('');
    strip.hidden = false;
    strip.style.display = $('.chipbar').style.display === 'none' ? 'none' : '';
    track.querySelectorAll('.subs-pill-avatar img').forEach(img => {
      img.onerror = () => {
        const wrap = img.closest('.subs-pill-avatar');
        if (wrap) wrap.textContent = wrap.parentElement?.title?.trim().charAt(0) || '頻';
      };
    });
    updateSubsScrollBtns();
  }
}

function setActive(type, value) {
  // 任何切換都先把所有可能的 active 清掉，避免殘留
  $$('.sb-item.active').forEach(el => el.classList.remove('active'));
  $$('.mobile-nav-item.active').forEach(el => el.classList.remove('active'));
  if (type === 'route') {
    $$('.sb-item[data-route]').forEach(el => {
      if (el.dataset.route === value) el.classList.add('active');
    });
    $$('.mobile-nav-item[data-route]').forEach(el => {
      if (el.dataset.route === value) el.classList.add('active');
    });
  } else if (type === 'region') {
    $$('.sb-item[data-region]').forEach(el => {
      if (el.dataset.region === value) el.classList.add('active');
    });
  } else if (type === 'cat') {
    $$('.sb-item[data-cat]').forEach(el => {
      if (el.dataset.cat === value) el.classList.add('active');
    });
  }
}

// ===== Share =====
function openShare(id, title) {
  const url = `${location.origin}/watch?v=${id}`;
  shareModal.hidden = false;
  $('#shareLink').innerHTML = `<input value="${url}" readonly><button class="action-pill" data-share="copy">複製</button>`;
  $('#shareLink button').addEventListener('click', () => doShare('copy', id, title));
  shareModal.querySelectorAll('.share-btn').forEach(b => {
    b.onclick = () => doShare(b.dataset.share, id, title);
  });
}

function doShare(type, id, title) {
  const url = `${location.origin}/watch?v=${id}`;
  const t = encodeURIComponent(title || 'YuTube');
  const u = encodeURIComponent(url);
  const map = {
    x: `https://twitter.com/intent/tweet?text=${t}&url=${u}`,
    fb: `https://www.facebook.com/sharer/sharer.php?u=${u}`,
    line: `https://social-plugins.line.me/lineit/share?url=${u}&text=${t}`,
    telegram: `https://t.me/share/url?url=${u}&text=${t}`,
    whatsapp: `https://api.whatsapp.com/send?text=${t}%20${u}`,
  };
  if (type === 'copy') {
    navigator.clipboard.writeText(url).then(() => toast('連結已複製'));
  } else if (map[type]) {
    window.open(map[type], '_blank', 'noopener,noreferrer');
  }
}

// ===== Search suggestions =====
let suggestT;
function loadSuggest(q) {
  clearTimeout(suggestT);
  if (!q.trim()) {
    suggest.hidden = true;
    if (mobileSuggest) mobileSuggest.innerHTML = '';
    return;
  }
  suggestT = setTimeout(async () => {
    try {
      const items = await api('/api/suggest?q=' + encodeURIComponent(q));
      if (!Array.isArray(items) || items.length === 0) {
        suggest.hidden = true;
        if (mobileSuggest) mobileSuggest.innerHTML = '';
        return;
      }
      suggest.innerHTML = items.slice(0, 10).map(s => `
        <div class="suggest-item" data-q="${escapeHtml(s)}">
          <svg viewBox="0 0 24 24"><path d="M20.87 20.17l-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/></svg>
          ${escapeHtml(s)}
        </div>
      `).join('');
      suggest.hidden = false;
      syncMobileSuggestFromDesktop();
      const bindSuggestItems = (root, onPick) => {
        root.querySelectorAll('.suggest-item').forEach(el => {
          el.addEventListener('click', () => onPick(el.dataset.q));
        });
      };
      bindSuggestItems(suggest, (picked) => {
        searchInput.value = picked;
        if (mobileSearchInput) mobileSearchInput.value = picked;
        suggest.hidden = true;
        closeMobileSearch();
        navigate(`/?search=${encodeURIComponent(picked)}`);
      });
      if (mobileSuggest) {
        bindSuggestItems(mobileSuggest, (picked) => {
          searchInput.value = picked;
          mobileSearchInput.value = picked;
          suggest.hidden = true;
          closeMobileSearch();
          navigate(`/?search=${encodeURIComponent(picked)}`);
        });
      }
    } catch {
      suggest.hidden = true;
      if (mobileSuggest) mobileSuggest.innerHTML = '';
    }
  }, 150);
}

// ===== Routing =====
function navigate(path, title) {
  history.pushState({ path }, '', path);
  if (title) document.title = title + ' - YuTube';
  route();
}

function route() {
  const params = new URLSearchParams(location.search);
  const search = params.get('search');
  const tab = params.get('tab');
  const v = params.get('v');
  const path = location.pathname;

  suggest.hidden = true;
  // 切換頁面時清掉自動播放計時器
  clearTimeout(state.autoplayTimer);
  if (state.feedObserver) state.feedObserver.disconnect();
  if (state.searchObserver) state.searchObserver.disconnect();
  // 切換頁面時清掉 Shorts viewer（如果有）
  if (path !== '/shorts') {
    const vw = document.getElementById('shortsViewer');
    if (vw) vw.remove();
  }

  if (path === '/watch' && v) {
    renderWatch(v);
  } else if (path.startsWith('/channel/')) {
    renderChannel(path.split('/')[2], tab || 'videos');
  } else if (path === '/history') {
    renderHistory();
  } else if (path === '/library') {
    renderLibrary(tab);
  } else if (path === '/shorts') {
    renderShorts();
  } else if (path === '/explore') {
    renderExplore(params.get('cat'));
  } else if (path === '/feed') {
    renderFeed();
  } else if (search) {
    renderSearch(search);
  } else {
    renderHome();
  }
}

window.addEventListener('popstate', route);

// ===== Events =====
searchForm.addEventListener('submit', e => {
  e.preventDefault();
  const q = searchInput.value.trim();
  if (!q) return;
  suggest.hidden = true;
  navigate(`/?search=${encodeURIComponent(q)}`);
});

searchInput.addEventListener('input', e => {
  if (mobileSearchInput && mobileSearchInput !== document.activeElement) mobileSearchInput.value = e.target.value;
  loadSuggest(e.target.value);
});
searchInput.addEventListener('focus', e => { if (e.target.value) loadSuggest(e.target.value); });
if (mobileSearchInput) {
  mobileSearchInput.addEventListener('input', e => {
    searchInput.value = e.target.value;
    loadSuggest(e.target.value);
  });
  mobileSearchInput.addEventListener('focus', e => { if (e.target.value) loadSuggest(e.target.value); });
}
document.addEventListener('click', e => { if (!e.target.closest('.search')) suggest.hidden = true; });

chipbar.addEventListener('click', e => {
  const chip = e.target.closest('.chip');
  if (!chip) return;
  $$('.chip').forEach(c => c.classList.remove('active'));
  chip.classList.add('active');
  const key = chip.dataset.chip;
  if (key === 'all') {
    navigate('/');
  } else {
    navigate(`/?search=${encodeURIComponent(key)}`);
  }
});

document.addEventListener('click', e => {
  const link = e.target.closest('[data-link]');
  if (link) {
    e.preventDefault();
    navigate(link.dataset.link);
    return;
  }

  const mobileSearchTrigger = e.target.closest('#mobileSearchBtn');
  if (mobileSearchTrigger) {
    e.preventDefault();
    openMobileSearch();
    return;
  }

  const watchChannelTrigger = e.target.closest('.watch-channel [data-act="channel"]');
  if (watchChannelTrigger) {
    e.preventDefault();
    e.stopPropagation();
    const chId = watchChannelTrigger.dataset.channelId || channelIdFromUrl(watchChannelTrigger.dataset.channelUrl);
    if (chId) navigate(`/channel/${chId}`);
    else toast('沒有頻道資訊');
    return;
  }

  const sb = e.target.closest('.sb-item[data-region]');
  if (sb) { renderHome(sb.dataset.region); return; }

  const toastBtn = e.target.closest('[data-toast]');
  if (toastBtn) { toast(toastBtn.dataset.toast); return; }

  const closeM = e.target.closest('[data-close-modal], .modal-backdrop');
  if (closeM) { closeAllModals(); return; }
});

menuBtn.addEventListener('click', () => app.classList.toggle('mini'));

const mobileSearchBtn = $('#mobileSearchBtn');
const mobileSearchClose = $('#mobileSearchClose');
const mobileSearchForm = $('#mobileSearchForm');
const mobileNav = $('#mobileNav');
const settingsBtn = $('#settingsBtn');
if (mobileSearchBtn) {
  const openSearch = (e) => {
    e.preventDefault();
    e.stopPropagation();
    openMobileSearch();
  };
  mobileSearchBtn.addEventListener('click', openSearch);
  mobileSearchBtn.addEventListener('touchend', openSearch, { passive: false });
}
if (mobileNav) {
  mobileNav.querySelectorAll('.mobile-nav-item[data-link]').forEach(btn => {
    const go = (e) => {
      e.preventDefault();
      e.stopPropagation();
      navigate(btn.dataset.link);
    };
    btn.addEventListener('click', go);
    btn.addEventListener('touchend', go, { passive: false });
  });
}
if (mobileSearchClose) mobileSearchClose.addEventListener('click', closeMobileSearch);
if (settingsBtn) {
  const openSettings = (e) => {
    e.preventDefault();
    e.stopPropagation();
    closeAllModals();
    openModal('settingsModal');
  };
  settingsBtn.addEventListener('click', openSettings);
  settingsBtn.addEventListener('touchend', openSettings, { passive: false });
}
if (mobileSearchSheet) {
  mobileSearchSheet.addEventListener('click', (e) => {
    if (e.target.closest('.mobile-search-backdrop')) closeMobileSearch();
  });
}
if (mobileSearchForm) {
  mobileSearchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const q = mobileSearchInput.value.trim();
    if (!q) return;
    searchInput.value = q;
    closeMobileSearch();
    navigate(`/?search=${encodeURIComponent(q)}`);
  });
}

$('#micBtn').addEventListener('click', () => toast('語音搜尋暫不支援，請輸入文字 ◔_◔'));

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    shareModal.hidden = true;
    suggest.hidden = true;
  }
  if (e.key === '/' && !['INPUT','TEXTAREA'].includes(document.activeElement.tagName)) {
    e.preventDefault();
    searchInput.focus();
  }
});

// ===== Settings / Theme =====
function applySettings() {
  const s = Store.settings.all;
  // 主題
  if (s.theme === 'auto') {
    const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.body.classList.toggle('light', !dark);
  } else {
    document.body.classList.toggle('light', s.theme === 'light');
  }
}
applySettings();

// ===== Context menu =====
function openCtxMenu(x, y, cardEl, cardData, channelId) {
  const menu = $('#ctxMenu');
  if (!menu) return;
  menu.hidden = false;
  // 保證不超出視窗
  const mw = 220, mh = 240;
  menu.style.left = Math.min(x, window.innerWidth - mw - 10) + 'px';
  menu.style.top = Math.min(y, window.innerHeight - mh - 10) + 'px';
  menu.dataset.id = cardData.id;
  menu.dataset.title = cardData.title;
  menu.dataset.channelId = channelId || '';
  menu._card = cardData;
  menu._cardEl = cardEl;
}
function closeCtxMenu() { const m = $('#ctxMenu'); if (m) m.hidden = true; }

document.addEventListener('click', (e) => {
  const menu = $('#ctxMenu');
  if (!menu || menu.hidden) return;
  const item = e.target.closest('.ctx-item');
  if (!item) {
    if (!e.target.closest('.card-action-more')) closeCtxMenu();
    return;
  }
  const id = menu.dataset.id;
  const title = menu.dataset.title;
  const channelId = menu.dataset.channelId;
  const card = menu._card;
  const el = menu._cardEl;
  switch (item.dataset.ctx) {
    case 'watch-later':
      Store.watchLater.toggle(card);
      toast('已加入稍後觀看');
      break;
    case 'copy':
      navigator.clipboard.writeText(`${location.origin}/watch?v=${id}`);
      toast('已複製連結');
      break;
    case 'share':
      openShare(id, title);
      break;
    case 'hide':
      Store.hidden.add(id);
      if (el) el.style.display = 'none';
      toast('已標記為不感興趣');
      break;
    case 'block-channel':
      if (channelId) {
        Store.blocked.add(channelId);
        // 移除所有同頻道卡片
        page.querySelectorAll('.card').forEach(c => {
          try {
            const cd = JSON.parse(c.dataset.card);
            const cid = channelIdFromUrl(cd.uploaderUrl);
            if (cid === channelId) c.style.display = 'none';
          } catch {}
        });
        toast('已封鎖該頻道');
      } else {
        toast('沒有頻道資訊');
      }
      break;
  }
  closeCtxMenu();
});

// ===== Explore =====
const EXPLORE_CATS = [
  { key: 'music',    label: '音樂',    icon: '🎵', q: '熱門音樂 MV' },
  { key: 'movies',   label: '電影',    icon: '🎬', q: '電影預告' },
  { key: 'live',     label: '直播',    icon: '🔴', q: 'live 24小時直播' },
  { key: 'gaming',   label: '遊戲',    icon: '🎮', q: '遊戲實況' },
  { key: 'news',     label: '新聞',    icon: '📰', q: '新聞 即時' },
  { key: 'sports',   label: '體育',    icon: '⚽', q: '運動精華' },
  { key: 'learning', label: '學習',    icon: '📚', q: '教學 課程' },
  { key: 'fashion',  label: '時尚',    icon: '👗', q: '時尚 穿搭' },
  { key: 'podcasts', label: 'Podcast', icon: '🎙', q: 'podcast' },
];

async function renderExplore(cat) {
  showChipbar(false);
  $('.grid-wrap').style.padding = '24px';
  if (cat) {
    setActive('cat', cat);
  } else {
    setActive('route', 'explore');
  }
  document.title = '探索 - YuTube';

  if (!cat) {
    page.innerHTML = `
      <h2 class="section-title">探索</h2>
      <div class="explore-hero">
        ${EXPLORE_CATS.map(c => `
          <div class="explore-card ${c.key}" data-link="/explore?cat=${c.key}">
            <div>${c.icon} ${c.label}</div>
          </div>
        `).join('')}
      </div>
      <h2 class="section-title">熱門地區</h2>
      <div class="explore-hero">
        ${[
          { code:'TW', name:'台灣', flag:'🇹🇼' },
          { code:'US', name:'美國', flag:'🇺🇸' },
          { code:'JP', name:'日本', flag:'🇯🇵' },
          { code:'KR', name:'韓國', flag:'🇰🇷' },
          { code:'HK', name:'香港', flag:'🇭🇰' },
          { code:'GB', name:'英國', flag:'🇬🇧' },
          { code:'DE', name:'德國', flag:'🇩🇪' },
        ].map(r => `
          <div class="explore-card music" data-region="${r.code}" style="background:linear-gradient(135deg,#${(Math.random()*0xffffff|0).toString(16).padStart(6,'0')},#${(Math.random()*0xffffff|0).toString(16).padStart(6,'0')})">
            <div>${r.flag} ${r.name}</div>
          </div>
        `).join('')}
      </div>
    `;
    return;
  }

  const found = EXPLORE_CATS.find(c => c.key === cat);
  if (!found) return renderExplore();
  showLoader();
  try {
    const data = await api('/api/search?q=' + encodeURIComponent(found.q));
    const items = (data.items || []).filter(v => v.type === 'stream' || v.url?.includes('/watch?v=')).map(v => ({
      id: videoIdFromUrl(v.url), url: v.url, title: v.title, thumbnail: v.thumbnail,
      uploaderName: v.uploaderName, uploaderAvatar: v.uploaderAvatar,
      uploaderUrl: v.uploaderUrl, uploaderVerified: v.uploaderVerified,
      duration: v.duration, views: v.views,
      uploadedDate: v.uploadedDate || v.uploaded || '',
    }));
    renderGrid(items, { title: `${found.icon} ${found.label}` });
  } catch (e) {
    page.innerHTML = `<div class="empty"><div class="empty-icon">⚠️</div><div class="empty-title">載入失敗</div>${escapeHtml(e.message)}</div>`;
  }
}

// ===== Feed: 訂閱聚合 =====
async function renderFeed() {
  showChipbar(false);
  $('.grid-wrap').style.padding = '24px';
  setActive('route', 'feed');
  document.title = '訂閱 - YuTube';
  const subs = Store.subs.list();
  if (subs.length === 0) {
    page.innerHTML = `
      <div class="empty">
        <div class="empty-icon">${MS_ICONS.subscriptions}</div>
        <div class="empty-title">還沒有訂閱任何頻道</div>
        <div class="empty-hint">在影片或頻道頁按「訂閱」就會出現在這裡</div>
        <a class="action-pill empty-action" data-link="/">回到首頁</a>
      </div>`;
    return;
  }
  page.innerHTML = `<h2 class="section-title">訂閱<span class="count">${subs.length} 個頻道</span></h2><div id="feedList"><div class="loader">載入中…</div></div>`;
  const list = $('#feedList');
  list.innerHTML = '';
  // 並行抓每個頻道前 4 部
  const results = await Promise.allSettled(
    subs.map(c => api(`/api/channel/${c.id}`).then(d => ({ ch: c, data: d })))
  );
  results.forEach(r => {
    if (r.status !== 'fulfilled' || !r.value.data || r.value.data.error) return;
    const { ch, data } = r.value;
    const items = (data.relatedStreams || []).filter(v => v.type === 'stream').slice(0, 6);
    if (items.length === 0) return;
    const group = document.createElement('div');
    group.className = 'feed-group';
    group.innerHTML = `
      <div class="feed-group-head">
        <div class="avatar" data-link="/channel/${ch.id}">${ch.avatar ? `<img src="${proxyImg(ch.avatar)}" alt="">` : ''}</div>
        <h3 data-link="/channel/${ch.id}" style="cursor:pointer">${escapeHtml(ch.name)}${data.verified ? ' ✓' : ''}</h3>
        <a data-link="/channel/${ch.id}">查看頻道 ›</a>
      </div>
      <div class="grid">${items.map(videoCard).join('')}</div>
    `;
    list.appendChild(group);
  });
  bindCards(list);
  if (list.children.length === 0) {
    list.innerHTML = `<div class="empty"><div class="empty-icon">${MS_ICONS.warning}</div><div class="empty-title">無法載入訂閱頻道</div></div>`;
  }
}

// ===== Modals =====
function openModal(id) { const m = document.getElementById(id); if (m) m.hidden = false; }
function closeModal(id) { const m = document.getElementById(id); if (m) m.hidden = true; }
function closeAllModals() {
  document.querySelectorAll('.modal').forEach(m => m.hidden = true);
  if (mobileSearchSheet) mobileSearchSheet.hidden = true;
}

function renderProfileAvatar() {
  const avatar = document.querySelector('.avatar-btn .my-avatar');
  if (!avatar) return;
  const s = Store.settings.all;
  const text = (s.avatarText || 'Y').slice(0, 2).toUpperCase();
  const color = s.avatarColor || '#2962ff';
  avatar.style.setProperty('--avatar-color', color);
  avatar.classList.toggle('has-image', !!s.avatarImage);
  if (s.avatarImage) {
    avatar.innerHTML = `<img src="${escapeHtml(s.avatarImage)}" alt="avatar">`;
  } else {
    avatar.textContent = text;
  }
}

function syncMobileSuggestFromDesktop() {
  if (!mobileSuggest || !suggest) return;
  mobileSuggest.innerHTML = suggest.innerHTML;
}

function openMobileSearch() {
  if (!mobileSearchSheet) return;
  mobileSearchSheet.hidden = false;
  if (mobileSearchInput) {
    mobileSearchInput.value = searchInput.value;
    mobileSearchInput.focus();
    if (mobileSearchInput.value.trim()) loadSuggest(mobileSearchInput.value);
  }
}

function closeMobileSearch() {
  if (mobileSearchSheet) mobileSearchSheet.hidden = true;
}

// 設定面板初始化
function initSettingsUI() {
  const s = Store.settings.all;
  const setTheme = $('#setTheme');
  const setRegion = $('#setRegion');
  const setAutoplay = $('#setAutoplay');
  const setKeepScroll = $('#setKeepScroll');
  const setHideShorts = $('#setHideShorts');
  const avatarText = $('#avatarText');
  const avatarColor = $('#avatarColor');
  const avatarImage = $('#avatarImage');
  relabelRegionSelect();
  if (setTheme) {
    setTheme.value = s.theme;
    setTheme.addEventListener('change', () => { Store.settings.set('theme', setTheme.value); toast(t('set.applied_theme')); });
  }
  if (setRegion) {
    setRegion.value = s.region;
    setRegion.addEventListener('change', () => {
      Store.settings.set('region', setRegion.value);
      state.region = setRegion.value;
      Store.set('region', setRegion.value);
      setLangByRegion(setRegion.value);
      relabelRegionSelect();
      toast(t('set.region_updated'));
      route();
    });
  }
  if (setAutoplay) {
    setAutoplay.checked = s.autoplay;
    setAutoplay.addEventListener('change', () => Store.settings.set('autoplay', setAutoplay.checked));
  }
  if (setKeepScroll) {
    setKeepScroll.checked = s.keepScroll;
    setKeepScroll.addEventListener('change', () => Store.settings.set('keepScroll', setKeepScroll.checked));
  }
  if (setHideShorts) {
    setHideShorts.checked = s.hideShorts;
    setHideShorts.addEventListener('change', () => {
      Store.settings.set('hideShorts', setHideShorts.checked);
      toast(setHideShorts.checked ? '已隱藏 Shorts' : '已顯示 Shorts');
      if (location.pathname === '/') renderHome();
    });
  }
  if (avatarText) {
    avatarText.value = s.avatarText || 'Y';
    avatarText.addEventListener('input', () => {
      Store.settings.set('avatarText', (avatarText.value || 'Y').slice(0, 2).toUpperCase());
      renderProfileAvatar();
    });
  }
  if (avatarColor) {
    avatarColor.value = s.avatarColor || '#2962ff';
    avatarColor.addEventListener('input', () => {
      Store.settings.set('avatarColor', avatarColor.value || '#2962ff');
      renderProfileAvatar();
    });
  }
  if (avatarImage) {
    avatarImage.value = s.avatarImage || '';
    avatarImage.addEventListener('change', () => {
      Store.settings.set('avatarImage', avatarImage.value.trim());
      renderProfileAvatar();
    });
  }
  const clearBtn = $('#clearAllData');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (!confirm('要清除所有訂閱、紀錄、稍後觀看與喜歡的影片嗎？')) return;
      Store.clearAll();
      toast(t('set.cleared'));
      renderSubsList();
      route();
    });
  }
}
renderProfileAvatar();
initSettingsUI();

// 設定 / 鍵盤快捷鍵 / Brand region 同步
document.addEventListener('click', (e) => {
  if (e.target.closest('#settingsBtn')) { closeAllModals(); openModal('settingsModal'); return; }
  if (e.target.closest('#kbdBtn')) { closeAllModals(); openModal('kbdModal'); return; }
  const closeM = e.target.closest('[data-close-modal], .modal-backdrop');
  if (closeM) {
    const m = closeM.closest('.modal');
    if (m) m.hidden = true;
  }
});

// Search clear button
const clearSearch = $('#clearSearch');
if (clearSearch) {
  searchInput.addEventListener('input', () => {
    clearSearch.hidden = !searchInput.value;
  });
  clearSearch.addEventListener('click', () => {
    searchInput.value = '';
    clearSearch.hidden = true;
    suggest.hidden = true;
    searchInput.focus();
  });
}

// Chipbar 左右捲動
const chipTrack = $('#chipTrack');
const chipLeft = $('#chipLeft');
const chipRight = $('#chipRight');
const subsTrack = $('#subsTrack');
const subsLeft = $('#subsLeft');
const subsRight = $('#subsRight');
function updateChipScrollBtns() {
  if (!chipTrack || !chipLeft || !chipRight) return;
  chipLeft.hidden = chipTrack.scrollLeft <= 4;
  chipRight.hidden = chipTrack.scrollLeft >= chipTrack.scrollWidth - chipTrack.clientWidth - 4;
}
function updateSubsScrollBtns() {
  if (!subsTrack || !subsLeft || !subsRight || $('#subsStrip')?.hidden) return;
  subsLeft.hidden = subsTrack.scrollLeft <= 4;
  subsRight.hidden = subsTrack.scrollLeft >= subsTrack.scrollWidth - subsTrack.clientWidth - 4;
}
if (chipTrack) {
  chipTrack.addEventListener('scroll', updateChipScrollBtns);
  setTimeout(updateChipScrollBtns, 100);
  window.addEventListener('resize', updateChipScrollBtns);
}
if (subsTrack) {
  subsTrack.addEventListener('scroll', updateSubsScrollBtns);
  setTimeout(updateSubsScrollBtns, 100);
  window.addEventListener('resize', updateSubsScrollBtns);
  subsTrack.addEventListener('click', (e) => {
    const pill = e.target.closest('.subs-pill[data-link]');
    if (pill) navigate(pill.dataset.link);
  });
}
if (chipLeft) chipLeft.addEventListener('click', () => chipTrack.scrollBy({ left: -200, behavior: 'smooth' }));
if (chipRight) chipRight.addEventListener('click', () => chipTrack.scrollBy({ left: 200, behavior: 'smooth' }));
if (subsLeft) subsLeft.addEventListener('click', () => subsTrack.scrollBy({ left: -240, behavior: 'smooth' }));
if (subsRight) subsRight.addEventListener('click', () => subsTrack.scrollBy({ left: 240, behavior: 'smooth' }));

// 麥克風 → Web Speech API
const micBtn = $('#micBtn');
if (micBtn) {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  micBtn.addEventListener('click', () => {
    if (!SR) return toast('此瀏覽器不支援語音搜尋');
    const rec = new SR();
    rec.lang = 'zh-TW';
    rec.continuous = false;
    rec.interimResults = false;
    micBtn.classList.add('active');
    toast('請說話…');
    rec.onresult = e => {
      const text = e.results[0][0].transcript;
      searchInput.value = text;
      navigate('/?search=' + encodeURIComponent(text));
    };
    rec.onerror = () => toast('語音辨識失敗');
    rec.onend = () => micBtn.classList.remove('active');
    try { rec.start(); } catch { toast('語音功能無法啟動'); }
  });
}

// Mini sidebar tooltip
const miniTooltip = $('#miniTooltip');
document.querySelectorAll('.sb-item').forEach(item => {
  item.addEventListener('mouseenter', () => {
    if (!app.classList.contains('mini')) return;
    const label = item.querySelector('.sb-label');
    if (!label || !miniTooltip) return;
    miniTooltip.textContent = label.textContent;
    const r = item.getBoundingClientRect();
    miniTooltip.style.left = (r.right + 8) + 'px';
    miniTooltip.style.top = (r.top + r.height / 2 - 12) + 'px';
    miniTooltip.hidden = false;
  });
  item.addEventListener('mouseleave', () => { if (miniTooltip) miniTooltip.hidden = true; });
});

// 鍵盤 g+x 序列
let keyChain = '';
let keyChainTimer;
document.addEventListener('keydown', (e) => {
  if (['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)) return;
  if (e.key === 'Escape') { closeAllModals(); closeCtxMenu(); }
  if (e.key === '?') { e.preventDefault(); closeAllModals(); openModal('kbdModal'); return; }
  if (e.key === 'z') { app.classList.toggle('mini'); return; }

  if (keyChain === 'g') {
    keyChain = '';
    clearTimeout(keyChainTimer);
    if (e.key === 'h') { e.preventDefault(); navigate('/'); }
    else if (e.key === 'l') { e.preventDefault(); navigate('/library'); }
    else if (e.key === 'r') { e.preventDefault(); navigate('/history'); }
    else if (e.key === 'w') { e.preventDefault(); navigate('/library?tab=watch-later'); }
    else if (e.key === 's') { e.preventDefault(); openModal('settingsModal'); }
    else if (e.key === 't') {
      e.preventDefault();
      const cur = Store.settings.all.theme;
      const next = cur === 'dark' ? 'light' : 'dark';
      Store.settings.set('theme', next);
      const sel = $('#setTheme'); if (sel) sel.value = next;
      toast(next === 'dark' ? '已切換到深色主題' : '已切換到淺色主題');
    }
    return;
  }
  if (e.key === 'g') {
    keyChain = 'g';
    clearTimeout(keyChainTimer);
    keyChainTimer = setTimeout(() => keyChain = '', 800);
  }
});

// 系統主題變更時重新套用（若使用 auto）
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  if (Store.settings.all.theme === 'auto') applySettings();
});

// ===== Init =====
renderSubsList();
route();
