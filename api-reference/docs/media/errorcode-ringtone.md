---
title: "ArkTS API 错误码"
upstream_id: "harmonyos-references/errorcode-ringtone"
catalog: "harmonyos-references"
content_hash: "7cd65b690649"
synced_at: "2026-07-09T01:00:49.101118"
---

# ArkTS API 错误码

![](./img/note_3.0-zh-cn.png) 以下仅介绍本模块特有错误码，通用错误码请参考[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

#### 1011600001 用户取消

错误信息

User canceled.

错误描述

用户拉起弹框后，未完成铃声设置功能，取消了弹框。

可能原因

用户操作原因。

处理步骤

尝试重试操作或请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。

#### 1011600002 文件不存在

错误信息

The media file is not found.

错误描述

传入的文件路径下不存在文件。

可能原因

文件未创建成功就调用了[ringtone.startRingtoneSetting](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ringtone-ringtone#ringtonestartringtonesetting)接口。

处理步骤

确保文件路径下传入了对应文件后再重试操作或请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。

#### 1011600003 弹出框错误

错误信息

Failed to show the dialog box.

错误描述

当发生系统内部错误时，将返回该错误码。

可能原因

其他未知错误。

处理步骤

尝试重试操作或请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。

#### 1011600004 调用系统接口失败

错误信息

Failed to call the system API.

错误描述

当发生系统内部错误时，将返回该错误码。

可能原因

其他未知错误。

处理步骤

尝试重试操作或请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。

#### 1011699999 系统内部错误

错误信息

System exception.

错误描述

当发生系统内部错误时，将返回该错误码。

可能原因

其他未知错误。

处理步骤

尝试重试操作或请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题。
