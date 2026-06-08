---
displayed_sidebar: appDevSidebar
title: "生理周期"
original_url: /docs/dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-data-type/health-healthsequence/health-menstrualcycle
format: md
upstream_id: dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-data-type/health-healthsequence/health-menstrualcycle
last_sync: 2026-06-07
sync_hash: 0fef5e84
---
记录用户在女性生理周期时间段（默认28天）内一天的身体状态，每一条数据代表该女性用户当天的状态。

![](./img/e60993e2.png)

从API version 24开始，支持该数据类型开放。

健康记录类型如下：

| **健康记录类型常量** | **描述** | 数据来源 |
| --- | --- | --- |
| [healthSequenceHelper.menstrualCycle.DATA\_TYPE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthsequencehelper#常量-2) | 生理周期 | 运动健康App |

## OAuth权限

联盟卡片申请的权限名称：健康数据 > 生殖健康数据

## 生理周期数据类型

* 字段定义：[healthSequenceHelper.menstrualCycle.Fields](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthsequencehelper#fields-2)

| **字段**列表 | 描述 | **类型** | 可选/必选 | 单位 | 取值范围 |
| --- | --- | --- | --- | --- | --- |
| status | 当日状态 | number | M | - | 取值参考如下：  0：普通状态  100：普通经期  101：经期第一天  102：经期最后一天  2：排卵日  300：普通预测经期  301：预测经期第一天  302：预测经期最后一天  400：普通易孕期  401：易孕期第一天  402：易孕期最后一天  403：易孕期只有一天 |
| remarks | 备注 | string | O | - | - |

## 关联的明细数据说明

* 字段定义：[healthSequenceHelper.menstrualCycle.DetailFields](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthsequencehelper#detailfields-2)

| **字段**列表 | 描述 | **类型** | 可选/必选 |
| --- | --- | --- | --- |
| menstrualFlow | 月经流量采样 | [MenstrualFlow](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#menstrualflow)[] | O |
| dysmenorrhea | 痛经程度采样 | [Dysmenorrhea](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#dysmenorrhea)[] | O |
| physicalSymptoms | 身体状况采样 | [PhysicalSymptoms](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#physicalsymptoms)[] | O |
| mood | 心情采样 | [Mood](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#mood)[] | O |
| skin | 皮肤状态采样 | [Skin](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#skin)[] | O |
| sexuality | 性行为采样 | [Sexuality](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#sexuality)[] | O |
| ovulationTestPaper | 排卵试纸采样 | [OvulationTestPaper](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#ovulationtestpaper)[] | O |
| cervicalMucus | 私处分泌物采样 | [CervicalMucus](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#cervicalmucus)[] | O |

## 数据开放说明

| 开放API | 查询及时性 | 数据源 |
| --- | --- | --- |
| [healthStore.readData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthstorereaddata-2) | 小时级 | 运动健康App |
