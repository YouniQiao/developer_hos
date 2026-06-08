---
title: "元服务规格"
original_url: /docs/experience-suggestions/compatibility/system-features/atomic-specifications
format: md
upstream_id: experience-suggestions/compatibility/system-features/atomic-specifications
last_sync: 2026-06-07
sync_hash: 64648008
---
# 元服务规格

|  |  |
| --- | --- |
| **描述** | 元服务内所有包总和大小不超过10MB。 |
| **类型** | 规则 |
| **适用设备** | 通用 |
| **应用形态适用性** | 鸿蒙元服务 |
| **说明** | [元服务程序包基础知识](/docs/dev/atomic-dev/atomic-service/atomic-service-package-basics) |

|  |  |
| --- | --- |
| **描述** | 元服务单个包文件大小不超过2MB。 |
| **类型** | 规则 |
| **适用设备** | 通用 |
| **应用形态适用性** | 鸿蒙元服务 |
| **说明** | [元服务程序包基础知识](/docs/dev/atomic-dev/atomic-service/atomic-service-package-basics) |

|  |  |
| --- | --- |
| **描述** | 元服务只能使用元服务API。 |
| **类型** | 规则 |
| **适用设备** | 通用 |
| **应用形态适用性** | 鸿蒙元服务 |
| **说明** | [元服务API说明](https://developer.huawei.com/consumer/cn/doc/atomic-references/atomic-apis-intro) |

|  |  |
| --- | --- |
| **描述** | 元服务仅支持免安装。 |
| **类型** | 规则 |
| **适用设备** | 通用 |
| **应用形态适用性** | 鸿蒙元服务 |
| **说明** | [应用配置文件（Stage模型）-module.json5配置文件](/docs/dev/app-dev/getting-started/dev-fundamentals/module-configuration-file) |

|  |  |
| --- | --- |
| **描述** | 元服务预加载对应模块类型不能为entry。 |
| **类型** | 规则 |
| **适用设备** | 通用 |
| **应用形态适用性** | 鸿蒙元服务 |
| **说明** | [预加载](/docs/dev/atomic-dev/atomic-subpackage-loading/atomic-preparing-for-loading) |

|  |  |
| --- | --- |
| **描述** | 元服务涉及账号体系和登录能力时，需使用华为账号能力进行静默登录。 |
| **类型** | 规则 |
| **适用设备** | 通用 |
| **应用形态适用性** | 鸿蒙元服务 |
| **说明** | [元服务登录](/docs/design/atomic-service-design/best-practices/accounts) |

|  |  |
| --- | --- |
| **描述** | 元服务用户界面禁止出现微信、安卓相关字眼和图标。 |
| **类型** | 推荐 |
| **适用设备** | 通用 |
| **应用形态适用性** | 鸿蒙元服务 |
| **说明** | 无 |

|  |  |
| --- | --- |
| **描述** | 元服务用户界面禁止出现提示跳转或诱导至APP、微信小程序、快应用进行转化和下单行为。 |
| **类型** | 规则 |
| **适用设备** | 通用 |
| **应用形态适用性** | 鸿蒙元服务 |
| **说明** | 无 |

|  |  |
| --- | --- |
| **描述** | 元服务要求有且仅有一个UIAbility，并且该UIAbility只能在entry模块，启动模式需要设置为单例模式，mainElement指向唯一的UIAbility的Name。 |
| **类型** | 规则 |
| **适用设备** | 通用 |
| **应用形态适用性** | 鸿蒙元服务 |
| **说明** | 无 |

|  |  |
| --- | --- |
| **描述** | 元服务链接打开只支持短链形式，不支持deeplinking和开发者自认证的applinking，禁止声明隐式跳转。 |
| **类型** | 规则 |
| **适用设备** | 通用 |
| **应用形态适用性** | 鸿蒙元服务 |
| **说明** | [元服务不支持隐式跳转](/docs/dev/atomic-dev/atomic-service-framework-development/start-other-atomicservices) |

|  |  |
| --- | --- |
| **描述** | 元服务禁止使用arkWeb组件，涉及网页显示需使用AtomicServiceWeb。 |
| **类型** | 规则 |
| **适用设备** | 通用 |
| **应用形态适用性** | 鸿蒙元服务 |
| **说明** | [使用元服务Web组件](/docs/dev/atomic-dev/atomic-web-development/atomicserviceweb-guidelines) |

|  |  |
| --- | --- |
| **描述** | 元服务需要按规范使用场景化Button组件。 |
| **类型** | 规则 |
| **适用设备** | 通用 |
| **应用形态适用性** | 鸿蒙元服务 |
| **说明** | [场景化Button](/docs/dev/app-dev/application-services/scenario-fusion-kit-guide/scenario-fusion-button) |

|  |  |
| --- | --- |
| **描述** | 元服务需要合理设计申请手机号授权功能。 |
| **类型** | 规则 |
| **适用设备** | 通用 |
| **应用形态适用性** | 鸿蒙元服务 |
| **说明** | [快速验证手机号Button](/docs/dev/app-dev/application-services/scenario-fusion-kit-guide/scenario-fusion-button/scenario-fusion-button-getphonenumber) |

|  |  |
| --- | --- |
| **描述** | 元服务需要规范使用华为账号头像Button。 |
| **类型** | 建议 |
| **适用设备** | 通用 |
| **应用形态适用性** | 鸿蒙元服务 |
| **说明** | [选择头像Button](/docs/dev/app-dev/application-services/scenario-fusion-kit-guide/scenario-fusion-button/scenario-fusion-button-chooseavatar) |