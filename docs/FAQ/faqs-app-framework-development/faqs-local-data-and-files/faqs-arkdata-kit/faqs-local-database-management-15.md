---
title: "数据库查询失败 14800007"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-local-database-management-15
---

**问题现象**

使用rdbStore.querySql可以获取 20 条结果，但在调用resultSet.isColumnNull时出现报错，报错信息如下：

[nodict]::[PrepareStep()-sqlite\_shared\_result\_set.cpp:42]: StoreSession BeginStepQuery fail : not select sql !

[nodict]::[GetColumnIndex()-abs\_result\_set.cpp:334]: Failed to GetAllColumnNames, ret is 14800007

[nodict]::[GetColumnIndex()-napi\_result\_set.cpp:474]: IsAtLastRow failed code:14800007 columnName:-1

[nodict]::[PrepareStep()-sqlite\_shared\_result\_set.cpp:42]: StoreSession BeginStepQuery fail : not select sql !

[nodict]::[GetColumnCount()-abs\_result\_set.cpp:308]: Failed to GetAllColumnNames, ret is 14800007

[nodict]::[IsColumnNull()-napi\_result\_set.cpp:503]: throw error: code = 14800000 , message = Inner error. Inner code is 8

[nodict][ecmascript] Pending exception before IsMixedDebugEnabled called in line:3200, exception details as follows:

[nodict]Error: Inner error. Inner code is 8

代码如下：

```
async query( ) {
  const STORE_CONFIG: relationalStore.StoreConfig = {
    name: 'NetMonitor.db',
    securityLevel: relationalStore.SecurityLevel.S1
  };
  let rdbStore: relationalStore.RdbStore = await relationalStore.getRdbStore(context, STORE_CONFIG).then();
  let sql = 'SELECT * FROM net_monitor ORDER BY id desc LIMIT 20';
  let resultSet = await rdbStore.querySql(sql)
  let uuid = this.getString(resultSet, columnUuid)  // report errors
}
/**
 * Retrieve the string column value of the current row in the result set.
 * @param resultSet
 * @param columnName
 * @returns
 */
private getString(resultSet: relationalStore.ResultSet, columnName: string): string | undefined {
  let isColumnNull = resultSet.isColumnNull(resultSet.getColumnIndex(columnName));
  if (isColumnNull){
    return undefined
  } else {
    return resultSet.getString(resultSet.getColumnIndex(columnName))
  }
}
```

**解决措施**

isColumnNull：用于检查当前行中指定列的值是否为null。

ResultSet：返回的结果集合，用于调用关系型数据库查询接口后提供给用户。

请先转到结果集中需要查询的行，再使用isColumnNull方法。例如，使用ResultSet.goToFirstRow()转到结果集的第一行。

**参考链接**

[ResultSet](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-data-relationalstore-resultset)
