---
title: "如何将文件转换成字符串"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-accessibility-localization/faqs-localization-kit/faqs-localization-13
format: md
upstream_id: FAQ/faqs-app-framework-development/faqs-accessibility-localization/faqs-localization-kit/faqs-localization-13
last_sync: 2026-06-07
sync_hash: b69b16dc
---
1. 获取resources/rawfile目录下对应的rawfile文件内容。
2. 调用util模块的TextDecoder将字节数组解码为字符串。
3. 对Uint8Array进行解码。

参考示例如下：

```
import { util } from '@kit.ArkTS';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct FileToString {
  build() {
    Row() {
      Column() {
        Button('file to string')
          .onClick(() => {
            getContext().resourceManager.getRawFileContent('test.txt').then((value: Uint8Array) => {
              let textDecoder: util.TextDecoder = util.TextDecoder.create(); // Call the TextDecoder class of the til module
              let decodedString: string = textDecoder.decodeToString(value); // 对Uint8Array解码
              let strBase64 = new util.Base64Helper().encodeToStringSync(value); // Convert a Uint8Array to a Base64 string
              console.info('retStr:', decodedString);
              console.info('strBase64:', strBase64);
            }).catch((error: BusinessError) => {
              console.error(`callback getRawFileContent failed, error code: ${error.code}, message: ${error.message}.`);
            });
          })
      }
      .width('100%')
    }
    .height('100%')
  }
}
```

**参考链接**

[getRawFileContent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-resource-manager#getrawfilecontent9)

[TextDecoder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-util#textdecoder)
