// @ts-check
// Dev Docusaurus config — 只包含FAQ内容，快速构建预览。
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
    format: 'md',
    hooks: {
      onBrokenMarkdownLinks: 'warn',
      onBrokenMarkdownImages: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars-faq.js'),
          include: ['FAQ/**'],
          routeBasePath: 'docs',
          exclude: ['**/img/**', '**/_category_**'],
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
            to: '/docs/FAQ/faqs-multi-device-scenario/faq-phone/faqs-purax/faqs-purax-1',
            label: 'FAQ',
            position: 'left',
          },
          {
            href: 'https://github.com/YouniQiao/developer_hos/tree/master/docs',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} HarmonyOS Developer.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
