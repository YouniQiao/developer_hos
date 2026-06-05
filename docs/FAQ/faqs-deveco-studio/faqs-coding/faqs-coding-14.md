---
format: md
title: "DevEco Studio上使用生成NAPI功能时， 提示“Failed to generate NAPI, check the napi_init.cpp file and try again. ”错误"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-coding-14
---


**问题现象**

右键单击函数， 在弹出的菜单中依次选择 Generate... > NAPI， 生成胶水代码报错。

![](./img/9cfd8e07.png)

**解决措施**

检查napi\_init.cpp文件的Init函数中是否初始化了napi\_property\_descriptor变量。没有初始化请添加napi\_property\_descriptor desc[] = \{\}; 然后重新生成NAPI。

![](./img/89e14dad.png)
