---
title: "Domain Management API指南"
original_url: /docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-domain-api-guide-0000002236041402
format: md
upstream_id: distribute/agc/agc-help-connect-api-0000002236015554/agc-help-domain-api-guide-0000002236041402
last_sync: 2026-06-07
sync_hash: 086241fa
---
针对元服务管控访问域名的范围，您可以调用Domain Management API配置域名信息。

1. 如果是业务域名，则调用[下载域名配置文件](/docs/distribute/agc/agc-help-domain-api-reference-0000002271160649/agc-help-domain-api-download-domain-config-0000002271160653)接口，下载域名配置文件。

   ![](../img/agc-help-domain-api-guide-0000002236041402_0.png)

   如果是服务器域名，则无需下载域名配置文件，直接跳至[3](#ZH-CN_TOPIC_0000002236041402__zh-cn_topic_0000002133790653_li137133773120)。
2. 将下载的域名配置文件部署到域名服务器侧。
3. 调用[新增应用的域名配置信息](/docs/distribute/agc/agc-help-domain-api-reference-0000002271160649/agc-help-domain-api-post-domain-0000002236041522)接口，配置域名。
   * 配置域名后，可以调用[查询应用的域名配置信息](/docs/distribute/agc/agc-help-domain-api-reference-0000002271160649/agc-help-domain-api-get-domain-0000002271000701)接口查询配置是否成功。
   * 新增超过10个业务域名时，建议先调用[预检查业务域名配置](/docs/distribute/agc/agc-help-domain-api-reference-0000002271160649/agc-help-domain-api-precheck-0000002295134522)接口确认是否可以新增成功。
   * 因为华为运营会在管理台配置域名配置的修改次数上限，如果配置失败，可以调用[查询域名修改次数/配置上限](/docs/distribute/agc/agc-help-domain-api-reference-0000002271160649/agc-help-domain-api-get-domain-config-0000002236201326)接口检查修改是否超过上限。
