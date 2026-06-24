---
title: "数据共享错误码"
upstream_id: "harmonyos-references/errorcode-datashare"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:47:11.467810"
---

# 数据共享错误码

![](./img/note_3.0-zh-cn.png) 以下仅介绍本模块特有错误码，通用错误码请参考[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

#### 15700000 内部错误

错误信息

Inner error.

错误描述

内部错误。

可能原因

优先查看错误日志，通过日志可以详细了解错误原因，主要有以下几种：

1. 内部状态异常。
2. 错误地使用接口。
3. 权限配置错误。
4. 系统错误，如空指针、内存不足、数据服务异常重启、I/O错误、IPC异常、JS引擎异常等。

处理步骤

1. 开发者排查是否存在对象关闭后再使用。
2. 开发者排查是否按接口文档正确使用接口。
3. 开发者排查权限配置是否正确。
4. 尝试重试，如果依然无法解决，可以提示用户重启应用、升级应用或升级设备版本。

#### 15700014 配置共享参数错误

错误信息

The parameter format is incorrect or the value range is invalid.

错误描述

1. 参数格式错误。
2. 参数值超出取值范围。

可能原因

1. URI长度超过256字节。
2. proxyData的value长度超过4096字节。
3. 接口传入的URI数组长度超过32。
4. 接口传入的proxyData数组长度超过32。
5. URI格式校验失败。

处理步骤

1. 检查接口传入的URI数组或者proxyData数组中是否有URI的长度超过256字节。
2. 检查接口传入的proxyData数组中是否有proxyData的value长度超过4096字节。
3. 检查接口传入的URI数组的长度是否超过32。
4. 检查接口传入的proxyData数组的长度是否超过32。
5. 检查接口传入的URI数组或者proxyData数组中的URI是否满足格式校验： URI的固定格式为"datashareproxy://{bundleName}/{path}"，其中bundleName为配置发布方应用的bundleName，path可随意填写。
