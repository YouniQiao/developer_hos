---
format: md
title: "如何判断当前设备是手机还是折叠屏手机"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-340
upstream_id: FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-340
last_sync: 2026-06-07
sync_hash: 91b3d079
---
* 页面布局类问题：

  页面布局应基于窗口形态（如折叠态/展开态）、宽度和高宽比等动态属性，而非静态设备类型。例如折叠屏设备的折叠态窗口应使用与普通手机相同的布局规则，Mate X5展开态单独设计一套布局。详情可参考[断点](/docs/dev/app-dev/multi-device/bpta-multi-device-responsive-layout#section1532120147301)的使用。
* 非页面布局或功能类问题（例如折叠屏折叠状态切换时重新选择相机重置预览流）：

  手机设备（包括普通手机和折叠屏手机）的[DeviceTypes](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-device-info#devicetypes20)接口均返回phone，可以通过屏幕属性@ohos.display的[display.isFoldable](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-display#displayisfoldable10)返回是否可折叠。需要注意HUAWEI Pocket 2（纵向折叠屏手机）的isFoldable接口会返回false，需特殊处理。

折叠屏相关的具体开发案例可参考：[折叠屏应用开发](/docs/dev/app-dev/multi-device/bpta-foldable-guide)。
