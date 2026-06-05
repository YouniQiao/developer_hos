---
title: "切换输入法应用"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/switch-inputmethod-guide
format: md
---


输入法框架服务提供了切换输入法应用的API，支持切换输入法、切换输入法和子类型、切换当前输入法的子类型。

![](./img/ef10f86d.png)

1. 以下接口的使用仅允许在当前输入法应用中调用。
2. 本示例假设已经在输入法应用中执行，如何实现一个输入法应用，请参考[实现一个输入法应用](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/inputmethod-application-guide)开发指导。

## 切换当前输入法子类型

1. 在已完成一个输入法应用的基础上，当输入法应用是当前输入法时，在输入法应用中使用[switchCurrentInputMethodSubtype](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inputmethod#inputmethodswitchcurrentinputmethodsubtype9)接口，传入当前输入法的子类型[InputMethodSubtype](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inputmethod-subtype#inputmethodsubtype)作为参数即可切换当前输入法子类型。

   ```
   async switchCurrentInputMethodSubtype(item: InputMethodSubtype) {
     try {
       await inputMethod.switchCurrentInputMethodSubtype(item);
       this.currentInputMethodSubtype = inputMethod.getCurrentInputMethodSubtype().id;
     } catch (err) {
       console.error(`SwitchCurrentInputMethodSubtype error: ${err.code} ${err.message}`);
       let error: BusinessError = err as BusinessError;
     }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/InputMethod/KikaInputMethod/entry/src/main/ets/components/Submenu.ets#L80-L90" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Submenu.ets</a></div>

2. 输入法应用中注册子类型变化事件，根据不同子类型加载不同的输入界面。

   ```
   // 设置监听子类型事件，改变输入法应用界面
   inputMethodAbility.on('setSubtype', (inputMethodSubtype: InputMethodSubtype) => {
     if (inputMethodSubtype.id === 'InputMethodExtAbility') {
       AppStorage.setOrCreate('subtypeChange', 0);
     }
     if (inputMethodSubtype.id === 'InputMethodExtAbility1') {
       AppStorage.setOrCreate('subtypeChange', 1);
     }
   });
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/InputMethod/KikaInputMethod/entry/src/main/ets/InputMethodExtensionAbility/model/KeyboardController.ets#L572-L582" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：KeyboardController.ets</a></div>


## 切换输入法应用

在已完成一个输入法应用的基础上，当输入法应用是当前输入法时，在输入法应用中使用[switchInputMethod](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inputmethod#inputmethodswitchinputmethod9)接口，传入目标输入法的[InputMethodProperty](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inputmethod#inputmethodproperty8)信息，即可切换输入法到目标输入法。

```
async switchInputMethod(item: string) {
  try {
    this.inputMethods = await inputMethod.getSetting().getInputMethods(true); // 获取已使能的输入法列表
    let currentInputMethod = inputMethod.getCurrentInputMethod(); // 获取当前输入法
    for (let i = 0; i < this.inputMethods.length; i++) {
      if (item != currentInputMethod.name) { // 判断不是当前输入法时，切换到该输入法，实际开发中可以切换到固定输入法
        await inputMethod.switchInputMethod(this.inputMethods[i]);
      }
    }
  } catch (err) {
    let error = err as BusinessError;
    Log.showError(TAG, `switchInputMethod catch error: ${error.code} ${error.message}`);
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/InputMethod/KikaInputMethod/entry/src/main/ets/components/Submenu.ets#L63-L78" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Submenu.ets</a></div>


## 切换输入法应用和子类型

在已完成一个输入法应用的基础上，当输入法应用是当前输入法时，在输入法应用中使用[switchCurrentInputMethodAndSubtype](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inputmethod#inputmethodswitchcurrentinputmethodandsubtype9)接口，传入目标输入法的[InputMethodProperty](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inputmethod#inputmethodproperty8)，目标输入法的子类型[InputMethodSubtype](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inputmethod-subtype#inputmethodsubtype)信息，即可切换输入法到目标输入法的指定子类型。

```
import { inputMethod } from '@kit.IMEKit';

export class KeyboardController {
  async switchInputMethodAndSubtype() {
    try {
      let inputMethods: Array<inputMethod.InputMethodProperty> =
        await inputMethod.getSetting().getInputMethods(true); // 获取已使能的输入法列表
      let currentInputMethod: inputMethod.InputMethodProperty = inputMethod.getCurrentInputMethod(); // 获取当前输入法
      for (let i = 0; i < inputMethods.length; i++) {
        if (inputMethods[i].name != currentInputMethod.name) { // 判断不是当前输入法时，切换到该输入法，实际开发中可以切换到固定输入法
          let subTypes = await inputMethod.getSetting().listInputMethodSubtype(inputMethods[i]); // 获取目标输入法的子类型
          if (subTypes.length > 0) {
            await inputMethod.switchCurrentInputMethodAndSubtype(inputMethods[i], subTypes[0]); // 本示例默认切换到获取的第一个子类型
          }
          return;
        }
      }
    } catch (err) {
      let error: BusinessError = err as BusinessError;
      console.error(`Failed to switchCurrentInputMethodAndSubtype, code: ${err.code}, message: ${err.message}`);
    }
  }
}
```
