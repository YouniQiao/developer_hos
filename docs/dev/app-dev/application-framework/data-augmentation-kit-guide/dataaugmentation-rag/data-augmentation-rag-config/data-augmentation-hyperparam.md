---
title: "配置超参"
original_url: /docs/dev/app-dev/application-framework/data-augmentation-kit-guide/dataaugmentation-rag/data-augmentation-rag-config/data-augmentation-hyperparam
format: md
upstream_id: dev/app-dev/application-framework/data-augmentation-kit-guide/dataaugmentation-rag/data-augmentation-rag-config/data-augmentation-hyperparam
last_sync: 2026-06-07
sync_hash: a7ba5941
---
## 功能介绍

超参是RAG工作流的配置参数，用于控制工作流的行为与组件结构。超参可由开发者根据任务需求、数据特性及经验进行配置，合理的超参设置对RAG的性能和效果有重要影响。开发者可以通过在指定应用[资源目录](/docs/dev/app-dev/getting-started/resource-access/resource-categories-and-access#资源目录)放置hyper\_param.json配置文件，实现自定义超参导入。

可供配置的超参列表：

| 超参名称 | 超参类型 | 超参描述 |
| --- | --- | --- |
| retrieveTimeoutSeconds | size\_t | 检索器超时时间。  取值范围：3~20。  默认值：20。  单位：s。 |
| llmChunkTimeoutSeconds | size\_t | 流式输出超时时间。  取值范围：2~30。  默认值：30。  单位：s。 |
| llmOutputTimeoutSeconds | size\_t | 大模型超时时间。  取值范围：10~200。  默认值：120。  单位：s。 |
| defaultHisLen | size\_t | 指代消除历史记录轮数。  取值范围：1~8。  默认值：1。  单位：轮。 |
| summaryDefaultHisLen | size\_t | 问题回答历史记录轮数。  取值范围：1~8。  默认值：1。  单位：轮。 |
| maxQueryLength | size\_t | 用户问题最大长度。  推荐范围：100~1000。  默认值：1000。  单位：字节。 |
| maxRetrievalLength | size\_t | 拼接后的检索片段最大长度。  推荐范围：3000~20000。  默认值：16000。  单位：字节。 |
| llmOutputLengthLimit | size\_t | 大模型单次问答输出长度。  推荐范围：2000~10000。  默认值：8192。  单位：字节。 |
| historyLengthLimit | size\_t | 拼接历史记录长度。  推荐范围：3000~10000。  默认值：8000。  单位：字节。 |

## 约束限制

1. 配置文件中的超参名称必须和给定的名称严格一致才能生效。未配置或配置失败的超参使用默认值代替。
2. 对于取值区间的5个超参，retrieveTimeoutSeconds、llmChunkTimeoutSeconds、llmOutputTimeoutSeconds、defaultHisLen、summaryDefaultHisLen的传入值会受到校验。当配置的超参小于限制区间下限值时，使用下限值；当大于上限值时，使用上限值。
3. 对于推荐区间的4个超参，maxQueryLength、maxRetrievalLength、llmOutputLengthLimit、historyLengthLimit的值仅为推荐值，RAG不会对传入值进行校验，如果超过了推荐范围，可能会导致效果下降。

## 开发步骤

在应用[资源目录](/docs/dev/app-dev/getting-started/resource-access/resource-categories-and-access#资源目录)的rawfile/arkdata/rag下创建hyper\_param.json文件，若工程中无目标目录则递归创建。

超参配置文件hyper\_param.json示例如下，实际文件内容请根据业务需要进行配置。

```
{
    "retrieveTimeoutSeconds": 5,
    "llmChunkTimeoutSeconds": 30,
    "llmOutputTimeoutSeconds": 120,
    "defaultHisLen": 1,
    "summaryDefaultHisLen": 1,
    "maxQueryLength": 1000,
    "maxRetrievalLength": 16000,
    "llmOutputLengthLimit": 8192,
    "historyLengthLimit": 8000
}
```
