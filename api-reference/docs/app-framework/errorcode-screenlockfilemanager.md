---
title: "锁屏敏感数据管理错误码"
upstream_id: "harmonyos-references/errorcode-screenlockfilemanager"
catalog: "harmonyos-references"
content_hash: "dde07ac3b3ed"
synced_at: "2026-07-09T00:57:14.049747"
---

# 锁屏敏感数据管理错误码

![](./img/note_3.0-zh-cn.png) 以下仅介绍本模块特有错误码，通用错误码请参考[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

#### 29300002 系统服务工作异常

错误信息

The system ability works abnormally.

可能原因

该错误码表示系统服务工作异常。

1. 锁屏敏感数据管理服务无法正常启动。
2. IPC数据读取写入失败。

处理步骤

系统服务内部工作异常，请稍后重试，或者重启设备。

#### 29300003 应用未开启锁屏敏感数据保护功能

错误信息

The application has not enabled the data protection function under lock screen.

可能原因

1. 应用未在[requestpermissions](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/declare-permissions#在配置文件中声明权限)配置权限ohos.permission.PROTECT_SCREEN_LOCK_DATA开启应用锁屏敏感数据保护功能。
2. 当前硬件不支持锁屏敏感数据保护功能。

处理步骤

在[requestpermissions](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/declare-permissions#在配置文件中声明权限)中配置权限ohos.permission.PROTECT_SCREEN_LOCK_DATA开启应用锁屏敏感数据保护功能。

#### 29300004 锁屏敏感数据访问权限已释放

错误信息

The file access is denied due to security strategy.

可能原因

锁屏敏感数据访问权限已释放。

处理步骤

锁屏下无法访问敏感数据。如需继续使用，请引导用户重新解锁屏幕，待解锁完成后可恢复正常访问。

#### 29300005 未申请锁屏敏感数据访问权限

错误信息

File access is not acquired.

可能原因

该错误码表示释放前，未申请锁屏敏感数据访问权限。

处理步骤

检查当前接口是否有配套使用，请在释放前先申请锁屏敏感数据访问权限。
