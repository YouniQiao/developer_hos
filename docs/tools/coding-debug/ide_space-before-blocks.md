---
title: "@hw-stylistic/space-before-blocks"
displayed_sidebar: toolsSidebar
---

# @hw-stylistic/space-before-blocks

强制在"&#123;"之前加空格。该规则仅检查.ets文件类型。

例外：

* 函数的第一个参数或者数组中的第一个元素是对象，对象的"&#123;"之前不用加空格。
* 模板代码中的"&#123;"之前不用加空格。
* 行首的"&#123;"之前不用加空格。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@hw-stylistic/space-before-blocks": "error"
  }
}
```

#### 选项

该规则无需配置额外选项。

#### 正例

```
export function a() {
  // doSomething
}

@Entry
@Component
struct Index {
  build() {
    Row() {
      Column() {
        Text('Hello World')
      }
      .width('100%')
    }
    .height('100%')
  }
}
```

#### 反例

```
// Missing space before opening brace.
export function a(){
  // doSomething
}

@Entry
@Component
// Missing space before opening brace.
struct Index{
  // Missing space before opening brace.
  build(){
    // Missing space before opening brace.
    Row(){
      // Missing space before opening brace.
      Column(){
        Text('Hello World')
      }
      .width('100%')
    }
    .height('100%')
  }
}
```

#### 规则集

```
"plugin:@hw-stylistic/recommended"
"plugin:@hw-stylistic/all"
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
