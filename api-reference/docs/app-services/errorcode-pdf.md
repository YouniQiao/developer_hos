---
title: "ArkTS API 错误码"
upstream_id: "harmonyos-references/errorcode-pdf"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:53:48.083661"
---

# ArkTS API 错误码

![](./img/note_3.0-zh-cn.png) 以下仅介绍本模块特有错误码，通用错误码请参考[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

#### 1011301001 数组大小不匹配

错误信息

The sizes of pageIndices and matrices arrays do not match.

错误描述

pageIndices和matrices两个数组的长度不一致。

可能原因

pageIndices和matrices数组长度不一致。

处理步骤

确保[pageIndices](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pdf-arkts-pdfservice#getpixelmapwithpages)和[matrices](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pdf-arkts-pdfservice#getpixelmapwithpages)数组长度一致。

#### 1011301002 页码值超出范围

错误信息

The page index value in pageIndices is out of valid range.

错误描述

pageIndices中的页码值不在合理范围。

可能原因

1. 页码值小于0。
2. 页码值大于等于PDF总页码数。
3. pageIndices的总页码数超过16。

处理步骤

确保pageIndices中的页码值大于等于0且小于总页数，总页码数不超过16。

#### 1011301003 尺寸超出最大值

错误信息

bitmapWidth × bitmapHeight exceeds the maximum pixel limit of 250 million.

错误描述

bitmapWidth × bitmapHeight大于最大像素值（2.5亿）。

可能原因

bitmapWidth × bitmapHeight的值超过2.5亿。

处理步骤

确保bitmapWidth × bitmapHeight小于2.5亿。

#### 1011301004 创建bitmap失败

错误信息

Failed to create a bitmap.

错误描述

创建bitmap失败。

可能原因

系统资源不足。

处理步骤

1. 减少渲染页数，将多页批量渲染拆分为单页或少量页面依次渲染。
2. 关闭不用的PDF文档实例、清理图片缓存。
3. 尝试减小bitmapWidth或bitmapHeight的值，减少占用内存。

#### 1011301005 bitmap渲染失败

错误信息

Failed to render the bitmap.

错误描述

bitmap渲染失败。

可能原因

PDF文档不完整。

处理步骤

1. 使用PDF阅读器打开文件，确认文件能否正常显示。
2. 对比原文件和传输/复制后的文件大小，确保一致。

#### 1011301006 PDF文档未加载

错误信息

The PDF document is not loaded.

错误描述

系统无法访问指定的PDF文件。

可能原因

文档尚未通过初始化流程加载或加载过程中断。

处理步骤

调用[loadDocument](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pdf-arkts-pdfservice#loaddocument)，重新触发加载过程。
