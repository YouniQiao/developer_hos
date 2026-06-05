---
format: md
title: "Web页面切换软键盘意外弹出"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkweb-94
---


**问题描述**

在富文本组件的文字输入部分，点击插入图片按钮并切换到相册选择界面时，软键盘意外弹出。

**解决措施**

因为点击切换过程中，原Web页面的输入框仍保持焦点状态，系统误认为需要继续输入，因此自动弹出软键盘。建议在拉起相册之后，执行web页面失焦操作。

**参考链接**

[Web组件焦点管理](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-focus)
