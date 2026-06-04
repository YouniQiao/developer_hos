---
title: "是否navigation有最大页面数量限制？router栈的栈最大是32个，超过32个是无响应还是报错"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-260
---

Navigation 本身没有最大页面数量的限制，但实际运行受系统router栈的限制。当 router 栈中的页面数量超过 32 个时，系统将不再响应，也不会再有新页面入栈。
