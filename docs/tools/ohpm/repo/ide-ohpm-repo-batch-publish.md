---
title: "ohpm-repo batch_publish"
---

# ohpm-repo batch\_publish

批量上传包文件。

## 前提条件

已成功执行[batch\_download 命令](./ide-ohpm-repo-batch-download)、 [export\_userinfo 命令](./ide-ohpm-repo-export-userinfo)、[import\_userinfo 命令](./ide-ohpm-repo-import-userinfo)，确保每个包指定的包文件、用户和组织都存在。

## 命令格式

```
ohpm-repo batch_publish <zip_file>
```

## 功能描述

根据提供的zip文件批量上传其中的包到ohpm-repo对应的仓库中。

## 参数

### `<zip\_file>`

* 类型： String
* 必填参数

必须在batch\_publish命令后面配置`<zip\_file>`参数，指定执行[batch\_download命令](./ide-ohpm-repo-batch-download)导出的zip文件。

## 选项

### --force

* 默认值：false
* 类型：Boolean

在batch\_publish命令后面配置--force，进行批量上传时某个包的组织在ohpm-repo中不存在，将选取一位管理员用户作为组织负责人自动创建组织。

--target-repo

* 默认值：无
* 类型： string

ohpm-repo 5.3.0版本开始支持配置多个仓库，当[batch\_download命令](./ide-ohpm-repo-batch-download)导出的zip文件中仅包含一个仓库目录时，可在batch\_publish命令后面配置--target-repo ``<string>``，用于指定待上传的仓库名称。未配置默认上传仓库名称与[batch\_download命令](./ide-ohpm-repo-batch-download)导出的zip文件中的目录仓库名称保持一致，否则将报错。

## 示例

执行以下命令：

```
ohpm-repo batch_publish <zip_file> --force
```

结果示例：

```
PS D:\> ohpm-repo batch_publish D:\batch_download_1754735610304.zip --force
...
[2025-08-09T19:12:01.497] [INFO] default - all 6 package(s) are successfully published
[2025-08-09T19:12:01.497] [WARN] default - You are using "filedb" to store data. If you have already started a repository service, please run `ohpm-repo restart` to restart the service.
```

![](./img/ccd1c7d0.png)

如果ohpm-repo实例的数据存储类型为filedb，请执行ohpm-repo restart命令重启ohpm-repo服务，以便刷新ohpm-repo实例缓存中的数据。该操作会影响正在使用ohpm-repo服务的用户，请提前告知。
