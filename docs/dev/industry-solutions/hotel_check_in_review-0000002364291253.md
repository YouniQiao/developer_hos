---
title: "酒店入住评价"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/hotel_check_in_review-0000002364291253
---

## 场景介绍

酒店入住评价是旅游园区类应用的高频使用场景之一，如用户可查看待点评订单，提交包含图文的星级评价，反馈具体的入住体验。

本示例基于HarmonyOS ArkUI声明式开发范式实现酒店入住评价的界面布局、交互逻辑及状态管理，通过[ForEach](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-rendering-control-foreach)列表渲染、[NavPathStack](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#navpathstack10)路由跳转等能力，构建完整的用户评价流程。

## 效果预览

![](./img/d8fbbc53.gif "点击放大")

## 实现思路

1. 订单分组渲染：将订单数组按预订日期分组，使用双层[ForEach](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-rendering-control-foreach)渲染分组订单。

   ```
   ForEach(this.groupedOrders, (groupedOrder: GroupedOrder) => {
     Column({ space: 12 }) {
       Text('预订日期：' + groupedOrder.date)
         .fontColor('#B3000000')
         .fontSize(14);
       List({ space: 12 }) {
         ForEach(groupedOrder.orders, (hotelOrder: HotelOrder) => {
           ListItem() {
             this.buildOrderCard(hotelOrder);
           };
         });
       }
       .width('auto').height('auto');
     }
     .justifyContent(FlexAlign.Start)
     .alignItems(HorizontalAlign.Start);
   });
   ```
2. 星级评分：使用[@Local](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-local)绑定数据，点击五角星更新评分。

   ```
   List({ space: 4 }) {
     ForEach([1, 2, 3, 4, 5], (selectedScore: number) => {
       ListItem() {
         Text(this.starIcon)
           .fontSize(24)
           .fontColor(selectedScore <= reviewScore.score ? '#FFD700' : '#CCCCCC')
           .onClick(() => {
             reviewScore.score = selectedScore;
           });
       };
     });
   }
   ```
3. 路由跳转与参数传递：通过[NavPathStack](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#navpathstack10)的pushPathByName方法从订单列表页进行路由跳转、传参和回调，在评价页的[NavDestination](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navdestination)中通过onReady方法获取参数。

   ```
   // 路由跳转
   this.pageInfos.pushPathByName('UserReviewPage', order.orderId, () => {
     // 回调处理
   });
   // 参数获取
   NavDestination()
   .onReady((context: NavDestinationContext) => {
     this.pageInfos = context.pathStack;
     this.orderId = context.pathInfo.param as string;
   })
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets              // 代码区
│  ├──entryability
│  │  └──EntryAbility.ets          // 程序入口
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──model
│  │  ├──GroupedOrder.ets          // 分组订单实体类
│  │  └──HotelOrder.ets            // 订单实体类
│  ├──pages
│  │  ├──Index.ets                 // 订单列表页
│  │  └──UserReviewPage.ets        // 订单评价页
│  └──utils
│     └──FileUtil.ets              // 图片读取工具类
└──entry/src/main/resources        // 应用资源目录
```

## 参考文档

[ForEach](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-rendering-control-foreach)

[@Local装饰器：组件内部状态](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-local)

[Navigation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation)

[NavDestination](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navdestination)

## 代码下载

[酒店入住评价示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260205170248.93764863085415844085209030946091%3A50001231000000%3A2800%3A2C7FDE72C6909D398238DC327ECD48BAFD2B0B7F81571C185FB2B87EB4A21C79.zip?needInitFileName=true)
