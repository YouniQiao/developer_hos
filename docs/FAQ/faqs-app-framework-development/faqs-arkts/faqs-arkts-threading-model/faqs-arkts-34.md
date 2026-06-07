---
title: "在多线程并发场景中，如何实现安全访问同一块共享内存"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-threading-model/faqs-arkts-34
format: md
---


可以使用SharedArrayBuffer对象实现。SharedArrayBuffer对象存储的数据在同时被修改时，必须通过Atomics原子操作确保其同步性，即下一个操作必须在上一个操作完成后才能开始。代码示例：

```
// index.ets
import { worker } from '@kit.ArkTS';
let sab = new SharedArrayBuffer(32);
// int32 buffer view for sab
let i32a = new Int32Array(sab);
i32a[0] = 0;
let producer = new worker.ThreadWorker("entry/ets/workers/worker_producer.ets")
producer.postMessage(sab);
let consumer = new worker.ThreadWorker("entry/ets/workers/worker_consumer.ets")
consumer.postMessage(sab);
```

```
// worker_producer.ets
import { MessageEvents, worker } from '@kit.ArkTS';

const workerPort = worker.workerPort;
workerPort.onmessage = (e: MessageEvents): void => {
  let sab = e.data as SharedArrayBuffer;
  // view sab buffer in int32 array
  let i32a = new Int32Array(sab);
  console.info("Producer: received sab");
  // Wake up consumers every 2 seconds
  setInterval(() => {
    let length = i32a.length;
    for (let i = 1; i < length; i++) {
      i32a[i] = Math.random() * length;
    }
    Atomics.notify(i32a, 0, 1); // 通知 consumer
  }, 2000);
}
```

```
// worker_consumer.ets
import { MessageEvents, worker } from '@kit.ArkTS';

const workerPort = worker.workerPort;
workerPort.onmessage = (e: MessageEvents) => {
  let sab = e.data as SharedArrayBuffer;
  let i32a = new Int32Array(sab);
  console.info("Consumer: received sab");
  while (true) {
    Atomics.wait(i32a, 0, 0); // This place will be blocked until it wakes up
    let length = i32a.length;
    for (let i = length - 1; i > 0; i--) {
      console.info("arraybuffer " + i + " value is " + i32a[i]);
      i32a[i] = i;
    }
  }
}
```
