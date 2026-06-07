---
format: md
title: "@ohos.data.distributedKVStore接口中的deleteKVStore，第一个参数appId需要传递什么值"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-46
---


appId是调用方应用的包名。通过调用[bundleManager.getBundleInfoForSelf()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bundlemanager#bundlemanagergetbundleinfoforself)获取BundleInfo，然后通过BundleInfo对象的signatureInfo属性获取appId。
