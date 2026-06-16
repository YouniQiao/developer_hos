---
title: "流量变现服务常见问题"
original_url: https://developer.huawei.com/consumer/cn/doc/atomic-guides/atomic-ads-publisher-service-faq
---

## 展示广告时显示白屏

展示广告时出现白屏可能原因为展示的广告样式与UI展示页面不匹配，横幅广告使用[AutoAdComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-autoadcomponent)组件展示；原生广告、贴片广告使用[AdComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-adcomponent)组件展示；激励广告、插屏广告调用[showAd](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-advertising#advertisingshowad)接口展示。

建议排查步骤：

1. 获取请求广告时返回的广告数据并记录。
2. 打印展示广告时入参的广告数据，对比两者是否一致。
3. 检查请求的广告类型与使用的展示组件是否匹配。

## 鲸鸿动能媒体服务平台打开受限

受制于您所在国家/地区的外汇管制、税务处理等因素，您所在的国家/地区尚未对个人开发者开放鲸鸿动能流量变现服务，您需要实名认证成为华为开发者联盟的企业开发者，包括获得应用开发者合法授权的企业。
