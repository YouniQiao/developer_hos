---
title: "调用业务接口"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-process-5-0000001174557685
format: md
---

# 调用业务接口

调用单个广告账户的频次：所有接口调用总数为每分钟最多1200次；每天最多360,000次。

- <strong>请求示例</strong>

POST /openapi/v2/promotion/campaign/create HTTP/1.1

Accept:application/json

Content-Type:application/json

Authorization：Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=

\\{

"campaign\_name": "3333",

"product\_type": "WEB",

"daily\_budget": 100

\\}

- <strong>应答示例</strong>

HTTPS/1.1 200 OK

\\{

"code": 200,

"data":

\\{

"campaign\_id":"35003379"

\\}

\\}
