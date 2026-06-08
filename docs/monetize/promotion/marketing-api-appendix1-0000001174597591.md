---
title: "枚举值"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketing-api-appendix1-0000001174597591
format: md
upstream_id: monetize/promotion/marketing-api-appendix1-0000001174597591
last_sync: 2026-06-07
sync_hash: ddcdeebf
---
# 枚举值

## 计划/任务/创意操作状态

|  |  |
| --- | --- |
| 值 | 描述 |
| OPERATION\_STATUS\_ENABLE | 投放中 |
| OPERATION\_STATUS\_DISABLE | 已暂停 |
| OPERATION\_STATUS\_DELETE | 已删除 |

## 推广产品类型

|  |  |
| --- | --- |
| 值 | 描述 |
| WEB | 网页 |
| ANDROID\_APP | 应用 |

## 时间口径

| 值 | 描述 |
| --- | --- |
| STAT\_REQUEST\_TIME | 请求时间。 |
| STAT\_REPORTING\_TIME | 事件上报时间。 |

## 付费方式

|  |  |
| --- | --- |
| 值 | 描述 |
| PRICING\_CPM | CPM |
| PRICING\_CPC | CPC |
| PRICING\_OCPC | oCPC |
| PRICING\_CPCV | CPCV |
| PRICING\_CPA | CPA |
| PRICING\_CPI | CPI |
| PRICING\_TROAS | TROAS |

## 时间粒度

|  |  |
| --- | --- |
| 值 | 描述 |
| STAT\_TIME\_GRANULARITY\_HOURLY | 小时粒度 |
| STAT\_TIME\_GRANULARITY\_DAILY | 天粒度 |
| STAT\_TIME\_GRANULARITY\_MONTHLY | 月粒度 |
| STAT\_TIME\_GRANULARITY\_SUMMARY | 汇总粒度 |

## 操作类型

|  |  |
| --- | --- |
| 值 | 描述 |
| OPERATION\_ENABLE | 启用 |
| OPERATION\_DISABLE | 停用 |
| OPERATION\_DELETE | 删除 |

## 分组维度

| 值 | 描述 |
| --- | --- |
| DATE | 日期。 |
| HOUR | 小时。 |
| COUNTRY | 国家/地区。 |
| SEARCH\_KEY\_WORD | 搜索关键词。 |
| ADGROUP\_ID | 任务ID。 |
| DEAL\_ID | 交易ID。 |
| CAMPAIGN\_ID | 计划ID。 |
| ADVERTISER\_ID | 广告主ID。 |
| CREATIVE\_ID | 创意ID。 |
| POSITION\_ID | 位置ID。 |

## 动态词包标识

| 值 | 描述 |
| --- | --- |
| DYNAMIC\_WORD\_DISABLE | 未使用动态词包，默认值 |
| DYNAMIC\_WORD\_ENABLE | 使用动态词包 |

## 创意审核状态

|  |  |
| --- | --- |
| 值 | 描述 |
| AUDIT | 审核中 |
| APPROVE | 审核通过 |
| AUDIT\_DENY | 审核不通过 |

## 版位形式

|  |  |
| --- | --- |
| 值 | 描述 |
| CREATIVE\_SIZE\_TYPE\_SINGLE\_PICTURE | 单图（文） |
| CREATIVE\_SIZE\_TYPE\_MULTI\_PICTURE | 多图（文） |
| CREATIVE\_SIZE\_TYPE\_VIDEO | 视频 |
| CREATIVE\_SIZE\_TYPE\_TEXT | 文字链 |
| CREATIVE\_SIZE\_TYPE\_ICON | 图标 |

## 版位子样式

|  |  |
| --- | --- |
| 值 | 描述 |
| SPLASH\_PICTURE | 开屏图片 |
| SPLASH\_VIDEO | 开屏视频 |
| NATIVE\_BIG\_PICTURE | 信息流大图 |
| FEED\_SMALL\_PICTURE | 信息流小图 |
| FEED\_MULTI\_PICTURE | 信息流组图 |
| FEED\_VIDEO | 信息流视频 |
| FEED\_PURE\_PICTURE | 信息流纯图 |
| FOCUS\_PICTURE | 焦点图 |
| ROLL\_VIDEO | 视频贴片-视频 |
| REWARD\_VIDEO\_APP | 激励视频（应用） |
| REWARD\_VIDEO\_NOT\_APP | 激励视频（非应用） |
| APP\_ICON | 应用图标 |
| BANNER | Banner（smart\_banner不支持） |
| INTERSTITIAL\_PICTURE | 插屏图片 |
| INTERSTITIAL\_VIDEO | 插屏视频 |
| NATIVE\_MULTI\_SIZE\_FOCUS | 视频焦点图 |
| EXPRESS\_SPLASH\_IMAGE | 极速开屏图片 |
| EXPRESS\_SPLASH\_VIDEO | 极速开屏视频 |
| SHOP\_WINDOW | 橱窗 |
| SERVICE\_CARD | 服务卡片 |
| BIG\_SCREEN\_VIDEO\_ROLL | 大屏视频贴片 |
| BIG\_SCREEN\_POWER | 大屏开机（视频） |
| APP\_ICON\_DIRECT\_SERVICE | 应用图标-服务直达 |
| SMART\_SCREEN\_SPLASH\_VIDEO | 大屏开屏（视频） |

## 创意显示状态

|  |  |
| --- | --- |
| 值 | 描述 |
| CREATIVE\_STATUS\_DELETE | 已删除（创意删除） |
| CREATIVE\_STATUS\_DISABLE | 已暂停（创意暂停） |
| CREATIVE\_STATUS\_ADGROUP\_DISABLE | 已暂停（任务暂停） |
| CREATIVE\_STATUS\_CAMPAIGN\_DISABLE | 已暂停（计划暂停） |
| CREATIVE\_STATUS\_DONE | 投放结束 |
| CREATIVE\_STATUS\_AUDIT | 审核中 |
| CREATIVE\_STATUS\_AUDIT\_DENY | 审核不通过 |
| CREATIVE\_STATUS\_NOT\_START | 未投放（未到投放日期） |
| CREATIVE\_STATUS\_FROZEN | 未投放（账户已冻结） |
| CREATIVE\_STATUS\_BALANCE\_EXCEED | 未投放（账户余额不足） |
| CREATIVE\_STATUS\_ADVERTISER\_BUDGET\_EXCEED | 未投放（账户到达日预算） |
| CREATIVE\_STATUS\_CAMPAIGN\_BUDGET\_EXCEED | 未投放（计划达到日限额） |
| CREATIVE\_STATUS\_DELIVERY\_OK | 投放中 |
| CREATIVE\_STATUS\_DELIVERY\_LIMITED | 投放中（受限） |
| CREATIVE\_STATUS\_NO\_DELETED | 所有创意(不包含已删除) |
| CREATIVE\_STATUS\_ACCOUNT\_EXCEPTION | 未投放（账号异常） |
| CREATIVE\_STATUS\_ACCOUNT\_CREDITCARD\_REFUSE | 未投放（信用卡拒付） |
| CREATIVE\_STATUS\_DAILY\_PURCHASE\_THRESHOLD | 未投放(达到日采购量) |
| CREATIVE\_STATUS\_REACH\_TOTAL\_PROCUREMENT | 未投放(达到总采购量) |

## 应用是否安装标识

|  |  |
| --- | --- |
| 值 | 描述 |
| APP\_INSTALLED | 应用已安装 |
| APP\_NOT\_INSTALLED | 应用未安装 |

## 是否选择支持投放时段

|  |  |
| --- | --- |
| 值 | 描述 |
| TIME\_PERIOD\_DISABLE | 不支持，默认值 |
| TIME\_PERIOD\_ENABLE | 支持 |

## 是否支持多创意

|  |  |
| --- | --- |
| 值 | 描述 |
| MULTI\_CREATIVE\_DISABLE | 不支持，默认值 |
| MULTI\_CREATIVE\_ENABLE | 支持 |

## 落地页类型

|  |  |
| --- | --- |
| 值 | 描述 |
| LANDING\_PAGE\_TYPE\_APP | 维纳斯落地页，仅可用于推广产品为应用 |
| LANDING\_PAGE\_TYPE\_USER\_DEFINED | 自定义落地页 |
| LANDING\_PAGE\_TYPE\_TRIAL\_PLAY | 试玩落地页，仅可用于推广产品为应用且应用为未安装，由特性通行名单控制 |

## 素材类型

|  |  |
| --- | --- |
| 值 | 描述 |
| CREATIVE\_ASSET\_PICTURE | 图片 |
| CREATIVE\_ASSET\_VIDEO | 视频 |

## 定向包类型

|  |  |
| --- | --- |
| 值 | 描述 |
| TARGET\_TYPE\_APP | 应用类 |
| TARGET\_TYPE\_NOT\_APP | 非应用类 |

## 素材状态

|  |  |
| --- | --- |
| 值 | 描述 |
| CREATIVE\_ASSET\_ENABLE | 有效，默认值 |
| CREATIVE\_ASSET\_DISABLE | 已删除 |

## 转化目标

|  |  |
| --- | --- |
| 值 | 描述 |
| TRACKING\_ACTIVE | 激活应用 |
| TRACKING\_BROWSER | 浏览商品 |
| TRACKING\_COLLECTION | 收藏 |
| TRACKING\_ADD\_CART | 加入购物车 |
| TRACKING\_PRE\_ORDER | 下单 |
| TRACKING\_REGISTER | 注册 |
| TRACKING\_RETAIN | 次日留存 |
| TRACKING\_PAY | 付费量 |
| TRACKING\_APP\_CUSTOM | 自定义（应用） |
| TRACKING\_FORM\_SUBMIT | 表单提交 |
| TRACKING\_EFFECTIVE\_CONSULT | 有效咨询 |
| TRACKING\_EFFECTIVE\_CUSTOMER\_ACQUISITION | 有效获客 |
| TRACKING\_EFFECTIVE\_BOOK | 有效预定 |
| TRACKING\_WEB\_CUSTOM | 自定义（网页） |
| TRACKING\_ACTIVATE\_HMS | 激活(HMS) |
| TRACKING\_RETAIN\_HMS | 次留(HMS) |
| TRACKING\_SUBMIT\_IN\_LANDING\_PAGE | 表单提交(venus) |
| TRACKING\_SUBSCRIBE | 订阅 |
| TRACKING\_LOGIN | 登录 |
| TRACKING\_UPDATE | 更新 |
| TRACKING\_RESERVATION | 预约服务 |
| TRACKING\_THREE\_DAY\_RETAIN | 3日留存 |
| TRACKING\_SEVEN\_DAY\_RETAIN | 7日留存 |
| TRACKING\_DELIVER | 订单发货 |
| TRACKING\_ORDER\_SIGNING | 订单签收 |
| TRACKING\_FIRST\_PURCHASE | 首次购买 |
| TRACKING\_PURCHASE\_MEMBER\_CARD | 购买会员 |
| TRACKING\_ADD\_QUICK\_APP | 快应用添加 |
| TRACKING\_ADD\_TO\_WISH\_LIST | 添加到心愿清单 |
| TRACKING\_OPENED\_FROM\_PUSH\_NOTIFICATION | 从推送通知打开 |
| TRACKING\_RE\_ENGAGE | 用户唤醒 |
| TRACKING\_EFFECTIVE\_LEADS\_FORM | 有效线索-表单 |
| TRACKING\_POTENTIAL\_CUSTOMER\_FORM | 潜在客户线索-表单 |
| TRACKING\_CONSULT\_ONLINE | 网页咨询 |
| TRACKING\_EFFECTIVE\_LEADS\_ONLINE | 有效线索-咨询 |
| TRACKING\_POTENTIAL\_CUSTOMER\_ONLINE | 潜在客户线索-咨询 |
| TRACKING\_PHONE\_DIALING | 电话直拨 |
| TRACKING\_EFFECTIVE\_LEADS\_PHONE | 有效线索-电话 |
| TRACKING\_POTENTIAL\_CUSTOMER\_PHONE | 潜在客户线索-电话 |
| TRACKING\_FOLLOW\_SCAN | 扫码关注 |
| TRACKING\_LEADS\_LOTTERY | 抽奖线索 |
| TRACKING\_ADD\_PAYMENT\_INFO | 添加付款信息 |
| TRACKING\_START\_TRIAL | 开始试用 |
| TRACKING\_INITIATED\_CHECKOUT | 发起结账 |
| TRACKING\_INVITE | 邀请 |
| TRACKING\_SEARCH | 搜索 |
| TRACKING\_SHARE | 分享 |
| TRACKING\_TRAVEL\_BOOKING | 旅行预订 |
| TRACKING\_RATE | 评级 |
| TRACKING\_CONTENT\_VIEW | 内容视图 |
| TRACKING\_LANDINGPAGE\_CLICK | 落地页内按钮点击 |
| TRACKING\_COUPON | 卡券领取 |
| TRACKING\_NAVIGATE | 门店导航 |
| TRACKING\_LOTTERY | 抽奖 |
| TRACKING\_VOTE | 投票 |
| TRACKING\_REDIRECT | 页面跳转 |
| TRACKING\_GAME\_PACKAGE\_REDEMPTION | 礼包兑换 |
| TRACKING\_GAME\_PACKAGE\_CLAIMING | 礼包领取 |
| TRACKING\_CREATE\_ROLE | 游戏内创建角色 |
| TRACKING\_AUTHORIZE | 游戏授权 |
| TRACKING\_TUTORIAL\_COMPLETION | 游戏完成新手教程 |
| TRACKING\_ACHIEVEMENT\_UNLOCKED | 解锁成就 |
| TRACKING\_SPENT\_CREDITS | 花掉积分 |
| TRACKING\_LEVEL\_ACHIEVED | 达到级别 |
| TRACKING\_LOAN\_COMPLETION | 完件数 |
| TRACKING\_PRE\_CREDIT | 预授信数 |
| TRACKING\_CREDIT | 授信数 |
| TRACKING\_FOLLOW | 关注 |
| TRACKING\_FORWARD | 转发 |
| TRACKING\_READ | 阅读 |
| TRACKING\_LIKE | 点赞 |
| TRACKING\_COMMEN | 评论 |
| TRACKING\_QUALITY\_ACTIVATE\_APP | 优质激活 |

## 深度转化目标

|  |  |  |
| --- | --- | --- |
| 值 | 描述 | 归属于浅层转化目标的值 |
| TRACKING\_BROWSER | 浏览商品 | TRACKING\_ACTIVE |
| TRACKING\_COLLECTION | 收藏 | TRACKING\_ACTIVE |
| TRACKING\_ADD\_CART | 加入购物车 | TRACKING\_ACTIVE |
| TRACKING\_PRE\_ORDER | 下单 | TRACKING\_ACTIVE |
| TRACKING\_REGISTER | 注册 | TRACKING\_ACTIVE |
| TRACKING\_RETAIN | 次日留存 | TRACKING\_ACTIVE |
| TRACKING\_PAY | 付费量 | TRACKING\_ACTIVE |
| TRACKING\_APP\_CUSTOM | 自定义（应用） | TRACKING\_ACTIVE |
| TRACKING\_RETAIN\_HMS | 次留(HMS) | TRACKING\_ACTIVATE\_HMS |
| TRACKING\_EFFECTIVE\_CONSULT | 有效咨询 | TRACKING\_FORM\_SUBMIT |
| TRACKING\_EFFECTIVE\_CUSTOMER\_ACQUISITION | 有效获客 | TRACKING\_FORM\_SUBMIT |
| TRACKING\_EFFECTIVE\_BOOK | 有效预定 | TRACKING\_FORM\_SUBMIT |
| TRACKING\_WEB\_CUSTOM | 自定义（网页） | TRACKING\_FORM\_SUBMIT |

## 转化跟踪状态

|  |  |
| --- | --- |
| 值 | 描述 |
| TRACKING\_STATUS\_ACTIVE | 已启用 |
| TRACKING\_STATUS\_NOT\_ACTIVE | 未启用 |
| TRACKING\_STATUS\_MODIFYING | 修改中 |

## 计划日限额操作类型

|  |  |
| --- | --- |
| 值 | 描述 |
| UPDATE\_TODAY\_DAILY\_BUDGET | 修改当日限额 |
| UPDATE\_TOMORROW\_DAILY\_BUDGET | 修改计划限额，次日生效 |
| DELETE\_TOMORROW\_DAILY\_BUDGET | 删除计划次日日限额 |

## 时间段类型

|  |  |
| --- | --- |
| 值 | 描述 |
| TIME\_PERIOD\_ALL | 全天 |
| TIME\_PERIOD\_DAY\_SPECIFIC | 特定时间段 |
| TIME\_PERIOD\_HOUR\_SPECIFIC | 特定时间段（高级设置） |

## 智能提价标志

|  |  |
| --- | --- |
| 值 | 描述 |
| DYNAMIC\_PRICE\_DISABLE | 否，默认值 |
| DYNAMIC\_PRICE\_ENABLE | 是 |

## 计划日预算状态

|  |  |
| --- | --- |
| 值 | 描述 |
| CAMPAIGN\_DAILY\_BUDGET\_NOT\_EXCEED | 未达日预算 |
| CAMPAIGN\_DAILY\_BUDGET\_EXCEED | 到达日预算 |

## 任务界面显示的状态

|  |  |
| --- | --- |
| 值 | 描述 |
| ADGROUP\_STATUS\_DELETE | 已删除（任务删除） |
| ADGROUP\_STATUS\_DISABLE | 已暂停（任务暂停） |
| ADGROUP\_STATUS\_CAMPAIGN\_DISABLE | 已暂停（计划暂停） |
| ADGROUP\_STATUS\_DONE | 投放结束 |
| ADGROUP\_STATUS\_AUDIT | 审核中 |
| ADGROUP\_STATUS\_AUDIT\_DENY | 审核不通过 |
| ADGROUP\_STATUS\_NO\_CREATIVE | 待上传创意 |
| ADGROUP\_STATUS\_NOT\_START | 未投放（未到投放日期） |
| ADGROUP\_STATUS\_FROZEN | 未投放（账户已冻结） |
| ADGROUP\_STATUS\_BALANCE\_EXCEED | 未投放（账户余额不足） |
| ADGROUP\_STATUS\_ADVERTISER\_BUDGET\_EXCEED | 未投放（账户到达日预算） |
| ADGROUP\_STATUS\_CAMPAIGN\_BUDGET\_EXCEED | 未投放（计划达到日预算） |
| ADGROUP\_STATUS\_DELIVERY\_OK | 投放中 |
| ADGROUP\_STATUS\_ENABLE | 已启用 |
| ADGROUP\_STATUS\_NO\_ELEMENT | 待上传元素 |

![](./img/note_3.0-zh-cn_c050e1ab9439.png) 

ADGROUP\_STATUS\_ENABLE 只存在于请求参数。

## 计划界面显示的状态

|  |  |
| --- | --- |
| 值 | 描述 |
| CAMPAIGN\_STATUS\_DELETE | 已删除 |
| CAMPAIGN\_STATUS\_DISABLE | 已暂停 |
| CAMPAIGN\_STATUS\_ADVERTISER\_FROZEN | 未投放（账户已冻结） |
| CAMPAIGN\_STATUS\_ADVERTISER\_BALANCE\_EXCEED | 未投放（账户余额不足） |
| CAMPAIGN\_STATUS\_ADVERTISER\_DAILY\_BUDGET\_EXCEED | 未投放（账户到达日预算） |
| CAMPAIGN\_STATUS\_CAMPAIGN\_DAILY\_BUDGET\_EXCEED | 未投放（计划到达日预算） |
| CAMPAIGN\_STATUS\_DELIVERY\_OK | 投放中 |
| CAMPAIGN\_STATUS\_ENABLE | 已启用 |

![](./img/note_3.0-zh-cn_d431b1518d10.png) 

CAMPAIGN\_STATUS\_ENABLE 只存在于请求参数。

## oCPC学习状态

|  |  |
| --- | --- |
| 值 | 描述 |
| OCPC\_STATUS\_STUDY | 学习中（初始状态） |
| OCPC\_STATUS\_SUCCESS | 学习成功 |
| OCPC\_STATUS\_FAIL | 学习失败 |

## 账户余额状态

|  |  |
| --- | --- |
| 值 | 描述 |
| ADVERTISER\_BALANCE\_NOT\_EXCEED | 余额充足 |
| ADVERTISER\_BALANCE\_EXCEED | 余额不足 |

## 一键起量标志

|  |  |
| --- | --- |
| 值 | 描述 |
| OCPC\_CLICK\_RAISE\_DISABLE | 未启用 |
| OCPC\_CLICK\_RAISE\_ENABLE | 已启用 |

## 营销目标

|  |  |
| --- | --- |
| 值 | 描述 |
| OVERSEA\_NO\_GOAL | 无目的 |
| OVERSEA\_BRAND\_COGNITIVE | 品牌认知度 |
| OVERSEA\_SALE\_TRANSFER | 销售转化 |

## 转账类型

|  |  |
| --- | --- |
| 值 | 描述 |
| ALL\_TRANSFER | 全部转账类型 |
| TRANSFER\_IN | 转入 |
| TRANSFER\_OUT | 转出 |

## 计划类型

|  |  |
| --- | --- |
| 值 | 描述 |
| CAMPAIGN\_TYPE\_DISPLAY | 展示广告 |
| CAMPAIGN\_TYPE\_SHOPPING | 商品广告（需要单独申请权限） |

## 商品库库存状态（适用于DPA）

|  |  |
| --- | --- |
| 值 | 描述 |
| INVENTORY\_STATUS\_NO | 无库存 |
| INVENTORY\_STATUS\_YES | 有库存 |

## 投放状态

|  |  |
| --- | --- |
| 值 | 描述 |
| LAUNCH\_STATUS\_NO | 不可投放 |
| LAUNCH\_STATUS\_YES | 可投放 |

## 日志操作类型

|  |  |
| --- | --- |
| 值 | 描述 |
| ADD | 新增 |
| MODIFY | 修改 |
| DELETE | 删除 |
| APPROVE | 审核 |

## 日志操作者类型

|  |  |
| --- | --- |
| 值 | 描述 |
| ADVERTISER | 广告主 |
| REVIEWER | 审核员 |

## 日志操作对象类型

|  |  |
| --- | --- |
| 值 | 描述 |
| CAMPAIGN | 计划 |
| ADGROUP | 任务 |
| CREATIVE | 创意 |
| TARGETING\_TEMPLATE | 定向包 |
| ACCOUNT | 广告账户 |

## 投放策略

|  |  |
| --- | --- |
| 值 | 描述 |
| OCPC\_STRATEGY\_STANDARD | 稳定拿量 |
| OCPC\_STRATEGY\_MAXIMIZE\_QUANTITY | 优先跑量 |
| OCPC\_STRATEGY\_MINIMIZE\_COST | 优先低成本 |

## 版位商务类型

|  |  |
| --- | --- |
| 值 | 描述 |
| CONTRACT | 合约 |
| BIDDING | 竞价 |
| APPLICATION\_PROMOTION | 应用推广 |

## 签约主体

|  |  |
| --- | --- |
| 值 | 描述 |
| HW\_SOFT | 华为软件 |
| ASPIEGEL | 阿斯比格 |
| HW\_SERVICE\_HK | 华为服务（香港） |
| HW\_SI\_YI | 华为思义 |
| HW\_R | R国华为 |

## 人群来源

|  |  |
| --- | --- |
| 值 | 描述 |
| ADV\_UPLOAD\_AUDIENCE | 广告主创建的人群 |
| SYS\_RECOMMEND\_AUDIENCE | 运营从DMP推送的人群 |

## 覆盖人数排序

|  |  |
| --- | --- |
| 值 | 描述 |
| ASC | 按覆盖人数升序 |
| DESC | 按覆盖人数降序 |

## 切换ocpc状态

|  |  |
| --- | --- |
| 值 | 描述 |
| CHANGE\_TO\_OCPC\_STATUS\_NOT\_ALLOWED | 不允许切换到ocpc |
| CHANGE\_TO\_OCPC\_STATUS\_ALLOWED | 允许切换到ocpc |
| CHANGE\_TO\_OCPC\_STATUS\_DONE | 已切换到ocpc |

## 商品库类型

|  |  |
| --- | --- |
| 值 | 描述 |
| E\_COMMERCE | 电商 |

## 广告主与商品库关系

|  |  |
| --- | --- |
| 值 | 描述 |
| OWN | 拥有此商品库（包括广告主自己创建的和经理账户代建的） |
| SHARE | 接口共享的商品库 |

## 导入方式

|  |  |
| --- | --- |
| 值 | 描述 |
| TIME\_PULL | 定时拉取 |
| FILE\_UPLOAD | 文件上传 |

## ocpx学习期状态

|  |  |
| --- | --- |
| 值 | 描述 |
| OCPC\_TASK\_STATUS\_STUDY\_FAILED | 学习失败 |
| OCPC\_TASK\_STATUS\_STUDY\_OPTIMIZING | 学习期优化中 |
| OCPC\_TASK\_STATUS\_TARGET\_OPTIMIZING | 转化目标优化中 |
| OCPC\_TASK\_STATUS\_SHALLOW\_TARGET\_OPTIMIZING | 浅层目标优化中 |
| OCPC\_TASK\_STATUS\_DEEP\_TARGET\_OPTIMIZING | 深层目标优化中 |

## 采买模式

|  |  |
| --- | --- |
| 值 | 描述 |
| PROMOTION\_TYPE\_BID | 竞价 |
| PROMOTION\_TYPE\_SHARE | 分成 |

## 投放网络

|  |  |
| --- | --- |
| 值 | 描述 |
| FLOW\_RESOURCE\_SHOWAD | 展示广告网络 |

## 定向类型

|  |  |
| --- | --- |
| 值 | 描述 |
| PRIVATE | 私有定向 |
| SHARE | 公有定向 |

## 创意模式

|  |  |
| --- | --- |
| 值 | 描述 |
| TEMPLATE\_MODE | 模板模式 |
| DIRECT\_INVESTMENT\_MODE | 直投模式 |

## 推广应用类型

|  |  |
| --- | --- |
| 值 | 描述 |
| AG\_APP\_FOR\_DISPLAY\_NETWORK | AG应用 （展示广告网络） |

## 商品广告投放过滤维度

|  |  |  |
| --- | --- | --- |
| 值 | 描述 | 备注 |
| BRANDNAME | 品牌 |  |
| PMCACCOUNT | PMC账号 |  |
| STOREGROUP | PMC商品店铺 |  |
| PRODUCTCONDITION | 商品使用情况 |  |
| DISCOUNTRATE | 折扣 | 不会返回取值列表，直接设置范围，取值范围是1~100  折扣的取值方式：  1折：10  0.1折：1  不打折：100 |
| ORDERNUMBER | 销量 | 不会返回取值列表，直接设置范围，取值范围是1~99999999 |
| TAXRATE | 税率 | 不会返回取值列表，直接设置范围，取值范围是1~100 |
| PRICE | 商品价格 |  |
| FREEDELIVERY | 是否包邮 | 不会返回取值列表，直接设置范围，取值范围是true或false |

## 商品库数据上传方式

|  |  |
| --- | --- |
| 值 | 描述 |
| REGULAR | 定时拉取 |
| ADS\_API | 通过鲸鸿动能广告提供的API上传 |

## 商品库数据更新方式

|  |  |
| --- | --- |
| 值 | 描述 |
| FULL\_UPDATE | 全量更新 |
| INCREMENTAL\_UPDATE | 增量更新 |

## url地址类型

|  |  |
| --- | --- |
| 值 | 描述 |
| XML | xml |
| XML\_SITEMAP | xml\_sitemap |

## 商品过滤维度

|  |  |
| --- | --- |
| 值 | 描述 |
| BRANDNAME | 品牌 |
| PMCACCOUNT | PMC账号 |
| STOREGROUP | PMC商品店铺 |
| PRODUCTCONDITION | 商品使用情况 |

## DPA创意投放模式

|  |  |
| --- | --- |
| 值 | 描述 |
| TEMPLATE | 模板投放 |
| DIRECT | 直投 |

## 模板类型

|  |  |
| --- | --- |
| 值 | 描述 |
| LEFT\_IMAGE\_RIGHT\_TEXT | 1: left image, right text, |
| RIGHT\_IMAGE\_LEFT\_TEXT | 2: right image, left text, |
| LEFT\_AND\_RIGHT | 3: 1 and 2 |
| IMAGE\_ONLY | 4: image only |

## 智能扩量

|  |  |
| --- | --- |
| 值 | 描述 |
| LOCATION | 地域 |
| CARRIER | 运营商 |
| LANGUAGE | 语言 |
| GENDER | 性别 |
| AGE | 年龄 |
| DEVICE | 设备 |
| NETWORK\_TYPE | 联网方式 |
| AUDIENCE | 自定义人群 |

## 智能扩量开关

|  |  |
| --- | --- |
| 值 | 描述 |
| AI\_TARGET\_ENABLE | 打开 |
| AI\_TARGET\_DISABLE | 关闭 |

## 推广目的

|  |  |
| --- | --- |
| 值 | 描述 |
| APP\_DOWNLOAD | 应用下载 |
| APP\_ACTIVE | 应用促活 |
| APP\_PROMOTE | 应用推广（促活+下载） |
| APP\_RESERVE\_DOWNLOAD | 应用预约下载 |

## VIP版位

|  |  |
| --- | --- |
| 值 | 描述 |
| CREATIVE\_SIZE\_VIP\_YES | 是 |
| CREATIVE\_SIZE\_VIP\_NO | 否 |

## 关键词类型

|  |  |
| --- | --- |
| 值 | 描述 |
| KEYWORD | 关键词 |
| KEYWORD\_NEGATIVE | 否定词 |

## 关键词状态操作类型

|  |  |
| --- | --- |
| 值 | 描述 |
| KEYWORD\_STATUS\_ENABLE | 启用 |
| KEYWORD\_STATUS\_DISABLE | 停用 |
| KEYWORD\_STATUS\_DELETE | 删除 |

## 否定词关联对象所属类型

|  |  |
| --- | --- |
| 值 | 描述 |
| KEYWORD\_ASSOCIATION\_OBJECT\_LEVEL\_CAMPAIGN | 否定词关联计划 |
| KEYWORD\_ASSOCIATION\_OBJECT\_LEVEL\_ADGROUP | 否定词关联任务 |

## 关键词审核状态

|  |  |
| --- | --- |
| 值 | 描述 |
| KEYWORD\_APPROVAL\_STATUS\_AUDIT | 审核中 |
| KEYWORD\_APPROVAL\_STATUS\_AUDIT\_DENY | 审核不通过 |
| KEYWORD\_APPROVAL\_STATUS\_PASS | 审核通过 |

## 关键词当前状态

|  |  |
| --- | --- |
| 值 | 描述 |
| KEYWORD\_STATUS\_ENABLE | 启用中 |
| KEYWORD\_STATUS\_DISABLE | 已暂停 |
| KEYWORD\_STATUS\_DELETE | 已删除 |

## 关键词查询状态类型

|  |  |
| --- | --- |
| 值 | 描述 |
| KEYWORD\_QUERY\_STATUS\_ALL | 查询所有关键词 |
| KEYWORD\_QUERY\_STATUS\_DELETE | 查询所有已删除关键词 |
| KEYWORD\_QUERY\_STATUS\_AUDIT | 查询所有审核中并且未删除关键词 |
| KEYWORD\_QUERY\_STATUS\_AUDIT\_DENY | 查询所有审核不通过并且未删除关键词 |
| KEYWORD\_QUERY\_STATUS\_DISABLE | 查询所有已审核通过并且暂停关键词 |
| KEYWORD\_QUERY\_STATUS\_ENABLE | 查询所有启用中关键词 |
| KEYWORD\_QUERY\_STATUS\_NOT\_DELETE | 查询所有未删除关键词 |

## 商品分组状态

|  |  |
| --- | --- |
| 值 | 描述 |
| ACTIVE | 启用 |
| SUSPEND | 暂停 |

## 维纳斯落地页风格类型

|  |  |
| --- | --- |
| 值 | 描述 |
| VENUS\_STYLE\_GENERAL | 普通维纳斯落地页 |
| VENUS\_STYLE\_DYNAMIC | 动态维纳斯落地页 |

## 维纳斯落地页类型

|  |  |
| --- | --- |
| 值 | 描述 |
| LANDING\_PAGE\_TYPE\_APP | 安卓应用维纳斯落地页 |
| LANDING\_PAGE\_TYPE\_WEB | 网页维纳斯落地页 |

## 筛选条件类别

|  |  |
| --- | --- |
| 值 | 描述 |
| DPA\_DIMENSION | 商品库筛选条件 |
| DPA\_PRICE\_ADJUSTMENT\_DIMENSION | 商品组细分依据 |

## 动态创意类型

|  |  |
| --- | --- |
| 值 | 描述 |
| IMAGE | 图片 |
| VIDEO | 视频 |

## 是否自归因

|  |  |
| --- | --- |
| 值 | 描述 |
| SELF\_ATTRIBUTION | 自归因 |
| NOT\_SELF\_ATTRIBUTION | 非自归因 |

## 推广应用来源

|  |  |
| --- | --- |
| 值 | 描述 |
| HUAWEI\_APPGALLERY | 华为应用市场 |
| APKPURE | APKPURE |

## 分析工具类型

|  |  |
| --- | --- |
| 值 | 描述 |
| PUBLIC | 公用 |
| PRIVATE | 私有 |

## 跟踪类型

|  |  |
| --- | --- |
| 值 | 描述 |
| TRACKING\_TYPE\_LEAD | 跟踪线索 |
| TRACKING\_TYPE\_APP | 跟踪应用 |
| TRACKING\_TYPE\_FASTAPP | 跟踪快应用 |

## 跟踪方式

|  |  |
| --- | --- |
| 值 | 描述 |
| TRACKING\_MODE\_APP ANALYTICS | 应用分析工具 |
| TRACKING\_MODE\_HMS | HMS统计 |
| TRACKING\_MODE\_DTM | DTM |
| TRACKING\_MODE\_API | API接入 |
| TRACKING\_MODE\_PIXEL | Pixel智能跟踪 |
| TRACKING\_MODE\_VENUS | 维纳斯 |
| TRACKING\_MODE\_HA | HA |

## 归因模式

|  |  |
| --- | --- |
| 值 | 描述 |
| LAST\_CLICK | 最后一次点击 |
| FIRST\_CLICK | 首次点击 |

## 落地页链接类型

|  |  |
| --- | --- |
| 值 | 描述 |
| LANDING\_PAGE\_URL | 指定网页(落地页) |
| PREFIX\_URL | 指定网页前缀（拼接网页）-只有商品广告才有效 |

## 转化价值类型

|  |  |
| --- | --- |
| 值 | 描述 |
| SAME\_CONVERSION\_VALUE | 设置相同转化价值 |
| DIFFERENT\_CONVERSION\_VALUE | 设置不同转化价值 |
| NO\_CONVERSION\_VALUE | 不设置转化价值 |

## 虚拟账户类型

|  |  |
| --- | --- |
| 值 | 描述 |
| GENERIC\_ACCOUNT | 通用账户 |
| SELF\_ACCOUNT | 自有媒体 |

## 资金账户类型

|  |  |
| --- | --- |
| 值 | 描述 |
| ALL\_ACCOUNT | 全部资金账户（只包含以下五种） |
| CASH\_ACCOUNT | 现金账户 |
| REBATE\_ACCOUNT | 返利金账户 |
| GIFT\_ACCOUNT | 赠送金账户 |
| CREDIT\_ACCOUNT | 授信账户 |
| CREDIT\_CARD\_ACCOUNT | 信用卡账户 |

## 赠送金类型

|  |  |
| --- | --- |
| 值 | 描述 |
| PURE\_GIFT | 纯赠 |
| RECHARGE\_GIFT | 充值赠送 |

## 充值类型

|  |  |
| --- | --- |
| 值 | 描述 |
| ALL\_RECHARGE | 全部充值类型 |
| ONLINE\_RECHARGE | 线上充值 |
| OFFLINE\_RECHARGE | 线下充值 |

## 充值状态

|  |  |
| --- | --- |
| 值 | 描述 |
| ALL\_RECHARGE | 全部充值状态 |
| AWAITING\_PAYMENT | 待付款 |
| RECHARGE\_SUCCEEDED | 充值成功 |
| RECHARGE\_CANCELED | 充值订单已取消 |
| RECHARGE\_CLOSED | 充值订单已关闭 |
| REJECTED | 审核不通过 |
| REFUNDS\_AWAITING\_REVIEW | 退款待审核 |
| REFUNDED | 退款成功 |
| PAYMENT\_AWAITING\_REVIEW | 已付款待审核 |
| AUDIT\_NO\_PASS | 审核不通过（驳回关闭） |
| AWAITING\_REVIEW | 待审核 |

## 充值用途

|  |  |
| --- | --- |
| 值 | 描述 |
| ALL | 全部 |
| CASH | 现金 |
| CREDIT | 授信 |
| VIRTUAL | 虚拟金 |

## 发票状态

|  |  |
| --- | --- |
| 值 | 描述 |
| ALL\_RECEIPT | 全部发票状态 |
| NOT\_WRITE\_RECEIPT | 未开发票 |
| WROTE\_RECEIPT | 已开发票 |
| REFUND\_RECEIPT | 已退发票 |
| NO\_NEED\_RECEIPT | 无需发票 |
| PROCESSING\_RECEIPT | 开票中 |

## 版位所属分类

|  |  |
| --- | --- |
| 值 | 描述 |
| CREATIVE\_SIZE\_CATEGORY\_THIRD\_PARTY | 三方媒体资源 |
| CREATIVE\_SIZE\_CATEGORY\_SELF\_OWNED | 自有媒体资源 |
| CREATIVE\_SIZE\_CATEGORY\_OTHER | 其他首选资源 |

## 商品使用情况

|  |  |
| --- | --- |
| 值 | 描述 |
| NEW | 全新 |
| REFURBISHED | 翻新 |
| USED | 已使用 |

## 漫游流量开关

|  |  |
| --- | --- |
| 值 | 描述 |
| ACCEPT\_ROAMING\_ENABLE | 打开 |
| ACCEPT\_ROAMING\_DISABLE | 关闭 |

## 账户类型

|  |  |
| --- | --- |
| 值 | 描述 |
| DIRECT\_ADVERTISER\_ACCOUNT | 直客账户 |
| AGENCY\_ACCOUNT | 一级服务商账户 |
| SUB\_AGENCY\_ACCOUNT | 子客服务商账户 |
| AGENT\_ACCOUNT | 子客账户 |
| MANAGER\_ACCOUNT | 经理账户 |

## 账户推广业务类型

|  |  |
| --- | --- |
| 值 | 描述 |
| ADS | 展示广告网络 |
