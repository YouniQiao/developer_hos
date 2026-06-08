---
format: md
title: "ArkTS是否支持多继承"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-kit/faqs-arkts-95
upstream_id: FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-kit/faqs-arkts-95
last_sync: 2026-06-07
sync_hash: cb1129d8
upstream_hash: bdcc67cf41e6
---

接口支持多继承，类仅支持单继承。示例如下：

```
class TestClassA {
  address: string = '';
}

class TestClassB {
  name: string = '';
}

// report errors：Classes can only extend a single class.
// class TestClassC extends TestClassA, TestClassB {
// }

interface AreaSize {
  calculateAreaSize(): number;
}

interface Cal {
  Sub(a: number, b: number): number;
}

interface Area extends AreaSize, Cal {
  areaName: string;
  length: number;
  width: number;
}
```
