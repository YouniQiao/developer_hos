---
title: "融合短距服务子系统错误码"
upstream_id: "harmonyos-references/errorcode-fusionconnectivity"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:48.268829"
---

# 融合短距服务子系统错误码

![](./img/note_3.0-zh-cn.png) 以下仅介绍本模块特有错误码，通用错误码请参考[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

#### 34900001 设备未注册

错误信息

The device is not bound.

错误描述

该设备未注册。

可能原因

应用未调用[bindDevice](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-fusionconnectivity-partneragent#partneragentbinddevice)注册设备。

处理步骤

应用调用[bindDevice](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-fusionconnectivity-partneragent#partneragentbinddevice)注册设备。

#### 34900003 设备未配对

错误信息

The device is not paired.

错误描述

设备未配对。

可能原因

应用注册的设备未经过蓝牙配对。

处理步骤

执行设备蓝牙配对流程。

#### 34900004 设备地址已被注册

错误信息

The device address has already been bound with PartnerAgentExtensionAbility.

错误描述

该设备地址已经注册过[PartnerAgentExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-fusionconnectivity-partneragentextensionability)。

可能原因

应用重复注册一个地址。

处理步骤

应用调用[unbindDevice](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-fusionconnectivity-partneragent#partneragentunbinddevice)解注册当前设备，再重新注册[bindDevice](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-fusionconnectivity-partneragent#partneragentbinddevice)新的Ability。

#### 34900005 蓝牙关闭

错误信息

Bluetooth disabled.

错误描述

蓝牙关闭。

可能原因

蓝牙处于关闭状态。

处理步骤

打开蓝牙。

#### 34900099 操作失败

错误信息

Operation failed.

错误描述

操作失败。

可能原因

因系统原因导致当前操作失败。

处理步骤

请重试该操作。
