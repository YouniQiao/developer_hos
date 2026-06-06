---
title: "@typescript-eslint/no-implied-eval"
displayed_sidebar: toolsSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/ide_no-implied-eval
format: md
---


# @typescript-eslint/no-implied-eval

禁止使用类似“eval()”的方法。

setTimeout()、setInterval()、setImmediate()或者execScript()这些函数可以接受一个字符串作为其第一个参数，比如

```
setTimeout('alert(`Hi!`);', 100);
```

这种行为被认为是隐式“eval()”，不推荐使用。

#### 规则配置

```
// code-linter.json5
{
  "rules": {
    "@typescript-eslint/no-implied-eval": "error"
  }
}
```

#### 选项

该规则无需配置额外选项。

#### 正例

```
function alert(arg: string) {
  console.log(arg);
}

const time = 100;

setTimeout(() => {
  alert('Hi!');
}, time);

setInterval(() => {
  alert('Hi!');
}, time);

const fn = () => {
  console.info('fn');
};
setTimeout(fn, time);

class Foo {
  public static fn = () => {
    console.info('static');
  };

  public meth() {
    console.info('method');
  }
}

setTimeout(Foo.fn, time);
```

#### 反例

```
const time = 100;
setTimeout('alert(`Hi!`);', time);

setInterval('alert(`Hi!`);', time);

const fn1 = '() = {}';
setTimeout(fn1, time);

const fn2 = () => {
  return 'x = 10';
};
setTimeout(fn2(), time);

export const fn3 = new Function('a', 'b', 'return a + b');
```

#### 规则集

```
plugin:@typescript-eslint/all
```

Code Linter代码检查规则的配置指导请参考[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)。
