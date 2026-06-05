---
displayed_sidebar: appDevSidebar
title: "证书链校验时从p12文件构造TrustAnchor对象数组"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/create-trustanchor-from-p12
format: md
---


证书链校验时从p12文件构造TrustAnchor对象数组。

## 开发步骤

1. 导入[证书算法库框架模块](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cert)。
2. 基于现有的p12文件数据，调用[cert.createTrustAnchorsWithKeyStore](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cert#certcreatetrustanchorswithkeystore12)创建[X509TrustAnchor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cert#x509trustanchor11)数组对象，并返回结果。

```
import { cert } from '@kit.DeviceCertificateKit';
import { BusinessError } from '@kit.BasicServicesKit';

function test() {
  // ...
  try {
    cert.createTrustAnchorsWithKeyStore(p12Data, '123456').then((data) => {
      console.info('createTrustAnchorsWithKeyStore result: success, the num of result is :' + data.length);
    }).catch((err: BusinessError) => {
      console.error(`createTrustAnchorsWithKeyStore failed, errCode: ${err.code}, message: ${err.message}`);
    })
  } catch (error) {
    console.error(`createTrustAnchorsWithKeyStore failed, errCode: ${error.code}, message: ${error.message}`);
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/DeviceCertificateKit/CertificateAlgorithmLibrary/entry/src/main/ets/pages/CreateTrustanchorFromP12.ets#L17-L137" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：CreateTrustanchorFromP12.ets</a></div>
