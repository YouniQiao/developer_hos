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

## 支持的功能

服务提供 **4 个工具**：

### 1. search_docs — 全文搜索

搜索 HarmonyOS 开发者文档，返回匹配的文件路径和内容片段。支持中文关键词。

```
search_docs(query="ArkUI 组件", max_results=5)
```

### 2. get_doc_outline — 文档大纲

获取文档的章节结构，列出所有 `##` 标题及每节内容预览。适合先了解文档全貌，再按需深入。

```
get_doc_outline(path="quality/ui-component-performance-optimization")
```

### 3. get_doc — 分块读取

按章节分块读取文档内容，避免一次性返回过长文本。`chunk=0` 返回全文（兼容旧用法）。

```
get_doc(path="dev/release-notes", chunk=3)
```

返回格式：
```
[3/6] ## 按需注册组件属性

在使用组件开发应用UI界面时...

```

### 4. list_sections — 目录浏览

列出文档的一级和二级目录结构，方便快速定位。

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
