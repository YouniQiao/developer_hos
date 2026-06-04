---
title: "web拦截如何处理文件"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkweb-66
---

**问题描述**

当拦截到图片请求时，可以通过response.setResponseData()方法返回本地沙盒内的图片文件。由于setResponseData方法仅支持string | number和Resource参数，因此需要将沙盒内的图片文件转换为Resource对象。

**解决措施**

当前[setResponseData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-webresourceresponse#setresponsedata9)方法已支持ArrayBuffer参数类型，可以支持图片、字体、音频、视频类型。
