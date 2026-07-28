---
title: "@ohos.app.ability.DriverExtensionAbility (驱动程序扩展能力)"
upstream_id: "harmonyos-references/js-apis-app-ability-driverextensionability"
catalog: "harmonyos-references"
content_hash: "b9a2d9015ba5"
synced_at: "2026-07-28T16:51:12.425497"
---

# @ohos.app.ability.DriverExtensionAbility (驱动程序扩展能力)

DriverExtensionAbility模块提供驱动相关扩展能力，提供驱动创建、销毁、连接、断开等生命周期回调。

![](./img/note_3.0-zh-cn.png) 本模块首批接口从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

#### 约束限制

为保障系统安全性和稳定性，防止 DriverExtensionAbility滥用系统资源，系统对其能力进行管控，不支持部分模块的引用，详情请参考[附录](#附录)。

#### 导入模块

```
import { DriverExtensionAbility } from '@kit.DriverDevelopmentKit';
```

#### DriverExtensionAbility

#### [h2]属性

DriverExtensionAbility类，包含驱动生命周期回调的定义。

模型约束：此接口仅在Stage模型下使用。

系统能力：SystemCapability.Driver.ExternalDevice

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| context | [DriverExtensionContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-driverextensioncontext) | 否 | 否 | DriverExtension的上下文环境，继承自ExtensionContext。 |

#### [h2]onInit

onInit(want: Want): void

Extension生命周期回调，在创建时回调，执行初始化业务逻辑操作。

模型约束：此接口仅在Stage模型下使用。

系统能力：SystemCapability.Driver.ExternalDevice

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | [Want](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-want) | 是 | 当前Extension相关的Want类型信息，包括ability名称、bundle名称等。 |

示例：

```
import { DriverExtensionAbility } from '@kit.DriverDevelopmentKit';
import { Want } from '@kit.AbilityKit';

class DriverExt extends DriverExtensionAbility {
  onInit(want : Want) {
    console.info(`onInit, want: ${want.abilityName}`);
  }
}
```

#### [h2]onRelease

onRelease(): void

Extension生命周期回调，在销毁时回调，执行资源清理等操作。

模型约束：此接口仅在Stage模型下使用。

系统能力：SystemCapability.Driver.ExternalDevice

示例：

```
class DriverExt extends DriverExtensionAbility {
  onRelease() {
    console.info('onRelease');
  }
}
```

#### [h2]onConnect

onConnect(want: Want): rpc.RemoteObject | Promise<rpc.RemoteObject>

Extension生命周期回调，会在[onCreate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-abilitystage#oncreate)之后回调。返回一个[RemoteObject](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-rpc#remoteobject)对象，用于客户端和服务端进行通信。

模型约束：此接口仅在Stage模型下使用。

系统能力：SystemCapability.Driver.ExternalDevice

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | [Want](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-want) | 是 | 当前Extension相关的Want类型信息，包括ability名称、bundle名称等。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| rpc.[RemoteObject](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-rpc#remoteobject) | Promise | 一个RemoteObject对象，用于客户端和服务端进行通信；或一个Promise对象，返回用于通信的RemoteObject对象。 |

示例：

```
import { DriverExtensionAbility } from '@kit.DriverDevelopmentKit';
import { rpc } from '@kit.IPCKit';
import { Want } from '@kit.AbilityKit';

class StubTest extends rpc.RemoteObject{
    constructor(des : string) {
        super(des);
    }
    onRemoteMessageRequest(code : number, data : rpc.MessageSequence, reply : rpc.MessageSequence, option : rpc.MessageOption) {
      // 必须重写此接口
      return true;
    }
}
class DriverExt extends DriverExtensionAbility {
  onConnect(want : Want) {
    console.info(`onConnect , want: ${want.abilityName}`);
    return new StubTest('test');
  }
}
```
 如果生成返回值[RemoteObject](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-rpc#remoteobject)依赖一个异步接口，可以使用异步生命周期：

```
import { DriverExtensionAbility } from '@kit.DriverDevelopmentKit';
import { rpc } from '@kit.IPCKit';
import { Want } from '@kit.AbilityKit';

class StubTest extends rpc.RemoteObject{
    constructor(des : string) {
        super(des);
    }
    onRemoteMessageRequest(code : number, data : rpc.MessageSequence, reply : rpc.MessageSequence, option : rpc.MessageOption) {
      // 必须重写此接口
      return true;
    }
}
async function getDescriptor() {
    // 调用异步函数...
    return "asyncTest";
}
class DriverExt extends DriverExtensionAbility {
  async onConnect(want : Want) {
    console.info(`onConnect , want: ${want.abilityName}`);
    let descriptor = await getDescriptor();
    return new StubTest(descriptor);
  }
}
```

#### [h2]onDisconnect

onDisconnect(want: Want): void | Promise<void>

Extension的生命周期回调，客户端执行断开连接服务时回调。

模型约束：此接口仅在Stage模型下使用。

系统能力：SystemCapability.Driver.ExternalDevice

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | [Want](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-want) | 是 | 当前Extension相关的Want类型信息，包括ability名称、bundle名称等。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| void | Promise | 返回值为空；或一个Promise对象，无返回结果。 |

示例：

```
import { DriverExtensionAbility } from '@kit.DriverDevelopmentKit';
import { Want } from '@kit.AbilityKit';

class DriverExt extends DriverExtensionAbility {
  onDisconnect(want : Want) {
    console.info(`onDisconnect, want: ${want.abilityName}`);
  }
}
```
 在执行完onDisconnect生命周期回调后，应用可能会退出，从而可能导致onDisconnect中的异步函数未能正确执行，比如异步写入数据库。可以使用异步生命周期，以确保异步onDisconnect完成后再继续后续的生命周期。

```
import { DriverExtensionAbility } from '@kit.DriverDevelopmentKit';
import { Want } from '@kit.AbilityKit';

class DriverExt extends DriverExtensionAbility {
  async onDisconnect(want : Want) {
    console.info(`onDisconnect, want: ${want.abilityName}`);
    // 调用异步函数...
  }
}
```

#### [h2]onDump

onDump(params: Array<string>): Array<string>

转储客户端信息时调用，建议不要转储敏感信息。

模型约束：此接口仅在Stage模型下使用。

系统能力：SystemCapability.Driver.ExternalDevice

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| params | Array | 是 | 表示命令形式的参数。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Array | 一个string类型的数组，用于转存客户端信息。 |

示例：

```
class DriverExt extends DriverExtensionAbility {
    onDump(params : Array<string>) {
        console.info(`dump, params: ${JSON.stringify(params)}`);
        return ['params'];
    }
}
```

#### DriverExtensionContext

type DriverExtensionContext = _DriverExtensionContext;

DriverExtensionAbility的上下文环境。

系统能力：SystemCapability.Driver.ExternalDevice

| 类型 | 说明 |
| --- | --- |
| _DriverExtensionContext | DriverExtensionAbility的上下文环境，继承自ExtensionContext，其具体使用方法可参考[DriverExtensionContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-driverextensioncontext)。 |

#### 附录

DriverExtensionAbility不支持以下模块的引用。

| Kit | 模块 |
| --- | --- |
| Ability Kit（程序框架服务） | [@ohos.abilityAccessCtrl (程序访问控制管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-abilityaccessctrl) |
| Ability Kit（程序框架服务） | [@ohos.ability.particleAbility (ParticleAbility模块)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-ability-particleability) |
| Ability Kit（程序框架服务） | [@ohos.app.ability.abilityManager (Ability信息管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-abilitymanager) |
| Ability Kit（程序框架服务） | [@ohos.app.ability.appManager (应用管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-appmanager) |
| Ability Kit（程序框架服务） | [@ohos.application.appManager (appManager)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-application-appmanager) |
| Ability Kit（程序框架服务） | [@ohos.bundle (Bundle模块)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bundle) |
| Ability Kit（程序框架服务） | [@ohos.bundle.bundleManager (应用程序包管理模块)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bundlemanager) |
| Ability Kit（程序框架服务） | [@ohos.bundle.defaultAppManager (默认应用管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-defaultappmanager) |
| Ability Kit（程序框架服务） | [@ohos.bundle.launcherBundleManager (launcherBundleManager模块)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-launcherbundlemanager) |
| Ability Kit（程序框架服务） | [Context (Stage模型的上下文基类)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context) |
| Ability Kit（程序框架服务） | [@ohos.continuation.continuationManager (流转/协同管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-continuation-continuationmanager) |
| ArkData（方舟数据管理） | [@ohos.data.distributedData (分布式数据管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-distributed-data) |
| ArkData（方舟数据管理） | [@ohos.data.distributedDataObject (分布式数据对象)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-data-distributedobject) |
| ArkData（方舟数据管理） | [@ohos.data.distributedKVStore (分布式键值数据库)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-distributedkvstore) |
| ArkData（方舟数据管理） | [@ohos.data.rdb (关系型数据库)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-data-rdb) |
| ArkUI（方舟UI框架） | [@ohos.screenshot (屏幕截图)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-screenshot) |
| Background Tasks Kit（后台任务开发服务） | [@ohos.reminderAgent (后台代理提醒)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-reminderagent) |
| Background Tasks Kit（后台任务开发服务） | [@ohos.reminderAgentManager (后台代理提醒)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-reminderagentmanager) |
| Background Tasks Kit（后台任务开发服务） | [@ohos.resourceschedule.backgroundTaskManager (后台任务管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-resourceschedule-backgroundtaskmanager) |
| Background Tasks Kit（后台任务开发服务） | [@ohos.backgroundTaskManager (后台任务管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-backgroundtaskmanager) |
| Background Tasks Kit（后台任务开发服务） | [@ohos.bundleState (设备使用信息统计)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-deviceusagestatistics) |
| Basic Services Kit（基础服务） | [@ohos.account.appAccount (应用账号管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-appaccount) |
| Basic Services Kit（基础服务） | [@ohos.account.distributedAccount (分布式账号管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-distributed-account) |
| Basic Services Kit（基础服务） | [@ohos.account.osAccount (系统账号管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-osaccount) |
| Basic Services Kit（基础服务） | [@ohos.deviceInfo (设备信息)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-device-info) |
| Basic Services Kit（基础服务） | [@ohos.power (系统电源管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-power) |
| Basic Services Kit（基础服务） | [@ohos.request (上传下载)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-request) |
| Basic Services Kit（基础服务） | [@ohos.runningLock (RunningLock锁)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-runninglock) |
| Basic Services Kit（基础服务） | [@ohos.settings (设置数据项名称)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-settings) |
| Basic Services Kit（基础服务） | [@ohos.systemTime (系统时间、时区)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-system-time) |
| Basic Services Kit（基础服务） | [@ohos.wallpaper (壁纸)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-wallpaper) |
| Connectivity Kit（短距通信服务） | [@ohos.bluetooth (蓝牙)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bluetooth) |
| Connectivity Kit（短距通信服务） | [@ohos.bluetoothManager (蓝牙)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bluetoothmanager) |
| Connectivity Kit（短距通信服务） | [@ohos.connectedTag (有源标签)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-connectedtag) |
| Connectivity Kit（短距通信服务） | [@ohos.nfc.cardEmulation (标准NFC-cardEmulation)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cardemulation) |
| Connectivity Kit（短距通信服务） | [@ohos.nfc.controller (标准NFC)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-nfccontroller) |
| Connectivity Kit（短距通信服务） | [@ohos.nfc.tag (标准NFC-Tag)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-nfctag) |
| Connectivity Kit（短距通信服务） | [@ohos.wifi (WLAN)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-wifi) |
| Connectivity Kit（短距通信服务） | [@ohos.wifiext (WLAN扩展接口)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-wifiext) |
| Connectivity Kit（短距通信服务） | [@ohos.wifiManager (WLAN)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-wifimanager) |
| Connectivity Kit（短距通信服务） | [@ohos.wifiManagerExt (WLAN扩展接口)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-wifimanagerext) |
| Contacts Kit（联系人服务） | [@ohos.contact (联系人)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-contact) |
| Core File Kit（文件基础服务） | [@ohos.file.storageStatistics (应用空间统计)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-storage-statistics) |
| Form Kit（卡片开发服务） | [@ohos.application.formError (formError)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-application-formerror) |
| IME Kit（输入法开发服务） | [@ohos.inputMethod (输入法框架)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inputmethod) |
| Location Kit | [@ohos.geolocation (位置服务)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-geolocation) |
| Location Kit | [@ohos.geoLocationManager (位置服务)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-geolocationmanager) |
| MDM Kit（企业设备管理服务） | [@ohos.enterprise.adminManager（admin权限管理）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-enterprise-adminmanager) |
| MDM Kit（企业设备管理服务） | [@ohos.enterprise.deviceInfo（设备信息管理）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-enterprise-deviceinfo) |
| MultimediaKit | @ohos.multimedia.mediaLibrary (媒体库管理) |
| Network Kit（网络服务） | [@ohos.net.connection (网络连接管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-net-connection) |
| Network Kit（网络服务） | [@ohos.net.ethernet (以太网连接管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-net-ethernet) |
| Network Kit（网络服务） | [@ohos.net.http (数据请求)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-http) |
| Network Kit（网络服务） | [@ohos.net.sharing (网络共享管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-net-sharing) |
| Network Kit（网络服务） | [@ohos.net.socket (Socket连接)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-socket) |
| Network Kit（网络服务） | [@ohos.net.webSocket (WebSocket连接)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-websocket) |
| Notification Kit（用户通知服务） | [@ohos.notification (Notification模块)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-notification) |
| Notification Kit（用户通知服务） | [@ohos.notificationManager (NotificationManager模块)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-notificationmanager) |
| Performance Analysis Kit（性能分析服务） | [@ohos.hidebug (Debug调试)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-hidebug) |
| Sensor Service Kit（传感器服务） | [@ohos.sensor (传感器)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-sensor) |
| Sensor Service Kit（传感器服务） | [@ohos.vibrator (振动)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-vibrator) |
| Telephony Kit（蜂窝通信服务） | [@ohos.telephony.call (拨打电话)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-call) |
| Telephony Kit（蜂窝通信服务） | [@ohos.telephony.data (蜂窝数据)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-telephony-data) |
| Telephony Kit（蜂窝通信服务） | [@ohos.telephony.observer (observer)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-observer) |
| Telephony Kit（蜂窝通信服务） | [@ohos.telephony.radio (网络搜索)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-radio) |
| Telephony Kit（蜂窝通信服务） | [@ohos.telephony.sim (SIM卡管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-sim) |
| Telephony Kit（蜂窝通信服务） | [@ohos.telephony.sms (短信服务)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-sms) |
