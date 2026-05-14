/**
 * Monetize Secondary Navigation Bar
 * Items: 推广 | 变现
 */
import React from 'react';
import {useLocation} from '@docusaurus/router';
import Link from '@docusaurus/Link';
import styles from '@site/src/components/SubNav.module.css';

const NAV_ITEMS = [
  {
    label: '推广',
    path: '/docs/monetize/promotion/overview',
    match: '/docs/monetize/promotion',
    desc: '应用推广、ASO优化与增长策略',
  },
  {
    label: '变现',
    path: '/docs/monetize/monetization/overview',
    match: '/docs/monetize/monetization',
    desc: '广告变现、应用内购买与付费模式',
  },
];

export default function MonetizeSubNav() {
  const location = useLocation();

  function isActive(item) {
    return location.pathname.startsWith(item.match);
  }

  return (
    <div className={styles.toolsSubNav}>
      <div className={styles.toolsSubNavInner}>
        <div className={styles.toolsSubNavHeader}>
          <span className={styles.toolsSubNavTitle}>推广与变现</span>
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
