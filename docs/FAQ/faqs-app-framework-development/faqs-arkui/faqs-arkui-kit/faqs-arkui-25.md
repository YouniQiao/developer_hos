---
format: md
title: "如何实现分组列表的吸顶/吸底效果"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-25
---

可通过[List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)组件的sticky属性配合ListItemGroup组件来实现。通过给List组件设置sticky属性为StickyStyle.Header/StickyStyle.Footer。可参考如下代码：

```
// xxx.ets
@Entry
@Component
struct ListItemGroupExample {
  private timeTable: TimeTable[] = [
    {
      title: 'Monday',
      projects: ['language', 'mathematics', 'English']
    },
    {
      title: 'Tuesday',
      projects: ['physics', 'chemistry', 'biology']
    },
    {
      title: 'Wednesday',
      projects: ['history', 'geography', 'politics']
    },
    {
      title: 'Thursday',
      projects: ['the fine arts', 'music', 'sport']
    }
  ]

  @Builder
  itemHead(text: string) {
    Text(text)
      .fontSize(20)
      .backgroundColor(0xAABBCC)
      .width("100%")
      .padding(10)
  }

  @Builder
  itemFoot(num: number) {
    Text('common' + num + "period")
      .fontSize(16)
      .backgroundColor(0xAABBCC)
      .width("100%")
      .padding(5)
  }

  build() {
    Column() {
      List({ space: 20 }) {
        ForEach(this.timeTable, (item: TimeTable) => {
          ListItemGroup({ header: this.itemHead(item.title), footer: this.itemFoot(item.projects.length) }) {
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
          .divider({ strokeWidth: 1, color: Color.Blue }) // The boundary line between each row
        })
      }
      .width('90%')
      .sticky(StickyStyle.Header | StickyStyle.Footer)
      .scrollBar(BarState.Off)
    }
    .width('100%')
    .height('100%')
    .backgroundColor(0xDCDCDC)
    .padding({ top: 5 })
  }
}

interface TimeTable {
  title: string;
  projects: string[];
}
```

效果如图所示：

![](./img/5d85728c.gif)
