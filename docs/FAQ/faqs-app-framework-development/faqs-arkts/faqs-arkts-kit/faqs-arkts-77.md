---
title: "如何在ArkTS中实现运行时注解的能力"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkts-77
---

可以使用TS三方库reflect-metadata获得类似Java运行时注解的功能。参考[reflect-metadata](https://gitcode.com/openharmony-tpc/openharmony_tpc_samples/tree/master/reflect-metadata#https://gitee.com/openharmony-tpc/docs/blob/master/OpenHarmony_har_usage.md)

reflect-metadata提供的装饰器允许对类、属性和方法进行标记，并提供了接口以在运行时获取这些标记信息。

```
import "reflect-metadata";

// The ability of third-party packaging is exposed in Reflect
@Reflect.metadata("TargetClass", 'classData')
  // Tag class, key is "targetClass", data is classData
class MyClass {
  @Reflect.metadata("TargetMethod", 'methodData')
  // Tag method, key is' Target Method ', data is' methodData'
  myMethod() {
  }

  @Reflect.metadata("Static", 'staticData')
  static invoke() {
  }
}

// Retrieve tag information at runtime
console.info(Reflect.getMetadata("TargetClass", MyClass)); //classData
console.info(Reflect.getMetadata("TargetMethod", new MyClass(), "myMethod")); //methodData
console.info(Reflect.getMetadata("Static", MyClass, "invoke")); // staticData
```
