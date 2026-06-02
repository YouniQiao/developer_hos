---
title: "3D音效"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-spatialsound-csharp-0000002359547082
---

3D音效可将一定空间范围内无方位感的声音进行方位和距离衰减的效果渲染，使之听起来更有沉浸感。同时您还需要了解的是，3D音效属于端侧的音频渲染能力，开启后会增加额外的功耗。

## 接口调用流程

![](./img/3d8027e2.png)

## 前提条件

* 您已[集成游戏多媒体基础SDK、实时语音和3D音效模块](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-integratingsdk-csharp-native-0000002393227057)。
* 您已[创建游戏多媒体实例](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-engine-csharp-native-0000002393227065#section10640141401010)。
* 您已[加入房间](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-voice-joinroom-roomid-csharp-0000002393227073)。

## 开启/关闭3D音效

1. 调用[GameMediaEngine.InitSpatialSound](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-csharp-native-0000002392723521#section20663122910558)方法初始化3D音效。

   ```
   int result = mHwRtcEngine.InitSpatialSound();
   ```
2. 调用[GameMediaEngine.EnableSpatialSound](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-csharp-native-0000002392723521#section368384483512)方法开启/关闭3D音效。

   ```
   // roomId：房间ID; enable：是否开启3D音效,true表示开启,false表示关闭
   engine.EnableSpatialSound(roomId, enable, new OpenHarmonyJSCallback(args => {
       OpenHarmonyJSObject data = args[0];
       int result = data.Get<int>("data");
       // 处理业务逻辑
   }));
   ```

## 设置语音接收范围

语音接收范围主要用于限制房间内收听者对音频的最大接收距离（空间距离），根据收听者与发声者的位置信息，收听者可收听到一定范围内的声音。

您可以调用[GameMediaEngine.SetAudioRecvRange](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-csharp-native-0000002392723521#section2046905453214)方法设置语音接收范围。

```
engine.SetAudioRecvRange(Integer.parseInt(number), new OpenHarmonyJSCallback(args => {
    OpenHarmonyJSObject data = args[0];
    int result = data.Get<int>("data");
    // 处理业务逻辑
    if (result == 0) {
    } else {
    }
}));
```

## 更新/清理位置

进入房间后，在3D音效场景下，玩家通常需要先更新一下自身在世界坐标系中的坐标和朝向信息。当自身或其他玩家位置等信息不断发生变化时，可通过接口持续上报变更。同时，还可以根据场景变化，清理指定或全部玩家的位置缓存信息。

### 更新自身位置

1. 构建自身位置信息。

   ```
   float forward = 11.0;
   float right = 12.0;
   float up = 13.0;
   PlayerPosition playerPosition = new PlayerPosition(forward, right, up);

   float[] axisForward = new float[3];
   axisForward[0] = 0;
   axisForward[1] = 1.0F;
   axisForward[2] = 0;

   float[] axisRight = new float[3];
   axisRight[0] = 1.0F;
   axisRight[1] = 0;
   axisRight[2] = 0;

   float[] axisUp = new float[3];
   axisUp[0] = 0;
   axisUp[1] = 0;
   axisUp[2] = 1.0F;

   Axis axis = new Axis(axisForward, axisRight, axisUp);
   SelfPosition selfPosition = new SelfPosition();
   selfPosition.setPosition(playerPosition);
   selfPosition.setAxis(axis);
   ```
2. 调用[GameMediaEngine.UpdateSelfPosition](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-csharp-native-0000002392723521#section9298413183415)方法设置自身的位置（即坐标和方向）信息。

   ```
   engine.UpdateSelfPosition(selfPosition, new OpenHarmonyJSCallback(args => {
       OpenHarmonyJSObject data = args[0];
       string result = data.Get<string>("data");
       // 处理业务逻辑
   }));
   ```

### 更新其他玩家位置

1. 构建其他玩家位置信息。

   ```
   List<RemotePlayerPosition> positionList = new ArrayList<>();

   String openId1 = "user1";
   RemotePlayerPosition remotePlayerPosition1 = new RemotePlayerPosition();
   remotePlayerPosition.setOpenId(openId1);
   remotePlayerPosition.setPosition(new PlayerPosition(10.0F, 11.1F, 12.2F));
   positionList.add(remotePlayerPosition1);

   String openId2 = "user2";
   RemotePlayerPosition remotePlayerPosition2 = new RemotePlayerPosition();
   remotePlayerPosition.setOpenId(openId2);
   remotePlayerPosition.setPosition(new PlayerPosition(15.0F, 16.1F, 18.2F));
   positionList.add(remotePlayerPosition2);
   ```
2. 调用[GameMediaEngine.UpdateRemotePosition](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-csharp-native-0000002392723521#section3874447173410)方法更新其他玩家的位置信息。

   ```
   engine.UpdateRemotePosition(mPlayerList, new OpenHarmonyJSCallback(args => {
       OpenHarmonyJSObject data = args[0];
       string result = data.Get<string>("data");
       // 处理业务逻辑
   }));
   ```

### 清理其他玩家位置

* 调用[GameMediaEngine.ClearRemotePlayerPosition](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-csharp-native-0000002392723521#section176391319105516)方法可清理指定玩家的位置信息。例如，清理已离开房间的其他玩家位置缓存信息。

  ```
  mHwRtcEngine.ClearRemotePlayerPosition(openId);
  ```
* 调用[GameMediaEngine.ClearAllRemotePositions](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-csharp-native-0000002392723521#section696372315414)方法可清理其他所有玩家的位置信息。例如，当重新开始一局游戏时，清理其他所有人的位置缓存信息。

  ```
  mHwRtcEngine.ClearAllRemotePositions();
  ```

## 查询3D音效开启状态

如需查询3D音效是否已开启，可通过调用[GameMediaEngine.IsEnableSpatialSound](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-csharp-native-0000002392723521#section147311173717)方法获取3D音效的状态。

```
engine.IsEnableSpatialSound(roomId, new OpenHarmonyJSCallback(args => {
    OpenHarmonyJSObject data = args[0];
    string result = data.Get<string>("data");
    // 处理业务逻辑
}));
```
