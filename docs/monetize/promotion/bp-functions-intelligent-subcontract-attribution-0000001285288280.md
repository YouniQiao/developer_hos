---
title: "客户端归因查询"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/bp-functions-intelligent-subcontract-attribution-0000001285288280
---
# 客户端归因查询

## 开发步骤

1. 构造Uri对象：uriString为“content://com.huawei.appmarket.commondata/item/5”。
2. 调用ContentResolver.query接口，第1个参数传入Uri对象，第4个参数传入应用包名。

   ![](./img/0000000000011111111.20251117124640.11560116434532877772803144174863_50001231000000_2800_6A7C1419B0BC0B022CBF032DAC9FB9AC33542DA03C6B3D74C4AD9A606671FD75_3796298005f7.png) 

   使用该接口将涉及contentResolver的获取，ContentResolver对象会与应用市场进行通信，部分场景下将被识别为关联启动，请您注意如下。

   - 需要在隐私声明中加上关联启动相关条例。
   - 获取用户隐私同意后，再进行接口的调用。

   ```
   cursor = contentResolver.query(uri, null, null, packageName, null);
   ```
3. 解析ContentResolver.query接口返回的“Cursor”字段值。
   - 如果“Cursor”字段值为空，表示没有相应归因信息，可能的原因如下。
     - 应用只能查询其自身的归因信息，归因信息在端侧存储期限为90天，其中应用推广中的trackId在云侧的存储有效期是30天。
     - 用户手动清空华为应用市场缓存，会造成归因数据的缺失。
     - 用户卸载应用后，应用市场缓存的归因信息会丢失。
   - 如果“Cursor”字段值不为空，请进一步解析数据。

     您可以使用Cursor.getString(*X*)获取相关归因信息，*X*可以是归因信息类型的常量或常量值，如下表所示。

     | 常量 | 常量值 | 说明 |
     | --- | --- | --- |
     | INDEX\_ENTER\_AG\_TIME | 1 | 在推广位点击安装按钮的时间。  单位：秒  示例：1632811393 |
     | INDEX\_INSTALLED\_FINISH\_TIME | 2 | 应用安装完成的时间。  单位：秒  示例：1632811393  **说明：**请务必解析存储该时间，此时间是归因回传时间窗的参照时间。 |
     | INDEX\_START\_DOWNLOAD\_TIME | 3 | 应用开始下载的时间。  单位：秒  示例：1632811393 |
     | INDEX\_TRACKID | 4 | 应用推广的归因信息。  归因信息trackId（json结构，可扩展），当前包含：  - channel：由开发者运营在华为投放系统针对推广任务绑定的智能分包渠道号，如"channel12345"。 - callback：回传参数，用于oCPD对接，如"security:CD40F6\*\*\*\*\*C7A9F4"。 - taskid：任务ID，如"200052202"。 - subTaskId：子任务ID，如"200037037"。 - RTAID：RTAID，如"123556"。 可能获取到的归因信息种类请参考[FAQ](https://developer.huawei.com/consumer/cn/doc/promotion/bp-functions-intelligent-subcontract-faq-0000001284808804#section6680148121416)。 |
     | INDEX\_REFERRER\_EX | 5 | 下载链接地址中设置的referrer参数。 |

     ![](./img/0000000000011111111.20251117124640.59524627108043553760624502747536_50001231000000_2800_97E0131C5C4C8C9FACD9FB54510D7F4D942B695209764D4FECE83A42C95200BD_614804ff839e.png) 

     INDEX\_TRACKID和INDEX\_REFERRER\_EX参数只有在10.5.0.300及以上版本的应用市场客户端才支持。
4. 取出INDEX\_TRACKID对应的归因结果json字符串后可以反序列化为`HashMap<String, String>`，请参见[示例代码](#section16515926192215)。

   建议您不要在客户端处理归因字符串，将归因字符串上报服务端，在服务端进行解析处理。
5. 完成客户端新版本开发后，打包新版本应用进行调测，详情请参考[功能调试](https://developer.huawei.com/consumer/cn/doc/promotion/bp-functions-intelligent-subcontract-debug-0000001284968724)。

   ![](./img/0000000000011111111.20251117124640.32542177979143765848509402397251_50001231000000_2800_9CD9EC79DEE5AA98E65DDC743E0FEEB403F973643C7ECD79B8B9A57BD14BA0EC_37f7e6917020.png) 

   首次对接测试智能分包，老版本应用不具备查询能力，推广位下载APP（调测从推广位下载APP，请参考[FAQ](https://developer.huawei.com/consumer/cn/doc/promotion/bp-functions-intelligent-subcontract-faq-0000001284808804#section5850152919125)）后请直接使用**adb install -r** ***xxx*****.apk**（您的新版本安装包）进行升级，切勿卸载后再安装，否则会导致归因信息丢失。

## 相关参考-示例代码

```
private static final String PROVIDER_URI ="content://com.huawei.appmarket.commondata/item/5";
private static final int INDEX_ENTER_AG_TIME = 1;
private static final int INDEX_INSTALLED_FINISH_TIME = 2;
private static final int INDEX_START_DOWNLOAD_TIME= 3;
private static final int INDEX_TRACKID = 4;
/**
 * 获取 trackid
 * @param pkgName 目标包名
 * @return json 格式字符串
 */
private String getTrackId(String pkgName) {
	String trackId = null;
	Cursor cursor = null;
	Uri uri = Uri.parse(PROVIDER_URI);
	ContentResolver contentResolver = getContentResolver();
	String packageName[] = new String[] { pkgName };
	try {
		cursor = contentResolver.query(uri, null, null, packageName, null);
		if (cursor != null) {
			cursor.moveToFirst();
			Log.i(TAG, "packageName= " + pkgName);
			if (cursor.getColumnCount() > INDEX_TRACKID) {
				// 10.5.0.300 及之后版本
				Log.i(TAG, "enter AppGallery time = " + cursor.getString(INDEX_ENTER_AG_TIME));
				Log.i(TAG, "installed time = " + cursor.getString(INDEX_INSTALLED_FINISH_TIME));
				Log.i(TAG, "download time = " + cursor.getString(INDEX_START_DOWNLOAD_TIME));
				Log.i(TAG, "track id = " + cursor.getString(INDEX_TRACKID));
				trackId = cursor.getString(INDEX_TRACKID);
			} else {
				// 不支持归因信息
				Log.e(TAG, "AppGallery not support");
			}
		}
	}catch(Exception e){
		//处理异常
	} finally {
		if (cursor != null) {
		cursor.close();
		}
	}
	// 如果 trackid 是 json 格式，打印具体内容
	if (!TextUtils.isEmpty(trackId)) {
		try {
			JSONObject attributionMap = new JSONObject(trackId);
			Log.i(TAG, "json channel id = " + attributionMap.getString("channel"));
			Log.i(TAG, "json callback = " + attributionMap.get("callback"));
			Log.i(TAG, "json taskid = " + attributionMap.get("taskid"));
			Log.i(TAG, "json subTaskId = " + attributionMap.get("subTaskId"));
			Log.i(TAG, "json RTAID = " + attributionMap.get("RTAID"));
		} catch (JSONException e) {
			e.printStackTrace();
		}
	}
	Toast.makeText(this, "track id is: " + trackId, Toast.LENGTH_LONG).show();
	return trackId;
}
```
