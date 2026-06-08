---
title: "如何解决window创建的模态窗口默认焦点不在界面上，导致不响应返回事件的问题"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-201
format: md
upstream_id: FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-201
last_sync: 2026-06-07
sync_hash: 1868b9b0
---
**问题现象**

通过window创建的窗口默认焦点不在界面上，导致不响应返回事件。

**解决措施**

模态窗口是给系统权限申请弹窗用的，默认不能响应back手势事件。使用setDialogBackGestureEnabled接口设置模态窗口是否响应手势返回事件，设置为true时，模态窗口可响应onBackPress回调。参考代码如下：

```
// EntryAbility.ets
import { UIAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { window } from '@kit.ArkUI';

export default class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage): void {
    console.info('onWindowStageCreate');
    let windowClass: window.Window | undefined = undefined;
    let config: window.Configuration = {
      name: "test",
      windowType: window.WindowType.TYPE_DIALOG,
      ctx: this.context
    };
    try {
      window.createWindow(config, (err: BusinessError, data) => {
        const errCode: number = err.code;
        if (errCode) {
          console.error(`Failed to create the window. Cause code: ${err.code}, message: ${err.message}`);
          return;
        }
        windowClass = data;
        windowClass.setUIContent('pages/Index');
        let enabled = true;
        // Enable response to back gesture event
        let promise = windowClass.setDialogBackGestureEnabled(enabled);
        promise.then(() => {
          console.info('Succeeded in setting dialog window to respond back gesture.');
        }).catch((err: BusinessError) => {
          console.error(`Failed to set dialog window to respond back gesture. Cause code: ${err.code}, message: ${err.message}`);
        });
      });
    } catch (exception) {
      console.error(`Failed to create the window. Cause code: ${exception.code}, message: ${exception.message}`);
    }
  }
}
```

**参考链接**

[setDialogBackGestureEnabled](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#setdialogbackgestureenabled12)
