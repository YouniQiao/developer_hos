---
title: "业务场景设置"
original_url: /docs/dev/app-dev/system/system-network/network-boost-kit-guide/networkboost-netmultipathguide/networkboost-netmultipath-setscenedesc
format: md
---


## 场景介绍

应用在请求多网并发之前，通过设置业务场景，可以帮助系统进行多网并发管控和业务时长分析。

## 接口说明

具体API说明详见[接口文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/networkboost-netboost#netboostsetscenedesc)。

| 接口名 | 描述 |
| --- | --- |
| setSceneDesc(sceneDesc : SceneDesc): void | 设置业务场景。 |

## 开发步骤

1. 导入Network Boost Kit模块。

   ```
   import { netBoost } from '@kit.NetworkBoostKit';
   import { BusinessError } from '@kit.BasicServicesKit';
   ```
2. 设置业务场景。

   ```
   try {
     let sceneDesc : netBoost.SceneDesc = {
       scene : 'realtimeVoice',
       sceneEvent : netBoost.SceneEvent.SCENE_EVENT_ENTER
     }
     netBoost.setSceneDesc(sceneDesc);
   } catch (err) {
     console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
   }
   ```
