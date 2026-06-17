import React from 'react';
// Import the original MDX components
import MDXComponents from '@theme-original/MDXComponents';
import SourceLink from '@site/src/components/SourceLink';
import MergeTable from '@site/src/components/MergeTable';

export default {
  // Re-export all built-in components
  ...MDXComponents,
  // Register custom global components
  SourceLink,
  MergeTable,
};
