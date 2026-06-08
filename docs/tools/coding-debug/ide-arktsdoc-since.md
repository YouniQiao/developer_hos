---
title: "@since"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide-arktsdoc-since
format: md
upstream_id: tools/coding-debug/ide-arktsdoc-since
last_sync: 2026-06-07
sync_hash: d1816104
---
# @since

@since标签表示在特定版本中添加了类、方法或其他符号。

#### 语法

@since &lt;versionDescription&gt;

#### 示例

使用 @since：

```
/**
 * Provides access to user information.
 * @since 1.0.1
 */
export function UserRecord(): void {}
```
