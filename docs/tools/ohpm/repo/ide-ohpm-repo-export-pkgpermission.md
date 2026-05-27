---
title: "ohpm-repo export_pkgPermission"
---

# ohpm-repo export\_pkgPermission

ohpm-repo 5.4.0版本开始，支持导出包权限数据。

## 命令格式

```
ohpm-repo export_pkgPermission [option]
```

## 功能描述

在当前的工作目录中，导出记录包权限的packagePermission\_xxx.json文件。

## 选项

### --repos

* 默认值：无

* 类型：String

在export\_pkgPermission命令后面配置--repos ``<string>``，导出ohpm-repo中指定仓库的包权限。多个仓库之间通过英文逗号隔开，例如"export\_pkgPermission --repos one,two"，即导出仓库one和仓库two中的包权限。若未配置此参数，将默认导出ohpm-repo中所有仓库的包权限。

## 示例

**从ohpm-repo中导出所有仓库的包权限**

```
ohpm-repo export_pkgPermission
```

结果示例：

```
PS D:\> ohpm-repo export_pkgPermission
...
[2025-09-16T14:58:24.806] [INFO] default - successfully exported all package permissions: saved to "D:\packagePermission_1758005904806.json".
```

```
// packagePermission_1758005904806.json中记录着ohpm-repo中所有仓库的包权限
[
  {
    "repoName": "groupone",
    "packageName": "testone",
    "readPolicy": 1, // 记录包的可见性配置（1：公开可读，2：授权可读）
    "packagePermission": {
      "admin": 4, // 记录用户名为admin的用户对该包的权限 （1：查看者权限，2：维护者权限，4：所有者权限）
      "user": 2,
    }
  },
  ...
  {
    "repoName": "ohpm",
    "packageName": "testtwo",
    "readPolicy": 2,
    "packagePermission": {
      "admin": 2,
      "user": 4,
    }
  }
]
```

**从ohpm-repo中仅导出仓库名为ohpm的包权限**

```
ohpm-repo export_pkgPermission --repos ohpm
```

结果示例：

```
PS D:\> ohpm-repo export_pkgPermission --repos ohpm
...
[2025-09-16T15:41:06.124] [INFO] default - successfully exported all package permissions for the specified repository: saved to "D:\packagePermission_1758008466123.json".
```

```
// packagePermission_1758008466123.json中记录着ohpm-repo中仓库ohpm的包权限
[
  {
    "repoName": "ohpm",
    "packageName": "testtwo",
    "readPolicy": 2,
    "packagePermission": {
      "admin": 2,
      "user": 4,
    }
  },
  ...
]
```
