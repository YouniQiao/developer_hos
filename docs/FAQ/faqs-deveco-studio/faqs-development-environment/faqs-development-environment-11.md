---
format: md
title: "流水线场景使用命令行工具sdkmgr下载Linux SDK失败"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-development-environment-11
---


**问题现象**

在Linux上使用命令行工具sdkmgr时，如果提示“Failed to request URL https://devecostudio-dre.op.hicloud.com/sdkmanager/v5/hos/getSdkList”。

![](./img/2757c7c3.png)

**解决措施**

该问题通常是因为Linux的国家码未设置为中国区。

1. 进入sdkmgr所在的目录。

   ```
   cd ${命令行工具根目录}/sdkmanager/bin
   ```

   ![](./img/fe03efec.png)
2. 打开sdkmgr文件。

   ```
   vim sdkmgr
   ```

   ![](./img/a319e9ee.png)
3. 在sdkmgr文件的最后一行“-Dfile.encoding=UTF-8”后添加国家码“-Duser.country=CN”。

   ![](./img/f664543a.png)
4. ​保存修改后，再次执行sdkmgr相关命令即可正常下载Linux SDK。
