---
title: "如何通过AOP统计方法执行时间"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkts-99
format: md
---


为了统计执行时间，可以使用addBefore记录开始时间，使用addAfter记录结束时间。

示例如下：

```
import { util } from '@kit.ArkTS';
import { systemDateTime } from '@kit.BasicServicesKit';

class Utils {
  Add(len: number): number {
    let num = 0;
    for (let index = 1; index <= len; index++) {
      num += index;
    }
    return num;
  }
}

let startTime = 0; // Initialization start time
let endTime = 0; // Initialization end time

util.Aspect.addBefore(Utils, 'Add', false, () => {
  startTime = systemDateTime.getTime(true); // Return the start time in nanoseconds
})

util.Aspect.addAfter(Utils, 'Add', false, () => {
  endTime = systemDateTime.getTime(true); // Return the end time in nanoseconds
})

let utilsObj = new Utils();
utilsObj.Add(1000);

@Entry
@Component
struct Index {
  build() {
    Row() {
      Column() {
        Button('get execution time')
          .onClick(() => {
            console.log('startTime:', startTime);
            console.log('endTime:', endTime);
            console.log('endTime - startTime = ', endTime - startTime);
          })
      }
      .width('100%')
    }.height('100%')
  }
}
```
