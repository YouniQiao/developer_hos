---
title: "如何获取指定bundleFlags的Ability信息"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-ability/faqs-ability-kit/faqs-ability-72
format: md
upstream_id: FAQ/faqs-app-framework-development/faqs-ability/faqs-ability-kit/faqs-ability-72
last_sync: 2026-06-07
sync_hash: 58ea9540
upstream_hash: dc8f7b0f31b7
---

bundleManager.getBundleInfoForSelf :getBundleInfoForSelf(bundleFlags: number): Promise\<BundleInfo\>;

根据给定的bundleFlags，异步获取当前应用的BundleInfo，返回结果使用Promise形式。参考示例代码如下：

```
// Get appInfo with metadataArray information
import { bundleManager } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

let bundleFlags = bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_APPLICATION | bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_METADATA;
try {
  bundleManager.getBundleInfoForSelf(bundleFlags).then((data) => {
    hilog.info(0x0000, 'testTag', 'getBundleInfoForSelf successfully. Data: %{public}s', JSON.stringify(data));
  }).catch((err: BusinessError) => {
    hilog.error(0x0000, 'testTag', 'getBundleInfoForSelf failed. Cause: %{public}s', err.message);
  });
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'getBundleInfoForSelf failed: %{public}s', message);
}
```

**参考链接**

[bundleManager.getBundleInfoForSelf](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bundlemanager#bundlemanagergetbundleinfoforself)
