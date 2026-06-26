// @ts-check
/** @type {import("@docusaurus/plugin-content-docs").SidebarsConfig} */
const releaseNotesSidebar = [
  "dev/release-notes/overview",
  "dev/release-notes/harmonyos-2600",
  "dev/release-notes/harmonyos-611",
  "dev/release-notes/harmonyos-610",
  "dev/release-notes/harmonyos-602",
  "dev/release-notes/harmonyos-601",
  "dev/release-notes/harmonyos-600",

  "dev/release-notes/known-issues-baseline",
  {
    "type": "category",
    "label": "信息查询工具",
    "collapsed": false,
    "items": [
      "dev/release-notes/api-diff-search",
      "dev/release-notes/sdk-version-distribution",
      "dev/release-notes/device-support-search"
    ]
  },
];
module.exports = { releaseNotesSidebar };
