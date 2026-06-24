---
title: "环境变量错误码"
upstream_id: "harmonyos-references/errorcode-env"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:01.795963"
---

# 环境变量错误码

![](./img/note_3.0-zh-cn.png) 以下仅介绍本模块特有错误码，通用错误码请参考[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

#### 140000 @Env非法入参

错误信息

Invalid key for @Env

错误描述

[@Env](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-env-system-property#env)非法入参。

可能原因

@Env入参非法。@Env仅支持[SystemProperties](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-env-system-property#systemproperties)类型参数，详情见[@Env支持参数](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-env-system-property#env支持参数)。

处理步骤

确保@Env参数类型为[SystemProperties](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-env-system-property#systemproperties)，详情见[@Env支持开发指南](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-env-system-property)。
