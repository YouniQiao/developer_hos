---
title: "H5页面加载自定义字体库"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/h5_load_custom_font_library-0000002349762829
---

## 场景介绍

H5页面加载自定义字体库是各类应用的高频使用场景之一，如应用在H5页面进行个性化阅读适配、无障碍阅读设计时，通常需要提供自定义字体库，优化用户体验。

本示例基于[Web](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-web)组件构建HTML页面加载自定义字体库的场景，支持动态加载字体库，点击字体切换按钮可切换字体样式。

## 效果预览

![](./img/5d44c244.png "点击放大")

## 实现思路

1. 通过getRawFileList加载rawfile目录下的字体文件。

   ```
   let context = this.getUIContext().getHostContext();
   context!.resourceManager.getRawFileList('', (error: BusinessError, value: Array<string>) => {
     if (error != null) {
       return;
     }
     for (let i = 0; i < value.length; i++) {
       if (!value[i].endsWith('.ttf')) {
         continue;
       }
       let fontName = value[i].split('.')[0]
       let fontUrl = './' + value[i]
       this.fontFamilies.push(new FontFamily(fontName, fontUrl));
     }
   })
   ```
2. 通过runJavaScript传递JavaScript代码的功能，实现字体的按需动态加载和切换。

   ```
   // 首先加载字体
   if (!fontFamily.isLoaded) {
      let fontLoad = `function loadNewFont() {
                        const font = new FontFace('${fontFamily.fontName}', 'url(${fontFamily.fontUrl})');
                        font.load().then(function() {document.fonts.add(font)});}`
      this.controller.runJavaScript(fontLoad)
      this.controller.runJavaScript('fontLoadCaller()')
      fontFamily.isLoaded = true
   }

   // 字体文件加载完成后执行字体切换
   let changeFont = `function changeFont(){
                       document.getElementById('news-text').style.fontFamily = '${fontFamily.fontName}';
                       document.getElementById('news-title').style.fontFamily = '${fontFamily.fontName}';
                       document.getElementById('news-time').style.fontFamily = '${fontFamily.fontName}';}`
   this.controller.runJavaScript(changeFont)
   this.controller.runJavaScript('fontChangeCaller()')
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets           // 代码区
│  ├──common
│  │  └──Constants.ets          // 常量
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──model
│  │  └──FontFamily.ets         // 字体加载的实体类
│  └──pages
│     └──LoadLocalFont.ets      // 主页面
└──entry/src/main/resources     // 应用资源目录
```

## 参考文档

[Web组件描述](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web)

[@ohos.resourceManager（资源管理）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-resource-manager)

## 代码下载

[H5页面加载自定义字体库示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260408170246.47539695011646573733026483247384%3A20260604160033%3A2800%3A1BD1319296B47FB254CCB510A8C74AD14EB77ABF69D34E0823432706CE324AF3.zip?needInitFileName=true)
