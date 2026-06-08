---
title: "接入流程"
original_url: /docs/distribute/agc/agc-help-location-sense-by-beacon-0000002305369365/agc-help-by-beacon-summary-0000002270649532
format: md
upstream_id: distribute/agc/agc-help-location-sense-by-beacon-0000002305369365/agc-help-by-beacon-summary-0000002270649532
last_sync: 2026-06-07
sync_hash: 26d138a6
upstream_hash: 021b97764832
---

开发者可以通过近场服务提供的设备管理模块注册信标设备，并对其进行管理。除基础的设备管理能力之外，平台为已认证信标设备提供了附加的管控能力，例如在线配置、电量监控等。未认证设备不具备上述附加能力。

| **序号** | **步骤** | **详情** |
| --- | --- | --- |
| 1 | [申请开通权限](/docs/distribute/agc/agc-help-location-sense-0000002305282449/agc-help-location-sense-apply-permission-0000002382902149) | 当前近场服务处于灰度开放阶段，使用服务前需先申请开通近场服务权限。如果已开通，可跳过本步骤。 |
| 2 | [意图开发](https://developer.huawei.com/consumer/cn/doc/app/agc-help-insight-config-beacon-0000002270752670) | 应用开发阶段，您需要在“insight\_intent.json”配置文件中声明需要使用的意图，并实现意图调用。 |
| 3 | 采购信标设备 | 您可通过生态市场采购已认证的信标设备。如果已有信标设备，可跳过本步骤。  建议采购渠道：进入[生态市场](https://developer.huawei.com/consumer/cn/market/prod-list?fromNav=otherSource)的“其他资源”页面，在左侧筛选栏中选择“类别-设备定制”，搜索框输入“蓝牙信标”并点击搜索，挑选适合自己场景的设备，联系厂商购买即可。 |
| 4 | [注册信标设备](/docs/distribute/agc/agc-help-location-sense-by-beacon-0000002305369365/agc-help-beacon-regist-0000002305369369) | 根据实际需求选择设备型号，并注册信标设备。 |
| 5 | [创建测试态服务](https://developer.huawei.com/consumer/cn/doc/app/agc-help-beacon-apply-teststate-service-0000002456705193) | 近场服务正式上线前，您可以先创建测试态的近场服务验证出卡效果。 |
| 6 | [使用自有真机测试](https://developer.huawei.com/consumer/cn/doc/app/agc-help-beacon-own-real-phone-testing-0000002456745305) | 近场测试模块支持开发者使用自有真机测试，可在服务上线前进行端到端验证，确保出卡效果符合预期。 |
| 7 | [创建全网态服务](/docs/distribute/agc/agc-help-location-sense-by-beacon-0000002305369365/agc-help-beacon-apply-service-0000002270649536) | 创建全网态近场服务，关联信标设备。 |
