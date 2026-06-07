---
format: md
title: "List的下拉加载如何回滚到当前展示位置"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-268
---


**需求描述：**

List组件顶部下拉刷新时，期望数据加载后仍保持刷新前可见的首项元素位置。

**实现方法**：

可以给List添加scroller控制器，通过控制器将列表滚动回刷新前的位置this.scroller.scrollToIndex，示例代码如下：

```
@Entry
@Component
struct RefreshDemo {
  @State isRefreshing: boolean = false;
  @State arr: String[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  // Used to control the scrolling position of the list and maintain consistency of the view after refreshing
  private listScroller: Scroller = new Scroller();

  build() {
    Column() {
      Refresh({ refreshing: $$this.isRefreshing }) {
        List({ scroller: this.listScroller, space: 10 }) {
          ForEach(this.arr, (item: string) => {
            ListItem() {
              Text(item)
                .width('100%')
                .height(100)
                .textAlign(TextAlign.Center)
                .backgroundColor(Color.Grey)
            }
          }, (item: string) => item)
        }
        .onScrollIndex((first: number) => {
          console.info(first.toString());
        })
        .width('100%')
        .height('100%')
      }
      .onRefreshing(() => {
        setTimeout(() => {
          this.isRefreshing = false;
        }, 2000)
        let originalCount = this.arr.length;
        this.arr.unshift('11');
        this.arr.unshift('12');
        this.listScroller.scrollToIndex(this.arr.length - originalCount);
      })
    }
  }
}
```
