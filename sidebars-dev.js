// @ts-check
// Dev sidebar — 应用框架 only (fast local preview).

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  appDevSidebar: [
  "dev/app-dev/getting-started/overview",
  {
    "type": "category",
    "label": "应用框架",
    "collapsed": true,
    "items": [
      {
        "type": "category",
        "label": "Ability Kit（程序框架服务）",
        "collapsed": true,
        "items": [
          "dev/app-dev/application-framework/ability-kit/abilitykit-overview",
          "dev/app-dev/application-framework/ability-kit/application-models",
          {
            "type": "category",
            "label": "Stage模型开发指导",
            "collapsed": true,
            "items": [
              "dev/app-dev/application-framework/ability-kit/stage-model-development/stage-model-development-overview",
              {
                "type": "category",
                "label": "Stage模型应用组件",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/ability-kit/stage-model-development/stage-model-application-components/application-component-configuration-stage",
                  {
                    "type": "category",
                    "label": "UIAbility组件",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-overview",
                      "dev/app-dev/application-framework/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-lifecycle",
                      "dev/app-dev/application-framework/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-launch-type",
                      "dev/app-dev/application-framework/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage",
                      "dev/app-dev/application-framework/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-data-sync-with-ui",
                      "dev/app-dev/application-framework/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-intra-device-interaction",
                      "dev/app-dev/application-framework/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-cross-device-interaction",
                      "dev/app-dev/application-framework/ability-kit/stage-model-development/stage-model-application-components/uiability/ability-recover-guideline"
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/ability-kit/stage-model-development/stage-model-application-components/uiability"
                    }
                  },
                  {
                    "type": "category",
                    "label": "ExtensionAbility组件",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/ability-kit/stage-model-development/stage-model-application-components/extensionability-overview/embeddeduiextensionability",
                      "dev/app-dev/application-framework/ability-kit/stage-model-development/stage-model-application-components/extensionability-overview/app-service-extension-ability",
                      "dev/app-dev/application-framework/ability-kit/stage-model-development/stage-model-application-components/extensionability-overview/agent-extension-ability"
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/ability-kit/stage-model-development/stage-model-application-components/extensionability-overview"
                    }
                  },
                  "dev/app-dev/application-framework/ability-kit/stage-model-development/stage-model-application-components/abilitystage",
                  "dev/app-dev/application-framework/ability-kit/stage-model-development/stage-model-application-components/application-context-stage",
                  {
                    "type": "category",
                    "label": "信息传递载体Want",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/ability-kit/stage-model-development/stage-model-application-components/want/want-overview",
                      "dev/app-dev/application-framework/ability-kit/stage-model-development/stage-model-application-components/want/explicit-implicit-want-mappings",
                      "dev/app-dev/application-framework/ability-kit/stage-model-development/stage-model-application-components/want/ability-startup-with-explicit-want",
                      "dev/app-dev/application-framework/ability-kit/stage-model-development/stage-model-application-components/want/actions-entities"
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/ability-kit/stage-model-development/stage-model-application-components/want"
                    }
                  },
                  "dev/app-dev/application-framework/ability-kit/stage-model-development/stage-model-application-components/component-startup-rules",
                  "dev/app-dev/application-framework/ability-kit/stage-model-development/stage-model-application-components/app-startup",
                  "dev/app-dev/application-framework/ability-kit/stage-model-development/stage-model-application-components/preload-application",
                  "dev/app-dev/application-framework/ability-kit/stage-model-development/stage-model-application-components/ability-exit-info-record",
                  "dev/app-dev/application-framework/ability-kit/stage-model-development/stage-model-application-components/subscribe-system-environment-variable-changes"
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/ability-kit/stage-model-development/stage-model-application-components"
                }
              },
              {
                "type": "category",
                "label": "应用间跳转",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/ability-kit/stage-model-development/inter-app-redirection/link-between-apps-overview",
                  {
                    "type": "category",
                    "label": "拉起指定应用",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/app-startup-overview",
                      "dev/app-dev/application-framework/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/canopenlink",
                      "dev/app-dev/application-framework/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/obtaining-target-app-url-info",
                      "dev/app-dev/application-framework/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/deep-linking-startup",
                      "dev/app-dev/application-framework/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/app-linking-startup",
                      "dev/app-dev/application-framework/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/uiability-startup-adjust",
                      "dev/app-dev/application-framework/ability-kit/stage-model-development/inter-app-redirection/directional-redirection/app-uri-config"
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/ability-kit/stage-model-development/inter-app-redirection/directional-redirection"
                    }
                  },
                  {
                    "type": "category",
                    "label": "拉起指定类型的应用",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/start-intent-panel",
                      "dev/app-dev/application-framework/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/start-navigation-apps",
                      "dev/app-dev/application-framework/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/start-email-apps",
                      "dev/app-dev/application-framework/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/start-email-apps-by-mailto",
                      "dev/app-dev/application-framework/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/start-finance-apps",
                      "dev/app-dev/application-framework/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/start-flight-apps",
                      "dev/app-dev/application-framework/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/start-express-apps",
                      "dev/app-dev/application-framework/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/photoeditorextensionability",
                      "dev/app-dev/application-framework/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection/file-processing-apps-startup"
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/ability-kit/stage-model-development/inter-app-redirection/specified-type-app-redirection"
                    }
                  },
                  "dev/app-dev/application-framework/ability-kit/stage-model-development/inter-app-redirection/system-app-startup"
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/ability-kit/stage-model-development/inter-app-redirection"
                }
              },
              "dev/app-dev/application-framework/ability-kit/stage-model-development/process-model-stage",
              "dev/app-dev/application-framework/ability-kit/stage-model-development/thread-model-stage",
              "dev/app-dev/application-framework/ability-kit/stage-model-development/config-file-stage",
              {
                "type": "category",
                "label": "意图框架开发指导",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/ability-kit/stage-model-development/insight-intent/insight-intent-overview",
                  {
                    "type": "category",
                    "label": "开发意图",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/ability-kit/stage-model-development/insight-intent/insight-intent-development/insight-intent-definition",
                      "dev/app-dev/application-framework/ability-kit/stage-model-development/insight-intent/insight-intent-development/insight-intent-config-development",
                      "dev/app-dev/application-framework/ability-kit/stage-model-development/insight-intent/insight-intent-development/insight-intent-decorator-development",
                      "dev/app-dev/application-framework/ability-kit/stage-model-development/insight-intent/insight-intent-development/insight-intent-access-specifications"
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/ability-kit/stage-model-development/insight-intent/insight-intent-development"
                    }
                  },
                  "dev/app-dev/application-framework/ability-kit/stage-model-development/insight-intent/insight-intent-debug"
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/ability-kit/stage-model-development/insight-intent"
                }
              },
              {
                "type": "category",
                "label": "智能体开发指导",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/ability-kit/stage-model-development/agent/agent-extension-configuration"
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/ability-kit/stage-model-development/agent"
                }
              }
            ],
            "link": {
              "type": "doc",
              "id": "dev/app-dev/application-framework/ability-kit/stage-model-development"
            }
          },
          {
            "type": "category",
            "label": "FA模型开发指导",
            "collapsed": true,
            "items": [
              "dev/app-dev/application-framework/ability-kit/fa-model-development/fa-model-development-overview",
              {
                "type": "category",
                "label": "FA模型应用组件",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/ability-kit/fa-model-development/fa-model-application-components/application-component-configuration-fa",
                  {
                    "type": "category",
                    "label": "PageAbility组件开发指导",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/ability-kit/fa-model-development/fa-model-application-components/pageability/pageability-overview",
                      "dev/app-dev/application-framework/ability-kit/fa-model-development/fa-model-application-components/pageability/pageability-configuration",
                      "dev/app-dev/application-framework/ability-kit/fa-model-development/fa-model-application-components/pageability/pageability-lifecycle",
                      "dev/app-dev/application-framework/ability-kit/fa-model-development/fa-model-application-components/pageability/pageability-launch-type",
                      "dev/app-dev/application-framework/ability-kit/fa-model-development/fa-model-application-components/pageability/create-pageability",
                      "dev/app-dev/application-framework/ability-kit/fa-model-development/fa-model-application-components/pageability/start-local-pageability",
                      "dev/app-dev/application-framework/ability-kit/fa-model-development/fa-model-application-components/pageability/stop-pageability",
                      "dev/app-dev/application-framework/ability-kit/fa-model-development/fa-model-application-components/pageability/start-page",
                      "dev/app-dev/application-framework/ability-kit/fa-model-development/fa-model-application-components/pageability/window-properties",
                      "dev/app-dev/application-framework/ability-kit/fa-model-development/fa-model-application-components/pageability/request-permissions",
                      "dev/app-dev/application-framework/ability-kit/fa-model-development/fa-model-application-components/pageability/redirection-rules"
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/ability-kit/fa-model-development/fa-model-application-components/pageability"
                    }
                  },
                  {
                    "type": "category",
                    "label": "ServiceAbility组件开发指导",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/ability-kit/fa-model-development/fa-model-application-components/serviceability/serviceability-overview",
                      "dev/app-dev/application-framework/ability-kit/fa-model-development/fa-model-application-components/serviceability/serviceability-configuration",
                      "dev/app-dev/application-framework/ability-kit/fa-model-development/fa-model-application-components/serviceability/serviceability-lifecycle",
                      "dev/app-dev/application-framework/ability-kit/fa-model-development/fa-model-application-components/serviceability/create-serviceability",
                      "dev/app-dev/application-framework/ability-kit/fa-model-development/fa-model-application-components/serviceability/start-serviceability",
                      "dev/app-dev/application-framework/ability-kit/fa-model-development/fa-model-application-components/serviceability/connect-serviceability"
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/ability-kit/fa-model-development/fa-model-application-components/serviceability"
                    }
                  },
                  {
                    "type": "category",
                    "label": "DataAbility组件开发指导",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/ability-kit/fa-model-development/fa-model-application-components/dataability/dataability-overview",
                      "dev/app-dev/application-framework/ability-kit/fa-model-development/fa-model-application-components/dataability/dataability-configuration",
                      "dev/app-dev/application-framework/ability-kit/fa-model-development/fa-model-application-components/dataability/dataability-lifecycle",
                      "dev/app-dev/application-framework/ability-kit/fa-model-development/fa-model-application-components/dataability/create-dataability",
                      "dev/app-dev/application-framework/ability-kit/fa-model-development/fa-model-application-components/dataability/start-dataability",
                      "dev/app-dev/application-framework/ability-kit/fa-model-development/fa-model-application-components/dataability/access-dataability",
                      "dev/app-dev/application-framework/ability-kit/fa-model-development/fa-model-application-components/dataability/dataability-permission-control"
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/ability-kit/fa-model-development/fa-model-application-components/dataability"
                    }
                  },
                  "dev/app-dev/application-framework/ability-kit/fa-model-development/fa-model-application-components/application-context-fa",
                  "dev/app-dev/application-framework/ability-kit/fa-model-development/fa-model-application-components/want-fa",
                  "dev/app-dev/application-framework/ability-kit/fa-model-development/fa-model-application-components/component-startup-rules-fa"
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/ability-kit/fa-model-development/fa-model-application-components"
                }
              },
              "dev/app-dev/application-framework/ability-kit/fa-model-development/process-model-fa",
              "dev/app-dev/application-framework/ability-kit/fa-model-development/thread-model-fa",
              "dev/app-dev/application-framework/ability-kit/fa-model-development/config-file-fa"
            ],
            "link": {
              "type": "doc",
              "id": "dev/app-dev/application-framework/ability-kit/fa-model-development"
            }
          },
          {
            "type": "category",
            "label": "Native子进程开发指导",
            "collapsed": true,
            "items": [
              "dev/app-dev/application-framework/ability-kit/native-childprocess-development/capi-nativechildprocess-development-guideline",
              "dev/app-dev/application-framework/ability-kit/native-childprocess-development/capi-nativechildprocess-exit-info"
            ],
            "link": {
              "type": "doc",
              "id": "dev/app-dev/application-framework/ability-kit/native-childprocess-development"
            }
          },
          "dev/app-dev/application-framework/ability-kit/ability-terminology"
        ],
        "link": {
          "type": "doc",
          "id": "dev/app-dev/application-framework/ability-kit"
        }
      },
      {
        "type": "category",
        "label": "Accessibility Kit（无障碍服务）",
        "collapsed": true,
        "items": [
          "dev/app-dev/application-framework/accessibility-kit/accessibilitykit-overview",
          {
            "type": "category",
            "label": "提升应用的无障碍体验",
            "collapsed": true,
            "items": [
              {
                "type": "category",
                "label": "提升屏幕朗读无障碍体验",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-screen-reading",
                  "dev/app-dev/application-framework/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-disable-screen-reading-focus",
                  "dev/app-dev/application-framework/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-multidimensional-nesting",
                  "dev/app-dev/application-framework/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-multicomponent",
                  "dev/app-dev/application-framework/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-button-annotation",
                  "dev/app-dev/application-framework/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-media-reading",
                  "dev/app-dev/application-framework/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-dynamic-content-change",
                  "dev/app-dev/application-framework/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-component-status-change",
                  "dev/app-dev/application-framework/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-operation-error",
                  "dev/app-dev/application-framework/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-multilingual",
                  "dev/app-dev/application-framework/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-component-relocation",
                  "dev/app-dev/application-framework/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-focus-position-setting",
                  "dev/app-dev/application-framework/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/list-item-combination-scenarios",
                  "dev/app-dev/application-framework/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/accessibilitystatedescription",
                  "dev/app-dev/application-framework/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/accessibilityactionoptions-scrollstep",
                  "dev/app-dev/application-framework/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/proactively-notify-page-changes",
                  "dev/app-dev/application-framework/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/pop-up-controls-focus",
                  "dev/app-dev/application-framework/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-card-automatically-centered"
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience"
                }
              }
            ],
            "link": {
              "type": "doc",
              "id": "dev/app-dev/application-framework/accessibility-kit/accessibility-approve-experience"
            }
          },
          {
            "type": "category",
            "label": "测试应用的无障碍功能",
            "collapsed": true,
            "items": [
              "dev/app-dev/application-framework/accessibility-kit/test-app-accessibility/test-screen-reader"
            ]
          }
        ],
        "link": {
          "type": "doc",
          "id": "dev/app-dev/application-framework/accessibility-kit"
        }
      },
      {
        "type": "category",
        "label": "ArkData（方舟数据管理）",
        "collapsed": true,
        "items": [
          "dev/app-dev/application-framework/arkdata/data-mgmt-overview",
          {
            "type": "category",
            "label": "标准化数据定义",
            "collapsed": true,
            "items": [
              "dev/app-dev/application-framework/arkdata/uniform-data-definition/unified-data-definition-overview",
              "dev/app-dev/application-framework/arkdata/uniform-data-definition/uniform-data-type-descriptors",
              "dev/app-dev/application-framework/arkdata/uniform-data-definition/uniform-data-type-descriptors-c",
              "dev/app-dev/application-framework/arkdata/uniform-data-definition/uniform-data-structure",
              "dev/app-dev/application-framework/arkdata/uniform-data-definition/uniform-data-structure-c",
              "dev/app-dev/application-framework/arkdata/uniform-data-definition/components-based-on-uniform-data-structure",
              "dev/app-dev/application-framework/arkdata/uniform-data-definition/uniform-data-type-list"
            ],
            "link": {
              "type": "doc",
              "id": "dev/app-dev/application-framework/arkdata/uniform-data-definition"
            }
          },
          {
            "type": "category",
            "label": "应用数据持久化",
            "collapsed": true,
            "items": [
              "dev/app-dev/application-framework/arkdata/app-data-persistence/app-data-persistence-overview",
              "dev/app-dev/application-framework/arkdata/app-data-persistence/data-persistence-by-preferences",
              "dev/app-dev/application-framework/arkdata/app-data-persistence/preferences-guidelines",
              "dev/app-dev/application-framework/arkdata/app-data-persistence/data-persistence-by-kv-store",
              "dev/app-dev/application-framework/arkdata/app-data-persistence/data-persistence-by-rdb-store",
              "dev/app-dev/application-framework/arkdata/app-data-persistence/native-relational-store-guidelines",
              "dev/app-dev/application-framework/arkdata/app-data-persistence/data-persistence-by-vector-store",
              "dev/app-dev/application-framework/arkdata/app-data-persistence/native-vector-store-guidelines"
            ],
            "link": {
              "type": "doc",
              "id": "dev/app-dev/application-framework/arkdata/app-data-persistence"
            }
          },
          {
            "type": "category",
            "label": "同应用跨设备数据同步（分布式）",
            "collapsed": true,
            "items": [
              "dev/app-dev/application-framework/arkdata/distributed-data-sync/sync-app-data-across-devices-overview",
              "dev/app-dev/application-framework/arkdata/distributed-data-sync/data-sync-of-kv-store",
              "dev/app-dev/application-framework/arkdata/distributed-data-sync/data-sync-of-rdb-store",
              "dev/app-dev/application-framework/arkdata/distributed-data-sync/data-sync-of-distributed-data-object"
            ],
            "link": {
              "type": "doc",
              "id": "dev/app-dev/application-framework/arkdata/distributed-data-sync"
            }
          },
          {
            "type": "category",
            "label": "同应用端云数据同步（分布式）",
            "collapsed": true,
            "items": [
              "dev/app-dev/application-framework/arkdata/distributed-data-cloud-sync/data-cloud-sync-overview",
              "dev/app-dev/application-framework/arkdata/distributed-data-cloud-sync/data-sync-with-cloud",
              "dev/app-dev/application-framework/arkdata/distributed-data-cloud-sync/data-cloud-sync-of-rdb-store"
            ],
            "link": {
              "type": "doc",
              "id": "dev/app-dev/application-framework/arkdata/distributed-data-cloud-sync"
            }
          },
          {
            "type": "category",
            "label": "数据可靠性与安全性",
            "collapsed": true,
            "items": [
              "dev/app-dev/application-framework/arkdata/data-reliability-security/data-reliability-security-overview",
              "dev/app-dev/application-framework/arkdata/data-reliability-security/data-backup-and-restore",
              "dev/app-dev/application-framework/arkdata/data-reliability-security/native-backup-and-restore",
              "dev/app-dev/application-framework/arkdata/data-reliability-security/data-encryption",
              "dev/app-dev/application-framework/arkdata/data-reliability-security/native-data-encryption",
              "dev/app-dev/application-framework/arkdata/data-reliability-security/access-control-by-device-and-data-level",
              "dev/app-dev/application-framework/arkdata/data-reliability-security/native-access-control-by-device-and-data-level",
              "dev/app-dev/application-framework/arkdata/data-reliability-security/encrypted-estore-guidelines"
            ],
            "link": {
              "type": "doc",
              "id": "dev/app-dev/application-framework/arkdata/data-reliability-security"
            }
          },
          {
            "type": "category",
            "label": "跨应用数据共享",
            "collapsed": true,
            "items": [
              "dev/app-dev/application-framework/arkdata/cross-app-data-share/data-share-overview",
              {
                "type": "category",
                "label": "一对多跨应用数据共享",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/arkdata/cross-app-data-share/one-to-many-data-share/share-config"
                ]
              },
              {
                "type": "category",
                "label": "多对多跨应用数据共享",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/arkdata/cross-app-data-share/many-to-many-data-share/unified-data-channels",
                  "dev/app-dev/application-framework/arkdata/cross-app-data-share/many-to-many-data-share/unified-data-channels-c"
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/arkdata/cross-app-data-share/many-to-many-data-share"
                }
              }
            ],
            "link": {
              "type": "doc",
              "id": "dev/app-dev/application-framework/arkdata/cross-app-data-share"
            }
          },
          "dev/app-dev/application-framework/arkdata/aip-data-intelligence-embedding",
          {
            "type": "category",
            "label": "arkdata数据库调试工具",
            "collapsed": true,
            "items": [
              "dev/app-dev/application-framework/arkdata/arkdata-debug-tool/preferences-debug-tool",
              "dev/app-dev/application-framework/arkdata/arkdata-debug-tool/vector-store-debug-tool"
            ],
            "link": {
              "type": "doc",
              "id": "dev/app-dev/application-framework/arkdata/arkdata-debug-tool"
            }
          },
          "dev/app-dev/application-framework/arkdata/sqlite-database-debug-tool",
          "dev/app-dev/application-framework/arkdata/data-terminology",
          "dev/app-dev/application-framework/arkdata/data-faq"
        ],
        "link": {
          "type": "doc",
          "id": "dev/app-dev/application-framework/arkdata"
        }
      },
      {
        "type": "category",
        "label": "ArkTS（方舟编程语言）",
        "collapsed": true,
        "items": [
          "dev/app-dev/application-framework/arkts/arkts-overview",
          {
            "type": "category",
            "label": "ArkTS基础类库",
            "collapsed": true,
            "items": [
              "dev/app-dev/application-framework/arkts/arkts-utils/arkts-utils-overview",
              {
                "type": "category",
                "label": "XML生成、解析与转换",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/arkts/arkts-utils/xml-generation-parsing-conversion/xml-overview",
                  "dev/app-dev/application-framework/arkts/arkts-utils/xml-generation-parsing-conversion/xml-generation",
                  "dev/app-dev/application-framework/arkts/arkts-utils/xml-generation-parsing-conversion/xml-parsing",
                  "dev/app-dev/application-framework/arkts/arkts-utils/xml-generation-parsing-conversion/xml-conversion"
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/arkts/arkts-utils/xml-generation-parsing-conversion"
                }
              },
              "dev/app-dev/application-framework/arkts/arkts-utils/buffer",
              "dev/app-dev/application-framework/arkts/arkts-utils/arkts-json",
              {
                "type": "category",
                "label": "ArkTS容器类库",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/arkts/arkts-utils/containers/container-overview",
                  "dev/app-dev/application-framework/arkts/arkts-utils/containers/linear-container",
                  "dev/app-dev/application-framework/arkts/arkts-utils/containers/nonlinear-container"
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/arkts/arkts-utils/containers"
                }
              },
              "dev/app-dev/application-framework/arkts/arkts-utils/commonlibrary-faq"
            ],
            "link": {
              "type": "doc",
              "id": "dev/app-dev/application-framework/arkts/arkts-utils"
            }
          },
          {
            "type": "category",
            "label": "ArkTS并发",
            "collapsed": true,
            "items": [
              "dev/app-dev/application-framework/arkts/arkts-concurrency/concurrency-overview",
              "dev/app-dev/application-framework/arkts/arkts-concurrency/async-concurrency-overview",
              {
                "type": "category",
                "label": "多线程并发",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/arkts/arkts-concurrency/multithread-concurrency/multi-thread-concurrency-overview",
                  "dev/app-dev/application-framework/arkts/arkts-concurrency/multithread-concurrency/taskpool-introduction",
                  "dev/app-dev/application-framework/arkts/arkts-concurrency/multithread-concurrency/worker-introduction",
                  "dev/app-dev/application-framework/arkts/arkts-concurrency/multithread-concurrency/taskpool-vs-worker"
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/arkts/arkts-concurrency/multithread-concurrency"
                }
              },
              {
                "type": "category",
                "label": "并发线程间通信",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/arkts/arkts-concurrency/interthread-communication/interthread-communication-overview",
                  {
                    "type": "category",
                    "label": "线程间通信对象",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/serializable-overview",
                      "dev/app-dev/application-framework/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/normal-object",
                      "dev/app-dev/application-framework/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/container-object",
                      "dev/app-dev/application-framework/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/arraybuffer-object",
                      "dev/app-dev/application-framework/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/shared-arraybuffer-object",
                      "dev/app-dev/application-framework/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/transferabled-object",
                      {
                        "type": "category",
                        "label": "Sendable对象",
                        "collapsed": true,
                        "items": [
                          "dev/app-dev/application-framework/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable",
                          "dev/app-dev/application-framework/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/sendable-constraints",
                          "dev/app-dev/application-framework/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-async-lock-introduction",
                          "dev/app-dev/application-framework/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-condition-variable-introduction",
                          "dev/app-dev/application-framework/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/ason-parsing-generation",
                          "dev/app-dev/application-framework/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-collections-introduction",
                          "dev/app-dev/application-framework/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable-module",
                          "dev/app-dev/application-framework/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/sendable-freeze",
                          "dev/app-dev/application-framework/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/sendable-guide"
                        ],
                        "link": {
                          "type": "doc",
                          "id": "dev/app-dev/application-framework/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object"
                        }
                      }
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/arkts/arkts-concurrency/interthread-communication/interthread-communication-object"
                    }
                  },
                  {
                    "type": "category",
                    "label": "线程间通信场景",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/independent-time-consuming-task",
                      "dev/app-dev/application-framework/arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/multi-time-consuming-tasks",
                      "dev/app-dev/application-framework/arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/taskpool-communicates-with-mainthread",
                      "dev/app-dev/application-framework/arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/worker-communicates-with-mainthread",
                      "dev/app-dev/application-framework/arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/worker-invoke-mainthread-interface",
                      "dev/app-dev/application-framework/arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/worker-postmessage-sendable"
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/arkts/arkts-concurrency/interthread-communication/interthread-communication-guide"
                    }
                  }
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/arkts/arkts-concurrency/interthread-communication"
                }
              },
              {
                "type": "category",
                "label": "应用多线程开发实践",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-overview",
                  {
                    "type": "category",
                    "label": "耗时任务并发场景",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/arkts/arkts-concurrency/multithread-develop-guide/time-consuming-task/time-consuming-task-overview",
                      "dev/app-dev/application-framework/arkts/arkts-concurrency/multithread-develop-guide/time-consuming-task/cpu-intensive-task-development",
                      "dev/app-dev/application-framework/arkts/arkts-concurrency/multithread-develop-guide/time-consuming-task/io-intensive-task-development",
                      "dev/app-dev/application-framework/arkts/arkts-concurrency/multithread-develop-guide/time-consuming-task/sync-task-development"
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/arkts/arkts-concurrency/multithread-develop-guide/time-consuming-task"
                    }
                  },
                  {
                    "type": "category",
                    "label": "长时任务并发场景",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/arkts/arkts-concurrency/multithread-develop-guide/long-time-task/long-time-task-overview",
                      "dev/app-dev/application-framework/arkts/arkts-concurrency/multithread-develop-guide/long-time-task/long-time-task-guide"
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/arkts/arkts-concurrency/multithread-develop-guide/long-time-task"
                    }
                  },
                  {
                    "type": "category",
                    "label": "常驻任务并发场景",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/arkts/arkts-concurrency/multithread-develop-guide/resident-task/resident-task-overview",
                      "dev/app-dev/application-framework/arkts/arkts-concurrency/multithread-develop-guide/resident-task/resident-task-guide"
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/arkts/arkts-concurrency/multithread-develop-guide/resident-task"
                    }
                  },
                  {
                    "type": "category",
                    "label": "应用多线程开发实践案例",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/batch-database-operations-guide",
                      "dev/app-dev/application-framework/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/concurrent-loading-modules-guide",
                      "dev/app-dev/application-framework/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/global-configuration-guide",
                      "dev/app-dev/application-framework/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/makeobserved-sendable",
                      "dev/app-dev/application-framework/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/native-interthread-shared",
                      "dev/app-dev/application-framework/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/taskpool-async-task-guide",
                      "dev/app-dev/application-framework/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/taskpool-waterflow",
                      "dev/app-dev/application-framework/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/sendablelrucache-recent-list",
                      "dev/app-dev/application-framework/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/multi-thread-cancel-task",
                      "dev/app-dev/application-framework/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/napi-coerce-to-native-binding-object",
                      "dev/app-dev/application-framework/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/napi-define-sendable-object",
                      "dev/app-dev/application-framework/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/worker-and-taskpool"
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case"
                    }
                  }
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/arkts/arkts-concurrency/multithread-develop-guide"
                }
              },
              "dev/app-dev/application-framework/arkts/arkts-concurrency/concurrency-faq"
            ],
            "link": {
              "type": "doc",
              "id": "dev/app-dev/application-framework/arkts/arkts-concurrency"
            }
          },
          "dev/app-dev/application-framework/arkts/arkts-cross-language-interaction",
          {
            "type": "category",
            "label": "ArkTS运行时",
            "collapsed": true,
            "items": [
              "dev/app-dev/application-framework/arkts/arkts-runtime/arkts-runtime-overview",
              "dev/app-dev/application-framework/arkts/arkts-runtime/gc-introduction",
              {
                "type": "category",
                "label": "ArkTS模块化",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/arkts/arkts-runtime/arkts-runtime-module/module-principle",
                  "dev/app-dev/application-framework/arkts/arkts-runtime/arkts-runtime-module/arkts-dynamic-import",
                  "dev/app-dev/application-framework/arkts/arkts-runtime/arkts-runtime-module/arkts-lazy-import",
                  "dev/app-dev/application-framework/arkts/arkts-runtime/arkts-runtime-module/js-apis-load-native-module",
                  "dev/app-dev/application-framework/arkts/arkts-runtime/arkts-runtime-module/arkts-import-native-module",
                  "dev/app-dev/application-framework/arkts/arkts-runtime/arkts-runtime-module/load-module-base-nodeapi",
                  "dev/app-dev/application-framework/arkts/arkts-runtime/arkts-runtime-module/arkts-module-side-effects"
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/arkts/arkts-runtime/arkts-runtime-module"
                }
              },
              "dev/app-dev/application-framework/arkts/arkts-runtime/arkts-runtime-faq"
            ],
            "link": {
              "type": "doc",
              "id": "dev/app-dev/application-framework/arkts/arkts-runtime"
            }
          },
          {
            "type": "category",
            "label": "ArkTS编译工具链",
            "collapsed": true,
            "items": [
              "dev/app-dev/application-framework/arkts/arkts-compilation-tool-chain/compilation-tool-chain-overview",
              {
                "type": "category",
                "label": "方舟字节码",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/arkts/arkts-compilation-tool-chain/arkts-bytecode/arkts-bytecode-overview",
                  "dev/app-dev/application-framework/arkts/arkts-compilation-tool-chain/arkts-bytecode/arkts-bytecode-file-format",
                  "dev/app-dev/application-framework/arkts/arkts-compilation-tool-chain/arkts-bytecode/arkts-bytecode-fundamentals",
                  "dev/app-dev/application-framework/arkts/arkts-compilation-tool-chain/arkts-bytecode/arkts-bytecode-function-name",
                  "dev/app-dev/application-framework/arkts/arkts-compilation-tool-chain/arkts-bytecode/customize-bytecode-during-compilation",
                  "dev/app-dev/application-framework/arkts/arkts-compilation-tool-chain/arkts-bytecode/es2abc-faq"
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/arkts/arkts-compilation-tool-chain/arkts-bytecode"
                }
              },
              "dev/app-dev/application-framework/arkts/arkts-compilation-tool-chain/tool-disassembler",
              {
                "type": "category",
                "label": "ArkGuard源码混淆工具",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation-overview",
                  "dev/app-dev/application-framework/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation",
                  "dev/app-dev/application-framework/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation-guide",
                  "dev/app-dev/application-framework/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation-practice",
                  "dev/app-dev/application-framework/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation-questions"
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/arkts/arkts-compilation-tool-chain/arkts-arkguard"
                }
              },
              {
                "type": "category",
                "label": "ArkGuard字节码混淆工具",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation-overview",
                  "dev/app-dev/application-framework/arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation",
                  "dev/app-dev/application-framework/arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation-guide",
                  "dev/app-dev/application-framework/arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation-practice",
                  "dev/app-dev/application-framework/arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation-questions"
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode"
                }
              },
              "dev/app-dev/application-framework/arkts/arkts-compilation-tool-chain/arkoptions-guide"
            ],
            "link": {
              "type": "doc",
              "id": "dev/app-dev/application-framework/arkts/arkts-compilation-tool-chain"
            }
          }
        ],
        "link": {
          "type": "doc",
          "id": "dev/app-dev/application-framework/arkts"
        }
      },
      {
        "type": "category",
        "label": "ArkUI（方舟UI框架）",
        "collapsed": true,
        "items": [
          "dev/app-dev/application-framework/arkui/arkui-overview",
          {
            "type": "category",
            "label": "UI开发 (ArkTS声明式开发范式)",
            "collapsed": true,
            "items": [
              "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-development-overview",
              {
                "type": "category",
                "label": "学习UI范式基本语法",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-basic-syntax-overview",
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-decorator-overview",
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-declarative-ui-description",
                  {
                    "type": "category",
                    "label": "自定义组件",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-page-custom-components-lifecycle",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-custom-components-new-lifecycle",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-page-custom-components-layout",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-custom-components-access-restrictions",
                      {
                        "type": "category",
                        "label": "自定义组件复用",
                        "collapsed": true,
                        "items": [
                          "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-reusable",
                          "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-new-reusablev2"
                        ],
                        "link": {
                          "type": "doc",
                          "id": "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable"
                        }
                      },
                      {
                        "type": "category",
                        "label": "自定义组件冻结",
                        "collapsed": true,
                        "items": [
                          "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-freeze/arkts-custom-components-freeze",
                          "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-freeze/arkts-custom-components-freezev2"
                        ],
                        "link": {
                          "type": "doc",
                          "id": "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-freeze"
                        }
                      }
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components"
                    }
                  },
                  {
                    "type": "category",
                    "label": "组件扩展",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-extend-components-overview",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builder",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-localbuilder",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builderparam",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-wrapbuilder",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-mutablebuilder",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-style",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-extend",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-statestyles",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-animatable-extend"
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components"
                    }
                  },
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-require"
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax"
                }
              },
              {
                "type": "category",
                "label": "学习UI范式状态管理",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-overview",
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-glossary",
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-introduce",
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-update-difference",
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-mvvm",
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-mvvm-v2",
                  {
                    "type": "category",
                    "label": "状态管理（V1）",
                    "collapsed": true,
                    "items": [
                      {
                        "type": "category",
                        "label": "管理组件拥有的状态",
                        "collapsed": true,
                        "items": [
                          "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state",
                          "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-prop",
                          "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-link",
                          "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-provide-and-consume",
                          "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink",
                          "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-watch"
                        ],
                        "link": {
                          "type": "doc",
                          "id": "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management"
                        }
                      },
                      {
                        "type": "category",
                        "label": "管理数据对象的状态",
                        "collapsed": true,
                        "items": [
                          "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-data-object-state-management/arkts-track"
                        ],
                        "link": {
                          "type": "doc",
                          "id": "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-data-object-state-management"
                        }
                      },
                      {
                        "type": "category",
                        "label": "管理应用拥有的状态",
                        "collapsed": true,
                        "items": [
                          "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-application-state-management-overview",
                          "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage",
                          "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
                          "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-persiststorage",
                          "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-environment"
                        ],
                        "link": {
                          "type": "doc",
                          "id": "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management"
                        }
                      }
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1"
                    }
                  },
                  {
                    "type": "category",
                    "label": "状态管理（V2）",
                    "collapsed": true,
                    "items": [
                      {
                        "type": "category",
                        "label": "管理组件拥有的状态",
                        "collapsed": true,
                        "items": [
                          "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-local",
                          "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-param",
                          "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-once",
                          "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-event",
                          "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-provider-and-consumer"
                        ],
                        "link": {
                          "type": "doc",
                          "id": "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state"
                        }
                      },
                      {
                        "type": "category",
                        "label": "管理数据对象的状态",
                        "collapsed": true,
                        "items": [
                          "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
                          "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-monitor",
                          "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-syncmonitor",
                          "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-computed",
                          "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-type"
                        ],
                        "link": {
                          "type": "doc",
                          "id": "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state"
                        }
                      },
                      {
                        "type": "category",
                        "label": "管理应用拥有的状态",
                        "collapsed": true,
                        "items": [
                          "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-application-state/arkts-new-appstoragev2",
                          "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-application-state/arkts-new-persistencev2"
                        ],
                        "link": {
                          "type": "doc",
                          "id": "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-application-state"
                        }
                      }
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2"
                    }
                  },
                  {
                    "type": "category",
                    "label": "辅助接口",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-gettarget",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-makeobserved",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-canbeobserved",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-addmonitor-clearmonitor",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-applysync-flushupdates-flushuiupdates"
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils"
                    }
                  },
                  {
                    "type": "category",
                    "label": "语法糖",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-syntactic-sugar/arkts-two-way-sync",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-syntactic-sugar/arkts-new-binding"
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-syntactic-sugar"
                    }
                  },
                  {
                    "type": "category",
                    "label": "状态管理V1-V2迁移指导",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-v1-v2-migration",
                      {
                        "type": "category",
                        "label": "状态管理V1向V2迁移场景",
                        "collapsed": true,
                        "items": [
                          "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-inner-component",
                          "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-inner-class",
                          "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-application",
                          "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-reusable",
                          "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-rendering-control-repeat",
                          "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-inner-object",
                          "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-animateto"
                        ],
                        "link": {
                          "type": "doc",
                          "id": "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide"
                        }
                      },
                      {
                        "type": "category",
                        "label": "状态管理V1和V2混用场景",
                        "collapsed": true,
                        "items": [
                          "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/v1v2-mixing/arkts-v1-v2-mixusage-before-api-version",
                          "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/v1v2-mixing/arkts-v1-v2-mixusage"
                        ],
                        "link": {
                          "type": "doc",
                          "id": "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/v1v2-mixing"
                        }
                      }
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide"
                    }
                  },
                  {
                    "type": "category",
                    "label": "状态管理常见问题",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-faq/arkts-state-management-faq-inner-component",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-faq/arkts-state-management-faq-inner-class",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-faq/arkts-state-management-faq-application-and-others",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-faq/troubleshooting-state-manage"
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-faq"
                    }
                  }
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management"
                }
              },
              {
                "type": "category",
                "label": "学习UI范式渲染控制",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-overview",
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-ifelse",
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-foreach",
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-lazyforeach",
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-rendering-control/arkts-new-rendering-control-repeat",
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-contentslot"
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-rendering-control"
                }
              },
              {
                "type": "category",
                "label": "学习响应式环境变量",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-env-property/arkts-env-system-property"
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-env-property"
                }
              },
              {
                "type": "category",
                "label": "设置组件导航和页面路由",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-navigation-introduction",
                  {
                    "type": "category",
                    "label": "组件导航(Navigation) (推荐)",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-navigation-navigation/arkts-navigation-architecture",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-navigation-navigation/arkts-navigation-navdestination",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-navigation-navigation/arkts-navigation-jump",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-navigation-navigation/arkts-navigation-animation",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-navigation-navigation/arkts-navigation-cross-package",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-navigation-navigation/arkts-navigation-split-mode"
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-navigation-navigation"
                    }
                  },
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-routing",
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-router-to-navigation"
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-set-navigation-routing"
                }
              },
              {
                "type": "category",
                "label": "组件布局",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-layout-development/arkts-layout-development-overview",
                  {
                    "type": "category",
                    "label": "构建布局",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-layout-development-linear",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-layout-development-stack-layout",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-layout-development-flex-layout",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-layout-development-relative-layout",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-layout-development-grid-layout",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-layout-development-dynamiclayout",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-navigation-tabs"
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout"
                    }
                  },
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-layout-development/arkts-develop-apply-immersive-effects"
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-layout-development"
                }
              },
              {
                "type": "category",
                "label": "列表与网格",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-list-and-grid/arkts-list-grid-development-overview",
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-list-and-grid/arkts-layout-development-create-list",
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-list-and-grid/arkts-layout-development-create-arclist",
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-list-and-grid/arkts-layout-development-create-grid",
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-list-and-grid/arkts-layout-development-create-waterflow"
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-list-and-grid"
                }
              },
              {
                "type": "category",
                "label": "使用文本",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-text/arkts-text-introduction",
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-text/arkts-common-components-text-display",
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-text/arkts-common-components-text-input",
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-text/arkts-common-components-richeditor",
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-text/arkts-common-components-symbol",
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-text/arkts-styled-string",
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-text/arkts-text-image-layout",
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-text/arkts-manage-keyboard"
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-text"
                }
              },
              {
                "type": "category",
                "label": "媒体展示",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-media-display/arkts-graphics-display",
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-media-display/arkts-common-components-video-player",
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-media-display/arkts-layout-development-create-looping",
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-media-display/arkts-layout-development-arcswiper"
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-media-display"
                }
              },
              {
                "type": "category",
                "label": "按钮与选择",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-form-selection/arkts-forms-overview",
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-form-selection/arkts-common-components-button",
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-form-selection/arkts-advanced-components-arcbutton",
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-form-selection/arkts-common-components-radio-button",
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-form-selection/arkts-common-components-switch"
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-form-selection"
                }
              },
              {
                "type": "category",
                "label": "添加组件",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-add-component/napi-xcomponent-guidelines",
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-add-component/arkts-common-components-progress-indicator"
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-add-component"
                }
              },
              {
                "type": "category",
                "label": "使用弹窗",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-dialog/arkts-dialog-overview",
                  {
                    "type": "category",
                    "label": "弹出框 (Dialog)",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-base-dialog-overview",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-uicontext-custom-dialog",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-common-components-custom-dialog",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-fixes-style-dialog",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-embedded-dialog",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-dialog-levelorder",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-dialog-controller",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-dialog-focusable",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-dialog-mask"
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs"
                    }
                  },
                  {
                    "type": "category",
                    "label": "菜单",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-menu/arkts-menu-overview",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-menu/arkts-popup-and-menu-components-menu",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-menu/arkts-popup-and-menu-components-uicontext-menu"
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-menu"
                    }
                  },
                  {
                    "type": "category",
                    "label": "气泡提示",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-popup/arkts-popup-overview",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-popup/arkts-popup-and-menu-components-popup",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-popup/arkts-popup-and-menu-components-uicontext-popup"
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-popup"
                    }
                  },
                  {
                    "type": "category",
                    "label": "绑定模态页面",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-dialog/arkts-bind-modal/arkts-modal-overview",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-dialog/arkts-bind-modal/arkts-sheet-page",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-dialog/arkts-bind-modal/arkts-contentcover-page"
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-dialog/arkts-bind-modal"
                    }
                  },
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-dialog/arkts-create-toast",
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-dialog/arkts-create-overlaymanager"
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-dialog"
                }
              },
              {
                "type": "category",
                "label": "几何图形绘制",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-draw-graphics/arkts-shape-overview",
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-draw-graphics/arkts-geometric-shape-drawing",
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-draw-graphics/arkts-clip-shape"
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-draw-graphics"
                }
              },
              {
                "type": "category",
                "label": "添加交互响应",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-interaction-capability-overview",
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-interaction-basic-principles",
                  {
                    "type": "category",
                    "label": "输入设备与事件",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-raw-input-event/arkts-interaction-development-guide-touch-screen",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-raw-input-event/arkts-interaction-development-guide-mouse",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-raw-input-event/arkts-interaction-development-guide-touchpad",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-raw-input-event/arkts-interaction-development-guide-keyboard",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-raw-input-event/arkts-interaction-development-guide-gamepad",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-raw-input-event/arkts-common-events-crown-event"
                    ]
                  },
                  {
                    "type": "category",
                    "label": "添加手势响应",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-binding",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-single-gesture",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-combined-gestures",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-multi-level-gesture",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-gesture-judge"
                    ]
                  },
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-common-events-drag-event",
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-common-events-focus-event"
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-interaction-development-guide-overview"
                }
              },
              {
                "type": "category",
                "label": "使用动画",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-animation/arkts-animation",
                  {
                    "type": "category",
                    "label": "属性动画",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-attribute/arkts-attribute-animation-overview",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-attribute/arkts-attribute-animation-apis",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-attribute/arkts-custom-attribute-animation"
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-attribute"
                    }
                  },
                  {
                    "type": "category",
                    "label": "转场动画",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-transition-overview",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-enter-exit-transition",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-modal-transition",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-shared-element-transition",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-rotation-transition-animation",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-page-transition-animation"
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition"
                    }
                  },
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-animation/arkts-particle-animation",
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-animation/arkts-component-animation",
                  {
                    "type": "category",
                    "label": "动画曲线",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-curve/arkts-curve-overview",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-curve/arkts-traditional-curve",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-curve/arkts-spring-curve"
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-curve"
                    }
                  },
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-smoothing",
                  {
                    "type": "category",
                    "label": "动画效果",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-effects/arkts-blur-effect",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-effects/arkts-shadow-effect",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-effects/arkts-color-effect"
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-effects"
                    }
                  },
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-animation/arkts-animator"
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-animation"
                }
              },
              {
                "type": "category",
                "label": "使用自定义能力",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-user-defined",
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-user-defined-composition",
                  {
                    "type": "category",
                    "label": "自定义节点",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-node",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-place-holder",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-framenode",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-rendernode",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-buildernode",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-crosslanguage"
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes"
                    }
                  },
                  {
                    "type": "category",
                    "label": "自定义绘制",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-draw/arkts-drawing-customization-on-canvas",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-draw/arkts-user-defined-extension-drawmodifier"
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-draw"
                    }
                  },
                  {
                    "type": "category",
                    "label": "Modifier机制",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-modifier/arkts-user-defined-modifier",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-modifier/arkts-common-attributes-content-modifier",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-modifier/arkts-user-defined-extension-attributemodifier",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-modifier/arkts-user-defined-extension-attributeupdater"
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-modifier"
                    }
                  }
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-user-defined-capabilities"
                }
              },
              "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-internationalization",
              {
                "type": "category",
                "label": "无障碍与适老化",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-support-accessibility-friendliness/arkts-universal-attributes-accessibility",
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-support-accessibility-friendliness/arkui-support-for-aging-adaptation"
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-support-accessibility-friendliness"
                }
              },
              {
                "type": "category",
                "label": "主题设置",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-theme/ui-dark-light-color-adaptation",
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-theme/theme_skinning"
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-theme"
                }
              },
              {
                "type": "category",
                "label": "UI系统场景化能力",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-global-interface",
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-uicontext-component-snapshot",
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-manage-components-visibility",
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-inspector-overview",
                  "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-layout-development-media-query",
                  {
                    "type": "category",
                    "label": "嵌入式组件",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-ui-cross-process/arkts-fullscreencomponent",
                      "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-ui-cross-process/arkts-embedded-components"
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-ui-cross-process"
                    }
                  }
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability"
                }
              }
            ],
            "link": {
              "type": "doc",
              "id": "dev/app-dev/application-framework/arkui/arkts-ui-development"
            }
          },
          {
            "type": "category",
            "label": "UI开发 (基于NDK构建UI)",
            "collapsed": true,
            "items": [
              "dev/app-dev/application-framework/arkui/arkts-use-ndk/ndk-build-ui-overview",
              "dev/app-dev/application-framework/arkui/arkts-use-ndk/ndk-access-the-arkts-page",
              {
                "type": "category",
                "label": "添加交互事件",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/arkui/arkts-use-ndk/arkts-add-event/ndk-bind-gesture-events",
                  "dev/app-dev/application-framework/arkui/arkts-use-ndk/arkts-add-event/ndk-drag-event"
                ]
              },
              "dev/app-dev/application-framework/arkui/arkts-use-ndk/ndk-use-animation",
              {
                "type": "category",
                "label": "使用列表与网格",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/arkui/arkts-use-ndk/arkts-list-and-grid-ndk/ndk-loading-long-list",
                  "dev/app-dev/application-framework/arkui/arkts-use-ndk/arkts-list-and-grid-ndk/ndk-waterflow",
                  "dev/app-dev/application-framework/arkui/arkts-use-ndk/arkts-list-and-grid-ndk/ndk-grid"
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/arkui/arkts-use-ndk/arkts-list-and-grid-ndk"
                }
              },
              {
                "type": "category",
                "label": "使用文本",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/arkui/arkts-use-ndk/arkts-build-text-ndk/ndk-styled-string",
                  "dev/app-dev/application-framework/arkui/arkts-use-ndk/arkts-build-text-ndk/ndk-textarea-event"
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/arkui/arkts-use-ndk/arkts-build-text-ndk"
                }
              },
              "dev/app-dev/application-framework/arkui/arkts-use-ndk/ndk-build-pop-up-window",
              "dev/app-dev/application-framework/arkui/arkts-use-ndk/ndk-build-custom-components",
              "dev/app-dev/application-framework/arkui/arkts-use-ndk/ndk-embed-arkts-components",
              "dev/app-dev/application-framework/arkui/arkts-use-ndk/ndk-embed-render-components",
              "dev/app-dev/application-framework/arkui/arkts-use-ndk/ndk-accessibility-xcomponent",
              "dev/app-dev/application-framework/arkui/arkts-use-ndk/arkts-user-defined-draw",
              "dev/app-dev/application-framework/arkui/arkts-use-ndk/ndk-node-query-operate",
              "dev/app-dev/application-framework/arkui/arkts-use-ndk/ndk-embedded-component",
              "dev/app-dev/application-framework/arkui/arkts-use-ndk/ndk-scope-task",
              "dev/app-dev/application-framework/arkui/arkts-use-ndk/ndk-build-on-multi-thread"
            ],
            "link": {
              "type": "doc",
              "id": "dev/app-dev/application-framework/arkui/arkts-use-ndk"
            }
          },
          {
            "type": "category",
            "label": "UI开发 (兼容JS的类Web开发范式)",
            "collapsed": true,
            "items": [
              "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-overview",
              {
                "type": "category",
                "label": "框架说明",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/arkui/ui-js-dev/js-framework-overview/js-framework-file",
                  "dev/app-dev/application-framework/arkui/ui-js-dev/js-framework-overview/js-framework-js-tag",
                  "dev/app-dev/application-framework/arkui/ui-js-dev/js-framework-overview/js-framework-js-file",
                  {
                    "type": "category",
                    "label": "语法",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/arkui/ui-js-dev/js-framework-overview/js-framework-syntax/js-framework-syntax-hml",
                      "dev/app-dev/application-framework/arkui/ui-js-dev/js-framework-overview/js-framework-syntax/js-framework-syntax-css",
                      "dev/app-dev/application-framework/arkui/ui-js-dev/js-framework-overview/js-framework-syntax/js-framework-syntax-js"
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/arkui/ui-js-dev/js-framework-overview/js-framework-syntax"
                    }
                  },
                  "dev/app-dev/application-framework/arkui/ui-js-dev/js-framework-overview/js-framework-lifecycle",
                  "dev/app-dev/application-framework/arkui/ui-js-dev/js-framework-overview/js-framework-resource-restriction",
                  "dev/app-dev/application-framework/arkui/ui-js-dev/js-framework-overview/js-framework-multiple-languages"
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/arkui/ui-js-dev/js-framework-overview"
                }
              },
              {
                "type": "category",
                "label": "构建用户界面",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-ui-component",
                  {
                    "type": "category",
                    "label": "构建布局",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-layout/ui-js-building-ui-layout-intro",
                      "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-layout/ui-js-building-ui-layout-text",
                      "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-layout/ui-js-building-ui-layout-image",
                      "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-layout/ui-js-building-ui-layout-comment",
                      "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-layout/ui-js-building-ui-layout-external-container"
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-layout"
                    }
                  },
                  "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-ui-interactions",
                  "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-ui-animation",
                  "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-ui-event",
                  "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-ui-routes"
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-building-ui"
                }
              },
              {
                "type": "category",
                "label": "常见组件开发指导",
                "collapsed": true,
                "items": [
                  {
                    "type": "category",
                    "label": "容器组件",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-components-list",
                      "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-components-dialog",
                      "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-components-form",
                      "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-components-stepper",
                      "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-component-tabs",
                      "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-components-swiper"
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-components/ui-js-container-components"
                    }
                  },
                  {
                    "type": "category",
                    "label": "基础组件",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-text",
                      "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-input",
                      "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-button",
                      "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-picker",
                      "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-images",
                      "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-image-animator",
                      "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-rating",
                      "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-slider",
                      "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-chart",
                      "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-switch",
                      "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-toolbar",
                      "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-menu",
                      "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-marquee",
                      "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-qrcode",
                      "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-search"
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-components/ui-js-basic-components"
                    }
                  },
                  {
                    "type": "category",
                    "label": "Canvas开发指导",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-components/ui-js-canvas/ui-js-components-canvas",
                      "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-components/ui-js-canvas/ui-js-components-canvasrenderingcontext2d",
                      "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-components/ui-js-canvas/ui-js-components-path2d",
                      "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-components/ui-js-canvas/ui-js-components-offscreencanvas"
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-components/ui-js-canvas"
                    }
                  },
                  "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-components/ui-js-components-grid",
                  {
                    "type": "category",
                    "label": "svg开发指导",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-components/ui-js-svg/ui-js-components-svg-overview",
                      "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-components/ui-js-svg/ui-js-components-svg-graphics",
                      "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-components/ui-js-svg/ui-js-components-svg-path",
                      "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-components/ui-js-svg/ui-js-components-svg-text"
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-components/ui-js-svg"
                    }
                  }
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-components"
                }
              },
              {
                "type": "category",
                "label": "动效开发指导",
                "collapsed": true,
                "items": [
                  {
                    "type": "category",
                    "label": "CSS动画",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-animation/ui-js-animation-css/ui-js-animate-attribute-style",
                      "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-animation/ui-js-animation-css/ui-js-animate-transform",
                      "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-animation/ui-js-animation-css/ui-js-animate-background-position-style",
                      "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-animation/ui-js-animation-css/ui-js-animate-svg"
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-animation/ui-js-animation-css"
                    }
                  },
                  {
                    "type": "category",
                    "label": "JS动画",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-animation/ui-js-animation-js/ui-js-animate-component",
                      {
                        "type": "category",
                        "label": "插值器动画",
                        "collapsed": true,
                        "items": [
                          "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-animation/ui-js-animation-js/ui-js-interpolator-animation/ui-js-animate-dynamic-effects",
                          "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-animation/ui-js-animation-js/ui-js-interpolator-animation/ui-js-animate-frame"
                        ],
                        "link": {
                          "type": "doc",
                          "id": "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-animation/ui-js-animation-js/ui-js-interpolator-animation"
                        }
                      }
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-animation/ui-js-animation-js"
                    }
                  }
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-animation"
                }
              },
              "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-custom-components",
              {
                "type": "category",
                "label": "WebGL",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-webgl/webgl-2d-guidelines"
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-webgl"
                }
              }
            ],
            "link": {
              "type": "doc",
              "id": "dev/app-dev/application-framework/arkui/ui-js-dev"
            }
          },
          {
            "type": "category",
            "label": "UI开发调试调优",
            "collapsed": true,
            "items": [
              {
                "type": "category",
                "label": "UI稳定性故障调试",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/arkui/ui-debug-optimize/ui-stability/arkts-stability-guide",
                  "dev/app-dev/application-framework/arkui/ui-debug-optimize/ui-stability/arkts-stability-crash-issues",
                  "dev/app-dev/application-framework/arkui/ui-debug-optimize/ui-stability/arkts-stability-freeze-issues"
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/arkui/ui-debug-optimize/ui-stability"
                }
              },
              "dev/app-dev/application-framework/arkui/ui-debug-optimize/arkts-layout-debug",
              "dev/app-dev/application-framework/arkui/ui-debug-optimize/arkts-wrong-uicontext-debug",
              "dev/app-dev/application-framework/arkui/ui-debug-optimize/ui-ide-previewer",
              "dev/app-dev/application-framework/arkui/ui-debug-optimize/ui-inspector-profiler",
              "dev/app-dev/application-framework/arkui/ui-debug-optimize/ui-performance-overview",
              {
                "type": "category",
                "label": "UI开发常见问题",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/arkui/ui-debug-optimize/ui-development-faq/arkts-navigation-animation-faq",
                  "dev/app-dev/application-framework/arkui/ui-debug-optimize/ui-development-faq/arkts-user-defined-node-faq",
                  "dev/app-dev/application-framework/arkui/ui-debug-optimize/ui-development-faq/arkts-select-component-faq",
                  "dev/app-dev/application-framework/arkui/ui-debug-optimize/ui-development-faq/arkts-popup-component-faq",
                  "dev/app-dev/application-framework/arkui/ui-debug-optimize/ui-development-faq/arkts-text-faq",
                  "dev/app-dev/application-framework/arkui/ui-debug-optimize/ui-development-faq/arkts-attribute-modifier-faq",
                  "dev/app-dev/application-framework/arkui/ui-debug-optimize/ui-development-faq/arkts-arkui-framenode-faq",
                  "dev/app-dev/application-framework/arkui/ui-debug-optimize/ui-development-faq/multi-thread-ui-build-faq"
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/arkui/ui-debug-optimize/ui-development-faq"
                }
              }
            ],
            "link": {
              "type": "doc",
              "id": "dev/app-dev/application-framework/arkui/ui-debug-optimize"
            }
          },
          {
            "type": "category",
            "label": "窗口管理",
            "collapsed": true,
            "items": [
              "dev/app-dev/application-framework/arkui/window-manager/window-overview",
              "dev/app-dev/application-framework/arkui/window-manager/application-window-stage",
              "dev/app-dev/application-framework/arkui/window-manager/application-window-fa",
              "dev/app-dev/application-framework/arkui/window-manager/window-rotation",
              "dev/app-dev/application-framework/arkui/window-manager/window-config-m",
              "dev/app-dev/application-framework/arkui/window-manager/native-window-event-filter",
              {
                "type": "category",
                "label": "在应用程序中使用画中画功能",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/arkui/window-manager/window-pipwindow/pipwindow-overview",
                  "dev/app-dev/application-framework/arkui/window-manager/window-pipwindow/pipwindow-xcomponent",
                  "dev/app-dev/application-framework/arkui/window-manager/window-pipwindow/pipwindow-typenode",
                  "dev/app-dev/application-framework/arkui/window-manager/window-pipwindow/pipwindow-native",
                  "dev/app-dev/application-framework/arkui/window-manager/window-pipwindow/pip-faqs"
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/arkui/window-manager/window-pipwindow"
                }
              },
              "dev/app-dev/application-framework/arkui/window-manager/floatingball-guide",
              {
                "type": "category",
                "label": "智慧多窗应用开发指南",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/arkui/window-manager/multi-window-guide/multi-window-intro",
                  {
                    "type": "category",
                    "label": "应用适配智慧多窗",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/arkui/window-manager/multi-window-guide/multi-window-adapt/multi-window-support",
                      "dev/app-dev/application-framework/arkui/window-manager/multi-window-guide/multi-window-adapt/multi-window-layout-adapt",
                      "dev/app-dev/application-framework/arkui/window-manager/multi-window-guide/multi-window-adapt/multi-window-controlbar-adapt"
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/arkui/window-manager/multi-window-guide/multi-window-adapt"
                    }
                  }
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/arkui/window-manager/multi-window-guide"
                }
              },
              {
                "type": "category",
                "label": "应用启动页的配置与使用",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/arkui/window-manager/launch-page/launch-page-overview",
                  "dev/app-dev/application-framework/arkui/window-manager/launch-page/launch-page-config",
                  "dev/app-dev/application-framework/arkui/window-manager/launch-page/launch-page-resource-config"
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/arkui/window-manager/launch-page"
                }
              },
              "dev/app-dev/application-framework/arkui/window-manager/window-terminology",
              "dev/app-dev/application-framework/arkui/window-manager/window-faqs"
            ],
            "link": {
              "type": "doc",
              "id": "dev/app-dev/application-framework/arkui/window-manager"
            }
          },
          {
            "type": "category",
            "label": "屏幕管理",
            "collapsed": true,
            "items": [
              "dev/app-dev/application-framework/arkui/display-manager/displaymanager-overview",
              "dev/app-dev/application-framework/arkui/display-manager/native-display-manager",
              "dev/app-dev/application-framework/arkui/display-manager/screenproperty-guideline",
              "dev/app-dev/application-framework/arkui/display-manager/display-terminology",
              "dev/app-dev/application-framework/arkui/display-manager/displaymanager-faqs"
            ],
            "link": {
              "type": "doc",
              "id": "dev/app-dev/application-framework/arkui/display-manager"
            }
          },
          "dev/app-dev/application-framework/arkui/arkui-glossary"
        ],
        "link": {
          "type": "doc",
          "id": "dev/app-dev/application-framework/arkui"
        }
      },
      {
        "type": "category",
        "label": "ArkWeb（方舟Web）",
        "collapsed": true,
        "items": [
          "dev/app-dev/application-framework/arkweb/web-component-overview",
          "dev/app-dev/application-framework/arkweb/web_component_process",
          "dev/app-dev/application-framework/arkweb/web-event-sequence",
          {
            "type": "category",
            "label": "设置基本属性和事件",
            "collapsed": true,
            "items": [
              "dev/app-dev/application-framework/arkweb/web-set-attributes-events/web-default-useragent",
              "dev/app-dev/application-framework/arkweb/web-set-attributes-events/web-cookie-and-data-storage-mgmt",
              "dev/app-dev/application-framework/arkweb/web-set-attributes-events/web-set-dark-mode",
              "dev/app-dev/application-framework/arkweb/web-set-attributes-events/web-open-in-new-window",
              "dev/app-dev/application-framework/arkweb/web-set-attributes-events/web-geolocation-permission",
              "dev/app-dev/application-framework/arkweb/web-set-attributes-events/web-incognito-mode",
              "dev/app-dev/application-framework/arkweb/web-set-attributes-events/web-sensor"
            ],
            "link": {
              "type": "doc",
              "id": "dev/app-dev/application-framework/arkweb/web-set-attributes-events"
            }
          },
          {
            "type": "category",
            "label": "Web渲染和布局",
            "collapsed": true,
            "items": [
              "dev/app-dev/application-framework/arkweb/web-render-layout/web-render-mode",
              "dev/app-dev/application-framework/arkweb/web-render-layout/web-fit-content",
              "dev/app-dev/application-framework/arkweb/web-render-layout/web-router-flash-optimization",
              "dev/app-dev/application-framework/arkweb/web-render-layout/web-getpage-height"
            ],
            "link": {
              "type": "doc",
              "id": "dev/app-dev/application-framework/arkweb/web-render-layout"
            }
          },
          {
            "type": "category",
            "label": "在应用中使用前端页面JavaScript",
            "collapsed": true,
            "items": [
              "dev/app-dev/application-framework/arkweb/web-use-frontend-page-js/web-in-app-frontend-page-function-invoking",
              "dev/app-dev/application-framework/arkweb/web-use-frontend-page-js/web-in-page-app-function-invoking",
              "dev/app-dev/application-framework/arkweb/web-use-frontend-page-js/web-app-page-data-channel",
              "dev/app-dev/application-framework/arkweb/web-use-frontend-page-js/arkweb-ndk-jsbridge",
              "dev/app-dev/application-framework/arkweb/web-use-frontend-page-js/arkweb-ndk-page-data-channel"
            ],
            "link": {
              "type": "doc",
              "id": "dev/app-dev/application-framework/arkweb/web-use-frontend-page-js"
            }
          },
          {
            "type": "category",
            "label": "管理网页交互",
            "collapsed": true,
            "items": [
              "dev/app-dev/application-framework/arkweb/web-manage-page-interaction/web-nested-scrolling",
              "dev/app-dev/application-framework/arkweb/web-manage-page-interaction/web-content-scrolling",
              "dev/app-dev/application-framework/arkweb/web-manage-page-interaction/web-docking-softkeyboard",
              "dev/app-dev/application-framework/arkweb/web-manage-page-interaction/web-focus",
              "dev/app-dev/application-framework/arkweb/web-manage-page-interaction/web-gesture",
              "dev/app-dev/application-framework/arkweb/web-manage-page-interaction/web-scale-zoom",
              "dev/app-dev/application-framework/arkweb/web-manage-page-interaction/web-dialog",
              "dev/app-dev/application-framework/arkweb/web-manage-page-interaction/web-drag",
              "dev/app-dev/application-framework/arkweb/web-manage-page-interaction/web-detect-simulated-click-risk-enhanced"
            ],
            "link": {
              "type": "doc",
              "id": "dev/app-dev/application-framework/arkweb/web-manage-page-interaction"
            }
          },
          {
            "type": "category",
            "label": "管理Web组件的网络安全与隐私",
            "collapsed": true,
            "items": [
              "dev/app-dev/application-framework/arkweb/web-manage-cyber-security-privacy/web-cross-origin",
              "dev/app-dev/application-framework/arkweb/web-manage-cyber-security-privacy/web-intelligent-tracking-prevention",
              "dev/app-dev/application-framework/arkweb/web-manage-cyber-security-privacy/web-adsblock",
              "dev/app-dev/application-framework/arkweb/web-manage-cyber-security-privacy/web-secure-shield-mode"
            ],
            "link": {
              "type": "doc",
              "id": "dev/app-dev/application-framework/arkweb/web-manage-cyber-security-privacy"
            }
          },
          {
            "type": "category",
            "label": "管理网页加载与浏览记录",
            "collapsed": true,
            "items": [
              "dev/app-dev/application-framework/arkweb/web-manage-loading-browsing/web-page-loading-with-web-components",
              "dev/app-dev/application-framework/arkweb/web-manage-loading-browsing/web-redirection-and-browsing-history-mgmt",
              "dev/app-dev/application-framework/arkweb/web-manage-loading-browsing/web-scheme-handler",
              "dev/app-dev/application-framework/arkweb/web-manage-loading-browsing/web-resource-interception-request-mgmt",
              "dev/app-dev/application-framework/arkweb/web-manage-loading-browsing/web-predictor",
              "dev/app-dev/application-framework/arkweb/web-manage-loading-browsing/web-set-back-forward-cache",
              "dev/app-dev/application-framework/arkweb/web-manage-loading-browsing/web-component-migrate"
            ],
            "link": {
              "type": "doc",
              "id": "dev/app-dev/application-framework/arkweb/web-manage-loading-browsing"
            }
          },
          {
            "type": "category",
            "label": "管理网页文件上传与下载",
            "collapsed": true,
            "items": [
              "dev/app-dev/application-framework/arkweb/web-manage-upload-download/web-file-upload",
              "dev/app-dev/application-framework/arkweb/web-manage-upload-download/web-download"
            ],
            "link": {
              "type": "doc",
              "id": "dev/app-dev/application-framework/arkweb/web-manage-upload-download"
            }
          },
          {
            "type": "category",
            "label": "使用网页多媒体",
            "collapsed": true,
            "items": [
              "dev/app-dev/application-framework/arkweb/web-use-multimedia/web-rtc",
              "dev/app-dev/application-framework/arkweb/web-use-multimedia/app-takeovers-web-media",
              "dev/app-dev/application-framework/arkweb/web-use-multimedia/web-picture-in-picture",
              "dev/app-dev/application-framework/arkweb/web-use-multimedia/web_full_screen"
            ],
            "link": {
              "type": "doc",
              "id": "dev/app-dev/application-framework/arkweb/web-use-multimedia"
            }
          },
          {
            "type": "category",
            "label": "处理网页内容",
            "collapsed": true,
            "items": [
              "dev/app-dev/application-framework/arkweb/web-process-page-content/web-print",
              "dev/app-dev/application-framework/arkweb/web-process-page-content/web-createpdf",
              "dev/app-dev/application-framework/arkweb/web-process-page-content/web-pdf-preview",
              "dev/app-dev/application-framework/arkweb/web-process-page-content/web-safe-area-insets",
              "dev/app-dev/application-framework/arkweb/web-process-page-content/web-menu",
              "dev/app-dev/application-framework/arkweb/web-process-page-content/web-clipboard",
              "dev/app-dev/application-framework/arkweb/web-process-page-content/web-data-detector"
            ],
            "link": {
              "type": "doc",
              "id": "dev/app-dev/application-framework/arkweb/web-process-page-content"
            }
          },
          "dev/app-dev/application-framework/arkweb/web-same-layer",
          "dev/app-dev/application-framework/arkweb/web-offline-mode",
          "dev/app-dev/application-framework/arkweb/web-native-messaging",
          {
            "type": "category",
            "label": "Web调试维测",
            "collapsed": true,
            "items": [
              "dev/app-dev/application-framework/arkweb/web-debugging/web-debugging-with-devtools",
              "dev/app-dev/application-framework/arkweb/web-debugging/web-crashpad",
              "dev/app-dev/application-framework/arkweb/web-debugging/web-white-screen",
              "dev/app-dev/application-framework/arkweb/web-debugging/web-hypium-autotests"
            ],
            "link": {
              "type": "doc",
              "id": "dev/app-dev/application-framework/arkweb/web-debugging"
            }
          }
        ],
        "link": {
          "type": "doc",
          "id": "dev/app-dev/application-framework/arkweb"
        }
      },
      {
        "type": "category",
        "label": "Background Tasks Kit（后台任务开发服务）",
        "collapsed": true,
        "items": [
          "dev/app-dev/application-framework/background-task-kit/background-task-overview",
          "dev/app-dev/application-framework/background-task-kit/transient-task",
          "dev/app-dev/application-framework/background-task-kit/native-transient-task",
          "dev/app-dev/application-framework/background-task-kit/continuous-task",
          "dev/app-dev/application-framework/background-task-kit/work-scheduler",
          "dev/app-dev/application-framework/background-task-kit/agent-powered-reminder",
          "dev/app-dev/application-framework/background-task-kit/bgtask-design-formula"
        ],
        "link": {
          "type": "doc",
          "id": "dev/app-dev/application-framework/background-task-kit"
        }
      },
      {
        "type": "category",
        "label": "Content Embed Kit（内容嵌入服务）",
        "collapsed": true,
        "items": [
          "dev/app-dev/application-framework/content-embed-kit/content-embed-kit-overview",
          "dev/app-dev/application-framework/content-embed-kit/client-server-interaction-process",
          "dev/app-dev/application-framework/content-embed-kit/content-embed-server-guidelines",
          "dev/app-dev/application-framework/content-embed-kit/content-embed-client-guidelines",
          "dev/app-dev/application-framework/content-embed-kit/content-embed-faq",
          "dev/app-dev/application-framework/content-embed-kit/content-embed-kit-terminology"
        ],
        "link": {
          "type": "doc",
          "id": "dev/app-dev/application-framework/content-embed-kit"
        }
      },
      {
        "type": "category",
        "label": "Core File Kit（文件基础服务）",
        "collapsed": true,
        "items": [
          "dev/app-dev/application-framework/core-file-kit/core-file-kit-intro",
          {
            "type": "category",
            "label": "应用文件",
            "collapsed": true,
            "items": [
              "dev/app-dev/application-framework/core-file-kit/app-file/app-file-overview",
              "dev/app-dev/application-framework/core-file-kit/app-file/app-sandbox-directory",
              {
                "type": "category",
                "label": "应用文件访问与管理",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/core-file-kit/app-file/app-file-access-management/app-file-access",
                  "dev/app-dev/application-framework/core-file-kit/app-file/app-file-access-management/native-fileio-guidelines",
                  "dev/app-dev/application-framework/core-file-kit/app-file/app-file-access-management/app-fs-space-statistics"
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/core-file-kit/app-file/app-file-access-management"
                }
              },
              "dev/app-dev/application-framework/core-file-kit/app-file/share-app-file",
              "dev/app-dev/application-framework/core-file-kit/app-file/share-app-file-configuration",
              {
                "type": "category",
                "label": "应用数据备份恢复",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/core-file-kit/app-file/app-file-backup-restore/app-file-backup-overview",
                  "dev/app-dev/application-framework/core-file-kit/app-file/app-file-backup-restore/app-file-backup-extension",
                  "dev/app-dev/application-framework/core-file-kit/app-file/app-file-backup-restore/app-file-backup-dataclone",
                  "dev/app-dev/application-framework/core-file-kit/app-file/app-file-backup-restore/app-file-clone",
                  {
                    "type": "category",
                    "label": "设备升级应用数据迁移适配指导",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/core-file-kit/app-file/app-file-backup-restore/app-data-migration-guidelines/app-data-migration-overview",
                      "dev/app-dev/application-framework/core-file-kit/app-file/app-file-backup-restore/app-data-migration-guidelines/adaptation-process",
                      "dev/app-dev/application-framework/core-file-kit/app-file/app-file-backup-restore/app-data-migration-guidelines/app-data-migration-adaptation",
                      {
                        "type": "category",
                        "label": "验证应用数据迁移",
                        "collapsed": true,
                        "items": [
                          "dev/app-dev/application-framework/core-file-kit/app-file/app-file-backup-restore/app-data-migration-guidelines/app-data-migration-verification/self-verification",
                          "dev/app-dev/application-framework/core-file-kit/app-file/app-file-backup-restore/app-data-migration-guidelines/app-data-migration-verification/e2e-verification"
                        ],
                        "link": {
                          "type": "doc",
                          "id": "dev/app-dev/application-framework/core-file-kit/app-file/app-file-backup-restore/app-data-migration-guidelines/app-data-migration-verification"
                        }
                      },
                      "dev/app-dev/application-framework/core-file-kit/app-file/app-file-backup-restore/app-data-migration-guidelines/app-data-migration-faqs",
                      "dev/app-dev/application-framework/core-file-kit/app-file/app-file-backup-restore/app-data-migration-guidelines/code-precautions"
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/core-file-kit/app-file/app-file-backup-restore/app-data-migration-guidelines"
                    }
                  }
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/core-file-kit/app-file/app-file-backup-restore"
                }
              }
            ],
            "link": {
              "type": "doc",
              "id": "dev/app-dev/application-framework/core-file-kit/app-file"
            }
          },
          {
            "type": "category",
            "label": "用户文件",
            "collapsed": true,
            "items": [
              "dev/app-dev/application-framework/core-file-kit/user-files/user-file-overview",
              "dev/app-dev/application-framework/core-file-kit/user-files/user-file-uri-intro",
              "dev/app-dev/application-framework/core-file-kit/user-files/native-fileuri-guidelines",
              "dev/app-dev/application-framework/core-file-kit/user-files/native-environment-guidelines",
              {
                "type": "category",
                "label": "选择与保存用户文件",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/core-file-kit/user-files/select-save-user-file/select-user-file",
                  "dev/app-dev/application-framework/core-file-kit/user-files/select-save-user-file/save-user-file",
                  "dev/app-dev/application-framework/core-file-kit/user-files/select-save-user-file/file-persistpermission",
                  "dev/app-dev/application-framework/core-file-kit/user-files/select-save-user-file/native-fileshare-guidelines"
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/core-file-kit/user-files/select-save-user-file"
                }
              },
              "dev/app-dev/application-framework/core-file-kit/user-files/request-dir-permission"
            ],
            "link": {
              "type": "doc",
              "id": "dev/app-dev/application-framework/core-file-kit/user-files"
            }
          },
          {
            "type": "category",
            "label": "分布式文件系统",
            "collapsed": true,
            "items": [
              "dev/app-dev/application-framework/core-file-kit/distributed-fs/distributed-fs-overview",
              "dev/app-dev/application-framework/core-file-kit/distributed-fs/set-security-label",
              "dev/app-dev/application-framework/core-file-kit/distributed-fs/file-access-across-devices",
              "dev/app-dev/application-framework/core-file-kit/distributed-fs/file-copy-across-devices"
            ],
            "link": {
              "type": "doc",
              "id": "dev/app-dev/application-framework/core-file-kit/distributed-fs"
            }
          },
          {
            "type": "category",
            "label": "端云文件协同",
            "collapsed": true,
            "items": [
              "dev/app-dev/application-framework/core-file-kit/cloud-sync-file/cloud-sync-file-overview",
              "dev/app-dev/application-framework/core-file-kit/cloud-sync-file/app-cloud-sync-filesync"
            ],
            "link": {
              "type": "doc",
              "id": "dev/app-dev/application-framework/core-file-kit/cloud-sync-file"
            }
          },
          {
            "type": "category",
            "label": "文件基础服务开发实践",
            "collapsed": true,
            "items": [
              "dev/app-dev/application-framework/core-file-kit/development-practices-file-management/file-native-side"
            ],
            "link": {
              "type": "doc",
              "id": "dev/app-dev/application-framework/core-file-kit/development-practices-file-management"
            }
          }
        ],
        "link": {
          "type": "doc",
          "id": "dev/app-dev/application-framework/core-file-kit"
        }
      },
      {
        "type": "category",
        "label": "Data Augmentation Kit（数据增强服务）",
        "collapsed": true,
        "items": [
          "dev/app-dev/application-framework/data-augmentation-kit-guide/dataaugmentation-introduction",
          "dev/app-dev/application-framework/data-augmentation-kit-guide/data-augmentation-knowledge-processing",
          {
            "type": "category",
            "label": "RAG",
            "collapsed": true,
            "items": [
              "dev/app-dev/application-framework/data-augmentation-kit-guide/dataaugmentation-rag/data-augmentation-rag-overview",
              "dev/app-dev/application-framework/data-augmentation-kit-guide/dataaugmentation-rag/data-augmentation-rag-development",
              {
                "type": "category",
                "label": "RAG配置",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/data-augmentation-kit-guide/dataaugmentation-rag/data-augmentation-rag-config/data-augmentation-config-prompt-template",
                  "dev/app-dev/application-framework/data-augmentation-kit-guide/dataaugmentation-rag/data-augmentation-rag-config/data-augmentation-hyperparam",
                  "dev/app-dev/application-framework/data-augmentation-kit-guide/dataaugmentation-rag/data-augmentation-rag-config/data-augmentation-analyze-config"
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/data-augmentation-kit-guide/dataaugmentation-rag/data-augmentation-rag-config"
                }
              },
              "dev/app-dev/application-framework/data-augmentation-kit-guide/dataaugmentation-rag/data-augmentation-rag-demo"
            ],
            "link": {
              "type": "doc",
              "id": "dev/app-dev/application-framework/data-augmentation-kit-guide/dataaugmentation-rag"
            }
          },
          "dev/app-dev/application-framework/data-augmentation-kit-guide/dataaugmentation-retrieval",
          "dev/app-dev/application-framework/data-augmentation-kit-guide/dataaugmentation-retrieval-c",
          "dev/app-dev/application-framework/data-augmentation-kit-guide/dataaugmentation-localchatmodel"
        ],
        "link": {
          "type": "doc",
          "id": "dev/app-dev/application-framework/data-augmentation-kit-guide"
        }
      },
      {
        "type": "category",
        "label": "Form Kit（卡片开发服务）",
        "collapsed": true,
        "items": [
          "dev/app-dev/application-framework/form-kit/formkit-overview",
          {
            "type": "category",
            "label": "ArkTS卡片开发（推荐）",
            "collapsed": true,
            "items": [
              "dev/app-dev/application-framework/form-kit/arkts-ui/arkts-form-overview",
              "dev/app-dev/application-framework/form-kit/arkts-ui/arkts-ui-widget-creation",
              "dev/app-dev/application-framework/form-kit/arkts-ui/arkts-ui-widget-configuration",
              "dev/app-dev/application-framework/form-kit/arkts-ui/arkts-ui-widget-lifecycle",
              "dev/app-dev/application-framework/form-kit/arkts-ui/arkts-ui-widget-process",
              {
                "type": "category",
                "label": "ArkTS卡片提供方开发指导",
                "collapsed": true,
                "items": [
                  {
                    "type": "category",
                    "label": "ArkTS卡片UI界面开发",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-page/arkts-ui-widget-page-overview",
                      "dev/app-dev/application-framework/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-page/arkts-ui-widget-page-animation",
                      "dev/app-dev/application-framework/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-page/arkts-ui-widget-page-custom-drawing",
                      "dev/app-dev/application-framework/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-page/arkts-ui-widget-load-custom-font"
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-page"
                    }
                  },
                  {
                    "type": "category",
                    "label": "ArkTS卡片页面刷新",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-interaction/arkts-ui-widget-interaction-overview",
                      "dev/app-dev/application-framework/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-interaction/arkts-ui-widget-active-refresh",
                      "dev/app-dev/application-framework/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-interaction/arkts-ui-widget-passive-refresh",
                      "dev/app-dev/application-framework/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-interaction/arkts-ui-widget-image-update",
                      "dev/app-dev/application-framework/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-interaction/arkts-ui-widget-update-by-status"
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-interaction"
                    }
                  },
                  {
                    "type": "category",
                    "label": "ArkTS卡片页面交互",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-event/arkts-ui-widget-event-overview",
                      "dev/app-dev/application-framework/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-event/arkts-ui-widget-event-router",
                      "dev/app-dev/application-framework/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-event/arkts-ui-widget-event-call",
                      "dev/app-dev/application-framework/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-event/arkts-ui-widget-event-formextensionability",
                      "dev/app-dev/application-framework/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-event/arkts-ui-widget-event-uiability"
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-event"
                    }
                  },
                  {
                    "type": "category",
                    "label": "应用内请求卡片加桌",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-add/arkts-ui-widget-open-formmanager"
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-add"
                    }
                  },
                  {
                    "type": "category",
                    "label": "ArkTS锁屏卡片",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-lockscreen-form/arkts-ui-lockscreen-form-development"
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-lockscreen-form"
                    }
                  },
                  {
                    "type": "category",
                    "label": "ArkTS背板透明卡片",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-transparent-backplate-form/arkts-ui-transparent-backplate-form-development"
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-transparent-backplate-form"
                    }
                  },
                  "dev/app-dev/application-framework/form-kit/arkts-ui/arkts-ui-widget/arkui-ui-standby-form-development"
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/form-kit/arkts-ui/arkts-ui-widget"
                }
              },
              {
                "type": "category",
                "label": "互动卡片开发",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/form-kit/arkts-ui/arkts-ui-liveform/arkts-ui-liveform-overview",
                  "dev/app-dev/application-framework/form-kit/arkts-ui/arkts-ui-liveform/arkts-ui-liveform-funinteraction-development",
                  {
                    "type": "category",
                    "label": "场景动效类型互动卡片",
                    "collapsed": true,
                    "items": [
                      "dev/app-dev/application-framework/form-kit/arkts-ui/arkts-ui-liveform/arkts-ui-liveform-sceneanimation/arkts-ui-liveform-sceneanimation-overview",
                      "dev/app-dev/application-framework/form-kit/arkts-ui/arkts-ui-liveform/arkts-ui-liveform-sceneanimation/arkts-ui-liveform-sceneanimation-development"
                    ],
                    "link": {
                      "type": "doc",
                      "id": "dev/app-dev/application-framework/form-kit/arkts-ui/arkts-ui-liveform/arkts-ui-liveform-sceneanimation"
                    }
                  }
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/form-kit/arkts-ui/arkts-ui-liveform"
                }
              },
              "dev/app-dev/application-framework/form-kit/arkts-ui/arkts-ui-widget-adapt-faq"
            ],
            "link": {
              "type": "doc",
              "id": "dev/app-dev/application-framework/form-kit/arkts-ui"
            }
          },
          {
            "type": "category",
            "label": "JS卡片开发",
            "collapsed": true,
            "items": [
              "dev/app-dev/application-framework/form-kit/form-js-ui/js-ui-widget-overview",
              "dev/app-dev/application-framework/form-kit/form-js-ui/js-ui-widget-development",
              "dev/app-dev/application-framework/form-kit/form-js-ui/widget-development-fa"
            ],
            "link": {
              "type": "doc",
              "id": "dev/app-dev/application-framework/form-kit/form-js-ui"
            }
          }
        ],
        "link": {
          "type": "doc",
          "id": "dev/app-dev/application-framework/form-kit"
        }
      },
      {
        "type": "category",
        "label": "IME Kit（输入法开发服务）",
        "collapsed": true,
        "items": [
          "dev/app-dev/application-framework/ime-kit/ime-kit-intro",
          "dev/app-dev/application-framework/ime-kit/inputmethod-application-guide",
          "dev/app-dev/application-framework/ime-kit/use-inputmethod-in-custom-edit-box",
          "dev/app-dev/application-framework/ime-kit/switch-inputmethod-guide",
          "dev/app-dev/application-framework/ime-kit/input-method-subtype-guide",
          "dev/app-dev/application-framework/ime-kit/ime-kit-security",
          "dev/app-dev/application-framework/ime-kit/use-inputmethod-in-custom-edit-box-ndk",
          "dev/app-dev/application-framework/ime-kit/inputmethod-immersive-mode-guide",
          "dev/app-dev/application-framework/ime-kit/inputmethod-hdc-commands-guide",
          "dev/app-dev/application-framework/ime-kit/use-inputmethod-in-not-focusable-window"
        ],
        "link": {
          "type": "doc",
          "id": "dev/app-dev/application-framework/ime-kit"
        }
      },
      {
        "type": "category",
        "label": "IPC Kit（进程间通信服务）",
        "collapsed": true,
        "items": [
          "dev/app-dev/application-framework/ipc-kit/ipc-rpc-overview",
          "dev/app-dev/application-framework/ipc-kit/ipc-rpc-development-guideline",
          "dev/app-dev/application-framework/ipc-kit/ipc-capi-development-guideline",
          "dev/app-dev/application-framework/ipc-kit/subscribe-remote-state"
        ],
        "link": {
          "type": "doc",
          "id": "dev/app-dev/application-framework/ipc-kit"
        }
      },
      {
        "type": "category",
        "label": "Localization Kit（本地化开发服务）",
        "collapsed": true,
        "items": [
          "dev/app-dev/application-framework/localization-kit/i18n-l10n",
          {
            "type": "category",
            "label": "应用国际化",
            "collapsed": true,
            "items": [
              "dev/app-dev/application-framework/localization-kit/i18n/i18n-ui-design",
              "dev/app-dev/application-framework/localization-kit/i18n/i18n-locale-culture",
              {
                "type": "category",
                "label": "语言与用户偏好",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/localization-kit/i18n/i18n-language-user-preferences/i18n-system-language-region",
                  "dev/app-dev/application-framework/localization-kit/i18n/i18n-language-user-preferences/i18n-preferred-language",
                  "dev/app-dev/application-framework/localization-kit/i18n/i18n-language-user-preferences/i18n-user-preferences"
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/localization-kit/i18n/i18n-language-user-preferences"
                }
              },
              "dev/app-dev/application-framework/localization-kit/i18n/i18n-time-date",
              "dev/app-dev/application-framework/localization-kit/i18n/i18n-numbers-weights-measures",
              "dev/app-dev/application-framework/localization-kit/i18n/i18n-phone-numbers",
              "dev/app-dev/application-framework/localization-kit/i18n/i18n-calendar",
              {
                "type": "category",
                "label": "时区与夏令时国际化",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/localization-kit/i18n/i18n-time-zone-dst/i18n-time-zone",
                  "dev/app-dev/application-framework/localization-kit/i18n/i18n-time-zone-dst/i18n-dst-transition"
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/localization-kit/i18n/i18n-time-zone-dst"
                }
              },
              {
                "type": "category",
                "label": "多语言排序",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/localization-kit/i18n/i18n-sorting/i18n-sorting-overview",
                  "dev/app-dev/application-framework/localization-kit/i18n/i18n-sorting/i18n-sorting-local",
                  "dev/app-dev/application-framework/localization-kit/i18n/i18n-sorting/i18n-sorting-index"
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/localization-kit/i18n/i18n-sorting"
                }
              },
              "dev/app-dev/application-framework/localization-kit/i18n/i18n-character-processing",
              {
                "type": "category",
                "label": "本地化名称",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/localization-kit/i18n/i18n-name-localization/i18n-display-overview",
                  "dev/app-dev/application-framework/localization-kit/i18n/i18n-name-localization/i18n-language-region-display"
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/localization-kit/i18n/i18n-name-localization"
                }
              }
            ],
            "link": {
              "type": "doc",
              "id": "dev/app-dev/application-framework/localization-kit/i18n"
            }
          },
          {
            "type": "category",
            "label": "应用本地化",
            "collapsed": true,
            "items": [
              "dev/app-dev/application-framework/localization-kit/l10n/l10n-multilingual-resources",
              {
                "type": "category",
                "label": "提升可翻译性",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/localization-kit/l10n/l10n-translation/l10n-hard-coding-concatenate",
                  "dev/app-dev/application-framework/localization-kit/l10n/l10n-translation/l10n-translation-scene",
                  "dev/app-dev/application-framework/localization-kit/l10n/l10n-translation/l10n-singular-plural"
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/localization-kit/l10n/l10n-translation"
                }
              }
            ],
            "link": {
              "type": "doc",
              "id": "dev/app-dev/application-framework/localization-kit/l10n"
            }
          },
          {
            "type": "category",
            "label": "本地化测试",
            "collapsed": true,
            "items": [
              {
                "type": "category",
                "label": "伪本地化测试",
                "collapsed": true,
                "items": [
                  "dev/app-dev/application-framework/localization-kit/l10n-testing/pseudo-i18n-testing/pseudo-i18n-testing-overview",
                  "dev/app-dev/application-framework/localization-kit/l10n-testing/pseudo-i18n-testing/pseudo-i18n-testing-translation",
                  "dev/app-dev/application-framework/localization-kit/l10n-testing/pseudo-i18n-testing/pseudo-i18n-testing-mirror"
                ],
                "link": {
                  "type": "doc",
                  "id": "dev/app-dev/application-framework/localization-kit/l10n-testing/pseudo-i18n-testing"
                }
              },
              "dev/app-dev/application-framework/localization-kit/l10n-testing/linguistic-testing"
            ],
            "link": {
              "type": "doc",
              "id": "dev/app-dev/application-framework/localization-kit/l10n-testing"
            }
          }
        ],
        "link": {
          "type": "doc",
          "id": "dev/app-dev/application-framework/localization-kit"
        }
      },
      {
        "type": "category",
        "label": "UI Design Kit（UI设计套件）",
        "collapsed": true,
        "items": [
          "dev/app-dev/application-framework/ui-design-kit-guide/ui-design-introduction",
          {
            "type": "category",
            "label": "图标处理",
            "collapsed": true,
            "items": [
              "dev/app-dev/application-framework/ui-design-kit-guide/ui-design-icon-process/ui-design-layered-process",
              "dev/app-dev/application-framework/ui-design-kit-guide/ui-design-icon-process/ui-design-normal-process"
            ],
            "link": {
              "type": "doc",
              "id": "dev/app-dev/application-framework/ui-design-kit-guide/ui-design-icon-process"
            }
          },
          {
            "type": "category",
            "label": "组件导航",
            "collapsed": true,
            "items": [
              "dev/app-dev/application-framework/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-dynamic-blur",
              "dev/app-dev/application-framework/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-message-reminder",
              "dev/app-dev/application-framework/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-customized-area",
              "dev/app-dev/application-framework/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-dynamic-display-and-hiding",
              "dev/app-dev/application-framework/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-half-modal-style",
              "dev/app-dev/application-framework/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-icon-type",
              "dev/app-dev/application-framework/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-set-multi-window",
              "dev/app-dev/application-framework/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-dynamic-blur-demo"
            ],
            "link": {
              "type": "doc",
              "id": "dev/app-dev/application-framework/ui-design-kit-guide/ui-design-navigation"
            }
          },
          {
            "type": "category",
            "label": "侧边栏样式",
            "collapsed": true,
            "items": [
              "dev/app-dev/application-framework/ui-design-kit-guide/ui-design-sidebar/ui-design-sidebar-overlay-mode",
              "dev/app-dev/application-framework/ui-design-kit-guide/ui-design-sidebar/ui-design-sidebar-enbed-mode"
            ],
            "link": {
              "type": "doc",
              "id": "dev/app-dev/application-framework/ui-design-kit-guide/ui-design-sidebar"
            }
          },
          "dev/app-dev/application-framework/ui-design-kit-guide/ui-design-side-menu",
          {
            "type": "category",
            "label": "底部页签",
            "collapsed": true,
            "items": [
              "dev/app-dev/application-framework/ui-design-kit-guide/ui-design-hds-tabs/ui-design-hds-tabs-split-line",
              "dev/app-dev/application-framework/ui-design-kit-guide/ui-design-hds-tabs/ui-design-hds-tabs-fuzzy-style",
              "dev/app-dev/application-framework/ui-design-kit-guide/ui-design-hds-tabs/ui-design-hds-tabs-icon-bleed-substyle",
              "dev/app-dev/application-framework/ui-design-kit-guide/ui-design-hds-tabs/ui-design-hds-tabs-sidebar-alignment-substyle",
              "dev/app-dev/application-framework/ui-design-kit-guide/ui-design-hds-tabs/ui-design-hds-tabs-bar-floating"
            ],
            "link": {
              "type": "doc",
              "id": "dev/app-dev/application-framework/ui-design-kit-guide/ui-design-hds-tabs"
            }
          },
          {
            "type": "category",
            "label": "即时操作",
            "collapsed": true,
            "items": [
              "dev/app-dev/application-framework/ui-design-kit-guide/ui-design-snackbar/ui-design-snackbar-resident-notification",
              "dev/app-dev/application-framework/ui-design-kit-guide/ui-design-snackbar/ui-design-snackbar-scheduled-notification"
            ],
            "link": {
              "type": "doc",
              "id": "dev/app-dev/application-framework/ui-design-kit-guide/ui-design-snackbar"
            }
          },
          {
            "type": "category",
            "label": "核心操作栏",
            "collapsed": true,
            "items": [
              "dev/app-dev/application-framework/ui-design-kit-guide/ui-design-actionbar/ui-design-actionbar-main-buttons",
              "dev/app-dev/application-framework/ui-design-kit-guide/ui-design-actionbar/ui-design-actionbar-without-master-button"
            ],
            "link": {
              "type": "doc",
              "id": "dev/app-dev/application-framework/ui-design-kit-guide/ui-design-actionbar"
            }
          },
          {
            "type": "category",
            "label": "列表",
            "collapsed": true,
            "items": [
              "dev/app-dev/application-framework/ui-design-kit-guide/ui-design-list-item-card/ui-design-set-hds-slide-horizon-listitem",
              "dev/app-dev/application-framework/ui-design-kit-guide/ui-design-list-item-card/ui-design-set-listitem-style"
            ],
            "link": {
              "type": "doc",
              "id": "dev/app-dev/application-framework/ui-design-kit-guide/ui-design-list-item-card"
            }
          },
          "dev/app-dev/application-framework/ui-design-kit-guide/ui-design-custom-symbol-res-register",
          {
            "type": "category",
            "label": "视效",
            "collapsed": true,
            "items": [
              "dev/app-dev/application-framework/ui-design-kit-guide/ui-design-visual-effect/ui-design-visual-effect-point-light",
              "dev/app-dev/application-framework/ui-design-kit-guide/ui-design-visual-effect/ui-design-visual-effect-background-color",
              "dev/app-dev/application-framework/ui-design-kit-guide/ui-design-visual-effect/ui-design-visual-effect-double-edge-streamer",
              "dev/app-dev/application-framework/ui-design-kit-guide/ui-design-visual-effect/ui-design-visual-effect-background-streamer"
            ],
            "link": {
              "type": "doc",
              "id": "dev/app-dev/application-framework/ui-design-kit-guide/ui-design-visual-effect"
            }
          },
          "dev/app-dev/application-framework/ui-design-kit-guide/ui-design-multiwindowentryinapp",
          "dev/app-dev/application-framework/ui-design-kit-guide/ui-design-hds-component-material",
          {
            "type": "category",
            "label": "UI Design Kit常见问题",
            "collapsed": true,
            "items": [
              "dev/app-dev/application-framework/ui-design-kit-guide/ui-design-faq/ui-design-faq1",
              "dev/app-dev/application-framework/ui-design-kit-guide/ui-design-faq/ui-design-faq2"
            ],
            "link": {
              "type": "doc",
              "id": "dev/app-dev/application-framework/ui-design-kit-guide/ui-design-faq"
            }
          }
        ],
        "link": {
          "type": "doc",
          "id": "dev/app-dev/application-framework/ui-design-kit-guide"
        }
      }
    ]
  }
],
};

module.exports = sidebars;
