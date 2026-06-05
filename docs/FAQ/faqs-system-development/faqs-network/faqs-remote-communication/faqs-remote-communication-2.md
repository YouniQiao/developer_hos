---
format: md
title: "rcp请求是否有数据大小限制"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-remote-communication-2
---


rcp请求默认情况下，[response](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-rcp#response)响应中最大数据量为50MB，超过此限制建议通过[HttpEventsHandler](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-rcp#httpeventshandler)的[onDataReceive](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-rcp#section9264115918536)实现流式数据接收。

**参考链接**

[response](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-rcp#response)

[HttpEventsHandler](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-rcp#httpeventshandler)

[onDataReceive](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-rcp#ondatareceive)
