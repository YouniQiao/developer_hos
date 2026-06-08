---
title: "@typescript-eslint/brace-style"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide_brace-style
format: md
upstream_id: tools/coding-debug/ide_brace-style
last_sync: 2026-06-07
sync_hash: 70132972
upstream_hash: 9f786bf23a4f
---

# @typescript-eslint/brace-style

对代码块强制执行一致的括号样式。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/brace-style": "error"
  }
}
```

#### 选项

详情请参考[@typescript-eslint/brace-style选项](`https://`eslint.nodejs.cn/docs/rules/brace-style#选项)。

#### 正例

```
function foo(): boolean {
  return true;
}

class C {
  static {
    foo();
  }

  public meth() {
    foo();
  }
}

export { C };
```

#### 反例

```
function foo(): boolean
{
  return true;
}

class C {
  static
  {
    foo();
  }

  public meth()
  {
    foo();
  }
}

export { C };
```

#### 规则集

```
plugin:@typescript-eslint/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
