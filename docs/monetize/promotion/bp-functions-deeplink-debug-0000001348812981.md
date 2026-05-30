---
title: "功能调试"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/bp-functions-deeplink-debug-0000001348812981
---
# 功能调试

## 前提条件

- 您已集成延迟Deeplink[客户端查询代码](https://developer.huawei.com/consumer/cn/doc/promotion/bp-functions-deeplink-inquire-client-0000001348653289)或[API接口查询代码](https://developer.huawei.com/consumer/cn/doc/promotion/bp-functions-deeplink-inquire-api-0000001296132894)。

## 操作步骤

![](./img/caution_3.0-zh-cn_68baab358fda.png) 

- 首次对接调测延迟Deeplink，老版本应用不具备延迟Deeplink能力的，推广位下载APP后请直接使用覆盖安装进行升级，切勿卸载后再安装，否则会导致归因信息丢失。
- 切勿使用Android Studio安装测试版本，此过程等同于卸载重装。
- 测试包的签名文件须与在架版本保持一致，否则无法安装成功。

1. 创建搜索投放任务时注意以下几点：
   1. 非影子投放任务。
   2. 在“投放控制”设置模块中，配置“每日预算”任务设置项，设置任务预算建议不少于500，且账户预算建议不少于1000。
   3. 在“通用投放”设置模块中，关闭“通用投放开关”。
   4. 在“场景投放”设置模块中，新增并设置子任务“定向字词”为冷门关键词（如APP名称+123），出价尽量高，“字词匹配方式”选择“精准匹配”。
2. 投放任务创建完成，且推广创意审核通过后，在华为应用市场客户端搜索关键词，从资源位下载（需与华为运营确认）。
3. 覆盖安装测试包。

   <strong>adb install -r</strong> *&lt;**测试包所在路径&gt;.apk*
4. 从桌面打开覆盖安装的应用（不要从应用市场打开），打开后跳转到指定页面即为成功。
