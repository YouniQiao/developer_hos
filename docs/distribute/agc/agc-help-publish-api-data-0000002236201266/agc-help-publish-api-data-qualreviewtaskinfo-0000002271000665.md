---
title: "QualReviewTaskInfo"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-publish-api-data-qualreviewtaskinfo-0000002271000665
---

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| appId | O | String(32) | 应用ID。 |
| tagId | O | String(64) | 标签ID。 |
| taskId | O | String(32) | 资质审核任务ID。 |
| isMainTag | O | Integer(32) | 是否为主标签。  取值范围：   * 0：否 * 1：是 |
| state | O | Integer(32) | 资质审核任务状态。  取值范围：   * 0：待提交 * 1：待审核 * 2：已通过 * 3：未通过 * 4：已过期 * 5：已失效 |
| qualificationInfos | O | `List&lt;[QualificationInfo](https://developer.huawei.com/consumer/cn/doc/app/agc-help-publish-api-data-qualificationinfo-0000002236201286)>` | 标签对应的资质信息列表。  数组长度不超过10。 |
| lastAuditResult | O | String(10000) | 资质审核意见。 |
| createTime | O | Integer(64) | 资质审核提交时间。 |
| updateTime | O | Integer(64) | 资质审核状态更新时间。 |
