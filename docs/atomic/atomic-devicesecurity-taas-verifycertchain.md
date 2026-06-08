---
title: "验证匿名证书链"
original_url: /docs/dev/atomic-dev/atomic-devicesecurity-taas-verify/atomic-devicesecurity-taas-verifycertchain
format: md
upstream_id: dev/atomic-dev/atomic-devicesecurity-taas-verify/atomic-devicesecurity-taas-verifycertchain
last_sync: 2026-06-07
sync_hash: 8a465577
---
为防止第三方伪造数据，端侧和云侧在对数据进行验签之前，必须先验证匿名证书链的正确性。端侧对匿名证书链的校验处理接口，请参考“[证书链校验器对象的创建和校验](/docs/dev/app-dev/system/system-security/device-certificate-kit/certificate-framework/create-verify-cerchainvalidator-object)”。云侧对匿名证书链的校验处理接口，请参考“[设备真实性证明](/docs/dev/app-dev/system/system-security/huks-kit/huks-local-key-management/device-attestation)”的服务器端开发章节。

初始化证明会话时返回的匿名证书链包含三级证书，验证步骤如下：

1. 使用[Universal Keystore Kit](/docs/dev/app-dev/system/system-security/huks-kit/huks-overview)官网提供的根CA证书对匿名证书链的合法性进行校验。（[根CA证书下载地址](https://pki.consumer.huawei.com/ca/cer/Huawei_CBG_ECC_Device_Attestation_Root_CA.cer)）

   ![](./img/ab514268.png)

   请勿在应用服务器中使用子CA证书对密钥证明证书链进行校验，子CA证书可能会因为有效期结束、证书被吊销等发生变化。
2. 解析三级证书获取应用公钥、AppID、密钥管理部件ID。

   1. 应用公钥直接从密钥证明证书的subjectPublicKeyInfo字段获取。
   2. AppID从扩展字段“1.3.6.1.4.1.2011.2.376.2.1.3.1”获取。
   3. 密钥管理部件ID从扩展字段“1.3.6.1.4.1.2011.2.376.2.2.2.6”获取。
3. 检查三级证书的扩展字段是否符合预期：

   1. 密钥管理部件ID应为“0E01669E9CFF3848A9538568F1A483E3”。
   2. AppID的值应为调用创建证明密钥接口的应用AppID。

   ![](./img/9ecefdcf.png)

   “应用AppID”指的是HarmonyOS应用的ID，包含bundleName和签名证书公钥的哈希值。 获取应用AppID方法请参考“[bundleManager 模块](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bundlemanager#bundlemanagergetbundleinfoforself-1)”。
