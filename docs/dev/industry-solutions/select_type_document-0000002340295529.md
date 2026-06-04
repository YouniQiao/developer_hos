---
title: "证件类型选择"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/select_type_document-0000002340295529
---

## 场景介绍

证件类型选择是便捷生活类应用中高频使用场景之一，如用户在注册账号、实名认证、信息填报时，需要选择证件类型并输入证件号码。

本示例基于不依赖UI组件的半模态页面[openBindSheet](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#openbindsheet12)构建用户注册的证件类型半模态页面，支持选择的证件类型包括居民身份证、境外人员身份证明、港澳台居民居住证等。

## 效果预览

![](./img/aa53aa18.png "点击放大")

## 实现思路

1. 使用[@Extend装饰器](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-extend)定义扩展组件样式，统一设置用户注册表单文本框/文本输入框样式。使用[@Styles装饰器](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-style)定义组件重用样式，统一设置用户注册表单Row样式。

   ```
   // UserRegistrationPage.ets
   @Extend(Text)
   function textStyle() {
     // 定义文字样式信息
   }
   @Component
   export struct UserRegistrationPage {
     @Styles
     rowStyle(){
       // 定义组件样式信息
     }
     build() {
       Column({ space: Constant.REG_INFO_SPACE_10 }) {
         Row() {
           Text($r('app.string.name_id_type'))
             .textStyle()
         }
         .rowStyle()
       }
     }
   }
   ```
2. 通过不依赖UI组件的半模态页面[openBindSheet](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#openbindsheet12)弹出证件类型选项，供用户选择。

   ```
   // UserRegistrationPage.ets构造半模态页面参数，触发半模态页面显示和关闭
   private ctx: UIContext = this.getUIContext();
   private contentNode: ComponentContent<Object> =
     new ComponentContent(this.ctx, wrapBuilder(idTypeBindSheetBuilder),
       new BindSheetParams(this.selectedIDType, idTypeMainData, false));

   aboutToAppear(): void {
     PromptActionClass.setContext(this.ctx)
     PromptActionClass.setContentNode(this.contentNode)
     PromptActionClass.setOptions(this.options)
   }

   idTypeOnClick() {
     // 每次重新点开证件类型，均为打开一级弹框
     this.openMainSheet();
   }

   openMainSheet() {
     PromptActionClass.closeBindSheet();
     this.contentNode.update(new BindSheetParams(this.selectedIDType, idTypeMainData, false));
     this.options = {
       // ...
     };
     PromptActionClass.setOptions(this.options);
     PromptActionClass.openBindSheet();
   }

   // IDTypeBindSheet.ets构造半模态页面实现
   @Builder
   export function idTypeBindSheetBuilder(dialogParams: BindSheetParams) {
     Column() {
       // ...
     }
   }
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                     // 代码区
│  ├──common
│  │  └──CommonConstants.ets              // 常量
│  ├──components
│  │  └──IDTypeBindSheet.ets              // 证件类型半模态页面实现
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──pages
│  │  ├──NavigationPage.ets               // 主页面
│  │  └──UserRegistrationPage.ets         // 用户注册页面
│  ├──utils
│  │  ├──DisplayUtil.ets                  // 页面显示工具类
│  │  └──PromptActionClass.ets            // 半模态页面工具类
│  └──viewmodel
│     └──IDTypeData.ets                   // 证件类型数据模型类
└──entry/src/main/resources               // 资源目录
```

## 参考文档

[Checkbox](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-checkbox)

[焦点控制](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-focus)

[@Extend装饰器：定义扩展组件样式](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-extend)

[@Styles装饰器：定义组件重用样式](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-style)

[Class(UIContext)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext)

## 代码下载

[证件类型选择示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260210095340.14700424695926445815856924187804%3A50001231000000%3A2800%3ABC4504A2886E5FFBE82E174D082908216911FC99BED4392C1C4B9657F268AB9B.zip?needInitFileName=true)
