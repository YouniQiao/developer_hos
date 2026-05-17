// @ts-check
// Sidebar for tools + FAQ module

const toolsSidebar = require('./sidebars-tools.js').toolsSidebar;
const aiAssistSidebar = require('./sidebars-tools.js').aiAssistSidebar;
const cliToolsSidebar = require('./sidebars-tools.js').cliToolsSidebar;
const faqSidebar = require('./sidebars-faq.js').faqSidebar;

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  toolsSidebar,
  aiAssistSidebar,
  cliToolsSidebar,
  faqSidebar,
};

module.exports = sidebars;
