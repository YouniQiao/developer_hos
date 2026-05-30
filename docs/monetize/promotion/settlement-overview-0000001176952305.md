---
title: "概述"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/settlement-overview-0000001176952305
---
import MergeTable from '@site/src/components/MergeTable';

# 概述

本章节为直客财务结算，服务商财务结算请参考[服务商财务管理](https://developer.huawei.com/consumer/cn/doc/promotion/finance-0000001058604140)。

## 术语介绍

**广告投放在多个账户有余额的情况下，各账户的扣费顺序：纯赠送金\_华为自有媒体>纯赠送金\_通用>充值赠送金\_华为自有媒体>充值赠送金\_通用>返利金\_华为自有媒体>返利金\_通用>现金>授信。**

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bc/v3/8FVq0vshQTyvKm32PYGprw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260530T050415Z&HW-CC-Expire=86400&HW-CC-Sign=C26C117B4B88587D901B41178A360CE594471E8E5B7B71E1C5E003D3F79D5510) 

- 充值赠送金需搭配与华为商定达成的比例，与其他余额类型（现金+返利金）一起进行消耗。
- 纯赠送金支持单独消耗，不受按比例消耗限制，纯赠送金不会影响直客账户余额平衡。


<MergeTable
  headers={["账户类型", "使用区域", "余额类型", "解释", "是否支持开票"]}
  rows={[
    ['现金账户', '全球', '现金', '您将现金预先充值到华为指定收款账户，实时扣费。', '是'],
    [({text: '虚拟账户 （纯赠送金余额+充值赠送金 + 返利金余额）', rowspan: 8}), ({text: '非中国大陆地区：包括阿斯比格和华为服务（香港）', rowspan: 4}), '纯赠送金_华为自有媒体', ({text: '指的是鲸鸿动能广告平台赠送给广告主的可消耗金额，一般由活动或其他特殊场景产生。 纯赠送金_华为自有媒体指的是只能在华为自有媒体的版位上消耗的赠送金额，支持单独消耗。 纯赠送金_通用指的是用于华为自有媒体和三方媒体，支持单独消耗。', rowspan: 2}), ({text: '否', rowspan: 8})],
    [null, null, '纯赠送金_通用'],
    [null, null, '充值赠送金_华为自有媒体', ({text: '指的是鲸鸿动能广告平台赠送给广告主的可消耗金额，一般由活动或其他特殊场景产生。 充值赠送金_华为自有媒体指的是只能在华为自有媒体的版位上消耗的赠送金额，需搭配与华为商定达成的比例进行消耗。 充值赠送金_通用指的是用于华为自有媒体和三方媒体，需搭配与华为商定达成的比例进行消耗。', rowspan: 2})],
    [null, null, '充值赠送金_通用'],
    [null, ({text: '阿斯比格：具体使用区域请参考 分发区域', rowspan: 2}), '返利金(阿斯比格)_华为自有媒体', ({text: '指的是鲸鸿动能广告平台根据线下合同约定的消耗返利政策，给予广告主的消耗返利金额，只能用于阿斯比格区域的广告投放。 返利金（阿斯比格）_华为自有媒体指只能用于在华为自有媒体版位消耗的返利金额。 返利金（阿斯比格）_通用指用于华为自有媒体和三方媒体版位消耗的返利金额。', rowspan: 2})],
    [null, null, '返利金(阿斯比格)_通用'],
    [null, ({text: '华为服务（香港）：具体使用区域请参考 分发区域', rowspan: 2}), '返利金(华为服务(香港))_华为自有媒体', ({text: '指的是鲸鸿动能广告平台根据线下合同约定的消耗返利政策，给予广告主的消耗返利金额，只能用于华为服务（香港）区域的广告投放。 返利金（华为服务（香港））_华为自有媒体指只能用于在华为自有媒体版位消耗的返利金额。 返利金（华为服务（香港））_通用指用于华为自有媒体和三方媒体版位消耗的返利金额。', rowspan: 2})],
    [null, null, '返利金(华为服务(香港))_通用'],
    ['授信账户', '全球', '授信', '指的是直客通过向鲸鸿动能广告平台申请开通 授信账户 （授信额度存在有效期），并分配一定的授信额度，直客进行消耗后，才会产生授信账单，直客需要按照线下充值进行还款。 如果直客的授信额度到期，但并未进行消耗，则直客账户中的授信额度将清零，无需还款。', '是'],
  ]}
/>


## 支付方式

广告账户注册后，需要进行现金账户充值后才能进行广告投放，您可以选择的支付方式如下：

- **[线下充值](https://developer.huawei.com/consumer/cn/doc/promotion/charge-0000001052064326)：**您可以通过银行转账到[指定银行账户](#ZH-CN_TOPIC_0000001176952305__table169021827151913)的方式进行充值，银行转账之后需要您在鲸鸿动能广告平台提交充值申请，审批通过后充值进现金账户余额，投放广告时从账户余额中进行扣费。
- **[线上充值](https://developer.huawei.com/consumer/cn/doc/promotion/online-top-up-0000001148173308)**：您可以通过线上充值的方式在广告投放之前先充值，金额将会充值到现金账户余额。

注：来自俄罗斯地区的企业主体，请通过以下链接中的Petal Ads Certified Partner进行广告充值：

`https://ads.huawei.com/usermgtportal/home/index.html#/partners`

鲸鸿动能广告平台提供阿斯比格和华为服务（香港）两个银行收款账户，需要根据主要投放区域选择阿斯比格或者华为服务（香港）充值；两个账户支持的币种不同。

**您的充值币种需要与您账户注册时选择的币种保持一致。账户的计费也按照该币种计算。**

例如：您账户注册时选择的币种是美元，则您需要用美元充值，您的账户计费也将以美元计算。

**充值的银行账号信息如下：**

<MergeTable
  headers={["投放区域", "币种", "账户信息"]}
  rows={[
    [({text: '欧洲、大洋洲、北美洲', rowspan: 2}), '美元', '账户名称 ： Aspiegel SE 企业地址 ： First Floor, Simmonscourt House, Simmonscourt Road, Dublin 4, D04 W9H6, Ireland 银行名称 ：Citibank Europe plc, Dublin Branch SWIFT 号码 ：CITIIE2X 银行地址 ：Dublin Branch 1 North Wall Quay, Dublin 1, Ireland 账户号码 ：0024215016 IBAN 号码 ：IE24CITI99005124215016'],
    [null, '欧元', '账户名称 ：Aspiegel SE 企业地址 ： First Floor, Simmonscourt House, Simmonscourt Road, Dublin 4, D04 W9H6, Ireland 银行名称 ：Citibank Europe plc, Dublin Branch SWIFT 号码 ：CITIIE2X 银行地址 ：Dublin Branch 1 North Wall Quay, Dublin 1, Ireland 账户号码 ：23630001 IBAN code: IE46CITI99005123630001'],
    ['亚洲、非洲、拉丁美洲', '美元、人民币、欧元、日元、英镑', '账户名称 ：Huawei Services (Hong Kong) Co., Limited 企业地址 ： Room 03, 9th Floor, Tower 6, The Gateway, No. 9 Canton Road, Tsim Sha Tsui, Kowloon, Hong Kong 银行名称 ：Industrial and Commercial Bank of China (Asia) Limited SWIFT 号码 ： UBHKHKHH 账户号码 ：861530180846'],
  ]}
/>

