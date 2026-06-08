---
format: md
title: "如何使用ohpm引入三四方库"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-command-line-tool/faqs-command-line-tool-13
upstream_id: FAQ/faqs-deveco-studio/faqs-command-line-tool/faqs-command-line-tool-13
last_sync: 2026-06-07
sync_hash: 75d6295f
---
* 方式一：
  1. 打开Terminal窗口，通过如下指令进入到entry目录。

     cd entry
  2. 引入“dayjs”，执行以下指令进行安装。

     ohpm install dayjs
  3. 在对应的JS文件中直接引用。

     import dayjs from 'dayjs';
* 方式二：
  1. 打开工程目录下的entry目录，找到该目录下的oh-package.json5文件。
  2. 在oh-package.json5文件中写入要安装的三方库，以dayjs为例，示例如下：

     ```
     "dependencies": {
       "dayjs": "^1.10.4",
     } ,
     ```
  3. 打开Terminal窗口，通过如下指令进入到entry目录。

     cd entry
  4. 执行指令进行安装。

     ohpm install
  5. 在对应的ArkTS文件中引用。

     import dayjs from 'dayjs';
