---
title: "LauncherAbilityInfo"
upstream_id: "harmonyos-references/js-apis-bundlemanager-launcherabilityinfo"
catalog: "harmonyos-references"
content_hash: "f192c75e784e"
synced_at: "2026-07-09T00:57:10.314428"
---

# LauncherAbilityInfo

桌面应用的Ability信息，可以通过[getLauncherAbilityInfoSync](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-launcherbundlemanager#launcherbundlemanagergetlauncherabilityinfosync)获取。

![](./img/note_3.0-zh-cn.png) 本模块首批接口从API version 18 开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

#### 导入模块

```
import { launcherBundleManager } from '@kit.AbilityKit';
```

#### LauncherAbilityInfo

系统能力： SystemCapability.BundleManager.BundleFramework.Launcher

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| applicationInfo | [ApplicationInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bundlemanager-applicationinfo) | 是 | 否 | launcher ability的应用程序配置信息。 |
| elementName | [ElementName](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bundlemanager-elementname) | 是 | 否 | launcher ability的ElementName信息。 |
| labelId | number | 是 | 否 | launcher ability的名称的资源ID值。 |
| iconId | number | 是 | 否 | launcher ability的图标的资源ID值。 |
| userId | number | 是 | 否 | launcher ability的用户ID。 |
| installTime | number | 是 | 否 | launcher ability的安装时间戳，单位毫秒。 |
