---
title: "通过RTA实验ID查询"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketing-api-data-rta-0000001631851324
format: md
---

# 通过RTA实验ID查询

您通过本接口通过RTA实验ID查询报表。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  <strong>亚非拉：</strong>https://ads-dra.cloud.huawei.com/openapi/v2/reports/rta/experiment/query

  <strong>俄罗斯：</strong>https://ads-drru.cloud.huawei.com/openapi/v2/reports/rta/experiment/query

  <strong>欧洲：</strong>https://ads-dre.cloud.huawei.com/openapi/v2/reports/rta/experiment/query
- <strong>请求方法</strong>：<strong>POST</strong>
- <strong>请求参数</strong>：

  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | --- | --- | --- | --- |
  | advertiser\_id | long | 否 | 广告主ID，经理账户或者服务商账户登录时，则此字段必填；当前操作的华为账号支持多个广告主账户时，此字段必填。 |
  | filtering | Struct1 | 是 | 筛选条件 |
  | page | integer | 否 | 搜索页码  默认值1 |
  | page\_size | integer | 否 | 每页展示的数据条数  默认值20  取值范围 1~10000 |
  | start\_date | string | 是 | 起始时间 |
  | end\_date | string | 是 | 结束时间。 |
  | is\_abroad | boolean | 是 | 是否为非中国大陆账户，取值为：  true为海外账户：非中国大陆账户  false：为中国大陆账户。 |

<strong>filtering(Struct1)</strong> <strong>参数：</strong>

| <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
| --- | --- | --- | --- |
| campaign\_ids | string[] | 否 | 推广计划ID |
| campaign\_name | string | 否 | 计划名称 |
| adgroup\_ids | string[] | 否 | 任务ID |
| adgroup\_name | string | 否 | 任务名称 |
| creative\_ids | string[] | 否 | 创意ID |
| placement\_name | string | 否 | 版位名称 |
| pricings | string[] | 否 | 出价方式  详见【付费方式】 |
| rta\_exp\_id | string[] | 是 | RTA实验组ID |

- <strong>请求示例</strong>

  POST openapi/v2/reports/creative/query HTTP/1.1

  Accept:application/json

  Content-Type:application/json

  Authorization:Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=

  \\{

  "advertiser\_id": "381061631473395584",

  "filtering": \\{

  "adgroup\_ids": [

  "46033594"

  ],

  "rta\_exp\_id": [

  "ceshishiyanid102"

  ],

  "pricings": [

  "CPM"

  ],

  "campaign\_ids": [

  "30027621"

  ],

  "campaign\_name": "",

  "adgroup\_name": "wsw",

  "creative\_ids": ["70033302"],

  "placement\_name": "wsw"

  \\},

  "page": 1,

  "page\_size": 10000,

  "start\_date": "2023-08-10",

  "end\_date": "2023-08-10",

  "is\_abroad": true

  \\}
- <strong>响应参数</strong>

  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
  | --- | --- | --- |
  | code | string | 返回码。 |
  | message | string | 返回描述。 |
  | data | Struct1 | 指定对象统计数据。 |

data(Struct1)参数

| <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
| --- | --- | --- |
| page\_info | Struct2 | 分页配置信息。 |
| list | Struct3[] | 统计数据列表。 |

page\_info(Struct2)参数

| <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
| --- | --- | --- |
| page | integer | 搜索页码。 |
| page\_size | integer | 每页展示的数据条数。 |
| total\_number | integer | 总条数。 |
| total\_page | integer | 总页数。 |

list(Struct3)参数

|  |  |  |
| --- | --- | --- |
| <strong>参数名称</strong> | 类型 | 描述 |
| advertiser\_id | string | 广告主ID |
| creative\_id | string | 创意ID |
| creative\_name | string | 创意名称 |
| adgroup\_id | string | 任务ID |
| adgroup\_name | string | 任务名称 |
| campaign\_id | string | 计划ID |
| campaign\_name | string | 计划名称 |
| package\_name | string | 应用包名 |
| stat\_datetime | string | 数据起始时间格式：YYYYMMDDHH请求中的时间粒度，决定时间精度 |
| show\_count | integer | 曝光量-展示指标 |
| click\_count | integer | 点击量-展示指标 |
| cpc | float | 点击均价-展示指标 |
| thousand\_show\_cost | float | 千人展示均价-展示指标 |
| cost | float | 花费-展示指标，单位元 |
| download\_count | integer | 下载量 |
| download\_cost | float | 下载成本 |
| install\_count | integer | 安装量 |
| install\_cost | float | 安装成本 |
| active\_count | integer | 激活量 |
| active\_cost | float | 激活成本 |
| register\_count | integer | 注册量 |
| register\_cost | float | 注册成本 |
| retain\_count | integer | 次留量 |
| retain\_cost | float | 次留成本 |
| pay\_count | integer | 付费量 |
| pay\_cost | float | 付费成本 |
| browse\_count | integer | 浏览量 |
| browse\_cost | float | 浏览成本 |
| collection\_count | integer | 收藏量 |
| collection\_cost | float | 收藏成本 |
| add\_cart\_count | integer | 加入购物车量 |
| add\_cart\_cost | float | 加入购物车成本 |
| pre\_order\_count | integer | 下单量 |
| pre\_order\_cost | float | 下单成本 |
| form\_submit\_count | integer | 表单提交量 |
| form\_submit\_cost | float | 表单提交成本 |
| effective\_consult\_count | integer | 有效咨询量 |
| effective\_consult\_cost | float | 有效咨询成本 |
| effective\_customer\_acquisition\_count | integer | 有效获客量 |
| effective\_customer\_acquisition\_cost | float | 有效获客成本 |
| app\_custom\_count | integer | 应用自定义转化量 |
| app\_custom\_cost | float | 应用自定义转化成本 |
| web\_custom\_count | integer | 网页自定义转化量 |
| web\_custom\_cost | float | 网页自定义转化成本 |
| play\_count | integer | 视频播放次数 |
| play\_over\_count | integer | 视频播放完成次数 |
| effective\_book\_count | integer | 有效预定量 |
| effective\_book\_cost | float | 有效预定成本 |
| book\_amount | integer | 预定数量 |
| paid\_amount | float | 下单金额 |
| activate\_hms\_count | integer | 激活(HMS)量 |
| activate\_hms\_cost | float | 激活(HMS)成本 |
| retain\_hms\_count | integer | 次留(HMS)量 |
| retain\_hms\_cost | float | 次留(HMS)成本 |
| vote\_count | integer | 投票 |
| vote\_cost | float | 投票成本 |
| update\_count | integer | 更新 |
| update\_cost | float | 更新成本 |
| tutorial\_completion\_count | integer | 游戏完成新手教程 |
| tutorial\_completion\_cost | float | 游戏完成新手教程成本 |
| travel\_booking\_count | integer | 旅行预订 |
| travel\_booking\_cost | float | 旅行预订成本 |
| three\_day\_retain\_count | integer | 3日留存 |
| three\_day\_retain\_cost | float | 3日留存成本 |
| subscribe\_count | integer | 订阅 |
| subscribe\_cost | float | 订阅成本 |
| start\_trial\_count | integer | 开始试用 |
| start\_trial\_cost | float | 开始试用成本 |
| spent\_credits\_count | integer | 花掉积分 |
| spent\_credits\_cost | float | 花掉积分成本 |
| share\_count | integer | 分享 |
| share\_cost | float | 分享成本 |
| seven\_day\_retain\_count | integer | 7日留存 |
| seven\_day\_retain\_cost | float | 7日留存成本 |
| search\_count | integer | 搜索 |
| search\_cost | float | 搜索成本 |
| reservation\_count | integer | 预约服务 |
| reservation\_cost | float | 预约服务成本 |
| redirect\_count | integer | 页面跳转 |
| redirect\_cost | float | 页面跳转成本 |
| read\_count | integer | 阅读 |
| read\_cost | float | 阅读成本 |
| re\_engage\_count | integer | 用户唤醒 |
| re\_engage\_cost | float | 用户唤醒成本 |
| rate\_count | integer | 评级 |
| rate\_cost | float | 评级成本 |
| purchase\_membercard\_count | integer | 购买会员 |
| purchase\_membercard\_cost | float | 购买会员成本 |
| precredit\_count | integer | 预授信数 |
| precredit\_cost | float | 预授信数成本 |
| potential\_customer\_phone\_count | integer | 潜在客户线索-电话 |
| potential\_customer\_phone\_cost | float | 潜在客户线索-电话成本 |
| potential\_customer\_online\_count | integer | 潜在客户线索-咨询 |
| potential\_customer\_online\_cost | float | 潜在客户线索-咨询成本 |
| potential\_customer\_form\_count | integer | 潜在客户线索-表单 |
| potential\_customer\_form\_cost | float | 潜在客户线索-表单成本 |
| phone\_dialing\_count | integer | 电话直拨 |
| phone\_dialing\_cost | float | 电话直拨成本 |
| order\_signing\_count | integer | 订单签收 |
| order\_signing\_cost | float | 订单签收成本 |
| opened\_frompushnotification\_count | integer | 从推送通知打开 |
| opened\_frompushnotification\_cost | float | 从推送通知打开成本 |
| navigate\_count | integer | 门店导航 |
| navigate\_cost | float | 门店导航成本 |
| lottery\_count | integer | 抽奖 |
| lottery\_cost | float | 抽奖成本 |
| login\_count | integer | 登录 |
| login\_cost | float | 登录成本 |
| loan\_completion\_count | integer | 完件数 |
| loan\_completion\_cost | float | 完件数成本 |
| like\_count | integer | 点赞 |
| like\_cost | float | 点赞成本 |
| level\_achieved\_count | integer | 达到级别 |
| level\_achieved\_cost | float | 达到级别成本 |
| leads\_lottery\_count | integer | 抽奖线索 |
| leads\_lottery\_cost | float | 抽奖线索成本 |
| landingpage\_click\_count | integer | 落地页内按钮点击 |
| landingpage\_click\_cost | float | 落地页内按钮点击成本 |
| invite\_count | integer | 邀请 |
| invite\_cost | float | 邀请成本 |
| initiated\_checkout\_count | integer | 发起结账 |
| initiated\_checkout\_cost | float | 发起结账成本 |
| game\_package\_redemption\_count | integer | 礼包兑换 |
| game\_package\_redemption\_cost | float | 礼包兑换成本 |
| game\_package\_claiming\_count | integer | 礼包领取 |
| game\_package\_claiming\_cost | float | 礼包领取成本 |
| forward\_count | integer | 转发 |
| forward\_cost | float | 转发成本 |
| follow\_scan\_count | integer | 扫码关注 |
| follow\_scan\_cost | float | 扫码关注成本 |
| follow\_count | integer | 关注 |
| follow\_cost | float | 关注成本 |
| first\_purchase\_membercard\_count | integer | 首次购买会员 |
| first\_purchase\_membercard\_cost | float | 首次购买会员成本 |
| effective\_leadsform\_count | integer | 有效线索-表单 |
| effective\_leadsform\_cost | float | 有效线索-表单成本 |
| effective\_leads\_phone\_count | integer | 有效线索-电话 |
| effective\_leads\_phone\_cost | float | 有效线索-电话成本 |
| effective\_leads\_online\_count | integer | 有效线索-咨询 |
| effective\_leads\_online\_cost | float | 有效线索-咨询成本 |
| deliver\_count | integer | 订单发货 |
| deliver\_cost | float | 订单发货成本 |
| custom\_count | integer | 自定义 |
| custom\_cost | float | 自定义成本 |
| credit\_count | integer | 授信数 |
| credit\_cost | float | 授信数成本 |
| create\_role\_count | integer | 游戏内创建角色 |
| create\_role\_cost | float | 游戏内创建角色成本 |
| coupon\_count | integer | 卡券领取 |
| coupon\_cost | float | 卡券领取成本 |
| content\_view\_count | integer | 内容视图 |
| content\_view\_cost | float | 内容视图成本 |
| consult\_online\_count | integer | 网页咨询 |
| consult\_online\_cost | float | 网页咨询成本 |
| comment\_count | integer | 评论 |
| comment\_cost | float | 评论成本 |
| authorize\_count | integer | 游戏授权 |
| authorize\_cost | float | 游戏授权成本 |
| add\_to\_wishlist\_count | integer | 添加到心愿清单 |
| add\_to\_wishlist\_cost | float | 添加到心愿清单成本 |
| add\_quick\_app\_count | integer | 快应用添加 |
| add\_quick\_app\_cost | float | 快应用添加成本 |
| add\_payment\_info\_count | integer | 添加付款信息 |
| add\_payment\_info\_cost | float | 添加付款信息成本 |
| achievement\_unlocked\_count | integer | 解锁成就 |
| achievement\_unlocked\_cost | float | 解锁成就成本 |

- <strong>应答示例</strong>

HTTPS/1.1 200 OK

```
{"data": {"page_info": {"total_number": 1,"total_num": 1,"total_page": 1,"page": 1,"page_size": 10000},"list": [{"comment_count": 3,"total_number": 1,"achievement_unlocked_cost": "0.01","coupon_count": 3,"effective_leads_online_count": 3,"click_count": 3,"consult_online_cost": "0.01","seven_day_retain_count": 3,"consult_online_count": 3,"game_package_claiming_cost": "0.01","active_cost": "0.01","effective_leads_phone_count": 3,"activate_hms_cost": "0.01","follow_count": 3,"first_purchase_membercard_cost": "0.01","paid_amount": "99.740736","vote_cost": "0.01","update_cost": "0.01","potential_customer_online_count": 3,"forward_cost": "0.01","three_day_retain_count": 3,"pay_count": 3,"travel_booking_cost": "0.01","potential_customer_form_count": 3,"add_to_wishlist_count": 3,"custom_count": 3,"level_achieved_count": 3,"form_submit_count": 3,"effective_book_cost": "0.01","navigate_count": 3,"form_submit_cost": "0.01","landingpage_click_cost": "0.01","lottery_count": 3,"potential_customer_phone_count": 3,"install_count": 3,"precredit_cost": "0.01","app_custom_count": 6,"activate_hms_count": 3,"retain_hms_cost": "0.01","content_view_count": 3,"follow_scan_cost": "0.01","campaign_id": "30027621","stat_datetime": "2023-08-10","read_count": 3,"effective_book_count": 3,"add_cart_count": 3,"like_count": 3,"pay_cost": "0.01","browse_cost": "0.01","register_count": 3,"effective_leads_online_cost": "0.01","re_engage_cost": "0.01","credit_cost": "0.01","install_cost": "0.01","collection_count": 3,"follow_cost": "0.01","adgroup_name": "wsw的ocpc版位多规格-20220217-竞价","subscribe_cost": "0.01","first_purchase_membercard_count": 3,"game_package_redemption_cost": "0.01","comment_cost": "0.01","achievement_unlocked_count": 3,"potential_customer_phone_cost": "0.01","advertiser_id": "381061631473395584","game_package_redemption_count": 3,"loan_completion_cost": "0.01","authorize_count": 3,"re_engage_count": 3,"reservation_cost": "0.01","effective_leadsform_cost": "0.0","active_count": 3,"level_achieved_cost": "0.01","register_cost": "0.01","invite_count": 3,"credit_count": 3,"download_cost": "0.01","rta_exp_id": " ceshishiyanid102","creative_name": "wsw的ocpc版位多规格-开屏视频-720*1280-创意 1","purchase_membercard_count": 3,"initiated_checkout_cost": "0.01","forward_count": 3,"purchase_membercard_cost": "0.01","search_count": 3,"reservation_count": 3,"creative_id": "70033302","retain_hms_count": 3,"potential_customer_online_cost": "0.01","phone_dialing_count": 3,"authorize_cost": "0.01","add_payment_info_count": 3,"invite_cost": "0.01","add_cart_cost": "0.01","rate_cost": "0.01","landingpage_click_count": 3,"login_cost": "0.01","travel_booking_count": 3,"content_view_cost": "0.01","book_amount": 39,"effective_customer_acquisition_cost": "0.01","subscribe_count": 3,"play_over_count": 3,"like_cost": "0.01","adgroup_id": "46033594","coupon_cost": "0.01","add_payment_info_cost": "0.01","web_custom_count": 3,"leads_lottery_count": 3,"precredit_count": 3,"share_cost": "0.01","read_cost": "0.01","create_role_cost": "0.01","login_count": 3,"add_quick_app_cost": "0.01","pre_order_count": 6,"pre_order_cost": "0.01","browse_count": 3,"vote_count": 3,"opened_frompushnotification_cost": "0.01","order_signing_count": 3,"seven_day_retain_cost": "0.01","update_count": 3,"redirect_count": 3,"download_count": 3,"retain_cost": "0.01","add_quick_app_count": 3,"loan_completion_count": 3,"show_count": 3,"tutorial_completion_count": 3,"start_trial_count": 3,"phone_dialing_cost": "0.01","potential_customer_form_cost": "0.01","cpc": "0.01","deliver_cost": "0.01","create_role_count": 3,"lottery_cost": "0.01","effective_consult_cost": "0.01","play_count": 3,"opened_frompushnotification_count": 3,"game_package_claiming_count": 3,"rate_count": 3,"order_signing_cost": "0.01","redirect_cost": "0.01","effective_leads_phone_cost": "0.01","retain_count": 3,"app_custom_cost": "0.01","navigate_cost": "0.01","search_cost": "0.01","follow_scan_count": 3,"leads_lottery_cost": "0.01","spent_credits_count": 3,"initiated_checkout_count": 3,"effective_leadsform_count": 9,"custom_cost": "0.01","effective_consult_count": 3,"collection_cost": "0.01","spent_credits_cost": "0.01","cost": "0.03603","add_to_wishlist_cost": "0.01","web_custom_cost": "0.01","start_trial_cost": "0.01","three_day_retain_cost": "0.01","share_count": 3,"thousand_show_cost": "10.0","tutorial_completion_cost": "0.01","effective_customer_acquisition_count": 3,"deliver_count": 3}]}}
```
