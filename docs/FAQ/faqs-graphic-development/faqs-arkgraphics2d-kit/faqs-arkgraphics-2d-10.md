---
format: md
title: "使用eglSwapBuffers API，eglSwapBuffers执行报错错误码：EGL_BAD_ALLOC。"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkgraphics-2d-10
---


编码器通过 OH\_VideoEncoder\_GetSurface(encoder\_, &NativeWindow) 获取 NativeWindow，使用该 NativeWindow 创建 Encoder 的 EGLSurface 来接收 OpenGL 的纹理数据。若未调用 OH\_NativeWindow\_NativeWindowHandleOpt(nativeWindow, SET\_BUFFER\_GEOMETRY, height, width) 设置 buffer 大小，在调用 eglSwapBuffers API 时会报错。
