---
format: md
title: "http网络连接中的通用知识"
original_url: /docs/FAQ/faqs-system-development/faqs-network/faqs-network-kit/faqs-network-6
upstream_id: FAQ/faqs-system-development/faqs-network/faqs-network-kit/faqs-network-6
last_sync: 2026-06-07
sync_hash: 600b3530
---
http请求需要申请ohos.permission.INTERNET权限，其错误码参考文档：[错误码合集](https://curl.se/libcurl/c/libcurl-errors.html)。

常用的请求方式为GET、POST，请求成功时，返回的业务数据在data.result中，cookie信息则在data.cookies中，更改字符集方法为：在请求头head中添加参数为

```
'Content-Type': "application/json; charset=UTF-8"
```

其请求网页时，如果返回的数据为超长文本内容，console.log无法正确输出。

**参考链接**

[@ohos.net.http (数据请求)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-http)
