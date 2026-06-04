---
title: "调用window实例的setWindowSystemBarProperties接口设置窗口状态栏和导航栏的高亮属性时不生效"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-195
---

**问题现象**

调用window实例的setWindowSystemBarProperties接口时，设置isStatusBarLightIcon和isNavigationBarLightIcon属性无效。

**解决措施**

状态栏字体高亮属性的作用是将字体变为白色。调用window实例的 setWindowSystemBarProperties接口时，如果设置了状态栏内容颜色statusBarContentColor，则以开发者设置的颜色为准，isStatusBarLightIcon属性将不生效。同理，如果设置了导航栏内容颜色 navigationBarContentColor，isNavigationBarLightIcon属性也将不生效。

**参考链接**

[window.setWindowSystemBarProperties](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#setwindowsystembarproperties9)
