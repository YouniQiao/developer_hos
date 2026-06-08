---
format: md
title: "如何自定义Video组件控制栏样式"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-97
upstream_id: FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-97
last_sync: 2026-06-07
sync_hash: f591bd6e
---
1. 通过设置属性controls为false关闭默认控制栏。
2. 设置Video组件的controller。
3. 通过ArkTS实现自定义的控制栏，并通过VideoController控制视频播放。

   ```
   @Entry
   @Component
   struct VideoCreateComponent {
     @State videoSrc: Resource = $rawfile('xxx.mp4')
     @State previewUri: Resource = $r('app.media.xxx')
     @State curRate: PlaybackSpeed = PlaybackSpeed.Speed_Forward_1_00_X
     @State isAutoPlay: boolean = false
     @State showControls: boolean = true
     controller: VideoController = new VideoController()

     build() {
       Column() {
         Video({
           src: this.videoSrc,
           previewUri: this.previewUri,
           currentProgressRate: this.curRate,
           controller: this.controller
         })
           .width('100%')
           .height(600)
           .autoPlay(this.isAutoPlay)
           .controls(this.showControls)
           .onStart(() => {
             console.info('onStart')
           })
           .onPause(() => {
             console.info('onPause')
           })
           .onFinish(() => {
             console.info('onFinish')
           })
           .onError(() => {
             console.info('onError')
           })
           .onPrepared((e) => {
             console.info('onPrepared is ' + e.duration)
           })
           .onSeeking((e) => {
             console.info('onSeeking is ' + e.time)
           })
           .onSeeked((e) => {
             console.info('onSeeked is ' + e.time)
           })
           .onUpdate((e) => {
             console.info('onUpdate is ' + e.time)
           })
         Row() {
           Button('src').onClick(() => {
             this.videoSrc = $rawfile('xxx.mp4') // Switch video source
           }).margin(5)
           Button('previewUri').onClick(() => {
             this.previewUri = $r('app.media.xxx') // Switch video preview poster
           }).margin(5)

           Button('controls').onClick(() => {
               this.showControls = !this.showControls // Switch whether to display the video control bar
           }).margin(5)
         }

         Row() {
           Button('start').onClick(() => {
             this.controller.start() // 开始播放
           }).margin(5)
           Button('pause').onClick(() => {
             this.controller.pause() // 暂停播放
           }).margin(5)
           Button('stop').onClick(() => {
             this.controller.stop() // 结束播放
           }).margin(5)
           Button('setTime').onClick(() => {
             this.controller.setCurrentTime(10, SeekMode.Accurate) // Accurately jump to the 10s position of the video
           }).margin(5)
         }

         Row() {
           Button('rate 0.75').onClick(() => {
             this.curRate = PlaybackSpeed.Speed_Forward_0_75_X // 0.75 times playback speed
           }).margin(5)
           Button('rate 1').onClick(() => {
             this.curRate = PlaybackSpeed.Speed_Forward_1_00_X // Original speed playback
           }).margin(5)
           Button('rate 2').onClick(() => {
             this.curRate = PlaybackSpeed.Speed_Forward_2_00_X // Play at 2x speed
           }).margin(5)
         }
       }
     }
   }
   ```

**参考链接**

[Video](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-media-display/arkts-common-components-video-player)
