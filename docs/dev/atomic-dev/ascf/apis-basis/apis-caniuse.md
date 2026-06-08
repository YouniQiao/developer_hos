---
title: "API可用判断"
original_url: /docs/dev/atomic-dev/ascf/apis-basis/apis-caniuse
format: md
upstream_id: dev/atomic-dev/ascf/apis-basis/apis-caniuse
last_sync: 2026-06-07
sync_hash: 012404ad
---
## has.canIUse

has.canIUse(string schema): boolean

判断指定的API（包括调用方式、参数、返回值、返回值属性等）、组件（包括属性）在当前版本是否可用。

**起始版本：** 1.0.0

**参数**：

| 参数 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| schema | string | 是 | 调用方式如下，详细参数说明参见下方“格式说明”。  - 对于API：$\&#123;API\&#125;.$\&#123;method\&#125;.$\&#123;param\&#125;.$\&#123;option\&#125;  - 对于组件：$\&#123;component\&#125;.$\&#123;attribute\&#125;.$\&#123;option\&#125; |

**格式说明**：

| 名称 | 描述 |
| --- | --- |
| $\&#123;API\&#125; | API 名称。 |
| $\&#123;method\&#125; | 调用方式，有效值为return, success, object, callback。 |
| $\&#123;param\&#125; | 参数或者返回值。 |
| $\&#123;option\&#125; | 参数的可选值或者返回值的属性。 |
| $\&#123;component\&#125; | 组件名称。 |
| $\&#123;attribute\&#125; | 组件属性。 |
| $\&#123;option\&#125; | 组件属性的可选值。 |

**返回值**：

返回boolean类型，表示是否可用。

**示例：**

```
// API 是否可用
has.canIUse('getFileInfo');
// API 属性是否可用
has.canIUse('closeSocket.object.code');
// API 属性是否可用
has.canIUse('getLocation.success.latitude');
// API 返回值属性是否可用
has.canIUse('getSystemInfo.success.screenWidth');
// 组件是否可用
has.canIUse('radio');
// 组件新增属性值是否可用
has.canIUse('button.size.default');
```
