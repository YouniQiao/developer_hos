---
title: "如何实现匿名内部类"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkts-140
---

ArkTS不支持匿名类，建议使用嵌套类。匿名类创建的对象类型未知，与ArkTS不支持structural typing和对象字面量的规则冲突。示例如下：

```
class A {
  foo() {
    class B {
      v: number = 123;
    }
    let b = new B();
  }
}
```

或者采用以下写法：

```
export interface AnonymousInnerClass<T> {
  onSuccess: (t: T) => void;
  onFailed: (code: string, reason: string) => void;
}

let AnonymousInnerClassInstance: AnonymousInnerClass<void> = {
  onSuccess: () => {
    console.log('success');
  },
  onFailed: () => {
    console.log('failed');
  }
}
```
