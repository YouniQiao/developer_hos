---
title: "接收其他应用分享的图片"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/receive_image_share-0000002405380589
---

## 场景介绍

接收其他应用分享的图片是社交通讯类应用的高频使用场景之一，如接收从图库分享的图片并发送给应用内指定联系人。

本示例主要通过[LocalStorage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-state-management#localstorage9)传递want参数，并使用[getSharedData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/share-system-share#section661613319216)实现解析分享数据，最后通过[Navigation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation)实现页面间跳转和带参返回。若需接收其他类型的分享，如链接、视频、音频和文件等，也可以参考本示例思路实现。

## 效果预览

![](./img/5dce06a0.gif "点击放大")

## 实现思路

1. 在应用配置文件的[skills标签](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/module-configuration-file#skills标签)配置中注册。配置actions为ohos.want.action.sendData；uris需穷举所有支持的数据类型，更多数据类型参考[UTD预置列表](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uniform-data-type-list)。

   ```
   // module.json5
   "abilities": [
     {
       "skills": [
         {
           "actions": [
             "ohos.want.action.sendData"
           ],
           "uris": [
             {
               "scheme": "file",
               "utd": "general.image",
               "maxFileSupported": 9
             }
           ]
         }
       ]
     }
   ]
   ```
2. 使用[getSharedData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/share-system-share#section661613319216)解析want参数，并通过[getRecords](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/share-system-share#section14943101911111)读取分享数据记录。

   ```
   // ShareReceiveUtil.ets
   async getSharedData(want: Want): Promise<void> {
     try {
       let shareData = await systemShare.getSharedData(want)
       let records = shareData.getRecords()
       if (records.length > 0) {
         records.forEach((record: systemShare.SharedRecord) => {
           this.parseRecord(record)
         });
       }
     } catch (error) {
       this.hasShareReceive = false;
     }
   }
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                        // 代码区
│  ├──component
│  │  └──MessageComp.ets                     // 常量
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──model
│  │  ├──ChatModel.ets                       // 聊天对话模型
│  │  └──MessageModel.ets                    // 聊天信息模型
│  ├──pages
│  │  ├──ChatPage.ets                        // 聊天界面
│  │  └──SelectChatPage.ets                  // 选择发送聊天界面
│  └──utils
│     ├──Logger.ets                          // 日志工具
│     └──ShareReceiveUtil.ets                // 分享数据处理工具
└──entry/src/main/resources                  // 应用资源目录
```

## 参考文档

[Navigation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation)

[应用内处理分享内容](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/share-interface-description)

[@ohos.app.ability.UIAbility（带界面的应用组件）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-uiability)

[应用级变量的状态管理](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-state-management)

[systemShare（分享）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/share-system-share)

[module.json5配置文件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/module-configuration-file)

[UTD预置列表](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uniform-data-type-list)

## 代码下载

[接收其他应用分享的图片示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260225101016.42097740738052417529014680419220%3A50001231000000%3A2800%3A73C5FAAF4B9C7318E312FE4EEEBE1EA5643AD10FC914D0D76C6D5041291B8404.zip?needInitFileName=true)
