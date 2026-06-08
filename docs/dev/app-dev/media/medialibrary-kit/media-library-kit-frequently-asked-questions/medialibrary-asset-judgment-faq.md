---
displayed_sidebar: appDevSidebar
title: "如何正确判断媒体资源类型"
original_url: /docs/dev/app-dev/media/medialibrary-kit/media-library-kit-frequently-asked-questions/medialibrary-asset-judgment-faq
format: md
upstream_id: dev/app-dev/media/medialibrary-kit/media-library-kit-frequently-asked-questions/medialibrary-asset-judgment-faq
last_sync: 2026-06-07
sync_hash: 1e470ca3
---
[Media Library Kit](/docs/dev/app-dev/media/medialibrary-kit/photoaccesshelper-overview)（媒体文件管理服务）提供了媒体资源的管理能力，开发者可以访问和管理相册中的媒体信息。针对不同的媒体资源类型，系统会提供相应的判断方式，本文档提供了相关示例方法以便开发者使用。

## 使用mimeType字段来判断资源类型

开发者可以通过判断mimeType的字符串前缀来区分媒体类型，具体判断方式如下：

* 当mimeType以'image/'开头时，表示该媒体文件为图片。
* 当mimeType以'video/'开头时，表示该媒体文件为视频。

**示例：**

```
function getMediaTypeByMimeType(mimeType: string): string {
  if (mimeType.startsWith('video/')) {
    return 'video';
  } else if (mimeType.startsWith('image/')) {
    return 'image';
  }
  return 'unknown';
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Picker/PickerMediaLibrarySample/entry/src/main/ets/common/utils/MediaLibraryPickerUtils.ets#L234-L243" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：MediaLibraryPickerUtils.ets</a></div>


## 通过URI判断连拍图资源

未重命名连拍照片的URI中包含特定标识，开发者可以通过检查URI中的关键字来判断是否为连拍图资源。

* 当URI同时包含burst和cover时，表示该资源为连拍封面。
* 当URI仅包含burst时，表示该资源为连拍照片（非封面）。
* 当URI中不包含burst关键字时，表示该资源为非连拍图。

**示例：**

```
function getBurstTypeByUri(uri: string): string {
  const hasBurst = uri.includes('burst');
  const hasCover = uri.includes('cover');

  if (hasBurst && hasCover) {
    return '连拍封面';
  } else if (hasBurst) {
    return '连拍照片';
  }
  return '非连拍图';
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Picker/PickerMediaLibrarySample/entry/src/main/ets/common/utils/MediaLibraryPickerUtils.ets#L249-L261" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：MediaLibraryPickerUtils.ets</a></div>
