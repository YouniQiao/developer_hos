---
title: "ohpm-repo export_userinfo"
format: md
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/ide-ohpm-repo-export-userinfo
---


# ohpm-repo export\_userinfo

导出用户必要的DB数据。

## 命令格式

```
ohpm-repo export_userinfo
```

## 功能描述

在当前的工作目录导出记录了DB数据的export\_userInfo\_xxx.zip文件，其中包含加密组件和下面的10张数据表。

* user
* group\_member
* public\_key
* access\_token
* uplink
* uplink\_proxy
* repo
* repo\_permission
* validation\_config
* system\_security

## 示例

执行以下命令：

```
ohpm-repo export_userinfo
```

结果示例：

![](./img/13971fde.png "点击放大")

```
PS D:\> ohpm-repo export_userinfo
[2025-08-09T19:14:16.721] [INFO] default - initialize "file database" successfully.
[2025-08-09T19:14:16.724] [INFO] default - export the "user" table done.
[2025-08-09T19:14:16.726] [INFO] default - export the "group_member" table done.
[2025-08-09T19:14:16.728] [INFO] default - export the "access_token" table done.
[2025-08-09T19:14:16.728] [INFO] default - export the "public_key" table done.
[2025-08-09T19:14:16.730] [INFO] default - export the "repo" table done.
[2025-08-09T19:14:16.730] [INFO] default - export the "repo_permission" table done.
[2025-08-09T19:14:16.731] [INFO] default - export the "uplink" table done.
[2025-08-09T19:14:16.732] [INFO] default - export the "uplink_proxy" table done.
[2025-08-09T19:14:16.733] [INFO] default - export the "validation_config" table done.
[2025-08-09T19:14:16.734] [INFO] default - export the "system_security" table done.
[2025-08-09T19:14:16.761] [INFO] default - userinfo exported completed, save the .zip file to : "D:\export_userInfo_1754738056722.zip".
```

```
export_userInfo_1754738056722.zip文件结构

|   access_token.json
|   group_member.json
|   public_key.json
|   repo.json
|   repo_permission.json
|   system_security.json
|   uplink.json
|   uplink_proxy.json
|   user.json
|   validation_config.json
\---meta
    |   version.txt
    +---ac
    +---ce
    \---fd
```
