---
format: md
title: "如何判断应用当前在前台/后台"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-ability-101
---

可以通过以下两种方式获取：

* 方案一：通过窗口的[on('windowStageEvent')](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-windowstage#onwindowstageevent9)接口，开启 WindowStage 生命周期变化的监听，获取当前的生命周期状态。

  代码示例：

  ```
  // EntryAbility.ets
  onWindowStageCreate(windowStage: window.WindowStage): void {
    // Main window is created, set main page for this ability
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageCreate');
    try {
      windowStage.on('windowStageEvent', (data) => {
        if (data === window.WindowStageEventType.SHOWN) {
          hilog.info(0x0000, 'testTag', '%{public}s', 'window stage is shown');
        } else if (data === window.WindowStageEventType.HIDDEN) {
          hilog.info(0x0000, 'testTag', '%{public}s', 'window stage is hidden');
        }
      });
    } catch (err) {
      hilog.error(0x0000, 'testTag', '%{public}s', 'Failed to enable the listener for ' +
        'window stage event changes. Cause:' + JSON.stringify(err));
    }
    windowStage.loadContent('pages/Index', (err, data) => {
      if (err.code) {
        hilog.error(0x0000, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err) ?? '');
        return;
      }
      hilog.info(0x0000, 'testTag', 'Succeeded in loading the content. Data: %{public}s', JSON.stringify(data) ?? '');
    });
  }
  ```
* 方案二：通过ApplicationContext的[getRunningProcessInformation()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-applicationcontext#applicationcontextgetrunningprocessinformation)方法获取进程信息，其中包含[当前进程运行状态](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-appmanager#processstate10)，可以判断是否处于前台。
