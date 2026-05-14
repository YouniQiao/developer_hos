/**
 * Distribute Secondary Navigation Bar
 * Items: AppGallery Connect | 应用分发 | 服务分发 | 内容分发
 */
import React from 'react';
import {useLocation} from '@docusaurus/router';
import Link from '@docusaurus/Link';
import styles from '@site/src/components/SubNav.module.css';

const NAV_ITEMS = [
  {
    label: 'AppGallery Connect',
    path: '/docs/distribute/agc/overview',
    match: '/docs/distribute/agc',
    desc: 'AppGallery Connect 一站式服务平台',
  },
  {
    label: '应用分发',
    path: '/docs/distribute/app-dist/overview',
    match: '/docs/distribute/app-dist',
    desc: '应用上架、发布与分发流程',
  },
  {
    label: '服务分发',
    path: '/docs/distribute/service-dist/overview',
    match: '/docs/distribute/service-dist',
    desc: '元服务与原子化服务分发',
  },
  {
    label: '内容分发',
    path: '/docs/distribute/content-dist/overview',
    match: '/docs/distribute/content-dist',
    desc: '内容审核、素材管理与分发',
  },
];

export default function DistributeSubNav() {
  const location = useLocation();

  function isActive(item) {
    return location.pathname.startsWith(item.match);
  }

  return (
    <div className={styles.toolsSubNav}>
      <div className={styles.toolsSubNavInner}>
        <div className={styles.toolsSubNavHeader}>
          <span className={styles.toolsSubNavTitle}>分发与运营</span>
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
