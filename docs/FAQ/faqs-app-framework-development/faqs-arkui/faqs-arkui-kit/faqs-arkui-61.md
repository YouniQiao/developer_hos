---
format: md
title: "Image无法使用bindContextMenu"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-61
---

Image组件默认启用长按拖拽功能，会与bindContextMenu的长按弹出菜单冲突，需显式设置draggable(false)来禁用拖拽。参考代码如下：

```
@Entry
@Component
struct Index {
  @Builder
  menuBuilder() {
    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {
      Button('Test ContextMenu1')
      Divider().strokeWidth(2).margin(5).color(Color.Black)
      Button('Test ContextMenu2')
      Divider().strokeWidth(2).margin(5).color(Color.Black)
      Button('Test ContextMenu3')
    }
    .width(200)
    .height(160)
  }

  build() {
    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {
      Column() {
        Image($r('app.media.icon'))
          .draggable(false)
          .width('100vp')
      }
      .bindContextMenu(this.menuBuilder, ResponseType.LongPress)
      .onDragStart(() => {
        // Close menu when dragging
        this.getUIContext().getContextMenuController().close()
      })

    }
    .width('100%')
    .height('100%')
  }
}
```

**参考链接**

[菜单控制](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-menu)，[Image组件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-image)
