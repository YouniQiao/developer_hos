---
displayed_sidebar: appDevSidebar
title: "如何解析华为CDN场景下manifestUrl对应的xml文件"
original_url: /docs/dev/app-dev/graphics/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-assetdownload-faq/graphics-accelerate-assetdownload-faq-5
format: md
upstream_id: dev/app-dev/graphics/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-assetdownload-faq/graphics-accelerate-assetdownload-faq-5
last_sync: 2026-06-07
sync_hash: b6349e4d
---
推荐使用[@ifbear/fast-xml-parser](https://ohpm.openharmony.cn/#/cn/detail/@ifbear%2Ffast-xml-parser)。

执行如下命令行，安装依赖。

```
To use as package dependency $ ohpm install @ifbear/fast-xml-parser
```

示例代码：

```
const { XMLParser, XMLBuilder, XMLValidator} = require("fast-xml-parser");

const parser = new XMLParser();
let jObj = parser.parse(XMLdata);
```
