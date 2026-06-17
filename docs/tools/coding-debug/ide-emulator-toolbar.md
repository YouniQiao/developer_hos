---
title: "使用工具栏"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide-emulator-toolbar
format: md
upstream_id: tools/coding-debug/ide-emulator-toolbar
last_sync: 2026-06-07
sync_hash: bfa70c23
upstream_hash: 455614a9572e
---

# 使用工具栏

工具栏上集成了模拟器的各种调试工具和控制选项，其中的扩展菜单栏包含了更加丰富的扩展功能。注意，部分工具栏按键需要在模拟器开机亮屏后才能使用。以下对工具栏的各个按键功能作简要说明：

| 按键 | 功能描述 |
| --- | --- |
| 关闭![](./img/zh-cn_image_0000002571385722.png) | 关闭模拟器。 |
| 最小化![](./img/zh-cn_image_0000002602064827.png) | 最小化模拟器窗口。 |
| 更多![](./img/zh-cn_image_0000002602064847.png) | 打开侧边扩展菜单。 |
| 电源![](./img/zh-cn_image_0000002571545370.png) | 模拟电源，可模拟亮灭屏操作，从DevEco Studio 6.1.0 Beta1版本开始支持。 |
| 置顶![](./img/zh-cn_image_0000002602064833.png) | 将模拟器置于所有打开窗口的顶层。 |
| 左旋转![](./img/zh-cn_image_0000002571385720.png) | 将设备屏幕逆时针旋转90度。 |
| 右旋转![](./img/zh-cn_image_0000002602184901.png) | 将设备屏幕顺时针旋转90度。 |
| 增大音量![](./img/zh-cn_image_0000002602064839.png) | 调高设备音量，长按可持续调高设备音量。 |
| 减小音量![](./img/zh-cn_image_0000002602184899.png) | 调低设备音量，长按可持续调低设备音量。 |
| 截屏![](./img/zh-cn_image_0000002571545368.png) | 生成当前屏幕的截图，并将图片保存在本地计算机。 |
| 返回![](./img/zh-cn_image_0000002602064835.png) | 返回上一屏幕或关闭对话框、选项菜单、通知面板或屏幕键盘。 |
| 主屏![](./img/zh-cn_image_0000002571385718.png) | 返回Home界面。 |
| 最近![](./img/zh-cn_image_0000002602184883.png) | 点按可打开最近使用过的应用的缩略图列表。要打开某个应用，请点按其缩略图。要从列表中删除缩略图，请向上滑动缩略图。 |
| 摇一摇![](./img/zh-cn_image_0000002571545366.png) | 触发设备摇一摇操作，详情参考[摇一摇](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-emulator-more-features#section1241612419541)。 |
| 多屏![](./img/zh-cn_image_0000002602184885.png) | 打开多屏面板，可以动态增删屏幕，详情参考[多屏](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-emulator-more-features#section9744191415368)。 |
| 电池![](./img/zh-cn_image_0000002571545364.png) | 打开电池模拟面板，详情参考[电池](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-emulator-more-features#section169214910812)。 |
| GPS![](./img/zh-cn_image_0000002571545358.png) | 打开GPS模拟面板，详情参考[GPS定位](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-emulator-more-features#section81566471211)。 |
| 虚拟传感器![](./img/zh-cn_image_0000002571385732.png) | 打开虚拟传感器面板，详情参考[虚拟传感器](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-emulator-more-features#section830415558395)。 |
| 网络代理![](./img/zh-cn_image_0000002571385716.png) | 打开网络代理面板，详情参考[网络](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-emulator-more-features#section206461549731)。 |
| 设置![](./img/zh-cn_image_0000002571385724.png) | 打开设置面板。可设置模拟器主题、截屏保存路径、模拟器使用语言。 |
| Bug报告![](./img/zh-cn_image_0000002602184905.png) | 打开Bug报告面板。点击<strong>保存并发送</strong>按钮可以将Bug日志传递给我们。 |
| 关于![](./img/zh-cn_image_0000002571385714.png) | 打开关于面板。可以查看模拟器相关信息及许可证。 |
| 展开![](./img/zh-cn_image_0000002602184897.png) | 仅支持可折叠设备。切换设备形态至展开态。 |
| 悬停![](./img/zh-cn_image_0000002602064843.png) | 仅支持可折叠设备。切换设备形态至悬停态，并显示折痕避让区。 |
| 折叠![](./img/zh-cn_image_0000002571385712.png) | 仅支持可折叠设备。切换设备形态至折叠态。 |
| 三屏![](./img/zh-cn_image_0000002602064841.png) | 仅支持三折叠设备。切换设备形态至左展开，右展开状态。对应[FOLD\_STATUS\_EXPANDED\_WITH\_SECOND\_EXPANDED](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-matext-guide#section152802181518)状态。 |
| 双屏![](./img/zh-cn_image_0000002571545360.png) | 仅支持三折叠设备。切换设备形态至左折叠，右展开状态。对应FOLD\_STATUS\_EXPANDED状态。 |
| 单屏![](./img/zh-cn_image_0000002571385730.png) | 仅支持三折叠设备。切换设备形态至左折叠，右折叠状态。对应FOLD\_STATUS\_FOLDED状态。 |
| 左半折，右展开![](./img/zh-cn_image_0000002571385726.png) | 仅支持三折叠设备。切换设备形态至左半折，右展开状态，并显示折痕避让区。对应FOLD\_STATUS\_EXPANDED\_WITH\_SECOND\_HALF\_FOLDED状态。  从DevEco Studio 6.1.0 Beta2版本开始支持。 |
| 左展开，右半折![](./img/zh-cn_image_0000002602184903.png) | 仅支持三折叠设备。切换设备形态至左展开，右半折状态，并显示折痕避让区。对应FOLD\_STATUS\_HALF\_FOLDED\_WITH\_SECOND\_EXPANDED状态。  从DevEco Studio 6.1.0 Beta2版本开始支持。 |
| 左半折，右半折![](./img/zh-cn_image_0000002571545362.png) | 仅支持三折叠设备。切换设备形态至左半折，右半折状态，并显示折痕避让区。对应FOLD\_STATUS\_HALF\_FOLDED\_WITH\_SECOND\_HALF\_FOLDED状态。  从DevEco Studio 6.1.0 Beta2版本开始支持。 |
| 左折叠，右半折![](./img/zh-cn_image_0000002602184895.png) | 仅支持三折叠设备。切换设备形态至左折叠，右半折状态，并显示折痕避让区。对应FOLD\_STATUS\_HALF\_FOLDED状态。  从DevEco Studio 6.1.0 Beta2版本开始支持。 |
| 左半折，右折叠![](./img/zh-cn_image_0000002602064851.png) | 仅支持三折叠设备。切换设备形态至左半折，右折叠状态。对应FOLD\_STATUS\_FOLDED\_WITH\_SECOND\_HALF\_FOLDED状态。  从DevEco Studio 6.1.0 Beta2版本开始支持。 |
| 左展开，右折叠![](./img/zh-cn_image_0000002571385734.png) | 仅支持三折叠设备。切换设备形态至左展开，右折叠状态。对应FOLD\_STATUS\_FOLDED\_WITH\_SECOND\_EXPANDED状态。  从DevEco Studio 6.1.0 Beta2版本开始支持。 |
| 横展![](./img/zh-cn_image_0000002602064837.png "点击放大") | 仅支持折叠2in1设备。切换设备形态至横展状态。 |
| 竖展![](./img/zh-cn_image_0000002571385728.png "点击放大") | 仅支持折叠2in1设备。切换设备形态至竖展状态。 |
| 悬停![](./img/zh-cn_image_0000002602064845.png) | 仅支持折叠2in1设备。切换设备形态至悬停状态。 |
| 磁吸![](./img/zh-cn_image_0000002602064849.png) | 仅支持折叠2in1设备。切换设备形态至磁吸状态。 |
