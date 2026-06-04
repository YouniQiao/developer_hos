---
displayed_sidebar: appDevSidebar
title: "Input"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-input
---

## 函数功能

注册算子输入，调用该接口后会返回一个OpParamDef结构，后续可通过该结构配置算子输入信息。

## 函数原型

```
OpParamDef &Input(const char *name);
```

## 参数说明

| 参数 | 输入/输出 | 说明 |
| --- | --- | --- |
| name | 输入 | 算子输入名称。 |

## 返回值

[OpParamDef](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-paramtype)算子参数定义。

## 约束说明

无
