---
title: "如何使用AOP接口实现重复插桩或替换"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-kit/faqs-arkts-72
format: md
upstream_id: FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-kit/faqs-arkts-72
last_sync: 2026-06-07
sync_hash: 5c207b7d
---
AOP提供的接口支持方法插桩或替换。

采用addBefore（方法调用前插桩）作为参考例子，重复插桩时，后插入的代码段先执行。

```
import { util } from '@kit.ArkTS';

class Test {
  static data: string = "initData";

  static printData(): void {
    console.log("execute original printData");
  }
}

@Entry
@Component
struct Index {
  @State message: string = 'Hello World';

  build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
          .onClick(() => {
            Test.printData();
            util.Aspect.addBefore(Test, "printData", true, (classObj: Test) => {
              console.log("execute before 1");
            });
            Test.printData();
            util.Aspect.addBefore(Test, "printData", true, (classObj: Test) => {
              console.log("execute before 2");
            });
            util.Aspect.addBefore(Test, "printData", true, (classObj: Test) => {
              console.log("execute before 3");
            });
            Test.printData();
          })
      }
      .width('100%')
    }
    .height('100%')
  }
}
```
