---
format: md
title: "音视频文件的封装协议与编码格式有哪些"
original_url: /docs/FAQ/faqs-media-development/faqs-audio-video/faqs-avcodec-kit/faqs-avcodec-2
upstream_id: FAQ/faqs-media-development/faqs-audio-video/faqs-avcodec-kit/faqs-avcodec-2
last_sync: 2026-06-07
sync_hash: 6d9f3fd2
---
* 音视频文件的封装支持mp4和m4a容器格式。mp4封装视频、音频、字幕和元数据等媒体元素，适用于网上电影、电视剧和用户拍摄的视频等内容。m4a主要存储音频媒体元素。这两种格式在多媒体内容的编辑、存储和分享中发挥重要作用。
* 视频编解码支持H.264（AVC）和H.265（HEVC）的硬件加速编解码。H.264和H.265是视频标准编码技术，H.265的视频压缩率高于H.264。例如，在录制相同视频文件时，H.265生成的MP4文件大小显著减小，更利于节省存储空间。
* [音频编码](/docs/dev/app-dev/media/avcodec-kit/audio-video-codec/audio-encoding)支持AAC，FLAC；[音频解码](/docs/dev/app-dev/media/avcodec-kit/audio-video-codec/audio-decoding)支持AAC，MPEG(MP3)，FLAC，Vorbis。

**参考链接**

[媒体数据封装](/docs/dev/app-dev/media/avcodec-kit/file-muxing-demuxing/audio-video-muxer)
