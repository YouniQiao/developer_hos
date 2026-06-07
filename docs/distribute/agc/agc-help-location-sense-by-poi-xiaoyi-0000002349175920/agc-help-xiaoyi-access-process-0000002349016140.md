---
title: "接入流程"
original_url: /docs/distribute/agc/agc-help-location-sense-by-poi-xiaoyi-0000002349175920/agc-help-xiaoyi-access-process-0000002349016140
format: md
---


基于您创建近场服务时选择的服务开放范围，近场服务形态分为测试态和全网态两种。测试态服务用于服务正式上线前的调测，服务申请提交后不需要人工审核直接上线。调测完成后，您即可创建全网态服务并提交服务上线申请，华为运营人员审核通过后，服务将正式上线。

#### 接入流程

| **序号** | **步骤** | **详情** |
| --- | --- | --- |
| 1 | [申请开通权限](/docs/distribute/agc/agc-help-location-sense-0000002305282449/agc-help-location-sense-apply-permission-0000002382902149) | 当前近场服务处于灰度开放阶段，使用服务前需先申请开通近场服务权限。如果已开通，可跳过本步骤。 |
| 2 | [意图开发](https://developer.huawei.com/consumer/cn/doc/app/agc-help-insight-config-poi-0000002349175932) | 应用开发阶段，您需要在“insight\_intent.json”配置文件中声明需要使用的意图，并实现意图调用。 |
| 3 | [创建测试态服务](https://developer.huawei.com/consumer/cn/doc/app/agc-help-poi-apply-teststate-service-0000002382896581) | 近场服务正式上线前，您可以先创建测试态的近场服务验证出卡效果。 |
| 4 | [使用自有真机测试](https://developer.huawei.com/consumer/cn/doc/app/agc-help-poi-own-real-phone-testing-0000002382896597) | 近场测试模块支持开发者使用自有真机测试，可在服务上线前进行端到端验证，确保出卡效果符合预期。 |
| 5 | [创建全网态服务](https://developer.huawei.com/consumer/cn/doc/app/agc-help-poi-apply-formalstate-service-0000002349016132) | 近场服务调测完成后，即可创建全网态近场服务并发布上线。 |
