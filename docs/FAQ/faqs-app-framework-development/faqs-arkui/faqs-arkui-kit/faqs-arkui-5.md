---
format: md
title: "如何自定义Tabs页签导航栏及其对齐方式"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-5
---


可以自定义页签，并设置页签的对齐方式。具体操作可参考代码：

```
@Entry
@Component
struct CustomizeTheTabsBarAndItsAlignment {
  @State focusIndex: number = 0;
  private controller: TabsController = new TabsController();
  tabArray = [0, 1];

  // Custom tab
  @Builder
  tabBuilder(tabName: string, tabItem: number, tabIndex: number) {
    Column({ space: 20 }) {
      Text(tabName).fontSize(18)
      Image($r('app.media.startIcon')).width(20).height(20)
    }
    .width(100)
    .height(60)
    .borderRadius({ topLeft: 10, topRight: 10 })
    .onClick(() => {
      this.controller.changeIndex(tabIndex);
      this.focusIndex = tabIndex;
    })
    .backgroundColor(tabIndex === this.focusIndex ? '#ffffffff' : '#ffb7b7b7')
  }

  build() {
    Column() {
      Column() {
        // tab
        Row({ space: 6 }) {
          Scroll() {
            Row() {
              ForEach(this.tabArray, (item: number, index: number) => {
                this.tabBuilder('page' + item, item, index);
              })
            }
            .justifyContent(FlexAlign.Start)
          }
          // Set left alignment
          .align(Alignment.Start)
          .scrollable(ScrollDirection.Horizontal)
          .scrollBar(BarState.Off)
          .width('80%')
          .backgroundColor('#ffb7b7b7')
        }
        .width('100%')
        .backgroundColor('#ffb7b7b7')

        // tabs
        Tabs({ barPosition: BarPosition.Start, controller: this.controller }) {
          ForEach(this.tabArray, (item: number, index: number) => {
            TabContent() {
              Text('I am the page ' + item + ' The content')
                .height(300)
                .width('100%')
                .fontSize(30)
            }
            .backgroundColor(Color.Pink)
          })
        }
        .barHeight(0)
        .animationDuration(100)
        .onContentWillChange((currentIndex, comingIndex) => {
          this.focusIndex = comingIndex;
          console.info('foo change' + this.focusIndex);
          return true;
        })
      }
      .alignItems(HorizontalAlign.Start)
      .width('100%')
    }
    .height('100%')
  }
}
```

**参考链接**

[Tabs](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs)
