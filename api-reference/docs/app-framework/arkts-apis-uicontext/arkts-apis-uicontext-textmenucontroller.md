---
title: "Class (TextMenuController)"
upstream_id: "harmonyos-references/arkts-apis-uicontext-textmenucontroller"
catalog: "harmonyos-references"
content_hash: "89ec9e622ce7"
synced_at: "2026-07-09T00:57:29.524934"
---

# Class (TextMenuController)

提供控制文本菜单的能力。

![](./img/note_3.0-zh-cn.png)

- 本模块首批接口从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
- 本Class首批接口从API version 16开始支持。
- 以下非静态API需先使用UIContext中的[getTextMenuController()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#gettextmenucontroller16)方法获取TextMenuController实例，再通过此实例调用对应方法。

#### setMenuOptions16+

setMenuOptions(options: TextMenuOptions): void

设置菜单选项。

元服务API： 从API version 16开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | [TextMenuOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-text-common#textmenuoptions16对象说明) | 是 | 设置菜单选项。 默认值:{showMode: TextMenuShowMode.DEFAULT} |

示例：

```
// xxx.ets
@Entry
@Component
struct Index {
  aboutToAppear(): void {
    // 设置在对应的UIContext下优先使用独立窗口显示文本选择菜单
    this.getUIContext()
      .getTextMenuController()
      .setMenuOptions(
        {
          showMode: TextMenuShowMode.PREFER_WINDOW
        }
      );
  }

  build() {
    Row() {
      Column() {
        TextInput({ text: "这是一个TextInput，长按弹出文本选择菜单" })
          .height(60)
          .fontStyle(FontStyle.Italic)
          .fontWeight(FontWeight.Bold)
          .textAlign(TextAlign.Center)
          .caretStyle({ width: '4vp' })

        Text("这是一个Text，长按弹出文本选择菜单")
          .height(60)
          .copyOption(CopyOptions.InApp)
          .fontStyle(FontStyle.Italic)
          .fontWeight(FontWeight.Bold)
          .textAlign(TextAlign.Center)
      }.width('100%')
    }
    .height('100%')
  }
}
```

#### disableSystemServiceMenuItems20+

static disableSystemServiceMenuItems(disable: boolean): void

屏蔽文本选择菜单内所有系统服务菜单项。

![](./img/note_3.0-zh-cn.png)

- 此接口调用后整个应用进程都会生效。
- 此接口可在[UIAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-uiability)使用。
- 此接口调用后将影响文本组件的接口[editMenuOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-text#editmenuoptions12)，其回调方法[onCreateMenu](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-text-common#oncreatemenu12)的入参列表中不包含被屏蔽的菜单选项。
- 涉及文本选择菜单的组件有 [Text](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-text)、[TextArea](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-textarea)、[TextInput](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-textinput)、[Search](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-search)、[RichEditor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-richeditor)、[Web](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web)。
- 系统服务菜单项指除[TextMenuItemId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-text-common#textmenuitemid12)中的复制、剪切、全选、粘贴以外的菜单项。
- 当disableSystemServiceMenuItems与disableMenuItems同时设置时，优先生效先设置的disableSystemServiceMenuItems。
- 使用该接口时，全局生效，多次调用以最后一次为准。
- 可以通过以下三种方式恢复禁用菜单： 仅设置disableSystemServiceMenuItems(true)禁用菜单时，设置false即可恢复禁用；
- 仅设置disableMenuItems禁用菜单时，设置为空数组即可恢复禁用；
- 当disableSystemServiceMenuItems与disableMenuItems同时使用时，则前者设置为false，后者设置为空数组，即可恢复禁用。

元服务API： 从API version 20开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| disable | boolean | 是 | 是否禁用系统服务菜单项。true表示禁用，false表示不禁用。 默认值：false |

示例：

```
import { TextMenuController } from '@kit.ArkUI';

// xxx.ets
@Entry
@Component
struct Index {
  aboutToAppear(): void {
    // 禁用所有系统服务菜单。
    TextMenuController.disableSystemServiceMenuItems(true)
  }

  aboutToDisappear(): void {
    // 页面消失恢复系统服务菜单。
    TextMenuController.disableSystemServiceMenuItems(false)
  }

  build() {
    Row() {
      Column() {
        TextInput({ text: "这是一个TextInput，长按弹出文本选择菜单" })
          .height(60)
          .fontStyle(FontStyle.Italic)
          .fontWeight(FontWeight.Bold)
          .textAlign(TextAlign.Center)
          .caretStyle({ width: '4vp' })
          .editMenuOptions({
            onCreateMenu: (menuItems: Array<TextMenuItem>) => {
                // menuItems不包含被屏蔽的系统菜单项。
                return menuItems
            },
            onMenuItemClick: (menuItem: TextMenuItem, textRange: TextRange) => {
                return false
            }
          })
      }.width('100%')
    }
    .height('100%')
  }
}
```

#### disableMenuItems20+

static disableMenuItems(items: Array<TextMenuItemId>): void

屏蔽文本选择菜单内指定的系统服务菜单项。

![](./img/note_3.0-zh-cn.png)

- 此接口调用后整个应用进程都会生效。
- 此接口可在[UIAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-uiability)使用。
- 此接口调用后将影响文本组件的接口[editMenuOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-text#editmenuoptions12)，其回调方法[onCreateMenu](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-text-common#oncreatemenu12)的入参列表中不包含被屏蔽的菜单选项。
- 涉及文本选择菜单的组件有 [Text](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-text)、[TextArea](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-textarea)、[TextInput](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-textinput)、[Search](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-search)、[RichEditor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-richeditor)、[Web](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web)。
- 系统服务菜单项指除[TextMenuItemId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-text-common#textmenuitemid12)中的复制、剪切、全选、粘贴以外的菜单项。
- 当disableSystemServiceMenuItems与disableMenuItems同时设置时，优先生效先设置的disableSystemServiceMenuItems。
- 使用该接口时，全局生效，多次调用以最后一次为准。
- 禁用一级菜单项，会同时禁用其所有的二级菜单项。例如禁用一级菜单项[TextMenuItemId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-text-common#textmenuitemid12)中的autoFill（父菜单项），会同时禁用二级菜单项[TextMenuItemId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-text-common#textmenuitemid12)中的密码保险箱passwordVault（子菜单项）。
- 不支持禁用二级菜单项。如果需要，可通过禁用对应的一级菜单项实现。
- 可以通过以下三种方式恢复禁用菜单： 仅设置disableSystemServiceMenuItems(true)禁用菜单时，设置false即可恢复禁用；
- 仅设置disableMenuItems禁用菜单时，设置为空数组即可恢复禁用；
- 当disableSystemServiceMenuItems与disableMenuItems同时使用时，则前者设置为false，后者设置为空数组，即可恢复禁用。

元服务API： 从API version 20开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| items | Array | 是 | 禁用菜单项的列表。 默认值: [] 默认不禁用任何菜单。 |

示例：

```
import { TextMenuController } from '@kit.ArkUI';

// xxx.ets
@Entry
@Component
struct Index {
  aboutToAppear(): void {
    // 禁用搜索和翻译菜单。
    TextMenuController.disableMenuItems([TextMenuItemId.SEARCH, TextMenuItemId.TRANSLATE])
  }

  aboutToDisappear(): void {
    // 恢复系统服务菜单。
    TextMenuController.disableMenuItems([])
  }

  build() {
    Row() {
      Column() {
        TextInput({ text: "这是一个TextInput，长按弹出文本选择菜单" })
          .height(60)
          .fontStyle(FontStyle.Italic)
          .fontWeight(FontWeight.Bold)
          .textAlign(TextAlign.Center)
          .caretStyle({ width: '4vp' })
          .editMenuOptions({
            onCreateMenu: (menuItems: Array<TextMenuItem>) => {
                // menuItems不包含搜索和翻译。
                return menuItems;
            },
            onMenuItemClick: (menuItem: TextMenuItem, textRange: TextRange) => {
                return false
            }
          })
      }.width('100%')
    }
    .height('100%')
  }
}
```
