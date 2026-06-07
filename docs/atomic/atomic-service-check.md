---
title: "元服务上架审核预检"
original_url: /docs/dev/atomic-dev/atomic-running-debugging/atomic-service-check
format: md
---


开发者在正式提交上架审核前，建议通过[AGC云测试服务](/docs/distribute/agc/agc-help-cloudtest-0000002235710242/agc-help-cloudtest-introduction-0000002255036400)提供的[上架测试](/docs/distribute/agc/agc-help-cloudtest-0000002235710242/agc-help-cloudtest-releasetest-0000002289646673)模式对元服务进行预检。AGC云测试服务可帮助开发者提升测试环节效率、降低测试成本，提供包括HarmonyOS设备在内的深度质量检测，按照元服务上架华为应用市场的标准，对元服务进行兼容性、稳定性、功耗、UX专项测试，快速出具专业且详细的测试报告，帮助开发者提前发现并精准定位、解决应用在设备上运行的问题。

![](./img/25b6dfd0.png)

如存在问题项，开发者需根据修改建议及相关规范完成问题修改，以免正式提交上架审核时被驳回。

应用市场正式上架审核范围（见[元服务审核指南](https://developer.huawei.com/consumer/cn/doc/distribution/app/50129)要求）包含但不限于AGC云测试上架测试检测范围，同时由于测试遍历技术的限制个别指标可能小概率出现与上架审核结果存在偏差，因此AGC云测试结果不作为上架审核的证明材料，元服务是否能在应用市场审核通过以应用市场正式上架审核为准。

## 使用流程及方法

工具使用流程及方法请参考[云测试-上架测试](/docs/distribute/agc/agc-help-cloudtest-0000002235710242/agc-help-cloudtest-releasetest-0000002289646673)。

## 测试指标及规格

元服务当前支持的测试类型包括兼容性、稳定性、功耗、UX等，具体测试指标请参见[查看测试报告](https://developer.huawei.com/consumer/cn/doc/app/agc-help-cloudtest-viewreport-0000002289646669)，指标规格细则请参见[体验建议](/docs/experience-suggestions/experience-suggestions-overview)、[元服务 UX 体验标准](/docs/design/ux-standards/atomic-service-ux)。
