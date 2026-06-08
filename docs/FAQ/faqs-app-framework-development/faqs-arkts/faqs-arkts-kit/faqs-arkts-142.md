---
format: md
title: "如何在调用处实现接口中的方法"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-kit/faqs-arkts-142
upstream_id: FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-kit/faqs-arkts-142
last_sync: 2026-06-07
sync_hash: 120045f6
upstream_hash: 1de78f27a1f0
---

示例代码如下：

```
// The custom interface is as follows:
export interface OnTrustListener {
  OnSuccess: (data: string) => void;
  OnError: (error: string) => void;
}

@Component
export struct InterfaceUse {
  private listener: OnTrustListener = {
    OnSuccess: (data: string) => {
      console.info('data is:' + data);
    },
    OnError: (error: string) => {
      console.info('error is:' + error);
    }
  };

  build() {
    Column() {
      Button('click me')
        .onClick((event: ClickEvent) => {
          this.listener.OnSuccess('success');
        })
    }
    .width('100%')
    .height('100%')
  }
}
```
