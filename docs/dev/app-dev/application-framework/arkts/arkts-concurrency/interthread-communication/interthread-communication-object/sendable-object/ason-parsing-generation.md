---
title: "ASON解析与生成"
original_url: /docs/dev/app-dev/application-framework/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/ason-parsing-generation
format: md
upstream_id: dev/app-dev/application-framework/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/ason-parsing-generation
last_sync: 2026-06-07
sync_hash: 45fb5928
---
[ASON](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-arkts-utils-ason)工具与JS提供的JSON工具类似，JSON用于进行JS对象的序列化（stringify）、反序列化（parse）。ASON则提供了[Sendable对象](/docs/dev/app-dev/application-framework/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable)的序列化、反序列化能力。使用ASON.stringify方法可将对象转换为字符串，使用ASON.parse方法可将字符串转换为Sendable对象，从而实现对象在并发任务间的高性能引用传递。

ASON.stringify方法还支持将Map和Set对象转换为字符串，可转换的Map和Set类型包括：Map、Set、[collections.Map](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-arkts-collections-map)、[collections.Set](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-arkts-collections-set)、[HashMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-hashmap#hashmap)、[HashSet](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-hashset#hashset)。

![](./img/b0311ebc.png)

ASON.parse默认生成的对象为Sendable对象，布局不可变，不支持增删属性。如果返回的对象需要支持增删属性，可以指定返回类型为[collections.Map](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-arkts-collections-map)对象。

## 使用示例

使用ASON提供的接口，对[Sendable对象](/docs/dev/app-dev/application-framework/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable)进行序列化、反序列化。

```
import { ArkTSUtils, collections } from '@kit.ArkTS';

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
          console.info(ArkTSUtils.ASON.parse('{}'));
          console.info(ArkTSUtils.ASON.stringify(new collections.Array(1, 2, 3)));

          let options2: ArkTSUtils.ASON.ParseOptions = {
            bigIntMode: ArkTSUtils.ASON.BigIntMode.PARSE_AS_BIGINT,
            parseReturnType: ArkTSUtils.ASON.ParseReturnType.MAP,
          }
          let jsonText = '{"largeNumber":112233445566778899}';
          let map = ArkTSUtils.ASON.parse(jsonText, undefined, options2);
          // 执行结果为：{"largeNumber":112233445566778899}
          console.info(ArkTSUtils.ASON.stringify(map));
          this.message = 'success';
        })
    }
    .height('100%')
    .width('100%')
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTsConcurrent/ConcurrentThreadCommunication/InterThreadCommunicationObjects/SendableObject/SendableObjectRelated/entry/src/main/ets/managers/AsonParsingGeneration.ets#L16-L53" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：AsonParsingGeneration.ets</a></div>
