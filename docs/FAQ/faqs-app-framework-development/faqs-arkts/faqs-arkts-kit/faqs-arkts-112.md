---
format: md
title: "如何判断对象的类型"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-kit/faqs-arkts-112
upstream_id: FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-kit/faqs-arkts-112
last_sync: 2026-06-07
sync_hash: b79945cc
---
在代码开发中，如果需要对对象的类型做判断，调用不同类的方法，可以使用instanceof进行判断来得知对象的类型，参考代码如下：

```
class BaseClass {
  value: number = 0;

  printf() {
    console.info('base value:' + this.value);
  }

  setValue(val: number) {
    this.value = val;
  }
}

class AClass extends BaseClass {
  value: number = 1;

  setValue(val: number) {
    this.value = val;
  }

  getValue(): number {
    return this.value;
  }
}

class BClass extends BaseClass {
  value: number = 2;

  setValue(val: number) {
    this.value = val;
  }
}

function printValue(base: BaseClass) {
  base.printf();
  let flag = base instanceof AClass;
  console.info('printValue flag:' + flag);
  if (flag) {
    let val = (base as AClass).getValue();
    console.info('printValue val:' + val);
  }
}

@Entry
@Component
struct DetermineObjectType {
  aboutToAppear(): void {
    printValue(new AClass());
    printValue(new BClass());
  }

  build() {
  }
}
```
