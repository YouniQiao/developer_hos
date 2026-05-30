---
title: "工程配置"
displayed_sidebar: monetizationSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/monetize/agd_pro_sdk_andriod_project-cfg-0000001301943170
---


#### 集成SDK

1. 添加仓库。

   在Android Studio项目级的build.gradle文件中配置华为开发者联盟Maven仓库地址。

   ```
   allprojects {
       repositories {
           maven {url 'https://developer.huawei.com/repo/'}

           jcenter()
       }
   }
   ```
2. 添加依赖。

   在应用级的build.gradle文件中添加如下依赖配置。

   ```
   dependencies {
   	implementation 'com.huawei.hms.agd:agdpro-embed:6.3.1.300'
   }
   ```
3. 添加packagingOptions。

   在应用级build.gradle文件中添加packagingOptions。

   ```
   android {
      ...
       defaultConfig {
           ...
           packagingOptions {
               pickFirst 'lib/arm64-v8a/libyoga.so'
               pickFirst 'lib/armeabi-v7a/libyoga.so'
               pickFirst 'lib/x86_64/libyoga.so'
           }
       }
   }
   ```
