---
title: "VersionExtInfo"
original_url: /docs/distribute/agc/agc-help-test-api-data-0000002237336484/agc-help-test-api-data-versionextinfo-0000002272455645
format: md
upstream_id: distribute/agc/agc-help-test-api-data-0000002237336484/agc-help-test-api-data-versionextinfo-0000002272455645
last_sync: 2026-06-07
sync_hash: 4ac59a8b
---
| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| testUserName | O | String(128) | 应用审核信息的测试账号。  注意：  仅公开测试支持填写此字段。 |
| testUserPassword | O | String(128) | 应用审核信息的测试用户密码。  注意：  仅公开测试支持填写此字段。 |
| appRemark | O | String(300) | 应用审核信息的备注。  注意：  仅公开测试支持填写此字段。 |
| isSignedCommitment | O | Integer(32) | 是否签署合规承诺函。  取值范围：   * 空：未签署 * 1：已签署 说明：  目前只有元服务涉及签署。   默认值：空  注意：  仅公开测试支持填写此字段。 |
| registeredIdType | O | Integer(32) | 备案证件类型。  取值范围：   * -1：清空数据，同时也会清空**registeredIdNumber**的内容。 * 1：面向企业，备案证件为社会信用。 * 2：面向个人，备案证件为身份证。 * 3：面向机构，备案证件为机构代码。   注意：  仅公开测试支持填写此字段。 |
| registeredIdNumber | O | String(64) | 备案证件号码。  取值范围：   * **registeredIdType**为1时，对应社会信用代码。 * **registeredIdType**为2时，对应身份证号码。 * **registeredIdType**为3时，对应机构代码。   注意：  仅公开测试支持填写此字段。 |
| privacyAgreementId | O | String(32) | 隐私协议ID。  注意：  仅公开测试支持填写此字段。 |
| userAgreementUrl | O | String(512) | 用户协议URL。  注意：  仅公开测试支持填写此字段。 |
| userAgreementIds | O | `List&lt;String(32)>` | 用户协议ID列表。  当**userAgreementUrl**和**userAgreementIds**同时传值时，以**userAgreementIds**值为准。  数组长度不超过5。  注意：  仅公开测试支持填写此字段。 |
| privacyPolicy | O | String(512) | 隐私政策网址。 |
| privacyRightsUrl | O | String(256) | 隐私权利网址。 |
| encrypted | O | Integer(32) | 包是否加密。  取值范围：   * 0：否，表示不加密。 * 1：是，表示加密。   默认值：1 |
| isAiGenerate | O | Integer(32) | 是否涉及AI生成合成服务。  取值范围：   * 0：不涉及。 * 1：涉及。   注意：  仅公开测试支持填写此字段。 |
| aiTypes | O | `List&lt;Integer(32)>` | 涉及的AI生成合成服务类型。  注意：  仅公开测试支持填写此字段。  取值范围：   * -1：其他 * 1：文本 * 2：图片 * 3：音频 * 4：视频 * 5：虚拟场景   说明：  isAiGenerate取值为1（涉及）时，此参数必填。 |
| appReviewPhoneInfo | O | [AppReviewContact](/docs/distribute/agc/agc-help-test-api-data-0000002237336484/agc-help-test-api-data-appreviewcontact-0000002527365043) | 应用负责人的手机号信息。用于沟通审核问题。  注意：  仅公开测试支持填写此字段。 |
| appReviewEmailInfo | O | [AppReviewContact](/docs/distribute/agc/agc-help-test-api-data-0000002237336484/agc-help-test-api-data-appreviewcontact-0000002527365043) | 应用负责人的邮箱账号信息。用于接收上架审核结果，应用整改或下架通知。  注意：  仅公开测试支持填写此字段。 |
| appReviewName | O | String(256) | 应用负责人的姓名。  注意：  仅公开测试支持填写此字段。 |
