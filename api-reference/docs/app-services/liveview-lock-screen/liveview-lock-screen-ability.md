---
title: "LiveViewLockScreenExtensionAbility"
upstream_id: "harmonyos-references/liveview-lock-screen-ability"
catalog: "harmonyos-references"
content_hash: "2ca89098aa04"
synced_at: "2026-07-09T01:01:22.465211"
---

# LiveViewLockScreenExtensionAbility

LiveViewLockScreenExtensionAbility为[锁屏沉浸实况窗](https://developer.huawei.com/consumer/cn/doc/design-guides/system-features-live-view-0000001955186861#section553375320)可视化区的[ExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/extensionability-overview)组件，继承自[UIExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-uiextensionability)，适用于需要在锁屏状态下展示丰富内容的实时活动场景。开发者通过继承该类并实现应用的扩展组件，可以在用户未解锁屏幕的情况下，在锁屏界面以可视化形式呈现更多的数据情况以及提供更多快速操作。有如下约束：

- LiveViewLockScreenExtensionAbility为独立子进程，不能跨进程拉起其他Ability。
- 不允许调用通知API、窗口API、卡片API、后台任务API、联系人API、分布式数据管理API、相机API、NFC API、上传下载API、蜂窝通信API。

起始版本： 5.0.0(12)

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
