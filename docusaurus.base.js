// @ts-check
// Shared Docusaurus config — imported by both the full build and split module configs.

const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;
const tailwindPlugin = require('./plugins/tailwind-plugin.cjs');
const fs = require('fs');

// Shared plugins (always loaded)
const plugins = [tailwindPlugin];

// Navbar dropdown HTML fragments (shared across all configs)
const navEssentialsHTML = fs.readFileSync('./src/pages/nav-essentials.html', 'utf-8');
const navDesignHTML     = fs.readFileSync('./src/pages/nav-design.html', 'utf-8');
const navDistributeHTML = fs.readFileSync('./src/pages/nav-distribute.html', 'utf-8');
const navMonetizeHTML   = fs.readFileSync('./src/pages/nav-monetize.html', 'utf-8');
const navResourcesHTML  = fs.readFileSync('./src/pages/nav-resources.html', 'utf-8');
const navDevecoHTML     = fs.readFileSync('./src/pages/nav-deveco.html', 'utf-8');

/**
 * Build a Docusaurus config for a specific module.
 * @param {string[]} include - glob patterns for docs to include (e.g. ['design/**\/*.{md,mdx}'])
 * @param {string} sidebarPath - path to the module's sidebar file
 * @param {object} [overrides] - additional overrides (e.g. custom baseUrl)
 * @returns {import('@docusaurus/types').Config}
 */
function createConfig(include, sidebarPath, overrides = {}) {
  return {
    title: 'Developer',
    tagline: 'Welcome',
    favicon: 'img/favicon.ico',
    plugins,
    future: {
      v4: true,
      faster: true,
    },

    url: 'https://developer.harmonyos.cool',
    baseUrl: overrides.baseUrl || '/',

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
      { src: 'https://hm.baidu.com/hm.js?986441c2114752f739a5460119d91e01', async: true },
      { src: '/js/mega-menu.js', async: true },
    ],

    presets: [
      [
        'classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve(sidebarPath),
            include: include,
            editUrl: 'https://github.com/YouniQiao/developer_hos/tree/master/',
          },
          blog: {
            showReadingTime: true,
            editUrl: 'https://github.com/YouniQiao/developer_hos/tree/master/',
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
              to: '/docs/dev/app-dev/getting-started/overview',
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
              to: '/docs/monetize/promotion/ads-ggtfzstp-0000002285988928',
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

    // Allow overrides at the top level
    ...overrides,
  };
}

module.exports = { createConfig };
