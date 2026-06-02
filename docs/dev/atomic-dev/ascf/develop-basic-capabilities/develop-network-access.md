---
title: "访问网络"
original_url: https://developer.huawei.com/consumer/cn/doc/atomic-ascf/develop-network-access
---

## 配置服务器域名

为给用户提供安全可靠的网络环境，从而提升用户信任度和满意度。需对调用的服务器域名做配置，配置后才可以访问。请参见[配置服务器域名](https://developer.huawei.com/consumer/cn/doc/atomic-guides/agc-help-harmonyos-server-domain)。

在元服务开发过程中，您可以在HarmonyOS设备端临时开启“开发中元服务豁免管控”选项，跳过服务器域名的校验。

## 请求HTTP数据

通过[has.request](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/apis-request#hasrequest)发起一个数据请求，支持常见的GET、POST、OPTIONS、HEAD、PUT、DELETE、TRACE、CONNECT方法。

![](./img/982662c4.png)

在使用此功能前，需要先完成[配置服务器域名](https://developer.huawei.com/consumer/cn/doc/atomic-guides/agc-help-harmonyos-server-domain)。

```
has.request({
  url: 'https://www.example.com', // 此处仅为样例，请开发者更换为可用接口地址
  data: {
    x: '',
    y: ''
  },
  success: (res) => {
    console.info('request success', res.data);
  },
  fail: (err) => {
    console.error('request fail', err);
  },
  complete: (res) => {
    console.info('request complete', res);
  }
});
```

## 建立WebSocket连接

使用[has.connectSocket](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/apis-websocket#hasconnectsocket)创建一个新的WebSocket实现连接，并且收发数据：

```
has.connectSocket({
  url: 'ws://www.example.com', // 此处仅为样例，请开发者更换为可用接口地址
  header: {
    'content-type': 'application/json'
  },
  protocols: ['protocol1'],
  success: () => {
    console.info('connectSocket success');
  },
  fail: (err) => {
    console.error('connectSocket fail', err);
  },
  complete: (res) => {
    console.info('connectSocket complete', res);
  }
});
```
