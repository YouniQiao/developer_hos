---
title: "当父组件绑定了onTouch，其子组件Button绑定了onClick，如何做到点击Button只响应Button的onClick，而不用响应父组件的onTouch"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-174
---

可以在Button组件中绑定onTouch，并在onTouch中使用stopPropagation()阻止事件冒泡到父组件。参考代码如下：

```
@Entry
@Component
struct Index {

  build() {
    Row() {
      Button('Click on me')
        .width(100)
        .backgroundColor('#f00')
        .onClick(() => {
          console.log('Button onClick');
        })
        .onTouch((event) => {
          console.log('Button onTouch');
          event.stopPropagation();
        })
    }
    .onTouch(() => {
      console.log('Row onTouch');
    })
  }
}
```
