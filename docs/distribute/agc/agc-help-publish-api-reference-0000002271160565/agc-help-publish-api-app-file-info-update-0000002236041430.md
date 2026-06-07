---
title: "更新应用文件信息"
original_url: /docs/distribute/agc/agc-help-publish-api-reference-0000002271160565/agc-help-publish-api-app-file-info-update-0000002236041430
format: md
---


#### 功能介绍

图片、视频等文件上传完成后，通过该接口刷新HarmonyOS应用/元服务的文件信息。

接口调用者的角色：账号持有者、管理员、APP管理员、运营。

#### 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS PUT |
| 接口方向 | 开发者服务器 -> 华为服务器 |
| 接口URL | https://connect-api.cloud.huawei.com/api/publish/v3/app-file-info |
| 数据格式 | 请求：Content-Type: application/json  响应：Content-Type: application/json |

#### 请求参数

#### [h2]Header

![](../img/agc-help-publish-api-app-file-info-update-0000002236041430_0.png)

本接口支持使用Service Account方式和API客户端方式，二者区别请参见[获取服务端授权](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661)。

**Service Account****方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer *\\$`{JWT}`*”。JWT为[通过Service Account方式获取授权](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section104621343151212)中获取的鉴权令牌。 |

**API客户端方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID，获取方法参考[创建API客户端](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section103mcpsimp)。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer *\\$`{access\_token}`*”。access\_token为[获取Token](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section09831133141712)中获取的access\_token。 |

#### [h2]Query

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| appId | M | String(32) | 需要更新的应用ID。 |
| releaseType | O | Integer(32) | 应用发布方式。  取值范围：   * 1：全网   默认值：1 |
| releasePhase | O | Integer(32) | 分阶段发布标识。  取值范围：   * 0：全网 * 3：分阶段   默认值：0 |

#### [h2]Body

请求Body中使用JSON格式携带更新的应用文件信息，参数如下表所示。

![](../img/agc-help-publish-api-app-file-info-update-0000002236041430_1.png)

各文件类型对应的文件上传要求请参见[应用文件要求](/docs/distribute/agc/agc-help-connect-api-appendix-0000002271000741/agc-help-connect-api-appendix-requirement-0000002271160693)。

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| appIconList | O | `List&lt;[LangFileInfo](/docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-langfileinfo-0000002271000653)>` | 应用图标信息。  数组长度不超过20。  说明：  应用图标必须与软件包中的应用图标一致，且需符合[应用信息审核规范](https://developer.huawei.com/consumer/cn/doc/app/50104-01)与[应用文件要求](/docs/distribute/agc/agc-help-connect-api-appendix-0000002271000741/agc-help-connect-api-appendix-requirement-0000002271160693)。 |
| screenShotList | O | `List&lt;[LangFileInfo](/docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-langfileinfo-0000002271000653)>` | 应用介绍截图信息。  数组长度不超过20。  说明：  在同一语言、同一设备下，同时更新的截图素材和视频素材方向必须保持一致，否则将报错。 |
| introVideoList | O | `List&lt;[LangFileInfo](/docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-langfileinfo-0000002271000653)>` | 应用介绍视频信息。  数组长度不超过20。  说明：  在同一语言、同一设备下，同时更新的截图素材和视频素材方向必须保持一致，否则将报错。 |
| rcmdVideoList | O | `List&lt;[LangFileInfo](/docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-langfileinfo-0000002271000653)>` | 推荐视频信息。  数组长度不超过20。 |
| rcmdPicList | O | `List&lt;[LangFileInfo](/docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-langfileinfo-0000002271000653)>` | 推荐图片信息。  数组长度不超过20。 |
| elecCertificate | O | String(512) | 电子版本证书。 |
| certificateList | O | `List&lt;String(512)>` | 应用版权证书或代理证书。  数组长度不超过10。 |
| publicationList | O | `List&lt;String(512)>` | 版号证明。  数组长度不超过10。 |
| packagePermissionIntroVideoList | O | `List&lt;[PackagePermissionIntroVideo](/docs/distribute/agc/agc-help-publish-api-data-0000002236201266/publish-api-packagepermissionintrovedio-0000002236201278)>` | 包权限使用场景说明视频。  数组长度不超过100。  说明：  隐私权限说明的“权限描述”、“权限使用设备范围”和“权限使用理由”从上传的软件包体中读取，无需通过接口更新。 |
| otherCertificatesURL | O | String(512) | 授权书及其他材料文件压缩包的objectId。  说明：  **objectId**的获取流程：先调用[获取上传文件地址](/docs/distribute/agc/agc-help-upload-api-reference-0000002236041486/agc-help-upload-api-upload-url-0000002236201294)接口，然后调用[上传文件](/docs/distribute/agc/agc-help-upload-api-reference-0000002236041486/agc-help-upload-api-upload-file-0000002271160621)接口上传文件，最后得到[获取上传文件地址](/docs/distribute/agc/agc-help-upload-api-reference-0000002236041486/agc-help-upload-api-upload-url-0000002236201294)接口返回的**objectId**。  若文件格式不正确，提交发布时会出错，具体限制如下：   * 压缩包必须为zip格式，不超过200MB。 * 解压后的大小不超过1GB。 * 文件夹层级不超过3层。 * 只能包含JPG、JPEG、BMP格式图片和PDF格式的文件，累计不超过200个。   说明：  此字段只支持HarmonyOS应用，不支持元服务。 |
| updateScreenShotList | O | `List&lt;[LangFileInfo](/docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-langfileinfo-0000002271000653)>` | 更新截图素材。  数组长度不超过20。 |
| updateVideoList | O | `List&lt;[LangFileInfo](/docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-langfileinfo-0000002271000653)>` | 更新视频素材。  数组长度不超过20。 |

#### 请求示例

```
PUT /api/publish/v3/app-file-info?appId=10******57 HTTP/1.1
Host: connect-api.cloud.huawei.com
client_id: 4141******68
Content-Type: application/json
Authorization: Bearer *******
{
    "appIconList": [{
      "lang": "zh-CN",
      "fileInfoList": [{
        "deviceType": 4,
        "objectIdList": ["CN/20241118**/17319******.png"],
        "showType": 0
      }]
    }
  ],
  "screenShotList": [{
    "lang": "zh-CN",
    "fileInfoList": [{
      "deviceType": 4,
      "objectIdList": ["CN/20241118**/17319******.png",
      "CN/20241118**/17319******.png"],
      "showType": 0
    },
    {
      "deviceType": 5,
      "objectIdList": ["CN/20241118**/17319******.png"],
      "showType": 0
    }]
  },
  {
    "lang": "en-US",
    "fileInfoList": [{
      "deviceType": 4,
      "objectIdList": ["CN/20241118**/17319******.png"],
      "showType": 0
    },
    {
      "deviceType": 5,
      "objectIdList": ["CN/20241118**/17319******.png",
      "CN/20241118**/17319******.png",
      "CN/20241118**/17319******.png"],
      "showType": 0
    }]
  }],
  "introVideoList": [
    {
      "lang": "zh-CN",
      "fileInfoList": [
        {
          "deviceType": 4,
          "objectIdList": ["CN/20241118**/17319******.png",
          "CN/20241118**/17319******.png"],
          "showType": 0
        }
      ]
    }
  ],
  "rcmdVideoList": [
    {
      "lang": "zh-CN",
      "fileInfoList": [
        {
          "deviceType": 4,
          "objectIdList": ["CN/20241118**/17319******.png",
          "CN/20241118**/17319******.png"],
          "showType": 0
        }
      ]
    }
  ],
  "rcmdPicList": [
    {
      "lang": "zh-CN",
      "fileInfoList": [
        {
          "deviceType": 4,
          "objectIdList": ["CN/20241118**/17319******.png",
          "CN/20241118**/17319******.png"],
          "showType": 0
        }
      ]
    }
  ],
  "elecCertificate": "*****",
  "certificateList": [
    "*****"
  ],
  "publicationList": [
    "*****"
  ],
  "packagePermissionIntroVideoList": [
    {
      "lang": "zh-CN",
      "permissionName": "*****",
      "deviceType": 4,
      "objectId": "CN/2024052102/********.app"
    }
  ],
  "otherCertificatesURL": "CN/2024052102/********.zip",
  "updateScreenShotList": [
    {
      "lang": "zh-CN",
      "fileInfoList": [
        {
          "deviceType": 4,
          "objectIdList": ["CN/20241118**/17319******.jpg"],
          "showType": 1
        }
      ]
    }
  ],
  "updateVideoList": [
    {
      "lang": "zh-CN",
      "fileInfoList": [
        {
          "deviceType": 4,
          "objectIdList": ["CN/20241118**/17319******.mp4",
          "CN/20241118**/17319******.jpg"],
          "showType": 1
        }
      ]
    }
  ]
}
```

#### 响应参数

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| ret | M | [ConnectRet](/docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-connectret-0000002271160589) | 包含返回码及描述信息的结果。 |

#### 响应示例

```
{
    "ret": {
        "code": 0,
        "msg": "success"
    }
}
```

#### 调用示例

Java代码示例如下：

```
public static void updateAppFileInfo(String domain, String clientId, String token, String appId,
	List<FileInfo> files) throws InvocationTargetException, IllegalAccessException {
	HttpPut put = new HttpPut(domain + "/publish/v3/app-file-info?appId=" + appId);
	put.setHeader("Authorization", "Bearer " + token);
	put.setHeader("client_id", clientId);
	JSONObject keyString = new JSONObject();
	// Set the language.
	keyString.put("lang", "zh-CN");
	List<PublishFileInfo> fileInfos = new ArrayList<>();
	for (FileInfo fileInfo : files) {
		PublishFileInfo publishFileInfo = new PublishFileInfo();
		BeanUtils.copyProperties(publishFileInfo, fileInfo);
		publishFileInfo.setFileDestUrl(fileInfo.getFileDestUrl());
		fileInfos.add(publishFileInfo);
	}
	System.out.println(JSON.toJSONString(fileInfos));
	keyString.put("files", fileInfos);
	keyString.put("fileType", 0);
	StringEntity entity = new StringEntity(keyString.toString(), Charset.forName("UTF-8"));
	entity.setContentEncoding("UTF-8");
	entity.setContentType("application/json");
	put.setEntity(entity);
	try {
		CloseableHttpClient httpClient = HttpClients.createDefault();
		CloseableHttpResponse httpResponse = httpClient.execute(put);
		int statusCode = httpResponse.getStatusLine().getStatusCode();
		if (statusCode == HttpStatus.SC_OK) {
			BufferedReader br =
				new BufferedReader(new InputStreamReader(httpResponse.getEntity().getContent(), Consts.UTF_8));
			String result = br.readLine();

			JSONObject object = JSON.parseObject(result);
			System.out.println(object.get("ret"));
		}
	} catch (Exception e) {
		System.out.println(e);
	}
}
```
