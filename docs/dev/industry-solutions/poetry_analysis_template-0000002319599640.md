---
title: "古诗文解析模板"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/poetry_analysis_template-0000002319599640
---

## 场景介绍

古诗文解析模板是儿童教育类应用中的典型场景之一，如用户在阅读古诗文时，通常需要查看注释，更好地理解诗句所表达的内容。

本示例基于[bindPopup](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-popup#bindpopup)实现古诗文解析模板，支持为文本关键内容添加下划线，点击带下划线文字，窗口自动弹出并显示解析内容。

## 效果预览

![](./img/632f36db.gif "点击放大")

## 实现思路

1. 采用[bindPopup](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-popup#bindpopup)实现弹框，通过数组的display属性控制弹框显示或隐藏，通过num属性动态控制width宽度。

   ```
   Text(this.author.name)
     .bindPopup(this.title.display, {
       message: this.description,
       popupColor: Color.White,
       mask:false,
       radius:14,
       width:this.title.num > 15 ? 220:this.title.num * 14,
       backgroundBlurStyle:BlurStyle.NONE,
       messageOptions: {
         textColor: Color.Black,
         font: {
           size: '14vp',
         }
       },
       onStateChange: (e) => {
         if (!e.isVisible) {
           this.title.display = false
         }
       },
     })
   ```
2. 利用[Text](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-text)组件绑定的onClick事件和bindPopup的onStateChange参数控制弹框显示或隐藏，通过description属性获取对应解释文本并展示，通过display属性控制显示或隐藏。点击切换不同下划线文本时，首先通过数组遍历将所有display设置为false，然后将当前点击的display设置为true。

   ```
   Text(contentValue.desc)
     .onClick(() => {
       this.description = this.testValue[index].content[idx].Comment
       this.testValue.forEach((item) => {
         item.content.forEach((content) => {
           content.display = false
         })
       })
       this.author.display = false
       this.title.display = false
       this.testValue[index].content[idx].display = true
     })
       // 弹框消失时设为false
       onStateChange: (e) => {
         if (!e.isVisible) {
           this.testValue.forEach((item) => {
             item.content.forEach((content) => {
               content.display = false
             })
           })
         }
       }
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  └──pages
│     ├──Index.ets                    // 主页面
│     └──data.json                    // 解析数据
└──entry/src/main/resources           // 应用资源目录
```

## 参考文档

[Popup控制](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-popup)

[Text](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-text)

## 代码下载

[古诗文解析模板示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260205164652.86252587736657175318445829267144%3A50001231000000%3A2800%3A7787DBC46B5B91104A891EE926F751FBBC9B5EB8B3681A8E42371B33235A3468.zip?needInitFileName=true)
