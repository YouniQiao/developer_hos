---
title: "SecurityAudit_Filter"
upstream_id: "harmonyos-references/devicesecurity-capi-structs-securityaudit-filter"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:36.914218"
---

# SecurityAudit_Filter

#### 概述

提供过滤条件。

起始版本： 6.0.0(20)

相关模块： [SecurityAudit](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-securityaudit)

所在头文件： [security_audit.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-security-audit-8h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| bool [isInclude](#isinclude) | TRUE: 符合条件的事件被返回给客户端。 FALSE: 符合条件的事件不被返回给客户端。 |
| [SecurityAudit_FilterType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-securityaudit#securityaudit_filtertype) [type](#type) | 过滤器类型。 |
| const char ** [value](#value) | 事件的过滤器的值。 |
| uint64_t [valueCount](#valuecount) | 过滤器值的数量。 |

#### 结构体成员变量说明

#### [h2]isInclude

```
bool SecurityAudit_Filter::isInclude
```
 描述

TRUE: 符合条件的事件被返回给客户端。 FALSE: 符合条件的事件不被返回给客户端。

#### [h2]type

```
SecurityAudit_FilterType SecurityAudit_Filter::type
```
 描述

过滤器类型。

#### [h2]value

```
const char** SecurityAudit_Filter::value
```
 描述

事件的过滤器的值。

#### [h2]valueCount

```
uint64_t SecurityAudit_Filter::valueCount
```
 描述

过滤器值的数量。
