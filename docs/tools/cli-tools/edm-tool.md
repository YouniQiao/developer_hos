---
title: "edm工具"
displayed_sidebar: cliToolsSidebar
---

# edm工具

Enterprise Device Manager（企业设备管理工具，简称为edm），为设备管理应用提供调试和测试能力，例如激活企业设备管理拓展能力、解除激活企业设备管理拓展能力。

## 环境要求

在使用本工具前，开发者需要先获取hdc工具，执行hdc shell。

## edm工具命令列表

| 命令 | 描述 |
| --- | --- |
| help | 帮助命令，用于查询edm支持的命令信息。 |
| enable-admin | 激活命令，用于激活企业设备管理拓展能力，目标组件必须为[enterpriseAdmin类型的ExtensionAbility](./mdm-kit-admin.md)。 |
| disable-admin | 解除激活命令，用于解除激活企业设备管理拓展能力。 |

## 帮助命令（help）

```
# 显示帮助信息
edm help
```

## 激活命令（enable-admin）

```
# 显示帮助信息
edm enable-admin -h
# 激活
edm enable-admin -n <bundleName> -a <abilityName> [-t <adminType>]
```

<strong>激活命令参数列表</strong>

| 参数 | 参数说明 |
| --- | --- |
| -h/--help | 帮助信息。 |
| -n/--bundle-name | 必选参数，bundleName。 |
| -a/--ability-name | 必选参数，abilityName。 |
| -t/--admin-type | 可选参数，adminType。  取值如下：  super - 表示激活为超级设备管理应用。  byod - 表示激活为BYOD（自带设备办公）设备管理应用。  缺省值为super。 |

<strong>示例</strong>：

```
# 激活一个所在应用包名为com.example.mdmsample，类名为EnterpriseAdminAbility的EnterpriseAdminExtensionAbility。
edm enable-admin -n com.example.mdmsample -a com.example.mdmsample.EnterpriseAdminAbility
# 执行结果
enable-admin success.
```

## 解除激活命令（disable-admin）

```
# 显示帮助信息
edm disable-admin -h
# 解除激活
edm disable-admin -n <bundleName>
```

<strong>解除激活命令参数列表</strong>

| 参数 | 参数说明 |
| --- | --- |
| -h/--help | 帮助信息。 |
| -n/--bundle-name | 必选参数，bundleName。 |

<strong>示例</strong>：

```
# 解除激活所在应用包名为com.example.mdmsample的EnterpriseAdminExtensionAbility。
edm disable-admin -n com.example.mdmsample
# 执行结果
disable-admin success.
```

## edm工具错误信息

### error: command requires option

<strong>错误描述</strong>

未传入bundleName和abilityName。

<strong>可能原因</strong>

未传入bundleName和abilityName。

<strong>处理步骤</strong>

1、如果当前使用的命令是enable-admin，请补充-n &lt;bundle-name&gt;和-a &lt;ability-name&gt;参数。

2、如果当前使用的命令是disable-admin，请补充-n &lt;bundle-name&gt;参数。

### error: -n, --bundle-name option requires an argument

<strong>错误描述</strong>

传入的bundleName为空。

<strong>可能原因</strong>

传入的bundleName为空。

<strong>处理步骤</strong>

检查-n后的参数，请补充bundleName。

### error: -a, --ability-name option requires an argument

<strong>错误描述</strong>

传入的abilityName为空。

<strong>可能原因</strong>

传入的abilityName为空。

<strong>处理步骤</strong>

检查-a后的参数，请补充abilityName。

### error: unknown option

<strong>错误描述</strong>

传入了未知的参数。

<strong>可能原因</strong>

传入了未知的参数。

<strong>处理步骤</strong>

请确认参数是否在参数列表中。

### error: -n &lt;bundle-name&gt; is expected

<strong>错误描述</strong>

未传入bundleName。

<strong>可能原因</strong>

未传入bundleName。

<strong>处理步骤</strong>

请补充-n &lt;bundle-name&gt;。

### error: -a &lt;ability-name&gt; is expected

<strong>错误描述</strong>

未传入abilityName。

<strong>可能原因</strong>

未传入abilityName。

<strong>处理步骤</strong>

请补充-a &lt;ability-name&gt;。

### 9200003 error: the administrator ability component is invalid

<strong>错误描述</strong>

传入的bundleName或者abilityName不正确或者不是enterpriseAdmin类型的ExtensionAbility。

<strong>可能原因</strong>

1、传入的bundleName不正确。

2、传入的abilityName不正确。

3、传入的不是enterpriseAdmin类型的ExtensionAbility。

<strong>处理步骤</strong>

查询应用的bundleName和enterpriseAdmin类型的ExtensionAbility的abilityName，并将其传入到参数中。

### 9200004 error: failed to enable the administrator application of the device

<strong>错误描述</strong>

激活失败。

<strong>可能原因</strong>

1、传入的bundleName不正确。

2、传入的不是enterpriseAdmin类型的ExtensionAbility。

3、存在已激活的正式的enterpriseAdmin类型的ExtensionAbility。

<strong>处理步骤</strong>

1、查询应用的bundleName和enterpriseAdmin类型的ExtensionAbility的abilityName，并将其传入到参数中。

2、请使用未被管控的设备进行调试。

### 9200005 error: failed to disable the administrator application of the device

<strong>错误描述</strong>

解除激活失败。

<strong>可能原因</strong>

1、此组件未被激活。

2、此组件不是通过hdc命令被激活的。

3、解除激活失败。

<strong>处理步骤</strong>

查询可以被hdc命令解除激活的应用的bundleName，并将其传入到参数中。