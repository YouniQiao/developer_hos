---
format: md
title: "ArkTS类的方法是否支持重载"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-kit/faqs-arkts-45
upstream_id: FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-kit/faqs-arkts-45
last_sync: 2026-06-07
sync_hash: 329e0f11
upstream_hash: 165acd56a55c
---

ArkTS支持TS中的重载，包括多个重载签名及一个实现签名。函数签名仅在编译期进行类型检查，不保留到运行时。

ArkTS不支持多个函数体的重载。示例如下：

```
// declare
function test(param: User): number;
function test(param: number, flag: boolean): number;
// implement
function test(param: User | number, flag?: boolean) {
  if (typeof param === 'number') {
    return param + (flag ? 1 : 0)
  } else {
    return param.age
  }
}
```
