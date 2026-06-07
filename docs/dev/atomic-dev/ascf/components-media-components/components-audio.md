---
title: "audio"
original_url: /docs/dev/atomic-dev/ascf/components-media-components/components-audio
format: md
---


用于播放音频文件并控制其播放状态的组件。

**起始版本：** 1.0.16

**关联文档：** [has.createAudioContext](/docs/dev/atomic-dev/ascf/apis-media/apis-audio#hascreateaudiocontext)

## 属性

| 名称 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| id | string | - | 否 | audio 组件的唯一标识符。 |
| src | string | - | 否 | 要播放音频的资源地址。目前支持在线地址、项目路径、沙箱路径。 |
| loop | boolean | false | 否 | 是否循环播放。 |
| controls | boolean | false | 否 | 是否显示默认控件。 |
| poster | string | - | 否 | 默认控件上的音频封面的图片资源地址。目前支持在线地址、项目路径、沙箱路径。 |
| name | string | - | 否 | 默认控件上的音频名字。 |
| author | string | - | 否 | 默认控件上的作者名字。 |
| binderror | function | - | 否 | 当发生错误时触发 error 事件，detail = \&#123;errMsg:MediaError.code\&#125;。 |
| bindplay | function | - | 否 | 当开始/继续播放时触发play事件。 |
| bindpause | function | - | 否 | 当暂停播放时触发 pause 事件。 |
| bindtimeupdate | function | - | 否 | 当播放进度改变时触发 timeupdate 事件，detail = \&#123;currentTime, duration\&#125;。 |
| bindended | function | - | 否 | 当播放到末尾时触发 ended 事件。 |

**binderror的返回信息event.detail：**

| 字段 | 说明 |
| --- | --- |
| errMsg | 报错信息。  返回值说明：  'MEDIA\_ERR\_ABORTED'：获取资源被用户禁止。  'MEDIA\_ERR\_NETWORK'：网络错误。  'MEDIA\_ERR\_DECODE'：解码错误。  'MEDIA\_ERR\_SRC\_NOT\_SUPPORTED'：不合适资源。 |

**bindtimeupdate的返回信息event.detail：**

| 字段 | 说明 |
| --- | --- |
| currentTime | 当前播放位置，单位：秒。 |
| duration | 总时长，单位：秒。 |

## 示例

hxml文件：

```
<audio
  id="myAudio"
  poster="{{ posterImg }}"
  src="{{ srcStr }}"
  controls
  loop
  binderror="errorHandle"
  bindplay="playHandle"
  bindpause="pauseHandle"
  bindtimeupdate="timeupdateHandle"
  bindended="endedHandle"
></audio>
```

js文件：

```
Page({
  data: {
    posterImg: 'https://www.example.com/example.jpg', // 此处仅为样例，请开发者更换为可用图片资源地址
    srcStr: 'https://www.example.com/test.mp3', // 此处仅为样例，请开发者更换为可用音频资源地址
  },
  errorHandle(e) {
    console.error('audio error', e.detail);
  },
  playHandle(e) {
    console.info('audio play', e);
  },
  pauseHandle(e) {
    console.info('audio pause', e);
  },
  timeupdateHandle(e) {
    console.info('audio timeupdate', e.detail);
  },
  endedHandle(e) {
    console.info('audio ended', e);
  }
});
```

效果图：

![](./img/015e5963.png)
