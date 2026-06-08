---
title: "后台上传下载合理使用"
original_url: /docs/quality/reasonable-request-use
upstream_id: /docs/quality/reasonable-request-use
last_sync: 2026-06-07
sync_hash: fc4bbce4
---
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
<div class="source-link-wrapper"><a class="source-link" href="https://gitcode.com/harmonyos_samples/BestPracticeSnippets/blob/master/BptaUseSoftware/entry/src/main/ets/pages/Upload.ets#L21-L50">Upload.ets</a></div>

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
<div class="source-link-wrapper"><a class="source-link" href="https://gitcode.com/harmonyos_samples/BestPracticeSnippets/blob/master/BptaUseSoftware/entry/src/main/ets/pages/Download.ets#L21-L49">Download.ets</a></div>

有关上传下载相关接口的使用，详情可以参考[应用文件上传下载](/docs/dev/app-dev/system/system-basicfun/basic-services-kit/upload-download/app-file-upload-download)。
