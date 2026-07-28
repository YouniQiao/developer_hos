---
title: "@hms.fast.schedulingOptimization (系统性能优化)"
upstream_id: "harmonyos-references/fast-kit-scheduling-optimization"
catalog: "harmonyos-references"
content_hash: "3ac16639838d"
synced_at: "2026-07-28T16:51:02.905886"
---

# @hms.fast.schedulingOptimization (系统性能优化)

允许应用程序向系统提供性能场景信息，系统将据此在API生效范围内尽可能优化应用性能，从而提升用户体验。

![](./img/note_3.0-zh-cn.png)

1. 调用接口需捕获异常。
2. perfHint只是应用向系统发送的性能优化提示，系统收到提示后会综合考量整机CPU负载、系统温度等因素进行决策，**不保证一定进行性能提升**。
3. **性能提示仅当应用在前台运行时才会生效**，应用切换到后台后提示将失效。
4. 上报线程ID提升QoS优先级不能与QoS API混用。

起始版本： 26.0.0

#### 导入模块

```
import { schedulingOptimization } from '@kit.FASTKit';
```

#### SceneType

需要系统性能优化的场景类型。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.FAST.SchedulingOptimization

起始版本： 26.0.0

| 名称 | 值 | 说明 |
| --- | --- | --- |
| APP_LAUNCH | 1 | 应用启动场景。 |
| PAGE_TRANSITION | 2 | 页面切换场景。 |
| PAGE_LOAD | 3 | 页面加载场景。 |
| NETWORK_FILE_PROCESSING | 4 | 网络文件处理场景。 |
| LOCAL_FILE_PROCESSING | 5 | 本地文件处理场景。 |
| PAGE_DRAWING | 6 | 页面绘制场景。 |
| ANIMATION | 7 | 动效场景。 |
| MEDIA_PLAYBACK | 8 | 媒体播放场景。 |
| MEDIA_ENCODING_AND_DECODING | 9 | 媒体编解码场景。 |

#### SceneState

需要系统性能优化的场景状态。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.FAST.SchedulingOptimization

起始版本： 26.0.0

| 名称 | 值 | 说明 |
| --- | --- | --- |
| END | 0 | 结束系统性能优化。 |
| BEGIN | 1 | 开始系统性能优化。 |

#### DurationType

需要系统性能优化的持续时间选项。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.FAST.SchedulingOptimization

起始版本： 26.0.0

| 名称 | 值 | 说明 |
| --- | --- | --- |
| SHORT | 1 | 短持续时间。单次最大持续时间：1，间隔大于3。单位：秒。 |
| MEDIUM | 2 | 中等持续时间。单次最大持续时间：10，间隔大于30。单位：秒。 |
| LONG | 3 | 长持续时间。单次最大持续时间：60，间隔大于180。单位：秒。 |

#### PerfHintConfig

系统性能优化的配置参数。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.FAST.SchedulingOptimization

起始版本： 26.0.0

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| sceneType | [SceneType](#scenetype) | 否 | 否 | 系统性能优化场景类型。 |
| sceneState | [SceneState](#scenestate) | 否 | 否 | 系统性能优化场景状态。 |
| durationType | [DurationType](#durationtype) | 否 | 否 | 系统性能优化持续时间类型。 |
| tids | number[] | 否 | 否 | 系统性能优化线程ID，最大长度为16。 |

#### perfHint

perfHint(config: PerfHintConfig): Promise<void>

系统性能优化接口。使用Promise异步回调。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.FAST.SchedulingOptimization

起始版本： 26.0.0

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| config | [PerfHintConfig](#perfhintconfig) | 是 | 系统性能优化的配置参数。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。无返回结果的Promise对象。 |

错误码：

以下错误码的详细介绍请参见[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-errorcode)。

| 错误码ID | 错误信息 |
| --- | --- |
| 1027700001 | High system load. |
| 1027700002 | Power Saving Mode. |
| 1027700003 | Low Power Mode. |
| 1027700004 | Non-frontend calling scenarios. |
| 1027700005 | The interval does not meet the requirement. |
| 1027700006 | Failed to execute scheduling optimization. |

示例：

```
import { schedulingOptimization } from '@kit.FASTKit';

@Entry
@Component
struct PerfHintDemo {

  build() {
    Column() {
      Button("perfHint")
        .onClick(async () => {
          try {
            let config: schedulingOptimization.PerfHintConfig = {
              sceneType: schedulingOptimization.SceneType.APP_LAUNCH,
              sceneState: schedulingOptimization.SceneState.BEGIN,
              durationType: schedulingOptimization.DurationType.SHORT,
              tids: [] // 按需填入线程ID
            };

            await schedulingOptimization.perfHint(config);
            console.info('perfHint success');
          } catch (error) {
            console.error(`perfHint error.code is ${error.code}, message is ${error.message}`);
            // 根据错误码进行相应处理
          }
        })
        .width('100%')
    }
    .margin(16)
    .height('100%')
    .justifyContent(FlexAlign.Center)
  }
}
```
