---
title: "TestTaskInfo"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-test-api-data-testtaskinfo-0000002272455649
---

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| groupInfos | M | [GroupInfo](https://developer.huawei.com/consumer/cn/doc/app/agc-help-test-api-data-groupinfo-0000002272575557) | 测试用户信息。  注意：  公开测试不支持修改。 |
| needShareLink | O | Integer | 是否需要生成分享链接。  取值范围：   * 0：不需要。 * 1：需要。 |
| publicTestInstallLimit | O | Integer | 公开测试安装次数上限。  默认值：10万次  注意：  仅公开测试支持填写此字段。 |
| displayArea | O | String(32) | 展示区域。  取值范围：   * 1：AppGallery客户端测试专区   说明：  * 邀请测试该字段必填。 * 公开测试该字段选填。 |
| needNotify | O | Integer(32) | 是否向用户发送测试通知。  取值范围：   * 0：不需要 * 1：需要   默认值：1 |
