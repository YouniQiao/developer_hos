---
format: md
title: "为什么vp2px、px2vp返回的结果不正确"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-259
upstream_id: FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-259
last_sync: 2026-06-07
sync_hash: 5eca22ab
upstream_hash: 61ee8c0051cd
---

1. [vp2px](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#vp2px12)、[px2vp](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#px2vp12)是ArkUI的全局接口，该接口已被标记为废弃，不推荐使用。在应用启动阶段或非UI线程调用时，UI实例不明确，使用默认屏幕的虚拟像素比进行转换，可能导致转换后结果与预期不一致的情况。
2. UIContext的[vp2px](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#vp2px12)、[px2vp](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#px2vp12)为推荐的替代接口，能保证调用时UI实例已经创建，并返回正确的结果。

**参考链接**

[像素单位](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-pixel-units)
