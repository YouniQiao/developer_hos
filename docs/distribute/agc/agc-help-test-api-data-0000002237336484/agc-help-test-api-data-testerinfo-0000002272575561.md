---
title: "testerInfo"
original_url: /docs/distribute/agc/agc-help-test-api-data-0000002237336484/agc-help-test-api-data-testerinfo-0000002272575561
format: md
upstream_id: distribute/agc/agc-help-test-api-data-0000002237336484/agc-help-test-api-data-testerinfo-0000002272575561
last_sync: 2026-06-07
sync_hash: 6cf629b4
---
| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| id | O | String | 测试群组成员ID。 |
| hwAccount | O | String | 测试群组成员的华为账号信息，展示电话号码或者邮箱，优先展示邮箱。  由开发者主动添加的华为账号可以明文显示；通过邀请码添加的测试成员，由该成员决定是否匿名，若要求匿名，则返回匿名后信息。 |
| nickName | O | String | 测试群组中已添加的测试成员昵称。 |
| joinType | O | Integer | 测试成员加入测试群组的方式。  取值范围：   * 1：手动添加测试成员的华为账号 * 2：通过邀请码添加测试成员 |
| joinTime | O | Integer(64) | 测试成员加入测试群组的时间。  此时间是与1970年1月1日午夜之间的差值。  单位：毫秒  示例：1704211200000 |
| latestInstallTime | O | Integer(64) | 测试版本最近安装时间。  此时间是与1970年1月1日午夜之间的差值。  单位：毫秒  示例：1704211200000 |
| versionName | O | String | 测试版本名称。 |
| versionCode | O | Integer | 测试版本号。 |
