---
format: md
title: "视频流支持哪些格式"
original_url: /docs/FAQ/faqs-media-development/faqs-photographing-pictures/faqs-camera-kit/faqs-camera-16
upstream_id: FAQ/faqs-media-development/faqs-photographing-pictures/faqs-camera-kit/faqs-camera-16
last_sync: 2026-06-07
sync_hash: 7e8fcce8
---
**问题现象**

视频流除了使用ArrayBuffer和Uint8Array，还可以使用Blob。这些字节数据可以转换为不同格式的图片。

**解决措施**

TS层无其他格式，这些字节数据可以转换为PixelMap，经过编码后可以转换为JPEG、WebP和PNG格式（目前支持这三种）。
