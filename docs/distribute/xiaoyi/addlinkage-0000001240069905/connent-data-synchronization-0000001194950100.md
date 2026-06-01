---
title: "内容数据同步接口"
displayed_sidebar: xiaoyiSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/service/connent-data-synchronization-0000001194950100
---

import MergeTable from '@site/src/components/MergeTable';

# 内容数据同步接口

华为通过服务聚合网关定时调用开发者服务器接口获取内容数据入库，同时提供接口供开发者服务器调用，满足开发者需要实时同步内容数据的场景。

## **1. 开发者内容接入**

在内容数据引入前通过Checklist检查数据引入的总数据量级、日变化量级等信息。

| 检查项 | 描述信息 | 结果 |
| --- | --- | --- |
| 数据总量 | 开发者能够提供给华为的总数据量（条） | / |
| 日变化量 | 开发者能够提供给华为数据的日变化量（条） | / |
| 数据大小 | 单条数据的最大大小 | / |
| 同步频度 | 全量同步、增量同步的频度 | / |

## **2. 安全要求**

**接口协议和头域**

* 接口协议：HTTPS。
* HTTPS证书要求：使用合法CA颁发的证书，不允许使用自签名证书。
* 数据格式：请求和响应采用Json的报文格式。
* 请求方法：POST方式。
* 报文压缩：响应消息应开启gz压缩，减少带宽开销。
* 长连接：为避免反复TLS建连的开销，支持http：keep-alive，华为服务器使用长连接的方式进行调用。
* 请求头示例如下：

  POST / HTTP/1.1

  Content-Type : application/json;charset=UTF-8

  Host : your.host.of.api

  Accept : application/json

  Accept-Charset : utf-8

  Content-Length : 1024

## **3. 错误码**

**业务错误码定义**

| HTTP错误码 | 业务错误码 | 错误信息 | 备注 |
| --- | --- | --- | --- |
| 200 | 0 | OK | 成功 |
| 400 | 1 | Invalid parameter | 无效参数 |
| 400 | 2 | Incorrect signature | 签名错误 |
| 400 | 3 | Too many parameters | 参数过多 |
| 400 | 4 | Unsupported signature method | 不支持此签名方式 |
| 400 | 5 | Invalid/Used timestamp parameter | 时间戳无效 |
| 400 | 6 | Unsupported open api | 不支持此接口 |
| 401 | 12 | Session key invalid or no longer valid | 会话密钥无效 |
| 403 | 31 | Forbidden | 信息校验失败 |
| 400 | 32 | Data parse error | 数据解析出错 |
| 400 | 80 | Request Timeout | 请求超时 |
| 500 | 101 | Unknown error | 未知错误 |
| 500 | 102 | Server internal error | 服务器错误 |
| 500 | 103 | Service temporarily unavailable | 服务暂不可用 |

**ContentTypeId定义**

| ContentTypeId定义 | 类型 |
| --- | --- |
| 1001 | 财经信息 |
| 1003 | 体育信息 |
| 10031001 | 队员信息 |
| 10031002 | 队伍信息 |
| 10031003 | 赛程信息 |
| 10031004 | 实时赛况 |
| 10031005 | 联赛信息 |
| 1009 | 有声类元数据信息 |
| 10091001 | 全量有声类元数据信息 |
| 1011 | 同步天气数据 |
| 10111001 | 整点和半点同步天气数据 |
| 10111002 | 15分和45分同步天气数据 |

## **4. 接口列表**

**接口列表**

## **4.1 服务器Url**

**服务器Url**

## **4.2 财经信息**

**基本信息**

方法：POST

URL：/financial/financial-info

说明：获取财经类内容数据

**请求头域**

暂无成员

**请求消息**

* 名称: requestBody
* 是否必选：是
* 类型：[FinancialInfoReq](#section99725368293)
* 描述：请求消息

**响应消息**

响应码：200

* 响应体类型: [FinancialInfoRsp](#section99725368293)
* 描述：查询成功，返回查询结果

## **4.3 队伍信息获取**

**基本信息**

方法：POST

URL：/sports/teams

说明：获取体育赛事队伍信息数据

**请求头域**

暂无成员

**请求消息**

* 名称: requestBody
* 是否必选：是
* 类型：[SportsTeamInfoReq](#section99725368293)
* 描述：请求消息

**响应消息**

响应码：200

* 响应体类型: [SportsTeamInfoRsp](#section99725368293)
* 描述：查询成功，返回查询结果

## **4.4 赛事信息获取**

**基本信息**

方法：POST

URL：/sports/leagues

说明：获取体育赛事联赛信息数据

**请求头域**

暂无成员

**请求消息**

* 名称: requestBody
* 是否必选：是
* 类型：[SportsLeagueInfoReq](#section99725368293)
* 描述：请求消息

**响应消息**

响应码：200

* 响应体类型: [SportsLeagueInfoRsp](#section99725368293)
* 描述：查询成功，返回查询结果

## **4.5 赛事赛程信息获取**

**基本信息**

方法：POST

URL：/sports/schedules

说明：获取体育赛事赛程信息数据

**请求头域**

暂无成员

**请求消息**

* 名称: requestBody
* 是否必选：是
* 类型：[SportsScheduleInfo](#section99725368293)
* 描述：请求消息

**响应消息**

响应码：200

* 响应体类型: [SportsScheduleInfoRsp](#section99725368293)
* 描述：查询成功，返回查询结果

## **4.6 有声垂类增量元数据**

**基本信息**

方法：POST

URL：/audio/metadata

说明：有声增量垂类metadata获取，全量的采用离线方式传递或者CP以文件下载方式提供

**请求头域**

暂无成员

**请求消息**

* 名称: requestBody
* 是否必选：是
* 类型：[AudioContentInfoReq](#section99725368293)
* 描述：请求消息

**响应消息**

响应码：200

* 响应体类型: [AudioContentInfoRsp](#section99725368293)
* 描述：查询成功，返回查询结果

## **4.7 基本类型结构**

**(1)** **LeagueId**

联赛ID：NBA-NBA， UK\_EPL， ITA\_SERIEA， ESP\_LALIGA， GEM\_BUNDESLIGA， FRA\_L1， CN\_CBA， CN\_CSL

| 类型 | 取值范围 |
| --- | --- |
| string | 枚举值： NBA, UK\_EPL, ITA\_SERIEA, ESP\_LALIGA, GEM\_BUNDESLIGA, FRA\_L1, CN\_CBA, CN\_CSL |

**(2) DateTimeFormatString**

时间格式，yyyyMMddHHmmss

| 类型 | 取值范围 |
| --- | --- |
| string | 正则Pattern：[0-9]{14} |

**(3) DateFormatString**

日期格式， yyyy-HH-dd

| 类型 | 取值范围 |
| --- | --- |
| string | 正则Pattern：[0-9]{4}-[0-9]{1,2}-[0-9]{1,2} |

## **4.8 对象类型结构**

**(1) FinancialInfoReq**

| 成员名称 | 描述 | 是否必选 | 类型 | 取值范围 |
| --- | --- | --- | --- | --- |
| appKey | 开发者在华为Ability开发平台上配置的访问accessKey。 | 是 | string | / |
| appSecret | 参数签名=base64（hmac-sha256（secretKey， ts））。secretKey为华为分配给开发者服务器的访问秘钥。 | 是 | string |
| ts | 时间戳，用于加密和缓存穿透。格式为：当前计算机时间和GMT时间（格林威治时间）1970年1月1号0时0分0秒所差的毫秒数。 | 是 | string | / |
| countryCode | 国家码，不带是默认按照CN处理。 | 否 | string | / |
| language | 语言类型，不带时默认按照ZH处理。 | 否 | string | / |
| abilityId | 当一个开发者有多个Ability时，支持按照不同的Ability获取内容数据。 | 否 | string | / |
| pageSize | 每页返回记录的数量，默认200条。如=200 则开发者将200条财经内容数据返回给华为，实际返回的可以少于200条。 | 是 | int | / |
| page | 返回记录的开始页数，首次请求带“0”。 | 是 | int | / |
| updateTime | 数据更新时间，UTC时间精确到毫秒，格式:yyyyMMddHHmmssSSS。返回数据记录更新时间大于此参数记录。 | 否 | string | / |

**(2) FinancialInfoRsp**

| 成员名称 | 描述 | 是否必选 | 类型 | 取值范围 |
| --- | --- | --- | --- | --- |
| code | 业务错误码 | 否 | string | / |
| desc | 错误结果描述，可以是成功信息ok或失败原因/ | 否 | string | / |
| totalPage | 数据的总页数 | 否 | int | / |
| currentPage | 当前页数 | 否 | int | / |
| data | / | 否 | [FinancialData](#section99725368293) | / |

**(3)** **FinancialData**

| 成员名称 | 描述 | 是否必选 | 类型 | 取值范围 |
| --- | --- | --- | --- | --- |
| contents | 财经内容信息列表 | 否 | [FinancialContentItem](#section99725368293) | / |

**(4)** **FinancialContentItem**

| 成员名称 | 描述 | 是否必选 | 类型 | 取值范围 |
| --- | --- | --- | --- | --- |
| contentId | 股票记录内容信息唯一标识，各开发者保证本开发者内唯一。 | 否 | string | 最大长度：32 |
| type | 类型，股票:STOCK；大盘指数:ARKET\_INDEX等。 | 否 | string | 最大长度：32 |
| code | 股票代码。type为STOCK必填。 | 否 | string | 最大长度：16 |
| name | 股票名称/指数名称。 | 否 | string | 最大长度：64 |
| description | 描述信息。 | 否 | string | 最大长度：512 |
| exchange | 上市交易所。 | 否 | string | 最大长度：64 |
| mbmChartImageUrl | 行情页图片URL，用于获取行情图在卡片中展示。 | 否 | string | 最大长度：512 |
| mbmChartUrl | 行情页URL，用于在卡片上点击行情图后跳转行情页 | 否 | string | 最大长度：512 |
| url | 详情页URL，用于跳转详情页。 | 否 | string | 最大长度：512 |
| status | 股票状态，0:已下市；1:已上市。 | 否 | int | 枚举值： 0, 1 |
| releaseDate | 股票上市时间，UTC时间精确到秒，格式:yyyyMMddHHmmss。 | 否 | string | / |
| updateTime | 数据更新时间，UTC时间精确到秒，格式:yyyyMMddHHmmss。 | 否 | string | / |
| alias | 股票简称或别名列表。 | 否 | string | 最大Item数：32,Item校验规则[最大长度：64] |

**(5)** **SportsTeamInfoReq**

指定联赛ID列表查询

| 成员名称 | 描述 | 是否必选 | 类型 | 取值范围 |
| --- | --- | --- | --- | --- |
| leagueIds | 联赛ID，查询多个用英文逗号分隔 | 否 | [LeagueId](#section174186771010) | 最大Item数：32 |

**(6) SportsTeamInfoRsp**

| 成员名称 | 描述 | 是否必选 | 类型 | 取值范围 |
| --- | --- | --- | --- | --- |
| data | / | 是 | [SportsTeamInfoItem](#section99725368293) | 最大Item数：32 |

**(7) SportsLeagueInfoReq**

指定联赛ID列表查询

暂无成员

**(8) SportsLeagueInfoRsp**

| 成员名称 | 描述 | 是否必选 | 类型 | 取值范围 |
| --- | --- | --- | --- | --- |
| data | / | 是 | [SportsLeagueInfoItem](#section99725368293) | 最大Item数：32 |

**(9) AudioContentInfoReq**

有声垂类请求的定义

| 成员名称 | 描述 | 是否必选 | 类型 | 取值范围 |
| --- | --- | --- | --- | --- |
| pagination | 请求体中的分页结构，携带分页查询条件。 | 是 | [PaginationReq](#section99725368293) | / |
| timestamp | 时间格式，yyyyMMddHHmmss | 否 | string([DateTimeFormatString](#section174186771010)) | / |

**(10) AudioContentInfoRsp**

有声垂类响应的定义

| 成员名称 | 描述 | 是否必选 | 类型 | 取值范围 |
| --- | --- | --- | --- | --- |
| source | 内容来源，如宝宝巴士、贝瓦儿歌、小伴龙、蜻蜓FM、阿基米等等。 | 否 | string | 最大长度：32 |
| contentItems | 元数据内容记录数 | 是 | [AudioContentInfoItem](#section99725368293) | / |
| pagination | 响应体中的分页结构，携带后续查询的分页信息。 | 否 | [PaginationRsp](https://developer.huawei.com/consumer/cn/doc/5060451#h3-4-8-29-paginationrsp) | / |
| expectedNextTimestamp | 时间格式，yyyyMMddHHmmss | 否 | string([DateTimeFormatString](#section99725368293)) | / |
| errorCode | 返回状态 | 否 | string | 最大长度：32 |
| errorMessage | 描述 | 否 | string | 最大长度：256 |

**(11) AudioContentInfoItem**

有声垂类的响应内容定义

| 成员名称 | 描述 | 是否必选 | 类型 | 取值范围 |
| --- | --- | --- | --- | --- |
| type | 记录类型，分为专辑，节目，艺术家，电台类三种类型取值：ALBUMCONTENTARTISTRADIO | 是 | string | 最大长度：32,枚举值： ALBUM, CONTENT, ARTIST, RADIO |
| hosting | 有声的运营数据default为NO | 否 | string 最大长度：16,枚举值： true, false | / |
| payload | 专辑类型的记录数据、有声节目类型的记录数据、艺术家类型的记录数据、电台类型的记录数据 | 是 | 如下结构任一：[AudioContentObjDef](#section99725368293)，[AudioAlbumObjDef](#section99725368293)，[AudioArtistObjDef](#section99725368293)，[AudioRadioObjDef](#section99725368293) |

**(12) AudioContentObjDef**

节目的响应内容定义

| 成员名称 | 描述 | 是否必选 | 类型 | 取值范围 |
| --- | --- | --- | --- | --- |
| contentCode | 有声节目字段的唯一编码 | 是 | string | 最大长度：32 |
| cpContentCode | CP中节目的唯一编码，如蜻蜓FM中的唯一编码 | 否 | string | 最大长度：64 |
| contentName | 有声节目名 | 是 | string | 最大长度：400 |
| contentSubName | 有声节目副名 | 否 | string | 最大长度：400 |
| timeLength | 节目时长，单位为秒 | 是 | string | / |
| fileSize | 文件大小 | 否 | long | / |
| albumCode | 节目隶属的专辑编码 | 是 | string | 最大长度：32 |
| status | 节目状态，0：下线 1：上线 2:不可用（可能是已删除或没版权），默认为1 | 是 | int | / |
| artistCodes | 节目里艺术家编码拼接的字符串，以/拼接 | 否 | string | 最大长度：1000 |
| artistNames | 节目里艺术家名字拼接的字符串，以/拼接 | 否 | string | 最大长度：1000 |
| cpName | CP名称 | 否 | string | 最大长度：300 |
| author | 作者 | 否 | string | 最大长度：300 |
| composer | 作曲，歌曲类场景下用 | 否 | string | 最大长度：300 |
| freeFlag | 是否免费 0 否 1 是 默认为0 | 是 | int | / |
| resAddress | 资源文件地址，如果CP的资源地址不是时效性的，则可以通过该字段直接返回，可以避免后续再次查询资源URL的意图调用 | 否 | string | 最大长度：512 |
| link | 资源的deeplink跳转地址。可选字段 | 否 | [Interaction](#section99725368293) | / |
| lyricAddress | 歌词文件地址，歌曲类场景下用 | 否 | string | 最大长度：512 |
| description | 节目描述信息 | 否 | string | 最大长度：2048 |
| releaseDate | 日期格式， yyyy-HH-dd | 否 | string([DateFormatString](#section174186771010)) | / |
| icon | 作品的ICON图片URL | 否 | [ImageInfo](#section99725368293) | / |
| firstClass | 一级分类，在有声垂类下，当前分为有声（AUDIO）、儿童（CHILD） | 是 | string | 最大长度：64,枚举值： AUDIO, CHILD |
| secondClass | 二级分类，有声垂类：电台、小说、儿童、相声、评书、公开课、脱口秀、有声书、小品、演讲、诗歌、戏曲、历史、人文、广播剧、咨询、讲座、其它 儿童类：故事、英语、国学、百科、课堂、早教、育儿、声音、唐诗宋词、其它一个节目属于多个分类，则多个分类以/分隔 | 是 | string | 最大长度：64 |
| thirdClass | 三级分类或分类名，如小说类：武侠、穿越、言情、玄幻、官场、都市、重生、悬疑、灵异、历史、其它一个节目属于多个分类，则多个分类以/分隔 | 是 | string | 最大长度：128 |
| age | 年龄段，如36岁01岁 13~6岁 26~12岁 312~18岁 4gt 18岁 53~12岁 6 | 否 | string | 枚举值： 1, 2, 3, 4, 5, 6 |
| crowd | 适宜人群，分为CHILD（儿童），ADULT（成人） | 是 | string | 最大长度：32,枚举值： CHILD, ADULT |
| language | 欧美、小语种、日语、韩语、粤语、闽南语、华语、未知 | 是 | string | 最大长度：16 |
| chapter | 该字段表示第几季的第几集，如第一季的第5集，默认为空，表示只有1集 | 否 | int | / |
| extendValue | 扩展字段 | 否 | object | / |

**(13) AudioAlbumObjDef**

专辑的响应内容定义

| 成员名称 | 描述 | 是否必选 | 类型 | 取值范围 |
| --- | --- | --- | --- | --- |
| albumCode | 专辑编码 | 是 | string | 最大长度：32 |
| cpAlbumCode | CP中歌曲隶属的专辑编码，如蜻蜓FM中专辑编码 | 否 | string | 最大长度：64 |
| albumName | 专辑名称 | 是 | string | 最大长度：300 |
| albumSubName | 专辑副名称 | 否 | string | 最大长度：300 |
| status | 歌曲状态，0：下线 1：上线 2：已删除或无版权 默认为1 | 是 | int | / |
| artistCodes | 专辑里艺术家编码拼接的字符串，以/拼接 | 否 | string | 最大长度：1000 |
| artistNames | 专辑里艺术家名字拼接的字符串，以/拼接 | 否 | string | 最大长度：1000 |
| author | 作者 | 否 | string | 最大长度：300 |
| cpName | CP名称 | 否 | string | 最大长度：300 |
| songNum | 专辑内节目数目 | 是 | int | / |
| description | 专辑描述信息 | 否 | string | 最大长度：2048 |
| releaseDate | 日期格式， yyyy-HH-dd | 否 | string([DateFormatString](#section174186771010)) | / |
| icon | 专辑或作品的ICON图片URL | 否 | [ImageInfo](#section99725368293) | / |
| firstClass | 一级分类，在有声垂类下，当前分为有声（AUDIO）、儿童（CHILD） | 是 | string | 最大长度：64,枚举值： AUDIO, CHILD |
| secondClass | 二级分类，有声垂类：电台、小说、儿童、相声、评书、公开课、脱口秀、有声书、小品、演讲、诗歌、戏曲、历史、人文、广播剧、咨询、讲座、其它 儿童类：故事、英语、国学、百科、课堂、早教、育儿、声音、唐诗宋词、其它一个节目属于多个分类，则多个分类以/分隔 | 是 | string | 最大长度：64 |
| thirdClass | 三级分类或分类名，如小说类：武侠、穿越、言情、玄幻、官场、都市、重生、悬疑、灵异、历史、其它一个节目属于多个分类，则多个分类以/分隔 | 是 | string | 最大长度：128 |
| age | 年龄段，如36岁01岁 13~6岁 26~12岁 312~18岁 4gt 18岁 53~12岁 6 | 否 | string | 枚举值： 1, 2, 3, 4, 5, 6 |
| crowd | 适宜人群，分为CHILD（儿童），ADULT（成人） | 是 | string | 最大长度：32,枚举值： CHILD, ADULT |
| language | 欧美、小语种、日语、韩语、粤语、闽南语、华语、未知 | 否 | string | 最大长度：16 |
| link | 资源的deeplink跳转地址。可选字段 | 否 | [Interaction](#section99725368293) | / |
| chargeType | 专辑支持的购买类型，0是免费，1是整个专辑购买，2是分集购买 | 是 | int | 枚举值： 0, 1, 2 |
| complete | 专辑的状态，如0 更新中、1 完结，默认值是1 | 否 | int | / |
| extendValue | 扩展字段 | 否 | object | / |

**(14) AudioArtistObjDef**

艺术家的响应内容定义

| 成员名称 | 描述 | 是否必选 | 类型 | 取值范围 |
| --- | --- | --- | --- | --- |
| artistCode | 艺术家编码 | 是 | string | 最大长度：32 |
| artistName | 艺术家名称 | 是 | string | 最大长度：300 |
| artistSubName | 艺术家别名 | 否 | string | 最大长度：300 |
| status | 歌曲状态，0：下线 1：上线 2：已删除或无版权 默认为1 | 是 | int | / |
| artistSex | 艺术家性别，0：男 1：女 2：组合 3：未知 | 否 | int | / |
| icon | 专辑或作品的ICON图片URL | 否 | [ImageInfo](#section99725368293) | / |
| description | 艺术家描述信息 | 否 | string | 最大长度：2048 |
| extendValue | 扩展字段 | 否 | object | / |

**(15) AudioRadioObjDef**

返回电台类参数名称

| 成员名称 | 描述 | 是否必选 | 类型 | 取值范围 |
| --- | --- | --- | --- | --- |
| radioCode | 电台 id | 是 | string | / |
| radioName | 电台名称 | 是 | string | / |
| radioSubName | 电台别名，如芒果台 | 否 | string | / |
| status | 节目状态，0：下线 1：上线 2:不可用（可能是已删除或没版权），默认为1 | 否 | int | / |
| artistCodes | 艺术家编码拼接的字符串，以/拼接 | 否 | string | 最大长度：1000 |
| artistNames | 艺术家名字拼接的字符串，以/拼接 | 否 | string | 最大长度：1000 |
| icon | 电台的图片URL | 否 | [ImageInfo](#section99725368293) | / |
| parentFmId | 父电台 id，非 0 时说明该电台是子电台 | 否 | int | / |
| fmFrequency | 电台的频道，如FM88.8 | 是 | string | / |
| resAddress | 资源文件地址，如果CP的资源地址不是时效性的，则可以通过该字段直接返回，可以避免后续再次查询资源URL的意图调用 | 否 | string | 最大长度：512 |
| link | 资源的deeplink跳转地址。可选字段 | 否 | [Interaction](#section99725368293) | / |
| firstClass | 一级分类，在有声垂类下，固定为AUDIO，默认值为AUDIO | 否 | string | 最大长度：64,枚举值： AUDIO |
| secondClass | 二级分类，在有声垂类下，固定为电台，默认值为电台 | 否 | string | 最大长度：64,枚举值： 电台 |
| thirdClass | 三级分类或分类名，如 2:公共电台 6:有声电台 7:名人电台，以实际取值为准一个节目属于多个分类，则多个分类以/分隔 | 是 | string | 最大长度：128 |
| freeFlag | 是否免费 0 否 1 是 默认为0 | 否 | int | / |
| extendValue | 扩展字段 | 否 | object | / |

**(16) SportsTeamInfoItem**

| 成员名称 | 描述 | 是否必选 | 类型 | 取值范围 |
| --- | --- | --- | --- | --- |
| teamId | 球队Id | 是 | string | 最大长度：32 |
| teamName | 球队名称 | 是 | string | 最大长度：64 |
| leagueId | 联赛ID：NBA-NBA， UK\_EPL， ITA\_SERIEA， ESP\_LALIGA， GEM\_BUNDESLIGA， FRA\_L1， CN\_CBA， CN\_CSL | 是 | string([LeagueId](#section174186771010)) | / |
| leagueName | 联赛名称 | 是 | string | 最大长度：32 |
| alias | 球队别名 | 否 | string | 最大长度：64 |
| logo | 球队logo信息 | 是 | [Image](#section99725368293) | / |
| hot | 热度: 0-非热门队伍；1-热门队伍 | 是 | int | 枚举值： 0, 1 |
| desc | 球队简要描述信息 | 否 | string | 最大长度：512 |
| homePage | 球队主页跳转Link | 否 | [Interaction](#section99725368293) | / |
| chiefCoach | 主教练 | 否 | string | 最大长度：64 |

**(17) SportsLeagueInfoItem**

| 成员名称 | 描述 | 是否必选 | 类型 | 取值范围 |
| --- | --- | --- | --- | --- |
| leagueId | 联赛ID：NBA-NBA， UK\_EPL， ITA\_SERIEA， ESP\_LALIGA， GEM\_BUNDESLIGA， FRA\_L1， CN\_CBA， CN\_CSL | 是 | string([LeagueId](#section174186771010)) | / |
| leagueName | 联赛名称 | 是 | string | 最大长度：32 |
| logo | 球队logo信息 | 否 | [Image](#section99725368293) | / |

**(18) SportsScheduleInfo**

SportsScheduleInfo 请求查询方式包含：1）指定赛事ID，开始时间、结束时间查询联赛赛程。2）指定开始时间、结束时间，查询时间段内所有已知的联赛赛程。

| 成员名称 | 描述 | 是否必选 | 类型 | 取值范围 |
| --- | --- | --- | --- | --- |
| leagueId | 联赛ID：NBA-NBA， UK\_EPL， ITA\_SERIEA， ESP\_LALIGA， GEM\_BUNDESLIGA， FRA\_L1， CN\_CBA， CN\_CSL | 否 | string([LeagueId](#section174186771010)) | / |
| beginDate | 查询开始时间查询开始时间（日期，格式2018-09-09） | 否 | string | 最大长度：20 |
| endDate | 查询结束时间查询结束时间（日期，格式2018-09-09） | 否 | string | 最大长度：20 |

**（19） SportsScheduleInfoRsp**

| 成员名称 | 描述 | 是否必选 | 类型 | 取值范围 |
| --- | --- | --- | --- | --- |
| data | / | 是 | [SportsScheduleInfoItem](#section99725368293) | 最大Item数：256 |

**（20） SportsScheduleInfoItem**

| 成员名称 | 描述 | 是否必选 | 类型 | 取值范围 |
| --- | --- | --- | --- | --- |
| matchId | 赛事Id | 是 | string | 最大长度：32 |
| leagueId | 联赛ID：NBA-NBA， UK\_EPL， ITA\_SERIEA， ESP\_LALIGA， GEM\_BUNDESLIGA， FRA\_L1， CN\_CBA， CN\_CSL | 是 | string([LeagueId](#section174186771010)) | / |
| leagueName | 联赛名称 | 是 | string | 最大长度：32 |
| pubTime | 体育赛程发布时间 | 是 | string | 最大长度：20 |
| season | 比赛赛季，格式为2017-2018 | 是 | string | 最大长度：32 |
| round | 轮次，如第一轮 | 否 | string | 最大长度：32 |
| beginTime | 比赛开始时间 | 是 | string | 最大长度：20 |
| status | 状态 1：未开始；2：进行在；3：已结束 | 是 | string | 最大长度：8 |
| process | 当前比赛进度，status为2（进行中）的比赛有效。如“第2节” | 是 | string | 最大长度：32 |
| gameTime | 比赛进行的时间，status为2（进行中）的比赛有效 | 是 | string | 最大长度：32 |
| matchType | 比赛类型，如常规赛、季后赛等 | 是 | string | 最大长度：32 |
| informations | 比赛相关资讯信息 | 是 | [SportsScheduleInformationItem](#section99725368293) | / |
| hot | 热度 0-非热门；1-热门 | 是 | int | 枚举值： 0, 1 |
| homeTeam | 主队信息 | 否 | [SportsScheduleTeam](#section99725368293) | / |
| awayTeam | 客队信息 | 否 | [SportsScheduleTeam](#section99725368293) | / |

**(21) SportsScheduleInformationItem**

比赛相关资讯信息

| 成员名称 | 描述 | 是否必选 | 类型 | 取值范围 |
| --- | --- | --- | --- | --- |
| title | 比赛相关资讯标题 | 是 | string | 最大长度：128 |
| infoType | 比赛资讯类型：TEXTLIVE， VIDEOLIVE， IMAGE | 是 | string | 最大长度：16,枚举值： TEXTLIVE, VIDEOLIVE, IMAGE |
| link | / | 否 | [Interaction](#section99725368293) | / |
| image | 单个图片信息 | 否 | [Image](#section99725368293) | / |

**（22）SportsScheduleTeam**

赛事球队信息

| 成员名称 | 描述 | 是否必选 | 类型 | 取值范围 |
| --- | --- | --- | --- | --- |
| teamId | 球队ID | 是 | string | 最大长度：32 |
| teamName | 球队名称 | 是 | string | 最大长度：64 |
| logo | 球队logo的URL地址 | 是 | string | 最大长度：512 |
| score | 得分 | 否 | long | / |
| prescore | 大比分 | 否 | long | / |

**(23) Interaction**

| 成员名称 | 描述 | 是否必选 | 类型 | 取值范围 |
| --- | --- | --- | --- | --- |
| webURL | 点击整个卡片需要实际跳转的H5链接，要求为https地址 | 否 | string | 最大长度：512 |
| deepLink | 对原生App的跳转 | 否 | [NativeAppLinkInteraction](#section99725368293) | / |
| quickApp | 对快应用的扩展 | 否 | [QuickAppLinkInteraction](#section99725368293) | / |

**(24) NativeAppLinkInteraction**

对原生App的跳转

| 成员名称 | 描述 | 是否必选 | 类型 | 取值范围 |
| --- | --- | --- | --- | --- |
| url | App的deeplink地址 | 是 | string | 最大长度：512 |
| appName | App名称 | 否 | string | 最大长度：256 |
| appPackage | App包名 | 是 | string | 最大长度：256 |
| minVersion | 支持的App的最小版本号VersionCode | 是 | long | / |
| minAndroidAPILevel | 所需android最小API Level | 否 | long | / |

**(25) QuickAppLinkInteraction**

对快应用的扩展

| 成员名称 | 描述 | 是否必选 | 类型 | 取值范围 |
| --- | --- | --- | --- | --- |
| url | 快应用的deeplink地址 | 是 | string | 最大长度：512 |
| minPlatformVersion | 所需快应用引擎最小版本号 | 是 | long | / |
| minVersion | 支持的快应用的最小版本号VersionCode | 是 | long | / |

**(26) Image**

单个图片信息

| 成员名称 | 描述 | 是否必选 | 类型 | 取值范围 |
| --- | --- | --- | --- | --- |
| url | 图片URL，要求为https格式 | 是 | string | 最大长度：512 |
| widthPixels | 图片宽度（像素） | 是 | long | 最小值：1,最大值：16384 |
| heightPixels | 图片高度（像素） | 是 | long | 最小值：1,最大值：16384 |

**(27) ImageInfo**

图片信息，至少提供一张图

| 成员名称 | 描述 | 是否必选 | 类型 | 取值范围 |
| --- | --- | --- | --- | --- |
| small | 小图 | 否 | [Image](#section99725368293) | / |
| medium | 中图 | 否 | [Image](#section99725368293) | / |
| large | 大图 | 否 | [Image](#section99725368293) | / |

**(28) PaginationReq**

请求体中的分页结构，携带分页查询条件。

| 成员名称 | 描述 | 是否必选 | 类型 | 取值范围 |
| --- | --- | --- | --- | --- |
| limit | 分页大小限制 | 否 | long | 最小值：0 |
| start | 分页起始下标。不携带时表示从第一条开始查询。 | 否 | string | 最大长度：16 |

**(29) PaginationRsp**

响应体中的分页结构，携带后续查询的分页信息。

| 成员名称 | 描述 | 是否必选 | 类型 | 取值范围 |
| --- | --- | --- | --- | --- |
| next | 下一条分页，不携带时没有更多的数据 | 否 | string | 最大长度：16 |
| total | 所有的数据条目数（不分页） | 是 | long | 最小值：0 |
