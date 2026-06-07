---
format: md
title: "如何将Map转换为JSON字符串"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-kit/faqs-arkts-86
---


将Map转换为Record后，再通过JSON.stringify()方法转换为JSON字符串。示例如下：

```
let mapSource = new Map<string, string>();
mapSource.set('name', 'name1');
mapSource.set('width', '100');
mapSource.set('height', '50');

let jsonObject: Record<string, Object> = {};
mapSource.forEach((value, key) => {
  if (key !== undefined && value !== undefined) {
    jsonObject[key] = value;
  }
})
let jsonInfo: string = JSON.stringify(jsonObject);

@Entry
@Component
struct Index {
  build() {
    Column() {
      Button('Map to JSON')
        .onClick(() => {
          console.log('jsonInfo:', jsonInfo); // jsonInfo: {"name":"name1","width":"100","height":"50"}
        })
    }
  }
}
```
