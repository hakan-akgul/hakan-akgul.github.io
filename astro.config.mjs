import starlight from '@astrojs/starlight';
import { ExpressiveCodeTheme } from '@astrojs/starlight/expressive-code';
import robots from "astro-robots";
import { defineConfig, squooshImageService } from 'astro/config';
import starlightLinksValidator from 'starlight-links-validator';

const jsoncString = fs.readFileSync(new URL(`./theme-armada.jsonc`, import.meta.url), 'utf-8')
const themeArmada = ExpressiveCodeTheme.fromJSONString(jsoncString)

import devtoolBreakpoints from "astro-devtool-breakpoints";

export default defineConfig({
  site: 'https://hakan-akgul.github.io',
  trailingSlash: 'never',
  base: '/',
  image: {
    service: squooshImageService()
  },
  integrations: [
    starlight({
      head: [
        {
          tag: 'script',
          attrs: {
            src: 'https://analytics.eu.umami.is/script.js',
            'data-website-id': "9524ee71-dc8c-4978-afca-c35b0c789cd4",
            defer: true,
          },
        },
      ],
      plugins: [ starlightLinksValidator() ],
      tableOfContents: false,
      title: 'show me the code!',
      social: {
        github: 'https://github.com/hakan-akgul',
        gitlab: 'https://gitlab.com/hakan-akgul',
        linkedin: 'https://www.linkedin.com/in/hakanakgul',
        stackOverflow: 'https://stackoverflow.com/users/13446430/hakan-akgul',
        email: 'mailto:hakan-akgul@outlook.com'
      },
      expressiveCode: {
        themes: [ themeArmada ],
        styleOverrides: {
          borderColor: 'none',
          borderWidth: '2px',
          borderRadius: '4px',
          codeBackground: 'var(--navy-d)',
          focusBorder: 'var(--carnation)',
          frames: {
            editorActiveTabBackground: 'var(--navy-d)',
            editorActiveTabBorderColor: 'none',
            editorActiveTabForeground: 'var(--navy-lllll)',
            editorActiveTabIndicatorBottomColor: 'none',
            editorTabBarBackground: 'none',
            editorTabBarBorderBottomColor: 'none',
            editorTabBorderRadius: '4px',
            terminalBackground: 'var(--navy-d)',
            terminalTitlebarBorderBottomColor: 'none',
            terminalTitlebarDotsForeground: 'var(--navy-l)',
            terminalTitlebarDotsOpacity: '100%',
            terminalTitlebarForeground: 'var(--navy-lll)',
            terminalTitlebarBackground: 'var(--navy)',
            editorTabBarBorderColor: 'var(--navy-d)',
            inlineButtonBackground: 'var(--carnation)',
            inlineButtonBorder: 'var(--carnation)',
            inlineButtonForeground: 'var(--carnation-lll)'
          }
        }
      },
      customCss: [
        './src/styles/custom.css'
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
