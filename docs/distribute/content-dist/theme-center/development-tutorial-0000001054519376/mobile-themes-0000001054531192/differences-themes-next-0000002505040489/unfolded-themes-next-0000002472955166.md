---
title: "两折叠主题设计指导及规范"
displayed_sidebar: contentDistSidebar
original_url: /docs/distribute/content-dist/theme-center/development-tutorial-0000001054519376/mobile-themes-0000001054531192/differences-themes-next-0000002505040489/unfolded-themes-next-0000002472955166
---


import MergeTable from '@site/src/components/MergeTable';

# 两折叠主题设计指导及规范

两折叠主题就是一套用于改变折叠屏手机界面视觉效果的元素集合，包含熄屏显示、锁屏、桌面、图标、应用（含控制中心、通知中心、播控中心、音量条、文件夹、耳机弹窗、充电动效换肤）、百变卡片。

![](./img/401c20e7a465.png)

两折叠不包括小折叠（如：Pocket 2）、阔折叠（Pura X、Pura X Max）和三折叠（如：Mate XT）

## 1. 快速指引-必做设计项总计

<strong>表1</strong>




<MergeTable
  headers={['设计项', '', '是否必做']}
  rows={
    ['熄屏显示', '/', '必做'],
    ['锁屏', '/', '必做'],
    ['桌面', '/', '必做'],
    ['图标', '/', '必做（93个）'],
    [{ text: '应用', rowspan: 7, colspan: 1 }, '控制中心', '必做'],
    [null, '通知中心', '必做'],
    [null, '播控中心', '必做'],
    [null, '音量条', '必做'],
    [null, '文件夹', '必做'],
    [null, '耳机弹窗', '必做'],
    [null, '充电动效换肤', '必做'],
    ['百变卡片', '/', '选做'],
    [{ text: '预览文件', rowspan: 4, colspan: 1 }, '封面图', '必做'],
    [null, '百变卡片封面图', '仅当含百变卡片时，为必做。'],
    [null, '详情图', '必做'],
    [null, '预览视频', '必做']
  }
/>


制作完主题后，各位创作者们可以根据[主题测试审核规范](/docs/distribute/content-dist/theme-center/content-release-0000001054679366/content-review-specifications-0000001054679960/content-check-pecifications-0000001057301166/harmonyos5-theme-test-0000002318301165)进行自检测试。自检无误后可参考[内容上传指南](https://developer.huawei.com/consumer/cn/doc/content/uploadguide-0000001054359939)将主题包上传至主题联盟。

## 2. 折叠屏与直板机主题规范差异点




<MergeTable
  headers={['设计项', '', '直板机', '折叠屏']}
  rows={
    ['熄屏显示', '/', { text: '规范一致', rowspan: 1, colspan: 2 }, null],
    ['锁屏', '/', '设计1套锁屏样式', '按折叠态，展开态横屏，展开态竖屏设计3套锁屏样式'],
    [{ text: '桌面', rowspan: 3, colspan: 1 }, '静态桌面', { text: '规范一致', rowspan: 1, colspan: 2 }, null],
    [null, '可交互桌面', '设计1套桌面样式', '按折叠态，展开态横屏，展开态竖屏设计3套桌面样式'],
    [null, '视频桌面', '提供1个视频文件，分辨率1080×2340', '按折叠态(分辨率1148×2480)，展开态横屏(分辨率2480×2200)，展开态竖屏(分辨率2200×2480)提供3个视频文件'],
    ['图标', '/', { text: '规范一致', rowspan: 1, colspan: 2 }, null],
    [{ text: '应用', rowspan: 7, colspan: 1 }, '控制中心', { text: '规范一致', rowspan: 1, colspan: 2 }, null],
    [null, '通知中心', { text: '规范一致', rowspan: 1, colspan: 2 }, null],
    [null, '播控中心', { text: '规范一致', rowspan: 1, colspan: 2 }, null],
    [null, '音量条', { text: '规范一致', rowspan: 1, colspan: 2 }, null],
    [null, '文件夹', { text: '规范一致', rowspan: 1, colspan: 2 }, null],
    [null, '耳机弹窗', { text: '规范一致', rowspan: 1, colspan: 2 }, null],
    [null, '充电动效换肤', '设计1套充电动效换肤样式', '按折叠态，展开态横屏，展开态竖屏设计3套充电动效换肤样式'],
    ['百变卡片', '/', { text: '规范一致', rowspan: 1, colspan: 2 }, null],
    [{ text: '预览文件', rowspan: 3, colspan: 1 }, '封面图', '1张，分辨率960 x 1920', '2张， 折叠态：1张，分辨率960 x 1920 展开态：1张，分辨率1680 x 1920'],
    [null, '详情图', '不超过20张，分辨率1440 x 3120', '折叠态：不超过20张，分辨率1440 x 3120 展开态：不超过20张，分辨率2730 x 3120'],
    [null, '预览视频', '1个，分辨率1440 x 3120', '2个 折叠态：1个，分辨率1440 x 3120 展开态：1个，分辨率2730 x 3120']
  }
/>

| 预览视频 | 1个，分辨率1440 x 3120 | 2个  折叠态：1个，分辨率1440 x 3120  展开态：1个，分辨率2730 x 3120 |