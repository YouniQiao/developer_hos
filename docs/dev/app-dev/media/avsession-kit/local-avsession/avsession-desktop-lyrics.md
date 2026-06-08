---
title: "应用接入歌词组件"
original_url: /docs/dev/app-dev/media/avsession-kit/local-avsession/avsession-desktop-lyrics
format: md
upstream_id: dev/app-dev/media/avsession-kit/local-avsession/avsession-desktop-lyrics
last_sync: 2026-06-07
sync_hash: 316164d9
upstream_hash: 456182a556f0
---

从API version 23开始，系统提供歌词组件功能。歌词组件以悬浮窗形式显示于系统桌面，支持歌词内容展示、组件隐藏、组件锁定等操作。暂不支持应用对组件进行自定义样式设置。本文将说明应用接入歌词组件的开发步骤。

## 具体步骤

1. 调用[isDesktopLyricSupported](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-f#avsessionisdesktoplyricsupported23)接口判断系统/设备是否支持歌词组件能力，返回true时表示支持歌词组件能力。
2. 创建[AVSession实例](/docs/dev/app-dev/media/avsession-kit/local-avsession/avsession-access-scene#创建不同类型的会话)，通过[设置元数据](/docs/dev/app-dev/media/avsession-kit/local-avsession/avsession-access-scene#设置元数据)填入LRC格式的歌词数据，包含时间标签及对应的歌词文本。不符合LRC格式的歌词数据，系统可能存在解析异常导致无法展示歌词内容。
3. 调用[enableDesktopLyric](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-avsession#enabledesktoplyric23)接口进行使能，需传入参数true打开歌词组件。
4. 歌词组件使能打开后默认是隐藏（不显示），应用可以通过接口主动显示/隐藏歌词组件，具体接口如下：

   **设置可见性：** 调用[setDesktopLyricVisible](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-avsession#setdesktoplyricvisible23)接口，设置歌词组件是否显示。

   **查询可见性：** 调用[isDesktopLyricVisible](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-avsession#isdesktoplyricvisible23)接口，查询当前歌词组件是否显示。
5. 歌词组件使能打开后默认是非锁定状态，应用可以通过接口主动锁定/解锁歌词组件，具体接口如下：

   **设置锁定状态：** 调用[setDesktopLyricState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-avsession#setdesktoplyricstate23)接口，设置歌词窗口是否锁定（限制歌词窗口的拖动、设置等操作）。

   **查询锁定状态：** 调用[getDesktopLyricState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-avsession#getdesktoplyricstate23)接口，查询当前歌词组件锁定状态。
6. 应用可以通过系统提供的回调监听歌词组件可见性、锁定状态的变化，具体接口如下：

   **监听歌词组件是否可见：** 监听[onDesktopLyricVisibilityChanged](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-avsession#ondesktoplyricvisibilitychanged23)，回调返回false，表示当前歌词组件不可见；回调返回true，表示当前歌词组件可见。如需取消该监听，使用[offDesktopLyricVisibilityChanged](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-avsession#offdesktoplyricvisibilitychanged23)接口。

   **监听歌词组件是否锁定：** 监听[onDesktopLyricStateChanged](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-avsession#ondesktoplyricstatechanged23)，回调返回false，表示当前歌词组件未锁定；回调返回true，表示当前歌词组件锁定。如需取消该监听，使用[offDesktopLyricStateChanged](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-avsession#offdesktoplyricstatechanged23)接口。

   ![](./img/36672fb0.png)

   确保AVSession对象在后台播放期间不被系统回收/应用不主动释放，否则会导致歌词组件异常。

   ```
   import { avSession as AVSessionManager } from '@kit.AVSessionKit';
   import { BusinessError } from '@kit.BasicServicesKit';
   // ...

   @Entry
   @Component
   struct Index {
     @State message: string = 'hello world';
     // ...

     build() {
       Column() {
         // ...
         Text(this.message)
           .onClick(async () => {
             console.info(`DesktopLyric set start`);
             let context = this.getUIContext().getHostContext() as Context;
             // 假设已经创建了一个session，如何创建session可以参考之前的案例。
             let session = await AVSessionManager.createAVSession(context, 'SESSION_NAME', 'audio');

             // 系统是否支持歌词组件
             let isDesktopLyricSupported: boolean = false;
             try {
               isDesktopLyricSupported = await AVSessionManager.isDesktopLyricSupported();
             } catch (err) {
               console.error(`Failed to get isDesktopLyricSupported. Code: ${err.code}, message: ${err.message}`);
             }
             if (!isDesktopLyricSupported) {
               return;
             }

             try {
               // 使能歌词组件
               await session.enableDesktopLyric(true);
             } catch (err) {
               console.error(`enableDesktopLyric err. Code: ${err.code}, message: ${err.message}`);
             }

             try {
               // 监听歌词组件是否显示
               session.onDesktopLyricVisibilityChanged((isVisible: boolean) => {
                 console.info(`onDesktopLyricVisibilityChanged changed: ${isVisible}`)
               });
             } catch (err) {
               console.error(`onDesktopLyricVisibilityChanged err. Code: ${err.code}, message: ${err.message}`);
             }

             try {
               // 监听歌词组件锁定状态
               session.onDesktopLyricStateChanged((state) => {
                 console.info(`onDesktopLyricStateChanged changed: ${state.isLocked}`)
               });
             } catch (err) {
               console.error(`onDesktopLyricStateChanged err. Code: ${err.code}, message: ${err.message}`);
             }

             try {
               // 显示或隐藏歌词组件，歌词组件使能后默认隐藏
               await session.setDesktopLyricVisible(true);
             } catch (err) {
               console.error(`setDesktopLyricVisible err. Code: ${err.code}, message: ${err.message}`);
             }

             try {
               // 锁定或解锁歌词组件，歌词组件使能后默认是解锁状态
               await session.setDesktopLyricState({isLocked: true});
             } catch (err) {
               console.error(`setDesktopLyricState err. Code: ${err.code}, message: ${err.message}`);
             }

             console.info(`DesktopLyric set done`);
           })
       }
       .width('100%')
       .height('100%')
     }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/AVSession/LocalAVSession/AVSessionProvider/entry/src/main/ets/pages/DesktopLyric.ets#L16-L121" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：DesktopLyric.ets</a></div>
