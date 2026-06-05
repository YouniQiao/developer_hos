---
title: "固定样式弹出框"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-fixes-style-dialog
format: md
---


固定样式弹出框采用固定的布局格式，这使得开发者无需关心具体的显示布局细节，只需输入所需显示的文本内容，从而简化了使用流程，提升了便捷性。

## 使用约束

* 可以通过调用UIContext或getUIContext，在非UI页面或某些异步回调中使用本文中的接口。CalendarPickerDialog当前不支持此操作。
* 操作菜单 (showActionMenu)、对话框 (showDialog)需先使用UIContext中的[getPromptAction()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#getpromptaction)方法获取到PromptAction对象，再通过该对象调用对应方法。
* 列表选择弹出框 (ActionSheet)、警告弹出框 (AlertDialog)、选择器弹出框 (PickerDialog)中除CalendarPickerDialog都需先使用ohos.window中的[getUIContext()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#getuicontext10)方法获取UIContext实例，再通过此实例调用对应方法。或者可以通过自定义组件内置方法[getUIContext()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-custom-component-api#getuicontext)获取。

操作菜单 (showActionMenu)、对话框 (showDialog)、列表选择弹出框 (ActionSheet)、警告弹出框 (AlertDialog)可以设置isModal为false变成非模态弹窗。

操作菜单 (showActionMenu)、对话框 (showDialog)、列表选择弹出框 (ActionSheet)和警告弹出框 (AlertDialog)不支持设置内容区的字体样式，如字体颜色、大小换行等操作，如需自定义样式，建议使用[不依赖UI组件的全局自定义弹出框](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-uicontext-custom-dialog)或者[基础自定义弹出框](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-common-components-custom-dialog)。

## 生命周期

弹出框提供了生命周期函数，用于通知用户该弹出框的生命周期。生命周期的触发时序依次为：onWillAppear -> onDidAppear -> onWillDisappear -> onDidDisappear，也可参照各组件API。

从API version 19开始，对话框（showDialog）、列表选择弹出框（ActionSheet）、警告弹出框（AlertDialog）支持以下生命周期。

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| onWillAppear | Callback\<void\> | 弹出框显示动效前的事件回调。 |
| onDidAppear | Callback\<void\> | 弹出框弹出后的事件回调。 |
| onWillDisappear | Callback\<void\> | 弹出框退出动效前的事件回调。 |
| onDidDisappear | Callback\<void\> | 弹出框消失后的事件回调。 |

## 操作菜单 (showActionMenu)

操作菜单通过UIContext中的getPromptAction方法获取到PromptAction对象，再通过该对象调用[showActionMenu](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-promptaction#showactionmenu11)接口实现，支持在回调或开发者自定义类中使用。

操作菜单中，title字段的字体最大放大倍数为2。

创建并显示操作菜单后，菜单的响应结果会异步返回选中按钮在buttons数组中的索引。

```
import { PromptAction } from '@kit.ArkUI';

@Entry
@Component
export struct ShowActionMenuExample {
  build() {
    // ...
      Column({ space: 12 }) {

        Column() {
          Button('ShowActionMenu')
            .margin(30)
            .onClick(() => {
              let uiContext = this.getUIContext();
              let promptAction: PromptAction = uiContext.getPromptAction();
              try {
                promptAction.showActionMenu({
                  title: 'showActionMenu Title Info',
                  buttons: [
                    {
                      text: 'item1',
                      color: '#666666'
                    },
                    {
                      text: 'item2',
                      color: '#000000'
                    },
                  ]
                })
                  .then(data => {
                    console.info('showActionMenu success, click button: ' + data.index);
                  })
                  .catch((err: Error) => {
                    console.error('showActionMenu error: ' + err);
                  })
              } catch (error) {
              }
            })
        }.width('100%')
      }
      .width('100%')
      .height('100%')
      // ...
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/DialogProject/entry/src/main/ets/pages/fixedstyledialog/ShowActionMenu.ets#L16-L72" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：ShowActionMenu.ets</a></div>


![](./img/21551f05.gif)

## 对话框 (showDialog)

对话框通过UIContext中的getPromptAction方法获取到PromptAction对象，再通过该对象调用[showDialog](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-promptaction#showdialog)接口实现，支持在回调或开发者自定义类中使用。

对话框中，title字段的字体最大放大倍数为2。

创建并显示对话框，对话框响应后异步返回选中按钮在buttons数组中的索引。

```
// xxx.ets
import { PromptAction } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
export struct ShowDialogExample {
  build() {
    // ...
      Column({ space: 12 }) {
        Column() {
          Button('ShowDialog')
            .margin(30)
            .onClick(() => {
              let uiContext = this.getUIContext();
              let promptAction: PromptAction = uiContext.getPromptAction();
              try {
                promptAction.showDialog({
                  title: 'showDialog Title Info',
                  message: 'Message Info',
                  buttons: [
                    {
                      text: 'button1',
                      color: '#000000'
                    },
                    {
                      text: 'button2',
                      color: '#000000'
                    }
                  ]
                }, (err, data) => {
                  if (err) {
                    console.error('showDialog err: ' + err);
                    return;
                  }
                  console.info('showDialog success callback, click button: ' + data.index);
                });
              } catch (error) {
                let message = (error as BusinessError).message;
                let code = (error as BusinessError).code;
                console.error(`showdialog args error code is ${code}, message is ${message}`);
              }
            })
        }.width('100%')
      }
      .width('100%')
      .height('100%')
      .padding({ left: 12, right: 12 })
      // ...
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/DialogProject/entry/src/main/ets/pages/fixedstyledialog/ShowDialog.ets#L15-L74" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：ShowDialog.ets</a></div>


![](./img/d30b43a0.gif)

## 选择器弹窗 (PickerDialog)

选择器弹窗通常用于在用户进行某些操作（如点击按钮）时显示特定的信息或选项。

### 日历选择器弹窗 (CalendarPickerDialog)

日历选择器弹窗提供日历视图，包含年、月和星期信息，通过[CalendarPickerDialog](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-methods-calendarpicker-dialog)接口实现。开发者可调用show函数，定义并弹出日历选择器弹窗。

日历选择器弹窗的弹出依赖UI的执行上下文，不可在[UI上下文不明确](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-global-interface#ui上下文不明确)的地方使用，具体约束参见[UIContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext)说明。

通过配置[CalendarDialogOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-methods-calendarpicker-dialog#calendardialogoptions对象说明)中的acceptButtonStyle、cancelButtonStyle属性可以实现自定义按钮样式。

```
// xxx.ets

@Entry
@Component
export struct CalendarDialog {
  private selectedDate: Date = new Date('2024-04-23');

  build() {
    NavDestination() {
      Column({ space: 12 }) {

        Column() {
          Button('Show CalendarPicker Dialog')
            .margin(20)
            .onClick(() => {
              console.info('CalendarDialog.show');
              CalendarPickerDialog.show({
                selected: this.selectedDate,
                acceptButtonStyle: {
                  fontColor: '#2787d9',
                  fontSize: '16fp',
                  backgroundColor: '#f7f7f7',
                  borderRadius: 10
                },
                cancelButtonStyle: {
                  fontColor: Color.Red,
                  fontSize: '16fp',
                  backgroundColor: '#f7f7f7',
                  borderRadius: 10
                },
                onAccept: (date: Date) => {
                  // 当弹出框再次弹出时显示选中的是上一次确定的日期
                  this.selectedDate = date;
                }
              })
            })
        }.width('100%')

      }
      .width('100%')
      .height('100%')
      .padding({ left: 12, right: 12 })
    }
    // ...
    // 请将$r('app.string.CustomDialog_calender')替换为实际资源文件，在本示例中该资源文件的value值为"日历选择器弹窗"
    .title($r('app.string.CustomDialog_calender'))
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/DialogProject/entry/src/main/ets/pages/fixedstyledialog/CalendarPickerDialog.ets#L16-L68" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：CalendarPickerDialog.ets</a></div>


![](./img/0e058bec.gif)

### 日期滑动选择器弹窗 (DatePickerDialog)

开发者可以利用指定的日期范围，创建日期滑动选择器弹窗，将日期信息清晰地展示在弹出的窗口上。

日期滑动选择器弹窗通过UIContext中的[showDatePickerDialog](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#showdatepickerdialog)接口实现。

弹窗中配置[DatePickerDialogOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-methods-datepicker-dialog#datepickerdialogoptions对象说明)的lunarSwitch、showTime属性为true时，会展示切换农历的开关和时间，当checkbox被选中时，会显示农历。当按下确定按钮时，弹窗会通过onDateAccept返回目前所选中的日期。如需弹窗再次弹出时显示选中的是上一次确定的日期，就要在回调中重新给selectTime进行赋值。

```
@Entry
@Component
export struct DatePickerDialogExample {
  @State selectTime: Date = new Date('2023-12-25T08:30:00');

  build() {
    NavDestination() {
      Column({ space: 12 }) {

        Column() {
          Button('showDatePickerDialog')
            .margin(30)
            .onClick(() => {
              this.getUIContext().showDatePickerDialog({
                start: new Date('2000-1-1'),
                end: new Date('2100-12-31'),
                selected: this.selectTime,
                lunarSwitch: true,
                showTime: true,
                onDateAccept: (value: Date) => {
                  this.selectTime = value;
                  console.info('DatePickerDialog:onAccept()' + JSON.stringify(value));
                },
              })
            })
        }.width('100%').margin({ top: 5 })

      }
      .width('100%')
      .height('100%')
      .padding({ left: 12, right: 12 })
    }
    // ...
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/DialogProject/entry/src/main/ets/pages/fixedstyledialog/DatePickerDialog.ets#L16-L57" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：DatePickerDialog.ets</a></div>


![](./img/134214f6.gif)

该示例通过配置disappearTextStyle、textStyle、selectedTextStyle、acceptButtonStyle、cancelButtonStyle实现了自定义文本以及按钮样式。

```
@Entry
@Component
export struct DatePickerCustomDialogExample {
  @State selectTime: Date = new Date('2023-12-25T08:30:00');

  build() {
    NavDestination() {
      Column() {
        Button('showDatePickerDialog')
          .margin(30)
          .onClick(() => {
            this.getUIContext().showDatePickerDialog({
              start: new Date('2000-1-1'),
              end: new Date('2100-12-31'),
              selected: this.selectTime,
              textStyle: { color: '#2787d9', font: { size: '14fp', weight: FontWeight.Normal } },
              selectedTextStyle: { color: '#004aaf', font: { size: '18fp', weight: FontWeight.Regular } },
              acceptButtonStyle: {
                fontColor: '#2787d9',
                fontSize: '16fp',
                backgroundColor: '#f7f7f7',
                borderRadius: 10
              },
              cancelButtonStyle: {
                fontColor: Color.Red,
                fontSize: '16fp',
                backgroundColor: '#f7f7f7',
                borderRadius: 10
              }
            })
          })
      }.width('100%').margin({ top: 5 })
    }
    // ...
    }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/DialogProject/entry/src/main/ets/pages/fixedstyledialog/DatePickerCustomDialog.ets#L17-L59" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：DatePickerCustomDialog.ets</a></div>


![](./img/2094d055.gif)

### 时间滑动选择器弹窗 (TimePickerDialog)

开发者可根据24小时的时间区间，创建时间滑动选择器弹窗，将时间信息清晰地展示在弹出的窗口上。

时间滑动选择器弹窗通过UIContext中的[showTimePickerDialog](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#showtimepickerdialog)接口实现。

该示例通过配置[disappearTextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-timepicker#disappeartextstyle10)、[textStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-timepicker#textstyle10)、[selectedTextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-timepicker#selectedtextstyle10)、[acceptButtonStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-methods-timepicker-dialog#timepickerdialogoptions对象说明)、[cancelButtonStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-methods-timepicker-dialog#timepickerdialogoptions对象说明)实现了自定义文本以及按钮样式。

```
// xxx.ets

@Entry
@Component
export struct TimePickerDialogExample {
  @State selectTime: Date = new Date('2023-12-25T08:30:00');

  build() {
    NavDestination() {
      Column({ space: 12 }) {

        Column() {
          Button('showTimePickerDialog')
            .margin(30)
            .onClick(() => {
              this.getUIContext().showTimePickerDialog({
                selected: this.selectTime,
                textStyle: { color: '#2787d9', font: { size: '14fp', weight: FontWeight.Normal } },
                selectedTextStyle: { color: '#004aaf', font: { size: '18fp', weight: FontWeight.Regular } },
                acceptButtonStyle: {
                  fontColor: '#2787d9',
                  fontSize: '16fp',
                  backgroundColor: '#f7f7f7',
                  borderRadius: 10
                },
                cancelButtonStyle: {
                  fontColor: Color.Red,
                  fontSize: '16fp',
                  backgroundColor: '#f7f7f7',
                  borderRadius: 10
                }
              })
            })
        }.width('100%').margin({ top: 5 })
      }
      // ...
    }
    // ...
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/DialogProject/entry/src/main/ets/pages/fixedstyledialog/TimePickerDialog.ets#L16-L65" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：TimePickerDialog.ets</a></div>


![](./img/ac1b5568.gif)

### 文本滑动选择器弹窗 (TextPickerDialog)

开发者可根据指定的选择范围，创建文本滑动选择器弹窗，将文本信息清晰地展示在弹出的窗口上。

文本滑动选择器弹窗通过UIContext中的[showTextPickerDialog](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#showtextpickerdialog)接口实现。

该示例通过设置range的参数类型为TextCascadePickerRangeContent[]，实现3列文本选择器弹窗。当按下确定按钮时，弹窗会通过onAccept返回目前所选中文本和索引值。如需弹窗再次弹出时显示选中的是上一次确定的文本，就要在回调中重新给select进行赋值。

```
@Entry
@Component
export struct TextPickerCNDialogExample {
  private fruits: TextCascadePickerRangeContent[] = [
    {
      text: '辽宁省',
      children: [{ text: '沈阳市', children: [{ text: '沈河区' }, { text: '和平区' }, { text: '浑南区' }] },
        { text: '大连市', children: [{ text: '中山区' }, { text: '金州区' }, { text: '长海县' }] }]
    },
    {
      text: '吉林省',
      children: [{ text: '长春市', children: [{ text: '南关区' }, { text: '宽城区' }, { text: '朝阳区' }] },
        { text: '四平市', children: [{ text: '铁西区' }, { text: '铁东区' }, { text: '梨树县' }] }]
    },
    {
      text: '黑龙江省',
      children: [{ text: '哈尔滨市', children: [{ text: '道里区' }, { text: '道外区' }, { text: '南岗区' }] },
        { text: '牡丹江市', children: [{ text: '东安区' }, { text: '西安区' }, { text: '爱民区' }] }]
    }
  ];
  private select: number = 0;

  build() {
    // ···
      Column() {
        Button('showTextPickerDialog')
        // ···
          .margin(30)
          .onClick(() => {
            this.getUIContext().showTextPickerDialog({
              range: this.fruits,
              selected: this.select,
              onAccept: (value: TextPickerResult) => {
                this.select = value.index as number
              }
            });
          })
      }.width('100%').margin({ top: 5 })
    // ···
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/DialogProject/entry/src/main/ets/pages/fixedstyledialog/TextPickerCNDialog.ets#L16-L65" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：TextPickerCNDialog.ets</a></div>


![](./img/8e4f4f52.gif)

## 列表选择弹窗 (ActionSheet)

列表选择器弹窗适用于呈现多个操作选项，尤其当界面中仅需展示操作列表而无其他内容时。

列表选择器弹窗通过UIContext中的[showActionSheet](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#showactionsheet)接口实现。

列表选择弹窗中，title字段的字体最大放大倍数为2。

该示例通过配置width、height、transition等接口，定义了弹窗的样式以及弹出动效。

```
@Entry
@Component
export struct showActionSheetExample {

  build() {
    NavDestination() {
      Column({ space: 12 }) {

        Column() {
          Button('showActionSheet')
            .margin(30)
            .onClick(() => {
              this.getUIContext().showActionSheet({
                title: 'ActionSheet title',
                message: 'message',
                autoCancel: false,
                width: 300,
                height: 300,
                cornerRadius: 20,
                borderWidth: 1,
                borderStyle: BorderStyle.Solid,
                borderColor: Color.Blue,
                backgroundColor: Color.White,
                transition: TransitionEffect.asymmetric(TransitionEffect.OPACITY
                  .animation({ duration: 3000, curve: Curve.Sharp })
                  .combine(TransitionEffect.scale({ x: 1.5, y: 1.5 })
                  .animation({ duration: 3000, curve: Curve.Sharp })),
                  TransitionEffect.OPACITY.animation({ duration: 100, curve: Curve.Smooth })
                    .combine(TransitionEffect.scale({ x: 0.5, y: 0.5 })
                    .animation({ duration: 100, curve: Curve.Smooth }))),
                confirm: {
                  value: 'Confirm button',
                  action: () => {
                    console.info('Get Alert Dialog handled');
                  }
                },
                alignment: DialogAlignment.Center,
                sheets: [
                  {
                    title: 'apples',
                    action: () => {
                    }
                  },
                  {
                    title: 'bananas',
                    action: () => {
                    }
                  },
                  {
                    title: 'pears',
                    action: () => {
                      console.info('pears');
                    }
                  }
                ]
              })
            })
        }.width('100%').margin({ top: 5 })

      }
      .width('100%')
      .height('100%')
      .padding({ left: 12, right: 12 })
    }
    .backgroundColor('#f1f2f3')
    // 请将$r('app.string.CustomDialog_ActionSheet')替换为实际资源文件，在本示例中该资源文件的value值为"列表选择弹窗"
    .title($r('app.string.CustomDialog_ActionSheet'))
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/DialogProject/entry/src/main/ets/pages/fixedstyledialog/ActionSheet.ets#L16-L86" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：ActionSheet.ets</a></div>


![](./img/3698443a.gif)

## 警告弹窗 (AlertDialog)

向用户提问或得到用户的许可时，使用警告弹窗。

* 警告弹窗用来提示重要信息，但会中断当前任务，尽量提供必要的信息和有用的操作。
* 避免仅使用警告弹窗提供信息，用户不喜欢被信息丰富但不可操作的警告打断。

警告弹窗通过UIContext中的[showAlertDialog](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#showalertdialog)接口实现。

警告弹窗中，title和subtitle字段的字体最大放大倍数为2。

该示例通过配置width、height、transition等接口，定义了多个按钮弹窗的样式以及弹出动效。

```
import { PromptAction } from '@kit.ArkUI';

@Entry
@Component
export struct showAlertDialogExample {
  build() {
    NavDestination() {
      Column({ space: 12 }) {

        Column() {
          Button('showAlertDialog')
            .margin(30)
            .onClick(() => {
              this.getUIContext().showAlertDialog(
                {
                  title: 'title',
                  message: 'text',
                  autoCancel: true,
                  alignment: DialogAlignment.Center,
                  offset: { dx: 0, dy: -20 },
                  gridCount: 3,
                  transition: TransitionEffect.asymmetric(TransitionEffect.OPACITY
                    .animation({ duration: 3000, curve: Curve.Sharp })
                    .combine(TransitionEffect.scale({ x: 1.5, y: 1.5 })
                    .animation({ duration: 3000, curve: Curve.Sharp })),
                    TransitionEffect.OPACITY.animation({ duration: 100, curve: Curve.Smooth })
                      .combine(TransitionEffect.scale({ x: 0.5, y: 0.5 })
                      .animation({ duration: 100, curve: Curve.Smooth }))),
                  buttons: [{
                    value: 'cancel',
                    action: () => {
                      console.info('Callback when the first button is clicked');
                    }
                  },
                    {
                      enabled: true,
                      defaultFocus: true,
                      style: DialogButtonStyle.HIGHLIGHT,
                      value: 'ok',
                      action: () => {
                        console.info('Callback when the second button is clicked');
                      }
                    }],
                }
              )
            })
        }.width('100%').margin({ top: 5 })

      }
      .width('100%')
      .height('100%')
      .padding({ left: 12, right: 12 })
    }
    .backgroundColor('#f1f2f3')
    // 请将$r('app.string.CustomDialog_AlertDialog')替换为实际资源文件，在本示例中该资源文件的value值为"警告弹窗"
    .title($r('app.string.CustomDialog_AlertDialog'))
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/DialogProject/entry/src/main/ets/pages/fixedstyledialog/AlertDialog.ets#L16-L76" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：AlertDialog.ets</a></div>


![](./img/8349490e.gif)
