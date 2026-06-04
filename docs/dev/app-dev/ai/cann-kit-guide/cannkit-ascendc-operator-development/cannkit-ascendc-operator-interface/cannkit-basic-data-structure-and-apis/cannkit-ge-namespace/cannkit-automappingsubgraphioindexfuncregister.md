---
displayed_sidebar: appDevSidebar
title: "AutoMappingSubgraphIOIndexFuncRegister"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-automappingsubgraphioindexfuncregister
---

## 函数功能

FrameworkRegistry类的封装，通过类的构造函数调用FrameworkRegistry类的AddAutoMappingSubgraphIOIndexFunc函数完成映射函数的注册。

## 函数原型

```
AutoMappingSubgraphIOIndexFuncRegister(domi::FrameworkType framework, AutoMappingSubgraphIOIndexFunc fun)
```

## 参数说明

| 参数 | 输入/输出 | 说明 |
| --- | --- | --- |
| framework | 输入 | 网络类型，FrameworkType类型定义请参考[FrameworkType](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-frameworktype)。 |
| fun | 输入 | 自动映射输入输出函数，函数类型详见[AutoMappingSubgraphIndex](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-automappingsubgraphindex)。 |

## 返回值

无

## 异常处理

无

## 约束说明

无
