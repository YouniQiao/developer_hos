---
title: "如何实现字符串编解码"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkts-19
---

TextEncoder用于将字符串编码为字节数组，支持utf-8、utf-16le/be等编码格式。

TextDecoder用于将字节数组解码为字符串，支持多种编码格式，如utf-8、utf-16le/be、iso-8859和windows-1251。

以下示例代码展示了如何使用TextEncoder和TextDecoder进行字符串编解码：

```
import { util } from '@kit.ArkTS';
// Create Encoder
let textEncoder:util.TextEncoder = new util.TextEncoder('gbk');
let buffer:ArrayBuffer = new ArrayBuffer(20);
let encodeResult:Uint8Array = new Uint8Array(buffer);

// code
encodeResult = textEncoder.encodeInto('hello');
console.info('Encode result: ', encodeResult);

// Create decoder
let textDecoder = util.TextDecoder.create('gbk');

// decode
let decodeResult = textDecoder.decodeToString(encodeResult);
console.info('Decode result: ', decodeResult);
```

**参考链接**

[TextEncoder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-util#textencoder)、[TextDecoder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-util#textdecoder)
