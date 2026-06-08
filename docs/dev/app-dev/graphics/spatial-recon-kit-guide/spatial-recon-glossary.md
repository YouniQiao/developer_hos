---
displayed_sidebar: appDevSidebar
title: "Spatial Recon Kit术语"
original_url: /docs/dev/app-dev/graphics/spatial-recon-kit-guide/spatial-recon-glossary
format: md
upstream_id: dev/app-dev/graphics/spatial-recon-kit-guide/spatial-recon-glossary
last_sync: 2026-06-07
sync_hash: bde34712
upstream_hash: fac684ade10e
---

## 颜色抖动

颜色抖动通过有规律地混合相邻像素的颜色来模拟更多色彩。它在一定区域内混合排列不同颜色的像素点、使人眼产生一种视觉上的混合效果，从而用有限的颜色深度模拟出更多种颜色。

## 3DGS

3D Gaussian Splatting（3D高斯泼溅）。用一定数量的3D高斯球来表示一个3D场景。每个高斯球都有自己的位置、大小、颜色、透明度等属性。渲染时，将这些3D高斯球投影到2D屏幕上，融合成一幅完整的图像。

## Kuwahara filter

一种滤波器，可以在平滑图像的同时保留图像的边缘信息。
