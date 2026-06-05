---
title: "使用调试器"
displayed_sidebar: toolsSidebar
format: md
---


# 使用调试器

Debug界面有三个tab页，分别是“entry”、“entry(PandaDebugger)”和“entry(Native)”。

通常第一个tab页“entry”用于展示推包安装过程。

![](./img/zh-cn_image_0000002571547238.png)

第二个tab页“entry(PandaDebugger)”和第三个tab页“entry(Native)”是调试器，用于调试Debugger功能，其中“entry(Native)”仅在涉及Native调试时才会拉起。调试器包含两个窗格，<strong>[Debugger](#section1437520119316)</strong>和<strong>[Console](#section327153017314)</strong>。

![](./img/zh-cn_image_0000002571547244.png)

#### Debugger窗格

Debugger显示两个独立的窗格：

* 左侧区域是Frames，当应用调试到某个断点时，Frames区会显示当前代码所引用的代码位置。
* 右侧区域是Variables，用于展示当前变量。

![](./img/zh-cn_image_0000002571387576.png)

Debugger窗格有多个按钮：

<strong>表1</strong> 调试器按钮

| 按钮 | 名称 | 快捷键 | 功能 |
| --- | --- | --- | --- |
| ![](./img/zh-cn_image_0000002602186781.png) | Resume Program | <strong>F9</strong>（macOS为<strong>Option+Command+R</strong>） | 当程序执行到断点时停止执行，单击此按钮程序继续执行。 |
| ![](./img/zh-cn_image_0000002571387596.png) | Step Over | <strong>F8</strong>（macOS为<strong>F8</strong>） | 在单步调试时，直接前进到下一行（如果在函数中存在子函数时，不会进入子函数内单步执行，而是将整个子函数当作一步执行）。 |
| ![](./img/zh-cn_image_0000002571547224.png) | Step Into | <strong>F7</strong>（macOS为<strong>F7</strong>） | 在单步调试时，遇到子函数后，进入子函数并继续单步执行。 |
| ![](./img/zh-cn_image_0000002571547248.png) | Force Step Into | <strong>Alt+Shift+F7</strong>（macOS为<strong>Option+Shift+F7</strong>） | 在单步调试时，强制进入方法。 |
| ![](./img/zh-cn_image_0000002571547216.png) | Step Out | <strong>Shift+F8</strong>（macOS为<strong>Shift+F8</strong>） | 在单步调试执行到子函数内时，单击Step Out会执行完子函数剩余部分，并跳出返回到上一层函数。 |
| ![](./img/zh-cn_image_0000002602066693.png) | Stop | <strong>Ctrl+F2</strong>（macOS为<strong>Command+F2</strong>） | 停止调试任务。 |
| ![](./img/zh-cn_image_0000002602186747.png) | Run To Cursor | <strong>Alt+F9</strong>（macOS为<strong>Option+F9</strong>） | 断点执行到鼠标停留处。 |
| ![](./img/zh-cn_image_0000002602186775.png) | JSVM Debug Port | 无 | 转发JSVM调试的端口，转发后可以在浏览器的DevTools工具上进行[JSVM-API调试](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/jsvm-debugger-cpuprofiler-heapsnapshot)。  说明：  仅Native调试器中支持该按钮。 |

#### Resume Program

点击Resume Program图标![](./img/zh-cn_image_0000002602066715.png)，如果存在断点时，命中下一个断点，并展示对应的Frames和Variables信息；如果不存在断点，设备上的应用正常运行，Frames和Variables信息会消失。

![](./img/zh-cn_image_0000002602066691.png)

#### Pause Program

点击Pause Program图标![](./img/zh-cn_image_0000002602066709.png)，当有对应源代码时，应用会暂停。

#### Step Over

点击Step Over![](./img/zh-cn_image_0000002571387594.png)，当前代码执行到下一行代码。

![](./img/zh-cn_image_0000002571547234.png)

#### Step Into

点击Step Into![](./img/zh-cn_image_0000002571387610.png)，当前代码进入到方法内部。

![](./img/zh-cn_image_0000002571387578.png)

例如代码进入add方法的定义处。

![](./img/zh-cn_image_0000002602066705.png)

![](./img/zh-cn_image_0000002571547214.png)

#### Step Out

点击Step Out![](./img/zh-cn_image_0000002602186749.png)，代码会从方法内部回到调用处。

![](./img/zh-cn_image_0000002602066707.png)

#### Run to Cursor

点击Run to Cursor![](./img/zh-cn_image_0000002571547218.png)，代码停留在鼠标停留处。

![](./img/zh-cn_image_0000002602066695.png)

#### JSVM Debug Port

点击JSVM Debug Port![](./img/zh-cn_image_0000002602066725.png)，弹出输入转发端口的面板，输入端口并点击<strong>OK</strong>后会开始转发，转发成功后会有弹窗提示，打开对应的URL即可对JS代码进行调试。关于如何调试C++拉起的JS代码，请查阅[JSVM-API调试&定位](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/jsvm-debugger-cpuprofiler-heapsnapshot)。

该功能从DevEco Studio 5.1.0 Release版本开始支持。

![](./img/zh-cn_image_0000002602066721.png) ![](./img/zh-cn_image_0000002571547212.png)

#### Console窗格

Console窗格用于展示已加载的ets/js。

![](./img/zh-cn_image_0000002602186751.png)
