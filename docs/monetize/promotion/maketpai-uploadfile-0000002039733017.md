---
title: "上传文件"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/maketpai-uploadfile-0000002039733017
format: md
---

# 上传文件

## 功能介绍

您可以使用Marketing API上传文件，文件上传地址url，然后上传人群包文件数据。（注意：文件上传地址url具有时效性，人群文件需要在获取到url后的15分钟内上传，否则url失效）

## 使用约束

接口调用者的角色：仅支持直客调用

同一个开发者，近30天内调用接口的上限为600次

单个人群包文件数据的上传大小限制：&lt;=1GB（包体大小超过1GB时，需要把人群包拆分成多个包上传，每个包的上传地址单独获取）

## 接口原型

|  |  |
| --- | --- |
| <strong>承载协议</strong> | 获取接口返回的方法,例如接口返回PUT，填写PUT |
| <strong>接口方向</strong> | 开发者服务器 -&gt; 推广平台服务端 |
| <strong>接口URL</strong> | 获取上传信息接口响应的"url" |

## 请求参数

### header

| <strong>参数</strong> | <strong>必选(M)/可选(O)</strong> | <strong>类型</strong> | <strong>描述</strong> |
| --- | --- | --- | --- |
| Authorization | O | String | 获取上传信息接口返回的Authorization信息 |
| x-amz-content-sha256 | M | String | 获取上传信息接口返回的x-amz-content-sha256信息 |
| x-amz-client-request-id | O | String | 获取上传信息接口返回的x-amz-client-request-id信息 |
| x-amz-date | M | String | 获取上传信息接口返回的x-amz-date信息 |
| connection | O | String | 获取上传信息接口返回的connection信息 |
| Host | M | String | 获取上传信息接口返回的Host信息 |
| Content-Type | M | String | 获取上传信息接口返回的Content-Type信息 |
| user-agent | M | String | 获取上传信息接口返回的user-agent信息 |

### Body

| <strong>参数</strong> | <strong>必选(M)/可选(O)</strong> | <strong>类型</strong> | <strong>描述</strong> |
| --- | --- | --- | --- |
| file | M | File | 本地需要上传的文件（txt文件） |

## 调用示例——上传文件数据

```
“java代码演示”
private static final HttpClient HTTP_CLIENT2 = HttpClients.custom().build();
 
    private Header[] getResHeaders(String jsonRes) {
        JSONObject resJsonObj = JSONObject.parseObject(jsonRes);
        JSONObject jsonObject = (JSONObject)resJsonObj.get("headers");
        Header[] httpHeaders = new Header[jsonObject.size()];
        Set<Map.Entry<String, Object>> headers = jsonObject.entrySet();
        int i = 0;
        for (Map.Entry<String, Object> head : headers) {
            Header ele = new BasicHeader(head.getKey(), (String)head.getValue());
            httpHeaders[i++] = ele;
        }
        return httpHeaders;
    }
 
    public String upload(Header[] httpHeaders, String url, File file) {
        HttpEntity entity = new FileEntity(file);
        HttpPut httpReq = new HttpPut(url);
        httpReq.setHeaders(httpHeaders);
        httpReq.setEntity(entity);
        String result;
        try {
            HttpResponse hr = HTTP_CLIENT2.execute(httpReq);
            result = String.valueOf(hr.getStatusLine().getStatusCode());
        } catch (ParseException var10) {
            result = "500";
        } catch (ClientProtocolException var11) {
            result = "300";
        } catch (IOException var12) {
            result = "400";
        } finally {
            httpReq.releaseConnection();
        }
        return result;
    }
```
