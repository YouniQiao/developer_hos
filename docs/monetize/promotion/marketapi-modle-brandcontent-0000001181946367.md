---
title: "BrandContent"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-modle-brandcontent-0000001181946367
format: md
---

# BrandContent

| 字段 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| pageType | O | String | - DEFAULT：默认的应用详情页 - DEEPLINK：开发者输入的deeplink地址 - LANDINGPAGE：自定义落地页 |
| pageId | O | String | 落地页ID。 |
| contentType | O | String | 素材类型：   - PIC：图片 - VIDEO：视频 |
| verticalScreenPic | O | String | CPT推广素材竖屏图片，这里填写创建素材接口返回的素材ID。素材大小详见华为应用市场应用推广-创建任务页面素材提示规格。 |
| crossScreenPic | O | String | CPT推广素材横屏图片，这里填写创建素材接口返回的素材ID。素材大小详见华为应用市场应用推广-创建任务页面素材提示规格。 |
| attachment | O | String | 肖像使用资质证明，这里填写创建素材接口返回的素材ID。素材大小详见华为应用市场应用推广-创建任务页面素材提示规格。 |
| deepLinkUrl | O | String | CPT推广素材DeepLink地址。 |
| verticalScreenFloatPic | O | String | CPT推广素材出血图竖屏图片，这里填写创建素材接口返回的素材ID。 |
| crossScreenFloatPic | O | String | CPT推广素材出血图横屏图片，这里填写创建素材接口返回的素材ID。素材大小详见华为应用市场应用推广-创建任务页面素材提示规格。 |
| video | O | String | 视频素材访问地址。 |
| landingPageQualification | O | String | 自定义落地页资质证明，这里填写创建素材接口返回的素材ID。  pageType为自定义落地页是必填。 |
