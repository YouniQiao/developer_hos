---
title: "Content"
upstream_id: "harmonyos-references/js-apis-arkui-content"
catalog: "harmonyos-references"
content_hash: "e3faab651cb1"
synced_at: "2026-07-28T16:41:39.678042"
---

# Content

定义ComponentContent和NodeContent的基类，为ArkUI内容承载结构提供统一的内容管理能力，适用于需要动态创建和挂载自定义内容节点的场景。

![](./img/note_3.0-zh-cn.png)

- 本模块首批接口从API version 12开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
- 本模块接口仅可在Stage模型下使用。

#### 导入模块

```
import { Content } from '@kit.ArkUI';
```

#### Content

Content是ArkUI内容承载结构的基类，为[ComponentContent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-componentcontent)和[NodeContent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-nodecontent)提供统一的内容管理能力，适用于需要动态创建和挂载自定义内容节点的场景。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full
