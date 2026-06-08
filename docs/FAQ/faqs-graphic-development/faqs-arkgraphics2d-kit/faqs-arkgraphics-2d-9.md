---
format: md
title: "使用eglSwapBuffers API，eglSwapBuffers执行报错错误码：EGL_BAD_SURFACE （300d）。日志显示：QEGLPlatformContext: eglSwapBuffers failed: 300d。"
original_url: /docs/FAQ/faqs-graphic-development/faqs-arkgraphics2d-kit/faqs-arkgraphics-2d-9
upstream_id: FAQ/faqs-graphic-development/faqs-arkgraphics2d-kit/faqs-arkgraphics-2d-9
last_sync: 2026-06-07
sync_hash: ade55246
upstream_hash: 8de876284cc6
---

如果surface不是EGL绘图表面，系统会返回EGL\_BAD\_SURFACE错误。建议检查eglCreateWindowSurface、eglCreatePixmapSurface和eglCreatePbufferSurface的参数设置。
