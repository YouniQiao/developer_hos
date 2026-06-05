---
title: "HTTP接口如何设置Cookie"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-network-7
format: md
---


HttpRequestOptions中的header是一个Object类型，可以直接在header里设置cookie。调用httpRequest.request()需要申请权限：ohos.permission.INTERNET。使用时，httpRequest.request()接口中的“EXAMPLE\_URL”需要替换成实际请求地址。参考代码如下：

```
import { http } from '@kit.NetworkKit';

@Entry
@Component
struct HttpRequest {
  @State message: string = '发起请求';

  request() {
    let httpRequest = http.createHttp();
    let options: http.HttpRequestOptions = {
      method: http.RequestMethod.POST,
      extraData: 'data to send',
      expectDataType: http.HttpDataType.STRING,
      priority: 1,
      header: {
        'cookie': 'key1=value1;key2=value2'
      }
    };
    httpRequest.request("EXAMPLE_URL", options, (err: Error, data: http.HttpResponse) => {
      if (!err) {
        console.info('Result:' + data.result);
        console.info('code:' + data.responseCode);
        console.info('type:' + JSON.stringify(data.resultType));
        console.info('header:' + JSON.stringify(data.header));
        console.info('cookies:' + data.cookies); // Starting from API version 8, cookies are supported
      } else {
        console.info('error:' + JSON.stringify(err));
      }
    });
  }

  build() {
    Row() {
      Column() {
        Button(this.message)
          .fontSize(30)
          .fontWeight(FontWeight.Bold)
          .onClick(() => {
            this.request();
          })
      }
      .width('100%')
    }
    .height('100%')
  }
}
```

**参考链接**

[@ohos.net.http (数据请求)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-http)
