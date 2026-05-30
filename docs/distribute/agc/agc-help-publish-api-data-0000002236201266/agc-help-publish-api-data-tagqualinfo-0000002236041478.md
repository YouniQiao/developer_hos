---
title: "TagQualInfo"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-publish-api-data-tagqualinfo-0000002236041478
---

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| tagId | M | String(64) | 标签ID。 |
| taskId | O | String(32) | 资质审核任务ID。  说明：  [修改资质审核任务](https://developer.huawei.com/consumer/cn/doc/app/agc-help-publish-api-put-qualification-review-0000002422530746)时，此参数必传。 |
| qualificationInfos | O | `List&lt;[QualificationInfo](https://developer.huawei.com/consumer/cn/doc/app/agc-help-publish-api-data-qualificationinfo-0000002236201286)>` | 标签对应的资质信息列表。  数组长度不超过10。 |
