---
format: md
title: "如何获取应用签名证书的hash值"
original_url: /docs/FAQ/faqs-system-development/faqs-security/faqs-crypto-architecture-kit/faqs-crypto-architecture-2
upstream_id: FAQ/faqs-system-development/faqs-security/faqs-crypto-architecture-kit/faqs-crypto-architecture-2
last_sync: 2026-06-07
sync_hash: dd2b1f6b
---
* “应用指纹”signatureInfo.fingerprint是应用签名证书（.cer文件）的SHA-256哈希值，当前支持获取本应用的指纹。示例代码如下：

  ```
  import { bundleManager } from '@kit.AbilityKit';
  import { hilog } from '@kit.PerformanceAnalysisKit';
  import { BusinessError } from '@kit.BasicServicesKit';

  let bundleFlags = bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_SIGNATURE_INFO;
  try {
    bundleManager.getBundleInfoForSelf(bundleFlags).then((data) => {
      hilog.info(0x0000, 'testTag', 'getBundleInfoForSelf successfully. Data: %{public}s', JSON.stringify(data));
      //In the data, you can obtain the signtureInfo, which is the signature certificate information of the application
    }).catch((err: BusinessError) => {
      hilog.error(0x0000, 'testTag', 'getBundleInfoForSelf failed. Cause: %{public}s', err.message);
    });
  } catch (err) {
    let message = (err as BusinessError).message;
    hilog.error(0x0000, 'testTag', 'getBundleInfoForSelf failed: %{public}s', message);
  }
  ```

* 对于hash值，可使用加解密框架的hash算法，目前支持SHA1、SHA224、SHA256、SHA384、SHA512、MD5。示例代码如下：

  ```
  import { common } from '@kit.AbilityKit';
  import { BusinessError } from '@kit.BasicServicesKit';
  import { hash } from '@kit.CoreFileKit';

  let context = AppStorage.get("context") as common.UIAbilityContext;
  let pathDir = context.filesDir;

  let filePath = pathDir + "/test.txt";
  hash.hash(filePath, "sha256").then((str: string) => {
    console.info("calculate file hash succeed:" + str);
  }).catch((err: BusinessError) => {
    console.error("calculate file hash failed with error message: " + err.message + ", error code: " + err.code);
  });
  ```

**参考链接**

[SignatureInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bundlemanager-bundleinfo#signatureinfo)

[@ohos.file.hash (文件哈希处理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-hash)
