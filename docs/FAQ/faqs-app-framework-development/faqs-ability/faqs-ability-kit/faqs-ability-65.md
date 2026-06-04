---
title: "UIAbility和UIExtensionAbility有什么区别？分别推荐在什么场景使用"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-ability-65
---

UIAbility 用于实现独立界面，UIExtensionAbility 用于功能扩展。

* UIAbility组件包含UI，用于与用户交互。UIAbility运行时，任务列表中会显示对应的任务视图。建议在主界面、视频播放页、设置页面等场景下使用。

  ```
  import { UIAbility } from "@kit.AbilityKit";
  import { window } from "@kit.ArkUI";

  // MainAbility.ets
  export default class MainAbility extends UIAbility {
    onWindowStageCreate(windowStage: window.WindowStage) {
      windowStage.loadContent('pages/MainPage', (err) => {
        if (err) {
          console.error('Page loading failed');
        }
      });
    }
  }
  ```
* UIExtensionAbility组件是一种带UI的扩展组件。UIExtensionAbility运行时没有独立窗口，而是作为宿主的节点嵌入宿主窗口显示，任务列表中也没有对应的任务视图。推荐用于悬浮窗、快捷菜单等场景。

  ```
  import { UIExtensionAbility, AbilityConstant } from '@kit.AbilityKit';

  export default class UIExtAbility extends UIExtensionAbility {
    onCreate(launchParam: AbilityConstant.LaunchParam) {
      console.log(`onCreate, launchParam: ${JSON.stringify(launchParam)}`);
    }
  }
  ```

**参考链接**

[UIAbility组件概述](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-overview)
