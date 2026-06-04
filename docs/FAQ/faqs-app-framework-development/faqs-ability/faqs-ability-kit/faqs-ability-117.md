---
title: "HarmonyOS Next系统属于大端还是小端"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-ability-117
---

属于小端序，可以通过以下代码验证：

```
@Entry
@Component
struct IndexTest {
  @State message: string = 'Hello World';

  isLittleEndian(): boolean {
    const buffer = new ArrayBuffer(2);
    const uint8Array = new Uint8Array(buffer);
    const uint16Array = new Uint16Array(buffer);
    // Write 0xAA and 0xBB into the buffer
    uint8Array[0] = 0xAA;
    uint8Array[1] = 0xBB;
    // If read in small order, 0xBBAA will be interpreted as 48042
    // If read in big endian order, 0xAABB will be interpreted as 43707
    return uint16Array[0] === 0xBBAA;
  }

  aboutToAppear() {
    if (this.isLittleEndian()) {
      console.log('Small end');
    } else {
      console.log('Big end');
    }
  }

  build() {
    RelativeContainer() {
      Text(this.message)
        .id('IndexTest')
        .fontSize(50)
        .fontWeight(FontWeight.Bold)
        .alignRules({
          center: { anchor: '__container__', align: VerticalAlign.Center },
          middle: { anchor: '__container__', align: HorizontalAlign.Center }
        })
    }
    .height('100%')
    .width('100%')
  }
}
```
