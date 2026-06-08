---
displayed_sidebar: appDevSidebar
title: "修改翻页方式、字体大小及行间距"
original_url: /docs/dev/app-dev/application-services/reader-kit-guide/reader-content/reader-setting/reader-setting-other
format: md
upstream_id: dev/app-dev/application-services/reader-kit-guide/reader-content/reader-setting/reader-setting-other
last_sync: 2026-06-07
sync_hash: e8aa4b33
upstream_hash: d6d35b710dee
---

当应用需要支持修改默认的翻页方式、字体大小、行间距时，开发者可通过[ReaderSetting](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/reader-read-core#readersetting)的flipMode、fontSize、lineHeight属性，实现对翻页方式、字体大小、行间距的实时修改。

## 接口说明

修改翻页方式、字体大小及行间距主要涉及1个接口，具体介绍如下表所示。

| 接口名 | 描述 |
| --- | --- |
| [setPageConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/reader-read-core#setpageconfig)(pageConfig: ReaderSetting): void | 设置或者修改页面排版属性。 |

## 开发准备

在修改翻页方式、字体大小及行间距之前，请先确保已经“[构建阅读器](/docs/dev/app-dev/application-services/reader-kit-guide/reader-content/reader-read-page)”。

## 开发步骤

1. 修改翻页方式。

   ```
   this.readerSetting.flipMode = '1'; // 0代表仿真翻页，1代表横滑翻页
   ```
2. 修改字体大小。

   ```
   this.readerSetting.fontSize = 20;
   ```
3. 修改行间距。

   ```
   this.readerSetting.lineHeight = 2;
   ```
4. 调用ReaderComponentController组件控制器的setPageConfig接口，重新渲染界面。

   ```
   this.readerComponentController.setPageConfig(this.readerSetting);
   ```
