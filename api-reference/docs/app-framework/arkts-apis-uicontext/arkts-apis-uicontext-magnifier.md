---
title: "Class (Magnifier)"
upstream_id: "harmonyos-references/arkts-apis-uicontext-magnifier"
catalog: "harmonyos-references"
content_hash: "2926557e37f0"
synced_at: "2026-07-09T00:57:29.101413"
---

# Class (Magnifier)

提供控制放大镜的显示与隐藏的能力，放大镜会对组件内容进行放大显示，便于查看组件细节。

![](./img/note_3.0-zh-cn.png)

- 本模块首批接口从API version 22开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
- 本Class首批接口从API version 22开始支持。
- 以下API需先使用UIContext中的[getMagnifier()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#getmagnifier22)方法获取Magnifier实例，再通过此实例调用对应方法。
- 与文本类组件自带的放大镜能力互不影响，文本类组件推荐使用自带的放大镜能力。

#### bind

bind(id: string): void

绑定放大镜与指定id的组件。

元服务API： 从API version 22开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | string | 是 | 组件id，可通过通用属性[id](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-component-id#id)或[key](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-component-id#key12)设置。当组件id为空字符串或未找到匹配id的组件时，不显示放大镜。 |

示例：

该示例通过监听onTouch事件控制放大镜对图片进行放大显示。

```
import { Magnifier } from '@kit.ArkUI';

@Entry
@Component
struct MagnifierExample {
  private magnifier: Magnifier = this.getUIContext().getMagnifier();

  build() {
    Column() {
      // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件。
      Image($r('app.media.startIcon'))
        .draggable(false)
        .width(200)
        .height(200)
        .margin(50)
        .id('image')
        .onTouch((event?: TouchEvent) => {
          if (event && event.sourceTool === SourceTool.Finger) {
            if (event.type === TouchType.Down) {
              this.magnifier.bind('image')
            } else if (event.type === TouchType.Move) {
              let x = event.touches[0].x
              let y = event.touches[0].y
              this.magnifier.show(x, y)
            } else if (event.type === TouchType.Up) {
              this.magnifier.unbind()
            } else if (event.type === TouchType.Cancel) {
              this.magnifier.unbind()
            }
          }
        })
    }
  }
}
```
 ![](./img/zh-cn_image_0000002631412954.png)

#### show

show(x: number, y: number): void

设置放大镜显示的组件内容相对于组件左上角的位置，设置成功后放大镜会对以该坐标点为中心的区域内容进行放大显示。

![](./img/note_3.0-zh-cn.png) 当与放大镜绑定的组件自身内容发生变化时，放大镜显示内容不会自动更新，需要主动调用show接口对放大镜显示内容进行更新。

元服务API： 从API version 22开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | 放大镜显示的组件内容相对组件水平方向坐标，单位为vp。当坐标值大于组件宽度或小于0时不显示放大镜；将值设为undefined时保持放大镜的当前显示状态。 |
| y | number | 是 | 放大镜显示的组件内容相对组件垂直方向坐标，单位为vp。当坐标值大于组件高度或小于0时不显示放大镜；将值设为undefined时保持放大镜的当前显示状态。 |

示例：

请参考[bind](#bind)示例。

#### unbind

unbind(): void

解除放大镜与当前组件的绑定。

元服务API： 从API version 22开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

示例：

请参考[bind](#bind)示例。
