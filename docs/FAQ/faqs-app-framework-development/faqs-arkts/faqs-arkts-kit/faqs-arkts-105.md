---
title: "如何通过判断函数入参类型实现不同代码逻辑"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkts-105
---

可参考如下示例：

```
class Game {
}

function solve(message: number | string | boolean | Map<string, number> | Record<string, number> | Game) {
  // Game：Type judgment
  if (message instanceof Game) {
    console.info('Game');
    return;
  }

  // Retrieve the constructor corresponding to the parameter and convert it to a string, then extract the string
  let typeStr: string = message.constructor.toString().substring(9, 12);
  // Determine the type corresponding to typeStr
  switch (typeStr) {
    case 'Num':
      console.info('number type');
      break;
    case 'Str':
      console.info('string type');
      break;
    case 'Boo':
      console.info('boolean type');
      break;
    case 'Map':
      console.info('Map type');
      break;
    case 'Obj':
      console.info('Record type');
      break;
  }
}

let gameVal: Game = '';
let mapVal = new Map<string, number>();
mapVal.set('width', 100);
mapVal.set('height', 100);
let recordVal: Record<string, number> = { 'wight': 100, 'score': 100 };

@Entry
@Component
struct ParamsType {
  build() {
    Row() {
      Column() {
        Button('get params type')
          .onClick(() => {
            solve(100);
            solve('100');
            solve(true);
            solve(mapVal);
            solve(recordVal);
            solve(gameVal);
          })
      }
      .width('100%')
    }
    .height('100%')
  }
}
```
