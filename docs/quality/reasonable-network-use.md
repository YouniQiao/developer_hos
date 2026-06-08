---
title: "网络资源合理使用"
original_url: /docs/quality/reasonable-network-use
upstream_id: /docs/quality/reasonable-network-use
last_sync: 2026-06-07
sync_hash: de21816d
---
# 网络资源合理使用

无长时任务的应用退到后台时，主动断开TCP和UDP连接。

## 约束

如果应用不主动断开socket连接，系统将强制断开TCP连接。应用返回前台后，需主动重新创建连接。

## 示例

### HTTP数据请求

```ts
import { UIAbility } from '@kit.AbilityKit';
import { http } from '@kit.NetworkKit';

export default class EntryAbility extends UIAbility {
  // ...
  onForeground(): void {
    // Create an HTTP request based on the service requirements at the foreground
    let httpRequest: http.HttpRequest = http.createHttp();
    // ...
  }

  onBackground(): void {
    // ...
    // Go back to the background and release the http request
    httpRequest.destroy();
  }
}
```
<div class="source-link-wrapper"><a class="source-link" href="https://gitcode.com/harmonyos_samples/BestPracticeSnippets/blob/master/BptaUseResources/entry/src/main/ets/pages/Https.ets#L7-L25">Https.ets</a></div>

有关HTTP数据请求相关接口的使用，详情可以参考[使用HTTP访问网络](/docs/dev/app-dev/system/system-network/network-kit/network-kit-data-transmission/http-request)。

### Socket连接

```ts
import { UIAbility } from '@kit.AbilityKit';
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
  // ...
  tcp: socket.TCPSocket = socket.constructTCPSocketInstance();

  onForeground(): void {
    /**
     * In the foreground, create a socket connection and send service data as required, for example:
     * this.tcp.bind(ipAddress, (err: BusinessError) => {})
     * this.tcp.connect(tcpConnect, (err: BusinessError) => {})
     * this.tcp.send(tcpSendOptions, (err: BusinessError) => {})
     */
  }

  onBackground(): void {
    // Go back to the background and close the socket connection
    this.tcp.close((err: BusinessError) => {})
  }
}
```
<div class="source-link-wrapper"><a class="source-link" href="https://gitcode.com/harmonyos_samples/BestPracticeSnippets/blob/master/BptaUseResources/entry/src/main/ets/pages/Socket.ets#L7-L28">Socket.ets</a></div>

有关网络Socket相关接口的使用，详情可以参考[使用Socket访问网络](/docs/dev/app-dev/system/system-network/network-kit/network-kit-data-transmission/socket-connection)。

### WebSocket连接

```ts
import { UIAbility } from '@kit.AbilityKit';
import { webSocket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
  // Create a websocket based on service requirements
  ws: webSocket.WebSocket = webSocket.createWebSocket();

  onForeground(): void {
    // Send data through websocket in the foreground
    this.ws.on('open', (err: BusinessError, value: Object) => {
      console.log("onopen,status:" + JSON.stringify(value));
      // When an on ('open') event is received, you can communicate with the server through the send () method
      this.ws.send("Hello,server!", (err: BusinessError, value: boolean) => {
        if (!err) {
          console.log("Messagesentsuccessfully");
        } else {
          console.log("Failedtosendthemessage.Err:" + JSON.stringify(err));
        }
      });
    });
  }

  onBackground(): void {
    // Backstage closes websocket
    this.ws.close((err: BusinessError) => {});
  }
}
```
<div class="source-link-wrapper"><a class="source-link" href="https://gitcode.com/harmonyos_samples/BestPracticeSnippets/blob/master/BptaUseResources/entry/src/main/ets/pages/WebSocket.ets#L7-L37">WebSocket.ets</a></div>

有关网络WebSocket相关接口的使用，详情可以参考[使用WebSocket访问网络](/docs/dev/app-dev/system/system-network/network-kit/network-kit-data-transmission/websocket-connection)。
