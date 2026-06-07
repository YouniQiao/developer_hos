---
title: "编译告警“The re-export name 'xx' need to be marked as type”"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-3
format: md
---


**问题现象**

升级DevEco Studio至3.1 Beta2 Release版本后，API 9的Stage工程编译时出现告警，提示“The re-export name 'T' need to be marked as type, please use 'export type'”。

![](./img/628cfb75.png)

**解决措施**

DevEco Studio 3.1 Beta2 Release版本默认启用模块化编译。如果应用中存在re-export语法，将会触发告警。反例如下：

```
  // index.ets
  import {test} from "./test"
  export {test}
  let b : test = {a : 'index'}

  // test.ets
  export interface test {
    a: string
  }
  let obj : test = {a : 'string'}
```

由于ets/ts模块声明的类型符号在编译为js模块时会被消除，而import语句本身会被保留。如果未使用`type`显式声明类型引用，会导致运行时找不到对应的类型符号。

如编译构建期间提示上述告警信息，请根据提示信息进行以下修改：添加type显式声明类型符号的引用，以使编译转换后的JS模块能够消除类型符号的引用。

```
import type {test} from "./test"  //Here, add a type declaration
export {test}
let b : test = {a : 'index'}
```

```
// test.ets
export interface test {
  a: string
}
let obj : test = {a : 'string'}
```
