---
title: "StatusBarViewExtensionAbility（状态栏扩展Ability）"
upstream_id: "harmonyos-references/statusbar-extension-ability"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:51:13.993698"
---

# StatusBarViewExtensionAbility（状态栏扩展Ability）

StatusBarViewExtensionAbility为状态栏扩展Ability，继承自[UIExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-uiextensionability#uiextensionability)，用于给应用提供接入状态栏图标左键业务弹窗的能力。

![](./img/note_3.0-zh-cn.png) 本模块接口仅可在Stage模型下使用。

系统能力： SystemCapability.PCService.StatusBarManager

起始版本： 5.0.0(12)

#### 导入模块

```
import { StatusBarViewExtensionAbility } from '@kit.DeskTopExtensionKit';
```
 示例：

```
import { StatusBarViewExtensionAbility } from '@kit.DeskTopExtensionKit';
import { UIExtensionContentSession, Want } from '@kit.AbilityKit';

let TAG = "MyStatusBarViewAbility";

export default class MyStatusBarViewAbility extends StatusBarViewExtensionAbility {
  // 当StatusBarViewExtensionAbility组件实例完成创建时，系统会触发该回调。
  onCreate() {
    console.info(TAG, `onCreate`);
  }

  // 当UIExtensionContentSession实例创建完成后，系统会触发该回调。
  onSessionCreate(want: Want, session: UIExtensionContentSession) {
    console.info(TAG, `onSessionCreate, want: ${JSON.stringify(want)}`);
    session.loadContent('pages/StatusBarPage');
  }

  // 当StatusBarViewExtensionAbility组件首次启动到前台或者从后台转入到前台时，系统触发该回调。
  onForeground() {
    console.info(TAG, `onForeground`);
  }

  // 当StatusBarViewExtensionAbility组件从前台转入到后台时，系统触发该回调。
  onBackground() {
    console.info(TAG, `onBackground`);
  }

  // 当UIExtensionContentSession实例销毁后，系统触发该回调。
  onSessionDestroy(session: UIExtensionContentSession) {
    console.info(TAG, `onSessionDestroy`);
  }

  // 当StatusBarViewExtensionAbility组件被销毁时，系统触发该回调。
  onDestroy() {
    console.info(TAG, `onDestroy`);
  }
}
```
