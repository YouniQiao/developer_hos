---
title: "CertInfo"
original_url: /docs/distribute/agc/agc-help-provision-api-data-0000002271160637/agc-help-provision-api-data-certinfo-0000002236041510
format: md
upstream_id: distribute/agc/agc-help-provision-api-data-0000002271160637/agc-help-provision-api-data-certinfo-0000002236041510
last_sync: 2026-06-07
sync_hash: 0c37ebe0
---
| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| id | O | String | 证书ID。 |
| certName | O | String(256) | 证书名称。 |
| certType | O | Integer(32) | 证书类型。  取值范围：   * 1：调试 * 2：发布 * 3：In-house发布 * 4：二进制证书（用于二进制程序签名） |
| createTime | O | Integer(64) | 证书创建时间。 |
| expireTime | O | Integer(64) | 证书失效时间。 |
| certDownloadUrl | O | String | 证书下载地址。  下载地址5分钟内有效。 |
