---
title: "2in1设备attach调试失败和增量调试失败"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-app-debugging-63
---

**问题现象**

1、2in1设备应用调试失败，报错信息如下图所示。

![](./img/4e37db6e.png)

2、2in1设备应用使用增量调试失败，报错信息如下图所示。

![](./img/a9312251.png)

**解决措施**

2in1设备报上述错误可能原因是应用开启了应用加速服务功能，请在设备的**设置 > 应用加速服务**中，查看应用是否开启了应用加速服务，并关闭应用的加速服务。

![](./img/cee7cef0.png)
