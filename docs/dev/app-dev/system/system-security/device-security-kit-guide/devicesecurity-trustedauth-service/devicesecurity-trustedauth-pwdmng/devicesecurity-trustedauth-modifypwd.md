---
displayed_sidebar: appDevSidebar
title: "修改数字盾密码"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/devicesecurity-trustedauth-modifypwd
format: md
---


## 场景介绍

激活数字盾后，用户可在完成旧密码认证后，修改数字盾密码信息。

## 约束与限制

本功能在API 24之前版本仅支持Phone；API24及之后版本，新增支持具备TUI能力的PC/2in1、具备TUI能力的Tablet。可通过接口[checkConfirmUITextFormat](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-trusted-auth-api#checkconfirmuitextformat)查询设备是否具备TUI能力。不支持的设备在调用数字盾服务相关业务接口时，返回错误码1019100016。

## 业务流程

![](./img/ee4dd898.jpg)

## 接口说明

接口及使用方法请参见[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-trusted-auth-api)。

| 接口名 | 描述 |
| --- | --- |
| [modifyTrustedAuthenticationPwd](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-trusted-auth-api#modifytrustedauthenticationpwd)(challenge: Uint8Array, pwdInfo: PasswordInfo, authID: bigint, label: TUILable): Promise\<AuthToken\> | 修改数字盾密码 |

## 修改数字盾密码界面介绍

如图1、图2为修改数字盾密码时对应的TUI界面示例，用户需使用旧密码认证通过后，方可设置新密码。密码认证失败时，剩余认证次数减1，当剩余认证次数为0时，则锁定数字盾服务。新密码长度、对应TUI应用图标以及当前应用场景说明均由开发者调用接口时传入。

**图1** 旧密码认证

![](./img/a53a7741.png)

**图2** 新密码设置

![](./img/4b4aa690.png)

## 开发步骤

1. 导入huks 、trustedAuthentication 和相关依赖模块。

   ```
   import { resourceManager } from '@kit.LocalizationKit'
   import { huks } from '@kit.UniversalKeystoreKit';
   import { BusinessError } from '@kit.BasicServicesKit';
   import { trustedAuthentication } from '@kit.DeviceSecurityKit';
   import { cryptoFramework } from '@kit.CryptoArchitectureKit';
   import { hilog } from '@kit.PerformanceAnalysisKit';
   import { common } from '@kit.AbilityKit';
   ```
2. 修改密码前，需从服务器获取当前账号在[设置数字盾密码](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/devicesecurity-trustedauth-setpwd)时获取的authID。
3. 参考密钥管理服务提供的[签名/验签指导](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-signing-signature-verification-arkts)，初始化签名会话。
4. 调用数字盾服务修改密码接口，发起数字盾密码修改申请。

   ```
   // 修改数字盾密码
   async function ModifyPwd(challenge: Uint8Array, context: common.UIAbilityContext):Promise<trustedAuthentication.AuthToken> {
    try {
      const passwordInfo: trustedAuthentication.PasswordInfo = {
        pwdType: trustedAuthentication.PasswordType.PASSWORD_TYPE_DIGITAL,
        pwdMaxLength: 10,
        pwdMinLength: 6,
        maxAuthFailCount: 6,
      };
      const authID: bigint = 1687413472599354502n;//实际填充为从服务器获取到的账号对应的authID值
      const resourceMgr: resourceManager.ResourceManager = context.resourceManager;
      const fileData : Uint8Array = await resourceMgr.getRawFileContent('test_logo_rgba.png'); //实际使用时请替换为应用要在TUI界面展示的logo图片名称
      const buffer = fileData.buffer;
      const label:trustedAuthentication.TUILable = {
        image: buffer as ArrayBuffer,
        title: "修改密码",
      }
      const authToken = await trustedAuthentication.modifyTrustedAuthenticationPwd(challenge, passwordInfo, authID, label);
      return authToken;
    } catch (err) {
      hilog.error(0x0000, 'testTag', `Failed to modifyTrustedAuthenticationPwd, code:${err.code}, message:${err.message}`);
      throw new Error('Modify password failed:' + (err as BusinessError).message);
    }
   }
   const rand = cryptoFramework.createRandom();
   const len: number = 32;
   const challenge: Uint8Array = rand?.generateRandomSync(len)?.data;//实际使用时请替换为通过UniversalKeystoreKit初始化会话获取的challenge
   let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
   const authToken: trustedAuthentication.AuthToken = await ModifyPwd(challenge, context);
   ```
5. 参考密钥管理服务提供的[签名/验签指导](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-signing-signature-verification-arkts), 对通过修改密码获取到的authToken数据进行签名，并结束会话。
