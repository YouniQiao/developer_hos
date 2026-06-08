---
title: "ArkTS中Worker线程、TaskPool线程如何与宿主线程通信"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-threading-model/faqs-arkts-36
format: md
upstream_id: FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-threading-model/faqs-arkts-36
last_sync: 2026-06-07
sync_hash: 319a62d1
---
Worker通过PostMessage向父线程发送任务。TaskPool通过sendData向父线程发送消息，触发任务。

PostMessage接口示例如下：

```
import { worker } from '@kit.ArkTS';

const workerInstance = new worker.ThreadWorker("entry/ets/workers/worker.ets");
let buffer = new ArrayBuffer(8);
workerInstance.postMessage(buffer, [buffer]);
```

sendData接口示例如下：

```
import { taskpool } from '@kit.ArkTS';

@Concurrent
function ConcurrentFunc(num: number): number {
  let res: number = num * 10;
  taskpool.Task.sendData(res);
  return num;
}
```

**参考链接**

[postMessage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-worker#postmessage9)，[sendData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-taskpool#senddata11)
