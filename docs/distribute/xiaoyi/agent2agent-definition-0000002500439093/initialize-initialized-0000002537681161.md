---
title: "初始化/初始化完成"
displayed_sidebar: xiaoyiSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/service/initialize-initialized-0000002537681161
---

# 初始化/初始化完成

Agent Client通知Agent Server服务器-服务器之间通信初始化：

```
curl 'https://xxx/agent/message' \
-H 'Content-Type: application/json' -H 'Authorization: Bearer <your-api-key>' \
-d '{
    "jsonrpc": "2.0",
    "id": "{{与agent-server通信的全局唯一消息序列号，字符串表示}}",
    "method": "initialize",
 }'
```

Agent Client获取Agent Server服务器-服务器之间通信响应报文：

```
{
    "jsonrpc": "2.0",
    "id": "{{与agent-server通信的全局唯一消息序列号，从请求中取出该字段返回}}",
    "result": {
        "version": "1.0",
        "agentSessionId": "{{agent-server在接口认证通过后返回的唯一会话标识符，后续在请求agent server时在header中使用agent-session-id字段存放该值作为访问凭证}}",
        "agentSessionTtl": "{{agentSessionId的有效期，单位秒，一般建议设置7天有效期}}",
    },
    "error": {
        "code": "{{JSONRPCError错误码，字符串或整形，0表示成功}}",
        "message": "{{JSONRPCError错误描述}}"
    }
}
```

Agent Client通知Agent Server初始化完成：

```
curl 'https://xxx/agent/message' \
-H 'Content-Type: application/json’ \
-H 'agent-session-id:8f01f3d172cd4396a0e535ae8aec6687 ’\
-d '{
    "jsonrpc": "2.0",
    "id": "{{与agent-server通信的全局唯一消息序列号，字符串表示}}",
    "method": "notifications/initialized"
}'
```

HTTP返回200状态码即可，无响应。
