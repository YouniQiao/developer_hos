---
title: "无障碍子系统错误码"
upstream_id: "harmonyos-references/errorcode-accessibility"
catalog: "harmonyos-references"
content_hash: "d4d99335064b"
synced_at: "2026-07-09T00:57:14.344826"
---

# 无障碍子系统错误码

![](./img/note_3.0-zh-cn.png) 以下仅介绍本模块特有错误码，通用错误码请参考[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

#### 9300000 无障碍系统服务工作异常

错误信息

System abnormality.

错误描述

当系统服务工作异常时，会报此错误码。

可能原因

该错误码表示无障碍系统服务工作异常，可能原因如下：

1. 内部操作失败（Internal operation failed）。
2. 获取必要的服务或客户端对象失败（空指针）（Failed to obtain the required service or client object (null pointer)）。
3. IPC通信失败（IPC communication failed）。
4. 获取无障碍服务代理失败（Failed to obtain the accessibility service proxy）。
5. 等待异步操作结果超时（Timed out while waiting for the result of an asynchronous operation）。
6. 监听器或观察者已注册（The listener or observer has already been registered）。
7. 监听器或观察者未注册（The listener or observer is not registered）。
8. 客户端未连接（The client is not connected）。
9. 目标应用连接无障碍服务失败（The target application failed to connect to the accessibility service）。
10. 从ACE接收的元素信息无效（The element information received from ACE is invalid）。
11. 在ACE中执行操作失败（Failed to perform an action in ACE）。
12. 注入手势事件失败（Failed to inject a gesture event）。

处理步骤

系统服务工作异常，请稍后重试。若无效，请尝试重启无障碍扩展应用或重启设备。

#### 9300003 不具备执行该操作的无障碍权限

错误信息

No accessibility permission to perform the operation.

错误描述

当应用执行了用户在启用无障碍扩展应用时没有开启的辅助操作时，方法将返回该错误码。

可能原因

该错误码表示应用不具备该操作的无障碍权限，可能原因是应用执行了用户在启用无障碍扩展应用时没有开启的辅助操作。

处理步骤

1. 尝试向用户提示请求执行无障碍辅助操作的必要性，并获取用户授权。
2. 重新启用无障碍扩展应用，并开启所需的辅助操作。

#### 9300004 属性不存在

错误信息

This property does not exist.

错误描述

当输入无障碍节点元素中不存在的属性时，方法将返回该错误码。

可能原因

该错误码表示输入了无效的无障碍节点元素的属性，即无障碍节点元素中不存在该属性。

处理步骤

检查无障碍节点元素中是否存在该属性。

#### 9300005 不支持该操作

错误信息

This action is not supported.

错误描述

当应用执行无障碍节点元素不支持的操作时，方法将返回该错误码。

可能原因

该错误码表示执行了无障碍节点元素不支持的操作。

处理步骤

确认该无障碍节点元素支持的操作列表中是否包含该操作。
