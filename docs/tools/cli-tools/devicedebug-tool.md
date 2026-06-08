---
title: "devicedebug工具"
displayed_sidebar: cliToolsSidebar
original_url: /docs/tools/cli-tools/devicedebug-tool
format: md
upstream_id: tools/cli-tools/devicedebug-tool
last_sync: 2026-06-07
sync_hash: f2070bf5
---
# devicedebug工具

devicedebug工具向开发者提供对调试应用发送信号的能力，目前仅支持向AMS管理的debug类型的应用进程的pid发送signal信号，达到终止对应pid进程的能力。

![](./img/note_3.0-zh-cn.png)

在使用本工具前，开发者需要先获取hdc工具，执行hdc shell。

<strong>表1</strong> devicedebug工具命令列表

| 命令 | 描述 |
| --- | --- |
| help/-h | 帮助命令，显示devicedebug支持的命令信息。 |
| kill | 终止进程命令，用来终止对应pid进程。 |

## 帮助命令

```
devicedebug help
```

<strong>表2</strong> help命令列表

| 命令 | 描述 |
| --- | --- |
| devicedebug help | 显示devicedebug支持的命令信息。 |

示例：

```
# 显示帮助信息。
devicedebug help
```

## 终止进程命令

```
devicedebug kill
```

用于向debug类型的应用进程发送signal（1-64）信号，应用进程接收到信号后终止对应pid进程。

<strong>表3</strong> kill命令列表

| 命令 | 描述 |
| --- | --- |
| help/-h | 帮助信息。 |
| -&lt;signal&gt; &lt;pid&gt; | 必选字段，signal（1-64）为终止信号，终止pid对应的debug类型的应用进程。 |

<strong>返回值</strong>：

当pid对应的进程为非应用进程时，返回"devicedebug: kill: &#123;pid&#125;: No such app process"；当pid对应的进程为非debug类型的应用进程时，返回"devicedebug: kill: process: &#123;pid&#125; is not debuggable app"。

示例：

```
# 以终止12111进程，signal信号9为例。
devicedebug kill -9 12111
```