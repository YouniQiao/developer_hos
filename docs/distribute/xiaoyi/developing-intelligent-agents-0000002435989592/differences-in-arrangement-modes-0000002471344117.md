---
title: "智能体分类"
displayed_sidebar: xiaoyiSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/service/differences-in-arrangement-modes-0000002471344117
---

import MergeTable from '@site/src/components/MergeTable';

# 智能体分类

**编排模式的区别**

**单Agent （LLM模式）**：单Agent （LLM模式）是一种基于大模型的智能体编排方式。开发者按需选择大模型，根据业务逻辑编写提示词，以 LLM 为理解中枢，结合意图识别、工具调用、对话上下文，动态选择插件、工作流，响应用户需求。 单Agent （LLM模式）适用于简单对话、知识问答、基础内容生成等场景。

**工作流模式**：工作流模式是一种基于规则化流程的智能体编排方式。开发者将复杂任务拆解为有序的规则化步骤（如数据获取、处理、执行），串联插件、大模型、条件分支、代码块等组件实现自动化执行流程，完成业务逻辑。工作流模式适用于需多步骤协同、逻辑复杂、业务多样性的场景。

**A2A模式**：A2A模式是一种三方智能体接入小艺开放平台的高效编排方式。开发者可通过该模式基于鸿蒙Agent通信协议快速、便捷地将成熟的第三方智能体对接至小艺开放平台，实现分发与调用，提升平台的场景覆盖能力。该模式适用于同时具备鸿蒙端应用与云侧智能体能力的**企业开发者**。

**OpenClaw模式：**OpenClaw 模式是一种开放灵活的智能体接入与构建方式，开发者可通过该模式接入OpenClaw工具 ，快速创建个性化智能体。该模式适用于个性化助手、自动化服务、场景化应用等多样化需求。

**编排模式能力差异对照表**

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| <strong>能力</strong> | | <strong>单Agent （LLM模式）</strong> | <strong>工作流模式</strong> | <strong>A2A模式</strong> | <strong>OpenClaw模式</strong> |
| <strong>编排</strong><strong>-模型选择</strong> | 模型选择&模型设置 | <strong>√</strong> | - | - | - |
| 对话设置 | <strong>-</strong> | <strong>√</strong> | - | - |
| <strong>编排-角色指令</strong> | 角色指令（prompt） | <strong>√</strong> | - | - | - |
| <strong>编排-能力拓展</strong> | A2A基础配置 | - | - | <strong>√</strong> | - |
| A2A输出设置 | - | - | <strong>√</strong> | - |
| OpenClaw基础配置 | - | - | - | <strong>√</strong> |
| 开场对话&预置问题 | <strong>√</strong> | <strong>√</strong> | <strong>√</strong> | <strong>√</strong> |
| 输入文件设置 | <strong>√</strong> | <strong>√</strong> | <strong>√</strong> | <strong>√</strong> |
| 用户问题建议 | <strong>√</strong> | <strong>√</strong> | - | - |
| 快捷指令 | <strong>√</strong> | <strong>√</strong> | <strong>√</strong> | - |
| 背景图片 | <strong>√</strong> | <strong>√</strong> | <strong>√</strong> | <strong>√</strong> |
| 角色声音 | <strong>√</strong> | <strong>√</strong> | <strong>√</strong> | <strong>√</strong> |
| 插件 | <strong>√</strong> | - | √ | - |
| 工作流/工作流配置 | <strong>√</strong> | <strong>√</strong> | - | - |
| 触发器 | <strong>√</strong> | <strong>√</strong> | <strong>√</strong> | - |
| 关联应用 | <strong>√</strong> | <strong>√</strong> | <strong>√</strong> | - |
| 账号绑定设置 | - | <strong>√</strong> | <strong>√</strong> | - |
| 付费智能体 | - | <strong>√</strong> | <strong>√</strong> | - |
| 知识库 | <strong>√</strong> | - | - | - |
| 变量 | <strong>√</strong> | <strong>√</strong> | <strong>√</strong> | - |
| 长期记忆 | <strong>√</strong> | <strong>√</strong> | - | - |
| <strong>调试与预览</strong> | 真机测试 | <strong>√</strong> | <strong>√</strong> | √ | <strong>√</strong> |
| 触发器 | <strong>√</strong> | - | <strong>√</strong> | - |
| 记忆 | <strong>√</strong> | <strong>√</strong> | - | - |
| 朗读 | <strong>√</strong> | <strong>√</strong> | √ | <strong>√</strong> |
| 调试 | <strong>√</strong> | <strong>√</strong> | √ | <strong>√</strong> |