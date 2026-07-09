---
title: "exerciseRealtimeHelper (实时运动数据类型常量)(Lite)"
upstream_id: "harmonyos-references/health-api-exerciserealtimehelper-lite"
catalog: "harmonyos-references"
content_hash: "db6b46cccab9"
synced_at: "2026-07-09T01:01:21.028363"
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

#### 实时运动-公共

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| REALTIME_KEY_ACTIVE_TIME | string | 锻炼时长（运动过程中身体处于活跃状态时长），单位：s 。 |
| REALTIME_KEY_AEROBIC_TRAINING_STRESS | string | 单次运动对身体有氧系统产生的训练刺激等级，刺激等级越高刺激取值越大，取值范围：[0.0, 5.0]。 |
| REALTIME_KEY_ANAEROBIC_TRAINING_STRESS | string | 单次运动对身体无氧系统产生的训练刺激等级，刺激等级越高刺激取值越大，取值范围：[0.0, 5.0]。 |
| REALTIME_KEY_HEART_RATE | string | 心率，单位：bpm。 |
| REALTIME_KEY_DURATION | string | 运动时间，单位：s。 |
| REALTIME_KEY_TOTAL_CALORIES | string | 总消耗热量，单位：cal。 |
| REALTIME_KEY_ACTIVE_CALORIE | string | 活动热量，单位：cal。 |

#### 实时运动-羽毛球

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| REALTIME_KEY_AVG_SHOT_SPEED | string | 平均拍速，单位：km/h。 |
| REALTIME_KEY_SHOTS | string | 挥拍次数。 |
| REALTIME_KEY_MAX_CONTINUOUS_RALLY | string | 最长连续对打回合数。 |
| REALTIME_KEY_FOREHAND_STROKE | string | 正手击球次数，单位：次。 |
| REALTIME_KEY_BACKHAND_STROKE | string | 反手击球次数，单位：次。 |
| REALTIME_KEY_SMASH | string | 杀球次数，单位：次。 |
| REALTIME_KEY_HIGH_CLEAR | string | 高远球次数，单位：次。 |
| REALTIME_KEY_MAX_SHOT_SPEED | string | 最大拍速，单位：km/h。 |
| REALTIME_KEY_OVERHAND_STROKE | string | 上手击球次数，单位：次。 |
| REALTIME_KEY_UNDERHAND_STROKE | string | 下手击球次数，单位：次。 |

#### 实时运动-爬楼

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| REALTIME_KEY_TOTAL_STEPS | string | 运动步数，单位：步。 |
| REALTIME_KEY_FLOORS | string | 楼层数。 |
| REALTIME_KEY_AVG_FLOOR_SPEED | string | 爬楼速度，单位：层/分钟。 |

#### 实时运动-网球

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| REALTIME_KEY_FOREHAND | string | 正手击球次数，单位：次。 |
| REALTIME_KEY_BACKHAND | string | 反手击球次数，单位：次。 |
| REALTIME_KEY_SWING_TIMES | string | 挥拍次数，单位：次。 |
| REALTIME_KEY_MAX_CONTINUOUS_RALLY | string | 最长连续对打回合数。 |

#### 实时运动-匹克球

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| REALTIME_KEY_FOREHAND | string | 正手击球次数，单位：次。 |
| REALTIME_KEY_BACKHAND | string | 反手击球次数，单位：次。 |
| REALTIME_KEY_SWING_TIMES | string | 挥拍次数，单位：次。 |
| REALTIME_KEY_MAX_CONTINUOUS_RALLY | string | 最长连续对打回合数。 |

#### 实时运动-足球

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| REALTIME_KEY_GOALS_TIMES | string | 进球次数，单位：次。 |
| REALTIME_KEY_ASSISTS_TIMES | string | 助攻次数。 |
