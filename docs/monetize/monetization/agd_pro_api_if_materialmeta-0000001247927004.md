---
title: "MaterialMeta"
displayed_sidebar: monetizationSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/monetize/agd_pro_api_if_materialmeta-0000001247927004
---


| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| adFlag | O | `Integer` | 是否为商业化结果。  取值范围：   * 0：否 * 1：是   说明：  默认不返回自然量，如果需要自然量，请和运营单独申请。 |
| styleType | O | `Integer` | 广告样式类型。  取值范围：   * 4：应用搜索 * 5：应用推荐 * 7：原生广告 |
| adTagDesc | O | `String` | 广告标识文字。  即在APP侧显示的文字，当前仅支持中文。 |
| interactType | O | `Integer` | 广告交互类型。  取值范围：   * 1：应用下载 * 3：打开应用 * 5：应用推广（即下载或打开应用，广告主未做限制） |
| creative | O | [AdCreative](https://developer.huawei.com/consumer/cn/doc/monetize/agd_pro_api_if_adcreative-0000001294886337) | 原生广告物料。  说明：  仅原生广告会返回，其他类型的展示位无需关注该字段。 |
| appInfo | O | [AdAppInfo](https://developer.huawei.com/consumer/cn/doc/monetize/agd_pro_api_if_adappinfo-0000001248246048) | 应用信息。 |
| showUrl | O | `String` | 曝光回调地址，媒体侧曝光后回调此地址。  格式如下：  ``` https://xxxx.xxxx.com/agd/mediareport?time=__TIME__&xxxxxxxxx ```  媒体需替换的宏参数：  * time：曝光时长。单位：ms。  说明：  * 曝光回调时，GET请求该地址即可。 * 如果apiVersion为**shortbodyv1**时，此字段不填值，通过trackUrls字段传参。 |
| clickUrl | O | `String` | 点击回调地址，用户在媒体上点击了广告回调此地址。  格式如下：  ``` https://xxxx.xxxx.com/agd/mediareport?clickType=__CLICKTYPE__&xxxxxxxxx ```  媒体需替换的宏参数：  * clickType：点击类型。取值：icon、install。点击图文时此字段取值为“icon”；点击按钮时此字段取值为“install”。  说明：  * 曝光回调时，GET请求该地址即可。 * 如果apiVersion为**shortbodyv1**时，此字段不填值，通过trackUrls字段传参。 |
| trackUrls | O | List< [EventTrack](https://developer.huawei.com/consumer/cn/doc/monetize/agd_pro_api_if_eventtrack-0000001248086780)> | 其他事件跟踪上报地址。  具体请参见[EventTrack](https://developer.huawei.com/consumer/cn/doc/monetize/agd_pro_api_if_eventtrack-0000001248086780)。 |
| ecpm | O | `Float` | 预估千次曝光收入（分成后），不作为结算依据，需向运营申请权限。  该字段为预留参数，当前版本不会返回，媒体可提前做好适配。  单位：分/千次曝光。  说明：  此字段在Beta测试中，如果需要使用，请发送邮件到developer@huawei.com申请开通此字段。 |
