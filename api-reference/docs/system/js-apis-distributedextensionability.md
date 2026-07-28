---
title: "@ohos.application.DistributedExtensionAbility (协同Extension)"
upstream_id: "harmonyos-references/js-apis-distributedextensionability"
catalog: "harmonyos-references"
content_hash: "68614e13df35"
synced_at: "2026-07-28T16:50:40.878898"
---

# @ohos.application.DistributedExtensionAbility (协同Extension)

DistributedExtensionAbility模块提供分布式相关扩展能力，提供分布式创建、销毁、连接的生命周期回调。

![](./img/note_3.0-zh-cn.png) 本模块首批接口从API version 20开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

本模块接口仅可在Stage模型下使用。

#### 导入模块

```
import { DistributedExtensionAbility} from '@kit.DistributedServiceKit';
```

#### DistributedExtensionAbility

#### [h2]属性

模型约束：此接口仅可在Stage模型下使用。

系统能力：SystemCapability.DistributedSched.AppCollaboration

设备行为差异： 该接口在不支持分布式业务的Wearable设备不生效。

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| context | DistributedExtensionContext | 否 | 否 | DistributedExtension的上下文环境，继承自ExtensionContext。 |

#### [h2]onCreate

onCreate(want: Want): void

Extension生命周期回调，在创建时回调，执行初始化业务逻辑操作。

模型约束：此接口仅可在Stage模型下使用。

系统能力：SystemCapability.DistributedSched.AppCollaboration

设备行为差异： 该接口在不支持分布式业务的Wearable设备不生效。

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | [Want](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-want) | 是 | 当前Extension相关的Want类型信息，包括ability名称、bundle名称等。 |

示例：

```
import { Want } from '@kit.AbilityKit';
import { DistributedExtensionAbility } from '@kit.DistributedServiceKit';

export default class DistributedExtension extends DistributedExtensionAbility {
  onCreate(want: Want) {
    console.info(`DistributedExtension Create ok`);
    console.info(`DistributedExtension on Create want: ${JSON.stringify(want)}`);
    console.info(`DistributedExtension Create end`);
  }
}
```

#### [h2]onCollaborate

onCollaborate(wantParam: Record <string, Object>) : AbilityConstant.CollaborateResult

多设备协作场景下返回协作结果的回调。

模型约束：此接口仅可在Stage模型下使用。

系统能力：SystemCapability.DistributedSched.AppCollaboration

设备行为差异： 该接口在不支持分布式业务的Wearable设备不生效。

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| wantParam | Record | 是 | want相关参数，仅支持key值取"ohos.extra.param.key.supportCollaborateIndex"。通过该key值可以获取到调用方传输的数据并进行相应的处理。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| [AbilityConstant.CollaborateResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-abilityconstant#collaborateresult18) | 协同方应用是否接受协同。 |

示例

```
import { abilityConnectionManager, DistributedExtensionAbility } from '@kit.DistributedServiceKit';
import { AbilityConstant } from '@kit.AbilityKit';

export default class DistributedExtension extends DistributedExtensionAbility {
  onCollaborate(wantParam: Record<string, Object>) {
    console.info(`DistributedExtension onCollabRequest Accept to the result of Ability collaborate`);
    let sessionId = -1;
    const collaborationValues = wantParam["CollaborationValues"] as abilityConnectionManager.CollaborationValues;
    if (collaborationValues == undefined) {
      return sessionId;
    }
    console.info(`onCollab, collaborationValues: ${JSON.stringify(collaborationValues)}`);
    return AbilityConstant.CollaborateResult.ACCEPT;
  }
}
```

#### [h2]onDestroy

onDestroy(): void

Extension生命周期回调，在销毁时回调，执行资源清理等操作。

模型约束：此接口仅可在Stage模型下使用。

系统能力：SystemCapability.DistributedSched.AppCollaboration

设备行为差异： 该接口在不支持分布式业务的Wearable设备不生效。

示例：

```
import { DistributedExtensionAbility } from '@kit.DistributedServiceKit';

export default class DistributedExtension extends DistributedExtensionAbility {
  onDestroy() {
    console.info('DistributedExtension onDestroy ok');
  }
}
```

#### 附录

DistributedExtensionAbility不支持以下模块的引用。

| Kit | 模块 |
| --- | --- |
| Ability Kit（程序框架服务） | [@ohos.ability.featureAbility (FeatureAbility模块)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-ability-featureability) |
| Ability Kit（程序框架服务） | [@ohos.ability.particleAbility (ParticleAbility模块)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-ability-particleability) |
| Ability Kit（程序框架服务） | [UIAbilityContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-uiabilitycontext) |
| Ability Kit（程序框架服务） | [@ohos.continuation.continuationManager (流转/协同管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-continuation-continuationmanager) |
| ArkUI（方舟UI框架） | [@ohos.prompt (弹窗)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-prompt) |
| ArkUI（方舟UI框架） | [@ohos.promptAction (弹窗)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-promptaction) |
| ArkUI（方舟UI框架） | [@ohos.screenshot (屏幕截图)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-screenshot) |
| Background Tasks Kit（后台任务开发服务） | [@ohos.reminderAgent (后台代理提醒)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-reminderagent) |
| Background Tasks Kit（后台任务开发服务） | [@ohos.reminderAgentManager (后台代理提醒)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-reminderagentmanager) |
| Basic Services Kit（基础服务） | [@ohos.account.appAccount (应用账号管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-appaccount) |
| Basic Services Kit（基础服务） | [@ohos.account.distributedAccount (分布式账号管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-distributed-account) |
| Basic Services Kit（基础服务） | [@ohos.account.osAccount (系统账号管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-osaccount) |
| Basic Services Kit（基础服务） | [@ohos.power (系统电源管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-power) |
| Basic Services Kit（基础服务） | [@ohos.wallpaper (壁纸)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-wallpaper) |
| Camera Kit（相机服务） | [@ohos.multimedia.cameraPicker (相机选择器)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-camerapicker) |
| Connectivity Kit（短距通信服务） | [@ohos.connectedTag (有源标签)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-connectedtag) |
| Connectivity Kit（短距通信服务） | [nfctech (标准NFC-Tag Nfc 技术)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-nfctech) |
| Connectivity Kit（短距通信服务） | [@ohos.nfc.cardEmulation (标准NFC-cardEmulation)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cardemulation) |
| Connectivity Kit（短距通信服务） | [@ohos.nfc.controller (标准NFC)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-nfccontroller) |
| Connectivity Kit（短距通信服务） | [@ohos.nfc.tag (标准NFC-Tag)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-nfctag) |
| Connectivity Kit（短距通信服务） | [tagSession (标准NFC-Tag TagSession)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-tagsession) |
| Contacts Kit（联系人服务） | [@ohos.contact (联系人)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-contact) |
| Core File Kit（文件基础服务） | [@ohos.file.picker (选择器)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-picker) |
| Form Kit（卡片开发服务） | [@ohos.app.form.formBindingData (卡片数据绑定类)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-form-formbindingdata) |
| Form Kit（卡片开发服务） | [@ohos.app.form.FormExtensionAbility (FormExtensionAbility)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-form-formextensionability) |
| Form Kit（卡片开发服务） | [@ohos.app.form.formInfo (formInfo)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-form-forminfo) |
| Form Kit（卡片开发服务） | [@ohos.app.form.formProvider (formProvider)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-form-formprovider) |
| Form Kit（卡片开发服务） | [@ohos.application.formError (formError)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-application-formerror) |
| Form Kit（卡片开发服务） | [@ohos.application.formInfo (formInfo)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-application-forminfo) |
| Form Kit（卡片开发服务） | [@ohos.application.formProvider (formProvider)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-application-formprovider) |
| IME Kit（输入法开发服务） | [@ohos.inputMethod (输入法框架)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inputmethod) |
| MultimediaKit | @ohos.multimedia.mediaLibrary (媒体库管理) |
| Media Library Kit（媒体文件管理服务） | [@ohos.file.sendablePhotoAccessHelper (基于Sendable对象的相册管理模块)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-sendablephotoaccesshelper) |
| Media Library Kit（媒体文件管理服务） | [@ohos.file.AlbumPickerComponent (Album Picker组件)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-file-albumpickercomponent) |
| Media Library Kit（媒体文件管理服务） | [@ohos.file.PhotoPickerComponent (PhotoPicker组件)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-file-photopickercomponent) |
| Media Library Kit（媒体文件管理服务） | [@ohos.file.RecentPhotoComponent (最近图片组件)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-file-recentphotocomponent) |
| Media Library Kit（媒体文件管理服务） | [@ohos.multimedia.movingphotoview (动态照片)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-multimedia-movingphotoview) |
| Notification Kit（用户通知服务） | [@ohos.notification (Notification模块)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-notification) |
| Notification Kit（用户通知服务） | [@ohos.notificationManager (NotificationManager模块)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-notificationmanager) |
| Sensor Service Kit（传感器服务） | [@ohos.vibrator (振动)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-vibrator) |
| Telephony Kit（蜂窝通信服务） | [@ohos.telephony.call (拨打电话)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-call) |
| Telephony Kit（蜂窝通信服务） | [@ohos.telephony.sim (SIM卡管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-sim) |
| Telephony Kit（蜂窝通信服务） | [@ohos.telephony.sms (短信服务)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-sms) |
| User Authentication Kit（用户认证服务） | [@ohos.userIAM.userAuth (用户认证)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-useriam-userauth) |
| Call Service Kit（通话服务） | [voipCall (应用内通话管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/call-voipcall) |
| Live View Kit（实况窗服务） | [liveViewManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/liveview-liveviewmanager) |
| Scan Kit（统一扫码服务） | [customScan (自定义界面扫码)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scan-customscan-api) |
| Scan Kit（统一扫码服务） | [generateBarcode (码图生成)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scan-generatebarcode) |
| Scan Kit（统一扫码服务） | [detectBarcode (图像识码)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scan-imagedecode) |
| Scan Kit（统一扫码服务） | [scanBarcode (默认界面扫码)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scan-scanbarcode-api) |
| Scan Kit（统一扫码服务） | [scanCore (扫码公共信息)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scan-scancore) |
