// @ts-check
/** @type {import("@docusaurus/plugin-content-docs").SidebarsConfig} */
const appCompatibilitySidebar = [
  {
    "type": "category",
    "label": "理解兼容性",
    "items": [
      "design/app-compatibility/app-compatibility-intro",
      "design/app-compatibility/app-compatibility-influence-factor"
    ]
  },
  {
    "type": "category",
    "label": "API 兼容性判断与保护",
    "items": [
      "design/app-compatibility/arkts-api-compatibility-warning-elim",
      "design/app-compatibility/c-api-compatibility-warning-elim",
      "design/app-compatibility/c-api-compatibility-warning",
      "design/app-compatibility/compatibility-warning-suppress"
    ]
  },
  {
    "type": "category",
    "label": "场景实战",
    "items": [
      "design/app-compatibility/app-compatibility-upgrade",
      "design/app-compatibility/app-compatibility-third-har",
      "design/app-compatibility/app-compatibility-share-hsp",
      "design/app-compatibility/app-compatibility-ui-component"
    ]
  },
];
module.exports = { appCompatibilitySidebar };
