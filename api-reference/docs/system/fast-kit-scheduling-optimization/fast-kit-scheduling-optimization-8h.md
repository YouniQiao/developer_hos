---
title: "scheduling_optimization.h"
upstream_id: "harmonyos-references/fast-kit-scheduling-optimization-8h"
catalog: "harmonyos-references"
content_hash: "5c750c59cb2a"
synced_at: "2026-07-28T16:51:03.564239"
---

# scheduling_optimization.h

#### 概述

允许应用程序向系统提供性能场景信息，系统将据此在API生效范围内尽可能优化应用性能，从而提升用户体验。

![](./img/note_3.0-zh-cn.png)

1. perfHint只是应用向系统发送的性能优化提示，系统收到提示后会综合考量整机CPU负载、系统温度等因素进行决策，**不保证一定进行性能提升**。
2. **性能提示仅当应用在前台运行时才会生效**，应用切换到后台后提示将失效。
3. 上报线程ID提升QoS优先级不能与QoS API混用。

引用文件： <FASTKit/scheduling_optimization.h>

库： libscheduling_optimization.z.so

系统能力： SystemCapability.FAST.SchedulingOptimization

起始版本： 26.0.0

相关模块： [FAST](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast)

#### 汇总

#### [h2]类型定义

| 名称 | 描述 |
| --- | --- |
| typedef struct HMS_FAST_PerfHintConfigBuilder HMS_FAST_PerfHintConfigBuilder | 系统性能优化配置参数构建器。 |
| typedef struct HMS_FAST_PerfHintConfig HMS_FAST_PerfHintConfig | 系统性能优化配置参数。 |

#### [h2]枚举

| 名称 | 描述 |
| --- | --- |
| [HMS_FAST_SchedulingOptimization_SceneType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_schedulingoptimization_scenetype) { HMS_FAST_APP_LAUNCH = 1, HMS_FAST_PAGE_TRANSITION = 2, HMS_FAST_PAGE_LOAD = 3, HMS_FAST_NETWORK_FILE_PROCESSING = 4, HMS_FAST_LOCAL_FILE_PROCESSING = 5, HMS_FAST_PAGE_DRAWING = 6, HMS_FAST_ANIMATION = 7, HMS_FAST_MEDIA_PLAYBACK = 8, HMS_FAST_MEDIA_ENCODING_AND_DECODING = 9 } | 需要系统性能优化的场景类型。 |
| [HMS_FAST_SchedulingOptimization_SceneState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_schedulingoptimization_scenestate) { HMS_FAST_END = 0, HMS_FAST_BEGIN = 1 } | 需要系统性能优化的场景状态。 |
| [HMS_FAST_SchedulingOptimization_DurationType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_schedulingoptimization_durationtype) { HMS_FAST_SHORT = 1, HMS_FAST_MEDIUM = 2, HMS_FAST_LONG = 3 } | 需要系统性能优化的持续时间选项。 |
| [HMS_FAST_SchedulingOptimization_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_schedulingoptimization_errorcode) { HMS_FAST_ERR_SCHEDULING_OPTIMIZATION_SUCCESS = 0, HMS_FAST_ERR_SCHEDULING_OPTIMIZATION_HIGH_SYSTEM_LOAD = 1027700001, HMS_FAST_ERR_SCHEDULING_OPTIMIZATION_POWER_SAVING_MODE = 1027700002, HMS_FAST_ERR_SCHEDULING_OPTIMIZATION_LOW_POWER_MODE = 1027700003, HMS_FAST_ERR_SCHEDULING_OPTIMIZATION_NON_FRONTEND = 1027700004, HMS_FAST_ERR_SCHEDULING_OPTIMIZATION_INTERVAL = 1027700005, HMS_FAST_ERR_SCHEDULING_OPTIMIZATION_EXECUTE_ERROR = 1027700006, HMS_FAST_ERR_SCHEDULING_OPTIMIZATION_INVALID_PARAM = 1027700007, HMS_FAST_ERR_SCHEDULING_OPTIMIZATION_NO_MEMORY = 1027700008 } | 系统性能优化的错误码。 |

#### [h2]函数

| 名称 | 描述 |
| --- | --- |
| [HMS_FAST_SchedulingOptimization_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_schedulingoptimization_errorcode) [HMS_FAST_PerfHintConfigBuilder_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_perfhintconfigbuilder_create) (HMS_FAST_PerfHintConfigBuilder** builder) | 创建构建器实例。 |
| void [HMS_FAST_PerfHintConfigBuilder_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_perfhintconfigbuilder_destroy) (HMS_FAST_PerfHintConfigBuilder* builder) | 销毁构建器。 |
| [HMS_FAST_SchedulingOptimization_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_schedulingoptimization_errorcode) [HMS_FAST_PerfHintConfigBuilder_SetSceneType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_perfhintconfigbuilder_setscenetype) (HMS_FAST_PerfHintConfigBuilder* builder, HMS_FAST_SchedulingOptimization_SceneType sceneType) | 设置需要系统性能优化的场景类型。 |
| [HMS_FAST_SchedulingOptimization_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_schedulingoptimization_errorcode) [HMS_FAST_PerfHintConfigBuilder_SetSceneState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_perfhintconfigbuilder_setscenestate) (HMS_FAST_PerfHintConfigBuilder* builder, HMS_FAST_SchedulingOptimization_SceneState sceneState) | 设置需要系统性能优化的场景状态。 |
| [HMS_FAST_SchedulingOptimization_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_schedulingoptimization_errorcode) [HMS_FAST_PerfHintConfigBuilder_SetDurationType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_perfhintconfigbuilder_setdurationtype) (HMS_FAST_PerfHintConfigBuilder* builder, HMS_FAST_SchedulingOptimization_DurationType durationType) | 设置需要系统性能优化的持续时间选项。 |
| [HMS_FAST_SchedulingOptimization_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_schedulingoptimization_errorcode) [HMS_FAST_PerfHintConfigBuilder_SetTids](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_perfhintconfigbuilder_settids) (HMS_FAST_PerfHintConfigBuilder* builder, int* tids, uint32_t tidsSize) | 设置需要优化的线程ID。 |
| [HMS_FAST_SchedulingOptimization_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_schedulingoptimization_errorcode) [HMS_FAST_PerfHintConfigBuilder_Build](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_perfhintconfigbuilder_build) (HMS_FAST_PerfHintConfigBuilder* builder, HMS_FAST_PerfHintConfig** config) | 创建系统性能优化配置参数。 |
| void [HMS_FAST_PerfHintConfig_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_perfhintconfig_destroy) (HMS_FAST_PerfHintConfig* config) | 销毁系统性能优化配置参数。 |
| [HMS_FAST_SchedulingOptimization_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_schedulingoptimization_errorcode) [HMS_FAST_SchedulingOptimization_PerfHint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_schedulingoptimization_perfhint) (const HMS_FAST_PerfHintConfig* config) | 系统性能优化接口。 |
