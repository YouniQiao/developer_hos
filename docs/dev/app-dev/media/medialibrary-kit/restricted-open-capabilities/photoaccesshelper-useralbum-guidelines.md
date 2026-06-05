---
displayed_sidebar: appDevSidebar
title: "用户相册资源使用指导"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/photoaccesshelper-useralbum-guidelines
format: md
---


photoAccessHelper提供用户相册相关的接口，支持查询和重命名相册，以及添加和删除相册中的图片和视频资源。

![](./img/8f13c949.png)

在进行功能开发前，请查阅[开发准备](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/photoaccesshelper-preparation)，了解如何获取相册管理模块实例和申请相关权限。

文档中使用到photoAccessHelper的地方默认为使用[开发准备](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/photoaccesshelper-preparation)中获取的对象，如未添加此段代码报photoAccessHelper未定义的错误请自行添加。

为了保证应用的运行效率，大部分photoAccessHelper的接口调用都是异步的。以下异步调用的API示例均采用Promise函数，更多方式可以查阅[模块描述](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper)。

如无特别说明，文档中涉及的待获取资源均视为已预置，并且数据库中存在相应数据。如果按照示例代码执行后获取资源为空，请确认文件是否已预置，以及数据库中是否存在该文件的数据。

## 获取用户相册

通过[PhotoAccessHelper.getAlbums](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-photoaccesshelper#getalbums-2)接口获取用户相册。

**前提条件**

* 获取相册管理模块photoAccessHelper实例。
* [申请相册管理模块功能相关权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/photoaccesshelper-preparation#申请相册管理模块功能相关权限)'ohos.permission.READ\_IMAGEVIDEO'。

下面以获取一个相册名为'albumName'的用户相册为例。

**开发步骤**

1. 建立检索条件，用于获取用户相册。
2. 调用PhotoAccessHelper.getAlbums接口获取用户相册资源。
3. 调用[FetchResult.getFirstObject](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-fetchresult#getfirstobject-1)接口获取第一个用户相册。

```
import { dataSharePredicates } from '@kit.ArkData';
import { photoAccessHelper } from '@kit.MediaLibraryKit';

// ...

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let albumName: photoAccessHelper.AlbumKeys = photoAccessHelper.AlbumKeys.ALBUM_NAME;
  predicates.equalTo(albumName, 'test');
  let fetchOptions: photoAccessHelper.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };

  try {
    let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.Album> =
      await phAccessHelper.getAlbums(photoAccessHelper.AlbumType.USER,
        photoAccessHelper.AlbumSubtype.USER_GENERIC, fetchOptions);
    let album: photoAccessHelper.Album = await fetchResult.getFirstObject();
    console.info('getAlbums successfully, albumName: ' + album.albumName);
    fetchResult.close();
    // ...
  } catch (err) {
    console.error('getAlbums failed with err: ' + err);
    // ...
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/MediaLibraryKit/UserAlbumUsageSample/entry/src/main/ets/getuseralbumability/GetUserAlbumAbility.ets#L23-L57" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：GetUserAlbumAbility.ets</a></div>


## 重命名用户相册

重命名用户相册时，修改的是相册的Album.albumName属性。

调用[MediaAlbumChangeRequest.setAlbumName](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-mediaalbumchangerequest#setalbumname11)重命名用户相册后再通过[PhotoAccessHelper.applyChanges](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-photoaccesshelper#applychanges11)更新到数据库中完成修改。

在重命名用户相册之前，需要先获取相册对象，可以通过[FetchResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-fetchresult)中的接口获取对应位置的用户相册。

重命名相册时，相册名的参数规格为：

* 相册名字符串长度为1~255。
* 不允许出现的非法英文字符，包括：

  . \ / : \* ? " ' ` \< \> | \{ \} [ ]
* 英文字符大小写不敏感。
* 相册名不允许重名。

**前提条件**

* 获取相册管理模块photoAccessHelper实例。
* [申请相册管理模块功能相关权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/photoaccesshelper-preparation#申请相册管理模块功能相关权限)'ohos.permission.READ\_IMAGEVIDEO'和'ohos.permission.WRITE\_IMAGEVIDEO'。

下面以将一个相册名为'albumName'的用户相册重命名为例。

**开发步骤**

1. 建立检索条件，用于获取用户相册。
2. 调用PhotoAccessHelper.getAlbums接口获取用户相册资源。
3. 调用[FetchResult.getFirstObject](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-fetchresult#getfirstobject-1)接口获取第一个用户相册。
4. 调用MediaAlbumChangeRequest.setAlbumName接口设置新的相册名。
5. 调用PhotoAccessHelper.applyChanges接口将修改的相册属性更新到数据库中完成修改。

```
import { dataSharePredicates } from '@kit.ArkData';
import { photoAccessHelper } from '@kit.MediaLibraryKit';

// ...

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let albumName: photoAccessHelper.AlbumKeys = photoAccessHelper.AlbumKeys.ALBUM_NAME;
  predicates.equalTo(albumName, 'test');
  let fetchOptions: photoAccessHelper.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };

  try {
    let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.Album> =
      await phAccessHelper.getAlbums(photoAccessHelper.AlbumType.USER,
        photoAccessHelper.AlbumSubtype.USER_GENERIC, fetchOptions);
    let album: photoAccessHelper.Album = await fetchResult.getFirstObject();
    console.info('getAlbums successfully, albumName: ' + album.albumName);
    let albumChangeRequest: photoAccessHelper.MediaAlbumChangeRequest =
      new photoAccessHelper.MediaAlbumChangeRequest(album);
    let newAlbumName: string = 'newAlbumName';
    albumChangeRequest.setAlbumName(newAlbumName);
    await phAccessHelper.applyChanges(albumChangeRequest);
    console.info('setAlbumName successfully, new albumName: ' + album.albumName);
    fetchResult.close();
    // ...
  } catch (err) {
    console.error('setAlbumName failed with err: ' + err);
    // ...
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/MediaLibraryKit/UserAlbumUsageSample/entry/src/main/ets/renameuseralbumability/RenameUserAlbumAbility.ets#L23-L63" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：RenameUserAlbumAbility.ets</a></div>


## 添加图片和视频到用户相册中

先[获取用户相册](#获取用户相册)对象和需要添加到用户相册中的图片或视频的对象数组，然后调用[MediaAlbumChangeRequest.addAssets](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-mediaalbumchangerequest#addassets11)和[PhotoAccessHelper.applyChanges](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-photoaccesshelper#applychanges11)接口往用户相册中添加图片或视频。

**前提条件**

* 获取相册管理模块photoAccessHelper实例。
* [申请相册管理模块功能相关权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/photoaccesshelper-preparation#申请相册管理模块功能相关权限)'ohos.permission.READ\_IMAGEVIDEO'和'ohos.permission.WRITE\_IMAGEVIDEO'。

下面以将往相册名为'albumName'的用户相册中添加一张图片为例。

**开发步骤**

1. 建立相册检索条件，用于获取用户相册。
2. 建立图片检索条件，用于获取图片。
3. 调用PhotoAccessHelper.getAlbums接口获取用户相册资源。
4. 调用[FetchResult.getFirstObject](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-fetchresult#getfirstobject)接口获取第一个用户相册。
5. 调用[PhotoAccessHelper.getAssets](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-photoaccesshelper#getassets)接口获取图片资源。
6. 调用[FetchResult.getFirstObject](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-fetchresult#getfirstobject)接口获取第一张图片。
7. 调用MediaAlbumChangeRequest.addAssets接口往用户相册中添加图片。
8. 调用PhotoAccessHelper.applyChanges接口提交相册变更请求。

```
import { dataSharePredicates } from '@kit.ArkData';
import { photoAccessHelper } from '@kit.MediaLibraryKit';
// ...

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  let albumPredicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let albumName: photoAccessHelper.AlbumKeys = photoAccessHelper.AlbumKeys.ALBUM_NAME;
  albumPredicates.equalTo(albumName, 'test');
  let albumFetchOptions: photoAccessHelper.FetchOptions = {
    fetchColumns: [],
    predicates: albumPredicates
  };

  let photoPredicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let photoFetchOptions: photoAccessHelper.FetchOptions = {
    fetchColumns: [],
    predicates: photoPredicates
  };

  try {
    let albumFetchResult: photoAccessHelper.FetchResult<photoAccessHelper.Album> =
      await phAccessHelper.getAlbums(photoAccessHelper.AlbumType.USER,
        photoAccessHelper.AlbumSubtype.USER_GENERIC, albumFetchOptions);
    let album: photoAccessHelper.Album = await albumFetchResult.getFirstObject();
    console.info('getAlbums successfully, albumName: ' + album.albumName);
    let photoFetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> =
      await phAccessHelper.getAssets(photoFetchOptions);
    let photoAsset: photoAccessHelper.PhotoAsset = await photoFetchResult.getFirstObject();
    console.info('getAssets successfully, albumName: ' + photoAsset.displayName);
    let albumChangeRequest: photoAccessHelper.MediaAlbumChangeRequest =
      new photoAccessHelper.MediaAlbumChangeRequest(album);
    albumChangeRequest.addAssets([photoAsset]);
    await phAccessHelper.applyChanges(albumChangeRequest);
    console.info('succeed to add ' + photoAsset.displayName + ' to ' + album.albumName);
    albumFetchResult.close();
    photoFetchResult.close();
    return true;
  } catch (err) {
    console.error('addAssets failed with err: ' + err);
    return false;
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/MediaLibraryKit/UserAlbumUsageSample/entry/src/main/ets/addmediatouseralbumability/AddMediaToUserAlbumAbility.ets#L24-L69" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：AddMediaToUserAlbumAbility.ets</a></div>


## 获取用户相册中的图片和视频

先[获取用户相册](#获取用户相册)对象，然后调用[Album.getAssets](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-absalbum#getassets-1)接口获取用户相册中的图片资源。

**前提条件**

* 获取相册管理模块photoAccessHelper实例。
* [申请相册管理模块功能相关权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/photoaccesshelper-preparation#申请相册管理模块功能相关权限)'ohos.permission.READ\_IMAGEVIDEO'和'ohos.permission.WRITE\_IMAGEVIDEO'。

下面以获取相册名为'albumName'的用户相册中的一张图片为例。

**开发步骤**

1. 建立相册检索条件，用于获取用户相册。
2. 建立图片检索条件，用于获取图片。
3. 调用PhotoAccessHelper.getAlbums接口获取用户相册资源。
4. 调用[FetchResult.getFirstObject](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-fetchresult#getfirstobject-1)接口获取第一个用户相册。
5. 调用Album.getAssets接口获取用户相册中的图片资源。
6. 调用[FetchResult.getFirstObject](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-fetchresult#getfirstobject-1)接口获取第一张图片。

```
import { dataSharePredicates } from '@kit.ArkData';
import { photoAccessHelper } from '@kit.MediaLibraryKit';

// ...

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  let albumPredicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let albumName: photoAccessHelper.AlbumKeys = photoAccessHelper.AlbumKeys.ALBUM_NAME;
  albumPredicates.equalTo(albumName, 'test');
  let albumFetchOptions: photoAccessHelper.FetchOptions = {
    fetchColumns: [],
    predicates: albumPredicates
  };

  let photoPredicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let photoFetchOptions: photoAccessHelper.FetchOptions = {
    fetchColumns: [],
    predicates: photoPredicates
  };

  try {
    let albumFetchResult: photoAccessHelper.FetchResult<photoAccessHelper.Album> =
      await phAccessHelper.getAlbums(photoAccessHelper.AlbumType.USER,
        photoAccessHelper.AlbumSubtype.USER_GENERIC, albumFetchOptions);
    let album: photoAccessHelper.Album = await albumFetchResult.getFirstObject();
    console.info('getAlbums successfully, albumName: ' + album.albumName);
    let photoFetchResult = await album.getAssets(photoFetchOptions);
    let photoAsset = await photoFetchResult.getFirstObject();
    console.info('album getAssets successfully, albumName: ' + photoAsset.displayName);
    albumFetchResult.close();
    photoFetchResult.close();
    // ...
  } catch (err) {
    console.error('album getAssets failed with err: ' + err);
    // ...
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/MediaLibraryKit/UserAlbumUsageSample/entry/src/main/ets/getmediafromuseralbumability/GetMediaFromUserAlbumAbility.ets#L25-L69" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：GetMediaFromUserAlbumAbility.ets</a></div>


## 从用户相册中移除图片和视频

先[获取用户相册](#获取用户相册)对象，然后调用[Album.getAssets](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-absalbum#getassets-1)接口获取用户相册中的资源。

选择其中要移除的资源，然后调用[MediaAlbumChangeRequest.removeAssets](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-mediaalbumchangerequest#removeassets11)和[PhotoAccessHelper.applyChanges](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-photoaccesshelper#applychanges11)接口移除。

**前提条件**

* 获取相册管理模块photoAccessHelper实例。
* [申请相册管理模块功能相关权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/photoaccesshelper-preparation#申请相册管理模块功能相关权限)'ohos.permission.READ\_IMAGEVIDEO'和'ohos.permission.WRITE\_IMAGEVIDEO'。

下面以从相册名为'albumName'的用户相册中移除一张图片为例。

**开发步骤**

1. 建立相册检索条件，用于获取用户相册。
2. 建立图片检索条件，用于获取图片。
3. 调用PhotoAccessHelper.getAlbums接口获取用户相册资源。
4. 调用[FetchResult.getFirstObject](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-fetchresult#getfirstobject-1)接口获取第一个用户相册。
5. 调用Album.getAssets接口获取图片资源。
6. 调用[FetchResult.getFirstObject](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-fetchresult#getfirstobject-1)接口获取第一张图片。
7. 调用MediaAlbumChangeRequest.removeAssets接口从用户相册中移除图片。
8. 调用PhotoAccessHelper.applyChanges接口提交相册变更请求。

```
import { dataSharePredicates } from '@kit.ArkData';
import { photoAccessHelper } from '@kit.MediaLibraryKit';

// ...

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  let albumPredicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let albumName: photoAccessHelper.AlbumKeys = photoAccessHelper.AlbumKeys.ALBUM_NAME;
  albumPredicates.equalTo(albumName, 'test');
  let albumFetchOptions: photoAccessHelper.FetchOptions = {
    fetchColumns: [],
    predicates: albumPredicates
  };

  let photoPredicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let photoFetchOptions: photoAccessHelper.FetchOptions = {
    fetchColumns: [],
    predicates: photoPredicates
  };

  try {
    let albumFetchResult: photoAccessHelper.FetchResult<photoAccessHelper.Album> =
      await phAccessHelper.getAlbums(photoAccessHelper.AlbumType.USER,
        photoAccessHelper.AlbumSubtype.USER_GENERIC, albumFetchOptions);
    let album: photoAccessHelper.Album = await albumFetchResult.getFirstObject();
    if (album === undefined) {
      console.error('album is undefined');
      albumFetchResult.close();
      return false;
    }
    console.info('getAlbums successfully, albumName: ' + album.albumName);
    let photoFetchResult = await album.getAssets(photoFetchOptions);
    let photoAsset = await photoFetchResult.getFirstObject();
    if (photoAsset === undefined) {
      console.error('photoAsset is undefined');
      photoFetchResult.close();
      return false;
    }
    console.info('album getAssets successfully, albumName: ' + photoAsset.displayName);
    let albumChangeRequest: photoAccessHelper.MediaAlbumChangeRequest =
      new photoAccessHelper.MediaAlbumChangeRequest(album);
    albumChangeRequest.removeAssets([photoAsset]);
    await phAccessHelper.applyChanges(albumChangeRequest);
    console.info('succeed to remove ' + photoAsset.displayName + ' from ' + album.albumName);
    albumFetchResult.close();
    photoFetchResult.close();
    return true;
  } catch (err) {
    console.error('removeAssets failed with err: ' + err);
    return false;
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/MediaLibraryKit/UserAlbumUsageSample/entry/src/main/ets/removemediafromuseralbumability/RemoveMediaFromUserAlbumAbility.ets#L25-L84" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：RemoveMediaFromUserAlbumAbility.ets</a></div>
