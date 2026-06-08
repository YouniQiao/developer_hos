---
title: "性能优化"
displayed_sidebar: contentDistSidebar
original_url: /docs/distribute/content-dist/theme-center/development-tutorial-0000001054519376/themes-engine-0000001054452463/themes-engine4-0000002530591413/performance-optimization-0000001439870338
format: md
upstream_id: distribute/content-dist/theme-center/development-tutorial-0000001054519376/themes-engine-0000001054452463/themes-engine4-0000002530591413/performance-optimization-0000001439870338
last_sync: 2026-06-07
sync_hash: f4fea0b0
---
# 性能优化

制作主题时，除视觉效果外，还需考虑性能优化，以提供流畅的使用体验。

以下为一些性能优化经验，供您参考：

* [性能优化建议](#section813778698)：提供脚本规模、文本视图、图片资源、视频/帧动画、变量定义、动画设计、命令触发等方面的性能优化建议。
* [锁屏设置异步加载](#section66597168126)：制作锁屏动效时，在某些特定场景下，可考虑使用异步加载。

## 性能优化建议

### 脚本规模

xml脚本行数建议不要超过2000行。脚本量过大，加载解析所用时间可能过长，在CPU资源不足的情况下有可能出现亮屏时黑屏的情况。

### 文本视图

部分情况下，使用[文本&lt;Text&gt;](/docs/distribute/content-dist/theme-center/development-tutorial-0000001054519376/themes-engine-0000001054452463/themes-engine4-0000002530591413/basic-function-0000001054908461/view-0000001073865717/text-0000001074068045)替代图片。例如：展示步数值时，用[文本&lt;Text&gt;](/docs/distribute/content-dist/theme-center/development-tutorial-0000001054519376/themes-engine-0000001054452463/themes-engine4-0000002530591413/basic-function-0000001054908461/view-0000001073865717/text-0000001074068045)替代图片。

### 图片资源

1. 动效中，单张图片尽可能小，大小不要超过1M。
2. 在清晰度可行的条件下，不带透明像素的图片，建议使用jpg格式代替png格式。
3. 图片尺寸尽量与显示尺寸一致：图片的尺寸不要大于显示的尺寸，即尺寸设计为可以看到的大小。

   正确示例：要显示的尺寸为400\*400px，则图片建议设计为400\*400px，不建议设计为800\*800px。

### 视频/帧动画

1. 尽量不使用全屏帧动画。制作动态锁屏时，可使用[动态图片&lt;APNG&gt;](/docs/distribute/content-dist/theme-center/development-tutorial-0000001054519376/themes-engine-0000001054452463/themes-engine4-0000002530591413/basic-function-0000001054908461/view-0000001073865717/apng-0000001252739922)或[视频&lt;Video&gt;](/docs/distribute/content-dist/theme-center/development-tutorial-0000001054519376/themes-engine-0000001054452463/themes-engine4-0000002530591413/basic-function-0000001054908461/view-0000001073865717/video-0000001073497817)替代。制作动态桌面时，可使用[动态图片&lt;APNG&gt;](/docs/distribute/content-dist/theme-center/development-tutorial-0000001054519376/themes-engine-0000001054452463/themes-engine4-0000002530591413/basic-function-0000001054908461/view-0000001073865717/apng-0000001252739922)或[视频桌面&lt;LiveWallpaper&gt;](/docs/distribute/content-dist/theme-center/development-tutorial-0000001054519376/themes-engine-0000001054452463/themes-engine4-0000002530591413/application-range1-0000001258343478/livewallpaper-0000001073967005)替代。或者将全屏帧动画修改为小范围帧动画：将不需要动的部分抽取出来用静态图展示，需要动的部分制作为帧动画。如有某些场景必须使用全屏帧动画，则全屏帧动画每帧间隔时间不能过短，建议为100ms以上。

   使用[视频&lt;Video&gt;](/docs/distribute/content-dist/theme-center/development-tutorial-0000001054519376/themes-engine-0000001054452463/themes-engine4-0000002530591413/basic-function-0000001054908461/view-0000001073865717/video-0000001073497817)时，为避免视频加载中出现黑屏问题，需配置一个image在视频加载完成前显示，图片为视频第一帧，以实现比较平滑的过渡效果。注意图片的位置和适配方式与视频保持一致，否则会出现首帧图片跳帧的问题。

   ```
   <Image x="0" y="#h" w="1080*#ratio" h="#ratio*2536" visibility="eq(#bg_id,0)" src="bg_0.png" alignV="bottom"/>
   <Video name="red" x="0" y="#h" w="1080*#ratio" h="#ratio*2536" visibility="eq(#bg_id,0)" src="red.mp4"  sound="0" play="true" looping="true"/>
   ```
2. 视频被覆盖状态下不会停止播放，隐藏时才会停止播放。如需降低功耗，在视频不需要显示时，建议手动设置visibility参数，控制视频隐藏。

   正确示例：锁屏上设置视频播放，通过visibility的值隐藏当前不需要展示的视频。

   ```
   <Video name="video" w="#w" h="#h" play="true" sound="0" looping="false" src="video.mp4" visibility="eq(#isVisibility,0)"/>
   ```
3. 帧动画被覆盖状态下不会停止播放，隐藏时才会停止播放。如需降低功耗，在视频不需要显示时，建议手动设置visibility参数，控制帧动画隐藏。

   正确示例：锁屏上共设置3组帧动画，通过visibility的值隐藏当前不需要展示的帧动画。

   ```
       <Image align="right" alignV="top" src="red/red_0.png" visibility="eq(#bg_id,0)" x="#w" y="0">
           <SourcesAnimation repeat="0">
               <Source src="red/red_0.png" time="0" />
               <Source src="red/red_1.png" time="40" />
               ......
               <Source src="red/red_49.png" time="1960" />
               <Source src="red/red_50.png" time="2000" />
           </SourcesAnimation>
       </Image>

       <Image align="right" alignV="top" src="white/bai_0.png" visibility="eq(#bg_id,1)" x="#w" y="0">
           <SourcesAnimation repeat="0">
               <Source src="white/bai_0.png" time="0" />
               <Source src="white/bai_1.png" time="40" />
               ......
               <Source src="white/bai_49.png" time="1960" />
               <Source src="white/bai_50.png" time="2000" />
           </SourcesAnimation>
       </Image>

       <Image align="right" alignV="top" src="black/lan_0.png" visibility="eq(#bg_id,2)" x="#w" y="0">
           <SourcesAnimation repeat="0">
               <Source src="black/lan_0.png" time="0" />
               <Source src="black/lan_1.png" time="40" />
               ......
               <Source src="black/lan_49.png" time="1960" />
               <Source src="black/lan_50.png" time="2000" />
           </SourcesAnimation>
       </Image>
   ```

### 变量定义

1. 变量先定义后使用。

   正确示例：先定义变量bl，然后再在Button中使用该变量。

   ```
   <Var name="bl" expression="ifelse((gt(abs(#touch_begin_x-#touch_x),20)),0,(gt(abs(#touch_begin _y-#touch_y),20)),0,1)"/>
   <Button x="112" y="683" w="162" h="154" visibility="lt(#qhid,40)">
      <Triggers>
          <Trigger action="up">
     <IntentCommand action="android.intent.action.MAIN" package="com.tencent.mobileqq" class="com.tencent.mobileqq.activity.SplashActivity" condition="#bl"/>
     </Trigger>
         </Triggers>
   </Button>
   ```
2. 不使用的变量不要定义，更不要做无意义的变量更新和赋值，减少内存和CPU的损耗。
3. 不在亮屏或灭屏时做耗时性的变量计算，如调用[周期命令&lt;CycleCommand&gt;](/docs/distribute/content-dist/theme-center/development-tutorial-0000001054519376/themes-engine-0000001054452463/themes-engine4-0000002530591413/basic-function-0000001054908461/orders-0000001073987886/cyclecommand-0000001074166630)或[命令组&lt;GroupCommands&gt;](/docs/distribute/content-dist/theme-center/development-tutorial-0000001054519376/themes-engine-0000001054452463/themes-engine4-0000002530591413/basic-function-0000001054908461/orders-0000001073987886/groupcommand-0000001073778623)执行脚本，否则会引起动画卡顿。

   错误示例：灭屏时调用[周期命令&lt;CycleCommand&gt;](/docs/distribute/content-dist/theme-center/development-tutorial-0000001054519376/themes-engine-0000001054452463/themes-engine4-0000002530591413/basic-function-0000001054908461/orders-0000001073987886/cyclecommand-0000001074166630)，计算量大，耗时长，可能引起动画卡顿。

   ```
   <ExternalCommands>
       <Trigger action="pause">
           <CycleCommand frequency="1000" indexFlag="col">
               <VariableCommand name="find" type="number[]" index="#col" expression="#col"/>
           </CycleCommand>
       </Trigger>
   </ExternalCommands>
   ```
4. 刷新频率较高的变量（如时间变量time/second、步数变量steps\_value等）不要做持久化，否则可能有一定延迟，造成数据更新不及时。

   正确示例：步数变量steps\_value未开启持久化，直接读取数据源的值。

   ```
   <Image w="130" h="130" pivotX="65" pivotY="65" rotation="#steps_value/10000" src="step_tu.png"/>
   ```

   错误示例1：变量step，设置persist="true"，开启持久化，将优先读取本地同名变量的值，而非直接读取数据源的值，前者可能有一定延迟，造成数据更新不及时。详见[自定义变量&lt;Var&gt;](/docs/distribute/content-dist/theme-center/development-tutorial-0000001054519376/themes-engine-0000001054452463/themes-engine4-0000002530591413/basic-function-0000001054908461/variant-0000001074067773/variant-0000001074315406)的persist参数说明。

   ```
   <Var name="step" expression="#steps_value" persist="true"/>
   <Image w="130" h="130" pivotX="65" pivotY="65" rotation="#step/10000" src="step_tu.png"/>
   ```

   错误示例2：变量step，设置globalPersist="true"，开启变量全局持久化，将全局优先读取本地同名变量的值，而非直接读取数据源的值，前者可能有一定延迟，造成数据更新不及时。详见[锁屏、桌面、桌面万象小组件联动&lt;globalPersist&gt;](/docs/distribute/content-dist/theme-center/development-tutorial-0000001054519376/themes-engine-0000001054452463/themes-engine4-0000002530591413/application-range1-0000001258343478/globalpersist-0000001205906063)的globalPersist参数说明。

   ```
   <Var name="step" expression="#steps_value" globalPersist="true"/>
   <Image w="130" h="130" pivotX="65" pivotY="65" rotation="#step/10000" src="step_tu.png"/>
   ```
5. 不重复使用表达式，以减少计算量。

   正确示例：先定义变量ratio的计算表达式ratio=max(1,#h/2536)，后直接引用变量ratio的值。

   ```
   <Var expression="max(1,#h/2536)" name="ratio"/>

   <Video name="red" y="#h-#ratio*2536" x="0" w="1080*#ratio" visibility="eq(#bg_id,0)" src="red.mp4" h="#ratio*2536" sound="0" play="true" looping="true"/>
   <Video name="white" y="#h-#ratio*2536" x="0" w="1080*#ratio" visibility="eq(#bg_id,1)" src="white.mp4" h="#ratio*2536" sound="0" play="true" looping="true"/>
   <Video name="black" y="#h-#ratio*2536" x="0" w="1080*#ratio" visibility="eq(#bg_id,2)" src="black.mp4" h="#ratio*2536" sound="0" play="true" looping="true"/>
   ```

   错误示例：重复使用表达式max(1,#h/2536)，多次重复计算，增加内存损耗。

   ```
   <Video name="red" y="#h-(max(1,#h/2536))*2536" x="0" w="1080*(max(1,#h/2536))" visibility="eq(#bg_id,0)" src="red.mp4" h="(max(1,#h/2536))*2536" sound="0" play="true" looping="true"/>
   <Video name="white" y="#h-(max(1,#h/2536))*2536" x="0" w="1080*(max(1,#h/2536))" visibility="eq(#bg_id,1)" src="white.mp4" h="(max(1,#h/2536))*2536" sound="0" play="true" looping="true"/>
   <Video name="black" y="#h-(max(1,#h/2536))*2536" x="0" w="1080*(max(1,#h/2536))" visibility="eq(#bg_id,2)" src="black.mp4" h="(max(1,#h/2536))*2536" sound="0" play="true" looping="true"/>
   ```

### 动画设计

1. 利用单张图片实现基础动画，或者变量动画代替帧动画。

正确示例：四种基础动画在场景或者画面的过渡中使用。

```
<Image x="" y="" centerX="" centerY="" src="">
    <AlphaAnimation delay="" repeat="">
        <Alpha a="" time="" />
    </AlphaAnimation>

    <RotationAnimation delay="" repeat="">
        <Rotation angle="" time=""/>
    </RotationAnimation>

    <PositionAnimation delay="" repeat="">
        <Position x="" y="" time=""/>
    </PositionAnimation>

    <SizeAnimation delay="" repeat="">
        <Size w="" h="" time=""/>
    </SizeAnimation>
</Image>
```

正确示例：变量动画使用。

```
<Var name="weiyi1">
    <VariableAnimation delay="2000">
        <AniFrame value="0" time="0" />
        <AniFrame value="-1200" time="4500" />
        <AniFrame value="-2900" time="9200" />
    </VariableAnimation>
</Var>

<!--图片的实时位置，x随着时间变化而变化，y随着位置的变化而变化。-->
<Image x="abs(100+sin(#time/1553)*100)" y="#sh+301+#weiyi1" src="1.png" />
```

2. 画面切换时添加过渡动画，提升用户体验。

正确示例：滑动切换图片，两层图片透明度变化，上层图渐变消失，底部图片渐变出现。

```
 // 根据变量scalevalue的值设置两个图片的透明度
  <Group>
        <Image x="261" y="1479*#ratio" src="cameras/style1/b.png"   alpha="(abs(#scalevalue))*255"   srcid="3-(#camera_type+1)%4" />
        <Image x="261" y="1479*#ratio" src="cameras/style1/b.png"   alpha="(1-abs(#scalevalue))*255"  srcid="3-#camera_type" />
    </Group>
    <Var name="base" expression="0"/>
    <Var name="move" expression="ifelse(eq(#isCameraArea,1),#touch_x-#touch_begin_x,0)"/>
    <Var name="temp" expression="#base+#move"/>
    <Var name="maxvalue" expression="200*#screen_width/1080"/>
    <Var name="value" expression="ifelse(lt(#temp,-#maxvalue),-#maxvalue,gt(#temp,#maxvalue),#maxvalue,#temp)"/>
    <Var name="scalevalue" expression="#value/#maxvalue"/>

	// 手指触摸滑动时，改变变量的值,抬起时，根据当前滑动的距离，切换到相应的状态
    <Var name="scalevalue">
        <VariableAnimation  repeat="1">
            <AniFrame value="#tempValue"    time="0" varSpeedFlag="QuartFun_Out" />
            <AniFrame value="#target_value" time="200" />
        </VariableAnimation>
    </Var>

    <Button h="800" w="800" x="261" y="1479*#ratio">
        <Triggers>
            <Trigger action="down">
                <VariableCommand name="isCameraArea" expression="1"/>
                <Command target="scalevalue.animation" value="stop" />
            </Trigger>
            <Trigger action="up">
                <VariableCommand name="camera_type"   expression="(#camera_type+1)%4" condition="gt(abs(#value),50)"/>
                <VariableCommand name="value"          expression="0"/>
                <VariableCommand name="base"           expression="#value"/>
                <VariableCommand name="move"           expression="0"  />
                <VariableCommand name="scalevalue"   expression="0" />
                <VariableCommand name="isCameraArea" expression="0" />
            </Trigger>
        </Triggers>
    </Button>
```

### 命令触发

1. 当变量的值超过阈值时，触发命令（详见[自定义变量&lt;Var&gt;](/docs/distribute/content-dist/theme-center/development-tutorial-0000001054519376/themes-engine-0000001054452463/themes-engine4-0000002530591413/basic-function-0000001054908461/variant-0000001074067773/variant-0000001074315406)的threshold参数说明），此时不要使用变化频率过高的全局变量（例：全局变量time/second）为变量赋值，否则将频繁触发命令，造成卡顿，无响应。

错误示例：定义一个变量kongzhi111，引用全局变量time（当前时间毫秒值）为其赋值，同时变量kongzhi111的值超过阈值1时，触发执行trigger中的多条复杂命令：给一系列变量进行运算和赋值。由于全局变量time的值变化频率高，频繁超过阈值1，导致trigger中的多条复杂命令执行频率高，造成卡顿，无响应的情况。

```
 <Var name="kongzhi111" expression="#time" threshold="1" persist="true">
    <Trigger>
        <VariableCommand expression="eq((#year%4),0)*ne((#year%100),0)+eq((#year%400),0)" name="lya1" />
        <VariableCommand name="yearAlready" expression="365+#lya1-#year_datejj1-1"/>
        <VariableCommand expression="ifelse(lt(#set_m,#month+1),#year+1,eq(#set_m,#month+1)*le(#set_r,#date),#year+1,#year)" name="y2" />
        <VariableCommand expression="eq((#y2%4),0)*ne((#y2%100),0)+eq((#y2%400),0)" name="lyz2" />
        <VariableCommand name="ling0" expression="int(#cz_zd*24+#hour)"  />
        <VariableCommand name="ling1" expression="int(#cz_zd*24*60+#hour*60+#minute)"  />
        <VariableCommand name="ling2" expression="int(#cz_zd*24*60*60+#hour*60*60+#minute*60+#mm1)"  />
     </Trigger>
 </Var>
```

## 锁屏设置异步加载

动态引擎在锁屏、桌面、桌面万象小组件中应用时，默认加载方式为同步加载：待脚本文件全部加载完成后再显示，解析过程中显示为黑屏。

动态引擎在锁屏上应用时，在某些特定场景下（脚本行数较大、处理的图片资源数量多或者资源大、视图标签数量多等），使用同步加载可能存在以下问题：锁屏黑屏时间长；锁屏加载时间长，无响应。此时，可以尝试将加载方式设置为异步加载，以有效减少锁屏黑屏时间和无响应出现的频率。

### 异步加载介绍

异步加载：每解析一个视图标签就会添加并显示到画面上，可以有效减少锁屏黑屏时间和无响应出现的频率。

当前仅锁屏支持设置异步加载。

<strong>建议使用场景（使用同步加载存在问题：如黑屏时间长、无响应）：</strong>

1. 脚本行数较大。
2. 处理的图片资源数量多或者资源大。
3. 视图标签数量多。

<strong>不建议使用场景：</strong>

1. 脚本行数少或页面元素简单，没有复杂的动效或多屏显示。
2. 以下特殊场景： "[立体图层&lt;MultiLayer&gt;](/docs/distribute/content-dist/theme-center/development-tutorial-0000001054519376/themes-engine-0000001054452463/themes-engine4-0000002530591413/x3d-advanced-animation1-0000001305903669/multilayer-0000001074173883)"和 "[全景动效&lt;VR&gt;](/docs/distribute/content-dist/theme-center/development-tutorial-0000001054519376/themes-engine-0000001054452463/themes-engine4-0000002530591413/x2d-advanced-animation-0000001055668422/vr-0000001073796119)"，详见[异步加载规范](#section16520152795811)第2点。
3. 使用全屏覆盖的透明度动画。详见[异步加载注意事项](#section33154025819)第4点。

### 异步加载规范

1. 在theme.xml 中新增asyncLoad字段：asyncLoad="true"，锁屏异步加载；asyncLoad="false"，锁屏同步加载；默认为false。

   ```
   <?xml version="1.0" encoding="UTF-8"?>
   <HWTheme>
       <item style="slide"/>
       <item package="com.huawei.ucdlockscreen"/>
       <item dynamicPath="lockscreen"/>
       <item minversion="2.0.24"/>
       <item title-cn="华为官方主题"/>
       <item title="Huawei Themes"/>
       <item maxHeight="2160"/>
       <item baseVersion="6.0"/>
       <item asyncLoad="true"/>
       <item engineType="HWThemeEngine"/>
   </HWTheme>
   ```
2. 以下特殊场景不适用异步加载： "[立体图层&lt;MultiLayer&gt;](/docs/distribute/content-dist/theme-center/development-tutorial-0000001054519376/themes-engine-0000001054452463/themes-engine4-0000002530591413/x3d-advanced-animation1-0000001305903669/multilayer-0000001074173883)"和 "[全景动效&lt;VR&gt;](/docs/distribute/content-dist/theme-center/development-tutorial-0000001054519376/themes-engine-0000001054452463/themes-engine4-0000002530591413/x2d-advanced-animation-0000001055668422/vr-0000001073796119)，已在引擎中设定为使用同步加载。即如果脚本中含有这些标签，即使配置了asyncLoad="true"也不生效，仍按同步加载处理。

### 异步加载注意事项

现有资源脚本如修改为异步加载方式，需注意以下几点：

1. 异步加载时，标签按照编写的先后顺序逐个解析，先写的标签会先加载出来，因此需注意标签编写顺序及其相应的加载过程。
2. 异步加载时，整个脚本加载完成后才会开始播放动效，因此需注意视图元素的初始状态、初始位置处理。

   示例：为元素设置开屏位移动画入场，元素初始位置为（0,-400），此时视图一部分在屏幕内，另一部分在屏幕外，且整个脚本加载完成前，不播放位移动画，只展示静态元素，则这个元素看上去像在屏幕上卡住了，对用户造成误解。

   ```
   <DateTime align="center" y="900-160" x="540" size="47" color="#fbd4a2" format="M月d日 EEEE">
         <PositionAnimation repeat="1">
                <Position x="0" y="-400" time="0"/>
                <Position x="0" y="0" time="500"/>
         </PositionAnimation>
   </DateTime>
   ```
3. 异步加载时，所有变量都需要在使用之前定义，否则会导致变量使用时取值不正确，可能出现跳变等问题。

   错误示例：end变量先使用再定义，则先加载Image标签时，y变量先获取到end变量值为0，加载到 Var 标签时end变量值又突然发生变化，导致 Image的y值出现跳变。

   ```
   <Image x="0" y="#end" src="test.jpg"/>
   <Var name="end" expression="ifelse(eq(#pre,1),ifelse(gt(#abs(#touch_begin_x-#touch_x),15),1,0),0)"/>
   ```

   正确示例：end变量先定义再使用，则Image加载的初始位置正确。

   ```
   <Var name="end" expression="ifelse(eq(#pre,1),ifelse(gt(#abs(#touch_begin_x-#touch_x),15),1,0),0)"/>
   <Image x="0" y="#end" src="test.jpg"/>
   ```
4. 异步加载，不适合在亮屏时使用全屏透明度动画的资源使用，否则可能会出现亮屏时先亮-后黑-再亮的闪屏问题。

   示例：设置背景图片bg/bg\_0.png，上方覆盖一张全屏黑色蒙层bg\_top.jpg，同时为bg\_top.jpg设置透明度动画（透明度由255变为0），以实现整个画面由暗到亮的效果。如果使用异步加载，则加载过程为：先显示背景图片bg/bg\_0.png，再显示全屏黑色蒙层bg\_top.jpg。视图全部加载完成后，bg\_top.jpg执行透明度动画（透明度由255变为0），则视觉效果为：先亮后黑再亮，看上去为闪屏问题，对用户造成误解。

   ```
   <Image src="bg/bg_0.png" h="#h" w="#w" y="0" x="0"/>
   <Image name="in" src="bg/bg_top.jpg" h="#h" w="#w" y="0" x="0">
        <AlphaAnimation repeat="1">
              <Alpha time="0" a="255"/>
              <Alpha time="1000" a="0"/>
        </AlphaAnimation>
   </Image>
   ```