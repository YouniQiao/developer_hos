#!/usr/bin/env node
const fs = require('fs');
const vm = require('vm');

const bak = fs.readFileSync('/Users/hhxi/developer_hos/sidebars-tools.js.bak', 'utf8');

// Parse the file
const sandbox = { module: { exports: {} }, require: () => [] };
vm.createContext(sandbox);
vm.runInContext(bak, sandbox);
const orig = sandbox.module.exports;

// Helper: find item by label recursively
function findByLabel(arr, label) {
  for (const item of arr) {
    if (item && item.label === label) return item;
    if (item && item.items) {
      const found = findByLabel(item.items, label);
      if (found) return found;
    }
  }
  return null;
}

function removeByLabel(arr, label) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] && arr[i].label === label) return arr.splice(i, 1)[0];
    if (arr[i] && arr[i].items) {
      const found = removeByLabel(arr[i].items, label);
      if (found) return found;
    }
  }
  return null;
}

// ── Clone and modify ──
const ts = JSON.parse(JSON.stringify(orig.toolsSidebar));

// 1. Rename
const overview = findByLabel(ts, '概览与安装');
if (overview) overview.label = '工具使用入门';

// 2. Merge 工程创建 + 模块与共享包
const projCreate = findByLabel(ts, '工程创建');
const moduleShare = findByLabel(ts, '模块与共享包');

if (projCreate && moduleShare) {
  // Promote HAR/HSP items out of their sub-category
  const harGroup = findByLabel(moduleShare.items, 'HAR与HSP共享包');
  const extraItems = [];
  if (harGroup && harGroup.items) {
    extraItems.push(...harGroup.items);
  }
  // Get non-HAR items from 模块与共享包
  for (const item of moduleShare.items) {
    if (typeof item === 'string') extraItems.push(item);
    else if (item.label !== 'HAR与HSP共享包') extraItems.push(item);
  }
  
  projCreate.label = '管理工程及模块';
  projCreate.items.push(...extraItems);
  
  // Remove 模块与共享包 from top level
  for (let i = 0; i < ts.length; i++) {
    if (ts[i] && ts[i].label === '模块与共享包') {
      ts.splice(i, 1);
      break;
    }
  }
}

// 3. Extract Code Linter rules from 代码检查
const codeCheck = findByLabel(ts, '代码检查');
let codeLinterRules = null;
if (codeCheck && codeCheck.items) {
  for (let i = 0; i < codeCheck.items.length; i++) {
    if (codeCheck.items[i] && codeCheck.items[i].label === 'Code Linter代码检查规则') {
      codeLinterRules = codeCheck.items.splice(i, 1)[0];
      break;
    }
  }
}

// 4. Replace 生成ArkTSDoc文档 group with single page, save 标准标签
const codeEdit = findByLabel(ts, '代码编辑');
let arktsdocTags = null;
if (codeEdit && codeEdit.items) {
  for (let i = 0; i < codeEdit.items.length; i++) {
    if (codeEdit.items[i] && codeEdit.items[i].label === '生成ArkTSDoc文档') {
      const group = codeEdit.items[i];
      for (let j = 0; j < group.items.length; j++) {
        if (group.items[j] && group.items[j].label === '标准标签') {
          arktsdocTags = group.items.splice(j, 1)[0];
          break;
        }
      }
      // Replace group with single page
      codeEdit.items[i] = group.items[0]; // ide-arktsdoc-generation
      break;
    }
  }
}

// 5. Extract 附录 from 编写与调试应用
const writeDebug = findByLabel(ts, '编写与调试应用');
let oldAppendix = null;
if (writeDebug && writeDebug.items) {
  for (let i = 0; i < writeDebug.items.length; i++) {
    if (writeDebug.items[i] && writeDebug.items[i].label === '附录') {
      oldAppendix = writeDebug.items.splice(i, 1)[0];
      break;
    }
  }
}

// 6. Flatten 发布应用
for (let i = 0; i < ts.length; i++) {
  if (ts[i] && ts[i].label === '发布应用') {
    ts[i] = ts[i].items[0]; // single leaf
    break;
  }
}

// 7. Build new 附录
const newAppendix = {
  type: 'category',
  label: '附录',
  collapsed: true,
  items: []
};

if (oldAppendix && oldAppendix.items) {
  newAppendix.items.push(...oldAppendix.items);
}
if (codeLinterRules) {
  newAppendix.items.push(codeLinterRules);
}
if (arktsdocTags) {
  newAppendix.items.push(arktsdocTags);
}

// Insert after 发布应用
for (let i = 0; i < ts.length; i++) {
  if (typeof ts[i] === 'string' && ts[i].includes('ide-publish-app')) {
    ts.splice(i + 1, 0, newAppendix);
    break;
  }
}

// ── Serialize ──
function jsStringify(obj, indent = 0) {
  const sp = '  '.repeat(indent);
  const sp1 = '  '.repeat(indent + 1);
  const sp2 = '  '.repeat(indent + 2);
  
  if (typeof obj === 'string') return `${sp}'${obj}'`;
  if (obj === null || obj === undefined) return `${sp}null`;
  if (typeof obj === 'boolean') return `${sp}${obj}`;
  
  if (Array.isArray(obj)) {
    if (obj.length === 0) return `${sp}[]`;
    const items = obj.map(item => jsStringify(item, indent + 1)).map(s => s.trimStart());
    return `${sp}[\n${items.join(',\n')}\n${sp}]`;
  }
  
  if (typeof obj === 'object') {
    const props = [];
    for (const [key, value] of Object.entries(obj)) {
      if (key === 'items') {
        props.push(`${sp1}${key}: ${jsStringify(value, indent + 1).trimStart()}`);
      } else if (typeof value === 'boolean') {
        props.push(`${sp1}${key}: ${value}`);
      } else {
        props.push(`${sp1}${key}: '${value}'`);
      }
    }
    return `${sp}{\n${props.join(',\n')}\n${sp}}`;
  }
  
  return `${sp}${obj}`;
}

// Build output: toolsSidebar first, then remaining arrays
let output = `// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
toolsSidebar: ${jsStringify(ts)},

`;

for (const key of Object.keys(orig)) {
  if (key === 'toolsSidebar') continue;
  output += `${key}: ${jsStringify(orig[key])},\n\n`;
}

output += '};\n';

fs.writeFileSync('/Users/hhxi/developer_hos/sidebars-tools.js', output);
console.log('✅ Written sidebars-tools.js');

// Verify
try {
  const sandbox2 = { module: { exports: {} }, require: () => [] };
  vm.createContext(sandbox2);
  vm.runInContext(output, sandbox2);
  console.log(`✅ Valid JS. toolsSidebar has ${sandbox2.module.exports.toolsSidebar.length} items`);
} catch(e) {
  console.error('❌ Invalid JS:', e.message);
}
