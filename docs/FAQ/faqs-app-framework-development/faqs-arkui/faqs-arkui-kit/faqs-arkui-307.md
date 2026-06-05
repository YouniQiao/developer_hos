---
format: md
title: "如何查看触摸热区范围"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-307
---

通过自定义方式设置responseRegion属性值，参考代码如下：

```
@Entry
@Component
struct TouchTargetExample {
  @State text: string = '';
  @State x: number = 0;
  @State y: number = 0;
  @State regWidth: string = '50%';
  @State regHeight: string = '100%';

  build() {
    Column({ space: 20 }) {
      Text(`{x:0,y:0,width:'50%',height:'100%'}`)
      // The width of the hot zone is half of the button, and there is no response when clicking on the right side
      Button('button1')
        .responseRegion({
          x: this.x,
          y: this.y,
          width: this.regWidth,
          height: this.regHeight
        })
        .onClick(() => {
          this.text = 'button1 clicked';
          console.info('button1 clicked: ' + this.x + ' ' + this.y + ' ' + this.regWidth + ' ' + this.regHeight);
        })

      Text(this.text)
        .margin({ top: 10 })
    }
    .width('100%')
    .margin({ top: 100 })
  }
}
```

**参考链接**

[responseRegion](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-touch-target#responseregion)
