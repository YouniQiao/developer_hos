---
displayed_sidebar: appDevSidebar
title: "自定义界面扫码如何连续扫码（customScan.rescan）"
original_url: /docs/dev/app-dev/media/scan-kit-guide/scan-faq/scan-faq-10
format: md
upstream_id: dev/app-dev/media/scan-kit-guide/scan-faq/scan-faq-10
last_sync: 2026-06-07
sync_hash: f61f4e47
---
**问题现象**

自定义界面扫码扫到码值后，如何连续扫码？

**解决措施**

customScan.[rescan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scan-customscan-api#customscanrescan)可以重新触发一次扫码，必须在customScan.[start](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scan-customscan-api#customscanstart-1)(viewControl, callback)方法Callback接口回调中有效，Promise方式无效。

示例：

```
import { AsyncCallback, BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { customScan, scanBarcode } from '@kit.ScanKit';

@Entry
@Component
struct Index {
  private callback: AsyncCallback<Array<scanBarcode.ScanResult>> =
    (err: BusinessError, data: Array<scanBarcode.ScanResult>) => {
      if (err) {
        hilog.error(0x0001, '[Scan Sample]',
          `Failed to get ScanResult by callback. Code: ${err.code}, message: ${err.message}`);
        return;
      }
      hilog.info(0x0001, '[Scan Sample]',
        `Succeeded in getting ScanResult by callback, result is ${JSON.stringify(data)}`);
      try {
        // 重新触发扫码：不需要重启相机并重新触发一次扫码，可以在start接口的Callback异步回调中，调用rescan接口。
        customScan.rescan();
      } catch (err) {
        hilog.error(0x0001, '[Scan Sample]', `Failed to rescan. Code: ${err.code}, message: ${err.message}`);
      }
    };

  build() {
    // 定义组件的UI结构
    // ...
  }
}
```
