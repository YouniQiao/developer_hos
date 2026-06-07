---
format: md
title: "使用BuilderParam在父组件调用this的方法报错：Error message: undefined is not callable"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-229
---


**问题场景**

在子组件Child中使用@BuilderParam参数时，如果在父组件中将父组件的builder函数传递给子组件，并在builder函数中调用父组件的方法，可能会出现Error message: undefined is not callable的错误。

问题代码如下：

```
@Component
struct Child {
  @Builder
  FunABuilder0() {};

  @BuilderParam aBuilder0: () => void = this.FunABuilder0;

  build() {
    Column() {
      this.aBuilder0()
    }
  }
}

@Entry
@Component
struct Parent {
  @Builder
  componentBuilder() {
    Text('Parent builder')
      .onClick(() => {
        this.test1();
      })
  }

  test1(): void {
    console.info('test1');
  }

  build() {
    Column() {
      Child({ aBuilder0: this.componentBuilder })
    }
  }
}
```

**解决方案**

在JavaScript中调用this时，需要注意this的指向。当前代码在子组件中声明builder方法时，this指向的是父组件。而@Builder componentBuilder()通过this.componentBuilder的形式传给子组件@BuilderParam customBuilderParam，此时this指向的是子组件Child的label，即 “Child”。因此，在点击事件响应时，this指向的是Child，而Child中没有test1()方法，从而导致 JavaScript 错误。

为了解决这个问题，需要在父组件中声明子组件时，通过监听函数将 `this` 传递到子组件。应改为：

```
Child({
  aBuilder0: () => {
    this.componentBuilder()
  }
})
```

**参考链接**

[@BuilderParam装饰器：引用@Builder函数](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builderparam)
