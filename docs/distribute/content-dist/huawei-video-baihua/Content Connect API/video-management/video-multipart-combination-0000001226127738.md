---
title: "视频分段上传合并"
displayed_sidebar: contentDistSidebar
original_url: /docs/distribute/content-dist/huawei-video-baihua/Content Connect API/video-management/video-multipart-combination-0000001226127738
---


import MergeTable from '@site/src/components/MergeTable';

# 视频分段上传合并

该接口用于讲分段视频上传视频到文件服务器，完成上传。

Scope：https://www.huawei.com/contentconnect/video

视频文件要求：

* 为了更好的观看体验，推荐上传16:9或者9:16，分辨率为720p（1280x720或者720x1280）及以上的视频。
* 支持常用视频格式，推荐使用 mp4 、mov。
* 带品牌logo或品牌水印的视频，会命中华为视频的审核逻辑，有比较大的概率导致视频发布失败。强烈建议第三方应用自行处理好分享内容中的不合规水印。
* 视频审核逻辑与在百花号门户上传审核逻辑一致。

<strong>请求地址</strong>

POST /mosopenapi/v2/foruser/video/part/complete

<strong>请求参数说明</strong>

|  |  |  |  |  |
| --- | --- | --- | --- | --- |



<MergeTable
  headers={['参数名称', '参数类型', '参数描述', '参数示例', '是否必须']}
  rows={
    ['upResourceId', 'string', 'UP主的id标识，upResourceId和tpUserCode不能同时为空。', '492456389055106944 为/list/users接口获取的upInfos中的upResourceId。', 'false'],
    ['tpUserCode', 'string', 'UP主的第三方标识，upResourceId和tpUserCode不能同时为空。', 'hwvrmgjxmt', 'false'],
    ['videoId', 'string', '视频唯一id。', '492456389055106956', 'true'],
    ['uploadId', 'string', '文件服务器上传id。', '0000017E9558B79885CD1FB78E34703E', 'true'],
    ['reqParts', { text: '[]', rowspan: 1, colspan: 4 }, null, null, null],
    ['partObjectId', 'string', '分端的对象id。', '""', 'true'],
    ['etag', 'string', '分片响应返回的etag。', 'd5138a2db94c0f54e73ef6dca0ba044d', 'true'],
    ['xGoogleGeneration', 'string', '如x-google-generation。', '""', 'true'],
    ['partNumber', 'integer', '请求上传参数的分段编号，从1开始。', '1', 'true']
  }
/>


<strong>请求样例</strong>

```
{
  "upResourceId": "674482848291436800",
  "uploadId": "0000017FBFE0688585C678A73CC6F1A3",
  "videoId": "854963819221588864",
  "partHeaders": "etag;x-goog-generation",
  "reqParts": [
    {
      "partObjectId": "",
      "etag": "d5138a2db94c0f54e73ef6dca0ba044d",
      "xGoogleGeneration": "",
      "partNumber": 1
    },
    {
      "partObjectId": "",
      "etag": "3bec06a533b8a98a3925d977da98a06d",
      "xGoogleGeneration": "",
      "partNumber": 2
    },
    {
      "partObjectId": "",
      "etag": "8cea999480565dd4684274d81f4928cd",
      "xGoogleGeneration": "",
      "partNumber": 3
    }
  ]
}
```

<strong>响应参数</strong>

无

<strong>响应样例</strong>

```
{
  "retCode": 0,
  "retMsg": "success"
}
```