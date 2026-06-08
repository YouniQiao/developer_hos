---
title: "音频资源合理使用"
original_url: /docs/quality/reasonable-audio-use
upstream_id: /docs/quality/reasonable-audio-use
last_sync: 2026-06-07
sync_hash: 6bf40f6f
---
# 音频资源合理使用

无长时任务的应用退到后台时，禁止使用麦克风和扬声器。

## 约束

NA

## 示例

### 播音场景（audioRenderer）

```ts
import { UIAbility } from '@kit.AbilityKit';
import { audio } from '@kit.AudioKit';
import { BusinessError } from '@kit.BasicServicesKit';

// ...

export default class EntryAbility extends UIAbility {

  // Create an AudioRenderer based on the service requirements at the foreground
  onForeground(): void {
    audio.createAudioRenderer(audioRendererOptions, ((err: BusinessError) => {}));
  }

  onBackground(): void {
    // Return to the background to stop or pause
    audioRenderer.stop((err: BusinessError) => {});
  }
}
```
<div class="source-link-wrapper"><a class="source-link" href="https://gitcode.com/harmonyos_samples/BestPracticeSnippets/blob/master/BptaUseResources/entry/src/main/ets/pages/music/AudioRenderer.ets#L7-L51">AudioRenderer.ets</a></div>

### 播音场景（AVPlayer）

```ts
import { UIAbility } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

// ...

export default class EntryAbility extends UIAbility {
  // ...
  onForeground(): void {
    //Playing according to service requirements in the foreground
    avPlayer.play()
      .catch((err: BusinessError) => {
        hilog.error(0x000, 'testTag', `avPlayer play failed, code=${err.code}, message=${err.message}`)
      })
  }

  onBackground(): void {
    // Return to the background to stop playing or pause
    avPlayer.stop() // Or pause();
      .catch((err: BusinessError) => {
        hilog.error(0x000, 'testTag', `avPlayer stop failed, code=${err.code}, message=${err.message}`)
      })
  }
}
```
<div class="source-link-wrapper"><a class="source-link" href="https://gitcode.com/harmonyos_samples/BestPracticeSnippets/blob/master/BptaUseResources/entry/src/main/ets/pages/music/AvPlayer.ets#L13-L39">AvPlayer.ets</a></div>

### 播音场景（OpenSL ES）

```cpp
//The foreground scene starts to play
SLPlayItfplayItf=nullptr;
(*pcmPlayerObject)->GetInterface(pcmPlayerObject,SL_IID_PLAY,&playItf);
(*playItf)->SetPlayState(playItf,SL_PLAYSTATE_PLAYING);
// Stop playing the background scene
(*playItf)->SetPlayState(playItf,SL_PLAYSTATE_STOPPED);
(*pcmPlayerObject)->Destroy(pcmPlayerObject);
(*engineObject)->Destroy(engineObject);
```
<div class="source-link-wrapper"><a class="source-link" href="https://gitcode.com/HarmonyOS_Samples/BestPracticeSnippets/blob/master/BptaUseResources/entry/src/main/cpp/OpenSL.cpp#L21-L28">OpenSL.cpp</a></div>

### 播音场景（OHAudio）

```cpp
//Construct the audio stream to play
OH_AudioRenderer*audioRenderer;
ret=OH_AudioStreamBuilder_GenerateRenderer(builder,&audioRenderer);

//The foreground scene starts to play
ret=OH_AudioRenderer_Start(audioRenderer);
// Stop playing the background scene
ret=OH_AudioRenderer_Stop(audioRenderer);
```
<div class="source-link-wrapper"><a class="source-link" href="https://gitcode.com/HarmonyOS_Samples/BestPracticeSnippets/blob/master/BptaUseResources/entry/src/main/cpp/OpenSL.cpp#L37-L44">OpenSL.cpp</a></div>

### 播音场景（SoundPool）

```
import { fileIo } from '@kit.CoreFileKit';
import { media } from '@kit.MediaKit';
import { BusinessError } from '@kit.BasicServicesKit';

const SoundPool = async () => {

  //Construct the audio stream to play
  await fileIo.open('/test_01.mp3', fileIo.OpenMode.READ_ONLY).then((file: fileIo.File) => {
    console.info("filefd:" + file.fd);
    uri = 'fd://' + (file.fd).toString()
  }) // '/test_01.mp3' is used as an example. The path of the file needs to be transferred
    .catch((err: BusinessError) => {
      hilog.error(0x000, 'testTag', `avPlayer stop failed, code=${err.code}, message=${err.message}`);
    })
  await soundPool.load(uri)
    .then((soundId: number) => {
      //The foreground scene starts to play
      soundPool.play(soundId)
        .then((data: number) => {
          streamId = data;
          hilog.info(0x000, 'testTag', 'setPreferredOrientation success');
        })
        .catch((err: BusinessError) => {
          hilog.error(0x000, 'testTag', `soundPool play failed, code=${err.code}, message=${err.message}`);
        })
      //Stop playing in the background scenario: soundPool.stop (streamId);
    })
    .catch((err: BusinessError) => {
      hilog.error(0x000, 'testTag', `soundPool load failed, code=${err.code}, message=${err.message}`);
    })
}
```
<div class="source-link-wrapper"><a class="source-link" href="https://gitcode.com/harmonyos_samples/BestPracticeSnippets/blob/master/BptaUseResources/entry/src/main/ets/pages/music/AvPlayer.ets#L6-L78">AvPlayer.ets</a></div>

有关音频播放开发相关接口的使用，详情可以参考[音频播放](/docs/dev/app-dev/media/audio-kit/audio-playback)。

### 录音场景

```ts
import { UIAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { audio } from '@kit.AudioKit';
// ...
export default class EntryAbility extends UIAbility {
  // ...

  onForeground(): void {
    //Apply for the resources required by the system, or reapply for the resources released in onBackground ()
    audio.createAudioCapturer(audioCapturerOptions, (err, data) => {
      if (err) {
        console.error(`InvokecreateAudioCapturerfailed,codeis${err.code},messageis${err.message}`);
      } else {
        console.info('InvokecreateAudioCapturersucceeded.');
      }
    });
  }

  onBackground(): void {
    //Release resources when the UI is invisible
    audioCapturer.stop((err: BusinessError) => {});
    //Or pause();
  }
}
```
<div class="source-link-wrapper"><a class="source-link" href="https://gitcode.com/harmonyos_samples/BestPracticeSnippets/blob/master/BptaUseResources/entry/src/main/ets/pages/music/Recording.ets#L7-L57">Recording.ets</a></div>

有关音频录制开发相关接口的使用，详情可以参考[音频录制](/docs/dev/app-dev/media/audio-kit/audio-recording)。
