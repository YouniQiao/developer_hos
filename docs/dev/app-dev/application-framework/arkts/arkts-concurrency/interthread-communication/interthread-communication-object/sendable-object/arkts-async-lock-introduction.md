---
title: "异步锁"
original_url: /docs/dev/app-dev/application-framework/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-async-lock-introduction
format: md
upstream_id: dev/app-dev/application-framework/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-async-lock-introduction
last_sync: 2026-06-07
sync_hash: 39820b61
upstream_hash: 31548f5c7737
---

为了解决多线程并发实例间的数据竞争问题，ArkTS引入了异步锁能力。异步锁可能会被类对象持有，因此为了更方便地在并发实例间获取同一个异步锁对象，[AsyncLock对象](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-arkts-utils-locks#asynclock)支持跨线程引用传递。

由于ArkTS语言支持异步操作，阻塞锁容易产生死锁问题，因此在ArkTS中仅支持异步锁（非阻塞式锁）。同时，异步锁还可以用于保证单线程内的异步任务时序一致性，防止因异步任务执行顺序不确定而导致的数据竞争问题。

更多异步锁相关接口，请参见[异步锁ArkTSUtils.locks](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-arkts-utils-locks)。

![](./img/db404599.png)

使用异步锁的方法需标记为async，调用时需用await修饰，以确保时序正确。

## 使用示例

为了防止[@Sendable共享对象](/docs/dev/app-dev/application-framework/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable)在不同线程中修改共享变量导致的竞争问题，可以使用异步锁保护数据。示例如下：

```
import { ArkTSUtils, taskpool } from '@kit.ArkTS';

@Sendable
export class A {
  private count_: number = 0;
  lock_: ArkTSUtils.locks.AsyncLock = new ArkTSUtils.locks.AsyncLock();

  public getCount(): Promise<number> {
    // 对需要保护的数据加异步锁
    return this.lock_.lockAsync(() => {
      return this.count_;
    })
  }

  public async increaseCount() {
    // 对需要保护的数据加异步锁
    await this.lock_.lockAsync(() => {
      this.count_++;
    })
  }
}

@Concurrent
async function printCount(a: A) {
  a.increaseCount();
  console.info("InputModule: count is:" + await a.getCount());
}

@Entry
@Component
struct Index {
  @State message: string = 'Hello World';

  build() {
    RelativeContainer() {
      Text(this.message)
        .id('HelloWorld')
        .fontSize(50)
        .fontWeight(FontWeight.Bold)
        .alignRules({
          center: { anchor: '__container__', align: VerticalAlign.Center },
          middle: { anchor: '__container__', align: HorizontalAlign.Center }
        })
        .onClick(async () => {
          // 创建sendable对象a
          let a: A = new A();
          // 将实例a传递给子线程
          await taskpool.execute(printCount, a);
        })
    }
    .height('100%')
    .width('100%')
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTsConcurrent/ConcurrentThreadCommunication/InterThreadCommunicationObjects/SendableObject/SendableObjectRelated/entry/src/main/ets/managers/ArktsAsyncLockIntroduction.ets#L16-L72" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：ArktsAsyncLockIntroduction.ets</a></div>
