---
format: md
title: "XComponent 怎么设置成透明"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-139
---


XComponent显示的内容，可由开发者自定义绘制，通用属性中的背景设置、透明度设置和图像效果按照type有限支持。当type为TEXTURE时通用属性可以支持背景颜色设置、透明度设置和图像效果中的shadow属性，建议使用EGL/OpenGLES提供的接口设置相关内容。

**参考链接**

[XComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-xcomponent)，[背景设置](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-background)，[透明度设置](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-opacity)，[图像效果](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-image-effect)
