---
title: "视频铃声设计指导及规范"
displayed_sidebar: contentDistSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/content/video-ringtone-specifications-0000001054469755
---


import MergeTable from '@site/src/components/MergeTable';

# 视频铃声设计指导及规范

## 1. 视频铃声介绍

视频铃声又可以称为带有声音的动态壁纸，可设置成手机的锁屏或者桌面背景。

## 2. 制作流程

步骤一：使用设计相关软件进行制图。

步骤二：根据“[视频铃声测试规范](https://developer.huawei.com/consumer/cn/doc/content/videoringtone-test-0000001057258921#section1616414111391)”自检自查。

步骤三：根据“[视频铃声上传指南](https://developer.huawei.com/consumer/cn/doc/content/livewallpaper-upload-0000001055068451)”上传到开发者联盟主题中心。

## 3. 制图规范

1. 视频格式：MP4（视频文件大小建议在20MB以内，预览文件10MB以内，编解码用H.264）；

2. 时长建议在20秒以内；

3. 建议帧数25-30帧；

4. 为保证预览效果，请提供能循环播放的视频，确保首尾衔接部分流畅，不会出现画面跳动或者闪烁；

5. 请同时上传两种尺寸作品；

6. 视频铃声上传后系统会自动且同时作为有声音的动态壁纸发布和呈现，无需在“动态壁纸（有声音）”再上传。




<MergeTable
  headers={['项目', '上传规格', '格式', '适配']}
  rows={
    [{ text: '视频铃声', rowspan: 2, colspan: 1 }, 'W1080*H1920', 'mp4（必须带有声音）', '除了折叠屏以外的所有机型'],
    [null, 'W1080*H2340', 'mp4（必须带有声音）', '除了折叠屏以外的所有机型']
  }
/>

| W1080\*H2340 | mp4（必须带有声音） | 除了折叠屏以外的所有机型 |