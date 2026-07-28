---
title: "SecurityAudit_AuthClientConfiguration"
upstream_id: "harmonyos-references/devicesecurity-capi-structs-securityaudit-authclientconfiguration"
catalog: "harmonyos-references"
content_hash: "0ac27c987fea"
synced_at: "2026-07-28T16:50:28.241354"
---

# SecurityAudit_AuthClientConfiguration

#### 概述

该结构体定义了创建阻断类客户端时可配置的默认阻断策略。

起始版本： 26.0.0

相关模块： [SecurityAudit](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-securityaudit)

所在头文件： [security_audit.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-security-audit-8h)

#### 汇总

#### [h2]成员变量

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| timeoutAuthResult | [SecurityAudit_AuthResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-securityaudit#securityaudit_authresult) | 设置阻断事件响应超时时的默认阻断结果。 - SECURITY_AUDIT_AUTH_RESULT_ALLOW：超时放行 - SECURITY_AUDIT_AUTH_RESULT_DENY：超时阻断 |
