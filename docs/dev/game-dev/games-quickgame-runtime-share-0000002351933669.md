---
title: "分享"
original_url: /docs/dev/game-dev/games-quickgame-runtime-share-0000002351933669
format: md
upstream_id: dev/game-dev/games-quickgame-runtime-share-0000002351933669
last_sync: 2026-06-07
sync_hash: ac10a852
---
开发者可以在快游戏中接入分享能力，从而借助用户的分享行为获取更多的曝光和流量。[系统分享](#section3416154174220)可以将内容通过手机中其他的应用进行分享，[第三方分享](#section6397525105613)可以将内容通过第三方平台（例如微信等）进行分享，[碰一碰分享](/docs/dev/app-dev/application-services/share-kit-guide/knock-share)/[隔空传送](/docs/dev/app-dev/application-services/share-kit-guide/gestures-share)可以将内容通过碰一碰/隔空传送的方式进行分享。

## 系统分享

调用 [qg.systemShare](https://developer.huawei.com/consumer/cn/doc/games-references/games-api-quickgame-runtime-share-0000002399796685#section16201454172110) 分享内容 。

* 分享纯文本

  ```
  qg.systemShare({
      type: "text/plain",
      data: "this is a message from quick game.",
      success: function () {
          console.info('share text success');
      },
      fail: function (errMsg, errCode) {
          console.info('share text fail --- ' + errCode + ':' + errMsg);
      },
      cancel: function () {
          console.info('share cancel');
      },
      complete: function () {
          console.info('share complete');
      }
  })
  ```
* 分享用户选择的或拍摄的图片

  ```
  qg.chooseImage({
      count: 1,
      sourceType: ['album', 'camera'],
      success(res) {
          // chooseImage返回的是数组
          const tmpPaths = res.tempFilePaths;
          qg.systemShare({
              type: "image/*",
              data: tmpPaths[0], // 取第一个路径
              success: function () {
                  console.info('share pick image success');
              },
              fail: function (errMsg, errCode) {
                  console.info('share pick image fail --- ' + errCode + ':' + errMsg);
              },
              cancel: function () {
                  console.info('share cancel  ');
              },
              complete: function () {
                  console.info('share complete  ');
              }
          });
      }
  });
  ```
* 分享小游戏，拉起华为分享界面

  ```
  if (typeof qg.canIUse === "function") {
    const isSupportOnShare = qg.canIUse("MiniGame.OnShare"); // 是否支持qg.onShare
    const isSupportNearbyPlaying = qg.canIUse("MiniGame.NearbyPlaying"); // 是否支持近场联机
    const isSupportShareSelf = qg.canIUse("MiniGame.SystemShare.ShareSelf"); // 是否支持分享当前小游戏
    if (isSupportOnShare && isSupportNearbyPlaying && isSupportShareSelf) {
      qg.systemShare({
        type: "application/vnd.huawei.minigame", // 表示分享小游戏
        data: "myself", // 表示分享当前小游戏
        success: function () {
          console.log("share success");
        },
        fail: function (errMsg, errCode) {
          console.log("share fail --- " + errCode + ":" + errMsg);
        },
        cancel: function (data) {
          console.log("share cancel:" + data);
        },
        complete: function () {
          console.log("share complete");
        },
      });
    }
  }
  ```

## 第三方分享

调用 [qg.serviceShare](https://developer.huawei.com/consumer/cn/doc/games-references/games-api-quickgame-runtime-thirdshare-0000002365996988#section10761505309) 分享内容。

* 分享纯文本到第三方平台

  ```
  qg.serviceShare({
      shareType: 1,
      title: "分享的标题",
      summary: "分享的摘要",
      success: function (data) {
          console.info('share success');
      },
      fail: function (data, code) {
          console.info('share failed:' + data + "," + code);
      },
      cancel: function () {
          console.info('share cancel');
      }
  })
  ```
* 分享游戏包内图片到第三方平台

  ```
  qg.serviceShare({
      shareType: 2,
      imagePath: '/' + this.nativeImage.nativeUrl,
      success: function (data) {
          console.info(' share success');
      },
      fail: function (data, code) {
          console.info(' share failed:' + data + "," + code);
      },
      cancel: function () {
          console.info(' share cancel');
      }
  })
  ```

## 碰一碰分享/隔空传送

![](./img/643c236e.png)

* 当前碰一碰分享/隔空传送仅支持HarmonyOS 5.0及以上系统。
* 手机游戏发起碰一碰分享时，双端设备需要在亮屏、解锁的状态下并且都已开启华为分享服务（系统默认开启），打开集成了碰一碰分享的游戏页面后，设备顶部轻碰即可触发。如果用户已手动关闭华为分享服务开关，轻碰事件触发时，用户会接收到系统通知提示开启。

1. 调用[qg.canIUse('MiniGame.KnockSharing')](https://developer.huawei.com/consumer/cn/doc/games-references/games-api-quickgame-runtime-sysinfo-0000002399676789#section165771434195617)判断当前客户端是否支持碰一碰分享，或调用[qg.canIUse('MiniGame.GesturesShare')](https://developer.huawei.com/consumer/cn/doc/games-references/games-api-quickgame-runtime-sysinfo-0000002399676789#section165771434195617)判断当前客户端是否支持隔空传送。同时调用[qg.canIUse('MiniGame.OnShare')](https://developer.huawei.com/consumer/cn/doc/games-references/games-api-quickgame-runtime-sysinfo-0000002399676789#section165771434195617)判断当前客户端是否支持OnShare特性。

   ![](./img/5e06461a.png)

   若当前客户端不支持OnShare特性，则无法接收分享的数据。

   ```
   const isSupportKnockSharing = qg.canIUse('MiniGame.KnockSharing');
   console.log('isSupportKnockSharing: ' + isSupportKnockSharing) // 是否支持碰一碰分享

   const isSupportGesturesShare = qg.canIUse('MiniGame.GesturesShare');
   console.log('isSupportGesturesShare: ' + isSupportGesturesShare) // 是否支持隔空传送

   const isSupportOnShare = qg.canIUse('MiniGame.OnShare');
   console.log('isSupportOnShare : ' + isSupportOnShare ) // 是否支持OnShare特性
   ```
2. 调用[qg.onShare](https://developer.huawei.com/consumer/cn/doc/games-references/games-api-quickgame-runtime-knock-share-0000002366156896#section94961019174317)监听游戏触发碰一碰分享/隔空传送事件。触发碰一碰分享/隔空传送事件时，可以在回调函数返回值内携带自定义数据分享给其他人。

   ```
   // 碰一碰场景shareType为knock
   qg.onShare((shareType)=>{
      if ("knock" === shareType) {
   	return extraData: "{roomId: 176567}"
      } else if ("gesturesShare" === shareType) {
           return extraData: "{roomId: 176568}"
      }
   })
   ```
3. 调用[qg.onReceiveShare](https://developer.huawei.com/consumer/cn/doc/games-references/games-api-quickgame-runtime-knock-share-0000002366156896#section870510433594)监听游戏通过分享链接启动时是否有自定义数据，若有自定义数据，则通过callback回调函数返回给游戏，游戏可以执行相应的业务逻辑。调用[qg.offReceiveShare](https://developer.huawei.com/consumer/cn/doc/games-references/games-api-quickgame-runtime-knock-share-0000002366156896#section10633134685920)移除监听游戏通过分享链接启动时是否有自定义数据。

   ```
   const listener = function (shareType, params) {
   if ("knock" === shareType) {
     var extraData = params && params.extraData;
     if (extraData) {
       console.log(extraData);
     }
   } else if ("gesturesShare" === shareType) {
     var extraData = params && params.extraData;
     if (extraData) {
       console.log(extraData);
     }
   }
   qg.onReceiveShare(listener);
   ```
4. 调用[qg.offShare](https://developer.huawei.com/consumer/cn/doc/games-references/games-api-quickgame-runtime-knock-share-0000002366156896#section2052914311437)移除监听游戏触发碰一碰分享/隔空传送事件。

   ```
   qg.offShare();
   ```
