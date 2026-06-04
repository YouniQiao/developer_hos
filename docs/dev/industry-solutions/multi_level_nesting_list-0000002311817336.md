---
title: "多层级嵌套企业通讯录"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/multi_level_nesting_list-0000002311817336
---

## 场景介绍

多层级嵌套企业通讯录是综合办公类应用中的高频使用场景之一，如用户在发送通知、邮件时，从企业通讯录中选择部门批量发送。

本示例基于递归自定义组件和组件[状态管理](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-state-management-overview)实现多层级嵌套的企业通讯录模型。

## 效果预览

![](./img/9363c8f1.gif "点击放大")

## 实现思路

通过[@Observed装饰器和@ObjectLink装饰器](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-observed-and-objectlink)监听数据状态变化，通过自定义组件和[@Builder装饰器](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-builder)递归，实现多层级嵌套。

```
@Observed
class Node {
  // ...
}

@Component
export struct NodeItem {
  @ObjectLink item: Node;
  // ...
  build() {
    Column() {
      // ...
      if (this.item.children.length > 0 && this.isExpand) {
        this.expandChildItem();
      }
    }
  }

  @Builder
  expandChildItem() {
    List({ scroller: this.scroller }) {
      ForEach(this.item.children, (subItem: Node, index: number) => {
        ListItem() {
          NodeItem({
            item: subItem,
            // ...
          });
        };
      }, (subItem: Node) => subItem.id + subItem.name);
    };
  }
}
```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                 // 代码区
│  ├──components
│  │  ├──NodeItem.ets                 // 自定义节点组件
│  │  └──SearchBox.ets                // 自定义搜索框
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──pages
│  │  └──MultiLevelNestingList.ets    // 部门联系人主页面
│  └──utils
│     ├──Logger.ets                   // 日志系统封装
│     ├──MockData.ets                 // 模拟数据
│     └──Node.ets                     // 节点类型定义
└──entry/src/main/resources           // 应用资源目录
```

## 参考文档

[状态管理概述](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-state-management-overview)

[@Builder装饰器：自定义构建函数](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-builder)

[@Observed装饰器和@ObjectLink装饰器：嵌套类对象属性变化](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-observed-and-objectlink)

## 代码下载

[多层级嵌套企业通讯录示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260205164302.43746422422878410374482701490433%3A50001231000000%3A2800%3AA3CDADBE30B51FE891D8BE7C13ED1F7C3327982B797B7B681279172C813B5420.zip?needInitFileName=true)
