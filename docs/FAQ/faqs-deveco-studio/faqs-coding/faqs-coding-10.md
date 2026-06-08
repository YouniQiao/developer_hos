---
title: "关于BuildProfile自定义字段编译时报错：Property 'BUILD_VERSION' does not exist on type 'typeof BuildProfile'"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-coding/faqs-coding-10
format: md
upstream_id: FAQ/faqs-deveco-studio/faqs-coding/faqs-coding-10
last_sync: 2026-06-07
sync_hash: 8b826fd0
---
**问题描述**

项目编译时，关于 BuildProfile 的自定义字段报错如下：

```
Property 'BUILD_VERSION' does not exist on type 'typeof BuildProfile'
```

**解决措施**

获取构建参数并生成BuildProfile类文件后，在HSP中可以通过以下方式引入该文件：

```
import BuildProfile from '${packageName}/BuildProfile';
```

可参考[在代码中获取构建参数](/docs/tools/coding-debug/ide-hvigor-get-build-profile-para-guide#section195881502412)。
