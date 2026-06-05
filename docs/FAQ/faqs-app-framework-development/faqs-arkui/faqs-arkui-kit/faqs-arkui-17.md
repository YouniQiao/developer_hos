---
format: md
title: "如何实现Tabs页签导航栏切换时，下划线也随之滑动"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-17
---

可通过SubTabBarStyle子页签样式实现该效果，具体参考如下代码：

```
@Entry
@Component
struct TabsBarUnderlineSwitching {
  private controller: TabsController = new TabsController();
  @State indicatorColor: Color = Color.Blue;
  @State indicatorWidth: number = 40;
  @State indicatorHeight: number = 5;
  @State indicatorBorderRadius: number = 5;
  @State indicatorSpace: number = 10;
  @State subTabBorderRadius: number = 20;
  @State selectedMode: SelectedMode = SelectedMode.INDICATOR;

  build() {
    Column() {
      Tabs({ barPosition: BarPosition.End, controller: this.controller }) {
        TabContent() {
          Column().width('100%').height('100%').backgroundColor(Color.Pink).borderRadius('12vp')
        }.tabBar(SubTabBarStyle.of('pink')
          .indicator({
            color: this.indicatorColor, // Underline color
            height: this.indicatorHeight, // Underline height
            width: this.indicatorWidth, // Underline width
            borderRadius: this.indicatorBorderRadius, // Underline corner radius
            marginTop: this.indicatorSpace // The spacing between underline and text
          })
          .selectedMode(this.selectedMode)
          .board({ borderRadius: this.subTabBorderRadius })
          .labelStyle({})
        )

        TabContent() {
          Column().width('100%').height('100%').backgroundColor(Color.Yellow).borderRadius('12vp')
        }.tabBar(SubTabBarStyle.of('yellow')
          .indicator({
            color: this.indicatorColor, // Underline color
            height: this.indicatorHeight, // Underline height
            width: this.indicatorWidth, // Underline width
            borderRadius: this.indicatorBorderRadius, // Underline corner radius
            marginTop: this.indicatorSpace // The spacing between underline and text
          })
          .selectedMode(this.selectedMode)
          .board({ borderRadius: this.subTabBorderRadius })
          .labelStyle({})
        )

        TabContent() {
          Column().width('100%').height('100%').backgroundColor(Color.Blue).borderRadius('12vp')
        }.tabBar(SubTabBarStyle.of('blue')
          .indicator({
            color: this.indicatorColor, // Underline color
            height: this.indicatorHeight, // Underline height
            width: this.indicatorWidth, // Underline width
            borderRadius: this.indicatorBorderRadius, // Underline corner radius
            marginTop: this.indicatorSpace // The spacing between underline and text
          })
          .selectedMode(this.selectedMode)
          .board({ borderRadius: this.subTabBorderRadius })
          .labelStyle({})
        )

        TabContent() {
          Column().width('100%').height('100%').backgroundColor(Color.Green).borderRadius('12vp')
        }.tabBar(SubTabBarStyle.of('green')
          .indicator({
            color: this.indicatorColor, // Underline color
            height: this.indicatorHeight, // Underline height
            width: this.indicatorWidth, // Underline width
            borderRadius: this.indicatorBorderRadius, // Underline corner radius
            marginTop: this.indicatorSpace // The spacing between underline and text
          })
          .selectedMode(this.selectedMode)
          .board({ borderRadius: this.subTabBorderRadius })
          .labelStyle({})
        )

        TabContent() {
          Column().width('100%').height('100%').backgroundColor(Color.Gray).borderRadius('12vp')
        }.tabBar(SubTabBarStyle.of('gray')
          .indicator({
            color: this.indicatorColor, // Underline color
            height: this.indicatorHeight, // Underline height
            width: this.indicatorWidth, // Underline width
            borderRadius: this.indicatorBorderRadius, // Underline corner radius
            marginTop: this.indicatorSpace // The spacing between underline and text
          })
          .selectedMode(this.selectedMode)
          .board({ borderRadius: this.subTabBorderRadius })
          .labelStyle({})
        )

        TabContent() {
          Column().width('100%').height('100%').backgroundColor(Color.Orange).borderRadius('12vp')
        }.tabBar(SubTabBarStyle.of('orange')
          .indicator({
            color: this.indicatorColor, // Underline color
            height: this.indicatorHeight, // Underline height
            width: this.indicatorWidth, // Underline width
            borderRadius: this.indicatorBorderRadius, // Underline corner radius
            marginTop: this.indicatorSpace // The spacing between underline and text
          })
          .selectedMode(this.selectedMode)
          .board({ borderRadius: this.subTabBorderRadius })
          .labelStyle({})
        )
      }
      .vertical(false)
      .scrollable(true)
      .fadingEdge(false)
      .barMode(BarMode.Scrollable)
      .barHeight(140)
      .animationDuration(400)
      .onChange((index: number) => {
        console.info(index.toString())
      })
      .backgroundColor(0xF5F5F5)
      .height(320)
    }.width('100%').height(250).padding({ top: '24vp', left: '24vp', right: '24vp' })
  }
}
```

**参考链接**

[TabContent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabcontent)中的子页签样式SubTabBarStyle
