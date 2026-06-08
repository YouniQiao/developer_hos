---
title: "查询版位元素"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketing-api-tool-slot2-0000001338381965
format: md
upstream_id: monetize/promotion/marketing-api-tool-slot2-0000001338381965
last_sync: 2026-06-07
sync_hash: 06be12bc
upstream_hash: 7ed99fd5da1c
---

# 查询版位元素

您通过本接口可以查询多规格版位元素。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/tools/position\_detail/query

  俄罗斯：https://ads-drru.cloud.huawei.ru/ads/v1/tools/position\_detail/query

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/tools/position\_detail/query
- <strong>请求方法</strong>：<strong>GET</strong>
- <strong>请求参数：</strong>

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | advertiser\_id | long | 否 | 广告主ID，对于经理账户或您的多个广告主账户共用一个华为账号，此字段必填。 |
  | filtering | Struct1 | 是 | 过滤条件。 |

  filtering(Struct1)定义

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | creative\_size\_id | long | 是 | 版位ID。 |
  | language | string | 否 | 版位元素语言码。支持zh\_CN,en\_US,ru\_RU三种。 |
  | product\_type | string | 否 | 推广产品类型，详见[推广产品类型](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section396354212216)。 |
  | objective\_type | string | 否 | 推广目的，详见[推广目的](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section15457195232912)。 |

  - <strong>请求示例</strong>

    GET openapi/v2\_1/tools/position/detail/query HTTP/1.1

    Accept:application/json

    Content-Type:application/json

    Authorization:Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CL

    ```
    {
        "filtering": {
            "creative_size_id": "xxxxxxxxxxxxxxxxxx",
            "objective_type": "APP_RESERVE_DOWNLOAD",
            "product_type": "WEB"
        }
    }
    ```
  - 响应字段

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | code | string | 返回码。 |
    | message | string | 返回描述。 |
    | data | Struct1 | 版位元素列表。 |

    Struct1定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | creative\_size\_id | long | 版位ID。 |
    | placement\_size\_elementinfolist | Struct2[] | 规格元素列表。 |

    Struct2定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | placement\_size\_id | string | 规格ID。 |
    | creative\_size\_sub\_type | string | 创意子形式。 |
    | creative\_element\_info\_list | Struct3[] | 版位元素列表。 |

    Struct3定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | creative\_size\_element\_id | long | 版位元素id。 |
    | creative\_size\_element\_name | string | 详见[版位元素类型](/docs/monetize/promotion/marketing-api-appendix5-0000001338486113#section23877534914)，其他为无效的类型，请丢弃。 |
    | creative\_size\_element\_title | string | 版位元素名称。 |
    | creative\_size\_element\_caption | string | 版位元素描述。 |
    | min\_length | integer | 最小输入长度。  click\_tracking\_url、deeplink\_url、impression\_tracking\_url、landing\_page\_url、title、description、corporate\_name、splash\_wave\_text、splash\_swipe\_text、splash\_wave\_click\_text、splash\_swipe\_click\_text、splash\_redirect\_text 使用。 |
    | max\_length | integer | 文案、摘要、品牌名称，都是指中文长度，英文长度算0.5。其他元素指元素的内容的长度。  click\_tracking\_url、deeplink\_url、impression\_tracking\_url、landing\_page\_url、title、description、corporate\_name、splash\_wave\_text、splash\_swipe\_text、splash\_wave\_click\_text、splash\_swipe\_click\_text、splash\_redirect\_text使用。 |
    | pattern | string | 输入校验规则，正则  click\_tracking\_url、deeplink\_url、impression\_tracking\_url、landing\_page\_url、title、description、corporate\_name、splash\_wave\_text、splash\_swipe\_text、splash\_wave\_click\_text、splash\_swipe\_click\_text、splash\_redirect\_text使用 |
    | width | integer | 图片宽，精确匹配。  image、icon、video使用。 |
    | height | integer | 图片高，精确匹配。  image、icon、video使用。 |
    | file\_size\_kb\_limit | integer | 文件大小上限，单位KB。image、icon、video使用。 |
    | gif\_size\_kb\_limit | integer | Gif文件大小上限，单位KB。GIF图片受到限制。  image使用。 |
    | file\_format | string | 文件类型，取值为JPG、PNG、JPEG、GIF、MP4，多值使用斜杠分割，如：JPG/PNG/JPEG/GIF/MP4；  image 、icon、video使用。 |
    | min\_width | integer | 视频最小宽度，单位px。  video使用。 |
    | min\_height | integer | 视频最小高度，单位px。  video使用。 |
    | duration | Struct4[] | 视频时长。 |
    | min\_occurs | integer | 最小出现次数，为0表示元素为可选。  title、description、corporate\_name、landing\_page\_url 、impression\_tracking\_url、click\_tracking\_url、image 、icon、video使用。 |
    | max\_occurs | integer | 最大出现次数。  title、description、corporate\_name、landing\_page\_url 、impression\_tracking\_url、click\_tracking\_url、image 、icon、video、使用。 |
    | creative\_element\_select\_texts | Struct5[] | 版位按钮文案集合。 |

    duration(Struct4)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | min | integer | 视频最短时长，单位ms。  video使用。 |
    | max | integer | 视频最大时长，单位ms。  video使用。 |

    creative\_element\_select\_texts(Struct5)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | language | string | 对应按钮使用的语言。 |
  - <strong>应答示例</strong>

    HTTPS/1.1 200 OK

    ```
    {
        "code": "200",
        "data": {
            "creative_size_id": 899236513043232600,
            "placement_size_elementinfolist": [
                {
                    "creative_size_subtype": "NATIVE_BIG_PICTURE",
                    "creative_element_info_list": [
                        {
                            "creative_size_element_id": 10000056,
                            "creative_size_element_name": "image",
                            "creative_size_element_title": "图片",
                            "creative_size_element_caption": "请上传图片",
                            "width": 1080,
                            "height": 607,
                            "file_size_kb_limit": 1500,
                            "file_format": "JPG/JPEG/PNG",
                            "duration": [],
                            "min_occurs": "1",
                            "max_occurs": "1",
                            "creative_element_select_texts": []
                        },
                        {
                            "creative_size_element_id": 40003011,
                            "creative_size_element_name": "icon",
                            "creative_size_element_title": "图标",
                            "creative_size_element_caption": "请上传图标",
                            "min_length": 0,
                            "max_length": 0,
                            "width": 160,
                            "height": 160,
                            "file_size_kb_limit": 150,
                            "file_format": "JPG/PNG/JPEG",
                            "min_width": 0,
                            "min_height": 0,
                            "duration": [
                                {
                                    "min": 0,
                                    "max": 0
                                }
                            ],
                            "min_occurs": "0",
                            "max_occurs": "1",
                            "creative_element_select_texts": []
                        },
                        {
                            "creative_size_element_id": 10000025,
                            "creative_size_element_name": "corporate_name",
                            "creative_size_element_title": "品牌名称",
                            "creative_size_element_caption": "请填写品牌名称",
                            "min_length": 1,
                            "max_length": 7,
                            "pattern": "^[^|^<]{0,2000}$",
                            "duration": [],
                            "min_occurs": "1",
                            "max_occurs": "1",
                            "creative_element_select_texts": []
                        },
                        {
                            "creative_size_element_id": 10000006,
                            "creative_size_element_name": "title",
                            "creative_size_element_title": "文案",
                            "creative_size_element_caption": "请填写文案",
                            "min_length": 1,
                            "max_length": 18,
                            "pattern": "^[^|^<]{0,2000}$",
                            "duration": [],
                            "min_occurs": "1",
                            "max_occurs": "1",
                            "creative_element_select_texts": []
                        },
                        {
                            "creative_size_element_id": 10000003,
                            "creative_size_element_name": "landing_page_url",
                            "creative_size_element_title": "落地页地址",
                            "creative_size_element_caption": "请填写落地页地址",
                            "min_length": 1,
                            "max_length": 2048,
                            "pattern": "^(http|https)://[\\w\\-_]+(\\.[\\w\\-_]+)+([\\w\\-\\.\\[\\]\\{\\},?=%&;$:/~\\+#]*[\\w\\-\\[\\]\\{\\}\\?=%&;$/~\\+#])?$",
                            "file_format": "",
                            "duration": [],
                            "min_occurs": "0",
                            "max_occurs": "1",
                            "creative_element_select_texts": []
                        },
                        {
                            "creative_size_element_id": 10000002,
                            "creative_size_element_name": "impression_tracking_url",
                            "creative_size_element_title": "曝光监测地址",
                            "creative_size_element_caption": "请填写曝光监测地址",
                            "min_length": 1,
                            "max_length": 3800,
                            "pattern": "https://g.cn.miaozhen.com;https://g0.cn.miaozhen.com;https://e.cn.miaozhen.com;https://e0.cn.miaozhen.com;https://i.gridsumdissector.com/v;https://c.gridsumdissector.com/r;https://i.gridsumdissector.com/v;https://c.gridsumdissector.com/r;https://v.admaster.com.cn;https://c.admaster.com.cn;https://clickc.admaster.com.cn;https://ad.doubleclick.net/ddm/trackimp;https://ad.doubleclick.net/ddm/trackclk;https://ef-dongfeng.tanx.com;https://mo.open.taobao.com;https://impression.appsflyer.com",
                            "file_format": "",
                            "duration": [],
                            "min_occurs": "0",
                            "max_occurs": "1",
                            "creative_element_select_texts": []
                        },
                        {
                            "creative_size_element_id": 10000001,
                            "creative_size_element_name": "deeplink_url",
                            "creative_size_element_title": "应用直达地址",
                            "creative_size_element_caption": "请填写应用直达地址",
                            "min_length": 1,
                            "max_length": 2048,
                            "file_format": "",
                            "duration": [],
                            "min_occurs": "0",
                            "max_occurs": "1",
                            "creative_element_select_texts": []
                        },
                        {
                            "creative_size_element_id": 10000000,
                            "creative_size_element_name": "click_tracking_url",
                            "creative_size_element_title": "点击监测地址",
                            "creative_size_element_caption": "请填写点击监测地址",
                            "min_length": 1,
                            "max_length": 3800,
                            "pattern": "https://g.cn.miaozhen.com;https://g0.cn.miaozhen.com;https://e.cn.miaozhen.com;https://e0.cn.miaozhen.com;https://i.gridsumdissector.com/v;https://c.gridsumdissector.com/r;https://i.gridsumdissector.com/v;https://c.gridsumdissector.com/r;https://v.admaster.com.cn;https://c.admaster.com.cn;https://clickc.admaster.com.cn;https://ad.doubleclick.net/ddm/trackimp;https://ad.doubleclick.net/ddm/trackclk;https://ef-dongfeng.tanx.com;https://mo.open.taobao.com;https://app.appsflyer.com",
                            "file_format": "",
                            "duration": [],
                            "min_occurs": "0",
                            "max_occurs": "1",
                            "creative_element_select_texts": []
                        }
                    ]
                }
            ]
        }
    }
    ```
