---

title: "在端侧调用云存储"
displayed_sidebar: cloudDevSidebar
original_url: /docs/tools/end-cloud/agc-harmonyos-clouddev-invokecloudstorage
format: md
---


# 在端侧调用云存储

## 前提条件

* 请确保云存储服务已经开通。
* 使用云存储功能，需要获取用户凭据。请确保您已[配置AccessToken](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cloudfoundation-cloudcommon#getaccesstoken).

## 操作步骤

1. 在代码文件中引入Cloud Foundation Kit。

   ```
   import { cloudStorage } from '@kit.CloudFoundationKit';
   import { BusinessError, request } from '@kit.BasicServicesKit';
   ```
2. 初始化云存储实例。

   ```
   const bucket: cloudStorage.StorageBucket = cloudStorage.bucket();
   ```
3. 调用云存储接口，如uploadFile接口。“src/main/ets/pages/CloudStorage.ets”代码片段节选如下，更完整的接口信息请参考[Cloud Foundation Kit API参考-云存储模块](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cloudfoundation-cloudstorage).

   ```
   bucket.uploadFile(getContext(this), {
     localPath: cacheFilePath,
     cloudPath: cloudPath,
   }).then(task => {
     // add task event listener
     this.addEventListener(task, this.onUploadCompleted(cloudPath, cacheFilePath));
     // start task
     task.start();
   }).catch((err: BusinessError) => {
     hilog.error(HILOG_DOMAIN, TAG, 'uploadFile failed, error code: %{public}d, message: %{public}s',
       err.code, err.message);
     this.isUploading = false;
   });
   ```
