---
title: "ArkTS是否支持调用js文件中的方法"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-kit/faqs-arkts-146
format: md
upstream_id: FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-kit/faqs-arkts-146
last_sync: 2026-06-07
sync_hash: d19db59a
---
**问题描述**

ArkTS是否支持调用js文件中的方法，如果支持，能否提供一下ArkTS与js交互的代码样例?

**解决措施**

ets文件调用js文件和正常ts/ets模块一样，import然后调用就行。

```
import {jsFunc} from './JsLib';
@Entry
@Component
struct Index {

  build() {
    Column({ space: 20 }) {
      Text("Import Js Demo")
      Button("Call Js")
        .onClick(() => {
          jsFunc(); // Call jsFunc from js file
        })
    }
    .width("100%")
    .height("100%")
    .padding(10)
  }
}
```

JsLib.js文件中的demo如下：

```
export function jsFunc(){
    console.info("this is a js function");
}
```
