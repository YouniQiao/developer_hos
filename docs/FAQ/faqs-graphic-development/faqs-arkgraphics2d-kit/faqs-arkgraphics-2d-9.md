---
format: md
title: "使用eglSwapBuffers API，eglSwapBuffers执行报错错误码：EGL_BAD_SURFACE （300d）。日志显示：QEGLPlatformContext: eglSwapBuffers failed: 300d。"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkgraphics-2d-9
---


如果surface不是EGL绘图表面，系统会返回EGL\_BAD\_SURFACE错误。建议检查eglCreateWindowSurface、eglCreatePixmapSurface和eglCreatePbufferSurface的参数设置。
