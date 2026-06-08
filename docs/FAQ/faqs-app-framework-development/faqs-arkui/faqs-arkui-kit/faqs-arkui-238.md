---
format: md
title: "在屏幕底部的组件的响应区域是否存在遮挡"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-238
upstream_id: FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-238
last_sync: 2026-06-07
sync_hash: 9996eab7
---
**问题现象**

创建窗口并加载自定义键盘后，发现底部按钮下半部分无法响应点击事件。

**解决措施**

底部遮挡区域的高度为20像素，可以通过on('avoidAreaChange')事件获取。开发者可以定义一个点击区域来测试点击事件是否能够触发。以下为代码示例：

```
@Entry
@Component
struct Index {
  build() {
    Column() {
      Column() {
      }
      .width('100%')
      .height(5) // 5px click range
      .backgroundColor(Color.Red)
      .onClick(() => {
        console.log("Trigger click event")
      })
    }
    .height('100%')
    .width('100%')
    .justifyContent(FlexAlign.End)
  }
}
```

**参考链接**

[on('avoidAreaChange')](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#onavoidareachange9)
