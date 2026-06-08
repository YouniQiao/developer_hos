---
title: "如何实现http并行下载"
original_url: /docs/FAQ/faqs-system-development/faqs-network/faqs-network-kit/faqs-network-49
format: md
upstream_id: FAQ/faqs-system-development/faqs-network/faqs-network-kit/faqs-network-49
last_sync: 2026-06-07
sync_hash: 431dc603
---
使用上传下载模块进行下载。最多支持4个任务同时下载。

参考代码如下：

```
import { request } from '@kit.BasicServicesKit';
import { BusinessError } from '@kit.BasicServicesKit';

// Using AppStore to store UIContext in ExitAbility
const context = AppStorage.get("context") as UIContext;
let downloadTask: request.DownloadTask;
try {
  request.downloadFile(context.getHostContext(), { url: 'https://xxxx/xxxx.hap' }).then((data: request.DownloadTask) => {
    downloadTask = data;
  }).catch((err: BusinessError) => {
    console.error(`Failed to request the download. Code: ${err.code}, message: ${err.message}`);
  })
} catch (err) {
  console.error(`Failed to request the download. err: ${JSON.stringify(err)}`);
}
```

**参考链接**

[@ohos.request (上传下载)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-request)
