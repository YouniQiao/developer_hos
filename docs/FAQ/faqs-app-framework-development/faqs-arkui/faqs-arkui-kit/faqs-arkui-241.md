---
format: md
title: "如何让Grid组件在高度不确定的情况下，实现自适应高度"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-241
---


**问题现象**

页面中使用Grid组件，因为GridItem数量不固定，且不允许滚动，理想中Grid组件高度会被GridItem内容自动撑起，实际体验中发现：

1. Grid必须显式设置固定height属性，这种由于GridItem数量不固定，且不允许出现滚动，不满足需求；

2. 设置maxCount属性后，可以实现高度被撑起，但与文档的解释好像不符，且GridItem数量不固定，所以也不满足需求；

3. Grid的height设置为auto时也不会被自动撑起。

**可能原因**

Grid不会自适应子节点的高度，不设置高度就是和父组件一样高。

**解决措施**

目前有两个替代方案：

1.使用list替代，设置其lanes属性进行分列。

2.可以动态计算GridItem高度，然后给Grid的height设置高度。

参考代码如下：

```
interface Item {
  text: string
  img: Resource
}

@Entry
@Component
struct Index {
  data: Item[] = [
    { text: 'aaa', img: $r('app.media.app_icon') },
    { text: 'bbb', img: $r('app.media.app_icon') },
    { text: 'ccc', img: $r('app.media.app_icon') },
    { text: 'ddd', img: $r('app.media.app_icon') },
    { text: 'eee', img: $r('app.media.app_icon') },
    { text: 'fff', img: $r('app.media.app_icon') },
    { text: 'ggg', img: $r('app.media.app_icon') },
    { text: 'hhh', img: $r('app.media.app_icon') },
    { text: 'jjj', img: $r('app.media.app_icon') },
    { text: 'kkk', img: $r('app.media.app_icon') }]
  // Calculate the number of rows in the grid
  getCategoryRowCount() {
    return Math.ceil(this.data.length / 4);
  }
  // Calculate the height of the grid based on the height of the item
  getCategoryViewHeight() {
    return `${68.33 * this.getCategoryRowCount()}vp`;
  }

  build() {
    Column() {
      Grid() {
        ForEach(this.data, (item: Item) => {
          GridItem() {
            Column() {
              Image(item.img)
                .width(40)
                .height(40)
              Text(item.text)
                .margin({ top: 2 })
                .fontSize(14)
                .textAlign(TextAlign.Center)
            }
          }
        }, (item: Item) => item.text)
      }
      .height(this.getCategoryViewHeight())
      .columnsTemplate('1fr 1fr 1fr 1fr')
      .columnsGap(10)
      .rowsGap(10)
      .margin({ top: 10 })
    }
    .padding(10)
    .width('100%')
  }
}
```
