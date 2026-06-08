---
title: "提升付费"
displayed_sidebar: appDistSidebar
original_url: /docs/distribute/app-dist/game-center/game-center-operation-0000001239502315/agc-help-activity-operation-0000001194302394/game-center-setup-activities-all-0000001657534737/game-center-setup-activities-increase-payment-0000001683109285
format: md
upstream_id: distribute/app-dist/game-center/game-center-operation-0000001239502315/agc-help-activity-operation-0000001194302394/game-center-setup-activities-all-0000001657534737/game-center-setup-activities-increase-payment-0000001683109285
last_sync: 2026-06-07
sync_hash: b723abf1
---
# 提升付费

为了提升用户付费，增加收益，您可以创建提升付费活动。活动期间，在应用内充值到达指定金额的用户有机会获得奖励。

![](./img/d9f2f22b75ac.png)

已实名认证的企业开发者才能创建活动。

## 展示效果

提升付费活动落地页以及活动通知展示效果如下。

![](./img/f05b36e7249e.png)

## 接入流程

![](./img/df5b940334b3.png "点击放大")

## 活动准备

* 已成功[创建应用](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-createapp-0000001146718717)，且软件包类型为“APK(Android应用)”或者“RPK(快应用)”，支持设备为“手机”。
* 含奖品的活动需提前准备奖品素材，详情请参见[奖品素材](/docs/distribute/app-dist/game-center/game-center-operation-0000001239502315/agc-help-activity-operation-0000001194302394/game-center-setup-activities-all-0000001657534737/game-center-setup-activities-param-0000001608575030#section953762813448)。
* 提前准备活动落地页素材。

  | 准备项 | | 说明 |
  | --- | --- | --- |
  | 活动封面图片 | | 要求宽高分辨率为1280px\*720px，且大小不超过200KB的JPG格式图片。  说明：  + 设计图无需Logo和文字，尽量突出活动主题和元素，详细要求请参考[活动素材规范](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251015105453.27450047954656957305780263494465%3A50001231000000%3A2800%3ADEA39AAF8CE85F3F21C142477219CA65D556189396A3C7A37AE634A36996842B.zip?needInitFileName=true)。 + 活动形式为“直接发奖”且落地页选择“活动详情页”时还需要准备一份同一设计图，尺寸为357px\*264px，大小不超过150KB的JPG格式图片。 |

## 配置活动奖品

![](./img/f078bd9a6639.png)

若创建无奖品活动可跳过该步骤。

通过各类运营活动，为用户提供活动奖励，以不同活动形式向用户发放奖品，需先配置可添加至运营活动的活动奖品，配置活动奖品操作步骤如下。文中具体参数说明请参见[参数说明](/docs/distribute/app-dist/game-center/game-center-operation-0000001239502315/agc-help-activity-operation-0000001194302394/game-center-setup-activities-all-0000001657534737/game-center-setup-activities-param-0000001608575030)。

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，点击“APP与元服务”，在应用列表中选择需要新增奖品的应用。
2. 新增奖品。

   ![](./img/86b4d25f60e1.png)

3. 填写奖品信息，完成后点击右上角“提交”提交审核。

   ![](./img/ba0cad97a2b7.png)

## 创建活动

配置活动奖品并提交审核后，您可按如下步骤创建提升付费活动。文中具体参数说明请参见[参数说明](/docs/distribute/app-dist/game-center/game-center-operation-0000001239502315/agc-help-activity-operation-0000001194302394/game-center-setup-activities-all-0000001657534737/game-center-setup-activities-param-0000001608575030)。

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，点击“APP与元服务”，在应用列表中选择应用。
2. 新建活动。

   ![](./img/dcccae012a2b.png)
3. 配置活动规则。

   ![](./img/e37b22d1cd87.jpg)
4. 下滑页面至“活动奖品配置”区域配置活动奖品（若“活动形式”选择“无奖品H5”无需配置，不展示该内容）。

   ![](./img/e0a5e97842d9.png)
5. 配置活动落地页及其它信息。

   ![](./img/13aea0045a01.png)
6. 审核与上架。

   点击页面右上角“提交审核”提交审核后，华为工作人员审核活动申请预计需要1~3个工作日，请耐心等待。审核结果可在状态栏查看。

   ![](./img/2f35169f93bd.png)

   ![](./img/2872fd3216e2.png)

   若想修改审核中的活动，请先撤销运营活动的申请，重新编辑活动后再提交审核。