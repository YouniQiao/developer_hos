---
title: "如何将JSON对象转换成HashMap"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-kit/faqs-arkts-89
format: md
---


可以参考如下示例代码：

```
import { HashMap } from '@kit.ArkTS';

let str: string = '{\"common_params\": {' +
  '\"city_id\": 1,' +
  '\"nav_id_list\": \"\",' +
  '\"show_hook_card\": 2,' +
  '\"use_one_stop_structure\": 1,' +
  '\"version_tag\": \"homepageonestop\"' +
  '}' +
  '}';

let jsonObj: Object = JSON.parse(str);
let commObj = (jsonObj as Record<string, Object>);
let commRecord = (commObj['common_params'] as Record<string, Object>);
let keyStr = Object.keys(commRecord);

for (let index: number = 0; index < keyStr.length; index++) {
  commRecord[keyStr[index].toString()].toString();
}

let hashMapData: HashMap<string, Object> = new HashMap();
hashMapData.set('common_params', commRecord);

@Entry
@Component
struct Index {
  build() {
    Row() {
      Column() {
        Button('JSON to HashMap')
          .onClick(() => {
            // common_params: {"city_id":1,"nav_id_list":"","show_hook_card":2,"use_one_stop_structure":1,"version_tag":"homepageonestop"}
            console.log('common_params:', JSON.stringify(hashMapData.get('common_params')));
          })
      }
      .width('100%')
    }
    .height('100%')
  }
}
```
