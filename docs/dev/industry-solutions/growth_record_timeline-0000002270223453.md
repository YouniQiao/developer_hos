---
title: "宝宝成长记录时间轴"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/growth_record_timeline-0000002270223453
---

## 场景介绍

时间轴记录是孕育健康类应用广泛使用的场景之一，如用户根据重要时间节点记录宝宝的成长信息。

本示例使用[List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)组件实现宝宝成长记录时间轴，记录形式包括身高体重信息，和图文组合的日记随笔两种，能够清晰直观地展示宝宝成长过程中的时间节点。

## 效果预览

![](./img/8341101e.png "点击放大")

## 实现思路

1. 点击保存按钮后，将新增数据保存并通过路由传递到TimeLine组件。

   ```
   Button($r('app.string.save'))
     .width(CommonConstants.FULL_WIDTH)
     .type(ButtonType.Capsule)
     .onClick(() => {
       const result: popRes = {
         bodyData: new HealthInfo(this.vHeight, this.vWeight),
         date: this.selectedDate
       }
       this.pathStack.pop(result)
     })
   ```
2. TimeLine组件在接收到新数据后，按照记录日期将成长记录数据集按照从大到小排序，并去除重复时间点，确保每个时间点唯一且保留最新数据。

   ```
   // TimeLine.ets
   this.pathStack.pushPathByName('growth', '', (res) => {
     const params = res.result as popRes
     // 日期格式转换
     const curTime = dateUtils.curTimeFormat()
     this.contentList.unshift({
       user: this.userName,
       healthyInfo: params.bodyData,
       date: dateUtils.dateFormat(params.date),
       time: curTime,
     })
     this.dates.push(params.date)
     this.dateList = dateUtils.getData(this.dates, this.contentList)
   })

   // DateUtils.ets
   getData(dates: Date[], content: IRecordList[]) {
     let tempDate: string[] = []
     dates.sort((a: Date, b: Date) => Number(b) - Number(a))
     dates.forEach(item => {
       tempDate.push(this.dateFormat(item))  // 日期格式转换
     })
     tempDate = Array.from(new Set(tempDate))
     let dateList: IDateList[] = []
     tempDate.forEach(dateItem => {
       let tempArr: IRecordList[] = []
       content.forEach(item => {
         if (item.date === dateItem) {
           tempArr.push(item)
         }
       })
       dateList.push({ date: dateItem, content: tempArr })
     })
     return dateList
   }
   ```
3. 时间轴实现形式：使用[ListItemGroup](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-listitemgroup)以日期作为头部组件，按照记录发布日期对数据进行分组，设置时间节点。

   ```
   List() {
     ForEach(this.dateList, (item: IDateList) => {
       // ListItemGroup头部组件根据传入日期设置时间轴节点
       ListItemGroup({ header: this.timeLineHead(item.date) }) {
         ForEach(item.content, (childItem: ContentList) => {
           ListItem() {
             // 渲染数据内容
           }
           .border({ width: { left: 1 } })
         })
       }
     })
   }
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                   // 代码区
│  ├──components
│  │  ├──BindSheetComponent.ets         // 日期选择弹窗组件
│  │  └──ImageViewerComponent.ets       // 图片预览组件
│  ├──constants
│  │  └──CommonConstants.ets            // 公共常量
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──model
│  │  ├──DataInfoModel.ets              // 数据模型
│  │  └──ImageModel.ets                 // 图片信息模型
│  ├──pages
│  │  ├──Diary.ets                      // 日记记录
│  │  ├──GrowthRecord.ets               // 成长情况记录
│  │  └──TimeLine.ets                   // 时间轴主页
│  └──utils
│     ├──DateUtils.ets                  // 日期工具
│     └──ImgUtil.ets                    // 图片工具
└──entry/src/main/resources             // 应用资源目录
```

## 参考文档

[List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)

[ListItemGroup](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-listitemgroup)

## 代码下载

[宝宝成长记录时间轴示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260310115822.13379353031619645353013250267429%3A20260604135007%3A2800%3A94A57A8B4C131E52F7D5884FB747818747CE27027846A6EF9705208D96B0F8E7.zip?needInitFileName=true)
