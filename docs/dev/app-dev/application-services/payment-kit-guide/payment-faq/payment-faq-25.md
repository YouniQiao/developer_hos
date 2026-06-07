---
displayed_sidebar: appDevSidebar
title: "收银台支付报错“应用信息校验不通过，请联系商家处理”？"
original_url: /docs/dev/app-dev/application-services/payment-kit-guide/payment-faq/payment-faq-25
format: md
---


1. 检查网络是否正常。
2. 检查是否[配置应用属性](/docs/dev/app-dev/application-services/payment-kit-guide/payment-preparations/payment-config-app-identity-info#配置应用属性)，确认appId配置是否有调整。
3. 本地调试的签名证书配置是否为手动签名并且是从[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)下载的，参见[应用/服务手动签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing#section297715173233)。证书下载后，可打开调试Profile（.p7b）文件，搜索“app-identifier”字段，如果对应的值和预下单请求或orderStr中传递的appId不一致，则证书生成错误，需重新生成证书及配置。
4. 检查是否配置添加了公钥指纹，参见[添加公钥指纹](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-dev-overview#条件必选添加公钥指纹)。
5. 检查一下orderStr中merc\_no、app\_id、auth\_id等参数是否正确，merc\_no和auth\_id是否匹配。
6. 服务商模式接入，切换到商户应用/元服务拉起收银台时，需要把app\_id改成商户相应的appId，并在[平台类商户/服务商预下单](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/payment-agent-prepay)接口通过subAppId字段同步传递。
7. 使用“hdc hilog > 日志路径”抓取运行日志，参考[错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/payment-error-code)及日志来分析具体的报错异常。
