---
title: "视频剪辑-添加画中画"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/video_edit_pip_window-0000002395437788
---

## 场景介绍

视频剪辑添加画中画是拍摄美化类应用的高频使用场景之一，如用户需要将一个视频以画中画形式嵌入到另一个视频中。

本示例基于[PhotoViewPicker](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-photoviewpicker)获取图库视频，使用[滑动](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-pangesture)和[捏合](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-pinchgesture)手势调整画中画视频的位置与大小，结合[AVPlayer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avplayer)与[XComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-xcomponent)预览当前视频，通过第三方库[mp4parser](https://ohpm.openharmony.cn/#/cn/detail/@ohos%2Fmp4parser)合成新视频并使用[photoAccessHelper](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-photoaccesshelper)将新视频保存到图库。

## 效果预览

![](./img/98766ac9.gif)

## 实现思路

1. 通过[PhotoViewPicker](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-photoviewpicker)选择图库中的视频，保存至cache目录中。

   ```
   async photoPick() {
     // ...
     photoPicker.select(photoSelectOptions).then(async (photoSelectResult: photoAccessHelper.PhotoSelectResult) => {
       let file = fs.openSync(photoSelectResult.photoUris[0]);
       const DATE_STR = (new Date().getTime()).toString();
       let newPath = context.cacheDir + `/${DATE_STR + file.name}`; // 临时文件目录
       fs.copyFileSync(file.fd, newPath)
       this.filePath = newPath;
       // ...
     }).catch((err: BusinessError) => {});
   }
   ```
2. 通过[滑动](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-pangesture)和[捏合](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-pinchgesture)手势，调整画中画视频播放组件的位置与大小。

   ```
   XComponent()
   .translate({ x: this.offsetX, y: this.offsetY })
   .scale({ x: this.scaleValue, y: this.scaleValue })
   .gesture(
     GestureGroup(GestureMode.Exclusive,
       PanGesture()
         .onActionUpdate((event: GestureEvent) => {
           // 根据偏移量更新组件位置
           this.offsetX = this.startX + event.offsetX;
           this.offsetY = this.startY + event.offsetY;
           // 判断坐标是否超出区域限定，超出后重新赋值
           if (this.offsetX <= this.minX) {
             this.offsetX = this.minX;
           }
           // ...
         }),
       PinchGesture({ fingers: 2 })
         .onActionUpdate((event: GestureEvent) => {
           this.scaleValue = this.pinchValue * event.scale; // 缩放比例累积
         })
     )
   )
   ```
3. 结合[AVPlayer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avplayer)与[XComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-xcomponent)播放cache目录中的视频。

   ```
   // EditPage.ets
   XComponent()
     .onLoad(() => {
       this.surfaceId = this.xComponentController.getXComponentSurfaceId();
       this.player.setSurfaceID(this.surfaceId);
       this.player.avPlayerFdSrc(Constants.AVPLAYER_NAME_PIP); // 原视频与画中画视频初始化不同的AVPlayer
     });
   // AVPlayer.ets
   async avPlayerFdSrc(selection: string) {
     // 创建avPlayer实例对象与状态机变化回调函数
     // ...
     let filePath: string = '';
     if (selection === Constants.AVPLAYER_NAME_BASIC) {
       filePath = AppStorage.get(Constants.BASIC_FILE_PATH) as string;
     } else if (selection === Constants.AVPLAYER_NAME_PIP) {
       filePath = AppStorage.get(Constants.PIP_FILE_PATH) as string;
     }
     let file = await fileIo.open(filePath, fileIo.OpenMode.READ_ONLY);
     let fdPath = `fd://${file.fd}`;
     avPlayer.url = fdPath; // cache目录视频文件fd传入AVPlayer的url中
     if (selection === Constants.AVPLAYER_NAME_BASIC) {
       AVPlayer.avPlayerBasic = avPlayer;
     } else if (selection === Constants.AVPLAYER_NAME_PIP) {
       AVPlayer.avPlayerPip = avPlayer;
     }
   }
   ```
4. 使用第三方库[mp4parser](https://ohpm.openharmony.cn/#/cn/detail/@ohos%2Fmp4parser)合成视频。

   ```
   videoMerge() {
     // 写入沙箱路径
     let sandboxPath1 = AppStorage.get(Constants.BASIC_FILE_PATH) as string;
     let sandboxPath2 = AppStorage.get(Constants.PIP_FILE_PATH) as string;
     const DATE_STR = (new Date().getTime()).toString();
     let fileName = 'merged.mp4';
     let outputPath = this.ctx.cacheDir + util.format('/%s%s', DATE_STR, fileName); // 定义输出路径
     let callBack: ICallBack = {
       callBackResult: async (code: number) => {};
     }; // 定义回调函数
     // 计算画中画偏移位置与缩放大小
     // ...
     // 构造FFmpeg指令
     let ffmpegCmd = `ffmpeg -i ${sandboxPath1} -i ${sandboxPath2} -filter_complex` +
       ` "[1]scale=-1:ih*${height}[pip];[0][pip]overlay=W*${offsetX}:H*${offsetY}" -c:a copy ${outputPath}`;
     MP4Parser.ffmpegCmd(ffmpegCmd, callBack); // 执行合成操作
   };
   ```
5. 通过[photoAccessHelper](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-photoaccesshelper)将视频保存至图库。

   ```
   async saveVideoToGallery(filePath: string) {
     const SANDBOX_PATH = filePath; // 沙箱路径
     const SRC_URI = fileUri.getUriFromPath(SANDBOX_PATH); // 转换为URI
     let phAccessHelper = photoAccessHelper.getPhotoAccessHelper(this.ctx);
     let photoCreationConfigs: photoAccessHelper.PhotoCreationConfig[] = []; // 配置
     const DES_FILE_URIS = await phAccessHelper.showAssetsCreationDialog(
       [SRC_URI], // 传入转换后的URI
       photoCreationConfigs
     );
     if (DES_FILE_URIS.length > 0) {
       const SRC_FILE = fs.openSync(SANDBOX_PATH, fs.OpenMode.READ_ONLY);
       const DES_FILE = fs.openSync(DES_FILE_URIS[0], fs.OpenMode.WRITE_ONLY);
       try {
         fs.copyFileSync(SRC_FILE.fd, DES_FILE.fd); // 将沙箱视频写入目标URI
       } catch (err) {
       } finally {
       // 关闭文件
       };
     };
   };
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets
│  ├──common
│  │  └──Constants.ets            // 常量
│  ├──components
│  │  └──Home.ets                 // 首页组件
│  ├──entryability
│  │  └──EntryAbility.ets         // 入口
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──model
│  │  ├──BottomTabModel.ets       // Tab模型
│  │  └──CoverMockModel.ets       // UI模拟数据
│  ├──pages
│  │  ├──EditPage.ets             // 视频编辑页
│  │  └──HomePage.ets             // 首页
│  └──utils
│     ├──AppRouter.ets            // 路由工具
│     ├──AVPlayer.ets             // AVPlayer
│     ├──DisplayUtil.ets          // 屏幕信息获取
│     └──PromptActionUtil.ets     // 弹窗类
└──entry/src/main/resources       // 应用资源目录
```

## 参考文档

[Class(PhotoViewPicker)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-photoviewpicker)

[Interface(AVPlayer)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avplayer)

[XComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-xcomponent)

[@ohos/mp4parser](https://ohpm.openharmony.cn/#/cn/detail/@ohos%2Fmp4parser)

[Interface(PhotoAccessHelper)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-photoaccesshelper)

## 代码下载

[视频剪辑-添加画中画示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260317191934.64419348431355382153357007446989%3A20260604154545%3A2800%3A31F3835B312516D1DA9119AF6B5D74305C7C5932FD6E240BD421F7E79EBF51A4.zip?needInitFileName=true)
