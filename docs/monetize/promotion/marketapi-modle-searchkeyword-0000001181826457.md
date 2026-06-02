---
title: "SearchkeyWord"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-modle-searchkeyword-0000001181826457
---
# SearchkeyWord

![](./img/be29a47a5d57.png) 

- 关键词删除场景：
  - subTaskId非空时，keyword、matchType、price非必填。
  - subTaskId为空时，keyword、matchType必填，price非必填。
- 批量修改搜索词出价场景：
  - subTaskId非空时，keyword、matchType非必填，price必填。
  - subTaskId为空时，keyword、matchType、price必填。
- 新增/修改关键词场景：
  - subTaskId非必填, keyword、matchType、price必填。

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| taskId | M | Long | 任务ID。 |
| keyword | M | String | 关键词。 |
| matchType | M | String | 匹配方式。  取值范围：   - ACCURATE：精确匹配 - FUZZY：泛匹配 |
