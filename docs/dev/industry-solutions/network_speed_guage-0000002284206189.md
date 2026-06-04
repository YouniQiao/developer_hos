---
title: "测速仪表盘自定义"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/network_speed_guage-0000002284206189
---

## 场景介绍

自定义测速仪表盘是实用工具类应用的典型场景之一，如用户需要检测和监控网速、流量、车速、转速、温度、湿度、信用评分等状态信息。

本示例通过[Canvas](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-components-canvas-canvas)绘制自定义仪表盘，并使用[netQuality](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/networkboost-netquality)订阅当前网速，实现网络测速仪表盘效果。

## 效果预览

![](./img/9e74fcdc.gif "点击放大")

## 实现思路

1. 通过[Canvas](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-components-canvas-canvas)绘制仪表盘。

   ```
   private drawGauge() {
     let centerX = this.canvasSize / 2;
     let centerY = this.canvasSize / 2;
     this.ctx.clearRect(0, 0, this.canvasSize, this.canvasSize);
     // 绘制边框
     this.drawProgressBorder(centerX, centerY);
     // 绘制渐变环（进度条）
     this.drawProgressRing(centerX, centerY);
     // 绘制刻度
     this.drawScale(centerX, centerY);
     // 绘制指针
     this.drawPointer(centerX, centerY);
     // 绘制数值
     this.drawValueText(centerX, centerY);
   }
   ```
2. 使用[AnimatorResult.onFrame](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-animator#属性)监听动画帧，在每帧动画中重绘仪表盘。

   ```
   // src/main/ets/components/Dashboard.ets
   private startAnimation(startValue: number, targetValue: number) {
     if (this.gaugeAnimator) {
       this.animatorOptions.begin = startValue;
       this.animatorOptions.end = targetValue;
       this.gaugeAnimator.reset(this.animatorOptions);
       this.gaugeAnimator.onFrame = (tmpValue) => {
         this.currentValue = tmpValue;
         this.drawGauge(); // 重新绘制仪表盘
       }
       this.gaugeAnimator.play();
     }
   }
   ```
3. 使用[netQuality](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/networkboost-netquality)订阅网络质量情况，构造下载任务，模拟测速场景。

   ```
   // src/main/ets/pages/SpeedTest.ets
   netQuality.on('netQosChange', (list: Array<netQuality.NetworkQos>) => {
     if (list.length > 0) {
       list.forEach((qos) => {
         this.currentValue = qos.linkDownRate / Constants.MBPS;
         this.maxRate = Math.max(this.maxRate, this.currentValue);
       });
     }
   });
   ```

   ![](./img/2c2bd86c.png)

   本示例需要在“src/main/ets/pages/SpeedTest.ets”中配置downloadUrl下载链接。

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 权限说明

* 获取数据网络信息权限：[ohos.permission.GET\_NETWORK\_INFO](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all#ohospermissionget_network_info)。
* 获取Internet网络权限：[ohos.permission.INTERNET](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all#ohospermissioninternet)。

## 工程目录

```
├──entry/src/main/ets                        // 代码区
│  ├──common
│  │  └──Constants.ets                       // 常量类
│  ├──components
│  │  └──Dashboard.ets                       // 自定义仪表盘组件
│  ├──entryability
│  │  └──EntryAbility.ets                    // 应用入口
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──pages
│  │  └──SpeedTest.ets                       // 主页
│  └──utils
│     ├──DownloadUtil.ets                    // 下载工具类
│     └──FileUtil.ets                        // 文件处理工具类
└──entry/src/main/resources                  // 应用资源目录
```

## 参考文档

[Canvas](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-components-canvas-canvas)

[netQuality（网络质量）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/networkboost-netquality)

[@ohos.animator（动画）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-animator)

## 代码下载

[测速仪表盘自定义示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260210101748.50638739780855686026379846021413%3A50001231000000%3A2800%3AC477EA76B34D6489BFFC770D7EDF6537FF11600B97E9CBC2F7550A8A877171D4.zip?needInitFileName=true)
