---
title: "@param"
displayed_sidebar: toolsSidebar
---

# @param

@param标签提供函数参数的描述信息。

可以通过在描述之前插入一个连字符（-），使ArkTSDoc注释更具可读性。连字符前后需使用空格隔开。

#### 语法

@param [&lt;description&gt;]

#### 示例

下面的示例演示如何在 @param 标签中包含描述信息。

变量说明：

```
/**
 * @param somebody Somebody's name.
 */
export function sayHello(somebody: string): void {
  console.log('Hello ' + somebody);
}
```

可以在变量说明前加个连字符（-），使之更加容易阅读：

```
/**
 * @param somebody - Somebody's name.
 */
export function sayHello(somebody: string): void {
  console.log('Hello ' + somebody);
}
```
