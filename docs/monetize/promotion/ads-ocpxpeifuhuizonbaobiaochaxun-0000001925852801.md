---
title: "ocpx赔付汇总报表查询"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/ads-ocpxpeifuhuizonbaobiaochaxun-0000001925852801
format: md
---

# ocpx赔付汇总报表查询

【简介】广告主通过广告主ID、任务ID查询Ocpx结算报表数据。

<strong>请求地址</strong>

https://ads.cloud.huawei.com/openapi/v2/reports/ocpx/queryCompensation

<strong>请求方法</strong>

<strong>POST</strong>

<strong>请求参数</strong>

| <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> | |
| --- | --- | --- | --- | --- |
| advertiser\_id | String | 否 | 广告主ID，当登录授权的华为账号为如下场景时此字段必填：  1）授权账号关联的是经理账户；  2）授权账号关联的是服务商账户；  3）授权账号关联了多个子客账户。 | |
| is\_abroad | Boolean | 否 | 是否为海外广告主. | |
| adgroup\_id\_list | list&lt;string&gt; | 否 | 任务ID List | |
| page | integer | 否 | 页数，默认值1，从1开始 | |
| page\_size | integer | 否 | 期望返回页大小。默认20，取值范围1-10000 | |
| ocpx\_event\_types | list&lt;OcpxEventType&gt; | 否 | OCPX任务转化目标类型 | |
| compensation\_status | list&lt;string&gt; | 否 | 保障状态:  COMPENSATING-保障中  NOT\_MEET\_COMPENSATING-不满足保障  NO\_NEED\_COMPENSATION-保障结束无需赔付  NEED\_COMPENSATION-保障金额统计完成  COMPENSATION\_CHECKING-保障核实中  FREE\_OF\_COMPENSATION-不涉及  COMPENSATION\_ENDED\_WITH\_ARREARS-保障结束但欠费  NEED\_COMPENSATION\_ARREARS\_CLEAR-欠费已补齐保障金额统计完成 | |
| compensation\_periods | list&lt;integer&gt; | 否 | 保障周期，1-周期一，2-周期二 | |
| first\_imp\_time\_begin | string | 是 | 首次曝光时间起始时间，北京时间  YYYY-MM-DD hh:mm:ss | |
| first\_imp\_time\_end | string | 是 | 首次曝光时间结束时间，北京时间  YYYY-MM-DD hh:mm:ss | |

ocpx\_event\_types (OcpxEventType)参数：

| 参数名称 | 类型 | 是否必选 | 描述 |
| --- | --- | --- | --- |
| shallow\_event\_type | string | 否 | [浅层转化目标](https://developer.huawei.com/consumer/cn/doc/promotion/ads_api73-0000001058884698#section895919210500) |
| deep\_event\_type | string | 否 | [深层转化目标](https://developer.huawei.com/consumer/cn/doc/promotion/ads_api73-0000001058884698#section19717184085911) |
| deep\_optimize\_type | integer | 否 | [深度优化类型](https://developer.huawei.com/consumer/cn/doc/promotion/ads_api73-0000001058884698#section161959511115)，1-双出价；2-双阶段；3-单目标加强点 |

<strong>请求示例</strong>

```
POST openapi/v2/reports/ocpx/queryCompensation HTTP/1.1
Accept:application/json
Content-Type:application/json
Authorization:Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=
 
{
       "advertiser_id": "381061631473395584",
       "adgroup_id_list": ["1111","2222","3333"],
       "page": 1,
       "page_size": 10,
       "ocpx_event_types": [
              {
              "shallow_event_type": 1,
              "deep_event_type": 1,
              "deep_optimize_type": null
              }
       ],
       "compensation_status": ["NOT_MEET_COMPENSATING"],
       "compensation_periods": ["1"],
       "first_imp_time_begin": "2024-03-05 00:00:00",
       "first_imp_time_end": "2024-05-06 00:00:00",
    "is_abroad": true
}
```

<strong>响应字段</strong>

|  |  |  |
| --- | --- | --- |
| <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
| result\_code | integer | 0：查询成功 1：起始索引超出查询结果范围其他：未知失败 |
| desc | string | 结果描述 |
| total\_num | integer | 满足查询条件总条数 |
| page\_size | integer | 每页大小 |
| page | integer | 当前页 |
| total\_page | integer | 总页数 |
| summary\_data | OcpxCompensation | 汇总数据 |
| data | list&lt;OcpxCompensation&gt; | 查询结果 |

data(OcpxCompensation)参数

|  |  |  |
| --- | --- | --- |
| <strong>参数名称</strong> | 类型 | 描述 |
| id | string | ID |
| adgroup\_name | string | 任务名称 |
| adgroup\_id | string | 任务id |
| event\_type | string | 转化目标 |
| compensation\_begin\_time | string | 保障开始时间 |
| compensation\_end\_time | string | 保障结束时间 |
| compensation\_real\_cost | BigDecimal | 花费 |
| compensation\_expect\_cost | BigDecimal | 期望消耗 |
| compensation\_amount | BigDecimal | 保障金额 |
| deep\_event\_type | string | 深度转化目标 |
| compensation\_period | integer | 保障周期，1-周期一，2-周期二 |
| compensation\_status | string | 保障状态:  COMPENSATING-保障中，  NOT\_MEET\_COMPENSATING-不满足保障，  NO\_NEED\_COMPENSATION-保障结束无需赔付，  NEED\_COMPENSATION-保障金额统计完成，  COMPENSATION\_CHECKING-保障核实中，  FREE\_OF\_COMPENSATION-不涉及  COMPENSATION\_ENDED\_WITH\_ARREARS-保障结束但欠费  NEED\_COMPENSATION\_ARREARS\_CLEAR-欠费已补齐保障金额统计完成 |
| date | string | 数据周期时间，YYYY-MM-DD hh:mm:ss |
| conversion\_cost | BigDecimal | 转化成本 |
| deep\_conversion\_cost | BigDecimal | 深层转化成本 |
| expect\_conversion\_cost | BigDecimal | 目标转化成本 |
| deep\_expect\_conversion\_cost | BigDecimal | 深层目标转化成本 |
| compensated\_conversion\_cost | BigDecimal | 保障后浅层转化成本 |
| compensated\_deep\_conversion\_cost | BigDecimal | 保障后深层转化成本 |
| conversion\_nums | integer | 转化数 |
| deep\_conversion\_nums | integer | 深层转化数 |
| deep\_optimize\_type | integer | 深度优化类型，1-双出价；2-双阶段；3-单目标加强点 |
| ad\_income\_one\_day\_roi | BigDecimal | 广告变现ROI1 |
| target\_ad\_income\_one\_day\_roi | BigDecimal | 目标广告变现ROI1 |
| compensated\_ad\_income\_one\_day\_roi | BigDecimal | 保障后广告变现ROI1 |

<strong>应答示例</strong>

```
HTTPS/1.1 200 OK
{
    "result_code": 0,
    "desc": "查询成功",
    "page": 1,
    "page_size": 1,
    "total_num": 1,
    "total_page": 1,
    "summary_data": {
        "deep_conversion_nums": 0,
        "conversion_nums": 101,
        "compensated_deep_conversion_cost": "0",
        "compensation_real_cost": "25.69843",
        "compensation_expect_cost": "25.69843",
        "compensated_conversion_cost": "36.29370",
        "compensation_amount": "0.00000",
        "deep_expect_conversion_cost": "0",
        "conversion_cost": "36.29370",
        "deep_conversion_cost": "0",
        "expect_conversion_cost": "23.29527"
    },
    "data": [
        {
            "deep_conversion_nums": 0,
            "adgroup_id": "76020571",
            "conversion_nums": 101,
            "compensated_deep_conversion_cost": "100.65241",
            "compensation_end_time": "2024-03-20 23:59:59",
            "compensation_status": "COMPENSATION_CHECKING",
            "compensation_begin_time": "2024-03-20 10:00:00",
            "event_type": "TRACKING_ACTIVE",
            "compensation_real_cost": "25.69843",
            "compensation_expect_cost": "25.69843",
            "compensated_conversion_cost": "92.65241",
            "compensation_period": 1,
            "compensation_amount": "0.00000",
            "deep_event_type": "EVENT_TYPE_null",
            "deep_expect_conversion_cost": "98.65241",
            "id": "9210412603474414929",
            "conversion_cost": "0.00000",
            "adgroup_name": "zytestdd02原生-20230809-竞价-复制任务",
            "deep_conversion_cost": "0.00000",
            "expect_conversion_cost": "23.00000"
        }
    ]
}
```
