---
title: "应用质量概览"
source_url: https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-quality-overview
---
import MergedTable from '@site/src/components/MergedTable';

# 应用质量概览

DFX（Design For eXcellence）是指产品的非功能性设计的总称，其中X代表产品的某个特性或产品生命周期的某个阶段。HarmonyOS DFX子系统提供了一系列DFX功能，帮助开发者创建高质量的应用和游戏。这些功能包括：

* DFR（Design For Reliability）可靠性设计：提供应用崩溃、卡死、资源泄漏、地址越界等故障的检测与恢复功能。
* DFT（Design For Testability）可测试性设计：提供日志、跟踪、调试信息、命令行工具等，以支持应用的观测与调试。
* DFP（Design For Performance）性能设计：提供应用启动慢、卡顿、丢帧等性能问题的检测功能，以及hitrace、hiperf等分析工具，帮助开发者优化性能。

这些DFX功能涵盖了故障管理、问题上报、问题分析等多个方面，具体能力分类详见下方表格：

## 基础能力

<MergedTable
  headers={['场景', '子场景', '组件或工具']}
  rows={[
    [{ text: '故障管理', rowSpan: 9 }, { text: '稳定性检测', rowSpan: 5 }, '<a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crash-detection">崩溃检测</a>'],
    ['<a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/resource-leak-guidelines">Resource Leak（资源泄漏）检测</a>'],
    ['<a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/appfreeze-guidelines">AppFreeze（应用冻屏）检测</a>'],
    ['<a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/address-sanitizer-guidelines">AddrSanitizer（地址越界）检测</a>'],
    ['<a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/apptask-timeout-guidelines">任务超时检测</a>'],
    ['性能检测', '<a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/perf-detection">性能检测</a>'],
    ['功耗检测', '<a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/power-detection">功耗检测</a>'],
    ['错误管理', '<a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/errormanager-guidelines">errorManager（错误管理组件）</a>'],
    ['故障恢复', '<a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/apprecovery-guidelines">appRecovery（应用恢复组件）</a>'],
    ['问题上报', '事件订阅', '<a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hiappevent">HiAppEvent（事件打点组件）</a>'],
    [{ text: '问题分析', rowSpan: 12 }, '日志', '<a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hilog-dev">HiLog（日志打印组件）</a>'],
    [{ text: '跟踪', rowSpan: 2 }, '<a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hitracemeter">HiTraceMeter（进程轨迹跟踪组件）</a>'],
    ['<a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hitracechain">HiTraceChain（分布式调用链跟踪组件）</a>'],
    ['调试信息', '<a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hidebug">HiDebug（调试信息获取组件）</a>'],
    [{ text: '命令行工具', rowSpan: 7 }, '<a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hdc">hdc（调试连接器命令行工具）</a>'],
    ['<a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hilog">hilog（HiLog命令行工具）</a>'],
    ['<a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hilog-tool">hilogtool（HiLog日志解析工具）</a>'],
    ['<a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hidumper">hidumper（系统信息导出工具）</a>'],
    ['<a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hitrace">hitrace（HiTraceMeter命令行工具）</a>'],
    ['<a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hiperf">hiperf（性能数据抓取工具）</a>'],
    ['<a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/debugging-commands">更多</a>'],
    ['界面化工具', '<a href="https://gitcode.com/openharmony-sig/smartperf">SmartPerf(性能功耗调优工具)</a><span style="color: rgb(68,114,196);">，</span><a href="https://developer.huawei.com/consumer/cn/deveco-studio/">DevEco Studio(HarmonyOS应用集成开发环境)</a>']
  ]}
/>

## 场景化知识地图

在开发及运维过程中，如果遇到稳定性、性能、功耗相关的问题，可以参考如下场景化知识地图进行分析和解决。

<MergedTable
  headers={['场景', '二级场景', '开发态检测', '运行态检测', '分析方法', '案例']}
  rows={[
    [{ text: '稳定性', rowSpan: 4 }, '地址越界', '<ul> <li><a href="https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-address-sanitizer-principle">地址越界检测工具原理</a></li> <li><a href="https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-asan-detection">使用ASan检测内存错误</a></li> <li><a href="https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-hwasan-detection">使用HWASan检测内存错误</a></li> <li><a href="https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-gwpasan-detection">使用GWP-ASan检测内存错误</a></li> </ul>', '<ul> <li><a href="https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-runtime-address-sanitizer-detection">地址越界类问题检测方法</a></li> </ul>', '<ul> <li><a href="https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-address-illegal-way">地址越界类问题分析方法</a></li> <li><a href="https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-address-sanitizer-catagory">地址越界问题类型</a></li> </ul>', '<ul> <li><a href="https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-scenario-stability-address-sanitizer">地址越界类问题案例</a></li> </ul>'],
    ['资源泄漏', '<ul> <li><a href="https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-leak-detection">开发态资源泄漏类问题检测</a></li> </ul>', '<ul> <li><a href="https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-runtime-leak-detection">运行态资源泄漏类问题检测方法</a></li> </ul>', '<ul> <li><a href="https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-leak-way#section728319329442">内存泄漏分析方法</a></li> <li><a href="https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-leak-way#section9594173320417">句柄泄漏分析方法</a></li> <li><a href="https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-leak-way#section282262074411">线程泄漏分析方法</a></li> </ul>', '<ul> <li><a href="https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-scenario-stability-leak#section10929163884819">native内存泄漏类问题案例</a></li> <li><a href="https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-scenario-stability-leak#section189600384502">PixelMap泄漏导致ashmem内存泄漏案例</a></li> <li><a href="https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-scenario-stability-leak#section5313162915382">句柄泄漏类问题案例</a></li> <li><a href="https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-scenario-stability-leak#section107128486383">线程泄漏类问题案例</a></li> <li><a href="https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-scenario-stability-leak">更多…</a></li> </ul>'],
    ['应用冻屏', '-', '<ul> <li><a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/appfreeze-guidelines#thread_block_6s-应用主线程卡死超时">THREAD_BLOCK_6S 应用主线程卡死超时检测</a></li> <li><a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/appfreeze-guidelines#app_input_block-用户输入响应超时">APP_INPUT_BLOCK 用户输入响应超时检测</a></li> </ul>', '<ul> <li><a href="https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-app-freeze">应用冻屏分析方法</a></li> </ul>', '<ul> <li><a href="https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-scenario-stability-app-freeze">应用冻屏类问题案例</a></li> </ul>'],
    ['应用异常退出', '<ul> <li><a href="https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-tsan-detection">使用TSan检测线程问题</a></li> <li><a href="https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-ubsan-detection">使用UBSan检测未定义行为</a></li> </ul>', '<ul> <li><a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/jscrash-guidelines">JS Crash（进程崩溃）检测</a></li> <li><a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cppcrash-guidelines">Cpp Crash（进程崩溃）检测</a></li> <li><a href="https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-runtime-appkilled-detection">应用被查杀问题检测</a></li> </ul>', '<ul> <li><a href="https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-app-crash-js-way">JS Crash类问题分析方法</a></li> <li><a href="https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-app-crash-cpp-way">CppCrash类问题分析方法</a></li> <li><a href="https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-app-killed-way">应用被查杀类问题分析方法</a></li> </ul>', '<ul> <li><a href="https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-scenario-stability-exception-exit">应用异常退出类问题案例</a></li> </ul>'],
    [{ text: '性能', rowSpan: 2 }, '应用启动慢', { text: '<ul> <li><a href="https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-performance-detection#section145453441571">CodeLinter静态扫描工具</a></li> <li><a href="https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-performance-detection#section135451444171">AppAnalyzer动态检测应用性能问题</a></li> </ul>', rowSpan: 2 }, '<ul> <li><a href="https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-performance-startup-time-detection">启动耗时类问题检测方法</a></li> <li><a href="https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-performance-mainthread-consumption-detection">主线程超时类问题检测方法</a></li> </ul>', '-', '-'],
    ['应用卡顿、丢帧', '<ul> <li><a href="https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-performance-sliding-frame-drop-detection">滑动丢帧类问题检测方法</a></li> </ul>', '<ul> <li><a href="https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-click-to-click-response-optimization">点击响应时延分析</a></li> <li><a href="https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-click-to-complete-delay-analysis">点击完成时延分析</a></li> <li><a href="https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-web-click-response-delay-analysis">Web页面内点击响应时延分析</a></li> <li><a href="https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-web-completion-delay-analysis">Web加载流程及完成时延分析</a></li> <li><a href="https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-threads-serialization-timeout-analysis">跨线程序列化耗时问题分析</a></li> <li><a href="https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-zhenlv">丢帧问题分析</a></li> <li><a href="https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-memory-basic-knowledge">内存基础知识及优化思路</a></li> </ul>', '<ul> <li><a href="https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-web-develop-optimization">优化Web场景下的加载性能问题</a></li> <li><a href="https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-application-cold-start-optimization">优化应用冷启动时延问题</a></li> <li><a href="https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-best-practices-long-list">优化长列表加载慢丢帧问题</a></li> <li><a href="https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-waterflow-performance-optimization">优化瀑布流加载慢丢帧问题</a></li> <li><a href="https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-scenario-performance-optimization">更多...</a></li> </ul>'],
    ['功耗', '应用异常耗电', '<ul> <li><a href="https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-application-power-test#section1701321935">HiSmartPerf功耗检测</a></li> <li><a href="https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-application-power-test#section2779154791312">Profiler功耗检测</a></li> </ul>', '<a href="https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-power-consumption-runtime-analysis">运行态功耗检测</a>', '<ul> <li><a href="https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-high-cpu-load-analysis">CPU 高负载问题分析思路</a></li> <li><a href="https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-frontend-invisible-animation-analysis">前台不可见动效问题分析思路</a></li> </ul>', '<ul> <li><a href="https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-vsync-power-optimization">Vsync低功耗优化</a></li> <li><a href="https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-buffer-power-optimization">Buffer低功耗优化</a></li> </ul>']
  ]}
/>

对于开发态检测，除上表提到的检测方法外，还可以使用专业的测试工具[DevEco Testing](https://developer.huawei.com/consumer/cn/next/deveco-testing/)对应用进行质量测试。

## 常用术语

下表列出了一些常见的应用质量相关术语方便开发者进行查阅，更多的术语可查看[Performance Analysis Kit术语](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/performance-analysis-kit-terminology)。

| 场景 | 常用术语 |
| --- | --- |
| 通用 | [log版本](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/performance-analysis-kit-terminology#log版本)，[nolog版本](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/performance-analysis-kit-terminology#nolog版本)，[debug版本应用](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/performance-analysis-kit-terminology#debug版本应用)，[release版本应用](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/performance-analysis-kit-terminology#release版本应用) |
| 稳定性 | [CPP Crash](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/performance-analysis-kit-terminology#cpp-crash)，[JS Crash](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/performance-analysis-kit-terminology#js-crash)，[AppFreeze](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/performance-analysis-kit-terminology#appfreeze)，[ASan](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/performance-analysis-kit-terminology#asan)，[HWASan](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/performance-analysis-kit-terminology#hwasan)，[GWP-ASan](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/performance-analysis-kit-terminology#gwp-asan)，[TSan](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/performance-analysis-kit-terminology#tsan)，[UBSan](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/performance-analysis-kit-terminology#ubsan) |
| 性能 | [丢帧](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/performance-analysis-kit-terminology#丢帧) |
| 功耗 | [前台任务](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/performance-analysis-kit-terminology#前台任务)，[后台任务](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/performance-analysis-kit-terminology#后台任务)，[帧率](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/performance-analysis-kit-terminology#帧率)，[LTPO](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/performance-analysis-kit-terminology#ltpo)，[冗余绘制](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/performance-analysis-kit-terminology#冗余绘制)，[不可见动效](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/performance-analysis-kit-terminology#不可见动效)，[HWC](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/performance-analysis-kit-terminology#hwc) |
| 内存 | [VSS](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/performance-analysis-kit-terminology#vss)，[PSS](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/performance-analysis-kit-terminology#pss)，[RSS](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/performance-analysis-kit-terminology#rss)，[脏页](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/performance-analysis-kit-terminology#脏页)，[干净页](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/performance-analysis-kit-terminology#干净页)，[匿名页](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/performance-analysis-kit-terminology#匿名页)，[文件页](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/performance-analysis-kit-terminology#文件页) |

## 相关主题

* [Performance Analysis Kit（性能分析服务）指南](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/performance-analysis-kit)
* [Performance Analysis Kit（性能分析服务）API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/performance-analysis-api)
* [应用质量FAQ](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-performance-analysis-kit)
* [HarmonyOS应用DFX能力介绍（视频）](https://developer.huawei.com/consumer/cn/training/course/slightMooc/C101705113085386097?pathId=101667550095504391)
