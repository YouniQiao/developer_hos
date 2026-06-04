---
displayed_sidebar: appDevSidebar
title: "GetAttrNum"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-getattrnum
---

## 函数功能

获取属性的数量。

## 函数原型

```
size_t GetAttrNum() const
```

## 参数说明

无

## 返回值

属性的数量。

## 约束说明

无

## 调用示例

```
const RuntimeAttrs * runtime_attrs = kernel_context->GetAttrs();
size_t attr_num = runtime_attrs->GetAttrNum();
```
