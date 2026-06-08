---
title: "功能调试"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/bp-functions-intelligent-subcontract-debug-0000001284968724
format: md
upstream_id: monetize/promotion/bp-functions-intelligent-subcontract-debug-0000001284968724
last_sync: 2026-06-07
sync_hash: 0af57b23
---
# 功能调试

## 前提条件

- 准备包含归因查询代码的测试版本包。

## 调试步骤

1. 创建智能分包，并设置智能分包渠道号，详情请参考[新建智能分包](/docs/monetize/promotion/bp-functions-intelligent-subcontract-create-0000001337248557)。
2. 创建搜索任务，创建任务时应注意以下几点：
   - 在“投放控制 &gt; 每日预算”设置中，设置任务预算建议不少于500，且账户预算建议不少于1000。
   - 在“通用投放”设置中，关闭“通用投放开关”。
   - 在“场景投放”设置中，新增并设置子任务“定向字词”为冷门关键词（如APP名称+123），出价尽量高，“字词匹配方式”选择“广泛匹配”。
   - 在“归因监测”设置中，选择刚刚创建的渠道号，与任务进行绑定。
3. 创建完成并审核通过后，搜索关键词，找到推广位（需与运营进行确认），并下载应用。
4. 查看报表数据是否统计到了本次下载，来确认本次下载是否为推广量。

   具体请参见[查询任务数据报表](/docs/monetize/promotion/bp-functions-intelligent-subcontract-inquire-0000001337408053)。
5. 覆盖安装测试包。

   <strong>adb install -r</strong> *&lt;测试包所在路径&gt;.apk*
6. 启动应用后调用归因查询代码将数据传到服务端解析处理。

   ![](./img/8a8bbc1f3c6c.png) 

   - 首次对接调测智能分包，老版本应用不具备查询能力，推广位下载APP后请直接使用覆盖安装进行升级，切勿卸载后再安装，否则会导致归因信息丢失。
   - 切勿使用Android Studio安装测试版本，此过程等同于卸载重装。
   - 测试包的签名文件须与在架版本保持一致，否则无法安装成功。
