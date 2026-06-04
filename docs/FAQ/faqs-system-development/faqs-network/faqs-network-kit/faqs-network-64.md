---
title: "http请求传输大于5M文件报错2300023"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-network-64
---

http请求默认规格最大可传输5M数据文件（自API Version 23开始，该默认规格扩充至50MB），当http请求数据超过5M时，可在[HttpRequestOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-http#httprequestoptions)的maxLimit中进行设置，将最大接收数据扩大到100M。如果超过100M大小，或者不确定数据大小但有可能超过100M时，建议使用[requestInStream](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-http#requestinstream10)接口发起流式请求。参考文档：[发起http流式传输请求](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/http-request#发起http流式传输请求)。
