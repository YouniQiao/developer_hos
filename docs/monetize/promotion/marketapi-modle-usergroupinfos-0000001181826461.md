---
title: "UserGroupInfo"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketapi-modle-usergroupinfos-0000001181826461
format: md
---

# UserGroupInfo

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| groupId | M | String | 定向ID。 |
| groupName | M | String | 定向名称。 |
| groupType | M | String | 定向类型：   - TAG：人群定向标签 - FILE：文件导入 - COMBO：交并差组合人群 - DMP：DMP群组 |
| status | M | String | 定向状态：   - ON：启动 - OFF：停止 |
| userCount | M | Long | 覆盖人数。 |
| createTime | M | String | 创建时间。使用北京时间，如："2020-10-21 20:19:02"。 |
