---
displayed_sidebar: appDevSidebar
title: "删除云侧文件"
original_url: /docs/dev/app-dev/application-services/cloud-foundation-kit-guide/cloudfoundation-storage-service/cloudfoundation-storage-delete-file
format: md
upstream_id: dev/app-dev/application-services/cloud-foundation-kit-guide/cloudfoundation-storage-service/cloudfoundation-storage-delete-file
last_sync: 2026-06-07
sync_hash: fed607be
upstream_hash: d296a5d7d61b
---

当云侧文件不需要时，开发者可以在应用客户端删除云侧的文件。

## 约束与限制

支持Phone、Tablet设备。并且从5.1.0(18)版本开始，新增支持Wearable设备；从5.1.1(19)版本开始，新增支持TV设备；从6.1.0(23)版本开始，新增支持PC/2in1设备。

## 前提条件

* 已[初始化存储实例](/docs/dev/app-dev/application-services/cloud-foundation-kit-guide/cloudfoundation-storage-service/cloudfoundation-storage-initialize-bucket)。
* 已[上传指定文件至云侧](/docs/dev/app-dev/application-services/cloud-foundation-kit-guide/cloudfoundation-storage-service/cloudfoundation-storage-upload-file)。

## 操作步骤

调用[StorageBucket.deleteFile](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cloudfoundation-cloudstorage#deletefile)删除云侧的文件。

![](./img/df47d658.png)

删除操作不可逆，一旦执行，文件会被物理删除，不可找回。

完整示例代码如下：

```
import { cloudStorage } from '@kit.CloudFoundationKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let storageBucket: cloudStorage.StorageBucket = cloudStorage.bucket();

@Component
export struct testPage {
  build() {
  }

  // 删除云侧文件
  deleteFile() {
    // 删除云存储默认实例中screenshot/screenshot_20250115_155321.jpg文件
    storageBucket.deleteFile('screenshot/screenshot_20250115_155321.jpg').then(() => {
      hilog.info(0x0000, 'testTag', `Succeeded in deleting file.`);
    }).catch((err: BusinessError) => {
      hilog.error(0x0000, 'testTag', `Failed to delete file, code: ${err.code}, message: ${err.message}`);
    })
  }
}
```

![](./img/32795228.png)

删除文件后，可以登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，选择项目，进入“云存储”界面查看文件列表。
