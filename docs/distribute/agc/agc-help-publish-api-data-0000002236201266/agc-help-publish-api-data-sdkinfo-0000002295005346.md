---
title: "SdkInfo"
original_url: /docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-sdkinfo-0000002295005346
format: md
---


| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| name | O | String(100) | SDK名称。 |
| providerName | O | String(100) | SDK提供方名称。 |
| version | O | String(100) | SDK版本号。 |
| privacyDeclare | O | String(512) | SDK隐私声明。 |
| privacyLabels | O | `List&lt;[SceneItem](/docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-sceneitem-0000002294845634)>` | SDK收集的信息。  数组长度不超过200。 |
| scene | O | String(200) | 使用场景。 |
| collectType | O | String(100) | 收集方式。 |
| purpose | O | String(500) | 使用目的。 |
