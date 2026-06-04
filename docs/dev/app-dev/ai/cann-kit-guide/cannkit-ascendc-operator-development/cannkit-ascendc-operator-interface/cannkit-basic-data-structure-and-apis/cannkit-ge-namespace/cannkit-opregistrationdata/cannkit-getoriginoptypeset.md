---
displayed_sidebar: appDevSidebar
title: "GetOriginOpTypeSet"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-getoriginoptypeset
---

## 函数功能

获取原始模型的算子类型集合。

## 函数原型

![](./img/e2e4a117.png)

数据类型为string的接口后续版本会废弃，建议使用数据类型为非string的接口。

```
std::set<std::string> GetOriginOpTypeSet () const;
Status GetOriginOpTypeSet(std::set<ge::AscendString> &ori_op_type) const;
```

## 参数说明

| 参数 | 输入/输出 | 说明 |
| --- | --- | --- |
| ori\_op\_type | 输出 | 原始模型的算子类型集合。 |

## 约束说明

无
