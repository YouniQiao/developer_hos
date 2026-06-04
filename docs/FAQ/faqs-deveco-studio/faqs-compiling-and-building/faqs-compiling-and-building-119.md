---
title: "编译报错“The useNormalizedOHMUrl settings of packages xxx and the project useNormalizedOHMUrl: xxx do not match”"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-compiling-and-building-119
---

**问题现象**

编译时出现错误：“packages xxx的useNormalizedOHMUrl设置与项目useNormalizedOHMUrl: xxx不匹配”。

**解决措施**

useNormalizedOHMUrl为true的时候ohmurl使用的是新的拼接和解析方式，不能和旧的ohmurl混用，会导致运行时无法识别。

可采用以下两种方法解决该问题：

* 修改报错的依赖包的工程级 build-profile.json5 中的 useNormalizedOHMUrl 为与当前工程一致，重新生成依赖包并进行替换（useNormalizedOHMUrl 缺省默认值为 false）。

  ```
  {
    "app": {
      "signingConfigs": [],
      "products": [
        {
          // ...
          "buildOption": {
            "strictMode": {
              "useNormalizedOHMUrl": true
            }
          }
        }
      ],
      // ...
  }
  ```
* 如果存在多个与工程不一致的依赖包，建议修改工程级build-profile.json5中的useNormalizedOHMUrl值，并替换所有不一致的依赖包。

如果修改useNormalizedOHMUrl仍无法解决问题，表明当前hsp包是本地包。需要以本地hsp包的形式引入，请在工程的build-profile.json5文件中的modules部分添加报错的hsp模块，示例如下：

```
"modules": [
  {
    name: "hsp",   // The referenced hsp package dependency
    srcPath: "../MyApplication_stageB/hsp",   // The path to the hsp package being referenced (both absolute and relative paths are okay)
  }
],
```

**参考链接**

[模块级build-profile.json5文件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-build-profile)
