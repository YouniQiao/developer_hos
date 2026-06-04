---
displayed_sidebar: appDevSidebar
title: "MallocAdvise"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-mallocadvise
---

## 函数功能

在开发者内存池中根据指定size大小申请device内存，建议申请的内存地址为addr。

## 函数原型

```
virtual MemBlock *MallocAdvise(size_t size, void *addr)
```

## 参数说明

| 参数名 | 输入/输出 | 描述 |
| --- | --- | --- |
| size | 输入 | 指定需要申请内存大小。 |
| addr | 输入 | 建议申请的内存地址为addr。 |

## 返回值

| 类型 | 描述 |
| --- | --- |
| MemBlock\* | 返回[MemBlock](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-memblock-construction-and-destructor)指针。 |

## 异常处理

无

## 约束说明

虚函数需要开发者实现，如若未实现，默认同[Malloc](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-malloc)功能相同。
