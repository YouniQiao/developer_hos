---
displayed_sidebar: appDevSidebar
title: "查询应用内快捷方式"
original_url: /docs/dev/app-dev/application-services/store-kit-guide/store-productview/appgallery-productview-shortcut/appgallery-productview-getshortcut
format: md
---


![](./img/d2a65c1c.png)

6.1.1(24)版本开始，新增查询桌面快捷方式接口，支持用户查询桌面快捷方式。

## 场景介绍

查询应用内快捷方式用于获取当前应用已固定在桌面上的所有快捷方式列表。用户可以在应用内查看已添加到桌面的快捷方式列表，快速找到特定的快捷方式。也可通过定期查看和管理这些快捷方式，确保桌面的整洁和高效。

## 业务流程

![](./img/3cd28653.png)

1. 用户需要查询当前应用的快捷方式。
2. 应用调用[getPinShortcutInfos](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-productviewmanager#productviewmanagergetpinshortcutinfos)接口获取快捷方式信息。
3. AppGallery Kit返回查询结果信息给应用。
4. 应用将查询结果返回给用户。

## 约束与限制

* 应用市场推荐服务不支持模拟器，请使用真机调试。在模拟器中使用该服务将会提示：无法获取内容，请点击屏幕重试。
* 应用市场推荐服务支持Phone、Tablet、PC/2in1设备。并且从6.0.2(22)版本开始，新增支持TV设备。

## 接口说明

详细接口说明可参考[接口文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-productviewmanager)。

| 接口名 | 描述 |
| --- | --- |
| [getPinShortcutInfos](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-productviewmanager#productviewmanagergetpinshortcutinfos)(): Promise[PinShortcutInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-productviewmanager#pinshortcutinfo)[] | 查询桌面快捷方式列表。 |

## 开发步骤

1. 导入productViewManager模块及相关公共模块。

   ```
   import { BusinessError } from '@kit.BasicServicesKit';
   import { hilog } from '@kit.PerformanceAnalysisKit';
   import { productViewManager } from '@kit.AppGalleryKit';
   ```
2. 调用[getPinShortcutInfos](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-productviewmanager#productviewmanagergetpinshortcutinfos)方法查询当前应用所有桌面快捷方式列表信息。

   ```
   const TAG: string = 'GetPinShortcutInfos';

   @Entry
   @Component
   struct GetPinShortcutInfos {

     build() {
       Column() {
         Button("GetPinShortcutInfos")
           .onClick(() => {
             try {
            // 通过getPinShortcutInfos接口获取桌面快捷方式列表信息
               productViewManager.getPinShortcutInfos()
                 .then(() => {
                   hilog.info(0x0001, TAG, `getPinShortcutInfos success.`);
                 }).catch((error: BusinessError) => {
                 hilog.error(0x0001, TAG, `getPinShortcutInfos error. code is ${error.code}, message is ${error.message}`);
                })
             } catch (err) {
               hilog.error(0x0001, TAG, `getPinShortcutInfos failed, code is ${err.code}, message is ${err.message}`);
             }
           })
           .width('100%')
       }
       .margin(16)
       .height('100%')
       .justifyContent(FlexAlign.Center)
     }
   }
   ```
