---
format: md
title: "Hash.hash是否支持同步接口"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-core-file-kit/faqs-local-file-manager-13
---


**解决措施**

[@ohos.file.hash](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-hash)提供文件哈希处理能力。

其中的[Hash.hash](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-hash#hashhash)方法为异步方法，目前不支持同步方法。若需实现同步逻辑，可将该方法的调用放在回调函数中。
