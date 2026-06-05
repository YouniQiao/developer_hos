---
format: md
title: "如何处理大整数"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkts-104
---


使用BigInt来处理大整数。

BigInt可以表示任意大小的整数。使用BigInt时，在整数字面量后面添加n后缀或使用BigInt()构造函数。

示例如下：

```
@Entry
@Component
struct BigIntNum {
  build() {
    Row() {
      Column() {
        Button('BigInt num')
          .onClick(() => {
            let bigIntNum: bigint = 12345678901234567890n; // Add n suffix after integer
            let anotherBigInt: bigint = BigInt(9007199254740992); // Use BigInt() constructor
            let sumBigInt: bigint = bigIntNum + anotherBigInt;
            console.info('bigIntNum:' + bigIntNum);
            console.info('anotherBigInt:' + anotherBigInt);
            console.info('bigIntNum + anotherBigInt:' + sumBigInt);
          })
      }
      .width('100%')
    }
    .height('100%')
  }
}
```
