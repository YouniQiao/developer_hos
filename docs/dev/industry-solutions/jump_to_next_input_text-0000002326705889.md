---
title: "自动跳转下一个填写项"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/jump_to_next_input_text-0000002326705889
---

## 场景介绍

自动跳转下一个填写项是实用工具类应用高频场景之一，如用户输入信息时，完成一项信息输入后自动切换至下一个填写项，无需手动点击。

本示例基于[TextInput](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-textinput)和[focusControl](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-focus#focuscontrol9)实现输入焦点自动切换功能，可提高数据录入效率和用户体验，常用于表单填写、验证码输入等场景。

## 效果预览

![](./img/b2327f86.png "点击放大")

## 实现思路

设置待跳转输入框[TextInput](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-textinput)的.key()属性，如.key('性别')，为上一个输入框TextInput配置待跳转输入框TextInput的key值。

```
TextInput({ placeholder: this.placeholder })
  .key(this.index)                        // 定义当前填写项的key值
  .enterKeyType(EnterKeyType.Next)
  .onSubmit((EnterKeyType) => {
    focusControl.requestFocus(this.next)  // 指定跳转目标输入框的key值
  })
  .onChange((value: string) => {
    this.value = value;
  })
```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets
│  ├──constants
│  │  └──StyleConstants.ets               // 常量
│  ├──entryability
│  │  └──EntryAbility.ets                 // 程序入口
│  └──pages
│     └──JumpNextInput.ets                // 主页
└──entry/src/main/resources               // 应用资源目录
```

## 参考文档

[TextInput](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-textinput)

[焦点控制](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-focus)

## 代码下载

[自动跳转下一个填写项示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260312185343.52161612982734315440984727420417%3A20260604145459%3A2800%3A9C89D24C9323790624BD12FEC7C3BC2B275A0D81E14638C19704240C721574BA.zip?needInitFileName=true)
