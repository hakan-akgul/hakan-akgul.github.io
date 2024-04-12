---
title: Vitepress with bun
description: Vitepress with bun
lastUpdated: 2024-04-12T17:18:50.566Z
---

```json title="package.json"
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "NODE_ENV=production bunx --bun vitepress build docs",
    "docs:preview": "NODE_ENV=production bunx --bun vitepress preview docs"
  },
```
