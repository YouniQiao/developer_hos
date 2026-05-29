---
title: "后台上传下载合理使用"
source_url: https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-reasonable-request-use
---

import SourceLink from '@site/src/components/SourceLink';

# 后台上传下载合理使用

应用上传下载时，应使用系统服务，不要申请长时任务。

## 约束

NA

## 示例

### 上传

```ts
import { BusinessError, request } from '@kit.BasicServicesKit';

const uiContext: UIContext | undefined = AppStorage.get('uiContext');
let context = uiContext!.getHostContext()!;

let uploadTask: request.UploadTask;
let uploadConfig: request.UploadConfig = {
  url: 'http://www.example.com', //Replace the IP address of the real server manually
  header: { 'Accept': '*/*' },
  method: "POST",
  files: [{
    filename: "test",
    name: "test",
    uri: "internal://cache/test.jpg",
    type: "jpg"
  }],
  data: [{ name: "name123", value: "123" }],
};
try {
  //Upload request
  request.uploadFile(context, uploadConfig, (err: BusinessError, data: request.UploadTask) => {
    if (err) {
      console.error(`Failedtorequesttheupload.Code:${err.code},message:${err.message}`);
      return;
    }
    uploadTask = data;
  });
} catch (err) {
  console.error(`Failedtorequesttheupload.err:${JSON.stringify(err)}`);
}
```
<SourceLink name="Upload.ets" url="https://gitcode.com/harmonyos_samples/BestPracticeSnippets/blob/master/BptaUseSoftware/entry/src/main/ets/pages/Upload.ets#L21-L50" />

### 下载

```ts
import { BusinessError, request } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

    try {
      let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
      request.downloadFile(context, {
        url: 'https://xxxx/xxxxx.hap', // IP address of the server to download the file
        filePath: 'xxx/xxxxx.hap'
      }, (err: BusinessError, data: request.DownloadTask) => {
        if (err) {
          console.error(`Failedtorequestthedownload.Code:${err.code},message:${err.message}`);
          return;
        }
        let downloadTask: request.DownloadTask = data;
      });
    } catch (err) {
      console.error(`Failedtorequestthedownload.err:${JSON.stringify(err)}`);
    }
```
<SourceLink name="Download.ets" url="https://gitcode.com/harmonyos_samples/BestPracticeSnippets/blob/master/BptaUseSoftware/entry/src/main/ets/pages/Download.ets#L21-L49" />

有关上传下载相关接口的使用，详情可以参考[应用文件上传下载](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-file-upload-download)。
