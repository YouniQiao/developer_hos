---
displayed_sidebar: appDevSidebar
title: "SetExpandDimsType"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-tensor-setexpanddimstype
---

## 函数功能

设置shape的补维规则。

## 函数原型

```
void SetExpandDimsType(const ExpandDimsType &expand_dims_type)
```

## 参数说明

| 参数 | 输入/输出 | 说明 |
| --- | --- | --- |
| expand\_dims\_type | 输入 | 需要设置的补维规则。  关于ExpandDimsType类型的定义，可参见[ExpandDimsType](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-expanddimstype-introduction)。 |

## 返回值

无

## 约束说明

无

## 调用示例

```
Tensor tensor{{{8, 3, 224, 224}, {16, 3, 224, 224}}, // shape
              {ge::FORMAT_ND, ge::FORMAT_FRACTAL_NZ, {}}, // format
              kFollowing, // placement
              ge::DT_FLOAT16, // dt
              nullptr};
ExpandDimsType type("1001");
tensor.SetExpandDimsType(type);
auto expand_dims_type = tensor.GetExpandDimsType(); // type
```
