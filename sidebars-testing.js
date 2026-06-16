// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
  testingSidebar: [
    'dev/testing/app-testing-overview',
    'dev/testing/unit-test/guidelines',
    {
      type: 'category',
      label: 'UI测试',
      items: [
        'dev/testing/ui-test/arkts',
        'dev/testing/ui-test/python',
      ],
    },
    {
      type: 'category',
      label: '专项测试',
      items: [
        'dev/testing/specialized-test/overview',
        'dev/testing/specialized-test/performance-test',
        'dev/testing/specialized-test/scenario-perf-test',
        'dev/testing/specialized-test/stability-test',
        'dev/testing/specialized-test/performance-monitor',
        'dev/testing/specialized-test/ux-test',
        'dev/testing/specialized-test/security-test',
        'dev/testing/specialized-test/function-test',
        'dev/testing/specialized-test/power-test',
      ],
    },
    {
      type: 'category',
      label: '测试工具',
      items: [
        {
          type: 'category',
          label: 'DevEco Testing 指南',
          collapsed: true,
          items: [
            {
              type: 'category',
              label: '版本说明',
              collapsed: true,
              items: [
                'dev/testing/deveco-testing/release-notes/deveco-testing-610',
                'dev/testing/deveco-testing/release-notes/deveco-testing-602',
                'dev/testing/deveco-testing/release-notes/deveco-testing-601',
                'dev/testing/deveco-testing/release-notes/deveco-testing-600',
              ],
            },
            'dev/testing/deveco-testing/get-familiar',
            'dev/testing/deveco-testing/publish-testing',
            'dev/testing/deveco-testing/exploratory-testing',
            'dev/testing/deveco-testing/regression-test',
            'dev/testing/deveco-testing/tool',
            'dev/testing/deveco-testing/faq',
          ],
        },
        'dev/testing/tools/smartperf-guidelines',
        'dev/testing/tools/wukong-guidelines',
        'dev/testing/tools/perftest-guideline',
        'dev/testing/tools/hypium-perf-python-guidelines',
      ],
    },
  ],
};
