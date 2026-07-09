---
title: "HalfScreenLaunchComponent"
upstream_id: "harmonyos-references/ohos-atomicservice-halfscreenlaunchcomponent"
catalog: "harmonyos-references"
content_hash: "50d9a6c9caa3"
synced_at: "2026-07-09T00:58:12.725086"
---

# HalfScreenLaunchComponent

半屏嵌入式启动元服务组件，当被拉起方未授权嵌入式运行元服务时，宿主将使用跳出式拉起元服务。

![](./img/note_3.0-zh-cn.png) 该组件从API version 18开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

如果需要在该组件中实现一个可嵌入式运行的元服务时，元服务必须继承自[EmbeddableUIAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-embeddableuiability)。若不继承自EmbeddableUIAbility，系统无法确保元服务正常运行。

#### 导入模块

```
import { HalfScreenLaunchComponent } from '@kit.ArkUI';
```

#### 子组件

无

#### 属性

不支持[通用属性](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-attributes)

#### HalfScreenLaunchComponent

HalfScreenLaunchComponent({ content: Callback<void>, appId: string, options?: AtomicServiceOptions, onError?: ErrorCallback, onTerminated?: Callback<TerminationInfo>, onReceive?: Callback<Record<string, Object>> })

装饰器类型：[@Component](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-create-custom-components#component)

元服务API： 从API version 18开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 名称 | 类型 | 必填 | 装饰器类型 | 说明 |
| --- | --- | --- | --- | --- |
| content | Callback | 是 | [@BuilderParam](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-builderparam) | 组件显示内容。 |
| appId | string | 是 | - | 元服务appId。 |
| options | [AtomicServiceOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-atomicserviceoptions) | 否 | - | 拉起元服务参数，默认为空。 |
| onError | [ErrorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-base#errorcallback) | 否 | - | 被拉起的元服务扩展在运行过程中发生异常时触发本回调。 |
| onTerminated | [Callback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-base#callback) | 否 | - | 被拉起的嵌入式运行元服务通过点击元服务退出按钮、手势侧滑、调用[terminateSelfWithResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-uiabilitycontext#terminateselfwithresult)或者[terminateSelf](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-uiabilitycontext#terminateself)正常退出时，触发本回调函数。 |
| onReceive20+ | [Callback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-base#callback)> | 否 | - | 被拉起的嵌入式运行元服务通过[@ohos.window (窗口)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window)调用API时，触发本回调。 **元服务API：** 从API version 20开始，该接口支持在元服务中使用。 |

#### 示例

该示例展示如何嵌入式拉起手机充值服务。

```
import { HalfScreenLaunchComponent } from '@kit.ArkUI';

@Entry
@Component
struct Index {
  appId: string = "576****************"; // 元服务appId。

  build() {
    Column() {
      HalfScreenLaunchComponent({
        appId: this.appId,
        options: {},
        onTerminated:  (info:TerminationInfo)=> {
          console.info('onTerminated info = '+ info.want);
        },
        onError: (err) => {
          console.error(" onError code: " + err.code + ", message: ", err.message);
        },
        onReceive: (data) => {
          console.info("onReceive, data: " + data['ohos.atomicService.window']);
        }
      }) {
        Column() {
          Image($r('app.media.app_icon'))
          Text('拉起手机充值')
        }.width("80vp").height("80vp").margin({bottom:30})
      } // 通过尾随闭包形式传入content。
    }
  }

}
```
