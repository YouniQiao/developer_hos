---
title: "@ohos.app.ability.insightIntent (意图框架基础定义)"
upstream_id: "harmonyos-references/js-apis-app-ability-insightintent"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:46:47.077243"
---

# @ohos.app.ability.insightIntent (意图框架基础定义)

本模块提供[意图框架](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/insight-intent-overview)基础定义。

![](./img/note_3.0-zh-cn.png) 本模块首批接口从API version 11开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

本模块接口仅可在Stage模型下使用。

#### 导入模块

```
import { insightIntent } from '@kit.AbilityKit';
```

#### ExecuteMode

意图执行模式。表示系统入口触发意图执行时传递的执行模式，每个意图支持的执行模式在意图开发时定义。

系统能力：SystemCapability.Ability.AbilityRuntime.Core

| 名称 | 值 | 说明 |
| --- | --- | --- |
| UI_ABILITY_FOREGROUND | 0 | 将UIAbility在前台显示。 **元服务API**：从API version 11开始，该接口支持在元服务中使用。 |
| UI_ABILITY_BACKGROUND | 1 | 将UIAbility在后台拉起。 **元服务API**：从API version 11开始，该接口支持在元服务中使用。 |
| UI_EXTENSION_ABILITY | 2 | 拉起UIExtensionAbility。 |

#### ExecuteResult

意图执行的返回结果。

系统能力：SystemCapability.Ability.AbilityRuntime.Core

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| code | number | 否 | 否 | 意图执行返回的错误码，由开发者定义。 **元服务API**：从API version 11开始，该接口支持在元服务中使用。 |
| result | Record | 否 | 是 | 意图执行返回的结果，通常会包含需要返回给系统入口的数据。 **元服务API**：从API version 11开始，该接口支持在元服务中使用。 |
| uris18+ | Array | 否 | 是 | 意图执行返回的URI列表。该字段需要与flags字段配合使用，根据URI列表将flags字段的相应权限授权给系统入口。 **元服务API**：从API version 18开始，该接口支持在元服务中使用。 |
| flags18+ | number | 否 | 是 | 意图执行返回给系统入口的URI列表的授权权限。 **元服务API**：从API version 18开始，该接口支持在元服务中使用。 **说明：** 该参数仅支持FLAG_AUTH_READ_URI_PERMISSION、FLAG_AUTH_WRITE_URI_PERMISSION、FLAG_AUTH_READ_URI_PERMISSION|FLAG_AUTH_WRITE_URI_PERMISSION。权限介绍见[Flags](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-wantconstant#flags)。 |

#### IntentEntity20+

意图实体结构体定义，用于定义意图执行过程中涉及的关键信息对象，包括意图参数和意图执行结果等。

开发者通过继承该类来定义意图实体，继承类需使用[@InsightIntentEntity](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-insightintentdecorator#insightintententity)装饰。

系统能力：SystemCapability.Ability.AbilityRuntime.Core

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| entityId | string | 否 | 否 | 意图实体的ID。 **元服务API**：从API version 20开始，该接口支持在元服务中使用。 |

#### IntentResult20+

意图执行的返回结果，支持[泛型类型](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/introduction-to-arkts#泛型类和接口)。

系统能力：SystemCapability.Ability.AbilityRuntime.Core

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| code | number | 否 | 否 | 意图执行返回的错误码，由开发者定义。 **元服务API**：从API version 20开始，该接口支持在元服务中使用。 |
| result | T | 否 | 是 | 意图执行返回的结果，通常会包含需要返回给系统入口的数据。 **元服务API**：从API version 20开始，该接口支持在元服务中使用。 |

#### ReturnMode23+

意图执行结果返回给意图拉起方的返回形式。

系统能力：SystemCapability.Ability.AbilityRuntime.Core

| 名称 | 值 | 说明 |
| --- | --- | --- |
| CALLBACK | 0 | 表示意图执行结果将由[意图执行基类](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-insightintentexecutor)中的[onExecuteInUIAbilityForegroundMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-insightintentexecutor#onexecuteinuiabilityforegroundmode)接口或[onExecuteInUIExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-insightintentexecutor#onexecuteinuiextensionability)接口返回。 **元服务API**：从API version 23开始，该接口支持在元服务中使用。 |
| FUNCTION | 1 | 表示意图执行结果会延迟返回，直到开发者主动调用[意图提供方管理能力](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-insightintentprovider)中的[sendExecuteResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-insightintentprovider#insightintentprovidersendexecuteresult)接口或[sendIntentResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-insightintentprovider#insightintentprovidersendintentresult)接口返回意图执行结果。 **元服务API**：从API version 23开始，该接口支持在元服务中使用。 |

#### QueryType

意图实体的查询方式。

起始版本：26.0.0

模型约束：此接口仅可在Stage模型下使用。

系统能力：SystemCapability.Ability.AbilityRuntime.Core

元服务API：从API版本26.0.0开始，该接口支持在元服务中使用。

| 名称 | 值 | 说明 |
| --- | --- | --- |
| ALL | 'all' | 查询全量的意图实体。 |
| BY_PROPERTY | 'byProperty' | 通过[IntentEntityDecoratorInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-insightintentdecorator#intententitydecoratorinfo)中的supportedQueryProperties属性进行查询。 |

#### QueryEntityParam

意图实体的查询参数。

起始版本：26.0.0

模型约束：此接口仅可在Stage模型下使用。

系统能力：SystemCapability.Ability.AbilityRuntime.Core

元服务API：从API版本26.0.0开始，该接口支持在元服务中使用。

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| queryType | [QueryType](#querytype) | 否 | 否 | 意图实体查询模式。 |
| parameters | Record | 否 | 是 | 意图实体查询参数。该字段在[QueryType](#querytype)为[BY_PROPERTY](#querytype)时需要填写。 |

#### AppIntentEntity

支持查询应用内数据的意图实体定义，继承自[IntentEntity](#intententity20)。用于定义应用需要开放的信息对象。

开发者通过继承该类来定义可查询的意图实体，继承类需使用[@InsightIntentEntity](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-insightintentdecorator#insightintententity)装饰。

起始版本：26.0.0

模型约束：此接口仅可在Stage模型下使用。

系统能力：SystemCapability.Ability.AbilityRuntime.Core

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| displayName | string | 否 | 否 | 意图实体的显示名称。 **元服务API**：从API版本26.0.0开始，该接口支持在元服务中使用。 |

#### [h2]onQueryEntity

abstract onQueryEntity(params: QueryEntityParam): Promise<Array<T>>

当系统入口触发意图实体查询时，系统将会加载该类，并触发该回调，开发者可以在该回调中实现需要执行的意图实体操作，根据传入的参数[QueryEntityParam](#queryentityparam)返回符合条件的实体信息。使用Promise异步回调。

推荐在[queryType](#querytype)为[ALL](#querytype)时返回意图实体全部的信息，在[queryType](#querytype)为[BY_PROPERTY](#querytype)时，根据[parameters](#queryentityparam)中的属性值返回符合条件的信息。

起始版本：26.0.0

模型约束：此接口仅可在Stage模型下使用。

系统能力：SystemCapability.Ability.AbilityRuntime.Core

元服务API：从API版本26.0.0开始，该接口支持在元服务中使用。

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| params | [QueryEntityParam](#queryentityparam) | 是 | 意图实体查询参数。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise> | Promise对象。返回Array对象，表示意图实体返回的符合条件的实体信息。 |

示例：

```
import { insightIntent, InsightIntentEntity } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

@InsightIntentEntity({
  entityCategory: 'string_entity_category',
  parameters: {
    '$id': '/schemas/StringIntentEntity',
    'type': 'object',
    'description': 'String type intent entity with dynamic query',
    'properties': {
      'entityId': {
        'type': 'string',
        'description': 'Data unique identifier',
        'title': '执行场景的唯一标识'
      },
      'name': {
        'type': 'string',
        'description': 'The name of string entity',
        'title': '执行场景的名称'
      },
      'extension': {
        'type': 'string',
        'description': 'The description of string entity value',
        'title': '执行场景的扩展字段'
      },
      'displayName': {
        'type': 'string',
        'description': 'The display name of string entity',
      },
      'description': {
        'type': 'string',
        'description': 'The description of string entity value',
      }
    },
    'required': ['name', 'displayName']
  },
  supportedQueryProperties: ['entityId', 'name', 'extension'] // 表示onQueryEntity支持通过entityId、name或者extension属性来查询实体信息
})
export class AppIntentEntityImpl extends insightIntent.AppIntentEntity<AppIntentEntityImpl> {
  entityId: string = "default";
  name: string = "";
  displayName: string = "";
  description?: string;
  extension?: string;

  async onQueryEntity(params: insightIntent.QueryEntityParam): Promise<Array<AppIntentEntityImpl>> {
    const appStringEntities: AppIntentEntityImpl[] = [
      this.createEntityInstance('id1', '名称1', '显示名称1', '描述1', "扩展字段1"),
      this.createEntityInstance('id2', '名称2', '显示名称2', '描述2', "扩展字段2"),
      this.createEntityInstance('id3', '名称3', '显示名称3', '描述3', "扩展字段3"),
    ];

    let resultEntities: AppIntentEntityImpl[] = [];
    const queryType = params.queryType;
    const parameters = params.parameters ?? {};
    switch (queryType) {
      case insightIntent.QueryType.ALL:
        resultEntities = appStringEntities;
        break;
      case insightIntent.QueryType.BY_PROPERTY:
        // 1. 校验parameters是否有有效的查询键（仅支持supportedQueryProperties中的键）
        const validQueryKeys = Object.keys(parameters).filter(key => (['entityId', 'name', 'extension'] as string[]).includes(key));
        if (validQueryKeys.length === 0) {
          hilog.error(0x0000, 'testTag', 'Query missing valid parameters, support: entityId/name/extension');
          resultEntities = [];
          break;
        }
        // 2. 对所有有效查询键做多条件 AND 过滤
        resultEntities = appStringEntities.filter(entity => {
          return validQueryKeys.every(key => {
            const queryValue = parameters[key];
            if (key === 'entityId') {
              return entity.entityId === queryValue;
            } else if (key === 'name') {
              return entity.name === queryValue;
            } else if (key === 'extension') {
              return entity.extension === queryValue;
            }
            return false;
          });
        });
        break;
      default:
        resultEntities = [];
    }
    return resultEntities;
  }

  private createEntityInstance(entityId: string, name: string, displayName: string, description?: string, extension?: string): AppIntentEntityImpl {
    const instance = new AppIntentEntityImpl();
    instance.entityId = entityId;
    instance.name = name;
    instance.displayName = displayName;
    instance.description = description;
    instance.extension = extension;
    return instance;
  }
}
```
