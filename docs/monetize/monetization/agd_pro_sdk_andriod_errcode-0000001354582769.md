---
title: "错误码说明"
displayed_sidebar: monetizationSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/monetize/agd_pro_sdk_andriod_errcode-0000001354582769
---


#### 云侧返回错误码

| 错误码rtnCode | 错误描述rtnDesc | 说明 |
| --- | --- | --- |
| **1001** | INVALID\_SLOT\_ID | 非法展示位ID。  **通常是因为展示位ID输入不正确或展示位被停用。** |
| 1002 | MEDIA\_NO\_PERMISSION | 媒体无权访问。 |
| 1003 | INVALID\_DEV\_ID | 非法开发者id。 |
| **1004** | INVALID\_MEDIA\_ID | 非法媒体ID。  **通常是因为展示位ID和媒体不对应导致，请核对展示位ID是否正确。** |
| 1005 | CALL\_STORE\_FAIL | 请求分发应用失败。 |
| 1006 | INVALID\_INSTALL\_TYPE | 非法安装方式。 |
| 1007 | TIMEOUT\_OR\_INTERNAL\_EXCEPTION | 超时或内部异常。 |
| **1008** | DATA\_LIST\_IS\_EMPTY | 数据列表为空。  **通常有两个因素导致：**   1. **未配置对应广告的推广资源。** 可联系华为运营确认是否配置推广资源。 2. **广告请求未命中设备。属于正常情况，请隔断时间再请求或更换测试设备调试。** |
| 1009 | CALL\_MICROSERVICE\_FAIL | 请求分发微服务失败。 |
| 1010 | INVALID\_STYLE\_TYPE | 非法样式类型 style type。 |
| 1011 | CALL\_CODE\_NOT\_ZERO | 调用其他服务返回状态码非0。 |
| 1012 | PARAMETER\_IS\_INVALID | 参数校验异常。 |
| **1013** | DEVICE\_NO\_PERMISSION | 媒体无权访问。  **如果使用测试状态的展示位调试，需要在接入测试中配置设备的OAID，否则会上报此错误码。**  具体配置请参见[接入测试](https://developer.huawei.com/consumer/cn/doc/monetize/agd_pro_sdk_andriod_commission-0000001461023573#section9164163104614)。 |
| 2001 | REPEAT\_CREATE\_BLOCK\_RULE | 重复创建规则名称。 |
| 3001 | APP\_NOT\_FOUND | AppInfo未能找到。 |
| 3002 | MEDIA\_NOT\_EXIST | 媒体信息不存在。 |
| 3003 | MEDIA\_STATUS\_ERROR | 当前媒体状态异常。 |
| 4001 | TEST\_DEVICE\_IS\_EXIST | 测试设备已存在。 |
| 4002 | TEST\_DEVICE\_NO\_AUTH | 无权修改当前测试设备。 |
| 4003 | TEST\_DEVICE\_NO\_CHANGE | 没有内容更新。 |
| 5001 | RECORD\_NOT\_EXIST | 记录不存在。 |
| 5002 | RECORD\_STATUS\_ABNORMAL | 数据状态异常。 |
| 5003 | WORK\_FLOW\_INCONSISTENCY | 创建时电子流id与实际不匹配。 |
| 5004 | RECORD\_ALREADY\_EXISTS | 记录已存在。 |
| 5005 | AGREEMENT\_CHECK\_COMMON\_ERROR | 协议校验通用异常。 |
| 5006 | AGREEMENT\_STATUS\_CHECK\_ERROR | 协议签署异常，没签，或者不是最新版。 |
| 5007 | AGREEMENT\_SIGN\_ERROR | 协议签署错误。 |
| 5007 | AGREEMENT\_INVALID\_PARAM | 协议相关参数错误。 |
| 5008 | AGREEMENT\_RECORD\_QUERY\_ERROR | 协议记录查询失败。 |
| 5009 | AGREEMENT\_AGREEMENT\_QUERY\_ERROR | 协议查询报错。 |

#### 加载失败错误码

| 参数 | 描述 | 错误码 | 处理方法 |
| --- | --- | --- | --- |
| AgdAdConstant.ERROR\_NOT\_INIT | 未初始化。 | 2001 | 开发者检查初始化是否成功。 |
| AgdAdConstant.ERROR\_SLOT\_ID\_EMPTY | 槽位ID空。 | 2002 | 开发者检查初始化是否有传入非空槽位ID。 |
| AgdAdConstant.ERROR\_NETWORK\_UNAVAILABLE | 无网络。 | 2003 | 开发者检查是否有有效网络连接。 |
| AgdAdConstant.ERROR\_FRONT\_REQUEST\_FAIL | 前置接口请求失败。 | 2004 | 反馈日志给SDK接口人。 |
| AgdAdConstant.ERROR\_NETWORK\_CONNECTION | 网络连接异常。 | 2005 | 反馈日志给SDK接口人。 |
| AgdAdConstant.ERROR\_SERVER | 服务器返回异常。 | 2006 | 反馈日志给SDK接口人。 |
| AgdAdConstant.ERROR\_RESPONSE\_EMPTY | 服务器返回响应空，比如layoutdata或者datalist空。 | 2007 | 反馈日志给SDK接口人。 |
| AgdAdConstant.ERROR\_DATA\_PARSE\_FAIL | 服务器返回响应解析失败，比如json格式不合法。 | 2008 | 反馈日志给SDK接口人。 |
| AgdAdConstant.ERROR\_OTHERS | 其他错误，流程中listener或context等对象为空，导致流程无法继续。 | 2010 | 反馈日志给SDK接口人。 |
| AgdAdConstant.NO\_VALID\_AD | 无有效的广告。 | 2014 | 广告应用可能已安装，尝试重新加载。 |

#### 渲染失败错误码

| 参数 | 描述 | 错误码 | 处理方法 |
| --- | --- | --- | --- |
| AgdAdConstant.REASON\_LAYOUT\_ERROR | 动态布局错误 | 10001 | 反馈日志给SDK接口人。 |
| AgdAdConstant.REASON\_VIDEO\_ERROR | 视频播放异常 | 10002 | 反馈日志给SDK接口人。 |
| AgdAdConstant.REASON\_LAYOUT\_INVALID\_PARAM | 初始化失败 | 10003 | 反馈日志给SDK接口人。 |

#### 展示失败错误码

| 参数 | 描述 | 错误码 | 处理方法 |
| --- | --- | --- | --- |
| AgdAdConstant.REASON\_LAYOUT\_ERROR | 动态布局错误 | 10001 | 反馈日志给SDK接口人。 |
| AgdAdConstant.REASON\_VIDEO\_ERROR | 视频播放异常 | 10002 | 反馈日志给SDK接口人。 |
| AgdAdConstant.INTERNAL\_ERROR | 内部错误 | 20001 | 反馈日志给SDK接口人。 |
| AgdAdConstant.REUSED\_ERROR | 广告重复 | 20002 | 反馈日志给SDK接口人。 |
| AgdAdConstant.AD\_NOT\_LOADED\_ERROR | 广告未加载 | 20003 | 反馈日志给SDK接口人。 |
| AgdAdConstant.BACKGROUND\_RUNNING\_ERROR | 应用在后台执行 | 20004 | 反馈日志给SDK接口人。 |

#### RewardInfo奖励发放校验请求错误码

| 参数 | 描述 | 错误码 | 处理方法 |
| --- | --- | --- | --- |
| AgdAdConstant.ERROR\_NETWORK\_UNAVAILABLE | 无网络 | 2003 | 检查是否有有效网络连接。 |
| AgdAdConstant.ERROR\_FRONT\_REQUEST\_FAIL | 前置接口请求失败 | 2004 | 反馈日志给SDK接口人。 |
| AgdAdConstant.ERROR\_NETWORK\_CONNECTION | 网络连接异常 | 2005 | 反馈日志给SDK接口人。 |
| AgdAdConstant.ERROR\_SERVER | 服务器返回异常 | 2006 | 反馈日志给SDK接口人。 |
| AgdAdConstant.ERROR\_RESPONSE\_EMPTY | 服务器返回响应空 | 2007 | 反馈日志给SDK接口人。 |
| AgdAdConstant.ERROR\_LOADING\_REPEAT | 广告正在请求中，不能重复发起请求 | 2011 | 检查是否程序内部问题或反馈日志给SDK接口人。 |
| AgdAdConstant.ERROR\_API\_NOT\_SUPPORT | API版本不在广告服务支持范围内 | 2012 | 检查使用可支持API版本是否正确。 |
| AgdAdConstant.ERROR\_HMS\_VERSION\_TOO\_LOW | HMS Core（APK）版本过低，不支持设置AppInfo | 2013 | - |

#### 报表接口错误码

| 错误码rtnCode | 错误描述rtnDesc | 说明 |
| --- | --- | --- |
| 0 | - | 成功。 |
| 1001 | report error | 内部系统返回null。 |
| 1001 | invalid slot | 非法展示位ID。  请检查**slotIds**字段是否合法。  **通常是因为展示位ID输入不正确或展示位被停用。** |
| 1001 | not support test slot | 当前不支持测试展示位。  请联系华为运营确认支持测试展示位的功能开关设置是否正确。 |
| 1003 | invalid devId | 非法开发者ID。  请检查接口传入的开发者ID和媒体的开发者ID是否一致。 |
| 1004 | invalid media | 非法媒体ID。  请检查**MediaPkgName**字段是否合法。  **通常是因为展示位ID和媒体不对应导致，请核对展示位ID是否正确。** |
| 1012 | param mediaInfo illegal | **mediaInfo**信息非法。  按天报表：检查**mediaInfo**信息中是否未填写**mediaPkgName**、**slotIds**字段。  按小时报表：检查**mediaInfo**信息是否为空，即**mediaInfo**信息中**mediaPkgName**、**slotIds**、**channelIds**字段中至少一个字段有值。 |
| 1014 | slotIds and mediaPkg can not be empty at the same time | **slotIds**和**mediaPkgName**字段不能同时为空。  用于检测按天报表**mediaInfo**信息正确性。 |
| 3004 | - | 入参校验不通过。  具体问题请参考对应的**rtnDesc**信息。 |
| 10010004 | json to bean exception | 内部系统返回返回数据异常。  通常是内部系统解析发生错误导致。 |
