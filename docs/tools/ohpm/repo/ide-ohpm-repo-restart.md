---
title: "ohpm-repo restart"
format: md
original_url: /docs/tools/ohpm/repo/ide-ohpm-repo-restart
---


# ohpm-repo restart

重新启动ohpm-repo服务。

## 前提条件

已成功执行[install命令](./ide-ohpm-repo-install)，并按要求刷新环境变量。

## 命令格式

```
ohpm-repo restart
```

## 功能描述

停止当前ohpm-repo服务，重新启动一个新的ohpm-repo服务。

![](./img/054c39fe.png)

启动时将ohpm-repo服务的pid存放到`deploy_root`/runtime/.pid文件，其中`deploy_root`为[ohpm-repo私仓部署目录](./ide-ohpm-repo-configuration#zh-cn_topic_0000001745376470_关于-deploy_root)。

## 示例

执行以下命令：

```
ohpm-repo restart
```

结果示例：

![](./img/ac4fad57.png "点击放大")
