---
title: "如何避免Badge在数量显示切换时的Image闪烁问题"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-352
---

在 onComplete 回调事件中处理 Badge 数量的逻辑，图片数据加载成功和解码成功时均触发该回调。示例代码如下：

```
@Entry
@Component
struct BadgeDemo {
  @State message: string = 'Hello World';
  @State sizes: string = '0';
  @State showCountBadge: boolean = false;

  build() {
    Row() {
      Text(this.message)
        .fontSize(50)
        .fontWeight(FontWeight.Bold)
        .onClick(() => {
          this.showCountBadge = !this.showCountBadge; // change show status
        })
      Stack() {
        Badge({
          value: '',
          position: {
            x: 40,
            y: 0
          },
          style: {
            badgeSize: 15,
            badgeColor: Color.Red
          }
        }) {
          Image($r('app.media.startIcon'))
            .width(50)
            .height(50)
        }
        .visibility(this.showCountBadge ? Visibility.Visible : Visibility.None)

        Badge({
          count: 98,
          maxCount: 99,
          position: { x: 30, y: 0 },
          style: {
            fontSize: 15,
            badgeSize: 15,
            badgeColor: Color.Red
          }
        }) {
          Image($r('app.media.startIcon'))
            .width(50)
            .height(50)
        }
        .visibility(this.showCountBadge ? Visibility.None : Visibility.Visible)
      }
    }
    .height('100%')
  }
}
```
