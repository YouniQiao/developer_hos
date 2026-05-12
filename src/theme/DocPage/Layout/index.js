/**
 * Swizzled DocPage Layout — adds secondary horizontal nav for tools section,
 * and renders a standalone overview page for /docs/tools/setup
 */
import React, {useState} from 'react';
import {useDocsSidebar} from '@docusaurus/theme-common/internal';
import {useLocation} from '@docusaurus/router';
import Layout from '@theme/Layout';
import BackToTopButton from '@theme/BackToTopButton';
import DocPageLayoutSidebar from '@theme/DocPage/Layout/Sidebar';
import DocPageLayoutMain from '@theme/DocPage/Layout/Main';
import ToolsSubNav from '@site/src/components/ToolsSubNav';
import DevecoStudioOverview from '@site/src/components/DevecoStudioOverview';
import styles from './styles.module.css';

export default function DocPageLayout({children}) {
  const sidebar = useDocsSidebar();
  const [hiddenSidebarContainer, setHiddenSidebarContainer] = useState(false);
  const location = useLocation();
  const isToolsSection = location.pathname.startsWith('/docs/tools');
  const isSetupPage = location.pathname === '/docs/tools/setup';

  // /docs/tools/setup — 独立简约页面，无侧边栏
  if (isSetupPage) {
    return (
      <Layout wrapperClassName={styles.docsWrapper}>
        <BackToTopButton />
        {isToolsSection && <ToolsSubNav />}
        <DevecoStudioOverview />
      </Layout>
    );
  }

  return (
    <Layout wrapperClassName={styles.docsWrapper}>
      <BackToTopButton />
      {isToolsSection && <ToolsSubNav />}
      <div className={styles.docPage}>
        {sidebar && (
          <DocPageLayoutSidebar
            sidebar={sidebar.items}
            hiddenSidebarContainer={hiddenSidebarContainer}
            setHiddenSidebarContainer={setHiddenSidebarContainer}
          />
        )}
        <DocPageLayoutMain hiddenSidebarContainer={hiddenSidebarContainer}>
          {children}
        </DocPageLayoutMain>
      </div>
    </Layout>
  );
}
