---
title: "如何查询应用包的名称、供应商、版本号、版本文本、安装时间、更新时间等信息"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-52
---

首先，通过 bundleManager.getBundleInfoForSelf() 接口获取应用包的名称、供应商、版本号、版本文本、安装时间和更新时间。具体可参考示例代码：

```
import { bundleManager } from '@kit.AbilityKit';

// Apply to obtain BundleInfo and applicationInfo
let bundleFlags = bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_APPLICATION;

try {
  bundleManager.getBundleInfoForSelf(bundleFlags, (err, data) => {
    // Get the bundle name of the application itself
    const bundleName = data.name;
    // Get the version number of the application（versionCode）
    const versionCode = data.versionCode;
    // Get the version name of the application（versionName）
    const versionName = data.versionName;

    if (err) {
      console.error(`getBundleInfoForSelf failed: ${err.message}`);
    } else {
      console.info(`get bundleName successfully: ${bundleName}`);
      console.info(`get versionCode successfully: ${versionCode}`);
      console.info(`get versionName successfully: ${versionName}`);
      console.info(`getBundleInfoForSelf successfully: ${JSON.stringify(data)}`);
    }
  });
} catch (err) {
  console.error(`getBundleInfoForSelf failed: ${JSON.stringify(err)}`);
}
```

**参考链接**

[bundleManager.getBundleInfoForSelf](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bundlemanager#bundlemanagergetbundleinfoforself-1)
