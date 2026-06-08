---
title: "WebView安全"
original_url: /docs/experience-suggestions/security-privacy/security/standard-security-debug
format: md
upstream_id: experience-suggestions/security-privacy/security/standard-security-debug
last_sync: 2026-06-07
sync_hash: 4de35870
upstream_hash: 8fcd96557119
---

# WebView安全

|  |  |
| --- | --- |
| 描述 | 不加载不安全的URL或页面。 |
| 类型 | 建议 |
| 适用设备 | 手机，平板，PC/2in1，智慧屏，车机 |
| 应用形态适用性 | 鸿蒙应用，鸿蒙元服务 |
| 说明 | 实现方案参考[最佳实践](/docs/security/security-encode#section1113104054110) |

|  |  |
| --- | --- |
| 描述 | 不能将mixedMode属性配置成All。 |
| 类型 | 建议 |
| 适用设备 | 手机，平板，PC/2in1，智慧屏，车机 |
| 应用形态适用性 | 鸿蒙应用，鸿蒙元服务 |
| 说明 | 实现方案参考[最佳实践](/docs/security/security-encode#section4947114114317) |

|  |  |
| --- | --- |
| 描述 | 在加载webview页面时不得在SSL校验出错时继续加载页面。 |
| 类型 | 规则 |
| 适用设备 | 手机，平板，PC/2in1，智慧屏，车机，穿戴 |
| 应用形态适用性 | 鸿蒙应用，鸿蒙元服务 |
| 说明 | 实现方案参考[最佳实践](/docs/security/security-encode#section1256314434316) |

|  |  |
| --- | --- |
| 描述 | 未经用户同意不得在WebView页面返回位置信息。 |
| 类型 | 规则 |
| 适用设备 | 手机，平板，PC/2in1，智慧屏，车机，穿戴 |
| 应用形态适用性 | 鸿蒙应用，鸿蒙元服务 |
| 说明 | 实现方案参考[最佳实践](/docs/security/security-encode#section12671987440) |