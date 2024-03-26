import { defineConfig } from 'vitepress';
import { generateSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "hakan akgül",
  sitemap: {
    hostname: 'https://hakan-akgul.github.io',
  },
  head: [
    ['link', { rel: 'icon', href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%2210 0 100 100%22><text y=%22.90em%22 font-size=%2290%22>🚀</text></svg>' }],

  ],
  description: "blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Content', link: '/welcome/welcome' }
    ],
    
    search: {
      provider: 'local'
    },

    sidebar: generateSidebar({
      documentRootPath: 'docs',
      scanStartPath:'/',
      capitalizeFirst: true,
      hyphenToSpace: true,
      sortMenusOrderNumericallyFromTitle: true,
      includeEmptyFolder: true,
      excludeFolders:['public']
    }),


    socialLinks: [
      { icon: 'github', link: 'https://github.com/hakan-akgul' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/hakanakgul' },
    ]
  }
})
