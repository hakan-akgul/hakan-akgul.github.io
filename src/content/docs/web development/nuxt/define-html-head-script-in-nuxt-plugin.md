---
title: Define HTML head script in Nuxt plugin
description: Define HTML head script in Nuxt plugin
lastUpdated: 2024-04-12
---

```ts title="/plugins/head.js"
import { defineNuxtPlugin } from '#imports'

export default defineNuxtPlugin(() => {

  const scriptHtml = `
      <script
        type="text/javascript"
        src="https://foo.com/bar.min.js"
      ></script>
    `

  const head = document.getElementsByTagName('head')[0]
  const scr = document.createRange().createContextualFragment(scriptHtml)
  head.append(scr)
})
```
