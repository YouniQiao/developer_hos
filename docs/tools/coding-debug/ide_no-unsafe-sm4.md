---
title: "@security/no-unsafe-sm4"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide_no-unsafe-sm4
format: md
upstream_id: tools/coding-debug/ide_no-unsafe-sm4
last_sync: 2026-06-07
sync_hash: d70e1d41
---
# @security/no-unsafe-sm4

此规则禁止不安全的SM4算法，如加密模式ECB。推荐使用SM4\_CBC\_PKCS5Padding等不同算法，详情参见：[对称加解密算法](`https://`developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/aegis-encryption-and-decryption-symmetry-0000001861247310)。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@security/no-unsafe-sm4": "warn"
  }
}
```

#### 选项

该规则无需配置额外选项。

#### 正例

```
import cryptoFramework from '@ohos.security.cryptoFramework';
cryptoFramework.createKdf('SM4_128|CBC|PKCS7')
```

#### 反例

```
import cryptoFramework from '@ohos.security.cryptoFramework';
cryptoFramework.createCipher('SM4_128|ECB|PKCS7')
```

#### 规则集

```
plugin:@security/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
