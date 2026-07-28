---
title: "AIP"
upstream_id: "harmonyos-references/dataaugmentation-capi-aip"
catalog: "harmonyos-references"
content_hash: "633e5c3e682d"
synced_at: "2026-07-28T16:50:05.811333"
---

# AIP

#### 概述

智慧化数据平台（AIP）为应用提供构建端侧智慧化解决方案，提供向量化、知识检索和知识问答的能力。

起始版本： 6.0.0(20)

使用前提： 使用该模块前，需确认设备系统版本不低于6.0.0(20)，并确保设备支持端侧AI计算能力。

#### 汇总

#### [h2]文件

| 名称 | 描述 |
| --- | --- |
| [aip_error_code.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-aip-error-code) | 描述错误码信息。 |

#### [h2]类型定义

| 名称 | 描述 |
| --- | --- |
| typedef enum [OH_Aip_ErrCode](#oh_aip_errcode-1) [OH_Aip_ErrCode](#oh_aip_errcode-1) | 错误码。 |

#### [h2]枚举

| 名称 | 描述 |
| --- | --- |
| [OH_Aip_ErrCode](#oh_aip_errcode-1) { AIP_OK = 0, AIP_E_EXEC_ERR = 1021200005, AIP_E_OUT_OF_RANGE = 1021200006, AIP_E_NO_SUCH_FIELD = 1021200007, AIP_E_OVER_LIMIT = 1021200008, AIP_E_CONDITION_OVER_LIMIT = 1021200009, AIP_E_INVALID_ARGS = 1021200010, AIP_E_EMBEDDING_ERR = 1021200012 } | 错误码信息。 |

#### 类型定义说明

#### [h2]OH_Aip_ErrCode

```
typedef enum OH_Aip_ErrCode OH_Aip_ErrCode;
```
 描述

错误码信息。

起始版本： 6.0.0(20)

#### 枚举类型说明

#### [h2]OH_Aip_ErrCode

```
enum OH_Aip_ErrCode;
```
 描述

错误码信息。

起始版本： 6.0.0(20)

| 枚举项 | 描述 |
| --- | --- |
| AIP_OK = 0 | 操作成功。 |
| AIP_E_EXEC_ERR = 1021200005 | 执行报错。执行过程中发生内部运行异常时返回。 |
| AIP_E_OUT_OF_RANGE = 1021200006 | 下标越界。输入参数超出允许范围时返回，例如索引超出数组长度。 |
| AIP_E_NO_SUCH_FIELD = 1021200007 | 不存在该字段。请求的字段名在当前记录中未找到时返回。 |
| AIP_E_OVER_LIMIT = 1021200008 | 数组超过最大长度512字节。数组长度超出限制时返回。 |
| AIP_E_CONDITION_OVER_LIMIT = 1021200009 | 条件数量超过上限1。检索条件数量超过上限时返回。 |
| AIP_E_INVALID_ARGS = 1021200010 | 无效参数。传入空指针或参数类型不匹配时返回。 |
| AIP_E_EMBEDDING_ERR = 1021200012 | 无法生成嵌入向量。模型加载失败或输入内容不支持向量化时返回。 |
