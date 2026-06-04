---
displayed_sidebar: appDevSidebar
title: "GetExtendInfo"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-getextendinfo
---

## 函数功能

获取本kernel的扩展信息。

## 函数原型

```
const KernelExtendInfo *GetExtendInfo() const
```

## 参数说明

无

## 返回值

本kernel的扩展信息。

关于KernelExtendInfo类型的定义，请参见[内部关联接口](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-internal-associated-apis)KernelExtendInfo类。

## 约束说明

无

## 调用示例

```
// 假设已存在KernelContext *context
auto extend_context = reinterpret_cast<ExtendedKernelContext *>(context);
auto extend_info = extend_context->GetExtendInfo();
```
