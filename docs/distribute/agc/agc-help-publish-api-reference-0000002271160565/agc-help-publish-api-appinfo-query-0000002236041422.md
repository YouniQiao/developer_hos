---
title: "查询应用信息"
original_url: /docs/distribute/agc/agc-help-publish-api-reference-0000002271160565/agc-help-publish-api-appinfo-query-0000002236041422
format: md
---


#### 功能介绍

此接口用于根据指定语言和应用ID查询HarmonyOS应用/元服务的详细信息。

接口调用者的角色：账号持有者、管理员、APP管理员、运营。

#### 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS GET |
| 接口方向 | 开发者服务器 -> 华为服务器 |
| 接口URL | https://connect-api.cloud.huawei.com/api/publish/v3/app-info |
| 数据格式 | 请求：Content-Type: application/json  响应：Content-Type: application/json |

#### 请求参数

#### [h2]Header

![](../img/agc-help-publish-api-appinfo-query-0000002236041422_0.png)

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
| appId | M | String(32) | 需要查询的应用ID。 |
| lang | O | String(16) | 需要查询的语言。  说明：  取值参考[语言类型](/docs/distribute/agc/agc-help-connect-api-appendix-0000002271000741/agc-help-connect-api-appendix-langtype-0000002236041558)。  不传该参数，则查询全部语言的应用信息。 |
| releaseType | O | Integer | 应用发布方式。  取值范围：   * 1：全网 * 6：HarmonyOS测试发布方式（API>=10）   默认值：1 |
| versionId | O | String | 需要查询的版本ID。  注意：  **releaseType**为6，该字段必填。 |

#### 请求样例

```
GET /api/publish/v3/app-info?appId=10*****57 HTTP/1.1
Host: connect-api.cloud.huawei.com
client_id: 41*****7168
Authorization: Bearer ******
```

#### 响应参数

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| ret | M | [ConnectRet](/docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-connectret-0000002271160589) | 包含返回码及描述信息的结果。 |
| appInfo | O | [AppInfo](/docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-appinfo-0000002236041454) | 应用基本信息。 |
| auditInfo | O | [AuditInfo](/docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-auditinfo-0000002271000649) | 审核意见信息。 |
| languages | M | `List&lt;[LanguageInfo](/docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-languageinfo-0000002236041462)>` | 包含多种语言的应用信息。   * 如果查询时传递了语言类型，则返回当前语言的应用信息。 * 如果查询时未传递语言类型，则返回所有语言的应用信息。 * 如果查询时设置了异常的语言数据，例如不存在的语言类型，则返回空数组。 |
| phasedReleaseInfo | O | [PhasedReleaseInfo](/docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-phasedreleaseinfo-0000002271160597) | 分阶段发布信息。 |

#### 响应示例

```
{
  "ret": {
    "code": 0,
    "msg": "success"
  },
  "appInfo": {
    "releaseState": 4,
    "defaultLang": "zh-CN",
    "parentType": 13,
    "harmonyChildType": 10000014,
    "kindMainTag": 30000017,
    "kindSubTags": [
       30000017,
       30000018
    ],
    "privacyPolicy": "https://*****.link",
    "appNetType": 0,
    "publishCountry": "CN",
    "contentRate": "`{\"HW\":\"3+\"}`",
    "appTariffType": "6",
    "publicationNumber": "*****",
    "developerNameCn": "******",
    "developerNameEn": "******",
    "developerWebsite": "https://****.****test.cn/consumer/cn/service/josp/***/index.html",
    "customInfo": {
      "phone": "0086-137xxxxxxxx",
      "email": "137*****@***.com",
      "qqNum": "137*****",
      "internalPath": "华为应用市场 > 我的 > 帮助与客服"
    },
    "elecCertificateUrl": "******",
    "certificateURLs": "https://***5819F41A7F216EF87637667B4E33C.jpg",
    "publicationURLs": "",
    "updateTime": "2024-11-12 02:14:50",
    "versionNumber": "1.0.0",
    "versionCode": 1000000,
    "buildVersion": "100.100.100",
    "versionId": "155236****020262400",
    "onShelfVersionNumber": "1.0.0",
    "onShelfVersionCode": 1000000,
    "onShelfVersionId": "155236****020262400",
    "shareLink": "string",
    "sensitivePermissionDesc": "string",
    "familyShareTag": 0,
    "deviceTypes": [
      {
        "deviceType": 4,
        "appAdapters": ""
      }
    ],
    "restrictedPermissionVideo": "",
    "privacyRightsUrl": "",
    "projectId": "2448791****2652411",
    "registeredIdType": 2,
    "registeredIdNumber": "12342220****544487",
    "privacyAgreementId": "17******56",
    "userAgreementUrl": "https://docs.p***e.com/baike/328370",
    "userAgreementIds": [
      "12***************89",
      "23***************78",
      "34***************67"
    ],
    "encrypted": 0,
    "invitationCount": 1000,
    "downloadCount": 900,
    "isAiGenerate": 1,
    "aiTypes": [
      1
    ],
    "testUserName": "*****",
    "testUserPassword": "*****",
    "appRemark": "*****",
    "selfTestVideos": "{"CN/2025102002/********.mp4":"文件名1"}",
    "appReviewPhoneInfo": {
      "account": "137********"
    },
   "appReviewEmailInfo": {
      "account": "137*****@***.com"
    },
    "appReviewName": "*****",
    "versionVocs": [
      {
        "versionId": "10*****528",
        "packageId": "1573*******5952",
        "vocId": "18******24",
      }
    ],
    "reviewState": 2,
    "releaseTime": "2025-09-10 08:40:32"
  },
  "auditInfo": {
    "auditOpinion": ""
  },
  "languages": [
    {
      "lang": "zh-CN",
      "appName": "PhotoPlaza",
      "appDesc": "****",
      "briefInfo": "****",
      "newFeatures": "****",
      "icon": "https://****",
      "showType": 1,
      "videoShowType": 1,
      "introPic": "https://****",
      "introVideo": "",
      "rcmdPic": "",
      "rcmdVideo": "",
      "deviceMaterials": [
        {
          "deviceType": 4,
          "appIcon": "https://****",
          "screenShots": [
                  "https://****",
                  "https://****",
                  "https://****",
                  "https://****"
          ],
          "banner": "****",
          "showType": 1,
          "introVideos": [
            "****"
          ],
          "rcmdVideos": [
            "****"
          ],
          "promoGraphics": [
            "****"
          ],
          "rcmdPics": "****",
          "videoShowType": 0
        }
      ]
    }
  ],
  "phasedReleaseInfo": {
    "state": "SUSPEND",
    "description": "****",
    "releaseTime": 1748591413000,
    "latestSuspendTime": 1748933392000,
    "totalSuspendDays": 1,
    "currentPhaseDay": 5
  }
}
```

#### 调用示例

Java代码示例如下：

```
public static void getAppInfo(String domain, String clientId, String token, String appId, String lang) {
    HttpGet get = new HttpGet(domain + "/publish/v3/app-info?appId=" + appId + "&lang=" + lang);

    get.setHeader("Authorization", "Bearer " + token);
    get.setHeader("client_id", clientId);
    try {
        CloseableHttpClient httpClient = HttpClients.createDefault();
        CloseableHttpResponse httpResponse = httpClient.execute(get);
        int statusCode = httpResponse.getStatusLine().getStatusCode();
        if (statusCode == HttpStatus.SC_OK) {
            BufferedReader br =
                new BufferedReader(new InputStreamReader(httpResponse.getEntity().getContent(), Consts.UTF_8));
            String result = br.readLine();

            JSONObject object = JSON.parseObject(result);

            System.out.println(object.get("appInfo"));
        }
    } catch (Exception e) {

    }

}
```
