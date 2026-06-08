---
title: "壁纸设计指导及规范"
displayed_sidebar: contentDistSidebar
original_url: /docs/distribute/content-dist/theme-center/development-tutorial-0000001054519376/wallpaper-0000001054691151/wallpaper-specifications-0000001054789797
upstream_id: distribute/content-dist/theme-center/development-tutorial-0000001054519376/wallpaper-0000001054691151/wallpaper-specifications-0000001054789797
last_sync: 2026-06-07
sync_hash: e7dc90ed
---
import MergeTable from '@site/src/components/MergeTable';

# 壁纸设计指导及规范

## 1. 壁纸介绍

静态壁纸可设置成手机和平板的锁屏或者桌面背景。

## 2. 制作流程

步骤一：使用设计相关软件进行制图。

步骤二：根据“[壁纸测试规范](/docs/distribute/content-dist/theme-center/content-release-0000001054679366/content-review-specifications-0000001054679960/content-check-pecifications-0000001057301166/wallpaper-test-0000001057539336#section38324471104)”自检自查。

步骤三：根据“[壁纸上传指南](/docs/distribute/content-dist/theme-center/content-release-0000001054679366/uploadguide-0000001054359939/wallpaper-upload-0000001055348466#ZH-CN_TOPIC_0000001057542699__section89510919112)”上传到开发者联盟主题中心。

## 3. 壁纸设计规范

![](./img/8eab0242d85c.png)

1. 上传壁纸大小在3M以内，JPG格式。

2. 若上传壁纸为手机在线壁纸，需在FHD-W1440\*H2880、FHD-W2160\*H1920、WQHD-W2480\*H2480中必选一个，建议设计师优先上传W2160\*H1920（1080\*1920）壁纸尺寸。

3. 6种分辨率设计师可以根据需要选择其中一种或多种分辨率上传。




<MergeTable
  headers={['壁纸类型', '壁纸尺寸', '适配屏幕', '适配', '格式']}
  rows={
    [{ text: '静态壁纸', rowspan: 6, colspan: 1 }, 'W1440*H1280(默认必上传尺寸）', '720*1280（兼容QHD）', '手机', 'jpg'],
    [null, 'W1440*H2880', '1200*1920', '手机', 'jpg'],
    [null, 'W2160*H1920', '1080*1920', '手机', 'jpg'],
    [null, 'W2480 * H2480', '2200*2480', '折叠屏手机', 'jpg'],
    [null, 'W2400 * H1920', '1200*1920', '平板', 'jpg'],
    [null, 'W3200 * H2560', '1600*2560', '平板', 'jpg']
  }
/>

| W3200 \* H2560 | 1600\*2560 | 平板 | jpg |