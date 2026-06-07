---
title: "Condition"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketapi-modle-condition-0000001181946369
format: md
---

# Condition

![](./img/57922974999f.png) 

部分标签枚举值过多，无法一一列举，如果您有需求可以联系华为行业运营提供。

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| communication\_onlinerate\_dev | O | String | 手机在线时段。  取值范围：   - cor\_0h：0:00-1:00小时 - cor\_1h：1:00-2:00小时 - cor\_2h：2:00-3:00小时 - cor\_3h：3:00-4:00小时 - cor\_4h：4:00-5:00小时 - cor\_5h：5:00-6:00小时 - cor\_6h：6:00-7:00小时 - cor\_7h：7:00-8:00小时 - cor\_8h：8:00-9:00小时 - cor\_9h：9:00-10:00小时 - cor\_10h：10:00-11:00小时 - cor\_11h：11:00-12:00小时 - cor\_12h：12:00-13:00小时 - cor\_13h：13:00-14:00小时 - cor\_14h：14:00-15:00小时 - cor\_15h：15:00-16:00小时 - cor\_16h：16:00-17:00小时 - cor\_17h：17:00-18:00小时 - cor\_18h：18:00-19:00小时 - cor\_19h：19:00-20:00小时 - cor\_20h：20:00-21:00小时 - cor\_21h：21:00-22:00小时 - cor\_22h：22:00-23:00小时 - cor\_23h：23:00-24:00小时 |
| push\_online\_days\_30d\_dev | O | String | 手机月在线天数。  取值范围：   - c1m\_1：1天 - c1m\_2：2天 - c1m\_3：3天 - c1m\_4：4天 - c1m\_5：5天 - c1m\_6：6天 - c1m\_7：7天 - c1m\_8：8天 - c1m\_9：9天 - c1m\_10：10天 - c1m\_11：11天 - c1m\_12：12天 - c1m\_13：13天 - c1m\_14：14天 - c1m\_15：15天 - c1m\_16：16天 - c1m\_17：17天 - c1m\_18：18天 - c1m\_19：19天 - c1m\_20：20天 - c1m\_21：21天 - c1m\_22：22天 - c1m\_23：23天 - c1m\_24：24天 - c1m\_25：25天 - c1m\_26：26天 - c1m\_27：27天 - c1m\_28：28天 - c1m\_29：29天 - c1m\_30：30天 |
| push\_online\_days\_7d\_dev | O | String | 手机周在线天数。  取值范围：   - p7d\_1：1天 - p7d\_2：2天 - p7d\_3：3天 - p7d\_4：4天 - p7d\_5：5天 - p7d\_6：6天 - p7d\_7：7天 |
| forecast\_age\_dev | O | String | 年龄。  取值范围：   - 1：18岁以下 - 2：18~23岁 - 3：24~34岁 - 4：35~44岁 - 5：45~54岁 - 6：55岁及以上 |
| terminal\_new\_dev | O | String | 外部型号。  <strong>说明：</strong>此字段枚举值约1851个型号，无法一一列举。如果您有需求可以联系华为行业运营提供。 |
| series\_new\_dev | O | String | 手机系列。  取值范围：   - 华为P系列：华为P系列 - 华为MATE系列：华为MATE系列 - 华为NOVA系列：华为NOVA系列 - 华为G系列：华为G系列 - 华为畅享系列：华为畅享系列 - 华为麦芒系列：华为麦芒系列 - 荣耀N系列：荣耀N系列 - 荣耀V系列：荣耀V系列 - 荣耀PLAY系列：荣耀PLAY系列 - 荣耀MAGIC系列：荣耀MAGIC系列 - 荣耀畅玩A系列：荣耀畅玩A系列 - 荣耀畅玩N系列：荣耀畅玩N系列 - 荣耀青春版系列：荣耀青春版系列 - 荣耀畅玩C系列：荣耀畅玩C系列 - 荣耀畅玩X系列：荣耀畅玩X系列 - 荣耀NOTE系列：荣耀NOTE系列 - 华为M系列：华为M系列 - 华为T系列：华为T系列 - 荣耀平板：荣耀平板 - 荣耀畅玩平板：荣耀畅玩平板 - 华为智慧屏：华为智慧屏 - 荣耀智慧屏：荣耀智慧屏 |
| price\_new\_dev | O | String | 手机价格。  取值范围：   - 1：1000以内 - 2：1000~2000 - 3：2000~3000 - 4：3000~5000 - 5：5000~8000 - 6：8000以上 - 7：保密 |
| gender\_new\_dev | O | String | 性别。  取值范围：   - g\_m：男 - g\_f：女 |
| game\_payamout\_30\_dev | O | String | 近30天网游支付金额。  取值范围：   - 0：[0] - 0\_1b：(0，100] - 1b\_5b：(100，500] - 5b\_2k：(500，2000] - 2k+：(2000，+∞) |
| product\_new\_dev | O | String | 手机传播名。  <strong>说明：</strong>此字段枚举值约700个，无法一一列举。如果您有需求可以联系华为行业运营提供。 |
| game\_dlanum\_30\_dev | O | String | 近30天下载游戏个数。  取值范围：   - 0：[0] - 1：[1] - 2：[2] - 3\_4：[3，4] - 5\_10：[5，10] - 11\_20：[11，20] - 21\_50：[21，50] - 51\_100：[51，100] - 100+：(100，+∞) |
| his\_activated\_apps\_dev | O | String | 曾经使用过的APP，即为应用ID。  <strong>说明：</strong>此字段枚举值不可超过20个。 |
| daily\_installed\_apps\_dev | O | String | 当日已安装的APP，即为应用ID。  <strong>说明：</strong>此字段枚举值不可超过20个。 |
| his\_installed\_apps\_dev | O | String | 曾经安装过的APP，即为应用ID。  <strong>说明：</strong>此字段枚举值不可超过20个。 |
| hispace\_active\_state\_dev | O | String | 应用市场最近活跃距今天数。  取值范围：   - 0：[0] - 1：[1] - 2：[2] - 3：[3] - 4：[4] - 5：[5] - 6：[6] - 7：[7] - 8\_14：(7，14] - 15\_30：(14，30] - 31\_60：(30，60] - 61\_90：(60，90] - 91\_365：(90，365] - 365+：(365，+∞） |
| 30dy\_app\_active\_dev | O | String | 30天内使用过的APP，即为应用ID。  <strong>说明：</strong>此字段枚举值不可超过20个。 |
| app\_type\_actived\_v2\_dev | O | String | 曾经使用过的APP类型，即为应用ID。  <strong>说明：</strong>此字段枚举值不可超过20个。 |
| hispace\_app\_install\_pref\_dev | O | String | 安装应用类别偏好。  取值范围：   - 主题个性：主题个性 - 休闲娱乐：休闲娱乐 - 休闲游戏：休闲游戏 - 休闲益智：休闲益智 - 体育竞速：体育竞速 - 便捷生活：便捷生活 - 儿童：儿童 - 出行导航：出行导航 - 动作冒险：动作冒险 - 动作射击：动作射击 - 动漫：动漫 - 合作壁纸\*：合作壁纸\* - 商务：商务 - 图书阅读：图书阅读 - 学习办公：学习办公 - 实用工具：实用工具 - 影音娱乐：影音娱乐 - 拍摄美化：拍摄美化 - 教育：教育 - 新闻阅读：新闻阅读 - 旅游住宿：旅游住宿 - 棋牌桌游：棋牌桌游 - 汽车：汽车 - 电子书籍：电子书籍 - 社交通讯：社交通讯 - 经营策略：经营策略 - 网络游戏：网络游戏 - 美食：美食 - 表盘个性：表盘个性 - 角色扮演：角色扮演 - 购物比价：购物比价 - 资讯生活：资讯生活 - 运动健康：运动健康 - 金融理财：金融理财 |
| hispace\_pay\_user\_cd\_dev | O | String | 是否应用市场付费用户。  取值范围：   - 1：是 - 0：否 |
| latest\_province\_dev | O | String | 最后所在省份。  <strong>说明：</strong>此字段枚举值约40个，无法一一列举。如果您有需求可以联系华为行业运营提供。  示例：110000表示北京市 |
| city\_new\_dev\_dev | O | String | 常驻城市。  <strong>说明：</strong>此字段枚举值约340个，无法一一列举。如果您有需求可以联系华为行业运营提供。  示例：110000表示北京市 |
| active\_city\_grade\_dev | O | String | 城市等级。  取值范围：   - 1：一线城市 - 1\*：新一线城市 - 2：二线城市 - 3：三线城市 - 4：四线及以下城市 |
| game\_elements\_dev | O | String | 玩过的游戏元素。  <strong>说明：</strong>此字段枚举值约70个，无法一一列举。如果您有需求可以联系华为行业运营提供。  示例：街机、战棋、吃鸡 |
| game\_ip\_dev | O | String | 玩过的游戏IP。  <strong>说明：</strong>此字段枚举值约70个，无法一一列举。如果您有需求可以联系华为行业运营提供。  示例：植物大战僵尸、保卫萝卜、红色警戒 |
| game\_theme\_dev | O | String | 玩过的游戏题材。  <strong>说明：</strong>此字段枚举值约47个，无法一一列举。如果您有需求可以联系华为行业运营提供。  示例：足球、三国、玄幻 |
| game\_played\_game\_play\_dev | O | String | 玩过的游戏玩法。  <strong>说明：</strong>此字段枚举值约40个，无法一一列举。如果您有需求可以联系华为行业运营提供。  示例：休闲、塔防、竞速 |
| game\_played\_core\_play\_dev | O | String | 玩过的游戏核心玩法。  <strong>说明：</strong>此字段枚举值约40个，无法一一列举。如果您有需求可以联系华为行业运营提供。  示例：休闲、塔防、竞速 |
| game\_sdk\_overall\_silence\_duration\_up | O | String | 游戏整体沉默时长。  取值范围：   - 0：[0] - 0\_7：（0,7] - 7\_14：（7,14] - 14\_30：（14,30] - 30\_60：（30,60] - 60+：（60,+∞） |
| game\_cancel\_booking\_dev | O | String | 取消预约的游戏。  <strong>说明：</strong>此字段枚举值约3682个，无法一一列举。如果您有需求可以联系华为行业运营提供。 |
| game\_cps\_silence\_days\_dev | O | String | 游戏沉默天数。  取值范围：   - 0：[0] - 0\_7：（0,7] - 7\_14：（7,14] - 14\_35：（14,35] - 35\_60：（35,60] - 60+：（60,+∞） |
| game\_comic\_game\_degree\_dev | O | String | 二次元游戏程度。  取值范围：   - 1：核心玩家 |
| game\_30dy\_plat\_usage\_days\_dev | O | String | 近30天竞品游戏平台使用天数。  取值范围：  （0,3]：0\_3  （3,7]：3\_7  （7,14]：7\_14  （14,21]：14\_21  （21,30]：21\_30 |
| game\_booking\_app\_up | O | String | 已预约的游戏。  <strong>说明：</strong>此字段枚举值约4990个，无法一一列举。如果您有需求可以联系华为行业运营提供。 |
| game\_30dy\_app\_new\_install\_cnt | O | String | 30天内新安装游戏个数。  取值范围：   - 1：[1] - 2\_4：[2,4] - 5\_10：[5,10] - 10+：（10,+∞） |
| game\_30dy\_app\_opened\_cnt | O | String | 30天内打开过游戏个数。  取值范围：   - 1：[1] - 2\_4：[2,4] - 5\_10：[5,10] - 11\_20：[11,20] - 20+：（20,+∞） |
| game\_install\_app\_cnt\_dev | O | String | 当前安装游戏个数。  取值范围：   - 1\_4：[1,4] - 5\_10：[5,10] - 11\_20：[11,20]： - 20+：（20,+∞） |
| game\_usage\_app\_cnt\_dev | O | String | 曾打开过游戏个数。  取值范围：   - 1\_4：[1,4] - 5\_10：[5,10] - 11\_50：[11,50] - 50+：（50,+∞） |
| 90d\_app\_active\_dev | O | String | 90天内使用过的APP。 |
| consume\_purchase\_dev | O | String | 华为云服务付费用户。  取值范围：   - H：高 - N：一般 |
| consume\_spender\_dev | O | String | 是否剁手党。  取值范围：   - 1：是 |
| mobile\_entertainment\_pref\_dev | O | String | 手机娱乐偏好。  取值范围：   - 1：音乐爱好者 - 2：视频爱好者 - 3：短视频爱好者 - 4：电子书爱好者 - 5：听书爱好者 - 6：夜拍爱好者 - 7：旅游爱好者 - 8：摄影爱好者 - 9：自拍达人 - 10：运动爱好者 - 11：手游重度 - 12：社交达人 - 13：漫画迷二次元 |
| app\_type\_installed\_v2\_dev | O | String | 已安装APP分类。  <strong>说明：</strong>此字段枚举值约120个，无法一一列举。如果您有需求可以联系华为行业运营提供。  示例：游戏\_角色扮演\_动作、应用\_运动健康\_运动 |
| jnt\_oprn\_iap\_30dy\_pay\_amt\_up | O | String | 游戏累计支付金额。  取值范围：   - 0\_5：(0,5] - 5\_10：(5,10] - 10\_20：(10,20] - 20\_50：(20,50] - 50\_100：(50,100] - 100\_500：(100,500] - 500\_1000：(500,1000] - 1000\_2000：(1000,2000] - 2000+\\}：(2000,+∞) |
| travel\_lover\_flag | O | String | 是否是旅游爱好者。  取值范围：   - 1：是 |
| not\_actived\_seg\_dev | O | String | APP当前安装未活跃。  取值范围：   - 7：近7天未活跃 - 15：近15天未活跃 - 30：近30天未活跃 - 60：近60天未活跃 - 90+：近90天未活跃 - 180+：近180天未活跃 - 90：近90天未活跃（上报天数&gt;=85） - 180：近180天未活跃（上报天数&gt;=170） |
| game\_play\_pref\_dev | O | String | 游戏属性偏好。  <strong>说明：</strong>此字段枚举值约76个，无法一一列举。如果您有需求可以联系华为行业运营提供。  示例：迷宫、机甲、战棋 |
| active\_duration\_dev | O | String | 开机天数。  取值范围：   - a\_0：[0] - a\_0\_7：(0，7] - a\_7\_14：(7，14] - a\_14\_30：(14，30] - a\_30\_60：(30，60] - a\_60\_90：(60，90] - a\_90\_180：(90，180] - a\_180\_360：(180，360] - a\_360\_720：(360，720] - a\_720+：(720，+∞) |
| carrier\_score\_dev | O | String | 移动运营商。  取值范围：   - 在线\_p1：中国移动 - 在线\_p2：中国联通 - 在线\_p3：中国电信 - 在线\_p4：未知 |
| cp\_new\_dev | O | String | 移动运营商 |
| us\_hours\_30d\_dev | O | String | 设备日均使用时长。  单位：小时 |
| city\_new\_dev | O | String | 常驻城市 |
| active\_city\_grade\_dev | O | String | 开机城市等级 |
| switch\_state\_dev | O | String | 用户体验改进计划开关状态 |
| resolution\_dev | O | String | 屏幕分辨率 |
| ram\_dev | O | String | 预置RAM大小 |
| probability\_card\_payment\_intention | O | String | 卡牌付费意向 |
| probability\_video\_new\_user\_payment\_dev | O | String | 长视频付费意向 |
| probability\_tower\_defense\_payment\_intention | O | String | 塔防付费意向 |
| probability\_strategy\_payment\_intention | O | String | 战略付费意向 |
| probability\_role\_playing\_payment\_intention | O | String | 角色扮演付费意向 |
| probability\_martial\_arts\_payment\_intention | O | String | 武侠付费意向 |
| probability\_legends\_payment\_intention | O | String | 传奇付费意向 |
| probability\_immortal\_xia\_payment\_intention | O | String | 仙侠付费意向 |
| probability\_fishing\_payment\_intention | O | String | 捕鱼付费意向 |
| financial\_loan\_apply\_interests | O | String | 申请贷款意向 |
| cur\_emui\_ver\_num\_dev | O | String | 当前EMUI版本号 |
| star\_fan\_adhesion\_dev | O | String | 明星艺人 |
| int\_ecommerce\_purchase | O | String | 购物比价-电商核心付费人群 |
| int\_lower\_tiered\_city | O | String | 购物比价-电商三四线下沉城市人群 |
| int\_ecommerce\_platform | O | String | 购物比价- 电商平台 |
| int\_high\_net\_worth | O | String | 消费人群-高净值人群 |
| int\_internet\_age\_persion | O | String | 消费人群-Z世代 |
| int\_game\_artstyle | O | String | 游戏-游戏美术风格 |
| int\_purchase\_luxury | O | String | 购物比价-电商奢侈品 |
| int\_game\_purchase\_fighting\_landlord | O | String | 游戏-斗地主付费 |
| int\_game\_purchase\_mahjong | O | String | 游戏-麻将付费 |
| int\_game\_purchase\_fishing | O | String | 游戏-捕鱼付费 |
| int\_instant\_message | O | String | 社交通讯-即时通讯 |
| int\_asking\_answers\_community | O | String | 社交通讯-问答社区 |
| career\_attributes\_dev | O | String | 职业属性 |
| int\_game\_play | O | String | 游戏-游戏玩法 |
| int\_game\_making\_friends | O | String | 社交通讯-游戏交友 |
| int\_video\_chat | O | String | 社交通讯-视频交友 |
| int\_fashion\_brand | O | String | 购物比价-潮牌 |
| int\_purchase\_clothes | O | String | 购物比价-服装 |
| int\_game\_purchase\_themes | O | String | 游戏-游戏付费（题材） |
| int\_purchase\_overseas | O | String | 购物比价-跨境电商 |
| int\_purchase\_wholesale | O | String | 购物比价-批发 |
| int\_purchase\_home | O | String | 购物比价-家居 |
| int\_voice\_make\_friends | O | String | 社交通讯-语音交友 |
| int\_women\_community | O | String | 社交通讯-女性社区 |
| int\_city\_making\_friends | O | String | 社交通讯-同城交友 |
| int\_workplace\_social | O | String | 社交通讯-职场社交 |
| int\_fashion\_community | O | String | 社交通讯-时尚社区 |
| int\_women\_clothing | O | String | 购物比价-女装 |
| int\_discount\_shopping | O | String | 购物比价-优惠购 |
| int\_purchase\_food | O | String | 购物比价-食品 |
| int\_purchase\_drinks | O | String | 购物比价-酒水 |
| int\_blind\_date | O | String | 社交通讯-婚恋交友 |
| int\_luxury\_brand\_car | O | String | 汽车-豪华车购车 |
| hobby\_game\_type | O | String | 游戏-游戏兴趣（类型） |
| hobby\_game\_theme | O | String | 游戏-游戏兴趣（题材） |
| hobby\_game\_carrier | O | String | 游戏-游戏兴趣（载体） |
| int\_new\_energy\_car | O | String | 汽车-新能源车潜客 |
| int\_loans | O | String | 贷款-网络贷款 |
| int\_game\_bhvr\_type | O | String | 游戏-游戏活跃（类型） |
| int\_game\_bhvr\_carrier | O | String | 游戏-游戏活跃（载体） |
| int\_finance | O | String | 理财-金融理财爱好 |
| int\_curing\_car | O | String | 汽车-养车 |
| int\_luxury\_brand | O | String | 汽车-摩托车 |
| int\_car\_produce | O | String | 汽车-汽车车系 |
| consume\_game\_level\_dev | O | String | 游戏付费 |
| consume\_level\_dev | O | String | 云服务付费 |
| career\_third\_level\_type\_dev | O | String | 职业（新） |
| short\_video\_prefer | O | String | 影音娱乐-短视频 |
| carowner\_group | O | String | 汽车-有车人群 |
| int\_business | O | String | 商务-商务人群 |
| int\_rent\_car | O | String | 汽车-租车 |
| int\_purchase\_pregnant\_probability | O | String | 电商-母婴类 |
| int\_purchase\_3c\_probability | O | String | 电商-3C类 |
| int\_prime\_credit | O | String | 贷款-优质信贷 |
| int\_personal\_loan | O | String | 贷款-个人贷款 |
| int\_militarynews\_prefer | O | String | 新闻-军事新闻 |
| int\_make\_strange\_friends | O | String | 社交通讯-陌生交友 |
| int\_game\_live | O | String | 影音娱乐-游戏直播 |
| int\_entertainment\_live | O | String | 影音娱乐-娱乐直播 |
| int\_credit\_card | O | String | 银行-信用卡 |
| credit\_query\_service\_dev | O | String | 信用查询 |
| incar\_electrical\_appliances\_dev | O | String | 车载电器 |
| car\_accessories\_dev | O | String | 汽车用品 |
| car\_decoration\_dev | O | String | 汽车装饰 |
| int\_buy\_second\_car | O | String | 汽车-二手车 |
| int\_buy\_new\_car | O | String | 汽车-新车 |
| int\_news\_prefer | O | String | 新闻-新闻 |
| int\_audio\_reader | O | String | 新闻阅读-有声读物 |
| up\_realname\_verify\_dev | O | String | 账号实名注册用户 |
| loan\_probability | O | String | 贷款-贷款 |
| comsumption\_level | O | String | 消费-用户消费等级 |
| financial\_news\_prefer | O | String | 新闻-财经新闻 |
| sportsnews\_prefer | O | String | 新闻-体育新闻 |
| novel\_reading\_perfer | O | String | 新闻阅读-小说 |
| education\_dev | O | String | 学历 |
| user\_watch\_picbook | O | String | 早教-看绘本 |
| fitness\_slimming\_level | O | String | 运动健康-减肥瘦身 |
| user\_education\_language | O | String | 早教-语言启蒙 |
| user\_education\_intelligence | O | String | 早教-智力开发 |
| user\_education\_interest | O | String | 早教-兴趣培养 |
| game\_level | O | String | 游戏-游戏活跃（题材） |
| game\_purchase\_score | O | String | 游戏-游戏付费意愿 |
| rent\_house\_intention | O | String | 房产-租房 |
| buy\_house\_intention | O | String | 房产-买房 |
| cross\_industry\_exploration\_dev | O | String | 破圈探索人群 |
| e\_business\_feature\_dev | O | String | 画像特征人群 |
| general\_quality\_audience\_dev | O | String | 高品质商品 |
| e\_business\_active\_dev | O | String | 核心激活人群 |
| hispace\_expsoure\_cnt | O | String | 应用曝光 |
| health\_interest\_dev | O | String | 健康爱好者 |
| owner\_cars\_user\_dev | O | String | 有车人士 |
| consume\_frequency\_dev | O | String | 消费频率 |
| financial\_risk\_prefer | O | String | 理财-理财风险 |
| financial\_securities\_audiences | O | String | 理财-股票证券 |
| luxury\_hotel\_prefer | O | String | 旅游-豪华酒店入住 |
| radio\_dev | O | String | 电台兴趣 |
| consume\_ability\_dev | O | String | 消费倾向 |
| primary\_secondary\_edu\_dev | O | String | 中小学综合教育 |
| edu\_pay\_dev | O | String | 教育付费 |
| mother\_baby\_nursery\_rhyme\_score | O | String | 儿歌 |
| local\_life\_service\_flag\_dev | O | String | 本地生活 |
| mother\_baby\_services\_score | O | String | 母婴服务 |
| parenting\_status\_dev | O | String | 育儿状态 |
| marriage\_status\_dev | O | String | 婚恋状态 |
| consume\_credit\_card\_level\_dev | O | String | 信用卡使用 |
| car\_energy\_interest\_exist\_dev | O | String | 汽车动力-已有 |
| car\_price\_interest\_exist\_dev | O | String | 汽车价格-已有 |
| car\_origin\_interest\_potential\_dev | O | String | 汽车车系-潜在 |
| car\_price\_interest\_potential\_dev | O | String | 购车意向-价格 |
| car\_model\_potential\_dev | O | String | 购车意向-类型 |
| car\_model\_owned\_dev | O | String | 汽车类型-已有 |
| car\_brand\_interest\_potential\_dev | O | String | 购车意向-品牌 |
| car\_brand\_interest\_owned\_dev | O | String | 汽车品牌-已有 |
| parenting\_knowledge\_dev | O | String | 育儿知识 |
| children\_video\_audio\_dev | O | String | 母婴视频及音频 |
| children\_games\_dev | O | String | 母婴游戏 |
| children\_books\_dev | O | String | 儿童书籍 |
| business\_service\_job\_hunting\_dev | O | String | 求职招聘 |
| knowledge\_payment\_dev | O | String | 知识付费 |
| children\_clothing\_flag\_dev | O | String | 儿童服饰 |
| maternal\_health\_care\_dev | O | String | 孕妇保健 |
| owner\_house\_flag\_dev | O | String | 有房人士 |
| finance\_valued\_client\_dev | O | String | 优质信贷客户 |
| finance\_trust\_dev | O | String | 信托 |
| finance\_overseas\_asset\_dev | O | String | 海外资产配置 |
| finance\_precious\_metal\_dev | O | String | 证券-贵金属 |
| finance\_crude\_dev | O | String | 证券-原油 |
| finance\_futures\_dev | O | String | 证券-期货 |
| finance\_serious\_illness\_insurance\_dev | O | String | 保险-重疾险 |
| finance\_medical\_insurance\_dev | O | String | 保险-医疗险 |
| finance\_annuity\_insurance\_dev | O | String | 保险-年金险 |
| finance\_accident\_insurance\_dev | O | String | 保险-意外险 |
| finance\_bond\_dev | O | String | 证券-债券 |
| finance\_foreign\_currency\_dev | O | String | 证券-外汇 |
| finance\_car\_loan\_dev | O | String | 贷款-车贷 |
| finance\_house\_loan\_dev | O | String | 贷款-房贷 |
| sports\_goods\_dev | O | String | 体育用品 |
| sports\_culture\_dev | O | String | 体育文化 |
| sports\_fitness\_training\_dev | O | String | 健身训练 |
| sports\_outdoor\_extreme\_dev | O | String | 户外极限运动 |
| sports\_water\_ice\_dev | O | String | 水上冰上运动 |
| sports\_running\_riding\_dev | O | String | 跑步骑行 |
| sports\_ball\_games\_dev | O | String | 球类运动 |
| buy\_trip\_assistant\_service\_flag\_dev | O | String | 购买行程助手服务 |
| overseas\_shopping\_flag\_dev | O | String | 海淘 |
| finance\_creadit\_card\_interests\_dev | O | String | 银行-信用卡 |
| finance\_bank\_interests\_dev | O | String | 银行-银行 |
| finance\_crowdfund\_dev | O | String | 互联网金融-众筹 |
| finance\_internet\_bank\_dev | O | String | 互联网金融-互联网银行 |
| finance\_bookkeeping\_dev | O | String | 互联网金融-记账 |
| finance\_financial\_service\_dev | O | String | 互联网金融-综合金融平台 |
| finance\_digital\_currency\_dev | O | String | 互联网金融-数字货币 |
| finance\_microloans\_dev | O | String | 互联网金融-互联网贷款 |
| purch\_seasonrec\_dev | O | String | 当季推荐 |
| purch\_sealeisure\_dev | O | String | 海滨休闲 |
| finance\_car\_insurance\_dev | O | String | 保险-车险 |
| finance\_insurance\_endowment\_dev | O | String | 保险-养老险 |
| finance\_insurance\_life\_dev | O | String | 保险-人寿险 |
| finance\_property\_insurance\_dev | O | String | 保险-财产险 |
| book\_tickets\_pro\_dev | O | String | 订景点门票 |
| buy\_travel\_agents\_flag\_dev | O | String | 购买旅行社服务 |
| sports\_interests\_dev | O | String | 运动爱好者 |
| purch\_outeradv\_dev | O | String | 户外探险 |
| female\_skirt\_flag\_dev | O | String | 女装裙装 |
| female\_trousers\_flag\_dev | O | String | 女装裤装 |
| female\_jacket\_flag\_dev | O | String | 女装上装 |
| airfare\_purch\_dev | O | String | 飞机票兴趣 |
| purch\_family\_dev | O | String | 亲子旅游 |
| high\_speed\_rail\_dev | O | String | 火车高铁票兴趣 |
| probability\_anime\_lovers\_dev | O | String | 动漫 |
| home\_theater\_purch\_flag\_dev | O | String | 家庭影院 |
| speaker\_purch\_flag\_dev | O | String | 音箱 |
| pc\_purch\_flag\_dev | O | String | 笔记本电脑 |
| game\_study\_machine\_flag\_dev | O | String | 电竞设备及配件 |
| rent\_shop\_flag\_dev | O | String | 商铺租赁 |
| common\_rent\_house\_flag\_dev | O | String | 普通住宅租赁 |
| rent\_villa\_flag\_dev | O | String | 别墅豪宅租赁 |
| high\_end\_clothing\_luggage\_flag\_dev | O | String | 高端服饰箱包 |
| nanny\_dev | O | String | 保姆 |
| maternity\_matron\_dev | O | String | 月嫂 |
| house\_move\_dev | O | String | 房屋搬迁 |
| house\_maintain\_dev | O | String | 房屋维修 |
| home\_appliances\_maintain\_dev | O | String | 家电清洗维修 |
| cleaner\_dev | O | String | 保洁 |
| marry\_love\_friend\_flag\_dev | O | String | 婚恋交友 |
| secondhand\_trade\_flag\_dev | O | String | 二手物品 |
| recent\_trips\_flag\_dev | O | String | 近期旅游意向 |
| finance\_stock\_dev | O | String | 证券意向 |
| finance\_fund\_dev | O | String | 证券-基金 |
| insurance\_dev\_v1 | O | String | 保险意向 |
| financial\_bank\_dev | O | String | 银行-银行品牌 |
| motion\_camera\_buying\_flag\_dev | O | String | 运动相机 |
| second\_house\_transaction\_flag\_dev | O | String | 普通住宅二手房 |
| new\_house\_transaction\_flag\_dev | O | String | 普通住宅新房 |
| school\_district\_house\_transaction\_flag\_dev | O | String | 学区 |
| smartwatch\_flag\_dev | O | String | 智能手表 |
| buy\_house\_flag\_dev | O | String | 近期购房意向 |
| tablet\_purch\_flag\_dev | O | String | 平板电脑 |
| menswear\_flag\_dev | O | String | 男装 |
| ordinary\_house\_transaction\_flag\_dev | O | String | 普通住宅交易 |
| slr\_camera\_flag\_dev | O | String | 摄影设备 |
| car\_service\_interest\_dev | O | String | 汽车服务 |
| financial\_microloans\_dev | O | String | 借贷意向 |
| probability\_role\_playing\_game\_lovers\_dev | O | String | 角色扮演兴趣 |
| probability\_business\_strategy\_game\_lovers\_dev | O | String | 经营策略兴趣 |
| probability\_board\_game\_lovers\_dev | O | String | 棋牌桌游兴趣 |
| apptype\_usage\_30d\_duration\_dev | O | String | 近30天应用分类使用时长（二级分类） |
| apptype\_usage\_30d\_times\_dev | O | String | 近30天应用分类使用次数（二级分类） |
| female\_clothes\_buying\_flag\_dev | O | String | 女装 |
| puz\_game\_lovers\_dev | O | String | 休闲益智兴趣 |
| audio\_entertainment\_lovers\_dev | O | String | 影音娱乐 |
| juvenile\_cohesion\_dev | O | String | 幼儿园教育 |
| house\_property\_dev | O | String | 房产兴趣 |
| financial\_credit\_card\_apply\_dev | O | String | 申请信用卡意向 |
| second\_third\_score\_dev | O | String | 游戏（按类型划分） |
| probability\_music\_interest\_lovers\_dev | O | String | 音乐兴趣 |
| probability\_live\_broadcast\_lovers\_dev | O | String | 直播兴趣 |
| probability\_action\_shooting\_game\_lovers\_dev | O | String | 动作射击兴趣 |
| probability\_sports\_racing\_game\_lovers\_dev | O | String | 体育竞速兴趣 |
| subject\_score\_dev | O | String | 游戏（按题材划分） |
| language\_train\_dev | O | String | 语言培训 |
| vocation\_interest\_dev | O | String | 职业教育 |
| hobby\_train\_dev | O | String | 教育-类型 |
| maintain\_car\_dev | O | String | 汽车保养 |
| decorating\_flag\_dev | O | String | 近期装修意向 |
| video\_lover\_label | O | String | 长视频兴趣 |
| short\_video\_lover\_label | O | String | 短视频兴趣 |
| online\_shopping\_flag\_dev | O | String | 线上购物 |
| high\_consumption | O | String | 高消费程度 |
| pps\_visit\_country\_year\_dev | O | String | 近1年出行到该国家的人 |
| pps\_visit\_country\_six\_month\_dev | O | String | 近6个月出行到该国家的人 |
| pps\_visit\_country\_three\_month\_dev | O | String | 近3个月出行到该国家的人 |
| pps\_visit\_country\_one\_month\_dev | O | String | 近1个月出行到该国家的人 |
| pps\_visit\_city\_year\_dev | O | String | 近1年出行到该城市的人 |
| pps\_visit\_city\_six\_month\_dev | O | String | 近6个月出行到该城市的人 |
| pps\_visit\_city\_three\_month\_dev | O | String | 近3个月出行到该城市的人 |
| pps\_visit\_city\_one\_month\_dev | O | String | 近1个月出行到该城市的人 |
| city\_new\_grade\_dev | O | String | 常驻城市等级 |
| network\_v2\_dev | O | String | 常用联网方式 |
| app\_interest\_v2\_dev | O | String | 应用兴趣 |
| province\_new\_dev | O | String | 常驻省份 |
