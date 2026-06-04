---
title: "如何使用Swiper组件实现下拉刷新"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-251
---

Swiper组件用于创建滑块视图容器，可以使用Refresh组件实现下拉刷新效果。

```
@Entry
@Component
struct SwiperItemLeak {
  @State isStopSwiperSlide: boolean = false;
  @State positionY: number = 0;
  private swiperController: SwiperController = new SwiperController();
  @State curSwiperIndex: number = 0;
  private list: number[] = [];

  aboutToAppear(): void {
    for (let i = 1; i <= 10; i++) {
      this.list.push(i);
    }
  }

  build() {
    Refresh({ refreshing: $$this.isStopSwiperSlide}) {
      Swiper(this.swiperController) {
        ForEach(this.list, (item: number) => {
          Text(item.toString())
            .width('100%')
            .height('100%')
            .backgroundColor(0xAFEEEE * ((item + 1) / 0x0f))
            .textAlign(TextAlign.Center)
            .fontSize(30)
        },(item: number) => JSON.stringify(item))
      }
      .vertical(true)
      .width('100%')
      .height('100%')
      .cachedCount(3)
      .index(0)
      .autoPlay(false)
      .indicator(false)
      .effectMode(EdgeEffect.None)
      .loop(false)
      .duration(100)
      .disableSwipe(this.isStopSwiperSlide)
      .displayCount(1)
      .itemSpace(0)
      .curve(Curve.Linear)
      .backgroundColor(Color.Red)
      .position({ y: this.positionY })
      .onChange((index: number) => {
        this.curSwiperIndex = index;
      })
    }
    .onRefreshing(() => {
      setTimeout(() => {
        this.isStopSwiperSlide = false
      }, 2000)
    })
    .backgroundColor(0x89CFF0)
    .refreshOffset(64)
    .pullToRefresh(true)
    .width('100%')
    .height('100%')
  }
}
```

**参考链接**

[Refresh](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-refresh)
