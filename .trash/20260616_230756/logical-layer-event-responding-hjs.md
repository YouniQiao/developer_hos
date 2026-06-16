---
title: "使用hjs函数响应事件"
original_url: /docs/dev/atomic-dev/ascf/logical-layer-events/logical-layer-event-responding-hjs
format: md
upstream_id: dev/atomic-dev/ascf/logical-layer-events/logical-layer-event-responding-hjs
last_sync: 2026-06-07
sync_hash: fdcdac2c
---
使用hjs函数处理事件时，hjs函数接受2个参数，第一个是event对象，event除了有上述打印的event结构中基本的属性外，还具有一个instance属性；第二个参数是ownerInstance，和event.instance一样是一个ComponentDescriptor对象。

使用示例代码如下：

在hxml中绑定hjs函数。

```
<hjs src="./test.hjs" module="test"/>
<button bindtap="{{ test.handleTap }}">button</button>
```

![](./img/dff8423d.png)

绑定的 hjs 函数必须用&#123;&#123;&#125;&#125;括起来。

test.hjs文件实现 handleTap 函数。请参照“[调试运行ASCF源代码](/docs/dev/atomic-dev/ascf/ascf-development-process/debug-ascf-code#调试运行ascf源代码)”章节查看打印结果。

```
var handleTap = function(event, ownerInstance) {
  console.info('tap button', event);
};
module.exports = {
  handleTap: handleTap
};
```

ComponentDescriptor 对象拥有一些方法，可以设置组件的样式等，更多详细内容参见[hjs响应事件](/docs/dev/atomic-dev/ascf/hjs/hjs-responding-event)。
