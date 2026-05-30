---
title: "StorageInfo"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-publish-api-data-storageinfo-0000002295005350
---

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| storagePeriod | O | String(512) | 开发者对信息的存储期限。  取值范围：   * -1：表示最短期限。 * 其他取值表示由开发者填写。 |
| country | O | String(100) | 服务器所在国家。  示例：中国境内 |
| isCrossBorder | O | boolean | 是否跨境。  取值范围：   * true：表示跨境 * false：表示未跨境 |
| crossBorderReason | O | String(500) | 跨境处理原因。 |
| crossBorderReceiveName | O | String(100) | 跨境接收方名称/姓名。 |
| crossBorderDeclarations | O | `List&lt;[SceneItem](https://developer.huawei.com/consumer/cn/doc/app/agc-help-publish-api-data-sceneitem-0000002294845634)>` | 跨境收集的信息。  数组长度不超过200。 |
| crossBorderCountry | O | String(100) | 跨境之后存储的国家/地区。 |
