---
title: "@performance/hp-arkui-use-id-in-get-resource-sync-api"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide_hp-arkui-use-id-in-get-resource-sync-api
format: md
upstream_id: tools/coding-debug/ide_hp-arkui-use-id-in-get-resource-sync-api
last_sync: 2026-06-07
sync_hash: bd1042fb
---
# @performance/hp-arkui-use-id-in-get-resource-sync-api

在使用API getColorSync和getStringSync时建议带id版本。

高耗时函数处理场景下，建议优先修改。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@performance/hp-arkui-use-id-in-get-resource-sync-api": "suggestion",
  }
}
```

#### 选项

该规则无需配置额外选项。

#### 正例

```
import { BusinessError } from '@ohos.base';

try {
  // 本地resources中配置的color资源
  this.context.resourceManager.getColorSync($r('app.color.test').id);
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`getColorSync failed, error code: ${code}, message: ${message}.`);
}
```

#### 反例

```
import { BusinessError } from '@ohos.base';

try {
  // 本地resources中配置的color资源
  this.context.resourceManager.getColorSync($r('app.color.test'));
} catch (error) {
  let code = (error as BusinessError).code;
  let message = (error as BusinessError).message;
  console.error(`getColorSync failed, error code: ${code}, message: ${message}.`);
}
```

#### 规则集

```
plugin:@performance/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
