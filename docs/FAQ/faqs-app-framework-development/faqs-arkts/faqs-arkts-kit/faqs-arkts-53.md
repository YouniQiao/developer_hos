---
title: ".ets文件和.ts文件的区别及如何互相调用文件中定义的方法"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkts-53
format: md
---


ArkTS基于兼容了TS语法，继承了TS的所有特性，当前，ArkTS在TS的基础上主要扩展了声明式UI能力，让开发者能够以更简洁、更自然的方式开发高性能应用。推荐用ArkTS开发UI相关内容，TS可以用来开发业务逻辑相关内容。

ts文件不支持调用ets文件中定义的方法。

ets调用ts文件中定义的方法，可以使用ES6中import引入及export导出的语法，将ts文件中的方法进行export导出，在ets文件中import引入该方法进行调用。

可以参考如下示例：

```
// Declare and export the method 'test' for external file import calls
export default function test() {
  // to do something
}
```

```
// Introduce the method defined in the ts file
import test from './ExportTest';

@Entry
@Component
struct eventTestExample {
  build() {
    Button('test')
      .onClick(() => {
        test(); // Call the methods defined in the ts file
      })
  }
}
```
