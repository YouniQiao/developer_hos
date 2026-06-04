---
displayed_sidebar: appDevSidebar
title: "GetSubgraphNames"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-getsubgraphnames
---

## 函数功能

获取一个算子的子图名称列表。

## 函数原型

![](./img/934151df.png)

数据类型为string的接口后续版本会废弃，建议使用数据类型为非string的接口。

```
std::vector<std::string> GetSubgraphNames() const;
graphStatus GetSubgraphNames(std::vector<AscendString> &names) const;
```

## 参数说明

| 参数名 | 输入/输出 | 描述 |
| --- | --- | --- |
| names | 输出 | 获取一个算子的子图名称列表。 |

## 返回值

| 类型 | 描述 |
| --- | --- |
| graphStatus | GRAPH\_FAILED：失败。  GRAPH\_SUCCESS：成功。 |

## 异常处理

无

## 约束说明

无
