---
title: "Function Flow Runtime并发队列(C)"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ffrt-concurrency-concurrent-queue-c
format: md
---


## 概述

FFRT并发队列提供了设置任务优先级（Priority）和队列并发度的能力，使得队列中的任务能同时在多个线程上执行，获得更高的并行效果。

* **队列并发度**：通过队列最大并发度设置，可以控制同一时刻同时执行的任务数量。这有助于避免任务并发过多对系统资源造成冲击，从而保证系统的稳定性和性能。
* **任务优先级**：用户可以为每个任务设置优先级，不同的任务将严格按照优先级进行调度和执行。相同优先级的任务按照排队顺序执行，高优先级的任务将优先于低优先级的任务执行，确保关键任务能够及时处理。

## 示例：银行服务系统

举例实现一个银行服务系统，每个客户向系统提交一个服务请求，可以区分普通用户和VIP用户，VIP用户的服务请求可以优先得到执行。银行系统中有2个窗口，可以并行取出用户提交的服务请求办理。

可以利用FFRT的并行队列范式做如下建模：

* **排队逻辑**：并行队列。
* **服务窗口**：并行队列的并发度，同时也对应FFRT Worker数量。
* **用户等级**：并行队列任务优先级。

实现代码如下所示：

```
#include <cstdio>
#include <unistd.h>
#include "hilog/log.h"
#include "ffrt/ffrt.h" // 来自 OpenHarmony 第三方库 "@ppd/ffrt"

#undef LOG_TAG
#define LOG_TAG "ConcurrentTag"
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/FunctionFlowRuntime/ConcurrentQueue/entry/src/main/cpp/concurrent_queue.h#L18-L26" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：concurrent_queue.h</a></div>


```
const int SLEEP_TIME = 100 * 1000;
const int BANK_CONCURRENCY = 2;

ffrt_queue_t CreateBankSystem(const char *name, int concurrency)
{
    ffrt_queue_attr_t queue_attr;
    (void)ffrt_queue_attr_init(&queue_attr);
    ffrt_queue_attr_set_max_concurrency(&queue_attr, concurrency);

    // 创建一个并发队列
    ffrt_queue_t queue = ffrt_queue_create(ffrt_queue_concurrent, name, &queue_attr);

    // 队列创建完后需要销毁队列属性
    ffrt_queue_attr_destroy(&queue_attr);
    if (!queue) {
        OH_LOG_INFO(LOG_APP, "create queue failed");
        return NULL;
    }

    OH_LOG_INFO(LOG_APP, "create bank system successfully");
    return queue;
}

void DestroyBankSystem(ffrt_queue_t queue_handle)
{
    ffrt_queue_destroy(queue_handle);
    OH_LOG_INFO(LOG_APP, "destroy bank system successfully");
}

void BankBusiness(void *arg)
{
    usleep(SLEEP_TIME);
    const char *data = (const char *)arg;
    OH_LOG_INFO(LOG_APP, "saving or withdraw for %{public}s", data);
}

// 封装提交队列任务函数
ffrt_task_handle_t CommitRequest(ffrt_queue_t bank, void (*func)(void *), const char *name,
    ffrt_queue_priority_t level, int delay)
{
    ffrt_task_attr_t task_attr;
    (void)ffrt_task_attr_init(&task_attr);
    ffrt_task_attr_set_name(&task_attr, name);
    ffrt_task_attr_set_queue_priority(&task_attr, level);
    ffrt_task_attr_set_delay(&task_attr, delay);

    return ffrt_queue_submit_h_f(bank, func, (void*)name, &task_attr);
}

// 封装取消队列任务函数
int CancelRequest(ffrt_task_handle_t request)
{
    return ffrt_queue_cancel(request);
}

// 封装等待队列任务函数
void WaitForRequest(ffrt_task_handle_t task)
{
    ffrt_queue_wait(task);
}

int ConcurrentQueueCExec()
{
    ffrt_queue_t bank = CreateBankSystem("Bank", BANK_CONCURRENCY);
    if (!bank) {
        printf("create bank system failed\n");
        OH_LOG_INFO(LOG_APP, "create bank system failed");
        return -1;
    }

    ffrt_task_handle_t task1 = CommitRequest(bank, BankBusiness, "customer1", ffrt_queue_priority_low, 0);
    ffrt_task_handle_t task2 = CommitRequest(bank, BankBusiness, "customer2", ffrt_queue_priority_low, 0);
    // VIP享受更优先的服务
    ffrt_task_handle_t task3 = CommitRequest(bank, BankBusiness, "customer3 VIP", ffrt_queue_priority_high, 0);
    ffrt_task_handle_t task4 = CommitRequest(bank, BankBusiness, "customer4", ffrt_queue_priority_low, 0);
    ffrt_task_handle_t task5 = CommitRequest(bank, BankBusiness, "customer5", ffrt_queue_priority_low, 0);

    // 取消客户4的服务
    CancelRequest(task4);

    // 等待所有的客户服务完成
    WaitForRequest(task5);
    DestroyBankSystem(bank);

    ffrt_task_handle_destroy(task1);
    ffrt_task_handle_destroy(task2);
    ffrt_task_handle_destroy(task3);
    ffrt_task_handle_destroy(task4);
    ffrt_task_handle_destroy(task5);
    return 0;
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/FunctionFlowRuntime/ConcurrentQueue/entry/src/main/cpp/concurrent_queue.cpp#L17-L110" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：concurrent_queue.cpp</a></div>


![](./img/dc8a4112.png)

ffrt\_queue\_submit\_h\_f接口可以接收裸函数指针任务作为参数，如果任务存在前后处理可以参见[ffrt\_alloc\_auto\_managed\_function\_storage\_base](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ffrt-api-guideline-c#ffrt_alloc_auto_managed_function_storage_base)函数查看如何构造任务结构体。

## 接口说明

上述样例中涉及到主要的FFRT的接口包括：

| 名称 | 描述 |
| --- | --- |
| [ffrt\_queue\_create](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ffrt-api-guideline-c#ffrt_queue_t) | 创建队列。 |
| [ffrt\_queue\_destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ffrt-api-guideline-c#ffrt_queue_t) | 销毁队列。 |
| [ffrt\_task\_attr\_set\_queue\_priority](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ffrt-api-guideline-c#ffrt_task_attr_t) | 设置队列任务优先级。 |
| [ffrt\_queue\_attr\_set\_max\_concurrency](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ffrt-api-guideline-c#ffrt_queue_attr_t) | 设置并发队列的并发度。 |
| [ffrt\_queue\_submit\_h\_f](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ffrt-api-guideline-c#ffrt_queue_t) | 向队列提交一个任务。  **说明**：从API version 20开始，支持该接口。 |

![](./img/3782e100.png)

* 如何使用FFRT C++ API详见：[FFRT C++接口三方库使用指导](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ffrt-development-guideline#using-ffrt-c-api-1)。
* 使用FFRT C接口或C++接口时，都可以通过FFRT C++接口三方库简化头文件包含，即使用#include "ffrt/ffrt.h"头文件包含语句。

## 约束限制

1. ffrt\_queue\_attr\_t必须先调用ffrt\_queue\_attr\_init初始化后再设置/获取属性，不再使用后需要显式调用ffrt\_queue\_attr\_destroy释放资源。
2. ffrt\_queue\_t必须在进程退出前显式调用ffrt\_queue\_destroy释放资源。
3. 并发队列最大并发度建议控制在合理范围内，配置过大超过Worker线程数没有意义，配置过小可能导致系统资源利用率不足。
