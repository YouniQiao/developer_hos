---
title: "foregroundBlurStyle实现登录前主页模糊效果"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/display_after_login-0000002293948070
---

## 场景介绍

foregroundBlurStyle实现登录前主页模糊效果是各类应用中的高频使用场景之一。

本示例通过[foregroundBlurStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-foreground-blur-style#foregroundblurstyle)设置主页面内容模糊。

## 效果预览

![](./img/7cbdd6b5.png "点击放大")

## 实现思路

根据isLogin登录态判断是否设置组件模糊[foregroundBlurStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-foreground-blur-style#foregroundblurstyle)，登录后模糊效果消失，页面可正常使用。

```
Column()
  .foregroundBlurStyle(this.isLogin ? BlurStyle.NONE : BlurStyle.BACKGROUND_THICK, {
    colorMode: ThemeColorMode.LIGHT,
    adaptiveColor: AdaptiveColor.DEFAULT,
    scale: 0.15
  });
```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                         // 代码区
│  ├──common
│  │  └──DataModel.ets                        // 列表数据
│  ├──component
│  │  └──SwiperComponent.ets                  // 轮播组件
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  └──pages
│     ├──LoginPage.ets                        // 登录页
│     └──MainPage.ets                         // 主页面
└──entry/src/main/resources                   // 应用资源目录
```

## 参考文档

[组件内容模糊](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-foreground-blur-style)

## 代码下载

[foregroundBlurStyle实现登录前主页模糊效果示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260311161403.69785018367939191218307750925566%3A20260604155928%3A2800%3A92019A868EFEB4522A6460242050F5177D10628007B399C657AA7D51F14AAE38.zip?needInitFileName=true)
