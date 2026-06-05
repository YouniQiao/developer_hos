---
title: "业务介绍"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-introduction-0000002270974725
format: md
---


**AppGallery Connect API**是一套RESTful API，通过这些API，您可以无需登录**AppGallery Connect**即可定制AppGallery Connect提供的服务，或是实现流程自动化，从而提升工作效率。

AppGallery Connect API提供如下所示的各类API，供您按需调用。

![](../img/agc-help-connect-api-introduction-0000002270974725_0.png)

在发起一个基本的AppGallery Connect API调用前，您需要先获得AppGallery Connect服务端的授权，具体请参见[获取服务端授权](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661)。

| API类别 | 功能说明 |
| --- | --- |
| [Testing API](https://developer.huawei.com/consumer/cn/doc/app/agc-help-test-api-guide-0000002236015562) | 您可以通过Testing API对HarmonyOS应用/元服务进行版本测试。您还可以先邀请部分测试用户进行体验，并收集用户的使用意见。 |
| [Upload Management API](https://developer.huawei.com/consumer/cn/doc/app/agc-help-upload-api-guide-0000002271160549) | 您可以通过Upload Management API完成应用的文件上传，例如APP软件包，以及应用的图标、介绍图片、视频文件等。 |
| [Publishing API](https://developer.huawei.com/consumer/cn/doc/app/agc-help-publish-api-guide-0000002271134665) | 您可以通过Publishing API完成HarmonyOS应用/元服务的发布管理工作，例如上传应用的版权版号等信息、编辑应用的简介等基本信息、更新应用视频等版本信息、提交应用发布或撤销审核等。 |
| [Provisioning API](https://developer.huawei.com/consumer/cn/doc/app/agc-help-provision-api-guide-0000002271000601) | 您可以通过Provisioning API管理证书、Profile和调试设备。 |
| [Domain Management API](https://developer.huawei.com/consumer/cn/doc/app/agc-help-domain-api-guide-0000002236041402) | 您可以通过Domain Management API管理元服务所需的业务域名和服务器域名的配置信息，例如下载、更新和查询域名信息等。 |
| [Reports API](https://developer.huawei.com/consumer/cn/doc/app/agc-help-report-api-guide-0000002271134669) | 您可以通过Reports API查询AppGallery Connect中部分分析数据，例如下载安装、安装失败的报表数据。 |

![](../img/agc-help-connect-api-introduction-0000002270974725_1.png)

AppGallery Connect API文档中会提及对**HarmonyOS应用**和**元服务**提供API能力，因为在AppGallery Connect页面上对于**HarmonyOS应用**和**元服务**都统一归属为**应用**级别。

* 如果对**HarmonyOS应用**和**元服务**都提供的能力，则AppGallery Connect API文档统一称**应用**，不再赘述**HarmonyOS应用**/**元服务**。
* 如果分别针对**HarmonyOS应用**或**元服务**提供的差异化能力，则AppGallery Connect API文档分别体现**HarmonyOS应用**或**元服务**。
