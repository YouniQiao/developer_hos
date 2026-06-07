---
title: "如何指定对象某些属性参与序列化"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-kit/faqs-arkts-128
format: md
---


可以通过[JSON.stringify()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-json#jsonstringify)方法实现，stringify(value: Object, replacer?: (number | string)[] | null, space?: string | number): string中，当replacer为数组时，只有包含在这个数组中的属性名才会被序列化到最终的JSON字符串中；当参数为null或者未提供时，则对象所有的属性都会被序列化。

示例代码参考如下：

```
import { JSON } from '@kit.ArkTS';

interface Person {
  name: string;
  age: number;
  city: string;
}

let obj: Person = { name: 'John', age: 30, city: 'ChongQing' };

@Entry
@Component
struct JSONDemo {
  @State str: string = 'to json';

  build() {
    Row() {
      Column() {
        Button(this.str)
          .onClick(() => {
            let jsonStr1 = JSON.stringify(obj); // All attributes are serialized
            console.info('jsonStr1：', jsonStr1); // jsonStr1： {"name":"John","age":30,"city":"ChongQing"}
            let jsonStr2 = JSON.stringify(obj, ['name']); // Specify the name attribute and serialize it
            console.info('jsonStr2：', jsonStr2); // jsonStr2： {"name":"John"}
          })
      }
      .width('100%')
    }
    .height('100%')
  }
}
```
