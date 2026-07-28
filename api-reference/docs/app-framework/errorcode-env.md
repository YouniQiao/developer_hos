---
title: "环境变量错误码"
upstream_id: "harmonyos-references/errorcode-env"
catalog: "harmonyos-references"
content_hash: "461f96bcc165"
synced_at: "2026-07-28T16:49:50.295394"
---

# 环境变量错误码

![](./img/note_3.0-zh-cn.png) 以下仅介绍本模块特有错误码，通用错误码请参考[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

#### 140000 @Env无效键

错误信息

Invalid key for @Env

错误描述

[@Env](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-env-system-property#env)无效键。

可能原因

@Env键无效。@Env支持[SystemProperties](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-env-system-property#systemproperties) | [SystemEnvKey](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-env-system-property#systemenvkeyt)类型参数，详情见[@Env支持参数](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-env-system-property#env支持参数)。

处理步骤

确保@Env参数类型为[SystemProperties](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-env-system-property#systemproperties) | [SystemEnvKey](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-env-system-property#systemenvkeyt)，详情见[@Env支持开发指南](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-env-system-property)。
