---
title: "exerciseRealtimeHelper (实时运动数据类型常量)(Lite)"
upstream_id: "harmonyos-references/health-api-exerciserealtimehelper-lite"
catalog: "harmonyos-references"
content_hash: "b5d9f4bcc7e8"
synced_at: "2026-07-17T16:19:45.477715"
---

# exerciseRealtimeHelper (实时运动数据类型常量)(Lite)

本模块提供实时运动数据类型常量。

起始版本： 6.1.1(24)

#### 导入模块

```
import healthStore  from '@hms.health.store';
```
 ![](./img/note_3.0-zh-cn.png) 此模块为healthStore子模块，需通过healthStore.exerciseRealtimeHelper方式使用。

#### 常量

系统能力： SystemCapability.Health.HealthStore.Lite

起始版本： 6.1.1(24)

模型约束： 此接口仅可在FA模型下使用。

| 名称 | 类型 | 只读 | 说明 |
| --- | --- | --- | --- |
| REALTIME_KEY_ACTIVE_TIME | string | 是 | 锻炼时长（运动过程中身体处于活跃状态时长），单位：s 。 支持羽毛球、爬楼、网球、匹克球、足球。 |
| REALTIME_KEY_AEROBIC_TRAINING_STRESS | string | 是 | 单次运动对身体有氧系统产生的训练刺激等级，刺激等级越高刺激取值越大，取值范围：[0.0, 5.0]。 支持羽毛球、爬楼、网球、匹克球、足球。 |
| REALTIME_KEY_ANAEROBIC_TRAINING_STRESS | string | 是 | 单次运动对身体无氧系统产生的训练刺激等级，刺激等级越高刺激取值越大，取值范围：[0.0, 5.0]。 支持羽毛球、爬楼、网球、匹克球、足球。 |
| REALTIME_KEY_HEART_RATE | string | 是 | 心率，单位：bpm。 支持羽毛球、爬楼、网球、匹克球、足球。 |
| REALTIME_KEY_DURATION | string | 是 | 运动时间，单位：s。 支持羽毛球、爬楼、网球、匹克球、足球。 |
| REALTIME_KEY_TOTAL_CALORIES | string | 是 | 总消耗热量，单位：cal。 支持羽毛球、爬楼、网球、匹克球、足球。 |
| REALTIME_KEY_ACTIVE_CALORIE | string | 是 | 活动热量，单位：cal。 支持羽毛球、爬楼、网球、匹克球、足球。 |
| REALTIME_KEY_AVG_SHOT_SPEED | string | 是 | 平均拍速，单位：km/h。 支持羽毛球。 |
| REALTIME_KEY_SHOTS | string | 是 | 挥拍次数。 支持羽毛球。 |
| REALTIME_KEY_MAX_CONTINUOUS_RALLY | string | 是 | 最长连续对打回合数。 支持羽毛球、网球、匹克球。 |
| REALTIME_KEY_FOREHAND_STROKE | string | 是 | 正手击球次数，单位：次。 支持羽毛球。 |
| REALTIME_KEY_BACKHAND_STROKE | string | 是 | 反手击球次数，单位：次。 支持羽毛球。 |
| REALTIME_KEY_SMASH | string | 是 | 杀球次数，单位：次。 支持羽毛球。 |
| REALTIME_KEY_HIGH_CLEAR | string | 是 | 高远球次数，单位：次。 支持羽毛球。 |
| REALTIME_KEY_MAX_SHOT_SPEED | string | 是 | 最大拍速，单位：km/h。 支持羽毛球。 |
| REALTIME_KEY_OVERHAND_STROKE | string | 是 | 上手击球次数，单位：次。 支持羽毛球。 |
| REALTIME_KEY_UNDERHAND_STROKE | string | 是 | 下手击球次数，单位：次。 支持羽毛球。 |
| REALTIME_KEY_TOTAL_STEPS | string | 是 | 运动步数，单位：步。 支持爬楼。 |
| REALTIME_KEY_FLOORS | string | 是 | 楼层数。 支持爬楼。 |
| REALTIME_KEY_AVG_FLOOR_SPEED | string | 是 | 爬楼速度，单位：层/分钟。 支持爬楼。 |
| REALTIME_KEY_FOREHAND | string | 是 | 正手击球次数，单位：次。 支持网球、匹克球。 |
| REALTIME_KEY_BACKHAND | string | 是 | 反手击球次数，单位：次。 支持网球、匹克球。 |
| REALTIME_KEY_SWING_TIMES | string | 是 | 挥拍次数，单位：次。 支持网球、匹克球。 |
| REALTIME_KEY_GOALS_TIMES | string | 是 | 进球次数，单位：次。 支持足球。 |
| REALTIME_KEY_ASSISTS_TIMES | string | 是 | 助攻次数。 支持足球。 |
