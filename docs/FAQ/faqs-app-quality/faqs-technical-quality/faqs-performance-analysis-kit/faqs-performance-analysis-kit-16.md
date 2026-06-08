---
title: "当应用发生故障时，如何获取系统日志"
original_url: /docs/FAQ/faqs-app-quality/faqs-technical-quality/faqs-performance-analysis-kit/faqs-performance-analysis-kit-16
format: md
upstream_id: FAQ/faqs-app-quality/faqs-technical-quality/faqs-performance-analysis-kit/faqs-performance-analysis-kit-16
last_sync: 2026-06-07
sync_hash: 25c22049
---
使用faultLogger.query(faultType: FaultType, callback: AsyncCallback\<Array<FaultLogInfo\>)接口获取故障日志。FaultType是枚举类型，可选值如下：

| 名称 | 值 | 说明 |
| --- | --- | --- |
| NO\_SPECIFIC | 0 | 不区分故障类型 |
| CPP\_CRASH | 2 | C++程序故障类型 |
| JS\_CRASH | 3 | JS程序故障类型 |
| APP\_FREEZE | 4 | 应用程序卡死故障类型 |

第二个参数为callback回调函数，用于获取故障信息数组。

示例代码中，FaultType取值为JS\_CRASH，queryFaultLogCallback用于回调并打印相关日志信息。

```
import { FaultLogger } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

function queryFaultLogCallback(error: BusinessError, value: Array<FaultLogger.FaultLogInfo>) {
  if (error) {
    console.info('error is ' + error);
  } else {
    console.info("value length is " + value.length);
    let len: number = value.length;
    for (let i = 0; i < len; i++) {
      console.info("log: " + i);
      console.info("Log pid: " + value[i].pid);
      console.info("Log uid: " + value[i].uid);
      console.info("Log type: " + value[i].type);
      console.info("Log timestamp: " + value[i].timestamp);
      console.info("Log reason: " + value[i].reason);
      console.info("Log module: " + value[i].module);
      console.info("Log summary: " + value[i].summary);
      console.info("Log text: " + value[i].fullLog);
    }
  }
}

try {
  FaultLogger.query(FaultLogger.FaultType.JS_CRASH, queryFaultLogCallback);
} catch (err) {
  console.error(`code: ${(err as BusinessError).code}, message: ${(err as BusinessError).message}`);
}
```

**参考链接**

[@ohos.faultLogger (故障日志获取)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-faultlogger)
