---
title: "加载时间及次数统计展示"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/code_instrumentation-0000002291963849
---

## 场景介绍

统计加载时间及次数是各类应用的高频场景之一，如开发者（网站管理员）需要监控应用内各页面加载情况，提升网站性能。

本示例通过AOP代码插桩方法[Aspect](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-util#aspect11)实现对新闻图片加载时间和次数的统计。

## 效果预览

![](./img/1365a18c.webp "点击放大")

![](./img/d83b7b28.png)

方法中的图片地址url需要用户设置。

## 实现思路

1. 执行downloadNetworkImage方法下载图片。
2. 通过[addBefore](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-util#addbefore11)对方法进行执行前插桩，记录调用前时间。
3. 通过[addAfter](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-util#addafter11)对方法进行执行后插桩，记录执行后时间，统计耗时及调用次数。

   ```
   // 执行自定义方法下载图片
   DownloadImage().instanceMethod(this.url);
   // 插桩方法addTimePrinter
   function addTimePrinter(targetClass: Object, methodName: string, isStatic: boolean) {
     // 方法执行前记录时间
     util.Aspect.addBefore(targetClass, methodName, isStatic, () => {
       begin = new Date().getTime();
     });
     // 方法执行后计算耗时，调用次数+1
     util.Aspect.addAfter(targetClass, methodName, isStatic, (instance: Object, ret: number) => {
       count = 1;
       end = new Date().getTime();
       required = end - begin + required;
      });
   }
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 权限说明

获取网络权限：[ohos.permission.INTERNET](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all#ohospermissioninternet)。

## 工程目录

```
├──entry/src/main/ets                         // 代码区
│  ├──common
│  │  └──Constants.ets                        // 常量
│  ├──component
│  │  └──ReUsePage.ets                        // 复用组件
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──model
│  │  ├──CardInfo.ets                         // 娱乐头条
│  │  ├──ListOptionUtils.ets                  // 新闻主页
│  │  └──Tab.ets                              // 统计页
│  ├──pages
│  │  ├──FunPage.ets                          // 娱乐头条
│  │  ├──MainPage.ets                         // 新闻主页
│  │  ├──SciPage.ets                          // 科技前沿
│  │  ├──SportsPage.ets                       // 体育资讯
│  │  ├──StatisticPage.ets                    // 国际大事
│  │  └──SummaryPage.ets                      // 统计页
│  └──utils
│     ├──DownloadUtils.ets                    // 图片下载
│     ├──GlobalContext.ets                    // 单例
│     ├──Logger.ets                           // 日志工具
│     ├──PhotoUtil.ets                        // 图片工具
│     └──PreferenceUtils.ets                  // 首选项
└──entry/src/main/resources                   // 应用资源目录
```

## 参考文档

[@ohos.util（util工具函数）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-util)

[应用切面编程设计](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-application-aspect-programming-design)

## 代码下载

[加载时间及次数统计展示示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260210100036.41859541153515896868848474247855%3A50001231000000%3A2800%3ABE5F9C464E04FCA453ECD4AAEC6EA19699DFC2EDBBEBA0B36CFF4B0648EB8E74.zip?needInitFileName=true)
