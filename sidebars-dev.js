// @ts-check
// Dev sidebar — 应用开发 + 测试预览。

const testingSidebar = require('./sidebars-testing.js');
const xiaoyiSidebar = require('./sidebars-xiaoyi.js');

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  testingSidebar: testingSidebar.testingSidebar,
  xiaoyiSidebar: xiaoyiSidebar.xiaoyiSidebar,
};

module.exports = sidebars;
