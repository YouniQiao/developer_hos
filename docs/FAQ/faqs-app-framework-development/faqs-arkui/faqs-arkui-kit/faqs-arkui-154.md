---
format: md
title: "Image组件如何读入沙箱内的图片"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-154
upstream_id: FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-154
last_sync: 2026-06-07
sync_hash: 6e97377e
---
Image组件不能直接传入应用沙箱路径，需要传入应用沙箱URI。

1. 参考fileUri模块示例代码，获取文件的沙箱路径。
2. 然后调用fileUri.getUriFromPath方法将沙箱路径转化为沙箱URI，传入之后即可正常显示沙箱图片。

**参考链接**

[@ohos.file.fileuri (文件URI)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-fileuri)
