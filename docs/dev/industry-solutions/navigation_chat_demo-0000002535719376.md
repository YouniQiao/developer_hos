---
title: "一次开发，多端适配，页面导航设计"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/navigation_chat_demo-0000002535719376
---

## 场景介绍

聊天通讯是社交通讯类应用的高频使用场景之一，如在平板上分栏显示，左侧为聊天列表页面，右侧为聊天室，聊天列表点开后，切换tab，回到聊天列表tab，保留离开前的页面。

本示例基于[通过断点刷新UI](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-responsive-layout#section175001836203617)实现页面导航的响应式布局。

## 效果预览

![](./img/71571881.png "点击放大")

## 实现思路

1. 设计横向断点工具类WidthBreakpointType。

   ```
   interface BreakpointTypeOption<T> {
     xs?: T;
     sm?: T;
     md?: T;
     lg?: T;
     xl?: T;
   }

   export class WidthBreakpointType<T> {
     options: BreakpointTypeOption<T>;

     constructor(options: BreakpointTypeOption<T>) {
       this.options = options;
     }

     getValue(widthBp: WidthBreakpoint) {
       if (widthBp === WidthBreakpoint.WIDTH_XS) {
         return this.options.xs;
       } else if (widthBp === WidthBreakpoint.WIDTH_SM) {
         return this.options.sm;
       } else if (widthBp === WidthBreakpoint.WIDTH_MD) {
         return this.options.md;
       } else if (widthBp === WidthBreakpoint.WIDTH_LG) {
         return this.options.lg;
       } else if (widthBp === WidthBreakpoint.WIDTH_XL) {
         return this.options.xl;
       } else {
         return undefined;
       }
     }
   }
   ```
2. 使用@Observed对自定义窗口信息类WindowInfo实现对象级响应式更新。

   ```
   @Observed
   export class WindowInfo {
     // 窗口模式
     public windowStatusType: window.WindowStatusType = window.WindowStatusType.UNDEFINED;
     // 沉浸式类型
     public isImmersive: ImmersiveType = ImmersiveType.NORMAL;
     // 窗口尺寸
     public windowSize: window.Size = { width: 0, height: 0 };
     // 宽/高断点
     public widthBp: WidthBreakpoint = WidthBreakpoint.WIDTH_LG;
     public heightBp: HeightBreakpoint = HeightBreakpoint.HEIGHT_LG;
     // 避让区信息
     public avoidSystem?: window.AvoidArea;
     public avoidNavigationIndicator?: window.AvoidArea;
     public avoidCutout?: window.AvoidArea;
     public avoidSystemGesture?: window.AvoidArea;
     public avoidKeyboard?: window.AvoidArea;
   }
   ```
3. 在WindowUtil类中创建窗口信息对象，并对窗口尺寸变化进行监听。

   ```
   export class WindowUtil {
     public mainWindow: window.Window;
     public mainWindowInfo: WindowInfo = new WindowInfo();
     // 获取窗口变化
     public onWindowSizeChange: (windowSize: window.Size) => void = (windowSize: window.Size) => {
       this.mainWindowInfo.windowSize = windowSize;
       this.mainWindowInfo.widthBp = this.uiContext!.getWindowWidthBreakpoint();
       this.mainWindowInfo.heightBp = this.uiContext!.getWindowHeightBreakpoint();
     };

     // 更新窗口信息
     updateWindowInfo() {
       try {
         // ...
         // 首次获取窗口大小
         let width: number = this.mainWindow.getWindowProperties().windowRect.width;
         let height: number = this.mainWindow.getWindowProperties().windowRect.height;
         let windowSize: window.Size = {
           width: width,
           height: height
         };
         this.mainWindowInfo.windowSize = windowSize;
         // 首次获取宽/高断点
         this.mainWindowInfo.widthBp = this.uiContext!.getWindowWidthBreakpoint();
         this.mainWindowInfo.heightBp = this.uiContext!.getWindowHeightBreakpoint();
         // 注册窗口尺寸改变监听，更新窗口尺寸和宽/高断点
         this.mainWindow.on('windowSizeChange', this.onWindowSizeChange);
         // ...
       } catch (error) {
       // ...
       }
     }
   }
   ```
4. 在EntryAbility中对WindowUtil进行初始化、断点监听注册、断点更新等操作。

   ```
   export default class EntryAbility extends UIAbility {
     windowUtil?: WindowUtil;
     // ...
     onWindowStageCreate(windowStage: window.WindowStage): void {
       try {
         this.windowUtil = new WindowUtil(windowStage.getMainWindowSync());
       } catch (error) {
       // ...
       }
       AppStorage.setOrCreate('windowUtil', this.windowUtil);
       windowStage.loadContent('pages/TabsPage', (err) => {
         try {
           AppStorage.setOrCreate('uiContext', windowStage.getMainWindowSync().getUIContext());
         } catch (error) {
         // ...
         }
         // ...
         this.windowUtil!.updateWindowInfo();
       });
     }
     // ...
   };
   ```
5. 使用@StorageLink获取窗口管理类WindowUtil对象。

   ```
   @Component
   export struct MessageDetailPage {
     @StorageLink('windowUtil') windowUtil: WindowUtil | undefined = undefined;
     // ...
     build() {
       NavDestination() {
         MessageDetailComp({
           item: this.item,
           mainWindowInfo: this.windowUtil?.mainWindowInfo,
           navPathStack: this.navPathStack
         });
       };
       // ...
     }
   }
   ```
6. 使用@ObjectLink接收窗口信息类对象，对不同断点区间进行针对性布局。

   ```
   @Component
   export struct MessageDetailComp {
     @ObjectLink @Watch('widthBpChange') mainWindowInfo: WindowInfo;

     widthBpChange(): void {
       if (this.mainWindowInfo.widthBp === WidthBreakpoint.WIDTH_SM) {
         AppStorage.setOrCreate('isShowControlButton', false);
       } else {
         AppStorage.setOrCreate('isShowControlButton', true);
       }
     }

     @Builder
     topTitlebar() {
       Flex({ alignItems: ItemAlign.Center, justifyContent: FlexAlign.SpaceBetween }) {
         Image($r('app.media.chevron_left'))
           .width(new WidthBreakpointType({
             sm: Constants.IMAGE_W_18,
             md: Constants.IMAGE_W_18,
             lg: Constants.IMAGE_W_18
           }).getValue(this.mainWindowInfo.widthBp));
           // ...
       }
       // ...
     }

     // ...
     build() {
     // ...
     }
   }
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。
* 本示例支持在手机、Pad设备。

## 工程目录

```
├──entry/src/main/ets
│  ├──components
│  │  ├─ContactsListComp.ets              // 通讯录列表组件
│  │  ├─ConversationComp.ets              // 对话栏组件
│  |  ├─MailDetailComp.ets                // 邮箱信息组件
│  |  ├─MessageDetailComp.ets             // 聊天室组件
│  |  ├─MessageListComp.ets              // 聊天列表组件
│  │  └─SideBarComp.ets                   // 侧边栏组件
│  ├──constants
│  │  └─Constants.ets                     // 常量定义
│  ├──entryability
│  │  └─EntryAbility.ets
│  ├──entrybackupability
│  │  └─EntryBackupAbility.ets
│  ├──model
│  │  ├─ContactsData.ets                  // 通讯录数据结构
│  │  ├─MessageListData.ets               // 聊天数据结构
│  │  └─TabBarData.ets                    // TabBar数据结构
│  ├──pages
│  │  ├─ContactsPage.ets                  // 通讯录页面
│  │  ├─MailPage.ets                      // 邮箱页面
│  │  ├─MessageDetailPage.ets             // 聊天室页面
│  │  ├─MessageListPage.ets               // 聊天列表页面
│  │  ├─MessagePage.ets                   // 聊天页面
│  │  └─TabsPage.ets                      // Tabs页面
│  └──utils
│     ├─WidthBreakpointType.ets           // 断点工具类
│     └─WindowUtil.ets                    // 窗口工具类
└──entry/src/main/resources               // 资源文件目录
```

## 参考文档

[窗口模式](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-window-mode)

[窗口沉浸式](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-window-immersive)

[界面布局响应式变化](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-responsive)

## 代码下载

[一次开发，多端适配，页面导航设计示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260408135456.67810820274709938561583185876718%3A20260604144448%3A2800%3A272CF413A1D5D3EF0566A6D18A535FC7FBBF6AEBFE0F5FCD57974CCB5482F66B.zip?needInitFileName=true)
