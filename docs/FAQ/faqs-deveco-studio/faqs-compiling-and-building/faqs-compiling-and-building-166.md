---
format: md
title: "编译报错“byteCodeHar not supported when useNormalizedOHMUrl is not true.”"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-166
upstream_id: FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-166
last_sync: 2026-06-07
sync_hash: 70440b14
---
**错误描述**

当useNormalizedOHMUrl配置为false时，不支持编译字节码HAR。

**可能原因**

当HAR模块的build-profile.json5文件中的byteCodeHar字段配置为true时，工程级build-profile.json5文件中的useNormalizedOHMUrl字段未配置为true。

![](./img/5eff0919.png)

**解决措施**

当HAR模块的build-profile.json5文件中byteCodeHar字段配置为true时，工程级build-profile.json5文件中的useNormalizedOHMUrl字段也必须配置为true。

![](./img/0fe6e29d.png)

**参考链接**

[strictMode](/docs/tools/coding-debug/ide-hvigor-build-profile-app#section13181758123312)
