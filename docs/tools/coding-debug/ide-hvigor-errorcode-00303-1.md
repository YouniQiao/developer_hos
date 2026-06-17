---
title: "配置错误码"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide-hvigor-errorcode-00303-1
format: md
upstream_id: tools/coding-debug/ide-hvigor-errorcode-00303-1
last_sync: 2026-06-07
sync_hash: 8920e318
---
# 配置错误码

#### 00303002 找不到某个任务对应的模块

<strong>错误信息</strong>

Cannot find hvigor node in XXX with task YYY.

<strong>错误描述</strong>

找不到任务YYY对应的模块XXX。

<strong>可能原因</strong>

模块名称配置错误。

<strong>处理步骤</strong>

确保hvigorfile.ts中的模块名称配置正确。

#### 00303003 找不到某个依赖任务的模块

<strong>错误信息</strong>

Cannot find dependent hvigor node XXX with task YYY.

<strong>错误描述</strong>

找不到某个依赖任务YYY的模块XXX。

<strong>可能原因</strong>

模块名称配置错误。

<strong>处理步骤</strong>

确保hvigorfile.ts中的模块名称配置正确。

#### 00303004 找不到依赖的任务

<strong>错误信息</strong>

Cannot find hvigor task XXX in module YYY required by ZZZ.

<strong>错误描述</strong>

找不到任务ZZZ依赖的任务XXX。

<strong>可能原因</strong>

依赖任务名称配置错误。

<strong>处理步骤</strong>

确保hvigorfile.ts中的依赖任务名称配置正确。

#### 00303010 工程级build-profile.json5的modules字段应该是数组类型

<strong>错误信息</strong>

modules' property should be an array in root project build-profile.json5.

<strong>错误描述</strong>

工程级build-profile.json5的modules字段应该是数组类型。

<strong>可能原因</strong>

工程级build-profile.json5的modules字段不是数组类型。

<strong>处理步骤</strong>

确保modules是数组类型。

#### 00303011 找不到模块

<strong>错误信息</strong>

No modules found.

<strong>错误描述</strong>

找不到模块。

<strong>可能原因</strong>

工程级build-profile.json5中modules配置缺失。

<strong>处理步骤</strong>

确保modules配置存在且正确。

#### 00303012 parameterFile配置不正确

<strong>错误信息</strong>

XXX corresponding to the parameterFile is not find, Check the parameterFile is valid.

<strong>错误描述</strong>

找不到与parameterFile对应的XXX，请检查parameterFile是否有效。

<strong>可能原因</strong>

工程级oh-package.json5中的parameterFile路径配置不正确。

<strong>处理步骤</strong>

1、确保在工程级oh-package.json5中正确配置[parameterFile](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-oh-package-json5#section122411462820)字段。

2、确保parameterFile文件存在且命名正确。

#### 00303013 Hvigor仅支持API 8及以上的版本

<strong>错误信息</strong>

Hvigor only works with API version 8 and later versions.

<strong>错误描述</strong>

Hvigor仅支持API 8及以上的版本。

<strong>可能原因</strong>

工程级oh-package.json5中compatibleSdkVersion的值低于8。

<strong>处理步骤</strong>

请选择API 8及以上的SDK版本进行新建工程。

#### 00303015 SDK版本关系不符合规则

<strong>错误信息</strong>

Configure the API version according to the rule of compatibleSdkVersion &lt;= targetSdkVersion &lt;= compileSdkVersion.

<strong>错误描述</strong>

根据compatibleSdkVersion &lt;= targetSdkVersion &lt;= compileSdkVersion的规则配置API 版本。

<strong>可能原因</strong>

API 版本不符合以上规则。

<strong>处理步骤</strong>

检查工程级build-profile.json5中的compileSdkVersion/compatibleSdkVersion/targetSdkVersion字段，确保符合以上规则。

#### 00303017 srcEntry或configEntry的值应该是相对路径

<strong>错误信息</strong>

Invalid app startup configuration XXX in the module YYY: the value of 'srcEntry' or 'configEntry' should be a relative path. At file: ZZZ.

<strong>错误描述</strong>

模块YYY中的启动框架配置XXX不正确：srcEntry或configEntry的值应该是相对路径。

<strong>可能原因</strong>

ZZZ文件的configEntry字段或startupTasks下的srcEntry字段的值是绝对路径。

<strong>处理步骤</strong>

确保值是相对路径。

#### 00303018 srcEntry或configEntry配置的文件后缀必须是ets,ts或js

<strong>错误信息</strong>

Invalid app startup configuration XXX in the module YYY: the suffix of the code file specified by the field 'srcEntry' under 'startupTasks' and 'configEntry' should be ets,ts or js. At file: ZZZ.

<strong>错误描述</strong>

模块YYY中的启动框架配置XXX不正确：startupTasks下的srcEntry和configEntry配置的代码文件后缀应该是ets，ts或js。

<strong>可能原因</strong>

ZZZ文件startupTasks下的srcEntry字段或configEntry字段配置的文件后缀不是ets，ts或js。

<strong>处理步骤</strong>

确保文件后缀是ets，ts或js。

#### 00303019 srcEntry或configEntry配置的文件必须是本模块下的文件

<strong>错误信息</strong>

Invalid app startup configuration XXX in the module YYY: the file of 'srcEntry' or 'configEntry' in startupTasks should be the module file where it is configuration. At file: ZZZ.

<strong>错误描述</strong>

模块YYY中的启动框架配置XXX不正确：srcEntry或configEntry配置的文件必须是本模块下的文件。

<strong>可能原因</strong>

ZZZ文件的configEntry字段或startupTasks下的srcEntry字段配置的文件不是本模块下的文件。

<strong>处理步骤</strong>

确保文件是本模块下的文件。

#### 00303020 srcEntry或configEntry配置的文件必须存在

<strong>错误信息</strong>

Invalid app startup configuration XXX in the module YYY: the code file specified by the field 'srcEntry' or 'configEntry' in startupTasks must exist. At file: ZZZ.

<strong>错误描述</strong>

模块YYY中的启动框架配置XXX不正确：srcEntry或configEntry配置的文件必须存在。

<strong>可能原因</strong>

ZZZ文件的configEntry字段或startupTasks下的srcEntry字段配置的文件不存在。

<strong>处理步骤</strong>

确保文件存在。

#### 00303021 appPreloadHintStartupTasks下的srcEntry配置的文件后缀应该为so

<strong>错误信息</strong>

Invalid app startup configuration XXX in the module YYY: the suffix of the code file specified by the field 'srcEntry' in appPreloadHintStartupTasks should be so. At file: ZZZ.

<strong>错误描述</strong>

模块YYY中的启动框架配置XXX不正确：appPreloadHintStartupTasks下的srcEntry配置的文件后缀应该为so。

<strong>可能原因</strong>

ZZZ文件中appPreloadHintStartupTasks下的srcEntry字段配置的文件后缀不是so。

<strong>处理步骤</strong>

确保文件后缀是so。

#### 00303022 name值必须唯一

<strong>错误信息</strong>

Duplicate name 'XXX' exists in the 'YYY' attribute in the startup configuration file of the 'ZZZ' module.

<strong>错误描述</strong>

模块ZZZ和有依赖关系的其他模块的启动框架文件的YYY属性下的元素的name值XXX重复。

<strong>可能原因</strong>

模块ZZZ和与ZZZ模块有依赖关系的其他模块的所有启动框架配置文件中，startupTasks或appPreloadHintStartupTasks下的元素的name属性有重复值。

<strong>处理步骤</strong>

检查ZZZ模块和与ZZZ模块有依赖关系的其他模块的所有启动框架配置文件，确保startupTasks或appPreloadHintStartupTasks下的元素的name属性值唯一。

#### 00303023 .so文件必须存在且在依赖中正确配置

<strong>错误信息</strong>

Invalid app startup configuration XXX in the module YYY: the .so file must exist and be correctly configured in the dependency. At file: ZZZ.

<strong>错误描述</strong>

模块YYY中的启动框架配置XXX不正确：.so文件必须存在且在依赖中正确配置。

<strong>可能原因</strong>

ZZZ文件中appPreloadHintStartupTasks下的srcEntry字段配置的.so文件不存在或没有在依赖中正确配置。

<strong>处理步骤</strong>

确保文件存在，并且在模块YYY的oh-package.json5中正确配置依赖。

#### 00303024 项目结构和配置需要升级

<strong>错误信息</strong>

The project structure and configuration need to be upgraded before use.

<strong>错误描述</strong>

项目结构和配置需要升级。

<strong>可能原因</strong>

使用一体化DevEco Studio打开了历史工程。

<strong>处理步骤</strong>

参考[一体化工程迁移](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V14/ide-integrated-project-migration-V14)，对历史工程进行迁移。

#### 00303025 hvigor的modelVersion类型不兼容

<strong>错误信息</strong>

Incompatible types of hvigor modelVersion.

<strong>错误描述</strong>

hvigor的modelVersion类型不兼容。

<strong>可能原因</strong>

hvigor-config.json5的modelVersion不是string类型。

<strong>处理步骤</strong>

将hvigor-config.json5的modelVersion修改为string类型。

#### 00303026 oh-package.json5的modelVersion类型不兼容

<strong>错误信息</strong>

Incompatible types of oh-package.json5 modelVersion.

<strong>错误描述</strong>

oh-package.json5的modelVersion类型不兼容。

<strong>可能原因</strong>

oh-package.json5的modelVersion不是string类型。

<strong>处理步骤</strong>

将oh-package.json5的modelVersion修改为string类型。

#### 00303027 hvigor-config.json5和oh-package.json5的modelVersion不一致

<strong>错误信息</strong>

The modelVersion in hvigor-config.json5 is XXX,and the modelVersion in oh-package.json5 is YYY.

<strong>错误描述</strong>

hvigor-config.json5中的modelVersion为XXX，oh-package.json5中的modelVersion为YYY。

<strong>可能原因</strong>

hvigor-config.json5和oh-package.json5的modelVersion不一致。

<strong>处理步骤</strong>

确保hvigor-config.json5和工程级oh-package.json5的modelVersion一致。

#### 00303028 Hvigor的modelVersion不支持

<strong>错误信息</strong>

Unsupported modelVersion of Hvigor XXX.

<strong>错误描述</strong>

使用了不支持的modelVersion。

<strong>可能原因</strong>

hvigor-config.json5中的modelVersion配置了不支持的版本号。

<strong>处理步骤</strong>

根据报错信息，将modelVersion修改为支持的版本号。

#### 00303029 oh-package.json5的modelVersion不支持

<strong>错误信息</strong>

Unsupported modelVersion of oh-package.json5 XXX.

<strong>错误描述</strong>

使用了不支持的modelVersion。

<strong>可能原因</strong>

oh-package.json5中的modelVersion配置了不支持的版本号。

<strong>处理步骤</strong>

根据报错信息，将modelVersion修改为支持的版本号。

#### 00303030 OpenHarmony工程需要在product中配置compileSdkVersion

<strong>错误信息</strong>

For the OpenHarmony project, you need to configure the compileSdkVersion in the product, at file: %s.

<strong>错误描述</strong>

OpenHarmony工程需要在product中配置compileSdkVersion。

<strong>可能原因</strong>

OpenHarmony工程没有在工程级build-profile.json5中配置compileSdkVersion。

<strong>处理步骤</strong>

在工程级build-profile.json5中配置compileSdkVersion。

#### 00303031 compileSdkVersion不支持

<strong>错误信息</strong>

Unsupported compileSdkVersion XXX.

<strong>错误描述</strong>

配置的compileSdkVersion版本不支持。

<strong>可能原因</strong>

compileSdkVersion配置了不支持使用的版本。

<strong>处理步骤</strong>

根据报错信息，将compileSdkVersion修改为支持的版本。

#### 00303032 compatibleSdkVersion不支持

<strong>错误信息</strong>

Unsupported compatibleSdkVersion XXX.

<strong>错误描述</strong>

配置的compatibleSdkVersion版本不支持。

<strong>可能原因</strong>

compatibleSdkVersion配置了不支持使用的版本。

<strong>处理步骤</strong>

根据报错信息，将compatibleSdkVersion修改为支持的版本。

#### 00303033 compatibleSdkVersion未配置

<strong>错误信息</strong>

Please configure compatibleSdkVersion in the product.

<strong>错误描述</strong>

请在product中配置compatibleSdkVersion。

<strong>可能原因</strong>

compatibleSdkVersion未配置。

<strong>处理步骤</strong>

根据报错信息，在工程级build-profile.json5中配置compileSdkVersion字段。

#### 00303034 compileSdkVersion未配置

<strong>错误信息</strong>

Please configure compileSdkVersion in the product.

<strong>错误描述</strong>

请在product中配置compileSdkVersion。

<strong>可能原因</strong>

runtimeOS为OpenHarmony时，未配置compileSdkVersion。

<strong>处理步骤</strong>

根据报错信息，在工程级build-profile.json5中配置compileSdkVersion字段。

#### 00303035 FA模型项目仅支持API 8及以上版本

<strong>错误信息</strong>

According to the compatibility specifications, fa-model project can only support the development of API version 8 or later.

<strong>错误描述</strong>

根据兼容性规范，FA模型项目仅支持API 8及以上版本。

<strong>可能原因</strong>

FA模型项目中compatibleSdkVersion配置为8以下的版本。

<strong>处理步骤</strong>

将工程级build-profile.json5中的compatibleSdkVersion配置为8或以上版本。

#### 00303036 Stage模型项目仅支持API 9及以上版本

<strong>错误信息</strong>

According to the compatibility specifications,stage-model project can only support the development of API version 9 or later.

<strong>错误描述</strong>

根据兼容性规范，Stage模型项目仅支持API 9及以上版本。

<strong>可能原因</strong>

Stage模型项目中compatibleSdkVersion配置为9以下的版本。

<strong>处理步骤</strong>

将工程级build-profile.json5中的compatibleSdkVersion配置为9或以上版本。

#### 00303037 API版本与设备版本不兼容

<strong>错误信息</strong>

According to the compatibility specifications, apps of API version XXX or stage mode can only run on devices of API version XXX or later.

<strong>错误描述</strong>

根据兼容性规范，API版本为XXX或stage模型的应用只能运行在API版本为XXX或更高版本的设备上。

<strong>可能原因</strong>

工程级build-profile.json5中compatibleSdkVersion版本高于设备API版本。

<strong>处理步骤</strong>

将设备API 版本升级到与compatibleSdkVersion相同或更高的版本，或将compatibleSdkVersion配置为与设备API相同的版本。

#### 00303038 Schema校验失败

<strong>错误信息</strong>

Schema validate failed.

<strong>错误描述</strong>

Schema校验失败。

<strong>可能原因</strong>

配置文件中的schema配置存在问题。

<strong>处理步骤</strong>

不同场景，根据具体报错信息修改。

#### 00303039 name配置重复

<strong>错误信息</strong>

Duplicated XXX: YYY.

<strong>错误描述</strong>

name配置重复。

<strong>可能原因</strong>

name字段重复导致报错，如moduleName、targetName等。

<strong>处理步骤</strong>

根据报错信息，在对应的文件中修改name，确保每个名称唯一。

#### 00303040 找不到默认product

<strong>错误信息</strong>

Unable to find or load the default product.

<strong>错误描述</strong>

无法找到或加载默认product。

<strong>可能原因</strong>

工程中name为default的product不存在。

<strong>处理步骤</strong>

根据报错信息，在对应的文件添加default的product。

#### 00303041 不允许同时配置标准系统设备和轻量系统设备

<strong>错误信息</strong>

It's not allowed to configure mini-system device when standard-system device exists.

<strong>错误描述</strong>

存在标准系统设备时，不允许配置轻量系统设备。

<strong>可能原因</strong>

同时配置了标准系统设备和轻量系统设备。

<strong>处理步骤</strong>

根据报错信息的文件检查是否存在异常的设备类型。

#### 00303042 设备类型不能包含多个轻量系统设备

<strong>错误信息</strong>

The device types cannot include multiple mini-system devices.

<strong>错误描述</strong>

设备类型不能包含多个轻量系统设备。

<strong>可能原因</strong>

设备类型包含多个轻量系统设备。

<strong>处理步骤</strong>

检查报错信息的文件，确保没有包含多个轻量系统设备。

#### 00303043 FA模型工程不支持配置轻量系统设备

<strong>错误信息</strong>

Mini-system devices cannot be configured in an FA project.

<strong>错误描述</strong>

FA模型工程不支持配置轻量系统设备。

<strong>可能原因</strong>

FA模型工程中配置了轻量系统设备。

<strong>处理步骤</strong>

检查报错信息的文件，确保不包含轻量系统设备。

#### 00303044 form\_config.json文件中只能配置一个默认卡片

<strong>错误信息</strong>

Only one default card can be configured in the form\_config.json file.

<strong>错误描述</strong>

form\_config.json文件中只能配置一个默认卡片。

<strong>可能原因</strong>

form\_config.json文件中存在多个isDefault为true的卡片<strong>。</strong>

<strong>处理步骤</strong>

确保form\_config.json文件中只存在一个isDefault为true的卡片。

#### 00303045 updateDuration和scheduleUpdateTime字段不能同时为空

<strong>错误信息</strong>

In the form\_config.json file, if the value of the updateEnabled field is true,the updateDuration and scheduleUpdateTime fields cannot be both empty.

<strong>错误描述</strong>

在form\_config.json文件中，如果updateEnabled字段的值为true，updateDuration和scheduleUpdateTime字段不能同时为空。

<strong>可能原因</strong>

在form\_config.json文件中配置updateEnabled为true，并且未配置updateDuration和scheduleUpdateTime字段。

<strong>处理步骤</strong>

如果updateEnabled字段的值为true，需要配置updateDuration或scheduleUpdateTime字段。

#### 00303046 parameterFile对应的key不可用

<strong>错误信息</strong>

Invalid key: XXX in parameterFile.at YYY.

<strong>错误描述</strong>

在YYY路径下的parameterFile中存在不可用的key XXX。

<strong>可能原因</strong>

请检查对应的key值是否存在于parameterFile中。

<strong>处理步骤</strong>

修改@param:key确保能找到一个对应的value值在对应的parameterFile中。

#### 00303047 parameterFile中的key不符合校验规则

<strong>错误信息</strong>

The key: XXX in parameterFile is invalid, only support at(@), slashe(/), letters, digits, dots(.), hyphens(-), and underscores(\_). For details, see the package name verification rules.

<strong>错误描述</strong>

parameterFile中的键XXX无效，仅支持@、/、字母、数字、点（.）、中划线（-）和下划线(\_)，请参考包名校验规则。

<strong>可能原因</strong>

parameterFile中的key不符合校验规则。

<strong>处理步骤</strong>

根据报错信息修改parameterFile中的key，确保符合校验规则。

#### 00303048 parameterFile中的版本必须符合semver规范

<strong>错误信息</strong>

Invalid version: XXX in parameterFile, the version must comply with the semver specifications.

<strong>错误描述</strong>

parameterFile中的版本XXX无效，版本必须符合[semver](https://semver.org/)规范。

<strong>可能原因</strong>

parameterFile中的版本不符合semver规范。

<strong>处理步骤</strong>

确保parameterFile中的版本符合semver规范。

#### 00303050 main字段的值必须是.ets、.ts、.js文件

<strong>错误信息</strong>

The value of 'main' must be a .ets, .ts, or .js file.

<strong>错误描述</strong>

main字段的值必须是.ets、.ts、.js文件。

<strong>可能原因</strong>

main字段配置了后缀不是.ets、.ts、.js的文件。

<strong>处理步骤</strong>

检查模块的oh-package.json5文件，确保main字段配置正确。

#### 00303051 workers字段的值必须是.ets、.ts、.js文件

<strong>错误信息</strong>

Field 'workers' only accepts path ends with '.js', '.ts' or '.ets' but get: XXX.

<strong>错误描述</strong>

workers字段的值必须是.ets、.ts、.js文件。

<strong>可能原因</strong>

workers字段配置了后缀不是.ets、.ts、.js的文件。

<strong>处理步骤</strong>

从workers配置中移除XXX。

#### 00303052 API9及以上的LiteWearable工程仅支持JS

<strong>错误信息</strong>

Lite-wearable devices with API version 9 or later support only JS.

<strong>错误描述</strong>

API9及以上的LiteWearable工程仅支持JS。

<strong>可能原因</strong>

模块的src/main下存在ets目录。

<strong>处理步骤</strong>

移除模块src/main下的ets目录。

#### 00303053 build-profile.json5/hvigorconfig.ts和module.json5中的模块名称需要保持一致

<strong>错误信息</strong>

The module name XXX in build-profile.json5 or hvigorconfig.ts must be same as moduleName in module.json5.

<strong>错误描述</strong>

build-profile.json5/hvigorconfig.ts和module.json5中的模块名称需要保持一致。

<strong>可能原因</strong>

工程级build-profile.json5/hvigorconfig.ts中的modules的name，与module.json5中的module.name不一致。

<strong>处理步骤</strong>

两者的模块名称需要保持一致。

#### 00303054 types字段仅支持在ArkTS工程中配置

<strong>错误信息</strong>

Only ArkTS project supports custom types.

<strong>错误描述</strong>

types字段仅支持在ArkTS工程中配置。

<strong>可能原因</strong>

在JS模块添加了types配置。

<strong>处理步骤</strong>

切换为ArkTS模块。

#### 00303055 types字段的文件不需要.d.ets或.d.ts后缀

<strong>错误信息</strong>

The custom type's declaration file XXX does not require the suffix YYY.

<strong>错误描述</strong>

types字段的文件XXX不需要YYY后缀。

<strong>可能原因</strong>

types字段的文件存在.d.ets或.d.ts后缀。

<strong>处理步骤</strong>

移除types字段的后缀.d.ets或.d.ts。

#### 00303056 types字段的文件后缀无效

<strong>错误信息</strong>

The suffix of custom type's declaration file 'XXX' is not valid.

<strong>错误描述</strong>

types字段的文件XXX后缀无效。

<strong>可能原因</strong>

types字段配置了后缀不是.d.ets或.d.ts的文件。

<strong>处理步骤</strong>

确保types字段的文件均为.d.ets或.d.ts文件。

#### 00303057 FA模型工程不支持配置dynamicDependencies

<strong>错误信息</strong>

Current module XXX do not support dynamicDependencies.

<strong>错误描述</strong>

XX模块不支持配置dynamicDependencies。

<strong>可能原因</strong>

当前工程为FA模型工程，且在oh-package.json5中配置了dynamicDependencies。

<strong>处理步骤</strong>

将依赖配置dynamicDependencies切换为dependencies。

#### 00303058 defaultDimension的值无效

<strong>错误信息</strong>

Invalid default dimension settings in these widgets: XXX.

<strong>错误描述</strong>

defaultDimension的值无效。

<strong>可能原因</strong>

defaultDimension的值不在supportDimensions的声明范围内。

<strong>处理步骤</strong>

确保defaultDimension的值在supportDimensions中已定义。

#### 00303059 权限名称重复

<strong>错误信息</strong>

Duplicate permission names detected under "XXX": "YYY".

<strong>错误描述</strong>

在XXX中检测到重复的权限名称YYY。

<strong>可能原因</strong>

在XXX中配置了多个name相同的权限。

<strong>处理步骤</strong>

移除重复的权限。

#### 00303060 为多设备配置的SystemCapability的交集为空

<strong>错误信息</strong>

The intersection of the system capability sets configured for multiple devices is empty.

<strong>错误描述</strong>

为多设备配置的SystemCapability的交集为空。

<strong>可能原因</strong>

每种设备类型都有对应的SystemCapability，当syscap.json的custom和general配置的设备类型的SystemCapability交集为空时，会出现此报错。

<strong>处理步骤</strong>

确保general和custom中配置的设备类型的SystemCapability存在交集。

#### 00303061 自定义SystemCapability不合法

<strong>错误信息</strong>

The device type defined in the module.json5 of the module 'XXX' is empty, and the general and custom fields in the syscap.json file are not specified or their values are empty.

<strong>错误描述</strong>

XXX模块的module.json5中的deviceTypes字段值为空，同时，syscap.json文件中的general和custom字段值也为空。

<strong>可能原因</strong>

XXX模块的module.json5中的deviceTypes字段值为空，同时，syscap.json文件中的general和custom字段值也为空。

<strong>处理步骤</strong>

1. 设置module.json5中的deviceTypes。
2. 设置syscap.json中的general，需要与deviceTypes的值保持一致。

#### 00303062 target的deviceType无效

<strong>错误信息</strong>

Invalid target deviceType.

<strong>错误描述</strong>

target的deviceType无效。

<strong>可能原因</strong>

模块级build-profile.json5的targets下的deviceType的值，在module.json5的deviceTypes中不存在。

<strong>处理步骤</strong>

确保targets下的deviceType的值，在module.json5的deviceTypes中已定义。

#### 00303065 target和product的runtimeOS不一致

<strong>错误信息</strong>

The runtimeOS configuration of the target XXX:YYY does not match the product ZZZ.

<strong>错误描述</strong>

target和product的runtimeOS不一致。

<strong>可能原因</strong>

模块级build-profile.json5和工程级build-profile.json5的runtimeOS不一致。

<strong>处理步骤</strong>

确保工程级和模块级build-profile.json5的runtimeOS一致。

#### 00303071 target对应的product不存在

<strong>错误信息</strong>

Invalid product for target XXX.

<strong>错误描述</strong>

target对应的product不存在。

<strong>可能原因</strong>

工程级build-profile.json5中target XXX的applyToProducts字段配置错误。

<strong>处理步骤</strong>

确保target XXX的applyToProducts字段配置正确的product。

#### 00303072 ohosTest target被关联到某个product

<strong>错误信息</strong>

The 'ohosTest' target does not need to be packaged into the application. 'ohosTest' target cannot be applied to product.

<strong>错误描述</strong>

'ohosTest' target不会被打包到APP产物中，所以此target不能关联到某个product。

<strong>可能原因</strong>

在工程级build-profile.json5的targets中，存在name为ohosTest的配置，并且同时配置了applyToProduct。

<strong>处理步骤</strong>

工程级build-profile.json5中移除name为ohosTest的配置。

#### 00303073 存在未知target

<strong>错误信息</strong>

Unknown target XXX.

<strong>错误描述</strong>

存在未知target。

<strong>可能原因</strong>

target XXX在build-profile.json5中未定义。

<strong>处理步骤</strong>

确保模块级build-profile.json5中targets字段下存在name为XXX的target。

#### 00303074 签名材料和工程配置的bundleName不一致

<strong>错误信息</strong>

BundleName in the project configuration does not match that in the SigningConfigs.

<strong>错误描述</strong>

签名材料和工程配置的bundleName不一致。

<strong>可能原因</strong>

生成签名材料时的bundleName与app.json5或工程级build-profile.json5中的bundleName不一致。

<strong>处理步骤</strong>

1. 如果在工程级build-profile.json5中配置了bundleName，确保签名材料和工程级build-profile.json5中的bundleName一致。
2. 如果没有在工程级build-profile.json5中配置bundleName，确保签名材料和app.json5中的bundleName一致。

#### 00303075 version字段必须为字符串

<strong>错误信息</strong>

The version number of the module must be a string, but received a XXX.

<strong>错误描述</strong>

version字段必须为字符串，但却设置了类型XXX。

<strong>可能原因</strong>

oh-package.json5中的version字段不是字符串。

<strong>处理步骤</strong>

将version字段设置为字符串类型。

#### 00303076 name字段必须为字符串

<strong>错误信息</strong>

The name of the module must be a string, but received a XXX.

<strong>错误描述</strong>

name字段必须为字符串，但却设置了类型XXX。

<strong>可能原因</strong>

oh-package.json5中的name字段不是字符串。

<strong>处理步骤</strong>

将name字段设置为字符串类型。

#### 00303077 当前模块配置的deviceType与entryModules的deviceType不存在交集

<strong>错误信息</strong>

The deviceType values XXX of XXX in the XXX don't overlap that XXX of XXX in the associated XXX module.

<strong>错误描述</strong>

当前模块配置的deviceType与entryModules的deviceType不存在交集。

<strong>可能原因</strong>

在FA模型中，当前模块配置的deviceType与entryModules的deviceType不存在交集。

<strong>处理步骤</strong>

需要变更当前模块配置的deviceType，使其与entryModules的deviceType存在交集。

#### 00303078 config.json中不允许js和abilities存在name字段相同的配置

<strong>错误信息</strong>

Forms referenced in the config. In the configuration item named 'XXX', the type field does not match between 'module.abilities' and 'module.js'.

<strong>错误描述</strong>

config.json中不允许js和abilities存在name字段相同的配置。

<strong>可能原因</strong>

在FA模型工程中，config.json的js和abilities存在name字段相同的配置。

<strong>处理步骤</strong>

确保两者之间name字段的值唯一。

#### 00303082 找不到对应的SDK

<strong>错误信息</strong>

Unable to find the XXX in SDK Manager.

<strong>错误描述</strong>

找不到compatibleSdkVersion/compileSdkVersion/targetSdkVersion对应的SDK。

<strong>可能原因</strong>

Hvigor和SDK版本不配套<strong>。</strong>

<strong>处理步骤</strong>

1. 从NEXT Developer Beta1开始，DevEco Studio提供了开箱即用的开发体验，将SDK、Node.js、Hvigor、Ohpm等工具链打包在一起，简化了DevEco Studio的安装和配置过程，并提供历史工程迁移的能力，帮助您快速完成工程转换。
2. [下载](https://developer.huawei.com/consumer/cn/download/)一体化DevEco Studio工具。

#### 00303083 SDK版本号配置错误

<strong>错误信息</strong>

The platform version XXX and API version YYY of ZZZ in build-profile.json5 do not match.

<strong>错误描述</strong>

build-profile.json5的ZZZ字段的XXX和API 版本YYY不匹配。

<strong>可能原因</strong>

工程级build-profile.json5中的compatibleSdkVersion/compileSdkVersion/targetSdkVersion字段中的XXX和YYY不匹配。

<strong>处理步骤</strong>

创建新工程时，在工程配置页面查看<strong>Compatible SDK</strong>，点击下拉框可查看所有支持的SDK版本号。

#### 00303087 不允许动态导入工程外模块

<strong>错误信息</strong>

Invalid dynamic import configuration XXX in current module XXX.

<strong>错误描述</strong>

当前模块中的动态导入配置无效。

<strong>可能原因</strong>

动态导入的文件不在当前模块或项目的其他模块中。

<strong>处理步骤</strong>

确保动态导入的文件路径位于当前模块或项目的其他模块中。

#### 00303088 动态导入文件后缀不正确

<strong>错误信息</strong>

Invalid file XXX found in the module XXX dynamic import files.

<strong>错误描述</strong>

模块的动态导入文件无效。

<strong>可能原因</strong>

动态导入的文件后缀不是.ts或.ets。

<strong>处理步骤</strong>

检查动态导入的文件，确保后缀为.ts或.ets。

#### 00303089 不允许跨模块动态导入

<strong>错误信息</strong>

Invalid dynamic import configuration XXX in module XXX.

<strong>错误描述</strong>

模块中的动态导入配置无效。

<strong>可能原因</strong>

工程级build-profile.json5中noExternalImportByPath设置为true时，runtimeOnly不允许跨模块动态导入。

<strong>处理步骤</strong>

1. 确保动态导入的文件在本模块下。
2. 如果需要跨模块导入，检查是否可以调整noExternalImportByPath配置。

#### 00303090 动态导入配置无效

<strong>错误信息</strong>

Invalid dynamic import configurations in current module XXX.

<strong>错误描述</strong>

当前模块中的动态导入配置无效。

<strong>可能原因</strong>

配置的动态导入的路径未在oh-package.json5的dependencies中定义，不支持配置三方包内的某个文件路径。

<strong>处理步骤</strong>

确保所有动态导入文件或相对路径在oh-package.json5的dependencies中已定义。

#### 00303091 srcEntry格式错误

<strong>错误信息</strong>

Invalid configuration of XXX field.

<strong>错误描述</strong>

XXX字段无效。

<strong>可能原因</strong>

module.json5中srcEntry字段没有使用相对路径。

<strong>处理步骤</strong>

确保srcEntry字段使用相对路径（如 ./\*\*）。

#### 00303092 卡片配置文件缺少src字段

<strong>错误信息</strong>

The required field form.src is missing.

<strong>错误描述</strong>

缺少必需的字段src。

<strong>可能原因</strong>

卡片配置文件缺少src字段。

<strong>处理步骤</strong>

确保卡片配置文件中包含src字段。

#### 00303093 卡片src的值不在模块下

<strong>错误信息</strong>

The value of form.src: XXX, is not under module YYY.

<strong>错误描述</strong>

form.src的值不在模块YYY下。

<strong>可能原因</strong>

卡片配置文件中src字段的值不在模块YYY下。

<strong>处理步骤</strong>

确保src字段的值在模块YYY下。

#### 00303094 找不到mainElement字段

<strong>错误信息</strong>

The 'mainElement' field was not found in the module.json5 file.

<strong>错误描述</strong>

module.json5文件中找不到mainElement字段。

<strong>可能原因</strong>

元服务工程的module.json5文件中缺少mainElement字段。

<strong>处理步骤</strong>

确保元服务工程的module.json5中包含mainElement字段。

#### 00303096 mock-config.json5文件中的路径无效

<strong>错误信息</strong>

XXX is a invalid path. At file: YYY.

<strong>错误描述</strong>

在mock-config.json5文件中配置的路径无效，或者路径不存在。

<strong>可能原因</strong>

在mock-config.json5文件中配置的路径无效，或者路径不存在。

<strong>处理步骤</strong>

确保在mock-config.json5文件中配置的路径正确且存在。

#### 00303098 app.json5中configuration字段无效

<strong>错误信息</strong>

Invalid configuration in the app.json5.

<strong>错误描述</strong>

app.json5中configuration字段无效。

<strong>可能原因</strong>

app.json5中configuration字段对应的路径不存在。

<strong>处理步骤</strong>

确保configuration字段对应的文件路径存在。

#### 00303099 路径不存在

<strong>错误信息</strong>

Invalid configuration. The path of XXX does not exist. At file: YYY.

<strong>错误描述</strong>

XXX字段对应的路径不存在。

<strong>可能原因</strong>

XXX字段对应的路径不存在。

<strong>处理步骤</strong>

确保XXX字段对应的路径存在。

#### 00303100 general字段错误

<strong>错误信息</strong>

The value of general in the syscap.json file must be the same as that of XXX in the YYY file.

<strong>错误描述</strong>

syscap.json文件中general的值必须和YYY文件中XXX的值相同。

<strong>可能原因</strong>

两个文件中字段的值不一致。

<strong>处理步骤</strong>

确保两个文件中字段的值一致。

#### 00303101 general字段配置的设备类型不一致

<strong>错误信息</strong>

Unable to find the general field or its value is invalid. At file: XXX.

<strong>错误描述</strong>

general未配置，或者配置的设备类型和模块的deviceTypes中配置的不一致。

<strong>可能原因</strong>

general未配置，或者配置的设备类型和模块的deviceTypes中配置的不一致。

<strong>处理步骤</strong>

确保字段存在，并且其值与deviceTypes的值保持一致。

#### 00303104 routerMap配置中的pageSourceFile字段格式无效

<strong>错误信息</strong>

Invalid pageSourceFile format in the XXX routerMap configuration. At file: XXX.

<strong>错误描述</strong>

routerMap配置中的pageSourceFile字段格式无效。

<strong>可能原因</strong>

pageSourceFile字段格式没有以src/开头。

<strong>处理步骤</strong>

确保pageSourceFile字段是以src/开头的相对路径。

#### 00303105 srcLanguage字段没有定义

<strong>错误信息</strong>

Module-Abilities-srcLanguage in XXX is not defined. At file: YYY.

<strong>错误描述</strong>

Module-Abilities-srcLanguage字段没有定义。

<strong>可能原因</strong>

srcLanguage标签缺失。

<strong>处理步骤</strong>

确保YYY文件中的Module-Abilities-srcLanguage字段已定义。

#### 00303106 signingConfigs中没有找到签名材料

<strong>错误信息</strong>

The material has not been configured in signingConfigs. At file: XXX.

<strong>错误描述</strong>

signingConfigs中没有找到签名材料。

<strong>可能原因</strong>

工程级build-profile.json5文件里的signingConfigs下没有配置material。

<strong>处理步骤</strong>

确保工程级build-profile.json5文件的material已配置。

#### 00303107 签名材料无效

<strong>错误信息</strong>

Invalid XXX value. Make sure it is not null or empty. The file must be included in YYY.

<strong>错误描述</strong>

签名材料中的XXX值是个无效的文件或文件夹。

<strong>可能原因</strong>

XXX字段没有配置或者配置的值无效。

<strong>处理步骤</strong>

确保工程级build-profile.json5文件中的XXX字段已配置。若该字段值是某个文件路径，请确保该文件路径存在。

#### 00303108 签名配置的type字段和runtimeOS不匹配

<strong>错误信息</strong>

Signing configuration XXX does not apply to YYY.

<strong>错误描述</strong>

签名配置XXX不能在类型为YYY的工程中使用。

<strong>可能原因</strong>

签名配置的type字段和runtimeOS不匹配。

<strong>处理步骤</strong>

确保工程级build-profile.json5文件中<strong>products</strong>下<strong>runtimeOS</strong>字段<strong>，</strong>和<strong>signingConfigs</strong>下<strong>type</strong>字段取值保持一致。

#### 00303110 找不到pages字段

<strong>错误信息</strong>

Unable to replace pages. Cannot find moduleJsonObj.module.pages in module XXX.

<strong>错误描述</strong>

替换page失败，模块XXX里不存在pages字段。

<strong>可能原因</strong>

模块的module.json5文件里不存在pages字段。

<strong>处理步骤</strong>

确保模块的module.json5文件中存在pages字段。

#### 00303111 buildProfileFields的值仅支持number、string、boolean类型

<strong>错误信息</strong>

buildProfileFields only support number/string/boolean,not support XXX, the value YYY does not meet the requirements.

<strong>错误描述</strong>

buildProfileFields的值仅支持number、string、boolean类型，不支持XXX，值YYY不符合要求。

<strong>可能原因</strong>

buildProfileFields中存在类型不是number、string、boolean的值。

<strong>处理步骤</strong>

确保buildProfileFields的值符合要求。

#### 00303112 当useNormalizedOHMUrl不为true时，不支持字节码har

<strong>错误信息</strong>

byteCodeHar not supported when useNormalizedOHMUrl is not true.

<strong>错误描述</strong>

当useNormalizedOHMUrl不为true时，不支持字节码har。

<strong>可能原因</strong>

当useNormalizedOHMUrl不为true时，不支持字节码har。

<strong>处理步骤</strong>

检查工程级的build-profile.json5文件中的useNormalizedOHMUrl字段配置。

#### 00303113 externalNativeOptions下的path字段的值不能为空

<strong>错误信息</strong>

The configured cmake script in externalNativeOptions/path cannot be empty. At file: XXX.

<strong>错误描述</strong>

externalNativeOptions下的path字段的值不能为空。

<strong>可能原因</strong>

externalNativeOptions下的path字段的值为空。

<strong>处理步骤</strong>

确保模块级/工程级的build-profile.json5文件中的externalNativeOptions/path取值有效。

#### 00303114 HarmonyOS工程不支持armeabi-v7a

<strong>错误信息</strong>

"armeabi-v7a" not supported for HarmonyOS. At file: XXX.

<strong>错误描述</strong>

HarmonyOS工程不支持armeabi-v7a。

<strong>可能原因</strong>

HarmonyOS工程中，abiFilters字段配置为armeabi-v7a。

<strong>处理步骤</strong>

确保[abiFilters](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-cpp#section0721057575)配置的是有效值。

#### 00303115 armeabi-v7a不能是OpenHarmony工程的唯一配置

<strong>错误信息</strong>

"armeabi-v7a" not supported for OpenHarmony as the only option. At file: XXX.

<strong>错误描述</strong>

armeabi-v7a不能是OpenHarmony工程的唯一配置。

<strong>可能原因</strong>

OpenHarmony工程中，abiFilters字段只配置了armeabi-v7a一个值。

<strong>处理步骤</strong>

将"arm64-v8a"或者"x86\_64"添加到abiFilters字段中。

#### 00303116 签名材料中的storePassword或keyPassword字段的值长度小于32

<strong>错误信息</strong>

The length of the storePassword or keyPassword field in the signature configuration is less than 32. At file: XXX.

<strong>错误描述</strong>

签名材料中的storePassword或keyPassword字段的值长度小于32。

<strong>可能原因</strong>

签名材料中的storePassword或keyPassword字段的值长度小于32。

<strong>处理步骤</strong>

清除XXX文件中的signingConfigs字段，点击<strong>File &gt; Project Structure &gt; Project &gt; Signing Configs</strong>重新签名。

#### 00303117 签名材料中的storePassword或keyPassword字段的值长度为偶数

<strong>错误信息</strong>

The length of the storePassword or keyPassword field in the signature configuration is an even number. At file: XXX.

<strong>错误描述</strong>

签名材料中的storePassword或keyPassword字段的值长度为偶数。

<strong>可能原因</strong>

签名材料中的storePassword或keyPassword字段的值长度为偶数。

<strong>处理步骤</strong>

清除XXX文件中的signingConfigs字段，点击<strong>File &gt; Project Structure &gt; Project &gt; Signing Configs</strong>重新签名。

#### 00303118 签名材料数据错误

<strong>错误信息</strong>

Signing failed: Signing material data error!. At file: XXX.

<strong>错误描述</strong>

签名材料数据错误。

<strong>可能原因</strong>

签名材料损坏。

<strong>处理步骤</strong>

清除XXX文件中的signingConfigs字段，点击<strong>File &gt; Project Structure &gt; Project &gt; Signing Configs</strong>重新签名。

#### 00303119 签名材料无效

<strong>错误信息</strong>

Signing failed: Signing materials XXX is illegal!.At file: YYY.

<strong>错误描述</strong>

签名材料XXX无效。

<strong>可能原因</strong>

签名材料损坏。

<strong>处理步骤</strong>

清除YYY文件中的signingConfigs字段，点击<strong>File &gt; Project Structure &gt; Project &gt; Signing Configs</strong>重新签名。

#### 00303120 签名失败：签名材料为空或不是文件夹

<strong>错误信息</strong>

Signing failed: signing material XXX is empty or not a directory.At file: YYY.

<strong>错误描述</strong>

签名材料XXX为空或不是文件夹。

<strong>可能原因</strong>

签名材料为空或不是文件夹。

<strong>处理步骤</strong>

清除YYY文件中的signingConfigs字段，点击<strong>File &gt; Project Structure &gt; Project &gt; Signing Configs</strong>重新签名。

#### 00303121 签名材料错误

<strong>错误信息</strong>

Signing failed: Signing material error. At file: XXX.

<strong>错误描述</strong>

签名材料错误。

<strong>可能原因</strong>

签名材料损坏。

<strong>处理步骤</strong>

清除XXX文件中的signingConfigs字段，点击<strong>File &gt; Project Structure &gt; Project &gt; Signing Configs</strong>重新签名。

#### 00303127 apPath后缀无效

<strong>错误信息</strong>

The suffix of apPath at XXX is invalid.

<strong>错误描述</strong>

apPath后缀无效。

<strong>可能原因</strong>

apPath字段对应的路径后缀不是.ap。

<strong>处理步骤</strong>

确保apPath字段对应的路径后缀是.ap。

#### 00303128 minAPIVersion字段未配置

<strong>错误信息</strong>

The minAPIVersion was not configured. At file: XXX.

<strong>错误描述</strong>

minAPIVersion字段未配置。

<strong>可能原因</strong>

minAPIVersion字段缺失。

<strong>处理步骤</strong>

确保XXX文件中minAPIVersion字段存在。

#### 00303130 找不到指定的product

<strong>错误信息</strong>

Unable to find the product XXX for module YYY. At file: ZZZ.

<strong>错误描述</strong>

无法在指定的文件中找到模块YYY所需的product XXX。

<strong>可能原因</strong>

工程级build-profile.json5文件中的product缺失或错误。

<strong>处理步骤</strong>

检查工程级build-profile.json5文件，确保product正确配置。

#### 00303136 插件的ID重复

<strong>错误信息</strong>

Plugin with ID XXX has been registered. Please check.

<strong>错误描述</strong>

插件的ID重复，该ID已经被使用。

<strong>可能原因</strong>

插件配置的ID与其他插件的ID重复。

<strong>处理步骤</strong>

检查hvigorfile.ts文件，确保插件ID不重复。

#### 00303137 用户目录下不存在.npmrc文件

<strong>错误信息</strong>

The hvigor depends on the npmrc file. No npmrc file is matched in the current user folder. Configure the npmrc file first.

<strong>错误描述</strong>

hvigor依赖于npmrc文件，当前用户目录下不存在.npmrc文件。

<strong>可能原因</strong>

用户目录下不存在.npmrc文件。

<strong>处理步骤</strong>

在用户目录下创建.npmrc文件，配置信息如下：

```
registry=https://repo.huaweicloud.com/repository/npm/
@ohos:registry=https://repo.harmonyos.com/npm/
```

#### 00303138 模块名称不能为空字符串

<strong>错误信息</strong>

Error module name, can not be empty string!

<strong>错误描述</strong>

模块名称不能为空字符串。

<strong>可能原因</strong>

hvigorfile.ts中模块的名称是空字符串。

<strong>处理步骤</strong>

检查hvigorfile.ts文件，确保模块名称是非空字符串。

#### 00303139 hook必须是beforeNodeEvaluate或afterNodeEvaluate

<strong>错误信息</strong>

node Hook must be beforeNodeEvaluate or afterNodeEvaluate.

<strong>错误描述</strong>

hook必须是beforeNodeEvaluate或afterNodeEvaluate。

<strong>可能原因</strong>

hook不是beforeNodeEvaluate或afterNodeEvaluate。

<strong>处理步骤</strong>

确保hook类型是beforeNodeEvaluate或afterNodeEvaluate。

#### 00303140 找不到节点

<strong>错误信息</strong>

Cannot find Node, at file:XXX.

<strong>错误描述</strong>

通过节点名找不到节点。

<strong>可能原因</strong>

模块名称配置错误。

<strong>处理步骤</strong>

确保XXX文件中的模块名称配置正确。

#### 00303143 找不到任务

<strong>错误信息</strong>

Can not find task XXX.At file:YYY.

<strong>错误描述</strong>

通过任务名找不到任务XXX。

<strong>可能原因</strong>

任务名称配置错误。

<strong>处理步骤</strong>

确保YYY文件中的模块名称配置正确。

#### 00303144 任务路径不是有效的值

<strong>错误信息</strong>

XXX is not a valid task node key. The values of moduleName and taskName cannot contain ':'.

<strong>错误描述</strong>

XXX不是有效的任务节点的key，moduleName和taskName的值不能包含':'。

<strong>可能原因</strong>

hvigorfile.ts中moduleName和taskName包含':'这种字符。

<strong>处理步骤</strong>

确保hvigorfile.ts中moduleName和taskName的值不包含':'。

#### 00303145 任务名重复

<strong>错误信息</strong>

Duplicate task: XXX. Rename the task. At file: YYY.

<strong>错误描述</strong>

任务名重复。

<strong>可能原因</strong>

自定义任务与已有任务名称重复。

<strong>处理步骤</strong>

确保自定义任务与已有任务名称不重复。

#### 00303146 oh-package.json5中version字段格式不符合要求

<strong>错误信息</strong>

XXX file version format is not compliant, please check.

<strong>错误描述</strong>

文件XXX中version字段格式不符合要求<strong>。</strong>

<strong>可能原因</strong>

模块级oh-package.json5的version字段不符合[semver](https://semver.org/)规范。

<strong>处理步骤</strong>

按照semver规范修改version字段。

#### 00303147 bundleType为shared时，模块类型也必须是shared

<strong>错误信息</strong>

module type must be shared when bundleType is shared.module name : XXX.

<strong>错误描述</strong>

bundleType配置为shared时，模块类型也必须是shared。

<strong>可能原因</strong>

app.json5中bundleType配置为shared，但XXX模块module.json5的type不是shared。

<strong>处理步骤</strong>

通过以下任意一种方式解决：

* 将XXX模块module.json5中的type设置为shared。
* 将app.json5中的bundleType设置为非shared。

#### 00303148 找不到hvigorfile.ts

<strong>错误信息</strong>

Hvigorfile not found: XXX.

<strong>错误描述</strong>

找不到hvigorfile.ts。

<strong>可能原因</strong>

可能hvigorfile.ts的文件名被修改或文件被删除。

<strong>处理步骤</strong>

确保工程和模块下各包含一个hvigorfile.ts。

#### 00303149 通过文件路径找不到文件

<strong>错误信息</strong>

Path not found: XXX.

<strong>错误描述</strong>

通过文件路径找不到文件。

<strong>可能原因</strong>

文件路径配置错误。

<strong>处理步骤</strong>

根据报错提示信息，检查对应的文件路径。

#### 00303153 json5文件路径不存在

<strong>错误信息</strong>

XXX is not exist.

<strong>错误描述</strong>

json5文件路径不存在。

<strong>可能原因</strong>

文件路径拼写错误。

<strong>处理步骤</strong>

确保文件路径是正确的。

#### 00303155 路径不是文件路径

<strong>错误信息</strong>

the path: XXX is not a file path.

<strong>错误描述</strong>

路径XXX不是文件路径。

<strong>可能原因</strong>

XXX是文件夹。

<strong>处理步骤</strong>

确保文件路径正确且存在。

#### 00303157 config.json文件中ability名称重复

<strong>错误信息</strong>

Check the ability name in the config.json file and make sure it is unique.

<strong>错误描述</strong>

检查config.json文件中的ability名称，确保唯一。

<strong>可能原因</strong>

config.json文件中ability名称重复。

<strong>处理步骤</strong>

检查config.json文件中的ability名称，确保唯一。

#### 00303158 config.json文件中卡片名称重复

<strong>错误信息</strong>

Check the form name in the config.json file and make sure it is unique.

<strong>错误描述</strong>

检查config.json文件中的卡片名称，确保唯一。

<strong>可能原因</strong>

config.json文件中表单名称重复。

<strong>处理步骤</strong>

检查config.json文件中的卡片名称，确保唯一。

#### 00303159 FA模型不支持修改XXX文件

<strong>错误信息</strong>

FA mode does not support modifying the XXX.

<strong>错误描述</strong>

FA模型不支持修改XXX文件。

<strong>可能原因</strong>

在FA模型下修改了XXX文件。

<strong>处理步骤</strong>

改为使用Stage模型。

#### 00303160 插件配置只能使用相对路径

<strong>错误信息</strong>

Only relative path is allowed.

<strong>错误描述</strong>

只允许相对路径。

<strong>可能原因</strong>

hvigorfile.ts中插件配置使用了绝对路径。

<strong>处理步骤</strong>

确保hvigorfile.ts中的插件配置是相对路径。

#### 00303161 插件路径不存在

<strong>错误信息</strong>

plugin path XXX not exists.

<strong>错误描述</strong>

插件路径XXX不存在。

<strong>可能原因</strong>

路径可能拼写错误。

<strong>处理步骤</strong>

确保插件路径正确。

#### 00303164 插件文件必须以.ts结尾

<strong>错误信息</strong>

plugin file XXX must end with .ts.

<strong>错误描述</strong>

插件文件XXX必须以.ts结尾。

<strong>可能原因</strong>

插件文件不是以.ts结尾。

<strong>处理步骤</strong>

确保插件文件以.ts结尾。

#### 00303166 copyFrom存在循环依赖

<strong>错误信息</strong>

buildOptionSet config buildOption: XXX copyFrom has circle.

<strong>错误描述</strong>

buildOptionSet下的XXX配置，copyFrom路径存在循环依赖。

<strong>可能原因</strong>

buildOptionSet下的XXX配置，copyFrom路径存在循环依赖。

<strong>处理步骤</strong>

检查copyFrom路径，确保不存在循环依赖。

#### 00303168 SDK组件缺失

<strong>错误信息</strong>

SDK component missing. Please verify the integrity of your SDK.

<strong>错误描述</strong>

SDK组件缺失。

<strong>可能原因</strong>

配置了错误的SDK。

<strong>处理步骤</strong>

* 确保SDK路径正确：$DevEco Studio安装目录/sdk/default。
* 重新[下载DevEco Studio](https://developer.huawei.com/consumer/cn/download/)。

#### 00303169 har模块中找不到对应的target

<strong>错误信息</strong>

Unable to find target 'XXX' in module 'YYY'. Make sure module 'YYY' has the same target as module 'ZZZ'.

<strong>错误描述</strong>

YYY模块中找不到target XXX，确保YYY模块和ZZZ模块有相同的target。

<strong>可能原因</strong>

模块ZZZ依赖模块YYY，通过命令行编译ZZZ模块时，同时给模块YYY和ZZZ指定了target XXX，但模块YYY中没有target XXX。

<strong>处理步骤</strong>

确保YYY模块和ZZZ模块有相同的target XXX。

#### 00303170 hsp模块中找不到对应的target

<strong>错误信息</strong>

Unable to find target 'XXX' in module 'YYY'. Make sure module 'YYY' has the same target as module 'ZZZ'.

<strong>错误描述</strong>

YYY模块中找不到target XXX，确保YYY模块和ZZZ模块有相同的target。

<strong>可能原因</strong>

模块ZZZ依赖模块YYY，通过命令行编译ZZZ模块时，同时给模块YYY和ZZZ指定了target XXX，但模块YYY中没有target XXX。

<strong>处理步骤</strong>

确保YYY模块和ZZZ模块有相同的target XXX。

#### 00303172 transformLib的值不是文件

<strong>错误信息</strong>

Invalid transformLib value XXX is not File.

<strong>错误描述</strong>

无效的transformLib值，XXX不是文件。

<strong>可能原因</strong>

transformLib对应的文件路径错误。

<strong>处理步骤</strong>

确保transformLib对应的文件路径正确。

#### 00303173 在Windows上transformLib的值需要是.dll文件

<strong>错误信息</strong>

Invalid transformLib value, it requires a .dll file in Windows.

<strong>错误描述</strong>

无效的transformLib值，在Windows上需要一个.dll文件。

<strong>可能原因</strong>

在Windows系统上，transformLib的值不是需.dll文件类型。

<strong>处理步骤</strong>

确保transformLib的值是.dll文件。

#### 00303179 metadata.resource必须是字符串

<strong>错误信息</strong>

metadata.resource must be string in file: XXX.

<strong>错误描述</strong>

metadata.resource必须是字符串。

<strong>可能原因</strong>

metadata.resource配置为其他类型的值。

<strong>处理步骤</strong>

确保metadata.resource为字符串类型。

#### 00303181 metadata.resource存在无法解析的符号

<strong>错误信息</strong>

Cannot resolve symbol metadata.resource. At file XXX.

<strong>错误描述</strong>

metadata.resource存在无法解析的符号。

<strong>可能原因</strong>

metadata.resource对应的文件路径配置错误。

<strong>处理步骤</strong>

确保路径正确，且文件存在。

#### 00303183 版本号不是string类型

<strong>错误信息</strong>

Invalid dependency: Version XXX is not a string.

<strong>错误描述</strong>

无效的依赖：版本号XXX不是string类型。

<strong>可能原因</strong>

hvigorfile.ts中的版本号不是string类型。

<strong>处理步骤</strong>

检查hvigorfile.ts文件的setVersion接口，确保接口的参数为string类型。

#### 00303184 依赖值不是string类型

<strong>错误信息</strong>

Invalid dependency: DependencyVersion XXX is not a string.

<strong>错误描述</strong>

无效的依赖：依赖值XXX不是string类型。

<strong>可能原因</strong>

hvigorfile.ts文件的依赖值XXX不是string类型。

<strong>处理步骤</strong>

检查hvigorfile.ts文件，确保XXX是string类型。

#### 00303185 不能动态新增或删除products

<strong>错误信息</strong>

Cannot add or delete products, at file:XXX.

<strong>错误描述</strong>

不能新增或删除products。

<strong>可能原因</strong>

通过hvigorfile.ts插件的setBuildProfileOpt接口新增或删除了工程级build-profile.json5文件中的products。

<strong>处理步骤</strong>

检查hvigorfile.ts文件，确保没有新增或删除products。

#### 00303186 不能重命名products或runtimeOS

<strong>错误信息</strong>

Cannot rename products or runtimeOS. Keep the name or runtimeOS XXX unchanged.

<strong>错误描述</strong>

不能重命名products或runtimeOS，保持名称XXX不变。

<strong>可能原因</strong>

通过hvigorfile.ts插件的setBuildProfileOpt接口修改了工程级build-profile.json5文件中products下的name和runtimeOS。

<strong>处理步骤</strong>

检查hvigorfile.ts文件，确保没有修改products下的name和runtimeOS。

#### 00303188 moduleType值无效

<strong>错误信息</strong>

moduleType: XXX is an invalid value.

<strong>错误描述</strong>

moduleType值XXX无效。

<strong>可能原因</strong>

moduleType配置错误或拼写错误。

<strong>处理步骤</strong>

请修改module.json5或config.json文件中<strong>module &gt; type</strong>字段的值。可取值范围包含：entry、feature、har、shared。

#### 00303189 runtimeOS值无效

<strong>错误信息</strong>

runtimeOS: XXX is an invalid value. Please check it.

<strong>错误描述</strong>

runtimeOS值XXX无效。

<strong>可能原因</strong>

runtimeOS配置错误或拼写错误。

<strong>处理步骤</strong>

确保build-profile.json5文件中，runtimeOS的值为OpenHarmony或HarmonyOS。

#### 00303190 Page Ability缺少对应的JS组件

<strong>错误信息</strong>

A Page ability requires a JS component with the same name at XXX.

<strong>错误描述</strong>

Page Ability需要一个与其同名的JS组件。

<strong>可能原因</strong>

config.json文件中未定义对应的JS组件，或者JS组件名称与Page Ability不匹配或拼写错误。

<strong>处理步骤</strong>

确保在config.json文件中包含一个与Page Ability同名的JS组件。

#### 00303191 FA模型Ability名称不存在

<strong>错误信息</strong>

Ability name XXX does not exist in config.json.

<strong>错误描述</strong>

config.json文件中找不到名为XXX的Ability。

<strong>可能原因</strong>

config.json文件中未定义XXX Ability或者拼写错误。

<strong>处理步骤</strong>

确保config.json文件中Ability XXX存在且正确。

#### 00303192 FA模型项目中feature模块必须配置entryModules

<strong>错误信息</strong>

entryModules must be configured for a feature module in FA project.

<strong>错误描述</strong>

FA模型项目的feature模块必须配置entryModules。

<strong>可能原因</strong>

模块级build-profile.json5文件中未配置entryModules。

<strong>处理步骤</strong>

在模块级build-profile.json5文件中配置entryModules。

#### 00303193 FA模型中找不到模块的deviceType配置

<strong>错误信息</strong>

Unable to obtain the module deviceType.

<strong>错误描述</strong>

无法获取模块的deviceType。

<strong>可能原因</strong>

config.json文件中缺少deviceType字段。

<strong>处理步骤</strong>

确保config.json文件存在且格式正确，并正确配置deviceType字段信息。

#### 00303194 Stage模型中找不到模块的deviceTypes配置

<strong>错误信息</strong>

Unable to obtain the module deviceTypes.

<strong>错误描述</strong>

无法获取模块的deviceTypes。

<strong>可能原因</strong>

module.json5文件中缺少deviceTypes字段。

<strong>处理步骤</strong>

确保module.json5文件存在且格式正确，并正确配置deviceTypes字段信息。

#### 00303195 无法获取模块信息

<strong>错误信息</strong>

Unable to obtain the module information at file: XXX.

<strong>错误描述</strong>

无法从module.json5文件中获取模块信息。

<strong>可能原因</strong>

module.json5文件缺少module字段。

<strong>处理步骤</strong>

确保module.json5文件中的module字段已正确配置。

#### 00303196 无法获取模块类型

<strong>错误信息</strong>

Unable to obtain the module type at file: XXX.

<strong>错误描述</strong>

无法获取模块类型。

<strong>可能原因</strong>

module.json5文件中缺少type字段。

<strong>处理步骤</strong>

确保module.json5文件中的module.type字段已正确配置。

#### 00303197 缺少或无效的parameterFile配置

<strong>错误信息</strong>

Missing or invalid config of parameterFile in the project-level oh-package.json5 file. Check at file: XXX.

<strong>错误描述</strong>

工程级oh-package.json5文件中缺少parameterFile字段，或该字段的配置无效。

<strong>可能原因</strong>

工程级oh-package.json5文件中未定义parameterFile字段或者parameterFile配置错误或格式无效。

<strong>处理步骤</strong>

在工程级oh-package.json5文件中添加[parameterFile](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-oh-package-json5#section122411462820)字段，并确保配置正确。

#### 00303198 build-profile.json5文件不符合schema规范

<strong>错误信息</strong>

The project-level build-profile.json5 file does not comply with the schema.

<strong>错误描述</strong>

工程级build-profile.json5文件未遵循schema规范。

<strong>可能原因</strong>

1. build-profile.json5文件直接从其他模块复制，导致格式或字段不兼容。
2. 模块级hvigorfile.ts文件的system字段错误地配置为appTasks。

<strong>处理步骤</strong>

1. 检查工程级build-profile.json5文件，移除从其他模块直接复制的字段，确保字段符合规范。
2. 检查模块级hvigorfile文件，根据模块类型选择以下插件进行配置：hapTasks/hspTasks/harTasks。

#### 00303199 build-profile.json5中找不到product信息

<strong>错误信息</strong>

No products found in the build-profile.json5 file. At file: XXX.

<strong>错误描述</strong>

工程级build-profile.json5文件中找不到products配置。

<strong>可能原因</strong>

工程级build-profile.json5文件中缺少products字段。

<strong>处理步骤</strong>

在工程级build-profile.json5文件中配置products。

#### 00303200 模块名称无效

<strong>错误信息</strong>

Invalid module name settings in these modules: 'XXX'. Check whether the module is valid.

<strong>错误描述</strong>

模块名称XXX无效。

<strong>可能原因</strong>

ArkUI-X工程的arkui-x-config.json5文件中，模块名称modules错误。

<strong>处理步骤</strong>

确保modules对应的模块名称正确。

#### 00303201 模块target不存在

<strong>错误信息</strong>

The module target XXX is not found in the YYY.

<strong>错误描述</strong>

在模块YYY中未找到target XXX。

<strong>可能原因</strong>

模块YYY中未定义target XXX。

<strong>处理步骤</strong>

检查命令行的target，或者模块build-profile.json5中的target配置是否正确。

#### 00303202 entry模块缺失

<strong>错误信息</strong>

No available entry module found.

<strong>错误描述</strong>

找不到可用的entry模块。

<strong>可能原因</strong>

1. 模块级build-profile.json5文件中缺少entryModules配置。
2. 所关联的entry模块未正确定义或拼写错误。

<strong>处理步骤</strong>

检查feature模块级build-profile.json5文件，确保存在entryModules且字段正确配置。

#### 00303203 命令行中的构建模式没有在buildModeSet中定义

<strong>错误信息</strong>

Build mode XXX used in command line is not declared in buildModeSet in file: YYY.

<strong>错误描述</strong>

命令行中使用的构建模式XXX没有在YYY文件的buildModeSet字段中定义。

<strong>可能原因</strong>

工程级build-profile.json5中未定义XXX构建模式。

<strong>处理步骤</strong>

在工程级build-profile.json5的buildModeSet字段中添加XXX构建模式。

#### 00303204 buildModeBinder中的构建模式没有在buildModeSet中定义

<strong>错误信息</strong>

Build mode XXX used in buildModeBinder is not declared in buildModeSet in file: YYY.

<strong>错误描述</strong>

buildModeBinder中使用的构建模式XXX没有在YYY文件的buildModeSet字段中定义。

<strong>可能原因</strong>

YYY文件中未定义XXX构建模式。

<strong>处理步骤</strong>

在YYY文件的buildModeSet字段中添加XXX构建模式。

#### 00303205 buildModeBinder中的target未定义

<strong>错误信息</strong>

Target XXX used in buildModeBinder is not declared in file: YYY.

<strong>错误描述</strong>

buildModeBinder中使用的targetName XXX没有在YYY文件中定义。

<strong>可能原因</strong>

YYY文件中未定义XXX target。

<strong>处理步骤</strong>

在YYY文件的targets字段中添加XXX。

#### 00303206 buildModeBinder中的构建选项未定义

<strong>错误信息</strong>

Build option XXX used in buildModeBinder is not declared in file: YYY.

<strong>错误描述</strong>

buildModeBinder中使用的buildOptionName XXX没有在YYY文件的buildOptionSet字段中定义。

<strong>可能原因</strong>

YYY文件中未定义XXX构建选项。

<strong>处理步骤</strong>

在YYY文件的buildOptionSet字段中添加XXX构建选项。

#### 00303207 找不到ArkUI-X SDK目录

<strong>错误信息</strong>

Unable to find XXX in local.properties or YYY in the system environment path. Check at file: ZZZ.

<strong>错误描述</strong>

在local.properties或系统环境变量中找不到ArkUI-X SDK目录。

<strong>可能原因</strong>

1. 未下载ArkUI-X SDK。
2. local.properties文件未配置SDK路径XXX，或路径配置错误。
3. 本地系统中未配置环境变量YYY，或环境变量对应的SDK路径错误。

<strong>处理步骤</strong>

1. 在<strong>File &gt; Settings &gt; ArkUI-X</strong>（macOS为<strong>DevEco Studio &gt; Preferences/Settings &gt; ArkUI-X</strong>）下载SDK。
2. 在local.properties或本地系统环境变量中配置SDK路径，并且路径和SDK实际安装路径一致。

#### 00303208 找不到SDK目录

<strong>错误信息</strong>

Unable to find XXX in local.properties or YYY in the system environment path. Check at file: ZZZ.

<strong>错误描述</strong>

系统未能找到XXX，导致SDK配置异常。

<strong>可能原因</strong>

1. local.properties文件中缺少XXX配置项。
2. 环境变量YYY未正确设置或路径错误。

<strong>处理步骤</strong>

1. 确保local.properties中已正确配置SDK路径，运行hvigorw--stop-daemon停止守护进程后重试。
2. 将YYY添加到系统环境变量路径中。

#### 00303209 FA的entry模块缺少Target

<strong>错误信息</strong>

Unable to find target 'YYY' in module 'XXX'.

<strong>错误描述</strong>

在模块XXX中找不到target YYY。

<strong>可能原因</strong>

target YYY在XXX模块中未正确配置或缺失。

<strong>处理步骤</strong>

检查FA模型feature模块所关联的entry模块是否存在对应的target。

#### 00303210 Arkdata JSON文件名称相同

<strong>错误信息</strong>

The XXX file in the YYY module has the same name as the ZZZ file in the AAA module.

<strong>错误描述</strong>

YYY模块中的XXX文件与AAA模块中的ZZZ文件名称相同。

<strong>可能原因</strong>

两个模块中存在同名的Arkdata JSON文件。

<strong>处理步骤</strong>

重命名其中一个文件，避免命名冲突。

#### 00303211 模块缺少ohosTest target

<strong>错误信息</strong>

The module XXX does not exist ohosTest target, Failed to execute the command YYY.

<strong>错误描述</strong>

生成ohos测试覆盖率报告场景下，模块XXX未定义ohosTest target，导致命令 'ohosTest' 执行失败。

<strong>可能原因</strong>

模块级build-profile.json5文件中未配置ohosTest target。

<strong>处理步骤</strong>

检查XXX模块的build-profile.json5文件，确保存在name为ohosTest的target。

#### 00303214 目标设备类型不一致

<strong>错误信息</strong>

The type of target device does not match the device type configured by module: XXX.Required device type:XXX, current module device type:XXX.

<strong>错误描述</strong>

目标设备类型与模块中配置的设备类型不一致。

<strong>可能原因</strong>

执行hvigorw命令时，指定的设备类型在module.json5或模块级build-profile.json5中未定义，或者设备类型被错误修改。

<strong>处理步骤</strong>

1. 确保在模块module.json5中配置的deviceTypes包含所需的设备类型。
2. 如果模块级build-profile.json5中targets字段下已定义deviceType，确保deviceType包含所需的设备类型。
3. 确保hvigorfile.ts或hvigorconfig.ts文件中没有修改设备类型。

#### 00303215 依赖名称与包名不一致

<strong>错误信息</strong>

There are some dependency names that are inconsistent with the actual package names.

<strong>错误描述</strong>

有一些依赖名称与实际包名不一致。

<strong>可能原因</strong>

依赖名称配置与实际包名不一致。

<strong>处理步骤</strong>

根据报错提示信息检查依赖名称，确保和依赖包oh-package.json5中的name保持一致。

#### 00303216 parameterFile文件格式无法识别

<strong>错误信息</strong>

Unrecognized archive format in parameterFile.

<strong>错误描述</strong>

ParameterFile文件格式无法识别。

<strong>可能原因</strong>

ParameterFile配置文件的依赖配置不是文件目录也不是har/tgz文件。

<strong>处理步骤</strong>

确保依赖配置是目录，或者是har/tgz文件。

#### 00303217 环境路径无效

<strong>错误信息</strong>

Invalid value of 'XXX' in the system environment path.

<strong>错误描述</strong>

系统环境变量中的'XXX'值无效。

<strong>可能原因</strong>

系统环境路径中的'XXX'值设置错误。

<strong>处理步骤</strong>

修改环境路径XXX的值，再执行hvigorw --stop-daemon命令，然后重试。

#### 00303218 配置user\_grant权限必须有reason和usedScene属性

<strong>错误信息</strong>

The reason and usedScene attributes are mandatory for user\_grant permissions.

<strong>错误描述</strong>

对于user\_grant权限，reason和usedScene属性是必需的。

<strong>可能原因</strong>

在module.json5文件中配置user\_grant类型的权限缺少reason或usedScene属性。

<strong>处理步骤</strong>

具体配置方式请参考[声明权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/declare-permissions)，需要满足以下条件：

1. 对于HAP模块，在module.json5文件的requestPermissions中添加reason和usedScene字段。
2. 对于HAR/HSP模块，在module.json5文件的requestPermissions中添加reason字段。

#### 00303219 routerMap对象名称重复

<strong>错误信息</strong>

Duplicate 'routerMap' object names detected.

<strong>错误描述</strong>

检测到重复的“routerMap”对象名称。

<strong>可能原因</strong>

当前模块的router\_map.json中存在name重复的routerMap配置，或者当前模块与依赖模块存在name重复的routerMap配置。

<strong>处理步骤</strong>

修改router\_map.json文件中的name字段，保证name的值唯一。

#### 00303220 获取模块类型失败

<strong>错误信息</strong>

Failed to obtain the module type.

<strong>错误描述</strong>

获取模块类型失败。

<strong>可能原因</strong>

1. 在FA模型中，config.json文件不存在。
2. 在FA模型中，config.json文件中的module/distro/moduleType字段缺失或者配置错误。

<strong>处理步骤</strong>

1. 确保config.json文件存在。
2. 确保在FA模型中，config.json文件中的module/distro/moduleType字段存在且配置正确。

#### 00303221 权限未定义

<strong>错误信息</strong>

The XXX permission under requestPermissions must be a value that is predefined within the SDK or a custom one that you have included under definePermissions.

<strong>错误描述</strong>

requestPermissions下的XXX权限必须是SDK中预定义的值，或者是在definePermissions下包含的自定义值。

<strong>可能原因</strong>

在module.json5文件的requestPermissions中配置name时，配置了不存在的权限名称。

<strong>处理步骤</strong>

在module.json5文件的requestPermissions中配置name字段，必须是SDK中预定义的权限，或者在definePermissions下自定义的权限。

#### 00303222 reason属性是必需的

<strong>错误信息</strong>

The reason attribute are mandatory for user\_grant permissions.

<strong>错误描述</strong>

对于user\_grant权限，reason属性是必需的。

<strong>可能原因</strong>

在module.json5文件中配置user\_grant类型的权限缺少reason属性。

<strong>处理步骤</strong>

具体配置方式请参考[声明权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/declare-permissions)，需要满足以下条件：

1. 对于HAP模块，在module.json5文件的requestPermissions中添加reason和usedScene字段。
2. 对于HAR/HSP模块，在module.json5文件的requestPermissions中添加reason字段。

#### 00303223 FormExtensionAbility中的metadata字段不能为空或为空数组

<strong>错误信息</strong>

The metadata field in FormExtensionAbility cannot be left blank or as an empty array.

<strong>错误描述</strong>

FormExtensionAbility中的metadata字段不能为空或为空数组。

<strong>可能原因</strong>

module.json5中type为form的ExtensionAbility中的metadata字段为空或者空数组。

<strong>处理步骤</strong>

在module.json5中type为form的ExtensionAbility中配置[metadata字段](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-widget-configuration)。

#### 00303224 FormExtensionAbility中的metadata必须包含ohos.extension.form

<strong>错误信息</strong>

In FormExtensionAbility, metadata must contain an object with its name set to 'ohos.extension.form' and resource set to a second-level resource reference.

<strong>错误描述</strong>

在FormExtensionAbility中，metadata必须包含一个对象，其名称设置为“ohos.extension.form”，资源设置为二级资源引用。

<strong>可能原因</strong>

module.json5中type为form的ExtensionAbility中的metadata缺少name为“ohos.extension.form”的对象值，或者缺少resource字段。

<strong>处理步骤</strong>

在module.json5中type为form的ExtensionAbility中增加metadata字段，补充一个name为“ohos.extension.form”的对象值，并配置对应的resource值，具体配置方式参考[配置卡片的配置文件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-widget-configuration)。

#### 00303225 “Module-Abilities”对象的名称重复

<strong>错误信息</strong>

Duplicate 'Module-Abilities' object names detected.

<strong>错误描述</strong>

“Module-Abilities”对象的名称重复。

<strong>可能原因</strong>

本模块和依赖har模块的module.json5中存在name值相同的abilities对象或extensionAbilities对象。

<strong>处理步骤</strong>

检查本模块和依赖har模块的module.json5中的abilities对象或extensionAbilities对象的name值，确保name值唯一。

#### 00303226 卡片名称无效

<strong>错误信息</strong>

Invalid form name 'XXX'.

<strong>错误描述</strong>

卡片名称无效。

<strong>可能原因</strong>

卡片名称XXX在form\_config.json中未定义。

<strong>处理步骤</strong>

确保卡片名称在form\_config.json文件中已配置。

#### 00303227 缺失“string”属性

<strong>错误信息</strong>

File 'string.json' is missing the required property 'string'.

<strong>错误描述</strong>

资源文件“string.json”缺少必需的属性“string”。

<strong>可能原因</strong>

资源文件“string.json”缺少必需的属性“string”。

<strong>处理步骤</strong>

确保“string.json”文件包含名为“string”的属性。

#### 00303228 version字段不允许使用tag标签

<strong>错误信息</strong>

The 'tag' keyword is not allowed for 'version' at XXX.

<strong>错误描述</strong>

oh-package.json5的version字段不允许使用tag标签。

<strong>可能原因</strong>

使用parameterFile参数化配置版本号时，oh-package.json5的version字段不允许使用tag标签。

<strong>处理步骤</strong>

oh-package.json5中的version字段引用parameterFile时，不使用tag标签。

#### 00303229 找不到模块名

<strong>错误信息</strong>

The required attribute: module-name is missing.

<strong>错误描述</strong>

缺少必需属性：module-name。

<strong>可能原因</strong>

1. 工程级build-profile.json5中modules下的name字段缺失。
2. hvigorconfig.ts动态添加模块时未设置name参数。

<strong>处理步骤</strong>

1. 检查项目根目录下的build-profile.json5文件，确保modules下的name字段存在且非空。
2. 检查项目根目录下的[hvigorconfig.ts文件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-life-cycle#section810245135914)，确保includeNode方法的参数name字段存在且非空。

#### 00303230 找不到模块的srcPath

<strong>错误信息</strong>

The required attribute module-srcPath is missing.

<strong>错误描述</strong>

缺少必需属性：module-srcPath。

<strong>可能原因</strong>

1. 工程级build-profile.json5中modules下的srcPath字段缺失。
2. hvigorconfig.ts动态添加模块时未设置srcPath参数。

<strong>处理步骤</strong>

1. 检查项目根目录下的build-profile.json5文件，确保modules下的srcPath字段存在且非空。
2. 检查项目根目录下的[hvigorconfig.ts文件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-life-cycle#section810245135914)，确保includeNode方法的参数srcPath字段存在且非空。

#### 00303231 srcPath属性值不是相对路径

<strong>错误信息</strong>

The srcPath is not a relative path: XXX.

<strong>错误描述</strong>

srcPath属性值不是相对路径。

<strong>可能原因</strong>

hvigorconfig.ts动态添加模块时srcPath属性值不是相对路径。

<strong>处理步骤</strong>

检查项目根目录下的[hvigorconfig.ts文件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-life-cycle#section810245135914)，确保includeNode方法的参数srcPath字段为相对路径。

#### 00303232 设置任务依赖时找不到模块

<strong>错误信息</strong>

Failed to find the XXX node while setting the task dependencies in the YYY module's task: ZZZ.

<strong>错误描述</strong>

设置任务依赖时找不到模块。

<strong>可能原因</strong>

任务依赖中的模块名字配置错误。

<strong>处理步骤</strong>

检查hvigorfile.ts文件，确保任务依赖中的模块名字配置正确。

#### 00303234 找不到路径

<strong>错误信息</strong>

Path not found. At path: XXX.

<strong>错误描述</strong>

找不到路径。

<strong>可能原因</strong>

路径配置错误。

<strong>处理步骤</strong>

根据报错信息提示，确保路径配置正确。

#### 00303236 hvigor-config.json5文件中存在语法错误

<strong>错误信息</strong>

以实际语法错误为准。

<strong>错误描述</strong>

hvigor-config.json5文件中存在语法错误。

<strong>可能原因</strong>

hvigor-config.json5文件中存在语法错误，具体错误请参阅报错信息。

<strong>处理步骤</strong>

根据报错信息处理hvigor-config.json5文件中的语法错误。

#### 00303237 hvigor-config.json5中ohos.align.target的值必须是字符串类型

<strong>错误信息</strong>

The value of 'ohos.align.target' in hvigor-config.json5 must be a string.

<strong>错误描述</strong>

hvigor-config.json5中ohos.align.target的值必须是字符串类型。

<strong>可能原因</strong>

hvigor-config.json5中ohos.align.target的值不是字符串类型。

<strong>处理步骤</strong>

确保ohos.align.target的值是字符串类型。

#### 00303238 ability名称无效

<strong>错误信息</strong>

Invalid ability name XXX. At file: YYY.

<strong>错误描述</strong>

ability名称XXX无效。

<strong>可能原因</strong>

意图框架配置文件insight\_intent.json中的insightIntents字段下的uiAbility对象的ability属性值无效。

<strong>处理步骤</strong>

确保在module.json5文件中abilities字段下配置了name为XXX的ability。

#### 00303242 签名材料校验失败

<strong>错误信息</strong>

Signature material verification failed, as: XXX.

<strong>错误描述</strong>

签名材料校验失败。

<strong>可能原因</strong>

build-profile.json5中签名字段信息不完整或者签名材料损坏。

<strong>处理步骤</strong>

1. 点击<strong>File &gt; Project Structure &gt; Project &gt; Signing Configs</strong>重新签名。
2. 如果执行构建还是报错，说明您的material文件已经损坏，请访问C:\Users\用户名\.ohos\config （macOS路径为/Users/用户名/.ohos/config）删除material文件夹，然后点击<strong>File &gt; Project Structure &gt; Project &gt; Signing Configs</strong>重新签名。

#### 00303243 ability名称无效

<strong>错误信息</strong>

Invalid ability name XXX. At file: YYY.

<strong>错误描述</strong>

ability名称XXX无效。

<strong>可能原因</strong>

意图框架配置文件insight\_intent.json中insightIntents字段下的serviceExtension对象的ability属性值无效。

<strong>处理步骤</strong>

确保在module.json5文件中的extensionAbilities字段下存在name值为XXX的extension ability，并且type类型为service。

#### 00303244 ability名称无效

<strong>错误信息</strong>

Invalid ability name XXX. At file: YYY.

<strong>错误描述</strong>

ability名称XXX无效。

<strong>可能原因</strong>

意图框架配置文件insight\_intent.json中insightIntents字段下的form对象的ability属性值无效。

<strong>处理步骤</strong>

确保在module.json5文件中的extensionAbilities字段下存在name值为XXX的extension ability，并且type类型为form。

#### 00303245 ability名称无效

<strong>错误信息</strong>

Invalid ability name XXX. At file: YYY.

<strong>错误描述</strong>

ability名称XXX无效。

<strong>可能原因</strong>

意图框架配置文件insight\_intent.json中insightIntents字段下的uiExtension对象的ability属性值无效。

<strong>处理步骤</strong>

确保在module.json5文件中的abilities或extensionAbilities字段下配置了name为XXX的ability。

#### 00303249 任务之间存在循环依赖关系

<strong>错误信息</strong>

Circular dependency between the following tasks.

<strong>错误描述</strong>

任务之间存在循环依赖关系。

<strong>可能原因</strong>

用户配置自定义任务的依赖关系，任务之间存在循环依赖。

<strong>处理步骤</strong>

根据提示信息，移除导致循环依赖的任务。

#### 00303250 FA模型工程不支持preloadSystemSo

<strong>错误信息</strong>

FA mode does not support 'preloadSystemSo'.

<strong>错误描述</strong>

FA模型工程不支持preloadSystemSo。

<strong>可能原因</strong>

工程级build-profile.json5的buildOption下配置preloadSystemSo为true。

<strong>处理步骤</strong>

移除preloadSystemSo，或将preloadSystemSo配置为false。

#### 00303251 preloadSystemSo与ohos.arkCompile.singleFileEmit不能同时开启

<strong>错误信息</strong>

'ohos.arkCompile.singleFileEmit' does not support when 'preloadSystemSo' is set to true.

<strong>错误描述</strong>

preloadSystemSo与ohos.arkCompile.singleFileEmit不能同时开启。

<strong>可能原因</strong>

工程级build-profile.json5的preloadSystemSo配置为true，同时hvigor-config.json5的ohos.arkCompile.singleFileEmit配置为true。

<strong>处理步骤</strong>

* 移除ohos.arkCompile.singleFileEmit，或将ohos.arkCompile.singleFileEmit配置为false。
* 移除preloadSystemSo，或将preloadSystemSo配置为false。

#### 00303252 找不到模块

<strong>错误信息</strong>

Referenced module XXX not found.

<strong>错误描述</strong>

工程中找不到配置的模块。

<strong>可能原因</strong>

formExtensionModule/formWidgetModule对应的模块名称不存在。

<strong>处理步骤</strong>

确保模块在工程中存在。

#### 00303253 formExtensionModule配置的模块类型错误

<strong>错误信息</strong>

formExtensionModule can only reference entry or feature modules, but XXX is of type YYY.

<strong>错误描述</strong>

formExtensionModule只能指向feature模块或者entry模块，但是模块XXX的类型是YYY。

<strong>可能原因</strong>

formExtensionModule指向的模块类型不是entry或feature。

<strong>处理步骤</strong>

确保formExtensionModule指向一个entry或者feature类型的模块。

#### 00303254 独立卡片包关联的模块错误

<strong>错误信息</strong>

Referenced module XXX must have formWidgetModule/formExtensionModule pointing back to YYY to establish a bidirectional reference.

<strong>错误描述</strong>

模块XXX的formWidgetModule/formExtensionModule需要指向模块YYY来确保两个模块双向关联。

<strong>可能原因</strong>

formWidgetModule/formExtensionModule字段没有配置为模块XXX或YYY。

<strong>处理步骤</strong>

1. 确保XXX模块中的formWidgetModule/formExtensionModule字段配置为YYY。
2. 确保YYY模块中的formWidgetModule/formExtensionModule字段配置为XXX。

#### 00303255 共包卡片和独立卡片包不能同时存在

<strong>错误信息</strong>

Embedded widgets and standalone widgets must not be used together.

<strong>错误描述</strong>

共包卡片和独立卡片包不能同时存在。

<strong>可能原因</strong>

当使用独立卡片包时，在应用包entry和卡片包library中同时存在form\_config.json文件。

<strong>处理步骤</strong>

移除独立卡片包或移除共包卡片。

#### 00303256 独立卡片包的library模块只允许依赖HAR模块

<strong>错误信息</strong>

When a module is a standalone widget, all of its dependencies must be HAR modules.

<strong>错误描述</strong>

独立卡片包的library模块只允许依赖HAR模块。

<strong>可能原因</strong>

独立卡片包的library模块的oh-package.json5中依赖了HSP模块。

<strong>处理步骤</strong>

将独立卡片包的library模块的oh-package.json5中的HSP依赖移除。

#### 00303257 deliveryWithInstall未配置为true

<strong>错误信息</strong>

Field deliveryWithInstall was not set to true.

<strong>错误描述</strong>

deliveryWithInstall未配置为true。

<strong>可能原因</strong>

deliveryWithInstall未配置为true。

<strong>处理步骤</strong>

独立卡片包的应用包entry和卡片包library的module.json5中的deliveryWithInstall字段都需配置为true。

#### 00303258 独立卡片包不支持在低于API 20的工程中使用

<strong>错误信息</strong>

Standalone widgets are not supported on API versions earlier than 20. Set compatibleSdkVersion to 6.0.0(20) or higher in the project-level build-profile.json5 file.

<strong>错误描述</strong>

独立卡片包不支持在低于API 20的工程中使用。

<strong>可能原因</strong>

使用独立卡片包的工程的compatibleSdkVersion低于6.0.0(20)。

<strong>处理步骤</strong>

将工程级build-profile.json5的compatibleSdkVersion配置为6.0.0(20)及以上。

#### 00303259 formWidgetModule配置的模块类型错误

<strong>错误信息</strong>

formWidgetModule can only reference a hsp module, but XXX is of type YYY.

<strong>错误描述</strong>

formWidgetModule只能指向HSP模块，但是模块XXX的类型是YYY。

<strong>可能原因</strong>

formWidgetModule指向的模块类型不是HSP。

<strong>处理步骤</strong>

确保formWidgetModule指向一个HSP模块。

#### 00303260 合并后的共享配置文件的uri重复

<strong>错误信息</strong>

Duplicate 'crossAppSharedConfig' object uris detected.

<strong>错误描述</strong>

不同模块合并后的共享配置文件的crossAppSharedConfig对象中存在重复的uri。

<strong>可能原因</strong>

当前模块和依赖模块的共享配置文件中存在重复的uri。

<strong>处理步骤</strong>

修改uri值，确保不重复。

#### 00303261 当前模块的共享配置文件的uri重复

<strong>错误信息</strong>

Duplicate uri exists in the crossAppSharedConfig configuration file of the current module.

<strong>错误描述</strong>

当前模块的共享配置文件的crossAppSharedConfig对象中存在重复的uri。

<strong>可能原因</strong>

共享配置文件的crossAppSharedConfig对象中存在重复的uri。

<strong>处理步骤</strong>

修改uri值，确保不重复。

#### 00303262 FA模型工程不支持expandImportPath

<strong>错误信息</strong>

FA mode does not support 'expandImportPath'.

<strong>错误描述</strong>

FA模型工程不支持expandImportPath。

<strong>可能原因</strong>

build-profile.json5中配置了expandImportPath。

<strong>处理步骤</strong>

移除expandImportPath。

#### 00303263 expandImportPath.exclude配置不合法

<strong>错误信息</strong>

Dependency names: '[XXX]' configured in 'expandImportPath.exclude' are prohibited in current module.

<strong>错误描述</strong>

expandImportPath.exclude中不允许配置依赖XXX。

<strong>可能原因</strong>

build-profile.json5的expandImportPath.exclude配置的依赖别名不是本地HAR模块。

<strong>处理步骤</strong>

expandImportPath.exclude中移除依赖别名XXX。

#### 00303265 sourceRoots文件路径无效

<strong>错误信息</strong>

Invalid value 'XXX' in module 'YYY'. At file: 'ZZZ'.

<strong>错误描述</strong>

模块YYY中的配置XXX无效。

<strong>可能原因</strong>

模块YYY的build-profile.json5中的sourceRoots字段的值无效。

<strong>处理步骤</strong>

确保sourceRoots字段对应的所有路径满足以下条件：

1. 每个路径都存在且唯一。
2. 路径是相对路径。
3. 路径在模块下，并且是一个目录。

#### 00303267 找不到product XXX

<strong>错误信息</strong>

Can not find product XXX. At File: YYY.

<strong>错误描述</strong>

找不到product XXX。

<strong>可能原因</strong>

编译命令中指定的product在工程级build-profile.json5中未找到。

<strong>处理步骤</strong>

修改编译参数，使用正确的product。

#### 00303268 hspA和hspB共同依赖的har包需要配置在hap的依赖中

<strong>错误信息</strong>

$`&#123;har&#125;`: the common dependency of $`&#123;hspA&#125;` and $`&#123;hspB&#125;` must be declared in dependencies of $`&#123;hap&#125;`.

<strong>错误描述</strong>

hspA和hspB共同依赖的har包需要配置在hap的依赖中。

<strong>可能原因</strong>

har包没有配置在hap的依赖中。

<strong>处理步骤</strong>

在hap中配置har包依赖。

#### 00303269 FA模型工程不支持deduplicateHar配置

<strong>错误信息</strong>

The FA model does not support the 'deduplicateHar' field. At file: XXX.

<strong>错误描述</strong>

FA模型工程不支持deduplicateHar配置。

<strong>可能原因</strong>

当前工程是FA模型工程。

<strong>处理步骤</strong>

移除deduplicateHar，或将其配置为false。

#### 00303270 compatibleSdkVersion大于或等于21时才能启用deduplicateHar

<strong>错误信息</strong>

'deduplicateHar' can be enabled only when 'compatibleSdkVersion' is greater than or equal to 21. At file: XXX.

<strong>错误描述</strong>

compatibleSdkVersion大于或等于21时才能启用deduplicateHar。

<strong>可能原因</strong>

工程级build-profile.json5的compatibleSdkVersion小于21。

<strong>处理步骤</strong>

配置compatibleSdkVersion大于或等于21，或者将deduplicateHar配置为false。

#### 00303271 idDefinedFilePath必须是实际存在的json5文件

<strong>错误信息</strong>

'idDefinedFilePath': XXX must be an existing json5 file. At file: YYY.

<strong>错误描述</strong>

idDefinedFilePath必须是实际存在的json5文件。

<strong>可能原因</strong>

idDefinedFilePath路径不存在或者不是json5文件。

<strong>处理步骤</strong>

确保idDefinedFilePath是一个实际存在的json5文件。

#### 00303272 当deduplicateHar为true时必须配置idDefinedFilePath字段

<strong>错误信息</strong>

When 'deduplicateHar' is enabled, the 'idDefinedFilePath' field must be configured. At file: XXX.

<strong>错误描述</strong>

当deduplicateHar为true时必须配置idDefinedFilePath字段。

<strong>可能原因</strong>

缺少idDefinedFilePath配置。

<strong>处理步骤</strong>

在buildOption/resOptions下配置idDefinedFilePath字段。

#### 00303273 deduplicateHar字段仅支持一个product中包含一个HAP的场景

<strong>错误信息</strong>

The 'deduplicateHar' field supports only one HAP per product. Now there are XXX haps: YYY in product ZZZ

<strong>错误描述</strong>

deduplicateHar字段仅支持一个product中包含一个HAP的场景。

<strong>可能原因</strong>

当前product中有多个HAP。

<strong>处理步骤</strong>

确保每个product中只有一个HAP。

#### 00303274 当deduplicateHar为true时, libIsolation不能配置为true

<strong>错误信息</strong>

When 'deduplicateHar' is enabled, the 'libIsolation' field cannot be set to true. At file: XXX.

<strong>错误描述</strong>

当deduplicateHar为true时, libIsolation不能配置为true。

<strong>可能原因</strong>

deduplicateHar和libIsolation同时配置为true。

<strong>处理步骤</strong>

将libIsolation配置为false。

#### 00303275 当deduplicateHar为true时, useNormalizedOHMUrl必须配置为true

<strong>错误信息</strong>

When 'deduplicateHar' is enabled, the 'useNormalizedOHMUrl' field must be set to true. At file: XXX.

<strong>错误描述</strong>

当deduplicateHar为true时, useNormalizedOHMUrl必须配置为true。

<strong>可能原因</strong>

useNormalizedOHMUrl没有配置为true。

<strong>处理步骤</strong>

将useNormalizedOHMUrl配置为true。

#### 00303276 构建定制化har时，当前模块必须为字节码har

<strong>错误信息</strong>

The har module must be set to byte code har when building customized har. At file: XXX.

<strong>错误描述</strong>

构建定制化har时，当前模块必须为字节码har。

<strong>可能原因</strong>

当在har模块的buildOption下配置packingOptions.customizedOptions.basePackage开启构建定制化har后，当前模块并未配置为字节码har。

<strong>处理步骤</strong>

将当前har模块配置为[字节码har](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-build-har#section16598338112415)。

#### 00303277 构建定制化har时，ohos.compile.lib.entryfile不能设置为true

<strong>错误信息</strong>

ohos.compile.lib.entryfile must not set to true when building customized har. At file: XXX.

<strong>错误描述</strong>

构建定制化har时，ohos.compile.lib.entryfile不能设为true。

<strong>可能原因</strong>

当在har模块的buildOption下配置packingOptions.customizedOptions.basePackage开启构建定制化har后，hvigor-config.json5中ohos.compile.lib.entryfile配置为true。

<strong>处理步骤</strong>

将ohos.compile.lib.entryfile配置为false或者删除该配置项。

#### 00303278 模块下的hvigorfile.ts中获取不到插件

<strong>错误信息</strong>

Unable to get plugin in hvigorfile.ts of module 'XXX'. At file: YYY.

<strong>错误描述</strong>

模块下的hvigorfile.ts中获取不到插件。

<strong>可能原因</strong>

1. 模块下的hvigorfile.ts中使用了未定义的属性或方法。
2. 模块下的hvigorfile.ts中导出的deafult对象的system字段值和本模块module.json5中的type字段值不匹配。

<strong>处理步骤</strong>

1. 检查模块下的hvigorfile.ts中是否使用了未定义的属性或方法。
2. 确保模块下的hvigorfile.ts中导出的deafult对象的system字段值和本模块module.json5中的type字段相匹配，匹配规则如下图。

   | type字段 | system字段 |
   | --- | --- |
   | entry | hapTasks |
   | feature | hapTasks |
   | shared | hspTasks |
   | har | harTasks |

#### 00303280 开启binxo时，确保-DOHOS\_ENABLE\_HWASAN和-DOHOS\_ENABLE\_BINXO参数设置为ON

<strong>错误信息</strong>

Before enabling binxo, ensure that both '-DOHOS\_ENABLE\_HWASAN' and '-DOHOS\_ENABLE\_BINXO' parameters are set to ON. At file: XXX.

<strong>错误描述</strong>

在开启binxo之前，确保-DOHOS\_ENABLE\_HWASAN和-DOHOS\_ENABLE\_BINXO两个参数都设置为ON。

<strong>可能原因</strong>

开启binxo时，-DOHOS\_ENABLE\_HWASAN未设置或设置为OFF，-DOHOS\_ENABLE\_BINXO设置为ON，参数设置不正确。

<strong>处理步骤</strong>

将'externalNativeOptions &gt; arguments'设置为'-DOHOS\_ENABLE\_HWASAN=ON -DOHOS\_ENABLE\_BINXO=ON'。

#### 00303282 useNormalizedOHMUrl为true时才能配置oh-exports

<strong>错误信息</strong>

'oh-exports' is configurable only when 'useNormalizedOHMUrl' is true.

<strong>错误描述</strong>

useNormalizedOHMUrl为true时才能配置oh-exports。

<strong>可能原因</strong>

useNormalizedOHMUrl为false。

<strong>处理步骤</strong>

检查工程级build-profile.json5的useNormalizedOHMUrl字段，确保配置为true。

#### 00303283 仅支持模块内有效的相对路径

<strong>错误信息</strong>

Invalid path XXX. Only valid relative paths within the module are supported.

<strong>错误描述</strong>

路径无效，仅支持模块内有效的相对路径。

<strong>可能原因</strong>

oh-exports中包含无效的路径。

<strong>处理步骤</strong>

检查oh-exports中配置的路径，确保是模块内有效的相对路径。

#### 00303284 仅支持目录或者以ets/ts/js为后缀的文件

<strong>错误信息</strong>

Invalid path XXX. Only directories or .ets/.ts/.js files are supported.

<strong>错误描述</strong>

路径无效，仅支持目录或者以ets/ts/js为后缀的文件。

<strong>可能原因</strong>

文件后缀不是ets/ts/js。

<strong>处理步骤</strong>

检查oh-exports中配置的路径，确保是目录或以ets/ts/js为后缀的文件。

#### 00303285 hvigor命令行参数buildVersion无效

<strong>错误信息</strong>

-p buildVersion=XXX is invalid.

<strong>错误描述</strong>

hvigor命令行参数buildVersion无效。

<strong>可能原因</strong>

hvigor命令行参数buildVersion不符合要求。

<strong>处理步骤</strong>

确保buildVersion是一个有效值，具体要求请参考[app.json5的buildVersion](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-configuration-file#配置文件标签)。

#### 00303286 executableBinaryPaths-path的值不是文件

<strong>错误信息</strong>

The executableBinaryPaths-path XXX is not a file. At file: YYY.

<strong>错误描述</strong>

executableBinaryPaths-path的值不是文件。

<strong>可能原因</strong>

executableBinaryPaths-path的值是目录，不是文件。

<strong>处理步骤</strong>

确保executableBinaryPaths-path的值是一个文件。

#### 00303288 executableBinaryPaths-path的值不在libs目录下

<strong>错误信息</strong>

The executableBinaryPaths-path XXX is not found in allowed libs directories. At file: YYY.

<strong>错误描述</strong>

executableBinaryPaths-path的值不在libs目录下。

<strong>可能原因</strong>

executableBinaryPaths-path的值不在libs目录下。

<strong>处理步骤</strong>

1. 将文件移动到libs/`&#123;abi&#125;`目录下，其中`&#123;abi&#125;`为设备CPU架构类型（如arm64-v8a、x86\_64、armeabi-v7a）。
2. 检查文件路径是否正确。

#### 00303295 HAR模块中extensionAbility的srcEntry不支持配置so文件

<strong>错误信息</strong>

Invalid configuration of XXX field. At file: YYY.

<strong>错误描述</strong>

YYY文件中XXX字段无效。

<strong>可能原因</strong>

HAR模块中extensionAbility的srcEntry不支持配置so文件。

<strong>处理步骤</strong>

移除HAR模块中extensionAbility的srcEntry下的so文件。

#### 00303296 srcEntry的so文件路径配置错误

<strong>错误信息</strong>

Invalid configuration of XXX field. At file: YYY.

<strong>错误描述</strong>

YYY文件中XXX字段无效。

<strong>可能原因</strong>

srcEntry配置so文件时，不支持配置绝对路径，不能以/开头，不能包含./ 、 ../ 、 \。

<strong>处理步骤</strong>

srcEntry的so文件路径是相对于libs/`&#123;abi&#125;`的路径，其中`&#123;abi&#125;`为设备CPU架构类型（如arm64-v8a），例如so文件路径是libs/arm64-v8a/ole/liboleEntry.so，则srcEntry配置为"ole/liboleEntry.so"。
