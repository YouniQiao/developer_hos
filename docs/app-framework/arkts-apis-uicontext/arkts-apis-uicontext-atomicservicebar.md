---
title: "Interface (AtomicServiceBar)"
upstream_id: "harmonyos-references/arkts-apis-uicontext-atomicservicebar"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:47:22.996279"
---

# Interface (AtomicServiceBar)

提供设置元服务menuBar的属性。

![](./img/note_3.0-zh-cn.png)

- 本模块首批接口从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
- 本Interface首批接口从API version 11开始支持。
- 本模块接口仅可在Stage模型下使用。
- 以下接口需要先使用UIContext中的[getAtomicServiceBar](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#getatomicservicebar11)方法获取到AtomicServiceBar对象，再通过该对象调用对应方法。
- 从API version 12开始元服务menuBar样式变更，以下接口将失效。

#### setVisible11+

setVisible(visible: boolean): void

通过该方法设置元服务menuBar是否可见。

![](./img/note_3.0-zh-cn.png) 从API version 12开始，元服务menuBar默认隐藏并以悬浮按钮替代。在元服务中调用setVisible()时，visible参数将被忽略，无法实现menuBar的显示或隐藏。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| visible | boolean | 是 | 元服务menuBar是否可见。true表示设置menuBar可见，false表示设置menuBar不可见。 |

示例：

```
import { UIAbility } from '@kit.AbilityKit';
import { UIContext, AtomicServiceBar, window } from '@kit.ArkUI';
import { hilog } from '@kit.PerformanceAnalysisKit';

export default class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage) {
    // Main window is created, set main page for this ability
    hilog.info(0x0000, 'testTag', 'Ability onWindowStageCreate');
    windowStage.loadContent('pages/Index', (err, data) => {
      let uiContext: UIContext = windowStage.getMainWindowSync().getUIContext();
      let atomicServiceBar: Nullable<AtomicServiceBar> = uiContext.getAtomicServiceBar();
      if (atomicServiceBar != undefined) {
        hilog.info(0x0000, 'testTag', 'Get AtomicServiceBar Successfully.');
        atomicServiceBar.setVisible(false);
      } else {
        hilog.info(0x0000, 'testTag', 'Get AtomicServiceBar failed.');
      }
    });
  }
}
```

#### setBackgroundColor11+

setBackgroundColor(color:Nullable<Color | number | string>): void

通过该方法设置元服务menuBar的背景颜色。

![](./img/note_3.0-zh-cn.png) 从API version 12开始，元服务menuBar背景默认隐藏。在元服务中调用setBackgroundColor()时，color参数将被忽略，无法设置menuBar的背景颜色。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| color | Nullable | 是 | 通过该方法设置元服务menuBar的背景颜色，undefined代表使用默认颜色。number为HEX格式颜色，支持rgb或者argb，示例：0xffffff。string为rgb或者argb格式颜色，示例：'#ffffff'。 |

示例：

```
import { UIAbility } from '@kit.AbilityKit';
import { UIContext, AtomicServiceBar, window } from '@kit.ArkUI';
import { hilog } from '@kit.PerformanceAnalysisKit';

export default class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage) {
    // Main window is created, set main page for this ability
    hilog.info(0x0000, 'testTag', 'Ability onWindowStageCreate');
    windowStage.loadContent('pages/Index', (err, data) => {
      let uiContext: UIContext = windowStage.getMainWindowSync().getUIContext();
      let atomicServiceBar: Nullable<AtomicServiceBar> = uiContext.getAtomicServiceBar();
      if (atomicServiceBar != undefined) {
        hilog.info(0x0000, 'testTag', 'Get AtomicServiceBar Successfully.');
        atomicServiceBar.setBackgroundColor(0x88888888);
      } else {
        hilog.info(0x0000, 'testTag', 'Get AtomicServiceBar failed.');
      }
    });
  }
}
```

#### setTitleContent11+

setTitleContent(content:string): void

通过该方法设置元服务menuBar的标题内容。

![](./img/note_3.0-zh-cn.png) 从API version 12开始，元服务menuBar标题默认隐藏。在元服务中调用setTitleContent()时，content参数将被忽略，无法设置menuBar的标题内容。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| content | string | 是 | 元服务menuBar中的标题内容。 |

示例：

```
import { UIAbility } from '@kit.AbilityKit';
import { UIContext, AtomicServiceBar, window } from '@kit.ArkUI';
import { hilog } from '@kit.PerformanceAnalysisKit';

export default class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage) {
    // Main window is created, set main page for this ability
    hilog.info(0x0000, 'testTag', 'Ability onWindowStageCreate');
    windowStage.loadContent('pages/Index', (err, data) => {
      let uiContext: UIContext = windowStage.getMainWindowSync().getUIContext();
      let atomicServiceBar: Nullable<AtomicServiceBar> = uiContext.getAtomicServiceBar();
      if (atomicServiceBar != undefined) {
        hilog.info(0x0000, 'testTag', 'Get AtomicServiceBar Successfully.');
        atomicServiceBar.setTitleContent('text2');
      } else {
        hilog.info(0x0000, 'testTag', 'Get AtomicServiceBar failed.');
      }
    });
  }
}
```

#### setTitleFontStyle11+

setTitleFontStyle(font:FontStyle):void

通过该方法设置元服务menuBar的字体样式。

![](./img/note_3.0-zh-cn.png) 从API version 12开始，元服务menuBar标题默认隐藏。在元服务中调用setTitleFontStyle()时，font参数将被忽略，无法设置menuBar标题的字体样式，例如斜体显示。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full。

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| font | [FontStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#fontstyle) | 是 | 元服务menuBar中的字体样式。 |

示例：

```
import { UIAbility } from '@kit.AbilityKit';
import { UIContext, AtomicServiceBar, window } from '@kit.ArkUI';
import { hilog } from '@kit.PerformanceAnalysisKit';

export default class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage) {
    // Main window is created, set main page for this ability
    hilog.info(0x0000, 'testTag', 'Ability onWindowStageCreate');
    windowStage.loadContent('pages/Index', (err, data) => {
      let uiContext: UIContext = windowStage.getMainWindowSync().getUIContext();
      let atomicServiceBar: Nullable<AtomicServiceBar> = uiContext.getAtomicServiceBar();
      if (atomicServiceBar != undefined) {
        hilog.info(0x0000, 'testTag', 'Get AtomicServiceBar Successfully.');
        atomicServiceBar.setTitleFontStyle(FontStyle.Normal);
      } else {
        hilog.info(0x0000, 'testTag', 'Get AtomicServiceBar failed.');
      }
    });
  }
}
```

#### setIconColor11+

setIconColor(color:Nullable<Color | number | string>): void

通过该方法设置元服务图标的颜色。

![](./img/note_3.0-zh-cn.png) 从API version 12开始，元服务menuBar默认隐藏并以悬浮按钮替代。在元服务中调用setIconColor()时，color参数将被忽略，无法设置menuBar图标颜色。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| color | Nullable | 是 | 元服务图标的颜色，undefined代表使用默认颜色。number为HEX格式颜色，支持rgb或者argb，示例：0xffffff。string为rgb或者argb格式颜色，示例：'#ffffff'。 |

示例：

```
import { UIAbility } from '@kit.AbilityKit';
import { UIContext, AtomicServiceBar, window } from '@kit.ArkUI';
import { hilog } from '@kit.PerformanceAnalysisKit';

export default class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage) {
    // Main window is created, set main page for this ability
    hilog.info(0x0000, 'testTag', 'Ability onWindowStageCreate');
    windowStage.loadContent('pages/Index', (err, data) => {
      let uiContext: UIContext = windowStage.getMainWindowSync().getUIContext();
      let atomicServiceBar: Nullable<AtomicServiceBar> = uiContext.getAtomicServiceBar();
      if (atomicServiceBar != undefined) {
        hilog.info(0x0000, 'testTag', 'Get AtomicServiceBar Successfully.');
        atomicServiceBar.setIconColor(0x12345678);
      } else {
        hilog.info(0x0000, 'testTag', 'Get AtomicServiceBar failed.');
      }
    });
  }
}
```

#### getBarRect15+

getBarRect(): Frame

获取元服务menuBar相对窗口的布局信息。

![](./img/note_3.0-zh-cn.png) 布局信息包含了元服务menuBar的左右margin。

元服务API： 从API version 15开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

返回值：

| 类型 | 说明 |
| --- | --- |
| [Frame](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-graphics#frame) | 元服务menuBar的大小和位置。 |

示例：

```
import { AtomicServiceBar } from '@kit.ArkUI';
import { hilog } from '@kit.PerformanceAnalysisKit';

@Entry
@Component
struct Index {
  build() {
    Button("getBarRect")
      .onClick(() => {
        let uiContext: UIContext = this.getUIContext();
        let currentBar: Nullable<AtomicServiceBar> = uiContext.getAtomicServiceBar();
        if (currentBar != undefined) {
          let rect = currentBar.getBarRect();
          hilog.info(0x0000, 'testTag', 'Get AtomicServiceBar Successfully. x:'
            + rect.x + ' y:' + rect.y + ' width:' + rect.width + ' height:' + rect.height);
        } else {
          hilog.info(0x0000, 'testTag', 'Get AtomicServiceBar failed.');
        }
      })
  }
}
```

#### onBarRectChange

onBarRectChange(callback: Callback<Frame>): void

当元服务AtomicServiceMenuBar（右上角菜单功能胶囊）的大小或位置发生变化时，触发注册的回调，返回AtomicServiceMenuBar最新的布局信息。该布局信息包含了AtomicServiceMenuBar的大小和位置。

起始版本： 26.0.0

元服务API： 从API版本26.0.0开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | [Callback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-base#callback) | 是 | AtomicServiceBar布局变化时的回调，返回变化后的布局信息。 |

示例：

```
import { AtomicServiceBar, UIContext, Frame } from '@kit.ArkUI';
import { hilog } from '@kit.PerformanceAnalysisKit';

@Entry
@Component
struct Index {
  aboutToAppear() : void {
    let uiContext: UIContext = this.getUIContext();
    let currentBar: Nullable<AtomicServiceBar> = uiContext.getAtomicServiceBar();
    if (currentBar != undefined) {
      currentBar.onBarRectChange((rect: Frame) => {
        hilog.info(0x0000, 'testTag', 'trigger onBarRectChange callback success. X: %{public}d, Y: %{public}d, Width: %{public}d, height: %{public}d.', rect.x, rect.y, rect.width, rect.height);
      });
    } else {
      hilog.info(0x0000, 'testTag', 'set onBarRectChange callback failed.');
    }
  }
  build() {
    Text('hello world')
  }
}
```
