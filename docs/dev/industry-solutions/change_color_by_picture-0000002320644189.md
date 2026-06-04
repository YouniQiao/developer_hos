---
title: "导航栏背景变色"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/change_color_by_picture-0000002320644189
---

## 场景介绍

导航栏背景颜色变化是实用工具类应用的高频使用场景之一，如用户在浏览页面时可以看到随着导航栏图片切换而变化的渐变背景。

本示例通过[@ohos.effectKit](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-effectkit)获取图片平均颜色来实时更新页面背景的颜色。

## 效果预览

![](./img/f85c5da6.gif "点击放大")

## 实现思路

1. 将图片转换为pixelMap，再通过[@ohos.effectKit](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-effectkit)取得pixelMap平均色彩。

   ```
   getAverageColor(targetIndex:number){
     const context = this.getUIContext().getHostContext() as Context;
     // 获取resourceManager资源管理器
     const resourceMgr: resourceManager.ResourceManager = context.resourceManager;
     const fileData: Uint8Array = resourceMgr.getMediaContentSync(targetIndex);

     // 获取图片的ArrayBuffer
     const buffer = fileData.buffer;
     // 创建imageSource
     const imageSource: image.ImageSource = image.createImageSource(buffer);
     // 创建pixelMap
     const pixelMap: image.PixelMap = await imageSource.createPixelMap();
     effectKit.createColorPicker(pixelMap, (err, colorPicker) => {
       // 读取图像主色的颜色值，结果写入Color
       let color = colorPicker.getMainColorSync();
     })
   }
   ```
2. 在图片更新时做颜色更新并渲染。

   ```
   Swiper.onChange((index: number) => {
     this.currentIndex = index; // 同步滑动切换
     this.currentId = this.imgData[this.currentIndex].id;
     this.getAverageColor(this.currentId);
   });
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets        // 代码区
│  ├──entryability
│  │  └──EntryAbility.ets    // 程序入口
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──constants
│  │  └──StyleConstants.ets  // 标准常数页
│  └──pages
│     │──Index.ets           // 主页
│     └──HomePage.ets        // 首页页面
└──entry/src/main/resources  // 应用资源目录
```

## 参考文档

[@ohos.effectKit（图像效果）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-effectkit)

## 代码下载

[导航栏背景变色示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260210101751.71022746818688001525793397308531%3A50001231000000%3A2800%3A875ACEC5C0806C7B7502649A630D91C86656C13831A3046DB80D4DD4076614A0.zip?needInitFileName=true)
