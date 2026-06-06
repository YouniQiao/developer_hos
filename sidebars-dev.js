// @ts-check
// Dev sidebar — 应用框架 only (fast local preview).

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  appDevSidebar: [
    {
      "type": "category",
      "label": "入门与准备",
      "collapsed": true,
      "link": { "type": "doc", "id": "dev/app-dev/getting-started/quick-start/quick-start" },
      "items": [
        {
          "type": "category",
          "label": "快速入门",
          "collapsed": true,
          "link": { "type": "doc", "id": "dev/app-dev/getting-started/quick-start/quick-start" },
          "items": [
            "dev/app-dev/getting-started/quick-start/start-overview",
            "dev/app-dev/getting-started/quick-start/start-with-ets-stage"
          ]
        },
        {
          "type": "category",
          "label": "开发基础知识",
          "collapsed": true,
          "link": { "type": "doc", "id": "dev/app-dev/getting-started/dev-fundamentals/development-fundamentals" },
          "items": [
            {
              "type": "category",
              "label": "应用程序包基础知识",
              "collapsed": true,
              "link": { "type": "doc", "id": "dev/app-dev/getting-started/dev-fundamentals/application-package-fundamentals" },
              "items": [
                "dev/app-dev/getting-started/dev-fundamentals/application-package-overview",
                {
                  "type": "category",
                  "label": "应用程序包结构",
                  "collapsed": true,
                  "link": { "type": "doc", "id": "dev/app-dev/getting-started/dev-fundamentals/application-package-structure" },
                  "items": [
                    "dev/app-dev/getting-started/dev-fundamentals/application-package-structure-stage",
                    "dev/app-dev/getting-started/dev-fundamentals/application-package-structure-fa"
                  ]
                },
                {
                  "type": "category",
                  "label": "应用程序包开发与使用",
                  "collapsed": true,
                  "link": { "type": "doc", "id": "dev/app-dev/getting-started/dev-fundamentals/application-package-dev" },
                  "items": [
                    "dev/app-dev/getting-started/dev-fundamentals/hap-package",
                    "dev/app-dev/getting-started/dev-fundamentals/har-package",
                    "dev/app-dev/getting-started/dev-fundamentals/in-app-hsp"
                  ]
                },
                {
                  "type": "category",
                  "label": "应用程序包安装卸载与更新",
                  "collapsed": true,
                  "link": { "type": "doc", "id": "dev/app-dev/getting-started/dev-fundamentals/application-package-install" },
                  "items": [
                    "dev/app-dev/getting-started/dev-fundamentals/application-package-install-uninstall",
                    "dev/app-dev/getting-started/dev-fundamentals/install-and-update-consistency-verification"
                  ]
                }
              ]
            },
            {
              "type": "category",
              "label": "应用配置文件（Stage模型）",
              "collapsed": true,
              "link": { "type": "doc", "id": "dev/app-dev/getting-started/dev-fundamentals/application-configuration-file-stage" },
              "items": [
                "dev/app-dev/getting-started/dev-fundamentals/application-configuration-file-overview-stage",
                "dev/app-dev/getting-started/dev-fundamentals/app-configuration-file",
                "dev/app-dev/getting-started/dev-fundamentals/module-configuration-file"
              ]
            },
            {
              "type": "category",
              "label": "应用配置文件（FA模型）",
              "collapsed": true,
              "link": { "type": "doc", "id": "dev/app-dev/getting-started/dev-fundamentals/application-configuration-file-fa" },
              "items": [
                "dev/app-dev/getting-started/dev-fundamentals/application-configuration-file-overview-fa",
                "dev/app-dev/getting-started/dev-fundamentals/app-structure",
                "dev/app-dev/getting-started/dev-fundamentals/deviceconfig-structure",
                "dev/app-dev/getting-started/dev-fundamentals/module-structure"
              ]
            },
            {
              "type": "category",
              "label": "典型场景的开发指导",
              "collapsed": true,
              "link": { "type": "doc", "id": "dev/app-dev/getting-started/dev-fundamentals/application-typical-scenarios" },
              "items": [
                "dev/app-dev/getting-started/dev-fundamentals/typical-scenario-configuration",
                "dev/app-dev/getting-started/dev-fundamentals/app-clone",
                "dev/app-dev/getting-started/dev-fundamentals/multiinstance",
                "dev/app-dev/getting-started/dev-fundamentals/layered-image",
                "dev/app-dev/getting-started/dev-fundamentals/har-to-hsp",
                "dev/app-dev/getting-started/dev-fundamentals/hsp-to-har",
                "dev/app-dev/getting-started/dev-fundamentals/hap-to-har",
                "dev/app-dev/getting-started/dev-fundamentals/integrated-hsp"
              ]
            },
            "dev/app-dev/getting-started/dev-fundamentals/common-problem-of-application",
            "dev/app-dev/getting-started/dev-fundamentals/application-package-glossary"
          ]
        },
        "dev/app-dev/getting-started/resource-access/resource-categories-and-access",
        "dev/app-dev/getting-started/glossary/glossary"
      ]
    },
  ]
};

module.exports = sidebars;