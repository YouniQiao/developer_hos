---
format: md
title: "调用notificationManager.publish发布通知失败"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-notification-kit-8
---

**问题现象**

发布通知后，未生成错误日志信息，通知栏中未显示通知。

**可能原因**

对应应用的通知开关处于关闭状态。

**解决措施**

在真机端系统设置中，开启对应应用的通知开关后，才能在通知栏中看到发布的通知。

方案一：手动开启步骤：设置 > 通知和状态栏 > 应用名称 > 允许通知。

方案二：可通过`notificationManager.requestEnableNotification()`接口弹窗请求用户授权（仅弹一次）。

**参考链接**

[requestEnableNotification](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-notificationmanager#notificationmanagerrequestenablenotification10)
