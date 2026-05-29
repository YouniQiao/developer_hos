---
title: 色彩
sidebar_label: 色彩
source_url: https://developer.huawei.com/consumer/cn/doc/design-guides/color-0000001776857164
---
{/* TODO: 含合并单元格的表格已降级为标准Markdown表格，建议使用<MergedTable>组件还原 */}

# 色彩

在 HarmonyOS NEXT的色彩设计中，强调品牌色的特征性展示以及系统色彩的对比关系，通过色彩的层次结构传递视觉的连续性和界面的关联性。HarmonyOS NEXT 的色彩系统的体验目标是为所有人群而设计，体现更加包容性的设计，以不同用户群体的视角思考问题。

HarmonyOS NEXT 的系统色调继承了“鸿蒙宇宙”世界观中回归本源的主旨思想，结合宇宙宏观之势与回归自然本源之力，吸收并呈现纯净与和谐的虚拟世界色彩空间体验。宇宙蓝与雪域灰作为 HarmonyOS NEXT 系统中色彩的构成基础，奠定了整体色系的体验趋势，象征着苍穹与大地，两者相配合，使得整个用户界面更加干净、和谐。

|  |  |
| --- | --- |
| ![](img/img_cea583fe6ec8_zh-cn_image_0000001957312205.png "点击放大") | ![](img/img_84c7b5158a5f_zh-cn_image_0000001957232385.png "点击放大") |
| **宇宙蓝**  我们选择更为深邃广阔的宇宙蓝，无边无垠的蓝深邃如宇宙，为系统带来宇宙初开的纯净与宁静。 | **雪域灰**  自然里面，没有绝对的黑也没有绝对的白，以带有淡蓝色相的雪域灰作为卡片界面的背景颜色来烘托界面的纯净感。 |

创建属于应用自身的品牌色，可以让用户时刻注意并了解当前所属的应用进程，便于用户理解和发现关键性事件。一套舒适有特征的配色方案，结合层次分明的参数信息和组件结构，可以更加高效的帮助开发者与设计师投入到应用开发与设计中。

### 如何分层构建色彩

色彩分层的核心在于构建不同使用场景下的对比关系，每一个颜色都有属于自己的 ID，用于处理不同层级之间的对比差异和保持同层级色彩一致的关键作用。

**映射正确的色彩关系**

系统组件会默认对应一套分层参数，这些参数在默认情况下满足使用场景。如果应用需要自定义组件规格，则需要重新梳理正确的映射关系到这些组件的背景、文本等色彩。

**保障色彩的可阅读性**

色彩的搭配使用需要满足常规阅读对比度，系统默认颜色保障了最小 3:1 对比度，在深色模式下色彩的映射关系会发生部分变化，这些变化在情理之中。

**最小化的色彩管理**

在 HarmonyOS 的色彩体系中，可以最小化的管理系统色彩数量，基于常规色四件套便可搭建系统整体的色彩风格。

### 如何运作 Token 参数

在系统参数中可以找到名称前缀包括 “primary”、“on\_primary”、“brand”、“container”的颜色，在浅色与深色模式中均使用相同的 Token 名称，但他们可能对应不同的数值。

![](img/img_3cb3c9cf532d_zh-cn_image_0000001930152952.png "点击放大")

在系统参数设计中，会将参数类型划分为三个层级关系，自上而下为控件私有参数、通用语义参数和通用基础参数。

* **基础 Token**：基础色彩包含 primary、on\_primary、brand、container、background 等色彩，基础色会通过一定的计算方式延伸成一定数量的对比度色彩，用于展示在用户界面的不同元素中，通过对比度关系构建界面效果。基础色可以被直接引用，或是被引用后重新定义语义，用于界面中同类型和显示层级的元素中。
* **语义 Token**：语义色彩有用于固定场景 Token 名称，这些名称定义了自身的使用场景且不可随意更改。语义 Token 分为文本类、图标类、组件类和交互事件类。这些类别定义了系统中大部分的使用场景，每个 Token 参数都与基础 Token 具备一定的引用关系，应用自定义的参数也可基于使用场景自定义引用链路。
* **控件 Token**：用于指定控件内某一元素所对应的参数信息，具有唯一性且不可复用。控件 Token 属于组件内部的元素名称，应用自定义控件可以参考这类 Token 的使用关系。

![](img/img_c010030f42d4_zh-cn_image_0000001929993576.png "点击放大")

|  |  |
| --- | --- |
| * **Primary**   用于最上层文本、图标的填充和显示，低对比度可用于其他层级显示，例如二级文本色、三级文本色等。   * **onPrimary**   用于显示在强调色、图片之上显示的文本、图标，不可在常规界面中使用。例如，不可在一级背景色 backgroundColorPrimary 基础上直接使用 onPrimary 颜色。   * **Brand**   系统主题色、高亮色，用于突出核心组件信息。应用可定制主题色，主题色影响系统默认组件，同时可用于应用自定义组件。所有引用 brand 色彩的组件都会受到此影响。   * **Container**   系统组件容器色，用于展示组件背景填充色。例如普通按钮背景色、搜索框组件背景色等。 | ![](img/img_a3d68c952bb0_zh-cn_image_0000001957312209.png "点击放大") |
| ![](img/img_183d39849cac_zh-cn_image_0000001957232389.png "点击放大") |
|  |  |
| **定制主题及色彩**  基础色中的 Primary、onPrimary、Brand 以及 Container 均可单独定义色彩，系统默认色彩中 Primary 和 Container 使用同级配色，设计师可以通过配置不同明暗对比的色彩丰富界面视觉效果。  如何自定义应用品牌色，可以参阅[主题换肤](https://gitee.com/openharmony/docs/blob/master/zh-cn/application-dev/ui/theme_skinning.md#%25E8%25AE%25BE%25E7%25BD%25AE%25E5%25BA%2594%25E7%2594%25A8%25E7%25BA%25A7%25E8%2587%25AA%25E5%25AE%259A%25E4%25B9%2589%25E5%2593%2581%25E7%2589%258C%25E8%2589%25B2)中的相关能力。 | ![](img/img_5d178779beb8_zh-cn_image_0000001930152960.png "点击放大") |
|  |  |
| ![](img/img_f1dd8f8ae0d0_zh-cn_image_0000001929993580.png "点击放大") | ![](img/img_bcbc1d6a9515_zh-cn_image_0000001957312213.png "点击放大") |
| **系统默认主题色**  系统默认色以宇宙蓝为高亮色，雪域灰为基础背景搭建 | **应用定制主题色**  应用可定制属于自己品牌色色调，并应用于整个界面 |

### 如何使用 Token 参数

**计算与理解基础 Token 参数关系**

基础 Token 中的颜色会基于透明度系数分别映射出 12 个不同的色彩参数，默认规则直接将透明度与色彩参数值叠加使用。设计师与开发者只需指定基础色的原色参数，通过带入不同透明度值实现整体映射。![](img/img_cded72273434_zh-cn_image_0000001957232393.png "点击放大")

开发者也可以将主题色指定为其他的颜色。系统通用的基础色彩数量是不变的，修改映射关系可能带来控件默认引用 Token 链路发生变化，开发者需要同步考虑控件的默认参数引用逻辑和关系。

![](img/img_2bcc64e94be1_zh-cn_image_0000001930152964.png "点击放大")

**正确使用 Token 进行界面搭配**

为了保障在应用中所有的图层色彩信息保持一定对比度和色彩关系，请参考左侧进行合理的搭配关系。

不正确地组合颜色可能会破坏组件和界面的对比关系和美观度，特别是在自定义场景下，错误的组合可能会对应用界面带来极大的异常体验。

|  |  |
| --- | --- |
| ![](img/img_4f4a3a19a698_zh-cn_image_0000001929993584.png "点击放大") | ![](img/img_6823671f0760_zh-cn_image_0000001957312217.png "点击放大") |

### 文本色与图标色

|  |  |
| --- | --- |
| **色彩分级**  文本与图标在界面使用中要根据信息优先级选择合适的色彩透明度使用，在 HarmonyOS 中我们划分默认四个基础层级和一个高亮色层级进行展示文本和图标。 | ![](img/img_b3fcfc7b0d9c_zh-cn_image_0000001957232397.png "点击放大") |

文本与图标基于基础 Token-Primary 引用，常规使用分为四个层级，font\_primary、font\_secondary、font\_tertiary 和 font\_fourth，这四个层级依照由高到低依次透明度变化，用于表达界面中核心内容与辅助内容的区别。除此以外文本与图标还有对应反色场景，在 Token name 的表达上使用 font\_on 和 icon\_on 为开头展示，这些内容通常用于展示高亮色容器之上或图片之上的文本与图标，反色内容无论深浅色模式都是用高亮度色彩。

文本与图标的高亮色场景默认引用系统 Brand 颜色，当主题中的 Brand 颜色发生变化，或应用自定义了主题色后，与之对应关联的高亮文本与图标都会发生对应变化。

![](img/img_4d4e96635e22_zh-cn_image_0000001930152968.png "点击放大")

### **组件容器色**

|  |  |
| --- | --- |
| **区分组件背景层级**  用于区分组件背景色的层级关系，在系统组件中存在诸多通用背景色，例如普通按钮、搜索框、文本框等组件。同时，部分组件的背景有特殊含义，例如强调按钮使用系统品牌色，子页签有中性高亮色等。 | ![](img/img_bcb16a9d00a5_zh-cn_image_0000001929993588.png "点击放大") |

控件容器色以 comp 开头的控件专用色主要用于各类控件容器背景色，容器背景基于组件的布局层级分为容器类和展示类，容器类组件的色彩通常跟随系统深浅模式变化，例如：列表背景色、弹出框背景色、半模态背景色；展示类一般为基础功能组件，主要是用品牌色或低透明度背景色，例如：按钮背景色、搜索框背景色、索引条选中色等等。

|  |  |
| --- | --- |
| **控件高亮背景色**   1. comp\_background\_emphasize，控件高亮背景色 2. comp\_emphasize\_secondary，控件高亮二级背景色 3. comp\_emphasize\_tertiary，控件高亮三级背景色 | ![](img/img_4cce0467c89f_zh-cn_image_0000001957312221.png "点击放大") |
|  |  |
| **控件基础背景色**   1. comp\_background\_primary，控件一级背景色 2. comp\_background\_primary\_contrary，控件一级背景色反色 3. comp\_background\_secondary，控件二级背景色 4. comp\_background\_tertiary，控件三级背景色 5. comp\_background\_list\_card，控件列表卡片色 | ![](img/img_bf3855b515a5_zh-cn_image_0000001957232401.png "点击放大") |
|  |  |
| **控件交互事件色**   1. interactive\_hover，悬浮事件色 2. interactive\_pressed，点击事件色 3. interactive\_focus，获焦事件色 4. interactive\_disable，禁用事件色 5. interactive\_select，选中事件色 6. interactive\_active，激活事件色 | ![](img/img_0ce8d9d697f8_zh-cn_image_0000001930152972.png "点击放大") |

### 界面背景色

|  |  |
| --- | --- |
| **背景色原理**  界面背景色主要用于窗口分层处理使用，在多屏及悬浮窗场景下，动态替换背景色的灰阶层级，避免相同背景在不同窗口层级下出现色彩融合的情况。 | ![](img/img_293182e571e4_zh-cn_image_0000001929993596.png "点击放大") |
|  |  |
| **背景色分层**  在通用界面背景下，浅色模式的通用白色背景和雪域灰对应的深色模式都是黑色，这两种背景色作为浅色模式下的基础色，对应深色模式不区分界面色彩的差异化。  从 gray\_02 灰阶色开始，无论深色还是浅色，都对应现显示层级逐级提高或降低灰阶对比度。  界面背景色不可为透明度颜色，在某些特殊情况可作为其他组件背景色使用，跟界面的层级关系依照灰阶对比度逐级选择使用。 | ![](img/img_c8a807761047_zh-cn_image_0000001957312225.png "点击放大") |
|  |  |
| ![](img/img_d84d88068cc8_zh-cn_image_0000001957232405.png "点击放大") | ![](img/img_9891a6962fc1_zh-cn_image_0000001930152976.png "点击放大") |
| **界面通用背景色**   1. background\_primary，界面一级背景色 2. background\_secondary，界面二级背景色   深色模式下，Primary 与 Secondary 对应的背景色默认都为黑色（background\_primary的Dark资源）。 | |

### **系统基础与语义 Token 全量表**

以下颜色参数为ARGB格式呈现，前两位为透明度参数。

| Token | 场景类别 | Light |  | Dark |  |
| --- | --- | --- | --- | --- | --- |
| brand | 品牌色 | #ff0a59f7 | ![](img/img_29382893b2b7_zh-cn_image_0000002319383682.png) | #ff317af7 | ![](img/img_0f2be6512f19_zh-cn_image_0000002319382662.png) |
| warning | 一级警示色 | #ffe84026 | ![](img/img_ef46c60156c5_zh-cn_image_0000002319226546.png) | #ffd94838 | ![](img/img_8c034287a245_zh-cn_image_0000002353226121.png) |
| alert | 二级警示色 | #ffed6f21 | ![](img/img_3e56412970d2_zh-cn_image_0000002319228722.png) | #ffdb6b42 | ![](img/img_cb02a8db2865_zh-cn_image_0000002353348045.png) |
| confirm | 确认色 | #ff64bb5c | ![](img/img_33ce35f08ca5_zh-cn_image_0000002319389426.png) | #ff5ba854 | ![](img/img_f4477c03cd51_zh-cn_image_0000002319229618.png) |
| font\_primary | 一级文本 | #e5000000 | ![](img/img_15140af001fb_zh-cn_image_0000002353228509.png) | #e5ffffff | ![](img/img_7efc1a6d5b86_zh-cn_image_0000002353348809.png) |
| font\_secondary | 二级文本 | #99000000 | ![](img/img_5b4e0b5121e2_zh-cn_image_0000002353230797.png) | #99ffffff | ![](img/img_3f7acc339079_zh-cn_image_0000002353351121.png) |
| font\_tertiary | 三级文本 | #66000000 | ![](img/img_75176683d4ad_zh-cn_image_0000002319233022.png) | #66ffffff | ![](img/img_47dc807ef9b0_zh-cn_image_0000002319393594.png) |
| font\_fourth | 四级文本 | #33000000 | ![](img/img_ad77b1228df0_zh-cn_image_0000002353233129.png) | #33ffffff | ![](img/img_e2d4df6ecda0_zh-cn_image_0000002353233893.png) |
| font\_emphasize | 高亮文本 | #ff0a59f7 | ![](img/img_a8907369d08a_zh-cn_image_0000002353354709.png) | #ff317af7 | ![](img/img_7ae487271b5a_zh-cn_image_0000002319395910.png) |
| font\_on\_primary | 一级文本反色 | #ffffffff | ![](img/img_daf40691b818_zh-cn_image_0000002319236526.png) | #ffffffff | ![](img/img_7b0ba1f4e8f2_zh-cn_image_0000002319236594.png) |
| font\_on\_secondary | 二级文本反色 | #99ffffff | ![](img/img_114fb01512d9_zh-cn_image_0000002319237210.png) | #99ffffff | ![](img/img_d356e2178101_zh-cn_image_0000002353236073.png) |
| font\_on\_tertiary | 三级文本反色 | #66ffffff | ![](img/img_919d30f0e9a0_zh-cn_image_0000002319397854.png) | #66ffffff | ![](img/img_4b9e464d7384_zh-cn_image_0000002319398182.png) |
| font\_on\_fourth | 四级文本反色 | #33ffffff | ![](img/img_a232be9b4216_zh-cn_image_0000002353357721.png) | #33ffffff | ![](img/img_6a92be9f71de_zh-cn_image_0000002319238970.png) |
| icon\_primary | 一级图标 | #e5000000 | ![](img/img_7ed086633c4a_zh-cn_image_0000002319239454.png) | #e5ffffff | ![](img/img_0269785c4348_zh-cn_image_0000002353238073.png) |
| icon\_secondary | 二级图标 | #99000000 | ![](img/img_cc2f3131dd63_zh-cn_image_0000002353358957.png) | #99ffffff | ![](img/img_4a65f9a2e381_zh-cn_image_0000002319400178.png) |
| icon\_tertiary | 三级图标 | #66000000 | ![](img/img_760907cebb12_zh-cn_image_0000002353359493.png) | #66ffffff | ![](img/img_3384ff14a495_zh-cn_image_0000002319400706.png) |
| icon\_fourth | 四级图标 | #33000000 | ![](img/img_277cadacab13_zh-cn_image_0000002319241394.png) | #33ffffff | ![](img/img_ec521143dbdd_zh-cn_image_0000002353240209.png) |
| icon\_emphasize | 高亮图标 | #ff0a59f7 | ![](img/img_402f220a758e_zh-cn_image_0000002319242250.png) | #ff317af7 | ![](img/img_c5502e80f4ff_zh-cn_image_0000002353361193.png) |
| icon\_sub\_emphasize | 高亮辅助图标 | #660a59f7 | ![](img/img_b4d9f47bd5a9_zh-cn_image_0000002319402838.png) | #66317af7 | ![](img/img_82a2d7ac335a_zh-cn_image_0000002319243054.png) |
| icon\_on\_primary | 一级图标反色 | #ffffffff | ![](img/img_7b2f68a76765_zh-cn_image_0000002353241949.png) | #ffffffff | ![](img/img_9fd4e15612f8_zh-cn_image_0000002319403434.png) |
| icon\_on\_secondary | 二级图标反色 | #99ffffff | ![](img/img_b031c148e670_zh-cn_image_0000002353362741.png) | #99ffffff | ![](img/img_9071316a9665_zh-cn_image_0000002319244410.png) |
| icon\_on\_tertiary | 三级图标反色 | #66ffffff | ![](img/img_21b93deed44b_zh-cn_image_0000002353243409.png) | #66ffffff | ![](img/img_e36b64ace741_zh-cn_image_0000002319404790.png) |
| icon\_on\_fourth | 四级图标反色 | #33ffffff | ![](img/img_37dfb1754384_zh-cn_image_0000002319405574.png) | #33ffffff | ![](img/img_fa28033a467b_zh-cn_image_0000002353364649.png) |
| background\_primary | 一级背景（实色/不透明色） | #ffffffff | ![](img/img_397c68e419fe_zh-cn_image_0000002319247010.png) | #ffe5e5e5 | ![](img/img_2d77411e0301_zh-cn_image_0000002319247118.png) |
| background\_secondary | 二级背景（实色/不透明色） | #fff1f3f5 | ![](img/img_f69933a26fe5_zh-cn_image_0000002353245941.png) | #ff191a1c | ![](img/img_c76de5b42677_zh-cn_image_0000002353366217.png) |
| background\_tertiary | 三级背景（实色/不透明色） | #ffe5e5ea | ![](img/img_2e938db2c4ab_zh-cn_image_0000002353246425.png) | #ff202224 | ![](img/img_1e35ddd18885_zh-cn_image_0000002319408794.png) |
| background\_fourth | 四级背景（实色/不透明色） | #ffd1d1d6 | ![](img/img_f3b3f888a1a0_zh-cn_image_0000002319249854.png) | #ff2e3033 | ![](img/img_4248986452b7_zh-cn_image_0000002353248473.png) |
| background\_emphasize | 高亮背景（实色/不透明色） | #ff0a59f7 | ![](img/img_267da8043899_zh-cn_image_0000002319250410.png) | #ff317af7 | ![](img/img_1f1004e825c8_zh-cn_image_0000002353249253.png) |
| comp\_foreground\_primary | 前背景 | #ff000000 | ![](img/img_ee924d118488_zh-cn_image_0000002353252173.png) | #ffe5e5e5 | ![](img/img_e29ae96546cf_zh-cn_image_0000002353252325.png) |
| comp\_background\_primary | 白色背景 | #ffffffff | ![](img/img_777a7aeee46b_zh-cn_image_0000002353373101.png) | #ff202224 | ![](img/img_28353cc21acb_zh-cn_image_0000002353253597.png) |
| comp\_background\_primary\_contrary | 常亮背景 | #ffffffff | ![](img/img_914eb8576fc1_zh-cn_image_0000002353374021.png) | #ffe5e5e5 | ![](img/img_7078f970d6dd_zh-cn_image_0000002319257760.png) |
| comp\_background\_gray | 灰色背景 | #fff1f3f5 | ![](img/img_5c9b859f19f8_zh-cn_image_0000002353257709.png) | #ffe5e5ea | ![](img/img_712e717b6223_zh-cn_image_0000002353378837.png) |
| comp\_background\_secondary | 二级背景 | #19000000 | ![](img/img_934b1bb9035a_zh-cn_image_0000002319421628.png) | #19ffffff | ![](img/img_883214b1bc95_zh-cn_image_0000002319263952.png) |
| comp\_background\_tertiary | 三级背景 | #0c000000 | ![](img/img_264a87f2c1f2_zh-cn_image_0000002353386341.png) | #0cffffff | ![](img/img_3f1760869ff0_zh-cn_image_0000002319428340.png) |
| comp\_background\_emphasize | 高亮背景 | #ff0a59f7 | ![](img/img_d4318c1a5fe4_zh-cn_image_0000002319270328.png) | #ff317af7 | ![](img/img_b02835d434cd_zh-cn_image_0000002353269337.png) |
| comp\_background\_neutral | 黑色中性高亮背景 | #ff000000 | ![](img/img_7ce93d7f977c_zh-cn_image_0000002353392097.png) | #ffffffff | ![](img/img_02b3ef38fffb_zh-cn_image_0000002353374401.png) |
| comp\_emphasize\_secondary | 20%高亮背景 | #330a59f7 | ![](img/img_d79c4868a94f_zh-cn_image_0000002319276196.png) | #33317af7 | ![](img/img_48d1c4d2ec9a_zh-cn_image_0000002319276460.png) |
| comp\_emphasize\_tertiary | 10%高亮背景 | #190a59f7 | ![](img/img_0ca4580e50ec_zh-cn_image_0000002353275613.png) | #19317af7 | ![](img/img_14da6e4d97b3_zh-cn_image_0000002353275725.png) |
| comp\_divider | 分割线颜色 | #33000000 | ![](img/img_de6e99fda698_zh-cn_image_0000002319437716.png) | #33ffffff | ![](img/img_829769d1d844_zh-cn_image_0000002353255741.png) |
| comp\_common\_contrary | 通用反色 | #ffffffff | ![](img/img_4b81325834c5_zh-cn_image_0000002319255736.png) | #ff000000 | ![](img/img_899443e56c66_zh-cn_image_0000002319434936.png) |
| comp\_background\_focus | 获焦态背景色 | #fff1f3f5 | ![](img/img_d0227a0f2636_zh-cn_image_0000002353397605.png) | #ff000000 | ![](img/img_0fe96b9b279d_zh-cn_image_0000002319435500.png) |
| comp\_focused\_primary | 获焦态一级反色 | #e5000000 | ![](img/img_359789eceea6_zh-cn_image_0000002319439284.png) | #e5ffffff | ![](img/img_0ffc23d7ac5a_zh-cn_image_0000002353398493.png) |
| comp\_focused\_secondary | 获焦态二级反色 | #99000000 | ![](img/img_b6fd71ba98f3_zh-cn_image_0000002319281436.png) | #99ffffff | ![](img/img_501261a123a6_zh-cn_image_0000002353280277.png) |
| comp\_focused\_tertiary | 获焦态三级反色 | #66000000 | ![](img/img_2f4d372e40ac_zh-cn_image_0000002319282160.png) | #66ffffff | ![](img/img_0142779f814e_zh-cn_image_0000002353280837.png) |
| interactive\_hover | 通用悬停交互式颜色 | #0c000000 | ![](img/img_9f3e90d45277_zh-cn_image_0000002353386585.png) | #0cffffff | ![](img/img_4889b85a8c54_zh-cn_image_0000002353387661.png) |
| interactive\_pressed | 通用按压交互式颜色 | #19000000 | ![](img/img_a9b1276b5110_zh-cn_image_0000002319262832.png) | #19ffffff | ![](img/img_076ee3f61c91_zh-cn_image_0000002353262989.png) |
| interactive\_focus | 通用获焦交互式颜色 | #ff0a59f7 | ![](img/img_4a85f9c36a18_zh-cn_image_0000002319430804.png) | #ff317af7 | ![](img/img_18f6643cbd7d_zh-cn_image_0000002353390129.png) |
| interactive\_active | 通用激活交互式颜色 | #ff0a59f7 | ![](img/img_fd4d00507ede_zh-cn_image_0000002353390537.png) | #ff317af7 | ![](img/img_03a845e8353b_zh-cn_image_0000002319271916.png) |
| interactive\_select | 通用选择交互式颜色 | #330A59F7 | ![](img/img_316983a80265_zh-cn_image_0000002589287163.png) | #33317AF7 | ![](img/img_8c51a9a4816f_zh-cn_image_0000002319417104.png) |
| interactive\_click | 通用点击交互式颜色 | #19000000 | ![](img/img_119e4e5dd963_zh-cn_image_0000002353382185.png) | #19ffffff | ![](img/img_786479c27fa2_zh-cn_image_0000002319424496.png) |

### 智能穿戴 Token 全量表

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| **Token** | **场景类别** | **Light** |  | **Dark** |  |
| brand | 品牌色 | #ff0a59f7 | ![](img/img_c71ef4fdf47f_zh-cn_image_0000002417608600.png) | #ff1f71ff | ![](img/img_9cce9037f99a_zh-cn_image_0000002451087741.png) |
| warning | 一级警示色 | #ffe84026 | ![](img/img_e80899e4a182_zh-cn_image_0000002451007937.png) | #ffe84026 | ![](img/img_8a4e03371b22_zh-cn_image_0000002417449116.png) |
| alert | 二级警示色 | #ffed6f21 | ![](img/img_33f92173df79_zh-cn_image_0000002417613144.png) | #ffed6f21 | ![](img/img_cf33c56914fc_zh-cn_image_0000002417613236.png) |
| confirm | 确认色 | #ff64bb5c | ![](img/img_f3e0b60b4e8d_zh-cn_image_0000002451092253.png) | #ff64bb5c | ![](img/img_361f49c3025e_zh-cn_image_0000002451012393.png) |
| font\_primary | 一级文本 | #E5000000 | ![](img/img_c0e572897f6f_zh-cn_image_0000002451133481.png) | #ffffffff | ![](img/img_33748e666b9f_zh-cn_image_0000002417614578.png) |
| font\_secondary | 二级文本 | #99000000 | ![](img/img_901d51fad81e_zh-cn_image_0000002451133549.png) | #A9ffffff | ![](img/img_bfdf20e83ebf_zh-cn_image_0000002451133805.png) |
| font\_tertiary | 三级文本 | #66000000 | ![](img/img_6506ec774cb7_zh-cn_image_0000002451094817.png) | #66ffffff | ![](img/img_be1821f49d4a_zh-cn_image_0000002417616122.png) |
| font\_fourth | 四级文本 | #33000000 | ![](img/img_4931e8e805ba_zh-cn_image_0000002417615886.png) | #33ffffff | ![](img/img_caf97227afa3_zh-cn_image_0000002451095177.png) |
| font\_emphasize | 高亮文本 | #ff0a59f7 | ![](img/img_b284a8af7f45_zh-cn_image_0000002451143149.png) | #ff5ea1ff | ![](img/img_ebb3ec60f2c3_zh-cn_image_0000002451107289.png) |
| font\_on\_primary | 一级文本反色 | #ffffffff | ![](img/img_60cce30c69d6_zh-cn_image_0000002451143817.png) | #ffffffff | ![](img/img_c0d2b79a92ad_zh-cn_image_0000002417628894.png) |
| font\_on\_secondary | 二级文本反色 | #99ffffff | ![](img/img_9bf0d2f54d0a_zh-cn_image_0000002417465402.png) | #A9ffffff | ![](img/img_9320dff88ed3_zh-cn_image_0000002451148097.png) |
| font\_on\_tertiary | 三级文本反色 | #66ffffff | ![](img/img_3f108399bb83_zh-cn_image_0000002417465462.png) | #66ffffff | ![](img/img_7a4e671d64f7_zh-cn_image_0000002417469270.png) |
| font\_on\_fourth | 四级文本反色 | #33ffffff | ![](img/img_c68820550495_zh-cn_image_0000002417625550.png) | #33ffffff | ![](img/img_a64ad3c6dea7_zh-cn_image_0000002451108141.png) |
| icon\_primary | 一级图标 | #e5000000 | ![](img/img_04f1cb6db790_zh-cn_image_0000002417485314.png) | #ffffffff | ![](img/img_7c373d0c7e4a_zh-cn_image_0000002451165817.png) |
| icon\_secondary | 二级图标 | #a9000000 | ![](img/img_921f5679b119_zh-cn_image_0000002451124409.png) | #a9ffffff | ![](img/img_6712f603521c_zh-cn_image_0000002417487250.png) |
| icon\_tertiary | 三级图标 | #66000000 | ![](img/img_b400f784fe3e_zh-cn_image_0000002417645678.png) | #66ffffff | ![](img/img_63d246c80a4a_zh-cn_image_0000002451126213.png) |
| icon\_fourth | 四级图标 | #33000000 | ![](img/img_2a147ba1b301_zh-cn_image_0000002451165113.png) | #33ffffff | ![](img/img_3a2851d53d7a_zh-cn_image_0000002417487506.png) |
| icon\_emphasize | 高亮图标 | #ff0a59f7 | ![](img/img_15505d6f4ffb_zh-cn_image_0000002417649398.png) | #ff5ea1ff | ![](img/img_a8bf57e3cef7_zh-cn_image_0000002417489754.png) |
| icon\_sub\_emphasize | 高亮辅助图标 | #660a597f | ![](img/img_9fedc444dc8b_zh-cn_image_0000002451168673.png) | #665ea1ff | ![](img/img_c57be52a426d_zh-cn_image_0000002417649702.png) |
| icon\_on\_primary | 一级图标反色 | #ffffffff | ![](img/img_64e9c2707016_zh-cn_image_0000002451129981.png) | #ffffffff | ![](img/img_cfae59b87a73_zh-cn_image_0000002417651434.png) |
| icon\_on\_secondary | 二级图标反色 | #a9ffffff | ![](img/img_51c05de55fe2_zh-cn_image_0000002451170137.png) | #a9ffffff | ![](img/img_273333c02425_zh-cn_image_0000002417651454.png) |
| icon\_on\_tertiary | 三级图标反色 | #66ffffff | ![](img/img_b65536b28cdd_zh-cn_image_0000002451130085.png) | #66ffffff | ![](img/img_27dec5f745af_zh-cn_image_0000002451130557.png) |
| icon\_on\_fourth | 四级图标反色 | #33ffffff | ![](img/img_8dec62cec731_zh-cn_image_0000002417491414.png) | #33ffffff | ![](img/img_0eb8ee042c7c_zh-cn_image_0000002451170701.png) |
| background\_emphasize | 高亮背景（实色/不透明色） | #ff0a59f7 | ![](img/img_91762635cea2_zh-cn_image_0000002417655244.png) | #ff1f71ff | ![](img/img_f4fbd56a9ca6_zh-cn_image_0000002451296845.png) |
| comp\_background\_emphasize | 高亮背景 | #ff0a59f7 | ![](img/img_e9a195b69236_zh-cn_image_0000002451174853.png) | #ff1f71ff | ![](img/img_64d5fa4c7e1d_zh-cn_image_0000002417499160.png) |
| comp\_emphasize\_secondary | 20%高亮背景 | #330a59f7 | ![](img/img_854def63abf0_zh-cn_image_0000002451295225.png) | #331f71ff | ![](img/img_1a1ac0a2784e_zh-cn_image_0000002417659380.png) |
| comp\_emphasize\_tertiary | 10%高亮背景 | #190a59f7 | ![](img/img_10084b9a7257_zh-cn_image_0000002451175781.png) | #191f71ff | ![](img/img_e5e7ea33b577_zh-cn_image_0000002451298377.png) |
| comp\_divider | 分割线颜色 | #33000000 | ![](img/img_115b60103f25_zh-cn_image_0000002417497136.png) | #33ffffff | ![](img/img_1ba1c186fd09_zh-cn_image_0000002417659796.png) |