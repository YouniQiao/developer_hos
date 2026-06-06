---
title: "@security/no-unsafe-kdf"
displayed_sidebar: toolsSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/ide_no-unsafe-kdf
format: md
---


# @security/no-unsafe-kdf

禁止使用不安全的KDF算法，包括PBKDF2|SHA1和HKDF|SHA1。推荐使用PBKDF2|SHA256和HKDF|SHA256，PBKDF2|SHA256算法描述详情参见：[密钥派生算法](`https://`developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/aegis-key-derivation-0000001861059318)。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@security/no-unsafe-kdf": "warn"
  }
}
```

#### 选项

该规则无需配置额外选项。

#### 正例

```
import cryptoFramework from '@ohos.security.cryptoFramework';
cryptoFramework.createKdf('PBKDF2|SHA256');

import cryptoFramework from '@ohos.security.cryptoFramework';
cryptoFramework.createKdf('HKDF|SHA256');
```

#### 反例

```
import cryptoFramework from '@ohos.security.cryptoFramework';
cryptoFramework.createKdf('PBKDF2|SHA1');

import cryptoFramework from '@ohos.security.cryptoFramework';
cryptoFramework.createKdf('HKDF|SHA1');
```

#### 规则集

```
plugin:@security/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
