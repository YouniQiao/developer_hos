---
format: md
title: "如何查询应用当前CPU占用"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-performance-analysis-kit-14
---

目前有两种方式查询当前CPU占用：

在代码中查询：

可以使用 `hidebug.getCpuUsage` 接口查询 CPU 占用。参考代码如下：

```
let cpuUsage: number = hidebug.getCpuUsage();
```

在命令行中查询：

* 根据hdc命令行工具指导，完成[环境准备](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V14/hdc-V14#环境准备)。
* 正常连接设备。

  ```
  hidumper --cpuusage <pid>
  hidumper --cpuusage
  ```

**参考链接**

[hidebug.getCpuUsage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-hidebug#hidebuggetcpuusage9)

[hidumper](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hidumper)
