// @ts-check
/** @type {import("@docusaurus/plugin-content-docs").SidebarsConfig} */
const releaseNotesSidebar = [
  "dev/release-notes/overview",
  "dev/release-notes/harmonyos-611",
  "dev/release-notes/harmonyos-610",
  "dev/release-notes/harmonyos-602",
  "dev/release-notes/harmonyos-601",
  "dev/release-notes/harmonyos-600",

  "dev/release-notes/known-issues-baseline",
  {
    "type": "category",
    "label": "应用兼容性说明",
    "collapsed": true,
    "items": [
      "dev/release-notes/app-compatibility-intro",
      "dev/release-notes/app-compatibility-influence-factor",
      {
        "type": "category",
        "label": "应用开发中的兼容性场景开发指导",
        "collapsed": true,
        "items": [
          {
            "type": "category",
            "label": "API兼容性保护和告警屏蔽",
            "collapsed": true,
            "items": [
              "dev/release-notes/arkts-api-compatibility-warning-elim",
              "dev/release-notes/c-api-compatibility-warning-elim",
              "dev/release-notes/compatibility-warning-suppress"
            ]
          },
          "dev/release-notes/c-api-compatibility-warning",
          "dev/release-notes/app-compatibility-upgrade",
          "dev/release-notes/app-compatibility-third-har",
          "dev/release-notes/app-compatibility-share-hsp",
          "dev/release-notes/app-compatibility-ui-component"
        ]
      }
    ]
  },
  {
    "type": "category",
    "label": "信息查询工具",
    "collapsed": true,
    "items": [
      "dev/release-notes/api-diff-search",
      "dev/release-notes/sdk-version-distribution",
      "dev/release-notes/device-support-search"
    ]
  },
];
module.exports = { releaseNotesSidebar };
