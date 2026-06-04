---
title: "基于Polyline实现比赛晋级图"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/tournament_advancement_chart-0000002381782357
---

## 场景介绍

比赛晋级图是运动健康类应用的典型场景之一。

本示例对比赛信息进行了针对性的数据结构设计，利用[Polyline](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-drawing-components-polyline)及基础ArkUI组件，实现了足球比赛十六强淘汰赛的晋级图绘制，支持渲染已结束的赛事和正在进行中的赛事，也适用于篮球、网球、电竞等赛事晋级图绘制。

## 效果预览

![](./img/67f3c2d3.gif "点击放大")

## 实现思路

1. 加载构造好的比赛数据。完整赛事共分八分之一决赛、四分之一决赛、半决赛和决赛四个大轮次，共计15组29场比赛。由于UI展示是分组展示比赛结果并渲染晋级路线，因此需将已完成的比赛重新按组构造。
   1. 根据队伍index下标和比赛轮次计算出本局比赛在this.matches中的位置。

      ```
      // 计算当前场次比赛在this.matches中的下标位置。ArkTS的除法为浮点除，需要用~~向下取整获得整数除效果
      let matchesIndex =
        ~~((idx - 1) / CommonConstants.POWER_OF_ROUND[round]) + CommonConstants.COUNT_OF_ROUND[round - 1]
      ```
   2. 根据以下逻辑，使用原始比赛数据curSourceData填充this.matches。

      ```
      // 用原始比赛数据填充matches
      let opponents = [curSourceData.opponentA, curSourceData.opponentB]
        for (let j = 0; j < 2; j++) {
          this.matches[matchesIndex].competitors[j].refresh(
            opponents[j].teamName, opponents[j].teamIcon, opponents[j].score,
            opponents[j].additionalScore, opponents[j].teamIndex)
        }
        this.matches[matchesIndex].setScore(opponents[0].score.toString() + '-' + opponents[1].score.toString())
        // 更新加时、点球等附加信息
        if (curSourceData.additionalInfo.length > 0) {
           // ...
        }
        // 如果两队之间比赛已结束，则更新胜者信息。注意决赛只有一场，所以要根据轮次判定
        if (this.matches[matchesIndex].scores.length === 2 || curSourceData.round === 4) {
          // ...
          // 同时更新下一轮晋级赛中的队伍信息
          if (curSourceData.round < 4) {
            // ...
          }
        }
      }
      ```

   **图1** this.matches数组结构示意图
   ![](./img/2cbf92c3.png "点击放大")
2. 通过[Tabs](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs)布局，使用[Row](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-row)、[Column](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-column)、[Polyline](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-drawing-components-polyline)等组件绘制UI界面。由于晋级图中每个对局组的UI结构相同（决赛除外），因此只需将其中一个组的UI抽象出来，做成子组件增加复用。

   ```
   Column() {
     Row() {  // 晋级线
       Polyline()
       Polyline()
     }
     Text(item.additionalInfo)  // 附加信息区（点球、加时等附加信息）
     Row() {
       Column() {  // 队伍A信息
         Image(item.competitors[0].teamIcon) // 队徽
         Text(item.competitors[0].teamName) // 队伍名称
       }
       Column() { // 比分展示
         ForEach(item.scores, (score: string) => {
           Text(score)
         })
       }
       Column() {  // 队伍B信息
         Image(item.competitors[1].teamIcon) // 队徽
         Text(item.competitors[1].teamName) // 队伍名称
       }
     }
   }
   ```

   **图2** 晋级图子组件结构示意图
   ![](./img/521a7286.png "点击放大")

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                 // 代码区
│  ├──constants
│  │  └──CommonConstants.ets          // 常量
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──model
│  │  └──SourceDataModel.ets          // 字体加载的实体类
│  └──pages
│     ├──Index.ets                    // 主页面
│     ├──KnockoutMatchView.ets        // 十六强晋级图页面
│     └──SingleRoundMatchView.ets     // 晋级图的子界面组件
└──entry/src/main/resources           // 应用资源目录
```

## 参考文档

[Tabs](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs)

[Row](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-row)

[Column](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-column)

[Polyline](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-drawing-components-polyline)

## 代码下载

[基于Polyline实现比赛晋级图示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260205164454.48628219487849472923610158287109%3A50001231000000%3A2800%3A84FBEBEF776895A22C92D7E18EA924C0DAD7CFF5BE18FB150C379B6166C35EE1.zip?needInitFileName=true)
