---
format: md
title: "pc上，bindPopup设置了showInSubWindow:true时，气泡无法再弹出菜单"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-446
---


**问题背景**

在PC端使用bindPopup组件时，当设置了showInSubWindow: true属性后，如果气泡内的组件再次绑定子窗口弹窗，会导致内层弹窗无法正常弹出，如何修改？

**解决措施**

在PC设备上，使用[bindMenu方法](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-menu#bindmenu)弹出的菜单默认会以子窗口形式显示。由于系统限制，子窗口类型的弹窗无法嵌套绑定同类型弹窗，因此当尝试在子窗口弹窗内再弹出子窗口菜单时，操作将不被支持。若需要弹出bindMenu，可设置bindMenu的参数[showInSubWindow](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-menu#menuoptions10)为false。

**参考链接**

[bindPopup](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-popup#bindpopup)
