---
title: "申请企业应用发布Profile"
original_url: /docs/distribute/agc/agc-help-profile-0000002270709473/agc-help-enterprise-profile-0000002248181282
format: md
upstream_id: distribute/agc/agc-help-profile-0000002270709473/agc-help-enterprise-profile-0000002248181282
last_sync: 2026-06-07
sync_hash: 70c1dc65
---
![](../img/agc-help-enterprise-profile-0000002248181282_0.png)

申请ACL权限的入口已调整至项目下的“ACL权限”页签，创建Profile时仅支持添加已获取的ACL权限。如需使用ACL权限，请先参考[申请ACL权限](/docs/distribute/agc/agc-help-acl-0000002427651937/agc-help-apply-acl-0000002394212138)获取ACL权限，再创建Profile。

在发布企业应用时，您需要使用企业应用发布证书和企业应用发布Profile手动签名后，才能编译构建正式发布包。请参考本文档申请并下载企业应用发布Profile。

![](../img/agc-help-enterprise-profile-0000002248181282_1.png)

一个应用最多可申请100个Profile文件。

#### 前提条件

* 已[创建HarmonyOS应用](/docs/distribute/agc/agc-help-app-0000002235710234/agc-help-create-app-0000002247955506)。
* 已[申请企业应用发布证书](/docs/distribute/agc/agc-help-cert-0000002270829389/agc-help-enterprise-cert-0000002248177978)。
* （如需使用ACL权限）已[申请并获取ACL权限](/docs/distribute/agc/agc-help-acl-0000002427651937/agc-help-apply-acl-0000002394212138)。
* 当前账号角色已[获取“访问发布类Profile”权限](/docs/distribute/agc/agc-help-developid-0000002235870038/agc-help-manageaccount-0000002306610129#ZH-CN_TOPIC_0000002306610129__li626645853313)。

#### 操作步骤

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，选择“证书、APP ID和Profile”。
2. 在左侧导航栏选择“证书、APP ID和Profile > Profile”，进入“Profile”页面，点击右上角“添加”。

   ![](../img/agc-help-enterprise-profile-0000002248181282_2.png)
3. 在“添加Profile”页面，填写应用名称、Profile名称等必填信息。

   ![](../img/agc-help-enterprise-profile-0000002248181282_3.png)

   | 参数 | 说明 |
   | --- | --- |
   | 应用名称 | 选择需要申请企业应用发布Profile的应用名称。 |
   | 包名 | 选择应用名称后自动填充。 |
   | Profile名称 | 不超过100个字符。 |
   | 类型 | 选择“企业应用发布”。 |
   | 选择证书 | 点击“选择”，选择企业应用发布证书。 |
4. （可选）如果您之前为应用/元服务申请并获取了ACL权限，还需将权限添加至Profile内，才能真正使用权限。若不涉及使用ACL权限，可忽略此步骤。

   选择应用名称后，“添加Profile”页面下方将显示“申请权限”栏。选中“受限ACL权限（HarmonyOS API9及以上）”选项，应用/元服务获取的所有ACL权限都将被添加至Profile内。

   ![](../img/agc-help-enterprise-profile-0000002248181282_4.png)

   点击“查看”，可在弹出的“选择受限ACL权限”窗口查看当前应用/元服务已获取的ACL权限。

   ![](../img/agc-help-enterprise-profile-0000002248181282_5.png)

   若应用/元服务尚未获取任何ACL权限、或者您想增加更多ACL权限，可点击界面下方的“去申请”，前往“ACL权限”页面申请获取，具体操作请参见[申请ACL权限](/docs/distribute/agc/agc-help-acl-0000002427651937/agc-help-apply-acl-0000002394212138#section156171230179)。获取ACL权限后，再参考本文档添加最新权限到Profile内。

   ![](../img/agc-help-enterprise-profile-0000002248181282_6.png "点击放大")
5. 点击右上角“添加”，企业应用发布Profile申请成功，“Profile”页面展示Profile名称、类型等信息。点击“下载”，将生成的Profile保存至本地，供后续发布签名使用。

   ![](../img/agc-help-enterprise-profile-0000002248181282_7.png)

   Profile申请成功即为“生效”状态。若Profile状态变为“失效”或“已吊销”，表示当前Profile已不可用，您需要重新申请Profile。

   ![](../img/agc-help-enterprise-profile-0000002248181282_8.png)
