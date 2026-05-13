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
import DesignSubNav from '@site/src/components/DesignSubNav';
import DevSubNav from '@site/src/components/DevSubNav';
import DistributeSubNav from '@site/src/components/DistributeSubNav';
import MonetizeSubNav from '@site/src/components/MonetizeSubNav';
import ResourcesSubNav from '@site/src/components/ResourcesSubNav';
import DevecoStudioOverview from '@site/src/components/DevecoStudioOverview';
import styles from './styles.module.css';

export default function DocPageLayout({children}) {
  const sidebar = useDocsSidebar();
  const [hiddenSidebarContainer, setHiddenSidebarContainer] = useState(false);
  const location = useLocation();
  const isToolsSection = location.pathname.startsWith('/docs/tools');
  const isDesignSection = location.pathname.startsWith('/docs/design')
    || location.pathname.startsWith('/docs/architecture')
    || location.pathname.startsWith('/docs/quality')
    || location.pathname.startsWith('/docs/security');
  const isDevSection = location.pathname.startsWith('/docs/dev');
  const isDistributeSection = location.pathname.startsWith('/docs/distribute');
  const isMonetizeSection = location.pathname.startsWith('/docs/monetize');
  const isResourcesSection = location.pathname.startsWith('/docs/resources');
  const isSetupPage = location.pathname === '/docs/tools/setup';

  // /docs/tools/setup — 独立简约页面，无侧边栏
  if (isSetupPage) {
    return (
      <Layout wrapperClassName={styles.docsWrapper}>
        <BackToTopButton />
        {isToolsSection && <ToolsSubNav />}
        {isDesignSection && <DesignSubNav />}
        {isDevSection && <DevSubNav />}
        {isDistributeSection && <DistributeSubNav />}
        {isMonetizeSection && <MonetizeSubNav />}
        {isResourcesSection && <ResourcesSubNav />}
        <DevecoStudioOverview />
      </Layout>
    );
  }

  return (
    <Layout wrapperClassName={styles.docsWrapper}>
      <BackToTopButton />
      {isToolsSection && <ToolsSubNav />}
      {isDesignSection && <DesignSubNav />}
      {isDevSection && <DevSubNav />}
      {isDistributeSection && <DistributeSubNav />}
      {isMonetizeSection && <MonetizeSubNav />}
      {isResourcesSection && <ResourcesSubNav />}
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
