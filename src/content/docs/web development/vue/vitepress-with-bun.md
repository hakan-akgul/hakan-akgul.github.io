---
title: VitePress with bun
description: VitePress with bun
lastUpdated: 2024-04-12
---

```json title="package.json"
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "NODE_ENV=production bunx --bun vitepress build docs",
    "docs:preview": "NODE_ENV=production bunx --bun vitepress preview docs"
  },
```
