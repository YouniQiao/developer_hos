---
displayed_sidebar: appDevSidebar
title: "GetDynamicSubgraph"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-getdynamicsubgraph
---

## 函数功能

根据子图名称和子图索引获取算子对应的动态输入子图。

## 函数原型

![](./img/680b0bbc.png)

数据类型为string的接口后续版本会废弃，建议使用数据类型为非string的接口。

```
Graph GetDynamicSubgraph(const std::string &name, uint32_t index) const;
Graph GetDynamicSubgraph(const char_t *name, uint32_t index) const;
```

## 参数说明

| 参数名 | 输入/输出 | 描述 |
| --- | --- | --- |
| name | 输入 | 子图名。 |
| index | 输入 | 同名子图的索引。 |

## 返回值

Graph对象。

## 异常处理

无

## 约束说明

无
