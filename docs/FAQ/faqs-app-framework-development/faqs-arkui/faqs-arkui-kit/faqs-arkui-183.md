---
title: "组件被隐藏后 onVisibleAreaChange 事件触发了两次"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-183
---

**问题现象**

绑定ratios为[0, 1]时，组件突然消失会触发两次onVisibleAreaChange方法。

**解决措施**

如果希望仅触发一次，需要设置一个ratios。
