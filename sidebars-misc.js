// @ts-check
// Sidebar for misc module (quality + security + architecture + atomic + resources + guides + overview + experience-suggestions)

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  experienceSuggestionsSidebar: require('./sidebars-experience-suggestions.js').experienceSuggestionsSidebar,
  overviewSidebar: [
    'overview/intro',
  ],
  architectureSidebar: [
    'architecture/overview',
    'architecture/layered',
    'architecture/modular',
  ],
  qualitySidebar: [
    "quality/quality-overview",
    {
      type: "category",
      label: "性能",
      collapsible: true,
      collapsed: false,
      items: [
        "quality/performance-guide-reading",
        "quality/smooth-application-design",
        {
          type: "category",
          label: "性能检测",
          items: [
            "quality/performance-detection",
            "quality/performance-runtime-detection",
            "quality/performance-startup-time-detection",
            "quality/performance-mainthread-consumption-detection",
            "quality/performance-sliding-frame-drop-detection",
          ],
        },
        {
          type: "category",
          label: "性能分析",
          link: { type: "doc", id: "quality/optimization-tool-practice" },
          items: [
            "quality/optimization-overview",
            "quality/click-to-click-response-optimization",
            "quality/click-to-complete-delay-analysis",
            "quality/zhenlv",
            "quality/web-click-response-delay-analysis",
            "quality/web-completion-delay-analysis",
            "quality/web-frame-rate-performance-analysis",
            "quality/threads-serialization-timeout-analysis",
            {
              type: "category",
              label: "分析内存占用问题",
              link: { type: "doc", id: "quality/analyze-memory-problem" },
              items: [
                "quality/memory-basic-knowledge",
                "quality/retrieve-process-memory-info",
                "quality/arkts-js-memory-analysis",
                "quality/native-memory-analysis",
                "quality/kernel-memory-analysis",
                "quality/permission-timeout-analysis",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "性能优化",
          link: { type: "doc", id: "quality/performance-optimization" },
          items: [
            {
              type: "category",
              label: "感知流畅优化",
              link: { type: "doc", id: "quality/perceived-smoothness" },
              items: [
                "quality/control-rendering-range",
                "quality/reduce-layout-nodes",
                "quality/pptimized-component-drawing",
                "quality/state-refresh",
                "quality/animation-frame",
                "quality/concurrency-capability",
                "quality/preloading-resources",
              ],
            },
            {
              type: "category",
              label: "运行效率提高",
              link: { type: "doc", id: "quality/improve-running-efficiency" },
              items: [
                "quality/reduce-time-consuming",
                "quality/delayed-trigger-operation",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "性能场景优化案例",
          link: { type: "doc", id: "quality/scenario-performance-optimization" },
          items: [
            "quality/developing-high-performance-ui",
            "quality/component-nesting-optimization",
            "quality/lazyforeach-optimization",
            "quality/ui-component-performance-optimization",
            "quality/time-optimization-of-the-main-thread",
            "quality/dispose-highly-loaded-component-render",
            "quality/best-practices-long-list",
            "quality/waterflow-performance-optimization",
            "quality/improve_grid_performance",
            "quality/swiper_high_performance_development_guide",
          ],
        },
        {
          type: "category",
          label: "应用启动与响应优化",
          link: { type: "doc", id: "quality/startup-response-optimization" },
          items: [
            "quality/application-cold-start-optimization",
            "quality/application-latency-optimization-cases",
          ],
        },
        {
          type: "category",
          label: "资源与存储优化",
          link: { type: "doc", id: "quality/resource-and-storage-optimization" },
          items: [
            "quality/decrease_pakage_size",
            "quality/memory-optimization",
            "quality/texture-compression-improve-performance",
            "quality/file-upload-and-download-performance",
          ],
        },
        {
          type: "category",
          label: "Web性能优化",
          link: { type: "doc", id: "quality/web-performance-optimization" },
          items: [
            "quality/web-develop-optimization",
          ],
        },
        {
          type: "category",
          label: "专项问题解决方案",
          link: { type: "doc", id: "quality/solutions-to-special-issues" },
          items: [
            "quality/screen-flicker-solution",
            "quality/image-white-lump-solution",
            "quality/object-serialization-performance",
            "quality/high-performance-json-parsing",
            "quality/high-performance-protobuf-parsing",
            "quality/concurrent-optimization",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "功耗",
      collapsible: true,
      collapsed: false,
      items: [
        "quality/power_overview",
        "quality/power-consumption-experience",
        {
          type: "category",
          label: "应用功耗检测",
          link: { type: "doc", id: "quality/power-consumption-analysis" },
          items: [
            "quality/power-consumption-develop-analysis",
            "quality/application-power-test",
            "quality/power-basic-quality-test",
            "quality/power-consumption-runtime-analysis",
          ],
        },
        {
          type: "category",
          label: "应用功耗分析",
          link: { type: "doc", id: "quality/application-power-analysis" },
          items: [
            "quality/high-cpu-load-analysis",
            "quality/frontend-invisible-animation-analysis",
            "quality/ui-skip-analysis",
            "quality/hwc-self-rendering-layer-analysis",
            "quality/background-sensors-baned-analysis",
          ],
        },
        {
          type: "category",
          label: "应用功耗优化",
          link: { type: "doc", id: "quality/application-power-optimization" },
          items: [
            {
              type: "category",
              label: "前台任务低功耗",
              link: { type: "doc", id: "quality/low-power-consumption-of-foreground-tasks" },
              items: [
                "quality/low-power-design-in-dark-mode",
                "quality/ltpo-description",
                "quality/utilize-hwc-efficiently",
                "quality/properly-use-foreground-resources",
                "quality/music-playback-scenarios",
                "quality/navigation-scenarios",
                "quality/static-scenarios",
                "quality/video-codec",
                "quality/video-barrage",
                "quality/video-rom",
                "quality/video-layer",
                "quality/video-wifi",
                "quality/network-resources",
                "quality/low-power-consumption-suggestions",
              ],
            },
            {
              type: "category",
              label: "后台任务低功耗",
              link: { type: "doc", id: "quality/low-power-consumption-of-background-tasks" },
              items: [
                "quality/use-of-background-tasks",
                "quality/back-task-implement",
                {
                  type: "category",
                  label: "后台硬件资源合理使用",
                  link: { type: "doc", id: "quality/use-of-background-hardware-resources" },
                  items: [
                    "quality/controlling-background-process-cpu",
                    "quality/reasonable-bluetooth-use",
                    "quality/reasonable-network-use",
                    "quality/reasonable-audio-use",
                    "quality/reasonable-gps-use",
                    "quality/reasonable-sensor-use",
                  ],
                },
                {
                  type: "category",
                  label: "后台软件资源合理使用",
                  link: { type: "doc", id: "quality/use-of-background-software-resources" },
                  items: [
                    "quality/reasonable-request-use",
                    "quality/reasonable-audio-playback-use",
                    "quality/reasonable-position-navigation-use",
                    "quality/reasonable-system-use",
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "category",
          label: "功耗场景优化案例",
          link: { type: "doc", id: "quality/scenario-power-optimization" },
          items: [
            "quality/vsync-power-optimization",
            "quality/buffer-power-optimization",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "稳定性",
      collapsible: true,
      collapsed: false,
      items: [
        "quality/stability-overview",
        {
          type: "category",
          label: "稳定性检测",
          link: { type: "doc", id: "quality/stability-detection" },
          items: [
            {
              type: "category",
              label: "开发态稳定性检测",
              link: { type: "doc", id: "quality/stability-develop-detection" },
              items: [
                "quality/stability-ide-static-detection",
                "quality/stability-deveco-testing",
                "quality/stability-app-analyzer",
                "quality/stability-ram-detection",
                "quality/stability-thread-detection",
              ],
            },
            {
              type: "category",
              label: "地址越界类问题检测",
              link: { type: "doc", id: "quality/stability-address-sanitizer-overview" },
              items: [
                "quality/stability-address-sanitizer-catagory",
                "quality/stability-address-sanitizer-principle",
                "quality/stability-asan-detection",
                "quality/stability-hwasan-detection",
                "quality/stability-gwpasan-detection",
                "quality/stability-address-sanitizer-faq",
              ],
            },
            {
              type: "category",
              label: "线程并发类问题检测",
              items: [
                "quality/stability-tsan-detection",
              ],
            },
            "quality/stability-ubsan-detection",
            {
              type: "category",
              label: "资源泄漏类问题检测",
              link: { type: "doc", id: "quality/stability-leak-detection" },
              items: [
                {
                  type: "category",
                  label: "内存泄漏类问题检测方法",
                  link: { type: "doc", id: "quality/stability-memleak-detection-overview" },
                  items: [
                    "quality/stability-js-memleak-detection",
                    "quality/stability-native-memleak-detection",
                    "quality/stability-file-handle-detection",
                    "quality/stability-thread-leak-detection",
                  ],
                },
              ],
            },
            {
              type: "category",
              label: "方舟类问题检测",
              link: { type: "doc", id: "quality/stability-ark-detection" },
              items: [
                "quality/stability-ark-runtime-detection",
                "quality/stability-ark-exception-detection",
              ],
            },
            {
              type: "category",
              label: "运行态稳定性检测",
              link: { type: "doc", id: "quality/stability-runtime-detection" },
              items: [
                "quality/stability-runtime-address-sanitizer-detection",
                "quality/stability-runtime-leak-detection",
                "quality/stability-runtime-freeze-detection",
                "quality/stability-runtime-exception-exit-detection",
                "quality/stability-runtime-crash-detection",
                "quality/stability-runtime-appkilled-detection",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "稳定性分析",
          items: [
            {
              type: "category",
              label: "稳定性故障类型及日志规格说明",
              link: { type: "doc", id: "quality/stability-fault-log" },
              items: [
                "quality/stability-fault-type",
                "quality/stability-log-specs",
              ],
            },
            "quality/stability-address-illegal-way",
            "quality/stability-leak-way",
            {
              type: "category",
              label: "应用冻屏类问题分析方法",
              link: { type: "doc", id: "quality/stability-app-freeze" },
              items: [
                "quality/stability-app-freeze-way",
                "quality/stability-app-freeze-ark-runtime",
              ],
            },
            {
              type: "category",
              label: "应用异常退出类问题分析方法",
              link: { type: "doc", id: "quality/stability-app-crash" },
              items: [
                "quality/stability-app-crash-cpp-way",
                "quality/stability-app-crash-js-way",
              ],
            },
            "quality/stability-app-killed-way",
          ],
        },
        {
          type: "category",
          label: "稳定性优化",
          items: [
            {
              type: "category",
              label: "稳定性编码规范",
              link: { type: "doc", id: "quality/stability-coding-standard" },
              items: [
                "quality/stability-coding-standard-api",
                "quality/stability-coding-standard-cpp",
                "quality/stability-coding-standard-node",
                "quality/stability-coding-standard-ndk-arkts",
                "quality/stability-coding-standard-libuv",
              ],
            },
            {
              type: "category",
              label: "日志打印规范",
              items: [
                "quality/stability-log-standard-hilog",
              ],
            },
            "quality/stability-address-sanitizer-opt",
            "quality/stability-leak-opt",
            "quality/stability-app-freeze-opt",
            {
              type: "category",
              label: "应用异常退出类问题优化建议",
              items: [
                "quality/stability-cpp-crash-opt",
                "quality/stability-js-crash-opt",
                "quality/stability-exception-exit-opt",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "稳定性案例",
          items: [
            "quality/scenario-stability-address-sanitizer",
            "quality/scenario-stability-leak",
            "quality/scenario-stability-app-freeze",
            {
              type: "category",
              label: "应用异常退出类问题案例",
              items: [
                "quality/scenario-stability-cppcrash",
                "quality/scenario-stability-jscrash",
                "quality/scenario-stability-exception-exit",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "稳定性运维",
          link: { type: "doc", id: "quality/stability-operate" },
          items: [
            "quality/stability-operate-event",
            "quality/stability-operate-apm",
          ],
        },
      ],
    },
  ],
  securitySidebar: [
    'security/app-privacy-protection',
    'security/app-data-security',
    'security/harmony-application-security',
    'security/app-asset-protection-design',
    'security/app-code-ob',
    'security/permission-application',
    'security/network-ca-security',
    'security/cross-platform-compatibility',
    'security/recommended-use-of-device-id',
    'security/arkweb-component-security',
  ],
  atomicSidebar: [
    {
      type: 'html',
      value: '<div style="text-indent: 4px;">从这里开始</div>', 
    },
    'atomic/startup/overview',
    'atomic/startup/basic',
    'atomic/startup/glossary',
    {
      type: 'html',
      value: '<div style="text-indent: 4px;"><hr>新开发元服务</div>', 
    },
    'atomic/develop/development-journey',
    'atomic/develop/preparation',
    'atomic/develop/first-service',
    {
      type: 'category',
      label: '开放能力',
      link: {
        type: 'doc',
        id: 'atomic/develop/capability',
      },
      items: [
        'atomic/develop/capability/test',
      ],
    },
    {
      type: 'html',
      value: '<div style="text-indent: 4px;"><hr>迁移至元服务</div>', 
    },
    'atomic/migration/ascf',
    'atomic/migration/new-project',
    'atomic/migration/min-program',
    'atomic/migration/others',
    'atomic/migration/build',
    'atomic/migration/debug',
    {
      type: 'category',
      label: '开放能力',
      link: {
        type: 'doc',
        id: 'atomic/migration/capability',
      },
      items: [
        'atomic/migration/capability/network',
        'atomic/migration/capability/bundle',
        'atomic/migration/capability/canvas',
      ],
    },
    'atomic/migration/command-line-tools',
    {
      type: 'category',
      label: 'API参考',
      link: {
        type: 'doc',
        id: 'atomic/migration/api-ref',
      },
      items: [
        'atomic/migration/api-ref/framework',
        'atomic/migration/api-ref/component',
        'atomic/migration/api-ref/api',
      ],
    },
    {
      type: 'html',
      value: '<div style="text-indent: 4px;"><hr>发布元服务</div>', 
    },
    'atomic/release/check',
    'atomic/release/pack',
    'atomic/release/filings',
    'atomic/release/publish',
  ],
  guidesSidebar: [
    'guides/startup/quick-start',
  ],
  designResSidebar: [
    'resources/design-res/overview',
  ],
  sampleCodeSidebar: [
    'resources/sample-code/overview',
  ],
  templatesSdkSidebar: [
    'resources/templates-sdk/overview',
  ],
  thirdPartyLibsSidebar: [
    'resources/third-party-libs/overview',
  ],
  crossPlatformSidebar: [
    'resources/cross-platform/overview',
  ],
};

module.exports = sidebars;
