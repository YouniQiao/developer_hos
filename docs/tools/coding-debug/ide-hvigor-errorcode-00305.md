---
title: "语法错误码"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide-hvigor-errorcode-00305
format: md
---


# 语法错误码

#### 00305001 ArkTS语法检查报错

<strong>错误信息</strong>

ArkTS lint errors.

<strong>错误描述</strong>

ArkTS语法检查报错。

<strong>可能原因</strong>

ArkTS语法错误。

<strong>处理步骤</strong>

根据报错信息处理ArkTS语法错误。

#### 00305003 hvigorfile.ts或hvigorconfig.ts有类型错误

<strong>错误信息</strong>

There are these type errors in the code.

<strong>错误描述</strong>

解析hvigorfile.ts或hvigorconfig.ts有类型错误。

<strong>可能原因</strong>

hvigorfile.ts或hvigorconfig.ts有类型错误。

<strong>处理步骤</strong>

根据报错信息处理hvigorfile.ts或hvigorconfig.ts文件的类型错误。

#### 00305004 json/json5文件存在语法错误

<strong>错误信息</strong>

以实际语法错误为准。

<strong>错误描述</strong>

解析json/json5文件时出现语法错误。

<strong>可能原因</strong>

json/json5文件存在语法错误。

<strong>处理步骤</strong>

根据报错信息处理文件中的语法错误。

#### 00305006 JSON/JSON5格式错误

<strong>错误信息</strong>

XXX is not the correct JSON/JSON5 format.

<strong>错误描述</strong>

XXX不是正确的JSON/JSON5格式。

<strong>可能原因</strong>

对应文件不是JSON/JSON5格式。

<strong>处理步骤</strong>

确保对应文件是JSON/JSON5格式。

#### 00305008 JSON/JSON5文件语法错误

<strong>错误信息</strong>

XXX at file: YYY:ZZZ".

<strong>错误描述</strong>

XXX在文件位置YYY:ZZZ存在语法错误。

<strong>可能原因</strong>

对应文件中存在JSON/JSON5语法错误。

<strong>处理步骤</strong>

根据报错的文件路径信息修复相关的JSON/JSON5语法错误。

#### 00305009 CMake文件API解析失败

<strong>错误信息</strong>

CMake file API parse failed. At file: XXX.

<strong>错误描述</strong>

CMake文件API解析失败。

<strong>可能原因</strong>

在XXX路径下，找不到以“index-”开头的文件。

<strong>处理步骤</strong>

点击菜单栏<strong>Build &gt; Clean Project</strong>后，重新构建。

#### 00305010 属性或方法未定义

<strong>错误信息</strong>

以实际错误信息为准。

<strong>错误描述</strong>

属性或方法未定义。

<strong>可能原因</strong>

在hvigorconfig.ts或hvigorfile.ts中使用了未定义的属性或方法。

<strong>处理步骤</strong>

确保hvigorconfig.ts或hvigorfile.ts中使用的属性或方法都已定义。

#### 00305011 未定义符号错误

<strong>错误信息</strong>

A 'undefined symbol' error has occurred.

<strong>错误描述</strong>

出现了未定义符号错误。

<strong>可能原因</strong>

源文件没有正确编译或链接，或者因为缺少必要的库文件。

<strong>处理步骤</strong>

参考[CPP编译报错"A 'undefined symbol' error has occurred"](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-compiling-and-building-116)。

#### 00305012 CMake任务执行失败

<strong>错误信息</strong>

CMake task execution failed.

<strong>错误描述</strong>

CMake任务执行失败。

<strong>可能原因</strong>

用户手动删除编译后模块的.cxx目录，并且在build-profile.json5中arguments字段下配置“--version”、“

--help”、“--usage”等查询类参数。

<strong>处理步骤</strong>

删除arguments字段下的“--version”、“--help”、“--usage”等查询类参数。

#### 00305013 存在无效的tag标签

<strong>错误信息</strong>

Invalid tag XXX at YYY.

<strong>错误描述</strong>

存在无效的tag标签。

<strong>可能原因</strong>

YYY文件中tag标签存在不符合要求的字符。

<strong>处理步骤</strong>

确保tag标签以字母或数字开头，长度不超过60个字符，只能由字母、数字、句点（.）、中划线（-）、下划线（\_）组成，且不能配置为'latest'。

#### 00305014 出现了“未知类型”错误

<strong>错误信息</strong>

A 'unknown type name' error has occurred.

<strong>错误描述</strong>

出现了“未知类型”错误。

<strong>可能原因</strong>

代码中存在类型未定义、未包含相关头文件或者头文件路径不正确。

<strong>处理步骤</strong>

根据以下指导排查：[CPP编译报错“A 'unknown type name' error has occurred”](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-compiling-and-building-117)。

#### 00305015 解析错误

<strong>错误信息</strong>

以实际错误信息为准。

<strong>错误描述</strong>

以实际错误描述为准。

<strong>可能原因</strong>

通常为源码文件中路径解析错误。

<strong>处理步骤</strong>

根据错误提示信息修改。
