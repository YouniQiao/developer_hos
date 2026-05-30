---
title: "SearchBrandContent"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-modle-searchbrandcontent-0000001135626860
---
# SearchBrandContent

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| pageType | O | String | - DEFAULT：默认的应用详情页 - DEEPLINK：开发者输入的deeplink地址 - LANDINGPAGE：自定义落地页 |
| pageId | O | String | 落地页ID。 |
| contentTitle | M | String | 素材标题。 |
| contentType | M | String | 素材类型。  取值范围：   - SINGLEPIC：单图 - COUPLEPIC：双图 - THREEPIC：三图 - GIFPIC：gif动图 - VIDEO：视频 |
| verticalScreenPic1 | O | String | 单图、双图、三图、gif图、视频素材的第一图对应的竖屏图片，这里填写创建素材接口返回的素材ID。素材大小详见华为应用市场应用推广-创建任务页面素材提示规格。 |
| verticalScreenPicName1 | O | String | 单图、双图、三图、gif图、视频素材的第一图对应的竖屏图片名称。 |
| verticalScreenPic2 | O | String | 双图、三图中的第二图对应的竖屏图片，这里填写创建素材接口返回的素材ID。素材大小详见华为应用市场应用推广-创建任务页面素材提示规格。 |
| verticalScreenPicName2 | O | String | 双图、三图中的第二图对应的竖屏图片名称。 |
| verticalScreenPic3 | O | String | 三图中的第三图对应的竖屏图片，这里填写创建素材接口返回的素材ID。素材大小详见华为应用市场应用推广-创建任务页面素材提示规格。 |
| verticalScreenPicName3 | O | String | 三图中的第三图对应的竖屏图片名称。 |
| video | O | String | 视频素材地址，这里填写创建素材接口返回的素材ID。素材大小详见华为应用市场应用推广-创建任务页面素材提示规格。 |
| videoName | O | String | 视频文件名称。 |
| attachment | O | String | 肖像使用资质证明，这里填写创建素材接口返回的资质素材ID。素材大小详见华为应用市场应用推广-创建任务页面素材提示规格。 |
| slogan | M | String | 宣传语。 |
| appDeepLinkUrl | O | String | DeepLink跳转应用内的URL。 |
| httpDeepLinkUrl | O | String | DeepLink跳转到浏览器页面URL。 |
