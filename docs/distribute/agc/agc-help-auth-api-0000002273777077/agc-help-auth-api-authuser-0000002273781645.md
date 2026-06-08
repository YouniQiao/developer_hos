---
title: "AuthUser"
original_url: /docs/distribute/agc/agc-help-auth-api-0000002273777077/agc-help-auth-api-authuser-0000002273781645
format: md
upstream_id: distribute/agc/agc-help-auth-api-0000002273777077/agc-help-auth-api-authuser-0000002273781645
last_sync: 2026-06-07
sync_hash: a59881d4
---
当前登录的用户信息。

#### Method Summary

| Qualifier and Type | Method Name and Description |
| --- | --- |
| string | [getUid](#section1312317535214)()  获取用户ID，此ID由AGConnect生成。 |
| string | [getEmail](#section1320432912212)()  获取用户邮箱。 |
| string | [getPhone](#section1169817018235)()  获取用户手机号码。 |
| string | [getDisplayName](#section948316131197)()  获取用户名称。 |
| string | [getPhotoUrl](#section1063155522017)()  获取用户头像。 |
| string | [getProviderId](#section1324190192617)()  获取当前用户的提供者，第三方认证平台的名称。 |
| `Array&lt;`Map&lt;String>``> | [getProviderInfo](#section12137941202819)()  获取全部第三方平台的用户信息。 |
|  | [getToken](#section13527236162712)(forceRefresh: boolean)  获取已登录AGC用户的Access Token信息。 |
|  | [getUserExtra](#section41083419316)()  获取当前用户的Extra信息。 |
| boolean | [isAnonymous](#section15810340163512)()  是否是匿名登录用户。 |
| boolean | [getEmailVerified](#section565161913377)()  获取邮箱验证标记。 |
| boolean | [getPasswordSetted](#section9652101912371)()  获取密码设置标记。 |
|  | [link](#section27316362445)(credentialInfo: [CredentialInfo](/docs/distribute/agc/agc-help-auth-api-0000002273777077/agc-help-auth-api-credentialinfo-0000002273621689))  当前用户关联新的登录方式。 |
|  | [unlink](#section12443118145319)(type: [ProviderType](/docs/distribute/agc/agc-help-auth-api-0000002273777077/agc-help-auth-api-providertype-0000002273781649))  当前用户解除关联的登录方式。 |
| `Promise&lt;void>` | [updateEmail](#section7264195173019)(emailInfo: [EmailInfo](/docs/distribute/agc/agc-help-auth-api-0000002273777077/agc-help-auth-api-emailinfo-0000002238618028))  更新当前用户邮箱。 |
| `Promise&lt;void>` | [updatePhone](#section11672161715314)(phoneInfo: [PhoneInfo](/docs/distribute/agc/agc-help-auth-api-0000002273777077/agc-help-auth-api-phoneinfo-0000002273617157))  更新当前用户手机号码。 |
| `Promise&lt;void>` | [updatePassword](#section152730591310)(passwordInfo: [PasswordInfo](/docs/distribute/agc/agc-help-auth-api-0000002273777077/agc-help-auth-api-passwordinfo-0000002238777840))  更新当前用户密码。 |
| `Promise&lt;void>` | [updateProfile](#section15189164517510)(userProfile: [UserProfileInfo](/docs/distribute/agc/agc-help-auth-api-0000002273777077/agc-help-auth-api-userprofileinfo-0000002238782372))  更新当前用户的个人信息。 |
|  | [userReauthenticate](#section49111416135613)(signInParam: [SignInParam](/docs/distribute/agc/agc-help-auth-api-0000002273777077/agc-help-auth-api-signinparam-0000002273777089))  用户登录后重认证。 |

#### Methods

#### [h2]getUid

| Method |
| --- |
| getUid():string  获取用户ID，此ID由AGC生成。 |

**Return**

| Type | Description |
| --- | --- |
| string | 用户ID。 |

**Sample Code**

```
import auth from '@hw-agconnect/auth';

auth.getCurrentUser().then(user=>{
  if(user){
    let uid = user.getUid();
  }
})
```

#### [h2]getEmail

| Method |
| --- |
| getEmail():string  获取用户邮箱地址。 |

**Return**

| Type | Description |
| --- | --- |
| string | 用户Email。 |

**Sample Code**

```
import auth from '@hw-agconnect/auth';

auth.getCurrentUser().then(user=>{
  if(user){
    let email = user.getEmail();
  }
})
```

#### [h2]getPhone

| Method |
| --- |
| getPhone():string  获取用户手机号码。 |

**Return**

| Type | Description |
| --- | --- |
| string | 用户手机号码。 |

**Sample Code**

```
import auth from '@hw-agconnect/auth';

auth.getCurrentUser().then(user=>{
  if(user){
    let phone = user.getPhone();
  }
})
```

#### [h2]getDisplayName

| Method |
| --- |
| getDisplayName():string  获取用户名称。 |

**Return**

| Type | Description |
| --- | --- |
| string | 用户名称。 |

**Sample Code**

```
import auth from '@hw-agconnect/auth';

auth.getCurrentUser().then(user=>{
  if(user){
    let phone = user.getDisplayName();
  }
})
```

#### [h2]getPhotoUrl

| Method |
| --- |
| getPhotoUrl():string  获取用户头像的url。 |

**Return**

| Type | Description |
| --- | --- |
| string | 用户头像的url。 |

**Sample Code**

```
import auth from '@hw-agconnect/auth';

auth.getCurrentUser().then(user=>{
  if(user){
    let phone = user.getPhotoUrl();
  }
})
```

#### [h2]getProviderId

| Method |
| --- |
| getProviderId():string  获取当前用户的提供者，即第三方认证平台的名称。 |

**Return**

| Type | Description |
| --- | --- |
| string | 用户的提供者。 |

**Sample Code**

```
import auth from '@hw-agconnect/auth';

auth.getCurrentUser().then(user=>{
  if(user){
    let providerId = user.getProviderId();
  }
})
```

#### [h2]getProviderInfo

| Method |
| --- |
| getProviderInfo():Array&lt;`Map&lt;String>`>  获取全部第三方平台的用户信息。 |

**Return**

| Type | Description |
| --- | --- |
| `Array&lt;`Map&lt;String>``> | 当前登录的各个第三方认证平台用户信息的列表。 |

**Sample Code**

```
import auth from '@hw-agconnect/auth';

auth.getCurrentUser().then(user=>{
  if(user){
    let providerInfo = user.getProviderInfo();
  }
})
```

#### [h2]getToken

| Method |
| --- |
| getToken(forceRefresh:boolean):Promise&lt;TokenResult>  获取已登录AGC用户的Access Token信息。 |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| forceRefresh | boolean | 可选，默认为false。是否强制刷新Access Token。 |

**Return**

| Type | Description |
| --- | --- |
|  | 已登录AGC用户的Access Token信息的Promise对象。 |

**Sample Code**

```
import auth from '@hw-agconnect/auth';

auth.getCurrentUser().then((user) => {
  if(user){
    user.getToken(false).then(tokenResult => {
      console.log(`accessToken:\${tokenResult.getString()} ExpirePeriod:\${tokenResult.getExpirePeriod()}`);
    })
  }
})
```

#### [h2]getUserExtra

| Method |
| --- |
| getUserExtra():  获取当前用户的Extra信息。 |

**Return**

| Type | Description |
| --- | --- |
|  | 用户的Extra信息的Promise对象。 |

**Sample Code**

```
import auth from '@hw-agconnect/auth';

auth.getCurrentUser().then(user=>{
  if(user){
    let userExtra = user.getUserExtra();
  }
})
```

#### [h2]isAnonymous

| Method |
| --- |
| isAnonymous():boolean  是否是匿名登录用户。 |

**Return**

| Type | Description |
| --- | --- |
| boolean | 是否是匿名用户。 |

**Sample Code**

```
import auth from '@hw-agconnect/auth';

auth.getCurrentUser().then(user=>{
  if(user){
    let isAnonymous = user.isAnonymous();
  }
})
```

#### [h2]getEmailVerified

| Method |
| --- |
| getEmailVerified():boolean  获取邮箱认证标记。 |

**Return**

| Type | Description |
| --- | --- |
| boolean | 邮箱验证标记。 |

**Sample Code**

```
import auth from '@hw-agconnect/auth';

auth.getCurrentUser().then(user=>{
  if(user){
    let emailVerified = user.getEmailVerified();
  }
})
```

#### [h2]getPasswordSetted

| Method |
| --- |
| getPasswordSetted():boolean  获取密码设置标记。 |

**Return**

| Type | Description |
| --- | --- |
| boolean | 密码设置标记。 |

**Sample Code**

```
import auth from '@hw-agconnect/auth';

auth.getCurrentUser().then(user=>{
  if(user){
    let passwordSetted = user.getPasswordSetted();
  }
})
```

#### [h2]link

| Method |
| --- |
| link(credentialInfo: [CredentialInfo](/docs/distribute/agc/agc-help-auth-api-0000002273777077/agc-help-auth-api-credentialinfo-0000002273621689)):   当前用户关联新的登录方式。 |

![](../img/agc-help-auth-api-authuser-0000002273781645_0.png)

此接口会验证用户Access Token和Refresh Token，请确保用户Refresh Token在有效期内，否则会抛出错误码203817986，表示用户Refresh Token无效。

收到此错误码后，请重新登录应用，获取新的Access Token和Refresh Token。

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| credentialInfo | [CredentialInfo](/docs/distribute/agc/agc-help-auth-api-0000002273777077/agc-help-auth-api-credentialinfo-0000002273621689) | 必选，凭证信息。编译器会根据其中kind自动推断类型，例如其内部kind填为：'phone'，则类型被推断为“PhoneCredentialInfo”。 |

**Return**

| Type | Description |
| --- | --- |
|  | 登录结果信息的Promise对象。 |

![](../img/agc-help-auth-api-authuser-0000002273781645_1.png)

若您在注册或登录时使用了密码，则调用link()接口时无需再传入password字段，否则会导致关联失败。

**Sample Code**

```
import auth from '@hw-agconnect/auth';

// 关联新的email账户
auth.getCurrentUser().then(user => {
  if(user){
    user.link({
      kind: 'email',
      password: '123456',
      email: 'yyyy@xxxx.com',
      verifyCode: 'xxxxxx'
    });
  }
});

// 关联新的手机账户
auth.getCurrentUser().then(user => {
  if(user){
    user.link({
      kind: 'phone',
      phoneNumber: '138********',
      countryCode: '86',
      verifyCode: 'xxxxxx'
    });
  }
});
```

#### [h2]unlink

| Method |
| --- |
| unlink(type: [ProviderType](/docs/distribute/agc/agc-help-auth-api-0000002273777077/agc-help-auth-api-providertype-0000002273781649)):   当前用户解除已关联的登录方式。 |

![](../img/agc-help-auth-api-authuser-0000002273781645_2.png)

此接口会验证用户Access Token和Refresh Token，请确保用户Refresh Token在有效期内，否则会抛出错误码203817986，表示用户Refresh Token无效错误码。

收到此错误码后，请重新登录应用，获取新的Access Token和Refresh Token。

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| type | [ProviderType](/docs/distribute/agc/agc-help-auth-api-0000002273777077/agc-help-auth-api-providertype-0000002273781649) | 必选，渠道类型支持'email' 、 'phone' 、 'hwid' 或 'selfBuild'。 |

**Return**

| Type | Description |
| --- | --- |
|  | 登录结果信息的Promise对象。 |

**Sample Code**

```
import auth from '@hw-agconnect/auth';

auth.getCurrentUser().then(user => {
  if(user){
    user.unlink('phone');
  }
});
```

#### [h2]updateEmail

| Method |
| --- |
| updateEmail(emailInfo: [EmailInfo](/docs/distribute/agc/agc-help-auth-api-0000002273777077/agc-help-auth-api-emailinfo-0000002238618028)): Promise&lt;void>  用户邮箱登录后，更新用户邮箱地址。 |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| emailInfo | [EmailInfo](/docs/distribute/agc/agc-help-auth-api-0000002273777077/agc-help-auth-api-emailinfo-0000002238618028) | Email账号信息类。 |

**Return**

| Type | Description |
| --- | --- |
| `Promise&lt;void>` | void类型的Promise对象。 |

**Sample Code**

```
import auth from '@hw-agconnect/auth';

auth.getCurrentUser().then((user) => {
  if(user){
    user.updateEmail({
      email: 'xxxx@xxx.com',
      lang: 'zh_CN',
      verifyCode: 'xxxxxx'
    })
  }
})
```

#### [h2]updatePhone

| Method |
| --- |
| updatePhone(phoneInfo: [PhoneInfo](/docs/distribute/agc/agc-help-auth-api-0000002273777077/agc-help-auth-api-phoneinfo-0000002273617157)): Promise&lt;void>  用户手机登录后，更新用户手机号码。 |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| phoneInfo | [PhoneInfo](/docs/distribute/agc/agc-help-auth-api-0000002273777077/agc-help-auth-api-phoneinfo-0000002273617157) | 必选，手机号码信息类。 |

**Return**

| Type | Description |
| --- | --- |
| `Promise&lt;void>` | void类型的Promise对象。 |

**Sample Code**

```
import auth from '@hw-agconnect/auth';

auth.getCurrentUser().then((user) => {
  if(user){
    user.updatePhone({
      countryCode: '86',
      phoneNumber: '138********',
      verifyCode: 'xxxxxx',
      lang: 'zh_CN'
    })
  }
})
```

#### [h2]updatePassword

| Method |
| --- |
| updatePassword(passwordInfo: [PasswordInfo](/docs/distribute/agc/agc-help-auth-api-0000002273777077/agc-help-auth-api-passwordinfo-0000002238777840)): Promise&lt;void>  更新当前用户密码。 |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| passwordInfo | [PasswordInfo](/docs/distribute/agc/agc-help-auth-api-0000002273777077/agc-help-auth-api-passwordinfo-0000002238777840) | 必选，更新密码操作相关的密码信息类。 |

**Return**

| Type | Description |
| --- | --- |
| `Promise&lt;void>` | void类型的Promise对象。 |

**Sample Code**

```
import auth from '@hw-agconnect/auth';

auth.getCurrentUser().then((user) => {
  if(user){
    user.updatePassword({
      password: '123456',
      verifyCode: 'xxxxxx',
      providerType: 'phone'
    })
  }
})
```

#### [h2]updateProfile

| Method |
| --- |
| updateProfile(userProfile: [UserProfileInfo](/docs/distribute/agc/agc-help-auth-api-0000002273777077/agc-help-auth-api-userprofileinfo-0000002238782372)): Promise&lt;void>  更新当前用户的个人信息。 |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| userProfile | [UserProfileInfo](/docs/distribute/agc/agc-help-auth-api-0000002273777077/agc-help-auth-api-userprofileinfo-0000002238782372) | 必选，个人账户信息类。 |

**Return**

| Type | Description |
| --- | --- |
| `Promise&lt;void>` | void类型的Promise对象。 |

**Sample Code**

```
import auth from '@hw-agconnect/auth';

auth.getCurrentUser().then(user => {
  if(user){
    user.updateProfile({
      photoUrl: 'https://xxx.png',
      displayName: 'HamonyOSUser'
    })
  }
})
```

#### [h2]userReauthenticate

| Method |
| --- |
| userReauthenticate(signInParam: [SignInParam](/docs/distribute/agc/agc-help-auth-api-0000002273777077/agc-help-auth-api-signinparam-0000002273777089)):   用户登录后重认证。 |

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| signInParam | [SignInParam](/docs/distribute/agc/agc-help-auth-api-0000002273777077/agc-help-auth-api-signinparam-0000002273777089) | 必选，登录操作的参数类。 |

**Return**

| Type | Description |
| --- | --- |
|  | 登录结果信息的Promise对象。 |

**Sample Code**

```
import auth from '@hw-agconnect/auth';

auth.getCurrentUser().then(user => {
  if (!user) {
    return;
  }
  user.userReauthenticate({
    credentialInfo: {
      kind: 'phone',
      password: '123456',
      phoneNumber: '138********',
      countryCode: '86',
      verifyCode: 'xxxxxx'
    }
  });
});
```
