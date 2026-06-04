---
title: "sign包和unsign包产物之间是否有差异"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-68
---

包产物之间没有差异，签名信息写在ZIP格式中，因此解压后看到的内容没有区别。可以使用文本编辑器直接打开HAP文件进行比较，搜索distribution-certificate，签名的包会包含证书信息。

使用签名文件在安装时存在差异。

* 未签名的包在安装时需要配置签名信息。
* 如果存在在线签名，将会绑定设备ID，其他设备无法安装。

  具有自动签名功能的安装包可以在其他设备上安装。

**参考链接**

[配置调试签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing)
