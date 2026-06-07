---
format: md
title: "DevEco Studio安装HAP时报错“FileTransfer Failed: Error while Deploy Hap”"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-app-debugging/faqs-app-debugging-35
---


**问题现象**

DevEco Studio安装HAP时报错“FileTransfer Failed: Error while Deploy Hap”。

![](./img/8bf442d6.png)

**解决措施**

使用真机场景：请更换数据线或PC侧USB接口后尝试。

使用模拟器场景：

* 在Local Emulator的设备列表窗口，点击“Wipe User Data”清除数据，启动模拟器并重新运行工程。
* 打开命令行工具，并进入DevEco Studio安装目录下的sdk\default\openharmony\toolchains路径，执行 hdc kill -r 命令，启动模拟器，重新运行工程。
