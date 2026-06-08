---
format: md
title: "如何设置分组列表的圆角和间距"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-28
upstream_id: FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-28
last_sync: 2026-06-07
sync_hash: 3f500daf
---
通过[ListItemGroup](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-listitemgroup)中的ListItemGroupStyle设置分组列表的圆角，List的[space](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list#接口)设置间距。可参考如下代码：

```
// xxx.ets
@Entry
@Component
struct ListItemGroupExample {
  private timeTable: TimeTable[] = [
    { projects: ['language'] },
    { projects: ['mathematics', 'English'] },
    { projects: ['physics', 'chemistry', 'biology'] },
    { projects: ['the fine arts', 'music', 'sport'] }
  ]

  build() {
    Column() {
      List({ space: 20 }) { // Set the spacing of the grouping list
        ForEach(this.timeTable, (item: TimeTable) => {
          ListItemGroup({ style: ListItemGroupStyle.CARD }) { // Set the rounded corners of the grouping list
            ForEach(item.projects, (project: string) => {
              ListItem() {
                Text(project)
                  .width("100%")
                  .height(100)
                  .fontSize(20)
                  .textAlign(TextAlign.Center)
                  .backgroundColor(0xFFFFFF)
              }
            }, (item: string) => item)
          }
        })
      }
      .width('90%')
      .sticky(StickyStyle.Header | StickyStyle.Footer)
      .scrollBar(BarState.Off)
    }
    .width('100%')
    .height('100%')
    .backgroundColor(0xDCDCDC)
    .padding({ top: 5, bottom: 5 })
  }
}

interface TimeTable {
  projects: string[];
}
```
