---
title: "AbilityDelegatorArgs"
upstream_id: "harmonyos-references/js-apis-inner-application-abilitydelegatorargs"
catalog: "harmonyos-references"
content_hash: "eed6d1b8510c"
synced_at: "2026-07-09T01:00:06.326858"
---

# AbilityDelegatorArgs

AbilityDelegatorArgs封装和提供测试用例参数的数据，通过AbilityDelegatorRegistry中[getArguments](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-abilitydelegatorregistry#abilitydelegatorregistrygetarguments)方法获取，包含bundleName、parameters、testCaseNames等关键测试信息，为测试脚本提供了标准化的参数访问方式。

该模块适用于编写单元测试脚本时需要获取测试参数进行条件判断或配置测试环境的场景。需要注意的是，其接口仅限测试框架中使用，不应在正式业务代码中调用。

![](./img/note_3.0-zh-cn.png) 本模块首批接口从API version 8开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

本模块接口仅可在[单元测试框架](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/unittest-guidelines)中使用。

#### 导入模块

```
import { abilityDelegatorRegistry } from '@kit.TestKit';
```

#### AbilityDelegatorArgs

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力：以下各项对应的系统能力均为SystemCapability.Ability.AbilityRuntime.Core

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| bundleName | string | 否 | 否 | 当前被测试应用的包名。 |
| parameters | Record | 否 | 否 | 当前启动单元测试的参数。 |
| testCaseNames | string | 否 | 否 | 测试用例名称。 |
| testRunnerClassName | string | 否 | 否 | 执行测试用例的测试执行器名称。 |

示例：

```
// 导入测试注册模块
import { abilityDelegatorRegistry } from '@kit.TestKit';

// 通过AbilityDelegatorRegistry获取AbilityDelegatorArgs对象
let args: abilityDelegatorRegistry.AbilityDelegatorArgs = abilityDelegatorRegistry.getArguments();
```
