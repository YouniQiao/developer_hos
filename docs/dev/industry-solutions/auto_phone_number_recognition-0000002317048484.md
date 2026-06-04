---
title: "电话号码自动识别"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/auto_phone_number_recognition-0000002317048484
---

## 场景介绍

电话号码自动识别是社交通讯类应用中的典型场景之一。

本示例基于[Natural Language Kit](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/natural-language-api)实现在文本中自动识别电话号码的功能，支持点击电话号码呼叫和新建联系人。

## 效果预览

![](./img/72522d3b.png "点击放大")

## 实现思路

1. 通过[textProcessing.getEntity](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/natural-language-text-processing-api#section6469197174917)抽取文本中的电话号码，将原文本切割为多个文本。

   ```
   let result = await textProcessing.getEntity(this.originalText,
     { entityTypes: [EntityType.PHONE_NO] }); // 实体抽取,设置实体的类别为手机号实体
   if (result.length !== 0) { // 按手机号切割originalText
     for (let i = 0; i < result.length; i++) {
       let ms1 = this.originalText.split(result[i].text)
       this.textArr.push(new textArr(ms1[0], false, 0, 0), new textArr(result[i].text, true, 0, 0))
       this.originalText = ms1[1]
       if (i + 1 == result.length) { // 最后一次切割
         this.textArr.push(new textArr(this.originalText, false, 0, 0))
       }
     }
   } else {
     this.textArr.push(new textArr(this.originalText, false, 0, 0)
   }
   ```
2. 通过[hasVoiceCapability](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-call#callhasvoicecapability7)判断设备是否具备语音通话能力，通过[call.makeCall](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-call#callmakecall7)传入参数拉起系统拨号键盘。

   ```
   let result: boolean = call.hasVoiceCapability(); // 判断设备是否具备语音通话能力
   call.makeCall(this.phoneNum, (err: BusinessError) => { // 打电话
   });
   ```
3. 通过[startAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-uiabilitycontext#startability)传入对应[Want](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-want)信息拉起新建联系人页面。

   ```
   let want: Want = {
     bundleName: 'com.ohos.contacts',
     abilityName: 'com.ohos.contacts.MainAbility',
     parameters: {
       'phoneNumber': this.phoneNum, // 需新增联系人电话
       'contactName': '', // 需新增联系人姓名
       'pageFlag': 'page_flag_save_contact'
     }
   }
   this.context.startAbility(want) // 拉起联系人并传入参数新建联系人
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                      // 代码区
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──model
│  │  └──DataModel.ets                    // 数据类
│  ├──pages
│  │  └──TextEdit.ets                     // 文本编辑主页
│  └──utils
│     └──Logger.ets                       // 日志工具类
└──entry/src/main/resources               // 应用资源目录
```

## 参考文档

[@ohos.app.ability.Want(Want)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-want)

[实体抽取](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/natural-language-getentity)

[UIAbilityContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-uiabilitycontext)

[textProcessing（文本处理）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/natural-language-text-processing-api)

[@ohos.telephony.call（拨打电话）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-call)

[Natural Language Kit（自然语言理解服务）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/natural-language-api)

## 代码下载

[电话号码自动识别示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260225101013.12070477908628340788210416550607%3A50001231000000%3A2800%3AF8CD5A9D2B170D2AF5F23F3F2525D44F45F49A1E0720A23A242480B464E08ABD.zip?needInitFileName=true)
