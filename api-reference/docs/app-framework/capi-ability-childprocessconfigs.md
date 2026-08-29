---
title: "Ability_ChildProcessConfigs"
upstream_id: "harmonyos-references/capi-ability-childprocessconfigs"
catalog: "harmonyos-references"
content_hash: "aab4fda97819"
synced_at: "2026-08-29T18:12:09.433688"
---

# Ability_ChildProcessConfigs

```
typedef struct Ability_ChildProcessConfigs Ability_ChildProcessConfigs;
```

#### 概述

启动子进程的配置信息，包括子进程的进程名、数据沙箱与网络环境的共享模式、主进程与子进程的uid是否隔离的配置。开发者可以使用[OH_Ability_ChildProcessConfigs_SetProcessName](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-child-process-h#oh_ability_childprocessconfigs_setprocessname)、[OH_Ability_ChildProcessConfigs_SetIsolationMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-child-process-h#oh_ability_childprocessconfigs_setisolationmode)、[OH_Ability_ChildProcessConfigs_SetIsolationUid](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-child-process-h#oh_ability_childprocessconfigs_setisolationuid)接口来修改相应的配置信息。

起始版本： 20

相关模块： [ChildProcess](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-childprocess)

所在头文件： [native_child_process.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-child-process-h)
