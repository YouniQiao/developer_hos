---
title: "投票统计功能与进度条动效"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/vote_result_display-0000002274416885
---

## 场景介绍

投票统计功能与进度条动效是社交通讯类应用中高频使用场景之一，如进行人气之星选举投票。

本示例使用[Radio](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-radio)组件与[Progress](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-progress)组件实现了投票对象的选择与投票前后的进度条增长效果。

## 效果预览

![](./img/b1f9fe6a.webp "点击放大")

## 实现思路

1. 使用[Radio](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-radio)组件，通过设置group属性为相同群组，实现最多单选一人的效果。

   ```
   Radio({
     value: `Radio${candidateIndex}`,
     group: 'radioGroup',
     indicatorType: RadioIndicatorType.CUSTOM,
     indicatorBuilder: () => {
       // 自定义单选框样式
       this.indicatorBuilder();
     }
   })
     .checked(this.specificCandidateList[candidateIndex].isCheck)
     .onChange((isChecked: boolean) => {
       this.specificCandidateList[candidateIndex].isCheck = isChecked;
     })
     .onClick(() => {
       this.selectedCandidateIndex = candidateIndex;
       this.specificCandidateList.forEach((item, index) => {
         item.isCheck = index === candidateIndex;
       });
       this.total++;
     })
   ```
2. 使用[Progress](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-progress)进度条组件显示当前候选人获票情况并实现新增获票后进度条增长效果。

   ```
   Progress({
     value: this.specificCandidateList[candidateIndex].value,
     total: candidate.total,
     type: ProgressType.Linear
   })
     .style({ strokeWidth: 6, enableScanEffect: false })
   ```
3. 点击投票按钮后进行投票数据计算，并通过改变状态变量isVoting的值，控制投票按钮的显示或隐藏。

   ```
   // 用于表示当前是否处于投票中
   @State isVoting: boolean = true;
   // 投票按钮
   Button($r('app.string.voteString'))
     .onClick(() => {
       if (this.selectedCandidateIndex === -1) {
         // 未选择投票对象
         this.getUIContext().getPromptAction().showToast({
           message: '请先选择投票对象',
           duration: 1000
         });
         return;
       } else {
         // 已选择投票对象
         this.isVoting = false;
         modifyById(this.selectedCandidateIndex, this.specificCandidateList);
         this.dialogControllerList.open();
            this.getUIContext().getPromptAction().showToast({
           message: '投票成功',
           duration: 1000
         });
       }
     })
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets
│  ├──entryability
│  │  └──EntryAbility.ets               // 程序入口，沉浸式设置
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──model
│  │  ├──DateConversion.ets             // 时间处理
│  │  └──ICandidateInfo.ets             // 票数接口
│  └──pages
│     └──VoteDemo.ets                   // 主页面展示
└──entry/src/main/resources             // 资源文件目录
```

## 参考文档

[Radio](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-radio)

[Progress](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-progress)

## 代码下载

[投票统计功能与进度条动效示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260225101004.29260276775893959086867708248529%3A50001231000000%3A2800%3A368096A4E8ED8690F4F9EE9C10D53907F3C4B312EABA1B76C98FE0DC34F8E808.zip?needInitFileName=true)
