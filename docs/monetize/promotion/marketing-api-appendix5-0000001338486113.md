---
title: "参数描述说明"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketing-api-appendix5-0000001338486113
format: md
upstream_id: monetize/promotion/marketing-api-appendix5-0000001338486113
last_sync: 2026-06-07
sync_hash: ae27d490
---
# 参数描述说明

## 修改限额约束

|  |  |
| --- | --- |
| 参数 | 描述 |
| daily\_budget | 日限额不低于最小限额现阶段，见[最小限额约束](#最小限额约束)；  日限额修改幅度不低于最小修改幅度，见[限额修改幅度约束](#最小限额修改幅度约束)，日限额修改不能大于每天10次。  日限额和深度转化价格比值应在合理的范围内。 |

## 最小限额约束

|  |  |
| --- | --- |
| 币种 | 描述 |
| CNY | 500 |
| EUR | 9 |
| USD | 10 |
| JPY | 1070 |
| GBP | 8 |

## 最小限额修改幅度约束

|  |  |
| --- | --- |
| 币种 | 描述 |
| CNY | 10 |
| EUR | 1 |
| USD | 1 |
| JPY | 150 |
| GBP | 1 |

## 日限额说明

|  |  |
| --- | --- |
| 参数 | 描述 |
| daily\_budget | today\_daily\_budget有值，则daily\_budget为当日日限额。  tomorrow\_daily\_budget 有值，此时daily\_budget为次日日限额。  出价不能大于日限额。  日限额和出价比值应在合理的范围内。 |

## 版位元素类型

|  |  |
| --- | --- |
| 参数 | 描述 |
| image | 图片 |
| icon | 图标 |
| video | 视频 |
| title | 文案 |
| description | 描述 |
| corporate\_name | 品牌名称 |
| landing\_page\_url | 落地页 |
| impression\_tracking\_url | 曝光监测地址 |
| click\_tracking\_url | 点击监测地址 |

## 文件格式

|  |  |
| --- | --- |
| 参数 | 描述 |
| PNG | png格式 |
| JPEG | jpeg格式 |
| JPG | jpg格式 |
| GIF | gif格式 |
| MP4 | mp4格式 |

## 定向包集合

|  |  |
| --- | --- |
| 参数 | 描述 |
| gender | 性别 |
| age | 年龄 |
| app\_category | App行为 |
| app\_interest | App兴趣 |
| series\_type | 机型系列 |
| network\_type | 网络类型 |
| pre\_define\_audience | 人群 |
| not\_pre\_define\_audience | 排除人群 |
| media\_app\_category | 媒体类型定向 |
| carrier | 运营商定向 |
| language | 语种定向 |
| location\_category | 位置定向 |
