---
title: "PushExtensionAbility（推送扩展Ability）"
upstream_id: "harmonyos-references/push-extension-ability"
catalog: "harmonyos-references"
content_hash: "02392632c88f"
synced_at: "2026-07-09T01:01:37.569121"
---

# PushExtensionAbility（推送扩展Ability）

![](./img/note_3.0-zh-cn.png) 仅对系统应用开放，暂不对外开放申请。

应用退至后台后，系统通常会限制其CPU等资源的使用，导致应用无法与服务器完成数据同步。Push Kit提供了应用在后台时仍能更新数据的能力。当用户终端收到开发者发送的拉起应用子进程的后台消息时，Push Kit将拉起应用子进程并将消息内容传递到该进程，开发者可在该进程中完成后台数据处理、数据更新等操作。

PushExtensionAbility为推送扩展Ability，提供获取消息数据和生命周期销毁的回调。有如下约束：

- PushExtensionAbility为独立子进程，轻量级，不允许唤醒主进程。
- 不允许调用通知API、卡片API、窗口API、弹窗API、实况窗API。
- 生命周期根据场景受控，默认小于10秒，超过10秒子进程生命周期结束。

执行ExtensionAbility失败可能会返回错误，请按具体报错信息排查，详请参见[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/push-error-code)。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Push.PushService

起始版本： 4.0.0(10)

#### 导入模块

```
import { PushExtensionAbility } from '@kit.PushKit';
```

#### 属性

模型约束： 属性仅可在Stage模型下使用。

系统能力： SystemCapability.Push.PushService

起始版本： 4.0.0(10)

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| context | [PushExtensionContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/push-extension-context) | 否 | 否 | PushExtensionAbility的上下文环境，继承自[ExtensionContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-extensioncontext)。 |

#### onReceiveMessage

onReceiveMessage(payload: pushCommon.PushPayload): void

应用继承PushExtensionAbility后接收拉起应用子进程的后台消息数据的接口。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Push.PushService

起始版本： 4.0.0(10)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| payload | pushCommon.[PushPayload](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/push-pushcommon#pushpayload) | 是 | 拉起应用子进程的后台消息数据。 |

示例：

```
import { PushExtensionAbility, pushCommon } from '@kit.PushKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

const LOG_DOMAIN = 0x0000;
const LOG_TAG = 'PushExtAbility';

// 此处以PushExtAbility继承PushExtensionAbility为例
export default class PushExtAbility extends PushExtensionAbility {
  onReceiveMessage(payload: pushCommon.PushPayload): void {
    hilog.info(LOG_DOMAIN, LOG_TAG,'onReceiveMessage');

    try {
      this.updateData(payload.data);
    } catch (err) {
      const e: BusinessError = err as BusinessError;
      hilog.error(LOG_DOMAIN, LOG_TAG, 'updateData failed, code=%{public}d, message=%{public}s', e.code, e.message);
    }
  }

  /**
   * 数据更新
   * 开发者可根据透传数据自定义实现数据更新逻辑
   * @param data 透传数据
   */
  private updateData(data: string): void {
    // 开发者自行实现数据更新逻辑
  }
}
```

#### onDestroy

onDestroy(): void

当PushExtensionAbility被销毁时，会执行该回调，建议在该方法中执行资源清理等操作。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Push.PushService

起始版本： 4.0.0(10)

示例：

```
import { PushExtensionAbility } from '@kit.PushKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

const LOG_DOMAIN = 0x0000;
const LOG_TAG = 'PushExtAbility';

// 此处以PushExtAbility继承PushExtensionAbility为例
export default class PushExtAbility extends PushExtensionAbility {
  onDestroy(): void {
    hilog.info(LOG_DOMAIN, LOG_TAG,'PushExtAbility onDestroy');

    try {
      this.releaseResources();
    } catch (err) {
      const e: BusinessError = err as BusinessError;
      hilog.error(LOG_DOMAIN,LOG_TAG,'releaseResources failed, code=%{public}d, message=%{public}s', e.code, e.message);
    }
  }

  /**
   * 释放资源
   * 开发者根据实际业务自行实现
   */
  private releaseResources(): void {
    // 资源释放逻辑
  }
}
```
