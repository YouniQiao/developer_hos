---
title: "业务介绍"
original_url: /docs/distribute/agc/agc-help-apms-0000002235870062/agc-help-apms-introduction-0000002236333914
format: md
upstream_id: distribute/agc/agc-help-apms-0000002235870062/agc-help-apms-introduction-0000002236333914
last_sync: 2026-06-07
sync_hash: 8efdd011
---
#### 简介

应用性能监测服务（Application Performance Management Service，简称APMS）是AppGallery Connect（简称AGC）向开发者提供的一个现网质量监测解决方案。它能帮助您监测现网应用的崩溃（CPP CRASH、JS ERROR）、应用无响应（APP FREEZE）等稳定性指标，以及应用的启动、页面加载、耗电等性能指标。它提供每个问题发生时的环境信息、堆栈信息等分析数据，并支持基于堆栈关键行进行准确的同类异常汇聚，让您轻松准确快速发现、识别、定位和解决问题。它还支持问题标记、指标告警等辅助能力，帮助您更高效的监测、处理质量问题。

#### 亮点

* APMS服务具有免集成、覆盖全面、实时上报、统计准确的特点。
* APMS服务以系统服务方式执行，不需应用内SDK/组件，开通即可使用。
* APMS的异常信息采集动作不受应用初始化、组件加载影响，全面覆盖应用启动、运行、前/后台、异常终止各阶段、状态的异常。
* APMS的异常信息上传动作由系统服务执行，与应用运行状态无关，不依赖应用重新启动，实时上报。
* APMS服务基于全面的异常类型、实时上报的异常数据提供准确的异常、性能指标度量，支持多维度的灵活查询分析。

#### 主要功能

| 模块 | 功能描述 |
| --- | --- |
| [异常管理](https://developer.huawei.com/consumer/cn/doc/app/agc-help-apms-crash-0000002236333918) | 实时监控应用或元服务的CPP CRASH、JS ERROR、OOM、PROCESS KILL、APP FREEZE、RESOURCE LEAK六大异常指标。它提供每个崩溃发生时的堆栈信息、系统负载、日志文件等分析数据，并可基于堆栈关键行进行同类异常汇聚，帮助您及时发现和精准定位异常问题。 |
| [性能管理](https://developer.huawei.com/consumer/cn/doc/app/agc-help-apms-performance-0000002236333926) | 实时监控应用或元服务的启动耗时、页面切换、页面加载、丢帧、功耗等性能指标。它提供每个性能问题发生时的详细分析数据，并支持根据问题发生时间、应用版本、设备型号等进行问题过滤，帮助您快速界定问题范围并分析解决。 |
