---
title: "ContextMenu"
upstream_id: "harmonyos-references/ts-methods-menu"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:48:40.120947"
---

# ContextMenu

在页面范围内关闭通过[bindContextMenu](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-menu#bindcontextmenu12)属性绑定的菜单。

![](./img/note_3.0-zh-cn.png) 从API version 8开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

#### ContextMenu.close(deprecated)

static close()

可以通过该方法在页面范围内关闭通过[bindContextMenu](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-menu#bindcontextmenu12)为组件绑定的菜单。

![](./img/note_3.0-zh-cn.png) 从API version 18开始废弃，建议使用[UIContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext)中的[getContextMenuController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#getcontextmenucontroller12)获取[ContextMenuController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-contextmenucontroller)实例，再通过此实例调用替代方法[close](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-contextmenucontroller#close12)。

从API version 12开始，可以通过使用[UIContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext)中的[getContextMenuController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#getcontextmenucontroller12)来明确UI的执行上下文。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

#### 示例

该示例为ContextMenu.close关闭通过bindContextMenu属性绑定的菜单。

![](./img/note_3.0-zh-cn.png) 推荐通过使用[UIContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext)中的[getContextMenuController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#getcontextmenucontroller12)来明确UI的执行上下文。

```
// xxx.ets
@Entry
@Component
struct Index {
  @Builder MenuBuilder() {
    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {
      Button('ContextMenu1')
      Divider().strokeWidth(2).margin(5).color(Color.Black)
      Button('ContextMenu2')
      Divider().strokeWidth(2).margin(5).color(Color.Black)
      Button('ContextMenu3')
    }
    .width(200)
    .height(160)
  }

  build() {
    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {
      Column() {
        Text('Long press to show ContextMenu')
          .fontSize(20)
          .width('100%')
          .height(500)
          .backgroundColor(0xAFEEEE)
          .textAlign(TextAlign.Center)
      }
      .bindContextMenu(this.MenuBuilder, ResponseType.LongPress)
      .onDragStart(()=>{
        // 拖拽时关闭菜单
        ContextMenu.close() // 建议使用 this.getUIContext().getContextMenuController().close()
      })
    }
    .width('100%')
    .height('100%')
  }
}
```
 ![](./img/zh-cn_image_0000002626070806.gif)
