---
title: "构造函数"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-storageshape-constructor
---

## 函数功能

构造一个运行时shape实例。

## 函数原型

```
StorageShape()
StorageShape(const std::initializer_list<int64_t> &origin_shape, const std::initializer_list<int64_t> &storage_shape)
```

## 参数说明

| 参数 | 输入/输出 | 说明 |
| --- | --- | --- |
| origin\_shape | 输入 | 原始shape。 |
| storage\_shape | 输入 | 运行时shape。 |

## 返回值

返回一个初始化后StorageShape对象。

## 约束说明

无

## 调用示例

```
StorageShape shape({3, 256, 256}, {3, 256, 256});
```
