---
title: "集成AGD Pro接口"
displayed_sidebar: monetizationSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/monetize/agd_pro_sdk_quickapp_integrate-sdk-0000001367786785
format: md
---



在您开发App过程中集成AGD Pro接口，实现如下接口集成。

* 集成征求用户意见
* 集成原生广告

  ![](./img/agd_pro_sdk_quickapp_integrate-sdk-0000001367786785_0.png)

  快应用集成原生广告调试如果返回100x错误码，请参考[100x错误码的处理方法](#section125150010294)。
* 集成应用榜单广告
* 集成信息流广告
* 集成互推盒子广告
* 集成互推盒子横划榜单广告

具体集成方法请参见[集成AGD Pro接口](https://developer.huawei.com/consumer/cn/doc/development/quickApp-Guides/quickapp-access-agdpro-kit-0000001413917689#section23432214498)。

![](./img/agd_pro_sdk_quickapp_integrate-sdk-0000001367786785_1.png)

快应用集成模板广告，如果返回200错误码，您可以过滤**logcat**日志**TemplateAdManager**查看更详细的错误码来定位具体问题。

#### 快速集成

为了方便您快速集成AGD Pro服务SDK，提供如下主流场景的快应用示例代码。

![](./img/agd_pro_sdk_quickapp_integrate-sdk-0000001367786785_2.png)

详细说明请参考示例代码中的**README**文件。

| 广告类型 | 名称 | Gitee |
| --- | --- | --- |
| 原生广告 | 快应用示例代码 | [链接](https://gitee.com/appgallery_connect/agdpro-demo/tree/master/quickapp-nativead) |
| 应用榜单 | 快应用示例代码 | [链接](https://gitee.com/appgallery_connect/agdpro-demo/tree/master/quickapp-templatead) |

#### 数据示例

原生广告场景中AGD Pro获取的广告数据示例如下：

![](./img/agd_pro_sdk_quickapp_integrate-sdk-0000001367786785_3.png)

* 仅12.6及以上的快应用加载器版本，支持**source**字段且支持返回应用名。
* 六要素内容，仅13.2及以上版本的快应用加载器才会返回，建议您使用13.2及以上版本的快应用加载器进行调试。

```
{
    "adList": [{
		"videoUrlList": [],
		"videoRatio": [],
		"imgUrlList": [],
		"appVersion": "1.23.7.300",
		"appName": "华为商城",
		"icon": "https://appimg.dbankcdn.com/application/icon144/36f3acc378ee4a14ab17c85aad3a3f48.webp",
		"adId": "promote.202308081507414l27h741478",
		"creativeType": 0,
		"interactionType": 0,
		"appPrivacyUrl": "https://appgallery.huawei.com/open/privacy?packageName=com.vmall.client&mediaPackageName=com.fastapp.demo",
		"title": "",
		"appPermissionUrl": "https://appgallery.huawei.com/open/permission?packageName=com.vmall.client&mediaPackageName=com.fastapp.demo",
		"source": "华为商城",
		"logoUrl": "",
		"appCompany": "华为软件技术有限公司",
		"desc": "上华为商城，享智慧生活",
		"clickBtnTxt": "安装"
    }]
}
```

#### 异常处理

#### 原生广告返回100x错误码处理方法

1. 检查请求广告的包名和签名是否与在架版本一致。
2. 检查设备的OAID是否可以获取传递。
3. 联系华为运营确认广告资源是否配置。
4. 可能因为广告内容没有填充，建议切换不同设备进行请求。
