---
title: "网络连接管理"
original_url: https://developer.huawei.com/consumer/cn/doc/atomic-guides/atomic-net-connection-manager
---

## 简介

网络连接管理提供管理网络一些基础能力，包括Wi-Fi/蜂窝/Ethernet等多网络连接优先级管理、网络质量评估、订阅默认/指定网络连接状态变化、查询网络连接信息、DNS解析等功能。

![](./img/b60097cb.png)

为了保证应用的运行效率，大部分API调用都是异步的，对于异步调用的API均提供了callback和Promise两种方式，以下示例均采用callback函数，更多方式可以查阅[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-net-connection)。

## 基本概念

* 网络生产者：数据网络的提供方，比如Wi-Fi、蜂窝、Ethernet等。
* 网络消费者：数据网络的使用方，比如应用或系统服务。
* 网络探测：检测网络有效性，避免将网络从可用网络切换到不可用网络。内容包括绑定网络探测、DNS探测、HTTP探测及HTTPS探测。
* 网络优选：处理多网络共存时选择最优网络。在网络状态、网络信息及评分发生变化时被触发。

## 约束

* 开发语言：JS
* 本模块首批接口从API version 8开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

## 场景介绍

网络连接管理的典型场景有：

* 接收指定网络的状态变化通知
* 获取所有注册的网络
* 根据数据网络查询网络的连接信息
* 使用对应网络解析域名，获取所有IP

以下分别介绍具体开发方式。

## 接口说明

完整的JS API说明以及实例代码请参考：[网络连接管理](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-net-connection)。

| 接口名 | 描述 |
| --- | --- |
| getDefaultNet(callback: AsyncCallback\&lt;NetHandle\&gt;): void; | 获取一个含有默认网络的netId的NetHandle对象，使用callback回调。 |
| getDefaultNetSync(): NetHandle; | 使用同步方法获取默认激活的数据网络。可以使用getNetCapabilities去获取网络的类型、拥有的能力等信息。 |
| getNetCapabilities(netHandle: NetHandle, callback: AsyncCallback\&lt;NetCapabilities\&gt;): void; | 查询默认网络的能力集信息，使用callback回调。 |
| createNetConnection(netSpecifier?: NetSpecifier, timeout?: number): NetConnection; | 返回一个NetConnection对象，netSpecifier指定关注的网络的各项特征，timeout是超时时间(单位是毫秒)，netSpecifier是timeout的必要条件，两者都没有则表示关注默认网络。 |
| on(type: 'netAvailable', callback: Callback\&lt;NetHandle\&gt;): void; | 监听收到网络可用的事件。 |
| on(type: 'netCapabilitiesChange', callback: Callback\&lt;&#123; netHandle: NetHandle, netCap: NetCapabilities &#125;\&gt;): void; | 监听网络能力变化的事件。 |
| on(type: 'netLost', callback: Callback\&lt;NetHandle\&gt;): void; | 监听网络丢失的事件。 |
| on(type: 'netUnavailable', callback: Callback\&lt;void\&gt;): void; | 监听网络不可用的事件。 |
| register(callback: AsyncCallback\&lt;void\&gt;): void; | 注册默认网络或者createNetConnection中指定的网络的监听。 |
| unregister(callback: AsyncCallback\&lt;void\&gt;): void; | 注销默认网络或者createNetConnection中指定的网络的监听。 |

## 接收指定网络的状态变化通知

1. 声明接口调用所需要的权限：ohos.permission.GET\_NETWORK\_INFO。

   此权限级别为normal，在申请权限前，请保证符合[权限使用的基本原则](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-permission-mgmt-overview#权限使用的基本原则)。然后参考[配置文件权限声明指导文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/declare-permissions)声明对应权限。
2. 从@ohos.net.connection中导入connection命名空间。
3. 调用createNetConnection方法，指定网络能力、网络类型和超时时间（可选，如不传入代表默认网络；创建不同于默认网络时可通过指定这些参数完成），创建一个NetConnection对象。
4. 调用该对象的on()方法，传入type和callback，订阅相应事件。
5. 调用该对象的register()方法，订阅指定网络状态变化的通知。
6. 当网络可用时，会收到netAvailable事件的回调；当网络不可用时，会收到netUnavailable事件的回调。
7. 当不使用该网络时，可以调用该对象的unregister()方法，取消订阅。

```
// 引入包名
import connection from '@ohos.net.connection';
import { BusinessError } from '@kit.BasicServicesKit';

let netSpecifier: connection.NetSpecifier = {
  netCapabilities: {
    // 假设当前默认网络是Wi-Fi，需要创建蜂窝网络连接，可指定网络类型为蜂窝网
    bearerTypes: [connection.NetBearType.BEARER_CELLULAR],
    // 指定网络能力为Internet
    networkCap: [connection.NetCap.NET_CAPABILITY_INTERNET]
  },
};

// 指定超时时间为10s(默认值为0)
let timeout = 10 * 1000;

// 创建NetConnection对象
let conn = connection.createNetConnection(netSpecifier, timeout);

// 订阅指定网络状态变化的通知
conn.register((err: BusinessError, data: void) => {
  console.log(JSON.stringify(err));
});

// 订阅事件，如果当前指定网络可用，通过on_netAvailable通知用户
conn.on('netAvailable', ((data: connection.NetHandle) => {
  console.log("net is available, netId is " + data.netId);
}));

// 订阅事件，如果当前指定网络不可用，通过on_netUnavailable通知用户
conn.on('netUnavailable', ((data: void) => {
  console.log("net is unavailable, data is " + JSON.stringify(data));
}));

// 当不使用该网络时，可以调用该对象的unregister()方法，取消订阅
conn.unregister((err: BusinessError, data: void) => {
});
```

## 根据数据网络查询网络的能力信息及连接信息

### 开发步骤

1. 声明接口调用所需要的权限：ohos.permission.GET\_NETWORK\_INFO。

   此权限级别为normal，在申请权限前，请保证符合[权限使用的基本原则](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-permission-mgmt-overview#权限使用的基本原则)。然后参考[配置文件权限声明指导文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/declare-permissions)声明对应权限。
2. 从@ohos.net.connection中导入connection命名空间。
3. 通过调用getDefaultNet方法，获取默认的数据网络(NetHandle)；或者通过调用getAllNets方法，获取所有处于连接状态的网络列表(Array\&lt;NetHandle\&gt;)。
4. 调用getNetCapabilities方法，获取NetHandle对应网络的能力信息。能力信息包含了网络类型(蜂窝网络、Wi-Fi网络、以太网网络等)、网络具体能力等网络信息。
5. 调用getConnectionProperties方法，获取NetHandle对应网络的连接信息。

```
import connection from '@ohos.net.connection';
import { BusinessError } from '@kit.BasicServicesKit';

// 构造单例对象
export class GlobalContext {
  public netList: connection.NetHandle[] = [];
  public netHandle: connection.NetHandle|null = null;
  private constructor() {}
  private static instance: GlobalContext;
  private _objects = new Map<string, Object>();

  public static getContext(): GlobalContext {
    if (!GlobalContext.instance) {
      GlobalContext.instance = new GlobalContext();
    }
    return GlobalContext.instance;
  }

  getObject(value: string): Object | undefined {
    return this._objects.get(value);
  }

  setObject(key: string, objectClass: Object): void {
    this._objects.set(key, objectClass);
  }
}

// 调用getDefaultNet方法，获取默认的数据网络(NetHandle)
connection.getDefaultNet((err: BusinessError, data:connection.NetHandle) => {
  console.log(JSON.stringify(err));
  console.log(JSON.stringify(data));
  if (data) {
    GlobalContext.getContext().netHandle = data;
  }
})

// 获取NetHandle对应网络的能力信息。能力信息包含了网络类型、网络具体能力等网络信息
connection.getNetCapabilities(GlobalContext.getContext().netHandle, (err: BusinessError, data: connection.NetCapabilities) => {
  console.log(JSON.stringify(err));

  // 获取网络类型(bearerTypes)
  let bearerTypes: Set<number> = new Set(data.bearerTypes);
  let bearerTypesNum = Array.from(bearerTypes.values());
  for (let item of bearerTypesNum) {
    if (item == 0) {
      // 蜂窝网
      console.log(JSON.stringify("BEARER_CELLULAR"));
    } else if (item == 1) {
      // Wi-Fi网络
      console.log(JSON.stringify("BEARER_WIFI"));
    } else if (item == 3) {
      // 以太网网络
      console.log(JSON.stringify("BEARER_ETHERNET"));
    }
  }

  // 获取网络具体能力(networkCap)
  let itemNumber : Set<number> = new Set([0, 11, 12, 15, 16]);
  let dataNumber = Array.from(itemNumber.values());
  for (let item of dataNumber) {
    if (item == 0) {
      // 表示网络可以访问运营商的MMSC（Multimedia Message Service，多媒体短信服务）发送和接收彩信
      console.log(JSON.stringify("NET_CAPABILITY_MMS"));
    } else if (item == 11) {
      // 表示网络流量未被计费
      console.log(JSON.stringify("NET_CAPABILITY_NOT_METERED"));
    } else if (item == 12) {
      // 表示该网络应具有访问Internet的能力，该能力由网络提供者设置
      console.log(JSON.stringify("NET_CAPABILITY_INTERNET"));
    } else if (item == 15) {
      // 表示网络不使用VPN（Virtual Private Network，虚拟专用网络）
      console.log(JSON.stringify("NET_CAPABILITY_NOT_VPN"));
    } else if (item == 16) {
      // 表示该网络访问Internet的能力被网络管理成功验证，该能力由网络管理模块设置
      console.log(JSON.stringify("NET_CAPABILITY_VALIDATED"));
    }
  }
})
```
