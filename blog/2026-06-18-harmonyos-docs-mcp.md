---
slug: harmonyos-docs-mcp
title: 鸿蒙开发者文档 MCP 服务
authors: [hhxi]
tags: [mcp, harmonyos, ai]
date: 2026-06-18
---

我们为 HarmonyOS 开发者文档搭建了一个 **MCP（Model Context Protocol）服务**，让 AI 编程助手能够直接搜索和查阅鸿蒙开发文档。

## 什么是 MCP

MCP 是 Anthropic 提出的开放协议，让 AI 助手能够通过标准化接口调用外部工具和数据源。简单说——以前 AI 只能靠训练数据回答，现在它可以**实时查询最新文档**。

<!-- truncate -->

## 服务地址

```
https://mcp.developer.harmonyos.cool/mcp
```

## 数据规模

服务覆盖 **两个文档仓库**：

| 来源 | 篇数 | 说明 |
|------|------|------|
| 指南 | 10,000+ | 开发指南、设计规范、工具文档 |
| API 参考 | 3,786 | JS / Native / REST API 接口文档 |

> 2026-06-24 更新：新增 API 参考文档支持，数据来自华为官方 API 参考站点的完整镜像。

## 支持的功能

服务提供 **6 个工具**：

### 1. search_docs — 全文搜索

搜索所有文档，返回匹配的文件路径和内容片段。支持中文关键词，覆盖指南和 API 参考两部分。

```
search_docs(query="ArkUI 组件", max_results=5)
```

### 2. find_api — API 名称查找 🆕

按 API 名称关键词搜索，匹配文件名、文档标题和函数/类名。三遍查找策略：先匹配文件名（快），不够再扫标题行（轻量），最后提取详情。

```
find_api(name="bluetooth")
find_api(name="createGattServer")
```

返回匹配的文档路径、API 标题、匹配到的函数/类名列表，以及简介段落。

### 3. get_doc — 分块读取

按章节分块读取文档内容，避免一次性返回过长文本。`chunk=0` 返回全文。自适应标题级别——指南用 `##` 分块，API 参考用 `####` 分块。

```
get_doc(path="dev/release-notes", chunk=3)
```

返回格式：
```
[3/6] ## 按需注册组件属性

在使用组件开发应用UI界面时...
```

### 4. get_doc_outline — 文档大纲

获取文档的章节结构，列出所有层级（`##` ~ `####`）的标题。适合先了解文档全貌，再按需深入。API 参考文档的函数名一览无余。

```
get_doc_outline(path="quality/ui-component-performance-optimization")
get_doc_outline(path="system/js-apis-bluetooth")  # 列出所有蓝牙 API 函数
```

### 5. get_api_params — 参数表速查 🆕

提取 API 参考文档中的请求参数和响应参数表格，自动格式化输出。适用于支付、账号、推送等 REST API 文档。

```
get_api_params(path="app-services/account-api-obtain-revoke/account-api-obtain-revoke-token")
```

### 6. list_sections — 目录浏览

列出文档的一级和二级目录结构，标注来源（指南 / API 参考），方便快速定位。

```
list_sections()
```

## 如何接入

### Claude Desktop

编辑 `claude_desktop_config.json`：

```json
{
  "mcpServers": {
    "harmonyos-docs": {
      "url": "https://mcp.developer.harmonyos.cool/mcp"
    }
  }
}
```

### Cursor / Continue

在 MCP 配置中添加同样的服务地址即可。

### Hermes Agent

```json
{
  "mcpServers": {
    "harmonyos-docs": {
      "type": "streamableHttp",
      "url": "https://mcp.developer.harmonyos.cool/mcp"
    }
  }
}
```

配置完成后，AI 助手就能直接搜索和引用鸿蒙官方开发文档了。

源码在 [GitHub](https://github.com/YouniQiao/developer_hos/tree/master/mcp-server)，欢迎贡献。
