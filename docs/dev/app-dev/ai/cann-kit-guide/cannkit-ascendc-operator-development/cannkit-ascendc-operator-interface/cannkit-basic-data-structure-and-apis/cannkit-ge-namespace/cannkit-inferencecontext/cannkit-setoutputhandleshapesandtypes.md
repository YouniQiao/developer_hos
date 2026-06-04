---
displayed_sidebar: appDevSidebar
title: "SetOutputHandleShapesAndTypes"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-setoutputhandleshapesandtypes
---

## 函数功能

在推理上下文中，设置算子输出句柄的[ShapeAndType](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-shapeandtype-construction-and-destructor)。

## 函数原型

```
void SetOutputHandleShapesAndTypes(const std::vector<std::vector<ShapeAndType>> &shapes_and_types)
void SetOutputHandleShapesAndTypes(std::vector<std::vector<ShapeAndType>> &&shapes_and_types)
```

## 参数说明

| 参数名 | 输入/输出 | 描述 |
| --- | --- | --- |
| shapes\_and\_types | 输入 | 算子输出句柄的[ShapeAndType](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-shapeandtype-construction-and-destructor)。 |

## 返回值

无

## 异常处理

无

## 约束说明

无
