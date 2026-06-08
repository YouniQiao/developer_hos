---
displayed_sidebar: appDevSidebar
title: "撤回通知消息"
original_url: /docs/dev/app-dev/application-services/push-kit-guide/push-scenes/push-alert/push-revoke-alert
format: md
upstream_id: dev/app-dev/application-services/push-kit-guide/push-scenes/push-alert/push-revoke-alert
last_sync: 2026-06-07
sync_hash: a0cf783b
---
当推送的通知消息内容有误或者存在违规情况时，可能会引起用户投诉或监管部门处罚等不良后果。Push Kit为您提供消息撤回功能，降低此类推送可能造成的影响。

![](./img/5cee455b.png)

* 消息撤回仅支持使用token和notifyId撤回。
* 若要使用消息撤回功能，请确保您在推送消息时设置了notifyId字段。
* 消息撤回仅支持以下类型：

  还未下发到端侧的消息。

  已在终端展示但用户还未点击的消息。
* 消息撤回不会影响应用的通知角标。

## 约束与限制

撤回通知消息能力支持Phone、Tablet、PC/2in1设备。并且从5.1.0(18)版本开始，新增支持Wearable设备；从5.1.1(19)版本开始，新增支持TV设备。

## 开发步骤

1. 参考[开发步骤](/docs/dev/app-dev/application-services/push-kit-guide/push-scenes/push-alert/push-send-alert#开发步骤)章节进行消息推送，确保应用可正常收到通知消息。
2. 应用服务端调用REST API撤回通知消息，消息详情可参见[消息撤回](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/push-msg-revoke)，请求示例如下：

   ```
   // Request URL
   POST "https://push-api.cloud.huawei.com/v1/[clientId]/messages:revoke"

   // Request Header
   Content-Type:application/json
   Authorization:Bearer eyJr*****OiIx---****.eyJh*****iJodHR--***.QRod*****4Gp---****
   push-type: 0

   // Request Body
   {
     "notifyId": 1234567,
     "token": [
       "pushToken1",
       "pushToken2",
       "pushToken3"
     ]
   }
   ```

   * [clientId]：请替换为您应用的Client ID，可参见[指导](/docs/distribute/agc/agc-help-app-0000002235710234/agc-help-view-app-info-0000002282674569)获取。
   * Authorization：JWT格式字符串，可参见[Authorization](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/push-msg-revoke#request-header)获取。
   * push-type：0表示通知消息场景。
   * notifyId：消息ID，消息的唯一标识，详情请参见[notifyId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/push-msg-revoke#request-body)。
   * token：Push Token，可参见[获取Push Token](/docs/dev/app-dev/application-services/push-kit-guide/push-preparations/push-get-token)获取。
