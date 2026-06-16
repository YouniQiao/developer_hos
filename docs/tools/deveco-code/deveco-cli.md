---
title: DevEco CLI
sidebar_label: DevEco CLI
description: 面向 HarmonyOS 应用开发的统一命令行入口
---

<div align="center">
  <p>一个面向 HarmonyOS 应用开发的统一命令行入口。</p>
  <p>
    <a href="https://www.npmjs.com/package/@deveco/deveco-cli"><img src="https://img.shields.io/npm/v/@deveco/deveco-cli.svg" alt="NPM Version" /></a>
    <a href="https://www.npmjs.com/package/@deveco/deveco-cli"><img src="https://img.shields.io/npm/dm/@deveco/deveco-cli.svg" alt="NPM Downloads" /></a>
    <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-%3E%3D18-green.svg" alt="Node.js" /></a>
    <img src="https://img.shields.io/badge/platform-macOS%20%7C%20Windows-blue.svg" alt="Platform" />
    <a href="https://developer.huawei.com/consumer/cn/download/"><img src="https://img.shields.io/badge/DevEco%20Studio-%3E%3D6.1.0-orange.svg" alt="DevEco Studio" /></a>
    <a href="./LICENSE"><img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License" /></a>
  </p>
</div>

`DevEco CLI` 将 `DevEco Studio` 工具链统一封装为一个 `CLI`，内置 `ohpm`、`hvigor`、`hdc`、`emulator`、`hilog`，同时集成 HarmonyOS 技能安装、项目脚手架、本地  HarmonyOS 文档检索和 `MCP` 服务。


## 快速开始

### 前置要求

- 操作系统为 `macOS` 或 `Windows`
- Node.js >= 18，推荐使用22及以上版本
- [DevEco Studio](https://developer.huawei.com/consumer/cn/download/) >= 6.1.0
  - **macOS**：必须安装在 `~/Applications` 或 `/Applications` 目录下。

### 安装

```bash
npm install -g @deveco/deveco-cli@latest
```

安装后可以通过以下命令更新到最新版本：

```bash
devecocli update
```

### 最短工作流

```bash
devecocli create --app-name MyApp
cd MyApp
devecocli run
devecocli log --level E
```

### 文档检索

```bash
devecocli docs search List
devecocli docs read harmonyos-guides/application-models/arkts-page-start-overview
```

更多命令和参数可通过 `devecocli --help` 或各子命令的 `--help` 查看。

## AI Agent 集成

`DevEco CLI` 支持通过命令行将自身技能添加到 `Agent` 中。下面以 `opencode` 为例展示最短流程：

```bash
# 1. 给 opencode 安装 deveco-cli 技能
devecocli init --agent opencode

# 2. 给 opencode 在当前 HarmonyOS 项目配置 MCP
devecocli init --mcp --agent opencode --project ./MyApp

# 3. 进入项目并启动 opencode
cd MyApp
opencode
```

如果 `Agent` 不在 `--agent` 参数取值范围内，可使用 `--path` 参数进行添加，参考如下命令：

```bash
devecocli init --path D:\work\ARKTS\NewData
```

进入 `Agent` 后可以直接描述任务，例如：

- `Build this project in release mode and run it on my emulator`
- `Tail the last error logs from this app`
- `Check for syntax errors in src/main/ets/pages/Index.ets`

## 常用命令

| 命令                        | 用途                                        |
| ------------------------- | ----------------------------------------- |
| `devecocli create`        | 创建新的 HarmonyOS 项目                         |
| `devecocli build`         | 构建项目并产出 `.hap` / `.hsp` / `.har` / `.app` |
| `devecocli run`           | 安装并运行应用                                   |
| `devecocli device list`   | 查看当前连接设备                                  |
| `devecocli emulator list` | 查看本地模拟器实例                                 |
| `devecocli log`           | 查看 `hilog` 或崩溃日志                          |
| `devecocli docs search`   | 搜索本地 HarmonyOS 文档                         |
| `devecocli init`          | 安装内置技能或配置 `MCP`                           |
| `devecocli skills`        | 管理 HarmonyOS 技能市场中的技能                     |

## 命令集

### `help`

查看版本、帮助信息以及所有子命令

**命令格式：**

```bash
devecocli help
```

```text
# 返回结果
Usage: devecocli [options] [command]

HarmonyOS application development command line tool

Options:
  -V, --version          output the version number
  -h, --help             display help for command

Commands:
  build [options]        Build the HarmonyOS project
  run [options]          Build and run the project on a connected device
  update                 Update deveco-cli to the latest version
  device                 Manage connected devices
  emulator               Manage emulator instances
  skills                 Manage HarmonyOS skills
  log [options]          Obtain device application logs
  create [options]       Scaffold a new HarmonyOS application project
  init [options]         Install the deveco-cli skill or configure the deveco-mcp server into AI agents
  serve                  Host bundled auxiliary protocol servers
  docs [options]         Search and read HarmonyOS documentation from local docs directory
  help [command]         display help for command
```

### `init`

将`deveco-cli` `Skill` 或者 `MCP` 服务配置到智能体中

**命令格式：**

```bash
devecocli init --agent <agents> --project <path> --path <path> --skill --mcp --force
```

**参数：**

| 参数名         | 说明                                                                                        |
| ----------- | ----------------------------------------------------------------------------------------- |
| --agent     | 可选，智能体名称，多个智能体名称以英文逗号分隔。缺省时配置到所有已检测到的智能体中                                                 |
| --project   | 可选，指定工程路径，将`deveco-cli` `Skill` 或 `MCP` 服务安装到该工程项目中                                       |
| --path      | 可选，指定 `deveco-cli` `Skill` 的配置路径。不可与 `--project` 、`--agent` 、 `--mcp` 同时使用                |
| --skill     | 可选，安装 `deveco-cli` `Skill`。不可与 `--mcp` 同时使用。`--mcp` 与 `--skill` 都缺省时，执行 `--skill`         |
| --mcp       | 可选，配置 `MCP` 服务，与 `--project` 一起使用表示配置工程级 `MCP` 服务，独立使用表示配置用户级 `MCP` 服务。不可与 `--skill` 同时使用 |
| -f, --force | 可选，当目标位置已存在 `deveco-cli` `Skill` 或 `MCP` 服务时，覆盖重装                                         |

**示例：**

```bash
# 配置Skill
devecocli init -f   # 安装或更新deveco-cli Skill
devecocli init --skill
devecocli init --agent agentname    # agentname需替换为实际的智能体名称
devecocli init --path D:\work\ARKTS\NewData -f

# 配置MCP
devecocli init --mcp
devecocli init --mcp --agent agentname    # agentname需替换为实际的智能体名称   
devecocli init --mcp --project D:\work\ARKTS\NewData -f
```

### `docs search`

将关键词搜索版本说明、指南、API参考、最佳实践、`FAQ` 、变更预告等中的内容

**命令格式：**

```bash
devecocli docs search <keywords...> --catalog <name> --format <fmt> --limit <n>
```

**参数：**

| 参数名         | 说明                                                                                                                                                                                 |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| keywords... | 必选，搜索关键词，多个关键词用空格隔开                                                                                                                                                                |
| --catalog   | 可选，文档类别，取值包含`harmonyos-releases`（版本说明）、 `harmonyos-guides`（指南）、`harmonyos-references`（API参考）、`best-practices`（最佳实践）、`harmonyos-faqs`（FAQ）、`harmonyos-roadmap`（变更预告）、`all`（所有分类，默认） |
| --format    | 可选，控制输出格式，取值包括 `default` 、`json` ，默认为`default` ，输出结果包括文档ID、标题、文档的概括内容                                                                                                              |
| --limit     | 可选，设置搜索结果返回条数，默认为20                                                                                                                                                                |

**示例：**

```bash
devecocli docs search 沉浸光感
devecocli docs search '@State' '@Prop' --catalog best-practices --limit 10
devecocli docs search Row Column --format json
```

### `docs read`

按文档ID查询文档的完整内容

**命令格式：**

```bash
devecocli docs read <documentId> 
```

**参数：**

| 参数名        | 说明      |
| ---------- | ------- |
| documentId | 必选，文档ID |

**示例：**

```bash
devecocli docs read 开发指南/应用框架/UI_Design_Kit_UI设计套件/沉浸光感/ui-design-hds-component-material
```

### `docs catalog`

查询文档分类和分类名称

**命令格式：**

```bash
devecocli docs catalog --format <fmt> 
```

**参数：**

| 参数名      | 说明                                        |
| -------- | ----------------------------------------- |
| --format | 可选，输出格式，`default` 或 `json` ，默认为 `default` |

**示例：**

```bash
devecocli docs catalog 
devecocli docs catalog --format json
```

### `create`

创建 HarmonyOS 应用工程，仅支持创建工程模板中的 `Empty Ability` 模板

**命令格式：**

```bash
devecocli create --app-name <name> --project-path <path> --bundle-name <bundle> --api-level <level> 
```

**参数：**

| 参数名            | 说明                                                                |
| -------------- | ----------------------------------------------------------------- |
| --app-name     | 必选，应用名称                                                           |
| --project-path | 可选，工程路径，默认为：`./<appname>`                                         |
| --bundle-name  | 可选，包名，默认为：`com.example.<appname>` ，`appname` 自动转为小写               |
| --api-level    | 可选，API级别，最小值为17，最大值从安装的 `Deveco Studio` 的 `HarmonyOS` `SDK` 中自动获取 |

**示例：**

```bash
devecocli create --project-path ./MyApp --app-name MyApp
devecocli create --project-path ./MyApp --app-name MyApp --bundle-name com.acme.myapp --api-level 23
devecocli create --app-name MyApp
```

### `build`

编译并打包 HarmonyOS 工程或工程中的模块

**命令格式：**

```bash
devecocli build --product <product> --modules <modules> --build-mode <mode>
```

**参数：**

| 参数名          | 说明                                                                                                      |
| ------------ | ------------------------------------------------------------------------------------------------------- |
| --product    | 可选，产品的名称，默认为 `default`                                                                                  |
| --modules    | 可选，模块的名称。如需指定模块的 `target` 信息，使用 `module@target` 形式。当工程中只有一个模块时，可缺省；当工程中存在多个模块，且仅存在一个 `entry` 类型的模块时，可缺省 |
| --build-mode | 可选，构建模式，默认为 `debug`                                                                                     |

**示例：**

```bash
devecocli build --build-model release
devecocli build --modules entry library
devecocli build --modules library@phone
devecocli build --product oversea --modules entry --build-model release
```

**说明：**

- 选定模块的依赖会被自动解析和构建
- 执行`devecocli build --product <name>`命令后，产物为 `.app`
- 执行`devecocli build --product <name> --modules <m1>`命令后，产物为 `.hap` / `.hsp` / `.har`

### `build clean`

清理 HarmonyOS 项目的构建产物

**命令格式：**

```bash
devecocli build clean
```

### `emulator list`

查看模拟器实例

**命令格式：**

```bash
devecocli emulator list
```

### `emulator start`

启动模拟器。首次使用时，需要签署 HarmonyOS 软件许可与服务协议，具体请参考 `emulator license accept`

**命令格式：**

```bash
devecocli emulator start [names...]
```

**参数：**

| 参数名         | 说明                                        |
| ----------- | ----------------------------------------- |
| \[names...] | 必选，模拟器实例名称，多个名称用空格隔开。若名称中带有空格，则名称需要添加英文引号 |

**示例：**

```bash
devecocli emulator start Phone
devecocli emulator start Phone1 Phone2
```

**说明：**

- `emulator start` 命令仅支持启动 `release` 版本的模拟器

### `emulator stop`

关闭模拟器

**命令格式：**

```bash
devecocli emulator stop [names...]
```

**参数：**

| 参数名         | 说明                                        |
| ----------- | ----------------------------------------- |
| \[names...] | 必选，模拟器实例名称，多个名称用空格隔开。若名称中带有空格，则名称需要添加英文引号 |

**示例：**

```bash
devecocli emulator stop Phone
devecocli emulator stop 127.0.0.1:5555
```

### `emulator create`

创建模拟器

**命令格式：**

```bash
devecocli emulator create <name> --device-type <type> --os-version <version> --force
```

**参数：**

| 参数名           | 说明                                                                                                                              |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| name          | 必选，模拟器名称                                                                                                                        |
| --device-type | 必选，模拟器设备类型，支持 `phone` ， `foldable` ， `widefold` ， `triplefold` ， `tablet` ， `2in1` ， `2in1 foldable` ， `tv` ， `wearable` ，全小写 |
| --os-version  | 必选，模拟器镜像版本                                                                                                                      |
| --force       | 可选，覆盖已有同名的模拟器                                                                                                                   |

**示例：**

```bash
devecocli emulator create MyPhone --device-type phone --os-version "HarmonyOS 6.0.1(21)"
```

### `emulator delete`

创建模拟器

**命令格式：**

```bash
devecocli emulator delete <name>
```

**参数：**

| 参数名  | 说明             |
| ---- | -------------- |
| name | 必选，模拟器实例名称或序列号 |

**示例：**

```bash
devecocli emulator delete MyPhone
```

### `emulator image list`

查询模拟器镜像列表

**命令格式：**

```bash
devecocli emulator image list --device-type <type> --all --format <format>
```

**参数：**

| 参数名           | 说明                                                                                                                         |
| ------------- | -------------------------------------------------------------------------------------------------------------------------- |
| --device-type | 可选，模拟器设备类型，支持 `phone` ， `foldable` ， `widefold` ， `triplefold` ， `tablet` ， `2in1` ， `2in1 foldable` ， `tv` ， `wearable` |
| --all         | 可选，查询已下载和未下载的所有镜像                                                                                                          |
| --format      | 可选，控制输出格式，取值为 `table` 或 `json` ，默认为 `table`                                                                                |

**示例：**

```bash
devecocli emulator image list
devecocli emulator image list --all
devecocli emulator image list --device-type phone
devecocli emulator image list --format json
```

### `emulator image download`

下载模拟器镜像。首次使用时，需要签署 HarmonyOS `SDK` 许可协议，具体请参考 `emulator license accept`

**命令格式：**

```bash
devecocli emulator image download --device-type <type> --os-version <version> --force
```

**参数：**

| 参数名           | 说明                                                                                                                              |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| --device-type | 必选，模拟器设备类型，支持 `phone` ， `foldable` ， `widefold` ， `triplefold` ， `tablet` ， `2in1` ， `2in1 foldable` ， `tv` ， `wearable` ，全小写 |
| --os-version  | 必选，模拟器镜像版本                                                                                                                      |
| --force       | 可选，覆盖已有的模拟器镜像                                                                                                                   |

**示例：**

```bash
devecocli emulator image download --device-type phone --os-version "HarmonyOS 6.0.1(21)" --force
```

**说明：**

- `emulator image download` 命令仅支持下载 `release` 版本的模拟器镜像

### `emulator image remove`

删除模拟器镜像

**命令格式：**

```bash
devecocli emulator image remove --device-type <type> --os-version <version>
```

**参数：**

| 参数名           | 说明                             |
| ------------- | ------------------------------ |
| --device-type | 必选，模拟器设备类型，与下载镜像的device-type一致 |
| --os-version  | 必选，模拟器镜像版本，与下载镜像的os-version一致  |

**示例：**

```bash
devecocli emulator image remove --device-type phone --os-version "HarmonyOS 6.0.1(21)"
```

### `emulator license view`

查看协议文本（只读）

**命令格式：**

```bash
devecocli emulator license view
```

### `emulator license accept`

查看并接受协议。使用模拟器需要同意 HarmonyOS 软件许可与服务协议，下载镜像需要同意 HarmonyOS `SDK` 许可协议

**命令格式：**

```bash
devecocli emulator license accept
```

### `device list`

查询所有已连接的设备，包括真机设备和运行中的模拟器

**命令格式：**

```bash
devecocli device list
```

### `device view`

查询已连接的设备的详细信息，包括设备序列号、设备名称、设备类型、 `OS` 版本等

**命令格式：**

```bash
devecocli device view --target <serialOrName>
```

**参数：**

| 参数名         | 说明                                    |
| ----------- | ------------------------------------- |
| -t，--target | 可选，目标设备名称或序列号。多设备缺省时，会列出所有已连接设备序列号和名称 |

**示例：**

```bash
devecocli device view
devecocli device view --target 127.0.0.1:5555
devecocli device view -t "My Device Name"
```

### `run`

构建应用后，将应用安装到真机设备或模拟器上，并启动执行

**命令格式：**

```bash
devecocli run --module <module> --device <device> --product <product> --build-mode <mode> --ability <ability> --uninstall --skip-build
```

**参数：**

| 参数名          | 说明                                                                                                     |
| ------------ | ------------------------------------------------------------------------------------------------------ |
| --module     | 可选，模块名称。如需指定模块的 `target` 信息，使用 `module@target` 形式。当工程中只有一个可运行模块（ `entry` / `feature` / `shared` ）时，可缺省 |
| --device     | 设备名称或设备序列号，单设备时可选，多设备时必选                                                                               |
| --product    | 可选，产品的名称，默认为 `default`                                                                                 |
| --build-mode | 可选，构建模式名称，默认为 `debug`                                                                                  |
| --ability    | 可选，待启动的 `Ability` ，默认：模块 `module.json5` 中的`mainElement`                                                |
| --uninstall  | 可选，安装前先卸载已有应用                                                                                          |
| --skip-build | 可选，跳过构建操作，直接安装应用 。\*\*说明：\*\*使用该参数时，需确保对应模块已有构建产物                                                      |

**示例：**

```bash
devecocli run
devecocli run --module entry --device 127.0.0.1:5555
devecocli run --module library@phone --device 127.0.0.1:5555
devecocli run --product oversea --module entry --ability EntryAbility
devecocli run --build-mode release
devecocli run --uninstall
```

### `log`

查看`hilog`普通日志或崩溃日志

**命令格式：**

```bash
devecocli log --device <device> --crash --level <level> --bundle-name <bundle-name> --keyword <keyword> --tail <num> --from <start> --to <end> --follow
```

**参数：**

| 参数名           | 说明                                                                                                                         |
| ------------- | -------------------------------------------------------------------------------------------------------------------------- |
| --device      | 设备名称或设备序列号，单设备时可选，多设备时必选                                                                                                   |
| --crash       | 可选，查看崩溃日志                                                                                                                  |
| --level       | 可选，日志级别，取值包括`D`（ `Debug` ）、`I`（ `Info` ）、`W`（ `Warn` ）、`E`（ `Error` ）、`F`（ `Fatal` ）                                       |
| --bundle-name | 可选，根据包名查看日志                                                                                                                |
| --keyword     | 可选，根据关键词查看日志，关键词区分大小写                                                                                                      |
| --tail        | 可选，显示最新的N行日志，取值为正整数                                                                                                        |
| --from        | 可选，起始时间，单位为`m`和`s`，`m`和`s`为小写，默认为`s`，`start`的取值需要大于等于`end`                                                                 |
| --to          | 可选，结束时间，单位为`m`和`s`，`m`和`s`为小写，默认为`s` 。不可与--follow同时使用。**说明：** 如当前时间为05：00，`start`设置为30s，`end`设置为10s，则起始时间为04：30，结束时间为04：50 |
| --follow      | 可选，实时输出日志。不可与--to同时使用                                                                                                      |

**示例：**

```bash
devecocli log --level E
devecocli log --crash --bundle-name com.example.app
devecocli log --device 127.0.0.1:5555 --level W --keyword Init
devecocli log --tail 100 --from 5m --to 2m
devecocli log --follow --bundle-name com.example.app
```

### `skills list`

查询可用的 `Skill`

**命令格式：**

```bash
devecocli skills list --long
```

**参数：**

| 参数名       | 说明                                              |
| --------- | ----------------------------------------------- |
| -l，--long | 可选，`Skill` 详情，包括描述和已安装的智能体列表。缺省时，仅显示 `Skill` 名称 |

**示例：**

```bash
devecocli skills list
devecocli skills list --long
devecocli skills list -l
```

### `skills find`

按关键词搜索 `Skill`

**命令格式：**

```bash
devecocli skills find <keyword>
```

**参数：**

| 参数名     | 说明       |
| ------- | -------- |
| keyword | 必选，搜索关键词 |

**示例：**

```bash
devecocli skills find deveco
```

### `skills add`

将 `Skill` 添加到智能体中

**命令格式：**

```bash
devecocli skills add --all --agent <agents> --skill <skill-name> --project <path> --path <path> --force
```

**参数：**

| 参数名        | 说明                                                        |
| ---------- | --------------------------------------------------------- |
| --all      | 可选，添加所有可用的 `Skill` ，与 `--skill` 二选一                       |
| --agent    | 可选，智能体名称，多个智能体时以英文逗号分隔。缺省时，添加到已检测到的智能体中                   |
| --skill    | 可选，待添加的 `Skill` 名称，与 `--all` 二选一                          |
| --project  | 可选，指定项目路径，将 `Skill` 添加到该工程项目中                             |
| --path     | 可选，指定路径，将 `Skill` 添加到该路径，不可与 `--project` 或 `--agent` 同时使用 |
| -f，--force | 可选，当目标位置已有同名 `Skill` 时，覆盖重添加                              |

**示例：**

```bash
devecocli skills add --all
devecocli skills add --skill skillname --agent agentname --force # skillname需替换成实际的Skill名称
devecocli skills add --skill skillname --project ./my-app  # skillname需替换成实际的Skill名称
```

### `skills remove`

从智能体中删除已添加的 `Skill`

**命令格式：**

```bash
devecocli skills remove --skill <skill-name> --agent <agents> --project <path> --path <path>
```

**参数：**

| 参数名       | 说明                                                       |
| --------- | -------------------------------------------------------- |
| --skill   | 必选，待删除的 `Skill` 名称                                       |
| --agent   | 可选，智能体名称，多个智能体时以英文逗号分隔。缺省时，删除到已检测到的智能体中的 `Skill`         |
| --project | 可选，指定项目路径，删除该项目中的 `Skill`                                |
| --path    | 可选，指定路径，删除该项目中的 `Skill`，不可与 `--project` 或 `--agent` 同时使用 |

**示例：**

```bash
devecocli skills remove --skill skillname  # skillname需替换成实际的Skill名称
devecocli skills remove --skill skillname --agent agentname  # skillname需替换成实际的Skill名称
```

### `serve mcp`

启动本地 `MCP` 服务。智能体配置 `MCP` 服务后，可通过 `MCP` 协议调用 `ArkTS` / `C++` 语法检查工具。不同智能体平台配置 `MCP` 服务的界面不一样，一个智能体平台的配置示例如下。
推荐通过 `devecocli init --mcp` 自动配置

```bash
{
  "mcp": {
    "deveco-mcp": {
      "type": "local",
      "command": [
        "devecocli",
        "serve",
        "mcp"
      ],
      "environment":{
        "PROJECT_PATH": "D:\\code\\sample_project", // 工程路径
        "NODE_MAX_OLD_SPACE_SIZE": "8192", // 可选，设置内部node进程最大的老生代内存大小，默认为8192
        "DEVECO_PATH": "D:\\Application\\DevEco Studio" // 可选，Deveco Studio的路径
      },
      "enbale": true
    }
  }
}
```

## 常见问题

[FAQ](https://gitcode.com/openharmony-sig/deveco-cli/wiki/FAQ.md)

## 开发

```bash
npm install
npm run dev
npm start -- <command>
npm run lint
npm run format
npm run build
```

- 架构与目录说明见 [`AGENTS.md`](./AGENTS.md)
- 如需参与维护，建议先阅读 `AGENTS.md` 中的约定与架构说明

## 许可证

[MIT](./LICENSE)