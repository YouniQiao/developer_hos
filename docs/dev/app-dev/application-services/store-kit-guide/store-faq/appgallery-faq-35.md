---
displayed_sidebar: appDevSidebar
title: "按需加载成功后，再通过应用市场更新应用，是否需要再次触发按需加载？"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/appgallery-faq-35
format: md
---


不需要。

应用市场更新应用时，会对该应用所有已安装的模块做更新，包括基础模块和已安装动态模块。如果用户手动卸载了应用，再次从应用市场下载应用时，只会下载基础模块，动态模块依旧需要通过按需加载能力安装。
