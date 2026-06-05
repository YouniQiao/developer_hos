---
title: "Socket接口库是否支持绑定域名"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-network-23
format: md
---


Socket不支持域名访问，只能使用IP地址。域名需要通过DNS解析为对应的IP地址。

参考代码如下：

```
import { connection } from '@kit.NetworkKit'
import { BusinessError } from "@kit.BasicServicesKit"

connection.getAddressesByName("xxxx", (error: BusinessError, data: connection.NetAddress[]) => {
  console.log(JSON.stringify(error));
  console.log(JSON.stringify(data));
})
```

**参考链接**

[connection.getAddressesByName](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-net-connection#connectiongetaddressesbyname)
