---
format: md
title: "如何获取对象的类名"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-kit/faqs-arkts-87
---


获取类的实例，通过constructor的name属性获取类名。

示例如下：

```
class TestClass {
  a: string = 'A';
  b: string = 'B';
}

let testClassObj: TestClass = new TestClass();

@Entry
@Component
struct Index {
  build() {
    Row() {
      Column() {
        Button('get Class Name')
          .onClick(() => {
            console.log('TestClass Name:', testClassObj.constructor.name);
          })
      }
      .width('100%')
    }
    .height('100%')
  }
}
```
