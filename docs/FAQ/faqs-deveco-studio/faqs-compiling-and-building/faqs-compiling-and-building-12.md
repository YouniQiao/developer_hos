---
format: md
title: "C++工程编译导致电脑卡顿的处理建议"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-12
---


**问题现象**

在编译大型C++工程时，由于CPU占用率较高，可能会导致电脑卡顿和反应迟缓。

**解决措施**

如果遇到类似问题，建议尝试以下方法进行解决：

打开模块下的build-profile.json5文件，在**arguments**参数中添加如下配置。并根据电脑CPU配置，修改compile和link的值。建议compile和link的值之和设置为CPU核数的一半，例如，如果CPU为8核，则将compile和link分别设置为2。

```
"arguments": "-DCMAKE_JOB_POOL_COMPILE:STRING=compile -DCMAKE_JOB_POOL_LINK:STRING=link -DCMAKE_JOB_POOLS:STRING=compile=2;link=2",
```

修改了compile和link的值后，编译时间可能会延长。
