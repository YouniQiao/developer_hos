---
title: "@performance/hp-arkui-suggest-use-get-anonymousid-async"
displayed_sidebar: toolsSidebar
format: md
---


# @performance/hp-arkui-suggest-use-get-anonymousid-async

建议在主线程中通过异步获取IFAA免密认证的匿名化ID。

高耗时函数处理场景下，建议优先修改。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@performance/hp-arkui-suggest-use-get-anonymousid-async": "suggestion",
  }
}
```

#### 选项

该规则无需配置额外选项。

#### 正例

```
import { ifaa } from '@kit.OnlineAuthenticationKit'
import { BusinessError } from '@kit.BasicServicesKit';

// 开发者需要按照IIFAA的TLV格式构造入参，并转换为Uint8Array参数；此处arg需要开发者替换为真实入参。
let arg = new Uint8Array([0]);
let getAnonIdPromise: Promise<Uint8Array> = ifaa.getAnonymousId(arg);
getAnonIdPromise.then(result => {
  console.info("Succeeded in doing getAnonymousId.");
  // 开发者处理result
}).catch((err: BusinessError) => {
  console.error(`Failed to call getAnonymousId. Code: ${err.code}, message: ${err.message}`);
});
```

#### 反例

```
import { ifaa } from '@kit.OnlineAuthenticationKit'

// 开发者需要按照IIFAA的TLV格式构造入参，并转换为Uint8Array参数；此处arg需要开发者替换为真实入参。
let arg = new Uint8Array([0]);
let getAnonIdResult: Uint8Array = ifaa.getAnonymousIdSync(arg);
```

#### 规则集

```
plugin:@performance/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
