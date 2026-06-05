---
format: md
title: "对象反序列化时number类型丢失精度如何解决"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkts-129
---


1. 通过[JSON.parse()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-json#jsonparse)解析，可以通过传入options参数，指定options为bigIntMode: JSON.BigIntMode.PARSE\_AS\_BIGINT，来处理BigInt的模式。

   示例代码参考如下：

   ```
   import { JSON } from '@kit.ArkTS';

   let options: JSON.ParseOptions = {
     bigIntMode: JSON.BigIntMode.PARSE_AS_BIGINT,
   }
   let numberText = '{"largeNumber":1122333444455556666677777888889}';
   let numberObj = JSON.parse(numberText, (key: string, value: Object | undefined | null): Object | undefined | null => {
     if (key === "largeNumber") {
       return value;
     }
     return value;
   }, options) as Object;

   @Entry
   @Component
   struct BigIntDemo {
     @State str: string = 'bigint num';

     build() {
       Row() {
         Column() {
           Button(this.str)
             .onClick(() => {
               console.info((numberObj as object)?.["largeNumber"]); // 1122333444455556666677777888889
             })
         }
         .width('100%')
       }
       .height('100%')
     }
   }
   ```
2. 使用三方库[json-bigint](https://ohpm.openharmony.cn/#/cn/detail/@ohmos%2Fjson-bigint)处理。
