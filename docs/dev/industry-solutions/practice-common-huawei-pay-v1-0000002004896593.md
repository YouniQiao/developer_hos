---
title: "华为支付收银台"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/practice-common-huawei-pay-v1-0000002004896593
---

华为支付提供了方便、安全和快捷的支付方式，集成高效。商户应用/元服务接入华为支付后，用户可在商户的应用/元服务内通过支付完成**实体商品或服务**（例如酒店服务、出行服务、充值缴费服务等）的购买并展示支付结果。

## 华为支付能力概览

**灵活商户模型**

支持各类商户接入华为支付服务，全面支撑电商、虚拟娱乐、零售、餐饮、交通等各类场景。

支持按规则分账，支持灵活设置接收方和分账比例。

华为支付当前提供三种接入商户模型：**商户**(即直连商户)、**平台类商户**、**服务商**。开发者可根据实际业务模式选择适用的合作身份。

![](./img/a2b8e2d4.png)

**多样化的支付能力**

* **单次支付：**用户选购商品后，商户通过接入单次支付来完成用户订单的创建与支付。

  支持：直连商户、平台类商户、服务商。
* **合单支付：**通过合单支付，商户可将不同商户的一个或多个订单合并到同一个订单完成支付。

  支持：平台类商户。
* **支付并签约：**用户支付完成后可与商户签订协议，完成相关业务自动扣款。

  支持：直连商户、服务商。
* **签约代扣：**商户可主动发起与用户签订相关协议，完成相关业务自动扣款（如水电费预缴，自动充值代扣等），简化相关业务操作流程。

  支持：直连商户、服务商。

## 华为支付收银台接入

华为支付收银台提供基于商户价格的支付功能。用户在商户的商品结算界面，点击拉起华为支付收银台，通过验证用户密码或者其他安全授权规则，完成对商品的支付。

![](./img/e4d57e6c.png "点击放大")

**收银台对接方案**

![](./img/1902810d.png "点击放大")

1. 商户客户端请求商户服务器创建商品订单。
2. 商户服务器按照商户模型调用华为支付提供的[直连商户预下单](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/payment-prepay)或[平台类商户/服务商预下单](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/payment-agent-prepay)接口获取预下单号（prepayId），然后组建[orderStr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/payment-model#section159202591414)返回给客户端。
3. 商户客户端调用[requestPayment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/payment-paymentservice#zh-cn_topic_0000001245084266_section192192415554)接口调起华为支付客户端收银台。
4. 用户在华为支付客户端收银台完成支付操作后，华为支付客户端会收到支付结果信息。
5. 华为支付客户端展示支付结果页，用户关闭支付结果页后华为支付客户端会返回支付状态给商户客户端。
6. 支付完成后，华为支付服务器会调用回调接口返回支付结果信息给商户服务器。
7. 商户服务器收到支付结果回调响应后，使用[SM2验签方式](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/payment-rest-overview#section17670192215175)对支付结果进行验签。

拉起收银台代码实现参考：

```
import { BusinessError } from '@kit.BasicServicesKit';
import { paymentService } from '@kit.PaymentKit';
import { common } from '@kit.AbilityKit';

@Entry
@Component
struct Index {
  context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;
  requestPaymentPromise() {
    // use your own orderStr
    const orderStr = '{"app_id":"***","merc_no":"***","prepay_id":"xxx","timestamp":"1680259863114","noncestr":"1487b8a60ed9f9ecc0ba759fbec23f4f","sign":"****","auth_id":"***"}';
    paymentService.requestPayment(this.context, orderStr)
      .then(() => {
        // pay success
        console.info('succeeded in paying');
      })
      .catch((error: BusinessError) => {
        // failed to pay
        console.error(`failed to pay, error.code: ${error.code}, error.message: ${error.message}`);
      });
  }
  build() {
    Column() {
      Button('requestPaymentPromise')
        .type(ButtonType.Capsule)
        .width('50%')
        .margin(20)
        .onClick(() => {
          this.requestPaymentPromise();
        })
    }
    .width('100%')
    .height('100%')
  }
}
```

如何接入华为支付，更多内容请参见[Payment Kit开发指南](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-introduction)。
