---
title: "权限与能力列表说明"
displayed_sidebar: contentDistSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/content/permission-introduction-0000001270805933
---

# 权限与能力列表说明

百花号开放平台具体权限介绍如下：

|  |  |  |
| --- | --- | --- |


import MergeTable from '@site/src/components/MergeTable';

<MergeTable
  headers={['权限名称', 'Scope', '权限能力']}
  rows={
    ['获取百花号用户信息', 'https://www.huawei.com/contentconnect/user', '获取用户可管理的UP主列表。'],
    [{ text: '管理视频', rowspan: 10, colspan: 1 }, { text: 'https://www.huawei.com/contentconnect/video', rowspan: 10, colspan: 1 }, '图片上传。'],
    [null, null, '视频整体上传。'],
    [null, null, '视频分段上传初始化。'],
    [null, null, '视频分段上传。'],
    [null, null, '视频分段上传合并结果。'],
    [null, null, '百花号视频创建。'],
    [null, null, '视频详情查询。'],
    [null, null, '视频列表查询。'],
    [null, null, '视频删除。'],
    [null, null, '视频下线。']
  }
/>

| 视频下线。 |