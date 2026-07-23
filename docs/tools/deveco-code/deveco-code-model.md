---
title: "模型配置"
---

# 模型配置

DevEco Code当前内置GLM-5.1模型，单账号默认每分钟50次请求，登录后即可使用，无需额外配置。如需使用第三方模型，可以通过如下方式配置。

在DevEco Code对话框输入**/models**进入模型切换界面。

## 通过Provider配置

在DevEco Code对话框输入**/connect**进入，选择提供商（如ZhipuAI、Alibaba）、输入API Key、选择模型。

![](./img/note_3.0-zh-cn.png)

多模态模型（仅支持Qwen系列）支持图片输入。

## 通过deveco.jsonc文件配置

在本地PC查找和编辑deveco.jsonc文件，若不存在需新建该文件。

配置文件优先级：

* Windows：.deveco/deveco.jsonc（项目级） > C:/Users/用户名/.config/deveco/deveco.jsonc（用户级）
* macOS：.deveco/deveco.jsonc（项目级） > ~/.config/deveco/deveco.jsonc（用户级）

示例：

```
{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "deveco": {
      "name": "DevEco Code",
      "models": {
        "glm-5": { // 模型名称，需要自行配置
          "tool_call": true,
          "limit": {
            "context": 200000,
            "output": 8192
          }
        }
      },
      "options": {
        "baseURL": "https://api.openbitfun.com/v1", // 模型的访问地址，需要自行配置
        "apiKey": "{env:DEVECO_API_KEY}" // 模型的访问密钥，需要自行配置
      }
    }
  }
}
```