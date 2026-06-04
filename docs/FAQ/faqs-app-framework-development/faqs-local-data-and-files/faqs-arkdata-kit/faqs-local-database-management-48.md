---
title: "ValuesBucket是否有可动态添加字段的方式"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-local-database-management-48
---

**解决措施**

ValuesBucket的实现如下：

```
export type ValuesBucket = Record<string, ValueType | Uint8Array | null>;
```

若要动态添加字段，可以参考以下方法。

```
function set(): void {

  let value : ValuesBucket={};
  let name : string ='NAME';
  value[name]= 'cxx';
  value['AGE']=18;
  value['SALARY']=20000;
}
```
