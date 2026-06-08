---
title: "如何获取当前HAP的BundleName"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-package-structure/faqs-package-structure-26
format: md
upstream_id: FAQ/faqs-app-framework-development/faqs-package-structure/faqs-package-structure-26
last_sync: 2026-06-07
sync_hash: fc82df0e
upstream_hash: 5cf7df076c56
---

使用bundleManager模块的getBundleInfoForSelf接口获取所有信息。

GET\_BUNDLE\_INFO\_DEFAULT：接口默认参数，返回结果的name字段对应BundleName。

GET\_BUNDLE\_INFO\_WITH\_APPLICATION：除基本字段外，还能够获取ApplicationInfo字段，ApplicationInfo的name字段对应BundleName。

下面代码以GET\_BUNDLE\_INFO\_DEFAULT为例：

```
import { bundleManager } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';
let bundleFlags = bundleManager.BundleFlag.GET_BUNDLE_INFO_DEFAULT;
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
