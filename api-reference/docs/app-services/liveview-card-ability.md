---
title: "LiveViewCardExtensionAbility"
upstream_id: "harmonyos-references/liveview-card-ability"
catalog: "harmonyos-references"
content_hash: "6fe225b8079f"
synced_at: "2026-08-11T16:04:14.448717"
---

# LiveViewCardExtensionAbility

LiveViewCardExtensionAbility为实况窗卡片自定义扩展区的[ExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/extensionability-overview)组件，适用于需要在扩展区展示自定义丰富内容的实时活动场景。开发者通过继承该类并实现应用的扩展组件，可以在实况窗扩展区呈现开发者自定义的内容。

起始版本： 26.0.0

#### 约束限制

- LiveViewCardExtensionAbility为独立子进程，不能跨进程拉起其他Ability。
- 不允许访问网络。
- 该ExtensionAbility每次的运行时长限制在80毫秒内，超时会导致实况卡片自定义扩展区无法正常展示，因此禁止用于复杂耗时的处理。
- 为保障系统安全性和稳定性，防止LiveViewCardExtensionAbility滥用系统资源，系统对其能力进行管控，不支持部分模块的引用，详情请参考[附录](#附录)。

#### 导入模块

```
import { LiveViewCardExtensionAbility } from '@kit.LiveViewKit';
```
 设备行为差异： 该模块在Phone、Tablet中可正常调用，在其他设备类型中无效果。

#### LiveViewCardExtensionAbility

模型约束： 属性仅可在Stage模型下使用。

系统能力： SystemCapability.LiveView.LiveViewService

设备行为差异： 该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。

起始版本： 26.0.0

#### [h2]属性

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| context | [LiveViewCardExtensionContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/liveview-card-context) | 否 | 否 | LiveViewCardExtensionAbility的上下文环境，继承自[ExtensionContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-extensioncontext)。 |

#### [h2]onRender

onRender(param: Record<string, string>): CardInfo

开发者继承LiveViewCardExtensionAbility并实现自身的组件，当组件实例被系统加载时，系统会触发该回调。开发者可以在onRender中实现实况窗卡片扩展区的业务逻辑和界面组件绘制，并返回要加载的[CardInfo](#cardinfo)给系统，由系统渲染页面。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.LiveView.LiveViewService

设备行为差异： 该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。

起始版本： 26.0.0

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| param | Record | 是 | 开发者创建实况窗卡片自定义扩展区时传入的参数[CustomLayout.abilityParameters](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/liveview-liveviewmanager#customlayout) 默认会携带以下key值（由系统赋值，开发者手动修改也不会生效）： 'ohos.extra.param.key.colorMode'：实况卡片深浅色模式（dark：深色模式；light：浅色模式） 'ohos.extra.param.key.fontColor'：实况卡片字体颜色（"#ARGB"16进制格式，长度为9） 'ohos.extra.param.key.contentWidth'：实况窗卡片自定义扩展区的宽度（单位为vp；自定义扩展区左右边界距离实况窗卡片边界各为12vp）。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| [CardInfo](#cardinfo) | 卡片渲染信息对象。 |

#### CardInfo

onRender函数接口返回的卡片渲染信息对象。

模型约束： 此属性仅可在Stage模型下使用。

系统能力： SystemCapability.LiveView.LiveViewService

设备行为差异： 该接口在Phone、Tablet中可正常调用，在其他设备类型中无效果。

起始版本： 26.0.0

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| pagePath | string | 否 | 否 | 待加载到系统中的扩展区域页面的路径，系统将渲染该页面。 |
| storage | [LocalStorage](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-localstorage) | 否 | 是 | 页面级UI状态存储单元，用于传递pagePath内容的状态属性。 |

#### 示例

```
import { LiveViewCardExtensionAbility } from '@kit.LiveViewKit';
import { CardInfo } from '@hms.core.liveview.LiveViewCardExtensionAbility';
import { hilog } from '@kit.PerformanceAnalysisKit';

export default class LiveViewCardExtAbility extends LiveViewCardExtensionAbility {
  onRender(param: Record<string, string>): CardInfo {
    hilog.info(0x0000, 'LiveViewCardTag', 'LiveViewCardExtAbility onRender begin.');
    
    // 将param的参数构造到LocalStorage传递给页面使用。
    const storage = new LocalStorage(param);
      
    // 加载实况窗卡片自定义扩展区页面
    return {
        pagePath: 'pages/LiveViewCardPage',
        storage: storage
    }
  }
}
```
 
```
@Entry({ useSharedStorage: true })
@Component
struct LiveViewCardPage {
  private storage: LocalStorage | undefined = this.getUIContext().getSharedLocalStorage();
  // 获取从AbilityParameters中传入的参数
  private words: string | undefined = this.storage?.get('words');

  // 解析获取系统实况窗卡片自定义扩展区的宽度、深浅色模式、字体颜色
  private contentWidth: string | undefined = this.storage?.get('ohos.extra.param.key.contentWidth');
  private colorMode: string | undefined = this.storage?.get('ohos.extra.param.key.colorMode');
  private fontColor: string | undefined = this.storage?.get('ohos.extra.param.key.fontColor');

  build() {
    Column() {
      Scroll() {
        Column() {
          Text(this.words)
            .fontColor(this.fontColor)
        }
        .width(this.contentWidth)
      }
    }
  }
}
```

#### 附录

LiveViewCardExtensionAbility不允许调用的API名单如下。

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
| Call Service Kit | [voipCall (应用内通话管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/call-voipcall) |
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
