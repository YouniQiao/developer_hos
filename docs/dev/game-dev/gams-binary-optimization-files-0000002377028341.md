---
title: "文件准备"
original_url: /docs/dev/game-dev/gams-binary-optimization-files-0000002377028341
format: md
---


## 准备原始包

准备游戏的release正式上架包或debug调试包。

## 准备原始so文件

从release包中获取未加壳的release so文件，或从debug包中获取未加壳的debug so文件。若优化后的加壳so文件替换原始包中的so文件，可能在运行阶段会导致游戏闪退问题。

![](./img/5fd50f71.png)

* so文件无需重命名。
* 为了提高优化收益，建议选择游戏引擎对应的so文件，或游戏运行过程中热点占比较大的so文件。

## 准备symbol文件

symbol文件是游戏编译原始so文件时生成的符号表文件，文件后缀为\*.sym或\*.sym.so。

![](./img/f53b8c9f.png)

symbol文件必须与原始so文件一一对应，例如libil2cpp.so与libil2cpp.sym.so。
