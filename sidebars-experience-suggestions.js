// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
experienceSuggestionsSidebar: [
      'experience-suggestions/experience-suggestions-overview',
{
        type: 'category',
        label: '应用基础功能和兼容性体验建议',
        items: [
          'experience-suggestions/compatibility/compatibility-overview',
{
            type: 'category',
            label: '系统特性与基础功能',
            items: [
              'experience-suggestions/compatibility/system-features/general-specifications',
              'experience-suggestions/compatibility/system-features/app-specifications',
              'experience-suggestions/compatibility/system-features/atomic-specifications',
              'experience-suggestions/compatibility/system-features/widget-specifications',
              'experience-suggestions/compatibility/system-features/distributed-capability-specification',
              'experience-suggestions/compatibility/system-features/audio-specification',
              'experience-suggestions/compatibility/system-features/display-specification',
              'experience-suggestions/compatibility/system-features/protocol-specification',
            ],
},
{
            type: 'category',
            label: '基础兼容性',
            items: [
              'experience-suggestions/compatibility/basic-compatibility/os-compatible',
              'experience-suggestions/compatibility/basic-compatibility/upgrade-compatible',
              'experience-suggestions/compatibility/basic-compatibility/device-compatible',
            ],
},
        ],
},
      'experience-suggestions/experience-suggestions-stability',
{
        type: 'category',
        label: '应用性能体验建议',
        items: [
          'experience-suggestions/performance/performance-overview',
          'experience-suggestions/performance/performance-delay',
          'experience-suggestions/performance/performance-frame-rate',
          'experience-suggestions/performance/performance-content-display',
          'experience-suggestions/performance/performance-memory-usage',
          'experience-suggestions/performance/performance-cpu-usage',
        ],
},
{
        type: 'category',
        label: '应用功耗体验建议',
        items: [
          'experience-suggestions/power/app-power-experience-standards-overview',
{
            type: 'category',
            label: '后台场景',
            items: [
              'experience-suggestions/power/background/standard-background-task',
              'experience-suggestions/power/background/standard-background-hardware',
              'experience-suggestions/power/background/standard-background-software',
            ],
},
{
            type: 'category',
            label: '前台场景',
            items: [
              'experience-suggestions/power/foreground/standard-foreground-frame-rate',
              'experience-suggestions/power/foreground/standard-foreground-render',
              'experience-suggestions/power/foreground/standard-foreground-resource',
            ],
},
        ],
},
{
        type: 'category',
        label: '应用安全隐私体验建议',
        items: [
          'experience-suggestions/security-privacy/standard-security-privacy-overview',
{
            type: 'category',
            label: '安全',
            items: [
              'experience-suggestions/security-privacy/security/standard-security-base',
              'experience-suggestions/security-privacy/security/standard-security-debug',
              'experience-suggestions/security-privacy/security/standard-security-release',
              'experience-suggestions/security-privacy/security/standard-security-update',
              'experience-suggestions/security-privacy/security/standard-security-maintain',
              'experience-suggestions/security-privacy/security/standard-security-realize',
            ],
},
{
            type: 'category',
            label: '隐私',
            items: [
              'experience-suggestions/security-privacy/privacy/standard-privacy-policy',
              'experience-suggestions/security-privacy/privacy/standard-privacy-user-consent',
              'experience-suggestions/security-privacy/privacy/standard-privacy-collect-use',
              'experience-suggestions/security-privacy/privacy/standard-privacy-permission',
              'experience-suggestions/security-privacy/privacy/standard-privacy-ad-identifier',
              'experience-suggestions/security-privacy/privacy/standard-privacy-deregister',
            ],
},
{
            type: 'category',
            label: '纯净',
            items: [
              'experience-suggestions/security-privacy/pure/standard-pure-notice',
              'experience-suggestions/security-privacy/pure/standard-pure-mislead',
              'experience-suggestions/security-privacy/pure/standard-pure-occupy',
              'experience-suggestions/security-privacy/pure/standard-pure-retain',
              'experience-suggestions/security-privacy/pure/standard-pure-tampering',
              'experience-suggestions/security-privacy/pure/standard-pure-others',
            ],
},
        ],
},
      'experience-suggestions/experience-suggestions-ux',
],
};
