---
title: "@ohos.selectionInput.selectionManager (划词管理)"
upstream_id: "harmonyos-references/js-apis-selectioninput-selectionmanager"
catalog: "harmonyos-references"
content_hash: "3d7c78f14e7a"
synced_at: "2026-08-07T15:58:10.929286"
---

# @ohos.selectionInput.selectionManager (划词管理)

本模块提供划词管理能力，包括创建面板、显示面板、移动面板、隐藏面板、销毁面板、监听鼠标/触控板划词事件、获取选中文本等。典型使用流程如下：

1. 调用[on('selectionCompleted')](#selectionmanageronselectioncompleted)订阅划词完成事件。
2. 在回调中调用[getSelectionContent](#getselectioncontent)获取选中文本。
3. 调用[createPanel](#createpanel)创建划词面板。
4. 调用[setUiContent](#setuicontent)加载页面内容。
5. 调用[moveToGlobalDisplay](#movetoglobaldisplay)移动面板到指定位置。
6. 调用[show](#show)显示面板。
7. 调用[destroyPanel](#destroypanel)销毁面板。
8. 调用[off('selectionCompleted')](#selectionmanageroffselectioncompleted)取消订阅划词完成事件。

![](./img/note_3.0-zh-cn.png)

- 本模块首批接口从API version 24开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
- 本模块仅支持PC/2in1设备。开发者可通过canIUse('SystemCapability.SelectionInput.Selection')判断当前设备是否支持该功能。
- 仅支持集成了划词扩展的应用调用，划词扩展的实现请参见[SelectionExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-selectioninput-selectionextensionability)。

#### 导入模块

```
import { selectionManager } from '@kit.BasicServicesKit';
```

#### selectionManager

系统能力： SystemCapability.SelectionInput.Selection

模型约束： 此接口仅可在Stage模型下使用。

#### [h2]selectionManager.on('selectionCompleted')

on(type: 'selectionCompleted', callback: Callback<SelectionInfo>): void

订阅划词完成事件，与[off('selectionCompleted')](#selectionmanageroffselectioncompleted)搭配使用取消订阅。

系统能力： SystemCapability.SelectionInput.Selection

模型约束： 此接口仅可在Stage模型下使用。

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 设置监听类型，固定取值为'selectionCompleted'。 |
| callback | Callback | 是 | 回调函数，返回划词事件信息[SelectionInfo](#selectioninfo)。该回调仅在用户通过鼠标或触控板选中文本（双击/三击/滑动）后按下Ctrl键时触发。 |

错误码：

以下错误码的详细介绍请参见[划词服务错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-selection)，未标明的通用错误码请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 33600003 | The application calling the API does not match the application selected in the system settings. |

示例：

```
import { selectionManager } from '@kit.BasicServicesKit';

try {
  // 订阅划词完成事件
  selectionManager.on('selectionCompleted', (info: selectionManager.SelectionInfo) => {
    console.info('Enter the callback function.');
  });
} catch (err) {
  console.error(`Failed to register selectionCompleted callback. Error code: ${err.code}, error message: ${err.message}`);
}
```

#### [h2]selectionManager.off('selectionCompleted')

off(type: 'selectionCompleted', callback?: Callback<SelectionInfo>): void

取消订阅划词完成事件，与[on('selectionCompleted')](#selectionmanageronselectioncompleted)搭配使用。

系统能力： SystemCapability.SelectionInput.Selection

模型约束： 此接口仅可在Stage模型下使用。

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 取消订阅的事件类型，固定取值为'selectionCompleted'。 |
| callback | Callback | 否 | 需要取消的回调函数（即之前通过on方法订阅时的回调实例）。参数不填写时，取消订阅type对应的所有回调事件。 |

示例：

```
import { selectionManager } from '@kit.BasicServicesKit';

// 定义划词完成事件回调函数，用于订阅和取消订阅
let selectionChangeCallback = (info: selectionManager.SelectionInfo) => {
  console.info('Enter the callback function.');
};

// 先订阅划词完成事件回调，为后续取消订阅做准备
selectionManager.on('selectionCompleted', selectionChangeCallback);
try {
  // 取消订阅划词完成事件
  selectionManager.off('selectionCompleted', selectionChangeCallback);
} catch (err) {
  console.error(`Failed to unregister selectionCompleted. Error code: ${err.code}, error message: ${err.message}`);
}
```

#### [h2]getSelectionContent()

getSelectionContent(): Promise<string>

获取选中文本的内容。使用Promise异步回调。需在[on('selectionCompleted')](#selectionmanageronselectioncompleted)回调中调用，且仅在划词完成事件触发后有效。

系统能力： SystemCapability.SelectionInput.Selection

模型约束： 此接口仅可在Stage模型下使用。

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，返回当前选中文本的内容。 |

错误码：

以下错误码的详细介绍请参见[划词服务错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-selection)，未标明的通用错误码请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 33600001 | Selection service exception. |
| 33600004 | The interface is called too frequently. |
| 33600005 | The interface is called at the wrong time. |
| 33600006 | The current application is prohibited from accessing content. |
| 33600007 | The length of selected content is out of range. |
| 33600008 | Getting the selected content times out. |

示例：

```
import { selectionManager } from '@kit.BasicServicesKit';

// 订阅划词完成事件，在回调中获取选中文本
selectionManager.on('selectionCompleted', async (info: selectionManager.SelectionInfo) => {
  try {
    // 获取选中文本内容
    let content = await selectionManager.getSelectionContent();
    console.info(`Succeeded in getting selection content: ${content}`);
  } catch (err) {
    console.error(`Failed to get selection content. Error code: ${err.code}, error message: ${err.message}`);
  }
});
```

#### [h2]createPanel

createPanel(ctx: Context, info: PanelInfo): Promise<Panel>

创建划词面板，用于向用户展示业务相关的操作界面或文本处理结果，使用完毕后需调用[destroyPanel](#destroypanel)销毁面板释放资源。使用Promise异步回调。

单个划词应用仅允许创建一个[MENU_PANEL](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-selectioninput-selectionpanel#paneltype)和一个[MAIN_PANEL](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-selectioninput-selectionpanel#paneltype)。

系统能力： SystemCapability.SelectionInput.Selection

模型约束： 此接口仅可在Stage模型下使用。

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ctx | [Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context#context) | 是 | 当前划词面板依赖的上下文信息，需使用SelectionExtensionAbility提供的上下文。 |
| info | [PanelInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-selectioninput-selectionpanel#panelinfo) | 是 | 划词面板的配置信息，用于指定面板类型、位置和宽高。单个划词应用仅允许创建一个MENU_PANEL和一个MAIN_PANEL。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，返回当前创建的划词面板对象，可用于面板内容设置、显示、隐藏、移动及事件订阅等管理操作。 |

错误码：

以下错误码的详细介绍请参见[划词服务错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-selection)，未标明的通用错误码请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 33600001 | Selection service exception. |
| 33600003 | The application calling the API does not match the application selected in the system settings. |

示例：

```
import { selectionManager, SelectionExtensionAbility, PanelInfo, PanelType, BusinessError } from '@kit.BasicServicesKit';
import { rpc } from '@kit.IPCKit';
import { Want } from '@kit.AbilityKit';

class SelectionAbilityStub extends rpc.RemoteObject {
  constructor(descriptor: string) {
    super(descriptor);
  }
  onRemoteMessageRequest(
    code: number,
    data: rpc.MessageSequence,
    reply: rpc.MessageSequence,
    options: rpc.MessageOption
  ): boolean | Promise<boolean> {
    return true;
  }
}

class ServiceExtAbility extends SelectionExtensionAbility {
  onConnect(want: Want): rpc.RemoteObject {
    // 配置划词面板信息，包括面板类型、位置和尺寸
    let panelInfo: PanelInfo = {
      panelType: PanelType.MENU_PANEL,
      x: 0,
      y: 0,
      width: 500,
      height: 200
    };
    let selectionPanel: selectionManager.Panel | undefined = undefined;
    // 创建划词面板。this.context通过继承SelectionExtensionAbility获取
    selectionManager.createPanel(this.context, panelInfo)
      .then((panel: selectionManager.Panel) => {
        selectionPanel = panel;
        console.info('Succeed in creating panel.');
      }).catch((err: BusinessError) => {
        console.error(`Failed to create panel. Error code: ${err.code}, error message: ${err.message}`);
    });
    return new SelectionAbilityStub('remote');
  }
}
export default ServiceExtAbility;
```

#### [h2]destroyPanel

destroyPanel(panel: Panel): Promise<void>

销毁划词面板。与[createPanel](#createpanel)搭配使用，用于销毁由createPanel()创建的面板对象。使用Promise异步回调。

系统能力： SystemCapability.SelectionInput.Selection

模型约束： 此接口仅可在Stage模型下使用。

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| panel | [Panel](#panel) | 是 | 要销毁的面板对象。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，无返回结果。 |

错误码：

以下错误码的详细介绍请参见[划词服务错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-selection)，未标明的通用错误码请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 33600001 | Selection service exception. |

示例：

```
import { selectionManager, SelectionExtensionAbility, PanelInfo, PanelType, BusinessError } from '@kit.BasicServicesKit';
import { rpc } from '@kit.IPCKit';
import { Want } from '@kit.AbilityKit';

class SelectionAbilityStub extends rpc.RemoteObject {
  constructor(descriptor: string) {
    super(descriptor);
  }
  onRemoteMessageRequest(
    code: number,
    data: rpc.MessageSequence,
    reply: rpc.MessageSequence,
    options: rpc.MessageOption
  ): boolean | Promise<boolean> {
    return true;
  }
}

class ServiceExtAbility extends SelectionExtensionAbility {
  onConnect(want: Want): rpc.RemoteObject {
    // 配置划词面板信息，包括面板类型、位置和尺寸
    let panelInfo: PanelInfo = {
      panelType: PanelType.MENU_PANEL,
      x: 0,
      y: 0,
      width: 500,
      height: 200
    };
    let selectionPanel: selectionManager.Panel | undefined = undefined;
    // 先创建划词面板，获取面板实例用于后续销毁。this.context通过继承SelectionExtensionAbility获取
    selectionManager.createPanel(this.context, panelInfo)
      .then((panel: selectionManager.Panel) => {
        console.info('Succeed in creating panel.');
        selectionPanel = panel;
        try {
          if (selectionPanel) {
            // 销毁划词面板
            selectionManager.destroyPanel(selectionPanel).then(() => {
              console.info('Succeed in destroying panel.');
            }).catch((err: BusinessError) => {
              console.error(`Failed to destroy panel. Error code: ${err.code}, error message: ${err.message}`);
            });
          }
        } catch (err) {
          console.error(`Failed to destroy panel. Error code: ${err.code}, error message: ${err.message}`);
        }
      }).catch((err: BusinessError) => {
        console.error(`Failed to create panel. Error code: ${err.code}, error message: ${err.message}`);
    });
    return new SelectionAbilityStub('remote');
  }
}
export default ServiceExtAbility;
```

#### SelectionInfo

划词事件信息。

系统能力： SystemCapability.SelectionInput.Selection

模型约束： 此接口仅可在Stage模型下使用。

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| selectionType | [SelectionType](#selectiontype) | 否 | 否 | 划词方式枚举值。 |
| startDisplayX | number | 否 | 否 | 划词起始位置的屏幕x轴坐标，单位为px。 |
| startDisplayY | number | 否 | 否 | 划词起始位置的屏幕y轴坐标，单位为px。 |
| endDisplayX | number | 否 | 否 | 划词结束位置的屏幕x轴坐标，单位为px。 |
| endDisplayY | number | 否 | 否 | 划词结束位置的屏幕y轴坐标，单位为px。 |
| startWindowX | number | 否 | 否 | 划词起始位置的窗口x轴坐标，单位为px。 |
| startWindowY | number | 否 | 否 | 划词起始位置的窗口y轴坐标，单位为px。 |
| endWindowX | number | 否 | 否 | 划词结束位置的窗口x轴坐标，单位为px。 |
| endWindowY | number | 否 | 否 | 划词结束位置的窗口y轴坐标，单位为px。 |
| displayID | number | 否 | 否 | 被划词应用窗口的屏幕ID。 |
| windowID | number | 否 | 否 | 被划词应用的窗口ID。 |
| bundleName | string | 否 | 否 | 被划词应用的bundleName。 |

#### Panel

划词面板对象，通过[createPanel](#createpanel)创建，提供面板内容设置、显示、隐藏、移动及事件订阅等管理能力，适用于在划词完成后向用户展示自定义操作界面的场景。

系统能力： SystemCapability.SelectionInput.Selection

模型约束： 此接口仅可在Stage模型下使用。

下列API均需使用[createPanel](#createpanel)获取到Panel实例后，通过实例调用。

#### [h2]setUiContent

setUiContent(path: string): Promise<void>

为当前的划词面板设置界面内容，例如展示翻译结果、搜索建议或自定义操作按钮等。需通过[createPanel](#createpanel)获取到Panel实例后调用。使用Promise异步回调。

系统能力： SystemCapability.SelectionInput.Selection

模型约束： 此接口仅可在Stage模型下使用。

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | 要加载到面板中的页面内容的路径，Stage模型下该路径需添加到工程的resources/base/profile/main_pages.json文件中，不支持FA模型。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，无返回结果。 |

错误码：

以下错误码的详细介绍请参见[划词服务错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-selection)，未标明的通用错误码请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 33600001 | Selection service exception. |
| 33600002 | This selection window has been destroyed. |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';

try {
  // 为划词面板加载页面内容。selectionPanel为createPanel创建出的panel实例
  selectionPanel.setUiContent('pages/Index').then(() => {
    console.info('Succeeded in setting the content.');
  }).catch((err: BusinessError) => {
    console.error(`Failed to setUiContent. Error code: ${err.code}, error message: ${err.message}`);
  });
} catch (err) {
  console.error(`Failed to setUiContent. Error code: ${err.code}, error message: ${err.message}`);
}
```

#### [h2]show

show(): Promise<void>

显示划词面板，与[hide](#hide)搭配使用。需通过[createPanel](#createpanel)获取到Panel实例后调用。使用Promise异步回调。

系统能力： SystemCapability.SelectionInput.Selection

模型约束： 此接口仅可在Stage模型下使用。

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，无返回结果。 |

错误码：

以下错误码的详细介绍请参见[划词服务错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-selection)，未标明的通用错误码请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 33600001 | Selection service exception. |
| 33600002 | This selection window has been destroyed. |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';

// 显示划词面板。selectionPanel为createPanel创建出的panel实例
selectionPanel.show().then(() => {
  console.info('Succeeded in showing the panel.');
}).catch((err: BusinessError) => {
  console.error(`Failed to show panel. Error code: ${err.code}, error message: ${err.message}`);
});
```

#### [h2]hide

hide(): Promise<void>

隐藏当前划词面板，与[show](#show)搭配使用。需通过[createPanel](#createpanel)获取到Panel实例后调用。使用Promise异步回调。如不主动调用，面板在失焦时会自动隐藏。

系统能力： SystemCapability.SelectionInput.Selection

模型约束： 此接口仅可在Stage模型下使用。

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，无返回结果。 |

错误码：

以下错误码的详细介绍请参见[划词服务错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-selection)，未标明的通用错误码请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 33600001 | Selection service exception. |
| 33600002 | This selection window has been destroyed. |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';

// 隐藏划词面板。selectionPanel为createPanel创建出的panel实例
selectionPanel.hide().then(() => {
  console.info('Succeeded in hiding the panel.');
}).catch((err: BusinessError) => {
  console.error(`Failed to hide panel. Error code: ${err.code}, error message: ${err.message}`);
});
```

#### [h2]startMoving

startMoving(): Promise<void>

设置划词面板可随鼠标、触控板或触屏拖动移动位置，指针释放后自动停止移动。需通过[createPanel](#createpanel)获取到Panel实例后调用。使用Promise异步回调。该接口需在onTouch的回调函数中调用，并且事件类型为TouchType.Down。

系统能力： SystemCapability.SelectionInput.Selection

模型约束： 此接口仅可在Stage模型下使用。

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，无返回结果。 |

错误码：

以下错误码的详细介绍请参见[划词服务错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-selection)，未标明的通用错误码请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 33600001 | Selection service exception. |
| 33600002 | This selection window has been destroyed. |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';

// 此代码需放置在ArkUI页面组件的build()方法中，RelativeContainer为ArkUI内置组件，TouchEvent和TouchType为ArkUI框架内置类型
RelativeContainer() {
  /*
   * 页面布局内容，需要开发者根据实际补充
   */
}
.onTouch((event: TouchEvent) => {
  if (event.type === TouchType.Down) {
    if (selectionPanel !== undefined) {
      // 使划词面板可随鼠标、触控板或触屏拖动移动位置。selectionPanel为createPanel创建出的panel实例
      selectionPanel.startMoving().then(() => {
        console.info('Succeeded in startMoving the panel.');
      }).catch((err: BusinessError) => {
        console.error(`Failed to startMoving panel. Error code: ${err.code}, error message: ${err.message}`);
      });
    }
  }
})
```

#### [h2]moveToGlobalDisplay

moveToGlobalDisplay(x: number, y: number): Promise<void>

移动划词面板至屏幕全局坐标系下的指定位置，支持移动到扩展屏上。需通过[createPanel](#createpanel)获取到Panel实例后调用。使用Promise异步回调。

系统能力： SystemCapability.SelectionInput.Selection

模型约束： 此接口仅可在Stage模型下使用。

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | 目标位置在屏幕全局坐标系下的x轴坐标，单位为px。全局坐标系以主屏幕左上角为原点，x轴正方向向右；扩展屏的x坐标视屏幕布局可能为负值。 |
| y | number | 是 | 目标位置在屏幕全局坐标系下的y轴坐标，单位为px。全局坐标系以主屏幕左上角为原点，y轴正方向向下；扩展屏的y坐标视屏幕布局可能为负值。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，无返回结果。 |

错误码：

以下错误码的详细介绍请参见[划词服务错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-selection)，未标明的通用错误码请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 33600001 | Selection service exception. |
| 33600002 | This selection window has been destroyed. |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';

try {
  // 移动划词面板至屏幕指定位置。selectionPanel为createPanel创建出的panel实例
  selectionPanel.moveToGlobalDisplay(200, 200).then(() => {
    console.info('Succeeded in moving the panel.');
  }).catch((err: BusinessError) => {
    console.error(`Failed to move panel. Error code: ${err.code}, error message: ${err.message}`);
  });
} catch (err) {
  console.error(`Failed to move panel. Error code: ${err.code}, error message: ${err.message}`);
}
```

#### [h2]on('destroyed')

on(type: 'destroyed', callback: Callback<void>): void

订阅划词面板销毁事件，与[off('destroyed')](#offdestroyed)搭配使用。需通过[createPanel](#createpanel)获取到Panel实例后调用。

系统能力： SystemCapability.SelectionInput.Selection

模型约束： 此接口仅可在Stage模型下使用。

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 设置监听类型，固定取值为'destroyed'。 |
| callback | Callback | 是 | 回调函数，调用[destroyPanel](#destroypanel)销毁面板时触发。 |

示例：

```
try {
  // 订阅划词面板销毁事件。selectionPanel为createPanel创建出的panel实例
  selectionPanel.on('destroyed', () => {
    console.info('Panel has been destroyed.');
  });
} catch (err) {
  console.error(`Failed to register destroyed callback. Error code: ${err.code}, error message: ${err.message}`);
}
```

#### [h2]off('destroyed')

off(type: 'destroyed', callback?: Callback<void>): void

取消订阅划词面板销毁事件，与[on('destroyed')](#ondestroyed)搭配使用。需通过[createPanel](#createpanel)获取到Panel实例后调用。

系统能力： SystemCapability.SelectionInput.Selection

模型约束： 此接口仅可在Stage模型下使用。

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 取消订阅的事件类型，固定取值为'destroyed'。 |
| callback | Callback | 否 | 需要取消的回调函数（即之前通过on方法订阅时的回调实例）。参数不填写时，取消订阅type对应的所有回调事件。 |

示例：

```
try {
  // 取消订阅划词面板销毁事件。selectionPanel为createPanel创建出的panel实例
  selectionPanel.off('destroyed');
} catch (err) {
  console.error(`Failed to unregister destroyed. Error code: ${err.code}, error message: ${err.message}`);
}
```

#### [h2]on('hidden')

on(type: 'hidden', callback: Callback<void>): void

订阅划词面板隐藏事件，与[off('hidden')](#offhidden)搭配使用。面板调用[hide](#hide)隐藏或失焦自动隐藏时触发该事件。需通过[createPanel](#createpanel)获取到Panel实例后调用。

系统能力： SystemCapability.SelectionInput.Selection

模型约束： 此接口仅可在Stage模型下使用。

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 设置监听类型，固定取值为'hidden'。 |
| callback | Callback | 是 | 回调函数，面板隐藏时触发。面板可通过调用[hide](#hide)主动隐藏，或在失焦时自动隐藏。 |

示例：

```
try {
  // 订阅划词面板隐藏事件。selectionPanel为createPanel创建出的panel实例
  selectionPanel.on('hidden', () => {
    console.info('Panel has been hidden.');
  });
} catch (err) {
  console.error(`Failed to register hidden callback. Error code: ${err.code}, error message: ${err.message}`);
}
```

#### [h2]off('hidden')

off(type: 'hidden', callback?: Callback<void>): void

取消订阅划词面板隐藏事件，与[on('hidden')](#onhidden)搭配使用。需通过[createPanel](#createpanel)获取到Panel实例后调用。

系统能力： SystemCapability.SelectionInput.Selection

模型约束： 此接口仅可在Stage模型下使用。

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 取消订阅的事件类型，固定取值为'hidden'。 |
| callback | Callback | 否 | 需要取消的回调函数（即之前通过on方法订阅时的回调实例）。参数不填写时，取消订阅type对应的所有回调事件。 |

示例：

```
try {
  // 取消订阅划词面板隐藏事件。selectionPanel为createPanel创建出的panel实例
  selectionPanel.off('hidden');
} catch (err) {
  console.error(`Failed to unregister hidden. Error code: ${err.code}, error message: ${err.message}`);
}
```

#### SelectionType

定义划词方式枚举值。

系统能力： SystemCapability.SelectionInput.Selection

模型约束： 此接口仅可在Stage模型下使用。

| 名称 | 值 | 说明 |
| --- | --- | --- |
| MOUSE_MOVE | 1 | 鼠标或触控板滑动划词。 |
| DOUBLE_CLICK | 2 | 鼠标或触控板双击划词。 |
| TRIPLE_CLICK | 3 | 鼠标或触控板三击划词。 |
