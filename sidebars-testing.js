// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
  testingSidebar: [
    'dev/testing/app-testing-overview',
    {
      type: 'category',
      label: '单元测试和UI测试',
      items: [
        {
          type: 'category',
          label: '自动化测试框架使用指导',
          items: [
            'dev/testing/ut/arkxtest-guidelines/unittest-guidelines',
            'dev/testing/ut/arkxtest-guidelines/uitest-guidelines',
            'dev/testing/ut/arkxtest-guidelines/perftest-guideline',
          ],
        },
        'dev/testing/ut/hypium-python-guidelines',
        'dev/testing/ut/hypium-perf-python-guidelines',
      ],
    },
    {
      type: 'category',
      label: '专项测试',
      items: [
        'dev/testing/test-service/smartperf-guidelines',
        'dev/testing/test-service/wukong-guidelines',
      ],
    },
  ],
};
