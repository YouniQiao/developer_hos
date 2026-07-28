---
title: "cryptoFramework错误码"
upstream_id: "harmonyos-references/errorcode-crypto-framework"
catalog: "harmonyos-references"
content_hash: "3a63ebe541ed"
synced_at: "2026-07-28T16:50:24.415241"
---

# cryptoFramework错误码

![](./img/note_3.0-zh-cn.png) 以下仅介绍本模块特有错误码，通用错误码请参考[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

#### 17620001 内存操作失败

错误信息

Memory operation failed.

错误描述

内存操作失败。

可能原因

当前系统内存分配失败。

处理步骤

1. 检查当前系统功能是否正常。
2. 业务检查数据是否超长，导致系统无法分配内存。

#### 17620002 获取Native对象失败或参数转换失败

错误信息

Failed to obtain the native object or convert parameters.

错误描述

获取Native对象失败或参数转换失败。

可能原因

系统出现的不可预期的错误。

处理步骤

检查当前系统功能是否正常。

#### 17620003 参数检查失败

错误信息

Parameter check failed.

错误描述

参数检查失败。

可能原因

输入的参数超出了规格范围，如长度、值等。

处理步骤

检查当前输入的参数是否在支持的范围内。

#### 17620004 无效的函数调用

错误信息

Invalid function call.

错误描述

无效的函数调用。

可能原因

当前操作不支持当前函数调用。

处理步骤

检查当前函数调用是否合理。

#### 17630001 密码操作错误

错误信息

Crypto operation error.

错误描述

密码操作错误。

可能原因

加解密算法框架与三方算法库交互时，出现错误。

处理步骤

检查该接口或相关联接口输入参数的正确性。

AES解密失败可参考[AES解密失败返回错误码17630001](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-aes-decryption-error-faq)。
