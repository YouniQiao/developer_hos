---
displayed_sidebar: appDevSidebar
title: "GetDynamicInputNum"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-getdynamicinputnum
---

## 函数功能

获取算子的动态Input的实际个数。

## 函数原型

![](./img/97f6e94b.png)

数据类型为string的接口后续版本会废弃，建议使用数据类型为非string的接口。

```
int32_t GetDynamicInputNum(const std::string &name) const;
int32_t GetDynamicInputNum(const char_t *name) const;
```

## 参数说明

| 参数名 | 输入/输出 | 描述 |
| --- | --- | --- |
| name | 输入 | 算子的动态Input名。 |

## 返回值

| 类型 | 描述 |
| --- | --- |
| int | 实际动态Input的个数。  当name非法，或者算子无动态Input时，返回-1。 |

## 约束说明

无
