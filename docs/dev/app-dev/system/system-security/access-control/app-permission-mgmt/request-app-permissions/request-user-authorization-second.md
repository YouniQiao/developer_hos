---
title: "再次向用户申请授权"
original_url: /docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization-second
format: md
upstream_id: dev/app-dev/system/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization-second
last_sync: 2026-06-07
sync_hash: f7642a82
---
当应用通过[requestPermissionsFromUser()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-abilityaccessctrl#requestpermissionsfromuser9)拉起弹框[请求用户授权](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization)时，如果用户拒绝授权，应用将无法再次通过requestPermissionsFromUser()拉起弹框。用户需要在系统设置中手动授权。

在“设置”应用中的路径如下：

* 路径一：设置 > 隐私与安全 > 权限类型（如位置信息） > 具体应用
* 路径二：设置 > 应用和元服务 > 某个应用

应用也可以通过调用[requestPermissionOnSetting()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-abilityaccessctrl#requestpermissiononsetting12)，直接拉起权限设置弹框，引导用户授权。

效果展示：

![](./img/a816505a.png)

以下示例代码展示了如何再次拉起弹框申请ohos.permission.APPROXIMATELY\_LOCATION权限。

```
import { abilityAccessCtrl, Context, common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

// ···
          let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();
          let context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;
          atManager.requestPermissionOnSetting(context, ['ohos.permission.APPROXIMATELY_LOCATION']).then((data: Array<abilityAccessCtrl.GrantStatus>) => {
            console.info(`requestPermissionOnSetting success, result: ${data}`);
          }).catch((err: BusinessError) => {
            console.error(`requestPermissionOnSetting fail, code: ${err.code}, message: ${err.message}`);
          });
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/RequestUserAuthorization/entry/src/main/ets/secondpages/Index.ets#L18-L39" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>
