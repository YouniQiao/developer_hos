---
title: "授权登录/解授权"
displayed_sidebar: xiaoyiSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/service/authorize-deauthorize-0000002505921274
---

# 授权登录/解授权

Agent Client发送从账号获取的授权码给Agent Server：

```
curl 'https://xxx/agent/message' \
-H 'Content-Type: application/json’ \
-H 'agent-session-id:8f01f3d172cd4396a0e535ae8aec6687 ’\
-d ‘{
    "jsonrpc": "2.0",
    "id": "{{与agent-server通信的全局唯一消息序列号，字符串表示}}",
    "method": "authorize",
    "params": {
        "message": {
            "role": "user",
            "parts": [{
                "kind": "data",
                "data": {
                    "authCode": "{{宿主APP代智能体从华为账号获取用户授权后的授权码}}"
                }
            }]
        }
    }
}'
```

Agent Client获取Agent Server授权响应：

```
{
    "jsonrpc": "2.0",
    "id": "{{与agent-server通信的全局唯一消息序列号，从请求中取出该字段返回}}",
    "result": {
        "version": "1.0",
         "agentLoginSessionId": "{{agent server在用户登录成功后返回的用户登录凭证唯一ID}}"
    },
    "error": {
        "code": "{{JSONRPCError错误码， 整形或字符串类型，0表示成功}}",
        "message": "{{JSONRPCError错误描述}}"
    }
}
```

Agent Client发送解除账号授权消息给Agent Server：

```
curl 'https://xxx/agent/message' \
-H 'Content-Type: application/json’ \
-H 'agent-session-id:a9bb617f2cd94bd585da0f88ce2ddba2 ’\
-d ‘{
    "jsonrpc": "2.0",
    "id": "{{与agent-server通信的全局唯一消息序列号，字符串表示}}",
    "method": "deauthorize",
    "params": {
        "message": {
            "role": "user",
            "parts": [{
                "kind": "data",
                "data": {
                    "agentLoginSessionId": "{{agent server在用户登录成功后返回的会话凭证唯一ID}}",
                    "cpUserId": "{{agent server在支付场景下返回的标识CP侧用户唯一标识符的ID}}"
                }
            }]
        }
    }
}'
```

Agent Client获取Agent Server解除授权响应：

```
{
    "jsonrpc": "2.0",
    "id": "{{与agent-server通信的全局唯一消息序列号，从请求中取出该字段返回}}",
     "result": {
        "version": "1.0",
     },
    "error": {
        "code": "{{JSONRPCError错误码， 整形或字符串类型，0表示成功}}",
        "message": "{{JSONRPCError错误描述}}"
    }
}
```

此外，如果返回给用户的正文中需要提示账号登录才能返回处理结果，可以用**“**superlink://vassistant?hwIdAuth=phone&appId=\{\{智能体账号绑定中配置的APP ID\}\}&agentId=\{\{智能体的agentId\}\}”作为markdown中提示文本的超链接返回。

agentLoginSessionId要返回给APP客户端侧，APP客户端侧要把该字段持久化到本地，在后续agent client向agent server发起建链请求时，可以使用该字段作为用户已登录凭证。
