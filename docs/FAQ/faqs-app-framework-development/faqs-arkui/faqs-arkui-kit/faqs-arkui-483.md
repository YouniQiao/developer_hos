---
format: md
title: "设置了动态的visibility属性，切换组件的显示隐藏，使用requestFocus让组件获取焦点报错150003：the component is not on tree or does not exist."
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-483
---


根据焦点错误码[150003 节点不存在](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-focus#section150003-节点不存在)表明传入的id指向不存在、未挂树或者不可见节点。requestFocus前需要确保节点已经可见。

如以下代码的实现，在切换可见性时，并不能保证获取焦点时组件已经可见：

```
@Entry
struct Index {
  @State isEdit: boolean = true;

  build() {
    Column() {
      TextInput().id('input')
        .visibility(this.isEdit ? Visibility.Visible : Visibility.None)
      Button('change visibility')
        .onClick(() => {
          this.isEdit = !this.isEdit;
          if (this.isEdit) {
            try {
              this.getUIContext().getFocusController().requestFocus('input');
            } catch (e) {
              console.error("requestFocus error: " + e);
            }
          }
        })
    }
  }
}
```

推荐在[onVisibleAreaChange](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-component-visible-area-change-event#onvisibleareachange)回调中进行焦点获取，参考示例代码如下：

```
@Entry
@Component
struct GetFocusByOnVisibleAreaChange {
  @State isEdit: boolean = true;

  build() {
    Column() {
      TextInput().id('input')
        .visibility(this.isEdit ? Visibility.Visible : Visibility.None)
        .onVisibleAreaChange([1.0], () => {
          if (this.isEdit) {
            try {
              this.getUIContext().getFocusController().requestFocus('input');
            } catch (e) {
              console.error('requestFocus error:' + e);
            }
          }
        })
      Button('change visibility')
        .onClick(() => {
          this.isEdit = !this.isEdit;
        })
    }
  }
}
```
