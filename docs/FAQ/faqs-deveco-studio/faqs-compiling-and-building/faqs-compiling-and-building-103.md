---
format: md
title: "编译通过，但是安装时失败报错“Error while Deploy Hap”"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-103
---


**问题描述**

在工程内打包的har包，编译通过，但在安装时失败。

```
04/10 14:01:54: Install Failed: error: failed to install bundle.
code:9568278
error: install version code not same.
$ hdc shell rm -rf data/local/tmp/f47e1222b8c64dbe92f86bc3b55cc3d2
Error while Deploy Hap
```

**可能原因**

该报错是由于需要安装的应用与系统已安装的应用中，app.json文件的versionCode字段不一致。

**解决措施**

方案一：开发者可能使用了DevEco Studio的debug按钮安装了该应用。之后，通过打包并使用hdc install命令安装。可以使用命令查看已安装应用的debug字段信息。

```
bm dump -n 应用bundleName | grep debug
```

普通应用的卸载与安装：

```
>hdc uninstall 应用bundleName
```

清空应用数据：

```
hdc shell bm clean -d -n 应用bundleName
```

方案二：保存的数据应用版本与新安装的版本不一致可能导致问题。解决方法：进入“Run”>“Edit Configurations”>“Run/Debug Configuration”，取消选中“Keep Application Data”选项。

![](./img/9b154f09.png)
