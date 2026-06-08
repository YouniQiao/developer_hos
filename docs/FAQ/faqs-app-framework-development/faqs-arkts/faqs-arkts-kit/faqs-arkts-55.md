---
format: md
title: "ArkTS中this的常用场景及使用"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-kit/faqs-arkts-55
upstream_id: FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-kit/faqs-arkts-55
last_sync: 2026-06-07
sync_hash: a8d19ca5
---
在ArkTS中，this 用于类中访问对象属性和方法，或在自定义组件的回调中使用UIContext.getHostContext(this)。

* 类中使用 this，this 实际指向实例化后的对象。

  ```
  class UserInfo {
    name: string = 'xxx';

    getName() {
      return this.name;
    }
  }

  const user: UserInfo = new UserInfo();
  ```
* 在自定义组件中使用 this，通常是在回调事件中，此时 this 指向自定义组件本身。常用的方法是通过UIContext.getHostContext(this)获取上下文。
