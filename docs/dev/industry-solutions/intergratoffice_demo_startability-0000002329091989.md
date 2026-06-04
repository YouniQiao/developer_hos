---
title: "选择文件打开方式"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/intergratoffice_demo_startability-0000002329091989
---

## 场景介绍

选择文件打开方式是综合办公类应用中的典型场景之一，如用户在文件管理查看文件时，可以选择其他应用打开。

本示例主要基于[UIAbilityContext.startAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-uiabilitycontext#startability)实现从已安装的应用中寻找符合要求的应用，打开特定文件的功能。

## 效果预览

![](./img/d60e7cc4.gif "点击放大")

## 实现思路

1. 调用方构造请求数据，调用[startAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/file-processing-apps-startup)接口寻找符合要求的应用，打开特定文件。

   ```
   // 沙箱写入文件1.txt，内容：'1'，
   let filepath = this.uicontext.filesDir+'/1.txt';
   let file = fs.openSync(filepath,fs.OpenMode.READ_WRITE|fs.OpenMode.CREATE);
   fs.writeSync(file.fd,'1');
   let uri = fileUri.getUriFromPath(filepath);
   // 调用接口启动
   this.uicontext.startAbility({
       action: 'ohos.want.action.viewData', // 表示数据的操作
       uri: uri,
       type: 'general.plain-text', // 表示待打开文件的类型
       // 配置被分享文件的读写权限，例如对文件打开应用进行读写授权
       flags: wantConstant.Flags.FLAG_AUTH_WRITE_URI_PERMISSION | wantConstant.Flags.FLAG_AUTH_READ_URI_PERMISSION
     });
   ```
2. 目标方根据显式Want与隐式Want匹配规则配置能力module.json5。

   ```
   "skills": [{
     "entities": [
       "entity.system.home"
     ],
     "actions": [
       "ohos.want.action.viewData",
       "action.system.home"
     ],
     // 必填，声明数据处理能力
     "uris": [
       {
         // 允许打开uri中以file:// 协议开头标识的本地文件
         "scheme": "file", // 必填，声明协议类型为文件
         "type": "general.plain-text", // 必填，表示支持打开的文件类型
         "linkFeature": "FileOpen" // 必填且大小写敏感，表示此URI的功能为文件打开
       }
     ]
   }]
   ```
3. 目标方接收数据。

   ```
   export default class EntryAbility extends UIAbility {
     onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {
       // 从want信息中获取uri字段
       let uri = want.uri;

       // 根据待打开文件的URI进行相应操作。例如同步读写的方式打开URI获取file对象
       let file = fs.openSync(uri, fs.OpenMode.READ_WRITE);
     }
   }
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets
│  ├──common
│  │  ├──Constants.ets                   // 常量页
│  │  ├──Objects.ets                     // 对象页
│  │  └──Utils.ets                       // 工具页
│  ├──entryability
│  │  └──EntryAbility.ets                // 屏幕窗口沉浸式布局页
│  └──pages
│     └──Index.ets                       // 功能主页
└──entry/src/main/resources              // 资源文件目录
```

## 参考文档

[拉起文件处理类应用(startAbility)](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/file-processing-apps-startup)

[UIAbilityContext.startAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-uiabilitycontext#startability)

[显式Want与隐式Want匹配规则](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/explicit-implicit-want-mappings)

## 代码下载

[选择文件打开方式示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260205164300.40923175454045394473099182762000%3A50001231000000%3A2800%3ABC56E0A0F12146165A54BBE58FAB5F7BE82E41E8902B117B6AAB8356D880CCB7.zip?needInitFileName=true)
