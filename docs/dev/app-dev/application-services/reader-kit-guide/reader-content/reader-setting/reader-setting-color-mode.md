---
displayed_sidebar: appDevSidebar
title: "适配深、浅色模式"
original_url: /docs/dev/app-dev/application-services/reader-kit-guide/reader-content/reader-setting/reader-setting-color-mode
format: md
upstream_id: dev/app-dev/application-services/reader-kit-guide/reader-content/reader-setting/reader-setting-color-mode
last_sync: 2026-06-07
sync_hash: 19034a91
upstream_hash: 8f5760b75cdb
---

当应用需要根据设备的深、浅色模式变化动态切换主题时，开发者可通过UIAbility的onConfigurationUpdate回调判断模式的变化，然后设置模式对应的字体颜色及背景色。

## 接口说明

适配深、浅色主题主要涉及1个接口，具体介绍如下表所示。

| 接口名 | 描述 |
| --- | --- |
| [setPageConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/reader-read-core#setpageconfig)(pageConfig: ReaderSetting): void | 设置或者修改页面排版属性。 |

## 开发准备

在适配深、浅色主题之前，请先确保已经“[构建阅读器](/docs/dev/app-dev/application-services/reader-kit-guide/reader-content/reader-read-page)”。

## 开发步骤

1. 监听UIAbility的onConfigurationUpdate回调，并通过应用级变量的状态管理[AppStorage](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage)保存当前colorMode值。

   ```
   import { Configuration, UIAbility } from '@kit.AbilityKit';

   export default class EntryAbility extends UIAbility {

     onConfigurationUpdate(newConfig: Configuration): void {
       AppStorage.setOrCreate('colorMode', newConfig.colorMode);
     }
   }
   ```
2. 阅读页通过[@StorageLink](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage#storagelink)装饰器监听colorMode字段的变化。如果颜色变化，则触发对应主题色的变更。

   ```
   import { ConfigurationConstant } from '@kit.AbilityKit';

   @StorageLink('colorMode') @Watch('colorModeChange') colorMode: ConfigurationConstant.ColorMode =
     ConfigurationConstant.ColorMode.COLOR_MODE_NOT_SET;

   /**
    * 系统深色模式变化，可以重新设置主题
    */
   colorModeChange() {
     if (this.colorMode === ConfigurationConstant.ColorMode.COLOR_MODE_DARK) {
       this.readerSetting.nightMode = true;
       this.readerSetting.fontColor = '#ffffff';
       this.readerSetting.themeColor = '#202224';
     } else {
       this.readerSetting.nightMode = false;
       this.readerSetting.fontColor = '#000000';
       this.readerSetting.themeColor = '#FFFFFF';
     }
     this.readerComponentController.setPageConfig(this.readerSetting);
   }
   ```
