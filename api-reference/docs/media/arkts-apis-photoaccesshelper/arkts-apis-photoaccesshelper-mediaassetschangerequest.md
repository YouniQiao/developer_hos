---
title: "Class (MediaAssetsChangeRequest)"
upstream_id: "harmonyos-references/arkts-apis-photoaccesshelper-mediaassetschangerequest"
catalog: "harmonyos-references"
content_hash: "decf4e9944fe"
synced_at: "2026-07-28T16:52:02.921605"
---

# Class (MediaAssetsChangeRequest)

MediaAssetsChangeRequest implements [MediaChangeRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-i#mediachangerequest11).

批量资产变更请求。

![](./img/note_3.0-zh-cn.png)

- 本模块首批接口从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
- 本Class首批接口从API version 26.0.0开始支持。

#### 导入模块

```
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

#### constructor

constructor(assets: Array<PhotoAsset>)

构造函数。用于初始化批量资产变更请求。

起始版本： 26.0.0

系统能力：SystemCapability.FileManagement.PhotoAccessHelper.Core

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| assets | Array | 是 | 需要变更的资产数组。 |

错误码：

接口抛出错误码的详细介绍请参见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-filemanagement)。

| 错误码ID | 错误信息 |
| --- | --- |
| 14000011 | System inner fail. |

示例：

phAccessHelper的创建请参考[photoAccessHelper.getPhotoAccessHelper](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-f#photoaccesshelpergetphotoaccesshelper)的示例使用。

```
import { dataSharePredicates } from '@kit.ArkData';

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  console.info('MediaAssetsChangeRequest constructorDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOption: photoAccessHelper.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOption);
  let photoAssetList: Array<photoAccessHelper.PhotoAsset> = await fetchResult.getAllObjects();
  let assetsChangeRequest: photoAccessHelper.MediaAssetsChangeRequest = new photoAccessHelper.MediaAssetsChangeRequest(photoAssetList);
}
```

#### setFavorite

setFavorite(favoriteState: boolean): void

批量将文件设置为收藏文件。

起始版本： 26.0.0

系统能力：SystemCapability.FileManagement.PhotoAccessHelper.Core

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| favoriteState | boolean | 是 | 是否设置为收藏文件，true表示设置为收藏文件；false表示取消收藏。 |

错误码：

接口抛出错误码的详细介绍请参见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-filemanagement)。

| 错误码ID | 错误信息 |
| --- | --- |
| 14000011 | System inner fail. |

示例：

phAccessHelper的创建请参考[photoAccessHelper.getPhotoAccessHelper](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-f#photoaccesshelpergetphotoaccesshelper)的示例使用。

```
import { dataSharePredicates } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

async function example(phAccessHelper: photoAccessHelper.PhotoAccessHelper) {
  console.info('setFavoriteDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOption: photoAccessHelper.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  let fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOption);
  let photoAssetList: Array<photoAccessHelper.PhotoAsset> = await fetchResult.getAllObjects();
  let assetsChangeRequest: photoAccessHelper.MediaAssetsChangeRequest = new photoAccessHelper.MediaAssetsChangeRequest(photoAssetList);
  assetsChangeRequest.setFavorite(true);
  phAccessHelper.applyChanges(assetsChangeRequest).then(() => {
    console.info('apply setFavorite successfully');
  }).catch((err: BusinessError) => {
    console.error(`apply setFavorite failed with error: ${err.code}, ${err.message}`);
  });
}
```
