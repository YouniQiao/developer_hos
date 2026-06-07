---
title: "查询账户信息"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketing-api-account-management1-0000001286053560
format: md
---

# 查询账户信息

您通过本接口获取广告账户基本信息。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/account/no\_review/query

  俄罗斯：https://ads-drru.cloud.huawei.ru/ads/v1/account/no\_review/query

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/account/no\_review/query
- <strong>请求方法</strong>：<strong>GET</strong>
- <strong>请求参数：</strong>

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | advertiser\_ids | long[] | 否 | 广告主ID集合，对于经理账户，该参数必填，且广告主ID个数为1-20个。 |
- <strong>请求示例</strong>

  GET ads/v1/account/no\_review/query HTTP/1.1

  Accept:application/json

  Content-Type:application/json

  Authorization:Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=

  ```
  {
      "advertiser_ids": 1534653132156
  }
  ```
- <strong>响应字段</strong>

  |  |  |  |
  | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
  | code | string | 返回码。 |
  | message | string | 返回描述。 |
  | data | Struct1 | 指定对象统计数据。 |

  data(Struct1)定义

  |  |  |  |
  | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
  | corp\_info | Struct2 | 广告主账户信息。 |
  | contact\_info | Struct3 | 广告主联系人信息。 |
  | review\_info | Struct4 | 广告主审核状态及审核意见。 |
  | advertiser\_id | long | 广告主ID，对于经理账户，此字段必填。 |
  | agency\_agreement | Struct5[] | 代理协议授权时间列表。 |
  | industry\_info | Struct6 | 广告主行业资质信息。 |

  corp\_info(Struct2)定义

  |  |  |  |
  | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
  | name | string | 企业名称。 |
  | country | string | 国家代码。 |
  | province | string | 省份代码。 |
  | city | string | 城市代码。 |
  | address | string | 企业地址。 |
  | promotion\_content | string | 推广内容。 |
  | english\_name | string | 企业英文名。 |
  | domain\_addr | string | 广告主域名列表。 |
  | timezone | string | 时区。 |
  | currency | string | 币种。 |
  | county\_name | string | 四级区域编码。 |
  | bs\_license\_img\_url | string | 企业营业执照照片：免实名时，此字段为空。 |
  | corp\_bs\_lic\_id | string | 营业执照编号：免实名时，此字段为空。 |
  | duns\_number | string | 邓氏编码：免实名时，此字段为空。 |
  | oversea | string | 投放地：  MAINLAND：投放地为中国大陆；  INTERNATIONAL：投放地为非中国大陆；  ALL：投放地为全球。 |

  contact\_info(Struct3)定义

  |  |  |  |
  | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
  | contact\_name | string | 联系人姓名。 |
  | contact\_email | string | 联系人邮箱。 |
  | contact\_private\_phone | string | 联系人个人号码。 |
  | contact\_job | string | 联系人职务。 |
  | contact\_phone | string | 业务联系人电话，仅子客返回。 |

  review\_info(Struct4)定义

  |  |  |  |
  | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
  | review\_status | string | 审核状态：  PENDING：审核中；  PASS：审核通过；  REJECTED：驳回；  UPDATE PENDING：更新审核中；  UPDATE REJECTED：更新审核不通过。 |
  | review\_comment | string | 审核意见。 |
  | need\_review | string | 是否需要发起实名审核：YES：是，NO：否。 |

  agency\_agreement (Struct5)参数

  |  |  |  |
  | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
  | start\_time | string | 开始时间 格式：yyyy-MM-dd HH:mm:ss。 |
  | end\_time | string | 结束时间 格式：yyyy-MM-dd HH:mm:ss。 |

  industry\_info(Struct6)参数

  |  |  |  |
  | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
  | parent\_industry\_id | string | 一级行业ID。 |
  | industry\_id | string | 二级行业ID。 |
  | industry\_desc | string | 行业描述。 |
  | business\_scope | Struct7[] | 业务范围。 |

  business\_scope(Struct7)参数

  |  |  |  |
  | --- | --- | --- |
  | 参数名称 | 类型 | 描述 |
  | id | long | 资质ID。 |
  | name | string | 资质名称。 |
  | type | string | 资质类型：  QUALIFICATION：资质证件（必填）；  OPTIONAL\_SCOPE：可选业务范围；  SUPPLEMENTS：补充资质。 |
  | qualification | Struct8[] | 资质信息。 |

  qualification(Struct8)参数

  |  |  |  |
  | --- | --- | --- |
  | 参数名称 | 类型 | 描述 |
  | id | long | 资质ID。 |
  | description | string | 描述。 |
  | qualification\_file\_id | string[] | 资质文件ID集合。 |
  | qualification\_files | Struct9[] | 资质文件，与资质文件ID集合个数匹配。 |
  | corp\_qualification | Struct10 | 资质文件url。 |

  qualification\_files(Struct9)参数

  |  |  |  |
  | --- | --- | --- |
  | 参数名称 | 类型 | 描述 |
  | id | long | 资质文件ID。 |
  | name | string | 资质文件名称。 |

  corp\_qualification(Struct10)参数

  |  |  |  |
  | --- | --- | --- |
  | 参数名称 | 类型 | 描述 |
  | corp\_qualification\_id | long | 广告主资质ID。 |
  | qualification\_id | long | 资质证件ID。 |
  | file\_id | long | 资质文件ID。 |
  | file\_urls | string[] | 资质url。 |
- <strong>应答示例</strong>

  ```
  {
      "code": 200,
      "message": "success",
      "data": {
          "corp_info": {
              "name": "yyyyyyyyyyyyy",
              "country": "DE",
              "province": "20000383",
              "city": "35002818",
              "address": "yyyyyyyyyyyyy",
              "promotion_content": "asdasd",
              "english_name": "yyyyyyyyyyyyyyyyyyyyyyyyyy",
              "timezone": "UTC+00:30",
              "currency": "EUR",
              "domain_addr": "xxx,xxx",
              "county_name": null
          },
          "contact_info": {
              "contact_name": "123123123",
              "contact_email": "asd@huawei.com",
              "contact_private_phone": "+49|123123123"
          },
          "advertiser_id": 123456789
      }
  }
  ```
