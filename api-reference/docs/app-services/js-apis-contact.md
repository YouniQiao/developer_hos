---
title: "@ohos.contact (联系人)"
upstream_id: "harmonyos-references/js-apis-contact"
catalog: "harmonyos-references"
content_hash: "430fc3b9109f"
synced_at: "2026-07-09T01:01:17.966638"
---

# @ohos.contact (联系人)

本模块提供联系人管理能力，包括添加联系人、删除联系人、更新联系人等。

![](./img/note_3.0-zh-cn.png) 本模块首批接口从API version 7开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

#### 导入模块

```
import { contact } from '@kit.ContactsKit';
```

#### contact.addContact10+

addContact(context: Context, contact: Contact, callback: AsyncCallback<number>): void

添加联系人。使用callback异步回调。

元服务API：从API version 12 开始，该接口支持在元服务中使用。

需要权限：ohos.permission.WRITE_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context)。 |
| contact | [Contact](#contact) | 是 | 联系人信息。 |
| callback | AsyncCallback | 是 | 回调函数。当添加联系人成功，err为undefined，data为返回添加的联系人id；否则为错误对象。 |

错误码：

以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[Contacts错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-contacts)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | 1.Parameter error. Possible causes: Mandatory parameters are left unspecified. 2.Failed to open contact portrait file. 3.Internal error. Invalid contact id. Failed to generate contact profile. 4.Internal error. Failed to save contact portrait. |

示例：

![](./img/note_3.0-zh-cn.png) 在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在界面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-usage#获取uiability的上下文信息)。

```
  import { BusinessError } from '@kit.BasicServicesKit';
  import { common } from '@kit.AbilityKit';
  import { contact } from '@kit.ContactsKit';

  // 请在组件内获取context。
  let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
  contact.addContact(context, {
    name: {
      fullName: 'xxx'
    },
    phoneNumbers: [{
      phoneNumber: '138xxxxxxxx'
    }]
  }, (err: BusinessError, data) => {
    if (err) {
      console.error(`Failed to add Contact. Code:${err.code}, message: ${err.message}`);
      return;
    }
    console.info(`Succeeded in adding Contact. data: ${JSON.stringify(data)}`);
  });
```

#### contact.addContact(deprecated)

addContact(contact: Contact, callback: AsyncCallback<number>): void

添加联系人。使用callback异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7 开始支持，从API version 10 开始废弃，建议使用[addContact](#contactaddcontact10)替代。

需要权限：ohos.permission.WRITE_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| contact | [Contact](#contact) | 是 | 联系人信息。 |
| callback | AsyncCallback | 是 | 回调函数。当添加联系人成功，err为undefined，data为返回添加的联系人id；否则为错误对象。 |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';
import { contact } from '@kit.ContactsKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.addContact(context, {
  name: {
    fullName: 'xxx'
  },
  phoneNumbers: [{
    phoneNumber: '138xxxxxxxx'
  }]
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to add Contact. Code:${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in adding Contact. data: ${JSON.stringify(data)}`);
});
```

#### contact.addContact10+

addContact(context: Context, contact: Contact): Promise<number>

添加联系人。使用Promise异步回调。

元服务API：从API version 12 开始，该接口支持在元服务中使用。

需要权限：ohos.permission.WRITE_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context)。 |
| contact | [Contact](#contact) | 是 | 联系人信息。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，返回添加的联系人id。 |

错误码：

以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[Contacts错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-contacts)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | 1.Parameter error. Possible causes: Mandatory parameters are left unspecified. 2.Failed to open contact portrait file. 3.Internal error. Invalid contact id. Failed to generate contact profile. 4.Internal error. Failed to save contact portrait. |

示例：

![](./img/note_3.0-zh-cn.png) 在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在界面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-usage#获取uiability的上下文信息)。

```
  import { contact } from '@kit.ContactsKit';
  import { common } from '@kit.AbilityKit';

  // 请在组件内获取context。
  let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
  let promise = contact.addContact(context, {
    name: {
      fullName: 'xxx'
    },
    phoneNumbers: [{
      phoneNumber: '138xxxxxxxx'
    }]
  });
  promise.then((data) => {
    console.info(`Succeeded in adding Contact. data: ${JSON.stringify(data)}`);
  });
```

#### contact.addContact(deprecated)

addContact(contact: Contact): Promise<number>

添加联系人。使用Promise异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7 开始支持，从API version 10 开始废弃，建议使用[addContact](#contactaddcontact10-1)替代。

需要权限：ohos.permission.WRITE_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| contact | [Contact](#contact) | 是 | 联系人信息。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，返回添加的联系人id。 |

示例：

```
import { contact } from '@kit.ContactsKit';

// Promise 成功时返回添加成功后的数据。
let promise = contact.addContact({
  name: {
    fullName: 'xxx'
  },
  phoneNumbers: [{
    phoneNumber: '138xxxxxxxx'
  }]
});
// 成功回调：Promise resolve 时执行
promise.then((data) => {
  console.info(`Succeeded in adding Contact. data: ${JSON.stringify(data)}`);
});
```

#### contact.deleteContact10+

deleteContact(context: Context, key: string, callback: AsyncCallback<void>): void

删除联系人。使用callback异步回调。

需要权限：ohos.permission.WRITE_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context)。 |
| key | string | 是 | 联系人的唯一查询键key，一个联系人对应一个key，可以通过[queryKey](#contactquerykey10)获取。 |
| callback | AsyncCallback | 是 | 回调函数。当删除联系人成功，err为undefined，否则为错误对象。 |

错误码：

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

示例：

![](./img/note_3.0-zh-cn.png) 在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在界面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-usage#获取uiability的上下文信息)。

```
  import { BusinessError } from '@kit.BasicServicesKit';
  import { contact } from '@kit.ContactsKit';
  import { common } from '@kit.AbilityKit';

 // 通过selectContacts接口选择联系人。
  contact.selectContacts().then((data) => {
    // 请在组件内获取context。
    let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
    // 第二个参数传入选择联系人的key
    contact.deleteContact(context, data[0].key, (err: BusinessError) => {
      if (err) {
        console.error(`Failed to delete Contact. Code: ${err.code}, message: ${err.message}`);
        return;
      }
      console.info('Succeeded in deleting Contact.');
    });
  });
```

#### contact.deleteContact(deprecated)

deleteContact(key: string, callback: AsyncCallback<void>): void

删除联系人。使用callback异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7 开始支持，从API version 10 开始废弃，建议使用[deleteContact](#contactdeletecontact10)替代。

需要权限：ohos.permission.WRITE_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | 联系人的唯一查询键key，一个联系人对应一个key，可以通过[queryKey](#contactquerykey10)获取。 |
| callback | AsyncCallback | 是 | 回调函数。当删除联系人成功，err为undefined，否则为错误对象。 |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

// 通过selectContacts接口选择联系人。
contact.selectContacts().then((data) => {
  // 请在组件内获取context。
  let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
  // 第一个参数传入选择联系人的key
  contact.deleteContact(data[0].key, (err: BusinessError) => {
    if (err) {
      console.error(`Failed to delete Contact. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('Succeeded in deleting Contact.');
  });
});
```

#### contact.deleteContact10+

deleteContact(context: Context, key: string): Promise<void>

删除联系人。使用Promise异步回调。

需要权限：ohos.permission.WRITE_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context)。 |
| key | string | 是 | 联系人的唯一查询键key，一个联系人对应一个key，可以通过[queryKey](#contactquerykey10)获取。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。无返回结果的Promise对象。 |

错误码：

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

示例：

![](./img/note_3.0-zh-cn.png) 在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在界面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-usage#获取uiability的上下文信息)。

```
import { common } from '@kit.AbilityKit';
import { contact } from '@kit.ContactsKit';

// 通过selectContacts接口选择联系人。
contact.selectContacts().then((data) => {
  // 请在组件内获取context。
  let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
  // 第二个参数传入选择联系人的key
  let promise = contact.deleteContact(context, data[0].key);
  promise.then(() => {
    console.info(`Succeeded in deleting Contact.`);
  });
});
```

#### contact.deleteContact(deprecated)

deleteContact(key: string): Promise<void>

删除联系人。使用Promise异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7 开始支持，从API version 10 开始废弃，建议使用[deleteContact](#contactdeletecontact10-1)替代。

需要权限：ohos.permission.WRITE_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | 联系人的唯一查询键key值，一个联系人对应一个key，可以通过[queryKey](#contactquerykey10)获取。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。无返回结果的Promise对象。 |

示例：

```
import { contact } from '@kit.ContactsKit';

// 通过selectContacts接口选择联系人。
contact.selectContacts().then((data) => {
  // 第一个参数传入选择联系人的key
  let promise = contact.deleteContact(data[0].key);
  promise.then(() => {
    console.info(`Succeeded in deleting Contact.`);
  });
});
```

#### contact.updateContact10+

updateContact(context: Context, contact: Contact, callback: AsyncCallback<void>): void

更新联系人。使用callback异步回调。

需要权限：ohos.permission.WRITE_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context)。 |
| contact | [Contact](#contact) | 是 | 联系人信息。id必填，可通过[selectContacts](#contactselectcontacts10-1)接口获取。 |
| callback | AsyncCallback | 是 | 回调函数。当更新联系人成功，err为undefined，否则为错误对象。 |

错误码：

以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[Contacts错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-contacts)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | 1.Parameter error. Possible causes: Mandatory parameters are left unspecified. 2.Failed to open contact portrait file. 3.Internal error. Invalid contact id. Failed to generate contact profile. 4.Internal error. Failed to save contact portrait. 5.Internal error. Invalid contact rawId. |

示例：

![](./img/note_3.0-zh-cn.png) 在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在界面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';
import { common } from '@kit.AbilityKit';

// 通过selectContacts接口选择联系人。
contact.selectContacts().then((data) => {
  // 请在组件内获取context。
  let context = this.getUIContext().getHostContext() as common.UIAbilityContext;

  contact.updateContact(context, {
    id: data[0].id, // 选择联系人的id。
    name: {
      fullName: 'xxx'
    },
    phoneNumbers: [{
      phoneNumber: '138xxxxxxxx'
    }]
  }, (err: BusinessError) => {
    if (err) {
      console.error(`Failed to update Contact. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('Succeeded in updating Contact.');
  });
});
```

#### contact.updateContact(deprecated)

updateContact(contact: Contact, callback: AsyncCallback<void>): void

更新联系人。使用callback异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7 开始支持，从API version 10 开始废弃，建议使用[updateContact](#contactupdatecontact10)替代。

需要权限：ohos.permission.WRITE_CONTACTS和ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| contact | [Contact](#contact) | 是 | 联系人信息。id必填，可通过[selectContacts](#contactselectcontacts10-1)接口获取。 |
| callback | AsyncCallback | 是 | 回调函数。当更新联系人成功，err为undefined，否则为错误对象。 |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

// 通过selectContacts接口选择联系人。
contact.selectContacts().then((data) => {
  // 请在组件内获取context。
  let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
  contact.updateContact(context, {
    id: data[0].id, // 选择联系人的id。
    name: {
      fullName: 'xxx'
    },
    phoneNumbers: [{
      phoneNumber: '138xxxxxxxx'
    }]
  }, (err: BusinessError) => {
    if (err) {
      console.error(`Failed to update Contact. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('Succeeded in updating Contact.');
  });
});
```

#### contact.updateContact10+

updateContact(context: Context, contact: Contact, attrs: ContactAttributes, callback: AsyncCallback<void>): void

更新联系人（支持传入联系人的属性列表）。使用callback异步回调。

需要权限：ohos.permission.WRITE_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context)。 |
| contact | [Contact](#contact) | 是 | 联系人信息。id必填，可通过[selectContacts](#contactselectcontacts10-1)接口获取。 |
| attrs | [ContactAttributes](#contactattributes) | 是 | 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。 |
| callback | AsyncCallback | 是 | 回调函数。当更新联系人成功，err为undefined，否则为错误对象。 |

错误码：

以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[Contacts错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-contacts)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | 1.Parameter error. Possible causes: Mandatory parameters are left unspecified. 2.Failed to open contact portrait file. 3.Internal error. Invalid contact id. Failed to generate contact profile. 4.Internal error. Failed to save contact portrait. 5.Internal error. Invalid contact rawId. |

示例：

![](./img/note_3.0-zh-cn.png) 在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在界面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';
import { common } from '@kit.AbilityKit';

// 通过selectContacts接口选择联系人。
contact.selectContacts().then((data) => {
  // 请在组件内获取context。
  let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
  contact.updateContact(context, {
    id: data[0].id, // 选择联系人的id。
    name: {
      fullName: 'xxx'
    },
    phoneNumbers: [{
      phoneNumber: '138xxxxxxxx'
    }]
  }, {
    attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
  }, (err: BusinessError) => {
    if (err) {
      console.error(`Failed to update Contact. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('Succeeded in updating Contact.');
  });
});
```

#### contact.updateContact(deprecated)

updateContact(contact: Contact, attrs: ContactAttributes, callback: AsyncCallback<void>): void

更新联系人，支持传入联系人的属性列表。使用callback异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7 开始支持，从API version 10 开始废弃，建议使用[updateContact](#contactupdatecontact10-1)替代。

需要权限：ohos.permission.WRITE_CONTACTS和ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| contact | [Contact](#contact) | 是 | 联系人信息。id必填，可通过[selectContacts](#contactselectcontacts10-1)接口获取。 |
| attrs | [ContactAttributes](#contactattributes) | 是 | 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。 |
| callback | AsyncCallback | 是 | 回调函数。当更新联系人成功，err为undefined，否则为错误对象。 |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

// 通过selectContacts接口选择联系人。
contact.selectContacts().then((data) => {
  contact.updateContact({
    id: data[0].id, // 选择联系人的id。
    name: {
      fullName: 'xxx'
    },
    phoneNumbers: [{
      phoneNumber: '138xxxxxxxx'
    }]
  }, {
    attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
  }, (err: BusinessError) => {
    if (err) {
      console.error(`Failed to update Contact. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('Succeeded in updating Contact.');
  });
});
```

#### contact.updateContact10+

updateContact(context: Context, contact: Contact, attrs?: ContactAttributes): Promise<void>

更新联系人（支持传入联系人的属性列表）。使用Promise异步回调。

需要权限：ohos.permission.WRITE_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context)。 |
| contact | [Contact](#contact) | 是 | 联系人信息。id必填，可通过[selectContacts](#contactselectcontacts10-1)接口获取。 |
| attrs | [ContactAttributes](#contactattributes) | 否 | 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。无返回结果的Promise对象。 |

错误码：

以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[Contacts错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-contacts)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | 1.Parameter error. Possible causes: Mandatory parameters are left unspecified. 2.Failed to open contact portrait file. 3.Internal error. Invalid contact id. Failed to generate contact profile. 4.Internal error. Failed to save contact portrait. 5.Internal error. Invalid contact rawId. |

示例：

![](./img/note_3.0-zh-cn.png) 在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在界面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-usage#获取uiability的上下文信息)。

```
  import { contact } from '@kit.ContactsKit';
  import { common } from '@kit.AbilityKit';

  // 通过selectContacts接口选择联系人。
  contact.selectContacts().then((data) => {
    // 请在组件内获取context。
    let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
    let promise = contact.updateContact(context, {
      id: data[0].id, // 选择联系人的id。
      name: {
        fullName: 'xxx'
      },
      phoneNumbers: [{
        phoneNumber: '138xxxxxxxx'
      }]
    }, {
      attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
    });
    promise.then(() => {
      console.info('Succeeded in updating Contact.');
    });
  });
```

#### contact.updateContact(deprecated)

updateContact(contact: Contact, attrs?: ContactAttributes): Promise<void>

更新联系人，支持传入联系人的属性列表。使用Promise异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7 开始支持，从API version 10 开始废弃，建议使用[updateContact](#contactupdatecontact10-2)替代。

需要权限：ohos.permission.WRITE_CONTACTS和ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| contact | [Contact](#contact) | 是 | 联系人信息。id必填，可通过[selectContacts](#contactselectcontacts10-1)接口获取。 |
| attrs | [ContactAttributes](#contactattributes) | 否 | 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。无返回结果的Promise对象。 |

示例：

```
import { contact } from '@kit.ContactsKit';

// 通过selectContacts接口选择联系人。
contact.selectContacts().then((data) => {
  let promise = contact.updateContact({
    id: data[0].id, // 选择联系人的id。
    name: {
      fullName: 'xxx'
    },
    phoneNumbers: [{
      phoneNumber: '138xxxxxxxx'
    }]
  }, {
    attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
  });
  promise.then(() => {
    console.info('Succeeded in updating Contact.');
  });
});
```

#### contact.isLocalContact10+

isLocalContact(context: Context, id: number, callback: AsyncCallback<boolean>): void

判断当前联系人id是否在电话簿中。使用callback异步回调。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context)。 |
| id | number | 是 | 联系人对象的id属性，一个联系人对应一个id。 |
| callback | AsyncCallback | 是 | 回调函数。成功返回布尔值，true代表联系人id在本地电话簿中，false则代表联系人id不在本地电话簿中；失败返回具体的错误码信息。 |

错误码：

以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Parameter verification failed. |

示例：

![](./img/note_3.0-zh-cn.png) 在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在界面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.isLocalContact(context, 1, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to isLocalContact. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in isLocalContact. data->${JSON.stringify(data)}`);
});
```

#### contact.isLocalContact(deprecated)

isLocalContact(id: number, callback: AsyncCallback<boolean>): void

判断当前联系人id是否在电话簿中。使用callback异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7 开始支持，从API version 10 开始废弃，建议使用[isLocalContact](#contactislocalcontact10)替代。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | number | 是 | 联系人对象的id属性，一个联系人对应一个id。 |
| callback | AsyncCallback | 是 | 回调函数。成功返回布尔值，true代表联系人id在本地电话簿中，false则代表联系人id不在本地电话簿中；失败返回具体的错误码信息。 |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

// 判断id为1的联系人是否在本地电话簿中
contact.isLocalContact(1, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to isLocalContact. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in isLocalContact. data->${JSON.stringify(data)}`);
});
```

#### contact.isLocalContact10+

isLocalContact(context: Context, id: number): Promise<boolean>

判断当前联系人id是否在电话簿中。使用Promise异步回调。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context)。 |
| id | number | 是 | 联系人对象的id属性，一个联系人对应一个id。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。返回true表示联系人id在本地电话簿中，返回false表示联系人id不在本地电话簿中。 |

错误码：

以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Parameter verification failed. |

示例：

![](./img/note_3.0-zh-cn.png) 在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在界面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-usage#获取uiability的上下文信息)。

```
  import { contact } from '@kit.ContactsKit';
  import { common } from '@kit.AbilityKit';

  // 请在组件内获取context。
  let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
  let promise = contact.isLocalContact(context, 1);
  promise.then((data) => {
    console.info(`Succeeded in isLocalContact. data->${JSON.stringify(data)}`);
  });
```

#### contact.isLocalContact(deprecated)

isLocalContact(id: number): Promise<boolean>

判断当前联系人id是否在电话簿中。使用Promise异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7 开始支持，从API version 10 开始废弃，建议使用[isLocalContact](#contactislocalcontact10-1)替代。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | number | 是 | 联系人对象的id属性，一个联系人对应一个id。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。返回true表示联系人id在本地电话簿中，返回false表示联系人id不在本地电话簿中。 |

示例：

```
import { contact } from '@kit.ContactsKit';

// 判断id为1的联系人是否在本地电话簿中
let promise = contact.isLocalContact(1);
promise.then((data) => {
  console.info(`Succeeded in isLocalContact. data->${JSON.stringify(data)}`);
});
```

#### contact.isMyCard10+

isMyCard(context: Context, id: number, callback: AsyncCallback<boolean>): void

判断是否为“我的名片”。使用callback异步回调。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context)。 |
| id | number | 是 | 名片对象的id属性。 |
| callback | AsyncCallback | 是 | 回调函数。成功返回是否为“我的名片”的布尔值。true代表的是“我的名片”，false代表不是；失败时则返回错误码。 |

错误码：

以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Parameter verification failed. |

示例：

![](./img/note_3.0-zh-cn.png) 在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在界面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-usage#获取uiability的上下文信息)。

```
  import { BusinessError } from '@kit.BasicServicesKit';
  import { contact } from '@kit.ContactsKit';
  import { common } from '@kit.AbilityKit';

  // 请在组件内获取context。
  let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
  contact.isMyCard(context, 1, (err: BusinessError, data) => {
    if (err) {
      console.error(`Failed to isMyCard. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info(`Succeeded in isMyCard. data->${JSON.stringify(data)}`);
  });
```

#### contact.isMyCard(deprecated)

isMyCard(id: number, callback: AsyncCallback<boolean>): void

判断是否为“我的名片”。使用callback异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7 开始支持，从API version 10 开始废弃，建议使用[isMyCard](#contactismycard10)替代。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | number | 是 | 名片对象的id属性。 |
| callback | AsyncCallback | 是 | 回调函数。成功返回是否为“我的名片”的布尔值。true代表的是“我的名片”，false则代表不是；失败返回具体的错误码信息。 |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

// 判断id为1的名片是否为“我的名片”
contact.isMyCard(1, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to isMyCard. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in isMyCard. data->${JSON.stringify(data)}`);
});
```

#### contact.isMyCard10+

isMyCard(context: Context, id: number): Promise<boolean>

判断是否为“我的名片”。使用Promise异步回调。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context)。 |
| id | number | 是 | 名片对象的id属性。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。返回true表示是“我的名片”，返回false代表不是。 |

错误码：

以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Parameter verification failed. |

示例：

![](./img/note_3.0-zh-cn.png) 在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在界面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-usage#获取uiability的上下文信息)。

```
  import { contact } from '@kit.ContactsKit';
  import { common } from '@kit.AbilityKit';

  // 请在组件内获取context。
  let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
  let promise = contact.isMyCard(context, 1);
  promise.then((data) => {
    console.info(`Succeeded in isMyCard. data->${JSON.stringify(data)}`);
  });
```

#### contact.isMyCard(deprecated)

isMyCard(id: number): Promise<boolean>

判断是否为“我的名片”。使用Promise异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7 开始支持，从API version 10 开始废弃，建议使用[isMyCard](#contactismycard10-1)替代。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | number | 是 | 名片对象的id属性。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。返回true表示是“我的名片”，返回false代表不是。 |

示例：

```
import { contact } from '@kit.ContactsKit';

// 判断id为1的名片是否为“我的名片”
let promise = contact.isMyCard(1);
promise.then((data) => {
  console.info(`Succeeded in isMyCard. data->${JSON.stringify(data)}`);
});
```

#### contact.queryMyCard10+

queryMyCard(context: Context, callback: AsyncCallback<Contact>): void

查询“我的名片”。使用callback异步回调。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context)。 |
| callback | AsyncCallback | 是 | 回调函数。当查询“我的名片”成功，err为undefined，data为获取到的“我的名片”；否则为错误对象。 |

错误码：

以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

示例：

![](./img/note_3.0-zh-cn.png) 在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在界面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-usage#获取uiability的上下文信息)。

```
  import { BusinessError } from '@kit.BasicServicesKit';
  import { contact } from '@kit.ContactsKit';
  import { common } from '@kit.AbilityKit';

  // 请在组件内获取context。
  let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
  contact.queryMyCard(context, (err: BusinessError, data) => {
    if (err) {
      console.error(`Failed to query My Card. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info(`Succeeded in querying My Card. data->${JSON.stringify(data)}`);
  });
```

#### contact.queryMyCard(deprecated)

queryMyCard(callback: AsyncCallback<Contact>): void

查询“我的名片”。使用callback异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryMyCard](#contactquerymycard10)替代。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback | 是 | 回调函数。当查询“我的名片”成功，err为undefined，data为获取到的“我的名片”；否则为错误对象。 |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

// 回调函数，查询“我的名片”
contact.queryMyCard((err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query My Card. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying My Card. data->${JSON.stringify(data)}`);
});
```

#### contact.queryMyCard10+

queryMyCard(context: Context, attrs: ContactAttributes, callback: AsyncCallback<Contact>): void

查询“我的名片”（支持传入联系人的属性列表）。使用callback异步回调。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context)。 |
| attrs | [ContactAttributes](#contactattributes) | 是 | 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。 |
| callback | AsyncCallback | 是 | 回调函数。当查询“我的名片”成功，err为undefined，data为获取到的“我的名片”；否则为错误对象。 |

错误码：

以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

示例：

![](./img/note_3.0-zh-cn.png) 在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在界面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-usage#获取uiability的上下文信息)。

```
  import { BusinessError } from '@kit.BasicServicesKit';
  import { contact } from '@kit.ContactsKit';
  import { common } from '@kit.AbilityKit';

  // 请在组件内获取context。
  let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
  contact.queryMyCard(context, {
    attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
  }, (err: BusinessError, data) => {
    if (err) {
      console.error(`Failed to query My Card. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info(`Succeeded in querying My Card. data->${JSON.stringify(data)}`);
  });
```

#### contact.queryMyCard(deprecated)

queryMyCard(attrs: ContactAttributes, callback: AsyncCallback<Contact>): void

查询“我的名片”（支持传入联系人的属性列表）。使用callback异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryMyCard](#contactquerymycard10-1)替代。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| attrs | [ContactAttributes](#contactattributes) | 是 | 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。 |
| callback | AsyncCallback | 是 | 回调函数。当查询“我的名片”成功，err为undefined，data为获取到的“我的名片”；否则为错误对象。 |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

// 传入联系人的属性列表，查询“我的名片”
contact.queryMyCard({
  attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query My Card. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying My Card. data->${JSON.stringify(data)}`);
});
```

#### contact.queryMyCard10+

queryMyCard(context: Context, attrs?: ContactAttributes): Promise<Contact>

查询“我的名片”（支持传入联系人的属性列表）。使用Promise异步回调。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context)。 |
| attrs | [ContactAttributes](#contactattributes) | 否 | 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。返回“我的名片”联系人对象。 |

错误码：

以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

示例：

![](./img/note_3.0-zh-cn.png) 在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在界面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-usage#获取uiability的上下文信息)。

```
  import { contact } from '@kit.ContactsKit';
  import { common } from '@kit.AbilityKit';

  // 请在组件内获取context。
  let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
  let promise = contact.queryMyCard(context, {
    attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
  });
  promise.then((data) => {
    console.info(`Succeeded in querying My Card. data->${JSON.stringify(data)}`);
  });
```

#### contact.queryMyCard(deprecated)

queryMyCard(attrs?: ContactAttributes): Promise<Contact>

查询“我的名片”（支持传入联系人的属性列表）。使用Promise异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryMyCard](#contactquerymycard10-2)替代。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| attrs | [ContactAttributes](#contactattributes) | 否 | 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。返回“我的名片”联系人对象。 |

示例：

```
import { contact } from '@kit.ContactsKit';

// 回调函数，传入联系人的属性列表，查询“我的名片”。
let promise = contact.queryMyCard({
  attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
});
promise.then((data) => {
  console.info(`Succeeded in querying My Card. data->${JSON.stringify(data)}`);
});
```

#### contact.selectContact(deprecated)

selectContact(callback: AsyncCallback<Array<Contact>>): void

调用选择联系人接口，打开选择联系人UI界面。使用callback异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7 开始支持，从API version 10 开始废弃，建议使用[selectContacts](#contactselectcontacts10)替代。

系统能力：SystemCapability.Applications.Contacts

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback> | 是 | 回调函数。当调用选择联系人接口成功，err为undefined，data为选择的联系人数组；否则为错误对象。 |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

// 打开选择联系人UI界面
contact.selectContact((err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to select Contact. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in selecting Contact. data->${JSON.stringify(data)}`);
});
```

#### contact.selectContact(deprecated)

selectContact(): Promise<Array<Contact>>

调用选择联系人接口，打开选择联系人UI界面。使用Promise异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7 开始支持，从API version 10 开始废弃，建议使用[selectContacts](#contactselectcontacts10-1)替代。

系统能力：SystemCapability.Applications.Contacts

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise> | Promise对象。返回选择的联系人数组对象。 |

示例：

```
import { contact } from '@kit.ContactsKit';

// 打开选择联系人UI界面
let promise = contact.selectContact();
promise.then((data) => {
  console.info(`Succeeded in selecting Contact. data->${JSON.stringify(data)}`);
});
```

#### contact.selectContacts10+

selectContacts(callback: AsyncCallback<Array<Contact>>): void

调用选择联系人接口，打开选择联系人UI界面。使用callback异步回调。

元服务API：从API version 11 开始，该接口支持在元服务中使用。

系统能力：SystemCapability.Applications.Contacts

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback> | 是 | 回调函数。当调用选择联系人接口成功，err为undefined，data为选择的联系人数组；否则为错误对象。 |

错误码：

以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

// 打开选择联系人UI界面
contact.selectContacts((err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to select Contacts. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in selecting Contacts. data->${JSON.stringify(data)}`);
});
```

#### contact.selectContacts10+

selectContacts(): Promise<Array<Contact>>

调用选择联系人接口，打开选择联系人UI界面。使用Promise异步回调。

元服务API：从API version 11 开始，该接口支持在元服务中使用。

系统能力：SystemCapability.Applications.Contacts

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise> | Promise对象。返回选择的联系人数组对象。 |

示例：

```
import { contact } from '@kit.ContactsKit';

// 打开选择联系人UI界面
let promise = contact.selectContacts();
promise.then((data) => {
  console.info(`Succeeded in selecting Contacts. data->${JSON.stringify(data)}`);
});
```

#### contact.selectContacts10+

selectContacts(options: ContactSelectionOptions, callback: AsyncCallback<Array<Contact>>): void

调用选择联系人接口，打开选择联系人UI界面（选择联系人时支持传入筛选条件[ContactSelectionOptions](#contactselectionoptions10)）。使用callback异步回调。

元服务API：从API version 11 开始，该接口支持在元服务中使用。

系统能力：SystemCapability.Applications.Contacts

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | [ContactSelectionOptions](#contactselectionoptions10) | 是 | 选择联系人时的筛选条件，表示单选或多选。 |
| callback | AsyncCallback> | 是 | 回调函数。当调用选择联系人接口成功，err为undefined，data为选择的联系人数组；否则为错误对象。 |

错误码：

以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

// 打开选择联系人UI界面，支持选择一个联系人
contact.selectContacts({
  isMultiSelect:false
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to select Contacts. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in selecting Contacts. data->${JSON.stringify(data)}`);
});
```

#### contact.selectContacts10+

selectContacts(options: ContactSelectionOptions): Promise<Array<Contact>>

调用选择联系人接口，打开选择联系人UI界面（选择联系人时支持传入筛选条件）。使用Promise异步回调。

元服务API：从API version 11 开始，该接口支持在元服务中使用。

系统能力：SystemCapability.Applications.Contacts

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | [ContactSelectionOptions](#contactselectionoptions10) | 是 | 选择联系人时的筛选条件，用于指定是单选还是多选。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise> | Promise对象。返回选择的联系人数组对象。 |

错误码：

以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

示例：

```
import { contact } from '@kit.ContactsKit';

// 打开选择联系人UI界面，支持选择一个联系人
let promise = contact.selectContacts({isMultiSelect:false});
promise.then((data) => {
  console.info(`Succeeded in selecting Contacts. data->${JSON.stringify(data)}`);
});
```

#### contact.queryContact10+

queryContact(context: Context, key: string, callback: AsyncCallback<Contact>): void

根据key查询联系人。使用callback异步回调。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context)。 |
| key | string | 是 | 联系人的唯一查询键key，是新建联系人时系统自动生成的唯一标识，一个联系人对应一个key，可以通过[queryKey](#contactquerykey10)获取。 |
| callback | AsyncCallback | 是 | 回调函数。当查询联系人成功，err为undefined，data为查询的联系人对象；否则为错误对象。 |

错误码：

以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

示例：

![](./img/note_3.0-zh-cn.png) 在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在界面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.queryContact(context, 'xxx', (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contact. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contact. data->${JSON.stringify(data)}`);
});
```

#### contact.queryContact(deprecated)

queryContact(key: string, callback: AsyncCallback<Contact>): void

根据联系人唯一标识符key查询联系人。使用callback异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryContact](#contactquerycontact10)替代。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | 联系人的唯一查询键key，是新建联系人时系统自动生成的唯一标识，一个联系人对应一个key，可以通过[queryKey](#contactquerykey10)获取。 |
| callback | AsyncCallback | 是 | 回调函数。当查询联系人成功，err为undefined，data为查询的联系人对象；否则为错误对象。 |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

// 查询key='xxx'的联系人
contact.queryContact('xxx', (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contact. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contact. data->${JSON.stringify(data)}`);
});
```

#### contact.queryContact10+

queryContact(context: Context, key: string, holder: Holder, callback: AsyncCallback<Contact>): void

根据key和holder查询联系人。使用callback异步回调。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context)。 |
| key | string | 是 | 联系人的唯一查询键key，是新建联系人时系统自动生成的唯一标识，一个联系人对应一个key，可以通过[queryKey](#contactquerykey10)获取。 |
| holder | [Holder](#holder) | 是 | 创建联系人的应用信息类，如果传入参数为空则默认使用系统联系人应用查询。 |
| callback | AsyncCallback | 是 | 回调函数。当查询联系人成功，err为undefined，data为查询的联系人对象；否则为错误对象。 |

错误码：

以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

示例：

![](./img/note_3.0-zh-cn.png) 在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在界面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.queryContact(context, 'xxx', {
  holderId: 1,
  bundleName: '',
  displayName: ''
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contact. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contact. data->${JSON.stringify(data)}`);
});
```

#### contact.queryContact(deprecated)

queryContact(key: string, holder: Holder, callback: AsyncCallback<Contact>): void

根据key和holder查询联系人。使用callback异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryContact](#contactquerycontact10-1)替代。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | 联系人的唯一查询键key，是新建联系人时系统自动生成的唯一标识，一个联系人对应一个key，可以通过[queryKey](#contactquerykey10)获取。 |
| holder | [Holder](#holder) | 是 | 创建联系人的应用信息类，如果传入参数为空则默认使用系统联系人应用查询。 |
| callback | AsyncCallback | 是 | 回调函数。当查询联系人成功，err为undefined，data为查询的联系人对象；否则为错误对象。 |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

// 查询key='xxx'，holderId为1的联系人
contact.queryContact('xxx', {
  holderId: 1,
  bundleName: "",
  displayName: ""
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contact. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contact. data->${JSON.stringify(data)}`);
});
```

#### contact.queryContact10+

queryContact(context: Context, key: string, attrs: ContactAttributes, callback: AsyncCallback<Contact>): void

根据key和attrs查询联系人。使用callback异步回调。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context)。 |
| key | string | 是 | 联系人的唯一查询键key，是新建联系人时系统自动生成的唯一标识，一个联系人对应一个key，可以通过[queryKey](#contactquerykey10)获取。 |
| attrs | [ContactAttributes](#contactattributes) | 是 | 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。 |
| callback | AsyncCallback | 是 | 回调函数。当查询联系人成功，err为undefined，data为查询的联系人对象；否则为错误对象。 |

错误码：

以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

示例：

![](./img/note_3.0-zh-cn.png) 在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在界面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.queryContact(context, 'xxx', {
  attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contact. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contact. data->${JSON.stringify(data)}`);
});
```

#### contact.queryContact(deprecated)

queryContact(key: string, attrs: ContactAttributes, callback: AsyncCallback<Contact>): void

根据key和指定属性(attrs)查询联系人。使用callback异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryContact](#contactquerycontact10-2)替代。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | 联系人的唯一查询键key，是新建联系人时系统自动生成的唯一标识，一个联系人对应一个key，可以通过[queryKey](#contactquerykey10)获取。 |
| attrs | [ContactAttributes](#contactattributes) | 是 | 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。 |
| callback | AsyncCallback | 是 | 回调函数。当查询联系人成功，err为undefined，data为查询的联系人对象；否则为错误对象。 |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

// 传入key='xxx'以及联系人的属性列表查询
contact.queryContact('xxx', {
  attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contact. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contact. data->${JSON.stringify(data)}`);
});
```

#### contact.queryContact10+

queryContact(context: Context, key: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Contact>): void

根据key、holder和attrs查询联系人。使用callback异步回调。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context)。 |
| key | string | 是 | 联系人的唯一查询键key，是新建联系人时系统自动生成的唯一标识，一个联系人对应一个key，可以通过[queryKey](#contactquerykey10)获取。 |
| holder | [Holder](#holder) | 是 | 创建联系人的应用信息类，如果传入参数为空则默认使用系统联系人应用查询。 |
| attrs | [ContactAttributes](#contactattributes) | 是 | 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。 |
| callback | AsyncCallback | 是 | 回调函数。当查询联系人成功，err为undefined，data为查询的联系人对象；否则为错误对象。 |

错误码：

以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

示例：

![](./img/note_3.0-zh-cn.png) 在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在界面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-usage#获取uiability的上下文信息)。

```
  import { BusinessError } from '@kit.BasicServicesKit';
  import { contact } from '@kit.ContactsKit';
  import { common } from '@kit.AbilityKit';

  // 请在组件内获取context。
  let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
  contact.queryContact(context, 'xxx', {
    holderId: 1,
    bundleName: '',
    displayName: ''
  }, {
    attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
  }, (err: BusinessError, data) => {
    if (err) {
      console.error(`Failed to query Contact. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info(`Succeeded in querying Contact. data->${JSON.stringify(data)}`);
  });
```

#### contact.queryContact(deprecated)

queryContact(key: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Contact>): void

根据key、holder和attrs查询联系人。使用callback异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryContact](#contactquerycontact10-3)替代。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | 联系人的唯一查询键key，是新建联系人时系统自动生成的唯一标识，一个联系人对应一个key，可以通过[queryKey](#contactquerykey10)获取。 |
| holder | [Holder](#holder) | 是 | 创建联系人的应用信息类，为空则默认使用系统联系人应用查询。 |
| attrs | [ContactAttributes](#contactattributes) | 是 | 联系人的属性列表，当该参数为空时，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。 |
| callback | AsyncCallback | 是 | 回调函数。当查询联系人成功，err为undefined，data为查询的联系人对象；否则为错误对象。 |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

// 查询key,holder,attrs满足条件的联系人
contact.queryContact('xxx', {
  holderId: 1,
  bundleName: "",
  displayName: ""
}, {
  attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contact. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contact. data->${JSON.stringify(data)}`);
});
```

#### contact.queryContact10+

queryContact(context: Context, key: string, holder?: Holder, attrs?: ContactAttributes): Promise<Contact>

根据key、holder和attrs查询联系人。使用Promise异步回调。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context)。 |
| key | string | 是 | 联系人的唯一查询键key，是新建联系人时系统自动生成的唯一标识，一个联系人对应一个key，可以通过[queryKey](#contactquerykey10)获取。 |
| holder | [Holder](#holder) | 否 | 创建联系人的应用信息类，不传该参数，则默认使用系统联系人应用查询。 |
| attrs | [ContactAttributes](#contactattributes) | 否 | 联系人的属性列表，不传该参数，则默认查询所有联系人属性。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。返回查询到的联系人对象。 |

错误码：

以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

示例：

![](./img/note_3.0-zh-cn.png) 在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在界面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-usage#获取uiability的上下文信息)。

```
import { contact } from '@kit.ContactsKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let promise = contact.queryContact(context, 'xxx', {
  holderId: 1,
  bundleName: '',
  displayName: ''
}, {
  attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
});
promise.then((data) => {
  console.info(`Succeeded in querying Contact. data->${JSON.stringify(data)}`);
});
```

#### contact.queryContact(deprecated)

queryContact(key: string, holder?: Holder, attrs?: ContactAttributes): Promise<Contact>

根据key、holder和attrs查询联系人。使用Promise异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryContact](#contactquerycontact10-4)替代。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | 联系人的唯一查询键key，是新建联系人时自动生成的唯一标识，一个联系人对应一个key，可以通过[queryKey](#contactquerykey10)获取。 |
| holder | [Holder](#holder) | 否 | 创建联系人的应用信息类，不传该参数则默认使用系统联系人应用查询。 |
| attrs | [ContactAttributes](#contactattributes) | 否 | 联系人的属性列表，不传默认查询所有联系人属性。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。返回查询到的联系人对象。 |

示例：

```
import { contact } from '@kit.ContactsKit';

// 异步回调，查询联系人
let promise = contact.queryContact('xxx', {
  holderId: 1,
  bundleName: "",
  displayName: ""
}, {
  attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
});
promise.then((data) => {
  console.info(`Succeeded in querying Contact. data->${JSON.stringify(data)}`);
});
```

#### contact.queryContacts10+

queryContacts(context: Context, callback: AsyncCallback<Array<Contact>>): void

查询所有联系人。使用callback异步回调。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context)。 |
| callback | AsyncCallback> | 是 | 回调函数。当查询联系人成功，err为undefined，data为查询到的联系人对象数组；否则为错误对象。 |

错误码：

以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

示例：

![](./img/note_3.0-zh-cn.png) 在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在界面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.queryContacts(context, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts. data->${JSON.stringify(data)}`);
});
```

#### contact.queryContacts(deprecated)

queryContacts(callback: AsyncCallback<Array<Contact>>): void

查询所有联系人。使用callback异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryContacts](#contactquerycontacts10)替代。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback> | 是 | 回调函数。当查询联系人成功，err为undefined，data为查询到的联系人对象数组；否则为错误对象。 |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

// 异步回调查询联系人
contact.queryContacts((err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts. data->${JSON.stringify(data)}`);
});
```

#### contact.queryContacts10+

queryContacts(context: Context, holder: Holder, callback: AsyncCallback<Array<Contact>>): void

根据holder查询所有联系人。使用callback异步回调。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context)。 |
| holder | [Holder](#holder) | 是 | 创建联系人的应用信息类，如果传入参数为空则默认使用系统联系人应用查询。 |
| callback | AsyncCallback> | 是 | 回调函数。当查询联系人成功，err为undefined，data为查询到的联系人对象数组；否则为错误对象。 |

错误码：

以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

示例：

![](./img/note_3.0-zh-cn.png) 在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在界面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.queryContacts(context, {
  holderId: 1,
  bundleName: "",
  displayName: ""
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts. data->${JSON.stringify(data)}`);
});
```

#### contact.queryContacts(deprecated)

queryContacts(holder: Holder, callback: AsyncCallback<Array<Contact>>): void

根据holder查询所有联系人。使用callback异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryContacts](#contactquerycontacts10-1)替代。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| holder | [Holder](#holder) | 是 | 创建联系人的应用信息类，如果传入参数为空则默认使用系统联系人应用查询。 |
| callback | AsyncCallback> | 是 | 回调函数。当查询联系人成功，err为undefined，data为查询到的联系人对象数组；否则为错误对象。 |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

// 异步回调查询联系人
contact.queryContacts({
  holderId: 1,
  bundleName: "",
  displayName: ""
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts. data->${JSON.stringify(data)}`);
});
```

#### contact.queryContacts10+

queryContacts(context: Context, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void

根据attrs查询所有联系人。使用callback异步回调。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context)。 |
| attrs | [ContactAttributes](#contactattributes) | 是 | 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。 |
| callback | AsyncCallback> | 是 | 回调函数。当查询联系人成功，err为undefined，data为查询到的联系人对象数组；否则为错误对象。 |

错误码：

以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

示例：

![](./img/note_3.0-zh-cn.png) 在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在界面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.queryContacts(context, {
  attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts. data->${JSON.stringify(data)}`);
});
```

#### contact.queryContacts(deprecated)

queryContacts(attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void

根据attrs查询所有联系人。使用callback异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryContacts](#contactquerycontacts10-2)替代。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| attrs | [ContactAttributes](#contactattributes) | 是 | 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。 |
| callback | AsyncCallback> | 是 | 回调函数。当查询联系人成功，err为undefined，data为查询到的联系人对象数组；否则为错误对象。 |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

// 异步回调查询联系人
contact.queryContacts({
  attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts. data->${JSON.stringify(data)}`);
});
```

#### contact.queryContacts10+

queryContacts(context: Context, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void

根据holder和attrs查询所有联系人。使用callback异步回调。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context)。 |
| holder | [Holder](#holder) | 是 | 创建联系人的应用信息类，如果传入参数为空则默认使用系统联系人应用查询。 |
| attrs | [ContactAttributes](#contactattributes) | 是 | 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。 |
| callback | AsyncCallback> | 是 | 回调函数。当查询联系人成功，err为undefined，data为查询到的联系人对象数组；否则为错误对象。 |

错误码：

以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

示例：

![](./img/note_3.0-zh-cn.png) 在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在界面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.queryContacts(context, {
  holderId: 1,
  bundleName: "",
  displayName: ""
}, {
  attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts. data->${JSON.stringify(data)}`);
});
```

#### contact.queryContacts(deprecated)

queryContacts(holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void

根据holder和attrs查询所有联系人。使用callback异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryContacts](#contactquerycontacts10-3)替代。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| holder | [Holder](#holder) | 是 | 创建联系人的应用信息类，如果传入参数为空则默认使用系统联系人应用查询。 |
| attrs | [ContactAttributes](#contactattributes) | 是 | 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。 |
| callback | AsyncCallback> | 是 | 回调函数。当查询联系人成功，err为undefined，data为查询到的联系人对象数组；否则为错误对象。 |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

// 异步回调查询联系人
contact.queryContacts({
  holderId: 1,
  bundleName: "",
  displayName: ""
}, {
  attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts. data->${JSON.stringify(data)}`);
});
```

#### contact.queryContacts10+

queryContacts(context: Context, holder?: Holder, attrs?: ContactAttributes): Promise<Array<Contact>>

根据holder和attrs查询所有联系人。使用Promise异步回调。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context)。 |
| holder | [Holder](#holder) | 否 | 创建联系人的应用信息类，如果为空，默认使用系统联系人应用查询。 |
| attrs | [ContactAttributes](#contactattributes) | 否 | 联系人的属性列表，不传该参数默认查询所有联系人属性。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise> | Promise对象。返回查询到的联系人数组对象。 |

错误码：

以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

示例：

![](./img/note_3.0-zh-cn.png) 在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在界面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-usage#获取uiability的上下文信息)。

```
import { contact } from '@kit.ContactsKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let promise = contact.queryContacts(context, {
  holderId: 1,
  bundleName: "",
  displayName: ""
}, {
  attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
});
promise.then((data) => {
  console.info(`Succeeded in querying Contacts. data: ${JSON.stringify(data)}`);
});
```

#### contact.queryContacts(deprecated)

queryContacts(holder?: Holder, attrs?: ContactAttributes): Promise<Array<Contact>>

根据holder和attrs查询所有联系人。使用Promise异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryContacts](#contactquerycontacts10-4)替代。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| holder | [Holder](#holder) | 否 | 创建联系人的应用信息类，不传该参数，则默认使用系统联系人应用查询。 |
| attrs | [ContactAttributes](#contactattributes) | 否 | 联系人的属性列表，不传默认查询所有联系人属性。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise> | Promise对象。返回查询到的联系人数组对象。 |

示例：

```
  import { contact } from '@kit.ContactsKit';

  // 根据holder和attrs查询所有联系人
  let promise = contact.queryContacts({
    holderId: 1,
    bundleName: "",
    displayName: ""
  }, {
    attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
  });
  promise.then((data) => {
    console.info(`Succeeded in querying Contacts. data->${JSON.stringify(data)}`);
  });
```

#### contact.queryContactsByPhoneNumber10+

queryContactsByPhoneNumber(context: Context, phoneNumber: string, callback: AsyncCallback<Array<Contact>>): void

根据电话号码查询联系人。使用callback异步回调。该接口仅返回联系人信息中的id、key、phoneNumbers属性。如果要查询联系人的所有信息，建议使用[queryContact](#contactquerycontact10-3)接口，根据该接口返回的属性key查询。应用在后台调用此接口获取联系人信息时，必须申请对应的长时任务。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context)。 |
| phoneNumber | string | 是 | 联系人的电话号码，仅支持全匹配，不支持通配符匹配。 |
| callback | AsyncCallback> | 是 | 回调函数。当查询联系人成功，err为undefined，data为查询到的联系人对象数组；否则为错误对象。 |

错误码：

以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[Contacts错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-contacts)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | 1.Parameter error. Possible causes: Mandatory parameters are left unspecified. 2.Internal error. The query resultSet is nullptr. 3.Internal error. The query resultSet is empty. |

示例：

![](./img/note_3.0-zh-cn.png) 在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在界面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.queryContactsByPhoneNumber(context, '138xxxxxxxx', (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts By PhoneNumber. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts By PhoneNumber. data->${JSON.stringify(data)}`);
});
```

#### contact.queryContactsByPhoneNumber(deprecated)

queryContactsByPhoneNumber(phoneNumber: string, callback: AsyncCallback<Array<Contact>>): void

根据电话号码查询联系人。使用callback异步回调。该接口仅返回联系人信息中的id、key、phoneNumbers属性。如果要查询联系人的所有信息，建议使用[queryContact](#contactquerycontact10-3)接口，根据该接口返回的属性key查询。应用在后台调用此接口获取联系人信息时，必须申请对应的长时任务。

![](./img/note_3.0-zh-cn.png) 从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryContactsByPhoneNumber](#contactquerycontactsbyphonenumber10)替代。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| phoneNumber | string | 是 | 联系人的电话号码，仅支持全匹配，不支持通配符匹配。 |
| callback | AsyncCallback> | 是 | 回调函数。当查询联系人成功，err为undefined，data为查询到的联系人对象数组；否则为错误对象。 |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

// 根据电话号码138xxxxxxxx查询联系人
contact.queryContactsByPhoneNumber('138xxxxxxxx', (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts By PhoneNumber. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts By PhoneNumber. data->${JSON.stringify(data)}`);
});
```

#### contact.queryContactsByPhoneNumber10+

queryContactsByPhoneNumber(context: Context, phoneNumber: string, holder: Holder, callback: AsyncCallback<Array<Contact>>): void

根据电话号码和holder查询联系人。使用callback异步回调。该接口返回的列表仅包含联系人信息中的id、key、phoneNumbers属性。如果要查询联系人的所有信息，建议使用[queryContact](#contactquerycontact10-3)接口，根据该接口返回的属性key查询。应用在后台调用此接口获取联系人信息时，必须申请对应的长时任务。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context)。 |
| phoneNumber | string | 是 | 联系人的电话号码，仅支持全匹配，不支持通配符匹配。 |
| holder | [Holder](#holder) | 是 | 创建联系人的应用信息类，如果传入参数为空则默认使用系统联系人应用查询。 |
| callback | AsyncCallback> | 是 | 回调函数。当查询联系人成功，err为undefined，data为查询到的联系人对象数组；否则为错误对象。 |

错误码：

以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[Contacts错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-contacts)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | 1.Parameter error. Possible causes: Mandatory parameters are left unspecified. 2.Internal error. The query resultSet is nullptr. 3.Internal error. The query resultSet is empty. |

示例：

![](./img/note_3.0-zh-cn.png) 在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在界面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.queryContactsByPhoneNumber(context, '138xxxxxxxx', {
  holderId: 1,
  bundleName: '',
  displayName: ''
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts By PhoneNumber. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts By PhoneNumber. data->${JSON.stringify(data)}`);
});
```

#### contact.queryContactsByPhoneNumber(deprecated)

queryContactsByPhoneNumber(phoneNumber: string, holder: Holder, callback: AsyncCallback<Array<Contact>>): void

根据电话号码和holder查询联系人，使用callback异步回调。该接口返回的列表仅包含联系人信息中的id、key、phoneNumbers属性。如果要查询联系人的所有信息，建议使用[queryContact](#contactquerycontact10-3)接口，根据该接口返回的属性key查询。应用在后台调用此接口获取联系人信息时，必须申请对应的长时任务。

![](./img/note_3.0-zh-cn.png) 从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryContactsByPhoneNumber](#contactquerycontactsbyphonenumber10-1)替代。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| phoneNumber | string | 是 | 联系人的电话号码，仅支持全匹配，不支持通配符匹配。 |
| holder | [Holder](#holder) | 是 | 创建联系人的应用信息类，如果传入参数为空则默认使用系统联系人应用查询。 |
| callback | AsyncCallback> | 是 | 回调函数。当查询联系人成功，err为undefined，data为查询到的联系人对象数组；否则为错误对象。 |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

// 根据电话号码138xxxxxxxx和holderId查询联系人
contact.queryContactsByPhoneNumber('138xxxxxxxx', {
  holderId: 1,
  bundleName: "",
  displayName: ""
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts By PhoneNumber. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts By PhoneNumber. data->${JSON.stringify(data)}`);
});
```

#### contact.queryContactsByPhoneNumber10+

queryContactsByPhoneNumber(context: Context, phoneNumber: string, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void

根据电话号码和attrs查询联系人。使用callback异步回调。该接口返回的列表仅包含联系人信息中的id、key、phoneNumbers属性。如果要查询联系人的所有信息，建议使用[queryContact](#contactquerycontact10-3)接口，根据该接口返回的属性key查询。应用在后台调用此接口获取联系人信息时，必须申请对应的长时任务。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context)。 |
| phoneNumber | string | 是 | 联系人的电话号码，仅支持全匹配，不支持通配符匹配。 |
| attrs | [ContactAttributes](#contactattributes) | 是 | 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。 |
| callback | AsyncCallback> | 是 | 回调函数。当查询联系人成功，err为undefined，data为查询到的联系人对象数组；否则为错误对象。 |

错误码：

以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[Contacts错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-contacts)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | 1.Parameter error. Possible causes: Mandatory parameters are left unspecified. 2.Internal error. The query resultSet is nullptr. 3.Internal error. The query resultSet is empty. |

示例：

![](./img/note_3.0-zh-cn.png) 在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在界面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.queryContactsByPhoneNumber(context, '138xxxxxxxx', {
  attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts By PhoneNumber. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts By PhoneNumber. data->${JSON.stringify(data)}`);
});
```

#### contact.queryContactsByPhoneNumber(deprecated)

queryContactsByPhoneNumber(phoneNumber: string, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void

根据电话号码和attrs查询联系人。使用callback异步回调。该接口返回的列表仅包含联系人信息中的id、key、phoneNumbers属性。如果要查询联系人的所有信息，建议使用[queryContact](#contactquerycontact10-3)接口，根据该接口返回的属性key查询。应用在后台调用此接口获取联系人信息时，必须申请对应的长时任务。

![](./img/note_3.0-zh-cn.png) 从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryContactsByPhoneNumber](#contactquerycontactsbyphonenumber10-2)替代。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| phoneNumber | string | 是 | 联系人的电话号码，仅支持全匹配，不支持通配符匹配。 |
| attrs | [ContactAttributes](#contactattributes) | 是 | 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。 |
| callback | AsyncCallback> | 是 | 回调函数。当查询联系人成功，err为undefined，data为查询到的联系人对象数组；否则为错误对象。 |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

contact.queryContactsByPhoneNumber('138xxxxxxxx', {
  attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts By PhoneNumber. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts By PhoneNumber. data->${JSON.stringify(data)}`);
});
```

#### contact.queryContactsByPhoneNumber10+

queryContactsByPhoneNumber(context: Context, phoneNumber: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void

根据电话号码、holder和attrs查询联系人。使用callback异步回调。该接口返回的列表仅包含联系人信息中的id、key、phoneNumbers属性。如果要查询联系人的所有信息，建议使用[queryContact](#contactquerycontact10-3)接口，根据该接口返回的属性key查询。应用在后台调用此接口获取联系人信息时，必须申请对应的长时任务。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context)。 |
| phoneNumber | string | 是 | 联系人的电话号码，仅支持全匹配，不支持通配符匹配。 |
| holder | [Holder](#holder) | 是 | 创建联系人的应用信息类，如果该参数为空，则默认使用系统联系人应用查询。 |
| attrs | [ContactAttributes](#contactattributes) | 是 | 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。 |
| callback | AsyncCallback> | 是 | 回调函数。当查询联系人成功，err为undefined，data为查询到的联系人对象数组；否则为错误对象。 |

错误码：

以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[Contacts错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-contacts)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | 1.Parameter error. Possible causes: Mandatory parameters are left unspecified. 2.Internal error. The query resultSet is nullptr. 3.Internal error. The query resultSet is empty. |

示例：

![](./img/note_3.0-zh-cn.png) 在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在界面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.queryContactsByPhoneNumber(context, '138xxxxxxxx', {
  holderId: 1,
  bundleName: '',
  displayName: ''
}, {
  attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts By PhoneNumber. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts By PhoneNumber. data->${JSON.stringify(data)}`);
});
```

#### contact.queryContactsByPhoneNumber(deprecated)

queryContactsByPhoneNumber(phoneNumber: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void

根据电话号码、holder和attrs查询联系人。使用callback异步回调。该接口返回的列表仅包含联系人信息中的id、key、phoneNumbers属性。如果要查询联系人的所有信息，建议使用[queryContact](#contactquerycontact10-3)接口，根据该接口返回的属性key查询。应用在后台调用此接口获取联系人信息时，必须申请对应的长时任务。

![](./img/note_3.0-zh-cn.png) 从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryContactsByPhoneNumber](#contactquerycontactsbyphonenumber10-3)替代。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| phoneNumber | string | 是 | 联系人的电话号码，仅支持全匹配，不支持通配符匹配。 |
| holder | [Holder](#holder) | 是 | 创建联系人的应用信息类，如果该参数为空，则默认使用系统联系人应用查询。 |
| attrs | [ContactAttributes](#contactattributes) | 是 | 联系人的属性列表，如果该参数为空，则查询联系人的所有属性字段。 |
| callback | AsyncCallback> | 是 | 回调函数。当查询联系人成功，err为undefined，data为查询到的联系人对象数组；否则为错误对象。 |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

contact.queryContactsByPhoneNumber('138xxxxxxxx', {
  holderId: 1,
  bundleName: "",
  displayName: ""
}, {
  attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts By PhoneNumber. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts By PhoneNumber. data->${JSON.stringify(data)}`);
});
```

#### contact.queryContactsByPhoneNumber10+

queryContactsByPhoneNumber(context: Context, phoneNumber: string, holder?: Holder, attrs?: ContactAttributes): Promise<Array<Contact>>

根据电话号码、holder和attrs查询联系人。使用Promise异步回调。该接口返回的列表仅包含联系人信息中的id、key、phoneNumbers属性。如果要查询联系人的所有信息，建议使用[queryContact](#contactquerycontact10-3)接口，根据该接口返回的属性key查询。应用在后台调用此接口获取联系人信息时，必须申请对应的长时任务。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context)。 |
| phoneNumber | string | 是 | 联系人的电话号码，仅支持全匹配，不支持通配符匹配。 |
| holder | [Holder](#holder) | 否 | 创建联系人的应用信息类，不传该参数，则默认使用系统联系人应用查询。 |
| attrs | [ContactAttributes](#contactattributes) | 否 | 联系人的属性列表，不传默认查询所有联系人属性。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise> | Promise对象。返回查询到的联系人数组对象。 |

错误码：

以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[Contacts错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-contacts)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | 1.Parameter error. Possible causes: Mandatory parameters are left unspecified. 2.Internal error. The query resultSet is nullptr. 3.Internal error. The query resultSet is empty. |

示例：

![](./img/note_3.0-zh-cn.png) 在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在界面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-usage#获取uiability的上下文信息)。

```
import { contact } from '@kit.ContactsKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let promise = contact.queryContactsByPhoneNumber(context, '138xxxxxxxx', {
  holderId: 1,
  bundleName: '',
  displayName: ''
}, {
  attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
});
promise.then((data) => {
  console.info(`Succeeded in querying Contacts By PhoneNumber. data->${JSON.stringify(data)}`);
});
```

#### contact.queryContactsByPhoneNumber(deprecated)

queryContactsByPhoneNumber(phoneNumber: string, holder?: Holder, attrs?: ContactAttributes): Promise<Array<Contact>>

根据电话号码、holder和attrs查询联系人。使用Promise异步回调。该接口返回的列表仅包含联系人信息中的id、key、phoneNumbers属性。如果要查询联系人的所有信息，建议使用[queryContact](#contactquerycontact10-3)接口，根据该接口返回的属性key查询。应用在后台调用此接口获取联系人信息时，必须申请对应的长时任务。

![](./img/note_3.0-zh-cn.png) 从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryContactsByPhoneNumber](#contactquerycontactsbyphonenumber10-4)替代。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| phoneNumber | string | 是 | 联系人的电话号码，仅支持全匹配，不支持通配符匹配。 |
| holder | [Holder](#holder) | 否 | 创建联系人的应用信息类，不传该参数，则默认使用系统联系人应用查询。 |
| attrs | [ContactAttributes](#contactattributes) | 否 | 联系人的属性列表，不传默认查询所有联系人属性。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise> | Promise对象。返回查询到的联系人数组对象。 |

示例：

```
import { contact } from '@kit.ContactsKit';

let promise = contact.queryContactsByPhoneNumber('138xxxxxxxx', {
  holderId: 1,
  bundleName: "",
  displayName: ""
}, {
  attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
});
promise.then((data) => {
  console.info(`Succeeded in querying Contacts By PhoneNumber. data->${JSON.stringify(data)}`);
});
```

#### contact.queryContactsByEmail10+

queryContactsByEmail(context: Context, email: string, callback: AsyncCallback<Array<Contact>>): void

根据email查询联系人。使用callback异步回调。该接口返回的列表仅包含联系人信息中的id、key、Emails属性。如果要查询联系人的所有信息，建议使用[queryContact](#contactquerycontact10-3)接口，根据该接口返回的属性key查询。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context)。 |
| email | string | 是 | 联系人的邮箱地址。 |
| callback | AsyncCallback> | 是 | 回调函数。当查询联系人成功，err为undefined，data为查询到的联系人对象数组；否则为错误对象。 |

错误码：

以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

示例：

![](./img/note_3.0-zh-cn.png) 在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在界面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.queryContactsByEmail(context, 'xxx@email.com', (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts By Email. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts By Email. data->${JSON.stringify(data)}`);
});
```

#### contact.queryContactsByEmail(deprecated)

queryContactsByEmail(email: string, callback: AsyncCallback<Array<Contact>>): void

根据email查询联系人。使用callback异步回调。该接口返回的列表仅包含联系人信息中的id、key、Emails属性。如果要查询联系人的所有信息，建议使用[queryContact](#contactquerycontact10-3)接口，根据该接口返回的属性key查询。

![](./img/note_3.0-zh-cn.png) 从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryContactsByEmail](#contactquerycontactsbyemail10)替代。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| email | string | 是 | 联系人的邮箱地址。 |
| callback | AsyncCallback> | 是 | 回调函数。当查询联系人成功，err为undefined，data为查询到的联系人对象数组；否则为错误对象。 |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

contact.queryContactsByEmail('xxx@email.com', (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts By Email. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts By Email. data->${JSON.stringify(data)}`);
});
```

#### contact.queryContactsByEmail10+

queryContactsByEmail(context: Context, email: string, holder: Holder, callback: AsyncCallback<Array<Contact>>): void

根据email和holder查询联系人。使用callback异步回调。该接口返回的列表仅包含联系人信息中的id、key、Emails属性。如果要查询联系人的所有信息，建议使用[queryContact](#contactquerycontact10-3)接口，根据该接口返回的属性key查询。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context)。 |
| email | string | 是 | 联系人的邮箱地址。 |
| holder | [Holder](#holder) | 是 | 创建联系人的应用信息类，如果传入参数为空则默认使用系统联系人应用查询。 |
| callback | AsyncCallback> | 是 | 回调函数。当查询联系人成功，err为undefined，data为查询到的联系人对象数组；否则为错误对象。 |

错误码：

以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

示例：

![](./img/note_3.0-zh-cn.png) 在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在界面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.queryContactsByEmail(context, 'xxx@email.com', {
  holderId: 1,
  bundleName: '',
  displayName: ''
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts By Email. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts By Email. data->${JSON.stringify(data)}`);
});
```

#### contact.queryContactsByEmail(deprecated)

queryContactsByEmail(email: string, holder: Holder, callback: AsyncCallback<Array<Contact>>): void

根据email和holder查询联系人。使用callback异步回调。该接口返回的列表仅包含联系人信息中的id、key、Emails属性。如果要查询联系人的所有信息，建议使用[queryContact](#contactquerycontact10-3)接口，根据该接口返回的属性key查询。

![](./img/note_3.0-zh-cn.png) 从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryContactsByEmail](#contactquerycontactsbyemail10-1)替代。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| email | string | 是 | 联系人的邮箱地址。 |
| holder | [Holder](#holder) | 是 | 创建联系人的应用信息类，如果传入参数为空默认使用系统联系人应用查询。 |
| callback | AsyncCallback> | 是 | 回调函数。当查询联系人成功，err为undefined，data为查询到的联系人对象数组；否则为错误对象。 |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

contact.queryContactsByEmail('xxx@email.com', {
  holderId: 1,
  bundleName: "",
  displayName: ""
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts By Email. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts By Email. data->${JSON.stringify(data)}`);
});
```

#### contact.queryContactsByEmail10+

queryContactsByEmail(context: Context, email: string, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void

根据email和attrs查询联系人。使用callback异步回调。该接口返回的列表仅包含联系人信息中的id、key、Emails属性。如果要查询联系人的所有信息，建议使用[queryContact](#contactquerycontact10-3)接口，根据该接口返回的属性key查询。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context)。 |
| email | string | 是 | 联系人的邮箱地址。 |
| attrs | [ContactAttributes](#contactattributes) | 是 | 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。 |
| callback | AsyncCallback> | 是 | 回调函数。当查询联系人成功，err为undefined，data为查询到的联系人对象数组；否则为错误对象。 |

错误码：

以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

示例：

![](./img/note_3.0-zh-cn.png) 在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在界面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.queryContactsByEmail(context, 'xxx@email.com', {
  attributes: [contact.Attribute.ATTR_EMAIL, contact.Attribute.ATTR_NAME]
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts By Email. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts By Email. data->${JSON.stringify(data)}`);
});
```

#### contact.queryContactsByEmail(deprecated)

queryContactsByEmail(email: string, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void

根据email和attrs查询联系人。使用callback异步回调。该接口返回的列表仅包含联系人信息中的id、key、Emails属性。如果要查询联系人的所有信息，建议使用[queryContact](#contactquerycontact10-3)接口，根据该接口返回的属性key查询。

![](./img/note_3.0-zh-cn.png) 从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryContactsByEmail](#contactquerycontactsbyemail10-2)替代。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| email | string | 是 | 联系人的邮箱地址。 |
| attrs | [ContactAttributes](#contactattributes) | 是 | 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。 |
| callback | AsyncCallback> | 是 | 回调函数。当查询联系人成功，err为undefined，data为查询到的联系人对象数组；否则为错误对象。 |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

contact.queryContactsByEmail('xxx@email.com', {
  attributes: [contact.Attribute.ATTR_EMAIL, contact.Attribute.ATTR_NAME]
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts By Email. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts By Email. data->${JSON.stringify(data)}`);
});
```

#### contact.queryContactsByEmail10+

queryContactsByEmail(context: Context, email: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void

根据email、holder和attrs查询联系人。使用callback异步回调。该接口返回的列表仅包含联系人信息中的id、key、Emails属性。如果要查询联系人的所有信息，建议使用[queryContact](#contactquerycontact10-3)接口，根据该接口返回的属性key查询。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context)。 |
| email | string | 是 | 联系人的邮箱地址。 |
| holder | [Holder](#holder) | 是 | 创建联系人的应用信息类，如果传入参数为空则默认使用系统联系人应用查询。 |
| attrs | [ContactAttributes](#contactattributes) | 是 | 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。 |
| callback | AsyncCallback> | 是 | 回调函数。当查询联系人成功，err为undefined，data为查询到的联系人对象数组；否则为错误对象。 |

错误码：

以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

示例：

![](./img/note_3.0-zh-cn.png) 在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在界面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.queryContactsByEmail(context, 'xxx@email.com', {
  holderId: 1,
  bundleName: '',
  displayName: ''
}, {
  attributes: [contact.Attribute.ATTR_EMAIL, contact.Attribute.ATTR_NAME]
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts By Email. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts By Email. data->${JSON.stringify(data)}`);
});
```

#### contact.queryContactsByEmail(deprecated)

queryContactsByEmail(email: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void

根据email、holder和attrs查询联系人。使用callback异步回调。该接口返回的列表仅包含联系人信息中的id、key、Emails属性。如果要查询联系人的所有信息，建议使用[queryContact](#contactquerycontact10-3)接口，根据该接口返回的属性key查询。

![](./img/note_3.0-zh-cn.png) 从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryContactsByEmail](#contactquerycontactsbyemail10-3)替代。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| email | string | 是 | 联系人的邮箱地址。 |
| holder | [Holder](#holder) | 是 | 创建联系人的应用信息类，如果传入参数为空则默认使用系统联系人应用查询。 |
| attrs | [ContactAttributes](#contactattributes) | 是 | 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。 |
| callback | AsyncCallback> | 是 | 回调函数。当查询联系人成功，err为undefined，data为查询到的联系人对象数组；否则为错误对象。 |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

contact.queryContactsByEmail('xxx@email.com', {
  holderId: 1,
  bundleName: "",
  displayName: ""
}, {
  attributes: [contact.Attribute.ATTR_EMAIL, contact.Attribute.ATTR_NAME]
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts By Email. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts By Email. data->${JSON.stringify(data)}`);
});
```

#### contact.queryContactsByEmail10+

queryContactsByEmail(context: Context, email: string, holder?: Holder, attrs?: ContactAttributes): Promise<Array<Contact>>

根据email、holder和attrs查询联系人。使用Promise异步回调。该接口返回的列表仅包含联系人信息中的id、key、Emails属性。如果要查询联系人的所有信息，建议使用[queryContact](#contactquerycontact10-3)接口，根据该接口返回的属性key查询。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context)。 |
| email | string | 是 | 联系人的邮箱地址。 |
| holder | [Holder](#holder) | 否 | 创建联系人的应用信息类，不传该参数，则默认使用系统联系人应用查询。 |
| attrs | [ContactAttributes](#contactattributes) | 否 | 联系人的属性列表，不传默认查询所有联系人属性。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise> | Promise对象。返回查询到的联系人数组对象。 |

错误码：

以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

示例：

![](./img/note_3.0-zh-cn.png) 在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在界面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-usage#获取uiability的上下文信息)。

```
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let promise = contact.queryContactsByEmail(context, 'xxx@email.com', {
  holderId: 1,
  bundleName: '',
  displayName: ''
}, {
  attributes: [contact.Attribute.ATTR_EMAIL, contact.Attribute.ATTR_NAME]
});
promise.then((data) => {
  console.info(`Succeeded in querying Contacts By Email. data->${JSON.stringify(data)}`);
});
```

#### contact.queryContactsByEmail(deprecated)

queryContactsByEmail(email: string, holder?: Holder, attrs?: ContactAttributes): Promise<Array<Contact>>

根据email、holder和attrs查询联系人。使用Promise异步回调。该接口返回的列表仅包含联系人信息中的id、key、Emails属性。如果要查询联系人的所有信息，建议使用[queryContact](#contactquerycontact10-3)接口，根据该接口返回的属性key查询。

![](./img/note_3.0-zh-cn.png) 从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryContactsByEmail](#contactquerycontactsbyemail10-4)替代。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| email | string | 是 | 联系人的邮箱地址。 |
| holder | [Holder](#holder) | 否 | 创建联系人的应用信息类，不传该参数，则默认使用系统联系人应用查询。 |
| attrs | [ContactAttributes](#contactattributes) | 否 | 联系人的属性列表，不传默认查询所有联系人属性。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise> | Promise对象。返回查询到的联系人数组对象。 |

示例：

```
import { contact } from '@kit.ContactsKit';

let promise = contact.queryContactsByEmail('xxx@email.com', {
  holderId: 1,
  bundleName: "",
  displayName: ""
}, {
  attributes: [contact.Attribute.ATTR_EMAIL, contact.Attribute.ATTR_NAME]
});
promise.then((data) => {
  console.info(`Succeeded in querying Contacts By Email. data->${JSON.stringify(data)}`);
});
```

#### contact.queryGroups10+

queryGroups(context: Context, callback: AsyncCallback<Array<Group>>): void

查询联系人的所有群组。使用callback异步回调。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context)。 |
| callback | AsyncCallback> | 是 | 回调函数。当查询联系人的群组成功，err为undefined，data为查询到的群组对象数组；否则为错误对象。 |

错误码：

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

示例：

![](./img/note_3.0-zh-cn.png) 在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在界面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.queryGroups(context, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Groups. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Groups. data->${JSON.stringify(data)}`);
});
```

#### contact.queryGroups(deprecated)

queryGroups(callback: AsyncCallback<Array<Group>>): void

查询联系人的所有群组。使用callback异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryGroups](#contactquerygroups10)替代。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback> | 是 | 回调函数。当查询联系人的群组成功，err为undefined，data为查询到的群组对象数组；否则为错误对象。 |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

contact.queryGroups((err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Groups. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Groups.. data->${JSON.stringify(data)}`);
});
```

#### contact.queryGroups10+

queryGroups(context: Context, holder: Holder, callback: AsyncCallback<Array<Group>>): void

根据holder查询联系人的所有群组。使用callback异步回调。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context)。 |
| holder | [Holder](#holder) | 是 | 创建联系人的应用信息类，如果传入参数为空则默认使用系统联系人应用查询。 |
| callback | AsyncCallback> | 是 | 回调函数。当查询联系人的群组成功，err为undefined，data为查询到的群组对象数组；否则为错误对象。 |

错误码：

以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

示例：

![](./img/note_3.0-zh-cn.png) 在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在界面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.queryGroups(context, {
  holderId: 1,
  bundleName: "",
  displayName: ""
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Groups. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Groups. data->${JSON.stringify(data)}`);
});
```

#### contact.queryGroups(deprecated)

queryGroups(holder: Holder, callback: AsyncCallback<Array<Group>>): void

根据holder查询联系人的所有群组。使用callback异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryGroups](#contactquerygroups10-1)替代。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| holder | [Holder](#holder) | 是 | 创建联系人的应用信息类，如果传入参数为空则默认使用系统联系人应用查询。 |
| callback | AsyncCallback> | 是 | 回调函数。当查询联系人的群组成功，err为undefined，data为查询到的群组对象数组；否则为错误对象。 |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

contact.queryGroups({
  holderId: 1,
  bundleName: "",
  displayName: ""
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Groups. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Groups. data->${JSON.stringify(data)}`);
});
```

#### contact.queryGroups10+

queryGroups(context: Context, holder?: Holder): Promise<Array<Group>>

根据holder查询联系人的所有群组。使用Promise异步回调。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context)。 |
| holder | [Holder](#holder) | 否 | 创建联系人的应用信息类，不传该参数，则默认使用系统联系人应用查询。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise> | Promise对象。返回查询到的群组对象数组。 |

错误码：

以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

示例：

![](./img/note_3.0-zh-cn.png) 在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在界面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-usage#获取uiability的上下文信息)。

```
import { common } from '@kit.AbilityKit';
import { contact } from '@kit.ContactsKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let promise = contact.queryGroups(context, {
  holderId: 1,
  bundleName: "",
  displayName: ""
});
promise.then((data) => {
  console.info(`Succeeded in querying Groups. data->${JSON.stringify(data)}`);
});
```

#### contact.queryGroups(deprecated)

queryGroups(holder?: Holder): Promise<Array<Group>>

根据holder查询联系人的所有群组。使用Promise异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryGroups](#contactquerygroups10-2)替代。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| holder | [Holder](#holder) | 否 | 创建联系人的应用信息类，不传该参数，则默认使用系统联系人应用查询。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise> | Promise对象。返回查询到的群组对象数组。 |

示例：

```
import { contact } from '@kit.ContactsKit';

let promise = contact.queryGroups({
  holderId: 1,
  bundleName: "",
  displayName: ""
});
promise.then((data) => {
  console.info(`Succeeded in querying Groups. data->${JSON.stringify(data)}`);
});
```

#### contact.queryHolders10+

queryHolders(context: Context, callback: AsyncCallback<Array<Holder>>): void

查询所有创建联系人的应用信息类。使用callback异步回调。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context)。 |
| callback | AsyncCallback> | 是 | 回调函数。当查询创建联系人的应用信息类成功，err为undefined，data为查询到的创建联系人应用信息的对象数组；否则为错误对象。 |

错误码：

以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

示例：

![](./img/note_3.0-zh-cn.png) 在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在界面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.queryHolders(context, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Holders. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Holders. data->${JSON.stringify(data)}`);
});
```

#### contact.queryHolders(deprecated)

queryHolders(callback: AsyncCallback<Array<Holder>>): void

查询所有创建联系人的应用信息类。使用callback异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryHolders](#contactqueryholders10)替代。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback> | 是 | 回调函数。当查询创建联系人的应用信息类成功，err为undefined，data为查询到的创建联系人应用信息的对象数组；否则为错误对象。 |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

contact.queryHolders((err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Holders. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Holders. data->${JSON.stringify(data)}`);
});
```

#### contact.queryHolders10+

queryHolders(context: Context): Promise<Array<Holder>>

查询所有创建联系人的应用信息类。使用Promise异步回调。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context)。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise> | Promise对象。返回查询到的创建联系人应用信息的对象数组。 |

错误码：

以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

示例：

![](./img/note_3.0-zh-cn.png) 在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在界面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-usage#获取uiability的上下文信息)。

```
import { common } from '@kit.AbilityKit';
import { contact } from '@kit.ContactsKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let promise = contact.queryHolders(context);
promise.then((data) => {
  console.info(`Succeeded in querying Holders. data->${JSON.stringify(data)}`);
});
```

#### contact.queryHolders(deprecated)

queryHolders(): Promise<Array<Holder>>

查询所有创建联系人的应用信息类。使用Promise异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryHolders](#contactqueryholders10-1)替代。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise> | Promise对象。返回查询到的创建联系人应用信息的对象数组。 |

示例：

```
import { contact } from '@kit.ContactsKit';

let promise = contact.queryHolders();
promise.then((data) => {
  console.info(`Succeeded in querying Holders. data->${JSON.stringify(data)}`);
});
```

#### contact.queryKey10+

queryKey(context: Context, id: number, callback: AsyncCallback<string>): void

根据联系人的id查询联系人的key。使用callback异步回调。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context)。 |
| id | number | 是 | 联系人对象的id属性，是联系人对象在数据库中的唯一标识符。 |
| callback | AsyncCallback | 是 | 回调函数。当查询联系人的key成功，err为undefined，data为查询到的联系人对应的key；否则为错误对象。 |

错误码：

以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Parameter verification failed. |

示例：

![](./img/note_3.0-zh-cn.png) 在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在界面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.queryKey(context, 1, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Key. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Key. data->${JSON.stringify(data)}`);
});
```

#### contact.queryKey(deprecated)

queryKey(id: number, callback: AsyncCallback<string>): void

根据联系人的id查询联系人的key。使用callback异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryKey](#contactquerykey10)替代。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | number | 是 | 联系人对象的id属性。 |
| callback | AsyncCallback | 是 | 回调函数。当查询联系人的key成功，err为undefined，data为查询到的联系人对应的key；否则为错误对象。 |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

contact.queryKey(1, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Key. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Key. data->${JSON.stringify(data)}`);
});
```

#### contact.queryKey10+

queryKey(context: Context, id: number, holder: Holder, callback: AsyncCallback<string>): void

根据联系人的id和holder查询联系人的key。使用callback异步回调。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context)。 |
| id | number | 是 | 联系人对象的id属性。 |
| holder | [Holder](#holder) | 是 | 创建联系人的应用信息类，如果传入参数为空则使用系统联系人应用查询。 |
| callback | AsyncCallback | 是 | 回调函数。当查询联系人的key成功，err为undefined，data为查询到的联系人对应的key；否则为错误对象。 |

错误码：

以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Parameter verification failed. |

示例：

![](./img/note_3.0-zh-cn.png) 在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在界面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-usage#获取uiability的上下文信息)。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.queryKey(context, 1, {
  holderId: 1,
  bundleName: "",
  displayName: ""
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Key. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Key. data->${JSON.stringify(data)}`);
});
```

#### contact.queryKey(deprecated)

queryKey(id: number, holder: Holder, callback: AsyncCallback<string>): void

根据联系人的id和holder查询联系人的key。使用callback异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryKey](#contactquerykey10-1)替代。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | number | 是 | 联系人对象的id属性。 |
| holder | [Holder](#holder) | 是 | 创建联系人的应用信息类，如果传入参数为空则使用系统联系人应用查询。 |
| callback | AsyncCallback | 是 | 回调函数。当查询联系人的key成功，err为undefined，data为查询到的联系人对应的key；否则为错误对象。 |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

contact.queryKey(1, {
  holderId: 1,
  bundleName: "",
  displayName: ""
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Key. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Key. data->${JSON.stringify(data)}`);
});
```

#### contact.queryKey10+

queryKey(context: Context, id: number, holder?: Holder): Promise<string>

根据联系人的id和holder查询联系人的key。使用Promise异步回调。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context)。 |
| id | number | 是 | 联系人对象的id属性。 |
| holder | [Holder](#holder) | 否 | 创建联系人的应用信息类，不传该参数，则使用系统联系人应用查询。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。返回查询到的联系人对应的key。 |

错误码：

以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Parameter verification failed. |

示例：

![](./img/note_3.0-zh-cn.png) 在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在界面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-usage#获取uiability的上下文信息)。

```
import { common } from '@kit.AbilityKit';
import { contact } from '@kit.ContactsKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let promise = contact.queryKey(context, 1, {
  holderId: 1,
  bundleName: "",
  displayName: ""
});
promise.then((data) => {
  console.info(`Succeeded in querying Key. data->${JSON.stringify(data)}`);
});
```

#### contact.queryKey(deprecated)

queryKey(id: number, holder?: Holder): Promise<string>

根据联系人的id和holder查询联系人的key。使用Promise异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7 开始支持，从API version 10 开始废弃，建议使用[queryKey](#contactquerykey10-2)替代。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | number | 是 | 联系人对象的id属性。 |
| holder | [Holder](#holder) | 否 | 创建联系人的应用信息类，不传该参数，则使用系统联系人应用查询。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。返回查询到的联系人对应的key。 |

示例：

```
import { contact } from '@kit.ContactsKit';

let promise = contact.queryKey(1, {
  holderId: 1,
  bundleName: "",
  displayName: ""
});
promise.then((data) => {
  console.info(`Succeeded in querying Key. data->${JSON.stringify(data)}`);
});
```

#### contact.queryContactsCount22+

queryContactsCount(context: Context): Promise<number>

查询所有联系人的数量。使用Promise异步回调。

元服务API：从API version 22 开始，该接口支持在元服务中使用。

需要权限：ohos.permission.READ_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | [Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context) | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context)。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。返回查询到的联系人数量。 |

错误码：

以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[Contacts错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-contacts)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 16700001 | General error. |

示例：

![](./img/note_3.0-zh-cn.png) 在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在界面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-usage#获取uiability的上下文信息)。

```
import { common } from '@kit.AbilityKit';
import { contact } from '@kit.ContactsKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let promise = contact.queryContactsCount(context);
promise.then((data) => {
  console.info(`Succeeded in querying ContactsCount. data->${JSON.stringify(data)}`);
});
```

#### contact.addContactViaUI15+

addContactViaUI(context: Context, contact: Contact): Promise<number>

调用新建联系人接口，打开新建联系人UI界面，新建完成。使用Promise异步回调。

元服务API: 从API version 15 开始，该接口支持在元服务中使用。

系统能力：SystemCapability.Applications.Contacts

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context)。 |
| contact | [Contact](#contact) | 是 | 联系人信息。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。返回添加的联系人id，即新建联系人时系统自动生成的唯一标识，一个id唯一对应一个联系人。 |

错误码：

以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[Contacts错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-contacts)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |
| 801 | The specified SystemCapability name was not found. |
| 16700001 | General error. |
| 16700102 | Failed to set value to contacts data. |
| 16700103 | User cancel. |

示例：

![](./img/note_3.0-zh-cn.png) 在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在界面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-usage#获取uiability的上下文信息)。

```
import { common } from '@kit.AbilityKit';
import { contact } from '@kit.ContactsKit';

// 请在组件内获取context。
let contactInfo: contact.Contact = {
  name: {
    fullName: 'xxx'
  },
  phoneNumbers: [{
    phoneNumber: '138xxxxxx'
  }]
}
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let promise = contact.addContactViaUI(context, contactInfo);
promise.then((data) => {
    console.info(`Succeeded in add Contact via UI.data->${JSON.stringify(data)}`);
  });
```

#### contact.saveToExistingContactViaUI15+

saveToExistingContactViaUI(context: Context, contact: Contact): Promise<number>

调用保存至已有联系人接口，选择联系人UI界面并完成编辑。使用Promise异步回调。

元服务API: 从API version 15 开始，该接口支持在元服务中使用。

系统能力：SystemCapability.Applications.Contacts

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context)。 |
| contact | [Contact](#contact) | 是 | 联系人信息。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。返回添加的联系人id。 |

错误码：

以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[Contacts错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-contacts)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |
| 801 | The specified SystemCapability name was not found. |
| 16700001 | General error. |
| 16700101 | Failed to get value from contacts data. |
| 16700102 | Failed to set value to contacts data. |
| 16700103 | User cancel. |

示例：

![](./img/note_3.0-zh-cn.png) 在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在界面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-usage#获取uiability的上下文信息)。

```
import { common } from '@kit.AbilityKit';
import { contact } from '@kit.ContactsKit';

// 请在组件内获取context。
let contactInfo: contact.Contact = {
  id: 1,
  name: {
    fullName: 'xxx'
  },
  phoneNumbers: [{
    phoneNumber: '138xxxxxx'
  }]
}
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let promise = contact.saveToExistingContactViaUI(context, contactInfo);
promise.then((data) => {
    console.info(`Succeeded in save to existing Contact via UI.data->${JSON.stringify(data)}`);
  });
```

#### contact.addContacts23+

addContacts(context: Context, contacts: Array<Contact>): Promise<Array<number>>

批量添加联系人。使用Promise异步回调。

元服务API：从API version 23 开始，该接口支持在元服务中使用。

需要权限：ohos.permission.WRITE_CONTACTS

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context)。 |
| contacts | Array | 是 | 联系人信息数组。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise> | Promise对象，返回批量添加的联系人id数组。 |

错误码：

以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[Contacts错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-contacts)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 16700001 | General error. |
| 16700002 | Invalid parameter value. |

示例：

![](./img/note_3.0-zh-cn.png) 在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在界面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-usage#获取uiability的上下文信息)。

```
import { common } from '@kit.AbilityKit';
import { contact } from '@kit.ContactsKit';

const contactInfo1: contact.Contact = {
  name: { fullName: 'xxx1'},
  phoneNumbers: [{ phoneNumber: '138xxxxxx' }]
};
const contactInfo2: contact.Contact = {
  name: { fullName: 'xxx2'},
  phoneNumbers: [{ phoneNumber: '139xxxxxx' }]
};
// 请在组件内获取context。
const context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.addContacts(context, [contactInfo1, contactInfo2]).then((data) => {
  console.info(`Succeeded in addContacts.data->${JSON.stringify(data)}`);
});
```

#### contact.hasMatchedCallLog24+

hasMatchedCallLog(context: Context, phoneNumber: string, minDuration: number, withinTime: number): Promise<boolean>

检查是否有符合条件的通话记录，仅针对运营商通话。使用Promise异步回调。

元服务API：从API version 24开始，该接口支持在元服务中使用。

需要权限：ohos.permission.CHECK_CALL_LOG

模型约束：此接口仅可在Stage模型下使用。

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context)。 |
| phoneNumber | string | 是 | 联系人的电话号码。 |
| minDuration | number | 是 | 最短通话时长，单位为秒(s)，取值范围大于0。 |
| withinTime | number | 是 | 表示从当前时间开始计算，通话的起始时间和结束时间应在此时间范围内，单位为秒(s)。查询时间范围大于0且不超过6小时，超过6小时的以6小时查询。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，返回是否有符合条件的通话记录，true代表有符合条件的，false代表没有。 |

错误码：

以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[Contacts错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-contacts)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 16700001 | General error. |
| 16700002 | Invalid parameter value. |

示例：

![](./img/note_3.0-zh-cn.png) 在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在界面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-usage#获取uiability的上下文信息)。

```
import { contact } from '@kit.ContactsKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context
const context = this.getUIContext().getHostContext() as common.UIAbilityContext;

const phoneNumber = '138xxxxxxxx';
const minDuration = 60;
const withinTime = 2 * 60 *60;

// 调用接口查询
contact.hasMatchedCallLog(context, phoneNumber, minDuration, withinTime).then((hasMatch:boolean) => {
  console.info(`Has matched call log: ${hasMatch}`);
});
```

#### contact.hasMatchedCallLog24+

hasMatchedCallLog(context: Context, phoneNumber: string, minDuration: number): Promise<boolean>

检查是否有符合条件的通话记录，默认查询6小时以内的通话记录，仅针对运营商通话。使用Promise异步回调。

元服务API：从API version 24开始，该接口支持在元服务中使用。

需要权限：ohos.permission.CHECK_CALL_LOG

模型约束：此接口仅可在Stage模型下使用。

系统能力：SystemCapability.Applications.ContactsData

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context，Stage模型的应用Context定义见[Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context)。 |
| phoneNumber | string | 是 | 联系人的电话号码。 |
| minDuration | number | 是 | 最短通话时长，单位为秒(s)，取值范围大于0。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，返回是否有符合条件的通话记录，true代表有符合条件的，false代表没有。 |

错误码：

以下错误码的详细介绍请参见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[Contacts错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-contacts)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 16700001 | General error. |
| 16700002 | Invalid parameter value. |

示例：

![](./img/note_3.0-zh-cn.png) 在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需要在界面中使用UIAbilityContext提供的能力，请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-usage#获取uiability的上下文信息)。

```
import { contact } from '@kit.ContactsKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context
const context = this.getUIContext().getHostContext() as common.UIAbilityContext;

const phoneNumber = '138xxxxxxxx';
const minDuration = 60;
// 调用接口查询，默认查询6小时以内的通话记录
contact.hasMatchedCallLog(context, phoneNumber, minDuration).then((hasMatch:boolean) => {
  console.info(`Has matched call log: ${hasMatch}`);
});
```

#### ContactSelectionOptions10+

选择联系人条件。

系统能力：SystemCapability.Applications.Contacts

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| isMultiSelect10+ | boolean | 否 | 是 | 是否为多选，true:多选，false:单选。默认值为false。**元服务API**：从API version 11 开始，该接口支持在元服务中使用。 |
| maxSelectable15+ | number | 否 | 是 | 联系人数量上限。默认值为10000，超出上限则以默认值筛选。**元服务API**：从API version 15 开始，该接口支持在元服务中使用。 |
| isDisplayedByName15+ | boolean | 否 | 是 | 是否按联系人姓名维度展示，true:按联系人姓名维度展示，false:按联系人号码维度展示，默认值为false。**元服务API**：从API version 15 开始，该接口支持在元服务中使用。 |
| filter15+ | [ContactSelectionFilter](#contactselectionfilter15) | 否 | 是 | 联系人查询过滤器。**元服务API**：从API version 15 开始，该接口支持在元服务中使用。 |
| isAutoDismissOnNavigation | boolean | 否 | 是 | 拉起picker的页面发生路由切换时是否允许自动关闭picker，true:允许自动关闭picker，false:不允许自动关闭picker，默认值为false。 **起始版本：** 26.0.0 **元服务API**：从API版本26.0.0开始，该接口支持在元服务中使用。 **模型约束**：此接口仅可在Stage模型下使用。 |

#### ContactSelectionFilter15+

联系人查询过滤器。

元服务API：从API version 15 开始，该接口支持在元服务中使用。

系统能力：SystemCapability.Applications.Contacts

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| filterClause | [FilterClause](#filterclause15) | 否 | 否 | 过滤条件。 |
| filterType | [FilterType](#filtertype15) | 否 | 否 | 过滤类型。 |

#### FilterType15+

枚举，联系人过滤类型。

元服务API：从API version 15 开始，该接口支持在元服务中使用。

系统能力：SystemCapability.Applications.ContactsData

| 名称 | 值 | 说明 |
| --- | --- | --- |
| SHOW_FILTER | 0 | 仅展示符合过滤条件的联系人。 **系统能力**：SystemCapability.Applications.Contacts |
| DEFAULT_SELECT | 1 | 默认勾选符合过滤条件的联系人。 **系统能力**：SystemCapability.Applications.Contacts |
| SHOW_FILTER_AND_DEFAULT_SELECT | 2 | 默认勾选仅展示符合过滤条件的联系人。 **系统能力**：SystemCapability.Applications.Contacts |

#### FilterClause15+

联系人过滤条件。多个筛选条件之间是“或者”的关系，如果参数是数组类型，数组最多只能包含3个元素。

元服务API：从API version 15 开始，该接口支持在元服务中使用。

系统能力：SystemCapability.Applications.Contacts

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| id | Array | 否 | 是 | 联系人id。 |
| name | Array | 否 | 是 | 联系人姓名。 |
| dataItem | [DataFilter](#datafilter15) | 否 | 是 | 联系人数据过滤项。 |
| focusModeList | Array | 否 | 是 | 专注模式。 |

#### FilterOptions15+

联系人过滤参数。

元服务API：从API version 15 开始，该接口支持在元服务中使用。

系统能力：SystemCapability.Applications.Contacts

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| filterCondition | [FilterCondition](#filtercondition15) | 否 | 否 | 过滤条件。 |
| value | string | ValueType[] | 否 | 是 | 过滤值，默认为undefined。 |

#### FilterCondition15+

枚举，过滤条件。

元服务API：从API version 15 开始，该接口支持在元服务中使用。

系统能力：SystemCapability.Applications.ContactsData

| 名称 | 值 | 说明 |
| --- | --- | --- |
| IS_NOT_NULL | 0 | 对应字段不为空。 **系统能力**：SystemCapability.Applications.Contacts |
| EQUAL_TO | 1 | 对应字段等于某值，值类型为string。 **系统能力**：SystemCapability.Applications.Contacts |
| NOT_EQUAL_TO | 2 | 对应字段不等于某值。 **系统能力**：SystemCapability.Applications.Contacts |
| IN | 3 | 对应字段值在某数组中，值类型为string。 **系统能力**：SystemCapability.Applications.Contacts |
| NOT_IN | 4 | 对应字段值不在某数组中。 **系统能力**：SystemCapability.Applications.Contacts |
| CONTAINS | 5 | 对应字段值包含某值，值类型为string **系统能力**：SystemCapability.Applications.Contacts |

#### DataFilter15+

联系人数据过滤项。

元服务API：从API version 15 开始，该接口支持在元服务中使用。

系统能力：SystemCapability.Applications.Contacts

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| field | [DataField](#datafield15) | 否 | 否 | 联系人数据字段。 |
| options | Array | 否 | 否 | 联系人过滤参数，数组中多个FilterOptions之间是“或”的关系，数组的最大长度为3。 |

#### DataField15+

枚举，联系人数据字段。

元服务API：从API version 15 开始，该接口支持在元服务中使用。

系统能力：SystemCapability.Applications.ContactsData

| 名称 | 值 | 说明 |
| --- | --- | --- |
| EMAIL | 0 | 联系人邮箱。 **系统能力**：SystemCapability.Applications.Contacts。 |
| PHONE | 1 | 联系人电话。 **系统能力**：SystemCapability.Applications.Contacts。 |
| ORGANIZATION | 2 | 联系人单位。 **系统能力**：SystemCapability.Applications.Contacts。 |

#### Contact

联系人对象类。

元服务API：从API version 11 开始，该接口支持在元服务中使用。

系统能力：SystemCapability.Applications.ContactsData

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| INVALID_CONTACT_ID | number | 是 | 否 | 默认联系人的id，值为-1。 |
| id | number | 是 | 是 | 联系人的id，由系统自动生成。 |
| key | string | 是 | 是 | 联系人的key，由系统自动生成。 |
| contactAttributes | [ContactAttributes](#contactattributes) | 否 | 是 | 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。 |
| emails | [Email](#email)[] | 否 | 是 | 联系人的邮箱地址列表。 |
| events | [Event](#event)[] | 否 | 是 | 联系人的生日、周年纪念等重要日期列表。 |
| groups | [Group](#group)[] | 否 | 是 | 联系人的群组列表。 |
| imAddresses | [ImAddress](#imaddress)[] | 否 | 是 | 联系人的即时消息地址列表。 |
| phoneNumbers | [PhoneNumber](#phonenumber)[] | 否 | 是 | 联系人的电话号码列表。 |
| portrait | [Portrait](#portrait) | 否 | 是 | 联系人的头像。 |
| postalAddresses | [PostalAddress](#postaladdress)[] | 否 | 是 | 联系人的邮政地址列表。 |
| relations | [Relation](#relation)[] | 否 | 是 | 联系人的关系列表。 |
| sipAddresses | [SipAddress](#sipaddress)[] | 否 | 是 | 联系人的会话发起协议(SIP)地址列表。 |
| websites | [Website](#website)[] | 否 | 是 | 联系人的网站列表。 |
| name | [Name](#name) | 否 | 是 | 联系人的姓名。 |
| nickName | [NickName](#nickname) | 否 | 是 | 联系人的昵称。 |
| note | [Note](#note) | 否 | 是 | 联系人的备注。 |
| organization | [Organization](#organization) | 否 | 是 | 联系人的组织信息。 |

示例：

使用JSON格式创建联系人数据。

```
import { contact } from '@kit.ContactsKit';

let myContact: contact.Contact = {
    phoneNumbers: [{
        phoneNumber: "138xxxxxxxx"
    }],
    name: {
        fullName: "fullName",
        namePrefix: "namePrefix"
    },
    nickName: {
        nickName: "nickName"
    }
};
```

#### ContactAttributes

联系人属性列表，一般作为入参用来标识希望查询的联系人属性。

当传入为null时，默认查询全部属性。

元服务API：从API version 11 开始，该接口支持在元服务中使用。

系统能力：SystemCapability.Applications.ContactsData

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| attributes | [Attribute](#attribute)[] | 否 | 否 | 联系人属性列表。 |

示例：

通过JSON格式创建数据。

```
let contactAttributes: contact.ContactAttributes = {
    attributes: [
        contact.Attribute.ATTR_EMAIL,
        contact.Attribute.ATTR_NAME,
        contact.Attribute.ATTR_PHONE
    ]
};
```

#### Attribute

枚举，类型为number。联系人属性列表。

元服务API：从API version 11 开始，该接口支持在元服务中使用。

系统能力：SystemCapability.Applications.ContactsData

| 名称 | 值 | 说明 |
| --- | --- | --- |
| ATTR_CONTACT_EVENT | 0 | 联系人的生日、周年纪念等重要日期。 |
| ATTR_EMAIL | 1 | 联系人的邮箱地址。 |
| ATTR_GROUP_MEMBERSHIP | 2 | 联系人的群组。 |
| ATTR_IM | 3 | 联系人的即时消息地址。 |
| ATTR_NAME | 4 | 联系人的姓名。 |
| ATTR_NICKNAME | 5 | 联系人的昵称。 |
| ATTR_NOTE | 6 | 联系人的备注。 |
| ATTR_ORGANIZATION | 7 | 联系人的组织信息。 |
| ATTR_PHONE | 8 | 联系人的电话号码。 |
| ATTR_PORTRAIT | 9 | 联系人的头像。 |
| ATTR_POSTAL_ADDRESS | 10 | 联系人的邮政地址。 |
| ATTR_RELATION | 11 | 联系人的关系。 |
| ATTR_SIP_ADDRESS | 12 | 联系人的会话发起协议(SIP)地址。 |
| ATTR_WEBSITE | 13 | 联系人的网站。 |

示例：

通过JSON格式创建数据。

```
let attributes = [contact.Attribute.ATTR_EMAIL, contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE];
```

#### Email

联系人的邮箱。

元服务API：从API version 11 开始，该接口支持在元服务中使用。

系统能力：SystemCapability.Applications.ContactsData

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| CUSTOM_LABEL | number | 是 | 否 | 自定义邮箱类型，默认值为0。 |
| EMAIL_HOME | number | 是 | 否 | 家庭邮箱类型，默认值为1。 |
| EMAIL_WORK | number | 是 | 否 | 工作邮箱类型，默认值为2。 |
| EMAIL_OTHER | number | 是 | 否 | 其它邮箱类型，默认值为3。 |
| INVALID_LABEL_ID | number | 是 | 否 | 无效邮箱类型，默认值为-1。 |
| email | string | 否 | 否 | 邮箱地址。 |
| labelName | string | 否 | 是 | 邮箱的类型名称。 |
| displayName | string | 否 | 是 | 邮箱的显示名称。 |
| labelId | number | 否 | 是 | 邮箱的类型。 |

示例：

使用JSON格式创建数据。

```
import { contact } from '@kit.ContactsKit';

let email: contact.Email = {
    email: "xxx@email.com",
    displayName: "displayName"
}
```
 或使用new一个Email对象的方式创建数据。

```
let email = new contact.Email();
email.email = "xxx@email.com";
```

#### Holder

创建联系人的应用信息类。

系统能力：SystemCapability.Applications.ContactsData

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| bundleName | string | 是 | 否 | Bundle名称，默认值为com.ohos.contacts。 |
| displayName | string | 是 | 是 | 应用名称，默认值为空。 |
| holderId | number | 否 | 是 | 应用Id，默认值为空。 |

示例：

使用JSON格式创建数据。

```
let holder: contact.Holder = {
  bundleName: "com.ohos.contacts",
  displayName: "displayName",
  holderId: 1
};
```

#### Event

联系人事件类。

元服务API：从API version 11 开始，该接口支持在元服务中使用。

系统能力：SystemCapability.Applications.ContactsData

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| CUSTOM_LABEL | number | 是 | 否 | 自定义事件类型，默认值为0。 |
| EVENT_ANNIVERSARY | number | 是 | 否 | 周年纪念事件类型，默认值为1。 |
| EVENT_OTHER | number | 是 | 否 | 其它事件类型，默认值为2。 |
| EVENT_BIRTHDAY | number | 是 | 否 | 生日事件类型，默认值为3。 |
| INVALID_LABEL_ID | number | 是 | 否 | 无效事件类型，默认值为-1。 |
| eventDate | string | 否 | 否 | 事件的日期。 |
| labelName | string | 否 | 是 | 事件类型名称。 |
| labelId | number | 否 | 是 | 事件类型。 |

示例：

使用JSON格式创建数据。

```
let event: contact.Event = {
    eventDate: "2000-01-01"
};
```
 或使用new一个Event对象的方式创建数据。

```
let event = new contact.Event();
event.eventDate = "2000-01-01";
```

#### Group

联系人的群组类。

元服务API：从API version 11 开始，该接口支持在元服务中使用。

系统能力：SystemCapability.Applications.ContactsData

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| groupId | number | 否 | 是 | 联系人群组的Id。 |
| title | string | 否 | 否 | 联系人群组的名称。 |

示例：

使用JSON格式创建数据。

```
import { contact } from '@kit.ContactsKit';

let group: contact.Group = {
    groupId: 1,
    title: "title"
};
```

#### ImAddress

联系人的即时消息地址。

元服务API：从API version 11 开始，该接口支持在元服务中使用。

系统能力：SystemCapability.Applications.ContactsData

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| CUSTOM_LABEL | number | 是 | 否 | 自定义即时消息类型，默认值为-1。 |
| IM_AIM | number | 是 | 否 | AIM即时消息类型，默认值为0。 |
| IM_MSN | number | 是 | 否 | MSN即时消息类型，默认值为1。 |
| IM_YAHOO | number | 是 | 否 | YAHOO即时消息类型，默认值为2。 |
| IM_SKYPE | number | 是 | 否 | SKYPE即时消息类型，默认值为3。 |
| IM_QQ | number | 是 | 否 | QQ即时消息类型，默认值为4。 |
| IM_ICQ | number | 是 | 否 | ICQ即时消息类型，默认值为6。 |
| IM_JABBER | number | 是 | 否 | JABBER即时消息类型，默认值为7。 |
| INVALID_LABEL_ID | number | 是 | 否 | 无效的即时消息类型，默认值为-2。 |
| imAddress | string | 否 | 否 | 即时消息地址。 |
| labelName | string | 否 | 是 | 即时消息类型名称。 |
| labelId | number | 否 | 是 | 即时消息类型。 |

示例：

使用JSON格式创建数据。

```
import { contact } from '@kit.ContactsKit';

let imAddress: contact.ImAddress = {
    imAddress: "imAddress",
    labelName: "labelName"
};
```
 或使用new一个ImAddress对象的方式创建数据。

```
let imAddress = new contact.ImAddress();
imAddress.imAddress = "imAddress";
```

#### Name

联系人的名字类。

系统能力：SystemCapability.Applications.ContactsData

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| familyName | string | 否 | 是 | 联系人的家庭姓名。**元服务API**：从API version 11 开始，该接口支持在元服务中使用。 |
| familyNamePhonetic | string | 否 | 是 | 联系人的家庭姓名拼音。**元服务API**：从API version 11 开始，该接口支持在元服务中使用。 |
| fullName | string | 否 | 否 | 联系人的全名。**元服务API**：从API version 11 开始，该接口支持在元服务中使用。 |
| givenName | string | 否 | 是 | 联系人的名称(firstName)。**元服务API**：从API version 11 开始，该接口支持在元服务中使用。 |
| givenNamePhonetic | string | 否 | 是 | 联系人的名称拼音。**元服务API**：从API version 11 开始，该接口支持在元服务中使用。 |
| middleName | string | 否 | 是 | 联系人的中间名。**元服务API**：从API version 11 开始，该接口支持在元服务中使用。 |
| middleNamePhonetic | string | 否 | 是 | 联系人的中间名拼音。**元服务API**：从API version 11 开始，该接口支持在元服务中使用。 |
| namePrefix | string | 否 | 是 | 联系人的姓名前缀。**元服务API**：从API version 11 开始，该接口支持在元服务中使用。 |
| nameSuffix | string | 否 | 是 | 联系人的姓名后缀。**元服务API**：从API version 11 开始，该接口支持在元服务中使用。 |
| hasName22+ | boolean | 否 | 是 | 联系人信息中是否包含姓名。true表示包含，false表示不包含。**元服务API**：从API version 22 开始，该接口支持在元服务中使用。 |

示例：

使用JSON格式创建数据。

```
import { contact } from '@kit.ContactsKit';

let name: contact.Name = {
    familyName: "familyName",
    fullName: "fullName"
};
```

#### NickName

联系人的昵称类。

元服务API：从API version 11 开始，该接口支持在元服务中使用。

系统能力：SystemCapability.Applications.ContactsData

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| nickName | string | 否 | 否 | 联系人的昵称。 |

示例：

使用JSON格式创建数据。

```
import { contact } from '@kit.ContactsKit';

let nickName: contact.NickName = {
    nickName: "nickName"
};
```

#### Note

联系人的备注类。

元服务API：从API version 11 开始，该接口支持在元服务中使用。

系统能力：SystemCapability.Applications.ContactsData

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| noteContent | string | 否 | 否 | 联系人的备注内容。 |

示例：

使用JSON格式创建数据。

```
let note: contact.Note = {
    noteContent: "noteContent"
};
```

#### Organization

联系人的组织类。

元服务API：从API version 11 开始，该接口支持在元服务中使用。

系统能力：SystemCapability.Applications.ContactsData

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| name | string | 否 | 否 | 单位名称。 |
| title | string | 否 | 是 | 职位名称。 |

示例：

使用JSON格式创建数据。

```
import { contact } from '@kit.ContactsKit';

let organization: contact.Organization = {
    name: "name",
    title: "title"
};
```

#### PhoneNumber

联系人电话号码类。

元服务API：从API version 11 开始，该接口支持在元服务中使用。

系统能力：SystemCapability.Applications.ContactsData

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| CUSTOM_LABEL | number | 是 | 否 | 自定义电话类型，默认值是0。 |
| NUM_HOME | number | 是 | 否 | 家庭电话类型，默认值是1。 |
| NUM_MOBILE | number | 是 | 否 | 移动电话类型，默认值是2。 |
| NUM_WORK | number | 是 | 否 | 工作电话类型，默认值是3。 |
| NUM_FAX_WORK | number | 是 | 否 | 工作传真电话类型，默认值是4。 |
| NUM_FAX_HOME | number | 是 | 否 | 家庭传真电话类型，默认值是5。 |
| NUM_PAGER | number | 是 | 否 | 寻呼机电话类型，默认值是6。 |
| NUM_OTHER | number | 是 | 否 | 其它电话类型，默认值是7。 |
| NUM_CALLBACK | number | 是 | 否 | 回呼电话类型，默认值是8。 |
| NUM_CAR | number | 是 | 否 | 车机电话类型，默认值是9。 |
| NUM_COMPANY_MAIN | number | 是 | 否 | 公司电话类型，默认值是10。 |
| NUM_ISDN | number | 是 | 否 | 综合业务数字网(ISDN)电话类型，默认值是11。 |
| NUM_MAIN | number | 是 | 否 | 主电话类型，默认值是12。 |
| NUM_OTHER_FAX | number | 是 | 否 | 其它传真类型，默认值是13。 |
| NUM_RADIO | number | 是 | 否 | 无线电话类型，默认值是14。 |
| NUM_TELEX | number | 是 | 否 | 电传电话类型，默认值是15。 |
| NUM_TTY_TDD | number | 是 | 否 | 电传打字机(TTY)或测试驱动开发(TDD)电话类型，默认值是16。 |
| NUM_WORK_MOBILE | number | 是 | 否 | 工作移动电话类型，默认值是17。 |
| NUM_WORK_PAGER | number | 是 | 否 | 工作寻呼机电话类型，默认值是18。 |
| NUM_ASSISTANT | number | 是 | 否 | 助理电话类型，默认值是19。 |
| NUM_MMS | number | 是 | 否 | 彩信电话类型，默认值是20。 |
| INVALID_LABEL_ID | number | 是 | 否 | 无效电话类型，默认值是-1。 |
| labelName | string | 否 | 是 | 电话号码类型名称。 |
| phoneNumber | string | 否 | 否 | 电话号码。 |
| labelId | number | 否 | 是 | 电话号码类型。 |

示例：

使用JSON格式创建数据。

```
import { contact } from '@kit.ContactsKit';

let phoneNumber: contact.PhoneNumber = {
    phoneNumber: "138xxxxxxxx",
    labelId: contact.PhoneNumber.NUM_HOME
};
```
 或使用new一个PhoneNumber对象的方式创建数据。

```
let phoneNumber = new contact.PhoneNumber();
phoneNumber.phoneNumber = "138xxxxxxxx";
```

#### Portrait

联系人的头像类。

![](./img/note_3.0-zh-cn.png) 从API version 22开始，支持通过uri和[PixelMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-pixelmap)格式设置联系人头像资源(暂不支持通过[addContactViaUI](#contactaddcontactviaui15)、[saveToExistingContactViaUI](#contactsavetoexistingcontactviaui15)接口设置)。

uri为可访问的联系人头像文件地址，[PixelMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-pixelmap)为通过联系人头像资源生成的[PixelMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-pixelmap)对象。

从API version 22开始，支持通过uri格式读取联系人头像资源，该格式仅支持以[fileIo.open](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-fs#fileioopen)方式打开，无法直接在Image组件内显示，需读取后转换为[PixelMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-pixelmap)格式显示。

系统能力：SystemCapability.Applications.ContactsData

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| uri | string | 否 | 否 | uri格式联系人头像。**元服务API**：从API version 11 开始，该接口支持在元服务中使用。 |
| photo22+ | [image.PixelMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-pixelmap) | 否 | 是 | PixelMap格式的联系人头像。**元服务API**：从API version 22 开始，该接口支持在元服务中使用。 |

示例：

使用JSON格式创建数据。

```
import { contact } from '@kit.ContactsKit';
import { image } from '@kit.ImageKit';

async function SetPortraitUri(uri: string) {
  let portrait: contact.Portrait = {
    uri: uri
  };
}

async function SetPortraitPixelMap(photo: image.PixelMap) {
  let portrait: contact.Portrait = {
    uri: "",
    photo: photo
  };
}
```

#### PostalAddress

联系人的邮政地址类。

元服务API：从API version 11 开始，该接口支持在元服务中使用。

系统能力：SystemCapability.Applications.ContactsData

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| CUSTOM_LABEL | number | 是 | 否 | 自定义邮政地址类型，默认值为0。 |
| ADDR_HOME | number | 是 | 否 | 家庭地址类型，默认值为1。 |
| ADDR_WORK | number | 是 | 否 | 工作地址类型，默认值为2。 |
| ADDR_OTHER | number | 是 | 否 | 其它地址类型，默认值为3。 |
| INVALID_LABEL_ID | number | 是 | 否 | 无效地址类型，默认值为-1。 |
| city | string | 否 | 是 | 联系人所在的城市。 |
| country | string | 否 | 是 | 联系人所在的国家。 |
| labelName | string | 否 | 是 | 邮政地址类型名称。 |
| neighborhood | string | 否 | 是 | 联系人的邻居。 |
| pobox | string | 否 | 是 | 联系人的邮箱。 |
| postalAddress | string | 否 | 否 | 联系人的邮政地址。 |
| postcode | string | 否 | 是 | 联系人所在区域的邮政编码。 |
| region | string | 否 | 是 | 联系人所在的区域。 |
| street | string | 否 | 是 | 联系人所在的街道。 |
| labelId | number | 否 | 是 | 邮政地址类型。 |

示例：

使用JSON格式创建数据。

```
import { contact } from '@kit.ContactsKit';

let postalAddress: contact.PostalAddress = {
    city: "city",
    postalAddress: "postalAddress"
};
```
 或使用new一个PostalAddress对象的方式创建数据。

```
import { contact } from '@kit.ContactsKit';

let postalAddress = new contact.PostalAddress();
postalAddress.city = "city";
postalAddress.postalAddress = "postalAddress";
```

#### Relation

联系人的关系类。

元服务API：从API version 11 开始，该接口支持在元服务中使用。

系统能力：SystemCapability.Applications.ContactsData

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| CUSTOM_LABEL | number | 是 | 否 | 自定义关系类型，默认值为0。 |
| RELATION_ASSISTANT | number | 是 | 否 | 助手关系类型，默认值为1。 |
| RELATION_BROTHER | number | 是 | 否 | 兄弟关系类型，默认值为2。 |
| RELATION_CHILD | number | 是 | 否 | 子女关系类型，默认值为3。 |
| RELATION_DOMESTIC_PARTNER | number | 是 | 否 | 同居同伴关系类型，默认值为4。 |
| RELATION_FATHER | number | 是 | 否 | 父亲关系类型，默认值为5。 |
| RELATION_FRIEND | number | 是 | 否 | 朋友关系类型，默认值为6。 |
| RELATION_MANAGER | number | 是 | 否 | 管理者关系类型，默认值为7。 |
| RELATION_MOTHER | number | 是 | 否 | 母亲关系类型，默认值为8。 |
| RELATION_PARENT | number | 是 | 否 | 父母关系类型，默认值为9。 |
| RELATION_PARTNER | number | 是 | 否 | 合作伙伴关系类型，默认值为10。 |
| RELATION_REFERRED_BY | number | 是 | 否 | 推荐人关系类型，默认值为11。 |
| RELATION_RELATIVE | number | 是 | 否 | 亲属关系类型，默认值为12。 |
| RELATION_SISTER | number | 是 | 否 | 姐妹关系类型，默认值为13。 |
| RELATION_SPOUSE | number | 是 | 否 | 配偶关系类型，默认值为14。 |
| INVALID_LABEL_ID | number | 是 | 否 | 无效的关系类型，默认值为-1。 |
| labelName | string | 否 | 是 | 关系类型名称。 |
| relationName | string | 否 | 否 | 关系名称。 |
| labelId | number | 否 | 是 | 关系类型。 |

示例：

使用JSON格式创建数据。

```
import { contact } from '@kit.ContactsKit';

let relation: contact.Relation = {
    relationName: "relationName",
    labelId: contact.Relation.RELATION_ASSISTANT
};
```
 或使用new一个Relation对象的方式创建数据。

```
import { contact } from '@kit.ContactsKit';

let relation = new contact.Relation();
relation.relationName = "relationName";
relation.labelId = contact.Relation.RELATION_ASSISTANT;
```

#### SipAddress

联系人的会话发起协议(SIP)地址类。

元服务API：从API version 11 开始，该接口支持在元服务中使用。

系统能力：SystemCapability.Applications.ContactsData

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| CUSTOM_LABEL | number | 是 | 否 | 自定义会话发起协议(SIP)地址类型，默认值为0。 |
| SIP_HOME | number | 是 | 否 | 家庭会话发起协议(SIP)地址类型，默认值为1。 |
| SIP_WORK | number | 是 | 否 | 工作会话发起协议(SIP)地址类型，默认值为2。 |
| SIP_OTHER | number | 是 | 否 | 其它会话发起协议(SIP)地址类型，默认值为3。 |
| INVALID_LABEL_ID | number | 是 | 否 | 无效会话发起协议(SIP)地址类型，默认值为-1。 |
| labelName | string | 否 | 是 | 会话发起协议(SIP)地址类型名称。 |
| sipAddress | string | 否 | 否 | 会话发起协议(SIP)地址。 |
| labelId | number | 否 | 是 | 会话发起协议(SIP)地址类型。 |

示例：

使用JSON格式创建数据。

```
import { contact } from '@kit.ContactsKit';

let sipAddress: contact.SipAddress = {
    sipAddress: "sipAddress"
};
```
 或使用new一个SipAddress对象的方式创建数据。

```
import { contact } from '@kit.ContactsKit';

let sipAddress = new contact.SipAddress();
sipAddress.sipAddress = "sipAddress";
```

#### Website

联系人的网站信息类。

元服务API：从API version 11 开始，该接口支持在元服务中使用。

系统能力：SystemCapability.Applications.ContactsData

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| website | string | 否 | 否 | 联系人的网站信息。 |

示例：

使用JSON格式创建数据。

```
import { contact } from '@kit.ContactsKit';

let website: contact.Website = {
    website: "website"
};
```
