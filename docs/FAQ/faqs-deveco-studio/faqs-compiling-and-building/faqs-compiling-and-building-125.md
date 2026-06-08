---
title: "如何解决第三方包require语句报错"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-125
format: md
upstream_id: FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-125
last_sync: 2026-06-07
sync_hash: 6c16aba1
---
**问题现象**

引入第三方包时，编译出现错误。

**报错原因**

部分第三方包由npm迁移而来，其开发环境为Node。其中的require语法ArkCompiler不完全支持，导致运行时出现错误。

**场景1**：

```
// Module/src/test.json
{a: 1, b: 2}
//use.js
let test = require("Module/src/test.json")
```

**需修改为：**

// Module/src/test.json

```
module.exports = {a: 1, b: 2}
```

//use.js

```
let test = require("Module/src/test")
```

**场景2：**

```
// Module/package.json
...
main: "./src"
...
// use.js
let module = require("Module")
```

**需修改为：**

// Module/package.json

```
"main": "./src/index.js",
```

// use.js

```
let module = require("Module")
```

**场景3：**

编译时出现警告信息：

```
Plugin node-resolve: preferring built-in module 'util' over local alternative at '/Users/~/Documents/fe-module/demo/node_modules/util/util.js', pass 'preferBuiltins: false' to disable this behavior or 'preferBuiltins: true' to disable this warning
```

**解决方案**

修改rollup.config.js中的preferBuiltins字段。

```
plugins: [
    resolve({
        preferBuiltins: false,    // true or false
        mainFields: ['module', 'main'],
        extensions
    })
];
```

**场景4：**

```
import {Buffer} from 'buffer'
```

**需修改为：**

```
import {Buffer} from 'buffer/'
```
