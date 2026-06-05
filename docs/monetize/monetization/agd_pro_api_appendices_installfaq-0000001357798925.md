---
title: "下载安装体验描述"
displayed_sidebar: monetizationSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/monetize/agd_pro_api_appendices_installfaq-0000001357798925
format: md
---



在响应体中，clickDeepLink和downloadLink均可实现有效的计费安装，具体说明如下：

* downloadLink：支持多种安装体验，具体的体验由“installType”请求参数决定，**优先使用**。
* clickDeepLink：仅支持跳转到华为应用市场，全屏详情页的情况下，由用户手动点击安装，**作为默认链接地址使用**。如果downloadLink未传值，则使用clickDeepLink的值。

#### downloadLink安装体验详细描述

如下表所示的情况，均无需媒体做对应的界面适配，只需配置跳转链接为对应的deeplink即可。

![](./img/agd_pro_api_appendices_installfaq-0000001357798925_0.png)

* 媒体侧如果需要使用“installType”请求参数，则请先联系华为研发运营侧，需华为侧配置才能生效。
* 安装体验涉及跳转华为应用市场APP页面，特别关注自动安装场景，请媒体侧充分考虑隐私策略与用户舆情。

| installType取值 | 简要描述 | 跳转离开 | 自动下载安装 | 通知栏进度条 |
| --- | --- | --- | --- | --- |
| 1 | Mini详情页，手动安装。 | ![](./img/agd_pro_api_appendices_installfaq-0000001357798925_1.png) | ![](./img/agd_pro_api_appendices_installfaq-0000001357798925_2.png) | ![](./img/agd_pro_api_appendices_installfaq-0000001357798925_3.png) |
| 6 | 全屏详情页，手动安装（默认）。 | ![](./img/agd_pro_api_appendices_installfaq-0000001357798925_4.png) | ![](./img/agd_pro_api_appendices_installfaq-0000001357798925_5.png) | ![](./img/agd_pro_api_appendices_installfaq-0000001357798925_6.png) |
