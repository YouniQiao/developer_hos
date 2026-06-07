---
displayed_sidebar: appDevSidebar
title: "打开应用功能跳转第三方应用失败"
original_url: /docs/dev/app-dev/application-services/scenario-fusion-kit-guide/scenario-fusion-button-frequently-asked-questions/scenario-fusion-faq-2
format: md
---


**现象描述**

日志报错示例：

```
startAbility failed, code is 16000018, message is The application is not allow jumping to other applications when api version is above 11.
```

**解决措施**

需要执行命令手动开启限制开关。

```
hdc shell param set persist.sys.abilityms.support.start_other_app true
```
