---
title: "Reports API指南"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-report-api-guide-0000002271134669
format: md
---


您可以使用Reports API查询AppGallery Connect中大部分分析数据，例如下载安装等报表数据。

一个典型的Reports API业务的开发流程如下：

![](../img/agc-help-report-api-guide-0000002271134669_0.png)

为了帮助您更好的开发，我们提供了[Reports API示例代码](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-demo-0000002238448026)。您可以参考Demo工程中的示例代码编写您的应用程序。

1. 请参见[获取服务端授权](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661)完成服务端授权。

   例如，API客户端方式需要先创建对应角色的API客户端，并获取认证用的Access Token。
2. [查看报表数据](#section124mcpsimp)：获取报表前必须确保应用当前在AppGallery Connect中存在对应报表数据，即应用必须已经上架且开始运营推广。
3. [获取报表下载地址](#section125mcpsimp)：您需要调用Reports API获取报表的CSV或Excel文件下载地址。
4. [下载报表](#section126mcpsimp)：您需要根据取得的报表下载地址手动下载报表的CSV或Excel文件。

#### 查看报表数据

获取报表前必须确保应用当前在AppGallery Connect中存在对应报表数据，即应用必须已经上架且开始运营推广。您可以通过如下方法查询当前已经在AppGallery Connect中存在的报表数据。

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，选择“分析”。
2. 点击应用链接进入应用分析页面。
3. 在页面的“概览”、“分发分析”、“质量分析”等页面查看报告数据。

#### 获取报表下载地址

您可以调用Reports API中的对应接口获取该报表的CSV或Excel文件路径。

需要注意的是，调用Reports API前请确认已经完成[获取服务端授权](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661)。

#### 下载报表

获取报表下载地址后，您可以通过该地址直接下载报表对应的CSV或Excel文件，文件中包含详细的报表数据。

#### 开发样例

当前所有Reports API的调用流程都基本类似，本章节以获取HarmonyOS应用下载安装的报表文件接口为例，介绍Reports API业务的开发步骤。

1. 参考[获取服务端授权](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661)完成服务端授权。例如，API客户端方式需要先创建对应角色的API客户端，并获取认证用的Access Token。
2. 调用[获取HarmonyOS应用下载安装的报表文件](https://developer.huawei.com/consumer/cn/doc/app/agc-help-report-api-app-download-export-0000002271000737)接口获取报表文件的fileURL路径。

   ```
   package com.huawei.appgallery.connect.gateway.core;

   public class ReportApiDemo {
       public static void main(String[] args) {
           getReport(getToken(), "101236389", "zh-CN", "20240501", "20240630");
       }

       public static String getToken() {
           HttpPost post = new HttpPost("https://x.x.x.x/api/oauth2/v1/token");
           JSONObject keyString = new JSONObject();
           keyString.put("client_id", "205401****9936");
           keyString.put("client_secret", "C287F53841C1A29BD049****04C1A8A8E93C432671A553DCC2DC9352");
           keyString.put("grant_type", "client_credentials");
   	    ... ...  // 发送POST请求，response中获取access_token字段
           return token;  // 获取token
       }

       public static String getReport(String token, String appId, String language, String startTime, String endTime) {
           HttpGet get = new HttpGet(
               "https://x.x.x.x/api/report/harmony-report/v1/harmony/appDownloadAnalysisExport/" + appId + "?"
                   + "language=" + language + "&startTime=" + startTime + "&endTime=" + endTime);
           get.setHeader("Authorization", "Bearer " + token);
           get.setHeader("client_id", "205401****9936");
               ... ...  // 发送GET请求，获取响应中的获取报表的下载路径
       }
   }
   ```

3. 根据获取到的报表文件的URL地址下载报表数据的CSV或Excel文件。
