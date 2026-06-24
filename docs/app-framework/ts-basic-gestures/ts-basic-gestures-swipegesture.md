---
title: "SwipeGesture"
upstream_id: "harmonyos-references/ts-basic-gestures-swipegesture"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:47:51.169029"
---

# SwipeGesture

用于触发快滑手势，滑动速度需大于速度阈值，默认最小速度为100vp/s。

![](./img/note_3.0-zh-cn.png) 从API version 8开始支持。后续版本如有新增内容，将采用上角标单独标记该内容的起始版本。

#### 接口

#### [h2]SwipeGesture

SwipeGesture(value?: { fingers?: number; direction?: SwipeDirection; speed?: number })

继承自[GestureInterface](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-gesture-common#gestureinterfacet11)，设置快滑手势事件。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | { fingers?: number; direction?: SwipeDirection; speed?: number } | 否 | 设置快滑事件参数。 - fingers：触发快滑的最少手指数。 默认值：1 取值范围：[1, 10] - direction：触发快滑手势的滑动方向。 默认值：SwipeDirection.All - speed：识别快滑的最小速度。 默认值：100VP/s 取值范围：(0, +∞) **说明：** 当滑动速度的值小于等于0时，会被转化为默认值。 |

#### [h2]SwipeGesture15+

SwipeGesture(options?: SwipeGestureHandlerOptions)

设置快滑手势事件。与[SwipeGesture](#swipegesture-1)相比，options参数新增了isFingerCountLimited，表示是否检查触摸屏幕的手指数量。

元服务API： 从API version 15开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | [SwipeGestureHandlerOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-gesturehandler#swipegesturehandleroptions) | 否 | 快滑事件处理器配置参数。 |

#### SwipeDirection枚举说明

定义滑动手势的触发方向。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

| 名称 | 值 | 说明 |
| --- | --- | --- |
| All | - | 所有方向。 |
| Horizontal | - | 水平方向，手指滑动方向与x轴夹角小于45度时触发。 |
| Vertical | - | 竖直方向，手指滑动方向与y轴夹角小于45度时触发。 |
| None | - | 任何方向均不可触发。 |

#### 事件

![](./img/note_3.0-zh-cn.png) 在[GestureEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-gesture-common#gestureevent对象说明)的fingerList元素中，手指索引编号与位置相对应，即fingerList[index]的id为index。对于先按下但未参与当前手势触发的手指，fingerList中对应的位置为空。建议开发者优先使用fingerInfos。

#### [h2]onAction

onAction(event: (event: GestureEvent) => void)

Swipe手势识别成功时触发回调。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | (event: [GestureEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-gesture-common#gestureevent对象说明)) => void | 是 | 手势事件回调函数。 |

#### 示例

该示例展示了如何实现快滑手势的识别。

```
// xxx.ets
@Entry
@Component
struct SwipeGestureExample {
  @State rotateAngle: number = 0;
  @State speed: number = 1;

  build() {
    Column() {
      Column() {
        Text("SwipeGesture speed\n" + this.speed)
        Text("SwipeGesture angle\n" + this.rotateAngle)
      }
      .border({ width: 3 })
      .width(300)
      .height(200)
      .margin(100)
      .rotate({ angle: this.rotateAngle })
      // 单指竖直方向快滑时触发该事件
      .gesture(
      SwipeGesture({ direction: SwipeDirection.Vertical })
        .onAction((event: GestureEvent) => {
          if (event) {
            this.speed = event.speed
            this.rotateAngle = event.angle
          }
        })
      )
    }.width('100%')
  }
}
```
 ![](./img/zh-cn_image_0000002656349675.png)
