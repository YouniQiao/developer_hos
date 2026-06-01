---
title: "获取可管理用户"
displayed_sidebar: contentDistSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/content/get-manageable-users-0000001225967782
---


import MergeTable from '@site/src/components/MergeTable';

# 获取可管理用户

该接口获取用户所管理的UP主列表，返回的信息包含Id以及昵称，Id用于标识UP主。

Scope：https://www.huawei.com/contentconnect/user

<strong>请求地址</strong>

POST /mosopenapi/v2/foruser/list/users

<strong>请求参数说明</strong>

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| 参数名称 | 参数类型 | 参数描述 | 参数示例 | 是否必须 |
| pageNo | integer | 分页游标, 第一页请求pageNo是1, response中会返回totalPage, 根据totalPage依次获取每页数据。 | 1 | true |
| pageSize | integer | 单页返回的数量，单页最大获取1000个。 | 10 | true |

<strong>请求样例</strong>

```
{
  "pageNo":1,
  "pageSize":20
}
```

<strong>响应参数</strong>

|  |  |  |  |  |
| --- | --- | --- | --- | --- |



<MergeTable
  headers={['参数字段', '参数类型', '参数描述', '参数示例', '是否必须']}
  rows={
    ['pageNo', 'integer', '当前页码。', '1', 'true'],
    ['pageSize', 'integer', '单页返回的数量。', '10', 'true'],
    ['totalRecord', 'integer', '总条目数。', '20', 'true'],
    ['totalPage', 'integer', '总页数。', '2', 'true'],
    ['upInfos', '[]', { text: '', rowspan: 1, colspan: 3 }, null, null],
    ['upResourceId', 'string', 'UP主的id标识。', '492456389055106944', 'true'],
    ['tpUserCode', 'string', 'UP主的第三方标识', 'hwvrmgjxmt', 'false'],
    ['upName', 'string', 'UP主百花号昵称。', 'baihua1110t', 'true']
  }
/>


<strong>响应样例</strong>

```
{
  "data": {
    "pageNo": 1,
    "totalPage": 1,
    "pageSize": 20,
    "upInfos": [
      {
        "upName": "主干环境CP329000",
        "upResourceId": "853487611875133184",
        "tpUserCode": " hwvrmgjxmt"
      },
      {
        "upName": "主干CP329000-审核通过",
        "upResourceId": "857331001981110016",
        "tpUserCode": " hwvrmrbydd"
      },
      {
        "upName": "主干CP329000-001",
        "upResourceId": "853531380636943744",
        "tpUserCode": " hwvrmwlzx"
      },
      {
        "upName": "主干CP329000-002",
        "upResourceId": "853531380955710849"
      },
      {
        "upName": "主干CP329000-004",
        "upResourceId": "853531381391918465"
      }
    ],
    "totalRecord": 5
  },
  "retCode": 0,
  "retMsg": "success"
}
```