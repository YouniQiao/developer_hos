---
title: "PackageStates"
original_url: /docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-packagestates-0000002271160601
format: md
upstream_id: distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-packagestates-0000002271160601
last_sync: 2026-06-07
sync_hash: 3706d441
---
| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| pkgId | M | String(64) | 软件包ID。 |
| successStatus | M | Integer(32) | 软件包状态汇总结果。  取值范围：   * 0：正常 * 1：解析中 * 2：失败，表示软件包不可用。 |
