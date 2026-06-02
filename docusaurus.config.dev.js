// @ts-check
// Dev Docusaurus config — only builds newly migrated sections: ASCF, NDK, Game, Atomic.
// Usage: npx docusaurus build --config docusaurus.config.dev.js --no-minify

const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;
const tailwindPlugin = require('./plugins/tailwind-plugin.cjs');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Developer',
  tagline: 'Welcome',
  favicon: 'img/favicon.ico',
  plugins: [tailwindPlugin],
  future: {
  },

  url: 'https://developer.harmonyos.cool',
  baseUrl: '/',

  organizationName: 'YouniQiao',
  projectName: 'developer_hos',

  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
      onBrokenMarkdownImages: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },

  scripts: [
    {src: '/js/mega-menu.js', async: true},
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars-dev.js'),
          include: [
            'dev/atomic-dev/**',
            'dev/ndk-dev/**',
            'dev/game-dev/**',
            'atomic/**',
          ],
          exclude: ['**/img/**'],
          editUrl:
            'https://github.com/YouniQiao/developer_hos/tree/master/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
      },
      navbar: {
        title: 'Developer',
        logo: {
          alt: 'Site Logo',
          src: 'img/favicon.ico',
        },
        items: [
          {
            to: '/docs/atomic/atomic-service-definition',
            label: '元服务开发',
            position: 'left',
          },
          {
            to: '/docs/dev/atomic-dev/ascf/ascf-overview',
            label: 'ASCF框架',
            position: 'left',
          },
          {
            to: '/docs/dev/ndk-dev/ndk-development-overview',
            label: 'NDK开发',
            position: 'left',
          },
          {
            to: '/docs/dev/game-dev/games-center-introduction-0000002320553253',
            label: '游戏开发',
            position: 'left',
          },
          {
            to: '/update',
            label: '更新记录与计划',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'About',
            items: [
              { label: '更新记录与计划', to: '/update' },
            ],
          },
          {
            title: 'More',
            items: [
              { label: 'HarmonyOS开发者官网', href: 'https://developer.huawei.com/consumer/cn/' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HarmonyOS Developer. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
