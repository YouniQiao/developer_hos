---
title: "@security/no-unsafe-dh"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide_no-unsafe-dh
format: md
upstream_id: tools/coding-debug/ide_no-unsafe-dh
last_sync: 2026-06-07
sync_hash: ad7a18b8
upstream_hash: ec111610a411
---

# @security/no-unsafe-dh

该规则禁止使用不安全的DH密钥协商算法，如DH模数长度小于2048bit。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@security/no-unsafe-dh": "error"
  }
}
```

#### 选项

该规则无需配置额外选项。

#### 正例

```
import cryptoFramework from '@ohos.security.cryptoFramework';
cryptoFramework.createKeyAgreement('DH_modp3072');
```

#### 反例

```
import cryptoFramework from '@ohos.security.cryptoFramework';
cryptoFramework.createKeyAgreement('DH_modp1536');
```

#### 规则集

```
plugin:@security/recommended
plugin:@security/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
