---
title: "DevEco Profiler术语"
displayed_sidebar: toolsSidebar
---

# DevEco Profiler术语

#### 异步栈缝合

在异步回栈时，该功能支持多回一层异步栈帧。如下图中的start\_malloc\_xxx\_work异步调用malloc\_xxx\_work，当开关未开启时，仅能回malloc\_xxx\_work栈帧；当开关开启后，支持回malloc\_xxx\_work栈帧和start\_malloc\_xxx\_work栈帧。

![](./img/zh-cn_image_0000002602066371.png "点击放大")
