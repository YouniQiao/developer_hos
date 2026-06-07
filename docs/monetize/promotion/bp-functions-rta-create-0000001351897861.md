---
title: "创建RTA任务"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/bp-functions-rta-create-0000001351897861
---
import MergeTable from '@site/src/components/MergeTable';

# 创建RTA任务

1. 登录[华为应用市场应用推广平台](https://ads.huawei.com/cn/)，进入创建任务页面。
2. 在“推广内容”设置模块，配置相关任务设置项。

   点击下拉框选择“被推广应用”，配置任务类型的设置项。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e/v3/MDDxsOMmSFmutCLpyi6NPA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260530T050411Z&HW-CC-Expire=86400&HW-CC-Sign=C058870411C9C995DFD635D6141A54149292D01DC0DAB602D6BEB465CB58EAE7) 

   当前，[人群定向任务](/docs/monetize/promotion/bp-functions-target-create-0000001337388933)和[oCPD任务](/docs/monetize/promotion/bp-functions-ocpx-create-ocpd-0000001282723545)支持设置RTA ID，影子投放任务暂不支持设置RTA ID。详细支持RTA的任务请参见[支持RTA的任务类型说明](#section3451122195920)。

   例如：“任务类型”选择“精选推荐”，“计费类型”选择“CPD”，“投放模式”选择“RTA”，此章节以此类型的推广任务举例说明。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9f/v3/y4baZlA5TRelE9T_Qlst8w/zh-cn_image_0000002525057958.png?HW-CC-KV=V1&HW-CC-Date=20260530T050411Z&HW-CC-Expire=86400&HW-CC-Sign=B5F5A90A71B3BC2D49002D4028406C0F7CB2B75C32737DA0246106E1D21397CF "点击放大")
3. 配置完成后，点击“继续，进行任务详细设置”。
4. 在“场景投放”设置模块，点击“新建”，创建相关的子任务。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/da/v3/RmZK1PlMQyysDMfV88uxAQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260530T050411Z&HW-CC-Expire=86400&HW-CC-Sign=382CC75F6765FB8D1E4B3D49A942CFA0D7513E4BC857BAD5DCAE603851EE4D50) 

   不同类型的投放任务对应子任务数的上限是不同的。具体子任务数的上限，请查看“新建”下的界面提示。

   创建子任务时，配置“RTA策略ID”设置项。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cb/v3/cEE-mYvbSWiSHJzRjWtYxg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260530T050411Z&HW-CC-Expire=86400&HW-CC-Sign=AD457B85FFBFF745DA20582C5D38B0CC88FA73EB8DC06C06EA0619316A516A64) 

   RTA ID可由纯数字、纯字母或字母和数字组合的方式组成，长度不超过32个字符。请确保RTA ID正确填写，否则会导致RTA任务失效。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/74/v3/GA88Ots1Q1eimJItoPGQQQ/zh-cn_image_0000001362108701.png?HW-CC-KV=V1&HW-CC-Date=20260530T050411Z&HW-CC-Expire=86400&HW-CC-Sign=C2B9FFCCD689E4461727FF17A2345F5AE9C708A32DDEF00EE7C6542114AD5FBC)

## 支持RTA的任务类型说明


<MergeTable
  headers={["投放场景", "任务类型", "投放模式", "计费类型", "是否支持RTA"]}
  rows={[
    [({text: '推荐', rowspan: 11}), ({text: '精选推荐', rowspan: 5}), ({text: '系统投放', rowspan: 3}), 'CPD', '否'],
    [null, null, null, 'oCPD', '是'],
    [null, null, null, 'CPC', '是'],
    [null, null, '影子投放', 'CPD', '否'],
    [null, null, 'RTA', 'CPD', '是'],
    [null, ({text: '全域推荐', rowspan: 5}), ({text: '系统投放', rowspan: 3}), 'CPD', '否'],
    [null, null, null, 'oCPD', '是'],
    [null, null, null, 'CPC', '是'],
    [null, null, '影子投放', 'CPD', '否'],
    [null, null, 'RTA', 'CPD', '是'],
    [null, '耀星推荐', '系统投放', 'CPD', '否'],
    [({text: '搜索', rowspan: 6}), ({text: '应用搜索', rowspan: 4}), ({text: '系统投放', rowspan: 2}), 'CPD', '否'],
    [null, null, null, 'oCPD', '否'],
    [null, null, '影子投放', 'CPD', '否'],
    [null, null, '搜索大卡', 'CPM', '否'],
    [null, ({text: '焦点展台', rowspan: 2}), ({text: '系统投放', rowspan: 2}), 'CPD', '否'],
    [null, null, null, 'oCPD', '否'],
    [({text: '创意', rowspan: 4}), ({text: '创意推广', rowspan: 4}), ({text: '内容推荐', rowspan: 4}), 'CPD', '是'],
    [null, null, null, 'oCPD', '是'],
    [null, null, null, 'CPC', '是'],
    [null, null, null, 'oCPC', '是'],
    ['合约', '图文合约-单资源', '合约', 'CPT', '否'],
  ]}
/>

