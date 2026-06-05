---
title: "@performance/crypto-replacement-check"
displayed_sidebar: toolsSidebar
format: md
---


# @performance/crypto-replacement-check

对于三方库@ohos/crypto-js所提供的大部分接口，SDK中若有对应的系统原生实现（@ohos.security.cryptoFramework），建议使用系统原生接口。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@performance/crypto-replacement-check": "warn",
  }
}
```

#### 选项

该规则无需配置额外选项。

#### 正例

```
import cryptoFramework from '@ohos.security.cryptoFramework';
// MD5加密
let md = cryptoFramework.createMd('MD5');
```

#### 反例

```
import { CryptoJS } from '@ohos/crypto-js';

/**
 * 安装库：ohpm install @ohos/crypto-js
 */

// MD5加密
let mdOutput = CryptoJS.MD5('Message');
```

#### 规则集

```
plugin:@performance/recommended
plugin:@performance/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
