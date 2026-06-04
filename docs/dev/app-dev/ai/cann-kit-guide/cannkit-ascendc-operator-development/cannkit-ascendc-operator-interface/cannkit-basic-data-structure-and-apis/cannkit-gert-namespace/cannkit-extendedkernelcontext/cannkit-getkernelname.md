---
displayed_sidebar: appDevSidebar
title: "GetKernelName"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-getkernelname
---

## 函数功能

获取当前内核的名称。

## 函数原型

```
const char *GetKernelName() const
```

## 参数说明

无

## 返回值

当前内核的名称。

## 约束说明

无

## 调用示例

```
// 假设已存在KernelContext *context
auto extend_context = reinterpret_cast<ExtendedKernelContext *>(context);
auto kernel_name = extend_context->GetKernelName();
```
