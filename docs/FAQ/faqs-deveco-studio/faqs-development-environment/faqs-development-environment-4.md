---
format: md
title: "下载HarmonyOS SDK时提示网络连接错误"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-development-environment-4
---

**问题现象**

网络连接正常，但下载HarmonyOS SDK时提示网络连接错误。

![](./img/09834060.png)

**解决措施**

由于使用的PC系统语言为英文且区域码为US，可能导致问题。请按照以下步骤将区域码修改为CN，在修改前请确保已关闭DevEco Studio。

在C:\Users\\_username\_\AppData\Roaming\Huawei\DevEcoStudio4.1\options路径下（MacOS 路径为/Users/\_username\_/Library/Application Support/Huawei/DevEcoStudio4.1/options），打开country.region.xml文件，将countryregion name修改为“CN”。

```
<application>
    <component name="CountryRegionSetting">
        <countryregion name="CN"/>
    </component>
</application>
```
