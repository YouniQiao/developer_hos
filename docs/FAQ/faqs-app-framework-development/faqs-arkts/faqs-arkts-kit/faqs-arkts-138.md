---
format: md
title: "ArkTS如何定义callback函数"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkts-138
---

定义一个callback函数的样例，参考代码如下：

1. 定义回调函数

   ```
   // Define 2 parameters on the page, return empty callback function
   myCallback: (a: number,b: string) => void = () => {}
   ```
2. 在使用时进行初始化赋值

   ```
   aboutToAppear() {
     // Initialization of callback function
     this.myCallback = (a,b) => {
       console.info(`handle myCallback a=${a},b=${b}`)
     }
   }
   ```
