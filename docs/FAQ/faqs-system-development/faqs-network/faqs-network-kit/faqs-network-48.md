---
title: "如何实现http长连接"
original_url: /docs/FAQ/faqs-system-development/faqs-network/faqs-network-kit/faqs-network-48
format: md
upstream_id: FAQ/faqs-system-development/faqs-network/faqs-network-kit/faqs-network-48
last_sync: 2026-06-07
sync_hash: 318a7768
---
可使用定时HTTP请求模拟长连接。参考代码如下：

```
import { http } from '@kit.NetworkKit';

let httpRequest = http.createHttp();
// 设置5秒轮询一次
setTimeout(() => {
  httpRequest.request("EXAMPLE_URL", {
    method: http.RequestMethod.GET,
    connectTimeout: 60000,
    readTimeout: 60000
  }, (err, data) => {
    if (!err) {
      console.info('Received data:', JSON.stringify(data.result));
    } else {
      console.info('Polling error:', JSON.stringify(err));
    }
  })
}, 5000)
```
