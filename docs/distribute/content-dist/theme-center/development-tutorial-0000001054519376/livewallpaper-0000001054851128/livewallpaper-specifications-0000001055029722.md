---
title: "动态壁纸设计指导及规范"
displayed_sidebar: contentDistSidebar
original_url: /docs/distribute/content-dist/theme-center/development-tutorial-0000001054519376/livewallpaper-0000001054851128/livewallpaper-specifications-0000001055029722
upstream_id: distribute/content-dist/theme-center/development-tutorial-0000001054519376/livewallpaper-0000001054851128/livewallpaper-specifications-0000001055029722
last_sync: 2026-06-07
sync_hash: d14f6817
---
import MergeTable from '@site/src/components/MergeTable';

# 动态壁纸设计指导及规范

## 1. 动态壁纸介绍

动态壁纸又可称为视频壁纸，可设置成手机的锁屏或者桌面背景。

## 2. 制作流程

步骤一：使用设计相关软件进行制图。

步骤二：根据“[动态壁纸测试规范](/docs/distribute/content-dist/theme-center/content-release-0000001054679366/content-review-specifications-0000001054679960/content-check-pecifications-0000001057301166/livewallpaper-test-0000001057818928#section209567011516)”自检自查。

步骤三：根据“[动态壁纸上传指南](/docs/distribute/content-dist/theme-center/content-release-0000001054679366/uploadguide-0000001054359939/livewallpaper-upload-0000001055068451#section12967112911314)”上传到开发者联盟主题中心。

## 3. 动态壁纸制作规范

### 3.1 动态壁纸规范

1. 视频格式：MP4。
2. 视频编码：H.264。
3. 视频时长：视频建议在20秒以内，预览视频建议在15秒以内。
4. 视频帧率：建议为25-30fps。
5. 视频总帧数：

   普通手机无限制；

   折叠屏手机的视频为600帧，详见[3.2 折叠屏手机的视频说明](#section042019417499)；

   平板的视频为600帧，详见[3.3 平板的视频说明](#section10460104118206)。




<MergeTable
  headers={['壁纸类型', '适配', '视频尺寸', '视频大小', '预览视频尺寸', '预览视频大小']}
  rows={
    [{ text: '动态壁纸', rowspan: 4, colspan: 1 }, '手机', 'W1080*H1920', '20MB以内', 'W1080*H1920', '10MB以内'],
    [null, '手机', 'W1080*H2340', '20MB以内', 'W1080*H2340', '10MB以内'],
    [null, '折叠屏手机', 'W2200*H2480', '80MB以内', 'W2200*H2480（展开态使用） W1148*H2480（折叠态使用）', '10MB以内'],
    [null, '平板', 'W1600*H2560', '20MB以内', 'W2560*H1600（横屏态使用） W1600*H2560（竖屏态使用）', '10MB以内']
  }
/>


![](./img/548cc19d2968.png)

1. 为保证预览效果，请提供能循环播放的视频，确保首尾衔接部分流畅，不会出现画面跳动或者闪烁。
2. 普通手机带有声音的动态壁纸，只需要一次上传，即可作为视频铃声和动态壁纸同时发布和呈现。

### 3.2 折叠屏手机的视频说明

<strong>1. 视频说明</strong>

折叠屏手机的视频尺寸为：W2200\*H2480，总帧数为600帧，分为两段：

0-300帧，是原始大小为W2200\*H2480的视频，用于展开态及后续展开过程态播放；

300-600帧，是原始大小为W1148\*H2480的视频，制作完成后将其拉伸至W2200\*H2480，用于折叠态X1/X2大屏播放。

* 图示说明

  ![](./img/f8613b5a4a67.png "点击放大")

* 示例视频

  [](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/publicContent/011/111/111/0000000000011111111.20250620110644.87767508085625246927823265737037:20260601215535:2800:C948D25926A77BCE87EB76EE722ABDAADA6C2CE0B472141BF1A64976D702384E.mp4)
* 示例视频0-300帧，用于展开态的播放效果：

  [](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/publicContent/011/111/111/0000000000011111111.20250620110644.55459364482211174045269822162684:20260601215535:2800:C2107B9D194347F5ECD0ACD65518B99F646ECEF538AF0BF7559482171C76F777.mp4)
* 示例视频300-600帧，用于折叠态的播放效果：

  [](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/publicContent/011/111/111/0000000000011111111.20250620110644.79342093955594440627797435938032:20260601215535:2800:02A5840D51C08BBC4C8FA8549D7BD5ACFB964AD12E4671CCA9E667E3CBB8B9A6.mp4)

  ![](./img/63ef709a8b5b.png)

  基于折叠屏手机的视频说明，建议按照以下步骤制作视频：

  1. 0-300帧：以W2200\*H2480制作视频，<strong>且每一帧都为关键帧（即有变化的帧）。</strong>
  2. 300-600帧：先以W1148\*H2480制作原始视频，制作完成后将其拉伸至W2200\*H2480。
  3. 最后将0-600帧合成一段W2200\*H2480的视频。

<strong>2. 预览视频说明</strong>

折叠屏手机需同时上传以下两种尺寸的预览视频：

* W2200\*H2480：展开态播放效果预览。

  [](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/publicContent/011/111/111/0000000000011111111.20250620110644.18281193607814537084310629652841:20260601215535:2800:48BC23FC2499465BEE8562C869D5347775561677FDB3040E323EB100BD8636AF.mp4)
* W1148\*H2480：折叠态播放效果预览。

  [](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/publicContent/011/111/111/0000000000011111111.20250620110644.36237780575810698929097267097025:20260601215535:2800:6FC51ACE6E1B9BBED0904A2101C0A218B1B4BFC29B8168DF6C08B6334BC0DF3C.mp4)

### 3.3 平板的视频说明

<strong>1. 视频说明</strong>

平板的视频尺寸为：W1600\*H2560，总帧数为600帧，分为两段：

0-300帧，是原始大小为W2560\*H1600的视频，制作完成后将其拉伸压缩至W1600\*H2560，用于横屏态播放；

300-600帧，是原始大小为W1600\*H2560的视频，用于竖屏态播放。

* 图示说明

  ![](./img/03acf7097305.png "点击放大")

* 示例视频

  [](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/publicContent/011/111/111/0000000000011111111.20250620110644.88948970726530126773029367059321:20260601215535:2800:5D811B29E5085EA2A46D8ADBCC83CCA6CC8092F53FDE44ED22B5924EC4FF5659.mp4)
* 示例视频0-300帧，用于横屏态的播放效果：

  [](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/publicContent/011/111/111/0000000000011111111.20250620110645.32074846073292587489039164461952:20260601215535:2800:6D16CAD667D25AA536A46DD701C38A6B1107F62C04BDD5ECAE07FF165AC7B115.mp4)
* 示例视频300-600帧，用于竖屏态的播放效果：

  [](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/publicContent/011/111/111/0000000000011111111.20250620110645.95469528740363966302730158371465:20260601215535:2800:D20060114C5B7E6487072E883803551EEFC9CEF8AEC4A191DBDFA5391D43CF18.mp4)

  ![](./img/ca35152b6c83.png)

  基于平板的视频说明，建议按照以下步骤制作视频：

  1. 0-300帧：以W2560\*H1600制作原始视频，<strong>且每一帧都为关键帧（即有变化的帧）</strong>，制作完成后将其拉伸缩放至W1600\*H2560<strong>，</strong>。
  2. 300-600帧：以W1600\*H2560制作视频，<strong>且每一帧都为关键帧（即有变化的帧）</strong>。
  3. 最后将0-600帧合成一段W1600\*H2560的视频。

<strong>2. 预览视频说明</strong>

平板需同时上传以下两种尺寸的预览视频：

* W2560\*H1600：横屏态播放效果预览。

  [](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/publicContent/011/111/111/0000000000011111111.20250620110645.59644868814289302746146000203664:20260601215535:2800:20D3987761A16B2ACB950FE8CAE98B4AE601642CC7B5CEE3A6C7DF7668D3FC52.mp4)
* W1600\*H2560：竖屏态播放效果预览。

  [](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/publicContent/011/111/111/0000000000011111111.20250620110645.62363027432304622852355759745558:20260601215535:2800:28A276BCE29786D97F653FA461EA62F7CA17F6CEE96A55F0918337E27AC27EDB.mp4)