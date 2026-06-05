---
format: md
title: "如何在ArkTS使用Reflect正确绑定this指针"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkts-113
---

参考以下示例代码，注意只有对象的get/set方法才能绑定this指针。

```
class ReflectClass {
  private a = 'a';

  get getA() {
    return () => {
      return this.a;
    };
  }

  set setA(a: string) {
    this.a = a;
  }
}

function testInvoke() {
  const reflectClass = new ReflectClass();
  const fn: Function = Reflect.get(reflectClass, 'getA', reflectClass);
  console.info(fn());
}

@Entry
@Component
struct ReflectBoundThis {
  aboutToAppear(): void {
    testInvoke();
  }

  build() {
  }
}
```
