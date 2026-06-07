---
format: md
title: "http请求响应为空，报错:'The request has been canceled or the number of requests exceeds 100'"
original_url: /docs/FAQ/faqs-system-development/faqs-network/faqs-network-kit/faqs-network-22
---


这条错误信息是判断当前不存在httpRequest对象，原因则可能是httpRequest请求次数超过100次，导致创建失败，或者是被调用了destroy方法删掉了导致请求失败。
