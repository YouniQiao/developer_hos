// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

const tailwindPlugin = require('./plugins/tailwind-plugin.cjs');
const plugins = [tailwindPlugin];
const fs = require('fs');
const menuHTML = fs.readFileSync('./src/pages/menus.html', 'utf-8');
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
  plugins,
  future: {
    v4: true,
    faster: true,
  },

  // Set the production url of your site here
  url: 'https://developer.harmonyos.cool',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'YouniQiao', // Usually your GitHub org/user name.
  projectName: 'developer_hos', // Usually your repo name.

  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },

  scripts: [
    {src: 'https://hm.baidu.com/hm.js?986441c2114752f739a5460119d91e01',  async: true},
    {src: '/js/mega-menu.js', async: true},
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
              {
                type: 'html',
                value: navDesignHTML,
                className: 'mega-dropdown',
              },
            ],
          },
          {
            label: '开发与测试',
            type: 'dropdown',
            to: '/docs/dev/getting-started/overview',
            className: 'mega-dropdown',
            items: [
              {
                type: 'html',
                value: navEssentialsHTML,
                className: 'mega-dropdown',
              },
            ],
          },
          {
            label: '分发与运营',
            type: 'dropdown',
            to: '/docs/distribute/agc/overview',
            className: 'mega-dropdown',
            items: [
              {
                type: 'html',
                value: navDistributeHTML,
                className: 'mega-dropdown',
              },
            ],
          },
          {
            label: '推广与变现',
            type: 'dropdown',
            to: '/docs/monetize/promotion/overview',
            className: 'mega-dropdown',
            items: [
              {
                type: 'html',
                value: navMonetizeHTML,
                className: 'mega-dropdown',
              },
            ],
          },
          {
            label: '更多资源',
            type: 'dropdown',
            to: '/docs/resources/design-res/overview',
            className: 'mega-dropdown',
            items: [
              {
                type: 'html',
                value: navResourcesHTML,
                className: 'mega-dropdown',
              },
            ],
          },
          {
            href: 'https://arkts.cool/',
            label: 'ArkTS',
            position: 'right',
            target: '_blank',
            rel: 'noopener noreferrer',
          },
          {
            to: '/docs/tools/overview',
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
            title: 'Main Docs',
            items: [
              {
                label: '设计',
                href: 'https://developer.huawei.com/consumer/cn/doc/design-guides/design-concepts-0000001795698445',
              },
              {
                label: '应用开发',
                to: '/docs/dev/app-dev/overview',
              },
              {
                label: '元服务开发',
                to: '/docs/atomic/startup/overview',
              },
              {
                label: '分发',
                href: 'https://developer.huawei.com/consumer/cn/doc/app/agc-help-started-0000001146511331',
              },
            ],
          },
          {
            title: 'Tools Docs',
            items: [
              {
                label: 'ArkTS',
                href: 'https://arkts.cool/',
              },
              {
                label: 'DevEco Studio',
                to: '/docs/tools/overview',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'HarmonyOS开发者官网',
                href: 'https://developer.huawei.com/consumer/cn/',
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
