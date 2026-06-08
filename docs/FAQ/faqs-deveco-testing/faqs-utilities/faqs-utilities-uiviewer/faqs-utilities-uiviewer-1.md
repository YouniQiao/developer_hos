---
format: md
title: "如何处理UIViewer获取页面时，无论如何操作切换设备界面，UIViewer展示的都是同一个界面"
original_url: /docs/FAQ/faqs-deveco-testing/faqs-utilities/faqs-utilities-uiviewer/faqs-utilities-uiviewer-1
upstream_id: FAQ/faqs-deveco-testing/faqs-utilities/faqs-utilities-uiviewer/faqs-utilities-uiviewer-1
last_sync: 2026-06-07
sync_hash: 00e95626
---
打开cmd窗口，在设备上执行hdc指令删除该文件：

```
hdc shell rm -r /data/local/tmp/latestScreen.jpeg
```

重试设备投屏。如果获取页面仍然显示同一界面，请重启设备后再次尝试。
