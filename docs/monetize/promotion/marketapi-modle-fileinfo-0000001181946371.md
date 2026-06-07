---
title: "FileInfo"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketapi-modle-fileinfo-0000001181946371
format: md
---

# FileInfo

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| name | M | String | 文件名。 |
| bucket | M | String | 存储的桶名。 |
| storageArea | M | String | 存储的区域。 |
| storageType | M | String | 存储的类型。 |
| contentType | M | String | 文件类型，Content-Type标头告诉客户端实际返回的内容类型。 |
| contentDisposition | O | String | 文件打开方式，响应头指示回复的内容该以何种形式展示，是以<strong>内联</strong>的形式（即网页的一部分），还是以<strong>附件</strong>的形式下载并保存到本地。 |
| cacheControl | O | String | 标准HTTP请求头Cache-Control。   - public：文件可缓存到任何位置。 - private：文件可以缓存到请求者的本地缓存中。 - no-cache：文件可以缓存，但有请求发出时，缓存会将此请求发到服务器，服务器验证请求中所描述的缓存是否过期，若未过期，返回304，缓存可使用，否则不可使用。 - no-store：缓存中不得存储任何关于客户端请求和服务端响应的内容。 - max-age=TIME\_IN\_SECONDS：文件可缓存的时长。 |
| contentEncoding | O | String | 标准HTTP请求头Content-Encoding，是一个实体消息首部，用于对特定媒体类型的数据进行压缩。当这个首部出现的时候，它的值表示消息主体进行了何种方式的内容编码转换。 |
| contentLanguage | O | String | 标准HTTP请求头Content-Language，用来说明访问者希望采用的语言或语言组合，这样的话用户就可以根据自己偏好的语言来定制不同的内容。 |
| sha256 | O | String | 文件sha256值。 |
| size | M | long | 文件大小。 |
| createTime | M | String | 上传时间，时间日期格式:yyyy-MM-ddTHH:mm:ssZ。 |
| updateTime | M | String | 更新时间，时间日期格式:yyyy-MM-ddTHH:mm:ssZ。 |
| metadata | O | Map&lt;String,String&gt; | 元数据，用户自定义元数据。 |
