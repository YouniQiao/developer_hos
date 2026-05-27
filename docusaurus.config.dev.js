// @ts-check
// Dev Docusaurus config — only builds 开发与测试 docs, keeps full site chrome.
// Usage: npx docusaurus build --config docusaurus.config.dev.js --no-minify
// Usage: npx docusaurus start --config docusaurus.config.dev.js --no-minify

const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;
const tailwindPlugin = require('./plugins/tailwind-plugin.cjs');
const fs = require('fs');
const navEssentialsHTML = fs.readFileSync('./src/pages/nav-essentials.html', 'utf-8');
const navDesignHTML = fs.readFileSync('./src/pages/nav-design.html', 'utf-8');
const navDistributeHTML = fs.readFileSync('./src/pages/nav-distribute.html', 'utf-8');
const navMonetizeHTML = fs.readFileSync('./src/pages/nav-monetize.html', 'utf-8');
const navResourcesHTML = fs.readFileSync('./src/pages/nav-resources.html', 'utf-8');
const navDevecoHTML = fs.readFileSync('./src/pages/nav-deveco.html', 'utf-8');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Developer',
  tagline: 'Welcome',
  favicon: 'img/favicon.ico',
  plugins: [tailwindPlugin],
  future: {
    v4: true,
    faster: true,
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
          include: ['tools/**'],
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
            label: '设计与规划',
            type: 'dropdown',
            to: '/docs/design/general-design-basics/design-concepts',
            className: 'mega-dropdown',
            items: [
              { type: 'html', value: navDesignHTML, className: 'mega-dropdown' },
            ],
          },
          {
            label: '开发与测试',
            type: 'dropdown',
            to: '/docs/dev/app-dev/getting-started/overview',
            className: 'mega-dropdown',
            items: [
              { type: 'html', value: navEssentialsHTML, className: 'mega-dropdown' },
            ],
          },
          {
            label: '分发与运营',
            type: 'dropdown',
            to: '/docs/distribute/agc/overview',
            className: 'mega-dropdown',
            items: [
              { type: 'html', value: navDistributeHTML, className: 'mega-dropdown' },
            ],
          },
          {
            label: '推广与变现',
            type: 'dropdown',
            to: '/docs/monetize/promotion/ads-ggtfzstp-0000002285988928',
            className: 'mega-dropdown',
            items: [
              { type: 'html', value: navMonetizeHTML, className: 'mega-dropdown' },
            ],
          },
          {
            label: '更多资源',
            type: 'dropdown',
            to: '/docs/resources/design-res/overview',
            className: 'mega-dropdown',
            items: [
              { type: 'html', value: navResourcesHTML, className: 'mega-dropdown' },
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
          {
            to: '/docs/tools/coding-debug/ide-tools-overview',
            label: '工具',
            position: 'right',
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
        links: [
          {
            title: 'Tools',
            items: [
              { label: 'API 变更查询', to: '/docs/dev/release-notes/api-diff-search' },
              { label: '设备版本分布', to: '/docs/dev/release-notes/sdk-version-distribution' },
              { label: '设备支持查询', to: '/docs/dev/release-notes/device-support-search' },
            ],
          },
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
