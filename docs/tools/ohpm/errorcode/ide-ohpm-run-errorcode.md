---
title: "ohpm run错误码"
displayed_sidebar: ohpmSidebar
original_url: /docs/tools/ohpm/errorcode/ide-ohpm-run-errorcode
format: md
---


# ohpm run错误码

## 00611001 脚本执行失败

<strong>错误信息</strong>

Script Fail.

<strong>错误描述</strong>

脚本执行失败。

<strong>可能原因</strong>

在目标路径未找到执行脚本。

<strong>处理步骤</strong>

确保脚本文件在目标路径存在。

## 00611002 脚本别名错误

<strong>错误信息</strong>

Hook Fail.

<strong>错误描述</strong>

钩子名称错误。

<strong>可能原因</strong>

脚本别名错误。

<strong>处理步骤</strong>

修改脚本别名，具体请参考[约束](./ide-ohpm-run.md#zh-cn_topic_0000001792216413_约束)。

## 00611003 script\_name开头位置使用非法字符

<strong>错误信息</strong>

Invalid Command Error.

<strong>错误描述</strong>

非法字符命令行错误。

<strong>可能原因</strong>

脚本别名开头位置使用非法字符，包括(、[、&#123;。

<strong>处理步骤</strong>

检查脚本别名，确保脚本名称开头位置不使用(、[、&#123;。

## 00611004 脚本别名首字母未小写

<strong>错误信息</strong>

Invalid Key.

<strong>错误描述</strong>

脚本别名出现的无效键错误。

<strong>可能原因</strong>

当脚本别名的首字母不是小写时，系统认为该键无效。

<strong>处理步骤</strong>

检查脚本别名的首字母，确保其为小写字母。

## 00611005 脚本别名长度无效

<strong>错误信息</strong>

Invalid KeyLen.

<strong>错误描述</strong>

脚本别名长度无效。

<strong>可能原因</strong>

脚本别名长度不在规定区间时，系统认为该键的长度无效。

<strong>处理步骤</strong>

检查脚本别名的长度，确保在[1,128]范围之内。

## 00611006 args参数长度无效

<strong>错误信息</strong>

Invalid ParamLen.

<strong>错误描述</strong>

参数长度无效。

<strong>可能原因</strong>

args参数长度超出[1,2048]范围。

<strong>处理步骤</strong>

检查args参数长度，确保在[1,2048]范围内。

## 00611007 脚本别名不符合规范

<strong>错误信息</strong>

Invalid Key Regex.

<strong>错误描述</strong>

无效密钥正则表达式。

<strong>可能原因</strong>

script\_name不符合规范

<strong>处理步骤</strong>

检查脚本别名的字符，只能包含：大写字母、小写字母、 数字、下划线\_ 、中划线-。

## 00611008 脚本中用连接的ohpm命令

<strong>错误信息</strong>

Command Error.

<strong>错误描述</strong>

命令错误。

<strong>可能原因</strong>

脚本中包含多个用逻辑符（||、&&）连接的ohpm命令，如"testLogic": "ohpm run testFail || ohpm run testSuc && ohpm run testSuc"。

<strong>处理步骤</strong>

脚本中仅包含一个ohpm命令。

## 00611009 包解析失败

<strong>错误信息</strong>

Parse Pkg Error.

<strong>错误描述</strong>

解析包失败。

<strong>可能原因</strong>

oh-package-lock.json5文件格式不正确。

<strong>处理步骤</strong>

检查oh-package-lock.json5文件是否符合规定的格式，具体请参考[oh-package.json5](./ide-oh-package-json5.md)。

## 00611010 prefix命令执行失败

<strong>错误信息</strong>

Prefix Invalid Error.

<strong>错误描述</strong>

--prefix选项错误。

<strong>可能原因</strong>

指定路径下未包含oh-package.json5文件。

<strong>处理步骤</strong>

确认指定路径下包含oh-package.json5文件。

## 00611011 未能找到指定的包管理配置文件

<strong>错误信息</strong>

Pkg UnExist Error.

<strong>错误描述</strong>

未能找到指定的包管理配置文件。

<strong>可能原因</strong>

当前目录中不存在oh-package.json5文件。

<strong>处理步骤</strong>

确保当前目录中存在oh-package.json5文件。

## 00611012 脚本别名不存在

<strong>错误信息</strong>

Script UnExist Error.

<strong>错误描述</strong>

脚本别名不存在。

<strong>可能原因</strong>

执行脚本别名未在oh-package.json5文件中声明。

<strong>处理步骤</strong>

检查oh-package.json5文件，确保脚本别名已正确声明并且格式正确。

## 00611013 脚本内容为空

<strong>错误信息</strong>

Script Empty Error.

<strong>错误描述</strong>

执行脚本为空错误。

<strong>可能原因</strong>

脚本内容为空。

<strong>处理步骤</strong>

检查脚本内容，确保其包含有效命令。

## 00611014 脚本内容无效

<strong>错误信息</strong>

Script Invalid Error.

<strong>错误描述</strong>

脚本无效错误。

<strong>可能原因</strong>

脚本内容无效。

<strong>处理步骤</strong>

检查脚本内容，确保已正确配置。

## 00611015 脚本内容错误

<strong>错误信息</strong>

Script Content Error.

<strong>错误描述</strong>

脚本内容错误。

<strong>可能原因</strong>

如果别名中引用了 -- 标识符，则只能执行一个ohpm run命令。

<strong>处理步骤</strong>

检查脚本别名的配置，确保 -- 标识符仅用于单个ohpm run命令。

## 00611016 循环调用

<strong>错误信息</strong>

Directed Cycle Error.

<strong>错误描述</strong>

循环调用无法正常执行脚本。

<strong>可能原因</strong>

脚本包含循环调用，如"scriptName1": "ohpm run scriptName2","scriptName2": "ohpm run scriptName2"。

<strong>处理步骤</strong>

检查脚本配置，确保脚本调用关系无循环。

## 00611017 脚本参数不正确

<strong>错误信息</strong>

Invalid Header Param Error.

<strong>错误描述</strong>

脚本参数不正确。

<strong>可能原因</strong>

脚本参数以-或--开头，如ohpm run scriptName1 -- arg1=1 --arg2=2。

<strong>处理步骤</strong>

检查脚本参数，确保-或--开头，如--debug。

## 00611018 无效参数

<strong>错误信息</strong>

Invalid Param Error.

<strong>错误描述</strong>

无效参数。

<strong>可能原因</strong>

使用了无效参数。

<strong>处理步骤</strong>

检查脚本参数格式，参数以短横线-或双短横线--开头，后跟参数名称和对应的值，确保其符合要求，如：--key value（如script --name Alice）、--key=value（如script --age=25）、--key=a=b（如script --config=a=b,c=d）。

## 00611019 传递参数配置无效

<strong>错误信息</strong>

Invalid Param Config Error.

<strong>错误描述</strong>

配置无效参数。

<strong>可能原因</strong>

配置传递参数命令时，未以-- 开头。

<strong>处理步骤</strong>

传递参数配置时，确保以--开头，以指示需要添加或覆盖的参数。具体请参考[传递参数](./ide-ohpm-run.md#zh-cn_topic_0000001792216413_传递参数)。