---
format: md
title: "使用request.uploadFile上传文件后，没有回调可以获取到服务器返回的message信息，不能明确知道文件是否上传成功"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-core-file-kit/faqs-local-file-manager-24
---


使用request.uploadFile上传文件时，on('complete')回调在成功后触发。如果需要获取服务端的响应信息并处理判断逻辑，还可以使用on('headerReceive')回调。

**参考链接**

[on('complete' | 'fail')](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-request#oncomplete--fail9)

[on('headerReceive')](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-request#onheaderreceive7)
