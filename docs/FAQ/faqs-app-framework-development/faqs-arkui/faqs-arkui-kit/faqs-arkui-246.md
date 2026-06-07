---
format: md
title: "如何实现背景跟随文字大小改变"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-246
---


可以通过文字长度自动调整宽度。参考代码如下：

```
@Entry
@Component
struct Index {
  @State message: string = 'Hello World';

  build() {
    Column() {
      Row() {
        Text(this.message)
      }
      .backgroundImage($r('app.media.startIcon'))
      .backgroundImageSize({
        width: '100%',
        height: '100%'
      })
      .height(100)
      .border({
        width: 3,
        color: Color.Pink
      })

      TextInput()
        .onChange((value: string) => {
          this.message = value;
        })
    }
  }
}
```
