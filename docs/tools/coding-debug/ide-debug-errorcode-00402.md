---
title: "热重载和增量调试错误码"
displayed_sidebar: toolsSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/ide-debug-errorcode-00402
format: md
---


# 热重载和增量调试错误码

#### 00402001 找不到SDK

<strong>错误信息</strong>

Install the SDK first.

<strong>错误描述</strong>

请先安装SDK。

<strong>可能原因</strong>

找不到SDK。

<strong>处理步骤</strong>

检查DevEco Studio安装目录下sdk/default/openharmony路径下面是否有ets目录，如果不存在，在官网上重新[下载DevEco Studio](`https://`developer.huawei.com/consumer/cn/download/deveco-studio)。

#### 00402002 热重载只支持STAGE模型工程

<strong>错误信息</strong>

Hot Reload Feature is only supported in STAGE and esmodule project.

<strong>错误描述</strong>

热重载仅支持Stage模型工程。

<strong>可能原因</strong>

当前工程不是Stage模型工程。

<strong>处理步骤</strong>

请使用Stage模型工程，或者选择非热重载运行配置。

#### 00402003 热重载模式启动时，找不到node路径

<strong>错误信息</strong>

The nodejs path configured for the project is invalid or not found.

<strong>错误描述</strong>

找不到node路径。

<strong>可能原因</strong>

node路径不存在。

<strong>处理步骤</strong>

检查DevEco Studio安装目录的tools目录下是否存在node工具，如果不存在，在官网上重新[下载DevEco Studio](`https://`developer.huawei.com/consumer/cn/download/deveco-studio)。

#### 00402004 当前修改不支持热重载

<strong>错误信息</strong>

The current modification does not support hot reload. Please reinstall and restart.

<strong>错误描述</strong>

当前修改不支持热重载。

<strong>可能原因</strong>

当前的代码修改场景不支持热重载。

<strong>处理步骤</strong>

请根据当前热重载的[使用约束](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hot-reload#section995453874915)检查当前修改是否支持，如果不支持，需要先点击运行或调试后，再重新启动热重载。

#### 00402005 热重载仅支持文件修改，不支持文件的新增或删除

<strong>错误信息</strong>

Hot reload is supported only for file change, but not file addition and deletion.

<strong>错误描述</strong>

热重载仅支持文件修改，不支持文件的新增或删除。

<strong>可能原因</strong>

在热重载模式运行期间，用户进行了文件的新增或删除。

<strong>处理步骤</strong>

先点击运行或调试后，再重新启动热重载。

#### 00402006 进行文件对比时，无法获取node路径

<strong>错误信息</strong>

The nodejs path configured in the IDE is invalid or not found.

<strong>错误描述</strong>

找不到node路径。

<strong>可能原因</strong>

进行文件对比时，无法获取node路径。

<strong>处理步骤</strong>

检查DevEco Studio安装目录的tools目录下是否存在node工具，如果不存在，在官网上重新[下载DevEco Studio](`https://`developer.huawei.com/consumer/cn/download/deveco-studio)。

#### 00402007 热重载运行超时

<strong>错误信息</strong>

Execute hot-reload timeout, please reinstall and restart.

<strong>错误描述</strong>

热重载运行超时，请重启热重载。

<strong>可能原因</strong>

热重载进行quickfix时超时。

<strong>处理步骤</strong>

先点击运行或调试后，再重新启动热重载。

#### 00402008 热重载构建失败

<strong>错误信息</strong>

Build failed, check the error information in the console, rectify the fault, and try again.

<strong>错误描述</strong>

构建失败，请检查控制台中的错误信息，排除故障后重试。

<strong>可能原因</strong>

构建失败。

<strong>处理步骤</strong>

根据控制台中的错误信息进行处理后重试。

#### 00402009 增量包签名失败

<strong>错误信息</strong>

Failed to sign the patch package, please check the signingConfigs in build-profile.json5.

<strong>错误描述</strong>

增量包签名失败，请检查build-profile.json5文件中的signingConfigs签名配置是否正确。

<strong>可能原因</strong>

签名配置不正确。

<strong>处理步骤</strong>

请检查build-profile.json5文件中的signingConfigs签名配置是否正确，如果不正确，[重新签名](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing)后重试。

#### 00402010 构建未生成补丁abc文件

<strong>错误信息</strong>

PatchAbc was not generated, please clean and restart project.

<strong>错误描述</strong>

补丁abc文件未生成，请清理缓存后重试。

<strong>可能原因</strong>

构建生成补丁abc文件失败。

<strong>处理步骤</strong>

点击菜单栏<strong>Build &gt; Clean Project</strong>清理缓存后重试。

#### 00402011 hqf增量包生成失败

<strong>错误信息</strong>

Failed to create the patch package, please clean and restart project.

<strong>错误描述</strong>

hqf增量包生成失败，请清理缓存后重试。

<strong>可能原因</strong>

构建生成hqf增量包失败。

<strong>处理步骤</strong>

点击菜单栏<strong>Build &gt; Clean Project</strong>清理缓存后重试。

#### 00402012 重新加载文件失败

<strong>错误信息</strong>

Reloaded XXX files failed. Please reinstall and restart.

<strong>错误描述</strong>

重新加载文件失败，请重新安装并重启。

<strong>可能原因</strong>

热重载执行bm quickfix命令失败。

<strong>处理步骤</strong>

可检查以下几方面：

1. 检查工程签名是否正确，热重载需要使用调试证书签名，不支持使用发布证书签名，具体参考[配置调试签名](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing)。
2. 检查工程的构建模式，热重载需要使用debug模式，不支持release模式，具体参考[指定构建模式](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-compilation-options-customizing-guide#section192461528194916)。

#### 00402013 执行Apply Changes超时

<strong>错误信息</strong>

Execute apply-change timeout, please restart and reinstall.

<strong>错误描述</strong>

执行Apply Changes超时，请重启并重新安装。

<strong>可能原因</strong>

Apply Changes时执行hdc命令超时，可能hdc异常或者设备连接异常。

<strong>处理步骤</strong>

拔插设备，或者执行hdc kill -r重启hdc后再重试。

#### 00402014 构建hqf增量包失败

<strong>错误信息</strong>

Build failed, please reinstall and restart.

<strong>错误描述</strong>

构建失败，请重新安装并重启。

<strong>可能原因</strong>

构建hqf增量包失败，详细信息查看构建控制台。

<strong>处理步骤</strong>

查看构建控制台，根据提示信息修改完成后重试。

#### 00402015 预览器不支持Apply Change

<strong>错误信息</strong>

Apply Changes not supported when device type is Previewer.

<strong>错误描述</strong>

预览器不支持Apply Changes。

<strong>可能原因</strong>

设备为预览器时使用Apply Changes。

<strong>处理步骤</strong>

预览器不支持Apply Changes，如需使用Apply Changes功能，请切换真机或模拟器。

#### 00402016 请先启动或调试项目

<strong>错误信息</strong>

Start or debug the project first.

<strong>错误描述</strong>

请先启动或调试项目。

<strong>可能原因</strong>

没有先启动或调试项目，就尝试执行Apply Changes。

<strong>处理步骤</strong>

请先点击Run/Debug按钮启动或调试项目，修改代码后再执行Apply Changes。

#### 00402017 HSP模块不支持Apply Changes

<strong>错误信息</strong>

Apply Changes not supported for shared modules.

<strong>错误描述</strong>

HSP模块不支持Apply Changes。

<strong>可能原因</strong>

当前是HSP模块，不支持Apply Changes。

<strong>处理步骤</strong>

重新选择HAP模块再重试。

#### 00402018 FA模型的项目不支持Apply Changes

<strong>错误信息</strong>

Apply Changes not supported for projects in the FA model.

<strong>错误描述</strong>

FA模型的项目不支持Apply Changes。

<strong>可能原因</strong>

当前是FA模型的项目，不支持Apply Changes。

<strong>处理步骤</strong>

FA模型的项目不要使用Apply Changes。

#### 00402019 当启动模块设置为Nothing时不支持Apply Changes

<strong>错误信息</strong>

Apply Changes not supported when Launch module is set to Nothing.

<strong>错误描述</strong>

当启动模块设置为Nothing时不支持Apply Changes。

<strong>可能原因</strong>

运行/调试配置面板中的Launch Options配置的Launch是Nothing。

<strong>处理步骤</strong>

运行/调试配置面板中，Launch Options下的Launch选择一个ability再重试。

#### 00402020 当前运行配置为空

<strong>错误信息</strong>

XXX: settings is null.

<strong>错误描述</strong>

当前运行配置为空。

<strong>可能原因</strong>

没有选择运行配置。

<strong>处理步骤</strong>

重新选择运行配置。

#### 00402021 未检测到C++文件或资源文件的更改

<strong>错误信息</strong>

No changes detected on C++ files or resource files. If you have made changes to files in other types, click the Run/Debug icon instead.

<strong>错误描述</strong>

未检测到C++文件或资源文件的更改。如果对其他类型的文件进行了更改，请点击运行/调试按钮。

<strong>可能原因</strong>

没有修改C++文件或者资源文件，修改了ETS文件或者没有任何修改。

<strong>处理步骤</strong>

修改C++文件或者资源文件再执行Apply Change，如果修改其他类型的文件，请点击运行/调试按钮。

#### 00402024 未能成功在设备上部署增量更改

<strong>错误信息</strong>

Failed to deploy the incremental changes on the device. Update the device image to the latest version and try again, or click the Run/Debug icon to deploy all changes.

<strong>错误描述</strong>

未能在设备上部署增量更改。请将设备镜像更新至最新版本后重试，或点击运行/调试按钮以部署所有更改。

<strong>可能原因</strong>

1. 执行bm quickfix命令失败，可能设备镜像版本比较低。
2. 如果是2in1设备，可能是应用开启了应用加速服务。

<strong>处理步骤</strong>

1. 请将设备镜像更新至最新版本后重试，或点击运行/调试按钮。
2. 如果是2in1设备，请在设备的<strong>设置 &gt; 应用和元服务 &gt; 应用加速服务</strong>中，查看应用是否开启了应用加速服务，并关闭应用的加速服务。

#### 00402025 hqf和hap的ASan/TSan/UBSan/HWASan不一致

<strong>错误信息</strong>

Apply change fail, please confirm whether ASan/TSan/UBSan/HWASan is same as the hap and reinstall.

<strong>错误描述</strong>

执行Apply change失败，请确认ASan/TSan/UBSan/HWASan是否与hap相同，并重新安装。

<strong>可能原因</strong>

ASan、TSan、UBSan、HWASan不能同时开启，四个只能开启其中一个。

<strong>处理步骤</strong>

设置ASan/TSan/UBSan/HWASan和hap一致，或者卸载应用再重新运行。

#### 00402026 执行Apply change失败

<strong>错误信息</strong>

Apply change fail.

<strong>错误描述</strong>

执行Apply change失败。

<strong>可能原因</strong>

设备连接异常或者hdc异常。

<strong>处理步骤</strong>

重新拔插设备，或者执行hdc kill -r再重试。

#### 00402027 设备处于锁屏状态

<strong>错误信息</strong>

The screen is locked. Please unlock the screen and try again.

<strong>错误描述</strong>

设备处于锁屏状态。请解锁屏幕并重试。

<strong>可能原因</strong>

应用启动或Apply Changes时设备处于锁屏状态。

<strong>处理步骤</strong>

请解锁屏幕并重试。

#### 00402028 应用启动时ability不可见

<strong>错误信息</strong>

Ability is not visible.

<strong>错误描述</strong>

Ability不可见。

<strong>可能原因</strong>

当前aa start命令启动的Ability不可见。

<strong>处理步骤</strong>

* Stage模型工程：在module.json5文件中，将abilities字段下的exported设置为true。
* FA模型工程：在config.json文件中，将abilities字段下的visible设置为true。

#### 00402030 无法创建changedFileList.json文件

<strong>错误信息</strong>

Failed to create changedFileList.json, please clean and restart project.

<strong>错误描述</strong>

无法创建changedFileList.json文件，请清理并重启项目。

<strong>可能原因</strong>

创建changedFileList.json文件失败。

<strong>处理步骤</strong>

点击菜单栏<strong>Build &gt; Clean Project</strong>清理缓存后重试。

#### 00402031 无法获取用于文件比较的node脚本

<strong>错误信息</strong>

Failed to obtain the node script for file comparison. Please reinstall the IDE.

<strong>错误描述</strong>

无法获取用于文件比较的node脚本。请重新安装IDE。

<strong>可能原因</strong>

无法获取用于文件比较的node脚本。

<strong>处理步骤</strong>

重新[下载安装DevEco Studio](`https://`developer.huawei.com/consumer/cn/download/deveco-studio)。

#### 00402032 以下更改无法进行热重载和热重启

<strong>错误信息</strong>

Hot reload and hot restart unavailable for the following changes.

<strong>错误描述</strong>

以下更改无法进行热重载和热重启。

<strong>可能原因</strong>

控制台提示的是热重载和热重启都不支持的场景。

<strong>处理步骤</strong>

请根据当前热重载和热重启的[使用约束](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hot-reload#section995453874915)检查当前修改是否支持，如果不支持，需要先点击运行或调试后，再重新启动热重载或热重启。

#### 00402033 ChangedFileList.json为空或不存在

<strong>错误信息</strong>

ChangedFileList.json is null or empty, please clean and rerun project.

<strong>错误描述</strong>

ChangedFileList.json为空或不存在，请清理并重新运行项目。

<strong>可能原因</strong>

ChangedFileList.json为空或不存在。

<strong>处理步骤</strong>

点击菜单栏<strong>Build &gt; Clean Project</strong>清理缓存后重试。

#### 00402034 以下更改无法进行热重载

<strong>错误信息</strong>

Hot reload unavailable for the following changes.

<strong>错误描述</strong>

以下更改无法进行热重载。

<strong>可能原因</strong>

触发了热重载不支持、热重启支持的场景，但是没勾选<strong>Enable hot restart</strong>。

<strong>处理步骤</strong>

[打开热重启开关](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hot-reload#section1724105718289)后，点击运行或调试，再重新启动热重载。

#### 00402035 release模式下不支持热重载

<strong>错误信息</strong>

Cannot hot reload the project when its build mode is release. Change the build mode to debug and try again.

<strong>错误描述</strong>

当构建模式为release模式时，无法热重载项目。请将构建模式更改为debug模式后重试。

<strong>可能原因</strong>

当前项目的构建模式为release模式。

<strong>处理步骤</strong>

请将构建模式更改为debug模式后重试。

#### 00402036 hdc版本不兼容

<strong>错误信息</strong>

Incompatible hdc version. Use the one in sdk\default\openharmony\toolchains under the DevEco Studio installation directory.

<strong>错误描述</strong>

hdc版本不兼容。请使用DevEco Studio安装目录下sdk\default\openharmony\toolchains下的hdc。

<strong>可能原因</strong>

环境变量配置了较低版本的hdc。

<strong>处理步骤</strong>

hdc环境变量更新为DevEco Studio安装目录下sdk\default\openharmony\toolchains下的hdc，再重启DevEco Studio。
