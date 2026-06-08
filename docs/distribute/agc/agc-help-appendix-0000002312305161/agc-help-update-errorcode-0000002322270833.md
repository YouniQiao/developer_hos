---
title: "版本升级错误码说明"
original_url: /docs/distribute/agc/agc-help-appendix-0000002312305161/agc-help-update-errorcode-0000002322270833
format: md
upstream_id: distribute/agc/agc-help-appendix-0000002312305161/agc-help-update-errorcode-0000002322270833
last_sync: 2026-06-07
sync_hash: 433a2224
---
| 错误码 | 错误详情 |
| --- | --- |
| [101](#section1528375913118) | 同版本升级，软件包的应用模型校验失败 |
| [102](#section89587123306) | 高版本升级，软件包的应用模型校验失败 |
| [103](#section41531951530) | 软件包中的targetBundleName校验失败 |
| [104](#section105491391932) | 软件包中的targetPriority校验失败 |
| [105](#section1960011426317) | 同版本升级，entry包中的module.name校验失败 |
| [106](#section19598144518319) | 高版本升级，entry包中的module.name校验失败 |

#### 错误码：101，表示：同版本升级，软件包的应用模型校验失败

若在架版本软件包为FA模型，升级版本的软件包也应是FA模型；若在架版本软件包为Stage模型，升级版本的软件包也应是Stage模型。

可通过[应用程序包基础知识](/docs/dev/app-dev/getting-started/dev-fundamentals/application-package-fundamentals)了解相关信息。

#### 错误码：102，表示：高版本升级，软件包的应用模型校验失败

若在架版本软件包为FA模型，升级版本的软件包可为FA模型或Stage模型；若在架版本软件包为Stage模型，升级版本的软件包也应是Stage模型。

可通过[应用程序包基础知识](/docs/dev/app-dev/getting-started/dev-fundamentals/application-package-fundamentals)了解相关信息。

#### 错误码：103，表示：软件包中的targetBundleName校验失败

若在架版本软件包中配置了targetBundleName，升级版本时也应配置该字段；反之，若在架版本未配置，升级版本时也不应配置该字段。

相关配置可参考[app.json5配置](/docs/dev/app-dev/getting-started/dev-fundamentals/app-configuration-file)。

#### 错误码：104，表示：软件包中的targetPriority校验失败

若在架版本软件包中配置了targetPriority，升级版本时也应配置该字段；反之，若在架版本未配置，升级版本时也不应配置该字段。

相关配置可参考[app.json5配置](/docs/dev/app-dev/getting-started/dev-fundamentals/app-configuration-file)。

#### 错误码：105，表示：同版本升级，软件包中的module.name校验失败

对于同一种设备类型（deviceType），升级版本时，entry包中的module.name应与在架版本一致。否则，应用无法提交审核。

相关配置可参考[module.json5配置](/docs/dev/app-dev/getting-started/dev-fundamentals/module-configuration-file)。

#### 错误码：106，表示：高版本升级，软件包中的module.name校验失败

对于同一种设备类型（deviceType），升级版本时，entry包中的module.name应与在架版本一致。若不一致，不会影响应用提交审核及上架，但可能会导致用户更新后数据丢失。

相关配置可参考[module.json5配置](/docs/dev/app-dev/getting-started/dev-fundamentals/module-configuration-file)。
