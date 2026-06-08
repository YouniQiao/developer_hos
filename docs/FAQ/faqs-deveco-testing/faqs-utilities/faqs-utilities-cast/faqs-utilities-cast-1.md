---
format: md
title: "设备投屏时，投屏画面持续加载中如何处理"
original_url: /docs/FAQ/faqs-deveco-testing/faqs-utilities/faqs-utilities-cast/faqs-utilities-cast-1
upstream_id: FAQ/faqs-deveco-testing/faqs-utilities/faqs-utilities-cast/faqs-utilities-cast-1
last_sync: 2026-06-07
sync_hash: 8012cdcb
---
打开cmd窗口，在设备上执行hdc指令删除该文件：

```
hdc shell rm -r /data/local/tmp/latestScreen.jpeg
```

重试设备投屏，如果获取页面仍失败，请重启设备后再次尝试。
