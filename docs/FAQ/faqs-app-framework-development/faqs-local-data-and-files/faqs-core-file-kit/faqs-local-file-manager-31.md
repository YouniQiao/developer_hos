---
format: md
title: "报错“the parameters check fails this is fail path”如何解决"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-core-file-kit/faqs-local-file-manager-31
---


**问题现象**

```
public static timelineReceivedResult(path: string): void {
  if (!path) {
    console.error('Invoke empty file path')
    return;
  }
  let filename = path.substring(path.lastIndexOf("/") + 1);
  let uri = fileUri.getUriFromPath(path);
  let header = new Map<Object, string>();
  let files: Array<request.File> = [
    {
      filename: filename,
      name: 'test',
      uri: uri,
      type: 'txt'
    }
  ]
  let data: Array<request.RequestData> = []; // { name: 'name', value: 'value' }
  let uploadConfig: request.UploadConfig = {
    url: 'http://30.7.242.25:8800',
    header: header,
    method: 'POST',
    files: files,
    data: data
  }

  // Upload the local application file to the web server.
  try {
    request.uploadFile(context, uploadConfig)
      .then((uploadTask: request.UploadTask) => {
        uploadTask.on('complete', (taskStates: Array<request.TaskState>) => {
          for (let i = 0; i < taskStates.length; i++) {
            console.info(`upload complete taskState: ${JSON.stringify(taskStates[i])}`);
          }
        });
      })
      .catch((err: BusinessError) => {
        console.error(`Invoke uploadFile failed, code is ${err.code}, message is ${err.message}`);
      })
  } catch (error) {
    let err: BusinessError = error as BusinessError;
    console.error(`Invoke uploadFile failed, code is ${err.code}, message is ${err.message}`);
  }
}
```

当参数检查失败时，系统会进入错误处理路径。

**解决措施**

请尝试在cache里上传，当前仅支持"internal"协议，对应在cache目录下。

**参考链接**

[@ohos.request (上传下载)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-request)
