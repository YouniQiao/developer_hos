---
title: "BrowserContent"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-modle-browsercontent-0000001135467058
format: md
---

# BrowserContent

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| pageType | O | String | - DEFAULT：默认的应用详情页 - DEEPLINK：开发者输入的deeplink地址 - LANDINGPAGE：自定义落地页 |
| pageId | O | String | 落地页ID |
| contentTitle | M | String | 素材标题 |
| contentType | M | String | 素材类型。  取值范围：   - SINGLEPIC：单图 - THREEPIC：三图 - BIGPIC：大图 - GIFPIC：gif动图 - VIDEO：视频 |
| verticalScreenPic1 | M | String | 单图、双图、三图、gif图、视频素材的第一图对应的竖屏图片素材ID。素材大小详见华为应用市场应用推广-创建任务页面素材提示规格。 |
| verticalScreenPic2 | O | String | 单图、双图、三图、gif图、视频素材的第二图对应的竖屏图片素材ID。素材大小详见华为应用市场应用推广-创建任务页面素材提示规格。  contentType为两图和三图时必填。 |
| verticalScreenPic3 | O | String | 单图、双图、三图、gif图、视频素材的第三图对应的竖屏图片素材ID。素材大小详见华为应用市场应用推广-创建任务页面素材提示规格。  contentType为三图时必填。 |
| video | O | String | 视频素材ID。素材大小详见华为应用市场应用推广-创建任务页面素材提示规格。  contentType为VIDEO时必填。 |
| attachment | O | String | 资质素材ID。素材大小详见华为应用市场应用推广-创建任务页面素材提示规格。 |
| landingPageType | M | String | 落地页类型。  取值范围：   - PIC：大图 - APP：应用介绍 - VIDEOPIC：视频+图片 - VIDEOS：多视频 |
| landingPageContent | M | String | 落地页素材内容。素材大小详见华为应用市场应用推广-创建任务页面素材提示规格   - PIC示例如下：    ```   "\{'pic':\{'url':'3222001'\}\}"   ``` - APP示例如下：    ```   "\{'app': \{'appDesc':'DESC', 'copywriting': 'copywriting','enname': 'enname', 'icon': 'icon', 'name': 'name',  'pics': [  '3222010', '3222011','3222012'],'title': 'title' \}\}"   ``` - VIDEOPIC示例如下：    ```   "\{ 'videoPic': \{'picUrl': '3222013','videoUrl': '3222014'  \}\}"   ``` - VIDEOS示例如下：    ```   "\{ 'videos': \{'picUrl': '3222015', 'video': [\{ 'title': 'title', 'videoUrl': '3222016'\},  \{ 'title': 'title','videoUrl': '3222017'\}]\}\}"   ``` |
| landingPageObsUrl | M | String | 访问落地页素材内容的地址。 |
