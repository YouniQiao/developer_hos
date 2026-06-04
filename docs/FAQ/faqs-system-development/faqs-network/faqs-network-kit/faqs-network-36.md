---
title: "ArkTS中HTTP请求如何以JSON形式进行传输"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-network-36
---

HTTP协议消息头中，Content-Type表示媒体类型。

设置参数值为application/json。请求中的数据将以JSON形式传输。参考代码如下：

```
import { http } from '@kit.NetworkKit';

class Header {
  public contentType: string;
  constructor(contentType: string) {
    this.contentType = contentType;
  }
}
let httpRequest = http.createHttp();
let promise = httpRequest.request("EXAMPLE_URL", {
  method: http.RequestMethod.GET,
  connectTimeout: 60000,
  readTimeout: 60000,
  header: new Header('application/json')
});
```

**参考链接**

[request](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-http#request)
