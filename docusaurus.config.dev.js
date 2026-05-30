// @ts-check
// Dev Docusaurus config — only builds 推广与变现 docs, keeps minimal chrome.
// Usage: npx docusaurus build --config docusaurus.config.dev.js --no-minify
// Usage: npx docusaurus start --config docusaurus.config.dev.js --no-minify

const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;
const tailwindPlugin = require('./plugins/tailwind-plugin.cjs');
const fs = require('fs');
const navMonetizeHTML = fs.readFileSync('./src/pages/nav-monetize.html', 'utf-8');

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
          include: ['distribute/**'],
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
            label: '分发与运营',
            type: 'dropdown',
            to: '/docs/distribute/agc/overview',
            className: 'mega-dropdown',
            items: [
              { type: 'html', value: navMonetizeHTML, className: 'mega-dropdown' },
            ],
          },
          {
            to: '/update',
            label: '更新记录与计划',
            position: 'right',
          },
          {
            href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/development-intro-api',
            label: 'API参考',
            position: 'right',
            target: '_blank',
            rel: 'noopener noreferrer',
          },
          {
            href: 'https://arkts.cool/',
            label: 'ArkTS',
            position: 'right',
            target: '_blank',
            rel: 'noopener noreferrer',
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
