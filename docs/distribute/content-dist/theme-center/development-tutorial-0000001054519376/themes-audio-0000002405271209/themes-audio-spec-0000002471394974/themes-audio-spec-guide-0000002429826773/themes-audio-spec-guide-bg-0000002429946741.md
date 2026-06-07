---
title: "弹窗背景、产品主题"
displayed_sidebar: contentDistSidebar
original_url: /docs/distribute/content-dist/theme-center/development-tutorial-0000001054519376/themes-audio-0000002405271209/themes-audio-spec-0000002471394974/themes-audio-spec-guide-0000002429826773/themes-audio-spec-guide-bg-0000002429946741
format: md
---


# 弹窗背景、产品主题

<strong>表1</strong>

| 参数 | 类型 | 注释 |
| --- | --- | --- |
| imageResource | 字符串 | 弹窗静态图片背景的文件名。  图片格式：PNG  图片尺寸：1440×1792 px。可显示区域不小于背景的最大高度的1/4，即448 px  文件大小：不超过4MB |
| video | 对象 | 视频对象 |
| video.resource | 字符串 | 弹窗自定义视频的文件名。  视频格式：MP4  视频尺寸：1440×1792 px。可显示区域不小于背景的最大高度的1/4，即448px  文件大小：不超过4MB  视频时长：7s  视频是透明时，与imageResource同时生效。  说明：  不同设备弹出弹窗的响应时间不同，建议弹窗自定义视频的内容控制在4s内，结束同时定格到7s，以免出现动画还未播放完弹窗收起。 |
| video.isVideoTop | 布尔值 | 视频是否在顶层，取值范围：false，true。  false：不在顶层。  true：在顶层。 |
| video.isTransparent | 布尔值 | 是否是透明视频，取值范围：false，true，默认为false。  false: 不是透明视频， 此时imageResource不生效。  true：是透明视频，与imageResource同时生效。 |