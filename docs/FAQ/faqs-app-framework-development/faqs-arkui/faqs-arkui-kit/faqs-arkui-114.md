---
format: md
title: "ArkUI中icon资源锯齿感严重"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-114
upstream_id: FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-114
last_sync: 2026-06-07
sync_hash: 1ace3564
---
**解决方案**

Image组件的插值效果interpolation默认为ImageInterpolation.None，可能会导致锯齿问题，因此可以通过设置interpolation为High/Medium/Low来减少锯齿效果。

**参考链接**

[ImageInterpolation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-image#imageinterpolation)
