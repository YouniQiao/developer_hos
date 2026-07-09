---
title: "@ohos.file.AlbumPickerComponent (Album Picker组件)"
upstream_id: "harmonyos-references/ohos-file-albumpickercomponent"
catalog: "harmonyos-references"
content_hash: "7ed29f18dc76"
synced_at: "2026-07-09T01:00:47.453014"
---

# @ohos.file.AlbumPickerComponent (Album Picker组件)

应用可以在布局中嵌入AlbumPickerComponent组件，通过此组件，应用无需申请权限，即可访问公共目录中的相册列表。

需配合[PhotoPickerComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-file-photopickercomponent)一起使用，用户通过AlbumPickerComponent组件选择对应相册并通知PhotoPickerComponent组件刷新为对应相册的图片和视频。

![](./img/note_3.0-zh-cn.png)

- 该组件从API version 12开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
- 该组件不支持[同层渲染](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-same-layer)。

#### 导入模块

```
import { AlbumPickerComponent, AlbumPickerOptions, AlbumInfo, photoAccessHelper, EmptyAreaClickCallback } from '@kit.MediaLibraryKit';
```

#### 属性

支持[通用属性](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-attributes)。

#### AlbumPickerComponent

AlbumPickerComponent( {albumPickerOptions?: AlbumPickerOptions, onAlbumClick?: (albumInfo: AlbumInfo) => boolean, onEmptyAreaClick?: EmptyAreaClickCallback, albumPickerController?: AlbumPickerController })

应用可以在布局中嵌入AlbumPickerComponent组件，通过此组件，应用无需申请权限，即可访问公共目录中的相册列表。

装饰器类型：@Component

系统能力：SystemCapability.FileManagement.PhotoAccessHelper.Core

参数：

| 名称 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| albumPickerOptions | [AlbumPickerOptions](#albumpickeroptions) | 否 | AlbumPicker的配置信息。 **元服务API**：从API version 12开始，该接口支持在元服务中使用。 |
| onAlbumClick | (albumInfo: [AlbumInfo](#albuminfo)) => boolean | 否 | 用户选择某个相册时产生的回调事件，将相册uri给到应用。不对返回值做特殊处理。 **元服务API**：从API version 12开始，该接口支持在元服务中使用。 |
| onEmptyAreaClick13+ | [EmptyAreaClickCallback](#emptyareaclickcallback13) | 否 | 点击相册组件空白区域时产生的回调事件，并将该次点击通知给应用。 **元服务API**：从API version 13开始，该接口支持在元服务中使用。 |
| albumPickerController20+ | [AlbumPickerController](#albumpickercontroller20) | 否 | 应用可通过AlbumPickerController向组件发送数据。 **元服务API**：从API version 20开始，该接口支持在元服务中使用。 |

#### AlbumPickerOptions

Album Picker配置选项。

系统能力：SystemCapability.FileManagement.PhotoAccessHelper.Core

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| themeColorMode | [PickerColorMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-file-photopickercomponent#pickercolormode) | 否 | 是 | 相册页主题颜色，包括跟随系统、浅色模式以及深色模式，默认为跟随系统。 **元服务API**：从API version 12开始，该接口支持在元服务中使用。 |
| filterType13+ | [photoAccessHelper.PhotoViewMIMETypes](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-e#photoviewmimetypes) | 否 | 是 | 相册组件过滤参数，可筛选只显示图片、视频或者图片和视频。若未配置此参数，则某个具体相册中显示图片和视频类型的所有资源。 **元服务API**：从API version 13开始，该接口支持在元服务中使用。 |
| fontSize20+ | number | string | 否 | 是 | 字体大小，取值范围参考[fontSize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-text#fontsize)。 **元服务API**：从API version 20开始，该接口支持在元服务中使用。 |

#### EmptyAreaClickCallback13+

type EmptyAreaClickCallback = () => void

点击相册组件空白区域时产生的回调事件。

元服务API： 从API version 13开始，该接口支持在元服务中使用。

系统能力：SystemCapability.FileManagement.PhotoAccessHelper.Core

#### AlbumInfo

相册相关信息。

元服务API：从API version 12开始，该接口支持在元服务中使用。

系统能力：SystemCapability.FileManagement.PhotoAccessHelper.Core

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| uri | string | 否 | 是 | 相册的uri。 |
| albumName | string | 否 | 是 | 相册的名称。 |

#### AlbumPickerController20+

应用可通过AlbumPickerController向组件发送数据。

装饰器类型：@Observed

系统能力：SystemCapability.FileManagement.PhotoAccessHelper.Core

#### [h2]setFontSize20+

setFontSize(fontSize: number | string): void

应用可通过该接口设置相册列表的字体大小。

元服务API：从API version 20开始，该接口支持在元服务中使用。

系统能力：SystemCapability.FileManagement.PhotoAccessHelper.Core

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| fontSize | number | string | 是 | 字体大小，取值范围参考[fontSize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-text#fontsize)。 |

#### 示例

```
// xxx.ets
import { AlbumPickerComponent, AlbumPickerOptions, AlbumInfo, PickerColorMode, photoAccessHelper, EmptyAreaClickCallback } from '@kit.MediaLibraryKit';

@Entry
@Component
struct PickerDemo {
  albumPickerOptions: AlbumPickerOptions = new AlbumPickerOptions();
  private emptyAreaClickCallback: EmptyAreaClickCallback = (): void => this.onEmptyAreaClick();

  aboutToAppear() {
    this.albumPickerOptions.themeColorMode = PickerColorMode.AUTO;
    this.albumPickerOptions.filterType = photoAccessHelper.PhotoViewMIMETypes.IMAGE_VIDEO_TYPE;
  }
  
  private onAlbumClick(albumInfo: AlbumInfo): boolean {
    if (albumInfo?.uri) {
      // 通过pickerController向PhotoPickerComponent发送消息，通知其刷新。
    }
    if (albumInfo?.albumName) {
      // 基于获取到的albumName后续逻辑处理。
    }
    return true;
  }
  
  private onEmptyAreaClick(): void {
    // 点击组件空白区域回调。
  }

  build() {
    Stack() {
      AlbumPickerComponent({
        albumPickerOptions: this.albumPickerOptions,
        onAlbumClick:(albumInfo: AlbumInfo): boolean => this.onAlbumClick(albumInfo),
        onEmptyAreaClick: this.emptyAreaClickCallback,
      }).height('100%').width('100%')
    }
  }
}
```
