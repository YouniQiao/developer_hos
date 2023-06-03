import React from 'react';
import Layout from '@theme/Layout';

import HeroSection from '../components/homepage/HeroSection';
import SDKsSection from '../components/homepage/SDKsSection';
import Head from '@docusaurus/Head';

export default function Homepage() {
  return (
    <Layout
      description="HarmonyOS Developer"
      wrapperClassName="homepage flex flex-col"
    >
      <Head>
        <link rel="prefetch" href="/assets/css/elements.min.css" />
      </Head>
      <HeroSection />
      <SDKsSection />
    </Layout>
  );
}
