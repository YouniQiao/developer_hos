// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
experienceSuggestionsSidebar: [
      'dev/experience-suggestions/experience-suggestions-overview',
{
        type: 'category',
        label: '应用基础功能和兼容性体验建议',
        items: [
          'dev/experience-suggestions/compatibility/compatibility-overview',
{
            type: 'category',
            label: '系统特性与基础功能',
            items: [
              'dev/experience-suggestions/compatibility/system-features/general-specifications',
              'dev/experience-suggestions/compatibility/system-features/app-specifications',
              'dev/experience-suggestions/compatibility/system-features/atomic-specifications',
              'dev/experience-suggestions/compatibility/system-features/widget-specifications',
              'dev/experience-suggestions/compatibility/system-features/distributed-capability-specification',
              'dev/experience-suggestions/compatibility/system-features/audio-specification',
              'dev/experience-suggestions/compatibility/system-features/display-specification',
              'dev/experience-suggestions/compatibility/system-features/protocol-specification',
            ],
},
{
            type: 'category',
            label: '基础兼容性',
            items: [
              'dev/experience-suggestions/compatibility/basic-compatibility/os-compatible',
              'dev/experience-suggestions/compatibility/basic-compatibility/upgrade-compatible',
              'dev/experience-suggestions/compatibility/basic-compatibility/device-compatible',
            ],
},
        ],
},
      'dev/experience-suggestions/experience-suggestions-stability',
{
        type: 'category',
        label: '应用性能体验建议',
        items: [
          'dev/experience-suggestions/performance/performance-overview',
          'dev/experience-suggestions/performance/performance-delay',
          'dev/experience-suggestions/performance/performance-frame-rate',
          'dev/experience-suggestions/performance/performance-content-display',
          'dev/experience-suggestions/performance/performance-memory-usage',
          'dev/experience-suggestions/performance/performance-cpu-usage',
        ],
},
{
        type: 'category',
        label: '应用功耗体验建议',
        items: [
          'dev/experience-suggestions/power/app-power-experience-standards-overview',
{
            type: 'category',
            label: '后台场景',
            items: [
              'dev/experience-suggestions/power/background/standard-background-task',
              'dev/experience-suggestions/power/background/standard-background-hardware',
              'dev/experience-suggestions/power/background/standard-background-software',
            ],
},
{
            type: 'category',
            label: '前台场景',
            items: [
              'dev/experience-suggestions/power/foreground/standard-foreground-frame-rate',
              'dev/experience-suggestions/power/foreground/standard-foreground-render',
              'dev/experience-suggestions/power/foreground/standard-foreground-resource',
            ],
},
        ],
},
{
        type: 'category',
        label: '应用安全隐私体验建议',
        items: [
          'dev/experience-suggestions/security-privacy/standard-security-privacy-overview',
{
            type: 'category',
            label: '安全',
            items: [
              'dev/experience-suggestions/security-privacy/security/standard-security-base',
              'dev/experience-suggestions/security-privacy/security/standard-security-debug',
              'dev/experience-suggestions/security-privacy/security/standard-security-release',
              'dev/experience-suggestions/security-privacy/security/standard-security-update',
              'dev/experience-suggestions/security-privacy/security/standard-security-maintain',
              'dev/experience-suggestions/security-privacy/security/standard-security-realize',
            ],
},
{
            type: 'category',
            label: '隐私',
            items: [
              'dev/experience-suggestions/security-privacy/privacy/standard-privacy-policy',
              'dev/experience-suggestions/security-privacy/privacy/standard-privacy-user-consent',
              'dev/experience-suggestions/security-privacy/privacy/standard-privacy-collect-use',
              'dev/experience-suggestions/security-privacy/privacy/standard-privacy-permission',
              'dev/experience-suggestions/security-privacy/privacy/standard-privacy-ad-identifier',
              'dev/experience-suggestions/security-privacy/privacy/standard-privacy-deregister',
            ],
},
{
            type: 'category',
            label: '纯净',
            items: [
              'dev/experience-suggestions/security-privacy/pure/standard-pure-notice',
              'dev/experience-suggestions/security-privacy/pure/standard-pure-mislead',
              'dev/experience-suggestions/security-privacy/pure/standard-pure-occupy',
              'dev/experience-suggestions/security-privacy/pure/standard-pure-retain',
              'dev/experience-suggestions/security-privacy/pure/standard-pure-tampering',
              'dev/experience-suggestions/security-privacy/pure/standard-pure-others',
            ],
},
        ],
},
      'dev/experience-suggestions/experience-suggestions-ux',
],
};
