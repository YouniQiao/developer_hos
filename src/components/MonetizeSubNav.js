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
    path: '/docs/monetize/promotion/ads-ptkx-0000002222366726',
    match: '/docs/monetize/promotion',
    desc: '鲸鸿动能广告投放全流程指南',
  },
  {
    label: '变现',
    path: '/docs/monetize/monetization/fuwuyoushi-0000001132278777',
    match: '/docs/monetize/monetization',
    desc: '鲸鸿动能流量变现服务指南',
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
