import starlight from '@astrojs/starlight';
import { ExpressiveCodeTheme } from '@astrojs/starlight/expressive-code';
import robots from "astro-robots";
import { defineConfig, squooshImageService } from 'astro/config';
import starlightLinksValidator from 'starlight-links-validator';

const jsoncString = fs.readFileSync(new URL(`./theme-armada.jsonc`, import.meta.url), 'utf-8')
const themeArmada = ExpressiveCodeTheme.fromJSONString(jsoncString)

import devtoolBreakpoints from "astro-devtool-breakpoints";

const isProd = import.meta.env.PROD;

export default defineConfig({
  site: 'https://hakan-akgul.github.io',
  trailingSlash: 'never',
  base: '/',
  image: {
    service: squooshImageService()
  },
  integrations: [
    starlight({
      favicon: './src/assets/image/logo-9.png',
      logo: {
        src: './src/assets/image/logo-9.webp',
        replacesTitle: true,
        alt: 'logo'
      },
      components: {
        Pagination: './src/layout/Pagination.astro'
      },
      head: [
        {
          tag: 'script',
          attrs: {
            'src': isProd && 'https://analytics.eu.umami.is/script.js',
            'data-website-id': isProd && "9524ee71-dc8c-4978-afca-c35b0c789cd4",
            'defer': true,
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: "alternate",
            type: "application/rss+xml",
            title: "show me the code!",
            href: `https://hakan-akgul.github.io/rss.xml`,
          }
        }
      ],
      plugins: [ starlightLinksValidator() ],
      tableOfContents: false,
      title: 'show me the code!',
      social: {
        github: 'https://github.com/hakan-akgul',
        gitlab: 'https://gitlab.com/hakan-akgul',
        linkedin: 'https://www.linkedin.com/in/hakanakgul',
        stackOverflow: 'https://stackoverflow.com/users/13446430/hakan-akgul',
        email: 'mailto:hakan-akgul@outlook.com',
        rss: 'https://hakan-akgul.github.io/rss.xml'
      },
      expressiveCode: {
        themes: [ themeArmada ],
        styleOverrides: {
          codeFontFamily: 'Ubuntu Mono',
          codeFontWeight: 'bold',
          borderColor: 'none',
          borderWidth: '2px',
          borderRadius: '0.5rem',
          codeBackground: 'var(--sl-color-gray-3)',
          focusBorder: 'var(--carnation)',
          textMarkers: {
            markBackground: 'var(--sl-color-gray-4)',
            markBorderColor: 'var(--sl-color-gray-1)',
          },
          codeFontSize: '1rem',
          codeLineHeight: '1.2',
          frames: {
            editorActiveTabBackground: 'var(--sl-color-gray-3)',
            editorActiveTabBorderColor: 'none',
            editorActiveTabIndicatorTopColor: 'none',
            editorActiveTabForeground: 'var(--sl-color-gray-1)',
            editorActiveTabIndicatorBottomColor: 'none',
            editorTabBarBackground: 'none',
            editorTabBarBorderBottomColor: 'none',
            editorTabBorderRadius: '4px',
            terminalBackground: 'var(--navy-d)',
            terminalTitlebarBorderBottomColor: 'none',
            terminalTitlebarDotsForeground: 'var(--sl-color-gray-4)',
            terminalTitlebarDotsOpacity: '100%',
            terminalTitlebarForeground: 'var(--sl-color-gray-white)',
            terminalTitlebarBackground: 'var(--sl-color-gray-5)',
            editorTabBarBorderColor: 'var(--sl-color-gray-3)',
            inlineButtonBackground: 'transparent',
            inlineButtonBorder: 'var(--carnation-l)',
            inlineButtonForeground: 'var(--carnation-l)',
            inlineButtonBorderOpacity: '100%',
            inlineButtonBackgroundHoverOrFocusOpacity: '100%',
            inlineButtonBackgroundIdleOpacity: '100%',
            inlineButtonBackgroundActiveOpacity: '100%'
          }
        }
      },
      customCss: [
        './src/styles/font-face.css',
        './src/styles/variables.css',
        './src/styles/sidebar.css',
        './src/styles/pagination.css',
        './src/styles/custom.css',
      ],
      sidebar: [
        {
          label: 'welcome',
          link: './welcome'
        },
        {
          label: 'web development',
          autogenerate: {
            directory: 'web development'
          }
        },
        {
          label: 'terminal',
          autogenerate: {
            directory: 'terminal'
          }
        },
        {
          label: 'tools',
          autogenerate: {
            directory: 'tools'
          }
        },
        {
          label: 'keyboard',
          autogenerate: {
            directory: 'keyboard'
          }
        }
      ]
    }),
    devtoolBreakpoints(),
    robots()
  ]
});
