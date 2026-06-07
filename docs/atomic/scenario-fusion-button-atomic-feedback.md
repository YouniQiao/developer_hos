---
title: "反馈与投诉Button"
original_url: /docs/dev/atomic-dev/scenario-fusion-atomic-button/scenario-fusion-button-atomic-feedback
format: md
---


## 场景介绍

从6.0.0(20)开始，支持反馈与投诉Button功能。

反馈与投诉Button可以帮助开发者在元服务中，通过组件拉起元服务反馈与投诉页面。

![](./img/2ada2f46.png)

该场景在元服务中可正常使用，在其他场景中返回[10008](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scenario-fusion-error-code#section10008-调用方非元服务)错误码。

## 前提条件

参见[开发准备](/docs/dev/app-dev/application-services/scenario-fusion-preparations)。

## 约束与限制

反馈与投诉Button支持Phone、Tablet设备，并且从对于6.1.0(23)版本开始，新增支持PC/2in1设备。

## 效果图展示

单击“反馈与投诉”按钮，拉起反馈与投诉页面。

![](./img/a2ac42e6.png)

## 开发步骤

1. 导入Scenario Fusion Kit模块以及相关公共模块。

   ```
   import { FunctionalButton, functionalButtonComponentManager } from '@kit.ScenarioFusionKit';
   import { hilog } from '@kit.PerformanceAnalysisKit';
   ```
2. 在容器中声明FunctionalButton，指定Button的openType，并设置对应的回调函数，代码如下：

   ```
   @Entry
   @Component
   struct Index {
     build() {
       Row() {
         Column() {
           // 构建FunctionalButton组件实例。
           FunctionalButton({
             params: {
               // OpenType.FEEDBACK表示该按钮用于拉起反馈页面。
               openType: functionalButtonComponentManager.OpenType.FEEDBACK,
               label: '反馈与投诉',
               // 调整按钮样式。
               styleOption: {
                 styleConfig: new functionalButtonComponentManager.ButtonConfig()
                   .fontSize(20)
               },
             },
             // 当OpenType设置为FEEDBACK时，回调函数必须是onFeedback。
             controller: new functionalButtonComponentManager.FunctionalButtonController()
               .onFeedback((err) => {
                 if (err) {
                   // 错误日志处理。
                   hilog.error(0x0000, "testTag", "error: %{public}d %{public}s", err.code, err.message);
                   return;
                 }
                 // 成功日志处理。
                 hilog.info(0x0000, "testTag", "succeeded in pulling up the feedback page");
               })
           })
         }.width('100%')
       }.height('100%')
     }
   }
   ```

   ![](./img/05281295.png)

   * openType参数填写"functionalButtonComponentManager.OpenType.FEEDBACK"指定Button为反馈与投诉类型。
   * controller参数必须对应填写"new functionalButtonComponentManager.FunctionalButtonController().onFeedback"。
   * 可使用自定义Modifier设置按钮样式，参考[示例](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scenario-fusion-functionalbuttoncomponentmanager#示例一场景化button使用自定义modifier设置按钮样式)。

   其他参数请参考：[FunctionalButton（Button组件）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scenario-fusion-functionalbutton)。
