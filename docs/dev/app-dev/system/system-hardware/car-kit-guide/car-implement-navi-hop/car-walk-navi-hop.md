---
displayed_sidebar: appDevSidebar
title: "下车步行导航流转"
original_url: /docs/dev/app-dev/system/system-hardware/car-kit-guide/car-implement-navi-hop/car-walk-navi-hop
format: md
upstream_id: dev/app-dev/system/system-hardware/car-kit-guide/car-implement-navi-hop/car-walk-navi-hop
last_sync: 2026-06-07
sync_hash: f757a73d
---
支持将车机指定的地图应用的步行导航数据流转至手机。

## 场景介绍

下车步行导航流转：用户下车前，车机地图应用导航还未结束，下车后可将车机上的导航数据流转至手机，发起步行导航。

![](./img/27f2b34f.png)

## 接口说明

| 接口名 | 描述 |
| --- | --- |
| [registerSystemNavigationListener](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/car-navigationinfomgr#registersystemnavigationlistener) | 注册监听系统导航信息和指令。 |
| [unregisterSystemNavigationListener](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/car-navigationinfomgr#unregistersystemnavigationlistener) | 取消注册监听系统导航信息和指令。 |

## 开发流程

![](./img/a570e9cf.png)

## 开发步骤

1. 能力配置。

   请参考[配置能力](/docs/dev/app-dev/system/system-security/device-security-kit-guide/devicesecurity-prepare#配置能力)进行配置。下车步行导航流转场景下，metadata的name取值为carHopCapability，value取值应为**getOffCarNavi**。示例代码如下所示：

   ```
   "metadata": [
     {
       "name": "carHopCapability",
       "value": "getOffCarNavi"
     }
   ]
   ```
2. 导入相关模块。

   ```
   import { navigationInfoMgr } from '@kit.CarKit';
   import { hilog } from '@kit.PerformanceAnalysisKit';
   ```
3. 监听系统导航信息和指令。

   地图应用需要注册监听系统导航信息和指令，方便地图应用接收系统指令。用户下车后，系统会给地图应用发送START\_NAVIGATION指令，地图应用在收到指令后即可开启步行导航任务。

   ```
   // 实现SystemNavigationListener接口
   class Listener implements navigationInfoMgr.SystemNavigationListener {
     // 实现onQueryNavigationInfo方法
     onQueryNavigationInfo(query: navigationInfoMgr.QueryType,
       args: Record<string, Object>): Promise<navigationInfoMgr.ResultData> {
       // 返回导航信息给系统
       return new Promise(resolve => {
         let ret: navigationInfoMgr.ResultData = {
           code: 1001,
           message: 'message test1',
           data: args
         };
         resolve(ret);
       });
     }

     // 实现onReceiveNavigationCmd方法
     onReceiveNavigationCmd(command: navigationInfoMgr.CommandType,
       args: Record<string, Object>): Promise<navigationInfoMgr.ResultData> {
       if (command == navigationInfoMgr.CommandType.START_NAVIGATION) {
         // 地图应用处理下车后自动开启步行导航的逻辑
         if (args !== undefined && args !== null) {
           // 获取导航类型
           let naviType: navigationInfoMgr.NaviType = args['naviType'] as navigationInfoMgr.NaviType;
           // 如果是步行导航
           if (naviType === navigationInfoMgr.NaviType.WALKING) {
             let destPoi: string = args['destPoi'] as string;
             // 获取目的地名
             let destLocationName: string = args['destName'] as string;
             // 获取目的地纬度
             let destLatitude: string = destPoi?.split(',')[0].toString();
             // 获取目的地经度
             let destLongitude: string = destPoi?.split(',')[1].toString();
             // 开发者根据destLocationName、destLatitude、destLongitude发起步行导航
             // ...
           }
         }
       }
       return new Promise(resolve => {
         let ret: navigationInfoMgr.ResultData = {
           code: 1002,
           message: 'message test2',
           data: args
         };
         resolve(ret);
       });
     }
   }

   try {
     // 获取NavigationController实例
     let navInfoController: navigationInfoMgr.NavigationController = navigationInfoMgr.getNavigationController();
     // 注册监听系统导航信息和指令
     navInfoController.registerSystemNavigationListener(new Listener());
   } catch (e) {
     // 捕获接口调用异常时的错误码并做相应处理
     hilog.error(0x0000, 'testTag', `register system navigation listener, error code: ${e?.code}`);
   }
   ```
4. 取消监听。

   在地图应用退出时，需要取消之前注册的监听，减少手机系统不必要的资源消耗。

   ```
   try {
     // 获取NavigationController实例
     let navInfoController: navigationInfoMgr.NavigationController = navigationInfoMgr.getNavigationController();
     // 取消注册监听系统导航信息和指令
     navInfoController.unregisterSystemNavigationListener();
   } catch (e) {
     // 捕获接口调用异常时的错误码并做相应处理
     hilog.error(0x0000, 'testTag', `unregister system navigation listener error, error code: ${e?.code}`);
   }
   ```
