---
title: "用户协议与隐私政策弹窗"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/user_agreement_and_privacy_policy-0000002331953689
---

## 场景介绍

用户协议与隐私政策弹窗是各类应用的高频使用场景之一，如用户首次打开应用，需要同意用户协议与隐私政策，才可进入应用。

本示例基于[半模态转场](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-sheet-transition)实现了用户协议与隐私政策的确认弹窗，基于[全屏模态转场](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-modal-transition)实现了协议与政策的详情页面。

## 效果预览

![](./img/4f2fff96.png "点击放大")

## 实现思路

1. 通过[bindSheet](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-sheet-transition#bindsheet)属性绑定用户协议与隐私政策半模态页面。

   ```
   Column() {
     // 绑定bindSheet的组件
   }
   .alignItems(HorizontalAlign.Center)
   .bindSheet($$this.isShow, this.agreementAndPolicy, {
     // 配置半模态页面的可选属性
   })
   .width(Constants.FULL_PERCENT)
   .height(Constants.FULL_PERCENT)

   @Builder
   agreementAndPolicy(): void {
     // 自定义用户协议与隐私政策半模态页面
   }
   ```
2. 通过[bindContentCover](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-modal-transition#bindcontentcover)属性绑定用户协议与隐私政策的详情页面。

   ```
   // 文本组件绑定用户协议详情全屏模态页面和隐私政策详情全屏模态页面
   Text() {
     ForEach(Constants.AGREEMENT_AND_PRIVACY_CONTENT_LIST, (textItem: string, index: number) => {
       Span(textItem)
         // ...
         .onClick(() => {
           if (index === Constants.AGREEMENT_INDEX) {
             this.isShowAgreement = true;
           } else if (index === Constants.PRIVACY_INDEX) {
             this.isShowPolicy = true;
           }
         })
     })
   }
   // ...
   .bindContentCover(this.isShowAgreement || this.isShowPolicy,
     this.isShowAgreement ? this.userAgreementBuilder() : this.privacyPolicyBuilder(), {
       onDisappear: (() => {
         if (this.isShowAgreement) {
           this.isShowAgreement = false;
         } else {
           this.isShowPolicy = false;
         }
       })
     })

   @Builder
   userAgreementBuilder(): void {
     // 自定义用户协议详情全屏模态页面
   }

   @Builder
   privacyPolicyBuilder(): void {
     // 自定义隐私政策详情全屏模态页面
   }
   ```
3. 通过[PersistentStorage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-state-management#persistentstorage)持久化存储用户协议与隐私政策同意状态，判断是否拉起用户协议与隐私政策半模态页面。

   ```
   // 初始化PersistentStorage
   PersistentStorage.persistProp('agreedState', 0);
   PersistentStorage.persistProp('flag', false);

   // 组件内部定义属性
   @StorageLink('agreedState') agreedState: number = 1;
   @StorageLink('flag') flag: boolean = true;

   aboutToAppear(): void {
     if (this.agreedState === Constants.AGREED_STATE[1]) {
       this.pathStack.pushPathByName('Home', null);
     } else {
       this.isShow = true;
     }

     // 拉起协议
     this.intervalID = setInterval(() => {
       if (!this.flag) {
         this.isShow = true;
         this.flag = !this.flag;
       }
       if (this.intervalID) {
         clearInterval(this.intervalID);
       }
     }, Constants.DELAY_TIME);
   }
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                   // 代码区
│  ├──common
│  │  ├──CardData.ets                   // 卡片数据
│  │  └──Constants.ets                  // 常量
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──model
│  │  └──Model.ets                      // 卡片数据类型
│  ├──pages
│  │  ├──Home.ets                       // 首页
│  │  └──Index.ets                      // 入口页
│  └──views
│     └──CardView.ets                   // 卡片页面
└──entry/src/main/resources             // 应用资源目录
```

## 参考文档

[全屏模态转场](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-modal-transition)

[半模态转场](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-sheet-transition)

[应用级变量的状态管理](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-state-management)

## 代码下载

[用户协议与隐私政策弹窗示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260210100045.39088743567739445272705251730385%3A50001231000000%3A2800%3AD9B3F9287F647444549A4CE4591CC989B1BA2685F30E662EECBD94708CEB1774.zip?needInitFileName=true)
