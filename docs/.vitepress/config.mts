import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "hakan akgül",
  description: "blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Content', link: '/welcome/welcome' }
    ],

    sidebar: generateSidebar({
      documentRootPath: 'docs',
      scanStartPath:'/',
      capitalizeFirst: true,
      hyphenToSpace: true,
      sortMenusOrderNumerically: true,
      includeEmptyFolder: true,
    }),


    socialLinks: [
      { icon: 'github', link: 'https://github.com/hakan-akgul' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/hakanakgul' },
    ]
  }
})
