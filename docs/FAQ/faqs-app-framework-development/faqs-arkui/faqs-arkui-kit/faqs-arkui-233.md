---
format: md
title: "如何实现页面加载的loading效果"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-233
upstream_id: FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-233
last_sync: 2026-06-07
sync_hash: 75f6a543
---
使用Stack堆叠组件和LoadingProgress加载组件实现页面首次加载时的等待效果。参考代码如下：

```
@Entry
@Component
struct PageLoading {
  @State isLoading: boolean = true;

  aboutToAppear(): void {
    // Simulate network request operation, request data from the network 3 seconds later, notify the component, and change the list data
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }

  build() {
    Stack() {
      if (this.isLoading) {
        Column() {
          LoadingProgress()
            .color(Color.White)
            .width(80).height(80)
          Text('Effortlessly loading..')
            .fontSize(16)
            .fontColor(Color.White)
        }
        .width('100%')
        .height('100%')
        .backgroundColor('#40000000')
        .justifyContent(FlexAlign.Center)
      } else {
        Column(){
          Text('主页')
        }
      }
    }
    .width('100%')
    .height('100%')
    .backgroundColor(Color.White)
  }
}
```
