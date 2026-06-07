---
title: "手机和轻量级智能穿戴设备通信，提示错误码206"
original_url: /docs/dev/app-dev/system/system-hardware/wear-engine-kit-guide/wearengine_faq/wearengine_faq-6
format: md
---


* 手机和穿戴设备的包名或证书指纹不匹配

  + 轻量级智能穿戴设备侧：需要把手机的包名和指纹信息放到白名单中
  + 手机侧：需要把轻量级智能穿戴设备侧应用的包名和指纹信息配置正确
* 轻量级智能穿戴设备侧应用不在前台
* 手机或轻量级智能穿戴设备侧应用没有注册消息接收器
* 发送的消息为空
* 蓝牙未连接
