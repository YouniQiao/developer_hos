---
title: "{@link}"
displayed_sidebar: toolsSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/ide-arktsdoc-link
format: md
---


# `&#123;@link&#125;`

`&#123;@link&#125;` 用于创建指向指定namepath或网页的链接。使用 `&#123;@link&#125;` 标记时，可以使用不同格式提供链接文本。

#### 语法

* `&#123;@link namepathOrURL&#125;`
* [link text]`&#123;@link namepathOrURL&#125;`
* `&#123;@link namepathOrURL|link text&#125;`
* `&#123;@link namepathOrURL link text (after the first space)&#125;`

#### 示例

提供链接文本：

```
/**
 * See {@link MyClass}.
 * Also, check out {@link https://www.example.com/cn/ | Example} and
 * {@link https://www.example.com/cn/ Example}.
 */
export function myFunction() {}
```

![](./img/note_3.0-zh-cn.png)

若namepath是类名，如例子中的MyClass，用户需要在当前模块中定义该类才能进行正确的跳转。暂不支持对类中属性和方法的跳转。
