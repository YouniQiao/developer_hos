---
title: "概述"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-cert-overview-0000002283343885
---

证书是由AppGallery Connect颁发的数字证书，用于验证应用的身份和签名。通过证书，验证应用身份，可以确保应用由合法开发者发布；对应用签名，可以确保应用的完整性和来源的可靠性。证书格式为.cer，包含公钥、证书指纹（即证书的摘要信息）等信息。

根据业务与场景需求，您可以使用不同类型的证书。

| 证书类型 | 适用业务与场景 |
| --- | --- |
| [调试证书](https://developer.huawei.com/consumer/cn/doc/app/agc-help-debug-cert-0000002283256797) | 用于应用/元服务调试场景。在调试阶段，使用手动签名时，需要配置调试证书。 |
| [发布证书](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-cert-0000002283336729) | 用于应用/元服务发布场景。在发布阶段，需要使用发布证书手动签名后，才能编译构建正式发布包。 |
| [In-house发布证书](https://developer.huawei.com/consumer/cn/doc/app/agc-help-inhouse-cert-0000002248337770) | 用于In-house应用发布场景。发布In-house应用时，需要使用In-house发布证书手动签名后，才能编译构建正式发布包。 |
| [企业应用发布证书](https://developer.huawei.com/consumer/cn/doc/app/agc-help-enterprise-cert-0000002248177978) | 用于企业应用发布场景。发布企业应用时，需要使用企业应用发布证书手动签名后，才能编译构建正式发布包。 |
| [二进制证书](https://developer.huawei.com/consumer/cn/doc/app/agc-help-binary-cert-0000002408063605) | 用于二进制程序签名。二进制程序需使用二进制证书签名，才能在鸿蒙PC上正常运行。 |
