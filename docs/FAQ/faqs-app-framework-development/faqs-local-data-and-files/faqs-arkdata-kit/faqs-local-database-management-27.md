---
format: md
title: "setSessionId加入组网和on启动监听前后设置的区别"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-27
---


开发者应先启动监听再设置setSessionId加入组网，如果顺序相反，在setSessionId和启动监听之间的时间段内发生的数据变化将无法获取。具体影响需根据业务逻辑和代码确定。
