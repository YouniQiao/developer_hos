---
title: "错误码"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide-profiler-errorcode
format: md
---


# 错误码

#### 00701101 应用拉起失败

<strong>错误信息</strong>

Failed to start this app. If the app is of the release type, make sure you have enabled it to be started. For more details, see the logs.

<strong>错误描述</strong>

应用无法正常拉起。

<strong>可能原因</strong>

录制Launch等模板时会自动拉起应用，应用在拉起过程中设备断开连接。

<strong>处理步骤</strong>

重新连接设备后再次录制。

#### 00701102 应用启动失败

<strong>错误信息</strong>

App not started correctly. Start a new session and try again.

<strong>错误描述</strong>

应用程序启动失败。

<strong>可能原因</strong>

录制Launch模板时，手动点击应用图标启动应用过程中，设备断开连接。

<strong>处理步骤</strong>

重新连接设备后再次录制。

#### 00701202 数据文件导入失败

<strong>错误信息</strong>

Failed to import data file. Please check file version or storage space.

<strong>错误描述</strong>

数据文件导入失败，请检查数据文件版本和磁盘空间。

<strong>可能原因</strong>

1. 版本不匹配。导入的数据文件版本与当前使用的DevEco Studio版本不匹配。
2. 磁盘空间不足。

<strong>处理步骤</strong>

1. 尝试使用数据文件导出时或更高版本的DevEco Studio导入数据。
2. 清理磁盘空间。

#### 00702101 离线符号解析失败

<strong>错误信息</strong>

Failed to import offline symbols. Verify the offline symbol files.

<strong>错误描述</strong>

离线符号解析失败。

<strong>可能原因</strong>

导入的so库与抓取到的so库不匹配。

<strong>处理步骤</strong>

导入对应的携带符号表信息的so库进行解析。

#### 00702102 导入文件大小超出限制

<strong>错误信息</strong>

The imported file exceeds maximum size limit.

<strong>错误描述</strong>

导入文件大小超出限制。

<strong>可能原因</strong>

导入的文件过大。

<strong>处理步骤</strong>

重新导入符合大小限制的文件。

#### 00702103 导入的.jsleaklist文件格式不正确

<strong>错误信息</strong>

Invalid files: &#123;0&#125;.

<strong>错误描述</strong>

导入的.jsleaklist文件格式不正确。

<strong>可能原因</strong>

导入的.jsleaklist文件格式不正确。

<strong>处理步骤</strong>

导入格式正确的.jsleaklist文件。

#### 00702104 导入的.jsleaklist文件与导入的 .heapsnapshot或.rawheap文件不匹配

<strong>错误信息</strong>

Unmatched files: &#123;0&#125;.

<strong>错误描述</strong>

导入的.jsleaklist文件与导入的 .heapsnapshot或.rawheap文件不匹配。

<strong>可能原因</strong>

导入的.jsleaklist文件与导入的 .heapsnapshot或.rawheap文件不匹配。

<strong>处理步骤</strong>

导入与.heapsnapshot 或 .rawheap文件匹配的.jsleaklist文件。

#### 00702106 CodeGenie授权登录已过期

<strong>错误信息</strong>

The authentication information has expired. Please sign in again.

<strong>错误描述</strong>

CodeGenie授权登录已过期，请重新登录。

<strong>可能原因</strong>

CodeGenie授权登录已过期。

<strong>处理步骤</strong>

重新登录。

#### 00702201 离线符号解析失败

<strong>错误信息</strong>

Failed to import offline symbols.

<strong>错误描述</strong>

离线符号解析失败。

<strong>可能原因</strong>

导入未携带符号表信息的so库。

<strong>处理步骤</strong>

导入正确携带符号表信息的so库。

#### 00702203 无法启动录制

<strong>错误信息</strong>

Since no Running Application is selected, recording cannot be started. Please select a Running Application first.

<strong>错误描述</strong>

要调测的应用处于非运行状态，无法启动录制。请先选择一个运行中的应用。

<strong>可能原因</strong>

调测应用未运行。

<strong>处理步骤</strong>

调测的应用开始运行后，再启动录制。

#### 00702204 点击跳转按钮失败

<strong>错误信息</strong>

The corresponding slice is not available in the current view.

<strong>错误描述</strong>

点击跳转按钮失败。

<strong>可能原因</strong>

跳转的目标泳道在当前文件中不存在。

<strong>处理步骤</strong>

重新录制，录制文件中需包含跳转的目标泳道。

#### 00702205 创建的会话达到了会话个数的最大限制

<strong>错误信息</strong>

Maximum number of sessions reached. Delete some sessions and try again.

<strong>错误描述</strong>

创建的会话达到了会话个数的最大限制，请清理会话。

<strong>可能原因</strong>

创建的会话达到了会话个数的最大限制。

<strong>处理步骤</strong>

清理创建的会话。

#### 00702206 泳道不存在

<strong>错误信息</strong>

The lane does not exist. Please upgrade the DevEco Studio.

<strong>错误描述</strong>

导入的数据文件中包含的泳道在前版本的DevEco Studio中不存在。

<strong>可能原因</strong>

版本不匹配。导入的数据文件中包含的泳道在当前版本的DevEco Studio中不存在。

<strong>处理步骤</strong>

尝试使用数据文件导出时或更高版本的DevEco Studio导入数据。

#### 00702208 设备锁屏

<strong>错误信息</strong>

Unlock the device and try again.

<strong>错误描述</strong>

解锁被调优的设备后，重新录制。

<strong>可能原因</strong>

设备设置了锁屏密码，且处于锁屏状态，录制Launch等模板时应用无法被拉起。

<strong>处理步骤</strong>

解锁设备后重新录制。

#### 00702209 不能同时导入.heapsnapshot和.rawheap文件

<strong>错误信息</strong>

The .heapsnapshot and .rawheap files cannot be imported at the same time.

<strong>错误描述</strong>

不能同时导入.heapsnapshot和.rawheap文件。

<strong>可能原因</strong>

同时导入.heapsnapshot 和.rawheap 文件。

<strong>处理步骤</strong>

.heapsnapshot 文件和.rawheap 文件分开导入。

#### 00702210 数据导出时，没有足够的权限访问需要保存文件的目录

<strong>错误信息</strong>

The selected directory has no permissions.

<strong>错误描述</strong>

没有足够的权限访问需要保存文件的目录。

<strong>可能原因</strong>

数据导出时，没有足够的权限访问需要保存文件的目录。

<strong>处理步骤</strong>

选择一个有权限访问的目录进行数据导出。

#### 00702211 导入的文件数量超出限制

<strong>错误信息</strong>

Only a single .insight/.ftrace/.htrace/.nas/.txt/.perfdata/.data/.sys file or 1-10 .heapsnapshot/.jsleaklist/.rawheap files are allowed to be imported.

<strong>错误描述</strong>

只允许导入一个.insight/.ftrace/.htrace/.nas/.txt/.perfdata/.data/.sys文件，或者导入10个以内的.heapsnapshot/.jsleaklist/.rawheap文件。

<strong>可能原因</strong>

导入的文件数量超出限制。

<strong>处理步骤</strong>

导入单个.insight/.ftrace/.htrace/.nas/.txt/.perfdata/.data/.sys文件，或者导入10个以内的.heapsnapshot/.jsleaklist/.rawheap文件。

#### 00702212 导出文件时文件名使用了不允许的字符

<strong>错误信息</strong>

Make sure the file name does not contain the following characters:\* : ? " &lt; &gt; |

<strong>错误描述</strong>

请确保文件名不包含以下字符： \* : ? " &lt; &gt; |。

<strong>可能原因</strong>

导出文件时，文件名使用了不允许的字符，如 \* : ? " &lt; &gt; |。

<strong>处理步骤</strong>

导出文件时，文件名中不包含以下字符：\* : ? " &lt; &gt; |。

#### 00702213 导出文件时文件名超过238个字符

<strong>错误信息</strong>

Make sure that the file name does not exceed 238 characters.

<strong>错误描述</strong>

确保文件名不超过238个字符。

<strong>可能原因</strong>

导出文件时，文件名超过238个字符的限制。

<strong>处理步骤</strong>

导出文件时，文件名不超过238个字符。

#### 00702214 保存路径不存在

<strong>错误信息</strong>

Invalid save path: &#123;0&#125;

<strong>错误描述</strong>

保存路径不存在。

<strong>可能原因</strong>

保存路径不存在。

<strong>处理步骤</strong>

确认保存路径存在后，再保存。

#### 00703201 录制文件过大导致解析失败

<strong>错误信息</strong>

The recording file is too large and cannot be parsed. Restart a new recording session with shorter duration.

<strong>错误描述</strong>

因录制文件较大，导致解析失败。请减少录制时间重新录制。

<strong>可能原因</strong>

录制文件过大，导致解析失败。

<strong>处理步骤</strong>

减少录制时间，重新录制。

#### 00703202 Profiler分配的内存已超出限制

<strong>错误信息</strong>

The memory allocated to Profiler has reached the upper limit. To maintain normal operation, consider increasing the heap size.

<strong>错误描述</strong>

Profiler分配的内存已超出限制，请考虑增加可用堆内存容量以确保正常运行。

<strong>可能原因</strong>

Profiler分配的内存已达到上限，导致无法正常运行。

<strong>处理步骤</strong>

在DevEco Studio的配置文件中手动修改虚拟机可使用的最大内存，具体请参考[内存占用率过高导致DevEco Studio无法正常运行](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-profiler-3)。

#### 00703204 录制的数据与当前DevEco Studio窗口打开的源码工程不匹配

<strong>错误信息</strong>

Unable to navigate to source code. Make sure the SymbolTable file exists in the corresponding module directory and the recorded data matches the source code project, and then rebuild the project.

<strong>错误描述</strong>

录制的数据与当前DevEco Studio窗口打开的源码工程不匹配。

<strong>可能原因</strong>

录制的数据与当前DevEco Studio窗口打开的源码工程不匹配，导致无法正确跳转到源代码。

<strong>处理步骤</strong>

检查被录制的应用与当前DevEco Studio窗口打开的应用工程是否匹配。

#### 00703205 跳转至对应工程源码失败

<strong>错误信息</strong>

Source file not found.

<strong>错误描述</strong>

跳转至对应工程源码失败。

<strong>可能原因</strong>

录制的数据需要跳转的源码不存在。

<strong>处理步骤</strong>

检查被录制的应用与当前DevEco Studio窗口打开的应用工程是否匹配。

#### 00703301 结束录制失败

<strong>错误信息</strong>

Failed to stop the session.

<strong>错误描述</strong>

结束录制失败。

<strong>可能原因</strong>

插件在停止录制过程中出现错误，导致无法正常结束录制。

<strong>处理步骤</strong>

本次录制结束后，需重新录制。
