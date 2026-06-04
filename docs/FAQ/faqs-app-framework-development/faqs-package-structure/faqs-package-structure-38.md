---
title: "HAR包是否支持依赖传递"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-38
---

**问题现象**

例如，有三个HAR分别为A、B、C，A依赖B，B依赖C。A可以直接引用C的资源。

**解决措施**

A不能直接引用C的资源。A需直接依赖C，才能进行引用。
