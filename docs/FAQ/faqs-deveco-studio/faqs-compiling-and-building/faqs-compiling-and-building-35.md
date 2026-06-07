---
format: md
title: "更新Hvigor版本时，配置了依赖却在build init时报未找到此依赖"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-35
---


**问题现象**

![](./img/9d663a8f.png)

**解决措施**

出现该问题的原因是工程中使用了3.3.0及后续版本的Hvigor，但Hvigor-wrapper.js版本较旧，两者不兼容。不兼容的场景包括：

* 场景一：使用4.0 Canary2之前的DevEco Studio时，同步只会下载Hvigor，不会下载dependencies下的内容（即hvigor-ohos-plugin）。如果需要更新Hvigor版本且不更新DevEco Studio，只能下载Hvigor，无法下载hvigor-ohos-plugin。建议更新至DevEco Studio NEXT Developer Preview1及以上版本
* 场景二：对于4.0 Beta1之前的DevEco Studio创建的工程，需要更新Hvigor版本。使用DevEco Studio NEXT Developer Preview1及以上版本的DevEco Studio打开历史工程，修改hvigor-config.json5中的Hvigor和plugin版本号，然后Sync。同步时会提示更新，点击按钮后将自动完成Hvigor和plugin的下载。

  ![](./img/9198b424.png)
