/**
 * Dev & Testing Secondary Navigation Bar
 * Items: 版本说明 | 入门与准备 | 应用开发 | 元服务开发 | NDK开发 | 游戏开发 | 行业解决方案 | 测试 | FAQ
 */
import React from 'react';
import {useLocation} from '@docusaurus/router';
import Link from '@docusaurus/Link';
import styles from '@site/src/theme/DocPage/Layout/styles.module.css';

const NAV_ITEMS = [
  {
    label: '版本说明',
    path: '/docs/dev/release-notes/overview',
    match: '/docs/dev/release-notes',
    desc: 'HarmonyOS 版本更新与变更说明',
  },
  {
    label: '入门与准备',
    path: '/docs/dev/getting-started/overview',
    match: '/docs/dev/getting-started',
    desc: '开发环境搭建与快速入门',
  },
  {
    label: '应用开发',
    path: '/docs/dev/app-dev/overview',
    match: '/docs/dev/app-dev',
    desc: '原生鸿蒙应用开发指南',
  },
  {
    label: '多设备开发',
    path: '/docs/dev/multi-device/overview',
    match: '/docs/dev/multi-device',
    desc: '折叠屏、平板、手表等多设备适配',
  },
  {
    label: '元服务开发',
    path: '/docs/dev/atomic-dev/overview',
    match: '/docs/dev/atomic-dev',
    desc: '轻量化元服务开发指南',
  },
  {
    label: 'NDK开发',
    path: '/docs/dev/ndk-dev/ndk-development-overview',
    match: '/docs/dev/ndk-dev',
    desc: 'Native 开发套件（NDK）开发指南',
  },
  {
    label: '游戏开发',
    path: '/docs/dev/game-dev/games-center-introduction-0000002320553253',
    match: '/docs/dev/game-dev',
    desc: 'HarmonyOS 游戏开发指南',
  },
  {
    label: '行业解决方案',
    path: '/docs/dev/industry-solutions/overview',
    match: '/docs/dev/industry-solutions',
    desc: '各行业鸿蒙化解决方案',
  },
  {
    label: '测试',
    path: '/docs/dev/testing/overview',
    match: '/docs/dev/testing',
    desc: '应用测试工具与方法',
  },
  {
    label: 'FAQ',
    path: '/docs/dev/faq/overview',
    match: '/docs/dev/faq',
    desc: '常见问题与解答',
  },
];

export default function DevSubNav() {
  const location = useLocation();

  function isActive(item) {
    return location.pathname.startsWith(item.match);
  }

  return (
    <div className={styles.toolsSubNav}>
      <div className={styles.toolsSubNavInner}>
        <div className={styles.toolsSubNavHeader}>
          <span className={styles.toolsSubNavTitle}>开发与测试</span>
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
