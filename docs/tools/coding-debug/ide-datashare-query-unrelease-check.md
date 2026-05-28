---
title: "@performance/datashare-query-unrelease-check"
displayed_sidebar: toolsSidebar
---

# @performance/datashare-query-unrelease-check

使用DataShareHelper的query接口查询数据后必须及时关闭结果集，以防止内存泄漏。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@performance/datashare-query-unrelease-check": "warn",
  }
}
```

#### 选项

该规则无需配置额外选项。

#### 正例

```
import relationalStore from "@ohos.data.relationalStore";
import { AbilityConstant, UIAbility, Want } from "@kit.AbilityKit";
import { BusinessError } from "@kit.BasicServicesKit";
import { window } from "@kit.ArkUI";

let store: relationalStore.RdbStore | undefined;
const STORE_CONFIG: relationalStore.StoreConfig = {
  name: 'rdbtest.db',
  securityLevel: relationalStore.SecurityLevel.S3
}

export class DataShareQueryUnReleaseNoReport0 extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    relationalStore.getRdbStore(this.context, STORE_CONFIG,
      (err: BusinessError, rdbStore: relationalStore.RdbStore) => {
        store = rdbStore;
      });
  }

  onWindowStageCreate(windowStage: window.WindowStage): void {
    if (store) {
      this.query_1_query_callback();
    }
  }

  private query_1_query_callback(): void {
    let predicates = new relationalStore.RdbPredicates('EMPLOYEE');
    predicates.equalTo('NAME', 'JACK');
    (store as relationalStore.RdbStore).query(predicates, (err, resultSet) => {
      if (err) {
        return;
      }
      while (resultSet.goToNextRow()) {
        const id = resultSet.getLong(resultSet.getColumnIndex('ID'));
        const name = resultSet.getLong(resultSet.getColumnIndex('NAME'));
        const age = resultSet.getLong(resultSet.getColumnIndex('AGE'));
        const gender = resultSet.getLong(resultSet.getColumnIndex('GENDER'));
      }
      resultSet.close();
    });
  }
}
```

#### 反例

```
import relationalStore from "@ohos.data.relationalStore";
import { AbilityConstant, UIAbility, Want } from "@kit.AbilityKit";
import { BusinessError } from "@kit.BasicServicesKit";
import { window } from "@kit.ArkUI";

let store: relationalStore.RdbStore | undefined;
const STORE_CONFIG: relationalStore.StoreConfig = {
  name: 'rdbtest.db',
  securityLevel: relationalStore.SecurityLevel.S3
}

export class DataShareQueryUnReleaseReport0 extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    relationalStore.getRdbStore(this.context, STORE_CONFIG,
      (err: BusinessError, rdbStore: relationalStore.RdbStore) => {
        store = rdbStore;
      });
  }

  onWindowStageCreate(windowStage: window.WindowStage): void {
    if (store) {
      this.query_1_query_callback();
    }
  }

  private query_1_query_callback(): void {
    let predicates = new relationalStore.RdbPredicates('EMPLOYEE');
    predicates.equalTo('NAME', 'JACK');
    //告警
    (store as relationalStore.RdbStore).query(predicates, (err, resultSet) => {
      if (err) {
        return;
      }
      while (resultSet.goToNextRow()) {
        const id = resultSet.getLong(resultSet.getColumnIndex('ID'));
        const name = resultSet.getLong(resultSet.getColumnIndex('NAME'));
        const age = resultSet.getLong(resultSet.getColumnIndex('AGE'));
        const gender = resultSet.getLong(resultSet.getColumnIndex('GENDER'));
      }
    });
  }
}
```

#### 规则集

```
plugin:@performance/recommended
plugin:@performance/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
