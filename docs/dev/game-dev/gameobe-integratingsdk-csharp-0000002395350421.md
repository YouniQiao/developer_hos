---
title: "集成SDK"
original_url: /docs/dev/game-dev/gameobe-integratingsdk-csharp-0000002395350421
format: md
---


为了方便Unity开发者接入联机对战服务相关API，我们提供了C# SDK，支持实现匹配组局、消息同步、掉线重连、录像回放等功能。

![](./img/c55695a7.png)

如果帧同步过程中使用UDP协议，您需要在Unity导出的Android Studio工程（UDP协议当前仅支持Android平台）中进行相关[打包配置](/docs/dev/game-dev/packaging-configuration-csharp-0000002395350565)。

## 开发环境

* Unity引擎：推荐2020/2021版本。
* .Net Framework框架：4.5及以上版本。
* .Net Standard：2.1及以上版本。

## 集成步骤

以Unity游戏开发引擎为例：

1. 下载[联机对战SDK](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Library/gameobe-sdkdownload-csharpsdk-0000001297266241)压缩包，建议单独创建目录用于存放SDK脚本。
2. 打开您的Unity工程，将SDK压缩包解压到项目的Assets目录下。
3. 删除压缩包中非对应系统版本的依赖库目录（如当前使用的是Windows\_x64系统，则需要删除Android、iOS等其他系统的依赖库目录），同时基于所需开发平台保留对应平台的.dll文件（如下），即可完成SDK导入。
   * 基于WebGL开发，则只保留usdk-webGL-release.dll文件。
   * 基于HarmonyOS 5.0及以上系统的开发，则只保留usdk-OHOS-release.dll文件。
   * 基于iOS开发，则只保留usdk-iOS-release.dll文件。
   * 基于Android、Windows、macOS开发，则只保留usdk-release.dll文件。

     ![](./img/24c06c73.png)

     如果帧同步过程中不使用[UDP协议](/docs/dev/game-dev/gameobe-introduction-0000002361670416#ZH-CN_TOPIC_0000002361670416__p152691445434)，你还可以将对应平台文件夹中的rtsacontrol.dll和RtsaDllExport.dll（Android是libRtsaDllExport.so和librtsaControl.so）文件删除，以保持包体最小。
