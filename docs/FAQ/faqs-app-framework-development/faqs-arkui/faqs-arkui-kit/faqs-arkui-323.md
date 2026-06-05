---
format: md
title: "如何在Text组件关闭bindSelection自定义菜单时，取消文本的选中状态"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-323
---

**问题现象**

当Text组件通过bindSelectionMenu绑定自定义菜单时，长按操作会弹出菜单，但调用closeSelectionMenu关闭菜单后，文本选中状态仍会保持。

**解决措施**

在该场景下，取消选中状态可通过重新设置selection来实现。调用closeSelectionMenu关闭自定义菜单时，在onDisappear回调中重新设置selection的start和end即可取消选中状态。示例代码如下：

```
@Entry
@Component
struct TextMenuUnchecked {
  controller: TextController = new TextController();
  options: TextOptions = { controller: this.controller };
  @State start: number = -1; // Unchecked state
  @State end: number = -1;

  build() {
    Column() {
      Column() {
        Text(undefined, this.options) {
          Span('Hello World')
          ImageSpan($r('app.media.app_icon'))
            .width(50)
            .height(50)
            .objectFit(ImageFit.Fill)
            .verticalAlign(ImageSpanAlignment.CENTER)
        }
        .selection(this.start, this.end)
        .copyOption(CopyOptions.InApp)
        // Long press to bring up a custom menu
        .bindSelectionMenu(TextSpanType.TEXT, this.buildCustomSelectionMenu, TextResponseType.LONG_PRESS, {
          onDisappear: () => {
            console.info(`Custom selection menu callback when closed`);
          },
          onAppear: () => {
            console.info(`Callback when custom selection menu pops up`);
          }
        })
        // When the selected area changes, trigger a callback to update the starting and ending subscripts of the selected area
        .onTextSelectionChange((selectionStart: number, selectionEnd: number) => {
          this.start = selectionStart;
          this.end = selectionEnd;
          console.info(`Text selection area change callback, selectionStart: ${selectionStart}, selectionEnd: ${selectionEnd}`);
        })
        .borderWidth(1)
        .borderColor(Color.Red)
        .width(200)
        .height(100)
      }
      .width('100%')
      .backgroundColor(Color.White)
      .alignItems(HorizontalAlign.Start)
      .padding(25)
    }
    .height('100%')
  }

  @Builder
  buildCustomSelectionMenu() {
    Column() {
      Menu() {
        MenuItemGroup() {
          MenuItem({
            startIcon: $r('app.media.app_icon'),
            content: 'Right Click Menu 1',
            labelInfo: ''
          })
            .onClick(() => { //When clicking on the custom menu, reset the starting and ending subscripts of the selected area
              this.start = -1;
              this.end = -1;
              try {
                this.controller.closeSelectionMenu();
              } catch (error) {
                let err = error as BusinessError;
                hilog.error(0x000, 'TextMenuUnchecked', `err code:${err.code},message${err.message}.`);
              }
            })
          MenuItem({ startIcon: $r('app.media.app_icon'), content: 'Select Mixed Menu 2', labelInfo: '' })
          MenuItem({ startIcon: $r('app.media.app_icon'), content: 'Select Mixed Menu 3', labelInfo: '' })
        }
      }
      .radius($r('sys.float.ohos_id_corner_radius_card'))
      .clip(true)
      .backgroundColor('#F0F0F0')
    }
  }
}
```
