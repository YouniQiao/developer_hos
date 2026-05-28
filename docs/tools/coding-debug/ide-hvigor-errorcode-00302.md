---
title: "脚本错误码"
displayed_sidebar: toolsSidebar
---

# 脚本错误码

#### 00302001 FA模型不支持单元测试

<strong>错误信息</strong>

FA mode does not support unit test.

<strong>错误描述</strong>

FA模型不支持单元测试。

<strong>可能原因</strong>

在FA模型工程上，使用命令行的方式执行了单元测试。

<strong>处理步骤</strong>

不要对FA模型工程执行单元测试。

#### 00302002 初始化模块时找不到插件

<strong>错误信息</strong>

The XXX plugin was not found when initializing the YYY module

<strong>错误描述</strong>

初始化模块时找不到XXX插件。

<strong>可能原因</strong>

module.json5文件中的module.type字段与hvigorfile.ts文件中导出的系统插件不一致。

<strong>处理步骤</strong>

确保模块下module.json5文件的module.type字段和hvigorfile.ts文件中导出的系统插件一致。

#### 00302013 根节点还没准备好用于构建

<strong>错误信息</strong>

The root node is not yet available for build.

<strong>错误描述</strong>

根节点还没准备好用于构建。

<strong>可能原因</strong>

在hvigorconfig.ts中调用API，该文件的执行时机比nodesInitialized更早，导致API 调用失败。

<strong>处理步骤</strong>

在hvigorfile.ts中调用API，确保符合[Hvigor生命周期的执行顺序](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-life-cycle#section746253616316)。

#### 00302014 hvigorConfig还没准备好用于构建

<strong>错误信息</strong>

The hvigorConfig is not yet available for build.

<strong>错误描述</strong>

hvigorConfig还没准备好用于构建。

<strong>可能原因</strong>

未知。

<strong>处理步骤</strong>

通过[在线提单](`https://`developer.huawei.com/consumer/cn/support/feedback/#/)提交问题，华为支持人员会及时处理。

#### 00302015 调用内部hook函数时出现异常

<strong>错误信息</strong>

XXX in hvigorfile at XXX.

<strong>错误描述</strong>

调用内部hook函数时出现异常。

<strong>可能原因</strong>

执行节点内部的hook函数时出现异常。

<strong>处理步骤</strong>

参考[扩展API文档](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-apis)，确保调用的API正确。

#### 00302016 Stage模型工程hvigorfile缺少系统插件

<strong>错误信息</strong>

Invalid exports, no system plugins were found in hvigorfile: XXX.

<strong>错误描述</strong>

导出无效，在hvigorfile中找不到系统插件。

<strong>可能原因</strong>

1. hvigorfile.ts中system字段缺失。
2. hvigorfile.ts中使用的appTasks/hapTasks/hspTasks/harTasks不存在。
3. hvigorfile.ts文件没有使用export default进行导出。

<strong>处理步骤</strong>

1. 确保hvigorfile.ts中system字段存在。
2. 工程级hvigorfile.ts对应的插件为appTasks，模块级hvigorfile.ts对应的插件为hapTasks/hspTasks/harTasks。
3. 确保hvigorfile.ts中使用export default进行导出。

示例如下：

```
export default {
    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */
    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */
}
```

#### 00302017 命令行中有未知的模块名

<strong>错误信息</strong>

Unknown module XXX in the command line.

<strong>错误描述</strong>

命令行中有未知模块XXX。

<strong>可能原因</strong>

命令行中的模块名在hvigorconfig.ts文件中被动态删除。

<strong>处理步骤</strong>

确保模块在hvigorconfig.ts文件中没有被删除。

#### 00302018 命令行中有未知的模块名

<strong>错误信息</strong>

Unknown module XXX in the command line.

<strong>错误描述</strong>

命令行中有未知模块XXX。

<strong>可能原因</strong>

命令行中的模块名在工程级build-profile.json5文件中不存在。

<strong>处理步骤</strong>

确保模块在工程级build-profile.json5文件的modules字段中已设置。

#### 00302019 自定义插件返回值类型不正确

<strong>错误信息</strong>

File XXX exports an invalid plugin XXX with invalid order return XXX. Must return a number value.

<strong>错误描述</strong>

自定义插件返回值类型不正确。

<strong>可能原因</strong>

文件XXX导出的插件返回值类型不正确。

<strong>处理步骤</strong>

确保导出的插件返回值类型是数值。

#### 00302020 自定义插件名字重复

<strong>错误信息</strong>

File XXX exports an invalid plugin XXX whose name XXX duplicate with other plugins. Please rename this plugin.

<strong>错误描述</strong>

自定义插件名字重复。

<strong>可能原因</strong>

自定义插件里有重复的名字。

<strong>处理步骤</strong>

检查自定义的hvigor插件是否存在重复的名字。

#### 00302021 自定义插件没有默认导出

<strong>错误信息</strong>

File XXX has no default export.

<strong>错误描述</strong>

自定义插件没有默认导出。

<strong>可能原因</strong>

hvigor自定义插件没有default导出。

<strong>处理步骤</strong>

将文件XXX中定义的hvigor插件default导出。

#### 00302022 导出未定义的插件

<strong>错误信息</strong>

File XXX exports an undefined plugin.

<strong>错误描述</strong>

导出了未定义的插件。

<strong>可能原因</strong>

文件XXX导出了未定义的hvigor插件。

<strong>处理步骤</strong>

确保导出正确的hvigor插件。

#### 00302023 自定义插件类型不正确

<strong>错误信息</strong>

File XXX exports an invalid plugin with type XXX.

<strong>错误描述</strong>

自定义插件类型不正确。

<strong>可能原因</strong>

文件XXX导出的插件类型不正确。

<strong>处理步骤</strong>

检查导出的插件类型，确保是object。

#### 00302024 自定义插件名称不存在

<strong>错误信息</strong>

File XXX exports an invalid plugin without a name.

<strong>错误描述</strong>

文件导出了一个没有名称的插件。

<strong>可能原因</strong>

文件XXX导出的插件没有名称。

<strong>处理步骤</strong>

确保导出的插件名称存在。

#### 00302025 自定义插件名称类型不正确

<strong>错误信息</strong>

File XXX exports an invalid plugin whose name is not a string.

<strong>错误描述</strong>

文件导出了一个名称不是字符串的插件。

<strong>可能原因</strong>

文件XXX导出的插件名称不是字符串类型。

<strong>处理步骤</strong>

确保导出的插件名称是字符串类型。

#### 00302026 自定义插件的执行顺序不正确

<strong>错误信息</strong>

File XXX exports an invalid plugin YYY with unknown order ZZZ.

<strong>错误描述</strong>

文件导出了一个执行顺序未知的插件。

<strong>可能原因</strong>

文件XXX导出的插件的执行顺序未知。

<strong>处理步骤</strong>

确保导出的插件具有正确的执行顺序。

#### 00302027 自定义插件的hook类型不正确

<strong>错误信息</strong>

File XXX exports an invalid plugin YYY whose hook ZZZ is not a function.

<strong>错误描述</strong>

文件导出了一个hook不是函数的插件。

<strong>可能原因</strong>

文件XXX导出的插件YYY的hook ZZZ不是函数。

<strong>处理步骤</strong>

确保导出的插件正确定义了hook，并且类型是函数。

#### 00302029 插件与模块类型不匹配

<strong>错误信息</strong>

The plugin referenced in the hvigorfile does not match moduleType in the module.json5/config.json file.

<strong>错误描述</strong>

hvigorfile中引用的插件与module.json5/config.json文件中的模块类型不一致。

<strong>可能原因</strong>

hvigorfile注册的任务类型（如hapTasks）与模块类型（如HAR模块）不一致，比如hap模块引用了harPlugin。

<strong>处理步骤</strong>

确保任务类型和模块类型保持一致。

#### 00302030 API类型不匹配

<strong>错误信息</strong>

Mismatch with apiType at 'XXX'.

<strong>错误描述</strong>

XXX处的apiType配置不匹配。

<strong>可能原因</strong>

模块级hvigorfile.ts和模块级build-profile.json5中的apiType不一致。

<strong>处理步骤</strong>

确保apiType配置一致。

#### 00302031 FA模型工程hvigorfile缺少系统插件

<strong>错误信息</strong>

Invalid exports, no system plugins were found in hvigorfile. At file: XXX.

<strong>错误描述</strong>

导出无效，在hvigorfile中找不到系统插件。

<strong>可能原因</strong>

1. hvigorfile.ts中system字段缺失。
2. hvigorfile.ts中使用的legacyAppTasks/legacyHapTasks/legacyHarTasks不存在。
3. hvigorfile.ts文件没有使用export default进行导出。

<strong>处理步骤</strong>

1. 确保hvigorfile.ts中system字段存在。
2. 工程级hvigorfile.ts对应的插件为legacyAppTasks，模块级hvigorfile.ts对应的插件为legacyHapTasks/legacyHarTasks。
3. 确保hvigorfile.ts中使用export default进行导出。

示例如下：

```
export default {
    system: legacyAppTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */
    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */
}
```

#### 00302032 Stage模型工程hvigorfile缺少系统插件

<strong>错误信息</strong>

Invalid exports, no system plugins were found in hvigorfile.

<strong>错误描述</strong>

导出无效，在hvigorfile中找不到系统插件。

<strong>可能原因</strong>

1. hvigorfile.ts中system字段缺失。
2. hvigorfile.ts中使用的appTasks/hapTasks/hspTasks/harTasks不存在。
3. hvigorfile.ts文件没有使用export default进行导出。

<strong>处理步骤</strong>

1. 确保hvigorfile.ts中system字段存在。
2. 工程级hvigorfile.ts对应的插件为appTasks，模块级hvigorfile.ts对应的插件为hapTasks/hspTasks/harTasks。
3. 确保hvigorfile.ts中使用export default进行导出。

示例如下：

```
export default {
    system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */
    plugins:[]         /* Custom plugin to extend the functionality of Hvigor. */
}
```

#### 00302033 hvigorfile.ts中的setProperty方法校验失败

<strong>错误信息</strong>

Method setProperty validate failed in hvigorfile.ts.

<strong>错误描述</strong>

hvigorfile.ts中的setProperty方法校验失败。

<strong>可能原因</strong>

在hvigorfile.ts中使用setProperty方法传入参数不符合schema校验。

<strong>处理步骤</strong>

请按照报错提示信息，修改hvigorfile.ts文件中的字段。

#### 00302034 生命周期XXX执行失败

<strong>错误信息</strong>

Failed to execute hook 'XXX': YYY.

<strong>错误描述</strong>

生命周期XXX执行失败。

<strong>可能原因</strong>

生命周期XXX中的代码执行报错。

<strong>处理步骤</strong>

1. 根据报错信息YYY检查生命周期XXX中的代码。
2. 将hvigor-config.json5中的stacktrace字段设置为true，根据堆栈信息排查。

#### 00302035 自定义插件YYY的函数XXX执行失败

<strong>错误信息</strong>

Failed to execute function 'XXX' of the custom plugin whose pluginId is 'YYY': ZZZ.

<strong>错误描述</strong>

自定义插件YYY的函数XXX执行失败。

<strong>可能原因</strong>

自定义插件YYY的函数XXX中的代码执行报错。

<strong>处理步骤</strong>

1. 根据报错信息ZZZ检查自定义插件YYY的函数XXX中的代码。
2. 将hvigor-config.json5中的stacktrace字段设置为true，根据堆栈信息排查。

#### 00302036 生命周期XXX执行失败

<strong>错误信息</strong>

Failed to execute node hook 'XXX': YYY.

<strong>错误描述</strong>

生命周期XXX执行失败。

<strong>可能原因</strong>

生命周期XXX中的代码执行报错。

<strong>处理步骤</strong>

1. 根据报错信息YYY检查生命周期XXX中的代码。
2. 将hvigor-config.json5中的stacktrace字段设置为true，根据堆栈信息排查。

#### 00302037 hvigorfile.ts文件YYY执行失败

<strong>错误信息</strong>

Failed to load or execute hvigorfile.ts: XXX At file: YYY.

<strong>错误描述</strong>

hvigorfile.ts文件YYY执行失败。

<strong>可能原因</strong>

hvigorfile.ts文件YYY的代码执行报错。

<strong>处理步骤</strong>

1. 根据报错信息XXX检查hvigorfile.ts文件YYY的代码。
2. 将hvigor-config.json5中的stacktrace字段设置为true，根据堆栈信息排查。

#### 00302039 hvigorfile.ts中找不到模块

<strong>错误信息</strong>

Failed to load or execute hvigorfile.ts: XXX. At file: YYY。

<strong>错误描述</strong>

hvigorfile.ts脚本执行失败，依赖导入失败。

<strong>可能原因</strong>

1. 构建依赖的插件没有在hvigor-config.json5的dependencies中配置。
2. 在hvigor-config.json5的dependencies中配置了依赖的插件，并且sync后提示对应依赖安装成功，使用时仍然报错，该场景可能是pnpm工具问题导致显示安装成功实际安装失败。

<strong>处理步骤</strong>

1. 在hvigor-config.json5的dependencies中配置依赖的插件，并且执行sync安装依赖。
2. 如果提示安装依赖成功后仍报错，按以下步骤处理：
   1. 修改“用户目录/.hvigor/wrapper/tools/package.json”中的pnpm版本为"10.16.1"（注意不要带^符号）。
   2. 在Terminal中进入“用户目录/.hvigor/wrapper/tools”目录，执行命令"npm install"。
   3. 删除“用户目录/.hvigor/project\_caches”缓存目录。
