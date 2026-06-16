---
title: "发布元服务"
original_url: https://developer.huawei.com/consumer/cn/doc/atomic-guides/atomic-service-debug-release
---

发布元服务的基本流程如下：

1. 了解[元服务审核指南](https://developer.huawei.com/consumer/cn/doc/distribution/app/50129)的要求，并完成发布前自检。
2. [打包发布版本](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-publish-app)。
3. （可选）在正式发布元服务前，您可以发布一个[邀请测试](https://developer.huawei.com/consumer/cn/doc/app/agc-help-invite-test-0000002270829393)版本，邀请部分用户提前体验新版本，并收集用户的反馈，以便提前发现问题进行改进，从而保证全网版本的质量，提升用户体验。
4. 完成[元服务核准（备案）](https://developer.huawei.com/consumer/cn/doc/atomic-guides/atomic-service-filing)。
5. [发布元服务](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-atomic-0000002327731065)。

![](./img/5393da12.png)

* 在发布元服务时，可以设置分发的软件包是否加密。由于元服务包体积较小，选择加密后，启动时需进行解密操作，对启动耗时影响较大。为了保证元服务快速启动，如果没有对安全性有特殊要求，不推荐加密元服务包。
* 元服务包大小要求：压缩后单包不超过2MB，总包不超过10MB。因此在发布前，开发者需要优化包大小。调试debug包不限定包大小。
* 构建元服务时会将包进行压缩，请以最终打包后或上传时的元服务包大小校验结果为准。
* 打包发布版本时将会校验包体积是否符合上架要求，需要保证HAP/HSP（含其依赖包）压缩后大小不超过2MB。
