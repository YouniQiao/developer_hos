---
format: md
title: "如何在App启动时让各种权限弹窗的申请自动弹出"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-ability/faqs-ability-kit/faqs-ability-92
upstream_id: FAQ/faqs-app-framework-development/faqs-ability/faqs-ability-kit/faqs-ability-92
last_sync: 2026-06-07
sync_hash: c6684af6
---
将requestPermissionsFromUser接口放到EntryAbility.ets文件的loadContent回调中，参考代码如下：

```
windowStage.loadContent('pages/Index', (err) => {
  let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();
  atManager.requestPermissionsFromUser(this.context, ['ohos.permission.ACCESS_BLUETOOTH'])
    .then((data: PermissionRequestResult) => {
      console.info('data:' + JSON.stringify(data));
      console.info('data permissions:' + data.permissions);
      console.info('data authResults:' + data.authResults);
    }).catch((err: BusinessError) => {
    console.error('data:' + JSON.stringify(err));
  });
});
```

在设置文件中声明目标权限：

```
"requestPermissions": [
  {
    "name": "ohos.permission.ACCESS_BLUETOOTH",
    "usedScene": {
      "abilities": [
        "EntryAbility"
      ],
      "when": "inuse"
    },
    "reason": "$string:app_name"
  }
],
```

**参考链接**

[abilityAccessCtrl.createAtManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-abilityaccessctrl#abilityaccessctrlcreateatmanager)
