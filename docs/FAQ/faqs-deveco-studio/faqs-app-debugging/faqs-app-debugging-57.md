---
format: md
title: "DevEco如何配置不响应raise捕获到的assert信号"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-app-debugging-57
---

在DevEco Studio RUN/Debug Configurations中的Edit Configurations > Debugger > LLDB Post Attach Commands，添加配置：process handle -p false -s false -n false signal。其中，signal为assert发送的信号。详细步骤如图所示：

![](./img/d3eb93c3.png)

![](./img/5ee30086.png "点击放大")
