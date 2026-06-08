---
title: "PhasedReleaseInfo"
original_url: /docs/distribute/agc/agc-help-test-api-data-0000002237336484/agc-help-test-api-data-phasedreleaseinfo-0000002237496320
format: md
upstream_id: distribute/agc/agc-help-test-api-data-0000002237336484/agc-help-test-api-data-phasedreleaseinfo-0000002237496320
last_sync: 2026-06-07
sync_hash: c6df81e6
---
| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| phasedReleaseStartTime | M | String(64) | 分阶段发布生效开始时间。  此时间是与1970年1月1日午夜之间的差值。  单位：毫秒  示例：1704211200000 |
| phasedReleaseEndTime | M | String(64) | 分阶段发布生效结束时间。  此时间是与1970年1月1日午夜之间的差值。  单位：毫秒  示例：1704211200000 |
| phasedReleasePercent | M | String(10) | 分阶段发布百分比。  取值范围：0.00到100.00 |
| phasedReleaseDescription | M | String(500) | 分阶段发布说明。 |
