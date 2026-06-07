---
title: "文件上传"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketapi-fileupload-0000001135467022
format: md
---

# 文件上传

## 功能介绍

新建素材前，上传素材文件到AGC Cloud Storage平台。

## 使用约束

- 文件最大支持50M。
- 接口调用者的角色：账号持有者、管理员、App管理员、运营。

## 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS PUT |
| 接口方向 | 开发者服务器-&gt;AGC Cloud Storage服务端 |
| 接口URL | https://ops-server-drcn.agcstorage.link/v0/agpromotion-8zz2x/\\{userid\\}/\\{filename\\} |
| 数据格式 | 请求消息：Content-Type: application/octet-stream  响应消息：Content-Type: application/json |

## 请求参数

### Path

| <strong>参数</strong> | <strong>必选(M)/可选(O)</strong> | <strong>参数类型</strong> | <strong>描述</strong> |
| --- | --- | --- | --- |
| userid | M | String | 登录[华为应用市场应用推广平台](https://ads.huawei.com/cn/)后在“我的账号信息”中查看到的“客户ID”。   - 直客投放时，请直接使用您的账户获取。 - 授权合作伙伴投放时，该字段请使用<strong>投放操作账户</strong>获取。 |
| filename | M | String | 文件名，和[新增素材](/docs/monetize/promotion/marketapi-addmaterial-0000001135626812)中的文件名保持一致。 |

### Header

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| Host | M | String | 域名，提供存储开放能力的agc cloud storage的区域存储域名。  固定为：ops-server-drcn.agcstorage.link |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer $\\{access\_token\\}”。access\_token为[获取Token](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-obtain_token-0000001158365043)中获取的access\_token。  client\_id使用固定值：626003618444620160  client\_secret使用固定值：E7DAB4B9DE6BC23FF611CB6D93CEE2427DD77C4B252CD5DED7486BC28B5B82AB |
| client\_id | M | String | 客户端标识，固定为：626003618444620160。 |
| productId | M | String | 项目ID，固定为：736430079245712275。 |

### Body

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| 本地文件 | M | Binary | 参考[调用示例](#section145575382294)通过文件流上传。 |

## 请求示例

```
PUT https://ops-server-drcn.agcstorage.link/v0/agpromotion-8zz2x/40086000000001839/3.jpg HTTP/1.1
Host: ops-server-drcn.agcstorage.link
User-Agent: CJT_TEST_AGENT /0.8
Authorization: Bearer ***
client_id: 626003618444620160
productId: 736430079245712275
```

## 响应参数

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| uploadStatus | M | String | 上传的状态：   - resumable：断点续传 - finalize：上传完成 |
| receiveBytes | O | Long | 已上传字节，从0开始，只支持顺序上传，文件未上传完毕，返回该字段。 |
| fileInfo | O | [FileInfo](/docs/monetize/promotion/marketapi-modle-fileinfo-0000001181946371) | 文件的详细信息。 |

## 响应示例

```
{
 "fileInfo": {
  "updateTime": "2021-05-21T03:03:51Z",
  "storageType": "STANDARD",
  "name": "70086000000108830\/3.jpg",
  "contentType": "application\/octet-stream",
  "size": 73834,
  "bucket": "agpromotion-8zz2x",
  "createTime": "2021-05-21T03:03:51Z",
  "storageArea": "CN"
 },
 "uploadStatus": "finalize"
}
```

## 调用示例

```
“Java”
public static void main(String[] args) {
    String str = "";
    File file = new File({filename});
    String mimeType = new MimetypesFileTypeMap().getContentType(file);
    try {
        str = new RequestManager().upload(createHttpHeader(
                        getHttpHeaders()),
                        getHttpUrl({userid}, {filename}),
                        file.getCanonicalPath(),
                        mimeType);
    } catch (UnsupportedEncodingException e) {
        System.err.println(e.getMessage());
    } catch (IOException a) {
        System.err.println(a.getMessage());
    }
}

private static Header[] createHttpHeader(Map<String, String> reqHeaders) {
    Header[] httpHeaders = new Header[reqHeaders.size()];
    Set<Map.Entry<String, String>> headers = reqHeaders.entrySet();
    int index = 0;
    for (Map.Entry<String, String> head : headers) {
        Header ele = new BasicHeader(head.getKey(), head.getValue());
        httpHeaders[index++] = ele;
    }
    return httpHeaders;
}

private static Map<String, String> getHttpHeaders() {
    Map<String, String> headers = new HashMap<>();
    headers.put("Host", "ops-server-drcn.agcstorage.link");
    headers.put("Authorization", {Authorization});
    headers.put("client_id", "626003618444620160");
    headers.put("productId", "736430079245712275");
    return headers;
}

private static String getHttpUrl(String userId, String fileName) throws UnsupportedEncodingException {
    return "https://ops-server-drcn.agcstorage.link" +
            "/v0/" +
            "agpromotion-8zz2x" +
            "/" + userId + "/" +
            URLEncoder.encode(fileName, BaseConstants.ENCODING).replaceAll("\\+", "%20");
}
```
