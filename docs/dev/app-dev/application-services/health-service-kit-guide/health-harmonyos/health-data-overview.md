---
displayed_sidebar: appDevSidebar
title: "数据开放总览"
original_url: /docs/dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-data-overview
format: md
upstream_id: dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-data-overview
last_sync: 2026-06-07
sync_hash: 6f84b6a4
---
当前提供如下Health Service Kit数据，开发者可申请对应数据权限进行应用开发。开放等级中，![](./img/f6404efc.png)表示该数据权限为高阶数据，暂不对个人开发者开放。如需使用，请使用企业账号重新注册并申请权限；![](./img/fdbb81ca.png)表示该数据权限为基础数据，个人及企业开发者均可申请查询/使用。

![](./img/66ca9eb9.png)

* 数据及时性体验依赖用户使用方式，若穿戴设备未连接至手机蓝牙、华为运动健康App未设置后台保活等情况下，将无法保证数据及时性体验。开发者需考虑数据及时性体验各类极端情况，综合判断合适的数据使用场景，确保给用户提供的产品/服务的稳定性，保证用户体验。
* 相关数据类型对应权限参考[权限说明](/docs/dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-data-type/health-permission-description)。

**表1** **采样数据**

| 数据子类 | 数据项 | 开放等级 | 数据及时性 | 支持读 | 支持写 |
| --- | --- | --- | --- | --- | --- |
| [日常活动](/docs/dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-data-type/health-samplepoint/health-daily-activities) | 步数、热量、距离等日常活动数据 | ![](./img/a65b7a19.png) | 小时级 | Y | Y |
| [心率](/docs/dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-data-type/health-samplepoint/health-heart-rate) | 动态心率、静息心率、心率变异性 | ![](./img/c3039a5f.png) | 小时级 | Y | Y |
| [血氧](/docs/dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-data-type/health-samplepoint/health-blood-oxygen) | 瞬时血氧饱和度 | ![](./img/78450244.png) | 小时级 | Y | Y |
| [压力](/docs/dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-data-type/health-samplepoint/health-pressure) | 压力得分 | ![](./img/2d48537c.png) | 小时级 | Y | Y |
| [体温](/docs/dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-data-type/health-samplepoint/health-body-temperature) | 体温、皮肤体温 | ![](./img/6bfd87f5.png) | 分钟级 | Y | Y |
| [血压](/docs/dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-data-type/health-samplepoint/health-blood-pressure) | 收缩压、舒张压、脉搏等 | ![](./img/76fbfa39.png) | 分钟级 | Y | Y |
| [体重](/docs/dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-data-type/health-samplepoint/health-weight) | 体重、体脂、BMI等 | ![](./img/1182e00c.png) | 分钟级 | Y | Y |
| [身高](/docs/dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-data-type/health-samplepoint/health-height) | 身高 | ![](./img/c2300228.png) | 分钟级 | Y | Y |
| [情绪](/docs/dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-data-type/health-samplepoint/health-emotion) | 情绪数据 | ![](./img/fa98bb4f.png) | 小时级 | Y | Y |

**表2** **健康记录和锻炼记录**

| 数据子类 | 数据项 | 开放等级 | 数据及时性 | 支持读 | 支持写 |
| --- | --- | --- | --- | --- | --- |
| [睡眠](/docs/dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-data-type/health-healthsequence/health-sleeprecord) | 睡眠分期采样数据、睡眠记录 | ![](./img/6e35a057.png) | 分钟级 | Y | Y |
| [生理周期](/docs/dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-data-type/health-healthsequence/health-menstrualcycle) | 月经量、痛经程度、身体状况、心情、皮肤状态、排卵检测结果、阴道斑点 | ![](./img/7dd6b2c0.png) | 小时级 | Y | N |
| [锻炼记录数据](/docs/dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-data-type/health-exercisesequence/health-exercisesequence-summary) | 跑步、骑行、健走、跳绳、跑步机等运动和健身类型 | ![](./img/216699e2.png) | 分钟级 | Y | Y |
