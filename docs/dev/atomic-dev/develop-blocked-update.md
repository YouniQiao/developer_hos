---
title: "阻断式更新"
original_url: /docs/dev/atomic-dev/ascf/develop-basic-capabilities/develop-blocked-update
format: md
upstream_id: dev/atomic-dev/ascf/develop-basic-capabilities/develop-blocked-update
last_sync: 2026-06-07
sync_hash: c2c998d9
---
如果希望在用户使用元服务过程中进行版本更新，可以使用阻断式更新的方式进行更新。使用[监听元服务更新检查接口](/docs/dev/atomic-dev/ascf/apis-basis/apis-updatemanager#updatemanageroncheckforupdate)，然后在[监听元服务新版本下载完成事件接口](/docs/dev/atomic-dev/ascf/apis-basis/apis-updatemanager#updatemanageronupdateready)的回调函数中调用[重启元服务接口](/docs/dev/atomic-dev/ascf/apis-basis/apis-updatemanager#updatemanagerapplyupdate)的方式触发更新。

![](./img/8c7e0d30.png)

阻断式更新接口依赖手机rom版本，从HarmonyOS 6.0.0(20)开始支持。

![](./img/97a86a8d.png "点击放大")

1. 开发者通过[has.getUpdateManager](/docs/dev/atomic-dev/ascf/apis-basis/apis-updatemanager#hasgetupdatemanager)接口获取全局唯一的版本更新管理器对象。
2. 开发者通过[UpdateManager.onCheckForUpdate](/docs/dev/atomic-dev/ascf/apis-basis/apis-updatemanager#updatemanageroncheckforupdate)接口检查元服务是否有可用更新。
3. 如果元服务有可用更新，应用市场将会回调通知给开发者，并尝试下载最新的元服务包。
4. 开发者通过[UpdateManager.onUpdateReady](/docs/dev/atomic-dev/ascf/apis-basis/apis-updatemanager#updatemanageronupdateready)接口检查元服务包是否下载完成，下载完成后会触发回调函数。
5. 元服务包下载完成后，需要实现弹窗明确提醒用户是否要进行升级。
6. 如果用户在弹窗中选择升级，开发者可以调用[UpdateManager.applyUpdate](/docs/dev/atomic-dev/ascf/apis-basis/apis-updatemanager#updatemanagerapplyupdate)方法重启元服务。系统将对元服务进行免安装更新，并在更新成功后以新版本打开元服务。

   如果用户在弹窗中选择不升级，则元服务仍然以旧版本元服务包运行。

![](./img/d683b4d1.png)

* 在调用检查更新接口后，元服务包下载完成时，需要开发者自行进行弹窗，提示用户选择是否进行更新。
* 弹窗内容标题需要为“更新提示”。
* 只有用户在更新弹窗中选择确认更新，才可以进行更新操作。

![](./img/c769af43.png "点击放大")

```
const updateManager = has.getUpdateManager();
updateManager.onCheckForUpdate(res => {
  console.info('是否有新版本', res.hasUpdate);
});
updateManager.onUpdateReady(() => {
  has.showModal({
    title: '更新提示',
    content: '新版本已准备就绪，是否立即重启？',
    confirmText: '立即重启',
    success: (res) => {
      if (res.confirm) {
        updateManager.applyUpdate();
      }
    }
  });
});
```

![](./img/483c7f3a.png)

* 使用阻断式更新需要先实现明示用户是否选择更新的弹窗，依据用户选择进行强制更新。
* 监听元服务更新接口，同一设备元服务的调用次数不超过6次/天、每30分钟调用次数不超过1次。
