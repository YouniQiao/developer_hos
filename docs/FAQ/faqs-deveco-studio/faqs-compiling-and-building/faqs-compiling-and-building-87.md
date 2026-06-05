---
format: md
title: "编译报错：platform/OHOS to use this system, please post your config file on discourse.cmake.org so it"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-compiling-and-building-87
---

**问题描述**

在编译C++库时出现多条警告。

要使用此系统，请将配置文件发布到 discourse.cmake.org。

这个是否会带来影响？

**解决方案**

问题源于Mac的SDK中缺少OHOS.cmake文件。

在SDK存放目录的default/base/native/build-tools/cmake/share/cmake-3.16/Modules/Platform层级下，新建名为OHOS.cmake的文件，并写入以下内容：include(Platform/Linux)。
