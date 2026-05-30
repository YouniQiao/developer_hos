---
title: "AdCreative"
displayed_sidebar: monetizationSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/monetize/agd_pro_api_if_adcreative-0000001294886337
---


![](./img/agd_pro_api_if_adcreative-0000001294886337_0.png)

仅原生广告会返回，其他类型的展示位无需关注该字段。

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| id | O | `String` | 创意ID。 |
| title | O | `String` | 创意标题。 |
| creativeType | O | `String` | 素材类型。  取值范围：   * SINGLEPIC：单图，对应界面“竖版大图”与“横版大图”。 * THREEPIC：三图，对应界面“横版小三图”。 * VIDEO：视频素材，对应界面“竖版视频”与“横版视频”。 * MINIPIC：小图，对应界面“横版小图”。 |
| images | O | List< [Image](https://developer.huawei.com/consumer/cn/doc/monetize/agd_pro_api_if_image-0000001247767308)> | 图片信息列表。  根据展示位样式的创意规格返回。 |
| video | O | [Video](https://developer.huawei.com/consumer/cn/doc/monetize/agd_pro_api_if_video-0000001295045733) | 视频信息。  根据展示位样式的创意规格返回。 |
| slogan | O | `String` | 创意文案。  最大长度128。 |
| adWapUrl | O | `String` | 广告主配置的点击H5跳转地址。  不同地址的使用场景和优先级，详见[场景处理](https://developer.huawei.com/consumer/cn/doc/monetize/agd_pro_api_scenario-handle-0000001262378977)章节。  最大长度1024。 |
| adDeeplink | O | `String` | 广告主配置的点击Deeplink跳转地址。  最大长度1024。 |
