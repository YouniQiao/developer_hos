---
title: "家长权限计算验证弹窗"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/children_demo_caculater-0000002235299782
---

## 场景介绍

家长权限计算验证弹窗是儿童教育类应用中的高频使用场景之一，如需实现登录、防沉迷、进入家长模式等功能。

本示例实现通过计算验证进入设置页面的效果。

## 效果预览

![](./img/12e59abc.gif "点击放大")

## 实现思路

* 算法计算式：通过checkAbs方法获取工具类暴露的计算式字符串和计算结果字串。
* 用户界面：通过行列宽高、排列、背景色等特性构建用户界面，通过getWindowAvoidArea方法获取状态栏导航栏高度来配置内边距以完成全屏页面布局。
* 弹窗验证页面：通过watchInputData方法监控每字符输入后总字串，通过总字符串与计算结果字串内容对比完成验证，通过自定义属性和背景色设置退出按钮背景透明。
* 页面跳转和标签栏：通过[Tabs](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs)容器外层与[Navigation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation)容器内层，包装内容页完成页面跳转和标签栏。

  ```
  // 算法计算式
  checkAbs();
  // 用户界面
  @Builder topBuilder();
  // 弹窗验证页面
  @CustomDialog export struct CustomDialogExample
  // 退出按钮设置背景透明
  new CustomDialogController();
  // 页面跳转和标签栏
  build() {
    Tabs({
      // ...
    }) {
      // ...
      TabContent() {
        Navigation(
          // ...
        ) {
          Column() {
            // ...
          }
        }
      }
    }
  }
  ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├─entry/src/main/ets
│ ├─common
│ │ ├─Constants.ets                   // 常量页
│ │ ├─Objects.ets                     // 对象页
│ │ └─Utils.ets                       // 计算工具页
│ ├─entryability
│ │ └─EntryAbility.ets                // 屏幕窗口沉浸式布局页
│ ├─pages
│ │ ├─Profile.ets                     // 个人页
│ │ └─Setting.ets                     // 设置页
│ └─views
│   └─DialogConfirm.ets               // 弹窗验证页
└──entry/src/main/resources           // 应用资源目录
```

## 参考文档

[Tabs](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs)

[Navigation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation)

## 代码下载

[家长权限计算验证弹窗示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260205164650.88088038134067054141386568723129%3A50001231000000%3A2800%3AA59CFF88D267F932B54E8173DDDA3603A696CACB94F5D44C0E57E72D26EC19A5.zip?needInitFileName=true)
