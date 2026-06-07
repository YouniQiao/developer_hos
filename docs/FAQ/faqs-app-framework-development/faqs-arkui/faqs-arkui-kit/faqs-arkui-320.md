---
format: md
title: "如何解决滚动类容器的滚动事件和手势之间的冲突"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-320
---


可以通过添加并行手势绑定方法[parallelGesture](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-binding#parallelgesture并行手势绑定方法)来处理，参考代码如下：

```
@Entry
@Component
struct ScrollAndGesture {
  scroller: Scroller = new Scroller();
  private arr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  private panGestureOptions: PanGestureOptions = new PanGestureOptions({ direction: PanDirection.Up | PanDirection.Down });

  build() {
    Stack({ alignContent: Alignment.TopStart }) {
      Scroll(this.scroller) {
        Column() {
          ForEach(this.arr, (item: number) => {
            Text(item.toString())
              .width('90%')
              .height(150)
              .backgroundColor(0xFFFFFF)
              .borderRadius(15)
              .fontSize(16)
              .textAlign(TextAlign.Center)
              .margin({ top: 10 })
          }, (item: string) => item)
        }.width('100%')
      }
      .scrollable(ScrollDirection.Vertical) // Rolling direction vertically
      .scrollBar(BarState.On) // Scroll bar permanent display
      .scrollBarColor(Color.Gray) // Scroll bar color
      .scrollBarWidth(10) // Scroll bar width
      .friction(0.6)
      .edgeEffect(EdgeEffect.None)
      .onWillScroll((xOffset: number, yOffset: number) => {
        console.info(xOffset + ' ' + yOffset);
      })
      .onScrollEdge((side: Edge) => {
        console.info('To the edge');
      })
      .onScrollStop(() => {
        console.info('Scroll Stop');
      })
    }

    .parallelGesture(
      PanGesture(this.panGestureOptions)
        .onActionStart((event?: GestureEvent) => {
          console.info('start',event);
        })
        .onActionUpdate((event?: GestureEvent) => {
          if (event) {
            console.info('event',event);
          }
        })
        .onActionEnd(() => {
          console.info('end');
        })
    )
    .width('100%')
    .height('100%')
    .backgroundColor(0xDCDCDC)
  }
}
```
