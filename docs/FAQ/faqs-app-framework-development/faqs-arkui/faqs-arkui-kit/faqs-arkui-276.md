---
format: md
title: "如何实现List内拖拽交换子组件位置"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-276
---


1. 在onItemDragStart回调中设置拖拽过程中显示的内容。
2. 在onItemDrop中通过itemIndex获取拖拽起始位置，insertIndex获取目标位置，并在onItemDrop中调用changeListItemIndex函数交换数组中的元素位置。

参考如下示例：

```
@Entry
@Component
struct Index {
  @State listArr: string[] = [];

  @Builder
  textItemBuilder(text: string) {
    Column() {
      Text(text)
        .fontSize(16)
        .backgroundColor(0xDCDCDC)
        .width(80)
        .height(80)
        .textAlign(TextAlign.Center)
    }
  }

  aboutToAppear() {
    for (let i = 0; i < 16; i++) {
      this.listArr.push(i + '');
    }
  }

  // Swap the position of listItem in the listArr array
  changeListItemIndex(index1: number, index2: number) {
    let tempItem = this.listArr[index1];
    this.listArr[index1] = this.listArr[index2];
    this.listArr[index2] = tempItem;
  }

  build() {
    Column() {
      List() {
        ForEach(this.listArr, (item: string) => {
          ListItem() {
            Text(item)
          }
          .width(80)
          .height(80)
          .backgroundColor(Color.White)
          .borderRadius(4)
          .margin({ top: 10 })
        }, (item: string) => item)
      }
      .width('100%')
      .height(500)
      .lanes({ minLength: 80, maxLength: 80 })
      .alignListItem(ListItemAlign.Center)
      .onItemDragStart((event: ItemDragInfo, index: number) => {
        return this.textItemBuilder(this.listArr[index]);
      })
      .onItemDrop((event: ItemDragInfo, itemIndex: number, insertIndex: number, isSuccess: boolean) => {
        if (!isSuccess || insertIndex < 0 || insertIndex >= this.listArr.length) {
          return;
        }
        this.changeListItemIndex(itemIndex, insertIndex);
      })
    }
    .width('100%')
    .height('100%')
    .backgroundColor(0xDCDCDC)
  }
}
```
