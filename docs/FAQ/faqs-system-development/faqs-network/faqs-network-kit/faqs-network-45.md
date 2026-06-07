---
title: "如何判断使用的是移动蜂窝网络"
original_url: /docs/FAQ/faqs-system-development/faqs-network/faqs-network-kit/faqs-network-45
format: md
---


使用@kit.NetworkKit中的connection.getNetCapabilities接口获取网络能力信息。如果返回结果中bearerTypes的值为 0，表示移动蜂窝网络，否则表示其他网络。需要权限：ohos.permission.GET\_NETWORK\_INFO。

参考代码如下：

```
import { connection } from '@kit.NetworkKit';

// Check if the network is connected
connection.hasDefaultNet((error, data) => {
  console.log('data: ' + data);
})
// Obtain network capability information
connection.getDefaultNet().then((netHandle) => {
  connection.getNetCapabilities(netHandle, (error, data) => {
    console.log(JSON.stringify(error));
    console.log(JSON.stringify(data));
  })
})
```

**参考链接**

[connection.getNetCapabilities](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-net-connection#connectiongetnetcapabilities)

[NetBearType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-net-connection#netbeartype)
