---
title: "更新分阶段发布"
original_url: /docs/distribute/agc/agc-help-publish-api-reference-0000002271160565/agc-help-publish-api-phased-release-0000002271000625
format: md
upstream_id: distribute/agc/agc-help-publish-api-reference-0000002271160565/agc-help-publish-api-phased-release-0000002271000625
last_sync: 2026-06-07
sync_hash: 6d224e69
---
#### 功能介绍

此接口用于将分阶段发布修改为全网发布，或者更新分阶段发布的设置。

接口调用者的角色：账号持有者、管理员、APP管理员、运营。

#### 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS PUT |
| 接口方向 | 开发者服务器 -> 华为服务器 |
| 接口URL | https://connect-api.cloud.huawei.com/api/publish/v2/version/phased-release |
| 数据格式 | 请求：Content-Type: application/json  响应：Content-Type: application/json |

#### 请求参数

#### [h2]Header

![](../img/agc-help-publish-api-phased-release-0000002271000625_0.png)

本接口支持使用Service Account方式和API客户端方式，二者区别请参见[获取服务端授权](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661)。

**Service Account****方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer *\\$`{JWT}`*”。JWT为[通过Service Account方式获取授权](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section104621343151212)中获取的鉴权令牌。 |
| appId | M | String(32) | 应用ID，获取方法参考[查看应用信息](/docs/distribute/agc/agc-help-app-0000002235710234/agc-help-view-app-info-0000002282674569)。 |

**API客户端方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID，获取方法参考[创建API客户端](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section103mcpsimp)。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer *\\$`{access\_token}`*”。access\_token为[获取Token](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section09831133141712)中获取的access\_token。 |
| appId | M | String(32) | 应用ID，获取方法参考[查看应用信息](/docs/distribute/agc/agc-help-app-0000002235710234/agc-help-view-app-info-0000002282674569)。 |

#### [h2]Body

请求Body中使用JSON格式携带分阶段发布信息，参数如下表所示。

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| versionId | M | String(32) | 版本ID。  可从[查询应用所有版本类型的版本列表](/docs/distribute/agc/agc-help-publish-api-reference-0000002271160565/agc-help-publish-api-query-brief-info-list-0000002236201254)接口返回的[versionId](/docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-briefversioninfo-0000002271000657#ZH-CN_TOPIC_0000002271000657__zh-cn_topic_0000002083443972_p898319283710)参数中获取。 |
| releasePhase | O | Integer(32) | 分阶段发布标识。  取值范围：   * 3：分阶段。 * 4：分阶段转全网。 |
| state | O | String(16) | 分阶段发布的状态。  取值范围：   * SUSPEND：暂停。 * RELEASE：恢复为发布中。 |
| description | O | String(500) | 分阶段发布说明。 |
| phaseDay | O | Integer(32) | 更新分阶段天数。  取值范围2、3、4、5、6、7，对应分阶段发布比例加速到2%、5%、10%、20%、50%、100%。 |

#### 请求示例

```
PUT /api/publish/v2/version/phased-release HTTP/1.1
Host: connect-api.cloud.huawei.com
client_id: 41*****168
Content-Type: application/json
Authorization: Bearer ******
appId: 10*****57
{
    "versionId": "10*****528",
    "releasePhase": 3,
    "state": "RELEASE",
    "description": "description",
    "phaseDay": 2
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
