---
title: "网络资源低功耗建议"
original_url: https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-network-resources
---

import SourceLink from '@site/src/components/SourceLink';

# 网络资源低功耗建议

## 建议

应用资源预缓存时，建议不要提前下载过多资源，以免SOC功耗和Wi-Fi功耗劣化。以小视频播放场景为例，如果提前加载前后视频片源数量过多，会导致功耗增加。

## 开发步骤

提前下载视频资源可使用有prefetch前缀的预加载接口。例如，网页加载资源使用的示例如下：

```ts
// Load web resources in advance
this.webviewController.prefetchPage('url');
```
<SourceLink name="NetworkResourcePage.ets" url="https://gitcode.com/harmonyos_samples/BestPracticeSnippets/blob/master/RationalUseOfFrontEndResources/entry/src/main/ets/pages/NetworkResourcePage.ets#L30-L31" />

在小视频场景中，也有类似的预加载接口，用于加载当前片源的后续片源。建议预加载的片源数量不超过5个以优化功耗。
