---
title: "llm_engine.h"
upstream_id: "harmonyos-references/cannkit-llm-engine"
catalog: "harmonyos-references"
content_hash: "83c2d9ee057c"
synced_at: "2026-07-17T16:20:03.863443"
---

# llm_engine.h

#### 概述

定义用于LLM模型推理的API。

引用文件： <CANNKit/llm_engine.h>

库： 新增libcann_llm_engine.so

系统能力： SystemCapability.AI.CANN.LLMEngine

起始版本： 6.1.1(24)

相关模块： [CANN](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit)

#### 汇总

#### [h2]类型定义

| 名称 | 描述 |
| --- | --- |
| typedef struct [HMS_LLMEngine_Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmengine_context) [HMS_LLMEngine_Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmengine_context) | 定义LLM引擎上下文的别名。 |
| typedef struct [HMS_LLMEngine_Executor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmengine_executor) [HMS_LLMEngine_Executor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmengine_executor) | LLM 引擎执行器。 |
| typedef struct [HMS_LLMEngine_Prompt](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmengine_prompt) [HMS_LLMEngine_Prompt](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmengine_prompt) | LLM引擎文本输入。 |
| typedef void(* [callbackFunctionType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#callbackfunctiontype)) (const [HMS_LLMEngine_Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmengine_context) *) | 生成回调函数。 |

#### [h2]枚举

| 名称 | 描述 |
| --- | --- |
| [HMS_LLMEngine_InferPerfMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmengine_inferperfmode) { [HMS_LLMENGINE_INFERPERF_UNSET](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit) = 0, [HMS_LLMENGINE_INFERPERF_LOW](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit), [HMS_LLMENGINE_INFERPERF_MIDDLE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit), [HMS_LLMENGINE_INFERPERF_HIGH](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit), [HMS_LLMENGINE_INFERPERF_EXTREME_HIGH](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit) } | 推断性能模式。 |

#### [h2]函数

| 名称 | 描述 |
| --- | --- |
| [HMS_LLMEngine_Executor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmengine_executor) * [HMS_LLMEngineExecutor_CreateFromExecutorJson](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmengineexecutor_createfromexecutorjson) (const char *jsonFile) | 通过JSON配置文件创建LLM引擎上下文句柄。 |
| void [HMS_LLMEngine_Context_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmengine_context_destroy) ([HMS_LLMEngine_Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmengine_context) **ctx) | 销毁LLM引擎上下文。 |
| [HMS_LLMEngine_Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmengine_context) * [HMS_LLMEngineContext_CreateFromContextJson](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmenginecontext_createfromcontextjson) (const char *jsonFile) | 通过JSON配置文件创建LLM引擎执行器句柄。 |
| void [HMS_LLMEngineExecutor_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmengineexecutor_destroy) ([HMS_LLMEngine_Executor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmengine_executor) **executor) | 销毁一个LLM引擎执行器，该执行器内存释放。 |
| [HMS_LLMEngine_Prompt](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmengine_prompt) * [HMS_LLMEnginePrompt_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmengineprompt_create) (void) | 创建一个LLM引擎提示句柄。 |
| OH_NN_ReturnCode [HMS_LLMEnginePrompt_SetText](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmengineprompt_settext) ([HMS_LLMEngine_Prompt](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmengine_prompt) *prompt, const char *text) | 设置文本输入。 |
| OH_NN_ReturnCode [HMS_LLMEnginePrompt_SetTokenId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmengineprompt_settokenid) ([HMS_LLMEngine_Prompt](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmengine_prompt) *prompt, int32_t *tokenIds, uint32_t tokenNum) | 设置输入的token ID。 |
| void [HMS_LLMEnginePrompt_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmengineprompt_destroy) ([HMS_LLMEngine_Prompt](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmengine_prompt) **prompt) | 销毁LLM引擎提示词句柄。 |
| OH_NN_ReturnCode [HMS_LLMEngineContext_SetOnOneTokenGenerateDoneFunc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmenginecontext_setononetokengeneratedonefunc) ([HMS_LLMEngine_Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmengine_context) *ctx, [callbackFunctionType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#callbackfunctiontype) func) | 设置生成token时触发的回调函数。 |
| OH_NN_ReturnCode [HMS_LLMEngineContext_SetOnAllTokensGenerateDoneFunc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmenginecontext_setonalltokensgeneratedonefunc) ([HMS_LLMEngine_Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmengine_context) *ctx, [callbackFunctionType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#callbackfunctiontype) func) | 设置所有token生成完毕时触发的回调函数。 |
| OH_NN_ReturnCode [HMS_LLMEngineContext_SetOnGenerateAsyncFailed](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmenginecontext_setongenerateasyncfailed) ([HMS_LLMEngine_Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmengine_context) *ctx, [callbackFunctionType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#callbackfunctiontype) func) | 设置生成失败时的回调函数。 |
| OH_NN_ReturnCode [HMS_LLMEngineContext_GetOneGenerationLen](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmenginecontext_getonegenerationlen) (const [HMS_LLMEngine_Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmengine_context) *ctx, uint32_t *len) | 获取生成文本片段的长度。 |
| OH_NN_ReturnCode [HMS_LLMEngineContext_GetOneGeneration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmenginecontext_getonegeneration) (const [HMS_LLMEngine_Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmengine_context) *ctx, char *generation, uint32_t len) | 获取生成的文本片段。 |
| OH_NN_ReturnCode [HMS_LLMEngineContext_GetAllGenerationLen](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmenginecontext_getallgenerationlen) (const [HMS_LLMEngine_Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmengine_context) *ctx, uint32_t *len) | 获取所有生成文本的总长度。 |
| OH_NN_ReturnCode [HMS_LLMEngineContext_GetAllGeneration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmenginecontext_getallgeneration) (const [HMS_LLMEngine_Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmengine_context) *ctx, char *generation, uint32_t len) | 获取所有生成的文本。 |
| OH_NN_ReturnCode [HMS_LLMEngineContext_GetOneTokenGeneration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmenginecontext_getonetokengeneration) (const [HMS_LLMEngine_Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmengine_context) *ctx, int32_t *genToken) | 获取生成的tokenid。 |
| OH_NN_ReturnCode [HMS_LLMEngineContext_GetAllTokenGenerationLen](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmenginecontext_getalltokengenerationlen) (const [HMS_LLMEngine_Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmengine_context) *ctx, uint32_t *len) | 获取所有已生成tokenid的长度。 |
| OH_NN_ReturnCode [HMS_LLMEngineContext_GetAllTokenGeneration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmenginecontext_getalltokengeneration) (const [HMS_LLMEngine_Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmengine_context) *ctx, int32_t *genToken, uint32_t len) | 获取所有已生成的tokenid。 |
| OH_NN_ReturnCode [HMS_LLMEngineExecutor_Generate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmengineexecutor_generate) ([HMS_LLMEngine_Executor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmengine_executor) *executor, [HMS_LLMEngine_Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmengine_context) *ctx, const [HMS_LLMEngine_Prompt](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmengine_prompt) *prompt) | 执行同步LLM推理。 |
| OH_NN_ReturnCode [HMS_LLMEngineExecutor_GenerateAsync](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmengineexecutor_generateasync) ([HMS_LLMEngine_Executor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmengine_executor) *executor, [HMS_LLMEngine_Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmengine_context) *ctx, const [HMS_LLMEngine_Prompt](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmengine_prompt) *prompt) | 异步执行LLM推理。 |
| OH_NN_ReturnCode [HMS_LLMEngineExecutor_SetInferencePerfMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmengineexecutor_setinferenceperfmode) ([HMS_LLMEngine_Executor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmengine_executor) *executor, [HMS_LLMEngine_InferPerfMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmengine_inferperfmode) inferPerfMode) | 设置推理性能模式。 |
| OH_NN_ReturnCode [HMS_LLMEngineContext_GetTotalTimeMs](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmenginecontext_gettotaltimems) (const [HMS_LLMEngine_Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmengine_context) *ctx, double *ms) | 生成总耗时（单位：ms）。 |
| OH_NN_ReturnCode [HMS_LLMEngineContext_GetPrefillTimeMs](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmenginecontext_getprefilltimems) (const [HMS_LLMEngine_Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmengine_context) *ctx, double *ms) | 预填充时间（单位：ms）。 |
| OH_NN_ReturnCode [HMS_LLMEngineContext_GetDecodeTimeMs](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmenginecontext_getdecodetimems) (const [HMS_LLMEngine_Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmengine_context) *ctx, double *ms) | 解码耗时（单位：ms）。 |
| OH_NN_ReturnCode [HMS_LLMEngineContext_GetInputTokenCount](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmenginecontext_getinputtokencount) (const [HMS_LLMEngine_Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmengine_context) *ctx, uint64_t *count) | 输入token数量。 |
| OH_NN_ReturnCode [HMS_LLMEngineContext_GetOutputTokenCount](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmenginecontext_getoutputtokencount) (const [HMS_LLMEngine_Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_llmengine_context) *ctx, uint64_t *count) | 输出token数量。 |
