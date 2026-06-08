---
title: "InvitationCodeInfo"
original_url: /docs/distribute/agc/agc-help-test-api-data-0000002237336484/agc-help-test-api-data-invitationcodeinfo-0000002237496324
format: md
upstream_id: distribute/agc/agc-help-test-api-data-0000002237336484/agc-help-test-api-data-invitationcodeinfo-0000002237496324
last_sync: 2026-06-07
sync_hash: 376d9b86
---
| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| id | O | String | 测试邀请码ID。 |
| invitationCode | O | String | 测试群组的邀请码。 |
| startTime | O | Integer(64) | 邀请码生效时间。  此时间是与1970年1月1日午夜之间的差值。  单位：毫秒  示例：1704211200000 |
| endTime | O | Integer(64) | 邀请码停止时间。  此时间是与1970年1月1日午夜之间的差值。  单位：毫秒  示例：1704211200000 |
| status | O | Integer | 邀请码状态。  取值范围：   * 1：生效中 * 2：已失效 |
| invitedNum | O | Integer | 已邀请人数。 |
| waitInviteNum | O | Integer | 待邀请人数。 |
