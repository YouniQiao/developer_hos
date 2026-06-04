---
title: "基于Search组件keyboardAppearance属性设置输入法键盘沉浸式样式"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/input_method_application_immersive_mode-0000002283469114
---

## 场景介绍

基于Search组件keyboardAppearance属性设置输入法键盘沉浸式样式是实用工具类应用中的典型场景之一，如用户在搜索、编辑使用输入法时，为用户提供一致的沉浸式体验。

本示例基于[Search](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-search)搜索框组件的[keyboardAppearance](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-search#keyboardappearance15)属性设置前台应用搜索框及系统输入法应用的沉浸模式。

## 效果预览

![](./img/1e2ec1de.png "点击放大")

## 实现思路

* 使用系统内置输入法应用时，通过[Search](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-search)搜索框组件添加[keyboardAppearance](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-search#keyboardappearance15)属性，设置搜索框沉浸模式。

  ```
  Search({ placeholder: $r('app.string.search_city'), controller: this.controller })
    .width(this.searchWidth)
    .searchIcon({ color: $r('app.color.search_icon_color') })
    .placeholderFont({ size: $r('app.float.font_size_16'), weight: Constants.FONT_WEIGHT_DEFAULT })
    .placeholderColor($r('app.color.font_color_white'))
    .textFont({ size: $r('app.float.font_size_16'), weight: Constants.FONT_WEIGHT_DEFAULT })
    .keyboardAppearance(KeyboardAppearance.IMMERSIVE) // 设置搜索框沉浸模式
  ```

* 使用自定义输入法应用时，请参考[输入法应用沉浸模式](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/inputmethod-immersive-mode-guide)。

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets            // 代码区
│  ├──common
│  │  └──Constants.ets           // 常量
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──model
│  │  ├──AirQualityModel.ets     // 城市空气质量
│  │  └──PopularCityModel.ets    // 热门城市天气
│  └──pages
│     └──MainPage.ets            // 主页
└──entry/src/main/resources      // 应用资源目录
```

## 参考文档

[Search](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-search)

[输入法应用沉浸模式](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/inputmethod-immersive-mode-guide)

## 代码下载

[基于Search组件keyboardAppearance属性设置输入法键盘沉浸式样式示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260210101753.64752576843659110567183025910983%3A50001231000000%3A2800%3A017FADD1400CFB6B30D6B05E37CCEA58ED59B1F26A70AACDD8411AC27CBAB929.zip?needInitFileName=true)
