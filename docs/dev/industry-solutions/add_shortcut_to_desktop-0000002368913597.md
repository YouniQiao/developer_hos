---
title: "地铁线路图添加桌面"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/add_shortcut_to_desktop-0000002368913597
---

## 场景介绍

地铁线路图添加桌面是公交地铁类应用的高频使用场景之一，如用户可将地铁线路图添加为桌面快捷方式，点击即可快速查看。

本示例通过[productViewManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-productviewmanager)提供应用内快捷方式添加至桌面的能力。

## 效果预览

![](./img/eae7b8e1.gif "点击放大")

## 实现思路

1. 构造调用[checkPinShortcutPermitted](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-productviewmanager#section5665513519)接口校验桌面快捷方式的参数。

   ```
   let uiContext = this.getUIContext().getHostContext() as common.UIAbilityContext;
   let shortcutId = 'id_map';  // 对应shortcuts标签中配置的shortcutId
   let labelResName = 'go_to_map';  // 对应shortcuts标签中配置的label资源索引名称
   let iconResName = 'metro';  // 对应shortcuts标签中配置的icon资源索引名称
   let want: Want = {  // 对应shortcuts标签中配置的want
     bundleName: 'com.example.addshortcuttodesktop',
     moduleName: 'entry',
     abilityName: 'EntryAbility',
     parameters: {
       shortCutKey: 'MainPage'
     }
   };
   ```
2. 调用checkPinShortcutPermitted接口，将步骤1中的参数依次传入接口中，并保存异步返回的结果CheckShortcutResult。调用[requestNewPinShortcut](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-productviewmanager#section2891132652315)接口，将异步结果的tid传入，执行添加到桌面的操作。

   ```
   let checkShortcutResult: productViewManager.CheckShortcutResult;
   productViewManager.checkPinShortcutPermitted(uiContext, shortcutId, want, labelResName,
     iconResName)
     .then((result: productViewManager.CheckShortcutResult) => {
       checkShortcutResult = result;
       let tid = checkShortcutResult.tid;
       productViewManager.requestNewPinShortcut(uiContext, tid)
       // ...
     }).catch((error: BusinessError) => {
     // ...
   });
   ```
3. 在/resources/base/profile/目录下创建名为shortcuts\_config.json的文件，并在文件中定义应用快捷方式的相关配置。

   ```
   {
     "shortcuts": [
       {
         "shortcutId": "id_map",
         "label": "$string:go_to_map",
         "icon": "$media:metro",
         "wants": [
           {
             "bundleName": "com.example.addshortcuttodesktop",
             "moduleName": "entry",
             "abilityName": "EntryAbility",
             "parameters": {
               "shortCutKey": "MainPage"
             }
           }
         ]
       }
     ]
   }
   ```
4. 在module.json5配置文件中的abilities标签下的metadata中设置resource属性值为$profile:shortcuts\_config，指定应用的快捷方式配置文件，即使用shortcuts\_config.json文件中的shortcuts配置。

   ```
   "metadata": [
     {
       "name": "ohos.ability.shortcuts", // 配置快捷方式，该值固定为ohos.ability.shortcuts
       "resource": "$profile:shortcuts_config" // 指定shortcuts信息的资源位置
     }
   ]
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                         // 代码区
│  ├──components
│  │  └──ViewImage.ets                        // 地图组件
│  ├──constants
│  │  └──ImageConstants.ets                   // 常量类
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──model
│  │  └──TransitInfo.ets                      // 列表项
│  ├──pages
│  │  ├──MainPage.ets                         // 主页面
│  │  └──MapPage.ets                          // 地图页
│  └──utils
│     ├──Logger.ets                           // 日志工具
│     └──Matrix4Util.ets                      // 矩阵工具
└──entry/src/main/resources                   // 应用资源目录
```

## 参考文档

[productViewManager（应用市场推荐）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-productviewmanager)

[创建应用静态快捷方式](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/typical-scenario-configuration)

## 代码下载

[地铁线路图添加桌面示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260428194037.21776407270293925414915568542568%3A20260604131338%3A2800%3AF8F9D1805C825DE69BC2D2F64116B3DDC738B645A7724BA2643F46D2D49D5164.zip?needInitFileName=true)
