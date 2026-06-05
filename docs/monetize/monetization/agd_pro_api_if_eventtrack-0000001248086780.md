---
title: "EventTrack"
displayed_sidebar: monetizationSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/monetize/agd_pro_api_if_eventtrack-0000001248086780
format: md
---



| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| event | O | `String` | 事件标识。  除播放完成事件，其余上报时需包含已播放时长的宏参数(PLAYEDDURATION)。  单位：秒   * feed\_play：视频手动播放第一帧时上报。 * feed\_auto\_play：视频自动播放第一帧时上报。 * feed\_break：视频播放一帧后、停止视频播放、未完成视频播放。 * feed\_play\_over：视频播放完成。 |
| trackUrl | O | `String` | 对应事件的跟踪地址。  格式如下：   ``` https://xxxxxx.xxxx.com/agd/mediareport?event=xxx&param=xxxxx&detailId=xxxxx&playedDuration=_PLAYEDDURATION_ ``` |
