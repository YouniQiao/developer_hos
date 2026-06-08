---
title: "组件安全"
original_url: /docs/experience-suggestions/security-privacy/security/standard-security-base
format: md
upstream_id: experience-suggestions/security-privacy/security/standard-security-base
last_sync: 2026-06-07
sync_hash: db67a1ef
---
# 组件安全

|  |  |
| --- | --- |
| 描述 | 不对外交互的Ability的exported属性需要显式设置为false。 |
| 类型 | 建议 |
| 适用设备 | 手机，平板，PC/2in1，智慧屏，车机 |
| 应用形态适用性 | 鸿蒙应用，鸿蒙元服务 |
| 说明 | 实现方案参考[最佳实践](/docs/security/security-encode#section93277172115) |

|  |  |
| --- | --- |
| 描述 | 对外交互的Ability应设置合理的访问权限。 |
| 类型 | 建议 |
| 适用设备 | 手机，平板，PC/2in1，智慧屏，车机 |
| 应用形态适用性 | 鸿蒙应用，鸿蒙元服务 |
| 说明 | 实现方案参考[最佳实践](/docs/security/security-encode#section16254131183715) |

|  |  |
| --- | --- |
| 描述 | DataShareExtensionAbility需要设置读写访问权限。 |
| 类型 | 建议 |
| 适用设备 | 手机，平板，PC/2in1，智慧屏，车机 |
| 应用形态适用性 | 鸿蒙应用，鸿蒙元服务 |
| 说明 | 无 |

|  |  |
| --- | --- |
| 描述 | 动态公共事件接收器进行访问权限控制。 |
| 类型 | 建议 |
| 适用设备 | 手机，平板，PC/2in1，智慧屏，车机 |
| 应用形态适用性 | 鸿蒙应用，鸿蒙元服务 |
| 说明 | 实现方案参考[最佳实践](/docs/security/security-encode#section74546012413) |

|  |  |
| --- | --- |
| 描述 | 静态公共事件接收器进行访问权限控制。 |
| 类型 | 建议 |
| 适用设备 | 手机，平板，PC/2in1，智慧屏，车机 |
| 应用形态适用性 | 鸿蒙应用，鸿蒙元服务 |
| 说明 | 无 |

|  |  |
| --- | --- |
| 描述 | 未设置权限的公共事件不得携带个人数据。 |
| 类型 | 建议 |
| 适用设备 | 手机，平板，PC/2in1，智慧屏，车机 |
| 应用形态适用性 | 鸿蒙应用，鸿蒙元服务 |
| 说明 | 实现方案参考[最佳实践](/docs/security/security-encode#section190521394018) |

|  |  |
| --- | --- |
| 描述 | 隐式启动Ability时不得携带严重级别数据。 |
| 类型 | 建议 |
| 适用设备 | 手机，平板，PC/2in1，智慧屏，车机 |
| 应用形态适用性 | 鸿蒙应用，鸿蒙元服务 |
| 说明 | 实现方案参考[最佳实践](/docs/security/security-encode#section143261097385) |

|  |  |
| --- | --- |
| 描述 | 涉及敏感权限授权的应用界面需要防遮挡。 |
| 类型 | 规则 |
| 适用设备 | 手机，平板，PC/2in1，智慧屏，车机，穿戴 |
| 应用形态适用性 | 鸿蒙应用，鸿蒙元服务 |
| 说明 | 无 |

|  |  |
| --- | --- |
| 描述 | 涉及口令输入、转账支付的应用界面需要防截屏。 |
| 类型 | 规则 |
| 适用设备 | 手机，平板，智慧屏，车机 |
| 应用形态适用性 | 鸿蒙应用，鸿蒙元服务 |
| 说明 | 实现方案参考[最佳实践](/docs/security/security-encode#section18516943133816) |