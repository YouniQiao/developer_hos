---
title: "如何读取rawfile中的xml文件并转化为string类型"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-accessibility-localization/faqs-localization-kit/faqs-localization-3
format: md
upstream_id: FAQ/faqs-app-framework-development/faqs-accessibility-localization/faqs-localization-kit/faqs-localization-3
last_sync: 2026-06-07
sync_hash: 3dbd18dc
---
使用resourceManager的getRawFileContent接口获取xml数据。使用util工具函数中的decodeToString接口将数据转化为string类型。

参考代码如下：

```
import { BusinessError } from '@kit.BasicServicesKit';
import { util } from '@kit.ArkTS';

// In the utility class, retrieve the Context from the Entry Ability and save it to AppStore, then use AppStore to retrieve it in the utility class
let context = AppStorage.get("context") as UIContext;

try {
  context.getHostContext()!.resourceManager.getRawFileContent('test.xml', (error, value) => {
    if (error != null) {
      console.log('error is ' + error);
    } else {
      let rawFile = value;
      let textDecoder = util.TextDecoder.create('utf-8', { ignoreBOM : true });
      let rawFileString = textDecoder.decodeToString( rawFile , {stream: false});
    }
  });
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`callback getRawFileContent failed, error code: ${code}, message: ${message}.`);
}
```

**参考链接**

[getRawFileContent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-resource-manager#getrawfilecontent9)
