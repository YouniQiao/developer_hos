// @ts-check
// Dev sidebar — 应用开发 + 测试预览。

const appdevSidebar = require('./sidebars-appdev.js');
const testingSidebar = require('./sidebars-testing.js');

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  appDevSidebar: appdevSidebar.appDevSidebar,
  testingSidebar: testingSidebar.testingSidebar,
};

module.exports = sidebars;
