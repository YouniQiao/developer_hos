---
title: "@correctness/redundant-dependency-check"
displayed_sidebar: toolsSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/ide-redundant-dependency-check
format: md
---


# @correctness/redundant-dependency-check

建议删除冗余的依赖配置。冗余依赖会增加依赖加载和解析时间，影响代码质量。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@correctness/redundant-dependency-check": "suggestion"
  }
}
```

#### 选项

该规则无需配置额外选项。

#### 正例

1. 在 entry 下的oh-package.json5文件中配置了a、b、c三个依赖，entry/src/main/ets中的文件中全部 import 导入。

2. 在工程级的oh-package.json5文件中配置了a、b、c三个依赖，整个工程全部 import 导入。

#### 反例

1. 在 entry 下的oh-package.json5文件中配置了a、b、c三个依赖，但entry/src/main/ets中的文件中只 import 导入了a,b两个依赖。

2. 在工程级的oh-package.json5文件中配置了a、b、c三个依赖，但整个工程只 import 导入了a,b两个依赖。

#### 规则集

```
plugin:@correctness/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
