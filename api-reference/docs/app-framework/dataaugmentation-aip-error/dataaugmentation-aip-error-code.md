---
title: "aip_error_code.h"
upstream_id: "harmonyos-references/dataaugmentation-aip-error-code"
catalog: "harmonyos-references"
content_hash: "f837acd67313"
synced_at: "2026-07-28T16:50:05.821484"
---

# aip_error_code.h

#### 概述

提供与错误代码相关的接口。

引用文件： #include "dataaugmentation/aip_error_code.h"

库： libretrieval_ndk.so

系统能力： SystemCapability.DataAugmentation.Retrieval

起始版本： 6.0.0(20)

相关模块： [AIP](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi-aip)

#### 汇总

#### [h2]类型定义

| 名称 | 描述 |
| --- | --- |
| typedef enum [OH_Aip_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi-aip#oh_aip_errcode-1) [OH_Aip_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi-aip#oh_aip_errcode-1) | 错误码信息。 |

#### [h2]枚举

| 名称 | 描述 |
| --- | --- |
| OH_Aip_ErrCode { AIP_OK = 0, AIP_E_EXEC_ERR = 1021200005, AIP_E_OUT_OF_RANGE = 1021200006, AIP_E_NO_SUCH_FIELD = 1021200007, AIP_E_OVER_LIMIT = 1021200008, AIP_E_CONDITION_OVER_LIMIT = 1021200009, AIP_E_INVALID_ARGS = 1021200010, AIP_E_EMBEDDING_ERR = 1021200012 } | 错误码信息。各错误码含义如下： - AIP_OK：操作成功完成。 - AIP_E_EXEC_ERR：执行过程中发生错误，可能是内部运行异常导致。 - AIP_E_OUT_OF_RANGE：输入参数超出允许范围，例如索引越界。 - AIP_E_NO_SUCH_FIELD：请求的字段不存在，指定的字段名在当前记录中未找到。 - AIP_E_OVER_LIMIT：数组超过最大长度限制（512字节）。 - AIP_E_CONDITION_OVER_LIMIT：检索条件数量超过上限（1个）。 - AIP_E_INVALID_ARGS：传入的参数无效，例如空指针或参数类型不匹配。 - AIP_E_EMBEDDING_ERR：无法生成嵌入向量，可能是模型加载失败或输入内容不支持向量化。 |

```
// 示例：处理AIP接口错误码
int ret = OH_Retrieval_Retrieve(retriever, query, condition, NULL, &record);
if (ret != AIP_OK) {
    switch (ret) {
        case AIP_E_INVALID_ARGS:
            printf("参数无效，请检查输入参数。\n");
            break;
        case AIP_E_OUT_OF_RANGE:
            printf("参数超出范围，请检查索引值。\n");
            break;
        case AIP_E_EMBEDDING_ERR:
            printf("嵌入向量生成失败，请检查模型是否正常加载。\n");
            break;
        default:
            printf("操作失败，错误码：%d\n", ret);
            break;
    }
}
```
