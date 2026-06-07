---
displayed_sidebar: appDevSidebar
title: "引入对象类型文件"
original_url: /docs/dev/app-dev/application-services/cloud-foundation-kit-guide/cloudfoundation-database-service/cloudfoundation-database-add-file
format: md
---


## 约束与限制

支持Phone、Tablet设备。并且从5.1.0(18)版本开始，新增支持Wearable设备；从5.1.1(19)版本开始，新增支持TV设备；从6.1.0(23)版本开始，新增支持PC/2in1设备。

## 前提条件

* 已[新增对象类型](/docs/dev/app-dev/application-services/cloud-foundation-kit-guide/cloudfoundation-database-service/cloudfoundation-database-add-object)。
* 已[新增存储区](/docs/dev/app-dev/application-services/cloud-foundation-kit-guide/cloudfoundation-database-service/cloudfoundation-database-add-zone)。

## 操作步骤

1. 将对象类型中导出的json格式文件命名为schema.json，拷贝到DevEco Studio项目的“AppScope/resources/rawfile”或者“entry/src/main/resources/rawfile”目录下。在编译构建过程中，AppScope目录下的资源文件会合入到模块的资源文件中，详细信息请参见[资源分类](/docs/dev/app-dev/getting-started/resource-access/resource-categories-and-access#资源分类)。
2. 按照AGC控制台上创建的对象类型“BookInfo”在代码工程中创建BookInfo.ets文件，文件内容参考以下代码。

   ![](./img/d9486c5a.png)

   在AGC控制台创建的字段类型与ArkTS数据类型的匹配关系如下：

   * String、Text对应string。
   * Boolean对应boolean。
   * Byte、ByteArray对应Uint8Array。
   * Short、Integer、Long、Float、Double、IntAutoIncrement、LongAutoIncrement对应number。
   * Date对应Date。

   ```
   import { cloudDatabase } from '@kit.CloudFoundationKit';

   class BookInfo extends cloudDatabase.DatabaseObject{
     public naturalbase_ClassName(): string {
       return "BookInfo";
     }
     public id: number | undefined;
     public bookName: string | undefined;
     public author: string | undefined;
     public price: number | undefined;
     public borrowerId: number | undefined;
     public borrowerName: string | undefined;
     public borrowerTime: Date | undefined;
   }

   export { BookInfo };
   ```
