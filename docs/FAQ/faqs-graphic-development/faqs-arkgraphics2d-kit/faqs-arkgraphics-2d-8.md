---
title: "OpenGL无法正常渲染某些分辨率YUV数据"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkgraphics-2d-8
---

**问题现象**

在特定分辨率下的YUV数据（例如668×352），通过OpenGL渲染时，图像会出现失真。

**解决措施**

由于OpenGL渲染要求宽度16字节对齐，高度2字节对齐。如果不需要按照此规格对齐，在渲染时需要添加以下代码：

```
cpp glPixelStorei(GL_UNPACK_ALIGNMENT, 1); // 禁用纹理字节对齐限制
```
