---
displayed_sidebar: appDevSidebar
title: "初始化数据库访问"
original_url: /docs/dev/app-dev/application-services/cloud-foundation-kit-guide/cloudfoundation-database-service/cloudfoundation-database-initialize
format: md
upstream_id: dev/app-dev/application-services/cloud-foundation-kit-guide/cloudfoundation-database-service/cloudfoundation-database-initialize
last_sync: 2026-06-07
sync_hash: cc499d2f
---
## 约束与限制

支持Phone、Tablet设备。并且从5.1.0(18)版本开始，新增支持Wearable设备；从5.1.1(19)版本开始，新增支持TV设备；从6.1.0(23)版本开始，新增支持PC/2in1设备。

## 前提条件

已[引入对象类型文件](/docs/dev/app-dev/application-services/cloud-foundation-kit-guide/cloudfoundation-database-service/cloudfoundation-database-add-file)。

## 操作步骤

1. 设置云数据库配置项。

   在“entry/src/main/module.json5”文件中添加网络权限。

   ```
   "requestPermissions": [
     {
       "name": "ohos.permission.INTERNET"
     }
   ]
   ```
2. （可选）如果存在需要登录应用才能操作数据库的场景（如新增或删除数据），您需要执行如下操作：

   1. [通过AuthProvider获取用户凭据](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cloudfoundation-cloudcommon#authprovider)。
   2. 调用[cloudCommon.init()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cloudfoundation-cloudcommon#cloudcommoninit)方法进行初始化时，传入获取的凭据。
3. 在业务代码中，使用AGC开发平台上创建的存储区“QuickStartDemo”类初始化DatabaseZone。

   ```
   import { cloudDatabase } from '@kit.CloudFoundationKit';

   let databaseZone = cloudDatabase.zone('QuickStartDemo');
   ```

   ![](./img/d63e9766.png)

   * cloudDatabase.zone方法接收的入参为“存储区名称”，即cloudDBZoneName，请参见[新增存储区](/docs/dev/app-dev/application-services/cloud-foundation-kit-guide/cloudfoundation-database-service/cloudfoundation-database-add-zone)章节。
   * 存储区最多创建4个，超过4个会导致云数据库访问失败。
4. 如果需要使用数据库查询方法，可以使用类（此处以BookInfo为例）初始化DatabaseQuery。

   ```
   import { BookInfo } from 'xx/BookInfo'; // xx是BookInfo文件的相对路径

   let condition = new cloudDatabase.DatabaseQuery(BookInfo);
   ```

   ![](./img/71f35a7c.png)

   后续“databaseZone”、“condition”都需要在每个查询中独立使用，可以参考此章节创建，下文代码中不再重复创建的操作。
