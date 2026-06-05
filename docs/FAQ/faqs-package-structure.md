---
format: md
title: "程序包结构"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure
---

* **[HSP打包后，为什么会生成HAR包，它是否会导致App包大小膨胀](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-2)**
* **[从包管理的角度，保证代码安全的措施有哪些](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-4)**
* **[如何理解App、HAP、HAR、HSP的关系](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-5)**
* **[HSP/HAR包中如何引用外部编译的so库文件](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-6)**
* **[SharedLibrary能否在配置文件中声明abilities、extensionAbilities标签](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-7)**
* **[HAR包中使用window作为Toast时无法引入页面组件](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-8)**
* **[业务模块HAR如何获取宿主HAP的数据](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-9)**
* **[如何安装打包出来的App包（通过什么命令安装）](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-13)**
* **[如何判断应用可被卸载](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-14)**
* **[HAR、HSP不能支持Ability、Page声明，限制的理由是什么？后续是否会支持](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-15)**
* **[是否允许HAR的循环依赖](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-16)**
* **[HAP依赖HAR A，HAR A依赖HAR B。HAP能否调用HAR B提供的接口？如果不支持间接依赖HAR，设计的原因是什么](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-17)**
* **[通过resourceManager.getStringResource接口获取HSP资源文件报“Resource id invalid”错误](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-18)**
* **[HAP/HAR/HSP的关系是什么？是否都可以声明注册Ability和Page？三种类型分别推荐哪些的使用场景？选择原则是什么](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-19)**
* **[如何正确引用HAR/HSP包模块](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-21)**
* **[从HAP的拆包中，如何区分是HAR和HSP](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-23)**
* **[在HAP中调用createModuleContext方法获取的Context是什么层级](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-25)**
* **[如何获取当前HAP的BundleName](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-26)**
* **[如何实现在不使用UIAbility的情况下，能够模块化管理代码，并且各个模块之间可以相互路由跳转](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-27)**
* **[Entry模块的HAP和Feature模块的HAP在使用和功能上的区别是什么](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-28)**
* **[在HSP export类时，ts文件是按.d.ts导出还是.d.ets导出](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-29)**
* **[如何避免模块下文件打包进HAR包后，存在的不可预期的资料、配置或信息安全风险](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-31)**
* **[HAR包多账号如何上传](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-32)**
* **[HSP包编译之后的.har文件的作用是什么](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-33)**
* **[如何使HSP包版本号统一](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-34)**
* **[如何将多工程的HAP打包成一个App](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-35)**
* **[对于HAP包中引用的HSP包是否有数量限制](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-36)**
* **[HAR如何转换为HSP](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-37)**
* **[HAR包是否支持依赖传递](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-38)**
* **[如何实现跨模块的页面跳转功能](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-39)**
* **[如何卸载debug包](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-40)**
* **[应用安装、卸载时是否有数据上报](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-41)**
* **[如何解决依赖的版本冲突问题](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-43)**
* **[为什么同一App下的HSP文件vendor参数不同时会安装失败](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-44)**
* **[如何让两个HSP不相互依赖，使用对方的组件](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-45)**
* **[应用安装到设备的方式有哪些](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-47)**
* **[HAR和HSP的使用场景介绍](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-48)**
* **[一个HSP模块如何快速切换成HAR模块](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-49)**
* **[是否推荐使用BM QuickFix制造修复包](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-50)**
* **[使用hdc命令安装release HAP包到设备时上报“INSTALL\_FAILED\_APP\_SOURCE\_NOT\_TRUSTED”错误](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-51)**
* **[如何查询应用包的名称、供应商、版本号、版本文本、安装时间、更新时间等信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-52)**
* **[如何安装打包出来的App包（通过什么命令安装）](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-54)**
* **[应用免安装的限制、字段解释以及如何自测](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-56)**
* **[安装HAP包报“failed to install bundle. install debug type not same”错误](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-57)**
* **[除应用市场外，是否存在其它途径下载安装应用包](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-58)**
* **[如何判断当前应用程序是Debug包还是Release包](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-61)**
* **[如何判断应用程序是否安装](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-62)**
* **[如何跨HSP包调用rawfile目录下的文件](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-63)**
* **[如何获取应用包的签名指纹信息，即.p12文件信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-64)**
* **[使用发布证书进行调试时出现安装错误: Install Failed: error: failed to install bundle.](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-65)**
* **[使用HSP的多包场景下，直接崩溃并产生cppcrash异常日志，错误信息为resolveBufferCallback get buffer failed](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-66)**
* **[HAP包中的“--BEGIN CERTIFICATE--”是什么格式的数据](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-67)**
* **[sign包和unsign包产物之间是否有差异](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-68)**
* **[如何在应用内共享HSP](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-69)**
* **[如何通过代码获取Hap包的打包时间](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-70)**
* **[应用静态快捷方式如何接入X键](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-71)**
