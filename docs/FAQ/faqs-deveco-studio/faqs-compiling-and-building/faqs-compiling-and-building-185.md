---
title: "升级react-native-openharmony编译出错"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-compiling-and-building-185
---

**问题现象**

升级react-native-openharmony编译出错，类似如下报错：

![](./img/66394af0.png)

**问题原因**

旧版本的react-native-openharmony缓存还在,导致某些链接找不到。

**解决措施**

删除要编译的模块根目录下的.cxx和build目录,然后重新触发编译。
