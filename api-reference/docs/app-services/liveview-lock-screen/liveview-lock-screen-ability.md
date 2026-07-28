---
title: "LiveViewLockScreenExtensionAbility"
upstream_id: "harmonyos-references/liveview-lock-screen-ability"
catalog: "harmonyos-references"
content_hash: "8e50de155bad"
synced_at: "2026-07-28T16:52:40.838779"
---

# LiveViewLockScreenExtensionAbility

LiveViewLockScreenExtensionAbility为[锁屏沉浸实况窗](https://developer.huawei.com/consumer/cn/doc/design-guides/system-features-live-view-0000001955186861#section553375320)可视化区的[ExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/extensionability-overview)组件，继承自[UIExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-uiextensionability)，适用于需要在锁屏状态下展示丰富内容的实时活动场景。开发者通过继承该类并实现应用的扩展组件，可以在用户未解锁屏幕的情况下，在锁屏界面以可视化形式呈现更多的数据情况以及提供更多快速操作。

起始版本： 5.0.0(12)

#### 约束限制

- LiveViewLockScreenExtensionAbility为独立子进程，不能跨进程拉起其他Ability。
- 为保障系统安全性和稳定性，防止LiveViewLockScreenExtensionAbility滥用系统资源，系统对其能力进行管控，不支持部分模块的引用，详情请参考[附录](#附录)。

#### 导入模块

```
import { LiveViewLockScreenExtensionAbility } from '@kit.LiveViewKit';
```
 设备行为差异： 该模块在Phone、Tablet中可正常调用，在其他设备类型中无效果。

#### LiveViewLockScreenExtensionAbility

锁屏沉浸实况窗扩展Ability，继承自[UIExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-uiextensionability)。

模型约束： 属性仅可在Stage模型下使用。

系统能力： SystemCapability.LiveView.LiveViewService

设备行为差异： 该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。

起始版本： 5.0.0(12)

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| context | [LiveViewLockScreenExtensionContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/liveview-lock-screen-context) | 否 | 否 | LiveViewLockScreenExtensionAbility的上下文环境，继承自[ExtensionContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-extensioncontext)。 |

示例：

```
import { LiveViewLockScreenExtensionAbility } from '@kit.LiveViewKit';
import { UIExtensionContentSession, Want } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

export default class LiveViewLockScreenExtAbility extends LiveViewLockScreenExtensionAbility {
  onCreate(): void {
    hilog.info(0x0000, 'LiveViewLockScreenTag', 'LiveViewLockScreenExtAbility onCreate begin.');
  }

  onSessionCreate(want: Want, session: UIExtensionContentSession): void {
    hilog.info(0x0000, 'LiveViewLockScreenTag', 'LiveViewLockScreenExtAbility onSessionCreate begin.');
    let param: Record<string, UIExtensionContentSession> = {
      'session': session
    };
    let storage: LocalStorage = new LocalStorage(param);

    // 解析从liveViewLocalScreenAbilityParameters中传入的参数
    const parameters = want?.parameters;
    let words: string = parameters?.['words'] ? parameters?.['words'] as string : 'Hello World!';
    storage.setOrCreate('words', words);

    // 加载锁屏沉浸实况窗页面
    session.loadContent('pages/LiveViewLockScreenPage', storage);
  }
}
```

#### 附录

LiveViewLockScreenExtensionAbility不允许调用的API名单如下。

| Kit名称 | 模块名称 |
| --- | --- |
| Ability Kit | [@ohos.ability.featureAbility (FeatureAbility模块)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-ability-featureability) [@ohos.ability.particleAbility (ParticleAbility模块)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-ability-particleability) [@ohos.bundle.launcherBundleManager (launcherBundleManager模块)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-launcherbundlemanager) [@ohos.continuation.continuationManager (流转/协同管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-continuation-continuationmanager) |
| AppGallery Kit | [privacyManager（隐私管理服务）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-privacymanager) |
| ArkData | [@ohos.data.distributedData (分布式数据管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-distributed-data) [@ohos.data.distributedDataObject (分布式数据对象)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-data-distributedobject) [@ohos.data.distributedKVStore (分布式键值数据库)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-distributedkvstore) |
| ArkUI | [@ohos.window (窗口)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window) |
| Audio Kit | [@ohos.multimedia.audio (音频管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio) |
| AVSession Kit | [@ohos.multimedia.avsession (媒体会话管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession) [@ohos.multimedia.avCastPicker (投播组件)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-multimedia-avcastpicker) |
| Background Tasks Kit | [@ohos.backgroundTaskManager (后台任务管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-backgroundtaskmanager) [@ohos.resourceschedule.backgroundTaskManager (后台任务管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-resourceschedule-backgroundtaskmanager) [@ohos.reminderAgent (后台代理提醒)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-reminderagent) [@ohos.reminderAgentManager (后台代理提醒)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-reminderagentmanager) |
| Basic Services Kit | [@ohos.account.appAccount (应用账号管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-appaccount) [@ohos.account.distributedAccount (分布式账号管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-distributed-account) [@ohos.account.osAccount (系统账号管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-osaccount) [@ohos.request (上传下载)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-request) [@ohos.wallpaper (壁纸)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-wallpaper) [@ohos.pasteboard (剪贴板)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-pasteboard) |
| Calendar Kit | [@ohos.calendarManager (日程管理能力)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-calendarmanager) |
| Camera Kit | [@ohos.multimedia.camera (相机管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera) [@ohos.multimedia.cameraPicker (相机选择器)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-camerapicker) |
| Connectivity Kit | [@ohos.connectedTag (有源标签)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-connectedtag) [@ohos.nfc.cardEmulation (标准NFC-cardEmulation)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cardemulation) [@ohos.nfc.controller (标准NFC)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-nfccontroller) [@ohos.nfc.tag (标准NFC-Tag)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-nfctag) [nfctech (标准NFC-Tag Nfc 技术)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-nfctech) [tagSession (标准NFC-Tag TagSession)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-tagsession) |
| Contacts Kit | [@ohos.contact (联系人)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-contact) |
| Core File Kit | [@ohos.file.picker (选择器)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-picker) |
| Form Kit | [@ohos.app.form.formInfo (formInfo)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-form-forminfo#forminfo) [@ohos.application.formError (formError)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-application-formerror) |
| Map Kit | [sceneMap（场景化控件）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-scenemap) |
| MDM Kit | [@ohos.enterprise.adminManager (admin权限管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-enterprise-adminmanager) [@ohos.enterprise.deviceInfo（设备信息管理）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-enterprise-deviceinfo) |
| Media Kit | [@ohos.multimedia.media (媒体服务)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media) |
| Media Library Kit | [@ohos.file.sendablePhotoAccessHelper (基于Sendable对象的相册管理模块)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-sendablephotoaccesshelper) [@ohos.file.AlbumPickerComponent (Album Picker组件)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-file-albumpickercomponent) [@ohos.file.PhotoPickerComponent (PhotoPicker组件)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-file-photopickercomponent) [@ohos.file.RecentPhotoComponent (最近图片组件)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-file-recentphotocomponent) [@ohos.multimedia.movingphotoview (动态照片)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-multimedia-movingphotoview) [@ohos.file.photoAccessHelper (相册管理模块)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-photoaccesshelper) |
| Notification Kit | [@ohos.notification (Notification模块)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-notification) [@ohos.notificationManager (NotificationManager模块)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-notificationmanager) |
| Payment Kit | [paymentService (鸿蒙支付服务)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/payment-paymentservice) |
| Performance Analysis Kit | [@ohos.hidebug (Debug调试)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-hidebug) |
| Scan Kit | [customScan (自定义界面扫码)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scan-customscan-api) [detectBarcode (图像识码)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scan-imagedecode) [generateBarcode (码图生成)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scan-generatebarcode) [scanBarcode (默认界面扫码)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scan-scanbarcode-api) [scanCore (扫码公共信息)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scan-scancore) |
| Sensor Service Kit | [@ohos.vibrator (振动)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-vibrator) |
| Service Collaboration Kit | [devicePicker (设备选择控制器)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-devicepicker) [CollaborationDevicePicker (流转控件)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-collaborationdevicepicker) |
| Share Kit | [systemShare（分享）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/share-system-share) [harmonyShare（华为分享）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/share-harmony-share) |
| Telephony Kit | [@ohos.telephony.call (拨打电话)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-call) [@ohos.telephony.data (蜂窝数据)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-telephony-data) [@ohos.telephony.observer (observer)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-observer) [@ohos.telephony.radio (网络搜索)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-radio) [@ohos.telephony.sim (SIM卡管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-sim) [@ohos.telephony.sms (短信服务)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-sms) |
| User Authentication Kit | [@ohos.userIAM.userAuth (用户认证)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-useriam-userauth) |
| Vision Kit | [CardRecognition（卡证识别控件）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/vision-card-recognition) [DocumentScanner（文档扫描控件）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/vision-document-scanner) |
