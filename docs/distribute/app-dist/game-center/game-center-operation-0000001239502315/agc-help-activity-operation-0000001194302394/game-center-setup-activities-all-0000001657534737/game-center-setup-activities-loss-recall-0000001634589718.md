---
title: "流失召回"
displayed_sidebar: appDistSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/app/game-center-setup-activities-loss-recall-0000001634589718
---

# 流失召回

为了挽回流失用户，提升用户留存率，您可以创建流失召回活动。在活动期间，针对指定的用户群体直接发放活动奖励，例如标签用户群、私有用户群。奖品信息会通过应用市场或游戏中心推送给用户。

![](./img/53ca3c2b17a2.png)

已实名认证的企业开发者才能创建活动。

## 展示效果

流失召回活动通知示例如下。

![](./img/c9c0851d8b1c.png)

## 接入流程

![](./img/03e35a9cbeea.png "点击放大")

## 活动准备

* 已成功[创建应用](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-createapp-0000001146718717)，且软件包类型为“APK(Android应用)”或者“RPK(快应用)”，支持设备为“手机”。
* 含奖品的活动需提前准备奖品素材，详情请参见[奖品素材](https://developer.huawei.com/consumer/cn/doc/app/game-center-setup-activities-param-0000001608575030#section953762813448)。
* 提前准备活动素材。

  | 活动形式 | 准备项 | | 说明 |
  | --- | --- | --- | --- |
  | 定向发奖 | 用户类型 | | 活动投放的用户类型：  + 标签用户群：您可以在活动申请页面勾选不同维度的标签。 + 自建私有用户群：不同openId/playerId组成的私有用户群，您需要提前[创建私有用户群](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-pic-analysis-0000001154544228#section2016517582187)。 |
  | 无奖品H5 | 活动封面图片 | | 要求宽高分辨率为1280px\*720px，且大小不超过200KB的JPG格式图片。  说明：  设计图无需Logo和文字，尽量突出活动主题和元素，更详细要求可参照[活动素材规范](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251015105455.64186342968701145563057959875175%3A50001231000000%3A2800%3AAAE2192CA1B3FBEDA82CD7FC272D5D122D3DD681B47FB21E199558CEE2A7F69D.zip?needInitFileName=true)。 |

## 配置活动奖品

![](./img/fa3d0dde90d7.png)

若创建无奖品活动可跳过该步骤。

通过各类运营活动，为用户提供活动奖励，以不同活动形式向用户发放奖品，需先配置可添加至运营活动的活动奖品，配置活动奖品操作步骤如下。文中具体参数说明请参见[参数说明](https://developer.huawei.com/consumer/cn/doc/app/game-center-setup-activities-param-0000001608575030)。

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，点击“APP与元服务”，在应用列表中选择需要新增奖品的应用。
2. 新增奖品。

   ![](./img/e5445376d39b.png)

3. 填写奖品信息，完成后点击右上角“提交”提交审核。

   ![](./img/6fa88c6c2a97.png)

## 创建活动

配置活动奖品并提交审核后，您可按如下步骤创建流失召回活动。文中具体参数说明请参见[参数说明](https://developer.huawei.com/consumer/cn/doc/app/game-center-setup-activities-param-0000001608575030)。

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，点击“APP与元服务”，在应用列表中选择应用。
2. 新建活动。

   ![](./img/c5f39a62d281.png)
3. 配置活动规则。

   ![](./img/aa34b2f6436c.png)
4. 下滑页面至“活动奖品配置”区域配置活动奖品（若“活动形式”选择“无奖品H5”无需配置，不展示该内容）。

   ![](./img/91056074ab12.png)
5. 配置活动落地页（若“活动形式”选择“定向发奖”无需配置，不展示该内容）。

   ![](./img/7fd78b6fd92f.png)
6. 审核与上架。

   点击页面右上角“提交审核”提交审核后，华为工作人员审核活动申请预计需要1~3个工作日，请耐心等待。审核结果可在状态栏查看。

   ![](./img/be8060685d94.png)

   ![](./img/da77ecad146f.png)

   若想修改审核中的活动，请先撤销运营活动的申请，重新编辑活动后再提交审核。