---
title: "uniapp调试生成sourcemap的问题"
original_url: https://developer.huawei.com/consumer/cn/doc/atomic-ascf/faqs-uniapp-sourcemap-generation
format: md
---


**问题现象**

uniapp编译运行没有sourcemap，无法调试。

**解决措施**

CLI编译，可以增加环境变量，参考：

```
（win32）：set UNI_SOCKET_HOSTS=0.0.0.0 && set UNI_SOCKET_PORT=9876 && set UNI_SOCKET_ID=1
（mac）：export UNI_SOCKET_HOSTS=0.0.0.0 && set UNI_SOCKET_PORT=9876 && set UNI_SOCKET_ID=1
```

编译产物如下图所示。

![](./img/c7289728.png "点击放大")

HBuildX编译运行，建议更新最新的IDE版本。
