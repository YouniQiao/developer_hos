---
title: "招聘信息及岗位列表展示"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/recruitment_and_job_list_display-0000002456685322
---

## 场景介绍

招聘信息及岗位列表展示是求职招聘类应用中的高频使用场景之一。

本示例基于[Navigation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation)实现页面跳转，基于[List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)实现岗位列表展示。

## 效果预览

![](./img/e621b1f5.gif "点击放大")

## 实现思路

* 通过[Navigation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation)实现页面跳转。

  ```
  Image($r('app.media.small_avatar'))
    .width(50)
    .height(50)
    .onClick(()=>{
      this.pathStack.pushPathByName('PersonalIntroductionPage',null)
    })
  ```
* 通过[List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)实现岗位列表展示。

  ```
  List() {
    ForEach(this.jobArr, (item: JobType, index: number) => {
      ListItem() {
        JobListItem({ data: item })
      }
    })
  }
  ```

## 约束与限制

* 本示例支持API Version 17 Release及以上版本。
* 本示例支持HarmonyOS 5.0.5 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 5.0.5 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                  // 代码区
│  ├──constants
│  │  └──StyleConstants.ets            // 常量
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  └──pages
│     ├──JobListPage.ets               // 岗位列表页
│     ├──MainPage.ets                  // 首页
│     └──PersonalIntroductionPage.ets  // 猎头个人信息页
└──entry/src/main/resources            // 应用资源目录
```

## 参考文档

[Navigation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation)

[List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)

## 代码下载

[招聘信息及岗位列表展示示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260225093453.69090082971733381947471775560865%3A50001231000000%3A2800%3A9262A4C45F1EB5F0CC18D3585859D08F8765BC5AD6BF8AC367DAC99BFF99B3EE.zip?needInitFileName=true)
