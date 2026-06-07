---
format: md
title: "Tabs如何设置页面margin，使得边距空白跟随页面滑动"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-442
---


**问题背景**

为Tabs设置了外边距，但在页签滑动时边距没有跟随页面滑动。

**解决措施**

设置页面边距的参数下沉到每个子页面中，参考代码如下：

```
@Entry
@Component
struct SetTabsMarginDemo {
  private tabsController: TabsController = new TabsController()
  @State currentIndex: number = 0;

  @Builder
  TabBarBuilder(title: string, targetIndex: number) {
    Column(){
      Text(title)
        .fontWeight(targetIndex === this.currentIndex ? FontWeight.Bold : FontWeight.Normal).margin({ left: 10, right: 10 })
        .fontColor(targetIndex === this.currentIndex ? Color.Orange : Color.Gray)
        .onClick(() => {
          this.tabsController.changeIndex(targetIndex)
        })
    }
  }

  build() {
    Row() {
      Column() {
        Flex({ direction: FlexDirection.Row }) {
          this.TabBarBuilder('页签1', 0)
          this.TabBarBuilder('页签2', 1)
          this.TabBarBuilder('页签3', 2)
        }

        Tabs({ barPosition: BarPosition.Start, controller: this.tabsController }) {
          TabContent() {
            Column() {
              Text("页签1页面")
            }
            .height('100%')
            .width('100%')
            .backgroundColor(Color.Yellow)
          }
          // The place where the margins are correctly set.
          .margin({left : 10, right :10})

          TabContent() {
            Column() {
              Text("页签2页面")
            }
            .height('100%')
            .width('100%')
            .backgroundColor(Color.Green)
          }
          // The place where the margins are correctly set.
          .margin({left : 10, right :10})

          TabContent() {
            Column() {
              Text("页签3页面")
            }
            .height('100%')
            .width('100%')
            .backgroundColor(Color.Pink)
          }
          // The place where the margins are correctly set.
          .margin({left : 10, right :10})
        }
        // The parameter for adjusting the margins should not be added here, as it may affect the user experience.
        // .margin({left : 10, right :10})
        .onChange((index: number) => {
          this.currentIndex = index;
        })
      }
    }
  }
}
```
