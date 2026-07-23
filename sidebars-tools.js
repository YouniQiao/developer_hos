// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
toolsSidebar: [
{
    type: 'category',
    label: '版本说明',
    collapsed: true,
    items: [
'tools/coding-debug/release-notes/deveco-studio-611',
'tools/coding-debug/release-notes/deveco-studio-610',
'tools/coding-debug/release-notes/deveco-studio-602',
'tools/coding-debug/release-notes/deveco-studio-601',
'tools/coding-debug/release-notes/deveco-studio-600'
    ]
  },
{
    type: 'category',
    label: '工具使用入门',
    collapsed: true,
    items: [
'tools/coding-debug/ide-tools-overview',
'tools/coding-debug/ide-software-install',
'tools/coding-debug/ide-new-ui',
'tools/coding-debug/ide-no-network'
    ]
  },
{
    type: 'category',
    label: '管理工程及模块',
    collapsed: true,
    items: [
'tools/coding-debug/ide-project-overview',
'tools/coding-debug/ide-project-structure',
'tools/coding-debug/ide-template',
'tools/coding-debug/ide-create-new-project',
'tools/coding-debug/ide-har',
'tools/coding-debug/ide-hsp',
'tools/coding-debug/ide-har-publish',
'tools/coding-debug/ide-har-import',
'tools/coding-debug/ide-add-new-module',
'tools/coding-debug/ide-import-module',
'tools/coding-debug/ide-add-new-ability',
'tools/coding-debug/ide-add-page',
'tools/coding-debug/ide-apply-generated-icon',
'tools/coding-debug/ide-service-widget',
'tools/coding-debug/ide-insight-intent'
    ]
  },
{
    type: 'category',
    label: '编写与调试应用',
    collapsed: true,
    items: [
{
        type: 'category',
        label: '代码编辑',
        collapsed: true,
        items: [
'tools/coding-debug/ide-editer-overview',
'tools/coding-debug/ide-code-completion',
{
            type: 'category',
            label: '代码检查',
            collapsed: true,
            items: [
'tools/coding-debug/ide-realtime-check',
'tools/coding-debug/ide-code-linter',
'tools/coding-debug/ide-clang-tidy'
            ]
          },
'tools/coding-debug/ide-code-refactoring',
'tools/coding-debug/ide-arktsdoc-generation',
'tools/coding-debug/ide-kit-assistant',
'tools/coding-debug/ide-cross-language-code-editing'
        ]
      },
{
        type: 'category',
        label: '界面预览',
        collapsed: true,
        items: [
'tools/coding-debug/ide-previewer-overview',
'tools/coding-debug/ide-previewer-previewchecker',
'tools/coding-debug/ide-previewer-arkts-js',
'tools/coding-debug/ide-previewer-arkui',
'tools/coding-debug/ide-previewer-profile-manager',
'tools/coding-debug/ide-previewer-multi-profile',
'tools/coding-debug/ide-previewer-inspector',
'tools/coding-debug/ide-previewer-mock',
'tools/coding-debug/ide-previewer-debug',
'tools/coding-debug/ide-previewer-api-list'
        ]
      },
'tools/coding-debug/ide-signing',
'tools/coding-debug/ide-run-device',
'tools/coding-debug/ide-run-simulator',
{
        type: 'category',
        label: '使用模拟器运行应用',
        collapsed: true,
        items: [
{
            type: 'category',
            label: '概述',
            collapsed: true,
            items: [
'tools/coding-debug/ide-emulator-requirements',
'tools/coding-debug/ide-emulator-devicetype',
'tools/coding-debug/ide-emulator-specification'
            ]
          },
{
            type: 'category',
            label: '管理模拟器',
            collapsed: true,
            items: [
'tools/coding-debug/ide-emulator-create',
'tools/coding-debug/ide-emulator-start-and-close'
            ]
          },
{
            type: 'category',
            label: '使用模拟器',
            collapsed: true,
            items: [
'tools/coding-debug/ide-emulator-control-screen',
'tools/coding-debug/ide-emulator-toolbar',
'tools/coding-debug/ide-emulator-move-and-zoom',
'tools/coding-debug/ide-emulator-access-network',
'tools/coding-debug/ide-emulator-install-upload',
'tools/coding-debug/ide-emulator-more-features'
            ]
          },
{
            type: 'category',
            label: '修改模拟器',
            collapsed: true,
            items: [
'tools/coding-debug/ide-emulator-customize-screen-configuration'
            ]
          },
'tools/coding-debug/ide-emulator-command-line',
'tools/coding-debug/ide-emulator-no-network',
'tools/coding-debug/ide-emulator-faqs'
        ]
      },
{
        type: 'category',
        label: '应用调试',
        collapsed: true,
        items: [
'tools/coding-debug/ide-debug-device',
'tools/coding-debug/ide-run-debug-configurations',
{
            type: 'category',
            label: '代码调试',
            collapsed: true,
            items: [
{
                type: 'category',
                label: 'ArkTS代码调试',
                collapsed: true,
                items: [
'tools/coding-debug/ide-debug-arkts-worker-taskpool',
'tools/coding-debug/ide-debug-arkts-debug',
'tools/coding-debug/ide-debug-arkts-attach',
'tools/coding-debug/ide-debug-arkts-attach-to-process',
'tools/coding-debug/ide-debug-arkts-breakpoint',
'tools/coding-debug/ide-debug-arkts-variables',
'tools/coding-debug/ide-debug-arkts-reverse',
'tools/coding-debug/ide-debug-arkts-extension',
'tools/coding-debug/ide-debug-multi-process',
'tools/coding-debug/ide-debug-arkts-evaluate-log',
'tools/coding-debug/ide-debug-arkts-smart-step-into',
'tools/coding-debug/ide-debug-async-stack-traces'
                ]
              },
{
                type: 'category',
                label: 'Native代码调试',
                collapsed: true,
                items: [
'tools/coding-debug/ide-debug-native-enable',
'tools/coding-debug/ide-debug-native-breakpoint',
'tools/coding-debug/ide-debug-native-variables',
'tools/coding-debug/ide-debug-native-disassembly',
'tools/coding-debug/ide-debug-native-memory-view',
'tools/coding-debug/ide-debug-native-lldb',
'tools/coding-debug/ide-debug-native-reverse',
'tools/coding-debug/ide-debug-native-parallel-stacks',
'tools/coding-debug/ide-debug-native-so',
'tools/coding-debug/ide-debug-native-execution-point',
'tools/coding-debug/ide-smart-step-into'
                ]
              },
'tools/coding-debug/ide-debug-arkts-debugger',
'tools/coding-debug/ide-cross-language-debugging',
'tools/coding-debug/ide-source-code-debugging',
'tools/coding-debug/ide-incremental-debugging',
'tools/coding-debug/ide-hot-reload',
'tools/coding-debug/ide-arkui-state'
            ]
          },
{
            type: 'category',
            label: '开发者模式',
            collapsed: true,
            items: [
'tools/coding-debug/ide-developer-mode',
'tools/coding-debug/developer-care'
            ]
          },
'tools/coding-debug/ide-arkui-inspector',
'tools/coding-debug/ide-device-file-explorer',
'tools/coding-debug/ide-database-inspector',
'tools/coding-debug/ide-screenshot',
'tools/coding-debug/ide-screen-recording',
{
            type: 'category',
            label: '调试错误码',
            collapsed: true,
            items: [
'tools/coding-debug/ide-debug-errorcode-00401',
'tools/coding-debug/ide-debug-errorcode-00402',
'tools/coding-debug/ide-debug-errorcode-00403',
'tools/coding-debug/ide-debug-errorcode-00404'
            ]
          }
        ]
      },
{
        type: 'category',
        label: '日志与故障分析',
        collapsed: true,
        items: [
'tools/coding-debug/ide-setup-hilog',
{
            type: 'category',
            label: '故障分析',
            collapsed: true,
            items: [
'tools/coding-debug/ide-fault-log',
'tools/coding-debug/ide-faultlog-cppcrash',
'tools/coding-debug/ide-faultlog-appfreeze',
'tools/coding-debug/ide-faultlog-appkilled',
'tools/coding-debug/ide-release-app-stack-analysis',
'tools/coding-debug/ide-exception-stack-parsing-principle',
'tools/coding-debug/ide-asan',
'tools/coding-debug/ide-hwasan',
'tools/coding-debug/ide-tsan',
'tools/coding-debug/ide-ubsan',
'tools/coding-debug/ide-multi-thread-check'
            ]
          }
        ]
      },
{
        type: 'category',
        label: '开发自测试',
        collapsed: true,
        items: [
{
            type: 'category',
            label: '测试框架',
            collapsed: true,
            items: [
{
                type: 'category',
                label: '代码测试',
                collapsed: true,
                items: [
'tools/coding-debug/ide-instrument-test',
'tools/coding-debug/ide-local-test'
                ]
              },
'tools/coding-debug/ide-test-mock',
'tools/coding-debug/ide-ui-test',
{
                type: 'category',
                label: '测试框架错误码',
                collapsed: true,
                items: [
'tools/coding-debug/ide-instrument-test-errorcode',
'tools/coding-debug/ide-local-test-errorcode'
                ]
              }
            ]
          },
{
            type: 'category',
            label: '应用与元服务体检',
            collapsed: true,
            items: [
'tools/coding-debug/ide-app-analyzer-overview',
'tools/coding-debug/ide-app-analyzer-scenes',
'tools/coding-debug/ide-app-analyzer-rules',
'tools/coding-debug/ide-app-analyzer-before-appgallery',
'tools/coding-debug/ide-app-analyzer-ag-policy',
'tools/coding-debug/ide-app-analyzer-testing',
'tools/coding-debug/ide-app-analyzer-history-reports',
{
                type: 'category',
                label: '附录',
                collapsed: true,
                items: [
{
                    type: 'category',
                    label: '体检规则',
                    collapsed: true,
                    items: [
'tools/coding-debug/ide-app-analyzer-all-rules',
'tools/coding-debug/ide-quick-response-for-click-0403',
'tools/coding-debug/ide-quick-completion-for-click-0404',
'tools/coding-debug/ide-quick-response-for-swipe-0405',
'tools/coding-debug/ide-smooth-for-swipe-0413',
'tools/coding-debug/ide-smooth-for-transition-0414',
'tools/coding-debug/ide-peak-dynamic-memory-usage-0417',
'tools/coding-debug/ide-peak-foreground-memory-usage-0418',
'tools/coding-debug/ide-peak-background-cpu-usage-0420',
'tools/coding-debug/ide-render-node-limit-0430',
'tools/coding-debug/ide-quick-completion-for-boot'
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
{
    type: 'category',
    label: '构建应用',
    collapsed: true,
    items: [
'tools/coding-debug/ide-hvigor-releasenote',
{
        type: 'category',
        label: '概述',
        collapsed: true,
        items: [
'tools/coding-debug/ide-hvigor-life-cycle',
'tools/coding-debug/ide-hvigor-task-process',
'tools/coding-debug/ide-compile-build'
        ]
      },
{
        type: 'category',
        label: '配置文件',
        collapsed: true,
        items: [
'tools/coding-debug/ide-hvigor-configuration-file-overview',
'tools/coding-debug/ide-hvigor-set-options',
'tools/coding-debug/ide-hvigor-build-profile-app',
'tools/coding-debug/ide-hvigor-build-profile'
        ]
      },
{
        type: 'category',
        label: '配置构建流程',
        collapsed: true,
        items: [
'tools/coding-debug/ide-hvigor-multi-module',
'tools/coding-debug/ide-hvigor-dependencies',
{
            type: 'category',
            label: '配置多目标产物',
            collapsed: true,
            items: [
'tools/coding-debug/ide-customized-multi-targets-and-products-guides',
'tools/coding-debug/ide-customized-multi-targets-and-products-sample'
            ]
          },
'tools/coding-debug/ide-hvigor-build-har',
'tools/coding-debug/ide-hvigor-cpp',
'tools/coding-debug/ide-hvigor-so',
'tools/coding-debug/ide-hvigor-multi-projects',
'tools/coding-debug/ide-hvigor-verification-rule',
'tools/coding-debug/ide-hvigor-path'
        ]
      },
{
        type: 'category',
        label: '定制构建',
        collapsed: true,
        items: [
{
            type: 'category',
            label: '灵活定制编译选项',
            collapsed: true,
            items: [
'tools/coding-debug/ide-hvigor-compilation-options-customizing-guide',
'tools/coding-debug/ide-hvigor-compilation-options-customizing-sample'
            ]
          },
{
            type: 'category',
            label: '获取自定义编译参数',
            collapsed: true,
            items: [
'tools/coding-debug/ide-hvigor-get-build-profile-para-guide',
'tools/coding-debug/ide-hvigor-get-build-profile-para-sample'
            ]
          },
{
            type: 'category',
            label: '动态修改编译配置',
            collapsed: true,
            items: [
'tools/coding-debug/ide-hvigor-config-ohos-guide',
'tools/coding-debug/ide-hvigor-config-ohos-sample'
            ]
          }
        ]
      },
{
        type: 'category',
        label: '提升构建效率',
        collapsed: true,
        items: [
'tools/coding-debug/ide-hvigor-build-analyzer',
'tools/coding-debug/ide-hvigor-daemon',
'tools/coding-debug/ide-hvigor-improve-performance',
'tools/coding-debug/ide-hvigor-incremental-build',
'tools/coding-debug/ide-hvigor-experimental-properties',
'tools/coding-debug/ide-hvigor-esmodule-compile'
        ]
      },
{
        type: 'category',
        label: '扩展构建能力',
        collapsed: true,
        items: [
'tools/coding-debug/ide-hvigor-task',
'tools/coding-debug/ide-hvigor-plugin',
{
            type: 'category',
            label: '扩展构建API',
            collapsed: true,
            items: [
'tools/coding-debug/ide-hvigor-api',
'tools/coding-debug/ide-build-expanding-context',
'tools/coding-debug/ide-build-expanding-sample'
            ]
          }
        ]
      },
'tools/coding-debug/ide-task-visualization',
'tools/coding-debug/ide-build-obfuscation',
{
        type: 'category',
        label: '构建报错排查',
        collapsed: true,
        items: [
'tools/coding-debug/ide-hvigor-log',
'tools/coding-debug/ide-hvigor-faqs',
{
            type: 'category',
            label: '编译构建错误码',
            collapsed: true,
            items: [
'tools/coding-debug/ide-hvigor-errorcode-00301',
'tools/coding-debug/ide-hvigor-errorcode-00302',
'tools/coding-debug/ide-hvigor-errorcode-00303-1',
'tools/coding-debug/ide-hvigor-errorcode-00304',
'tools/coding-debug/ide-hvigor-errorcode-00305',
'tools/coding-debug/ide-hvigor-errorcode-00306',
'tools/coding-debug/ide-hvigor-errorcode-00307',
'tools/coding-debug/ide-hvigor-errorcode-00308',
'tools/coding-debug/ide-hvigor-errorcode-00309',
'tools/coding-debug/hapsigntool-errorcode'
            ]
          }
        ]
      }
    ]
  },
{
    type: 'category',
    label: '优化应用性能',
    collapsed: true,
    items: [
'tools/coding-debug/ide-insight-description',
{
        type: 'category',
        label: 'DevEco Profiler调优工具简介',
        collapsed: true,
        items: [
'tools/coding-debug/ide-profiler-layout',
'tools/coding-debug/ide-profiler-session',
'tools/coding-debug/ide-profiler-data'
        ]
      },
{
        type: 'category',
        label: '使用Profiler进行性能调优',
        collapsed: true,
        items: [
'tools/coding-debug/ide-profiler-process',
'tools/coding-debug/realtime-monitor',
'tools/coding-debug/deep-recording'
        ]
      },
{
        type: 'category',
        label: '卡顿丢帧分析',
        collapsed: true,
        items: [
'tools/coding-debug/ide-insight-session-frame',
'tools/coding-debug/ide-arkui-analysis',
'tools/coding-debug/ide-frame-case'
        ]
      },
{
        type: 'category',
        label: '冷启动：Launch分析',
        collapsed: true,
        items: [
'tools/coding-debug/ide-insight-session-launch',
'tools/coding-debug/ide-profiler-launch-case'
        ]
      },
{
        type: 'category',
        label: '内存泄露：Snapshot分析',
        collapsed: true,
        items: [
'tools/coding-debug/ide-snapshot-basic-operations',
'tools/coding-debug/ide-arkts-memory-leak-analysis'
        ]
      },
{
        type: 'category',
        label: '基础内存：Allocation分析',
        collapsed: true,
        items: [
'tools/coding-debug/ide-insight-session-allocations-memory',
'tools/coding-debug/ide-insight-session-allocations-data-filtering',
'tools/coding-debug/ide-insight-session-boot-memory',
'tools/coding-debug/ide-native-allocation-case'
        ]
      },
'tools/coding-debug/ide-commemory',
'tools/coding-debug/ide-profiler-energy',
'tools/coding-debug/ide-profiler-arkweb',
'tools/coding-debug/ide-profiler-network',
'tools/coding-debug/ide-parallel-concurrency-analysis',
'tools/coding-debug/ide-profiler-gpu',
'tools/coding-debug/ide-insight-session-time',
'tools/coding-debug/ide-insight-session-cpu',
{
        type: 'category',
        label: '附录',
        collapsed: true,
        items: [
'tools/coding-debug/ide-graphics-profiler',
'tools/coding-debug/ide-shortcut-key',
'tools/coding-debug/ide-profiler-errorcode',
'tools/coding-debug/ide-devecostudio-glossary'
        ]
      }
    ]
  },
'tools/coding-debug/ide-publish-app',
{
    type: 'category',
    label: '附录',
    collapsed: true,
    items: [
'tools/coding-debug/ide-environment-config',
'tools/coding-debug/ide-environment-variable',
'tools/coding-debug/ide-operation-and-services',
'tools/coding-debug/ide-configuration-parameter',
'tools/coding-debug/ide-close-send-usage-statistics',
'tools/coding-debug/ide-log-postback',
'tools/end-cloud/agc-pac',
{
        type: 'category',
        label: 'Code Linter代码检查规则',
        collapsed: true,
        items: [
'tools/coding-debug/ide-codelinter-rules-change',
'tools/coding-debug/ide-coderlinter-recommended-rules',
{
            type: 'category',
            label: '通用规则@typescript-eslint',
            collapsed: true,
            items: [
'tools/coding-debug/ide_adjacent-overload-signatures',
'tools/coding-debug/ide_array-type',
'tools/coding-debug/ide_await-thenable',
'tools/coding-debug/ide_ban-ts-comment',
'tools/coding-debug/ide_ban-tslint-comment',
'tools/coding-debug/ide_ban-types',
'tools/coding-debug/ide_brace-style',
'tools/coding-debug/ide_class-literal-property-style',
'tools/coding-debug/ide_comma-dangle',
'tools/coding-debug/ide_comma-spacing',
'tools/coding-debug/ide_consistent-indexed-object-style',
'tools/coding-debug/ide_consistent-type-assertions',
'tools/coding-debug/ide_consistent-type-definitions',
'tools/coding-debug/ide_consistent-type-imports',
'tools/coding-debug/ide_default-param-last',
'tools/coding-debug/ide_dot-notation',
'tools/coding-debug/ide_explicit-function-return-type',
'tools/coding-debug/ide_explicit-member-accessibility',
'tools/coding-debug/ide_explicit-module-boundary-types',
'tools/coding-debug/ide_func-call-spacing',
'tools/coding-debug/ide_init-declarations',
'tools/coding-debug/ide_keyword-spacing',
'tools/coding-debug/ide_lines-between-class-members',
'tools/coding-debug/ide_member-delimiter-style',
'tools/coding-debug/ide_member-ordering',
'tools/coding-debug/ide_method-signature-style',
'tools/coding-debug/ide_naming-convention',
'tools/coding-debug/ide_no-array-constructor',
'tools/coding-debug/ide_no-base-to-string',
'tools/coding-debug/ide_no-confusing-non-null-assertion',
'tools/coding-debug/ide_no-confusing-void-expression',
'tools/coding-debug/ide_no-dupe-class-members',
'tools/coding-debug/ide_no-duplicate-imports',
'tools/coding-debug/ide_no-dynamic-delete',
'tools/coding-debug/ide_no-empty-function',
'tools/coding-debug/ide_no-empty-interface',
'tools/coding-debug/ide_no-explicit-any',
'tools/coding-debug/ide_no-extraneous-class',
'tools/coding-debug/ide_no-extra-non-null-assertion',
'tools/coding-debug/ide_no-extra-parens',
'tools/coding-debug/ide_no-extra-semi',
'tools/coding-debug/ide_no-floating-promises',
'tools/coding-debug/ide_no-for-in-array',
'tools/coding-debug/ide_no-implicit-any-catch',
'tools/coding-debug/ide_no-implied-eval',
'tools/coding-debug/ide_no-inferrable-types',
'tools/coding-debug/ide_no-invalid-this',
'tools/coding-debug/ide_no-invalid-void-type',
'tools/coding-debug/ide_no-loop-func',
'tools/coding-debug/ide_no-loss-of-precision',
'tools/coding-debug/ide_no-magic-numbers',
'tools/coding-debug/ide_no-misused-new',
'tools/coding-debug/ide_no-misused-promises',
'tools/coding-debug/ide_no-namespace',
'tools/coding-debug/ide_no-non-null-asserted-optional-chain',
'tools/coding-debug/ide_no-non-null-assertion',
'tools/coding-debug/ide_no-parameter-properties',
'tools/coding-debug/ide_no-redeclare',
'tools/coding-debug/ide_no-require-imports',
'tools/coding-debug/ide_no-restricted-syntax',
'tools/coding-debug/ide_no-shadow',
'tools/coding-debug/ide_no-this-alias',
'tools/coding-debug/ide_no-throw-literal',
'tools/coding-debug/ide_no-type-alias',
'tools/coding-debug/ide_no-unnecessary-boolean-literal-compare',
'tools/coding-debug/ide_no-unnecessary-condition',
'tools/coding-debug/ide_no-unnecessary-qualifier',
'tools/coding-debug/ide_no-unnecessary-type-arguments',
'tools/coding-debug/ide_no-unnecessary-type-assertion',
'tools/coding-debug/ide_no-unnecessary-type-constraint',
'tools/coding-debug/ide_no-unsafe-argument',
'tools/coding-debug/ide_no-unsafe-assignment',
'tools/coding-debug/ide_no-unsafe-call',
'tools/coding-debug/ide_no-unsafe-member-access',
'tools/coding-debug/ide_no-unsafe-return',
'tools/coding-debug/ide_no-unused-expressions',
'tools/coding-debug/ide_no-unused-vars',
'tools/coding-debug/ide_no-use-before-define',
'tools/coding-debug/ide_no-useless-constructor',
'tools/coding-debug/ide_prefer-as-const',
'tools/coding-debug/ide_prefer-enum-initializers',
'tools/coding-debug/ide_prefer-for-of',
'tools/coding-debug/ide_prefer-function-type',
'tools/coding-debug/ide_prefer-includes',
'tools/coding-debug/ide_prefer-literal-enum-member',
'tools/coding-debug/ide_prefer-namespace-keyword',
'tools/coding-debug/ide_prefer-nullish-coalescing',
'tools/coding-debug/ide_prefer-optional-chain',
'tools/coding-debug/ide_prefer-readonly',
'tools/coding-debug/ide_prefer-readonly-parameter-types',
'tools/coding-debug/ide_prefer-reduce-type-parameter',
'tools/coding-debug/ide_prefer-regexp-exec',
'tools/coding-debug/ide_prefer-string-starts-ends-with',
'tools/coding-debug/ide_prefer-ts-expect-error',
'tools/coding-debug/ide_promise-function-async',
'tools/coding-debug/ide_quotes',
'tools/coding-debug/ide_require-array-sort-compare',
'tools/coding-debug/ide_require-await',
'tools/coding-debug/ide_restrict-plus-operands',
'tools/coding-debug/ide_restrict-template-expressions',
'tools/coding-debug/ide_return-await',
'tools/coding-debug/ide_semi',
'tools/coding-debug/ide_space-before-function-paren',
'tools/coding-debug/ide_space-infix-ops',
'tools/coding-debug/ide_strict-boolean-expressions',
'tools/coding-debug/ide_switch-exhaustiveness-check',
'tools/coding-debug/ide_triple-slash-reference',
'tools/coding-debug/ide_type-annotation-spacing',
'tools/coding-debug/ide_typedef',
'tools/coding-debug/ide_unbound-method',
'tools/coding-debug/ide_unified-signatures',
'tools/coding-debug/ide_prefer-const',
'tools/coding-debug/ide_eqeqeq'
            ]
          },
{
            type: 'category',
            label: '安全规则@security',
            collapsed: true,
            items: [
'tools/coding-debug/ide_no-commented-code',
'tools/coding-debug/ide_no-cycle',
'tools/coding-debug/ide_no-unsafe-aes',
'tools/coding-debug/ide_no-unsafe-dh',
'tools/coding-debug/ide_no-unsafe-dsa',
'tools/coding-debug/ide_no-unsafe-dh-key',
'tools/coding-debug/ide_no-unsafe-dsa-key',
'tools/coding-debug/ide_no-unsafe-ecdsa',
'tools/coding-debug/ide_no-unsafe-hash',
'tools/coding-debug/ide_no-unsafe-mac',
'tools/coding-debug/ide_no-unsafe-rsa-encrypt',
'tools/coding-debug/ide_no-unsafe-rsa-key',
'tools/coding-debug/ide_no-unsafe-rsa-sign',
'tools/coding-debug/ide-no-unsafe-3des',
'tools/coding-debug/ide-specified-interface-call-chain-check',
'tools/coding-debug/ide_no-unsafe-kdf',
'tools/coding-debug/ide_no-unsafe-sm4',
'tools/coding-debug/ide_no-unsafe-sm2-key',
'tools/coding-debug/ide_no-unsafe-sm2-cipher',
'tools/coding-debug/ide_no-unsafe-ecdh',
'tools/coding-debug/ide_no-unsafe-huks'
            ]
          },
{
            type: 'category',
            label: '性能规则@performance',
            collapsed: true,
            items: [
'tools/coding-debug/ide-avoid-overusing-custom-component-check',
'tools/coding-debug/ide-bad-deep-clone-check',
'tools/coding-debug/ide-constant-property-check-in-loops',
'tools/coding-debug/ide-crypto-replacement-check',
'tools/coding-debug/ide-custom-node-memory-leak-check',
'tools/coding-debug/ide-dark-color-mode-check',
'tools/coding-debug/ide-datashare-query-unrelease-check',
'tools/coding-debug/ide-foreach-args-check',
'tools/coding-debug/ide-foreach-index-check',
'tools/coding-debug/ide-gif-hardware-decoding-check',
'tools/coding-debug/ide_hp-arkui-abouttoreuse',
'tools/coding-debug/ide_hp-arkui-avoid-empty-callback',
'tools/coding-debug/ide_hp-arkui-combine-same-arg-animateto',
'tools/coding-debug/ide_hp-arkui-image-async-load',
'tools/coding-debug/ide_hp-arkui-load-on-demand',
'tools/coding-debug/ide_hp-arkui-limit-refresh-scope',
'tools/coding-debug/ide_hp-arkui-no-func-as-arg-for-reusable-component',
'tools/coding-debug/ide-hp-arkui-no-high-freq-log',
'tools/coding-debug/ide_hp-arkui-no-stringify-lazyforeach-key',
'tools/coding-debug/ide_hp-arkui-no-state-var-access-in-loop',
'tools/coding-debug/ide-hp-arkts-no-use-any-export-current',
'tools/coding-debug/ide-hp-arkts-no-use-any-export-other',
'tools/coding-debug/ide_hp-arkui-remove-container-without-property',
'tools/coding-debug/ide_hp-arkui--replace-reusable-by-builder',
'tools/coding-debug/ide-hp-arkui-reduce-ges-distance',
'tools/coding-debug/ide_hp-arkui-no-redundant-nest',
'tools/coding-debug/ide-hp-arkui-remove-redundant-state-var',
'tools/coding-debug/ide-hp-arkui-remove-unchanged-state-var',
'tools/coding-debug/ide_hp-arkui-set-cache-count-for-lazyforeach-grid',
'tools/coding-debug/ide-hp-arkui-suggest-cache-avplayer',
'tools/coding-debug/ide_hp-arkui-use-reuseid-if-else-component',
'tools/coding-debug/ide-hp-arkui-suggest-use-effectkit-blur',
'tools/coding-debug/ide-hp-arkui-sg-anonymousid-async',
'tools/coding-debug/ide-hp-attribute-update-refresh-scope',
'tools/coding-debug/ide_hp-arkui-use-grid-layout-options',
'tools/coding-debug/ide_hp-arkui-use-id-in-get-resource-sync-api',
'tools/coding-debug/ide_hp-arkui-use-local-var-to-replace-state-var',
'tools/coding-debug/ide_hp-arkui-use-onanimationstart-in-swiper',
'tools/coding-debug/ide_hp-arkui-use-object-link-to-replace-prop',
'tools/coding-debug/ide_hp-arkui-use-row-column-to-replace-flex',
'tools/coding-debug/ide_hp-arkui-use-reusable-component',
'tools/coding-debug/ide_hp-arkui-use-scale-to-replace-attr-animateto',
'tools/coding-debug/ide-hp-arkui-use-taskpool-for-web-request',
'tools/coding-debug/ide_hp-arkui-use-transition-to-replace-animateto',
'tools/coding-debug/ide_hp-arkui-use-word-break-in-space',
'tools/coding-debug/ide-hp-arkui-wrap-waterflow-if-else-footer',
'tools/coding-debug/ide-high-frequency-log-check',
'tools/coding-debug/ide-hp-ffrt-no-use-std',
'tools/coding-debug/ide_hp-performance-no-closures',
'tools/coding-debug/ide_hp-performance-no-dynamic-cls-func',
'tools/coding-debug/ide-init-list-component',
'tools/coding-debug/ide-js-code-cache-by-interception-check',
'tools/coding-debug/ide-js-code-cache-by-precompile-check',
'tools/coding-debug/ide-lazyforeach-args-check',
'tools/coding-debug/ide-lottie-animation-destroy-check',
'tools/coding-debug/ide-multi-associations-state-var-check',
'tools/coding-debug/ide-monitor-invisible-area-in-image-animation',
'tools/coding-debug/ide-no-use-any-import',
'tools/coding-debug/ide_no-high-loaded-frame-rate-range',
'tools/coding-debug/ide-number-init-check',
'tools/coding-debug/ide-nested-post-frame-callback-check',
'tools/coding-debug/ide-object-creation-check',
'tools/coding-debug/ide-reasonable-audio-use-check',
'tools/coding-debug/ide-reasonable-gps-use-check',
'tools/coding-debug/ide-reuse-date-instances-check',
'tools/coding-debug/ide-reasonable-sensor-use-check',
'tools/coding-debug/ide-sparse-array-check',
'tools/coding-debug/ide-start-window-icon-check',
'tools/coding-debug/ide-state-variable-usage-in-ui-format-check',
'tools/coding-debug/ide-typed-array-check',
'tools/coding-debug/ide-timezone-interface-check',
'tools/coding-debug/ide-tabs-on-change-check',
'tools/coding-debug/ide-update-state-var-between-animatetos-check',
'tools/coding-debug/ide-performance-web-cache-mode-check',
'tools/coding-debug/ide-web-on-active-check',
'tools/coding-debug/ide-waterflow-data-preload-check'
            ]
          },
{
            type: 'category',
            label: '预览规则@previewer',
            collapsed: true,
            items: [
'tools/coding-debug/ide_value-for-local-initialization',
'tools/coding-debug/ide_no-page-method-on-preview-component',
'tools/coding-debug/ide_no-unallowed-decorator-on-root-component'
            ]
          },
{
            type: 'category',
            label: '一次开发多端部署规则@cross-device-app-dev',
            collapsed: true,
            items: [
'tools/coding-debug/ide_color-contrast',
'tools/coding-debug/ide_color-value',
'tools/coding-debug/ide_font-size-unit',
'tools/coding-debug/ide_font-size',
'tools/coding-debug/ide_grid-columns-span',
'tools/coding-debug/ide_grid-span-value',
'tools/coding-debug/ide-one-multi-breakpoint-check',
'tools/coding-debug/ide_sidebar-navigation',
'tools/coding-debug/ide_size-unit',
'tools/coding-debug/ide_touch-target-size',
'tools/coding-debug/ide-window-size-change-listener-check',
'tools/coding-debug/ide-immersive-effect-check'
            ]
          },
{
            type: 'category',
            label: 'ArkTS代码风格规则@hw-stylistic',
            collapsed: true,
            items: [
'tools/coding-debug/ide_array-bracket-spacing',
'tools/coding-debug/ide-brace-style-stylistic',
'tools/coding-debug/ide-comma-spacing-stylistic',
'tools/coding-debug/ide_curly',
'tools/coding-debug/ide-file-naming-convention',
'tools/coding-debug/ide_indent',
'tools/coding-debug/ide-keyword-spacing-stylistic',
'tools/coding-debug/ide_max-len',
'tools/coding-debug/ide_no-multi-spaces',
'tools/coding-debug/ide_no-tabs',
'tools/coding-debug/ide_object-property-newline',
'tools/coding-debug/ide_one-var-declaration-per-line',
'tools/coding-debug/ide_operator-linebreak',
'tools/coding-debug/ide-quotes-stylistic',
'tools/coding-debug/ide_semi-spacing',
'tools/coding-debug/ide_space-before-blocks',
'tools/coding-debug/ide-space-before-function-paren-stylistic',
'tools/coding-debug/ide-space-infix-ops-stylistic'
            ]
          },
{
            type: 'category',
            label: '正确性规则@correctness',
            collapsed: true,
            items: [
'tools/coding-debug/ide-avsession-buttons-check',
'tools/coding-debug/ide-audio-interrupt-check',
'tools/coding-debug/ide-audio-pause-or-mute-check',
'tools/coding-debug/ide-avsession-metadata-check',
'tools/coding-debug/ide-image-pixel-format-check',
'tools/coding-debug/ide-image-interpolation-check',
'tools/coding-debug/ide_listen-default-network-change',
'tools/coding-debug/ide_listen-multi-network-concurrent',
'tools/coding-debug/ide-multimedia-use-stride-in-image-receiver',
'tools/coding-debug/ide-redundant-dependency-check',
'tools/coding-debug/ide-v1-nested-object-property-change-format-check',
'tools/coding-debug/ide-v1-state-object-member-used-in-fun-parameter'
            ]
          },
{
            type: 'category',
            label: '兼容性规则@compatibility',
            collapsed: true,
            items: [
'tools/coding-debug/ide-api-compatibility-check'
            ]
          }
        ]
      },
{
        type: 'category',
        label: '标准标签',
        collapsed: true,
        items: [
'tools/coding-debug/ide-arktsdoc-author',
'tools/coding-debug/ide-arktsdoc-copyright',
'tools/coding-debug/ide-arktsdoc-deprecated',
'tools/coding-debug/ide-arktsdoc-param',
'tools/coding-debug/ide-arktsdoc-returns',
'tools/coding-debug/ide-arktsdoc-since',
'tools/coding-debug/ide-arktsdoc-throws',
'tools/coding-debug/ide-arktsdoc-todo',
'tools/coding-debug/ide-arktsdoc-version',
'tools/coding-debug/ide-arktsdoc-link'
        ]
      }
    ]
  }
],

aiAssistSidebar: [
'tools/ai-assist/ide-codegenie-releasenote',
'tools/ai-assist/ide-codegenie',
{
    type: 'category',
    label: '智能问答',
    collapsed: true,
    items: [
'tools/ai-assist/ide-code-generation',
'tools/ai-assist/ide-project-ask',
'tools/ai-assist/ide-code-analyse'
    ]
  },
{
    type: 'category',
    label: '智能执行',
    collapsed: true,
    items: [
'tools/ai-assist/ide--code-generation',
'tools/ai-assist/ide-code-modify'
    ]
  },
{
    type: 'category',
    label: '编辑区代码生成',
    collapsed: true,
    items: [
'tools/ai-assist/ide-edit-area-code-generation',
'tools/ai-assist/ide-code-continuation'
    ]
  },
'tools/ai-assist/ide-page-generation',
'tools/ai-assist/ide-codegenie-service-widget',
'tools/ai-assist/ide-ut-generation',
'tools/ai-assist/ide-explain-code',
'tools/ai-assist/ide-compilation-error-analysis',
'tools/ai-assist/ide-ai-profiler',
'tools/ai-assist/ide-ui-generator',
'tools/ai-assist/ide-insight-intent2',
{
    type: 'category',
    label: '自定义智能体配置',
    collapsed: true,
    items: [
'tools/ai-assist/ide-agent-use',
'tools/ai-assist/ide-agent-mcp',
'tools/ai-assist/ide-agent-model',
'tools/ai-assist/ide-agent-rules',
'tools/ai-assist/ide-skills',
'tools/ai-assist/ide-memory',
'tools/ai-assist/ide-prompts'
    ]
  },
'tools/ai-assist/ide-ocal-knowledge'
],

devecoCodeSidebar: [
  {
    type: 'category',
    label: 'DevEco Code',
    collapsed: false,
    items: [
      'tools/deveco-code/overview',
      'tools/deveco-code/deveco-code-install',
      'tools/deveco-code/deveco-code-agent',
      'tools/deveco-code/deveco-code-model',
      'tools/deveco-code/deveco-code-common-configure',
    ],
  },
  {
    type: 'category',
    label: 'DevEco CLI',
    collapsed: true,
    items: [
      'tools/deveco-code/deveco-cli',
      'tools/deveco-code/deveco-cli-install',
      'tools/deveco-code/deveco-cli-options',
    ],
  },
],

cliToolsSidebar: [
{
  type: 'category',
  label: '概览',
  collapsed: false,
  items: [
    'tools/cli-tools/command-line-tools-overview',
    'tools/cli-tools/ide-commandline-get',
  ],
},
{
  type: 'category',
  label: '应用构建与签名',
  collapsed: true,
  items: [
    'tools/cli-tools/packing-tool',
    'tools/cli-tools/unpacking-tool',
    'tools/cli-tools/packing-unpacking',
    'tools/cli-tools/app-check-tool',
    'tools/cli-tools/binary-sign-tool',
    'tools/cli-tools/bm-tool',
  ],
},
{
  type: 'category',
  label: '调试与日志',
  collapsed: true,
  items: [
    'tools/cli-tools/hdc',
    'tools/cli-tools/aa-tool',
    'tools/cli-tools/hilog',
    'tools/cli-tools/hilog-tool',
    'tools/cli-tools/hidumper',
    'tools/cli-tools/hidumper-privacymanagerservice',
    'tools/cli-tools/hitrace',
  ],
},
{
  type: 'category',
  label: '性能分析',
  collapsed: true,
  items: [
    'tools/cli-tools/hiperf',
    'tools/cli-tools/hiprofiler',
    'tools/cli-tools/rawheap-translator',
  ],
},
{
  type: 'category',
  label: '系统与设备',
  collapsed: true,
  items: [
    'tools/cli-tools/param-tool',
    'tools/cli-tools/power-shell',
    'tools/cli-tools/atm-tool',
    'tools/cli-tools/edm-tool',
    'tools/cli-tools/devicedebug-tool',
    'tools/cli-tools/cem-tool',
    'tools/cli-tools/anm-tool',
    'tools/cli-tools/network-cfg',
    'tools/cli-tools/network-netcopilot',
    'tools/cli-tools/uinput',
    'tools/cli-tools/toybox',
  ],
},
{
  type: 'category',
  label: '资源处理',
  collapsed: true,
  items: [
    'tools/cli-tools/restool',
    'tools/cli-tools/mediatool',
  ],
},
{
  type: 'category',
  label: 'IDE命令行',
  collapsed: true,
  items: [
    'tools/cli-tools/ide-command-line-codelinter',
    'tools/cli-tools/ide-command-line-hstack',
    'tools/cli-tools/ide-hvigor-commandline',
  ],
},
],

cloudDevSidebar: [
'tools/end-cloud/agc-harmonyos-clouddev-overview',
'tools/end-cloud/agc-harmonyos-clouddev-prepare',
{
    type: 'category',
    label: '创建端云一体化开发工程',
    collapsed: true,
    items: [
'tools/end-cloud/agc-harmonyos-create-appproject',
'tools/end-cloud/agc-harmonyos-create-faproject',
'tools/end-cloud/agc-harmonyos-project-migration'
    ]
  },
{
    type: 'category',
    label: '开发云侧工程',
    collapsed: true,
    items: [
{
        type: 'category',
        label: '开发云函数',
        collapsed: true,
        items: [
'tools/end-cloud/agc-harmonyos-clouddev-functionprocess',
'tools/end-cloud/agc-harmonyos-clouddev-createfunc',
'tools/end-cloud/agc-harmonyos-clouddev-funccoding',
'tools/end-cloud/agc-harmonyos-clouddev-debugfunc',
'tools/end-cloud/agc-harmonyos-clouddev-deployfunc'
        ]
      },
{
        type: 'category',
        label: '开发云对象',
        collapsed: true,
        items: [
'tools/end-cloud/agc-harmonyos-clouddev-cloudobjprocess',
'tools/end-cloud/agc-harmonyos-clouddev-createcloudobj',
'tools/end-cloud/agc-harmonyos-clouddev-cloudobj-coding',
'tools/end-cloud/agc-harmonyos-clouddev-debugcloudobj',
'tools/end-cloud/agc-harmonyos-clouddev-deploycloudobj'
        ]
      },
{
        type: 'category',
        label: '开发云数据库',
        collapsed: true,
        items: [
'tools/end-cloud/agc-harmonyos-clouddev-dbprocess',
'tools/end-cloud/agc-harmonyos-clouddev-objecttype',
'tools/end-cloud/agc-harmonyos-clouddev-dataentry',
'tools/end-cloud/agc-harmonyos-clouddev-deploydatabase',
'tools/end-cloud/agc-harmonyos-clouddev-modelclass'
        ]
      }
    ]
  },
'tools/end-cloud/agc-harmonyos-clouddev-deploy',
'tools/end-cloud/agc-harmonyos-clouddev-sync',
{
    type: 'category',
    label: '开发端侧工程',
    collapsed: true,
    items: [
'tools/end-cloud/agc-harmonyos-clouddev-invokecloudfunc',
'tools/end-cloud/agc-harmonyos-clouddev-invokecloudobj',
'tools/end-cloud/agc-harmonyos-clouddev-invokeclouddatabase',
'tools/end-cloud/agc-harmonyos-clouddev-invokecloudstorage'
    ]
  },
'tools/end-cloud/agc-harmonyos-clouddev-console',
'tools/end-cloud/agc-harmonyos-clouddev-compile',
'tools/end-cloud/agc-harmonyos-clouddev-release',
'tools/end-cloud/agc-harmonyos-clouddev-faq',
{
    type: 'category',
    label: '附录',
    collapsed: true,
    items: [
'tools/end-cloud/agc-harmonyos-clouddev-emptyability'
    ]
  }
],

ohpmSidebar: [
{
    type: 'category',
    label: 'ohpm 命令行工具',
    items: [
'tools/ohpm/ide-ohpm-system-platform',
'tools/ohpm/ide-ohpmrc',
'tools/ohpm/ide-oh-package-json5',
{
        type: 'category',
        label: '常用命令',
        items: [
'tools/ohpm/commands/ide-ohpm-config',
'tools/ohpm/commands/ide-ohpm-help',
'tools/ohpm/commands/ide-ohpm-info',
'tools/ohpm/commands/ide-ohpm-init',
'tools/ohpm/commands/ide-ohpm-install',
'tools/ohpm/commands/ide-ohpm-list',
'tools/ohpm/commands/ide-ohpm-publish',
'tools/ohpm/commands/ide-ohpm-uninstall',
'tools/ohpm/commands/ide-ohpm-prepublish',
'tools/ohpm/commands/ide-ohpm-unpublish',
'tools/ohpm/commands/ide-ohpm-update',
'tools/ohpm/commands/ide-ohpm-root',
'tools/ohpm/commands/ide-ohpm-version',
'tools/ohpm/commands/ide-ohpm-cache',
'tools/ohpm/commands/ide-ohpm-run',
'tools/ohpm/commands/ide-ohpm--version',
'tools/ohpm/commands/ide-ohpm-ping',
'tools/ohpm/commands/ide-ohpm-clean',
'tools/ohpm/commands/ide-ohpm-dist-tags',
'tools/ohpm/commands/ide-ohpm-convert',
'tools/ohpm/commands/ide-ohpm-dependency-check'
        ]
      },
{
        type: 'category',
        label: '错误码',
        items: [
'tools/ohpm/errorcode/ide-ohpm-config-errorcode',
'tools/ohpm/errorcode/ide-ohpm-info-errorcode',
'tools/ohpm/errorcode/ide-ohpm-install-errorcode',
'tools/ohpm/errorcode/ide-ohpm-list-errorcode',
'tools/ohpm/errorcode/ide-ohpm-publish-errorcode',
'tools/ohpm/errorcode/ide-ohpm-uninstall-errorcode',
'tools/ohpm/errorcode/ide-ohpm-unpublish-errorcode',
'tools/ohpm/errorcode/ide-ohpm-update-errorcode',
'tools/ohpm/errorcode/ide-ohpm-version-errorcode',
'tools/ohpm/errorcode/ide-ohpm-cache-errorcode',
'tools/ohpm/errorcode/ide-ohpm-run-errorcode',
'tools/ohpm/errorcode/ide-ohpm-ping-errorcode',
'tools/ohpm/errorcode/ide-ohpm-clean-errorcode',
'tools/ohpm/errorcode/ide-ohpm-dist-tags-errorcode',
'tools/ohpm/errorcode/ide-ohpm-convert-errorcode',
'tools/ohpm/errorcode/ide-ohpm-dependency-check-errorcode',
'tools/ohpm/errorcode/ide-ohpm-errorcode-universal'
        ]
      }
    ]
  },
{
    type: 'category',
    label: 'ohpm-repo 私仓搭建',
    collapsed: true,
    items: [
'tools/ohpm/repo/ide-ohpm-repo-overview',
'tools/ohpm/repo/ide-ohpm-repo-quickstart',
'tools/ohpm/repo/ide-ohpm-repo-configuration',
'tools/ohpm/repo/ide-ohpm-repo-log',
'tools/ohpm/repo/ide-ohpm-repo-commands',
{
        type: 'category',
        label: '部署指导',
        collapsed: true,
        items: [
'tools/ohpm/repo/ide-ohpm-deploy-single-instance',
'tools/ohpm/repo/ide-ohpm-deploy-multiple-instances'
        ]
      },
{
        type: 'category',
        label: '页面功能介绍',
        collapsed: true,
        items: [
'tools/ohpm/repo/ide-ohpm-web-front-page',
'tools/ohpm/repo/ide-ohpm-web-user-center',
'tools/ohpm/repo/ide-ohpm-user-management',
'tools/ohpm/repo/ide-ohpm-depot-management',
'tools/ohpm/repo/ide-package-permission-management',
'tools/ohpm/repo/ide-ohpm-certification',
'tools/ohpm/repo/ide-ohpm-organization',
'tools/ohpm/repo/ide-ohpm-repo-operation-log',
'tools/ohpm/repo/ide-ohpm-system-settings'
        ]
      },
'tools/ohpm/repo/ide-ohpm-repo-configuration-guide',
'tools/ohpm/repo/ide-ohpm-repo-faq',
{
        type: 'category',
        label: '附录',
        collapsed: true,
        items: [
'tools/ohpm/repo/ide-ohpm-repo-data-migration',
{
            type: 'category',
            label: '版本升级',
            collapsed: true,
            items: [
'tools/ohpm/repo/ide-upgrade-101_to_2xx',
'tools/ohpm/repo/ide-upgrade-110_to_2xx',
'tools/ohpm/repo/ide-upgrade-2xx_to_2xx'
            ]
          },
{
            type: 'category',
            label: '自定义存储插件',
            collapsed: true,
            items: [
'tools/ohpm/repo/ide-ohpm-repo-plugin-configuration',
'tools/ohpm/repo/ide-ohpm-repo-template-file'
            ]
          },
{
            type: 'category',
            label: '自定义认证插件',
            collapsed: true,
            items: [
'tools/ohpm/repo/ide-custom-auth-plugin-configuration',
'tools/ohpm/repo/ide-custom-auth-plugin-template'
            ]
          },
'tools/ohpm/repo/ide-ohpm-repo-data-backup',
'tools/ohpm/repo/ide-ohpm-repo-export-metadata',
'tools/ohpm/repo/ide-interface-protocol',
{
            type: 'category',
            label: '自定义元数据规则校验插件',
            collapsed: true,
            items: [
'tools/ohpm/repo/ide-custom-metadata-rule-validation-config',
'tools/ohpm/repo/ide-rule-verification-template-file'
            ]
          },
'tools/ohpm/repo/ide-ohpm-dockerfile'
        ]
      }
    ]
  }
],

};
