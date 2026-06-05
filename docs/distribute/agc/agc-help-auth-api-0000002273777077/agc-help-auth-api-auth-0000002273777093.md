---
title: "Auth"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-auth-api-auth-0000002273777093
format: md
---


AGC认证服务接口，使用auth获取服务。

#### Method Summary

| Qualifier and Type | Method Name and Description |
| --- | --- |
| void | [init](#section189465186472)(applicationContext: Context, json: string)  初始化Auth SDK。 |
| `Promise&lt;void>` | [setRegion](#section64747189482)(region: string)  设置存储地。 |
|  | [getToken](#section20898933164912)(refresh?: boolean, region?: string)  获取AGC网关的AccessToken。 |
| void | [setClientId](#section1494313210247)(clientId: string)  设置clientId。 |
| void | [setClientSecret](#section7386153813500)(clientSecret: string)  设置clientSecret。 |
|  | [requestVerifyCode](#section9850751813)(verifyCodeParam: [VerifyCodeParam](https://developer.huawei.com/consumer/cn/doc/app/agc-help-auth-api-verifycodeparam-0000002238777832))  申请验证码。 |
|  | [createUser](#section19861514132515)(credentialInfo: [CredentialInfo](https://developer.huawei.com/consumer/cn/doc/app/agc-help-auth-api-credentialinfo-0000002273621689))  创建账户。 |
| `Promise&lt;void>` | [resetPassword](#section184671244192916)(credentialInfo: [CredentialInfo](https://developer.huawei.com/consumer/cn/doc/app/agc-help-auth-api-credentialinfo-0000002273621689))  重置密码。 |
|  | [signIn](#section136957141012)(signInParam: [SignInParam](https://developer.huawei.com/consumer/cn/doc/app/agc-help-auth-api-signinparam-0000002273777089))  登录接口，通过第三方认证来登录AGC平台。 |
|  | [signInAnonymously](#section1394015509369)()  匿名登录。 |
| `Promise&lt;void>` | [deleteUser](#section197703751114)()  在AGConnect服务器侧删除当前用户信息，并清除缓存信息。 |
| `Promise&lt;void>` | [signOut](#section4122193119119)()  登出接口。 |
| `Promise&lt;[AuthUser](https://developer.huawei.com/consumer/cn/doc/app/agc-help-auth-api-authuser-0000002273781645) | null>` | [getCurrentUser](#section87068861218)()  获取当前登录的用户信息。 |
| [cloudCommon.AuthProvider](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cloudfoundation-cloudcommon#authprovider) | [getAuthProvider](#section2307357121210)()  获取当前登录用户的authProvider，作为Cloud Foundation Kit的CloudCommon.init方法的入参。 |

#### [h2]Methods

#### [h2]init

| Method |
| --- |
| init(applicationContext: [Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-app-context), json: String): void  初始化Auth SDK。 |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| applicationContext | [Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-app-context) | 应用上下文。 |
| json | String | 由agconnect-services.json文件生成的JSON字符串。 |

**Sample Code**

```
import auth from '@hw-agconnect/auth';

onCreate(want, launchParam) {
  let file = this.context.resourceManager.getRawFileContentSync('agconnect-services.json');
  let json: string = buffer.from(file.buffer).toString();
  auth.init(this.context, json);
}
```

#### [h2]setRegion

| Method |
| --- |
| setRegion(region: string): Promise&lt;void>  设置存储地。 |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| region | string | 存储地，入参使用[Region](https://developer.huawei.com/consumer/cn/doc/app/agc-help-auth-api-region-0000002273621693)里的枚举值。 |

**Return**

| Type | Description |
| --- | --- |
| `Promise&lt;void>` | void类型的Promise对象。 |

**Sample Code**

```
import auth from '@hw-agconnect/auth';

await auth.setRegion(Region.CN)；
```

#### [h2]getToken

| Method |
| --- |
| getToken(refresh?: boolean, region?: string):   获取AGC网关的AccessToken。 |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| refresh | boolean | 是否强制刷新，默认为false。 |
| region | string | 存储地。 |

**Return**

| Type | Description |
| --- | --- |
|  | Token类型的Promise对象。 |

**Sample Code**

```
import auth from '@hw-agconnect/auth';

let token = await auth.getToken(false, Region.CN);
let tokenString = token.tokenString;
let expiration = token.expiration;
```

#### [h2]setClientId

| Method |
| --- |
| setClientId(clientId: string): void  设置clientId。 |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| clientId | string | AGC平台“开发与服务 > 项目设置 > 常规”页面上项目的Client ID。 |

**Sample Code**

```
import auth from '@hw-agconnect/auth';

auth.setClientId("your clientId");
```

#### [h2]setClientSecret

| Method |
| --- |
| setClientSecret(clientSecret: string): void  设置clientSecret。 |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| clientSecret | string | AGC平台“开发与服务 > 项目设置 > 常规”页面上项目的Client Secret。 |

**Sample Code**

```
import auth from '@hw-agconnect/auth';

auth.setClientSecret("your clientSecret");
```

#### [h2]requestVerifyCode

| Method |
| --- |
| requestVerifyCode(verifyCodeParam: [VerifyCodeParam](https://developer.huawei.com/consumer/cn/doc/app/agc-help-auth-api-verifycodeparam-0000002238777832)):   申请验证码。 |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| verifyCodeParam | [VerifyCodeParam](https://developer.huawei.com/consumer/cn/doc/app/agc-help-auth-api-verifycodeparam-0000002238777832) | 申请验证码的相关参数类。 |

**Return**

| Type | Description |
| --- | --- |
|  | 验证码结果的Promise对象。 |

**Sample Code**

```
import { VerifyCodeAction } from '@hw-agconnect/auth';
import auth from '@hw-agconnect/auth';
import { BusinessError } from '@kit.BasicServicesKit';

// 申请手机验证码
auth.requestVerifyCode({
  action: VerifyCodeAction.REGISTER_LOGIN,
  lang: 'zh_CN',
  sendInterval: 60,
  verifyCodeType: {
    phoneNumber: '138********',
    countryCode: '86',
    kind: 'phone'
  }
}).then(verifyCodeResult => {
  // 验证码申请成功
}).catch((err: BusinessError) => {
  // 验证码申请失败
});

// 申请email验证码
auth.requestVerifyCode({
  action: VerifyCodeAction.REGISTER_LOGIN,
  lang: 'zh_CN',
  sendInterval: 60,
  verifyCodeType: {
    email: 'xxxx@xxx.com',
    kind: 'email',
  }
}).then(verifyCodeResult => {
  // 验证码申请成功
}).catch((err: BusinessError) => {
// 验证码申请失败
});
```

#### [h2]createUser

| Method |
| --- |
| createUser(credentialInfo: [CredentialInfo](https://developer.huawei.com/consumer/cn/doc/app/agc-help-auth-api-credentialinfo-0000002273621689)):   创建账户。 |

**Parameter****s**

| Name | Type | Description |
| --- | --- | --- |
| credentialInfo | [CredentialInfo](https://developer.huawei.com/consumer/cn/doc/app/agc-help-auth-api-credentialinfo-0000002273621689) | 凭证信息。编译器会根据其中kind自动推断类型，例如其内部kind填为：'phone'，则类型被推断为“PhoneCredentialInfo”。 |

**Return**

| Type | Description |
| --- | --- |
|  | 登录结果信息的Promise对象。 |

**Sample Code**

```
import auth from '@hw-agconnect/auth';
import { BusinessError } from '@kit.BasicServicesKit';

// 创建手机用户
auth.createUser({
  kind: 'phone',
  countryCode: '86',
  phoneNumber: '138********',
  password: '123456',// 可以给用户设置初始密码。后续可以用密码来登录
  verifyCode: 'xxxxxx'
}).then(result => {
  // 创建用户成功
}).catch((err: BusinessError) => {
  // 创建用户失败
})
// 创建email用户
auth.createUser({
  kind: 'email',
  email: 'xxxx@xxx.com',
  password: '123456',// 可以给用户设置初始密码。后续可以用密码来登录
  verifyCode: 'xxxxxx'
}).then(result => {
  // 创建账号成功后，默认已登录
}).catch((err: BusinessError) => {
 // 创建用户失败
})
```

#### [h2]resetPassword

| Method |
| --- |
| resetPassword(credentialInfo: [CredentialInfo](https://developer.huawei.com/consumer/cn/doc/app/agc-help-auth-api-credentialinfo-0000002273621689)): Promise&lt;void>  重置密码。 |

**Parameter****s**

| Name | Type | Description |
| --- | --- | --- |
| credentialInfo | [CredentialInfo](https://developer.huawei.com/consumer/cn/doc/app/agc-help-auth-api-credentialinfo-0000002273621689) | 凭证信息。编译器会根据其中kind自动推断类型，例如其内部kind填为：'phone'，则类型被推断为“PhoneCredentialInfo”。 |

**Return**

| Type | Description |
| --- | --- |
| `Promise&lt;void>` | void类型的Promise对象。 |

**Sample Code**

```
import auth from '@hw-agconnect/auth';

// 重置手机账户密码
auth.resetPassword({
  kind: 'phone',
  password: '123456',
  phoneNumber: '138********',
  countryCode: '86',
  verifyCode: 'xxxxxx'
})
// 重置email账户密码
auth.resetPassword({
  kind: 'email',
  password: '123456',
  email: 'xxxx@xxx.com',
  verifyCode: 'xxxxxx'
})
```

#### [h2]signIn

| Method |
| --- |
| signIn(signInParam: [SignInParam](https://developer.huawei.com/consumer/cn/doc/app/agc-help-auth-api-signinparam-0000002273777089)):  登录接口，通过第三方认证来登录AGC平台。 |

**Parameters**

| Name | Type | Parameter desc |
| --- | --- | --- |
| signInParam | [SignInParam](https://developer.huawei.com/consumer/cn/doc/app/agc-help-auth-api-signinparam-0000002273777089) | 登录操作的参数类。 |

**Return**

| Type | Description |
| --- | --- |
|  | 登录结果信息的Promise对象。 |

**Sample Code**

```
import auth from '@hw-agconnect/auth';
import { BusinessError } from '@kit.BasicServicesKit';

// 手机账户登录
auth.signIn({
  credentialInfo: {
    kind: 'phone',
    phoneNumber: '138********',
    countryCode: '86',
    password: '123456'
  }
}).then(user => {
  // 登录成功
}).catch((err: BusinessError) => {
  // 登录失败
});

// email账户登录
auth.signIn({
  credentialInfo: {
    kind: 'email',
    password: '123456',
    email: 'xxxx@xxx.com'
  }
}).then(user => {
  // 登录成功
}).catch((err: BusinessError) => {
  // 登录失败
});
```

#### [h2]signInAnonymously

| Method |
| --- |
| signInAnonymously():   匿名登录。 |

**Return**

| Type | Description |
| --- | --- |
|  | 登录结果信息的Promise对象。 |

**Sample Code**

```
import auth from '@hw-agconnect/auth';
import { BusinessError } from '@kit.BasicServicesKit';

auth.signInAnonymously().then(() => {
  // 登录成功
}).catch((err: BusinessError) => {
 // 登录失败
})
```

#### [h2]deleteUser

| Method |
| --- |
| deleteUser():Promise&lt;void>  在AGC服务器侧删除当前用户信息，并清除缓存信息。 |

**Return**

| Type | Description |
| --- | --- |
| `Promise&lt;void>` | void类型的Promise对象。 |

**Sample Code**

```
import auth from '@hw-agconnect/auth';
import { BusinessError } from '@kit.BasicServicesKit';

auth.deleteUser().then(() => {
  // 销户成功
}).catch((err: BusinessError) => {
  // 销户失败
})
```

#### [h2]signOut

| Method |
| --- |
| signOut():Promise&lt;void>  登出接口。退出登录状态，删除缓存数据。 |

**Return**

| Type | Description |
| --- | --- |
| `Promise&lt;void>` | void类型的Promise对象。 |

**Sample Code**

```
import auth from '@hw-agconnect/auth';
import { BusinessError } from '@kit.BasicServicesKit';

auth.signOut().then(() => {
  // 登出成功
}).catch((err: BusinessError) => {
  // 登出失败
})
```

#### [h2]getCurrentUser

| Method |
| --- |
| getCurrentUser():`Promise&lt;[AuthUser](https://developer.huawei.com/consumer/cn/doc/app/agc-help-auth-api-authuser-0000002273781645) | null>`  获取当前登录的用户信息，如果未登录则返回null。 |

**Return**

| Type | Description |
| --- | --- |
| `Promise&lt;[AuthUser](https://developer.huawei.com/consumer/cn/doc/app/agc-help-auth-api-authuser-0000002273781645) | null>` | 用户信息的Promise对象。 |

**Sample Code**

```
import auth from '@hw-agconnect/auth';

auth.getCurrentUser().then(user=>{
  if(user){
    // 业务逻辑
  }
});
```

#### [h2]getAuthProvider

| Method |
| --- |
| getAuthProvider():cloudCommon.AuthProvider  获取当前登录用户的AuthProvider，作为Cloud Foundation Kit的CloudCommon.init方法的入参。 |

**Return**

| Type | Description |
| --- | --- |
| [cloudCommon.AuthProvider](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cloudfoundation-cloudcommon#authprovider) | Cloud Foundation Kit的CloudCommon.init方法的入参。 |

**Sample Code**

```
import auth from '@hw-agconnect/auth';

init(): void {
  let provider =  auth.getAuthProvider();
  cloudCommon.init({authProvider: provider});
}
```
