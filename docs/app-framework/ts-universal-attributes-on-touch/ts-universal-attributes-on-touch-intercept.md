---
title: "自定义事件拦截"
upstream_id: "harmonyos-references/ts-universal-attributes-on-touch-intercept"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:47:33.502968"
---

# 自定义事件拦截

为组件提供自定义的事件拦截能力，开发者可根据事件在控件上按下时的位置，输入源等事件信息决定控件上的HitTestMode属性。

![](./img/note_3.0-zh-cn.png)

- 从API version 12开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
- 本模块接口仅可在Stage模型下使用。

#### onTouchIntercept

onTouchIntercept(callback: Callback<TouchEvent, HitTestMode>): T

给组件绑定自定义事件拦截回调。

![](./img/note_3.0-zh-cn.png) 从API version 20开始，该接口支持在[attributeModifier](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-attribute-modifier#attributemodifier)中调用。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback | 是 | 自定义事件拦截回调。在做[触摸测试](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-interaction-basic-principles#触摸测试)时回调此函数。通过返回值设置组件的[HitTestMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#hittestmode9)。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| T | 返回当前组件。 |

#### 示例

该示例通过onTouchIntercept修改组件的HitTestMode属性。

```
// xxx.ets
@Entry
@Component
struct Index {
  isPolygon(event: TouchEvent) {
    return true;
  }

  build() {
    Row() {
      Column() {
        Text("hello world")
          .backgroundColor(Color.Blue)
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
          .onClick(() => {
            console.info("Text click");
          })
      }
      .width(400)
      .height(300)
      .backgroundColor(Color.Pink)
      .onClick(() => {
        console.info("Column click");
      })
      // 调用onTouchIntercept修改该组件的HitTestMode属性
      .onTouchIntercept((event: TouchEvent) => {
        console.info("OnTouchIntercept + " + JSON.stringify(event));
        // 使用touches时需要先校验是否为空
        if (event && event.touches) {
          let touches = event.touches;
          for (let i = 0; touches[i] != null; i++) {
            console.info('onTouchIntercept touches:', JSON.stringify(touches[i]));
          }
        }
        if (this.isPolygon(event)) {
          return HitTestMode.None;
        }
        return HitTestMode.Default;
      })
    }
    .width('100%')
  }
}
```
