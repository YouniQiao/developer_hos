---
title: "@performance/start-window-icon-check"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide-start-window-icon-check
format: md
upstream_id: tools/coding-debug/ide-start-window-icon-check
last_sync: 2026-06-07
sync_hash: ec68c228
---
# @performance/start-window-icon-check

启动页图标分辨率建议不超过256 \* 256，[冷启动响应时延场景](`https://`developer.huawei.com/consumer/cn/doc/best-practices/bpta-application-cold-start-optimization#section5953164714132)下，建议优先修改。

![](./img/note_3.0-zh-cn.png)

* 在检查整个工程时，该规则才生效。
* code-linter.json5配置文件中的[overrides](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter#section19310459444)和[ignore](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter#section19310459444)字段对该规则不生效。
* 若想关闭该规则检查，可将code-linter.json5配置文件中[rules](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter#section19310459444)字段设置为off。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@performance/start-window-icon-check": "suggestion",
  }
}
```

#### 选项

该规则无需配置额外选项。

#### 正例

1、entry/src/main/module.json5中的mainElement对应的ability中配置了startWindowIcon

2、entry/src/main/resources/base/media目录下对应的图片文件分辨率小于等于256\*256

#### 反例

1、entry/src/main/module.json5中的mainElement对应的ability中配置了startWindowIcon

2、entry/src/main/resources/base/media目录下对应的图片文件分辨率大于256\*256

#### 规则集

```
plugin:@performance/recommended
plugin:@performance/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
