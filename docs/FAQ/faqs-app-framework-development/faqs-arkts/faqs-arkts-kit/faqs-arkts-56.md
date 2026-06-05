---
format: md
title: "如何访问类的静态变量和方法"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkts-56
---


在ArkTS中，静态变量和方法属于类自身，无法通过this访问，因为this指向类的实例。 若要在类中访问静态变量和方法，需要使用类名。

```
// Accessing static variables or executing static methods
class TestStatic {
  static aaa: string = '3333';

  static getAAA () {
    // console.log(this.aaa) Static variables cannot be accessed through this and can only be used in static methods
    return TestStatic.aaa;
  }
}
TestStatic.aaa;
```
