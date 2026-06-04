---
title: "快递地址文本识别"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/parcel_address_text_recognition-0000002326921238
---

## 场景介绍

快递地址文本识别是便捷生活类应用的高频使用场景之一，如用户在填写收件或寄件地址时，可通过文本识别功能快速录入地址信息。

本示例基于[PasteButton](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-security-components-pastebutton)、[textProcessing](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/natural-language-text-processing-api)实现快递地址文本信息的粘贴、识别及填充功能，支持智能拆分姓名、电话和地址。

## 效果预览

![](./img/4f17fa81.png "点击放大")

## 实现思路

1. 通过[PasteButton](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-security-components-pastebutton)控件粘贴地址。

   ```
   PasteButton()
     .onClick(async () => {
       await systemPasteboard.getData().then((data) => {
         const text = data.getPrimaryText();
         this.inputText = text;
       });
     });
   ```
2. 通过[textProcessing](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/natural-language-text-processing-api)的实体抽取能力提取姓名、电话和地址等文本关键信息，并将其自动填充至地址信息表单。

   ```
   textProcessing.getEntity(this.inputText,
     { entityTypes: [EntityType.NAME, EntityType.PHONE_NO, EntityType.LOCATION] }).then((result) => {
       if (result) {
         let outputText: string = this.formatEntityResult(result);
       }
     })

   formatEntityResult(entities: textProcessing.Entity[]): string {
     if (!entities || !entities.length) {
       return Constants.NO_ENTRY_REMINDER;
     }
     let output = 'Entities:\n';
     for (let i = 0; i < entities.length; i++) {
       let entity = entities[i];
       output = util.format('%sEntity[%s]:\n  oriText: %s\n  charOffset: %s\n  entityType: %s\n  jsonObject: %s\n\n',
         output, i, entity.text, entity.charOffset, entity.type, entity.jsonObject);
       if (entity.type === EntityType.NAME) {
         // 姓名
         this.addressName = entity.text;
       } else if (entity.type === EntityType.PHONE_NO) {
         // 电话
         this.phoneNumber = entity.text;
       } else if (entity.type === EntityType.LOCATION) {
         // 地址
         if (entity.jsonObject.toString().includes(Constants.ENTRY_ATTACH_ADORN_LOCATION) === false &&
         entity.jsonObject.toString().includes(Constants.ENTRY_ATTACH_CORE_LOCATION) &&
         entity.jsonObject.toString().includes(Constants.ENTRY_ATTACH_CORE_PROVINCE) &&
         entity.jsonObject.toString().includes(Constants.ENTRY_ATTACH_CORE_CITY) &&
           (entity.jsonObject.toString().includes(Constants.ENTRY_ATTACH_CORE_DISTRICT) ||
           entity.jsonObject.toString().includes(Constants.ENTRY_ATTACH_CORE_COUNTY)) &&
           (i + 1) < entities.length && entities[i + 1].type === EntityType.LOCATION) {
           this.provinceAddress = entity.text;
         } else if (this.provinceAddress === '' ||
           entity.jsonObject.toString().includes(Constants.ENTRY_ATTACH_ADORN_LOCATION)) {
           if (entity.text.toString().includes(Constants.ENTRY_TEXT_SPLIT_ZONE)) {
             let addressList = entity.text.split(Constants.ENTRY_TEXT_SPLIT_ZONE);
             this.provinceAddress = addressList[0] + Constants.ENTRY_TEXT_SPLIT_ZONE;
             this.detailedAddress = addressList[1];
           } else if (entity.text.toString().includes(Constants.ENTRY_TEXT_SPLIT_COUNTY)) {
             let addressList = entity.text.split(Constants.ENTRY_TEXT_SPLIT_COUNTY);
             this.provinceAddress = addressList[0] + Constants.ENTRY_TEXT_SPLIT_COUNTY;
             this.detailedAddress = addressList[1];
           } else {
             this.detailedAddress = entity.text;
           }
         } else {
           this.detailedAddress = entity.text;
         }
       }
     }
     return output;
   }
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                     // 代码区
│  ├──constants
│  │  └──Constants.ets                    // 常量
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupablility
│  │  └──EntryBackupAbility.ets
│  └──pages
│     └──Index.ets                        // 主页面
└──entry/src/main/resources               // 应用资源目录
```

## 参考文档

[PasteButton](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-security-components-pastebutton)

[textProcessing（文本处理）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/natural-language-text-processing-api)

## 代码下载

[快递地址文本识别示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260205165526.16793668595013737656330109268845%3A50001231000000%3A2800%3A52299C26F1B21C2A45528B27B21B17315A86951FC521C278555F02E6D97F6096.zip?needInitFileName=true)
