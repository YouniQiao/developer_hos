---
title: "TaskPool线程内存如何共享"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkts-58
format: md
---


TaskPool 底层采用 Actor 模型，线程间隔离，不共享内存。可以通过传输 SharedArrayBuffer 对象实现内存共享。

需要注意，SharedArrayBuffer对象存储的数据在同时被修改时，必须通过原子操作确保同步，即下一个操作开始前，上一个操作必须已完成。

参考代码如下：

```
import { taskpool } from '@kit.ArkTS';

@Concurrent
function producer(ArrayBuffer: Int32Array): void {
  let i32a = ArrayBuffer;
  console.info("Producer: received sab");
  setInterval(() => {
    let length = i32a.length;
    for (let i = 1; i < length; i++) {
      i32a[i] = Math.random() * length;
    }
    Atomics.notify(i32a, 0, 1); // notify customer
  }, 2000);
}

@Concurrent
function consumer(ArrayBuffer: Int32Array): void {
  let i32a = ArrayBuffer;
  console.info("Customer: received sab");
  while (true) {
    Atomics.wait(i32a, 0, 0);
    let length = i32a.length;
    for (let i = length - 1; i > 0; i--) {
      console.info("arraybuffer " + i + " value is " + i32a[i]);
      i32a[i] = i;
    }
  }
}

function ArrayBufferShared(ArrayBuffer: Int32Array): void {
  let group: taskpool.TaskGroup = new taskpool.TaskGroup();
  group.addTask(consumer, ArrayBuffer);
  group.addTask(producer, ArrayBuffer);
  taskpool.execute(group, taskpool.Priority.HIGH).then((res: Object) => {
    // Result array summary processing
  })
}

@Component
export struct TestArrayBufferSharedView {
  build() {
    Row() {
      Column() {
        Text('Click')
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
          .onClick(() => {
            let sab = new SharedArrayBuffer(32);
            let i32a = new Int32Array(sab);
            ArrayBufferShared(i32a);
          })
      }
      .width('100%')
    }
    .height('100%')
  }
}
```

**参考链接**

[@ohos.taskpool（启动任务池）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-taskpool)

[多线程并发概述](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/multi-thread-concurrency-overview)
