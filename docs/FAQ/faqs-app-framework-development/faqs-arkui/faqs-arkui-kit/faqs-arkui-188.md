---
title: "触摸事件的TouchEvent调用stopPropagation时无法阻止事件分发"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-188
---

**问题现象**

当Button嵌套在另一个Button中时，外部调用stopPropagation方法无法阻止内部Button的onTouch事件触发。

```
Button() {
  Button()
    .onTouch(xx)
}
.onTouch((event: TouchEvent) => {
  // 没有阻止内部的button触发onTouch事件
  event.stopPropagation();
})
```

**解决措施**

由于事件冒泡是从内层向外层传递的，外层按钮的stopPropagation只能阻止事件继续向外冒泡，无法影响已经触发的内层事件。因此，给外层按钮设置stopPropagation无效。若想阻止内层按钮的触摸事件，可以在外层按钮上添加.hitTestBehavior(HitTestMode.Block)。

**参考链接**

[触摸测试控制](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-hit-test-behavior)
