---
title: "H5页面侧滑拦截"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/backpage_by_gesture-0000002237371200
---

## 场景介绍

H5页面侧滑拦截是各类应用中的高频使用场景之一，如用户浏览H5页面时需要侧滑回退至上一页而非框架页面上一页。

本示例基于[WebviewController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webviewcontroller)实现拦截H5页面侧滑回退至框架页面上一页。

## 效果预览

![](./img/98066bd8.png)

## 实现思路

1. 通过[onBackPressed()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navdestination#onbackpressed10)自定义返回逻辑对侧滑进行拦截。
2. 通过[accessStep()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webviewcontroller#accessstep)判断当前网页是否能回退至上一页，如是，则将页面回退至上一页，否则，回退至框架页面上一页。

   ```
   NavDestination{
   }
   .onBackPressed(() => {
     // 判断当前网页是否能回退至上一页
     if (this.controller.accessStep(-1)) {
       this.controller.backward(); // 返回上一页
       return true;
     } else {
       return false;
     }
   })
   ```

## 权限说明

获取Internet网络权限：[ohos.permission.INTERNET](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all#ohospermissioninternet)。

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets
│  ├──entryability
│  │  └──EntryAbility.ets
│  └──pages
│     ├──Index.ets                   // 主页面
│     └──WebPage.ets                 // 网页
└──entry/src/main/resources          // 应用资源目录
```

## 参考文档

[Class(WebviewController)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webviewcontroller)

[NavDestination](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navdestination)

## 代码下载

[H5页面侧滑拦截示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260210100031.64703779720803742944667230571000%3A50001231000000%3A2800%3AF629B4C910CDAA777C4C66A17A99CF5840C7917C87C625C89B1C98258D2727C4.zip?needInitFileName=true)
