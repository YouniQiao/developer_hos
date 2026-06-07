---
title: "在Web中打开摄像头和麦克风"
original_url: /docs/dev/app-dev/application-framework/arkweb/web-use-multimedia/web-rtc
format: md
---


WebRTC（Web Real-Time Communications）是一项实时通讯技术，它允许网络应用或站点在无需中间媒介的情况下建立浏览器之间的点对点（Peer-to-Peer）连接，实现视频流、音频流或其他任意数据的传输。WebRTC所包含的标准使得用户无需安装任何插件或第三方软件即可创建点对点（Peer-to-Peer）的数据共享与音视频会议。WebRTC技术适用于所有现代浏览器和主要平台的本机客户端，其背后的技术作为开放的Web标准实现，并在所有主要浏览器中作为常规JavaScript API提供。

Web组件可以通过W3C标准协议接口访问摄像头和麦克风，通过[onPermissionRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-events#onpermissionrequest9)接口接收权限请求通知，需在配置文件中声明相应的音视频权限。

* 使用摄像头和麦克风功能前请在module.json5中添加音视频相关权限，权限的添加方法请参考[在配置文件中声明权限](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions#在配置文件中声明权限)。

  ```
    // src/main/resources/base/element/string.json
    {
      "name": "reason_for_camera",
      "value": "reason_for_camera"
    },
    {
      "name": "reason_for_microphone",
      "value": "reason_for_microphone"
    }
  ```

  ```
    // src/main/module.json5
    "requestPermissions":[
      {
        "name" : "ohos.permission.CAMERA",
        "reason": "$string:reason_for_camera",
        "usedScene": {
          "abilities": [
            "EntryAbility"
          ],
          "when":"inuse"
        }
      },
      {
        "name" : "ohos.permission.MICROPHONE",
        "reason": "$string:reason_for_microphone",
        "usedScene": {
          "abilities": [
            "EntryAbility"
          ],
          "when":"inuse"
        }
      }
    ]
  ```

通过在JavaScript中调用W3C标准协议接口navigator.mediaDevices.getUserMedia()，该接口用于打开摄像头和麦克风。constraints参数是一个包含了video和audio两个成员的MediaStreamConstraints对象，用于说明请求的媒体类型。

在下面的示例中，单击前端界面中的开启摄像头按钮再单击onConfirm，打开摄像头和麦克风。

* 应用侧代码。

  ```
  import { webview } from '@kit.ArkWeb';
  import { BusinessError } from '@kit.BasicServicesKit';
  import { abilityAccessCtrl } from '@kit.AbilityKit';

  @Entry
  @Component
  struct WebComponent {
    controller: webview.WebviewController = new webview.WebviewController();
    uiContext: UIContext = this.getUIContext();

    aboutToAppear() {
      // 配置Web开启调试模式
      webview.WebviewController.setWebDebuggingAccess(true);
      // 获取权限请求通知，点击onConfirm按钮后，拉起摄像头和麦克风。
      let atManager = abilityAccessCtrl.createAtManager();
      atManager.requestPermissionsFromUser(this.uiContext.getHostContext(), ['ohos.permission.CAMERA', 'ohos.permission.MICROPHONE'])
        .then((data) => {
          console.info('data:' + JSON.stringify(data));
          console.info('data permissions:' + data.permissions);
          console.info('data authResults:' + data.authResults);
        }).catch((error: BusinessError) => {
        console.error(`Failed to request permissions from user. Code is ${error.code}, message is ${error.message}`);
      })
    }

    build() {
      Column() {
        Web({ src: $rawfile('index.html'), controller: this.controller })
          .onPermissionRequest((event) => {
            if (event) {
              this.uiContext.showAlertDialog({
                title: 'title',
                message: 'text',
                primaryButton: {
                  value: 'deny',
                  action: () => {
                    event.request.deny();
                  }
                },
                secondaryButton: {
                  value: 'onConfirm',
                  action: () => {
                    event.request.grant(event.request.getAccessibleResource());
                  }
                },
                cancel: () => {
                  event.request.deny();
                }
              })
            }
          })
      }
    }
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkWeb/UsingWebMultimedia/entry/src/main/ets/pages/Index.ets#L15-L70" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>

* 前端界面index.html代码。

  ```
  <!-- index.html -->
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
  <video id="video" width="500px" height="500px" autoplay></video>
  <canvas id="canvas" width="500px" height="500px"></canvas>
  <br>
  <input type="button" title="HTML5摄像头" value="开启摄像头" onclick="getMedia()"/>
  <script>
    function getMedia()
    {
      let constraints = {
        video: {width: 500, height: 500},
        audio: true
      };
      // 获取video摄像头区域
      let video = document.getElementById("video");
      // 返回的Promise对象
      let promise = navigator.mediaDevices.getUserMedia(constraints);
      // then()异步，调用MediaStream对象作为参数
      promise.then(function(MediaStream) {
        video.srcObject = MediaStream;
        video.play();
      }).catch(function(err) {
          console.info(err.name + ": " + err.message);
      });
    }
  </script>
  </body>
  </html>
  ```
