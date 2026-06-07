---
title: "意图调用"
original_url: /docs/distribute/agc/agc-help-insight-config-beacon-0000002270752670/agc-help-call-intents-beacon-0000002443485897
format: md
---


您需要实现InsightIntentExecutor，并在对应回调中实现打开落地页（即点击小艺建议卡片跳转的界面）的能力。

下文以“旅游”垂域下的“查看旅游攻略”意图场景为例，意图调用字段定义请参考[查看意图Schema](/docs/distribute/agc/agc-help-insight-config-beacon-0000002270752670/agc-help-confirm-intent-name-beacon-0000002443645837#section1557310291856)附件中的旅游垂类Schema。

操作步骤如下：

1. 继承InsightIntentExecutor。
2. 重写对应方法，例如目标为拉起前台页面，则可重写onExecuteInUIAbilityForegroundMode方法。
3. 通过意图名称，识别查看旅游攻略(ViewTravelGuides)意图，在对应的方法中传递意图参数（param），并拉起对应落地页。

   示例如下：

   ```
   import { insightIntent, InsightIntentExecutor } from '@kit.AbilityKit';
   import { window } from '@kit.ArkUI';
   import { BusinessError } from '@kit.BasicServicesKit';

   /**
    * 意图调用样例 */
   export default class InsightIntentExecutorImpl extends InsightIntentExecutor {
     private static readonly VIEW_TRAVEL_GUIDES = 'ViewTravelGuides';
     /**
      * override 执行前台UIAbility意图
      *
      * @param name 意图名称
      * @param param 意图参数
      * @param pageLoader 窗口
      * @returns 意图调用结果
      */
     onExecuteInUIAbilityForegroundMode(name: string, param: `Record<string>`, pageLoader: window.WindowStage):
       Promise<insightIntent.ExecuteResult> {
       // 根据意图名称分发处理逻辑
       switch (name) {
         case InsightIntentExecutorImpl.VIEW_TRAVEL_GUIDES:
           return this.viewTravelGuides(param, pageLoader);
         default:
           break;
       }
       return Promise.resolve({
         code: -1,
         result: {
           message: 'unknown intent'
         }
       } as insightIntent.ExecuteResult)
     }
     /**
      * 实现调用查看旅游攻略功能
      *
      * @param param 意图参数
      * @param pageLoader 窗口
      */
     private viewTravelGuides(param: `Record<string>`, pageLoader: window.WindowStage): Promise<insightIntent.ExecuteResult> {
       return new Promise((resolve, reject) => {
         // TODO 实现意图调用，loadContent的入参为旅游攻略落地页路径，例如：pages/TravelGuidePage
         pageLoader.loadContent('pages/TravelGuidePage')
           .then(() => {
             // TODO 获取创建近场服务时配置的跳转参数，例如：b_path = recordActivity
             let b_path: string = String(param.b_path);
             // TODO 调用成功的情况，此处可以打印日志
             resolve({
               code: 0,
               result: {
                 message: 'Intent execute succeed'
               }
             });
           })
           .catch((err: BusinessError) => {
             // TODO 调用失败的情况
             resolve({
               code: -1,
               result: {
                 message: 'Intent execute failed'
               }
             })
           });
       })
     }
   }
   ```
4. 意图开发完成后，[发布HarmonyOS应用](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-app-0000002271695230)/[发布元服务](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-atomic-0000002327731065)。若您已发布过版本，可参考[升级版本](/docs/distribute/agc/agc-help-maintain-0000002270829401/agc-help-maintain-upgrade-0000002236494386)对您的HarmonyOS应用/元服务进行升级。
