---
displayed_sidebar: appDevSidebar
title: "VerifyAllAttr"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-verifyallattr
---

## 函数功能

根据disableCommonVerifier值，校验Operator中的属性是否有效，校验Operator的输入输出是否有效。

## 函数原型

```
graphStatus VerifyAllAttr(bool disable_common_verifier = false);
```

## 参数说明

| 参数名 | 输入/输出 | 描述 |
| --- | --- | --- |
| disable\_common\_verifier | 输入 | 当false时，只校验属性有效性，当true时，增加校验Operator所有输入输出有效性。  默认值为false。 |

## 返回值

| 类型 | 描述 |
| --- | --- |
| graphStatus | 推导成功，返回GRAPH\_SUCCESS，否则，返回GRAPH\_FAILED。 |

## 异常处理

无

## 约束说明

无
