---
displayed_sidebar: appDevSidebar
title: "订阅或取消订阅打印服务启动事件"
original_url: /docs/dev/app-dev/system/system-security/data-guard-kit-guide/dataguard-fileguard-guide/fileguard-print-startup-event
format: md
upstream_id: dev/app-dev/system/system-security/data-guard-kit-guide/dataguard-fileguard-guide/fileguard-print-startup-event
last_sync: 2026-06-13
sync_hash: 941ac5b5
---


![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e6/v3/Y0BMytSHRVC_eGElwUM7Tw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260613T014333Z&HW-CC-Expire=86400&HW-CC-Sign=78C87E4A00B21728B1A6539AF08CADFC370E039476FEAA8B3634928443ABD170) 

从6.1.1(24)版本开始，新增订阅或取消订阅打印服务启动事件接口，帮助用户获取打印服务启动时机，便于及时注册水印回调，从而启用打印水印功能。

## 场景介绍

应用需注册打印服务提供的水印注册函数以实现打印水印功能。由于打印服务并非常驻进程，应用可通过监听提供的onPrintStartup回调函数，获取打印服务启动的时机；在接收到回调后，即可向打印服务[注册水印回调](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-print#printregisterwatermarkcallback24 "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-print#printregisterwatermarkcallback24")，从而完成水印功能的启用。同时，调用[onPrintStartup](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#onprintstartup "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#onprintstartup")回调本身也作为打印水印功能的使能标志，调用[offPrintStartup](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#offprintstartup "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#offprintstartup")则会关闭打印水印功能。

## 接口说明

详细接口说明可参考[接口文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard")。

| 接口名 | 描述 |
| --- | --- |
| [onPrintStartup](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#onprintstartup "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#onprintstartup")(callback: Callback<void>): void | 订阅打印服务启动事件。 |
| [offPrintStartup](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#offprintstartup "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#offprintstartup")(callback?: Callback<void>): void | 取消订阅打印服务启动事件。 |

## 开发步骤

1. 导入模块。

   ```
   import { fileGuard } from '@kit.EnterpriseDataGuardKit';
   ```
2. 初始化[FileGuard](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#fileguard "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#fileguard")对象guard，调用接口[onPrintStartup](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#onprintstartup "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#onprintstartup")，订阅打印服务启动事件。

   ```
   function testOnPrintStartup() {
     console.info(`onPrintStartup start.`);
     let guard: fileGuard.FileGuard = new fileGuard.FileGuard();
     guard.onPrintStartup(() => {
       console.info(`Succeeded in listening print-startup.`);
     });
   }
   ```
3. 初始化[FileGuard](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#fileguard "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#fileguard")对象guard，调用接口[offPrintStartup](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#offprintstartup "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#offprintstartup")，取消订阅打印服务启动事件。

   ```
   function testOffPrintStartup() {
     console.info(`offPrintStartup start.`);
     let guard: fileGuard.FileGuard = new fileGuard.FileGuard();
     guard.offPrintStartup();
   }
   ```