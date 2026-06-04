---
title: "保险应用案例"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/practice-insurance-app-architecture-v1-0000001938013084
---

## 简介

本文档为保险类HarmonyOS应用的架构设计实践，提供常见的保险商城、保单管理、理赔、车险服务等功能，帮助开发者快速构建一款保险类应用。

* Stage开发模型+声明式UI开发范式。
* 按照应用设备形态，规划一个手机设备Entry类型HAP包。
* 本实践性能优先，应用程序包大小可控，且无单独加载模块场景，业务模块包类型采用HAR包。

## 应用布局

![](./img/060a44d4.png)

实践应用框架代码运行图，开发者可以基于框架代码替换相关资源文件，以保证应用良好的使用体验。

|  |  |
| --- | --- |
| * 应用首页采用各类APP常见页面导航布局。 * 首页底部导航包含“主页”，“保险”，“服务”，“我的”四个功能入口。 * 保险页面包含保险商城，用户可以选购各类保险商品。 * 服务页面汇聚地区专享、保险金融、车主服务、常用工具等业务，采用ArkTs+H5实现。 * 我的页面包含我的订单、我的保单、我的理赔、设置等等。 | ![](./img/248521e4.gif "点击放大") |

## 应用架构设计

### 模块划分

根据行业应用的功能，按照高内聚，低耦合的原则，按照功能职责划分模块如下，开发者在实际设计过程中，可以根据模块的复杂程度实际情况再进一步细分。

**表1** 模块划分

| 模块名称 | 功能点 |
| --- | --- |
| 账号 | 用户登录 |
| 保险商城 | 保险商品列表、保险购买 |
| 保险与金融服务 | 保险商城、买保险、理赔、保单管理、理财投资、贷款等 |
| 通用工具 | 消息中心、客服、搜索等 |
| 我的 | 我的订单、我的保单、我的理赔、我的资产、我的钱包、我的爱车、常见问题、意见反馈、设置等 |

### 软件视图设计

应用分层模块类型划分指导，参见[分层模块化实践](https://developer.huawei.com/consumer/cn/doc/architecture-guides/practice-common-app-layered-v1-0000001916033058)。

产品定制层：涉及手机/平板端，设计为一个Hap，包含页面容器、首页、大量H5页面入口仅涉及少量ArkTs代码，在页面容器框架中实现，也放在该层。

基础特性层：将“保险商城”、“保险与金融服务”、“我的”、“账号” 等功能模块打包为HAR包被上层产品组件引用。

公共能力层：将“基础工具”、“路由”、“DFX”等基础公共模块打包为HAR包被上层业务组件引用。

组件间依赖说明：上层组件可依赖下层，不建议跨层依赖、反向依赖、横向依赖。

**图1** 软件视图

![](./img/5f9f9d85.png "点击放大")

### 逻辑视图设计

根据本应用功能的模块以及依赖，分解对基础服务以及三方的依赖，逻辑视图如下：

**图2** 逻辑视图

![](./img/cad66cdd.png "点击放大")

## 公共关键技术方案

介绍行业应用通用的公共关键技术，详见[公共关键技术方案](https://developer.huawei.com/consumer/cn/doc/architecture-guides/practice-common-app-architecture-v1_1-0000002317481234)。

## 行业关键技术方案

### 安全键盘技术方案

**功能设计**

登录、支付等场景，限制使用系统键盘或第三方键盘，防止被窃取敏感信息。

**方案设计**

开发者采用自定义键盘，使用ArkUI提供的接口，设置输入组件使用自定义键盘。

![](./img/b90f58bb.png "点击放大")

**代码参考**

App中需要使用安全键盘的地方，为[TextInput](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-textinput)/[TextArea](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-textarea)组件设置使用自定义键盘：

```
TextInput().customKeyboard(this.SecureKeyBoardWindow());
```

参见[安全键盘代码实现](#section181913911583)。

### 卡证识别技术方案

**功能设计**

购买保险过程，需要填写身份证、银行卡等信息，手工填写比较麻烦，需要卡证识别能力，通过拍照或者选择卡证图片自动识别卡证信息，比如身份证号、银行卡号等。

![](./img/3ed9fd6f.png "点击放大")

**方案设计**

采用HarmonyOS的[Vision Kit](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/vision-introduction)提供的[卡证识别](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/vision-cardrecognition)能力。

**代码参考**

参见[卡证识别代码实现](#section857754442812)。

## 行业创新设计

### 智能短信提醒车险到期，一键续保

**场景说明：**用户购买的车险到期前，App服务端发送短信给用户，用户收到短信后，可以点击一键续保，快捷打开App直接操作。

**创新设计：**结合HarmonyOS智能短信特性，将开发者发送给用户的短信按照模板格式化展示，短信中附带[App Linking](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-applinking-introduction-0000001054143215)链接，可以在短信中点击后一键打开App续保页面进行续保。

![](./img/b6a80938.png "点击放大")

![](./img/4d201dc5.png "点击放大")

## 应用框架代码

![](./img/6142e02d.png)

本篇代码非应用的全量代码，仅包含应用的部分框架代码。

**框架代码中的登录验证，仅是UI能力，手机号输入满11位，任意密码可登录，开发者需自行补齐相关鉴权认证**。

### 代码运行环境

软件要求

* DevEco Studio版本：DevEco Studio 6.0.0 Release及以上。
* HarmonyOS SDK版本：HarmonyOS 6.0.0 Release SDK及以上。

硬件要求

* 设备类型：华为手机。
* HarmonyOS系统：HarmonyOS 6.0.0 Release及以上。

环境搭建

安装DevEco Studio，详情请参考[工具概述](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-tools-overview)。

历史工程迁移

开发者使用HarmonyOS 6.0.0 Release及以上版本导入代码，使用一体化的[历史工程迁移能力](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V14/ide-integrated-project-migration-V14)，帮助开发者快速完成工程转换。

### 代码结构解读

本篇代码非应用的全量代码，只包括脱敏后的应用框架代码，开发者可以通过链接下载全量的框架代码。

整个框架代码结构分为多个HAR包，所有的HAR在同一个IDE工程中维护开发。

**图3** Entry集成的HAR列表
![](./img/2dfa93e6.png)

功能能力层4个HAR分别为basic，dfx，jsbridge，router。

基础特性层5个HAR分别为account，insurance，mine，service，tools。

```
├─commons                                               // 公共能力层
│ ├─basic/src/main/ets                                  // 基础工具模块
│ │ ├─components
│ │ │ ├─NavItem.ets                                     // 常用功能
│ │ │ └─PageHeaderComp.ets                              // 页面头部组件
│ │ ├─constants
│ │ │ ├─BreakpointConstants.ets                         // 一多常量
│ │ │ ├─CommonConstants.ets                             // 公共常量
│ │ │ ├─NavConstants.ets                                // 常用功能常量
│ │ │ └─StyleConstants.ets                              // 样式常量
│ │ ├─model
│ │ │ └─NavModel.ets                                    // 常用功能模型
│ │ └─utils
│ │   ├─BreakpointSystem.ets                            // 一多工具类
│ │   ├─Logger.ets                                      // 日志工具类
│ │   └─WindowUtils.ets                                 // 窗口工具类
│ ├─dfx/src/main/ets/components                         // DFX模块
│ │ └─MainPage.ets
│ ├─jsbridge/src/main/ets/components                    // JsBridge模块
│ │ └─MainPage.ets
│ └─router/src/main/ets/utils                           // 路由模块
│   └─RouterMange.ets
├─features                                              // 基础特性层
│ ├─account/src/main/ets                                // 账号模块
│ │ ├─components
│ │ │ ├─CustomKeyboard.ets                              // 安全键盘
│ │ │ └─LoginComponent.ets                              // 登录组件
│ │ └─constants
│ │   └─CustomKeyBoardConstants.ets                     // 安全键盘常量
│ ├─insurance/src/main/ets                              // 保险商城模块
│ │ ├─model
│ │ │ ├─DataType.ets                                    // 基础数据
│ │ │ ├─InsuranceModel.ets                              // 基础数据模型1
│ │ │ ├─ItemData.ets                                    // 基础数据
│ │ │ ├─PreferredDes.ets                                // 基础数据
│ │ │ ├─PreferredItem.ets                               // 基础数据模型2
│ │ │ ├─SolutionItem.ets                                // 基础数据模型3
│ │ │ └─TabBarData.ets                                  // 基础数据模型4
│ │ └─page
│ │   ├─Insurance.ets                                   // 保险页面
│ │   ├─InsuranceTabs.ets                               // 保险页面标签页组件
│ │   └─SolutionSwiper.ets                              // 保险页面滑动图组件
│ ├─mine/src/main/ets                                   // 我的模块
│ │ ├─components
│ │ │ ├─FunctionGrid.ets                                // 基础数据
│ │ │ └─MajorList.ets                                   // 基础数据
│ │ ├─constants
│ │ │ ├─HeaderConstants.ets                             // 头部导航栏
│ │ │ └─MajorConstants.ets                              // 基础数据
│ │ ├─model
│ │ │ ├─FunctionModel.ets                               // 基础数据模型1
│ │ │ └─MajorModel.ets                                  // 基础数据模型2
│ │ └─pages
│ │   ├─AuthenticationPage.ets                          // 卡证识别功能页
│ │   ├─CredentialsPage.ets                             // 身份认证页
│ │   ├─MinePage.ets                                    // 我的页面
│ │   └─SettingsPage.ets                                // 设置页面
│ ├─service/src/main/ets                                // 服务模块
│ │ ├─model
│ │ │ ├─ItemData.ets                                    // 基础数据模型
│ │ │ └─MainViewModel.ets                               // 基础数据
│ │ └─page
│ │   ├─Service.ets                                     // 服务页面
│ │   └─ServiceDetail.ets                               // H5Web跳转
│ └─tools/src/main/ets                                  // 辅助工具模块
│   ├─components
│   │ └─SearchPage.ets                                  // 搜索页面
│   └─model
│     └─SearchPageData.ets                              // 搜索页面数据
└─products/phone/src/main/ets                           // 产品定制层
  ├─components
  │ ├─AllBusiness.ets                                   // 首页业务组件
  │ ├─Headlines.ets                                     // 首页头条组件
  │ ├─Home.ets                                          // 首页
  │ ├─InsuranceRecommendation.ets                       // 首页保险推荐组件
  │ ├─Notification.ets                                  // 首页通知组件
  │ ├─RecommendsInfo.ets                                // 首页头部组件
  │ └─ReferralLink.ets                                  // 首页滚动图组件
  ├─constants
  │ ├─HomeConstants.ets                                 // 首页常量
  │ └─PageConstants.ets                                 // 页面常量
  ├─entryability
  │ └─EntryAbility.ets                                  // 程序入口
  ├─pages
  │ ├─LoginPage.ets                                     // 登录页
  │ ├─MainPage.ets                                      // 主页面
  │ └─SplashPage.ets                                    // 启动页
  └─viewmodel
    ├─HomeData.ets                                      // 首页数据
    └─MainPageData.ets                                  // 主页面数据
```

### 安全键盘代码实现

实现自定义键盘，代码为demo，仅供参考。

```
// features/account/src/main/ets/components/CustomKeyboard.ets
import { EKeyType, EKeyboardType, IKeyAttribute } from '../constants/CustomKeyBoardConstants';

@Component
export struct CustomKeyboard {
  @Prop items: IKeyAttribute[];
  @Prop curKeyboardType: EKeyboardType;
  @Link inputValue: string;
  public controller: TextInputController = new TextInputController();
  public onKeyboardEvent: Function | null = null;
  private rowSpace: number = 5; // 行间距
  private rowCount: number = 4; // 行数
  private columnSpace: number = 5; // 列间距
  private itemHeight: number = 42; // Item尺寸

  @Builder
  myGridItem(item: IKeyAttribute) {
    if (typeof item.label === 'object') {
      Image(item.label)
        .width($r('app.integer.customsafekeyboard_key_image_size'))
        .height($r('app.integer.customsafekeyboard_key_image_size'))
        .objectFit(ImageFit.Contain);
    } else {
      Text(item.label)
        .fontSize(item.fontSize)
        .fontColor(item.fontColor)
        .fontWeight(FontWeight.Bold);
    }
  }

  @Builder
  titleBar() {
    Stack() {
      Text($r('app.string.customsafekeyboard_keyboard_title'))
        .fontSize($r('app.integer.customsafekeyboard_keyboard_title_font_size'))
        .fontColor(Color.Grey);

      Row() {
        Text($r('app.string.customsafekeyboard_keyboard_submit'))
          .fontSize($r('app.integer.customsafekeyboard_keyboard_title_font_size'))
          .fontColor(Color.Gray)
          .onClick(() => {
            // 关闭自定义键盘
            this.controller.stopEditing();
          });
      }
      .width($r('app.string.customsafekeyboard_one_hundred_percent'))
      .justifyContent(FlexAlign.End);
    }
    .width($r('app.string.customsafekeyboard_one_hundred_percent'))
    .margin({
      top: $r('app.integer.customsafekeyboard_keyboard_title_margin_top'),
      bottom: $r('app.integer.customsafekeyboard_keyboard_title_margin_bottom')
    });
  }

  build() {
    Column() {
      this.titleBar();

      Grid() {
        // 性能知识点：此处数据项较少，一屏内可以展示所有数据项，使用了ForEach。在数据项多的列表滚动场景下，推荐使用LazyForEach。
        ForEach(this.items, (item: IKeyAttribute) => {
          GridItem() {
            this.myGridItem(item);
          }
          .width($r('app.string.customsafekeyboard_one_hundred_percent'))
          .height(this.itemHeight)
          .rowStart(item?.position?.[0])
          .rowEnd(item?.position?.[1])
          .columnStart(item?.position?.[2])
          .columnEnd(item?.position?.[3])
          .backgroundColor(item.backgroundColor)
          .borderRadius($r('app.integer.customsafekeyboard_keyboard_radius'))
          .onClick(() => {
            this.onKeyboardEvent?.(item);
            if (item.type === EKeyType.CAPSLOCK && typeof item.label === 'object') {
              if (this.curKeyboardType === EKeyboardType.LOWERCASE) {
                item.label = $r('app.media.customsafekeyboard_capslock_white');
              } else {
                item.label = $r('app.media.customsafekeyboard_capslock_black');
              }
            }
          });
        }, (item: IKeyAttribute, index: number) => JSON.stringify(item) + index);
      }
      .margin({ bottom: $r('app.integer.customsafekeyboard_keyboard_margin_bottom') })
      .columnsTemplate(this.curKeyboardType === EKeyboardType.NUMERIC ? '1fr 1fr 1fr' :
        '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr')
      .rowsTemplate('1fr 1fr 1fr 1fr') // Grid高度均分成4份
      .rowsGap(this.rowSpace) // 设置行间距
      .columnsGap(this.columnSpace) // 设置列间距
      .width($r('app.string.customsafekeyboard_one_hundred_percent'))
      .height(this.itemHeight * this.rowCount + this.rowSpace * (this.rowCount - 1));
    }
    .width($r('app.string.customsafekeyboard_one_hundred_percent'))
    .padding({ left: this.columnSpace, right: this.columnSpace })
    .backgroundColor(Color.Black);
  }
}
```

在登录页面使用自定义键盘。

```
// features/account/src/main/ets/components/LoginComponent.ets
/**
 * 实现步骤：
 *  1. 通过TextInput.customKeyboard绑定自定义键盘
 *  2. 自定义键盘使用网格布局，定义数组保存每个按键的值、UI属性和位置，并循环渲染数组完成键盘布局
 *  3. 在字母和特殊字符键盘中将网格拆分为4 * 20布局，保证每个按键都要占用整数单元
 *  4. 在父组件定义按键响应函数onKeyboardEvent，可根据不同的按键类型实现数据更新，然后子组件按键时调用父组件传递过来的onKeyboardEvent即可
 *  5. 在子组件中，必须定义inputValue且使用@Link装饰器，这样能保证子组件调用时onKeyboardEvent时inputValue不为空，父子组件数据双向更新
 */

import { CustomKeyboard } from './CustomKeyboard';
import { Logger } from '@ohos/basic';
import {
  EKeyType,
  EKeyboardType,
  IKeyAttribute,
  lowerCaseKeyData,
  numericKeyData,
  specialKeyData,
  upperCaseKeyData
} from '../constants/CustomKeyBoardConstants';

@Component
export struct LoginComponent {
  // TextInput输入的值
  @State inputValue: string = '';
  // 当前键盘类型，默认为数字键盘
  @State curKeyboardType: EKeyboardType = EKeyboardType.NUMERIC;
  // 键盘按键数组
  @State items: IKeyAttribute[] = numericKeyData;
  controller: TextInputController = new TextInputController();
  private timeOutId: number = 0;

  /**
   * 键盘按键事件响应函数
   * @param item 键盘按键数据项
   */
  onKeyboardEvent(item: IKeyAttribute) {
    switch (item.type) {
      // 输入类型，追加输入内容
      case EKeyType.INPUT:
        this.inputValue += item.value;
        break;
      // 删除末尾字符
      case EKeyType.DELETE:
        this.inputValue = this.inputValue.slice(0, -1);
        break;
      // 切换数字字符键盘
      case EKeyType.NUMERIC:
        if (this.curKeyboardType !== EKeyboardType.NUMERIC) {
          this.curKeyboardType = EKeyboardType.NUMERIC;
          this.items = numericKeyData;
        }
        break;
      // 切换大小写
      case EKeyType.CAPSLOCK:
        if (this.curKeyboardType === EKeyboardType.LOWERCASE) {
          // 切换大写字母键盘
          this.curKeyboardType = EKeyboardType.UPPERCASE;
          this.items = upperCaseKeyData;
        } else {
          // 切换小写字母键盘
          this.curKeyboardType = EKeyboardType.LOWERCASE;
          this.items = lowerCaseKeyData;
        }
        break;
      // 切换特殊字符键盘
      case EKeyType.SPECIAL:
        if (this.curKeyboardType !== EKeyboardType.SPECIAL) {
          this.curKeyboardType = EKeyboardType.SPECIAL;
          this.items = specialKeyData;
        }
        break;
      default:
        Logger.info('Sorry, we are out of input type.');
    }
  }

  /**
   * 自定义键盘组件Builder
   */
  @Builder
  customKeyboardBuilder() {
    CustomKeyboard({
      items: this.items,
      inputValue: this.inputValue,
      curKeyboardType: this.curKeyboardType,
      onKeyboardEvent: this.onKeyboardEvent,
      controller: this.controller
    });
  }

  aboutToDisappear() {
    if (this.timeOutId) {
      clearTimeout(this.timeOutId);
    }
  }

  build() {
    Column() {
      Image($r('app.media.customsafekeyboard_avatar'))
        .width($r('app.integer.customsafekeyboard_avatar_weight'))
        .height($r('app.integer.customsafekeyboard_avatar_height'))
        .margin({ top: $r('app.integer.customsafekeyboard_row_height') })
        .objectFit(ImageFit.Fill);

      Text($r('app.string.customsafekeyboard_account_name'))
        .fontSize($r('app.integer.customsafekeyboard_text_font_size'))
        .margin({ top: $r('app.integer.customsafekeyboard_common_margin_padding') })
        .fontWeight('bold');

      TextInput({
        text: this.inputValue,
        placeholder: $r('app.string.customsafekeyboard_placeholder'),
        controller: this.controller
      })
        .type(InputType.Password)
        .customKeyboard(this.customKeyboardBuilder())
        .height($r('app.integer.customsafekeyboard_text_input_height'))
        .width($r('app.integer.customsafekeyboard_login_button_width'))
        .margin({ top: $r('app.integer.customsafekeyboard_common_margin_padding') })
        .fontSize($r('app.integer.customsafekeyboard_text_input_fontSize'))
        .fontWeight('regular')
        .backgroundColor('#FFFFFF');

      Button($r('app.string.customsafekeyboard_login_button_label'))
        .type(ButtonType.Capsule)
        .opacity(this.inputValue ? 1 : 0.4)
        .fontSize($r('app.integer.customsafekeyboard_login_button_font_size'))
        .width($r('app.integer.customsafekeyboard_login_button_width'))
        .height($r('app.integer.customsafekeyboard_login_button_height'))
        .margin({ top: $r('app.integer.customsafekeyboard_login_button_margin') })
        .backgroundColor('#EA2D4F')
        .onClick(() => {
          if (this.inputValue?.length === 0) {
            return;
          }
          this.controller.stopEditing();
          this.getUIContext().getPromptAction().showToast({
            message: $r('app.string.customsafekeyboard_login_success'),
            duration: 1000
          });
          this.timeOutId = setTimeout(() => {
            this.getUIContext().getRouter().replaceUrl({ url: 'pages/MainPage' })
              .catch((err: Error) => {
                Logger.error(JSON.stringify(err));
              });
          }, 1000);
        });
    }
    .backgroundColor('#F1F3F5')
    .width($r('app.string.customsafekeyboard_one_hundred_percent'))
    .height($r('app.string.customsafekeyboard_one_hundred_percent'))
    .padding($r('app.integer.customsafekeyboard_common_margin_padding'));
  }
}
```

### 卡证识别代码实现

采用HarmonyOS的[Vision Kit](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/vision-introduction)提供的[卡证识别](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/vision-cardrecognition)能力。

```
// features/mine/src/main/ets/pages/CredentialsPage.ets
import { CardRecognition, CardType, CardSide, CardRecognitionResult } from '@kit.VisionKit';

class Info {
  id: string = '';
  name: string = '';

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

@Component
export struct CredentialsPage {
  @Consume('topRectHeight') topRectHeight: string;
  cardId: string | undefined = '';
  cardName: string | undefined = '';
  pathStack: NavPathStack = new NavPathStack();

  build() {
    NavDestination() {
      Column() {
        CardRecognition({
          // 此处选择身份证类型作为示例 AUTO为自动识别
          supportType: CardType.CARD_ID,
          cardSide: CardSide.FRONT,
          callback: ((params: CardRecognitionResult) => {
            if (params.code === 200) {
              let front = params.cardInfo?.front;
              this.cardId = front?.idNumber;
              this.cardName = front?.name;
              this.pathStack.popToName('AuthenticationPage', new Info(this.cardId, this.cardName));
            }
          })
        }).onDisAppear(() => {
        });
      }
      .width('100%')
      .height('100%')
      .justifyContent(FlexAlign.Center);
    }.title('扫描证件')
    .padding({ top: this.topRectHeight })
    .onReady((context: NavDestinationContext) => {
      this.pathStack = context.pathStack;
    });
  }
}
```

### 代码下载链接

[理财保险类示例代码.zip](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260318094240.61025563676634078547525856577675%3A20260604132428%3A2800%3A11A5C7958360AE8339EC0817B0D1653941F935CDBD284EEB4B6E7585A8EDA3DE.zip?needInitFileName=true)
