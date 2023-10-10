::: code-group

```json [package.json]
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "NODE_ENV=production bunx --bun vitepress build docs",
    "docs:preview": "NODE_ENV=production bunx --bun vitepress preview docs"
  },
```

:::
