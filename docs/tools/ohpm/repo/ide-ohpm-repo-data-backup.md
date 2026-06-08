---
title: "数据备份"
format: md
original_url: /docs/tools/ohpm/repo/ide-ohpm-repo-data-backup
upstream_id: tools/ohpm/repo/ide-ohpm-repo-data-backup
last_sync: 2026-06-07
sync_hash: 7e74e7cb
---
# 数据备份

数据迁移或者版本升级之前请务必进行数据备份，以免重要数据丢失，无法回滚。备份的内容包括**ohpm-repo**中**`<deploy\_root**>`部署根目录内的数据、db元数据以及store三方包数据。

## 备份deploy\_root部署根目录

![](./img/b329cbe8.png)

`deploy_root`：ohpm-repo部署根目录，默认的路径为：

windows系统：~/AppData/Roaming/Huawei/ohpm-repo

其他操作系统：~/ohpm-repo

ohpm-repo在版本1.1.0之前不支持配置`deploy_root`，都采用默认值，若您的ohpm-repo支持且配置了`deploy_root`，请找到对应目录，并使用常用的压缩工具打包备份该目录。

![](./img/ccdf48cf.png)

如果配置文件中db，storage，logs和uplink的存储路径可配置，且存储位置不在ohpm-repo部署根目录`deploy_root`中，请找到对应目录进行数据备份。

![](./img/e4b63b60.png "点击放大")

## 备份``<包存储目录>``和`\<mysql\>`

![](./img/49e2efa4.png)

如果您使用的是本地存储（配置文件中db为filedb本地存储，store为fs本地存储），在备份`deploy_root`时已经完成db和store的备份，请忽略该步骤。

* 如果您的配置项db使用了mysql存储，请根据配置的数据库名，备份结构和数据。

  ![](./img/03428250.png "点击放大")

* 如果您的配置项store使用了Sftp存储或自定义存储插件存储，请根据配置的存储目录，进行备份（图片以sftp存储举例）

  ![](./img/93686dff.png "点击放大")
