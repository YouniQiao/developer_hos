---
title: "展示位状态说明"
displayed_sidebar: monetizationSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/monetize/agd_pro_sdk_appd_display-position-status-0000001461022605
format: md
---



展示位提交后，受展示位的配置、审核等因素的影响，展示状态有所不同，如下表：

| 状态 | 可执行操作 | 应用用户是否可见此状态 | 说明 |
| --- | --- | --- | --- |
| 测试 | 编辑、查看报告、删除 | 不可见 | 仅测试设备上的展示位为此状态。  如需将“测试”状态的展示位用于请求调试，请将测试设备的OAID添加到AGC页面的“接入测试”菜单中，否则将报错1013错误，具体可参见[接入测试](https://developer.huawei.com/consumer/cn/doc/monetize/agd_pro_sdk_andriod_commission-0000001461023573#section9164163104614)。 |
| 审核中 | 查看、查看报告 | 不可见 | 展示位属性为“正式”时需要审核。 |
| 驳回 | 编辑、查看报告、删除 | 不可见 | - |
| 运行中 | 编辑、查看报告、删除 | 可见 | 审核通过正常运行的展示位。 |
| 异常停止 | 查看报告 | 不可见 | 展示位异常被停止。  说明：  展示位被停止时，请提交[在线工单](https://developer.huawei.com/consumer/cn/support/feedback/#/)寻找支持人员处理。 |
