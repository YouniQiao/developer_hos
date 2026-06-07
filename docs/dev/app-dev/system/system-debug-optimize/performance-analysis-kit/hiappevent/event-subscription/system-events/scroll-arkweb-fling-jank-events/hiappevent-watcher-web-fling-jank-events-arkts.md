---
title: "订阅ArkWeb抛滑丢帧事件（ArkTS）"
original_url: /docs/dev/app-dev/system/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/scroll-arkweb-fling-jank-events/hiappevent-watcher-web-fling-jank-events-arkts
format: md
---


## 简介

本文介绍如何使用HiAppEvent提供的ArkTS接口订阅ArkWeb抛滑丢帧事件。接口的详细使用说明（参数限制、取值范围等）请参考[@ohos.hiviewdfx.hiAppEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-hiviewdfx-hiappevent)。

## 接口说明

| 接口名 | 描述 |
| --- | --- |
| addWatcher(watcher: Watcher): AppEventPackageHolder | 添加应用事件观察者，以添加对应用事件的订阅。 |
| removeWatcher(watcher: Watcher): void | 移除应用事件观察者，以移除对应用事件的订阅。 |

## 开发步骤

以订阅ArkWeb抛滑丢帧事件为例，说明开发步骤。

1. 在DevEco Studio中新建工程，选择“Empty Ability”，编辑工程中的“entry > src > main > ets > entryability > EntryAbility.ets”文件，导入依赖模块：

   ```
   // 该变量在/pages/ArkWebPage.ets文件中进行定义，用于实现webId到网页url的映射
   import { webIdToUrlMap } from '../pages/ArkWebPage';
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/PerformanceAnalysisKit/HiAppEvent/EventSub/entry/src/main/ets/entryability/EntryAbility.ets#L33-L36" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：EntryAbility.ets</a></div>

2. 编辑工程中的“entry > src > main > ets > entryability > EntryAbility.ets”文件，在onCreate函数中添加系统事件的订阅，示例代码如下：

   ```
   // 添加ArkWeb抛滑丢帧事件观察者
   hiAppEvent.addWatcher({
     // 开发者可以自定义观察者名称，系统会使用名称来标识不同的观察者
     name: 'webJankWatcher',
     // 开发者可以订阅感兴趣的系统事件，此处是订阅了ArkWeb抛滑丢帧事件
     appEventFilters: [
       {
         domain: hiAppEvent.domain.OS,
         names: [hiAppEvent.event.SCROLL_ARKWEB_FLING_JANK]
       }
     ],
     // 开发者可以自行实现订阅实时回调函数，以便对订阅获取到的事件数据进行自定义处理
     onReceive: (domain: string, appEventGroups: Array<hiAppEvent. AppEventGroup>) => {
       hilog.info(0x0000, 'testTag', `HiAppEvent onReceive: domain=${domain}`);
       for (const eventGroup of appEventGroups) {
         // 开发者可以根据事件集合中的事件名称区分不同的系统事件
         hilog.info(0x0000, 'testTag', `HiAppEvent eventName=${eventGroup.name}`);
         for (const eventInfo of eventGroup.appEventInfos) {
           // 开发者可以对事件集合中的事件数据进行自定义处理，此处是将事件数据打印在日志中
           hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.domain=${eventInfo.domain}`);
           hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.name=${eventInfo.name}`);
           // 开发者可以获取到开始抛滑事件的时间戳
           hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.start_time=${eventInfo.params['start_time']}`);
           // 开发者可以获取到抛滑动效持续的时间长度
           hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.duration=${eventInfo.params['duration']}`);
           // 开发者可以获取到发生卡顿的的web页面对应的Id
           hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.web_id=${eventInfo.params['web_id']}`);
           // 开发者可以获取抛滑阶段发生丢帧的最大时长
           hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.params.max_app_frame_time=${eventInfo.params['max_app_frame_time']}`);
           const webId: number = eventInfo.params['web_id'];
           //webIdToUrlMap是一个定义的变量，用于实现webId到url的映射，通过系统侧获取的web_id查询到发生丢帧的网页
           const currentUrl = webIdToUrlMap.get(webId);
           // 开发者可以获取到发生卡顿的页面
           hilog.info(0x0000, 'testTag', `HiAppEvent get currentUrl=${currentUrl}`);
         }
       }
     }
   });
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/PerformanceAnalysisKit/HiAppEvent/EventSub/entry/src/main/ets/entryability/EntryAbility.ets#L402-L442" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：EntryAbility.ets</a></div>

3. 在工程中的“entry > src > main > ets > pages”目录下，新增ArkWebPage.ets文件，在build下加载web网页，并定期下发耗时任务阻塞应用主线程触发丢帧，示例代码如下：

   ```
   import web_webview from '@ohos.web.webview';

   // 用于存储web_id到url的映射
   export const webIdToUrlMap = new Map<number, string>();

   @Entry
   @Component
   struct ArkWebPage {
     controller = new web_webview.WebviewController();

     build() {
       Column() {
         Web({ src: 'https://baidu.com',
           controller: this.controller
         })
           .height('100%')
           .onPageBegin((event) => {
             // 每次跳转到新页面都更新webId到url的映射关系，便于后续通过系统侧提供的web_id查询到发生丢帧的网页
             if (event) {
               const newUrl = event.url;
               const webId = this.controller.getWebId();
               webIdToUrlMap.set(webId, newUrl);
             }
           })
           .onPageEnd(() => {
             // 每2s阻塞应用主线程200ms
             setInterval(() => {
               const endTime = Date.now() + 200;
               while (Date.now() < endTime) {}
             }, 2000);
           })
       }
     }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/PerformanceAnalysisKit/HiAppEvent/EventSub/entry/src/main/ets/pages/ArkWebPage.ets#L16-L51" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：ArkWebPage.ets</a></div>


   ![](./img/1bd87678.png)

   如果一个页面需包含多个Web网页，需创建多个webview组件，每个webview组件加载一个网页。
4. 编辑工程中的“entry > src > main > ets > pages > Index.ets”文件，添加按钮并在其onClick函数中跳转到Web页面。示例代码如下：

   ```
   // 按钮跳转到易出现滑动丢帧的web场景，触发ArkWeb抛滑丢帧事件。
   Button('ArkWebFlingJank ArkTs')
     .type(ButtonType.Capsule)
     .margin({
       top: 20
     })
     .backgroundColor('#0D9FFB')
     .width('80%')
     .height('5%')
     .onClick(() => {
       router.pushUrl({url: 'pages/ArkWebPage'});
     })
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/PerformanceAnalysisKit/HiAppEvent/EventSub/entry/src/main/ets/pages/Index.ets#L257-L270" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>

5. 编辑工程中的“entry > src > main > resources > base > profile > main\_pages.json”文件，配置ArkWebPage路由页面。

   ```
   {
     "src": [
       "pages/Index",
       "pages/ArkWebPage"
     ]
   }
   ```
6. 编辑工程中的“entry > src > main > module.json5”文件，添加网络访问权限。

   ```
   "requestPermissions": [
     {
       "name": "ohos.permission.INTERNET"
     }
   ],
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/PerformanceAnalysisKit/HiAppEvent/EventSub/entry/src/main/module.json5#L26-L32" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：module.json5</a></div>


   ![](./img/a9dba93d.png)

   Web组件详细的使用方式请参考[ArkWeb简介](/docs/dev/app-dev/application-framework/arkweb/web-component-overview)文档
7. 点击DevEco Studio界面中的运行按钮，运行应用工程。然后在应用界面中点击按钮“ArkWebFlingJank ArkTs”，跳转到网页，等待页面加载完成，滑动页面，当系统检测到故障时触发ArkWeb抛滑丢帧事件。
8. 每次抛滑过程中发生卡顿50ms及以上场景，可以在Log窗口看到对系统事件数据的处理日志：

   ```
   HiAppEvent eventInfo.domain=OS
   HiAppEvent eventInfo.name=SCROLL_ARKWEB_FLING_JANK
   HiAppEvent eventInfo.params.start_time=1765892111768
   HiAppEvent eventInfo.params.duration=1554
   HiAppEvent eventInfo.params.web_id=1
   HiAppEvent eventInfo.params.max_app_frame_time=195
   HiAppEvent get currentUrl=https://www.baidu.com
   ```
