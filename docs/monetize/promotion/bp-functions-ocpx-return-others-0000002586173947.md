---
title: "一方数据回传"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/bp-functions-ocpx-return-others-0000002586173947
format: md
upstream_id: monetize/promotion/bp-functions-ocpx-return-others-0000002586173947
last_sync: 2026-06-07
sync_hash: 4298cd8a
---
# 一方数据回传

## 业务介绍

一方数据是指广告主在全渠道投放的广告转化数据。除华为应用市场应用推广平台外，其他常见渠道有华为鲸鸿动能、巨量引擎、腾讯广告等。

通过回传华为设备上其他投放渠道产生的有效转化数据，可实现模型优化增强，提升oCPD的投放精准度和效率。

## 适用场景

适合转化稀疏（转化量＜100个/日）的后端转化目标，如首次付费、每次付费、授信等。扩大正样本输入范围可有效弥补转化数据稀疏的问题，辅助构建核心用户特征模型，实现更精准的广告触达。

## 使用方法

一方数据回传与华为应用市场推广数据回传方式一致。[回传用户行为数据接口](/docs/monetize/promotion/bp-functions-ocpd-interface-return-0000001238484400)对应参数已新增枚举值，用于标识一方数据来源。

回传后需开通应用白名单，用于将一方数据加入模型学习。请提供应用ID和应用名称，通过行业运营、客服邮箱（developer@huawei.com）与我们联系开通。

![](./img/caution_3.0-zh-cn_5dfc6aebb31d.png) 

一方数据来源于外部投放渠道，不涉及归因。标识为一方数据的回传量仅用于模型优化辅助获量，不影响现有投放任务效果，不在报表中展示。

## 回传要求

1. 采集来自华为设备、且非华为应用市场推广平台投放任务所产生的转化行为。例如，考核授信目标的应用，可回传巨量引擎渠道实时产生的华为用户授信行为数据。
2. 为保障模型优化效果，建议30天累计回传量&gt;=2000条。
3. 以下回传参数新增一方数据标识：

   |  |  |  |  |
   | --- | --- | --- | --- |
   | <strong>参数名称</strong> | <strong>类型</strong> | <strong>参数说明</strong> | <strong>必选/</strong> <strong>可选</strong> |
   | callBack | String  (1024) | 一方数据回传量原值填写：third。（固定，仅支持小写）回传时callBack参数中间的B大写，否则接口报错。  注意：  回传外部数据时勿影响到正常华为应用市场应用推广渠道数据的归因回传。应用市场推广回传通过对接归因方案获取的callBack原值，勿进行urlencode。 | 必选 |
   | actionParam | String  (10240) | 用户行为属性填写一方数据回传样本来源的推广平台，辅助算法优化。  <strong>actionParam=[\\{'name':'</strong> <strong>推广平台','value':'</strong> <strong>华为鲸鸿动能/</strong> <strong>巨量引擎/</strong> <strong>腾讯广告……'\\}]</strong>  说明：  “推广平台”的“value”可填写：华为鲸鸿动能、巨量引擎、腾讯广告、百度营销、磁力引擎、阿里妈妈、爱奇艺广告、B站花火、小红书蒲公英、知乎知+、美团广告、其他。 | 必选 |
4. 一方数据回传示例（来源巨量引擎的授信行为）：

   ```
   POST https://connect-api.cloud.huawei.com/api/datasource/v1/track/activate
   Content-type: application/json
   Authorization: Bearer ***
   client_id:***
   {
       "actionType": "6",
       "actionTime":1593608299858,
       "deviceIdType": "OAID",
       "appId": "10** **05",
       "callBack": "third",
       "deviceId":"f85f3056-f209-4fc3-a317-aeea** **f08c",
       "actionParam":"[{'name':'推广平台','value':'巨量引擎'}]"
   }
   ```
