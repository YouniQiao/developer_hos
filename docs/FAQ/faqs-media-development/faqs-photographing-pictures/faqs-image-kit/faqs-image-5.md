---
format: md
title: "图片编解码支持的格式有哪些"
original_url: /docs/FAQ/faqs-media-development/faqs-photographing-pictures/faqs-image-kit/faqs-image-5
---


* 图片解码

指将所支持格式的图片文件解码成PixelMap，以便在应用或系统中进行图片显示或图片处理。当前支持解码的图片格式包括JPEG、PNG、GIF、RAW、WebP、BMP、HEIC（API12起）。

* 图片编码

指将PixelMap编码成不同格式的图片文件，用于后续处理，如保存、传输等。当前支持编码的图片格式包括JPEG、WebP、PNG、HEIC（API12起）、GIF（API18起，需要使用PackToDataFromPixelmapSequence或PackToFileFromPixelmapSequence接口进行编码）。

**参考链接**

[使用ImageSource完成图片解码](/docs/dev/app-dev/media/image-kit/image-arkts-dev/image-decoding-arts/image-decoding)

[使用ImagePacker完成图片编码](/docs/dev/app-dev/media/image-kit/image-arkts-dev/image-encoding-arts/image-encoding)

[图片编码（C/C++）](/docs/dev/app-dev/media/image-kit/image-native/image-encoding-c)
