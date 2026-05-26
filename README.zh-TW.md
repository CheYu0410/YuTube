# YuTube

> 輕量、自架、類 YouTube 的影片前端，基於 Node.js、Express 與原生 JavaScript 打造。

[English README](./README.md)

YuTube 是一個輕量的影音前端，提供類似 YouTube 的瀏覽體驗，包含搜尋、觀看頁、頻道頁、訂閱、歷史紀錄、Shorts，以及多來源 fallback 機制，提升整體可用性與韌性。

## 預覽圖片

> 可自行替換成你之後的正式截圖。

![YuTube 首頁預覽](./assets/preview-home.png)
![YuTube 搜尋結果預覽](./assets/preview-search.png)

## 特色

- 類 YouTube 的熟悉介面
- 搜尋、觀看頁、頻道頁、媒體庫
- 本地端觀看紀錄、喜歡的影片、稍後觀看、訂閱
- 支援熱門地區切換
- Shorts 瀏覽體驗
- 留言載入
- 多來源 fallback：
  - **Piped** 優先
  - **Invidious** 備援
  - **yt-dlp** 最終 fallback
- 輕量技術棧：**Node.js + Express + Vanilla HTML/CSS/JS**

## 為什麼做這個專案

公開的 YouTube 替代前端與鏡像站常常會隨時間變得不穩、被限流、甚至部分失效。YuTube 的目標是把多個上游來源整合到同一個前端後面，盡量提供更穩定、可持續的使用體驗。

YuTube 的策略不是只依賴單一服務，而是採用多層 fallback：

1. 先查 **Piped**
2. 失敗時退到 **Invidious**
3. 最後用 **yt-dlp** 當恢復路徑

這樣的設計可以在公開鏡像品質變差時，盡量維持功能可用。

## 功能

### 核心瀏覽
- 首頁影片流
- 搜尋結果
- 影片觀看頁
- 頻道頁
- 相關影片
- 地區切換

### 個人媒體庫
- 觀看紀錄
- 稍後觀看
- 喜歡的影片
- 本地訂閱頻道

### 媒體體驗
- Shorts 介面
- 留言載入
- 響應式 UI
- 前端多語系支援

## 技術棧

- **Runtime：** Node.js
- **Backend：** Express
- **Frontend：** Vanilla JavaScript / HTML / CSS
- **Fallback 工具：** yt-dlp

## 專案結構

```text
YuTube/
├── assets/
│   ├── preview-home.svg
│   └── preview-search.svg
├── public/
│   ├── app.js
│   ├── index.html
│   └── style.css
├── server.mjs
├── package.json
├── README.md
└── README.zh-TW.md
```

## 快速開始

### 需求

- Node.js **20+**
- npm
- 建議安裝：`yt-dlp`

### 安裝

```bash
git clone https://github.com/CheYu0410/YuTube.git
cd YuTube
npm install
```

### 本機啟動

```bash
npm start
```

預設埠號：

- `4501`

瀏覽器開啟：

- `http://localhost:4501`

## 運作方式

後端會將多個上游來源的資料整合與標準化，轉成前端可以一致使用的格式。

### 上游策略

- **Primary：** Piped API
- **Secondary：** Invidious API
- **Final fallback：** yt-dlp

### 資料流程

- 搜尋會先嘗試公開 API 來源
- 頻道與影片資料會被標準化成一致格式
- 若公開鏡像失效，會退回 yt-dlp
- 前端以單一資料模型渲染所有頁面

## 目前限制

因為此專案依賴公開上游服務，所以部分行為本質上不完全由應用本身控制。

已知限制包含：

- 公開 Piped / Invidious 實例可能不穩定或失效
- 某些 API 可能回傳不完整 metadata
- 直播聊天室不保證能穩定取得真正即時資料
- 上游可用性會因地區與時間而波動
- yt-dlp fallback 通常會比直接 API 回應更慢

## 隱私模型

YuTube 會在瀏覽器本地端儲存使用者狀態，例如：

- 觀看紀錄
- 喜歡的影片
- 稍後觀看
- 本地訂閱頻道

這些資料目前主要在 client side 處理，而不是依賴帳號系統。

## 開源延伸方向

如果你打算 fork 或繼續擴充，以下方向會很實用：

- 更好的實例健康度評分
- 可配置的上游來源清單
- 更完整的 server-side cache 策略
- Docker 部署支援
- 更完整的 README 截圖 / Demo 區塊
- 更好的直播與聊天室整合能力

## Roadmap

- [ ] 補更多 README 截圖
- [ ] 如果未來引入執行期設定，補上 `.env.example`
- [ ] 加入 Docker 支援
- [ ] 補部署文件
- [ ] 加 GitHub Actions 做啟動 / 檢查流程
- [ ] 改善直播相關支援

## 授權

MIT License，詳見 [LICENSE](./LICENSE)。

## 作者

由 [CheYu0410](https://github.com/CheYu0410) 建立。
