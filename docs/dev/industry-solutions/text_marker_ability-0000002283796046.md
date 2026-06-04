---
title: "文本标记高亮显示"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/text_marker_ability-0000002283796046
---

## 场景介绍

本示例基于[Text](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-text)组件和[Span](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-span)组件实现了对文本进行亮色标注和消除标注的功能，并通过[distributedKVStore](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-distributedkvstore#distributedkvstorecreatekvmanager)实现了标注的数据持久化，方便用户在新闻、小说、期刊和论文等文章中通过高亮标记记录重要信息。

## 效果预览

![](./img/7ad0fc87.gif "点击放大")

## 实现思路

1. 通过markList记录标注的信息。
2. 在markHighlight函数中遍历markList进行文本的标注和清除，并通过[distributedKVStore](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-distributedkvstore#distributedkvstorecreatekvmanager)持久化数据。

```
markHighlight(highlight: boolean) {
  if (this.selectionStart !== -1 && this.selectionEnd !== -1) {
    let leftMarks: HighlightMark[] = []; // 区域左侧的文本样式数据
    let rightMarks: HighlightMark[] = []; // 区域右侧的文本样式数据
    // 当前需要更改样式的区域
    let currentSelection: HighlightMark = {
      start: this.selectionStart,
      end: this.selectionEnd,
      color: highlight ? this.color : Color.Transparent
    };

    this.markList.forEach((mark) => {
      // 如果既有样式区间开头在当前选中区域开头之前
      if (mark.start < currentSelection.start) {
        // 如果既有样式区间结尾在当前选中区域开头之前，即两个区间无交集
        if (mark.end < currentSelection.start) {
          leftMarks.push({
            start: mark.start,
            end: mark.end,
            color: mark.color
          });
        } else {
          // 两个区间有交集，合并入当前选中区域
          currentSelection.start = mark.start;
        }
      }
      // 既有样式区间在当前选中区域末尾之后
      if (mark.end > currentSelection.end) {
        // 如果既有样式区间开头在当前选中区域开头之后，即两个区间无交集
        if (mark.start > currentSelection.end) {
          rightMarks.push({
            start: mark.start,
            end: mark.end,
            color: mark.color
          });
        } else {
          // 两个区间有交集，合并入当前选中区域
          currentSelection.end = mark.end;
        }
      }
    });
    // 合并当前与左右文本样式数据
    this.markList = leftMarks.concat(currentSelection, rightMarks);
  }
}
```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                       // 主模块，主要包含页面内容
│  ├──datastore
│  │  ├──DataModel.ets
│  │  └──DataStoreManager.ets
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  └──pages
│     └──TextPage.ets                       // 主页面
└──entry/src/main/resources                 // 应用资源目录
```

## 参考文档

[Text](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-text)

[Span](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-span)

[@ohos.data.distributedKVStore（分布式键值数据库）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-distributedkvstore#distributedkvstorecreatekvmanager)

## 代码下载

[文本标记高亮显示示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260225161642.25919141110557636275270532174875%3A50001231000000%3A2800%3AE2BF3F78CE61E94E635F1ECB7E8989CFF8BCA082CF1FD8415B1236E1598C3C45.zip?needInitFileName=true)
