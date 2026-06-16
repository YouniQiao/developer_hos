---
title: "开通Device Security服务"
original_url: https://developer.huawei.com/consumer/cn/doc/atomic-guides/atomic-devicesecurity-deviceverify-activateservice
---

在开通Device Security服务前，请先参考“[应用开发准备](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-dev-overview)”完成基本准备工作，再继续进行以下开发活动。

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)网站，选择开发与服务。

   ![](./img/539427be.png)
2. 在项目列表中找到需要开通Device Security服务的项目。

   ![](./img/507b4dab.png)
3. 选择“开放能力管理”Tab页，找到需要使用的功能，点击左侧的按钮，开通相应的功能。

   * **应用设备状态检测**：勾选“应用设备状态检测”并点击“保存”，接入“应用设备状态检测”。

     ![](./img/4d22d5fb.png)
   * **安全检测**：勾选“安全检测服务”并点击“保存”，接入“安全检测服务”。

     ![](./img/432e5fce.png)
   * **可信应用服务**：勾选“可信应用服务”并点击“保存”，接入“可信应用服务”。

     ![](./img/dc3d5f7e.png)

     开通“可信应用服务”需要先申请进入允许清单，请将Developer ID、公司名称、应用名称、申请使用的服务和使用该服务的场景，发送到agconnect@huawei.com。AGC运营将审核相关材料，通过后将为您配置受限开放服务使用的名单，审核周期为1-3个工作日，请耐心等待。

     ![](./img/60f6ef42.png)
   * **数字盾服务**：申请本服务前，需于[华为开发者联盟](https://developer.huawei.com/consumer/cn/)完成[企业开发者实名认证](https://developer.huawei.com/consumer/cn/doc/start/edrna-0000001062678489)。认证通过后，您将在“开放能力管理”界面中查找到相应服务入口。

     ① 点击“数字盾服务”右侧申请按钮，接入“数字盾服务”。

     ![](./img/e1c9b29d.png)

     ![](./img/409170d0.png)

     请您在申请框填写“数字盾服务”申请原因和应用场景。AGC运营将审核相关材料，通过后则可保存对应的服务配置，审核周期为1-3个工作日，请耐心等待。

     ② 审核通过后勾选对应服务并点击“保存”该服务配置。
4. 申请Profile（.p7b）文件，具体操作请参见[申请调试Profile](https://developer.huawei.com/consumer/cn/doc/app/agc-help-add-debugprofile-0000001914423102)。

   ![](./img/f3c1f086.png)

   在开通服务后，需要重新申请Profile（.p7b）文件。
