---
title: "错误码说明"
displayed_sidebar: monetizationSidebar
original_url: /docs/monetize/monetization/agd_pro_sdk_quickapp_errcode-0000001410983858
format: md
upstream_id: monetize/monetization/agd_pro_sdk_quickapp_errcode-0000001410983858
last_sync: 2026-06-07
sync_hash: 0af23a8d
---
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
