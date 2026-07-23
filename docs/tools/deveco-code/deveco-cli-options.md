---
title: "常用命令"
---

# 常用命令

## help

查看版本、帮助信息以及所有子命令。

**命令格式：**

```
devecocli help
```

返回结果：

```
Usage: devecocli [options] [command]

HarmonyOS application development command line tool

Options:
  -V, --version        output the version number
  -h, --help           display help for command

Commands:
  build [options]      Build HarmonyOS project
  run [options]        Build and run the project on a connected device
  update               Update deveco-cli to the latest
  device               Manage connected devices
  emulator             Manage emulator instances
  docs                 Search and read HarmonyOS documentation from local docs directory
  skills               Manage HarmonyOS skills
  log [options]        Obtain device application logs
  create [options]     Scaffold a new HarmonyOS application project
  init [options]       Install the deveco-cli skill or configure the deveco-mcp server into AI agents
  serve                Host bundled auxiliary protocol servers
  help [command]       display help for command
```

## init

将deveco-cli Skill或者MCP服务配置到智能体中。

**命令格式：**

```
devecocli init --agent <agents> --project <path> --path <path> --skill --mcp --force
```

**参数：**

| 参数名 | 说明 |
| --- | --- |
| --agent | 可选，智能体名称，多个智能体名称以英文逗号分隔。  缺省时配置到所有已检测到的智能体中。 |
| --project | 可选，指定工程路径，将deveco-cli Skill或MCP服务安装到该工程项目中。  默认安装在个人用户目录下。 |
| --path | 可选，指定deveco-cli Skill的配置路径。  不可与--project 、--agent 、--mcp同时使用。 |
| --skill | 可选，安装deveco-cli Skill。  不可与--mcp同时使用。  --mcp和--skill都缺省时，执行--skill。 |
| --mcp | 可选，配置MCP服务，与--project一起使用表示配置工程级MCP服务，独立使用表示配置用户级MCP服务。  不可与--skill同时使用。 |
| -f，--force | 可选，当目标位置已存在deveco-cli Skill或MCP服务时，覆盖重装。 |

**示例：**

```
\# 配置Skill
devecocli init -f  # 安装或更新deveco-cli Skill
devecocli init --skill
devecocli init --agent agentname  # agentname需替换为实际的智能体名称
devecocli init --path D:\work\ARKTS\NewsData -f
\# 配置MCP服务
devecocli init --mcp
devecocli init --mcp --agent agentname  # agentname需替换为实际的智能体名称
devecocli init --mcp --project D:\work\ARKTS\NewsData -f
```

## docs search

按关键词搜索[版本说明](https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/overview-allversion)、[指南](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-dev-guide)、[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/development-intro-api)、[最佳实践](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-best-practices-overview)、[FAQ](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faq-phone)、[变更预告](https://developer.huawei.com/consumer/cn/doc/harmonyos-roadmap/all-changelogs-610)中的内容。

**命令格式：**

```
devecocli docs search <keywords...> --catalog <name> --format <fmt> --limit <n>
```

**参数：**

| 参数名 | 说明 |
| --- | --- |
| <keywords...> | 必选，搜索关键词，多个关键词用空格隔开。 |
| --catalog | 可选，文档类别，取值包含harmonyos-releases（版本说明）、harmonyos-guides（指南）、harmonyos-references（API参考）、best-practices（最佳实践）、harmonyos-faqs（FAQ）、harmonyos-roadmap（变更预告）、all（所有分类，默认）。 |
| --format | 可选，控制输出格式，取值包括default、json，默认为default。  输出结果包含文档ID（用于指明文档路径）、标题、文档的概括内容。 |
| --limit | 可选，设置搜索结果返回条数，默认为20。 |

**示例：**

```
devecocli docs search 沉浸光感
devecocli docs search '@State' '@Prop' --catalog best-practices --limit 10
devecocli docs search Row Column --format json
```

## docs read

按文档ID查询文档的完整内容。

**命令格式：**

```
devecocli docs read <documentId>
```

**参数：**

| 参数名 | 说明 |
| --- | --- |
| <documentId> | 必选，文档ID，需通过[docs search](#section18607104514449)命令获取。 |

**示例：**

```
devecocli docs read 开发指南/应用框架/UI_Design_Kit_UI设计套件/沉浸光感/ui-design-hds-component-material
```

## docs catalog

查询文档分类和分类名称。

**命令格式：**

```
devecocli docs catalog --format <fmt>
```

**参数：**

| 参数名 | 说明 |
| --- | --- |
| --format | 可选，输出格式，default或json，默认为default。 |

**示例：**

```
devecocli docs catalog
devecocli docs catalog --format json
```

## create

创建HarmonyOS应用工程，仅支持创建工程模板中的[Empty Ability模板](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-template)。

**命令格式：**

```
devecocli create --app-name <name> --project-path <path> --bundle-name <bundle> --api-level <level>
```

**参数：**

| 参数名 | 说明 |
| --- | --- |
| --app-name | 必选，应用名称。 |
| --project-path | 可选，工程路径，默认为：./<appName>。 |
| --bundle-name | 可选，包名，默认为：com.example.<appname>，appname自动转为小写。更多请参考[app.json5配置文件标签](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-configuration-file#配置文件标签)。 |
| --api-level | 可选，API级别，最小值为17，最大值从安装的DevEco Studio的HarmonyOS SDK中自动获取。 |

**示例：**

```
devecocli create --project-path ./MyApp --app-name MyApp
devecocli create --project-path ./MyApp --app-name MyApp --bundle-name com.acme.myapp --api-level 23
devecocli create --app-name MyApp
```

## build

编译并打包HarmonyOS工程或工程中的模块。

**命令格式：**

```
devecocli build --product <product> --modules <modules> --build-mode <mode>
```

**参数：**

| 参数名 | 说明 |
| --- | --- |
| --product | 可选，产品名称，默认为default。更多可参考[products](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-build-profile-app#section45865492619)字段。 |
| --modules | 可选，模块名称，多个模块用空格隔开。  如需指定模块的target信息，使用module@target形式。  当工程中只有一个模块时，可缺省；当工程中存在多个模块，且仅存在一个entry类型模块时，可缺省。 |
| --build-mode | 可选，构建模式，默认为debug。更多可参考[buildModeSet](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-build-profile-app#section137297344398)字段。 |

**示例：**

```
devecocli build --build-mode release
devecocli build --modules entry library
devecocli build --modules library@phone
devecocli build --product oversea --modules entry --build-mode release
```

![](./img/note_3.0-zh-cn.png)

* 选定模块的依赖会被自动解析和构建。
* 执行devecocli build --product <name>命令后，产物为.app。
* 执行devecocli build --product <name> --modules <m1>命令后，产物为.hap/.hsp/.har。

## build clean

清理HarmonyOS项目的构建产物。

**命令格式：**

```
devecocli build clean
```

## emulator list

emulator list

查看模拟器实例。

**命令格式：**

```
devecocli emulator list
```

**返回信息：**

| 返回信息 | 说明 |
| --- | --- |
| Name | 模拟器名称 |
| Status | 模拟器运行状态 |
| Serial | 模拟器序列号 |
| Device Type | 模拟器产品类型 |
| OS Version | 模拟器镜像版本 |

## emulator start

启动模拟器。首次使用时，需要签署HarmonyOS软件许可与服务协议，具体请参考[emulator license accept](#section469814010492)。

**命令格式：**

```
devecocli emulator start [names...]
```

**参数：**

| 参数名 | 说明 |
| --- | --- |
| [names...] | 必选，模拟器实例名称或序列号，多个名称用空格隔开。  若名称中带有空格，则名称需要添加英文引号。 |

**示例：**

```
devecocli emulator start Phone
devecocli emulator start Phone1 Phone2
```

![](./img/note_3.0-zh-cn.png)

emulator start命令仅支持启动release版本的模拟器。

## emulator stop

关闭模拟器。

**命令格式：**

```
devecocli emulator stop [names...]
```

**参数：**

| 参数名 | 说明 |
| --- | --- |
| [names...] | 必选，模拟器实例名称或序列号，多个名称或序列号用空格隔开。  若名称中带有空格，则名称需要添加英文引号。 |

**示例：**

```
devecocli emulator stop Phone
devecocli emulator stop 127.0.0.1:5555
```

## emulator create

创建模拟器。

**命令格式：**

```
devecocli emulator create <name> --device-type <type> --os-version <version> --force
```

**参数：**

| 参数名 | 说明 |
| --- | --- |
| <name> | 必选，模拟器名称。 |
| --device-type | 必选，模拟器产品类型，支持的产品类型请参考[设备支持类型](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-emulator-devicetype)，全小写。 |
| --os-version | 必选，模拟器镜像版本。 |
| --force | 可选，覆盖已有同名的模拟器。 |

**示例：**

```
devecocli emulator create MyPhone --device-type phone --os-version "HarmonyOS 6.0.1(21)"
devecocli emulator create MyPhone --device-type phone --os-version "HarmonyOS 6.1.1(24)"
```

## emulator delete

删除模拟器。

**命令格式：**

```
devecocli emulator delete <name>
```

**参数：**

| 参数名 | 说明 |
| --- | --- |
| <name> | 必选，模拟器实例名称或序列号。 |

**示例：**

```
devecocli emulator delete MyPhone
```

## emulator image list

查询模拟器镜像列表。

**命令格式：**

```
devecocli emulator image list --device-type <type> --all --format <format>
```

**参数：**

| 参数名 | 说明 |
| --- | --- |
| --device-type | 可选，模拟器产品类型，支持的产品类型请参考[设备支持类型](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-emulator-devicetype)，全小写。 |
| --all | 可选，查询已下载和未下载的所有镜像。 |
| --format | 可选，控制输出格式，取值为table或json，默认为table。 |

**返回信息：**

| 返回信息 | 说明 |
| --- | --- |
| OS Version | 镜像版本号，可用于下载镜像时指定--os-version参数。 |
| Device Type | 模拟器产品类型，可用于下载镜像时指定--device-type参数。 |
| Software Version | 镜像详细版本号，可用于下载镜像时指定--os-version参数。 |
| Release Type | 镜像发布类型。 |
| Upgradable | 对比本地镜像，是否有可更新的镜像版本，true/false。 |
| Downloaded | 本地是否已下载过镜像，true/false。 |

**示例：**

```
devecocli emulator image list
devecocli emulator image list --all
devecocli emulator image list --device-type phone
devecocli emulator image list --format json
```

## emulator image download

emulator image download

下载模拟器镜像。首次使用时，需要签署HarmonyOS SDK许可协议，具体请参考[emulator license accept](#section469814010492)。

**命令格式：**

```
devecocli emulator image download --device-type <type> --os-version <version> --force
```

**参数：**

| 参数名 | 说明 |
| --- | --- |
| --device-type | 必选，模拟器产品类型，支持的产品类型请参考[设备支持类型](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-emulator-devicetype)，全小写。 |
| --os-version | 必选，模拟器镜像版本。 |
| --force | 可选，覆盖已有的模拟器镜像。 |

**示例：**

```
devecocli emulator image download --device-type phone --os-version "HarmonyOS 6.0.1(21)" --force
devecocli emulator image download --device-type phone --os-version "HarmonyOS 6.1.1(24)" --force
```

![](./img/note_3.0-zh-cn.png)

emulator image download命令仅支持下载release版本的模拟器镜像。

## emulator image remove

删除模拟器镜像。

**命令格式：**

```
devecocli emulator image remove --device-type <type> --os-version <version>
```

**参数：**

| 参数名 | 说明 |
| --- | --- |
| --device-type | 必选，模拟器设备类型，与[下载镜像](#section7190115134818)的--device-type参数一致。 |
| --os-version | 必选，模拟器镜像版本，与[下载镜像](#section7190115134818)的--os-version参数一致。 |

**示例：**

```
devecocli emulator image remove --device-type phone --os-version "HarmonyOS 6.0.1(21)"
```

## emulator license view

查看HarmonyOS软件许可与服务协议和HarmonyOS SDK许可协议文本（只读）。

**命令格式：**

```
devecocli emulator license view
```

## emulator license accept

查看并接受协议。使用模拟器需要同意HarmonyOS软件许可与服务协议，下载镜像需要同意HarmonyOS SDK许可协议。

**命令格式：**

```
devecocli emulator license accept
```

## device list

device list

查询所有已连接的设备，包括真机设备和运行中的模拟器。

**命令格式：**

```
devecocli device list
```

**返回信息：**

| 返回信息 | 说明 |
| --- | --- |
| Name | 真机或模拟器名称 |
| Serial | 真机或模拟器序列号 |
| Kind | 类型，真机或模拟器 |
| Device Type | 设备类型 |

## device view

查询已连接设备的详细信息，包括设备序列号、设备名称、设备类型、OS版本等。

**命令格式：**

```
devecocli device view --target <serialOrName>
```

**参数：**

| 参数名 | 说明 |
| --- | --- |
| -t, --target | 可选，目标设备名称或序列号。多设备缺省时，会列出所有已连接设备序列号和名称。 |

**返回信息：**

| 返回信息 | 说明 |
| --- | --- |
| Serial | 真机或模拟器序列号 |
| Device Name | 真机或模拟器名称 |
| Device Type | 设备类型 |
| Os Version | 镜像版本号，可用于下载镜像时指定--os-version参数。 |

**示例：**

```
devecocli device view
devecocli device view --target 127.0.0.1:5555
devecocli device view -t "My Device Name"
```

## run

构建应用后，将应用安装到真机设备或模拟器上，并启动执行。

**命令格式：**

```
devecocli run --module <module> --device <device> --product <product> --build-mode <mode> --ability <ability> --uninstall --skip-build
```

**参数：**

| 参数名 | 说明 |
| --- | --- |
| --module | 可选，模块名称，多个模块用空格隔开。  如需指定[模块的target信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-build-profile-app#section1961794812219)，使用module@target形式。  当工程中只有一个可运行模块（entry / feature / shared）时，可缺省。 |
| --device | 设备名称或设备序列号，单设备时可选，多设备时必选。 |
| --product | 可选，产品名称，默认为default。更多请参考[products](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-build-profile-app#section45865492619)。 |
| --build-mode | 可选，构建模式名称，默认为debug。更多请可参考[buildModeSet](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-build-profile-app#section137297344398)。 |
| --ability | 可选，待启动的Ability，默认是模块module.json5中的mainElement。 |
| --uninstall | 可选，安装前先卸载已有应用。 |
| --skip-build | 可选，跳过构建操作，直接安装应用。  说明：  使用该参数时，需确保对应模块已有构建产物。 |

**示例：**

```
devecocli run
devecocli run --module entry --device 127.0.0.1:5555
devecocli run --module library@phone --device 127.0.0.1:5555
devecocli run --product oversea --module entry --ability EntryAbility
devecocli run --build-mode release
devecocli run --uninstall
```

## log

查看hilog普通日志或崩溃日志。

**命令格式：**

```
devecocli log --device <device> --crash --level <level> --bundle-name <bundle-name> --keyword <keyword> --tail <num> --from <start> --to <end> --follow
```

**参数：**

| 参数名 | 说明 |
| --- | --- |
| --device | 设备名称或设备序列号，单设备时可选，多设备时必选。 |
| --crash | 可选，查看崩溃日志。 |
| --level | 可选，日志级别，取值包括D（Debug）、 I（Info）、 W（Warn）、E（Error）、F（Fatal）。 |
| --bundle-name | 可选，根据包名查看日志。 |
| --keyword | 可选，根据关键词查看日志，关键词区分大小写。 |
| --tail | 可选，显示最新的N行日志，取值为正整数。 |
| --from | 可选，起始时间偏移量，以当前时间为基准时间点，通过减去预设的时间偏移量，可计算得出起始时间。单位为m/s，m和s为小写，默认为s。  start取值需大于等于end。  说明：  如当前时间为05:00:00，start设置为30s，则起始时间为04:59:30。 |
| --to | 可选，结束时间偏移量，以当前时间为基准时间点，通过减去预设的时间偏移量，可计算得出结束时间。单位为m/s，m和s为小写，默认为s。  不可与--follow同时使用。  说明：  如当前时间为05:00:00，end设置为10s，则结束时间为04:59:50。 |
| --follow | 可选，实时输出日志。  不可与--to同时使用。 |

**示例：**

```
devecocli log --level E
devecocli log --crash --bundle-name com.example.app
devecocli log --device 127.0.0.1:5555 --level W --keyword Init
devecocli log --tail 100 --from 5m --to 2m
devecocli log --follow --bundle-name com.example.app
```

## skills list

查询可用的Skill。

**命令格式：**

```
devecocli skills list --long
```

**参数：**

| 参数名 | 说明 |
| --- | --- |
| -l, --long | 可选，Skill详情，包括描述和已安装的智能体列表。缺省时，仅展示Skill名称。 |

**示例：**

```
devecocli skills list
devecocli skills list --long
devecocli skills list -l
```

## skills find

按关键词搜索Skill。

**命令格式：**

```
devecocli skills find <keyword>
```

**参数：**

| 参数名 | 说明 |
| --- | --- |
| <keyword> | 必选，搜索关键词。 |

**示例：**

```
devecocli skills find deveco
```

## skills add

将Skill添加到智能体中。

**命令格式：**

```
devecocli skills add --all --agent <agents> --skill <skill-name> --project <path> --path <path> --force
```

**参数：**

| 参数名 | 说明 |
| --- | --- |
| --all | 可选，添加所有可用的Skill，与--skill二选一。 |
| --agent | 可选，智能体名称，多个智能体时以英文逗号分隔。缺省时，添加到已检测到的智能体中。 |
| --skill | 可选，待添加的Skill名称，与--all二选一。 |
| --project | 可选，指定项目路径，将Skill添加到该工程项目中。 |
| --path | 可选，指定路径，将Skill添加到该路径，不可与--project或--agent同时使用。 |
| -f, --force | 可选，当目标位置已有同名Skill时，覆盖重添加。 |

**示例：**

```
devecocli skills add --all
devecocli skills add --skill skillname --agent agentname --force  # skillname需替换为实际的Skill名称
devecocli skills add --skill skillname --project ./my-app  # skillname需替换为实际的Skill名称
```

## skills remove

skills remove

从智能体中删除已添加的Skill。

**命令格式：**

```
devecocli skills remove --skill <skill-name> --agent <agents> --project <path> --path <path>
```

**参数：**

| 参数名 | 说明 |
| --- | --- |
| --skill | 必选，待删除的Skill名称。 |
| --agent | 可选，智能体名称，多个智能体时以英文逗号分隔。缺省时，删除已检测到的智能体中的Skill。 |
| --project | 可选，指定项目路径，删除该项目中的Skill。 |
| --path | 可选，指定路径，删除该路径下的Skill，不可与--project或--agent同时使用。 |

**示例：**

```
devecocli skills remove --skill skillname   # skillname需替换为实际的Skill名称
devecocli skills remove --skill skillname --agent agentname  # skillname需替换为实际的Skill名称
```

## serve mcp

serve mcp

启动本地MCP服务。智能体配置MCP服务后，可通过MCP协议调用ArkTS/C++语法检查工具。不同智能体平台配置MCP服务的界面不一样，一个智能平台的配置示例如下。

推荐通过[devecocli init --mcp](#section272801794417)自动配置。

```
{
  "mcp": {
    "deveco-mcp": {
      "type": "local",
      "command": [
        "devecocli",
        "serve",
        "mcp"
      ],
      "environment": {
        "PROJECT_PATH": "D:\\code\\sample_in_harmonyos",  // 工程路径
        "NODE_MAX_OLD_SPACE_SIZE": "8192",  // 可选，设置内部node进程最大的老生代内存大小，默认为8192
        "DEVECO_PATH": "D:\\Applications\\DevEco Studio"  // 可选，DevEco Studio的安装路径
      },
      "enabled": true
    }
  }
}
```