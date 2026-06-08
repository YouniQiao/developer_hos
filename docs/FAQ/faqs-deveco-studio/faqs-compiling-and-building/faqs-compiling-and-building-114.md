---
format: md
title: "编译报错“generate SignerBlock failed”"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-114
upstream_id: FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-114
last_sync: 2026-06-07
sync_hash: 408f5c33
---
**问题现象**

编译构建时，出现错误：生成 SignerBlock 失败。

```
hap-sign-tool: error: {errorcode:0,message:generate SignerBlock failed}
```

**错误原因**

签名用的公私钥对不匹配，使用私钥签名后，公钥验签失败。请确保私钥（keyalias）和公钥（appCertPath）配对使用。

**场景**

1. 本地生成签名材料时，未导出正确的 keyalias 对应的 csr（证书请求文件），导致生成的证书公钥与 keyalias 对应的私钥不匹配。
2. 签名过程参数填写错误，使用了错误的keyalias或appCertPath文件。

**解决方案**

请选择正确的keyalias和appCertPath文件。
