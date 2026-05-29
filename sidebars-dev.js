// @ts-check
// Dev sidebar — 仅设计与规划 (for fast local preview).
const { designSidebar } = require('./sidebars-design.js');
const { appCompatibilitySidebar } = require('./sidebars-compatibility.js');
const { qualitySidebar } = require('./sidebars-quality.js');
const { experienceSuggestionsSidebar } = require('./sidebars-experience-suggestions.js');

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  designSidebar,
  appCompatibilitySidebar,
  qualitySidebar,
  experienceSuggestionsSidebar,
  architectureSidebar: [
    'architecture/overview',
    'architecture/layered',
    'architecture/modular',
  ],
  securitySidebar: [
    'security/app-privacy-protection',
    'security/data-security',
    'security/security-encode',
    'security/asset-protection',
    'security/code-obfuscation',
    'security/permission-application',
    'security/network-ca-security',
    'security/device-id',
    'security/arkweb-security',
  ],
};

module.exports = sidebars;
