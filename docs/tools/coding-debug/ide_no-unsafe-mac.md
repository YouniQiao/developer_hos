---
title: "@security/no-unsafe-mac"
displayed_sidebar: toolsSidebar
format: md
---


# @security/no-unsafe-mac

该规则禁止在[MAC消息认证算法](`https://`developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/aegis-message-authentication-code-calculation-0000001907018769)中使用不安全的哈希算法，例如SHA1。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@security/no-unsafe-mac": "warn"
  }
}
```

#### 选项

该规则无需配置额外选项。

#### 正例

```
import cryptoFramework from '@ohos.security.cryptoFramework';
import { CryptoJS } from '@ohos/crypto-js';
cryptoFramework.createMac('SHA256');
CryptoJS.HmacSHA256('Message').toString();
```

#### 反例

```
import cryptoFramework from '@ohos.security.cryptoFramework';
import { CryptoJS } from '@ohos/crypto-js';
cryptoFramework.createMac('SHA1');
CryptoJS.HmacSHA1('Message').toString();
```

#### 规则集

```
plugin:@security/recommended
plugin:@security/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
