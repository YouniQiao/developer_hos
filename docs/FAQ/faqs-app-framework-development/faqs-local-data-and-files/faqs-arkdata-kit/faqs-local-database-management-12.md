---
format: md
title: "如何读取本地/预制数据库"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-12
upstream_id: FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-12
last_sync: 2026-06-07
sync_hash: cd3266f3
---
**解决措施**

1. 将db文件推送到数据存储沙箱路径：/data/app/el2/100/database/(bundleName)/entry/rdb/。实现方式为使用文件管理接口打开本地数据库，读取其内容并写入沙箱路径下的db文件中。

   ```
   import { fileIo } from '@kit.CoreFileKit';
   import { relationalStore } from '@kit.ArkData';
   import { common } from '@kit.AbilityKit';
   import { BusinessError } from '@kit.BasicServicesKit';

   // Obtaining the Context in EntryAbility, save it to AppStorage, then use AppStorage to retrieve it in the utility class.
   let context = AppStorage.get('context') as UIContext;
   let UiAbilityContent = context.getHostContext() as common.UIAbilityContext;
   let RDBDirectory = UiAbilityContent.databaseDir;
   let resource = UiAbilityContent.resourceManager;

   function initDatabase() {
     // Create a database sandbox directory
     try {
       let dirPath = RDBDirectory + '/rdb';
       fileIo.mkdirSync(dirPath);
     } catch (error) {
       console.error(`mkdir rdbPath failed, error code: ${error.code}, message: ${error.message}.`);
     }

     // Set db name
     let dbName: string = 'Objective.db';

     // Read the db file in the rawfile directory
     try {
       let content = resource.getRawFileContentSync(dbName);
       let cFile = RDBDirectory + '/rdb/' + dbName;
       let cacheFile = fileIo.openSync(cFile, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);
       fileIo.write(cacheFile.fd, content.buffer);
       fileIo.closeSync(cacheFile.fd);
     } catch (error) {
       console.error(`callback getRawFd failed, error code: ${error.code}, message: ${error.message}.`);
     }
   }
   ```
2. 通过[getRdbStore](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-data-relationalstore-f#relationalstoregetrdbstore)获取保存在沙箱路径下的db文件

   ```
   async function getRDB(): Promise<relationalStore.RdbStore | undefined> {
     let result: relationalStore.RdbStore | undefined = undefined;
     const STORE_CONFIG: relationalStore.StoreConfig = {
       name: 'Objective.db',
       securityLevel: relationalStore.SecurityLevel.S1
     };

     await relationalStore.getRdbStore(UiAbilityContent, STORE_CONFIG).then((rdbStore: relationalStore.RdbStore) => {
       result = rdbStore;
       console.info('Get RdbStore successfully.');
     }).catch((err: BusinessError) => {
       console.error(`Get RdbStore failed, code is ${err.code}, message is ${err.message}`);
     });
     return result;
   }
   ```
