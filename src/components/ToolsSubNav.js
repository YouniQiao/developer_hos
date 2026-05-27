/**
 * Tools Secondary Navigation Bar
 * Mimics Android Studio's horizontal subnav: 工具 标题 + DevEco Studio指南 | 端云一体化开发 | AI 编程 | DevEco Testing指南 | 命令行工具
 */
import React from 'react';
import {useLocation} from '@docusaurus/router';
import Link from '@docusaurus/Link';
import styles from '@site/src/components/SubNav.module.css';

const NAV_ITEMS = [
  {
    label: 'DevEco Studio指南',
    path: '/docs/tools/coding-debug/ide-tools-overview',
    match: '/docs/tools/coding-debug',
    desc: '开发环境搭建、编码调试、构建、性能优化、发布',
  },
  {
    label: '端云一体化开发',
    path: '/docs/tools/end-cloud/agc-harmonyos-clouddev-overview',
    match: '/docs/tools/end-cloud',
    desc: '云函数、云对象、云数据库、端云一体化模板',
  },
  {
    label: 'AI 编程',
    path: '/docs/tools/ai-assist/ide-codegenie',
    match: '/docs/tools/ai-assist',
    desc: '智能问答、代码生成、页面生成、调优',
  },
  {
    label: 'DevEco Testing指南',
    path: '/docs/tools/deveco-testing/get-familiar',
    match: '/docs/tools/deveco-testing',
    desc: '专项测试、上架预检、探索测试、回归测试',
  },
  {
    label: 'ohpm包管理工具',
    path: '/docs/tools/ohpm/ide-ohpm-system-platform',
    match: '/docs/tools/ohpm',
    desc: '三方依赖管理工具、ohpm-repo 私仓搭建',
  },
  {
    label: '命令行工具',
    path: '/docs/tools/cli-tools/command-line-tools-overview',
    match: '/docs/tools/cli-tools',
    desc: 'codelinter、hstack、hvigorw',
  },
];

export default function ToolsSubNav() {
  const location = useLocation();

  function isActive(item) {
    if (item.path === location.pathname) return true;
    if (location.pathname.startsWith(item.match + '/')) return true;
    if (location.pathname === '/docs/tools/overview' && item === NAV_ITEMS[0]) return true;
    return false;
  }

  return (
    <div className={styles.toolsSubNav}>
      <div className={styles.toolsSubNavInner}>
        <div className={styles.toolsSubNavHeader}>
          <span className={styles.toolsSubNavTitle}>工具</span>
        </div>
        <div className={styles.toolsSubNavTabs}>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${styles.toolsSubNavItem} ${
                isActive(item) ? styles.toolsSubNavItemActive : ''
              }`}
              title={item.desc}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
