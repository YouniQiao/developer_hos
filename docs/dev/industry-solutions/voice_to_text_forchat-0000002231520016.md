---
title: "聊天页-语音输入文字"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/voice_to_text_forchat-0000002231520016
---

## 场景介绍

语音输入文字是社交通讯类应用的高频使用场景之一，如用户需要快速发送聊天消息。

本示例基于[speechRecognizer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/hms-ai-speechrecognizer)实现语音输入文字功能及文本和图片混合发送的效果。

## 效果预览

![](./img/229ef9a1.gif "点击放大")

## 实现思路

1. 点击输入栏左边按钮选择语音输入模式，长按输入语音，即同步调用startSpeechRecognizer识别语音，通过fillPlaceHolder将语音识别文字的结果写入弹窗，具体实现请查看完整示例代码。

   ```
   // 长按输入语音
   startSpeechRecognizer();
   // 开始语音识别，并监听语音，返回结果
   SpeechRecognizer.start(callback: (srr: speechRecognizer.SpeechRecognitionResult);
   // 启动监听
   startListening(recognizerParams);
   // 监听器识别到结果后，通过回调函数将识别的结果返回
   setListener.onResult(sessionId: string, result: speechRecognizer.SpeechRecognitionResult);
   ```
2. 长按结束后，调用stopSpeechRecognizer结束语音识别，将识别文字结果输出至聊天输入框，具体实现请查看完整示例代码。

   ```
   // 长按结束后
   stopSpeechRecognizer();
   // 识别结果输出至输入框
   fillPlaceHolder();
   // 完成识别
   SpeechRecognizer.stop();
   // 释放语音识别引擎资源
   speechRecognizer.shutdown();
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 权限说明

获取麦克风权限：[ohos.permission.MICROPHONE](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all-user#ohospermissionmicrophone)。

## 工程目录

```
├──entry/src/main/ets                            // 代码区
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──pages
│  │  └──Chat.ets                                // 聊天页
│  ├──utils
│  │  ├──AudioRecorder.ets                       // 音频录制
│  │  ├──Interface.ets                           // 枚举接口
│  │  ├──RequestPermission.ets                   // 请求权限
│  │  └──SpeechRecognizer.ets                    // 语音识别
│  └──view
│     ├──CustomRichEditor.ets                    // 图文混排编辑
│     ├──EmojiView.ets                           // 表情包页面
│     ├──SpeechView.ets                          // 语音识别页面
│     └──VoiceToTextView.ets                     // 语音识别弹窗
└──entry/src/main/resources                      // 应用资源目录
```

## 参考文档

[speechRecognizer（语音识别）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/hms-ai-speechrecognizer)

## 代码下载

[聊天页-语音输入文字示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260225101002.25119030302158036711976290717707%3A50001231000000%3A2800%3A155E56A116B4413713438E5B473EE361079FFDC13F6BCD229F2E73271074D8BE.zip?needInitFileName=true)
