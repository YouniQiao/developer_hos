---
title: "视频分段上传"
displayed_sidebar: contentDistSidebar
original_url: /docs/distribute/content-dist/huawei-video-baihua/Content Connect API/video-management/video-multipart-upload-0000001270927645
upstream_id: distribute/content-dist/huawei-video-baihua/Content Connect API/video-management/video-multipart-upload-0000001270927645
last_sync: 2026-06-07
sync_hash: 7cf8042b
---
import MergeTable from '@site/src/components/MergeTable';

# 视频分段上传

该接口用于获取上传视频到文件服务器的参数，拿到上传参数后需要自行上传视频到文件服务器，上传方法参照“[上传文件](/docs/distribute/content-dist/huawei-video-baihua/Content Connect API/upload-file-0000001225965698)”。

Scope：https://www.huawei.com/contentconnect/video

视频文件要求：

* 为了更好的观看体验，推荐上传16:9或者9:16，分辨率为720p（1280x720或者720x1280）及以上的视频。
* 支持常用视频格式，推荐使用 mp4 、mov。
* 带品牌logo或品牌水印的视频，会命中华为视频的审核逻辑，有比较大的概率导致视频发布失败。强烈建议第三方应用自行处理好分享内容中的不合规水印。
* 视频审核逻辑与在百花号门户上传审核逻辑一致。

<strong>请求地址</strong>

POST /mosopenapi/v2/foruser/video/part/upload

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
    ['sha256', 'string', '文件生成的签名，签名生成算法参见“ 算法介绍 ”。', '34b234424d98dcb064a71a862835527ff3b5d38ec06cd98a3289c0028108322f', 'true'],
    ['length', 'string', '文件大小，单位为Bytes。', '1024', 'true'],
    ['partNumber', 'integer', '请求上传参数的分段编号，从1开始。', '1', 'true']
  }
/>


<strong>请求样例</strong>

```
{
  "upResourceId": "674482848291436800",
  "uploadId": "0000017FBFE0688585C678A73CC6F1A3",
  "videoId": "854963819221588864",
  "reqParts": [
    {
      "sha256": "96d6306634c89c25d31a5a240ed9f08f74cfc783b197bcf05c9b09965e65c709",
      "length": "10485760",
      "partNumber": 1
    },
    {
      "sha256": "d49edbf61cf7bd4092dd9b3cf7e6550b45ae514c9c8b811feed5ad8c84001830",
      "length": "10485760",
      "partNumber": 2
    },
    {
      "sha256": "78c543782a9b05a8962496ff37b1de4762e65677860788a2bc6465fe96825be5",
      "length": "3024215",
      "partNumber": 3
    }
  ]
}
```

<strong>响应参数</strong>

|  |  |  |  |  |
| --- | --- | --- | --- | --- |



<MergeTable
  headers={['参数字段', '参数类型', '参数描述', '参数示例', '是否必须']}
  rows={
    ['partsHeaders', 'string', '分片上传后厂商返回的关键头部key，用于获取信息组合对象，如亚马逊分片上传返回Etag信息，这里就需要包含etag，多个情况用分号分隔，如“etag;x-goog-generation”。', 'etag;x-goog-generation', 'true'],
    ['partItems', { text: '[]', rowspan: 1, colspan: 4 }, null, null, null],
    ['partObjectId', 'string', '分段在文件服务器的id。', '', 'true'],
    ['partNumber', 'integer', '请求上传参数的分段编号，从1开始。', '1', 'true'],
    ['url', 'string', '上传地址。', 'https://hicinema-mmpmedia-test-cn.obs.cn-north-1.myhuaweicloud.comhttps://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/contentsrc/import/CP180160618779129168/mos/part/1010b218-2e65-46bb-8a98-4180870e514c:20260601224833:2800:B1EB0A4D8838BCBEA83983256B97CB6A55E8032F71656A038685440733F948DD.mp4', 'true'],
    ['method', 'string', '上传方法。', 'PUT', 'true'],
    ['etag', 'string', '', '', 'true'],
    ['headers', { text: '{}', rowspan: 1, colspan: 4 }, null, null, null],
    ['Authorization', 'string', '请求三方厂商的签名信息。', 'AWS4-HMAC-SHA256 Credential=I06FNCS2OGN5YXWTTPZC/20220126/cn-north-1/s3/aws4_request, SignedHeaders=content-length;content-type;host;x-amz-content-sha256;x-amz-date, Signature=50ac861f86da241b6ccfa092dd2fb93a67324d42cda2be7c55dcdc4cecb7c02a', 'true'],
    ['x-amz-content-sha256', 'string', 'hws和amazon请求的body的sha256值。', 'c9e47948c5ab7b1e294279c9ec2d371ce8f75883b27cf97634adf552e4075ab7', 'true'],
    ['x-amz-date', 'string', 'hws和amazon请求的当前时间，格式如：20161026T005932Z。', '20220126T065102Z', 'true'],
    ['Host', 'string', '三方厂商Host。', 'hicinema-mmpmedia-test-cn.obs.cn-north-1.myhuaweicloud.com', 'true'],
    ['Content-Type', 'string', 'NSP不传x-nsp-content-type参数时默认“application/octet-stream”。', 'image', 'true'],
    ['user-agent', 'string', '客户端类型。', 'Java/1.8.0_272', 'true']
  }
/>


<strong>响应样例</strong>

```
{
  "data": {
    "partsHeaders": "etag;x-goog-generation",
    "partItems": [
      {
        "headers": {
          "Authorization": "AWS4-HMAC-SHA256 Credential=I06FNCS2OGN5YXWTTPZC/20220325/cn-north-1/s3/aws4_request, SignedHeaders=content-length;content-type;host;x-amz-content-sha256;x-amz-date, Signature=a4bc5c222cb60b7b4e1ea892c4e45ae224aae689b41af55ca3c4063e6c441c61",
          "x-amz-content-sha256": "96d6306634c89c25d31a5a240ed9f08f74cfc783b197bcf05c9b09965e65c709",
          "x-amz-date": "20220325T070155Z",
          "Host": "hicinema-mmpmedia-test-cn.obs.cn-north-1.myhuaweicloud.com",
          "Content-Type": "application/octet-stream"
        },
        "method": "PUT",
        "partObjectId": "",
        "partNumber": 1,
        "etag": "",
        "url": "https://hicinema-mmpmedia-test-cn.obs.cn-north-1.myhuaweicloud.comhttps://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/contentsrc/import/CP180162667662193730/mos/part/4f17e165-d643-4f4f-bf22-51a70b0c04ac:20260601224833:2800:5010830DEFB41FCD48EA744FD276911B020EF829B3E0C4CA67A4554CA48732A2.mp4?partNumber=1&uploadId=0000017FBFE0688585C678A73CC6F1A3",
        "status": 1
      },
      {
        "headers": {
          "Authorization": "AWS4-HMAC-SHA256 Credential=I06FNCS2OGN5YXWTTPZC/20220325/cn-north-1/s3/aws4_request, SignedHeaders=content-length;content-type;host;x-amz-content-sha256;x-amz-date, Signature=91821f15a60709d2406a729513c43c260876d727ac11928de4b21522d601b598",
          "x-amz-content-sha256": "d49edbf61cf7bd4092dd9b3cf7e6550b45ae514c9c8b811feed5ad8c84001830",
          "x-amz-date": "20220325T070155Z",
          "Host": "hicinema-mmpmedia-test-cn.obs.cn-north-1.myhuaweicloud.com",
          "Content-Type": "application/octet-stream"
        },
        "method": "PUT",
        "partObjectId": "",
        "partNumber": 2,
        "etag": "",
        "url": "https://hicinema-mmpmedia-test-cn.obs.cn-north-1.myhuaweicloud.comhttps://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/contentsrc/import/CP180162667662193730/mos/part/4f17e165-d643-4f4f-bf22-51a70b0c04ac:20260601224833:2800:5010830DEFB41FCD48EA744FD276911B020EF829B3E0C4CA67A4554CA48732A2.mp4?partNumber=2&uploadId=0000017FBFE0688585C678A73CC6F1A3",
        "status": 1
      },
      {
        "headers": {
          "Authorization": "AWS4-HMAC-SHA256 Credential=I06FNCS2OGN5YXWTTPZC/20220325/cn-north-1/s3/aws4_request, SignedHeaders=content-length;content-type;host;x-amz-content-sha256;x-amz-date, Signature=45f7a1f0329607245504085310839d04b62ffb5d63629c1e06bcec2dce30ca15",
          "x-amz-content-sha256": "78c543782a9b05a8962496ff37b1de4762e65677860788a2bc6465fe96825be5",
          "x-amz-date": "20220325T070155Z",
          "Host": "hicinema-mmpmedia-test-cn.obs.cn-north-1.myhuaweicloud.com",
          "Content-Type": "application/octet-stream"
        },
        "method": "PUT",
        "partObjectId": "",
        "partNumber": 3,
        "etag": "",
        "url": "https://hicinema-mmpmedia-test-cn.obs.cn-north-1.myhuaweicloud.comhttps://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/contentsrc/import/CP180162667662193730/mos/part/4f17e165-d643-4f4f-bf22-51a70b0c04ac:20260601224833:2800:5010830DEFB41FCD48EA744FD276911B020EF829B3E0C4CA67A4554CA48732A2.mp4?partNumber=3&uploadId=0000017FBFE0688585C678A73CC6F1A3",
        "status": 1
      }
    ]
  },
  "retCode": 0,
  "retMsg": "success"
}
```