---
title: "CashierComponent (iap嵌入式收银台组件)"
upstream_id: "harmonyos-references/iap-cashier-component"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:53:28.281888"
---

# CashierComponent (iap嵌入式收银台组件)

本模块提供CashierComponent组件，应用通过集成该组件完成iap嵌入式收银台功能。

CashierComponent需要配合[cashierComponentManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/iap-cashier-component-manager)一起使用，用于实现iap嵌入式收银台功能。

起始版本： 6.1.0(23)

#### 导入模块

```
import { CashierComponent, cashierComponentManager } from '@kit.IAPKit';
```

#### CashierComponent

该类用来展示嵌入式收银台的UI组件。

模型约束： 此接口仅可在Stage模型下使用。

装饰器类型： @Component

元服务API： 从版本6.1.0(23)开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Payment.IAP.EmbeddedCashier

起始版本： 6.1.0(23)

参数：

| 名称 | 类型 | 必填 | 装饰器类型 | 说明 |
| --- | --- | --- | --- | --- |
| params | [iap.PurchaseParameter](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/iap-iap#purchaseparameter) | 是 | @Require @Prop | CashierComponent组件参数。 **说明：** 该参数必须是@State装饰的局部变量。 |
| displayOptions | [cashierComponentManager.CashierDisplayOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/iap-cashier-component-manager#cashierdisplayoptions) | 否 | - | CashierComponent组件的配置参数。 |
| purchaseListener | [cashierComponentManager.CashierListener](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/iap-cashier-component-manager#cashierlistener) | 是 | - | CashierComponent用来接收组件的成功失败的回调事件。 |

#### [h2]build

build(): void

用于创建[CashierComponent](#cashiercomponent)对象的构造函数。

模型约束： 此接口仅可在Stage模型下使用。

元服务API： 从版本6.1.0(23)开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Payment.IAP.EmbeddedCashier

起始版本： 6.1.0(23)

示例：

```
import { CashierComponent, cashierComponentManager,iap } from '@kit.IAPKit';
import { BusinessError} from '@kit.BasicServicesKit';

const displayOptions: cashierComponentManager.CashierDisplayOptions = {
  backgroundColor: Color.Grey
}
class PurchaseListener implements cashierComponentManager.CashierListener {
  onPurchaseSuccess: (productId: string, purchaseResult: iap.CreatePurchaseResult) => void;
  onPurchaseFailure: (productId: string, error: BusinessError<void>) => void;

  constructor() {
    this.onPurchaseSuccess = () => {

    };
    this.onPurchaseFailure = () => {

    }
  }
}
const purchaseListener = new PurchaseListener();

@Entry
@Component
struct CashierComponentPage {
  @State params: iap.PurchaseParameter = {
    // productId需要替换成开发者在AppGallery Connect网站配置商品信息时设置的“商品ID”
    productId: 'testProduct01',
    // iap.ProductType.CONSUMABLE：消耗型商品
    // iap.ProductType.NONCONSUMABLE：非消耗型商品
    // iap.ProductType.AUTORENEWABLE：自动续期订阅商品
    // iap.ProductType.NONRENEWABLE：非续期订阅商品
    productType: iap.ProductType.CONSUMABLE,
    developerPayload: 'test developer payload string.'
  };

  build() {
    Column() {
      CashierComponent({
        params: this.params,
        purchaseListener: purchaseListener,
        displayOptions: displayOptions
      });
    }
    .width(360)
    .height(640)
  }
}
```
