---
format: md
title: "DevEco无法执行Previewer，报错“This module is referencing one or more HSPs and cannot be previewed.”怎么处理"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-previewer-operating-7
---


原因如下：

* 引入了HSP，DevEco Studio NEXT Developer Beta1版本不支持模块预览，请在HSP内直接预览。
* 项目中使用的方法API可能不在Previewer支持的列表里：[支持使用预览器的API清单](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-previewer-api-list)，注意：支持列表会随版本更新变化，建议定期查看官方文档。

**解决措施**

可以使用Previewer中的设备管理器，选择本地模拟器或通过USB连接真机来运行。

**参考链接**

[查看ArkTS/JS预览效果](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-previewer-arkts-js)
