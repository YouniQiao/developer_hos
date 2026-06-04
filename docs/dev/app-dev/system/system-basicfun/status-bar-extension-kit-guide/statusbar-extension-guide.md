---
displayed_sidebar: appDevSidebar
title: "应用接入状态栏"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/statusbar-extension-guide
---

应用接入状态栏之后，状态栏会显示应用自定义的图标，图标提供左键显示自定义弹窗以及右键显示菜单的功能；应用退出时，状态栏图标会随着应用进程的销毁而消失。

* 从 6.1.1(24) 版本开始，右键菜单获得增强，菜单项支持分别设置默认图标与选中图标，并支持独立更新单个一级菜单项或二级菜单项的内容。
* 从 6.0.2(22) 版本开始，支持自定义状态栏图标在鼠标悬停（hover）时显示的内容。

## 接口说明

以下列出应用接入状态栏的相关API，具体API说明详见[接口文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/statusbar-extension-manager)。

![](./img/55846f23.png)

Desktop Extension Kit（桌面拓展服务）相关API仅在2in1设备上生效。

**表1** 应用接入状态栏相关功能接口介绍

| 接口名 | 描述 |
| --- | --- |
| [addToStatusBar](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/statusbar-extension-manager#statusbarmanageraddtostatusbar)(context: common.Context, statusBarItem: StatusBarItem): void | 添加应用图标到状态栏。 |
| [removeFromStatusBar](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/statusbar-extension-manager#statusbarmanagerremovefromstatusbar)(context: common.Context): void | 移除状态栏的应用图标。 |
| [updateQuickOperationHeight](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/statusbar-extension-manager#statusbarmanagerupdatequickoperationheight)(context: common.Context, height: number): void | 更新状态栏图标左键弹窗应用定制区域的高度。 |
| [updateStatusBarMenu](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/statusbar-extension-manager#statusbarmanagerupdatestatusbarmenu)(context: common.Context, statusBarGroupMenus: StatusBarGroupMenu[]): void | 更新接入状态栏图标的右键菜单内容。 |
| [updateStatusBarIcon](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/statusbar-extension-manager#statusbarmanagerupdatestatusbaricon)(context: common.Context, statusBarIcon: StatusBarIcon): void | 更新状态栏图标。 |
| [updateStatusBarHoverTips](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/statusbar-extension-manager#statusbarmanagerupdatestatusbarhovertips)(context: common.Context, hoverTips: string): Promise<void> | 更新状态栏图标hover时显示内容。 |
| [on](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/statusbar-extension-manager#statusbarmanageronstatusbariconclick)(type: 'statusBarIconClick', callback: Callback<emitter.EventData>): void | 监听状态栏图标点击事件。 |
| [off](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/statusbar-extension-manager#statusbarmanageroffstatusbariconclick)(type: 'statusBarIconClick', callback?: Callback<emitter.EventData>): void | 注销状态栏图标点击事件。 |
| [on](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/statusbar-extension-manager#statusbarmanageronrightmenuclick)(type: 'rightMenuClick', callback: Callback<emitter.EventData>): void | 监听状态栏右键菜单点击事件。 |
| [off](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/statusbar-extension-manager#statusbarmanageroffrightmenuclick)(type: 'rightMenuClick', callback?: Callback<emitter.EventData>): void | 注销状态栏右键菜单点击事件。 |
| [updateStatusBarMenuItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/statusbar-extension-manager#statusbarmanagerupdatestatusbarmenuitem)(context: common.Context, item: StatusBarMenuItem): Promise<void> | 更新单个一级菜单项内容。 |
| [updateStatusBarSubMenuItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/statusbar-extension-manager#statusbarmanagerupdatestatusbarsubmenuitem)(context: common.Context, item: StatusBarSubMenuItem): Promise<void> | 更新菜单项的单个二级菜单项内容。 |

## 开发步骤

1. 导入相关模块。

   ```
   import { statusBarManager, StatusBarViewExtensionAbility } from '@kit.DeskTopExtensionKit';
   import { UIExtensionContentSession, Want } from '@kit.AbilityKit';
   import { image } from '@kit.ImageKit';
   import { resourceManager } from '@kit.LocalizationKit';
   import { emitter } from '@kit.BasicServicesKit';
   ```
2. 新建一个MyStatusBarViewAbility.ets文件（例如在entry/src/main/ets/statusbarviewextensionability文件夹下），同时新建一个StatusBarPage的页面（例如在entry/src/main/ets/pages目录下），该页面用于在状态栏图标的左键业务弹窗中显示，然后构建自定义的StatusBarViewExtensionAbility。

   ```
   let TAG = 'MyStatusBarViewExtAbility';
   export default class MyStatusBarViewAbility extends StatusBarViewExtensionAbility {
     onCreate() {
       console.info(TAG, `onCreate`);
     }

     onSessionCreate(want: Want, session: UIExtensionContentSession) {
       console.info(TAG, `onSessionCreate, want: ${want.abilityName}`);
       // pages/StatusBarPage为状态栏图标左键业务弹窗显示的页面
       session.loadContent('pages/StatusBarPage');
     }

     onForeground() {
       console.info(TAG, `onForeground`);
     }

     onBackground() {
       console.info(TAG, `onBackground`);
     }

     onSessionDestroy(session: UIExtensionContentSession) {
       console.info(TAG, `onSessionDestroy`);
     }

     onDestroy() {
       console.info(TAG, `onDestroy`);
     }
   }
   ```
3. 在MyStatusBarViewAbility所在模块下的module.json5文件中配置状态栏扩展Ability的信息。

   ```
   "extensionAbilities": [
     {
       "name": "MyStatusBarViewAbility",
       "icon": "$media:startIcon",
       "description": "statusBar",
       "type": "statusBarView",
       "exported": true,
       // 此处为MyStatusBarViewAbility类所在的文件路径
       "srcEntry": "./ets/statusbarviewextensionability/MyStatusBarViewAbility.ets"
     }
   ]
   ```
4. 在对应模块的rawfile文件夹（例如entry/src/main/resources/rawfile）下预置两张24[vp](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-pixel-units) \* 24vp尺寸的图片（例如本示例中testWhite.png和testBlack.png两张图片），在页面组件内(如：index.ets)配置应用接入状态栏显示的图标信息。

   ```
   let context: Context | undefined = this.getUIContext().getHostContext();
   if (!context) {
     console.error('getHostContext failed');
     return;
   }
   // 获取resourceManager资源管理器
   const resourceMgr: resourceManager.ResourceManager = context.resourceManager;

   // 创建white pixelMap，需在资源rawfile文件夹中预置testWhite.png图片，图片大小为24vp * 24vp
   const whiteFileData = resourceMgr.getRawFileContentSync('testWhite.png');
   const whiteBuffer = whiteFileData.buffer;
   const whiteImageSource = image.createImageSource(whiteBuffer);
   let whitePixelMap = await whiteImageSource.createPixelMap();

   // 创建black pixelMap，需在资源rawfile文件夹中预置testBlack.png图片，图片大小为24vp * 24vp
   const blackFileData = resourceMgr.getRawFileContentSync('testBlack.png');
   const blackBuffer = blackFileData.buffer;
   const blackImageSource = image.createImageSource(blackBuffer);
   let blackPixelMap = await blackImageSource.createPixelMap();

   // 构建图标信息
   let icon: statusBarManager.StatusBarIcon = {
     white: whitePixelMap,
     black: blackPixelMap
   }
   ```
5. 配置状态栏左键点击弹窗相关信息。

   ```
   // 构建左键业务弹窗信息
   let operation: statusBarManager.QuickOperation = {
     // 此处abilityName为上述配置的module.json5中配置的自定义StatusBarViewExtensionAbility名称
     abilityName: "MyStatusBarViewAbility",
     title: "测试Demo",
     height: 300,
     // 可缺省
     moduleName: 'entry'
   };
   ```
6. （可选）配置状态栏右键菜单内容信息，可在状态栏图标的右键菜单中增加自定义菜单选项。无论是否配置右键菜单，系统均会自动生成一个“退出”的菜单选项，该选项不支持应用自定义。若应用具备语言切换功能，该项的语言将遵循系统设置，而非应用内的语言设置。

   ```
   // 构建右键菜单项内容
   let subMenus: Array<statusBarManager.StatusBarSubMenuItem> = [];
   let subMenuItemAction: statusBarManager.StatusBarMenuAction = {
     abilityName: "EntryAbility"
   }
   let subMenu: statusBarManager.StatusBarSubMenuItem = {
     subTitle: "子菜单项",
     menuAction: subMenuItemAction
   }
   subMenus.push(subMenu);

   let statusBarMenuItems: Array<statusBarManager.StatusBarMenuItem> = [];
   let menuItem: statusBarManager.StatusBarMenuItem = {
     title: "一级菜单项",
     // 一级menuAction和subMenu两项不可都缺省
     subMenu: subMenus
   };
   statusBarMenuItems.push(menuItem);

   let statusBarGroupMenus: Array<statusBarManager.StatusBarGroupMenu> = [];
   statusBarGroupMenus.push(statusBarMenuItems);
   ```
7. 整合配置信息，接入状态栏，显示应用图标。

   ```
   // 构建添加到状态栏的图标详细信息
   let item: statusBarManager.StatusBarItem = {
     icons: icon,
     quickOperation: operation,
     // 该参数可选
     statusBarGroupMenu: statusBarGroupMenus
   };

   try {
     statusBarManager.addToStatusBar(context, item);
   } catch (error) {
     console.error(`addToStatusBar failed. error code: ${error.code}, error message: ${error.message}`);
   }
   ```
8. （可选）应用接入状态栏之后，可以通过[updateStatusBarMenu](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/statusbar-extension-manager#statusbarmanagerupdatestatusbarmenu)接口更新状态栏的右键菜单。

   ```
   // 构建右键菜单项内容
   let subMenus: Array<statusBarManager.StatusBarSubMenuItem> = [];
   let subMenuItemAction: statusBarManager.StatusBarMenuAction = {
     abilityName: "EntryAbility"
   }
   let subMenu: statusBarManager.StatusBarSubMenuItem = {
     subTitle: "二级菜单项",
     menuAction: subMenuItemAction
   }
   subMenus.push(subMenu);

   let statusBarMenuItems: Array<statusBarManager.StatusBarMenuItem> = [];
   let menuItem: statusBarManager.StatusBarMenuItem = {
     title: "一级菜单项",
     // 一级menuAction和subMenu两项不可都缺省
     subMenu: subMenus
   };
   statusBarMenuItems.push(menuItem);

   let statusBarGroupMenus: Array<statusBarManager.StatusBarGroupMenu> = [];
   statusBarGroupMenus.push(statusBarMenuItems);

   let context: Context | undefined = this.getUIContext().getHostContext();
   if (!context) {
     console.error('getHostContext failed');
     return;
   }
   try {
     statusBarManager.updateStatusBarMenu(context, statusBarGroupMenus);
   } catch (error) {
     console.error(`updateStatusBarMenu failed. error code: ${error.code}, error message: ${error.message}`);
   }
   ```
9. （可选）应用接入状态栏之后，可以通过[updateQuickOperationHeight](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/statusbar-extension-manager#statusbarmanagerupdatequickoperationheight)接口更新状态栏图标左键业务弹窗的高度。

   ```
   let context: Context | undefined = this.getUIContext().getHostContext();
   if (!context) {
     console.error('getHostContext failed');
     return;
   }
   let height = 200;
   statusBarManager.updateQuickOperationHeight(context, height);
   ```
10. （可选）应用接入状态栏之后，可以通过[updateStatusBarIcon](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/statusbar-extension-manager#statusbarmanagerupdatestatusbaricon)接口将状态栏中对应的应用图标进行更改。

    ```
    let context: Context | undefined = this.getUIContext().getHostContext();
    if (!context) {
      console.error('getHostContext failed');
      return;
    }
    // 获取resourceManager资源管理器
    const resourceMgr: resourceManager.ResourceManager = context.resourceManager;

    // 创建white pixelMap，需在资源rawfile文件夹中预置testWhite.png图片，图片大小为24vp * 24vp
    const whiteFileData = resourceMgr.getRawFileContentSync('testWhite.png');
    const whiteBuffer = whiteFileData.buffer;
    const whiteImageSource = image.createImageSource(whiteBuffer);
    let whitePixelMap = await whiteImageSource.createPixelMap();

    // 创建black pixelMap，需在资源rawfile文件夹中预置testBlack.png图片，图片大小为24vp * 24vp
    const blackFileData = resourceMgr.getRawFileContentSync('testBlack.png');
    const blackBuffer = blackFileData.buffer;
    const blackImageSource = image.createImageSource(blackBuffer);
    let blackPixelMap = await blackImageSource.createPixelMap();

    // 构建图标信息
    let icons: statusBarManager.StatusBarIcon = {
      white: whitePixelMap,
      black: blackPixelMap
    }
    statusBarManager.updateStatusBarIcon(context, icons);
    ```
11. （可选）应用接入状态栏之后，且未指定图标[QuickOperation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/statusbar-extension-manager#quickoperation)的abilityName可以通过[on](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/statusbar-extension-manager#statusbarmanageronstatusbariconclick)/[off](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/statusbar-extension-manager#statusbarmanageroffstatusbariconclick)接口自定义状态栏图标左键业务。

    ```
    private onStatusBarIconClick = (eventData: emitter.EventData) => {
      // 自定义图标点击业务
      let data = eventData.data;
      if (data) {
        switch (data['iconClickType']) {
          case 'leftClick':
            // 自定义左键点击业务
            break;
          default:
            break;
        }
      }
    }

    // 监听状态栏图标点击事件
    statusBarManager.on('statusBarIconClick', this.onStatusBarIconClick);

    // 注销状态栏图标点击事件
    statusBarManager.off('statusBarIconClick', this.onStatusBarIconClick);
    ```
12. （可选）应用接入状态栏之后，调用[updateStatusBarMenu](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/statusbar-extension-manager#statusbarmanagerupdatestatusbarmenu)接口，指定菜单[StatusBarMenuAction](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/statusbar-extension-manager#statusbarmenuaction)的notifyOnly使能和menuCode菜单项标识，可以通过[on](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/statusbar-extension-manager#statusbarmanageronstatusbariconclick)/[off](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/statusbar-extension-manager#statusbarmanageroffstatusbariconclick)接口自定义状态栏图标右键菜单点击业务。

    ```
    private onRightMenuClick = (eventData: emitter.EventData) => {
      // 自定义图标右键菜单点击业务
      let data = eventData.data;
      if (data) {
        let menuCode = data['menuCode'] as string;
        // 处理点击菜单项业务
      }
    }

    // 监听状态栏图标右键菜单点击事件
    statusBarManager.on('rightMenuClick', this.onRightMenuClick);

    // 注销状态栏图标右键菜单点击事件
    statusBarManager.off('rightMenuClick', this.onRightMenuClick);
    ```
13. （可选）应用接入状态栏之后，调用[updateStatusBarHoverTips](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/statusbar-extension-manager#statusbarmanagerupdatestatusbarhovertips)接口可以自定义图标hover时的显示内容。

    ```
    let context: Context | undefined = this.getUIContext().getHostContext();
    if (!context) {
      console.error('getHostContext failed');
      return;
    }
    let hoverTips: string = 'hoverTips';
    try {
      await statusBarManager.updateStatusBarHoverTips(context, hoverTips);
    } catch (err) {
      console.error(`updateStatusBarHoverTips ${err.message} ${err.code}`)
    }
    ```
14. （可选）对于已接入状态栏的应用，如果存在菜单项并且某个一级菜单项已设置menuCode属性，则可调用[updateStatusBarMenuItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/statusbar-extension-manager#statusbarmanagerupdatestatusbarmenuitem)接口，通过指定的menuCode来更新对应一级菜单项的内容。

    ```
    let context: Context | undefined = this.getUIContext().getHostContext();
    if (!context) {
      console.error('getHostContext failed');
      return;
    }
    // 获取resourceManager资源管理器
    const resourceMgr: resourceManager.ResourceManager = context.resourceManager;

    // 创建white pixelMap，需在资源rawfile文件夹中预置testWhite.png图片，图片大小为24vp * 24vp
    const whiteFileData = resourceMgr.getRawFileContentSync('testWhite.png');
    const whiteBuffer = whiteFileData.buffer;
    const whiteImageSource = image.createImageSource(whiteBuffer);
    let whitePixelMap = await whiteImageSource.createPixelMap();

    // 创建black pixelMap，需在资源rawfile文件夹中预置testBlack.png图片，图片大小为24vp * 24vp
    const blackFileData = resourceMgr.getRawFileContentSync('testBlack.png');
    const blackBuffer = blackFileData.buffer;
    const blackImageSource = image.createImageSource(blackBuffer);
    let blackPixelMap = await blackImageSource.createPixelMap();

    // 构建图标信息
    let icon: statusBarManager.StatusBarItemIcon = {
      white: whitePixelMap,
      black: blackPixelMap
    }

    let menuItemOptions: statusBarManager.StatusBarMenuItemOptions = {
      icon: icon,
      selected: true
    }

    let menuAction: statusBarManager.StatusBarMenuAction = {
      abilityName: "EntryAbility"
    }

    let menuItemTmp: statusBarManager.StatusBarMenuItem =  {
      title: 'menuItem after',
      // 当前的menuCode需要已经存在于已有的一级菜单中
      menuCode: '0',
      // 一级菜单项的menuAction和subMenu两项不可同时缺省
      menuAction: menuAction,
      // 支持设置图标及当前菜单项是否选中
      options: menuItemOptions
    }

    try {
      await statusBarManager.updateStatusBarMenuItem(context, menuItemTmp);
    } catch (e) {
      console.error(`updateStatusBarMenuItem failed. error code: ${e?.code}, error message: ${e?.message}`);
    }
    ```
15. （可选）对于已接入状态栏的应用，若其一级菜单项包含二级菜单，且二级菜单项已设置menuCode属性，则可调用[updateStatusBarSubMenuItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/statusbar-extension-manager#statusbarmanagerupdatestatusbarsubmenuitem)接口，通过指定的menuCode来更新对应二级菜单项的内容。

    ```
    let context: Context | undefined = this.getUIContext().getHostContext();
    if (!context) {
      console.error('getHostContext failed');
      return;
    }
    // 获取resourceManager资源管理器
    const resourceMgr: resourceManager.ResourceManager = context.resourceManager;

    // 创建white pixelMap，需在资源rawfile文件夹中预置testWhite.png图片，图片大小为24vp * 24vp
    const whiteFileData = resourceMgr.getRawFileContentSync('testWhite.png');
    const whiteBuffer = whiteFileData.buffer;
    const whiteImageSource = image.createImageSource(whiteBuffer);
    let whitePixelMap = await whiteImageSource.createPixelMap();

    // 创建black pixelMap，需在资源rawfile文件夹中预置testBlack.png图片，图片大小为24vp * 24vp
    const blackFileData = resourceMgr.getRawFileContentSync('testBlack.png');
    const blackBuffer = blackFileData.buffer;
    const blackImageSource = image.createImageSource(blackBuffer);
    let blackPixelMap = await blackImageSource.createPixelMap();

    // 构建图标信息
    let icon: statusBarManager.StatusBarItemIcon = {
      white: whitePixelMap,
      black: blackPixelMap
    }
    let subMenuItemOptions: statusBarManager.StatusBarMenuItemOptions = {
      icon: icon,
      selected: true
    }
    let menuAction: statusBarManager.StatusBarMenuAction = {
      abilityName: "EntryAbility"
    }
    let subMenuItemTmp: statusBarManager.StatusBarSubMenuItem = {
      subTitle: 'menuItem',
      // 当前的menuCode需要存在于已有的二级菜单项中
      menuCode: '00',
      menuAction: menuAction,
      // 支持设置图标及当前菜单项是否选中
      options: subMenuItemOptions
    }
    try {
      await statusBarManager.updateStatusBarSubMenuItem(context, subMenuItemTmp);
    } catch (e) {
      console.error(`updateStatusBarSubMenuItem failed. error code: ${e?.code}, error message: ${e?.message}`);
    }
    ```

## 完整示例代码

完整示例代码请参见[状态栏开放服务](https://gitcode.com/harmonyos_samples/status-bar-extension-kit-samplecode)。
