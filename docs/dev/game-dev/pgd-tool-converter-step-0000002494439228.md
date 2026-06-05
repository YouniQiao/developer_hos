---
title: "基本转换步骤"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/pgd-tool-converter-step-0000002494439228
format: md
---


## 第一步：选择目录

1. 在顶部菜单栏选择“Window &gt; PGD &gt; ECS Converter”，打开“ECS Converter”窗口。
2. 在PGD Scripts Output Path文本框右侧点击“...”按钮。
3. 在系统弹出的目录选择对话框中，选择转换后的脚本保存目录。

   ![](./img/1aa35e00.png)

   建议为每个工程单独准备一个输出根目录。请勿直接选择当前工程的Assets目录作为输出目录，避免报错和文件丢失。

## 第二步：执行转换

点击“Convert”，执行转换，并通过本地日志查看转换过程详情（语法节点转换前后信息等）。

转换结束后，本地日志默认路径为：

```
<当前工程根目录>/Logs/PgdConverter
```

## 第三步：验证转换后的脚本

使用转换后的脚本替换原工程中的脚本。

不同ECS框架间的接口规格及使用规范存在差异，因此部分语法暂不支持直接转换。开发者可根据转换后代码中对应的提示，使用PGD语法进行手动修改。
