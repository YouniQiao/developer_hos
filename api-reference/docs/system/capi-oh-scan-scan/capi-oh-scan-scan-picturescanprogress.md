---
title: "Scan_PictureScanProgress"
upstream_id: "harmonyos-references/capi-oh-scan-scan-picturescanprogress"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:51:12.905722"
---

# Scan_PictureScanProgress

```
typedef struct {...} Scan_PictureScanProgress
```

#### 概述

表示扫描仪扫描图片的进度

起始版本： 12

相关模块： [OH_Scan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-scan)

所在头文件： [ohscan.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohscan-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| int32_t progress | 图片的扫描进度，从0到100，单位：百分比。 |
| int32_t fd | 扫描仪文件句柄 |
| bool isFinal | 指示该图像是否为最后扫描的图像。true表示该图像是最后扫描的图像，false表示该图像不是最后扫描的图像。 |
