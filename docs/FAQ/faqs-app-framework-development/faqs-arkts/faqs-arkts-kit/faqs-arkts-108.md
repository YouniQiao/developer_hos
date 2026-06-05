---
format: md
title: "如何通过key获取对象值"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkts-108
---

ArkTS中不支持通过索引访问字段，要使用索引的话可以考虑Record<key, value>，参考代码如下：

```
class Student {
  data: Record<string, string> = { 'name': 'aaa', 'age': 'bbb' };
}

@Entry
@Component
struct KeyObject {
  build() {
    Column() {
      Button('click')
        .onClick(() => {
          let student = new Student();
          console.info(`${student.data['name']}`);
        })
    }
    .justifyContent(FlexAlign.Center)
    .alignItems(HorizontalAlign.Center)
    .width('100%')
    .height('100%')
  }
}
```
