---
title: Define HTML Head Script in Nuxt Plugin
description: Define HTML Head Script in Nuxt Plugin
lastUpdated: 2024-04-12T17:18:50.566Z
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
