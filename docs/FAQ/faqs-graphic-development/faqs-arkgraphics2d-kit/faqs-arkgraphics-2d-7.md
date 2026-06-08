---
format: md
title: "解码后数据帧送显的两种方式"
original_url: /docs/FAQ/faqs-graphic-development/faqs-arkgraphics2d-kit/faqs-arkgraphics-2d-7
upstream_id: FAQ/faqs-graphic-development/faqs-arkgraphics2d-kit/faqs-arkgraphics-2d-7
last_sync: 2026-06-07
sync_hash: c9b27d54
---
方式一：使用 [NativeImage](/docs/dev/app-dev/graphics/arkgraphics-2d/native-surface/native-image-guidelines) 和 [XComponent surface 模式](/docs/dev/app-dev/media/avcodec-kit/audio-video-codec/video-decoding#surface模式)。步骤如下：

1. 将 NativeImage 对应的 NativeWindow 与解码器绑定（surface 模式）。
2. 获取解码器输出的纹理。
3. 通过 [OpenGL](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/opengl) 将纹理写入 XComponent surface 实现显示。

方式二：缓冲模式 + XComponent 表面模式，解码器输出的缓冲区通过 OpenGL 写入 XComponent 表面实现显示。
