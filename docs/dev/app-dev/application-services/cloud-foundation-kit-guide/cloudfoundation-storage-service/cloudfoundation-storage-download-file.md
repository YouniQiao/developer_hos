---
displayed_sidebar: appDevSidebar
title: "下载云侧文件至本地"
original_url: /docs/dev/app-dev/application-services/cloud-foundation-kit-guide/cloudfoundation-storage-service/cloudfoundation-storage-download-file
format: md
upstream_id: dev/app-dev/application-services/cloud-foundation-kit-guide/cloudfoundation-storage-service/cloudfoundation-storage-download-file
last_sync: 2026-06-07
sync_hash: aa8b814d
---
文件上传至云侧后，开发者可以将云侧文件下载到本地设备中。

## 约束与限制

支持Phone、Tablet设备。并且从5.1.0(18)版本开始，新增支持Wearable设备；从5.1.1(19)版本开始，新增支持TV设备；从6.1.0(23)版本开始，新增支持PC/2in1设备。

## 前提条件

* 已[初始化存储实例](/docs/dev/app-dev/application-services/cloud-foundation-kit-guide/cloudfoundation-storage-service/cloudfoundation-storage-initialize-bucket)。
* 已[上传指定文件至云侧](/docs/dev/app-dev/application-services/cloud-foundation-kit-guide/cloudfoundation-storage-service/cloudfoundation-storage-upload-file)。

## 操作步骤

1. 调用[StorageBucket.downloadFile](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cloudfoundation-cloudstorage#downloadfile)接口创建下载任务，监听下载任务的progress、completed、failed等事件。
2. 启动下载任务。

   ![](./img/82c126ed.png)

   下载成功后，文件将保存在[context.cacheDir](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context#属性)目录下。

完整示例代码如下：

```
import { cloudStorage } from '@kit.CloudFoundationKit';
import { BusinessError, request } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { GlobalContext } from '../common/GlobalContext';

let storageBucket: cloudStorage.StorageBucket = cloudStorage.bucket();

@Component
export struct testPage {
  build() {
  }

  // 下载云侧文件至本地
  download() {
    // 获取云存储默认实例中fileName文件，保存至本地
    storageBucket.downloadFile(GlobalContext.getContext(), {
      localPath: `screenshot.jpg`, // 文件将会保存在context.cacheDir目录下
      cloudPath: `screenshot/screenshot_20250115_155321.jpg`  // 云侧文件路径，支持传入“文件目录/文件名”，或仅传入文件名
    }).then((task: request.agent.Task) => {
      task.on('progress', (progress) => {
        hilog.info(0x0000, 'testTag', `on progress ${JSON.stringify(progress)} `);
      });
      task.on('completed', (progress) => {
        hilog.info(0x0000, 'testTag', `on completed ${JSON.stringify(progress)} `);
      });
      task.on('failed', (progress) => {
        hilog.info(0x0000, 'testTag', `on failed ${JSON.stringify(progress)} `);
      });
      task.on('response', (response) => {
        hilog.info(0x0000, 'testTag', `on response ${JSON.stringify(response)} `);
      });
      task.start((err: BusinessError) => {
        if (err) {
          hilog.error(0x0000, 'testTag',
            `Failed to start a file download task, code: ${err.code}, message: ${err.message}`);
        } else {
          hilog.info(0x0000, 'testTag', `Succeeded in starting a file download task. result: ${task.tid}`);
        }
      });
    }).catch((err: BusinessError) => {
      hilog.error(0x0000, 'testTag', `Failed to download file, code: ${err.code}, message: ${err.message}`);
    })
  }
}
```

![](./img/480d4bda.png)

如果本地已存在同名文件，下载文件将出现异常，可以通过设置[DownloadParams.overwrite](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cloudfoundation-cloudstorage#downloadparams)来决定是否覆盖本地文件。
