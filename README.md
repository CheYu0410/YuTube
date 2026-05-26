# YuTube

A lightweight self-hosted YouTube-style frontend with search, channel pages, subscriptions, watch history, Shorts view, and multi-source fallback.

## Features

- YouTube-style UI with homepage, search, watch page, channel page, library, history, and subscriptions
- Multi-source fallback strategy:
  - Piped API first
  - Invidious API fallback
  - `yt-dlp` as the final fallback for resilience
- Region switching
- Shorts view
- Comments loading
- Watch later / liked videos / local subscriptions
- Pure frontend + Node.js backend

## Stack

- Node.js
- Express
- Vanilla HTML / CSS / JavaScript

## How it works

The backend normalizes responses from different upstream sources into a single shape for the frontend:

1. Try Piped instances
2. Fallback to Invidious instances
3. Fallback to `yt-dlp` if upstream APIs fail

This makes the app more resilient when public mirrors become unstable.

## Requirements

- Node.js 20+
- npm
- Optional but recommended: `yt-dlp`

## Installation

```bash
git clone https://github.com/CheYu0410/YuTube.git
cd YuTube
npm install
```

## Run

```bash
node server.mjs
```

Default port:

- `4501`

Then open:

- `http://localhost:4501`

## Notes

- This project relies on public upstream instances, so availability may vary over time.
- `yt-dlp` fallback improves reliability significantly when public API mirrors degrade.
- User data such as history / liked videos / subscriptions is stored client-side in the browser.

## License

MIT
