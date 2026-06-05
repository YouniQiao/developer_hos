---
format: md
title: "TextInput在聚焦时如何使光标回到起点"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-88
---

1. TextInput组件绑定[onEditChange](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-textinput#oneditchange8)事件，该事件可以在TextInput输入状态变化时触发。
2. 在事件回调用TextInputController.[caretPosition](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-textinput#caretposition10)方法设置光标位置，并需要用到setTimeout延迟方法。

   ```
   @Entry
   @Component
   struct TextInputDemo {
     controller: TextInputController = new TextInputController();

     build() {
       Column() {
         TextInput({ controller: this.controller })
           .onEditChange((isEditing: boolean) => {
             if (isEditing) {
               setTimeout(() => {
                 // The cursor will reset to the beginning of the text after 100ms
                 this.controller.caretPosition(0);
               }, 100)
             }
           })
       }
     }
   }
   ```

**参考链接**

[TextInput](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-textinput)
