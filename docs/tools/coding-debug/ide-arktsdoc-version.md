---
title: "@version"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide-arktsdoc-version
format: md
upstream_id: tools/coding-debug/ide-arktsdoc-version
last_sync: 2026-06-07
sync_hash: 38a61992
---
# @version

@version标签用于记录项目的版本。

#### 语法

@version &lt;version&gt;

#### 示例

使用 @version 标签：

```
/**
 * Calculates the square root of a number.
 * @version 1.2.3
 */
export function sqrt(x: number): number {
  return Math.sqrt(x);
}
```
