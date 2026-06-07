---
title: "设备连接Wi-Fi后，如何获取当前设备的IP地址"
original_url: /docs/FAQ/faqs-system-development/faqs-network/faqs-connectivity-kit/faqs-connectivity-4
format: md
---


使用wifiManager模块获取ipInfo，然后转换为IP常用格式，注意wifiManager.getIpInfo()接口需要权限ohos.permission.GET\_WIFI\_INFO。

参考代码如下：

```
import { wifiManager } from '@kit.ConnectivityKit';

let ipAddress = wifiManager.getIpInfo().ipAddress;
let ip = (ipAddress >>> 24) + "." + (ipAddress >> 16 & 0xFF) + "." + (ipAddress >> 8 & 0xFF) + "." + (ipAddress & 0xFF);
```
