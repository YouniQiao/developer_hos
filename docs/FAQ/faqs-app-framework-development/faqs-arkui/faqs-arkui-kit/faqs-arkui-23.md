---
format: md
title: "如何选择图文混排的实现方案"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-23
upstream_id: FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-23
last_sync: 2026-06-07
sync_hash: 2eb9e7a4
---
1. 轻量级Span和ImageSpan图文混排：可通过[Text](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-text)组件中嵌套[ImageSpan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-imagespan)子组件和[Span](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-span)子组件的方式，实现图文混排。具体实现可参考ImageSpan中的[示例1（设置对齐方式）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-imagespan#示例1设置对齐方式)。
2. 富文本[RichEditor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-richeditor)支持文本交互式编辑和图文混排，通过[addTextSpan()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-richeditor#addtextspan)方法添加文本内容，通过[addImageSpan()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-richeditor#addimagespan)方法添加图片内容。具体实现可参考RichEditor中的[示例1（更新文本样式）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-richeditor#示例1更新文本样式)。
