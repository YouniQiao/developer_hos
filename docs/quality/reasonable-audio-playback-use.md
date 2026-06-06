---
title: "后台音频播放合理使用"
original_url: https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-reasonable-audio-playback-use
---

import SourceLink from '@site/src/components/SourceLink';

# 后台音频播放合理使用

申请音频播放长时任务的应用退到后台后，禁止不写入数据或写入静音数据等恶意行为。

## 约束

系统检测到应用后台行为时，将挂起或清理应用。

## 示例

```
import { fileIo } from '@kit.CoreFileKit';
// ...

const uiContext: UIContext | undefined = AppStorage.get('uiContext');
let context = uiContext!.getHostContext()!;

async function read() {
  const bufferSize: number = await audioRenderer.getBufferSize();
  let path = context.filesDir; // Path of the file

  const filePath = path + '/voice_call_data.wav'; // Prohibit the file from being played silently
  try {
    let file: fileIo.File = fileIo.openSync(filePath, fileIo.OpenMode.READ_ONLY); // Open the file
    let buf = new ArrayBuffer(bufferSize);
    let readSize: number = await fileIo.read(file.fd, buf); // Read the file content
  } catch (error) {
    let err = error as BusinessError;
    hilog.warn(0x000, 'testTag', `openSync or read failed, code=${err.code}, message=${err.message}`);
  }
}
```
<SourceLink name="Audio.ets" url="https://gitcode.com/harmonyos_samples/BestPracticeSnippets/blob/master/BptaUseSoftware/entry/src/main/ets/pages/Audio.ets#L21-L71" />

有关AudioRenderer开发相关接口的使用，详情可以参考[使用AudioRenderer开发音频播放功能](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-audiorenderer-for-playback)。
