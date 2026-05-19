/**
 * Design & Planning Secondary Navigation Bar
 * Items match mega menu categories: 设计指南 | 架构 | 质量 | 安全
 */
import React from 'react';
import {useLocation} from '@docusaurus/router';
import Link from '@docusaurus/Link';
import styles from '@site/src/components/SubNav.module.css';

const NAV_ITEMS = [
  {
    label: '设计指南',
    path: '/docs/design/general-design-basics/design-concepts',
    match: '/docs/design',
    desc: '设计理念、视觉风格、布局、动效',
  },
  {
    label: '架构',
    path: '/docs/architecture/overview',
    match: '/docs/architecture',
    desc: '分层结构设计、模块化设计',
  },
  {
    label: '质量',
    path: '/docs/quality/quality-overview',
    match: '/docs/quality',
    desc: '性能、功耗、稳定性全面质量管理',
  },
  {
    label: '安全',
    path: '/docs/security/app-privacy-protection',
    match: '/docs/security',
    desc: '隐私保护、数据安全、代码混淆',
  },
  {
    label: '体验建议',
    path: '/docs/experience-suggestions/experience-suggestions-overview',
    match: '/docs/experience-suggestions',
    desc: '兼容性、稳定性、性能、功耗、安全隐私、UX',
  },
];

export default function DesignSubNav() {
  const location = useLocation();

  function isActive(item) {
    return location.pathname.startsWith(item.match);
  }

  return (
    <div className={styles.toolsSubNav}>
      <div className={styles.toolsSubNavInner}>
        <div className={styles.toolsSubNavHeader}>
          <span className={styles.toolsSubNavTitle}>设计与规划</span>
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
