---
title: "文件没有默认导出，但可以默认导入的场景说明"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-134
format: md
upstream_id: FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-134
last_sync: 2026-06-07
sync_hash: 57698dc1
---
**问题现象**

当声明文件没有默认导出时，使用 import xxx from 'module' 导入不会导致编译不会报错。

```
// test.d.ts file
export const addFunction: {
  add: (a: number, b: number) => number
}
```

```
// index.ets file
import test from './test'

test.addFunction.add(1,2)
```

**原因说明**

此场景编译时不报错，因为配置文件中开启了allowSyntheticDefaultImports选项。该选项不仅允许没有默认导出的声明文件默认导入，还兼容从使用 CommonJS（require）导出模块的库中导入默认导出（default exports），例如可以默认导入像 React 这样的第三方库。

**React 示例：安装 `@types/react` 包，使用默认导入的方式，编译不报错。**

```
import  React  from "react";
React.useId()
```

**CommonJS 示例：用默认导入方式导入 CommonJS 模块**。

```
// 编译文件
import allFunction from 'library'

allFunction.sub(1,2)
```

```
// 依赖包的实现文件 index.js
function sub(a, b) {
    return a - b
}

var allFunction = { sub }
module.exports = allFunction
```

**解决方案**

如果源码文件没有默认导出，可以尝试使用import \* as xx from 'xxx'导入。
