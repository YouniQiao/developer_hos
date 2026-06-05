---
title: "无网络环境下使用同步方法获取网络状态报错"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-network-66
format: md
---


在无网环境中调用同步方法请求时，无法解析nethandle对应的内容，方法执行时会报错。可以使用try-catch语句捕获并处理报错信息。参考代码如下：

```
import { connection } from '@kit.NetworkKit'
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct GetErrInfo {
  getErrInfo() {
    try {
      let netHandle = connection.getDefaultNetSync();
      let connectionproperties = connection.getConnectionPropertiesSync(netHandle);
    } catch (err) {
      let error: BusinessError = err as BusinessError;
      console.log('error: ' + JSON.stringify(error));
    }
  }

  build() {
    Row() {
      Column() {
        Button('获取网络类型')
          .onClick(() => {
            this.getErrInfo();

          })
      }
      .width('100%')
    }
    .height('100%')
  }
}
```
