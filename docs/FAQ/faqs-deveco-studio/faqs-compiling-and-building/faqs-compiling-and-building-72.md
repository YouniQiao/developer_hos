---
title: "如何获取BuildProfile中的值"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-72
format: md
---


生成 BuildProfile 文件后，可以通过相对路径在代码中引入该文件。例如，在 HAR 模块的 Index.ets 文件中使用该文件：

```
import BuildProfile from './BuildProfile';
```

获取 BuildProfile 类中的值：

```
const HAR_VERSION: string = BuildProfile.HAR_VERSION;
const BUILD_MODE_NAME: string = BuildProfile.BUILD_MODE_NAME;
const DEBUG: boolean = BuildProfile.DEBUG;
```

![](./img/2185ad3e.png "点击放大")

**参考链接**

[HAR运行时获取编译构建参数](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-get-build-profile-para-guide#section68146594553)
