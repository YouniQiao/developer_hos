---
title: "在系统设置修改了应用权限，应用能否监听到权限变化"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-access-control-10
format: md
---


使用[on](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-abilityaccessctrl#on18)可以监听应用权限变化，示例代码中监听的是ohos.permission.APPROXIMATELY\_LOCATION权限变化，需要在module.json5进行相应的权限声明，参考代码如下：

```
import { abilityAccessCtrl, Permissions } from '@kit.AbilityKit';

@Entry
@Component
struct Index {
  aboutToAppear(): void {
    let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();
    let permissionList: Array<Permissions> = ['ohos.permission.APPROXIMATELY_LOCATION'];
    try {
      atManager.on('selfPermissionStateChange', permissionList, (data: abilityAccessCtrl.PermissionStateChangeInfo) => {
        console.info('receive permission state change, data:' + JSON.stringify(data));
      });
    } catch (err) {
      console.error(`catch err->${JSON.stringify(err)}`);
    }
  }

  build() {
    // ...
  }
}
```
