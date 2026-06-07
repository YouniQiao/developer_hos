---
title: "CpdVideoContent"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketapi-modle-cpdvideocontent-0000001135467060
format: md
---

# CpdVideoContent

| 字段 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| pageType | O | String | - DEFAULT：默认的应用详情页 - DEEPLINK：开发者输入的deeplink地址 - LANDINGPAGE：自定义落地页 |
| pageId | O | String | 落地页id。 |
| attachment | O | String | 推广素材肖像使用资质证明，这里填写创建素材接口返回的素材ID。素材大小详见华为应用市场应用推广-创建任务页面素材提示规格 |
| showPic | M | String | 视频封面图片，这里填写创建素材接口返回的素材ID。素材大小详见华为应用市场应用推广-创建任务页面素材提示规格 |
| showBigPic | M | String | 视频封面大图，这里填写创建素材接口返回的素材ID。素材大小详见华为应用市场应用推广-创建任务页面素材提示规格 |
| video | M | String | 视频素材地址，这里填写创建素材接口返回的素材ID。素材大小详见华为应用市场应用推广-创建任务页面素材提示规格 |
| deepLinkUrl | O | String | CPC任务deeplinkUrl。 |
