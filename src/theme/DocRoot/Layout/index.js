import React from 'react';
import {useLocation} from '@docusaurus/router';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Layout from '@theme-original/DocRoot/Layout';
import ToolsSubNav from '@site/src/components/ToolsSubNav';
import DesignSubNav from '@site/src/components/DesignSubNav';
import DevSubNav from '@site/src/components/DevSubNav';
import DistributeSubNav from '@site/src/components/DistributeSubNav';
import MonetizeSubNav from '@site/src/components/MonetizeSubNav';
import ResourcesSubNav from '@site/src/components/ResourcesSubNav';
import InlineComments from '@site/src/components/InlineComments';

const IC_CONFIG = {
  repoOwner: 'YouniQiao',
  repoName: 'developer_hos',
  category: 'Inline Comments',
  clientId: 'Ov23liKyrxXiGvlZQjCW',
};

export default function LayoutWrapper(props) {
  const location = useLocation();
  const isToolsSection = location.pathname.startsWith('/docs/tools');
  const isDesignSection = location.pathname.startsWith('/docs/design')
    || location.pathname.startsWith('/docs/architecture')
    || location.pathname.startsWith('/docs/quality')
    || location.pathname.startsWith('/docs/security')
    || location.pathname.startsWith('/docs/experience-suggestions');
  const isDevSection = location.pathname.startsWith('/docs/dev')
    || location.pathname.startsWith('/docs/FAQ');
  const isDistributeSection = location.pathname.startsWith('/docs/distribute');
  const isMonetizeSection = location.pathname.startsWith('/docs/monetize');
  const isResourcesSection = location.pathname.startsWith('/docs/resources');

  return (
    <>
      {isToolsSection && <ToolsSubNav />}
      {isDesignSection && <DesignSubNav />}
      {isDevSection && <DevSubNav />}
      {isDistributeSection && <DistributeSubNav />}
      {isMonetizeSection && <MonetizeSubNav />}
      {isResourcesSection && <ResourcesSubNav />}
      <Layout {...props} />
      <BrowserOnly>
        {() => (
          <InlineComments
            repoOwner={IC_CONFIG.repoOwner}
            repoName={IC_CONFIG.repoName}
            category={IC_CONFIG.category}
            clientId={IC_CONFIG.clientId}
          />
        )}
      </BrowserOnly>
    </>
  );
}
