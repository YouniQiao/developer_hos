---
displayed_sidebar: appDevSidebar
title: "如何处理推送消息时遇到的问题"
original_url: /docs/dev/app-dev/application-services/push-kit-guide/push-faq/push-faq-1
format: md
upstream_id: dev/app-dev/application-services/push-kit-guide/push-faq/push-faq-1
last_sync: 2026-06-07
sync_hash: 7ce4868b
---
当使用REST API接口进行消息推送时，您可能遇到一些问题，请按照如下思路进行处理：

1. 优先检查[消息推送接口](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/push-scenariozed-api-request-struct)URL（https://push-api.cloud.huawei.com/**v3**/**[projectId]**/messages:send）是否正确。

   * 请使用v3版本的推送接口URL，不要使用v1或v2版本的推送接口URL，详情请参见[场景化消息中的请求URL版本问题](/docs/dev/app-dev/application-services/push-kit-guide/push-faq/push-faq-8)。
   * 请检查推送接口地址中的projectId，确保与您当前应用所属的项目保持一致，若不一致请更新推送接口URL中的projectId，并重新[生成鉴权令牌](/docs/dev/app-dev/application-services/push-kit-guide/push-server/push-jwt-token)，应用重新[获取Push Token](/docs/dev/app-dev/application-services/push-kit-guide/push-preparations/push-get-token)，再进行消息推送。
2. 若调用消息推送接口返回了错误码，请参见[业务响应码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/push-scenariozed-api-response#业务响应码)进行排查。
3. 若调用消息推送接口返回成功，但设备未展示消息，请参见[“如何处理云侧推送消息成功端侧消息未展示的问题”](/docs/dev/app-dev/application-services/push-kit-guide/push-faq/push-faq-2)进行排查。
