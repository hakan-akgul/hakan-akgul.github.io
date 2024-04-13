---
title: Define GTM script in Nuxt plugin with consent management
description: Define GTM script in Nuxt plugin with consent management
sidebar:
  label: GTM plugin for Nuxt
lastUpdated: 2024-04-12
---

```ts title="plugins/01.gtm.client.ts"
import { store } from '~~/store/store'
import { defineNuxtPlugin, useRouter, useRuntimeConfig, useSendGtmEvent } from '#imports'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  if (config.public.googleTagManagerId) {
    const head = document.getElementsByTagName('head')[0]
    const body = document.body

    const { ad_storage, analytics_storage, functionality_storage, personalization_storage, security_storage } = useAppStore().cookieConsent

    /* --------------------------- consent management --------------------------- */

    const consentHtml = `
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag("consent", "default", {
          ad_storage: '${ad_storage ? 'granted' : 'denied'}',
          analytics_storage: '${analytics_storage ? 'granted' : 'denied'}',
          functionality_storage: '${functionality_storage ? 'granted' : 'denied'}',
          personalization_storage: '${personalization_storage ? 'granted' : 'denied'}',
          security_storage: '${security_storage ? 'granted' : 'denied'}',
        });
        gtag('set', 'url_passthrough', true);
        gtag("set", "ads_data_redaction", true);
      </script>
    `

    const consentScript = document.createRange().createContextualFragment(consentHtml)
    head.append(consentScript)

    /* ---------------------------------- init ---------------------------------- */

    const scriptHtml = `
      <script>
        (function(w,d,s,l,i){
          w[l]=w[l]||[];
          w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
          var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
          j.async=true;
          j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;
          f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${config.public.googleTagManagerId}');
      </script>
    `

    const gtmScript = document.createRange().createContextualFragment(scriptHtml)
    head.append(gtmScript)

    /* -------------------------------- no-script ------------------------------- */

    const noScriptHtml = `
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=${config.public.googleTagManagerId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>
      </noscript>
    `

    const gtmNoscript = document.createRange().createContextualFragment(noScriptHtml)
    body.append(gtmNoscript)

    /* -------------------------------- page view ------------------------------- */

    useRouter().afterEach((to, from) => {
      useSendGtmEvent({
        event: 'virtualPageview',
        pageUrl: `${window.location.protocol}//${window.location.host}${to.fullPath}`,
        referrerPage: `${window.location.protocol}//${window.location.host}${from.fullPath}`,
        pageTitle: to.name,
      })
    })
  }

})
```

``` ts group="demo" title="composables/use-gtm.ts"
const useSendGtmEvent = function (params) {
  // prevent nuxt SSR `window not found` error
  if (process.server) {
    return
  }

  if (useRuntimeConfig().public.googleTagManagerId) {
    window.dataLayer = window.dataLayer || []
    window.dataLayer!.push(params)  }
}
```

``` ts group="demo" title="types/Gtm.ts"
declare global {
  interface Window {
    dataLayer: any
  }
}
```
