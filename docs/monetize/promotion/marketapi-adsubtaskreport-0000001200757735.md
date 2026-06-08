---
title: "查询推广子任务统计报表"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketapi-adsubtaskreport-0000001200757735
format: md
upstream_id: monetize/promotion/marketapi-adsubtaskreport-0000001200757735
last_sync: 2026-06-07
sync_hash: 87673b88
---
# 查询推广子任务统计报表

## 功能介绍

获取推广子任务的报表数据。

## 使用约束

接口调用者的角色：账号持有者、管理员、App管理员、运营。

## 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS POST |
| 接口方向 | 开发者服务器-&gt;推广平台服务端 |
| 接口URL | https://connect-api.cloud.huawei.com/api/marketing-api/v1/report/ad/subtask |
| 数据格式 | 请求消息：Content-Type: application/json  响应消息：Content-Type: application/json |

## 请求参数

### Header

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| client\_id | M | String(header) | 客户端ID，获取方法参考[创建API客户端](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114#section103mcpsimp)。 |
| Authorization | M | String(header) | 认证信息，格式为“Authorization: Bearer $\\{access\_token\\}”。access\_token为[获取Token](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-References/agcapi-obtain_token-0000001158365043)中获取的access\_token。 |

![](./img/caution_3.0-zh-cn_c2c2a79f0747.png) 

- 若您为直客，请直接使用您的开发者账号创建API客户端和获取Access Token。
- 若您为客户投放伙伴，需要使用<strong>客户投放伙伴主账号</strong>创建API客户端和获取Access Token。
- 若您为直客团队中的协作者，需要使用<strong>直客管理者账户</strong>创建API客户端和获取Access Token。

### Body

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| startDate | M | String(16) | 查询开始时间。  格式：YYYY-MM-DD。 |
| endDate | M | String(16) | 查询结束时间。  格式：YYYY-MM-DD  不能超过开始时间31天。 |
| page | O | Integer | 分页查询时指定返回数据的页码。  取值范围大于等于1。  默认值：1，表示第1页。 |
| pageSize | O | Integer | 分页查询时指定返回数据每页的条数。  取值范围：[1,1000]  默认值：20 |
| pricingType | O | String | 计费类型。  取值范围：   - CPD：按下载次数计费 - OCPD：系统智能调价，按下载次数计费 - CPC：按点击计费 - CPT：按时长计费 |
| orderField | O | String(16) | 返回数据的排序方式。  取值范围：   - DATE：按统计日期排序 - COST：按消耗金额排序 - EXPOSURE：按展示量排序 - CLICK：按点击量排序 - DOWNLOAD：按下载量排序   默认值：DATE |
| orderType | O | String | 返回数据升序还是降序排序。  取值范围：   - DESC：降序排序 - ASC：升序排序   默认值：ASC |
| groupby | O | List&lt;String&gt;(10) | 返回数据的分组方式。  取值范围：   - statDate：按统计日期分组 - taskId：按任务ID分组 - subTaskId：按子任务ID分组 - region：按任务投放区域分组 - channel：按渠道号分组。此处渠道号仅指智能分包渠道号。   默认值：statDate  可同时支持多种分组方式。 |
| customerId | O | String(64) | 直客团队协作者的内部ID。  直客团队协作者查询时必须携带，该字段请使用<strong>协作者账户</strong>登录[华为应用市场应用推广平台](https://ads.huawei.com/cn/)后在“我的账号信息”中查看到的“华为账号”。  <strong>说明：</strong>   - 协作者查询时，会使用此字段与直客管理者账户ID校验从属关系，再根据此字段查询报表。 - 代理模式不支持携带此字段。 |
| filtering | O | [AdSubTaskReportFiltering](/docs/monetize/promotion/marketapi-modle-adsubtaskreportfiltering-0000001154838276) | 本次查询的过滤条件。 |

## 请求示例

```
POST https://connect-api.cloud.huawei.com/api/marketing-api/v1/report/ad/subtask
Content-type: application/json
Authorization: Bearer ***
client_id:***

{
    "startDate":"2021-09-14",
    "endDate":"2021-09-14",
    "groupby": [
        "statDate",
        "taskId",
        "subTaskId"
    ],
    "customerId": "12345",
    "filtering": {
        "taskIds": [
            "101153900"
        ],
        "subTaskIds": [
            "1437676090851860480"
        ]
    }
}
```

## 响应参数

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| code | M | Integer | 返回码。  具体请参见[错误码](/docs/monetize/promotion/marketapi-returncode-0000001135626866)。 |
| msg | M | String | 返回码描述信息。 |
| total | O | Long | 总记录数。 |
| datas | O | List&lt;[AdSubTaskStatistic](/docs/monetize/promotion/marketapi-modle-adsubtaskstatistic-0000001202666373)&gt; | 推广子任务详情。在给定查询条件，任务未产生展示和下载，则返回为空。 |

## 响应示例

```
{
    "code": 20770001,
    "msg": "",
    "total": 1,
    "datas": [{
        "statDate": "2021-09-14",
        "taskId": 101153900,
        "subTaskId": "1437676090851860480",
        "cost": 180,
        "show": 0,
        "exposure": 120,
        "click": 50,
        "clickRate": 0.42,
        "download": 31,
        "downloadRate": 0.26,
        "downloadAverageCost":  5.8,
        "conversions": [
          {
             "conversionBehaviorId": "123",
             "conversionCount": 6,
             "conversionRate": 0.3,
             "conversionAvgPrice": 6.6
          }
        ]
    }]
}
```

## 调用示例

```
“Curl”
curl -X POST https://connect-api.cloud.huawei.com/api/marketing-api/v1/report/ad/subtask -H "Authorization:Bearer ***" -H "client_id:***" -H "Content-type: application/json"-d '{"startDate":"2021-04-06","endDate":"2021-04-20"}'
```

```
“Java”
/**
 * 查询推广子任务统计报表数据
 * @param token 认证信息
 * @throws InvocationTargetException
 * @throws IllegalAccessException
 */
public static void getAdSubTaskReport(String token) throws InvocationTargetException, IllegalAccessException {
 /** 任务ID */
 List<String> ids = new ArrayList<>();
 ids.add("200003996");
 ids.add("200004039");

/** 子任务ID */
List<String> subTaskIds = new ArrayList<>();
subTaskIds.add("1422176497522974720");
subTaskIds.add("1412607701430837248");
 
 /** 任务投放区域 */
 List<String> regions = new ArrayList<>();
 regions.add("CN");
 
 /**  新建推广子任务过滤条件，并插入数据 */
 AdSubTaskReportFiltering filtering = new AdSubTaskReportFiltering();
 filtering.setTaskIds(ids);
 filtering.setSubTaskIds(subTaskIds);
 filtering.setRegions(regions);
 
 /** 查询开始时间 */
 String startDate = "2020-02-01";
 /** 查询结束时间 */
 String endDate = "2020-02-25";
 /** 返回数据页面，默认第一页 */
 int page = 1;
 /** 返回数据每条页数，默认20 */
 int pageSize = 20;
 /** 返回数据排序字段，默认统计日期 */
 String orderField = "DATE";
 /** 返回数据排序方式，默认降序排序 */
 String orderType = "DESC";
 /** 返回数据汇总字段，默认统计日期 */
 List<String> groupby = new ArrayList<>();
 groupby.add("taskId");
 groupby.add("subTaskId");
 groupby.add("region");
 
 /**  新建推广子任务查询条件，并插入数据 */
 AdSubTaskReportReqInfo reqInfo = new AdSubTaskReportReqInfo();
 reqInfo.setFiltering(filtering);
 reqInfo.setStartDate(startDate);
 reqInfo.setEndDate(endDate);
 reqInfo.setPage(page);
 reqInfo.setPageSize(pageSize);
 reqInfo.setOrderField(orderField);
 reqInfo.setOrderType(orderType);
 reqInfo.setGroupby(groupby);
 
 /** 发送请求 */
 GetAdSubTaskReport.getAdSubTaskReport(domain, clientId, token, reqInfo);
}
 
/**
 * 查询推广子任务统计报表数据
 *
 * @author xxxxxxxxx
 * @since 2020-02-28
 */
public class GetAdSubTaskReport {
    public static void getAdSubTaskReport(String domain, String clientId, String token, AdSubTaskReportReqInfo req)
            throws InvocationTargetException, IllegalAccessException {
        try {
            /** 新建POST请求 */
            HttpPost post = new HttpPost(domain + "/apmas/marketing-api/v1/report/ad/subtask");
 
            /** 设置Header认证信息 */
            post.setHeader("Authorization", "Bearer " + token);
            post.setHeader("client_id", clientId);
 
            /** 组装请求Body，使用JSON格式携带查询信息 */
            String reqStr = JSON.toJSONString(req);
            StringEntity entity = new StringEntity(reqStr, Charset.forName("UTF-8"));
            entity.setContentEncoding("UTF-8");
            entity.setContentType("application/json");
 
            /** 设置请求Body */
            post.setEntity(entity);
 
            /** 发送请求 */
            CloseableHttpClient httpClient = HttpClients.createDefault();
            CloseableHttpResponse httpResponse = httpClient.execute(post);
 
            /** 处理返回参数 */
            int statusCode = httpResponse.getStatusLine().getStatusCode();
            if (statusCode == HttpStatus.SC_OK) {
                BufferedReader br =
                        new BufferedReader(new InputStreamReader(httpResponse.getEntity().getContent(), Consts.UTF_8));
                String result = br.readLine();
 
                /** 推广任务统计报表返回对象，可以参考接口文档使用AdTaskReportResponse对象接收 */
                JSONObject object = JSON.parseObject(result);
                System.out.println(object);
            }
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}
```
