---
format: md
title: "Button组件无法设置字体最大、最小值"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-361
---


Button组件的[labelStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-button#labelstyle10)属性可以设置按钮标签文本和字体的样式。示例代码如下

```
@Entry
@Component
struct FontSizeButtonExample {
  @State text: string = 'hello';
  @State widthShortSize: number = 300;

  build() {
    Row() {
      Button(this.text)
        .width(this.widthShortSize)
        .height(100)
        //// Set the font size range to 20-40vp，Automatically adjust during actual rendering.
        .labelStyle({
          overflow: TextOverflow.Clip,
          maxLines: 1,
          minFontSize: 20,
          maxFontSize: 40,
          font: {
            size: 30,
            weight: FontWeight.Bolder,
            family: 'cursive',
            style: FontStyle.Italic
          }
        })
    }
  }
}
```

**参考链接**

[Button](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-button)
