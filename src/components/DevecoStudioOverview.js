/**
 * DevEco Studio 概览页 — 简约独立页面，无侧边栏
 * 内容来源：https://developer.huawei.com/consumer/cn/deveco-studio/
 */
import React from 'react';
import styles from './DevecoStudioOverview.module.css';

const FEATURES = [
  {
    title: '智能代码编辑',
    desc: '为 ArkTS、JS 和 C/C++ 提供代码智能补齐、代码重构等能力，帮助你高效编码。',
    href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-edit',
  },
  {
    title: '多端双向实时预览',
    desc: '界面预览功能帮助你在 UI 编码时快速预览界面在多种设备上的显示效果，查看组件布局。',
    href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-previewer-arkui',
  },
  {
    title: '灵活构建',
    desc: '全新轻量级构建工具 Hvigor，支持源码、资源、构建流程的自定义，灵活构建差异化多目标产物。',
    href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-build-customization',
  },
  {
    title: '跨语言调试',
    desc: '支持 ArkTS&C++ 语言调试、汇编调试、反向调试、内存视图分析、智能跳转和数据断点。',
    href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-debugging',
  },
  {
    title: '多场景深度调优',
    desc: 'Profiler 调优工具支持分析内存泄漏、组件耗时、网络请求、应用启动、界面卡顿等性能问题。',
    href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-insight-description',
  },
  {
    title: '应用与元服务体检',
    desc: '在开发阶段发现可能影响上架的兼容性、性能、功耗、稳定性等问题，支持场景化检测。',
    href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-app-analyzer',
  },
  {
    title: '本地模拟器',
    desc: '提供手机、折叠屏、平板模拟器，帮助你在各种 HarmonyOS 设备上调测应用。',
    href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-emulator-create',
  },
  {
    title: '硬件场景模拟',
    desc: '模拟 GPS 定位变化、驾驶导航、低电量等场景，方便特定场景下的功能调试。',
    href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-emulator-more-features',
  },
];

const NEW_FEATURES = [
  '代码工程问答 — 准确理解项目级工程代码，帮助开发者深入探索代码仓',
  '构建问题智能修复 — 智能分析构建报错问题，快速定位根因并修复',
  'UI 界面 3D 视图分析 — 支持 Z 轴组件粒度展开，三维视图展示应用组件',
  '数据库可视化调试 — 在 IDE 中直接查看、查询、更新数据库数据',
  '自定义多屏模拟 — 单个模拟器添加多块自定义屏幕，并行调试多设备 UI',
  'AI 辅助性能分析 — 自然语言交互搭配专家经验，AI 自主引导性能调优',
];

export default function DevecoStudioOverview() {
  return (
    <div className={styles.overviewPage}>
      {/* Hero */}
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>DevEco Studio</h1>
        <p className={styles.heroDesc}>
          开发 HarmonyOS 应用及元服务的集成开发环境（IDE），提供 AI 辅助编程、编译构建、UI 实时预览、代码调试、性能调优、模拟器等功能，帮助你高效开发鸿蒙应用及元服务。
        </p>
        <a
          className={styles.downloadBtn}
          href="https://developer.huawei.com/consumer/cn/download/"
          target="_blank"
          rel="noopener noreferrer"
        >
          立即下载
        </a>
      </div>

      {/* AI 辅助编程 */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>AI 辅助编程（CodeGenie）</h2>
        <p className={styles.sectionDesc}>
          和 CodeGenie 结伴，提供鸿蒙知识问答、Agentic 代码生成、修复构建问题、定位性能瓶颈等 AI 能力，助力鸿蒙应用高效开发。
        </p>
        <div className={styles.linkRow}>
          <a
            href="https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-codegenie"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.textLink}
          >
            了解详情 →
          </a>
        </div>
      </div>

      {/* 新增特性 */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>新增特性</h2>
        <ul className={styles.featureList}>
          {NEW_FEATURES.map((item, i) => (
            <li key={i} className={styles.featureItem}>{item}</li>
          ))}
        </ul>
      </div>

      {/* 关键特性 */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>关键特性</h2>
        <div className={styles.featureGrid}>
          {FEATURES.map((f, i) => (
            <a
              key={i}
              href={f.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.featureCard}
            >
              <h3 className={styles.featureCardTitle}>{f.title}</h3>
              <p className={styles.featureCardDesc}>{f.desc}</p>
            </a>
          ))}
        </div>
      </div>

      {/* 系统要求 */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>系统要求</h2>
        <div className={styles.reqGrid}>
          <div className={styles.reqCard}>
            <h3 className={styles.reqTitle}>Windows</h3>
            <ul className={styles.reqList}>
              <li>操作系统：Windows 10/11 64 位</li>
              <li>内存：16GB 及以上</li>
              <li>硬盘：100GB 及以上</li>
              <li>分辨率：1280×800 像素及以上</li>
            </ul>
          </div>
          <div className={styles.reqCard}>
            <h3 className={styles.reqTitle}>macOS</h3>
            <ul className={styles.reqList}>
              <li>操作系统：macOS 11/12/13/14/15</li>
              <li>内存：8GB 及以上</li>
              <li>硬盘：100GB 及以上</li>
              <li>分辨率：1280×800 像素及以上</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
