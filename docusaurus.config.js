// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const tailwindPlugin = require('./plugins/tailwind-plugin.cjs');
const plugins = [tailwindPlugin];
const fs = require('fs');
const sdksHTML = fs.readFileSync('./src/pages/sdks.html', 'utf-8');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'HarmonyOS Developer',
  tagline: 'Welcome',
  favicon: 'img/favicon.ico',
  plugins,

  // Set the production url of your site here
  url: 'https://developer.harmonyos.cool',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'YouniQiao', // Usually your GitHub org/user name.
  projectName: 'developer_hos', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },

  scripts: [
    {src: 'https://hm.baidu.com/hm.js?986441c2114752f739a5460119d91e01',  async: true}
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/YouniQiao/developer_hos/tree/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/YouniQiao/developer_hos/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
      },
      navbar: {
        title: 'HarmonyOS Developer',
        logo: {
          alt: 'Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            label: '核心技术理念',
            type: 'dropdown',
            className: 'dyte-dropdown',
            items: [
              {
                type: 'html',
                value: sdksHTML,
                className: 'dyte-dropdown',
              },
            ],
          },
          {
            href: 'https://developer.huawei.com/consumer/cn/doc/design-guides/design-concepts-0000001795698445',
            label: '设计',
            position: 'left',
          },
          {
            type: 'dropdown',
            position: 'left',
            label: '开发',
            items: [
            {
              type: 'docSidebar',
              sidebarId: 'guideSidebar',
              label: '应用开发',
            },
            {
              type: 'docSidebar',
              sidebarId: 'distributeSidebar',
              label: '元服务开发',
            },
            // ... more items
          ],
          },
          {
            href: 'https://developer.huawei.com/consumer/cn/doc/app/agc-help-started-0000001146511331',
            label: '分发',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'arktsSidebar',
            position: 'right',
            label: 'ArkTS',
          },
          {
            type: 'docSidebar',
            sidebarId: 'ideSidebar',
            position: 'right',
            label: 'DevEco Studio',
          },
          {
            type: 'docSidebar',
            sidebarId: 'serviceSidebar',
            position: 'right',
            label: 'DevEco Service',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '设计',
                to: '/docs/design/intro',
              },
              {
                label: '开发',
                to: '/docs/guides/intro',
              },
              {
                label: '分发',
                to: '/docs/distribute/intro',
              },
            ],
          },
          {
            title: 'Tools',
            items: [
              {
                label: 'ArkTS',
                to: '/docs/arkts/intro',
              },
              {
                label: 'DevEco Studio',
                to: '/docs/ide/intro',
              },
              {
                label: 'DevEco Service',
                to: '/docs/service/intro',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'HarmonyOS官网',
                href: 'https://www.harmonyos.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HarmonyOS Developer. Built with Docusaurus. Theme from Dyte.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
