---
format: md
title: "Scroll嵌套List时如何让List和Scroll一起滚动"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-295
upstream_id: FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-295
last_sync: 2026-06-07
sync_hash: 47c61d8c
---
Scroll嵌套List的时候，如果List默认不设置高度是会默认全部展开的，可以实现Scroll滚动整个布局的效果，但是要注意这样会失去懒加载效果，推荐使用List组件的nestedScroll属性来实现嵌套滚动效果。

示例代码如下：

```
@Component
export struct ScrollNestingList {
  build() {
    Scroll() {
      Column() {
        Text('This is the title')
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
        List() {
          ForEach(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], (item: string) => {
            ListItem() {
              Text(item)
                .fontSize(50)
                .height(150)
            }
          }, (item: string) => item)
        }
        .nestedScroll({
          scrollForward: NestedScrollMode.PARENT_FIRST, // Triggering the parent scroll first when scrolling down
          scrollBackward: NestedScrollMode.SELF_FIRST  // When scrolling up, the current List is triggered first
        })
        .divider({
          strokeWidth: 1,
          color: Color.Gray
        })
        .edgeEffect(EdgeEffect.None)
        .height('100%')
        .width('100%')
      }
    }
    .width('100%')
    .height('100%')
  }
}
```
