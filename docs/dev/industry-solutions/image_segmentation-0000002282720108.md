---
title: "图片抠图"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/image_segmentation-0000002282720108
---

## 场景介绍

图片抠图是拍摄美化类应用的典型场景之一。

本示例基于[subjectSegmentation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/core-vision-subjectsegmentation-api)实现图片抠图，并将抠出的图片保存至图库。

## 效果预览

![](./img/5c452268.gif "点击放大")

## 实现思路

1. 配置通用主体分割的配置项SegmentationConfig，配置项包括：最大分割主体个数、是否输出各主体信息、是否输出分割后的前景图。
2. 调用[subjectSegmentation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/core-vision-subjectsegmentation-api)的[subjectSegmentation.doSegmentation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/core-vision-subjectsegmentation-api#section3410243584)接口，实现主体分割。

```
static async process(pixelMap: image.PixelMap, maxSubjects: number): Promise<SegmentationResult> {
  try {
    // 配置通用主体分割的配置项SegmentationConfig，包括最大分割主体个数、是否输出每个主体的分割信息，以及是否输出分割后的前景图
    const CONFIG: subjectSegmentation.SegmentationConfig = {
      maxCount: maxSubjects,
      enableSubjectDetails: true,
      enableSubjectForegroundImage: true
    };
    // 调用subjectSegmentation的subjectSegmentation.doSegmentation接口，实现主体分割
    const RESULT = await subjectSegmentation.doSegmentation({ pixelMap }, CONFIG);
    return {
      success: true,
      analysis: ImageSegmentation.formatAnalysis(RESULT, maxSubjects),
      foregroundImage: RESULT.fullSubject?.foregroundImage
    };
  } catch (err) {
    const ERR = err as BusinessError;
    return { success: false, error: ERR.message };
  }
}
```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                        // 代码区
│  ├──common
│  │  └──Constants.ets                       // 常量文件
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackAbility.ets
│  ├──pages
│  │  └──MainPage.ets                        // 首页
│  └──utils
│     ├──ImagePickerUtils.ets                // 图片选择工具类
│     ├──ImageSegmentation.ets               // 抠图服务模块
│     └──SaveImage.ets                       // 图片保存模块
└──entry/src/main/resources                  // 应用资源目录
```

## 参考文档

[subjectSegmentation（主体分割）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/core-vision-subjectsegmentation-api)

## 代码下载

[图片抠图示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260205170807.02911145817372008537116943274819%3A50001231000000%3A2800%3A516D56FDB5A33F6560391A4517CEC6E6533579416AC1E90BA5A0638D7D7A755E.zip?needInitFileName=true)
