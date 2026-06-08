---
displayed_sidebar: appDevSidebar
title: "使用HDR Vivid特性开发媒体应用"
original_url: /docs/dev/app-dev/media/multimedia-hdr-vivid
format: md
upstream_id: dev/app-dev/media/multimedia-hdr-vivid
last_sync: 2026-06-07
sync_hash: 2b645408
---
[HDR Vivid](https://www.theuwa.com/standard?cate=3)是UWA认证的动态HDR视频标准，在HarmonyOS平台上，开发者能够利用HDR Vivid的特性，开发媒体类应用，为用户呈现高动态范围和广色域的视觉体验。作为新一代高动态范围图像标准，HDR Vivid贯穿内容创作、平台支持和设备显示，为用户带来更宽广的色彩范围、更细腻的层次表现、更显著的明暗对比，以及更智能的动态元数据处理，助力用户领略世界的真实色彩。

## HDR Vivid视频

应用只需调用媒体领域提供的API，即可接入HarmonyOS的HDR Vivid视频采集、转码和解码显示功能，基于HDR Vivid标准，制作出高质量的视频。

| 类别 | 开发指导 | 提供能力的Kit |
| --- | --- | --- |
| 采集 | [HDR Vivid相机录像](/docs/dev/app-dev/media/camera-kit/camera-dev-arkts/camera-hdr-recording) | Camera Kit |
| 编码 | [HDR Vivid视频录制](/docs/dev/app-dev/media/avcodec-kit/audio-video-codec/hdr-vivid-capability/hdr-vivid-video-recorder) | AVCodec Kit |
| 解码 | [HDR Vivid视频播放](/docs/dev/app-dev/media/avcodec-kit/audio-video-codec/hdr-vivid-capability/hdr-vivid-video-player) | AVCodec Kit |
| 转换 | [视频解码支持HDRVivid2SDR](/docs/dev/app-dev/media/avcodec-kit/audio-video-codec/hdr-vivid-capability/hdrvivid2sdr) | AVCodec Kit |
| 转换 | [HDR Vivid视频动态元数据生成](/docs/dev/app-dev/media/media-kit/media-kit-dev-c/videoprocessing-guidelines/generate-video-dynamic-metadata) | Media Kit |
| 转换 | [HDR视频色彩空间转换](/docs/dev/app-dev/media/media-kit/media-kit-dev-c/videoprocessing-guidelines/video-csc) | Media Kit |

## HDR Vivid图片

应用只需调用媒体领域提供的API，即可接入HarmonyOS的HDR Vivid图片采集、转码和解码显示功能，基于HDR Vivid标准，制作出高质量的图片。

| 类别 | 开发指导 | 提供能力的Kit |
| --- | --- | --- |
| 采集 | [HDR Vivid相机拍照](/docs/dev/app-dev/media/camera-kit/camera-dev-arkts/camera-hdr-shooting) | Camera Kit |
| 编码 | [HDR Vivid图片编码](/docs/dev/app-dev/media/image-kit/image-native/image-encoding-c/image-packer-c) | Image Kit |
| 解码 | [HDR Vivid图片解码](/docs/dev/app-dev/media/image-kit/image-native/image-decoding-c/image-source-c) | Image Kit |
| 转换 | [HDR图片动态元数据生成](/docs/dev/app-dev/media/image-kit/image-native/image-editing-c/image-processing/image-dynamic-metadata-generation) | Image Kit |
| 转换 | [HDR图片色彩空间转换](/docs/dev/app-dev/media/image-kit/image-native/image-editing-c/image-processing/image-csc) | Image Kit |
| 转换 | [单层HDR图片转换双层](/docs/dev/app-dev/media/image-kit/image-native/image-editing-c/image-processing/hdr-single-to-dual) | Image Kit |
| 转换 | [双层HDR图片转换单层](/docs/dev/app-dev/media/image-kit/image-native/image-editing-c/image-processing/hdr-dual-to-single) | Image Kit |
