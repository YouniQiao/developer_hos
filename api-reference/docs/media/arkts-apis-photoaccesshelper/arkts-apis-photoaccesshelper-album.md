---
title: "Interface (Album)"
upstream_id: "harmonyos-references/arkts-apis-photoaccesshelper-album"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:52:44.318155"
---

# Interface (Album)

Album extends [AbsAlbum](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-absalbum).

实体相册。

![](./img/note_3.0-zh-cn.png) 本模块首批接口从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

#### 导入模块

```
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

#### 属性

系统能力：SystemCapability.FileManagement.PhotoAccessHelper.Core

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| imageCount11+ | number | 是 | 是 | 相册中图片数量。 |
| videoCount11+ | number | 是 | 是 | 相册中视频数量。 |

#### commitModify

commitModify(callback: AsyncCallback<void>): void

更新相册属性修改到数据库中。使用callback异步回调。

需要权限：ohos.permission.WRITE_IMAGEVIDEO

系统能力：SystemCapability.FileManagement.PhotoAccessHelper.Core

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback | 是 | 回调函数。当相册属性修改成功，err为undefined，否则为错误对象。 |

错误码：

以下错误码的详细介绍请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-filemanagement)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types. |
| 201 | Permission denied. |
| 13900020 | Invalid argument. |
| 14000011 | System inner fail. |

示例：

phAccessHelper的创建请参考[photoAccessHelper.getPhotoAccessHelper](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-f#photoaccesshelpergetphotoaccesshelper)的示例使用。

```
import { dataSharePredicates } from '@kit.ArkData';

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  console.info('albumCommitModifyDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let albumFetchOptions: photoAccessHelper.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  let albumList: photoAccessHelper.FetchResult<photoAccessHelper.Album> = await phAccessHelper.getAlbums(photoAccessHelper.AlbumType.USER, photoAccessHelper.AlbumSubtype.USER_GENERIC, albumFetchOptions);
  if (albumList === undefined) {
    console.error('albumList is undefined');
    return;
  }
  let album: photoAccessHelper.Album = await albumList.getFirstObject();
  if (album === undefined) {
    console.error('album is undefined');
    return;
  }
  album.albumName = 'hello';
  album.commitModify((err) => {
    if (err !== undefined) {
      console.error(`commitModify failed with error: ${err.code}, ${err.message}`);
    } else {
      console.info('commitModify successfully');
    }
  });
}
```

#### commitModify

commitModify(): Promise<void>

更新相册属性修改到数据库中。使用Promise异步回调。

需要权限：ohos.permission.WRITE_IMAGEVIDEO

系统能力：SystemCapability.FileManagement.PhotoAccessHelper.Core

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，无返回结果。 |

错误码：

以下错误码的详细介绍请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-filemanagement)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types. |
| 201 | Permission denied. |
| 13900020 | Invalid argument. |
| 14000011 | System inner fail. |

示例：

phAccessHelper的创建请参考[photoAccessHelper.getPhotoAccessHelper](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-f#photoaccesshelpergetphotoaccesshelper)的示例使用。

```
import { dataSharePredicates } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  console.info('albumCommitModifyDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let albumFetchOptions: photoAccessHelper.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  let albumList: photoAccessHelper.FetchResult<photoAccessHelper.Album> = await phAccessHelper.getAlbums(photoAccessHelper.AlbumType.USER, photoAccessHelper.AlbumSubtype.USER_GENERIC, albumFetchOptions);
  if (albumList === undefined) {
    console.error('albumList is undefined');
    return;
  }
  let album: photoAccessHelper.Album = await albumList.getFirstObject();
  if (album === undefined) {
    console.error('album is undefined');
    return;
  }
  album.albumName = 'hello';
  album.commitModify().then(() => {
    console.info('commitModify successfully');
  }).catch((err: BusinessError) => {
    console.error(`commitModify failed with error: ${err.code}, ${err.message}`);
  });
}
```

#### addAssets(deprecated)

addAssets(assets: Array<PhotoAsset>, callback: AsyncCallback<void>): void

向用户相册中添加图片或视频，需预置相册和文件资源。使用callback异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 10开始支持，从API version 11开始废弃。建议使用[MediaAlbumChangeRequest.addAssets](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-mediaalbumchangerequest#addassets11)替代。

需要权限：ohos.permission.WRITE_IMAGEVIDEO

系统能力：SystemCapability.FileManagement.PhotoAccessHelper.Core

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| assets | Array | 是 | 待添加到相册中的图片或视频数组。 |
| callback | AsyncCallback | 是 | 回调函数。当添加图片或视频成功，err为undefined，否则为错误对象。 |

错误码：

以下错误码的详细介绍请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-filemanagement)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| 201 | Permission denied. |
| 13900020 | Invalid argument. |
| 14000011 | System inner fail. |

示例：

phAccessHelper的创建请参考[photoAccessHelper.getPhotoAccessHelper](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-f#photoaccesshelpergetphotoaccesshelper)的示例使用。

```
import { dataSharePredicates } from '@kit.ArkData';

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  try {
    console.info('addAssetsDemoCallback');
    let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
    let fetchOption: photoAccessHelper.FetchOptions = {
      fetchColumns: [],
      predicates: predicates
    };
    let albumFetchResult: photoAccessHelper.FetchResult<photoAccessHelper.Album> = await phAccessHelper.getAlbums(photoAccessHelper.AlbumType.USER, photoAccessHelper.AlbumSubtype.USER_GENERIC);
    let album: photoAccessHelper.Album = await albumFetchResult.getFirstObject();
    let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOption);
    let asset: photoAccessHelper.PhotoAsset = await fetchResult.getFirstObject();
    if (asset === undefined) {
      console.error('addAssetsDemoCallback asset is undefined');
      return;
    }
    album.addAssets([asset], (err) => {
      if (err === undefined) {
        console.info('album addAssets successfully');
      } else {
        console.error(`album addAssets failed with error: ${err.code}, ${err.message}`);
      }
    });
  } catch (err) {
    console.error(`addAssetsDemoCallback failed with error: ${err.code}, ${err.message}`);
  }
}
```

#### addAssets(deprecated)

addAssets(assets: Array<PhotoAsset>): Promise<void>

向用户相册添加图片或视频，需预置相册和文件资源。使用Promise异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 10开始支持，从API version 11开始废弃。建议使用[MediaAlbumChangeRequest.addAssets](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-mediaalbumchangerequest#addassets11)替代。

需要权限：ohos.permission.WRITE_IMAGEVIDEO

系统能力：SystemCapability.FileManagement.PhotoAccessHelper.Core

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| assets | Array | 是 | 待添加到相册中的图片或视频数组。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，无返回结果。 |

错误码：

以下错误码的详细介绍请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-filemanagement)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| 201 | Permission denied. |
| 13900020 | Invalid argument. |
| 14000011 | System inner fail. |

示例：

phAccessHelper的创建请参考[photoAccessHelper.getPhotoAccessHelper](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-f#photoaccesshelpergetphotoaccesshelper)的示例使用。

```
import { dataSharePredicates } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  try {
    console.info('addAssetsDemoPromise');
    let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
    let fetchOption: photoAccessHelper.FetchOptions = {
      fetchColumns: [],
      predicates: predicates
    };
    let albumFetchResult: photoAccessHelper.FetchResult<photoAccessHelper.Album> = await phAccessHelper.getAlbums(photoAccessHelper.AlbumType.USER, photoAccessHelper.AlbumSubtype.USER_GENERIC);
    let album: photoAccessHelper.Album = await albumFetchResult.getFirstObject();
    let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOption);
    let asset: photoAccessHelper.PhotoAsset = await fetchResult.getFirstObject();
    if (asset === undefined) {
      console.error('addAssetsDemoPromise asset is undefined');
      return;
    }
    album.addAssets([asset]).then(() => {
      console.info('album addAssets successfully');
    }).catch((err: BusinessError) => {
      console.error(`album addAssets failed with error: ${err.code}, ${err.message}`);
    });
  } catch (err) {
    console.error(`addAssetsDemoPromise failed with error: ${err.code}, ${err.message}`);
  }
}
```

#### removeAssets(deprecated)

removeAssets(assets: Array<PhotoAsset>, callback: AsyncCallback<void>): void

从用户相册移除图片或视频，需预置相册和文件资源。使用callback异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 10开始支持，从API version 11开始废弃。建议使用[MediaAlbumChangeRequest.removeAssets](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-mediaalbumchangerequest#removeassets11)替代。

需要权限：ohos.permission.WRITE_IMAGEVIDEO

系统能力：SystemCapability.FileManagement.PhotoAccessHelper.Core

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| assets | Array | 是 | 相册中待移除的图片或视频数组。 |
| callback | AsyncCallback | 是 | 回调函数。当移除图片或视频成功，err为undefined，否则为错误对象。 |

错误码：

以下错误码的详细介绍请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-filemanagement)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| 201 | Permission denied. |
| 13900020 | Invalid argument. |
| 14000011 | System inner fail. |

示例：

phAccessHelper的创建请参考[photoAccessHelper.getPhotoAccessHelper](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-f#photoaccesshelpergetphotoaccesshelper)的示例使用。

```
import { dataSharePredicates } from '@kit.ArkData';

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  try {
    console.info('removeAssetsDemoCallback');
    let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
    let fetchOption: photoAccessHelper.FetchOptions = {
      fetchColumns: [],
      predicates: predicates
    };
    let albumFetchResult: photoAccessHelper.FetchResult<photoAccessHelper.Album> = await phAccessHelper.getAlbums(photoAccessHelper.AlbumType.USER, photoAccessHelper.AlbumSubtype.USER_GENERIC);
    let album: photoAccessHelper.Album = await albumFetchResult.getFirstObject();
    let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> = await album.getAssets(fetchOption);
    let asset: photoAccessHelper.PhotoAsset = await fetchResult.getFirstObject();
    if (asset === undefined) {
      console.error('removeAssetsDemoCallback asset is undefined');
      return;
    }
    album.removeAssets([asset], (err) => {
      if (err === undefined) {
        console.info('album removeAssets successfully');
      } else {
        console.error(`album removeAssets failed with error: ${err.code}, ${err.message}`);
      }
    });
  } catch (err) {
    console.error(`removeAssetsDemoCallback failed with error: ${err.code}, ${err.message}`);
  }
}
```

#### removeAssets(deprecated)

removeAssets(assets: Array<PhotoAsset>): Promise<void>

从用户相册中移除图片或视频，需预置相册和文件资源。使用Promise异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 10开始支持，从API version 11开始废弃。建议使用[MediaAlbumChangeRequest.removeAssets](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-mediaalbumchangerequest#removeassets11)替代。

需要权限：ohos.permission.WRITE_IMAGEVIDEO

系统能力：SystemCapability.FileManagement.PhotoAccessHelper.Core

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| assets | Array | 是 | 相册中待移除的图片或视频数组。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，无返回结果。 |

错误码：

以下错误码的详细介绍请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-filemanagement)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| 201 | Permission denied. |
| 13900020 | Invalid argument. |
| 14000011 | System inner fail. |

示例：

phAccessHelper的创建请参考[photoAccessHelper.getPhotoAccessHelper](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-f#photoaccesshelpergetphotoaccesshelper)的示例使用。

```
import { dataSharePredicates } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  try {
    console.info('removeAssetsDemoPromise');
    let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
    let fetchOption: photoAccessHelper.FetchOptions = {
      fetchColumns: [],
      predicates: predicates
    };
    let albumFetchResult: photoAccessHelper.FetchResult<photoAccessHelper.Album> = await phAccessHelper.getAlbums(photoAccessHelper.AlbumType.USER, photoAccessHelper.AlbumSubtype.USER_GENERIC);
    let album: photoAccessHelper.Album = await albumFetchResult.getFirstObject();
    if (album === undefined) {
      console.error('removeAssetsPromise albums is undefined');
      return;
    }
    let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> = await album.getAssets(fetchOption);
    let asset: photoAccessHelper.PhotoAsset = await fetchResult.getFirstObject();
    if (asset === undefined) {
      console.error('removeAssetsPromise asset is undefined');
      return;
    }
    album.removeAssets([asset]).then(() => {
      console.info('album removeAssets successfully');
    }).catch((err: BusinessError) => {
      console.error(`album removeAssets failed with error: ${err.code}, ${err.message}`);
    });
  } catch (err) {
    console.error(`removeAssetsDemoPromise failed with error: ${err.code}, ${err.message}`);
  }
}
```
