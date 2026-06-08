---
title: "如何在TaskPool和Worker获取上下文Context"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-threading-model/faqs-arkts-122
format: md
upstream_id: FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-threading-model/faqs-arkts-122
last_sync: 2026-06-07
sync_hash: 2100b6fb
---
Worker线程和TaskPool线程中无法直接获取到组件级的Context 。可以通过主线程参数传递应用级Context，通过[getHostContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#gethostcontext12)接口获取Context上下文。

```
import { hilog } from '@kit.PerformanceAnalysisKit';
import { taskpool } from '@kit.ArkTS';

// Support for ordinary functions and passing of reference parameters as input.
@Concurrent
function printArgs(args: string, uiContext: Context | undefined): string {
  hilog.info(0x0000, 'printArgs', `func: ${args}`);
  hilog.info(0x0000, 'printArgs',
    `Obtain the bundle name of the application: ${uiContext?.applicationInfo.name.toString()}`);
  return args;
}

async function taskpoolExecute(uiContext: Context | undefined): Promise<void> {
  try {
    let task: taskpool.Task = new taskpool.Task(printArgs, 'create task, then execute', uiContext!);
    hilog.info(0x0000, 'taskpoolExecute', 'taskpool.execute(task) result: ' + await taskpool.execute(task));
    hilog.info(0x0000, 'taskpoolExecute',
      'taskpool.execute(function) result: ' + await taskpool.execute(printArgs, 'execute task by func', uiContext!));
  } catch (error) {
    hilog.info(0x0000, 'taskpoolExecute', `taskpool: error code: ${error.code}, info: ${error.message}`);
  }
}

@Entry
@Component
struct TaskPoolGetContext {
  @State message: string = 'Hello World';
  // Obtain the context.
  uiContext = this.getUIContext().getHostContext();

  build() {
    Column() {
      Text(this.message)
        .fontSize(50)
        .fontWeight(FontWeight.Bold)
        .onClick(() => {
          taskpoolExecute(this.uiContext);
        })
    }
    .width('100%')
    .height('100%')
  }
}
```
