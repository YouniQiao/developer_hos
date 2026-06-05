---
title: "视频分段上传初始化"
displayed_sidebar: contentDistSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/content/video-multipart-initialization-0000001270807809
format: md
---


# 视频分段上传初始化

该接口用于分段上传视频到文件服务器，先初始化上传获取videoId。

Scope：https://www.huawei.com/contentconnect/video

视频文件要求：

* 为了更好的观看体验，推荐上传16:9或者9:16，分辨率为720p（1280x720或者720x1280）及以上的视频。
* 支持常用视频格式，推荐使用 mp4 、mov。
* 带品牌logo或品牌水印的视频，会命中华为视频的审核逻辑，有比较大的概率导致视频发布失败。强烈建议第三方应用自行处理好分享内容中的不合规水印。
* 视频审核逻辑与在百花号门户上传审核逻辑一致。
* 上传的临时文件会保留7日，7日内未在/video/create接口使用此videoId，7日后会删除上传的临时文件。
* 视频文件小于15M必须使用整体上传，小于300M推荐整体上传。

<strong>请求地址</strong>

POST /mosopenapi/v2/foruser/video/part/init

<strong>请求参数说明</strong>

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| 参数名称 | 参数类型 | 参数描述 | 参数示例 | 是否必须 |
| upResourceId | string | UP主的id标识，upResourceId和tpUserCode不能同时为空。 | 492456389055106944  为/list/users接口获取的upInfos中的upResourceId。 | false |
| tpUserCode | string | UP主的第三方标识，upResourceId和tpUserCode不能同时为空。 | hwvrmgjxmt | false |
| fileName | string | 文件名称，必须带文件后缀，后缀仅支持mp4和mov。 | 123.mp4 | true |
| sha256 | string | 文件生成的签名，签名生成算法参见“[算法介绍](https://developer.huawei.com/consumer/cn/doc/distribution/content/algorithm-introduction-0000001270645741)”。 | 34b234424d98dcb064a71a862835527ff3b5d38ec06cd98a3289c0028108322f | true |
| length | string | 文件大小，单位为Bytes。 | 1024 | true |

<strong>请求样例</strong>

```
{
  "upResourceId": "674482848291436800",
  "fileName": "061.mp4",
  "sha256": "2c2c1b3b6a4dda31f226daef49a284b0817ab5d641cabaec3995551fd13bdd18",
  "length": "23995735"
}
```

<strong>响应参数</strong>

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| 参数字段 | 参数类型 | 参数描述 | 参数示例 | 是否必须 |
| videoId | string | 视频唯一id。 | 492456389055106956 | true |
| uploadId | string | 文件服务器上传id。 | 0000017E9558B79885CD1FB78E34703E | true |
| partSize | string | 分段大小，单位Bytes。 | 15728640 | true |

<strong>响应样例</strong>

```
{
  "data": {
    "uploadId": "0000017FBFE1A4FF8051B400E5671B92",
    "partSize": "10485760",
    "videoId": "854964498950495104"
  },
  "retCode": 0,
  "retMsg": "success"
}
```