---
title: "联系人服务"
original_url: /docs/dev/atomic-dev/atomic-contacts/atomic-contacts-intro
format: md
upstream_id: dev/atomic-dev/atomic-contacts/atomic-contacts-intro
last_sync: 2026-06-07
sync_hash: e630cbe1
---
Contacts Kit可以帮助开发者轻松实现联系人的增删改查等功能。该Kit提供了一系列API，可以让开发者在应用中快速集成联系人管理功能。

详情请参考[@ohos.contact](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-contact) API。

## 选择联系人

当用户选择联系人的时候，通过Picker的方式，拉起联系人列表，引导用户完成界面操作，接口本身无需申请权限。

1. 导入相关的联系人模块。

   ```
   import contact from '@ohos.contact';
   import { BusinessError } from '@ohos.base';
   ```
2. 调用联系人接口，拉起联系人列表，用户点击对应的联系人后返回。

   ```
   contact.selectContacts({
     isMultiSelect:false
   },(err: BusinessError, data) => {
       if (err) {
         console.error(`selectContact callback: err->${JSON.stringify(err)}`);
           return;
       }
       console.log(`selectContact callback: success data->${JSON.stringify(data)}`);
   });
   ```
3. 完成操作，返回想要的data数据。

## 联系人管理

若需要在应用内实现管理联系人的功能，可以使用permissions接口获取应用对联系人的编辑权限。

1.设置一个需要的Permissions数组变量。

2.执行对应联系人的权限操作。

```
import common from '@ohos.app.ability.common';
import abilityAccessCtrl, { Permissions } from '@ohos.abilityAccessCtrl';
import contact from '@ohos.contact';

@Entry
@Component
struct Contact {
  addContactByPermissions() {
    let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
    const permissions: Array<Permissions> = ['ohos.permission.WRITE_CONTACTS'];
    const contactInfo: contact.Contact = {
      name: { fullName: '王小明' },
      phoneNumbers: [{ phoneNumber: '13912345678' }]
    }
    abilityAccessCtrl.createAtManager().requestPermissionsFromUser(context, permissions).then(() => {
      try {
        contact.addContact(context, contactInfo, (err, data) => {
          if (err) {
            console.log('addContact callback: err->' + JSON.stringify(err));
            return;
          }
          console.log('addContact callback: data->' + JSON.stringify(data));
        })
      } catch (err) {
        console.error('errCode: ' + err.code + ', errMessage: ' + err.message);
      }
    })
  }

  build() {
    Row() {
      Column() {
        Button('添加联系人')
          .onClick(() => {
            this.addContactByPermissions();
          })
      }
      .width('100%')
    }
    .height('100%')
  }
}
```
