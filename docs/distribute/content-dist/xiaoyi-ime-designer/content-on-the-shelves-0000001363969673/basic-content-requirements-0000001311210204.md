---
title: "打包自测说明"
displayed_sidebar: contentDistSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/content/basic-content-requirements-0000001311210204
---

# 打包自测说明

<strong>鸿蒙4.3及以下版本皮肤打包自测步骤</strong>

1.打包步骤：

（1）打包工具下载链接：

[`https://appfile-cn.dbankcdn.com:443/FileServer/getFile/appAttach/011/111/111/0000000000011111111.20221110114153.40081902887674597532237603716174:20471231000000:0001:AEE384D7836F6C38F392192B286918E40D2E1A787C616F331947BB0C230E1D68.zip?needInitFileName=true](https://appfile-cn.dbankcdn.com/FileServer/getFile/appAttach/011/111/111/0000000000011111111.20221110114153.40081902887674597532237603716174%3A20471231000000%3A0001%3AAEE384D7836F6C38F392192B286918E40D2E1A787C616F331947BB0C230E1D68.zip?needInitFileName=true`)

（2）打包工具操作指导：

存放位置：打包工具放在C盘或D盘根目录下方使用！

文件夹说明：

0env：环境配置，包括android\_sdk，java\_jdk，gradle，构建的工程，以及打包脚本。勿动！

1example：用于参考的资源目录，themes目录下的文件结构需要和example一致，且文件数量≥example。勿动！

2themes：将待打包的素材，参考example结构放入待打包的素材资源

3result：打包成功的资源内容会存放在该文件

（3）操作步骤：

* 将制作好的皮肤资料放在2themes文件夹中；
* 点击run.bat工具，输入1，回车执行；校验资源数量及格式；
* 全部检查通过后，输入2，回车执行；将皮肤资源打包；

注意：打包前检查theme\_apk\_set\_Theme.txt文件，如果package\_name参数值为：com.celiakeyboard.ceshi，apk\_name参数值为：皮肤测试。那么3result生成的zip文件请命名为com.celiakeyboard.ceshi\_皮肤测试.zip。

2.自测步骤

（1）自测工具下载链接：[双框最新测试工具及操作指南](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251222165057.76845361186261200477587930910211%3A50001231000000%3A2800%3A331D991575D0473769B4BC64E211348D1FFECFD1715EEE1174F7364AFCC3D288.zip?needInitFileName=true)

（2）将上述zip文件：com.celiakeyboard.ceshi\_皮肤测试.zip，传输至手机&gt;文件管理&gt;内部存储&gt;download路径下。

（3）在手机中安装自测工具下载链接中的CeliaKeyboard.apk。

（4）安装完成后打开小艺输入法&gt;点击键盘左上角图标&gt;换肤&gt;我的&gt;下载，点按＋号，找到并选择前述zip文件。

（5）根据自测效果，更改皮肤切图等内容，重复打包自测步骤直至无误后上传设计师平台。

3.自测用例及常见问题

自测用例及常见问题下载链接：[【鸿蒙4.3及以下】小艺输入法皮肤自测用例.xlsx](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251222165057.16595698020783417630145656203534%3A50001231000000%3A2800%3A50F4B5B1E1370E40B0A5939449946373B5F905CE5BE99C08888925F4F6AE304E.xlsx?needInitFileName=true)

<strong>鸿蒙5.0及以上版本皮肤自测步骤</strong>

1.小艺输入法设计师平台&gt;上传皮肤&gt;点击预览后，测试设备上打开小艺输入法&gt;点击键盘左上角图标&gt;皮肤&gt;最新上线，查找待自测的皮肤下载并自测即可。

2.根据自测效果，更改皮肤切图等内容，重新上传预览直至无误后点击提交。

3.自测用例及常见问题下载链接：[【鸿蒙5.0及以上】小艺输入法皮肤自测用例.xlsx](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251222165057.76301797376975892326540841174158%3A50001231000000%3A2800%3AAB8838C8C5BF12B96E645B8AE1A6769C3E89F0DC378FE5CCF02944D252B70FE3.xlsx?needInitFileName=true)