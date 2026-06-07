---
title: "AdSlot"
displayed_sidebar: monetizationSidebar
original_url: /docs/monetize/monetization/agd_pro_api_if_adslot-0000001247758004
format: md
---



| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| slotId | M | `String` | 展示位ID。  通过AGC管理台创建展示位时产生（当前原生广告仅支持国内）请从AGC界面复制，创建请参见[创建媒体及展示位](/docs/monetize/monetization/agd_pro_api_creat-media-display-position-0000001246432546)。 |
| adCount | M | `Integer` | 请求广告数量。  取值范围：[1,30]  为保证广告数据有较高的填充率，原生广告建议取值1-3，推荐和搜索广告建议取值3-10。  注意：  请确保⼴告的展示率，展示率过低有可能影响后续填充。 |
| pageNumber | O | `Integer(32)` | 当前请求的页码数。用于广告列表分页时使用。  取值范围：[1,10] |
| installedApp | M | `Integer` | 返回应用的安装过滤标识。适用于应用推荐及原生广告场景。  外部媒体仅支持传1。其他字段仅对华为内部媒体生效。  取值范围：   * 1：仅未安装应用，拉新下载场景。 |
| personalize | O | `Integer(32)` | 个性化推荐标识。  有OAID传入的情况下，建议开启个性化。  取值范围：   * 0：非个性化推荐。 * 1：个性化推荐。   默认值：0  说明：  海外暂不支持个性化推荐。 |
| keywords | O | `String` | 搜索关键词。  展示位类型为应用搜索场景时必填。 |
| downloadType | M | `Integer` | 媒体侧的应用下载方式。  外部媒体仅支持取值“2”。  取值范围：   * 2：通过deeplink下载（安装方式有限），对应返回downloadLink。 |
| installType | O | `Integer` | 通过downloadLink下载时的安装方式，仅downloadType=2时必填且有效。  取值范围：   * 1：Mini详情页，手动安装。  * 6：全屏详情页，手动安装（默认方式）。 |
| packageTypes | O | `String` | 应用包类型列表。  仅搜索场景有效。  多个以英文逗号隔开。  取值范围：   * 0：APK * 3：RPK（快应用的交互类型固定为“3”。）   默认值：0  说明：  该字段仅限“应用搜索”和“应用推荐”展示位场景，不传默认支持所有应用包类型。 |
| associatedApp | O | [AssociatedApp](/docs/monetize/monetization/agd_pro_api_if_associatedapp-0000001294717601) | 关联推荐应用，媒体可传入宿主应用，此时系统将根据宿主应用返回相关的推荐应用。 |
| interactTypes | O | List`Integer` | 端侧支持的广告交互类型。  此字段与installedApp字段同时传入时优先以此字段为准。  取值范围：   * 1：应用下载，即应用推荐下载场景。 * 3：打开应用，即促活打开场景。 * 5：应用推广，即下载或打开应用场景，这两种场景，不限制返回。   多个值之间用逗号分隔。 |
