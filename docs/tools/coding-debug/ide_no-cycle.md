---
title: "@security/no-cycle"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide_no-cycle
format: md
upstream_id: tools/coding-debug/ide_no-cycle
last_sync: 2026-06-07
sync_hash: a6c0dcb2
---
# @security/no-cycle

该规则禁止使用循环依赖。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@security/no-cycle": "error"
  }
}
```

#### 选项

该规则无需配置额外选项。

#### 正例

```
// foo.ets
import {} from './bar';

// bar.ets
import {} from './index';
```

#### 反例

```
// foo.ets
import {} from './bar';

// bar.ets
import {} from './foo';
```

![](./img/note_3.0-zh-cn.png)

反例中foo.ets文件依赖了bar.ets文件，bar.ets文件同时依赖了foo.ets文件，造成了循环依赖。

#### 规则集

```
plugin:@security/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
