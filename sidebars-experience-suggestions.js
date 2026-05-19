// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
experienceSuggestionsSidebar: [
      'design/experience-suggestions/experience-suggestions-overview',
{
        type: 'category',
        label: '应用基础功能和兼容性体验建议',
        items: [
          'design/experience-suggestions/compatibility/compatibility-overview',
{
            type: 'category',
            label: '系统特性与基础功能',
            items: [
              'design/experience-suggestions/compatibility/system-features/general-specifications',
              'design/experience-suggestions/compatibility/system-features/app-specifications',
              'design/experience-suggestions/compatibility/system-features/atomic-specifications',
              'design/experience-suggestions/compatibility/system-features/widget-specifications',
              'design/experience-suggestions/compatibility/system-features/distributed-capability-specification',
              'design/experience-suggestions/compatibility/system-features/audio-specification',
              'design/experience-suggestions/compatibility/system-features/display-specification',
              'design/experience-suggestions/compatibility/system-features/protocol-specification',
            ],
},
{
            type: 'category',
            label: '基础兼容性',
            items: [
              'design/experience-suggestions/compatibility/basic-compatibility/os-compatible',
              'design/experience-suggestions/compatibility/basic-compatibility/upgrade-compatible',
              'design/experience-suggestions/compatibility/basic-compatibility/device-compatible',
            ],
},
        ],
},
      'design/experience-suggestions/experience-suggestions-stability',
{
        type: 'category',
        label: '应用性能体验建议',
        items: [
          'design/experience-suggestions/performance/performance-overview',
          'design/experience-suggestions/performance/performance-delay',
          'design/experience-suggestions/performance/performance-frame-rate',
          'design/experience-suggestions/performance/performance-content-display',
          'design/experience-suggestions/performance/performance-memory-usage',
          'design/experience-suggestions/performance/performance-cpu-usage',
        ],
},
{
        type: 'category',
        label: '应用功耗体验建议',
        items: [
          'design/experience-suggestions/power/app-power-experience-standards-overview',
{
            type: 'category',
            label: '后台场景',
            items: [
              'design/experience-suggestions/power/background/standard-background-task',
              'design/experience-suggestions/power/background/standard-background-hardware',
              'design/experience-suggestions/power/background/standard-background-software',
            ],
},
{
            type: 'category',
            label: '前台场景',
            items: [
              'design/experience-suggestions/power/foreground/standard-foreground-frame-rate',
              'design/experience-suggestions/power/foreground/standard-foreground-render',
              'design/experience-suggestions/power/foreground/standard-foreground-resource',
            ],
},
        ],
},
{
        type: 'category',
        label: '应用安全隐私体验建议',
        items: [
          'design/experience-suggestions/security-privacy/standard-security-privacy-overview',
{
            type: 'category',
            label: '安全',
            items: [
              'design/experience-suggestions/security-privacy/security/standard-security-base',
              'design/experience-suggestions/security-privacy/security/standard-security-debug',
              'design/experience-suggestions/security-privacy/security/standard-security-release',
              'design/experience-suggestions/security-privacy/security/standard-security-update',
              'design/experience-suggestions/security-privacy/security/standard-security-maintain',
              'design/experience-suggestions/security-privacy/security/standard-security-realize',
            ],
},
{
            type: 'category',
            label: '隐私',
            items: [
              'design/experience-suggestions/security-privacy/privacy/standard-privacy-policy',
              'design/experience-suggestions/security-privacy/privacy/standard-privacy-user-consent',
              'design/experience-suggestions/security-privacy/privacy/standard-privacy-collect-use',
              'design/experience-suggestions/security-privacy/privacy/standard-privacy-permission',
              'design/experience-suggestions/security-privacy/privacy/standard-privacy-ad-identifier',
              'design/experience-suggestions/security-privacy/privacy/standard-privacy-deregister',
            ],
},
{
            type: 'category',
            label: '纯净',
            items: [
              'design/experience-suggestions/security-privacy/pure/standard-pure-notice',
              'design/experience-suggestions/security-privacy/pure/standard-pure-mislead',
              'design/experience-suggestions/security-privacy/pure/standard-pure-occupy',
              'design/experience-suggestions/security-privacy/pure/standard-pure-retain',
              'design/experience-suggestions/security-privacy/pure/standard-pure-tampering',
              'design/experience-suggestions/security-privacy/pure/standard-pure-others',
            ],
},
        ],
},
      'design/experience-suggestions/experience-suggestions-ux',
],
};
