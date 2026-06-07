---
title: "FixPositionContent"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketapi-modle-fixpositioncontent-0000001135467070
format: md
---

# FixPositionContent

| 字段 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| pageType | O | String | - DEFAULT：默认的应用详情页 - DEEPLINK：开发者输入的deeplink地址 - LANDINGPAGE：自定义落地页 |
| pageId | O | String | 落地页ID。 |
| content | O | String | 素材内容。 |
| contentType | O | String | 素材类型。  取值范围：   - PIC：图片 - VIDEO：视频 |
| verticalScreenPic | O | String | CPT推广素材竖屏图片。  这里填写创建素材接口返回的素材ID。 |
| crossScreenPic | O | String | CPT推广素材横屏图片。  这里填写创建素材接口返回的素材ID。 |
| attachment | O | String | 肖像使用资质证明。  这里填写创建素材接口返回的素材ID。 |
| deepLinkUrl | O | String | CPT推广素材DeepLink地址。 |
| verticalScreenFloatPic | O | String | CPT推广素材出血图竖屏图片。  这里填写创建素材接口返回的素材ID。 |
| crossScreenFloatPic | O | String | CPT推广素材出血图横屏图片。  这里填写创建素材接口返回的素材ID。 |
| video | O | String | 视频素材访问地址。 |
| landingPageQualification | O | String | 自定义落地页资质证明。  这里填写创建素材接口返回的素材ID。  <strong>pageType</strong>为自定义落地页是必填。 |
