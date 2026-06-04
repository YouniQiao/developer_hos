---
title: "视频窗口横竖屏切换"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/orientation_switching-0000002255691184
---

## 场景介绍

视频窗口横竖屏切换是影音娱乐类应用中的高频使用场景之一，如用户播放视频时可以根据实际需求进行横竖屏切换，以获得更好的观看体验。

本示例基于[WindowStage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-windowstage)获取窗口实例，使用[setPreferredOrientation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#setpreferredorientation9)方法设置窗口的显示方向。也可适用于游戏、地图导航、小说阅读等其他场景。

## 效果预览

![](./img/14fa6d63.png "点击放大")

## 实现思路

1. 通过setPreferredOrientation方法设置窗口方向旋转模式为跟随传感器自动旋转。
2. 监听横竖屏变化，获取设备当前方向。

```
aboutToAppear() {
  setOrientation(this.context);
  // 监听横竖屏变化
  this.windowClass = AppStorage.get('windowClass');
  this.windowClass?.on('windowSizeChange', () => {
    const DEFAULT_DISPLAY = display.getDefaultDisplaySync();
    this.orientation = DEFAULT_DISPLAY.orientation;
  });
}
export function setOrientation(context: UIContext) {
  try {
    window.getLastWindow(context.getHostContext(), (err, data) => { // 获取window实例
      if (err.code) {
        return;
      }
      let windowClass = data;
      let orientation = window.Orientation.AUTO_ROTATION_UNSPECIFIED; // 设置窗口方向旋转模式
      try {
        windowClass.setPreferredOrientation(orientation, (err) => {
          if (err.code) {
            return;
          }
        });
      } catch (exception) {
        // ...
      }
    });
  } catch (exception) {
    // ...
  }
}
```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                   // 代码区
│  ├──components
│  │  ├──IntroductionComponent.ets      // 视频信息组件
│  │  └──VideoComponent.ets             // 视频播放组件
│  ├──constants
│  │  └──CommonConstants.ets            // 公共常量类
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──model
│  │  └──VideoInfoModel.ets             // 视频信息数据
│  ├──pages
│  │  └──VideoPlayback.ets              // 视频播放页
│  └──utils
│     └──OrientationUtil.ets            // 定向工具类
└──entry/src/main/resources             // 应用资源目录
```

## 参考文档

[Interface(Window)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window)

[Interface(WindowStage)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-windowstage)

## 代码下载

[视频窗口横竖屏切换示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260317194126.25954821830954318551085593515345%3A20260604141410%3A2800%3AC4766ED6AC2D31383FC80A3624CA048A61BB3FA24C1C854A7A80B86CA601DE92.zip?needInitFileName=true)
