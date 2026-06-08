---
title: "确认意图名称"
original_url: /docs/distribute/agc/agc-help-insight-config-poi-0000002349175932/agc-help-confirm-intent-name-0000002442961545
format: md
upstream_id: distribute/agc/agc-help-insight-config-poi-0000002349175932/agc-help-confirm-intent-name-0000002442961545
last_sync: 2026-06-07
sync_hash: d0a9e0db
---
HarmonyOS依托华为智能终端，提供了一套面向开发者智能接入系统的意图标准体系，即HarmonyOS意图框架。一个意图表示开发者实现的一个业务功能，意图框架能够帮助开发者将应用/元服务内的业务功能，智能分发到小艺建议、智慧搜索等系统入口。

#### 查看意图Schema

目前近场服务支持的意图如下表所示。您可根据应用的意图场景，确认所属垂域和意图名称。例如旅游类应用，所属垂域为“TravelDomain”，可用的意图名称包括查看景点信息（ViewSceneryInfo）和查看旅游攻略（ViewTravelGuides）。

| **所属垂域**（中文名） | **意图场景** | **所属垂域（Domain）** | **意图名称（intentName）** |
| --- | --- | --- | --- |
| 旅游 | 查看景点信息 | TravelDomain | ViewSceneryInfo |
| 查看旅游攻略 | ViewTravelGuides |
| 优惠 | 查看门店优惠 | DiscountsDomain | ViewStoreCoupon |
| 本地生活 | 查看政务信息 | LocalDomain | ViewGovernmentService |
| 金融 | 查看银行网点信息 | BankingDomain | ViewBankBranchInfo |
| 医疗 | 查看医院 | MedicalDomain | ViewHospital |
| 工具 | 打卡 | ToolsDomain | ClockIn |
| 查看付款码 | ViewPaymentCodes |

意图Schema详情请参考[各垂域意图Schema.zip](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260427153122.43900055830730787012241702033236%3A20260531170856%3A2800%3AF9D578AA44479E537C0D3CC23D915319A736865091B633E19E8960306CE5FA3C.zip?needInitFileName=true)。

#### 申请新意图

如果在当前已支持的意图表格中未找到符合您应用的意图场景，请发送邮件进行反馈。华为方收到邮件后，将在15个工作日内完成审核，并通过邮件告知您处理结果。

申请邮件格式要求如下：

* **邮箱地址**

  agconnect@huawei.com
* **邮件标题**

  【近场服务】-【申请新意图】
* **邮件内容**

  需包含如下信息：

  + 应用/元服务名称
  + 应用ID：即APP ID，获取方法请参见[查看应用信息](/docs/distribute/agc/agc-help-app-0000002235710234/agc-help-view-app-info-0000002282674569)。
  + 应用/元服务分类：可在“APP与元服务 > 分发 > 应用上架 > 应用信息”页面查看。
  + 意图场景描述：请描述意图的使用场景。例如，当用户在商超附近时，推荐精选商圈。
