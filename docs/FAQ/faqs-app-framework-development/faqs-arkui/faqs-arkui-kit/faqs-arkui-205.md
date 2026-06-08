---
format: md
title: "如何实现Tabs组件的TabBar居左对齐"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-205
upstream_id: FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-205
last_sync: 2026-06-07
sync_hash: 325374b7
---
系统提供的Tabs组件的TabBar仅支持居中对齐。可以通过自定义方式实现：使用Scroll和Row组件实现一个页签，在onClick事件中通过修改索引值和Tabs组件的索引联动，实现切换效果，同时将Tabs的barHeight置为0。具体实现可参考如下示例代码：

```
// xxx.ets
@Entry
@Component
struct TabsExample {
  @State tabArray: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  @State focusIndex: number = 0;
  private controller: TabsController = new TabsController();

  build() {
    Column() {
      // Use custom tab components
      Scroll() {
        Row() {
          ForEach(this.tabArray, (item: number, index: number) => {
            Row({ space: 20 }) {
              Text('tab' + item)
                .fontWeight(index === this.focusIndex ? FontWeight.Bold : FontWeight.Normal)
            }
            .padding({ left: 10, right: 10 })
            .onClick(() => {
              this.controller.changeIndex(index);
              this.focusIndex = index;
            })
          })
        }
      }
      .align(Alignment.Start)
      .scrollable(ScrollDirection.Horizontal)
      .scrollBar(BarState.Off)
      .width('100%')

      //The tabs component hides the tab bar
      Tabs({ barPosition: BarPosition.Start, controller: this.controller }) {
        ForEach(this.tabArray, (item: number, index: number) => {
          TabContent() {
            Text('I am the page ' + item + " the content")
              .fontSize(30)
          }
        })
      }.barHeight(0)
    }
    .height('100%')
    .width('100%')
  }
}
```
