import starlight from '@astrojs/starlight';
import { ExpressiveCodeTheme } from '@astrojs/starlight/expressive-code';
import { defineConfig } from 'astro/config';

const jsoncString = fs.readFileSync(new URL(`./theme-armada.jsonc`, import.meta.url), 'utf-8')
const themeArmada = ExpressiveCodeTheme.fromJSONString(jsoncString)

// https://astro.build/config
export default defineConfig({
  site: 'https://hakan-akgul.github.io',
  trailingSlash: 'never',
  integrations: [
    starlight({
      tableOfContents: false,
      title: 'hakan akgül',
      social: {
        github: 'https://github.com/hakan-akgul',
        gitlab: 'https://gitlab.com/hakan-akgul',
        linkedin: 'https://www.linkedin.com/in/hakanakgul',
        stackOverflow: 'https://stackoverflow.com/users/13446430/hakan-akgul'
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
            inlineButtonForeground: 'var(--carnation-lll)',
          }

        }
      },
      customCss: [
        './src/styles/custom.css',
      ],
      sidebar: [
        {
          label: 'Guides',
          autogenerate: { directory: 'guides' },
        }
      ],
    }),
  ],
});
