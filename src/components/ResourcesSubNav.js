/**
 * Resources Secondary Navigation Bar
 * Items: 设计资源 | 示例代码 | 模板&组件&SDK库 | 三方库 | 三方跨端框架
 */
import React from 'react';
import {useLocation} from '@docusaurus/router';
import Link from '@docusaurus/Link';
import styles from '@site/src/theme/DocPage/Layout/styles.module.css';

const NAV_ITEMS = [
  {
    label: '设计资源',
    path: '/docs/resources/design-res/overview',
    match: '/docs/resources/design-res',
    desc: '设计工具、设计资源与素材',
  },
  {
    label: '示例代码',
    path: '/docs/resources/sample-code/overview',
    match: '/docs/resources/sample-code',
    desc: '官方示例代码与最佳实践',
  },
  {
    label: '模板&组件&SDK库',
    path: '/docs/resources/templates-sdk/overview',
    match: '/docs/resources/templates-sdk',
    desc: '开发模板、UI 组件与 SDK 库',
  },
  {
    label: '三方库',
    path: '/docs/resources/third-party-libs/overview',
    match: '/docs/resources/third-party-libs',
    desc: '社区第三方库推荐与指南',
  },
  {
    label: '三方跨端框架',
    path: '/docs/resources/cross-platform/overview',
    match: '/docs/resources/cross-platform',
    desc: 'Flutter/React Native 等跨端方案',
  },
];

export default function ResourcesSubNav() {
  const location = useLocation();

  function isActive(item) {
    return location.pathname.startsWith(item.match);
  }

  return (
    <div className={styles.toolsSubNav}>
      <div className={styles.toolsSubNavInner}>
        <div className={styles.toolsSubNavHeader}>
          <span className={styles.toolsSubNavTitle}>更多资源</span>
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
