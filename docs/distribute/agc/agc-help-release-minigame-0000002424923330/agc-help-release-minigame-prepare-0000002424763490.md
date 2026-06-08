---
title: "准备工作"
original_url: /docs/distribute/agc/agc-help-release-minigame-0000002424923330/agc-help-release-minigame-prepare-0000002424763490
format: md
upstream_id: distribute/agc/agc-help-release-minigame-0000002424923330/agc-help-release-minigame-prepare-0000002424763490
last_sync: 2026-06-07
sync_hash: b71824f5
---
提前了解小游戏的上架规则，并提前准备小游戏素材，有助于快速通过小游戏上架审核。

#### 了解上架规则

仔细阅读[元服务审核指南](/docs/distribute/app-dist/app-market/x50000/x50129/x50129-overview)、[元服务审核FAQ](/docs/distribute/app-dist/app-market/x50000/x50150)、[游戏审核FAQ](/docs/distribute/app-dist/app-market/x50000/x50118)，了解小游戏上架至应用市场需要遵循的规则和要求。

#### 申请ACL权限和开放能力

| 要求项 | 说明 |
| --- | --- |
| JSVM权限 | 上架小游戏必须申请[JSVM权限](/docs/distribute/agc/agc-help-release-minigame-0000002424923330/agc-help-release-minigame-acl-and-ability-0000002425276004#section13637635175211)，并在小游戏代码内配置相关权限信息。 |
| 存储空间管理服务 | 上架小游戏必须申请[存储空间管理服务](/docs/distribute/agc/agc-help-release-minigame-0000002424923330/agc-help-release-minigame-acl-and-ability-0000002425276004#section17374114165216)，并在小游戏代码内配置相关权限信息。 |

#### 准备游戏软件包

| 要求项 | 说明 |
| --- | --- |
| HAP包签名 | 在小游戏开发者工具编译发布包时，要求使用[申请发布证书](/docs/distribute/agc/agc-help-cert-0000002270829389/agc-help-release-cert-0000002283336729)和[申请发布Profile](/docs/distribute/agc/agc-help-profile-0000002270709473/agc-help-release-profile-0000002248341090)手动签名。 |
| HAP包公钥指纹 | 公钥指纹是应用签名证书（.cer文件）的摘要信息，用于校验游戏的真实性。请配置发布证书指纹，详情请参见[配置公钥指纹](/docs/distribute/agc/agc-help-cert-0000002270829389/agc-help-cert-fingerprint-0000002278002933)。 |
| HAP包大小 | 总包体大小不超过25MB，主包体大小不超过5MB。 |
| 游戏名称 | 要求“AppScope > app.json5”文件内配置的小游戏名称与软件包安装后的小游戏名称保持一致。 |
| 华为服务 | 小游戏必须集成小游戏登录服务，小游戏支付等其他服务您可以根据需要选择接入。 |
| 开放能力 | 小游戏必须申请[存储空间管理服务](/docs/distribute/agc/agc-help-release-minigame-0000002424923330/agc-help-release-minigame-acl-and-ability-0000002425276004#section17374114165216)。 |
| ACL权限 | 小游戏必须申请[JSVM权限](/docs/distribute/agc/agc-help-release-minigame-0000002424923330/agc-help-release-minigame-acl-and-ability-0000002425276004#section13637635175211)。 |

#### 准备游戏信息和素材

| 准备项 | 说明 |
| --- | --- |
| 介绍性素材 | 准备支持语言的小游戏图标、小游戏介绍截图、小游戏介绍视频等游戏素材，具体要求请参见[元服务信息审核规范](https://developer.huawei.com/consumer/cn/doc/app/50129-01)和[素材规范](/docs/distribute/agc/agc-help-appendix-0000002312305161/agc-help-app-visual-asset-spec-0000002277607976#section9301204111816)。 |
| 隐私声明 | * 参考[配置隐私政策（元服务）](/docs/distribute/agc/agc-help-privacy-policy-0000002316794885/agc-help-privacy-policy-atomic-0000002317135133)，生成小游戏的隐私政策。 * 参考[配置用户协议](/docs/distribute/agc/agc-help-privacy-policy-0000002316794885/agc-help-privacy-user-agreement-0000002282265450)，生成小游戏的用户协议。 |
| 资质材料 | 准备游戏版权、版号资质材料，具体要求请参见[游戏版权、版号要求](https://developer.huawei.com/consumer/cn/doc/80301#h1-1584931854487-2)。 |
| 数字商品 | 若有未经审核的数字商品类型，请添加数字商品，具体操作请参见[数字商品](/docs/dev/game-dev/games-center-products-manage-0000002286057092)。 |
| 游戏备案 | 请参考[APP核准（APP备案）指引](https://developer.huawei.com/consumer/cn/doc/App/50130)、[元服务备案](/docs/dev/atomic-dev/atomic-service-filing/atomic-service-filing)和[国产游戏小程序备案准备](/docs/dev/game-dev/quickgame-filing-chinese-preparation-0000001979934858)，提前完成备案，并保存好备案信息。 |
