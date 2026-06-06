---
title: "ohpm-repo start"
format: md
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/ide-ohpm-repo-start---


# ohpm-repo start

启动ohpm-repo服务。

## 前提条件

已成功执行[install命令](./ide-ohpm-repo-install)，并按要求刷新环境变量。

## 命令格式

```
ohpm-repo start
```

## 功能描述

用于启动ohpm-repo服务，创建一个ohpm-repo实例。

![](./img/7993fdd4.png)

启动时将ohpm-repo服务的pid存放到`deploy_root`/runtime/.pid文件中，其中`deploy_root`为[ohpm-repo私仓部署目录](./ide-ohpm-repo-configuration#zh-cn_topic_0000001745376470_关于-deploy_root)。

## 示例

执行以下命令：

```
ohpm-repo start
```

结果示例：

![](./img/d23716a0.png "点击放大")
