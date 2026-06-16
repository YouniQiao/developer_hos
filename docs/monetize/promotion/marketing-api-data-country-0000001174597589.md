---
title: "国家/地区数据"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketing-api-data-country-0000001174597589
format: md
upstream_id: monetize/promotion/marketing-api-data-country-0000001174597589
last_sync: 2026-06-07
sync_hash: 9eeb87d5
---
# 国家/地区数据

您通过本接口查询计划或任务国家维度统计报表，包括各个国家的花费、点击量、点击均价等。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  <strong>亚非拉：</strong>https://ads-dra.cloud.huawei.com/openapi/v2/reports/country/query

  <strong>俄罗斯：</strong>https://ads-drru.cloud.huawei.ru/openapi/v2/reports/country/query

  <strong>欧洲：</strong>https://ads-dre.cloud.huawei.com/openapi/v2/reports/country/query
- <strong>请求方法</strong>：<strong>POST</strong>
- <strong>请求参数</strong>：

  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | --- | --- | --- | --- |
  | advertiser\_id | string | 否 | 广告主ID，经理账户或者服务商账户登录时，则此字段必填；当前操作的华为账号支持多个广告主账户时，此字段必填。 |
  | start\_date | string | 是 | 起始时间  格式:"yyyy-MM-dd"。 |
  | end\_date | string | 是 | 结束时间  格式:"yyyy-MM-dd"。 |
  | filtering | Struct1 | 否 | 过滤字段。 |
  | topn | integer | 否 | 按照指标排序顺序，取前N个。 |
  | order\_field | string | 否 | 排序指标。所有的统计指标都可以用于排序，字符串形式样例：  cost：花费  click\_count：点击量  download\_count：下载量  install\_count：安装量  active\_count\_normalized：激活量  register\_count：注册。 |
  | order\_type | string | 否 | 排序方式，取值为:"ASC","DESC（默认值）"。 |
  | is\_abroad | Boolean | 是 | 是否为非中国大陆账户，取值为：  true为海外账户：非中国大陆账户  false：为中国大陆账户。 |
  | index\_screen\_list | List &lt;Struct3&gt; | 否 | 指标筛选。 |
  | dimension\_type | Struct2 | 否 | 维度细分。 |
  | flow\_resource | integer | 否 | 投放网络。 |
  | campaign\_type | integer | 否 | 计划类型：1.展示广告；2.关键词广告；3.推送广告；4.商品类广告。 |
  | time\_line | string | 否 | 时间口径，详见[时间口径](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#时间口径)。 |
  | time\_granularity | string | 是 | "STAT\_TIME\_GRANULARITY\_DAILY"天粒度，详见[时间粒度](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#时间粒度)。 |
  | target\_country | list | 否 | 国家编码，如["AF", "AE"]  只有time\_granularity= "STAT\_TIME\_GRANULARITY\_SUMMARY"时生效。 |

  filtering(Struct1)参数：

  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | --- | --- | --- | --- |
  | other\_filter\_type | string | 否 | 按照数据细分类型。 枚举为"CAMPAIGN","ADGROUP","CREATIVE"。 |
  | campaign\_ids | string[] | 否 | 推广计划ID；如果为other\_filter\_type= "CAMPAIGN"，可以设置过滤的计划ID列表，如果为空表示全部。 |
  | adgroup\_ids | string[] | 否 | 任务ID；如果为other\_filter\_type= " ADGROUP"，可以设置过滤的任务ID列表，如果为空表示全部。 |
  | creative\_ids | string[] | 否 | 创意ID；如果为other\_filter\_type= " CREATIVE"，可以设置过滤的创意ID列表，如果为空表示全部。 |

  dimension\_type (Struct2)参数：

  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | --- | --- | --- | --- |
  | dimension | string | 否 | 维度细分指标。  adposition\_id：按照版位ID细分。 |
  | data | string[] | 否 | 填写dimension参数对应的value。 |

  index\_screen\_list (Struct3)参数：

  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | --- | --- | --- | --- |
  | index\_screen | string | 否 | 筛选指标，取值为：  effective\_cost：花费  effective\_impression\_count：展示量  effective\_click\_count：点击量  effective\_per\_click：点击均价  effective\_download\_count：下载量。 |
  | type | integer | 否 | 筛选指标类型，取值为：  1．大于等于，只需要赋值low\_value，type=1、  2．小于等于，只需要赋值up\_value，type=2  3．介于，需要赋值low\_value up\_value，type=0。 |
  | low\_value | float | 否 | 下限值。 |
  | up\_value | float | 否 | 上限值。 |
- <strong>请求示例</strong>

  POST /openapi/v2/reports/country/query HTTP/1.1

  Accept:application/json

  Content-Type:application/json

  Authorization:Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=

  \\{

  "start\_date": "2021-07-06",

  "end\_date": "2021-07-08",

  "is\_abroad": "true",

  "time\_granularity": "STAT\_TIME\_GRANULARITY\_DAILY",

  "filtering": \\{

  "other\_filter\_type": "CREATIVE"

  \\},

  "page": 1,

  "page\_size": 10,

  "order\_type": "asc"

  \\}
- <strong>响应参数</strong>

  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | --- | --- | --- | --- |
  | code | string | 是 | 返回码。 |
  | message | string | 是 | 返回描述。 |
  | data | Struct1 | 否 | 指定对象统计数据。 |

  data(Struct1)参数

  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | --- | --- | --- | --- |
  | page\_info | Struct2 | 是 | 分页配置信息。 |
  | list | Struct3[] | 是 | 统计数据列表。 |
  | list\_summary | Struct3 | 是 | 统计数据列表汇总。 |

  page\_info(Struct2)参数

  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | --- | --- | --- | --- |
  | page | integer | 是 | 搜索页码。 |
  | page\_size | integer | 是 | 每页展示的数据条数。 |
  | total\_number | integer | 是 | 总条数。 |
  | total\_page | integer | 是 | 总页数。 |

  list(Struct3)参数 ：

  | 参数名称 | 类型 | 是否必选 | 描述 |
  | --- | --- | --- | --- |
  | advertiser\_id | string | 是 | 广告主ID。 |
  | stat\_datetime | string | 否 | 数据起始时间  格式：YYYYMMDDHH  请求中的时间粒度，决定时间精度。 |
  | campaign\_id | string | 否 | 计划ID。 |
  | campaign\_name | string | 否 | 计划名称。 |
  | adgroup\_id | string | 否 | 任务ID。 |
  | adgroup\_name | string | 否 | 任务名称。 |
  | creative\_id | string | 否 | 创意ID。 |
  | creative\_name | string | 否 | 创意名称。 |
  | country | string | 是 | 国家地域编码。 |
  | package\_name | string | 否 | 应用包名。 |
  | show\_count | integer | 是 | 曝光量-展示指标。 |
  | click\_count | integer | 是 | 点击量-展示指标。 |
  | cpc | float | 是 | 点击均价-展示指标。 |
  | thousand\_show\_cost | float | 是 | 千次展示均价。 |
  | cost | float | 是 | 花费。 |
  | download\_count | integer | 是 | 下载量。 |
  | download\_cost | float | 是 | 下载成本。 |
  | install\_count | integer | 是 | 安装量。 |
  | install\_cost | float | 是 | 安装成本。 |
  | active\_count\_normalized | integer | 是 | 归一化激活量。 |
  | active\_cost\_normalized | float | 是 | 归一化激活成本。 |
  | register\_count | integer | 是 | 注册量。 |
  | register\_cost | float | 是 | 注册成本。 |
  | retain\_count\_normalized | integer | 是 | 归一化次留量。 |
  | retain\_cost\_normalized | float | 是 | 归一化次留成本。 |
  | pay\_count\_normalized | integer | 是 | 归一化付费量。 |
  | pay\_cost\_normalized | float | 是 | 归一化付费成本。 |
  | browse\_count | integer | 是 | 浏览量。 |
  | browse\_cost | float | 是 | 浏览成本。 |
  | collection\_count | integer | 是 | 收藏量。 |
  | collection\_cost | float | 是 | 收藏成本。 |
  | add\_cart\_count | integer | 是 | 加入购物车量。 |
  | add\_cart\_cost | float | 是 | 加入购物车成本。 |
  | pre\_order\_count | integer | 是 | 下单量。 |
  | pre\_order\_cost | float | 是 | 下单成本。 |
  | form\_submit\_count | integer | 是 | 表单提交量。 |
  | form\_submit\_cost | float | 是 | 表单提交成本。 |
  | effective\_consult\_count | integer | 是 | 有效咨询量。 |
  | effective\_consult\_cost | float | 是 | 有效咨询成本。 |
  | effective\_customer\_acquisition\_count | integer | 是 | 有效获客量。 |
  | effective\_customer\_acquisition\_cost | float | 是 | 有效获客成本。 |
  | app\_custom\_count | integer | 是 | 应用自定义转化量。 |
  | app\_custom\_cost | float | 是 | 应用自定义转化成本。 |
  | web\_custom\_count | integer | 是 | 网页自定义转化量。 |
  | web\_custom\_cost | float | 是 | 网页自定义转化成本。 |
  | play\_count | integer | 否 | 视频播放次数。 |
  | play\_over\_count | integer | 否 | 视频播放完成次数。 |
  | play\_impression\_count | integer | 否 | 视频曝光量 |
  | play\_valid\_effective\_count | integer | 否 | 视频有效播放量 |
  | effective\_book\_count | integer | 否 | 有效预定量。 |
  | effective\_book\_cost | float | 否 | 有效预定成本。 |
  | book\_amount | integer | 否 | 预定数量。 |
  | pay\_amount\_normalized | float | 否 | 归一化付费金额。 |
  | vote\_count | integer | 否 | 投票。 |
  | vote\_cost | float | 否 | 投票成本。 |
  | update\_count | integer | 否 | 更新。 |
  | update\_cost | float | 否 | 更新成本。 |
  | tutorial\_completion\_count | integer | 否 | 游戏完成新手教程。 |
  | tutorial\_completion\_cost | float | 否 | 游戏完成新手教程成本。 |
  | travel\_booking\_count | integer | 否 | 旅行预订。 |
  | travel\_booking\_cost | float | 否 | 旅行预订成本。 |
  | three\_day\_retain\_count | integer | 否 | 3日留存。 |
  | three\_day\_retain\_cost | float | 否 | 3日留存成本。 |
  | subscribe\_count | integer | 否 | 订阅。 |
  | subscribe\_cost | float | 否 | 订阅成本。 |
  | start\_trial\_count | integer | 否 | 开始试用。 |
  | start\_trial\_cost | float | 否 | 开始试用成本。 |
  | spent\_credits\_count | integer | 否 | 花掉积分。 |
  | spent\_credits\_cost | float | 否 | 花掉积分成本。 |
  | share\_count | integer | 否 | 分享。 |
  | share\_cost | float | 否 | 分享成本。 |
  | seven\_day\_retain\_count | integer | 否 | 7日留存。 |
  | seven\_day\_retain\_cost | float | 否 | 7日留存成本。 |
  | search\_count | integer | 否 | 搜索。 |
  | search\_cost | float | 否 | 搜索成本。 |
  | reservation\_count | integer | 否 | 预约服务。 |
  | reservation\_cost | float | 否 | 预约服务成本。 |
  | redirect\_count | integer | 否 | 页面跳转。 |
  | redirect\_cost | float | 否 | 页面跳转成本。 |
  | read\_count | integer | 否 | 阅读。 |
  | read\_cost | float | 否 | 阅读成本。 |
  | re\_engage\_count | integer | 否 | 用户唤醒。 |
  | re\_engage\_cost | float | 否 | 用户唤醒成本。 |
  | rate\_count | integer | 否 | 评级。 |
  | rate\_cost | float | 否 | 评级成本。 |
  | purchase\_membercard\_count | integer | 否 | 购买会员。 |
  | purchase\_membercard\_cost | float | 否 | 购买会员成本。 |
  | precredit\_count | integer | 否 | 预授信数。 |
  | precredit\_cost | float | 否 | 预授信数成本。 |
  | potential\_customer\_phone\_count | integer | 否 | 潜在客户线索-电话。 |
  | potential\_customer\_phone\_cost | float | 否 | 潜在客户线索-电话成本。 |
  | potential\_customer\_online\_count | integer | 否 | 潜在客户线索-咨询。 |
  | potential\_customer\_online\_cost | float | 否 | 潜在客户线索-咨询成本。 |
  | potential\_customer\_form\_count | integer | 否 | 潜在客户线索-表单。 |
  | potential\_customer\_form\_cost | float | 否 | 潜在客户线索-表单成本。 |
  | phone\_dialing\_count | integer | 否 | 电话直拨。 |
  | phone\_dialing\_cost | float | 否 | 电话直拨成本。 |
  | order\_signing\_count | integer | 否 | 订单签收。 |
  | order\_signing\_cost | float | 否 | 订单签收成本。 |
  | opened\_frompushnotification\_count | integer | 否 | 从推送通知打开。 |
  | opened\_frompushnotification\_cost | float | 否 | 从推送通知打开成本。 |
  | navigate\_count | integer | 否 | 门店导航。 |
  | navigate\_cost | float | 否 | 门店导航成本。 |
  | lottery\_count | integer | 否 | 抽奖。 |
  | lottery\_cost | float | 否 | 抽奖成本。 |
  | login\_count | integer | 否 | 登录。 |
  | login\_cost | float | 否 | 登录成本。 |
  | loan\_completion\_count | integer | 否 | 完件数。 |
  | loan\_completion\_cost | float | 否 | 完件数成本。 |
  | like\_count | integer | 否 | 点赞。 |
  | like\_cost | float | 否 | 点赞成本。 |
  | level\_achieved\_count | integer | 否 | 达到级别。 |
  | level\_achieved\_cost | float | 否 | 达到级别成本。 |
  | leads\_lottery\_count | integer | 否 | 抽奖线索。 |
  | leads\_lottery\_cost | float | 否 | 抽奖线索成本。 |
  | landingpage\_click\_count | integer | 否 | 落地页内按钮点击。 |
  | landingpage\_click\_cost | float | 否 | 落地页内按钮点击成本。 |
  | invite\_count | integer | 否 | 邀请。 |
  | invite\_cost | float | 否 | 邀请成本。 |
  | initiated\_checkout\_count | integer | 否 | 发起结账。 |
  | initiated\_checkout\_cost | float | 否 | 发起结账成本。 |
  | game\_package\_redemption\_count | integer | 否 | 礼包兑换。 |
  | game\_package\_redemption\_cost | float | 否 | 礼包兑换成本。 |
  | game\_package\_claiming\_count | integer | 否 | 礼包领取。 |
  | game\_package\_claiming\_cost | float | 否 | 礼包领取成本。 |
  | forward\_count | integer | 否 | 转发。 |
  | forward\_cost | float | 否 | 转发成本。 |
  | follow\_scan\_count | integer | 否 | 扫码关注。 |
  | follow\_scan\_cost | float | 否 | 扫码关注成本。 |
  | follow\_count | integer | 否 | 关注。 |
  | follow\_cost | float | 否 | 关注成本。 |
  | first\_purchase\_membercard\_count | integer | 否 | 首次购买会员。 |
  | first\_purchase\_membercard\_cost | float | 否 | 首次购买会员成本。 |
  | effective\_leadsform\_count | integer | 否 | 有效线索-表单。 |
  | effective\_leadsform\_cost | float | 否 | 有效线索-表单成本。 |
  | effective\_leads\_phone\_count | integer | 否 | 有效线索-电话。 |
  | effective\_leads\_phone\_cost | float | 否 | 有效线索-电话成本。 |
  | effective\_leads\_online\_count | integer | 否 | 有效线索-咨询。 |
  | effective\_leads\_online\_cost | float | 否 | 有效线索-咨询成本。 |
  | deliver\_count | integer | 否 | 订单发货。 |
  | deliver\_cost | float | 否 | 订单发货成本。 |
  | custom\_count | integer | 否 | 自定义。 |
  | custom\_cost | float | 否 | 自定义成本。 |
  | credit\_count | integer | 否 | 授信数。 |
  | credit\_cost | float | 否 | 授信数成本。 |
  | create\_role\_count | integer | 否 | 游戏内创建角色。 |
  | create\_role\_cost | float | 否 | 游戏内创建角色成本。 |
  | coupon\_count | integer | 否 | 卡券领取。 |
  | coupon\_cost | float | 否 | 卡券领取成本。 |
  | content\_view\_count | integer | 否 | 内容视图。 |
  | content\_view\_cost | float | 否 | 内容视图成本。 |
  | consult\_online\_count | integer | 否 | 网页咨询。 |
  | consult\_online\_cost | float | 否 | 网页咨询成本。 |
  | comment\_count | integer | 否 | 评论。 |
  | comment\_cost | float | 否 | 评论成本。 |
  | authorize\_count | integer | 否 | 游戏授权。 |
  | authorize\_cost | float | 否 | 游戏授权成本。 |
  | add\_to\_wishlist\_count | integer | 否 | 添加到心愿清单。 |
  | add\_to\_wishlist\_cost | float | 否 | 添加到心愿清单成本。 |
  | add\_quick\_app\_count | integer | 否 | 快应用添加。 |
  | add\_quick\_app\_cost | float | 否 | 快应用添加成本。 |
  | add\_payment\_info\_count | integer | 否 | 添加付款信息。 |
  | add\_payment\_info\_cost | float | 否 | 添加付款信息成本。 |
  | achievement\_unlocked\_count | integer | 否 | 解锁成就。 |
  | achievement\_unlocked\_cost | float | 否 | 解锁成就成本。 |
  | country | string | 否 | 国家地域编码，如RU，返回该字段需要增加分组参数COUNTRY。 |
  | high\_quality\_active\_count | integer | 否 | 优质激活量。 |
  | high\_quality\_active\_cost | float | 否 | 优质激活成本。 |
  | tracking\_conversion\_count | integer | 否 | 指定转化次数。 |
  | tracking\_conversion\_value | integer | 否 | 指定转化价值。 |
  | attribution\_income\_iaa | integer | 否 | IAA。 |
  | roas | float | 否 | roas |
  | attribution\_income\_iap\_normalized | integer | 否 | 归一化IAP。 |
  | transition\_count | long | 否 | 转化量 |
  | click\_transition\_ratio | float | 否 | 转化率 |
  | transition\_cost | float | 否 | 转化成本 |
  | deep\_transition\_count | long | 否 | 深层转化量 |
  | click\_deep\_transition\_ratio | float | 否 | 深层转化率 |
  | deep\_transition\_cost | float | 否 | 深层转化成本 |
  | all\_transition\_count | long | 否 | 所有深层转化量 |
  | click\_all\_transition\_ratio | float | 否 | 所有深层转化率 |
  | all\_transition\_cost | float | 否 | 所有深层转化成本 |
  | key\_action\_count | long | 否 | 关键行为量 |
  | key\_action\_click\_ratio | bigdecimal | 否 | 关键行为率 |
  | cost\_per\_key\_action | bigdecimal | 否 | 关键行为成本 |
  | refund\_count | long | 否 | 退款量 |
  | click\_refund\_ratio | bigdecimal | 否 | 退款率 |
  | cost\_refund | bigdecimal | 否 | 退款成本 |
  | refund\_amount | bigdecimal | 否 | 退款金额 |
  | roi\_ratio | float | 否 | roi系数 |
  | paid\_amount | float | 否 | 付费金额 |
  | channel\_pkg\_number | string | 否 | 智能分包渠道号 |
- <strong>应答示例</strong>

  HTTPS/1.1 200 OK

  ```
  {
  "code": "0",
  "data": {
  "list_summary": {
  "comment_count": 0,
  "purchase_membercard_count": 0,
  "achievement_unlocked_cost": "0.00000",
  "coupon_count": 0,
  "initiated_checkout_cost": "0.00000",
  "forward_count": 0,
  "effective_leads_online_count": 0,
  "click_count": 23,
  "consult_online_cost": "0.00000",
  "purchase_membercard_cost": "0.00000",
  "search_count": 0,
  "reservation_count": 0,
  "retain_hms_count": 0,
  "seven_day_retain_count": 0,
  "potential_customer_online_cost": "0.00000",
  "consult_online_count": 0,
  "phone_dialing_count": 0,
  "authorize_cost": "0.00000",
  "add_payment_info_count": 0,
  "invite_cost": "0.00000",
  "game_package_claiming_cost": "0.00000",
  "add_cart_cost": "0.00000",
  "active_cost_normalized": "0.00000",
  "effective_leads_phone_count": 0,
  "rate_cost": "0.00000",
  "landingpage_click_count": 0,
  "login_cost": "0.00000",
  "venus_form_submit_count": 0,
  "travel_booking_count": 0,
  "content_view_cost": "0.00000",
  "book_amount": 0,
  "follow_count": 0,
  "first_purchase_membercard_cost": "0.00000",
  "pay_amount_normalized": "0.00000",
  "effective_customer_acquisition_cost": "0.00000",
  "subscribe_count": 0,
  "play_over_count": 0,
  "vote_cost": "0.00000",
  "like_cost": "0.00000",
  "coupon_cost": "0.00000",
  "add_payment_info_cost": "0.00000",
  "web_custom_count": 0,
  "leads_lottery_count": 0,
  "update_cost": "0.00000",
  "precredit_count": 0,
  "share_cost": "0.00000",
  "read_cost": "0.00000",
  "create_role_cost": "0.00000",
  "login_count": 0,
  "add_quick_app_cost": "0.00000",
  "potential_customer_online_count": 0,
  "pre_order_count": 0,
  "pre_order_cost": "0.00000",
  "browse_count": 0,
  "forward_cost": "0.00000",
  "vote_count": 0,
  "three_day_retain_count": 0,
  "opened_frompushnotification_cost": "0.00000",
  "pay_count_normalized": 0,
  "travel_booking_cost": "0.00000",
  "potential_customer_form_count": 0,
  "order_signing_count": 0,
  "add_to_wishlist_count": 0,
  "seven_day_retain_cost": "0.00000",
  "update_count": 0,
  "redirect_count": 0,
  "level_achieved_count": 0,
  "download_count": 0,
  "retain_cost_normalized": "0.00000",
  "form_submit_count": 0,
  "add_quick_app_count": 0,
  "effective_book_cost": "0.00000",
  "loan_completion_count": 0,
  "show_count": 18,
  "tutorial_completion_count": 0,
  "navigate_count": 0,
  "form_submit_cost": "0.00000",
  "start_trial_count": 0,
  "phone_dialing_cost": "0.00000",
  "landingpage_click_cost": "0.00000",
  "potential_customer_form_cost": "0.00000",
  "lottery_count": 0,
  "potential_customer_phone_count": 0,
  "install_count": 0,
  "precredit_cost": "0.00000",
  "app_custom_count": 0,
  "cpc": "0.52485",
  "deliver_cost": "0.00000",
  "content_view_count": 0,
  "follow_scan_cost": "0.00000",
  "read_count": 0,
  "effective_book_count": 0,
  "add_cart_count": 0,
  "like_count": 0,
  "create_role_count": 0,
  "lottery_cost": "0.00000",
  "pay_cost_normalized": "0.00000",
  "effective_consult_cost": "0.00000",
  "browse_cost": "0.00000",
  "play_count": 0,
  "register_count": 0,
  "opened_frompushnotification_count": 0,
  "game_package_claiming_count": 0,
  "rate_count": 0,
  "effective_leads_online_cost": "0.00000",
  "re_engage_cost": "0.00000",
  "credit_cost": "0.00000",
  "install_cost": "0.00000",
  "collection_count": 0,
  "follow_cost": "0.00000",
  "subscribe_cost": "0.00000",
  "order_signing_cost": "0.00000",
  "first_purchase_membercard_count": 0,
  "game_package_redemption_cost": "0.00000",
  "venus_form_submit_cost": "0.00000",
  "redirect_cost": "0.00000",
  "comment_cost": "0.00000",
  "effective_leads_phone_cost": "0.00000",
  "achievement_unlocked_count": 0,
  "potential_customer_phone_cost": "0.00000",
  "retain_count_normalized": 0,
  "app_custom_cost": "0.00000",
  "navigate_cost": "0.00000",
  "search_cost": "0.00000",
  "follow_scan_count": 0,
  "game_package_redemption_count": 0,
  "loan_completion_cost": "0.00000",
  "leads_lottery_cost": "0.00000",
  "authorize_count": 0,
  "spent_credits_count": 0,
  "initiated_checkout_count": 0,
  "effective_leadsform_count": 0,
  "effective_consult_count": 0,
  "collection_cost": "0.00000",
  "re_engage_count": 0,
  "spent_credits_cost": "0.00000",
  "reservation_cost": "0.00000",
  "cost": "12.07145",
  "add_to_wishlist_cost": "0.00000",
  "web_custom_cost": "0.00000",
  "effective_leadsform_cost": "0.00000",
  "active_count_normalized": 0,
  "level_achieved_cost": "0.00000",
  "start_trial_cost": "0.00000",
  "three_day_retain_cost": "0.00000",
  "share_count": 0,
  "thousand_show_cost": "670.63611",
  "tutorial_completion_cost": "0.00000",
  "register_cost": "0.00000",
  "invite_count": 0,
  "credit_count": 0,
  "download_cost": "0.00000",
  "effective_customer_acquisition_count": 0,
  "deliver_count": 0
  },
  "page_info": {
  "total_number": 4,
  "total_page": 1,
  "page": 1,
  "page_size": 4
  },
  "list": [
  {
  "comment_count": 0,
  "creative_name": "试投放任务",
  "purchase_membercard_count": 0,
  "achievement_unlocked_cost": "0.00000",
  "coupon_count": 0,
  "initiated_checkout_cost": "0.00000",
  "forward_count": 0,
  "effective_leads_online_count": 0,
  "click_count": 1,
  "consult_online_cost": "0.00000",
  "purchase_membercard_cost": "0.00000",
  "search_count": 0,
  "reservation_count": 0,
  "creative_id": "58041458",
  "creative_name":"test.demo.creative",
  "package_name":"com.huawei.demo",
  "campaign_id":"58048064",
  "campaign_name":"test.demo.campaign",
  "adgroup_id":"58048090",
  "adgroup_name":"test.demo.adgroup",
  "seven_day_retain_count": 0,
  "potential_customer_online_cost": "0.00000",
  "consult_online_count": 0,
  "phone_dialing_count": 0,
  "authorize_cost": "0.00000",
  "add_payment_info_count": 0,
  "invite_cost": "0.00000",
  "game_package_claiming_cost": "0.00000",
  "add_cart_cost": "0.00000",
  "active_cost_normalized": "0.00000",
  "effective_leads_phone_count": 0,
  "rate_cost": "0.00000",
  "landingpage_click_count": 0,
  "login_cost": "0.00000",
  "venus_form_submit_count": 0,
  "travel_booking_count": 0,
  "content_view_cost": "0.00000",
  "book_amount": 0,
  "follow_count": 0,
  "first_purchase_membercard_cost": "0.00000",
  "pay_amount_normalized": "0.00000",
  "effective_customer_acquisition_cost": "0.00000",
  "subscribe_count": 0,
  "play_over_count": 0,
  "vote_cost": "0.00000",
  "like_cost": "0.00000",
  "coupon_cost": "0.00000",
  "add_payment_info_cost": "0.00000",
  "web_custom_count": 0,
  "leads_lottery_count": 0,
  "update_cost": "0.00000",
  "precredit_count": 0,
  "share_cost": "0.00000",
  "read_cost": "0.00000",
  "create_role_cost": "0.00000",
  "login_count": 0,
  "add_quick_app_cost": "0.00000",
  "potential_customer_online_count": 0,
  "pre_order_count": 0,
  "pre_order_cost": "0.00000",
  "browse_count": 0,
  "forward_cost": "0.00000",
  "vote_count": 0,
  "three_day_retain_count": 0,
  "opened_frompushnotification_cost": "0.00000",
  "pay_count_normalized": 0,
  "travel_booking_cost": "0.00000",
  "potential_customer_form_count": 0,
  "order_signing_count": 0,
  "add_to_wishlist_count": 0,
  "seven_day_retain_cost": "0.00000",
  "update_count": 0,
  "redirect_count": 0,
  "level_achieved_count": 0,
  "download_count": 0,
  "retain_cost_normalized": "0.00000",
  "form_submit_count": 0,
  "add_quick_app_count": 0,
  "effective_book_cost": "0.00000",
  "loan_completion_count": 0,
  "show_count": 5,
  "tutorial_completion_count": 0,
  "navigate_count": 0,
  "form_submit_cost": "0.00000",
  "start_trial_count": 0,
  "phone_dialing_cost": "0.00000",
  "country": "",
  "landingpage_click_cost": "0.00000",
  "potential_customer_form_cost": "0.00000",
  "lottery_count": 0,
  "potential_customer_phone_count": 0,
  "install_count": 0,
  "precredit_cost": "0.00000",
  "app_custom_count": 0,
  "cpc": "0.00000",
  "deliver_cost": "0.00000",
  "content_view_count": 0,
  "follow_scan_cost": "0.00000",
  "stat_datetime": "2021070600",
  "read_count": 0,
  "effective_book_count": 0,
  "add_cart_count": 0,
  "like_count": 0,
  "create_role_count": 0,
  "lottery_cost": "0.00000",
  "pay_cost_normalized": "0.00000",
  "effective_consult_cost": "0.00000",
  "browse_cost": "0.00000",
  "play_count": 0,
  "register_count": 0,
  "opened_frompushnotification_count": 0,
  "game_package_claiming_count": 0,
  "rate_count": 0,
  "effective_leads_online_cost": "0.00000",
  "re_engage_cost": "0.00000",
  "credit_cost": "0.00000",
  "install_cost": "0.00000",
  "collection_count": 0,
  "follow_cost": "0.00000",
  "subscribe_cost": "0.00000",
  "order_signing_cost": "0.00000",
  "first_purchase_membercard_count": 0,
  "game_package_redemption_cost": "0.00000",
  "venus_form_submit_cost": "0.00000",
  "redirect_cost": "0.00000",
  "comment_cost": "0.00000",
  "effective_leads_phone_cost": "0.00000",
  "achievement_unlocked_count": 0,
  "potential_customer_phone_cost": "0.00000",
  "retain_count_normalized": 0,
  "app_custom_cost": "0.00000",
  "navigate_cost": "0.00000",
  "advertiser_id": "533350928594526848",
  "search_cost": "0.00000",
  "follow_scan_count": 0,
  "game_package_redemption_count": 0,
  "loan_completion_cost": "0.00000",
  "leads_lottery_cost": "0.00000",
  "authorize_count": 0,
  "spent_credits_count": 0,
  "initiated_checkout_count": 0,
  "effective_leadsform_count": 0,
  "effective_consult_count": 0,
  "collection_cost": "0.00000",
  "re_engage_count": 0,
  "spent_credits_cost": "0.00000",
  "reservation_cost": "0.00000",
  "cost": "0.00000",
  "add_to_wishlist_cost": "0.00000",
  "web_custom_cost": "0.00000",
  "effective_leadsform_cost": "0.00000",
  "active_count_normalized": 0,
  "level_achieved_cost": "0.00000",
  "start_trial_cost": "0.00000",
  "three_day_retain_cost": "0.00000",
  "share_count": 0,
  "thousand_show_cost": "0.00000",
  "tutorial_completion_cost": "0.00000",
  "register_cost": "0.00000",
  "invite_count": 0,
  "credit_count": 0,
  "download_cost": "0.00000",
  "effective_customer_acquisition_count": 0,
  "deliver_count": 0
  },
  {
  "comment_count": 0,
  "creative_name": "海外竞价demo原生单大图版位wqt-大图文-1080*607-创意1",
  "purchase_membercard_count": 0,
  "achievement_unlocked_cost": "0.00000",
  "coupon_count": 0,
  "initiated_checkout_cost": "0.00000",
  "forward_count": 0,
  "effective_leads_online_count": 0,
  "click_count": 6,
  "consult_online_cost": "0.00000",
  "purchase_membercard_cost": "0.00000",
  "search_count": 0,
  "reservation_count": 0,
  "creative_id": "58042648",
  "creative_name":"test.demo.creative",
  "package_name":"com.huawei.demo",
  "campaign_id":"58048023",
  "campaign_name":"test.demo.campaign",
  "adgroup_id":"58048045",
  "adgroup_name":"test.demo.adgroup",
  "seven_day_retain_count": 0,
  "potential_customer_online_cost": "0.00000",
  "consult_online_count": 0,
  "phone_dialing_count": 0,
  "authorize_cost": "0.00000",
  "add_payment_info_count": 0,
  "invite_cost": "0.00000",
  "game_package_claiming_cost": "0.00000",
  "add_cart_cost": "0.00000",
  "active_cost_normalized": "0.00000",
  "effective_leads_phone_count": 0,
  "rate_cost": "0.00000",
  "landingpage_click_count": 0,
  "login_cost": "0.00000",
  "venus_form_submit_count": 0,
  "travel_booking_count": 0,
  "content_view_cost": "0.00000",
  "book_amount": 0,
  "follow_count": 0,
  "first_purchase_membercard_cost": "0.00000",
  "pay_amount_normalized": "0.00000",
  "effective_customer_acquisition_cost": "0.00000",
  "subscribe_count": 0,
  "play_over_count": 0,
  "vote_cost": "0.00000",
  "like_cost": "0.00000",
  "coupon_cost": "0.00000",
  "add_payment_info_cost": "0.00000",
  "web_custom_count": 0,
  "leads_lottery_count": 0,
  "update_cost": "0.00000",
  "precredit_count": 0,
  "share_cost": "0.00000",
  "read_cost": "0.00000",
  "create_role_cost": "0.00000",
  "login_count": 0,
  "add_quick_app_cost": "0.00000",
  "potential_customer_online_count": 0,
  "pre_order_count": 0,
  "pre_order_cost": "0.00000",
  "browse_count": 0,
  "forward_cost": "0.00000",
  "vote_count": 0,
  "three_day_retain_count": 0,
  "opened_frompushnotification_cost": "0.00000",
  "pay_count_normalized": 0,
  "travel_booking_cost": "0.00000",
  "potential_customer_form_count": 0,
  "order_signing_count": 0,
  "add_to_wishlist_count": 0,
  "seven_day_retain_cost": "0.00000",
  "update_count": 0,
  "redirect_count": 0,
  "level_achieved_count": 0,
  "download_count": 0,
  "retain_cost_normalized": "0.00000",
  "form_submit_count": 0,
  "add_quick_app_count": 0,
  "effective_book_cost": "0.00000",
  "loan_completion_count": 0,
  "show_count": 0,
  "tutorial_completion_count": 0,
  "navigate_count": 0,
  "form_submit_cost": "0.00000",
  "start_trial_count": 0,
  "phone_dialing_cost": "0.00000",
  "country": "",
  "landingpage_click_cost": "0.00000",
  "potential_customer_form_cost": "0.00000",
  "lottery_count": 0,
  "potential_customer_phone_count": 0,
  "install_count": 0,
  "precredit_cost": "0.00000",
  "app_custom_count": 0,
  "cpc": "0.00000",
  "deliver_cost": "0.00000",
  "content_view_count": 0,
  "follow_scan_cost": "0.00000",
  "stat_datetime": "2021070600",
  "read_count": 0,
  "effective_book_count": 0,
  "add_cart_count": 0,
  "like_count": 0,
  "create_role_count": 0,
  "lottery_cost": "0.00000",
  "pay_cost_normalized": "0.00000",
  "effective_consult_cost": "0.00000",
  "browse_cost": "0.00000",
  "play_count": 0,
  "register_count": 0,
  "opened_frompushnotification_count": 0,
  "game_package_claiming_count": 0,
  "rate_count": 0,
  "effective_leads_online_cost": "0.00000",
  "re_engage_cost": "0.00000",
  "credit_cost": "0.00000",
  "install_cost": "0.00000",
  "collection_count": 0,
  "follow_cost": "0.00000",
  "subscribe_cost": "0.00000",
  "order_signing_cost": "0.00000",
  "first_purchase_membercard_count": 0,
  "game_package_redemption_cost": "0.00000",
  "venus_form_submit_cost": "0.00000",
  "redirect_cost": "0.00000",
  "comment_cost": "0.00000",
  "effective_leads_phone_cost": "0.00000",
  "achievement_unlocked_count": 0,
  "potential_customer_phone_cost": "0.00000",
  "retain_count_normalized": 0,
  "app_custom_cost": "0.00000",
  "navigate_cost": "0.00000",
  "advertiser_id": "533350928594526848",
  "search_cost": "0.00000",
  "follow_scan_count": 0,
  "game_package_redemption_count": 0,
  "loan_completion_cost": "0.00000",
  "leads_lottery_cost": "0.00000",
  "authorize_count": 0,
  "spent_credits_count": 0,
  "initiated_checkout_count": 0,
  "effective_leadsform_count": 0,
  "effective_consult_count": 0,
  "collection_cost": "0.00000",
  "re_engage_count": 0,
  "spent_credits_cost": "0.00000",
  "reservation_cost": "0.00000",
  "cost": "0.00000",
  "add_to_wishlist_cost": "0.00000",
  "web_custom_cost": "0.00000",
  "effective_leadsform_cost": "0.00000",
  "active_count_normalized": 0,
  "level_achieved_cost": "0.00000",
  "start_trial_cost": "0.00000",
  "three_day_retain_cost": "0.00000",
  "share_count": 0,
  "thousand_show_cost": "0.00000",
  "tutorial_completion_cost": "0.00000",
  "register_cost": "0.00000",
  "invite_count": 0,
  "credit_count": 0,
  "download_cost": "0.00000",
  "effective_customer_acquisition_count": 0,
  "deliver_count": 0
  },
  {
  "comment_count": 0,
  "creative_name": "海外竞价demo原生单大图版位wqt-大图文-1080*607-创意1",
  "purchase_membercard_count": 0,
  "achievement_unlocked_cost": "0.00000",
  "coupon_count": 0,
  "initiated_checkout_cost": "0.00000",
  "forward_count": 0,
  "effective_leads_online_count": 0,
  "click_count": 0,
  "consult_online_cost": "0.00000",
  "purchase_membercard_cost": "0.00000",
  "search_count": 0,
  "reservation_count": 0,
  "creative_id": "58042648",
  "creative_name":"test.demo.creative",
  "package_name":"com.huawei.demo",
  "campaign_id":"58048009",
  "campaign_name":"test.demo.campaign",
  "adgroup_id":"58048024",
  "adgroup_name":"test.demo.adgroup",
  "seven_day_retain_count": 0,
  "potential_customer_online_cost": "0.00000",
  "consult_online_count": 0,
  "phone_dialing_count": 0,
  "authorize_cost": "0.00000",
  "add_payment_info_count": 0,
  "invite_cost": "0.00000",
  "game_package_claiming_cost": "0.00000",
  "add_cart_cost": "0.00000",
  "active_cost_normalized": "0.00000",
  "effective_leads_phone_count": 0,
  "rate_cost": "0.00000",
  "landingpage_click_count": 0,
  "login_cost": "0.00000",
  "venus_form_submit_count": 0,
  "travel_booking_count": 0,
  "content_view_cost": "0.00000",
  "book_amount": 0,
  "follow_count": 0,
  "first_purchase_membercard_cost": "0.00000",
  "pay_amount_normalized": "0.00000",
  "effective_customer_acquisition_cost": "0.00000",
  "subscribe_count": 0,
  "play_over_count": 0,
  "vote_cost": "0.00000",
  "like_cost": "0.00000",
  "coupon_cost": "0.00000",
  "add_payment_info_cost": "0.00000",
  "web_custom_count": 0,
  "leads_lottery_count": 0,
  "update_cost": "0.00000",
  "precredit_count": 0,
  "share_cost": "0.00000",
  "read_cost": "0.00000",
  "create_role_cost": "0.00000",
  "login_count": 0,
  "add_quick_app_cost": "0.00000",
  "potential_customer_online_count": 0,
  "pre_order_count": 0,
  "pre_order_cost": "0.00000",
  "browse_count": 0,
  "forward_cost": "0.00000",
  "vote_count": 0,
  "three_day_retain_count": 0,
  "opened_frompushnotification_cost": "0.00000",
  "pay_count_normalized": 0,
  "travel_booking_cost": "0.00000",
  "potential_customer_form_count": 0,
  "order_signing_count": 0,
  "add_to_wishlist_count": 0,
  "seven_day_retain_cost": "0.00000",
  "update_count": 0,
  "redirect_count": 0,
  "level_achieved_count": 0,
  "download_count": 0,
  "retain_cost_normalized": "0.00000",
  "form_submit_count": 0,
  "add_quick_app_count": 0,
  "effective_book_cost": "0.00000",
  "loan_completion_count": 0,
  "show_count": 1,
  "tutorial_completion_count": 0,
  "navigate_count": 0,
  "form_submit_cost": "0.00000",
  "start_trial_count": 0,
  "phone_dialing_cost": "0.00000",
  "country": "",
  "landingpage_click_cost": "0.00000",
  "potential_customer_form_cost": "0.00000",
  "lottery_count": 0,
  "potential_customer_phone_count": 0,
  "install_count": 0,
  "precredit_cost": "0.00000",
  "app_custom_count": 0,
  "cpc": "0.00000",
  "deliver_cost": "0.00000",
  "content_view_count": 0,
  "follow_scan_cost": "0.00000",
  "stat_datetime": "2021070700",
  "read_count": 0,
  "effective_book_count": 0,
  "add_cart_count": 0,
  "like_count": 0,
  "create_role_count": 0,
  "lottery_cost": "0.00000",
  "pay_cost_normalized": "0.00000",
  "effective_consult_cost": "0.00000",
  "browse_cost": "0.00000",
  "play_count": 0,
  "register_count": 0,
  "opened_frompushnotification_count": 0,
  "game_package_claiming_count": 0,
  "rate_count": 0,
  "effective_leads_online_cost": "0.00000",
  "re_engage_cost": "0.00000",
  "credit_cost": "0.00000",
  "install_cost": "0.00000",
  "collection_count": 0,
  "follow_cost": "0.00000",
  "subscribe_cost": "0.00000",
  "order_signing_cost": "0.00000",
  "first_purchase_membercard_count": 0,
  "game_package_redemption_cost": "0.00000",
  "venus_form_submit_cost": "0.00000",
  "redirect_cost": "0.00000",
  "comment_cost": "0.00000",
  "effective_leads_phone_cost": "0.00000",
  "achievement_unlocked_count": 0,
  "potential_customer_phone_cost": "0.00000",
  "retain_count_normalized": 0,
  "app_custom_cost": "0.00000",
  "navigate_cost": "0.00000",
  "advertiser_id": "533350928594526848",
  "search_cost": "0.00000",
  "follow_scan_count": 0,
  "game_package_redemption_count": 0,
  "loan_completion_cost": "0.00000",
  "leads_lottery_cost": "0.00000",
  "authorize_count": 0,
  "spent_credits_count": 0,
  "initiated_checkout_count": 0,
  "effective_leadsform_count": 0,
  "effective_consult_count": 0,
  "collection_cost": "0.00000",
  "re_engage_count": 0,
  "spent_credits_cost": "0.00000",
  "reservation_cost": "0.00000",
  "cost": "0.07145",
  "add_to_wishlist_cost": "0.00000",
  "web_custom_cost": "0.00000",
  "effective_leadsform_cost": "0.00000",
  "active_count_normalized": 0,
  "level_achieved_cost": "0.00000",
  "start_trial_cost": "0.00000",
  "three_day_retain_cost": "0.00000",
  "share_count": 0,
  "thousand_show_cost": "71.45000",
  "tutorial_completion_cost": "0.00000",
  "register_cost": "0.00000",
  "invite_count": 0,
  "credit_count": 0,
  "download_cost": "0.00000",
  "effective_customer_acquisition_count": 0,
  "deliver_count": 0
  },
  {
  "comment_count": 0,
  "creative_name": "海外竞价demo原生单大图版位wqt-大图文-1080*607-创意3",
  "purchase_membercard_count": 0,
  "achievement_unlocked_cost": "0.00000",
  "coupon_count": 0,
  "initiated_checkout_cost": "0.00000",
  "forward_count": 0,
  "effective_leads_online_count": 0,
  "click_count": 16,
  "consult_online_cost": "0.00000",
  "purchase_membercard_cost": "0.00000",
  "search_count": 0,
  "reservation_count": 0,
  "creative_id": "58048071",
  "creative_name":"test.demo.creative",
  "package_name":"com.huawei.demo",
  "campaign_id":"58048057",
  "campaign_name":"test.demo.campaign",
  "adgroup_id":"58048098",
  "adgroup_name":"test.demo.adgroup",
  "seven_day_retain_count": 0,
  "potential_customer_online_cost": "0.00000",
  "consult_online_count": 0,
  "phone_dialing_count": 0,
  "authorize_cost": "0.00000",
  "add_payment_info_count": 0,
  "invite_cost": "0.00000",
  "game_package_claiming_cost": "0.00000",
  "add_cart_cost": "0.00000",
  "active_cost_normalized": "0.00000",
  "effective_leads_phone_count": 0,
  "rate_cost": "0.00000",
  "landingpage_click_count": 0,
  "login_cost": "0.00000",
  "venus_form_submit_count": 0,
  "travel_booking_count": 0,
  "content_view_cost": "0.00000",
  "book_amount": 0,
  "follow_count": 0,
  "first_purchase_membercard_cost": "0.00000",
  "pay_amount_normalized": "0.00000",
  "effective_customer_acquisition_cost": "0.00000",
  "subscribe_count": 0,
  "play_over_count": 0,
  "vote_cost": "0.00000",
  "like_cost": "0.00000",
  "coupon_cost": "0.00000",
  "add_payment_info_cost": "0.00000",
  "web_custom_count": 0,
  "leads_lottery_count": 0,
  "update_cost": "0.00000",
  "precredit_count": 0,
  "share_cost": "0.00000",
  "read_cost": "0.00000",
  "create_role_cost": "0.00000",
  "login_count": 0,
  "add_quick_app_cost": "0.00000",
  "potential_customer_online_count": 0,
  "pre_order_count": 0,
  "pre_order_cost": "0.00000",
  "browse_count": 0,
  "forward_cost": "0.00000",
  "vote_count": 0,
  "three_day_retain_count": 0,
  "opened_frompushnotification_cost": "0.00000",
  "pay_count_normalized": 0,
  "travel_booking_cost": "0.00000",
  "potential_customer_form_count": 0,
  "order_signing_count": 0,
  "add_to_wishlist_count": 0,
  "seven_day_retain_cost": "0.00000",
  "update_count": 0,
  "redirect_count": 0,
  "level_achieved_count": 0,
  "download_count": 0,
  "retain_cost_normalized": "0.00000",
  "form_submit_count": 0,
  "add_quick_app_count": 0,
  "effective_book_cost": "0.00000",
  "loan_completion_count": 0,
  "show_count": 12,
  "tutorial_completion_count": 0,
  "navigate_count": 0,
  "form_submit_cost": "0.00000",
  "start_trial_count": 0,
  "phone_dialing_cost": "0.00000",
  "country": "",
  "landingpage_click_cost": "0.00000",
  "potential_customer_form_cost": "0.00000",
  "lottery_count": 0,
  "potential_customer_phone_count": 0,
  "install_count": 0,
  "precredit_cost": "0.00000",
  "app_custom_count": 0,
  "cpc": "0.75000",
  "deliver_cost": "0.00000",
  "content_view_count": 0,
  "follow_scan_cost": "0.00000",
  "stat_datetime": "2021070800",
  "read_count": 0,
  "effective_book_count": 0,
  "add_cart_count": 0,
  "like_count": 0,
  "create_role_count": 0,
  "lottery_cost": "0.00000",
  "pay_cost_normalized": "0.00000",
  "effective_consult_cost": "0.00000",
  "browse_cost": "0.00000",
  "play_count": 0,
  "register_count": 0,
  "opened_frompushnotification_count": 0,
  "game_package_claiming_count": 0,
  "rate_count": 0,
  "effective_leads_online_cost": "0.00000",
  "re_engage_cost": "0.00000",
  "credit_cost": "0.00000",
  "install_cost": "0.00000",
  "collection_count": 0,
  "follow_cost": "0.00000",
  "subscribe_cost": "0.00000",
  "order_signing_cost": "0.00000",
  "first_purchase_membercard_count": 0,
  "game_package_redemption_cost": "0.00000",
  "venus_form_submit_cost": "0.00000",
  "redirect_cost": "0.00000",
  "comment_cost": "0.00000",
  "effective_leads_phone_cost": "0.00000",
  "achievement_unlocked_count": 0,
  "potential_customer_phone_cost": "0.00000",
  "retain_count_normalized": 0,
  "app_custom_cost": "0.00000",
  "navigate_cost": "0.00000",
  "advertiser_id": "533350928594526848",
  "search_cost": "0.00000",
  "follow_scan_count": 0,
  "game_package_redemption_count": 0,
  "loan_completion_cost": "0.00000",
  "leads_lottery_cost": "0.00000",
  "authorize_count": 0,
  "spent_credits_count": 0,
  "initiated_checkout_count": 0,
  "effective_leadsform_count": 0,
  "effective_consult_count": 0,
  "collection_cost": "0.00000",
  "re_engage_count": 0,
  "spent_credits_cost": "0.00000",
  "reservation_cost": "0.00000",
  "cost": "12.00000",
  "add_to_wishlist_cost": "0.00000",
  "web_custom_cost": "0.00000",
  "effective_leadsform_cost": "0.00000",
  "active_count_normalized": 0,
  "level_achieved_cost": "0.00000",
  "start_trial_cost": "0.00000",
  "three_day_retain_cost": "0.00000",
  "share_count": 0,
  "thousand_show_cost": "1000.00000",
  "tutorial_completion_cost": "0.00000",
  "register_cost": "0.00000",
  "invite_count": 0,
  "credit_count": 0,
  "download_cost": "0.00000",
  "effective_customer_acquisition_count": 0,
  "deliver_count": 0
  }
  ]
  },
  "message": "OK"
  }
  ```
