---
title: "绑定类型的组件和ForEach的正确连用方式"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-311
---

**问题现象**

bindSheet和ForEach合用的问题，$$this.isShow会弹出两次半模态，如果是this.isShow，则半模态弹出的次数是数组的长度数，如何确保ForEach中每个item的点击事件仅触发对应项的弹窗显示，而不影响其他项。

**解决措施**

给每一个弹窗都绑定一个@State修饰的变量。

参考代码如下：

```
@Entry
@Component
export struct BindSheetAndForEach {
  @State isShow: boolean = false;
  @State arr: number[] = [1, 2, 3, 4];
  @State isSheetVisible: Array<boolean> = new Array<boolean>(this.arr.length).fill(false);

  @Builder
  myBuilder() {
    Column() {
      Button('content1')
        .margin(10)
        .fontSize(20)
    }
    .width('100%')
  }

  // Each array item corresponds to an independent pop-up window displaying the status, which is index bound
  build() {
    Column() {
      ForEach(this.arr, (item: number, idx: number) => {
        Row() {
          Text('item')
          Button('Bullet Frame')
            .onClick(() => {
              this.isSheetVisible[idx] = true;
            })
            .fontSize(15)
            .margin(10)
            .bindSheet(this.isSheetVisible[idx], this.myBuilder(), {
              backgroundColor: Color.Gray,
              height: SheetSize.MEDIUM,
              showClose: true,
              onWillDisappear: () => {
                this.isSheetVisible[idx] = false;
              }
            })
          Checkbox()
        }
        .border({ width: 1, radius: 5 })
      })
    }
    .justifyContent(FlexAlign.Start)
    .width('100%')
    .height('100%')
  }
}
```
