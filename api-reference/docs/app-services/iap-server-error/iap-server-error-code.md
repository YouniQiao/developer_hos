---
title: "REST API错误码"
upstream_id: "harmonyos-references/iap-server-error-code"
catalog: "harmonyos-references"
content_hash: "79d5cd8f2531"
synced_at: "2026-07-09T01:01:22.391916"
---

# REST API错误码

![](./img/note_3.0-zh-cn.png) 若问题仍未解决，请选择[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题，华为支持人员会及时处理。

| 值 | MSG | 描述 | 解决方法 |
| --- | --- | --- | --- |
| 0 | IAP_RESPONSE_RESULT_OK | 成功。 | 不涉及。 |
| 1001880005 | IAP_APP_IAP_NOT_ACTIVATED | App的IAP功能未打开。 | 请到[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)打开应用内支付服务开关。 |
| 1001880006 | IAP_RESPONSE_RESULT_ERROR | API操作期间发生致命错误。 | 请参见响应中的错误信息。 |
| 1001880008 | IAP_RESPONSE_RESULT_ITEM_NOT_OWNED | 由于未拥有该商品，查询/确认发货失败。 | 确保已经成功购买该商品，且接口的传入参数正确，再调用查询、确认发货等接口。 |
| 1001880009 | IAP_RESPONSE_RESULT_ITEM_CONSUMED_OR_ACKNED | 消耗型/非续期订阅商品已经确认发货，不能再次确认发货。非消耗型商品只能购买一次，发货一次。 | 请检查为何存在重复调用，进一步优化项目逻辑，如需要流程确认和建议，请联系华为支撑人员。 |
| 1001880010 | IAP_RESPONSE_RESULT_HIGHTRISK | 用户账号高风险，操作被拒绝。 | 请更换账号或重新注册。 |
| 1001880011 | IAP_USER_ACCOUNT_INVALID | 用户账号异常，比如已经销户。 | 请更换账号或重新注册。 |
| 1001880012 | IAP_RECORD_NOT_EXIST | 订单记录不存在，只能查询用户针对特定商品的最新一笔订单信息，当前查询可能为历史订单。 | 常规流程不需要进行历史订单的token校验，请确认接入流程符合指导要求。 |
| 1001880020 | IAP_RESPONSE_RESULT_REPEAT_SHIP_CONFIRM | 自动续期订阅商品已经确认发货，不能再次确认发货。 | 请检查为何存在重复调用，进一步优化项目逻辑，如需要流程确认和建议，请联系华为支撑人员。 |
