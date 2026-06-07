---
title: "容器类对象"
original_url: /docs/dev/app-dev/application-framework/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/container-object
format: md
---


容器类对象在跨线程传递时，可通过序列化的机制，确保跨线程间的数据一致，从而实现跨线程数据传递。

支持序列化的容器类对象和支持的初始版本可以参考[容器类对象支持情况](#容器类对象支持情况)。

容器类对象中的成员必须是序列化支持的类型，序列化支持类型可以参考[线程间通信对象概述](/docs/dev/app-dev/application-framework/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/serializable-overview)中的相关对象。

![](./img/326703b4.png)

* 容器类对象跨线程传递时，只能传递数据，自定义方法会丢失。如果需要自定义方法，则需要使用[@Sendable装饰器](/docs/dev/app-dev/application-framework/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable#sendable装饰器)标识为Sendable function后，自定义方法可以跨线程传递。

## 容器类对象支持情况

以下仅针对容器类对象，普通对象（Array、Map、Set等）的支持情况请参考[普通对象](/docs/dev/app-dev/application-framework/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/normal-object)。

| 容器类名称 | 支持版本 |
| --- | --- |
| [TreeSet](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-treeset) | 搭载HarmonyOS 6.1.0及以上版本的设备支持 |
| [ArrayList](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arraylist) | 暂不支持 |
| [List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-list) | 暂不支持 |
| [LinkedList](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-linkedlist) | 暂不支持 |
| [Deque](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-deque) | 暂不支持 |
| [Queue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-queue) | 暂不支持 |
| [Stack](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-stack) | 暂不支持 |
| [Vector](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-vector) | 暂不支持 |
| [HashMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-hashmap) | 暂不支持 |
| [HashSet](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-hashset) | 暂不支持 |
| [TreeMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-treemap) | 暂不支持 |
| [LightWeightMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-lightweightmap) | 暂不支持 |
| [LightWeightSet](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-lightweightset) | 暂不支持 |
| [PlainArray](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-plainarray) | 暂不支持 |

## 使用示例

```
import { taskpool, TreeSet } from '@kit.ArkTS';
import { BusinessError } from '@kit.BasicServicesKit';

@Sendable
function sendableCompareFunc(firstValue: number, secondValue: number): boolean {
    return firstValue > secondValue;
}

@Concurrent
function treeSetTestFunc(treeSet: TreeSet<number>) {
  for (let value of treeSet) {
    console.info('value:', value);
  }
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
        .onClick(() => {
          // 1. 创建TreeSet实例
          let treeSet: TreeSet<number> = new TreeSet<number>(sendableCompareFunc);

          treeSet.add(1);
          treeSet.add(5);
          treeSet.add(3);
          treeSet.add(2);
          // 2. 创建任务task，将treeSet传递给该任务，通过序列化传递给子线程
          let task = new taskpool.Task(treeSetTestFunc, treeSet);
          // 3. 执行任务
          taskpool.execute(task).then(() => {
            console.info('taskpool: execute task success!');
          }).catch((e: BusinessError) => {
            console.error(`taskpool: execute task: Code: ${e.code}, message: ${e.message}`);
          })
          this.message = 'success';
        })
    }
    .height('100%')
    .width('100%')
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTsConcurrent/ConcurrentThreadCommunication/InterThreadCommunicationObjects/CommunicationObjects/entry/src/main/ets/managers/ContainerObject.ets#L16-L70" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：ContainerObject.ets</a></div>
