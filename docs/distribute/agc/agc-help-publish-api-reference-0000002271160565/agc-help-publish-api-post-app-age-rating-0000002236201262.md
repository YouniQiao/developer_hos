---
title: "申请年龄分级"
original_url: /docs/distribute/agc/agc-help-publish-api-reference-0000002271160565/agc-help-publish-api-post-app-age-rating-0000002236201262
format: md
---


#### 功能介绍

此接口用于申请或修改HarmonyOS应用/元服务的年龄分级。

接口调用者的角色：账号持有者、管理员、APP管理员、运营。

![](../img/agc-help-publish-api-post-app-age-rating-0000002236201262_0.png)

调用本接口前需完成应用分类设置，明确是游戏类应用还是普通应用。

#### 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS POST |
| 接口方向 | 开发者服务器 -> 华为服务器 |
| 接口URL | https://connect-api.cloud.huawei.com/api/publish/v2/app-age-rating |
| 数据格式 | 请求：Content-Type: application/json  响应：Content-Type: application/json |

#### 请求参数

#### [h2]Header

![](../img/agc-help-publish-api-post-app-age-rating-0000002236201262_1.png)

本接口请使用API客户端认证方式，请参见[API客户端方式获取服务端授权](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section1679462873111)获取**客户端ID**和**access\_token**。

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID。 |
| Authorization | M | String | 认证信息。  格式：Authorization: Bearer *\\$`{access\_token}`* |
| appId | M | String(32) | 应用ID。  获取方法参考[查看应用信息](/docs/distribute/agc/agc-help-app-0000002235710234/agc-help-view-app-info-0000002282674569)。 |

#### [h2]Query

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| releaseType | O | Integer(32) | 应用发布方式。  取值范围：   * 1：全网   默认值：1 |
| releasePhase | O | Integer(32) | 分阶段发布标识。  取值范围：   * 0：全网 * 3：分阶段   默认值：0 |

#### [h2]Body

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| feedback | M | String(8192) | 问卷内容。  说明：  具体请参见[feedback获取方式](#ZH-CN_TOPIC_0000002236201262__zh-cn_topic_0000002208484113_p6282121175120)。 |
| expectedRating | O | Integer(32) | 预期年龄分级。  取值范围：   * 1：年满3周岁 * 2：中国区年满8周岁，其他区域年满7周岁 * 3：年满12周岁 * 4：年满16周岁 * 5：年满18周岁 |
| ratingRule | O | Integer(32) | 年龄分级生效规则。  取值范围：   * 0：以问卷内容评级结果为准。 * 1：当预期年龄分级expectedRating设置的值大于问卷评级结果中的年龄值时，以预期年龄分级为准，否则以问卷内容评级结果为准。 |
| childFlag | O | Integer(32) | 应用是否仅面向儿童。  取值范围：   * 0：应用不仅面向儿童 * 1：应用仅面向儿童 |

**feedback****获取****方式**

该问卷为独立页面，需要开发者通过window.open()方法打开，并监听message事件获取问卷填写内容。

1. 调用window.open()方法打开页面，代码如下：

   ```
   window.open("https://developer.huawei.com/consumer/cn/service/josp/agc/amp/ageRatingQuestionnaire.html#/?appType={appType}&lang={lang}")
   ```

   其中，appType和lang为参数变量。

   * appType可选值为app/game，app为应用年龄分级问卷，game为游戏年龄分级问卷。
   * lang可选值为cn/en/ru，cn为中文问卷，en为英文问卷，ru为俄文问卷。

   ![](../img/agc-help-publish-api-post-app-age-rating-0000002236201262_2.png)

   如果无法打开问卷，请先退出[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)登录，然后重新访问该页面。
2. 填写完问卷后点击提交，问卷页面会发起postMessage请求，调用方通过监听message事件获取问卷内容feedback，代码如下：

   ```
   window.addEventListener("message", (event) => {
           console.log(event.data);  //问卷内容feedback
   })
   ```

#### 请求示例

```
POST /api/publish/v2/app-age-rating HTTP/1.1
Host: connect-api.cloud.huawei.com
client_id: 414*******68
Content-Type: application/json
Authorization: Bearer ******
appId: 1******57
{
  "feedback": "`{\"feedbackId\":\"\",\"questionnaireId\":\"xxx\",\"userId\":xxx\,\"teamId\":xxx,\"teamName\":\"\",\"appId\":\"xxx\",\"recordId\":\"\",\"action\":\"submit\",\"extInfo\":\"\",\"agreePrivacy\":1,\"enrollAppIds\":\"xxx\",\"enrollAppNames\":\"\",\"status\":0,\"createTime\":,\"details\":[{\"questionId\":\"xxx\",\"questionNo\":1,\"optionId\":\"xxx\",\"optionNo\":2,\"valueType\":0}`,`{\"xxx\"}`,`{\"xxx\"}`]}",
  "expectedRating": 1,
  "ratingRule": 1,
  "childFlag": 0
}
```

#### 响应参数

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| ret | M | [ConnectRet](/docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-connectret-0000002271160589) | 包含返回码及描述信息的结果。 |
| ratingResult | O | Integer(32) | 年龄分级结果。  取值范围：   * -1：拒绝评级 * 1：年满3周岁 * 2：中国区年满8周岁，其他区域年满7周岁 * 3：年满12周岁 * 4：年满16周岁 * 5：年满18周岁 |
| rejectReason | O | `List&lt;String(32)>` | 拒绝评级的原因，返回不满足系统要求的**问卷分类ID**集合。  数组长度不超过50。  请根据该参数返回的ID找到对应的问卷分类，然后修改内容。  ID对应的问卷分类如下：   * 389265604458119891：暴力内容 * 389265604458119892：令人恐惧的内容 * 389265604458119893：性相关的内容 * 389265604458119894：不良语言 * 389265604458119895：受管制物品与活动 * 389265604458119896：模拟赌博、真实赌博或法定货币支付。 * 389265604458119897：法律与道德 * 389265604458119898：用户间交互 * 389265604458119899：用户信息收集 * 389265604458119900：其他 * 389265604458119901：金融类 |
| prohibitedCountry | O | `List&lt;String(5)>` | 评级成功时存在禁止发布的国家区域的国家码集合。  数组长度不超过300。 |

#### 响应示例

```
{
  "ret": {
    "code": 0,
    "msg": "success"
  },
  "ratingResult": 1,
  "prohibitedCountry": [
    "RU"
  ]
}
```
