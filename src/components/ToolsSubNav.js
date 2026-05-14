/**
 * Tools Secondary Navigation Bar
 * Mimics Android Studio's horizontal subnav: 工具 标题 + DevEco Studio指南 | AI 编程 | 命令行工具
 */
import React from 'react';
import {useLocation} from '@docusaurus/router';
import Link from '@docusaurus/Link';
import styles from '@site/src/components/SubNav.module.css';

const NAV_ITEMS = [
  {
    label: 'DevEco Studio指南',
    path: '/docs/tools/coding-debug',
    match: '/docs/tools/coding-debug',
    desc: '代码编辑、调试、构建、测试',
  },
  {
    label: 'AI 编程',
    path: '/docs/tools/ai-assist',
    match: '/docs/tools/ai-assist',
    desc: '智能问答、代码生成、页面生成',
  },
  {
    label: '命令行工具',
    path: '/docs/tools/cli-tools',
    match: '/docs/tools/cli-tools',
    desc: '命令行工具、发布应用、体验建议',
  },
];

export default function ToolsSubNav() {
  const location = useLocation();

  // Determine active item: match path prefix
  function isActive(item) {
    if (item.path === location.pathname) return true;
    // Also match sub-pages
    if (location.pathname.startsWith(item.match + '/')) return true;
    // Special case: overview page highlights first item
    if (location.pathname === '/docs/tools/overview' && item === NAV_ITEMS[0]) return true;
    return false;
  }

  return (
    <div className={styles.toolsSubNav}>
      <div className={styles.toolsSubNavInner}>
        {/* 工具 标题行 */}
        <div className={styles.toolsSubNavHeader}>
          <span className={styles.toolsSubNavTitle}>工具</span>
        </div>
        {/* 标签导航 */}
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
