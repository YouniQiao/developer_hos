#!/usr/bin/env node
/**
 * Restructure DevEco Studio sidebar.
 * Approach: eval the module.exports, modify the object, write back.
 */
const fs = require('fs');
const vm = require('vm');

const filepath = '/Users/hhxi/developer_hos/sidebars-tools.js';
let source = fs.readFileSync(filepath, 'utf8');

// We need to handle the require() calls in the file
// The file uses: require('./sidebars-tools.js') patterns - but toolsSidebar doesn't use require
// It's self-contained for toolsSidebar. The other arrays use require.

// Extract toolsSidebar array definition
// Since the file has module.exports = { toolsSidebar: [...], aiAssistSidebar: [...], ... }
// We can eval it in a sandbox

const sandbox = {
  module: { exports: {} },
  require: function(id) {
    // Return a dummy for any require
    return [];
  }
};
vm.createContext(sandbox);

try {
  vm.runInContext(source, sandbox);
} catch(e) {
  console.error('Parse error:', e.message);
  process.exit(1);
}

const sidebar = sandbox.module.exports;
const toolsSidebar = sidebar.toolsSidebar;

console.log(`Loaded toolsSidebar with ${toolsSidebar.length} top-level items`);

// Print current structure
function describeItem(item, indent = 0) {
  const prefix = '  '.repeat(indent);
  if (typeof item === 'string') {
    console.log(`${prefix}📄 ${item.split('/').pop()}`);
  } else if (item && item.label) {
    console.log(`${prefix}📁 ${item.label}`);
    if (item.items) {
      item.items.forEach(sub => describeItem(sub, indent + 1));
    }
  } else {
    console.log(`${prefix}❓ unknown type`);
  }
}

toolsSidebar.forEach(item => describeItem(item));

// ── Now modify the structure ──

// Helper: deep search and modify
function findAndRemove(arr, label) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] && arr[i].label === label) {
      return arr.splice(i, 1)[0];
    }
    if (arr[i] && arr[i].items) {
      const found = findAndRemove(arr[i].items, label);
      if (found) return found;
    }
  }
  return null;
}

function findItem(arr, label) {
  for (let item of arr) {
    if (item && item.label === label) return item;
    if (item && item.items) {
      const found = findItem(item.items, label);
      if (found) return found;
    }
  }
  return null;
}

// 1. Rename 概览与安装 → 工具使用入门
const overviewItem = findItem(toolsSidebar, '概览与安装');
if (overviewItem) overviewItem.label = '工具使用入门';

// 2. Find 发布应用 and flatten it
const publishIdx = toolsSidebar.findIndex(item => item && item.label === '发布应用');
if (publishIdx !== -1) {
  const publishItem = toolsSidebar[publishIdx];
  if (publishItem.items && publishItem.items.length === 1) {
    toolsSidebar[publishIdx] = publishItem.items[0];
  }
}

// 3. Extract Code Linter rules from 编写与调试应用 > 代码编辑 > 代码检查
const codeCheck = findItem(toolsSidebar, '代码检查');
let codeLinterRules = null;
if (codeCheck && codeCheck.items) {
  const linterIdx = codeCheck.items.findIndex(item => item && item.label === 'Code Linter代码检查规则');
  if (linterIdx !== -1) {
    codeLinterRules = codeCheck.items.splice(linterIdx, 1)[0];
  }
}

// 4. Extract ArkTSDoc 标准标签 from 代码编辑 > 生成ArkTSDoc文档
const arktsdocGroup = findItem(toolsSidebar, '生成ArkTSDoc文档');
let arktsdocTags = null;
if (arktsdocGroup && arktsdocGroup.items) {
  const tagsIdx = arktsdocGroup.items.findIndex(item => item && item.label === '标准标签');
  if (tagsIdx !== -1) {
    arktsdocTags = arktsdocGroup.items.splice(tagsIdx, 1)[0];
  }
  // Change 生成ArkTSDoc文档 group to single page
  // The first item should be ide-arktsdoc-generation
  if (arktsdocGroup.items.length === 1 && typeof arktsdocGroup.items[0] === 'string') {
    // Find the parent and replace
    const codeEdit = findItem(toolsSidebar, '代码编辑');
    if (codeEdit && codeEdit.items) {
      const gIdx = codeEdit.items.findIndex(item => item && item.label === '生成ArkTSDoc文档');
      if (gIdx !== -1) {
        codeEdit.items[gIdx] = arktsdocGroup.items[0]; // single page
      }
    }
  }
}

// 5. Extract 附录 from 编写与调试应用
const writeDebug = findItem(toolsSidebar, '编写与调试应用');
let oldAppendix = null;
if (writeDebug && writeDebug.items) {
  const appIdx = writeDebug.items.findIndex(item => item && item.label === '附录');
  if (appIdx !== -1) {
    oldAppendix = writeDebug.items.splice(appIdx, 1)[0];
  }
}

// 6. Build new 附录 section
const newAppendix = {
  type: 'category',
  label: '附录',
  collapsed: true,
  items: []
};

// Add original appendix items
if (oldAppendix && oldAppendix.items) {
  newAppendix.items = [...oldAppendix.items];
}

// Add Code Linter rules (unwrap from outer category if needed)
if (codeLinterRules) {
  newAppendix.items.push(codeLinterRules);
}

// Add ArkTSDoc tags
if (arktsdocTags) {
  newAppendix.items.push(arktsdocTags);
}

// Add 附录 at the end (before any non-DevEco Studio sections)
// Find where to insert: after 发布应用
const publishLeafIdx = toolsSidebar.findIndex(item => 
  typeof item === 'string' && item.includes('ide-publish-app')
);
if (publishLeafIdx !== -1) {
  toolsSidebar.splice(publishLeafIdx + 1, 0, newAppendix);
}

// ── Write back ──
// Format as JS (not JSON) for readability
function jsify(obj, indent = 0) {
  const sp = '  '.repeat(indent);
  const sp1 = '  '.repeat(indent + 1);
  
  if (typeof obj === 'string') {
    return `${sp}'${obj}'`;
  }
  if (Array.isArray(obj)) {
    if (obj.length === 0) return `${sp}[]`;
    const items = obj.map(item => jsify(item, indent + 1));
    // Check if any item is multiline
    const multiline = items.some(i => i.includes('\n'));
    if (multiline || obj.length > 3) {
      return `${sp}[\n${items.join(',\n')}\n${sp}]`;
    }
    return `${sp}[${items.join(', ')}]`;
  }
  if (obj && typeof obj === 'object') {
    const lines = [`${sp}{`];
    for (const [key, value] of Object.entries(obj)) {
      if (key === 'items') {
        lines.push(`${sp1}${key}: ${jsify(value, indent + 1).trimStart()}`);
      } else if (typeof value === 'boolean') {
        lines.push(`${sp1}${key}: ${value}`);
      } else {
        lines.push(`${sp1}${key}: '${value}'`);
      }
    }
    lines.push(`${sp}}`);
    return lines.join('\n');
  }
  return String(obj);
}

// Generate the full file output
let output = `// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
toolsSidebar: ${jsify(toolsSidebar)},

`;

// Add other sidebar arrays (unchanged)
for (const key of Object.keys(sidebar)) {
  if (key === 'toolsSidebar') continue;
  output += `${key}: ${jsify(sidebar[key])},\n\n`;
}

output += '};\n';

fs.writeFileSync(filepath, output);
console.log('\n✅ Restructured sidebar written.');

// Print final structure
console.log('\n=== Final structure ===');
toolsSidebar.forEach(item => describeItem(item));
