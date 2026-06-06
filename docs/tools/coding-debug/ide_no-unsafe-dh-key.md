---
title: "@security/no-unsafe-dh-key"
displayed_sidebar: toolsSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/ide_no-unsafe-dh-key
format: md
---


# @security/no-unsafe-dh-key

该规则禁止使用不安全的DH密钥，如DH模数长度小于2048bit。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@security/no-unsafe-dh-key": "error"
  }
}
```

#### 选项

该规则无需配置额外选项。

#### 正例

```
import cryptoFramework from '@ohos.security.cryptoFramework';
cryptoFramework.createAsyKeyGenerator('DH_modp3072');
```

#### 反例

```
import cryptoFramework from '@ohos.security.cryptoFramework';
cryptoFramework.createAsyKeyGenerator('DH_modp1536');
```

#### 规则集

```
plugin:@security/recommended
plugin:@security/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
