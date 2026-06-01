---
title: "预览视频"
displayed_sidebar: contentDistSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/content/watch-face-preview-video-0000001207403536
---

# 预览视频

表盘市场支持播放表盘预览视频，以让您的表盘作品被更好地展示，提高表盘销售。

请按下列规范准备表盘的预览视频文件。

## 预览视频分辨率



import MergeTable from '@site/src/components/MergeTable';

<MergeTable
  headers={['手表类型', '表盘分辨率', '预览视频分辨率']}
  rows={
    [{ text: '智能手表', rowspan: 5, colspan: 1 }, '466*466', '960px*960px'],
    [null, '390*390', '960px*960px'],
    [null, '454*454', '960px*960px'],
    [null, '280*456', '588px*960px'],
    [null, '336*480', '672px*960px'],
    [{ text: '运动手环', rowspan: 3, colspan: 1 }, '194*368', '508px*960px'],
    [null, '120*240', '480px*960px'],
    [null, '80*160', '480px*960px'],
    ['通话手环', '188*460', '392px*960px']
  }
/>


## 预览视频规格

* 视频格式为MP4，编解码制式要求为H.264，无音轨。
* 在保证清晰度的前提下，视频大小建议在5MB以内，时长建议在5秒以内。
* 为保证预览效果，预览视频的首帧效果请与表盘的cover图一致。
* 请提供能循环播放的视频，确保首尾衔接部分播放流畅，不会出现画面跳动或者闪烁。
* 该文件无需打包在表盘文件包内。通过主题联盟上传表盘作品时，同时上传该预览视频即可。
* 表盘预览视频不能为手持拍摄的视频，请用设计软件制作，或[使用Theme Studio进行录制](#section138974534422)。
* 表盘市场展示时会自动给预览视频加上手表外框。设计预览视频时，请勿设计手表的外框。功能效果请参考以下视频：

  [](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/publicContent/011/111/111/0000000000011111111.20250620110628.16036908237940333091607240412603:20260601223621:2800:25F77652638002EE04C72ADD42AE7022280C10459E01D072767C34D66F60AF1E.mp4)

## 预览视频录制

支持在Theme Studio中录制表盘预览视频。

![](./img/511fe44e5a65.png "点击放大")