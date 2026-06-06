---
title: "@security/no-unsafe-3des"
displayed_sidebar: toolsSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/ide-no-unsafe-3des
format: md
---


# @security/no-unsafe-3des

该规则禁止使用不安全的3DES加密模式，例如3DES|ECB。建议使用安全的3DES加密模式，例如3DES|CBC。详情参考[3DES加密模式](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-sym-encrypt-decrypt-spec#section3des)。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@security/no-unsafe-3des": "error"
  }
}
```

#### 选项

该规则无需配置额外选项。

#### 正例

```
import cryptoFramework from '@ohos.security.cryptoFramework';
cryptoFramework.createCipher('3DES|CBC');
```

#### 反例

```
import cryptoFramework from '@ohos.security.cryptoFramework';
cryptoFramework.createCipher('3DES|ECB');
```

#### 规则集

```
plugin:@security/recommended
plugin:@security/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
