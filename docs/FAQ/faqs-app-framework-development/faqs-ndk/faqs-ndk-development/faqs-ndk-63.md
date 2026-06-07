---
format: md
title: "如何通过多个xxx.d.ts文件导出Native侧接口"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-ndk/faqs-ndk-development/faqs-ndk-63
---


**问题现象**

由于底层C++库规模较大，向外暴露的接口数量较多，建议将其拆分成多个.d.ts文件以便归类。

**解决措施**

在oh-package.json5中的types字段只能指定一个出口。如果需要封装多个.d.ts文件中的接口，可以使用重导出的方式。

![](./img/92284109.png "点击放大")

实现方式：

在index1.d.ts文件中声明Native侧导出接口，然后通过index.d.ts文件重导出到ArkTS侧使用。

在index1.d.ts文件中导出接口。

```
export const sub: (a: number, b: number) => number;
```

在index.d.ts文件中重导出这些接口。

```
export {sub} from './index1'
export const add: (a: number, b: number) => number;
```
