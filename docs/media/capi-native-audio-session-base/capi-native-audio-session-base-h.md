---
title: "native_audio_session_base.h"
upstream_id: "harmonyos-references/capi-native-audio-session-base-h"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:51:56.848835"
---

# native_audio_session_base.h

#### 概述

声明音频会话基础数据结构。

引用文件： <ohaudio/native_audio_session_base.h>

库： libohaudio.so

系统能力： SystemCapability.Multimedia.Audio.Core

起始版本： 24

相关模块： [OHAudio](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio)

#### 汇总

#### [h2]结构体

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [OH_AudioSession_Strategy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiosession-strategy) | OH_AudioSession_Strategy | 音频会话策略。 |

#### [h2]枚举

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [OH_AudioSession_BehaviorFlags](#oh_audiosession_behaviorflags) | OH_AudioSession_BehaviorFlags | 音频会话行为标志。 |
| [OH_AudioSession_ConcurrencyMode](#oh_audiosession_concurrencymode) | OH_AudioSession_ConcurrencyMode | 音频并发模式。 |

#### 枚举类型说明

#### [h2]OH_AudioSession_BehaviorFlags

```
enum OH_AudioSession_BehaviorFlags
```
 描述

音频会话行为标志。

起始版本： 24

| 枚举项 | 描述 |
| --- | --- |
| DEFAULT_BEHAVIOR = 0x00000000 | 默认行为，用于清除会话行为标记。 **起始版本：** 24 |
| MUTE_WHEN_INTERRUPTED = 0x00000002 | 当系统需要停止或暂停音频流时，执行强制静音替代。 调用[OH_AudioSessionManager_SetBehavior](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-session-manager-h#oh_audiosessionmanager_setbehavior)接口配置该行为时，必须同步调用[OH_AudioSessionManager_SetScene](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-session-manager-h#oh_audiosessionmanager_setscene)接口，否则配置将无法生效。 在音频会话场景下，当音频流静音或恢复时，应用将分别收到[OH_AudioSession_StateChangeHint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-session-manager-h#oh_audiosession_statechangehint).AUDIO_SESSION_STATE_CHANGE_HINT_MUTE与[OH_AudioSession_StateChangeHint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-session-manager-h#oh_audiosession_statechangehint).AUDIO_SESSION_STATE_CHANGE_HINT_UNMUTE的通知。 在OH_AudioRenderer和OH_AudioCapturer场景下，当音频流静音或恢复时，应用将分别收到[OH_AudioInterrupt_Hint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiointerrupt_hint).AUDIOSTREAM_INTERRUPT_HINT_MUTE与[OH_AudioInterrupt_Hint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiointerrupt_hint).AUDIOSTREAM_INTERRUPT_HINT_UNMUTE的通知。 **起始版本：** 24 |

#### [h2]OH_AudioSession_ConcurrencyMode

```
enum OH_AudioSession_ConcurrencyMode
```
 描述

音频并发模式。

从API version 24开始，此枚举由native_audio_session_manager.h移动至此头文件。

在API version 24之前，使用该枚举请引用native_audio_session_manager.h头文件；从API version 24开始，引用native_audio_session_manager.h或native_audio_session_base.h均可正常使用该枚举。

起始版本： 12

| 枚举项 | 描述 |
| --- | --- |
| CONCURRENCY_DEFAULT = 0 | 默认使用系统策略。 |
| CONCURRENCY_MIX_WITH_OTHERS = 1 | 当前应用与其他应用混音播放。 |
| CONCURRENCY_DUCK_OTHERS = 2 | 当前应用播放时会压低其他正在播放的应用音量。 |
| CONCURRENCY_PAUSE_OTHERS = 3 | 当前应用播放时会暂停其他正在播放的应用。 |
