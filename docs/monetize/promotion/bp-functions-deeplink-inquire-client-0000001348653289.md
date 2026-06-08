---
title: "通过客户端查询(方式一)"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/bp-functions-deeplink-inquire-client-0000001348653289
format: md
upstream_id: monetize/promotion/bp-functions-deeplink-inquire-client-0000001348653289
last_sync: 2026-06-07
sync_hash: d5f084e2
---
# 通过客户端查询(方式一)

## 开发步骤

1. 构造Uri对象：uriString为“content://com.huawei.appmarket.commondata/item/14”
2. 调用ContentResolver.query接口，第1个参数传入Uri对象即可。

   ```
   cursor = contentResolver.query(uri, null, null, null, null);
   ```
3. 解析ContentResolver.query接口返回的Cursor对象。
   - 如果Cursor为空，表示没有相应延迟Deeplink信息，可能的原因请参考如下说明。
   - 如果Cursor不为空，您可以使用Cursor.getString(0)获取延迟Deeplink信息。

     ![](./img/0a6b2bf206ad.png) 

     - 应用只能查询其自身的延迟Deeplink信息，延迟Deeplink信息在应用市场客户端保存有效期为7天。
     - 用户手动清空华为应用市场缓存，会造成延迟Deeplink数据的缺失。
     - 用户卸载应用后，应用市场缓存的延迟Deeplink信息会丢失。
     - 目前应用市场12.0.1后版本才支持延迟Deeplink查询接口，历史版本暂不支持。
4. 完成客户端新版本开发后，打包新版本应用完成测试。

## 示例代码

```
private static final String PROVIDER_URI = "content://com.huawei.appmarket.commondata/item/14";

private String getReferrer() {
    Cursor cursor = null;
    Uri uri = Uri.parse(PROVIDER_URI);
    ContentResolver contentResolver = getContentResolver();

    try {
        cursor = contentResolver.query(uri, null, null, null, null);
        if (cursor != null) {
            cursor.moveToFirst();
            Log.i(TAG, "deferredDeeplink=" + cursor.getString(0));
        } else {
            Log.e(TAG, "deferredDeeplink is null");
        }
    } finally {
        if (cursor != null) {
            cursor.close();
        }
    }
}
```
