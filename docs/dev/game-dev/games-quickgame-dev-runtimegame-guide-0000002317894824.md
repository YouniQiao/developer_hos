---
title: "接入流程"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/games-quickgame-dev-runtimegame-guide-0000002317894824
format: md
---


## 准备开发环境

开发快游戏前需要完成一些准备工作，详情请参见[开发环境准备](https://developer.huawei.com/consumer/cn/doc/games-guides/games-quickgame-environment-preparation-0000002351893453)。

## 开发快游戏

在如下游戏引擎中根据实际业务开发快游戏。

| 游戏引擎 | 开发快游戏 |
| --- | --- |
| Cocos Creator | 开发快游戏请参考[Cocos Creator开发指南](https://docs.cocos.com/creator/2.4/manual/zh/getting-started/coding-setup.html)。 |
| LayaAir | * 若LayaAir引擎版本**低于2.8.0版本**，开发快游戏请参考[在低于2.8.0版本的LayaAir引擎开发快游戏](https://developer.huawei.com/consumer/cn/doc/games-guides/games-quickgame-other-engine-0000002317905700#section14279126767)。 * 若LayaAir引擎在**2.8.0及以上版本**，开发快游戏请参考[LayaAir开发指南](https://ldc2.layabox.com/doc/?language=zh&nav=zh-ts-1-2-0)。 |
| Egret | * 若EgretLauncher版本大于等于1.2.1且引擎版本大于等于5.3.9，开发快游戏请参考官网的开发指南。 * 其它版本开发快游戏请参考[其它版本的Egret引擎开发快游戏](https://developer.huawei.com/consumer/cn/doc/games-guides/games-quickgame-other-engine-0000002317905700#section27225211241)。 |

## 补充必要能力

### 补充健康游戏忠告页面

游戏在正式开始前，必须向玩家展示**健康游戏忠告**页面，可以在合适的地方插入自行设计的健康游戏忠告页面。

### 添加账号注销服务

在游戏的业务代码中补充**游戏账号注销**的代码，允许用户删除华为账号和游戏数据之间的绑定关系，同时允许在游戏内重新创建角色。具体实现思路如下：

1. 在游戏内提供类似**注销账号**的按钮。
2. 用户点击按钮需弹出类似“**注销账号会删除您当前华为账号下的游戏数据，请慎重操作**”的提示文字。
3. 用户第二次点击确认后，快游戏需**删除与用户当前华为账号绑定的游戏数据**，并自动退回至游戏开始页。
4. 若用户重新用当前华为账号登录您的快游戏，请允许用户**重新选区创角**，并绑定新的游戏数据。

## 接入快游戏服务

接入华为提供的快游戏基础能力和开放服务，例如：

* 快游戏必须接入华为账号登录服务，获取玩家相关信息，接入详情请参见[游戏登录](https://developer.huawei.com/consumer/cn/doc/games-guides/games-quickgame-runtime-account-kit-0000002351893461)。
* 应用内支付服务支持玩家在快游戏中购买各类虚拟商品，接入详情请参见[支付](https://developer.huawei.com/consumer/cn/doc/games-guides/games-quickgame-runtime-iap-consumable-0000002317894836)。
* 广告服务可以帮助快游戏解决流量变现的难题，接入详情请参见[广告](https://developer.huawei.com/consumer/cn/doc/games-guides/games-quickgame-runtime-ad-kit-0000002351933661)。

## 调试快游戏

通过打断点的方式，在快游戏开发者工具分析、定位、修复游戏程序的错误、缺陷或异常行为，调试快游戏的步骤和方法请参见[调试](https://developer.huawei.com/consumer/cn/doc/games-guides/games-quickgame-tool-debug-0000002351933789)。

## 测试快游戏

在手机端运行，并根据接入的华为服务逐一测试快游戏，确保快游戏没有错误和缺陷，详情请参见[测试快游戏](https://developer.huawei.com/consumer/cn/doc/games-guides/games-quickgame-runtime-test-0000002317894896)。

## 打包快游戏

在游戏引擎中打包快游戏，详情请参见[打包快游戏](https://developer.huawei.com/consumer/cn/doc/games-guides/games-quickgame-runtime-packing-0000002351893525)。
