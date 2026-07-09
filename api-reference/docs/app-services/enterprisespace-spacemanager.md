---
title: "@hms.enterpriseSpaceService.spaceManager(空间管理)"
upstream_id: "harmonyos-references/enterprisespace-spacemanager"
catalog: "harmonyos-references"
content_hash: "0812ef715665"
synced_at: "2026-07-09T01:01:17.833446"
---

# @hms.enterpriseSpaceService.spaceManager(空间管理)

空间管理服务提供统一的空间管理能力，包括创建工作空间、移除工作空间、订阅空间事件等功能，满足用户空间使用和企业对空间的管理诉求。

起始版本： 6.0.0(20)

#### 导入模块

```
import { spaceManager } from '@kit.EnterpriseSpaceKit';
```

#### CreateWorkspaceParams

创建工作空间参数。

起始版本： 6.0.0(20)

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.EnterpriseSpace.ServiceManage

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| shortName | string | 否 | 否 | 工作空间的本地简称，其值与[WorkspaceInfo](#workspaceinfo)下的localName一致。 |

#### WorkspaceDomainInfo

工作空间域账号信息。

起始版本： 6.0.0(20)

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.EnterpriseSpace.ServiceManage

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| domain | string | 否 | 否 | 域名，仅在企业空间有值，例如“xx.com”，在个人空间中，其值为空。 |
| workspaceName | string | 否 | 否 | 工作空间域账号名称，仅在企业空间中有效，而在个人空间中则为空。 |
| accountId | string | 否 | 是 | 域中的账号标识符，仅在企业空间中有效，而在个人空间中则为空。其创建空间时，由系统自动生成的字符串，在[setWorkspaceInfo](#setworkspaceinfo)中可设置为空。 |
| isAuthenticated | boolean | 否 | 是 | 工作空间是否已鉴权。 - true：已鉴权 - false：未鉴权 默认值为false。 |
| serverConfigId | string | 否 | 是 | 工作空间所属域的服务器配置标识符。由创建空间时系统自动生成的，仅在企业空间中有效，例如“xx:test.com”，而在个人空间中则为空。企业账号未认证时，默认值为空。 |
| enterpriseWorkspaceName | string | 否 | 是 | 企业空间名称，企业设备在某个空间下的标签属性，默认值为空。例如，在企业空间下，此字段表示“企业空间”；在个人空间下，此字段表示“个人空间”。 **起始版本**：6.0.2(22) |

#### WorkspaceInfo

工作空间信息。

起始版本： 6.0.0(20)

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.EnterpriseSpace.ServiceManage

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| workspaceId | number | 否 | 否 | 工作空间ID。首个空间ID为100，后续创建的工作空间ID逐一递增，例如101、102。 |
| localName | string | 否 | 否 | 工作空间的本地账号名称，例如，“test”。 |
| shortName | string | 否 | 是 | 工作空间的本地简称，其值与localName一致。 |
| isUnlocked | boolean | 否 | 否 | 工作空间是否处于解锁状态。 - true：解锁状态 - false：锁屏状态 默认值为false。 |
| photo | string | 否 | 否 | 工作空间的资料照片，是由本地照片的Base64格式拼接成的JSON字符串。“type”为照片类型，当前仅支持值为0；“defaultImg”为由照片转为Base64格式的字符串。例如，拼接后字符串为“{"type":0,"defaultImg":"data:image/png;base64,iVBO******Jggg==}”。 |
| createTime | number | 否 | 否 | 工作空间的创建时间戳，为系统生成的10位数字组成的时间戳。 |
| lastLoginTime | number | 否 | 否 | 工作空间的最后登录时间，通常为系统生成的10位数字组成的时间戳。 |
| serialNumber | number | 否 | 否 | 通常为由9位数字组成的工作空间序列号。 |
| isActivated | boolean | 否 | 否 | 工作空间是否处于激活状态。 - true：激活状态 - false：未激活状态 默认值为false。 |
| isCreateCompleted | boolean | 否 | 否 | 工作空间创建是否完成。 - true：创建工作空间已完成状态 - false：创建工作空间未完成状态 默认值为true。 |
| isAllowedToBeDeleted | boolean | 否 | 否 | 工作空间是否允许被删除。 - true：允许被删除 - false：不允许被删除 默认值为true。 |
| domainInfo | [WorkspaceDomainInfo](#workspacedomaininfo) | 否 | 否 | 工作空间域信息，具体可参见[WorkspaceDomainInfo](#workspacedomaininfo)。 |

#### ProcessConfigInfo

管控的系统服务进程以及其不可访问路径的配置信息。

起始版本： 6.0.1(21)

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.EnterpriseSpace.ServiceManage

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| processName | string | 否 | 否 | 系统服务进程的名称。 |
| disallowPaths | string[] | 否 | 否 | 不可访问的路径列表，列表只能包含如下列表的子集：['/data/service','/data/app','/storage','/mnt'] |

#### WorkspaceType

工作空间类型。

起始版本： 6.0.0(20)

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.EnterpriseSpace.ServiceManage

| 名称 | 值 | 说明 |
| --- | --- | --- |
| ADMIN | 0 | 管理员工作空间，具有管理其他工作空间的权限。 |

#### QueryType

查询的工作空间类型。

起始版本： 6.0.0(20)

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.EnterpriseSpace.ServiceManage

| 名称 | 值 | 说明 |
| --- | --- | --- |
| ALL | 0 | 查询所有的工作空间。 |
| NON_DELETABLE | 1 | 查询不允许被删除的工作空间。 |

#### EventType

订阅事件类型。

起始版本： 6.0.0(20)

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.EnterpriseSpace.ServiceManage

| 名称 | 值 | 说明 |
| --- | --- | --- |
| EVENT_WORKSPACE_SWITCHED | 0 | 工作空间切换事件。 |

#### UserDataEnum

用户类型。

起始版本： 6.0.1(21)

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.EnterpriseSpace.ServiceManage

| 名称 | 值 | 说明 |
| --- | --- | --- |
| ENTERPRISE | 0 | 表示企业用户。 |
| PERSONAL | 1 | 表示个人用户。 |

#### EventData

与空间事件相关的详细信息。

起始版本： 6.0.0(20)

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.EnterpriseSpace.ServiceManage

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| event | [EventType](#eventtype) | 否 | 否 | 事件类型，取值可参见[EventType](#eventtype)。 |
| currentWorkspaceId | number | 否 | 是 | 当前工作空间ID，例如101、102。 |

#### LockdownModePolicy

锁定模式策略，包括后台应用冻结和公共目录加解密等安全加固功能，提供开关，关闭或者效率模式。

起始版本： 6.0.2(22)

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.EnterpriseSpace.ServiceManage

| 名称 | 值 | 说明 |
| --- | --- | --- |
| OFF | 0 | 关闭。关闭后不支持后台应用冻结和公共数据目录加解密。 |
| EFFICIENT | 1 | 效率模式。支持后台应用冻结和公共数据目录加解密。 |

#### SpaceGuidePolicy

个人空间创建引导页展示策略。

起始版本： 6.1.0(23)

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.EnterpriseSpace.ServiceManage

| 名称 | 值 | 说明 |
| --- | --- | --- |
| SHOW | 0 | 展示个人空间创建页引导页。 |
| HIDE | 1 | 隐藏个人空间创建页引导页。 |

#### AuthResult

企业认证返回结果。

起始版本： 6.1.0(23)

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.EnterpriseSpace.ServiceManage

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| result | number | 否 | 否 | 认证结果，0代表成功，其他代表失败。 |
| workspaceId | number | 否 | 否 | 当前调用方的工作空间ID。 |

#### StatusBarIcon

状态栏图标。

起始版本： 6.1.0(23)

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.EnterpriseSpace.ServiceManage

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| white | [image.PixelMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-pixelmap) | 否 | 否 | 黑色背景下图标，样式设计[参考设计规范](https://developer.huawei.com/consumer/cn/doc/design-guides/statusbar-0000002319710910#section13803824112416)。 |
| black | [image.PixelMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-pixelmap) | 否 | 否 | 白色背景下图标，样式设计[参考设计规范](https://developer.huawei.com/consumer/cn/doc/design-guides/statusbar-0000002319710910#section13803824112416)。 |

#### createWorkspace

createWorkspace(localName: string, workspaceType: WorkspaceType, params?: CreateWorkspaceParams): Promise<WorkspaceInfo>

创建工作空间。使用Promise异步回调。

![](./img/note_3.0-zh-cn.png) 从6.1.0(23)版本，在创建工作空间时，增加如下校验：

- 最多可创建2个工作空间。
- 企业管理员设置禁止添加账号或者关闭全盘解密后，无法创建工作空间。

起始版本： 6.0.0(20)

模型约束： 此接口仅可在Stage模型下使用。

需要权限： ohos.permission.ENTERPRISE_MANAGE_LOCAL_PUBLICSPACES或ohos.permission.MANAGE_LOCAL_WORKSPACES

系统能力： SystemCapability.EnterpriseSpace.ServiceManage

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| localName | string | 是 | 工作空间的本地名称。 |
| workspaceType | [WorkspaceType](#workspacetype) | 是 | 工作空间的类型，取值可参见[WorkspaceType](#workspacetype)。 |
| params | [CreateWorkspaceParams](#createworkspaceparams) | 否 | 创建工作空间配置，具体可参见[CreateWorkspaceParams](#createworkspaceparams)。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，返回工作空间信息。 |

错误码：

以下错误码的详细介绍请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-enterprise-space)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | The application does not have permission to call this function. |
| 1020400001 | System service exception. |
| 1020400002 | Parameter error. |
| 1020400003 | Invalid workspace. |
| 1020400007 | Enterprise workspace not enabled. |
| 1020400011 | Account creation is not permitted. |
| 1020400012 | Full disk encryption is not enabled. |

示例：

```
import { spaceManager } from '@kit.EnterpriseSpaceKit';

const localName: string = '111111';
const workspaceType: spaceManager.WorkspaceType = spaceManager.WorkspaceType.ADMIN;
const params: spaceManager.CreateWorkspaceParams = {
  shortName: 'test'
};
const workspaceInfo: spaceManager.WorkspaceInfo = await spaceManager.createWorkspace(localName, workspaceType, params);
console.info(`Succeeded in creating workspace. workspaceInfo: ${JSON.stringify(workspaceInfo)}`);
```

#### enableWorkspace

enableWorkspace(enable: boolean): Promise<void>

使能双空间特性。双空间分别为企业空间和个人空间，企业空间为完全受企业管控的通用办公空间，个人空间为因工作需要对外交流、作业、开源开发等用途的空间。使用Promise异步回调。

![](./img/note_3.0-zh-cn.png) 从6.1.0(23)开始，使能双空间特性时，增加以下校验：

- 用户数量不超过2个。
- 企业管理员设置关闭全盘解密后，无法使能双空间特性。

起始版本： 6.0.0(20)

模型约束： 此接口仅可在Stage模型下使用。

需要权限： ohos.permission.ENTERPRISE_MANAGE_LOCAL_PUBLICSPACES或ohos.permission.MANAGE_LOCAL_WORKSPACES

系统能力： SystemCapability.EnterpriseSpace.ServiceManage

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enable | boolean | 是 | 双空间特性是否启用。默认值为false。 - true：支持双空间特性 - false：不支持双空间特性 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，无返回结果。 |

错误码：

以下错误码的详细介绍请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-enterprise-space)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | The application does not have permission to call this function. |
| 1020400001 | System service exception. |
| 1020400002 | Parameter error. |
| 1020400003 | Invalid workspace. |
| 1020400012 | Full disk encryption is not enabled. |

示例：

```
import { spaceManager } from '@kit.EnterpriseSpaceKit';

const enable: boolean = true;
await spaceManager.enableWorkspace(enable);
console.info(`Succeeded in enabling workspace.`);
```

#### queryWorkspace

queryWorkspace(queryFlag: QueryType): Promise<WorkspaceInfo[]>

查询工作空间。使用Promise异步回调。

起始版本： 6.0.0(20)

模型约束： 此接口仅可在Stage模型下使用。

需要权限： ohos.permission.QUERY_LOCAL_WORKSPACES

系统能力： SystemCapability.EnterpriseSpace.ServiceManage

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| queryFlag | [QueryType](#querytype) | 是 | 工作空间类型，其取值可参见[QueryType](#querytype)。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，返回工作空间信息列表。 |

错误码：

以下错误码的详细介绍请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-enterprise-space)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | The application does not have permission to call this function. |
| 1020400001 | System service exception. |
| 1020400002 | Parameter error. |

示例：

```
import { spaceManager } from '@kit.EnterpriseSpaceKit';

const queryFlag: spaceManager.QueryType = spaceManager.QueryType.ALL;
const spaces: spaceManager.WorkspaceInfo[] = await spaceManager.queryWorkspace(queryFlag);
console.info(`Succeeded in querying workspace. spaces: ${JSON.stringify(spaces)}`);
```

#### removeWorkspace

removeWorkspace(workspaceId: number): Promise<void>

移除工作空间。使用Promise异步回调。

起始版本： 6.0.0(20)

模型约束： 此接口仅可在Stage模型下使用。

需要权限： ohos.permission.ENTERPRISE_MANAGE_LOCAL_PUBLICSPACES或ohos.permission.MANAGE_LOCAL_WORKSPACES

系统能力： SystemCapability.EnterpriseSpace.ServiceManage

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| workspaceId | number | 是 | 工作空间ID。首个空间ID为100，后续创建的工作空间ID逐一递增，例如101、102。取值应为[100,10736]内的整数。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，无返回结果。 |

错误码：

以下错误码的详细介绍请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-enterprise-space)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | The application does not have permission to call this function. |
| 1020400001 | System service exception. |
| 1020400002 | Parameter error. |
| 1020400003 | Invalid workspace. |
| 1020400007 | Enterprise workspace not enabled. |

示例：

```
import { spaceManager } from '@kit.EnterpriseSpaceKit';

const workspaceId: number = 101;  // 已经创建的工作空间ID。
await spaceManager.removeWorkspace(workspaceId);
console.info(`Succeeded in removing workspace.`);
```

#### setWorkspaceInfo

setWorkspaceInfo(workspaceId: number, domainInfo: WorkspaceDomainInfo): Promise<void>

设置工作空间域信息。使用Promise异步回调。

起始版本： 6.0.0(20)

模型约束： 此接口仅可在Stage模型下使用。

需要权限： ohos.permission.ENTERPRISE_MANAGE_LOCAL_PUBLICSPACES

系统能力： SystemCapability.EnterpriseSpace.ServiceManage

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| workspaceId | number | 是 | 工作空间ID。首个空间ID为100，后续创建的工作空间ID逐一递增，例如101、102。取值应为[100,10736]内的整数。 |
| domainInfo | [WorkspaceDomainInfo](#workspacedomaininfo) | 是 | 工作空间域信息，具体可参见[WorkspaceDomainInfo](#workspacedomaininfo)。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，无返回结果。 |

错误码：

以下错误码的详细介绍请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-enterprise-space)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | The application does not have permission to call this function. |
| 1020400001 | System service exception. |
| 1020400002 | Parameter error. |
| 1020400003 | Invalid workspace. |
| 1020400007 | Enterprise workspace not enabled. |

示例：

```
import { spaceManager } from '@kit.EnterpriseSpaceKit';

const workspaceId: number = 100;
const domainInfo: spaceManager.WorkspaceDomainInfo = {
  domain: 'test1',
  workspaceName: 'test2',
  accountId: 'test3',
  isAuthenticated: false,
  serverConfigId: 'test4',
  enterpriseWorkspaceName: 'default'
};

await spaceManager.setWorkspaceInfo(workspaceId, domainInfo);
console.info(`Succeeded in setting workspace info.`);
```

#### setWorkspaceProfilePhoto

setWorkspaceProfilePhoto(workspaceId: number, photo: string): Promise<void>

根据工作空间ID设置工作空间资料照片。使用Promise异步回调。

起始版本： 6.0.0(20)

模型约束： 此接口仅可在Stage模型下使用。

需要权限： ohos.permission.ENTERPRISE_MANAGE_LOCAL_PUBLICSPACES

系统能力： SystemCapability.EnterpriseSpace.ServiceManage

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| workspaceId | number | 是 | 工作空间ID。首个空间ID为100，后续创建的工作空间ID逐一递增，例如101、102。取值应为[100,10736]内的整数。 |
| photo | string | 是 | 设置的工作空间的资料照片，是由本地照片的Base64格式拼接成的JSON字符串。“type”为照片类型，当前仅支持值为0；“defaultImg”为由照片转为Base64格式的字符串。例如，拼接后字符串为“{"type":0,"defaultImg":"data:image/png;base64,iVBO******Jggg==}”。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，无返回结果。 |

错误码：

以下错误码的详细介绍请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-enterprise-space)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | The application does not have permission to call this function. |
| 1020400001 | System service exception. |
| 1020400002 | Parameter error. |
| 1020400003 | Invalid workspace. |
| 1020400007 | Enterprise workspace not enabled. |

示例：

```
import { spaceManager } from '@kit.EnterpriseSpaceKit';

const workspaceId: number = 100;
const photo: string = '{"type":0,"defaultImg":"data:image/png;base64,iVBO******Jggg==}';
try {
  await spaceManager.setWorkspaceProfilePhoto(workspaceId, photo);
  console.info(`Succeeded in setting workspace profile photo.`);
} catch (err) {
  console.error(`Failed to set workspace profile photo. Code: ${err.code}, message: ${err.message}`);
}
```

#### subscribeEvent

subscribeEvent(eventId: EventType[], callback: AsyncCallback<EventData>): number

订阅空间事件。使用callback异步回调。

起始版本： 6.0.0(20)

模型约束： 此接口仅可在Stage模型下使用。

需要权限： ohos.permission.ENTERPRISE_WORKSPACES_EVENT_SUBSCRIBE

系统能力： SystemCapability.EnterpriseSpace.ServiceManage

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| eventId | [EventType](#eventtype)[] | 是 | 订阅的空间事件类型列表。 |
| callback | AsyncCallback | 是 | 回调函数，当订阅空间事件成功，[EventData](#eventdata)为与空间事件相关的详细信息。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| number | 订阅ID，用于在取消空间事件中使用。首个返回的订阅ID为1，后续返回的订阅ID逐一递增，例如2、3。 |

错误码：

以下错误码的详细介绍请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-enterprise-space)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | The application does not have permission to call this function. |
| 1020400001 | System service exception. |
| 1020400002 | Parameter error. |
| 1020400006 | Session disconnected. |
| 1020400007 | Enterprise workspace not enabled. |

示例：

```
import { spaceManager } from '@kit.EnterpriseSpaceKit';
import { BusinessError } from '@kit.BasicServicesKit';

const subscribeId = spaceManager.subscribeEvent([spaceManager.EventType.EVENT_WORKSPACE_SWITCHED],
  (error: BusinessError, data: spaceManager.EventData) => {
    if (error) {
      console.error(`error info:${error?.code}, err message:${error?.message}`);
    } else {
      console.info(`event: ${data.event}, currentWorkSpaceId: ${data.currentWorkspaceId}`);
    }
  });
console.info(`Succeeded in subscribing event. subscribeId: ${subscribeId}`);
```

#### unsubscribeEvent

unsubscribeEvent(subscribeId: number): void

取消订阅空间事件。

起始版本： 6.0.0(20)

模型约束： 此接口仅可在Stage模型下使用。

需要权限： ohos.permission.ENTERPRISE_WORKSPACES_EVENT_SUBSCRIBE

系统能力： SystemCapability.EnterpriseSpace.ServiceManage

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| subscribeId | number | 是 | 由订阅空间事件得到的订阅ID，用于取消订阅对应的空间事件。 |

错误码：

以下错误码的详细介绍请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-enterprise-space)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | The application does not have permission to call this function. |
| 1020400001 | System service exception. |
| 1020400002 | Parameter error. |
| 1020400007 | Enterprise workspace not enabled. |

示例：

```
import { spaceManager } from '@kit.EnterpriseSpaceKit';

const subscribeId: number = 100;
spaceManager.unsubscribeEvent(subscribeId);
console.info(`Succeeded in unsubscribing event.`);
```

#### setRestrictedAccessBackgroundUserdata

setRestrictedAccessBackgroundUserdata(userData: UserDataEnum, enable: boolean): Promise<void>

设置系统服务进程不可访问后台用户数据的功能。使用Promise异步回调。

起始版本： 6.0.1(21)

模型约束： 此接口仅可在Stage模型下使用。

需要权限： ohos.permission.ENTERPRISE_MANAGE_LOCAL_PUBLICSPACES

系统能力： SystemCapability.EnterpriseSpace.ServiceManage

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| userData | [UserDataEnum](#userdataenum) | 是 | 表示用户空间类型。 |
| enable | boolean | 是 | 表示是否开启管控。默认值为true。 - true：表示开启管控，此时系统服务进程不可访问后台用户的数据 - false：表示关闭管控，此时系统服务进程可正常访问后台用户的数据 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，无返回结果。 |

错误码：

以下错误码的详细介绍请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-enterprise-space)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | The application does not have permission to call this function. |
| 1020400001 | System service exception. |
| 1020400002 | Parameter error. |
| 1020400007 | Enterprise workspace not enabled. |

示例：

```
import { spaceManager } from '@kit.EnterpriseSpaceKit';

const userData: spaceManager.UserDataEnum = spaceManager.UserDataEnum.ENTERPRISE;
const enable: boolean = false;
await spaceManager.setRestrictedAccessBackgroundUserdata(userData, enable)
console.info(`Succeeded in setting restricted access background user data. userData: ${userData}, enable: ${enable}`);
```

#### getRestrictedAccessBackgroundUserdataStatus

getRestrictedAccessBackgroundUserdataStatus(userData: UserDataEnum): Promise<boolean>

获取系统服务进程不可访问的后台用户数据状态。后台用户数据主要包含如下目录['/data/service','/data/app','/storage','/mnt']下特定路径下的用户数据。使用Promise异步回调。

起始版本： 6.0.1(21)

模型约束： 此接口仅可在Stage模型下使用。

需要权限： ohos.permission.ENTERPRISE_MANAGE_LOCAL_PUBLICSPACES

系统能力： SystemCapability.EnterpriseSpace.ServiceManage

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| userData | [UserDataEnum](#userdataenum) | 是 | 表示用户空间类型。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，表示当前用户空间不可访问功能状态。 表示是否开启管控。 - true：表示开启管控，此时系统服务进程不可访问后台用户的数据 - false：表示关闭管控，此时系统服务进程可正常访问后台用户的数据 |

错误码：

以下错误码的详细介绍请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-enterprise-space)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | The application does not have permission to call this function. |
| 1020400001 | System service exception. |
| 1020400002 | Parameter error. |
| 1020400007 | Enterprise workspace not enabled. |

示例：

```
import { spaceManager } from '@kit.EnterpriseSpaceKit';

const userData: spaceManager.UserDataEnum = spaceManager.UserDataEnum.ENTERPRISE;
const status: boolean = await spaceManager.getRestrictedAccessBackgroundUserdataStatus(userData);
console.info(`Succeeded in getting restricted access background user data status. status: ${status}`);
```

#### getRestrictedAccessBackgroundUserdataProcessList

getRestrictedAccessBackgroundUserdataProcessList(userData: UserDataEnum): Promise<ProcessConfigInfo[]>

获取不可访问后台用户数据的系统服务进程列表。使用Promise异步回调。

起始版本： 6.0.1(21)

模型约束： 此接口仅可在Stage模型下使用。

需要权限： ohos.permission.ENTERPRISE_MANAGE_LOCAL_PUBLICSPACES

系统能力： SystemCapability.EnterpriseSpace.ServiceManage

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| userData | [UserDataEnum](#userdataenum) | 是 | 表示用户空间类型。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，表示当前配置的管控信息列表。 |

错误码：

以下错误码的详细介绍请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-enterprise-space)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | The application does not have permission to call this function. |
| 1020400001 | System service exception. |
| 1020400002 | Parameter error. |
| 1020400007 | Enterprise workspace not enabled. |

示例：

```
import { spaceManager } from '@kit.EnterpriseSpaceKit';

const userData: spaceManager.UserDataEnum = spaceManager.UserDataEnum.ENTERPRISE;
try {
  const processConfigInfos: spaceManager.ProcessConfigInfo[] = await spaceManager.getRestrictedAccessBackgroundUserdataProcessList(userData);
  console.info(`Succeeded in getting restricted access background user data process list. processConfigInfos: ${JSON.stringify(processConfigInfos)}`);
} catch (err) {
  console.error(`Failed to get restricted access background user data process list. Code: ${err.code}, message: ${err.message}`);
}
```

#### addRestrictedAccessBackgroundUserdataProcessList

addRestrictedAccessBackgroundUserdataProcessList(userData: UserDataEnum, processName: string, disallowPaths?: string[]): Promise<void>

新增系统服务进程不可访问后台用户数据路径列表。使用Promise异步回调。

起始版本： 6.0.1(21)

模型约束： 此接口仅可在Stage模型下使用。

需要权限： ohos.permission.ENTERPRISE_MANAGE_LOCAL_PUBLICSPACES

系统能力： SystemCapability.EnterpriseSpace.ServiceManage

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| userData | [UserDataEnum](#userdataenum) | 是 | 表示用户空间类型。 |
| processName | string | 是 | 表示系统服务进程的名称。 |
| disallowPaths | string[] | 否 | 表示配置的不可访问的路径。 - 当不传该参数时，默认值为['/data/service','/data/app','/storage','/mnt'] - 当传该参数时，其值只能是['/data/service','/data/app','/storage','/mnt']列表的子集 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，无返回结果。 |

错误码：

以下错误码的详细介绍请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-enterprise-space)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | The application does not have permission to call this function. |
| 1020400001 | System service exception. |
| 1020400002 | Parameter error. |
| 1020400007 | Enterprise workspace not enabled. |

示例：

```
import { spaceManager } from '@kit.EnterpriseSpaceKit';

const userData: spaceManager.UserDataEnum = spaceManager.UserDataEnum.ENTERPRISE;
const processName: string = 'testSa'; // 系统实际服务进程的名称。
const disallowPaths: string[] = ['/data/service', '/data/app'];
try {
  await spaceManager.addRestrictedAccessBackgroundUserdataProcessList(userData, processName, disallowPaths);
  console.info(`Succeeded in adding restricted access background user data process list.`);
} catch (err) {
  console.error(`Failed to add restricted access background user data process list. Code: ${err.code}, message: ${err.message}`);
}
```

#### deleteRestrictedAccessBackgroundUserdataProcessList

deleteRestrictedAccessBackgroundUserdataProcessList(userData: UserDataEnum, processName: string): Promise<void>

删除系统服务进程不可访问后台用户数据路径列表。使用Promise异步回调。

起始版本： 6.0.1(21)

模型约束： 此接口仅可在Stage模型下使用。

需要权限： ohos.permission.ENTERPRISE_MANAGE_LOCAL_PUBLICSPACES

系统能力： SystemCapability.EnterpriseSpace.ServiceManage

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| userData | [UserDataEnum](#userdataenum) | 是 | 表示用户空间类型，其值参考[UserDataEnum](#userdataenum)枚举值。 |
| processName | string | 是 | 表示系统服务进程的名称。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，无返回结果。 |

错误码：

以下错误码的详细介绍请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-enterprise-space)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | The application does not have permission to call this function. |
| 1020400001 | System service exception. |
| 1020400002 | Parameter error. |
| 1020400007 | Enterprise workspace not enabled. |

示例：

```
import { spaceManager } from '@kit.EnterpriseSpaceKit';

const userData: spaceManager.UserDataEnum = spaceManager.UserDataEnum.ENTERPRISE;
const processName: string = 'testSa'; // 系统实际服务进程的名称。
try {
  await spaceManager.deleteRestrictedAccessBackgroundUserdataProcessList(userData, processName);
  console.info(`Succeeded in deleting restricted access background user data process list.`);
} catch (err) {
  console.error(`Failed to delete restricted access background user data process list. Code: ${err.code}, message: ${err.message}`);
}
```

#### setWorkspacePolicy

setWorkspacePolicy(key: string, value: number, workspaceId?: number): Promise<void>

设置工作空间策略。

起始版本： 6.0.2(22)

模型约束： 此接口仅可在Stage模型下使用。

需要权限： ohos.permission.ENTERPRISE_MANAGE_LOCAL_PUBLICSPACES

系统能力： SystemCapability.EnterpriseSpace.ServiceManage

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | 表示策略名称。从6.0.2(22)版本开始支持深度冻结策略“lockdown”，从6.1.0(23)版本开始支持个人空间创建引导页展示策略“spaceguide”。 |
| value | number | 是 | 表示策略状态。当key为“lockdown”时，取值可参见[LockdownModePolicy](#lockdownmodepolicy)枚举值；当key为“spaceguide”时，取值可参见[SpaceGuidePolicy](#spaceguidepolicy)枚举值。 |
| workspaceId | number | 否 | 工作空间ID。首个空间ID为100，后续创建的工作空间ID逐一递增，例如101、102。如果未设置，则默认使用调用者所在的工作空间ID。取值应为[100,10736]内的整数。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，无返回结果。 |

错误码：

以下错误码的详细介绍请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-enterprise-space)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | The application does not have permission to call this function. |
| 1020400001 | System service exception. |
| 1020400002 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |

示例：

```
import { spaceManager } from '@kit.EnterpriseSpaceKit';

const key: string = 'lockdown';
const value: spaceManager.LockdownModePolicy = spaceManager.LockdownModePolicy.OFF;
const workspaceId: number = 100;
await spaceManager.setWorkspacePolicy(key, value, workspaceId);
console.info(`Succeeded in setting workspace policy.`);
```

#### getWorkspacePolicy

getWorkspacePolicy(key: string, workspaceId?: number): Promise<number>

查询工作空间策略。

起始版本： 6.0.2(22)

模型约束： 此接口仅可在Stage模型下使用。

需要权限： ohos.permission.QUERY_LOCAL_WORKSPACES或ohos.permission.MANAGE_LOCAL_WORKSPACES

系统能力： SystemCapability.EnterpriseSpace.ServiceManage

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | 表示策略名称。从6.0.2(22)版本开始支持深度冻结策略“lockdown”，从6.1.0(23)版本开始支持个人空间创建引导页展示策略“spaceguide”。 |
| workspaceId | number | 否 | 工作空间ID。首个空间ID为100，后续创建的工作空间ID逐一递增，例如101、102。如果未设置，则默认使用调用者所在的工作空间ID。取值应为[100,10736]内的整数。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，策略状态，根据传入的key查看[LockdownModePolicy](#lockdownmodepolicy)或者[SpaceGuidePolicy](#spaceguidepolicy)的枚举值。 |

错误码：

以下错误码的详细介绍请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-enterprise-space)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | The application does not have permission to call this function. |
| 1020400001 | System service exception. |
| 1020400002 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| 1020400005 | Configuration not set. |

示例：

```
import { spaceManager } from '@kit.EnterpriseSpaceKit';

const key: string = 'lockdown';
const workspaceId: number = 100;
const value: number = await spaceManager.getWorkspacePolicy(key, workspaceId);
console.info(`Succeeded in getting workspace policy. value: ${value}`);
```

#### setLockdownExemptionApps

setLockdownExemptionApps(appIds: string[], workspaceId?: number): Promise<void>

设置深度冻结豁免名单。设置的豁免应用在后台空间可正常运行，不会被冻结。

起始版本： 6.0.2(22)

模型约束： 此接口仅可在Stage模型下使用。

需要权限： ohos.permission.ENTERPRISE_MANAGE_LOCAL_PUBLICSPACES

系统能力： SystemCapability.EnterpriseSpace.ServiceManage

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| appIds | string[] | 是 | 表示属于深度冻结豁免名单的应用ID数组。列表，例如“[com.example.test1, com.example.test2]”。 |
| workspaceId | number | 否 | 表示属于豁免名单的空间ID。首个空间ID为100，后续创建的工作空间ID逐一递增，例如101、102。如果未设置，则默认使用调用者所在的工作空间ID。取值应为[100,10736]内的整数。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，无返回结果。 |

错误码：

以下错误码的详细介绍请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-enterprise-space)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | The application does not have permission to call this function. |
| 1020400001 | System service exception. |
| 1020400002 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| 1020400007 | Enterprise workspace not enabled. |

示例：

```
import { spaceManager } from '@kit.EnterpriseSpaceKit';

const workspaceId: number = 100;
const appIds = [
    'com.example.enterprisespacekit_samplecode_clientdemo_arkts1',
    'com.example.enterprisespacekit_samplecode_clientdemo_arkts2'
  ];
await spaceManager.setLockdownExemptionApps(appIds, workspaceId);
console.info(`Succeeded in setting lockdown exemption apps.`);
```

#### getLockdownExemptionApps

getLockdownExemptionApps(workspaceId?: number): Promise<string[]>

查询深度冻结豁免名单。

起始版本： 6.0.2(22)

模型约束： 此接口仅可在Stage模型下使用。

需要权限： ohos.permission.QUERY_LOCAL_WORKSPACES或ohos.permission.MANAGE_LOCAL_WORKSPACES

系统能力： SystemCapability.EnterpriseSpace.ServiceManage

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| workspaceId | number | 否 | 工作空间ID。首个空间ID为100，后续创建的工作空间ID逐一递增，例如101、102。如果未设置，则默认使用调用者所在的工作空间ID。取值应为[100,10736]内的整数。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，表示深度冻结豁免名单。 |

错误码：

以下错误码的详细介绍请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-enterprise-space)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | The application does not have permission to call this function. |
| 1020400001 | System service exception. |
| 1020400002 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| 1020400007 | Enterprise workspace not enabled. |

示例：

```
import { spaceManager } from '@kit.EnterpriseSpaceKit';

const workspaceId: number = 100;
const apps: string[] = await spaceManager.getLockdownExemptionApps(workspaceId);
console.info(`Succeeded in getting lockdown exemption apps. apps: ${JSON.stringify(apps)}`);
```

#### authenticate

authenticate(enterpriseAuthInfo: WorkspaceDomainInfo, credential: Uint8Array): Promise<AuthResult>

企业账号认证。

起始版本： 6.1.0(23)

模型约束： 此接口仅可在Stage模型下使用。

需要权限： ohos.permission.ENTERPRISE_MANAGE_LOCAL_PUBLICSPACES

系统能力： SystemCapability.EnterpriseSpace.ServiceManage

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enterpriseAuthInfo | [WorkspaceDomainInfo](#workspacedomaininfo) | 是 | 工作空间域信息，具体可参见[WorkspaceDomainInfo](#workspacedomaininfo)。 |
| credential | Uint8Array | 是 | 企业用户登录凭证。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，表示企业账号认证结果。 |

错误码：

以下错误码的详细介绍请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-enterprise-space)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | The application does not have permission to call this function. |
| 1020400001 | System service exception. |
| 1020400002 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| 1020400004 | Authentication failed. |
| 1020400008 | Invalid account name or password. |
| 1020400009 | The account is locked. |
| 1020400010 | Enterprise authentication server unreachable. |

示例：

```
import { spaceManager } from '@kit.EnterpriseSpaceKit';

try {
  const enterpriseAuthInfo: spaceManager.WorkspaceDomainInfo = {
    domain: 'testDomain',
    workspaceName: 'testAccountName',
    serverConfigId: 'testServerConfigId'
  };
  const credential = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0])
  const authResult: spaceManager.AuthResult = await spaceManager.authenticate(enterpriseAuthInfo, credential);
  console.info(`Succeeded in authenticating. authResult: ${JSON.stringify(authResult)}`);
} catch (err) {
  console.error(`Failed to authenticate. Code: ${err.code}, message: ${err.message}`);
}
```

#### getAccessToken

getAccessToken(businessParams: Record<string, string>): Promise<Uint8Array>

获取企业应用访问令牌。

起始版本： 6.1.0(23)

模型约束： 此接口仅可在Stage模型下使用。

需要权限： ohos.permission.ENTERPRISE_MANAGE_LOCAL_PUBLICSPACES

系统能力： SystemCapability.EnterpriseSpace.ServiceManage

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| businessParams | Record | 是 | 业务参数，由业务方根据请求协议自定义。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，表示AccessToken。 |

错误码：

以下错误码的详细介绍请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-enterprise-space)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | The application does not have permission to call this function. |
| 1020400001 | System service exception. |
| 1020400002 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| 1020400003 | Invalid workspace. |
| 1020400004 | Authentication failed. |
| 1020400010 | Enterprise authentication server unreachable. |

示例：

```
import { spaceManager } from '@kit.EnterpriseSpaceKit';

try {
  const params: Record<string, string> = {
    'clientId': 'test1'
  };
  const result: Uint8Array = await spaceManager.getAccessToken(params);
  console.info(`Succeeded in getting access token. result: ${JSON.stringify(result)}`);
} catch (err) {
  console.error(`Failed to get access token. Code: ${err.code}, message: ${err.message}`);
}
```

#### setWorkspaceStatusBarIcon

setWorkspaceStatusBarIcon(icon: StatusBarIcon, workspaceId?: number): Promise<void>

根据工作空间ID设置工作空间状态栏图标。使用Promise异步回调。

该接口仅供企业安全管控类MDM应用申请权限后使用，可修改状态栏图标的工作空间受限于当前MDM应用所在工作空间。若MDM应用安装在U0/U1工作空间下，可修改其他工作空间状态栏图标，否则仅能修改当前MDM应用所在工作空间的状态栏图标。

起始版本： 6.1.0(23)

模型约束： 此接口仅可在Stage模型下使用。

需要权限： ohos.permission.ENTERPRISE_MANAGE_LOCAL_PUBLICSPACES

系统能力： SystemCapability.EnterpriseSpace.ServiceManage

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| icon | [StatusBarIcon](#statusbaricon) | 是 | 设置的工作空间的状态栏图标。 |
| workspaceId | number | 否 | 工作空间ID。首个空间ID为100，后续创建的工作空间ID逐一递增，例如101、102。 如果未设置，则默认使用调用者所在的工作空间ID。取值应为[100,10736]内的整数。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，无返回结果。 |

错误码：

以下错误码的详细介绍请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-enterprise-space)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | The application does not have permission to call this function. |
| 1020400001 | System service exception. |
| 1020400002 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| 1020400003 | Invalid workspace. |

示例：

```
import { spaceManager } from '@kit.EnterpriseSpaceKit';
import { resourceManager } from '@kit.LocalizationKit';
import { image } from '@kit.ImageKit';
import { common } from '@kit.AbilityKit';

@Entry
@Component
struct Index {
  async test() {
    const context = this.getUIContext().getHostContext() as common.UIAbilityContext;
    const resourceMgr: resourceManager.ResourceManager = context.resourceManager;

    // 创建white pixelMap，需在资源rawfile文件夹中预置HuaweiWhite.jpg图片
    const whiteFileData = await resourceMgr.getRawFd('HuaweiWhite.jpg');
    const whiteImageSource: image.ImageSource = image.createImageSource(whiteFileData);
    const whitePixelMap: image.PixelMap = await whiteImageSource.createPixelMap();

    // 创建black pixelMap，需在资源rawfile文件夹中预置HuaweiBlack.jpg图片
    const blackFileData = await resourceMgr.getRawFd('HuaweiBlack.jpg');
    const blackImageSource: image.ImageSource = image.createImageSource(blackFileData);
    const blackPixelMap: image.PixelMap = await blackImageSource.createPixelMap();

    // 构建图标信息
    const icons: spaceManager.StatusBarIcon = {
      white: whitePixelMap,
      black: blackPixelMap
    };
    const workspaceId: number = 100;
    try {
      await spaceManager.setWorkspaceStatusBarIcon(icons, workspaceId);
      console.info(`Succeeded in setting workspace status bar icon.`);
    } catch (err) {
      console.error(`Failed to set workspace status bar icon. Code: ${err.code}, message: ${err.message}`);
    }
  }

  build() {
  }
}
```

#### setWorkspaceLocalName

setWorkspaceLocalName(localName: string, workspaceId?: number): Promise<void>

根据工作空间ID设置工作空间本地名称。使用Promise异步回调。

该接口仅供企业安全管控类MDM应用申请权限后使用，可修改本地名称的工作空间受限于当前MDM应用所在工作空间。若MDM应用安装在U0/U1工作空间下，可修改其他工作空间本地名称，否则仅能修改当前MDM应用所在工作空间的本地名称。

起始版本： 6.1.0(23)

模型约束： 此接口仅可在Stage模型下使用。

需要权限： ohos.permission.ENTERPRISE_MANAGE_LOCAL_PUBLICSPACES

系统能力： SystemCapability.EnterpriseSpace.ServiceManage

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| localName | string | 是 | 设置的工作空间的本地名称。 |
| workspaceId | number | 否 | 工作空间ID。首个空间ID为100，后续创建的工作空间ID逐一递增，例如101、102。 如果未设置，则默认使用调用者所在的工作空间ID。取值应为[100,10736]内的整数。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，无返回结果。 |

错误码：

以下错误码的详细介绍请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-enterprise-space)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | The application does not have permission to call this function. |
| 1020400001 | System service exception. |
| 1020400002 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |

示例：

```
import { spaceManager } from '@kit.EnterpriseSpaceKit';
 
const localName: string = 'localName';
const workspaceId: number = 100;
await spaceManager.setWorkspaceLocalName(localName, workspaceId);
console.info(`Succeeded in setting workspace local name.`);
```

#### isEnterpriseWorkspaceEnabled

isEnterpriseWorkspaceEnabled(): Promise<boolean>

查询设备是否开启双空间。使用Promise异步回调。

起始版本： 26.0.0

模型约束： 此接口仅可在Stage模型下使用。

需要权限： ohos.permission.QUERY_LOCAL_WORKSPACES或ohos.permission.MANAGE_LOCAL_WORKSPACES

系统能力： SystemCapability.EnterpriseSpace.ServiceManage

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，表示当前设备是否开启双空间。 - true：表示当前设备已开启双空间，展示双空间的相关特性。 - false：表示当前设备未开启双空间。 |

错误码：

以下错误码的详细介绍请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-enterprise-space)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | The application does not have permission to call this function. |
| 1020400001 | System service exception. |

示例：

```
import { spaceManager } from '@kit.EnterpriseSpaceKit';

const status = await spaceManager.isEnterpriseWorkspaceEnabled();
console.info(`Succeeded in getting space enable. status: ${status}`);
```

#### isEnterpriseWorkspace

isEnterpriseWorkspace(workspaceId?: number): Promise<boolean>

查询工作空间是否为企业空间。使用Promise异步回调。

起始版本： 26.0.0

模型约束： 此接口仅可在Stage模型下使用。

需要权限： ohos.permission.QUERY_LOCAL_WORKSPACES或ohos.permission.MANAGE_LOCAL_WORKSPACES

系统能力： SystemCapability.EnterpriseSpace.ServiceManage

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| workspaceId | number | 否 | 工作空间ID。首个空间ID为100，后续创建的工作空间ID逐一递增，例如101、102。如果未设置，则默认使用应用所在的工作空间ID。取值应为[100,10736]内的整数。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，表示工作空间是否为企业空间。 - true：表示企业空间，展示企业空间的相关特性。 - false：表示个人空间，区分企业空间特有信息。 |

错误码：

以下错误码的详细介绍请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-enterprise-space)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | The application does not have permission to call this function. |
| 1020400001 | System service exception. |
| 1020400002 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| 1020400003 | Invalid workspace. |

示例：

```
import { spaceManager } from '@kit.EnterpriseSpaceKit';

const workspaceId: number = 100;
const isEnterprise = await spaceManager.isEnterpriseWorkspace(workspaceId);
console.info(`Succeeded in getting enterprise space. isEnterprise: ${isEnterprise}`);
```
