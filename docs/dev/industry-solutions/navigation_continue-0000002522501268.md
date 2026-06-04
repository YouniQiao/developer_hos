---
title: "Navigation路由页面应用接续"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/navigation_continue-0000002522501268
---

## 场景介绍

Navigation路由页面应用接续是各类应用的高频使用场景之一，如笔记编辑页、备忘录详情页等的浏览或编辑进度同步。

本示例使用[Navigation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation)作为页面路由导航，基于[应用接续特性](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-continue-cast)实现多设备间应用流转，基于[分布式数据对象](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-data-distributedobject)和[Want](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-want)实现接续场景的数据迁移。

## 效果预览

![](./img/cb3b4b3f.png "点击放大")

## 实现思路

参考[应用接续开发指导](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-continue-cast#section49581955132610)，在迁移数据时将当前页面路由名称、页面参数及其他所需数据通过分布式数据对象或Want迁移同步到远端。

1. 在module.json5文件的abilities中，将continuable标签配置为“true”，表示该UIAbility可被迁移。

   ```
   // 启用应用接续功能
   "continuable": true,
   ```
2. 在onContinue中获取Navigation路由栈中栈顶页面及参数，保存在分布式数据对象或Want中。

   ```
   async onContinue(wantParam: Record<string, Object>) {
     // ...
     // 兼容性校验
     if (targetVersion < versionThreshold) {
       // 建议在校验版本兼容性失败后，提示用户拒绝迁移的原因
       // ...
       // 在兼容性校验不通过时返回MISMATCH
       return AbilityConstant.OnContinueResult.MISMATCH;
     }

     // 从NavPathStack中获取页面及参数信息
     // ...

     // 通过分布式数据对象或Want迁移业务所需数据
     // ...
     return AbilityConstant.OnContinueResult.AGREE;
   }
   ```
3. 在onCreate/onNewWant中根据获取分布式数据对象或Want中的页面数据，保存在Appstorage中。

   ```
   onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
     // 根据launchParam.launchReason判断是否应用接续场景
     if (launchParam.launchReason !== AbilityConstant.LaunchReason.CONTINUATION) {
       return;
     }
     // 恢复流转数据
     this.restoreData(want, launchParam);
   }

   onNewWant(want: Want, launchParam: AbilityConstant.LaunchParam): void {
     // 根据launchParam.launchReason判断是否应用接续场景
     if (launchParam.launchReason !== AbilityConstant.LaunchReason.CONTINUATION) {
       return;
     }
     // 恢复流转数据
     this.restoreData(want, launchParam);
   }
   ```
4. 在onWindowStageRestore中通过windowStage.loadContent加载Navigation根页面。

   ```
   onWindowStageRestore(windowStage: window.WindowStage): void {
     hilog.info(DOMAIN, 'testTag', '%{public}s', 'Ability onWindowStageRestore');
     windowStage.loadContent('pages/Index', (err) => {
       if (err.code) {
         hilog.error(DOMAIN, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err));
         return;
       }
       hilog.info(DOMAIN, 'testTag', 'Succeeded in loading the content.');
     });
   }
   ```
5. 在Navigation根页面的onPageShow中判断是否存在迁移过来的页面路径，如是则根据页面路由名称、参数等必要数据恢复远端设备的页面。

   ```
   @StorageProp('pagePath') pagePath: string = '';
   onPageShow(): void {
     if (this.pagePath) {
       // 应用接续迁移过来的页面路径
       // ...
       this.pageStack.pushPathByName(this.pagePath, this.pageParams);
     }
   }
   ```

![](./img/4aa95c8e.png)

前置条件：

* 在2台登录同一华为账号的HarmonyOS NEXT Developer Preview0及以上版本的手机上安装本示例应用。
* 双端设备需要打开WLAN和蓝牙开关，或者在设置中的“多设备协同>高级”中启用“多设备协同增强服务”功能。
* 双端设备需要在“设置”应用中开启“多设备协同>接续”功能。

运行步骤：

* 在其中一台打开本应用，在另一台设备上的任务栏会出现该应用图标，点击可唤起本应用并接收对端设备应用传递过来的数据。
* 点击蓝色按钮可跳转Navigation其他页面，点击灰色按钮可切换使用分布式对象迁移数据或者使用Want迁移对象。

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 ReleaseSDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                     // 代码区
│  ├──entryability
│  │  └──EntryAbility.ets                 // UIAbility，应用接续主要逻辑实现
│  ├──entrybackupablility
│  │  └──EntryBackupAbility.ets
│  ├──pages
│  │  └──Index.ets                        // Navigation主页面
│  └──views
│     ├──PageOne.ets                      // Navigation页面1
│     └──PageTwo.ets                      // Navigation页面2
└──entry/src/main/resources               // 应用资源目录
```

## 参考文档

[组件导航(Navigation)](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-navigation-navigation)

[分布式数据对象](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-data-distributedobject)

[信息传递载体Want](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-want)

[应用接续开发指导](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-continue-cast)

## 代码下载

[Navigation路由页面应用接续示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260429104814.24251464584182320099762491468857%3A20260604160144%3A2800%3A31CEA0B9F6354A690F709F6A1D4C45E5BBBF5CC9EE1993E6601947F8AEA27749.zip?needInitFileName=true)
