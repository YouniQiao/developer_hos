/**
 * Swizzled DocSidebarDesktopContent — adds sidebar search filter.
 */
import React, {useState, useMemo} from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {
  useAnnouncementBar,
  useScrollPosition,
} from '@docusaurus/theme-common/internal';
import {translate} from '@docusaurus/Translate';
import DocSidebarItems from '@theme/DocSidebarItems';
import styles from './styles.module.css';

function useShowAnnouncementBar() {
  const {isActive} = useAnnouncementBar();
  const [showAnnouncementBar, setShowAnnouncementBar] = useState(isActive);
  useScrollPosition(
    ({scrollY}) => {
      if (isActive) {
        setShowAnnouncementBar(scrollY === 0);
      }
    },
    [isActive],
  );
  return isActive && showAnnouncementBar;
}

/**
 * Recursively filter sidebar items by a search query.
 * Categories are kept if any descendant matches; non-matching items are removed.
 */
function filterSidebarItems(items, query) {
  if (!query) return items;
  const q = query.toLowerCase();

  return items
    .map((item) => {
      // HTML items: skip filtering
      if (item.type === 'html') return item;

      // Category: recurse into children
      if (item.type === 'category') {
        const filteredChildren = filterSidebarItems(item.items, q);
        if (filteredChildren.length > 0) {
          return {...item, items: filteredChildren, collapsed: false};
        }
        // Category itself matches?
        if ((item.label || '').toLowerCase().includes(q)) {
          return {...item, items: filteredChildren.length > 0 ? filteredChildren : item.items, collapsed: false};
        }
        // Check if any link child matches
        const hasLinkMatch = (item.items || []).some(
          (child) => child.type === 'link' && (child.label || '').toLowerCase().includes(q)
        );
        if (hasLinkMatch) {
          return {...item, items: item.items.filter(
            (child) => child.type !== 'doc' || (child.label || '').toLowerCase().includes(q)
          ), collapsed: false};
        }
        return null;
      }

      // Doc or link: check label
      const label = item.label || '';
      if (label.toLowerCase().includes(q)) return item;
      return null;
    })
    .filter(Boolean);
}

export default function DocSidebarDesktopContent({path, sidebar, className}) {
  const showAnnouncementBar = useShowAnnouncementBar();
  const [query, setQuery] = useState('');

  const filteredSidebar = useMemo(
    () => filterSidebarItems(sidebar, query),
    [sidebar, query],
  );

  return (
    <nav
      aria-label={translate({
        id: 'theme.docs.sidebar.navAriaLabel',
        message: 'Docs sidebar',
        description: 'The ARIA label for the sidebar navigation',
      })}
      className={clsx(
        'menu thin-scrollbar',
        styles.menu,
        showAnnouncementBar && styles.menuWithAnnouncementBar,
        className,
      )}>
      {/* ── Search box ── */}
      <div style={{padding: '0.5rem 0.75rem'}}>
        <input
          type="text"
          placeholder="搜索标题…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            width: '100%',
            padding: '0.4rem 0.6rem',
            borderRadius: '6px',
            border: '1px solid var(--ifm-color-emphasis-300)',
            backgroundColor: 'var(--ifm-color-emphasis-100)',
            color: 'var(--ifm-font-color-base)',
            fontSize: '0.875rem',
            outline: 'none',
          }}
        />
      </div>

      <ul className={clsx(ThemeClassNames.docs.docSidebarMenu, 'menu__list')}>
        <DocSidebarItems
          items={filteredSidebar}
          activePath={path}
          level={1}
        />
      </ul>
    </nav>
  );
}
