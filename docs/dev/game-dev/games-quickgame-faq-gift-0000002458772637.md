---
title: "礼包"
original_url: /docs/dev/game-dev/games-quickgame-faq-gift-0000002458772637
format: md
---


## 兑换直达礼包签名在服务器侧验证不通过，应该如何处理？

请对以下项目进行自检：

1. 确保sign没有参与验签。
2. 检查客户端和服务端公私钥是否配对一致。
3. 比对进行签名的源串，需对参数值进行urlEncode。
4. 如果验签失败，请对收到的sign字段进行urlDecode后再进行验签。
5. 确保Response的Content Type设置为application/json，以保证中文传输是正常的。
6. 如果是php语言，需要检查urlencode的结果。比如“+”进行urlencode后的标准结果是%2B，php语言的结果可能是20%。
