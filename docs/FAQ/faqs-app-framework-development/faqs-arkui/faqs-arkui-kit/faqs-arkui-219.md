---
format: md
title: "ForEach键值生成规则是怎样的"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-219
---


键值的生成规则与itemGenerator和keyGenerator有关：

* 如果keyGenerator函数缺省，生成规则由框架确定，item和index拼接生成规则为(item: any, index: number)=>\{ return index +'\_'+ JSON.stringify(item); \}。
* 如果keyGenerator未缺省，且未包含index，当itemGenerator中包含index，生成规则为将自定义键值与index拼接成字符串，例如(item)=>item+2 对应的键值是 index+'\_'+(item+2)。如果itemGenerator中未包含index，此时keyGenerator的生成规则由开发者自定义。
* 如果keyGenerator未缺省，且包含index，无论itemGenerator中是否包含index，生成的键值规则都由开发者自定义，框架不会拼接index。
