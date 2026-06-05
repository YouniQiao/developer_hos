---
title: "方舟字节码函数命名规则"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-bytecode-function-name
format: md
---


## 概述

本文介绍字节码文件中[Method](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-bytecode-file-format#method)的name\_off字段指向的字符串的命名规则，该命名规则从方舟字节码文件版本12.0.4.0开始生效。

## 入口函数

模块加载时被执行的函数，名称固定为func\_main\_0。

## 非入口函数

其他函数在字节码文件中的名称结构如下：

```
#前缀#原函数名
```

下面的章节将会详细介绍前缀和原函数名。

### 前缀

前缀包含函数定义时所在的作用域信息，具体包括以下几个部分：

* 作用域标签
* 作用域名称
* 重名序号

前缀的结构为：

```
<作用域标签1><作用域名称1>[<重名序号>]<作用域标签2><作用域名称2><[重名序号]>...<作用域标签n><作用域名称n>[<重名序号>]<作用域标签n+1>
```

其中\<\>仅为便于阅读的分割标识，并不包含在实际的前缀中，[]表示可以为空。仅当出现重名作用域时才需要[\<重名序号\>]，即[\<重名序号\>]可以为空。最后一个作用域标签是本函数所对应的标签。

**作用域标签**

作用域标签表示作用域的类型。作用域和对应的作用域标签如下表所示，其他的作用域不会被记录进函数名中：

| 作用域 | 作用域标签 | 说明 |
| --- | --- | --- |
| class | ~ | class关键字定义的作用域。 |
| 实例函数 | > | 类的实例成员函数定义的作用域。 |
| 静态函数 | < | 类的静态成员函数定义的作用域。 |
| 构造函数 | = | 类的构造函数定义的作用域。 |
| 普通函数 | \* | 除了以上类型的其它所有函数定义的作用域。 |
| namespace/module | & | namespace或module关键字定义的作用域。 |
| enum | % | enum关键字定义的作用域。 |

**作用域名称**

源代码中定义作用域时所使用的名称。匿名则为空字符串。为了降低字节码体积，方舟编译器会对较长的作用域名称进行优化，此时作用域名称以@十六进制数字的形式体现。这个数字代表作用域名称的字符串在一个字符串数组中的索引：在字节码文件中源代码对应的[Class](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-bytecode-file-format#class)中有一个名为scopeNames的[field](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-bytecode-file-format#field), 这个field的值是指向一个[LiteralArray](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-bytecode-file-format#literalarray)的偏移，这个LiteralArray存储的是一个字符串数组。十六进制数字就是代表作用域名称在这个数组中的索引。原函数名不进行索引转换。

例子：

```
// ScopeName.ts
function longFuncName() { // longFuncName的函数名为"#*#longFuncName"，其中"longFuncName"是原函数名，不会转换为索引
  function A() { } // A的函数名"#*@0*#A"，其中"@0"表示在其对应LiteralArray中，索引为0的字符串，此时这个字符串是"longFuncName"。即这个函数原本的名称为"#*longFuncName*#A"
  function B() { } // B的函数名"#*@0*#B"
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTSCompilationToolchain/ArkBytecode/FundamentalsAndNamingConventions/entry/src/main/ets/pages/ScopeName.ts#L16-L22" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：ScopeName.ts</a></div>


**重名序号**

如果源码中相同作用域下出现了同名的实体，同名的名称后会加上重名序号，重名序号以^十六进制数字的形式表示。出现重名时，第一个不编号（即重名序号为空），从第二个开始编号，编号从1开始。

例子：

```
namespace A {
  function bar() { } // bar的函数名为"#&A*#bar"
}

namespace A {
  function foo() { } // foo的函数名为"#&A^1*#foo"，其中"^1" 为重名序号
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTSCompilationToolchain/ArkBytecode/FundamentalsAndNamingConventions/entry/src/main/ets/pages/Index.ets#L58-L66" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>


### 原函数名

原函数名代表函数在源代码中的名字，匿名函数的名称为空字符串。同样的，如果源码中相同作用域下出现了同名的函数，重名的名称后面会加上重名序号（包括匿名函数）。

```
function foo() {}; // 原函数名为"foo"
() => { }; // 原函数名为""
() => { }; // 原函数名为"^1"
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTSCompilationToolchain/ArkBytecode/FundamentalsAndNamingConventions/entry/src/main/ets/pages/Index.ets#L68-L72" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>


**特殊情况**

1. 如果匿名函数被赋值给一个变量，该变量名即为函数名。例如：

   ```
   let a = () => {} // 原函数名为"a"
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTSCompilationToolchain/ArkBytecode/FundamentalsAndNamingConventions/entry/src/main/ets/pages/Index.ets#L75-L77" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>

2. 如果匿名函数在对象字面量中定义并且被赋值给了一个字面量属性：

* 如果属性名中不包含\和.，则其原函数名即为该属性名。

  ```
  // DuplicateName.ts
  let B = {
    b : () => {} // 原函数名为"b"
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTSCompilationToolchain/ArkBytecode/FundamentalsAndNamingConventions/entry/src/main/ets/pages/DuplicateName.ts#L16-L21" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：DuplicateName.ts</a></div>

* 如果属性名包含\，.，为防止二义性，其原函数名会按照匿名函数命名。

  ```
  // OriginalFuncName.ts
  let a = {
    "a.b#c^2": () => {}, // 原函数名为""
    "x\\y#": () => {} // 原函数名为"^1"
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTSCompilationToolchain/ArkBytecode/FundamentalsAndNamingConventions/entry/src/main/ets/pages/OriginalFuncName.ts#L16-L22" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：OriginalFuncName.ts</a></div>


**开发者应尽量避免使用除字母、数字、下划线以外的字符命名函数，以免出现二义性。**

## 示例

```
namespace A { // namespace在字节码中的函数名为"#&#A"
  class B { // 构造函数在字节码中的函数名为"#&A~B=#B"
    m() { // 函数m在字节码中的函数名为"#&A~B>#m"
      return () => {} // 匿名函数在字节码中的函数名为"#&A~B>m*#"
    }
    static s() {} // 静态函数s在字节码中的函数名为"#&A~B<#s"
  }
  enum E { // enum在字节码中的函数名为"#&A%#E"

  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkTS/ArkTSCompilationToolchain/ArkBytecode/FundamentalsAndNamingConventions/entry/src/main/ets/pages/Index.ets#L80-L92" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>
