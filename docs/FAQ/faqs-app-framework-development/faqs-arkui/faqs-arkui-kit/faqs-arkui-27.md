---
format: md
title: "List组件如何实现多列效果"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-27
---


设置[List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)组件的lanes属性，以实现交叉轴上的多列布局。示例代码如下：

```
// xxx.ets
@Entry
@Component
struct ListExample {
  @State arr: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  build() {
    Column() {
      List() {
        ForEach(this.arr, (item: string) => {
          ListItem() {
            Row() {
              Text(item)
                .fontColor(Color.Red)
                .fontSize(40)
            }
          }
          .width('100%')
          .border({
            width: 1,
            color: Color.Black,
            radius: 5
          })
        })
      }
      .lanes(3)
      .alignListItem(ListItemAlign.Center)
    }
    .padding({ top: 30 })
  }
}
```

效果如图所示：

![](./img/e99526e2.png "点击放大")
