---
format: md
title: "编译报错“File 'string.json' is missing the required property 'string'.”"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-147
---


**错误描述**

资源文件“string.json”缺少必需属性“string”。

**可能原因**

hap模块依赖的hsp或har包中的资源文件string.json缺少必需的属性“string”。

**解决措施**

确保hsp或har文件中的“string.json”包含“string”属性。

示例：

```
{
  "string": [
    {
      "name": "shared_desc",
      "value": "description"
    }
  ]
}
```
