---
format: md
title: "OAID、AAID和ODID分别是什么，如何获取设备的唯一标识"
original_url: /docs/FAQ/faqs-system-development/faqs-basic-functions/faqs-basic-services-kit/faq-basics-service-kit-14
upstream_id: FAQ/faqs-system-development/faqs-basic-functions/faqs-basic-services-kit/faq-basics-service-kit-14
last_sync: 2026-06-07
sync_hash: 6204222a
---
OAID是开放匿名设备标识符，非永久性。OAID保护用户隐私，提供个性化广告，支持广告转化分析。OAID具有以下特性：

* OAID是设备级标识符，同一台设备上不同的App获取到的OAID值一样。
* OAID的获取受应用跟踪开关影响。开关开启时，应用可获取有效OAID；开关关闭时，应用获取全0的OAID。
* 同一台设备上首个应用开启应用跟踪开关时，会首次生成OAID。

AAID是应用匿名标识符，标识应用实例，只存在于安装期，长度32位。AAID具有更好的隐私属性。

* 匿名化、无隐私风险：AAID和已有的任何标识符都不关联，并且每个应用只能访问自己的AAID。
* 同一个设备上，同一个开发者的多个应用，AAID取值不同。
* 同一个设备上，不同开发者的应用，AAID取值不同。
* 不同设备上，同一个开发者的应用，AAID取值不同。
* 不同设备上，不同开发者的应用，AAID取值不同

ODID：开发者匿名设备标识符，它主要用于开放给开发者的设备标识，同一设备上运行的同一个开发者的应用，ODID相同。帮助开发者更好地理解用户在不同应用间的行为，从而提供更个性化的服务和推荐。ODID具有以下特性：

* 同一设备上运行的同一个开发者的应用，ODID相同。
* 同一个设备上不同开发者的应用，ODID不同。
* 不同设备上同一个开发者的应用，ODID不同。
* 不同设备上不同开发者的应用，ODID不同。

如果需要获取设备的唯一标识符，可以使用AAID，获取方法请参阅相关链接；在广告业务场景下，建议使用OAID；对于应用分析，开发者可以使用ODID。

**参考链接**

[获取AAID](/docs/dev/app-dev/application-services/push-kit-guide/push-get-aaid)、[开放匿名设备标识服务](/docs/dev/app-dev/application-services/ads-kit-guide/oaid-service)、[设备信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-device-info#常量)
