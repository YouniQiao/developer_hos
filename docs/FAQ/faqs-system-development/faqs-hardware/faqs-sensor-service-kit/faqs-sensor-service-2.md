---
title: "如何读取运动传感器比如加速度传感器"
original_url: /docs/FAQ/faqs-system-development/faqs-hardware/faqs-sensor-service-kit/faqs-sensor-service-2
format: md
upstream_id: FAQ/faqs-system-development/faqs-hardware/faqs-sensor-service-kit/faqs-sensor-service-2
last_sync: 2026-06-07
sync_hash: 94881ec2
---
1. 导入sensor（传感器）模块：

```
import { sensor } from '@kit.SensorServiceKit';
```

2. 设置加速度传感器的数据回调监听：

```
try {
  sensor.on(sensor.SensorId.ACCELEROMETER, (data) => {
    console.info('X-coordinate component: ' + data.x);
    console.info('Y-coordinate component: ' + data.y);
    console.info('Z-coordinate component: ' + data.z);
  }, { interval: 10000000 });
} catch (err) {
  console.error('On fail, errCode: ' + err.code + ' ,msg: ' + err.message);
}
```

**参考链接**

[传感器](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-sensor)
