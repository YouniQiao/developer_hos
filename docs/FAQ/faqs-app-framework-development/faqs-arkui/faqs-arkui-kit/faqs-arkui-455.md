---
format: md
title: "如何控制Tabs内容页单向滑动切换"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-455
---


**背景知识**

[scrollable](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs#scrollable)：设置是否可以通过滑动页面进行Tab页面切换，默认支持向左向右两个方向滑动。

gesture：通用属性手势绑定，可绑定[TapGesture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-tapgesture)、[LongPressGesture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-longpressgesture)、[PanGesture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-pangesture)、[PinchGesture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-pinchgesture)、[RotationGesture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-rotationgesture)、[SwipeGesture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-swipegesture)等手势。

**解决方案**

1. 创建活动手势的[PanGestureOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-pangesture#pangestureoptions)，指定滑动方向为向右滑动。

   panOption: PanGestureOptions = new PanGestureOptions(\{ direction: PanDirection.Right \})
2. 给除第一个tab外，其他每个tab的内容父组件绑定gesture滑动手势，指定为第一步创建的panOption。

   .gesture(PanGesture(this.panOption))

示例代码如下：

```
@Component
struct TabsPageSwitching {
  @State currentIndex: number = 0;
  private controller: TabsController = new TabsController();
  private panOption: PanGestureOptions = new PanGestureOptions({ direction: PanDirection.Right });

  @Builder
  tabBuilder(index: number, name: string) {
    Column() {
      Text(name)
        .fontSize(16)
        .lineHeight(22)
        .margin({ top: 16, bottom: 16 })
        .fontColor(this.currentIndex === index ? Color.Blue : Color.Black)

      Divider()
        .strokeWidth(2)
        .color(Color.Blue)
        .opacity(this.currentIndex === index ? 1 : 0)
    }
    .width('100%')
  }

  build() {
    Column() {
      Tabs({ barPosition: BarPosition.Start, index: this.currentIndex, controller: this.controller }) {
        TabContent() {
          Column()
            .width('100%')
            .height('100%')
            .backgroundColor(Color.Green)
        }
        .tabBar(this.tabBuilder(0, 'Tab1'))

        TabContent() {
          Column()
            .width('100%')
            .height('100%')
            .backgroundColor(Color.Pink)
            .gesture(PanGesture(this.panOption))
        }
        .tabBar(this.tabBuilder(1, 'Tab2'))

        TabContent() {
          Column()
            .width('100%')
            .height('100%')
            .backgroundColor(Color.Orange)
            .gesture(PanGesture(this.panOption))
        }
        .tabBar(this.tabBuilder(2, 'Tab3'))
      }
      .vertical(false)
      .barMode(BarMode.Fixed)
      .barWidth(360)
      .barHeight(56)
      .animationDuration(200)
      .onChange((index: number) => {
        this.currentIndex = index;
      })
      .width('100%')
      .height(296)
      .margin({ top: 52 })
    }
    .width('100%')
  }
}
```
