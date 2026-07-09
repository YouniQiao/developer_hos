---

title: "全局基础输入事件监听"
upstream_id: "harmonyos-references/ts-inputeventmonitor"
catalog: "harmonyos-references"
synced_at: "2026-07-09T00:57:37.118571"
content_hash: "081bf8655896"
---


# 全局基础输入事件监听

监听基础输入事件，在[UIContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext)进行事件分发前统一拦截和过滤输入事件，使用示例请参考[addLocalInputEventMonitor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#addlocalinputeventmonitor)。

起始版本： 26.0.0

#### InputEventMonitor

输入事件监听器标识对象。

此对象由系统创建并返回，作为监听器的唯一标识。

![](./img/note_3.0-zh-cn.png)

- 对象为空对象，不包含任何可访问的成员。
- 开发者无法主动构造此对象，只能通过[addLocalInputEventMonitor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#addlocalinputeventmonitor)接口注册获取。
- 用于后续解除注册时验证身份。

起始版本： 26.0.0

元服务API： 从API版本26.0.0开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

模型约束： 此接口仅可在Stage模型下使用。

#### InputEventListener

type InputEventListener = (event: RawInputEventWrapper) => InputEventInterceptResult

输入事件监听器回调函数类型。

![](./img/note_3.0-zh-cn.png)

- RawInputEventWrapper是抽象类，开发者无法使用new运算符创建实例。
- 系统会在事件触发时自动创建实例并通过此参数传递给回调函数。
- 当前回调参数event仅会封装以下原始输入事件类型：[MouseEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-mouse-key#mouseevent对象说明)、[TouchEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-events-touch#touchevent对象说明)、[KeyEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-events-key#keyevent对象说明)。开发者可通过[asMouseEvent](#asmouseevent)、[asTouchEvent](#astouchevent)、[asKeyEvent](#askeyevent)获取对应事件对象。
- 请勿在回调中执行耗时操作（如复杂计算或网络请求），否则可能导致应用卡顿。
- 监听器在UI线程中同步执行会直接阻塞事件处理流程。建议只进行简单的判断和计算。

起始版本： 26.0.0

元服务API： 从API版本26.0.0开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

模型约束： 此接口仅可在Stage模型下使用。

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | [RawInputEventWrapper](#rawinputeventwrapper) | 是 | 输入事件包装器，系统自动创建和传递，开发者无需手动创建。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| [InputEventInterceptResult](#inputeventinterceptresult) | 事件拦截结果。 |

#### InputEventInterceptResult

输入事件拦截结果接口，用于监听器回调[InputEventListener](#inputeventlistener)返回是否拦截的决策。

起始版本： 26.0.0

元服务API： 从API版本26.0.0开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

模型约束： 此接口仅可在Stage模型下使用。

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| action | [InputEventInterceptAction](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#inputeventinterceptaction) | 否 | 否 | 输入事件拦截动作。 |

#### RawInputEventWrapper

原始输入事件包装器类。

提供统一的接口来访问不同类型的输入事件，确保类型安全和向后兼容性。

此类封装了原始的MouseEvent、TouchEvent或KeyEvent对象，并通过类型安全的方法访问。

此类为抽象类，开发者无法自行创建实例。系统会在触发输入事件监听器时自动创建实例并传递回调函数。

![](./img/note_3.0-zh-cn.png) 由于监听器在事件派发给具体组件之前执行，事件中的一些字段将无法提供有效值：如触发对象[target](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-events-click#eventtarget8)、相对于组件的坐标[x](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-mouse-key#属性)和[y](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-mouse-key#属性)、[getCurrentLocalPosition](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-events-touch#getcurrentlocalposition)和[stopPropagation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-events-touch#touchevent对象说明)方法、TouchEvent的[preventDefault](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-events-touch#touchevent对象说明)和[getHistoricalPoints](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-events-touch#gethistoricalpoints10)方法以及KeyEvent的[metaKey](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-events-key#keyevent对象说明)属性和[getModifierKeyState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-events-key#getmodifierkeystate12)方法。

示例：

```
const listener: InputEventListener = (wrapper: RawInputEventWrapper) => {
  // 使用类型判断 + 获取事件对象
  if (wrapper.isMouseEvent()) {
    const mouseEvent = wrapper.asMouseEvent()!;
    console.info(`Mouse: (${mouseEvent.windowX}, ${mouseEvent.windowY})`);
    return { action: InputEventInterceptAction.CONTINUE };
  }
  if (wrapper.isTouchEvent()) {
    const touchEvent = wrapper.asTouchEvent()!;
    console.info(`Touch: ${touchEvent.touches.length} points`);
    return { action: InputEventInterceptAction.CONTINUE };
  }
  if (wrapper.isKeyEvent()) {
    const keyEvent = wrapper.asKeyEvent()!;
    console.info(`Key: ${keyEvent.keyText}`);
    return { action: InputEventInterceptAction.CONTINUE };
  }
  return { action: InputEventInterceptAction.CONTINUE };
};
```

#### [h2]isMouseEvent

isMouseEvent(): boolean

判断是否为鼠标事件。

起始版本： 26.0.0

元服务API： 从API版本26.0.0开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

模型约束： 此接口仅可在Stage模型下使用。

返回值：

| 类型 | 说明 |
| --- | --- |
| boolean | 判断是否为鼠标事件，如果是鼠标事件则返回true，否则返回false。 |

#### [h2]isTouchEvent

isTouchEvent(): boolean

判断是否为触摸事件。

起始版本： 26.0.0

元服务API： 从API版本26.0.0开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

模型约束： 此接口仅可在Stage模型下使用。

返回值：

| 类型 | 说明 |
| --- | --- |
| boolean | 判断是否为触摸事件，如果是触摸事件则返回true，否则返回false。 |

#### [h2]isKeyEvent

isKeyEvent(): boolean

判断是否为按键事件。

起始版本： 26.0.0

元服务API： 从API版本26.0.0开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

模型约束： 此接口仅可在Stage模型下使用。

返回值：

| 类型 | 说明 |
| --- | --- |
| boolean | 判断是否为按键事件，如果是按键事件则返回true，否则返回false。 |

#### [h2]asMouseEvent

asMouseEvent(): MouseEvent | null

获取鼠标事件。

起始版本： 26.0.0

元服务API： 从API版本26.0.0开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

模型约束： 此接口仅可在Stage模型下使用。

返回值：

| 类型 | 说明 |
| --- | --- |
| [MouseEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-mouse-key#mouseevent对象说明) | null | 获取鼠标事件，如果是鼠标事件则返回事件对象，否则返回null。 |

#### [h2]asTouchEvent

asTouchEvent(): TouchEvent | null

获取触摸事件。

起始版本： 26.0.0

元服务API： 从API版本26.0.0开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

模型约束： 此接口仅可在Stage模型下使用。

返回值：

| 类型 | 说明 |
| --- | --- |
| [TouchEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-events-touch#touchevent对象说明) | null | 获取触摸事件，如果是触摸事件则返回事件对象，否则返回null。 |

#### [h2]asKeyEvent

asKeyEvent(): KeyEvent | null

获取按键事件。

起始版本： 26.0.0

元服务API： 从API版本26.0.0开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

模型约束： 此接口仅可在Stage模型下使用。

返回值：

| 类型 | 说明 |
| --- | --- |
| [KeyEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-events-key#keyevent对象说明) | null | 获取按键事件，如果是按键事件则返回事件对象，否则返回null。 |
