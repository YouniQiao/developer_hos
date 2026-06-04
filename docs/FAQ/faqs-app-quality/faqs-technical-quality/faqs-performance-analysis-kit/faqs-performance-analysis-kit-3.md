---
title: "hilog日志出现乱码原因是什么，如何解决"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-performance-analysis-kit-3
---

当前hilog日志采用轻量化技术，以二进制格式存储在磁盘上，并使用数据字典。因此，直接解压查看会显示乱码。

可以使用DevEco Studio\sdk\default\hms\toolchains目录下的hilogtool.exe工具，执行 hilogtool.exe parse命令进行解析。

```
@set Ymd=%date:~0,4%_%date:~5,2%%date:~8,2%_%time:~0,2%%time:~3,2%%time:~6,2%
@set Ymd=%Ymd: =0%
@set Dir=LOG_%YMD% md %Dir% hdc file recv /data/log/hilog/ .\%Dir%\
hilogtool parse -i .\%Dir% -d .\%Dir%
pause
```

上述代码保存为get\_hilog.bat文件，和hilogtool.exe存放于同一目录下，执行脚本文件下载所有日志文件，并进行解析。
