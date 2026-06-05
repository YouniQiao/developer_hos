---
title: "如何解析JSON字符串为实例对象"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkts-75
format: md
---


**问题背景**：

需要将JSON数据转换成ArkTS中类的实例对象。可以使用实例对象的属性，调用实例对象的方法。支持嵌套对象的场景。

对于这种情况，需要使用三方库 class-transformer 和 reflect-metadata（需通过 npm install 进行安装）。通过 @Type 指定嵌套情况下的类型，并使用 plainToClass 转换创建相应的实例对象。

**完整示例如下：**

```
import { Type, plainToClass } from 'class-transformer'
import "reflect-metadata"

// Assuming accepted JSON data
let testJSON: Record<string, ESObject> = {
  'id': 1,
  'firstName': "Johny",
  'lastName': "Cage",
  'age': 27,
  'arr': [
    {
      'name': 'john'
    },
    {
      'name': 'tom'
    }
  ],
  'instanceA': {
    'name': 'john'
  },
}

// If there is a corresponding nested structure, the corresponding type needs to be specified
class A {
  name: string = 'john';

  getName(): string {
    return this.name
  }
}

// When attempting to convert an object with nested objects, it is necessary to know the object type to be converted and use the @ Type decorator to implicitly specify the object type contained in each attribute
class User {
  id: number = 0;
  firstName: string = '';
  lastName: string = '';
  age: number = 0;
  @Type(() => A)
  arr: A[] = [new A()]
  @Type(() => A)
  instanceA: A = new A();

  getName() {
    return this.firstName + " " + this.lastName;
  }

  isAdult() {
    return this.age > 36 && this.age < 60;
  }
}

@Entry
@Component
struct parsingJSONStringsIntoInstanceObjects {
  aboutToAppear(): void {
    const instance = plainToClass(User, testJSON);
    console.info('instance:' + JSON.stringify(instance))
  }

  build() {

  }
}
```
