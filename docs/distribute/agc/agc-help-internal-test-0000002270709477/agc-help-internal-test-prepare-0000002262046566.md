---
title: "准备打包所需配置文件"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-internal-test-prepare-0000002262046566
format: md
---


为保证应用的完整性和来源的真实性，在打包时，您需要为应用进行签名。签名时，需要配置如下相关信息：

* 密钥和证书请求文件：**密钥**格式为.p12，包含非对称加密中使用的公钥和私钥，存储在密钥库文件中，公钥和私钥对用于数字签名和验证；**证书请求文件**格式为.csr，全称为Certificate Signing Request，包含密钥对中的公钥和公共名称、组织名称、组织单位等信息，用于申请发布证书。详细生成过程请参见[生成密钥和证书请求文件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing#section462703710326)。

  ![](../img/agc-help-internal-test-prepare-0000002262046566_0.png)

  请务必保存好密钥文件，以及生成过程中设置的别名、密钥库和密钥的密码。
* 发布证书：格式为.cer，证书是由AGC颁发的数字证书，用于验证应用的身份和签名。[申请发布证书](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-cert-0000002283336729)后，请下载到本地保存。

  ![](../img/agc-help-internal-test-prepare-0000002262046566_1.png)

  企业开发者（In-house应用分发）无法申请发布证书，可使用[In-house发布证书](https://developer.huawei.com/consumer/cn/doc/app/agc-help-inhouse-cert-0000002248337770)用于指定设备发布。
* 指定设备发布Profile：格式为.p7b，包含了包名、数字证书信息、申请的权限列表、设备列表等信息。[申请指定设备发布Profile](https://developer.huawei.com/consumer/cn/doc/app/agc-help-internaltest-profile-0000002283260129)后，请下载到本地保存。
