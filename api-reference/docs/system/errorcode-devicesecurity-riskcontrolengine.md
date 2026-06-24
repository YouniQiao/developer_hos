---
title: "StarShieldConfidentialRiskControlEngine（星盾机密风控引擎）"
upstream_id: "harmonyos-references/errorcode-devicesecurity-riskcontrolengine"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:35.693961"
---

# StarShieldConfidentialRiskControlEngine（星盾机密风控引擎）

![](./img/note_3.0-zh-cn.png) 以下仅介绍本模块特有错误码，通用错误码请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

#### 1010800001 内部异常

错误信息

Internal error.

错误描述

内部异常。

可能原因

接口执行流程中调用系统其它接口出现异常。

处理步骤

请优先重试，若重试不成功，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。

#### 1010800004 校验capability失败

错误信息

Verify capability fail.

错误描述

应用未开通星盾机密风控引擎服务。

可能原因

应用未开通星盾机密风控引擎服务。

处理步骤

1. 参考[开通Device Security服务](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/devicesecurity-deviceverify-activateservice)在AppGallery Connect开通“星盾机密风控引擎”。
2. 重新[申请Profile](https://developer.huawei.com/consumer/cn/doc/app/agc-help-profile-0000002270709473)，将新申请到的Profile作为工程的签名文件后重试。

#### 1010800005 调用次数超过并行阈值

错误信息

The number of calls exceeds the parallel threshold.

错误描述

接口被同时调用的数量超出最大阈值。

可能原因

1. 开发者应用并发调用该接口或者其他应用同时调用该接口，调用数量超出最大阈值。
2. 每个设备上最多支持5个并发调用。

处理步骤

建议延迟重试，比如延迟1秒。

#### 1010800006 API调用频率超过阈值

错误信息

The invoking frequency exceeds the threshold.

错误描述

接口被在单位时间内调用次数超出最大阈值。

可能原因

应用调用该接口的次数太多。

处理步骤

控制应用调用次数，此时不应重试，需在下一个统计周期再调用该接口。

#### 1010800007 操作超时

错误信息

Operation timeout.

错误描述

接口执行超时。

可能原因

系统高负载。

处理步骤

请重新发起请求。

#### 1010800009 导入风险因子数据失败

错误信息

Failed to import risk factor data.

错误描述

导入风险因子数据失败。

可能原因

导入因子没有配置 、导入因子数据与配置的数据类型不匹配，或者导入因子数据缓存重复。

处理步骤

请根据因子配置，检查因子数据取值是否错误或更换nonce值重试。

#### 1010800010 风控评分计算失败

错误信息

Risk score calculation failed.

错误描述

风控评分计算失败。

可能原因

风险策略配置或风险因子获取异常。

处理步骤

请检查风险策略配置是否正确。
