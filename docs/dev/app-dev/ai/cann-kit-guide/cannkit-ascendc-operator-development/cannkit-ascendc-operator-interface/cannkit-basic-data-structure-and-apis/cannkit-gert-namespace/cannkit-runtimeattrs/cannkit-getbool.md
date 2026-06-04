---
displayed_sidebar: appDevSidebar
title: "GetBool"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-getbool
---

## 函数功能

获取bool类型的属性值。

## 函数原型

```
const bool *GetBool(const size_t index) const
```

## 参数说明

| 参数 | 输入/输出 | 说明 |
| --- | --- | --- |
| index | 输入 | 属性在IR原型定义中以及在OP\_IMPL注册中的索引。 |

## 返回值

指向属性值的指针。

## 约束说明

无

## 调用示例

```
const RuntimeAttrs * runtime_attrs = kernel_context->GetAttrs();
const bool *attr0 = runtime_attrs->GetBool(0);
```
