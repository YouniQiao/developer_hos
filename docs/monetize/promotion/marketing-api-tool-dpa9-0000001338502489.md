---
title: "批量添加商品"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketing-api-tool-dpa9-0000001338502489
format: md
upstream_id: monetize/promotion/marketing-api-tool-dpa9-0000001338502489
last_sync: 2026-06-07
sync_hash: 6dbea11f
---
# 批量添加商品

您通过本接口可以批量添加商品。

![](./img/note_3.0-zh-cn_f017b93cd46b.png) 

1. 全量添加过程，全量导入商品通知接口开始，然后再调用批量添加接口，最后调用导入商品通知接口结束。

2. 增量添加过程，直接调用批量添加接口，增加导入要先全量导入成功后才可以增量。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/tools/dpa/product/create

  俄罗斯：https://ads-drru.cloud.huawei.ru/ads/v1/tools/dpa/product/create

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/tools/dpa/product/create
- <strong>请求方法</strong>：<strong>POST</strong>
- <strong>请求参数：</strong>

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | advertiser\_id | long | 否 | 广告主ID，对于经理账户或您的多个广告主账户共用一个华为账号，此字段必填。 |
  | store\_id | long | 是 | 商品库ID，请登录华为商品广告系统-商品库列表页面获取。 |
  | products | Struct1 | 是 | 商品ID列表，最大100个。 |

  products(Struct1)定义

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | merchant\_name | string | 否 | 厂商名称。 |
  | merchant\_logo | string | 否 | 厂商Logo的url。 |
  | product\_id | string | 是 | 商品id。 |
  | product\_name | string | 是 | 商品名。 |
  | description | string | 否 | 包含产品的相关信息详细介绍。 |
  | image | string | 是 | 商品图片的链接地址。 |
  | image\_width | int | 否 | 商品图片宽。 |
  | image\_height | int | 否 | 商品图片高。 |
  | image1 | string | 否 | 扩展商品图，商品图片的补充。 |
  | image1\_width | int | 否 | 商品图片1宽。 |
  | image1\_height | int | 否 | 商品图片1高。 |
  | image2 | string | 否 | 扩展商品图，商品图片的补充。 |
  | image2\_width | int | 否 | 商品图片2宽。 |
  | image2\_height | int | 否 | 商品图片2高。 |
  | image3 | string | 否 | 扩展商品图，商品图片的补充。 |
  | image3\_width | int | 否 | 商品图片3宽。 |
  | image3\_height | int | 否 | 商品图片3高。 |
  | image4 | string | 否 | 扩展商品图，商品图片的补充。 |
  | image4\_width | int | 否 | 商品图片4宽。 |
  | image4\_height | int | 否 | 商品图片4高。 |
  | image5 | string | 否 | 扩展商品图，商品图片的补充。 |
  | image5\_width | int | 否 | 商品图片5宽。 |
  | image5\_height | int | 否 | 商品图片5高。 |
  | video | string | 否 | 视频素材的地址。 |
  | video\_duration | int | 否 | 时长。 |
  | video\_file\_size | string | 否 | 视频文件大小。 |
  | video\_mime | string | 否 | 视频类型。 |
  | video\_width | string | 否 | 视频宽。 |
  | video\_height | string | 否 | 视频高。 |
  | video\_sha256 | string | 否 | 视频sha256。 |
  | availability | int | 否 | 商品有效性, 0或1，0:无效，1:有效，默认值：1。 |
  | brand\_id | string | 否 | 品牌ID，可用于模型训练，筛选。 |
  | brand\_name | string | 否 | 商品的品牌名称。 |
  | brand\_logo | string | 否 | 品牌Logo地址。 |
  | brand\_url | string | 否 | pc端品牌链接。 |
  | brand\_url\_mobile | string | 否 | 移动端H5页面品牌链接URL。 |
  | target\_url | string | 否 | PC端商品落地页URL。 |
  | target\_url\_mobile | string | 是 | 移动端商品落地页URL。 |
  | target\_url\_android\_app | string | 否 | Android应用直达落地页。 |
  | target\_url\_ios\_app | string | 否 | IOS应用直达落地页。 |
  | first\_category | string | 否 | 一级分类。 |
  | sub\_category | string | 否 | 二级分类。 |
  | third\_category | string | 否 | 三级分类。 |
  | fourth\_category | string | 否 | 四级分类。 |
  | first\_category\_id | int | 否 | 一级分类ID。 |
  | sub\_category\_id | int | 否 | 二级分类ID。 |
  | third\_category\_id | int | 否 | 三级分类ID。 |
  | fourth\_category\_id | int | 否 | 四级分类ID。 |
  | first\_category\_page\_url | string | 否 | 一级类目PC端url。 |
  | first\_category\_page\_m\_url | string | 否 | 一级类目移动端url。 |
  | sub\_category\_page\_url | string | 否 | 二级类目PC端url。 |
  | sub\_category\_page\_m\_url | string | 否 | 二级类目移动端url。 |
  | third\_category\_page\_url | string | 否 | 三级类目PC端url。 |
  | third\_category\_page\_m\_url | string | 否 | 三级类目移动端url。 |
  | fourth\_category\_page\_url | string | 否 | 四级类目PC端url。 |
  | fourth\_category\_page\_m\_url | string | 否 | 四级类目移动端url。 |
  | hot\_url | string | 否 | PC 端热卖地址。 |
  | hot\_categ1\_url | string | 否 | 热卖一级分类PC端地址。 |
  | hot\_categ2\_url | string | 否 | 热卖二级分类PC端地址。 |
  | hot\_categ3\_url | string | 否 | 热卖三级分类PC端地址。 |
  | mhot\_url | string | 否 | 移动端热卖地址。 |
  | m\_hotcateg1\_url | string | 否 | 热卖一级分类移动端地址。 |
  | m\_hotcateg2\_url | string | 否 | 热卖二级分类移动端地址。 |
  | m\_hotcateg3\_url | string | 否 | 热卖三级分类移动端地址。 |
  | seller\_logo | string | 否 | 商家logo图片url。 |
  | seller\_name | string | 否 | 商家站点名称。 |
  | seller\_site\_url | string | 否 | 商家站点URL。 |
  | range | string | 否 | 商家方位, 商品所在商圈。规范填写商品所商圈名称，不包含特殊字符;多个商圈之间可用英文半角"";""分隔；16个字符以内。 |
  | seller\_addr | string | 否 | 用于LBS定向精准控制商品投放地。 |
  | online\_time | string | 是 | 上线时间, 格式yyyy-MM-dd HH:mm:ss。 |
  | create\_time | string | 否 | 创建商品时间, 格式yyyy-MM-dd HH:mm:ss。 |
  | last\_mod\_time | string | 否 | 最后修改时间, 格式yyyy-MM-dd HH:mm:ss。 |
  | offline\_time | string | 是 | 下线时间, 格式yyyy-MM-dd HH:mm:ss。 |
  | bought | int | 否 | 已购买量, 大于等于0。 |
  | inventory\_status | int | 是 | 库存状态, 0 无库存，1 有库存，默认值：1。 |
  | status | int | 是 | 投放状态, 0 表示不可投放，1表示可投放，默认为1。 |
  | inventory\_volume | int | 否 | 库存量, 大于等于0。 |
  | price | string | 否 | 商品定价（原价）, 大于等于0。 |
  | sale\_price | string | 否 | 商品现价, 大于等于0。 |
  | major | int | 否 | 是否打折, 0或1，0：无折扣，1：折扣。 |
  | discount | string | 否 | 商品折扣, 0.01 ~ 1.00，默认值1.00。 |
  | discount\_info | string | 否 | 优惠信息。 |
  | saving | string | 否 | 节省金额。 |
  | disprice | string | 否 | 限时价格。 |
  | sale\_price\_start\_time | string | 否 | 限时价格销售开始时间, 格式yyyy-MM-dd HH:mm:ss。 |
  | sale\_price\_end\_time | string | 否 | 限时价格销售截止时间, 格式yyyy-MM-dd HH:mm:ss。 |
  | mark | int | 否 | 用户对该商品的评分。 |
  | comments | int | 否 | 商品的评论数量。 |
  | store | int | 否 | 商品的收藏人数。 |
  | shop\_type | int | 否 | 商品类型。 |
  | tags | string | 否 | 产品的分类、产地、属性、风格等描述词。 |
  | slogan | string | 否 | 自定义广告文案。 |
  | price\_unit | string | 是 | 币种。 |
  | time\_zone | string | 否 | 时区。 |
  | ad\_words | string | 否 | 用于替换广告文案，如信息流广告中的文案内容 |
  | thumb\_img\_url | string | 否 | 产品缩略图url。 |
  | language | string | 是 | 语言。 |
  | country | string | 是 | 商品投放或销售国家。 |
  | profession | string | 否 | 包含行业特殊字段。 |
  | weight | string | 否 | 商品质量度。 |
  | shop\_keeper\_id | string | 否 | 点击有效数。 |
  | shop\_keeper\_name | string | 否 | 展示总数。 |
  | preferred\_item | string | 否 | 重点关注。 |
  | schedule\_id | int | 否 | 档期id。 |
  | schedule\_name | string | 否 | 档期名称。 |
  | schedule\_url | string | 否 | 档期pc端访问地址。 |
  | provice | string | 否 | 销售州/省。 |
  | city | string | 否 | 销售城市/镇。 |
  | spu\_id | string | 否 | 商品spuID。 |
  | dsph5sku\_url | string | 否 | H5-商品详细页的url。 |
  | dsp\_deeplinksku\_url | string | 否 | DeepLink-商详页。 |
  | dsp\_huimaih5 | string | 否 | H5-慧买页。 |
  | dsp\_huimai\_deeplink | string | 否 | DeepLink-慧买页。 |
  | video\_url | string | 否 | 单独视频feed。 |
  | dspreh5sku\_url | string | 否 | H5-热卖SKU页。 |
  | dspredeeplinksku\_url | string | 否 | DeepLink-热卖SKU页。 |
  | taxs | string[] | 否 | 税率, 包含以下子属性：  1、国家/地区码（可选）：遵循ISO 3166标准。  2、地区（可选）：地区名或邮编。  3、税率（必选）：百分比形式，例如29表示29%。  4、运费税（可选）：标识是否收取运费税，取值为yes、no、y或n。  多个值：["US:CA:5:y","US:LA:7:n"]；  属性有空值：["US::5:y"]。 |
  | shipping | string[] | 否 | 运费,其为一个list，对应各个地区不同的运费。  包含 4 个子属性：  1、国家/地区（可选）：ISO 3166 国家/地区代码；  2、送货区域(可选):region [地区] /postal\_​code [邮政编码] / location\_​id [地理位置 ID] /location\_group\_name [地理位置组名称]（可选属性）；  3、服务（可选）：服务级别或送货速度；  4、价格（必需）：固定运费，包含增值；  取值示例：  "US:CA:Overnight:16.00 USD"，多个值和空值类似taxs。 |
  | product\_condition | string | 否 | 商品使用情况，详见[商品使用情况](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section44071308341)。 |
  | release\_country | string[] | 否 | 商品投放或销售国家列表，取值示例：["US", "CN"]。 |

  - <strong>请求示例</strong>

    POST /ads/v1/tools/dpa/product/create HTTP/1.1

    Accept:application/json

    Content-Type:application/json

    Authorization:Bearer DAEAALpy3envCfdLiOZRerq2oopxMPmzJmgZOVXs1o27CRO8kHr5z2nyH6bXPxvZIadBeVYgOo1qg3rkXNVd13f9kqn%252F65sm%252Bev7G8h1VT9l3rDMl00q

    ```
    {
        "store_id": "893244576645765760",
        "products": [
            {
                "merchant_name": "merName",
                "merchant_logo": "http://p3-mago.byteimg.com/tos-cn-i-l5437m0bcr/ab720c83f34c4e059bb8f23d3bsample~tplv-l5437m0bcr-huawei_resize_1080.png",
                "product_id": "94908",
                "product_name": "proName",
                "description": "goodProduct",
                "image": "http://p3-mago.byteimg.com/tos-cn-i-l5437m0bcr/ab720c83f34c4e059bb8f23d3bsample~tplv-l5437m0bcr-huawei_resize_1080.png",
                "image_width": "1080",
                "image_height": "1080",
                "image1": "http://p3-mago.byteimg.com/tos-cn-i-l5437m0bcr/ab720c83f34c4e059bb8f23d3bsample~tplv-l5437m0bcr-huawei_resize_1080.png",
                "image1_width": "1080",
                "image1_height": "1080",
                "image2": "http://p3-mago.byteimg.com/tos-cn-i-l5437m0bcr/ab720c83f34c4e059bb8f23d3bsample~tplv-l5437m0bcr-huawei_resize_1080.png",
                "image2_width": "1080",
                "image2_height": "1080",
                "image3": "http://p3-mago.byteimg.com/tos-cn-i-l5437m0bcr/ab720c83f34c4e059bb8f23d3bsample~tplv-l5437m0bcr-huawei_resize_1080.png",
                "image3_width": "1080",
                "image3_height": "1080",
                "image4": "http://p3-mago.byteimg.com/tos-cn-i-l5437m0bcr/ab720c83f34c4e059bb8f23d3bsample~tplv-l5437m0bcr-huawei_resize_1080.png",
                "image4_width": "1080",
                "image4_height": "1080",
                "image5": "http://p3-mago.byteimg.com/tos-cn-i-l5437m0bcr/ab720c83f34c4e059bb8f23d3bsample~tplv-l5437m0bcr-huawei_resize_1080.png",
                "image5_width": "1080",
                "image5_height": "1080",
                "video": "http://p3-mago.byteimg.com/tos-cn-i-l5437m0bcr/ab720c83f34c4e059bb8f23d3bsample~tplv-l5437m0bcr-huawei_resize_1080.png",
                "video_duration": "66000",
                "video_file_size": "10240",
                "video_mime": "mp4",
                "video_width": "1280",
                "video_height": "720",
                "video_sha256": "sha256",
                "brand_name": "bName",
                "brand_logo": "http://p3-mago.byteimg.com/tos-cn-i-l5437m0bcr/ab720c83f34c4e059bb8f23d3bsample~tplv-l5437m0bcr-huawei_resize_1080.png",
                "brand_url_mobile": "http://p3-mago.byteimg.com/tos-cn-i-l5437m0bcr/ab720c83f34c4e059bb8f23d3bsample~tplv-l5437m0bcr-huawei_resize_1080.png",
                "target_url_mobile": "https://h5hosting-drcn.dbankcdn.cn/cch5/PPS/6a9982a4e8a44d209d036ac57307426c/2021052711503642232821d1944c7fbac86a5904a2679b.html",
                "target_url_android_app": "http://p3-mago.byteimg.com/tos-cn-i-l5437m0bcr/ab720c83f34c4e059bb8f23d3bsample~tplv-l5437m0bcr-huawei_resize_1080.png",
                "target_url_ios_app": "http://p3-mago.byteimg.com/tos-cn-i-l5437m0bcr/ab720c83f34c4e059bb8f23d3bsample~tplv-l5437m0bcr-huawei_resize_1080.png",
                "first_category": " HomeTextiles ",
                "sub_category": " HomeFabricArt ",
                "third_category": " tableclothcover ",
                "fourth_category": " coverpiece ",
                "first_category_id": "103",
                "sub_category_id": "1031028",
                "third_category_id": "10310281401",
                "fourth_category_id": "1031028140101",
                "seller_logo": "http://p3-mago.byteimg.com/tos-cn-i-l5437m0bcr/ab720c83f34c4e059bb8f23d3bsample~tplv-l5437m0bcr-huawei_resize_1080.png",
                "seller_name": "QQQ",
                "range": "shanghai",
                "online_time": "2021-09-17 00:57:38",
                "create_time": "2021-09-17 00:57:38",
                "last_mod_time": "2021-09-17 00:57:38",
                "offline_time": "2022-05-25 18:37:26",
                "bought": "54",
                "inventory_status": "1",
                "status": "1",
                "inventory_volume": "1000",
                "price": "1200",
                "sale_price": "1200",
                "major": "1",
                "discount": "0.3",
                "discount_info": "0.5",
                "saving": "40",
                "disprice": "59",
                "sale_price_start_time": "2022-05-25 18:37:26",
                "sale_price_end_time": "2022-05-25 18:37:26",
                "mark": "5",
                "comments": "900",
                "store": "999",
                "shop_type": "0",
                "tags": "good",
                "price_unit": "rmb",
                "time_zone": "UTC+8:00",
                "ad_words": "Information",
                "thumb_img_url": "http://p3-mago.byteimg.com/tos-cn-i-l5437m0bcr/ab720c83f34c4e059bb8f23d3bsample~tplv-l5437m0bcr-huawei_resize_1080.png",
                "language": "en",
                "country": "US",
                "taxs": [
                    "US:CA:5:y"
                ],
                "shipping": [
                    "US:CA:Overnight:16.00 USD"
                ],
                "product_condition": "USED",
                "profession": " IndustryAddWords ",
                "weight": "99",
                "shop_keeper_id": "11",
                "shop_keeper_name": "111",
                "preferred_item": "11",
                "schedule_id": "11",
                "schedule_name": "111",
                "schedule_url": "http://p3-mago.byteimg.com/tos-cn-i-l5437m0bcr/ab720c83f34c4e059bb8f23d3bsample~tplv-l5437m0bcr-huawei_resize_1080.png",
                "provice": " shangdong",
                "city": "jinan",
                "spu_id": "111",
                "dsph5sku_url": "http://p3-mago.byteimg.com/tos-cn-i-l5437m0bcr/ab720c83f34c4e059bb8f23d3bsample~tplv-l5437m0bcr-huawei_resize_1080.png",
                "dsp_deeplinksku_url": "http://p3-mago.byteimg.com/tos-cn-i-l5437m0bcr/ab720c83f34c4e059bb8f23d3sample~tplv-l5437m0bcr-huawei_resize_1080.png",
                "dsp_huimaih5": "11111111",
                "dsp_huimai_deeplink": "1111111111",
                "video_url": "http://p3-mago.byteimg.com/tos-cn-i-l5437m0bcr/ab720c83f34c4e059bb8f23d3bsample~tplv-l5437m0bcr-huawei_resize_1080.png",
                "dspreh5sku_url": "http://p3-mago.byteimg.com/tos-cn-i-l5437m0bcr/ab720c83f34c4e059bb8f23d3bsample~tplv-l5437m0bcr-huawei_resize_1080.png",
                "dspredeeplinksku_url": "http://p3-mago.byteimg.com/tos-cn-i-l5437m0bcr/ab720c83f34c4e059bb8f23d3bsample~tplv-l5437m0bcr-huawei_resize_1080.png",
                "brand_id": "13213",
                "brand_url": "http://p3-mago.byteimg.com/tos-cn-i-l5437m0bcr/ab720c83f34c4e059bb8f23d3bsample~tplv-l5437m0bcr-huawei_resize_1080.png",
                "target_url": "http://p3-mago.byteimg.com/tos-cn-i-l5437m0bcr/ab720c83f34c4e059bb8f23d3bsample~tplv-l5437m0bcr-huawei_resize_1080.png",
                "first_category_page_url": "http://p3-mago.byteimg.com/tos-cn-i-l5437m0bcr/ab720c83f34c4e059bb8f23d3bsample~tplv-l5437m0bcr-huawei_resize_1080sample.png",
                "sub_category_page_url": "http://p3-mago.byteimg.com/tos-cn-i-l5437m0bcr/ab720c83f34c4e059bb8f23d3bsample~tplv-l5437m0bcr-huawei_resize_1080.png",
                "third_category_page_url": "http://p3-mago.byteimg.com/tos-cn-i-l5437m0bcr/ab720c83f34c4e059bb8f23d3bsample~tplv-l5437m0bcr-huawei_resize_1080.png",
                "fourth_category_page_url": "http://p3-mago.byteimg.com/tos-cn-i-l5437m0bcr/ab720c83f34c4e059bb8f23d3bsample~tplv-l5437m0bcr-huawei_resize_1080.png",
                "hot_url": "http://p3-mago.byteimg.com/tos-cn-i-l5437m0bcr/ab720c83f34c4e059bb8f23d3bsample~tplv-l5437m0bcr-huawei_resize_1080.png",
                "hot_categ1_url": "http://p3-mago.byteimg.com/tos-cn-i-l5437m0bcr/ab720c83f34c4e059bb8f23d3bsample~tplv-l5437m0bcr-huawei_resize_1080.png",
                "hot_categ2_url": "http://p3-mago.byteimg.com/tos-cn-i-l5437m0bcr/ab720c83f34c4e059bb8f23d3bsample~tplv-l5437m0bcr-huawei_resize_1080.png",
                "hot_categ3_url": "http://p3-mago.byteimg.com/tos-cn-i-l5437m0bcr/ab720c83f34c4e059bb8f23d3bsample~tplv-l5437m0bcr-huawei_resize_1080.png",
                "availability": "1",
                "first_category_page_m_url": "http://p3-mago.byteimg.com/tos-cn-i-l5437m0bcr/ab720c83f34c4e059bb8f23d3bsample~tplv-l5437m0bcr-huawei_resize_1080.png",
                "sub_category_page_m_url": "http://p3-mago.byteimg.com/tos-cn-i-l5437m0bcr/ab720c83f34c4e059bb8f23d3bsample~tplv-l5437m0bcr-huawei_resize_1080.png",
                "third_category_page_m_url": "http://p3-mago.byteimg.com/tos-cn-i-l5437m0bcr/ab720c83f34c4e059bb8f23d3bsample~tplv-l5437m0bcr-huawei_resize_1080.png",
                "fourth_category_page_m_url": "http://p3-mago.byteimg.com/tos-cn-i-l5437m0bcr/ab720c83f34c4e059bb8f23d3bsample~tplv-l5437m0bcr-huawei_resize_1080.png",
                "mhot_url": "http://p3-mago.byteimg.com/tos-cn-i-l5437m0bcr/ab720c83f34c4e059bb8f23d3bsample~tplv-l5437m0bcr-huawei_resize_1080.png",
                "m_hotcateg1_url": "http://p3-mago.byteimg.com/tos-cn-i-l5437m0bcr/ab720c83f34c4e059bb8f23d3bsample~tplv-l5437m0bcr-huawei_resize_1080.png",
                "m_hotcateg2_url": "http://p3-mago.byteimg.com/tos-cn-i-l5437m0bcr/ab720c83f34c4e059bb8f23d3bsample~tplv-l5437m0bcr-huawei_resize_1080.png",
                "m_hotcateg3_url": "http://p3-mago.byteimg.com/tos-cn-i-l5437m0bcr/ab720c83f34c4e059bb8f23d3bsample~tplv-l5437m0bcr-huawei_resize_1080.png",
                "seller_site_url": "http://p3-mago.byteimg.com/tos-cn-i-l5437m0bcr/ab720c83f34c4e059bb8f23d3bsample~tplv-l5437m0bcr-huawei_resize_1080.png",
                "seller_addr": "addr",
                "slogan": " slogan"
            }
        ]
    }
    ```
  - 响应字段

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | code | string | 返回码。 |
    | data | boolean | 是否成功。 |
  - <strong>应答示例</strong>

    HTTPS/1.1 200 OK

    ```
    {
        "code": "200",
        "data": true
    }
    ```
