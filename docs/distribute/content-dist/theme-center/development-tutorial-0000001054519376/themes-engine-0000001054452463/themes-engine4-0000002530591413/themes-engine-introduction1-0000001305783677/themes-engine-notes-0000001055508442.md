---
title: "注意事项"
displayed_sidebar: contentDistSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/content/themes-engine-notes-0000001055508442
---

# 注意事项

## 注意事项

1. 锁屏中若写了壁纸，需注意尽量与wallpaper下的unlock\_wallpaper\_X.jpg保持一致。
2. &lt;Var&gt;标签中的const属性为常量属性，一旦设置为true之后，该变量值在赋予初值之后就不会再被改变。
3. &lt;Var&gt;如果要使用变量持久化，即在亮熄屏和解锁之后仍然能够记录相应的值，在使用之前需要对其持久化声明。
4. &lt;Time&gt;中的space属性为时间图片的具体参数，设置之后，时间图片之间的距离会随之发生变化。

## 测试打包脚本

自动化打包脚本，将该脚本复制到txt文本后将后缀改为.bat，以使脚本生效。

将脚本放入完整小主题包的unlock/lockscreen目录之下，双击即可使用。

![](./img/cd48618849ba.png)

运行该脚本前电脑中需已安装winRAR软件，手机需打开usb调试。winRAR软件目录通过"set WINRAR\_PATH="改变。运行该脚本后将会自动将制作锁屏放置到主题App-我的主题目录列表下。

```
@echo off
set WINRAR_PATH=C:\Program Files\WinRAR
set PATH=%WINRAR_PATH%;%PATH%
set str=%~dp0
set remain=%str:~0,-19%
:loop
for /f "tokens=1* delims=\" %%a in ("%remain%") do (
    set name=%%a
    set remain=%%b
)
::如果还有剩余,则继续分割
if defined remain goto :loop
echo %name%
cd ..
cd ..
winrar a -r ../%name%.zip .\*
cd ..
ren %name%.zip %name%.hwt
adb push %name%.hwt /sdcard/Huawei/Themes
del %name%.hwt
```