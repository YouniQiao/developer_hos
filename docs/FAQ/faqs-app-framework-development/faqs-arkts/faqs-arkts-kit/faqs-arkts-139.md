---
format: md
title: "对象中函数的this如何指向外层"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-kit/faqs-arkts-139
upstream_id: FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-kit/faqs-arkts-139
last_sync: 2026-06-07
sync_hash: 0606e0ac
---
通过箭头函数实现。参考代码如下：

```
interface T {
  start: () => number
}
@Component
struct PointingOuterLayer {
  @State num: number = 1
  obj: T = {
    start: () => {
      return this.num
    }
  }
```
