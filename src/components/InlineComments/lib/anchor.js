/**
 * Text Fragment 锚点工具
 * 用于在被标注文字前后取上下文片段，支持文档更新后重新定位
 */

const CONTEXT_LENGTH = 32;

/** 从选中的 Range 生成锚点数据 */
export function createAnchor(selection) {
  const range = selection.getRangeAt(0);
  const exact = selection.toString().trim();
  
  if (!exact || exact.length > 500) return null;
  
  const prefix = getContext(range.startContainer, range.startOffset, -CONTEXT_LENGTH);
  const suffix = getContext(range.endContainer, range.endOffset, CONTEXT_LENGTH);
  
  return { prefix, exact, suffix };
}

/** 在 DOM 中根据锚点查找对应的 Text Range */
export function findAnchor({ prefix, exact, suffix }) {
  // 策略1：精确匹配 exact 文本
  const found = findExactText(exact);
  if (!found) return null;
  
  // 策略2：验证上下文
  const ctx = getSurroundingContext(found, CONTEXT_LENGTH);
  const prefixOk = !prefix || ctx.before.includes(prefix.slice(-20));
  const suffixOk = !suffix || ctx.after.includes(suffix.slice(0, 20));
  
  if (prefixOk && suffixOk) return found;
  
  // 策略3：模糊匹配（只用 prefix + suffix）
  if (prefix || suffix) {
    return fuzzyFind(prefix, suffix);
  }
  
  return null;
}

/** 从锚点生成 URL hash */
export function anchorToHash(anchor) {
  return btoa(encodeURIComponent(JSON.stringify([anchor.prefix, anchor.exact, anchor.suffix])));
}

/** 从 URL hash 解析锚点 */
export function parseAnchorHash(hash) {
  try {
    const [prefix, exact, suffix] = JSON.parse(decodeURIComponent(atob(hash)));
    return { prefix, exact, suffix };
  } catch {
    return null;
  }
}

/** 序列化锚点为 Discussion Comment 中存储的字符串 */
export function serializeAnchor(anchor) {
  return `<!-- ic-anchor:${anchorToHash(anchor)} -->`;
}

/** 从 Comment body 中提取锚点数据 */
export function parseCommentBody(body) {
  const match = body.match(/<!-- ic-anchor:(.+?) -->/);
  if (!match) return null;
  return parseAnchorHash(match[1]);
}

// ---- 内部工具函数 ----

/** 获取指定位置前后的上下文文本 */
function getContext(node, offset, direction) {
  const isBackward = direction < 0;
  const length = Math.abs(direction);
  let text = '';
  let current = node;
  let pos = offset;
  
  while (text.length < length && current) {
    if (current.nodeType === Node.TEXT_NODE) {
      const slice = isBackward
        ? current.textContent.slice(Math.max(0, pos - (length - text.length)), pos)
        : current.textContent.slice(pos, pos + (length - text.length));
      text = isBackward ? slice + text : text + slice;
      pos = isBackward ? 0 : current.textContent.length;
    }
    // 向上或向右遍历
    if (isBackward) {
      if (current.previousSibling) {
        current = getLastTextNode(current.previousSibling);
        pos = current ? current.textContent.length : 0;
      } else {
        current = current.parentElement;
        while (current && !current.previousSibling) current = current.parentElement;
        current = current ? getLastTextNode(current.previousSibling) : null;
        pos = current ? current.textContent.length : 0;
      }
    } else {
      if (current.nextSibling) {
        current = getFirstTextNode(current.nextSibling);
        pos = 0;
      } else {
        current = current.parentElement;
        while (current && !current.nextSibling) current = current.parentElement;
        current = current ? getFirstTextNode(current.nextSibling) : null;
        pos = 0;
      }
    }
  }
  return text.replace(/\s+/g, ' ').trim().slice(-length);
}

function getFirstTextNode(node) {
  if (node.nodeType === Node.TEXT_NODE) return node;
  for (const child of node.childNodes) {
    const found = getFirstTextNode(child);
    if (found) return found;
  }
  return null;
}

function getLastTextNode(node) {
  if (node.nodeType === Node.TEXT_NODE) return node;
  for (let i = node.childNodes.length - 1; i >= 0; i--) {
    const found = getLastTextNode(node.childNodes[i]);
    if (found) return found;
  }
  return null;
}

/** 在文档中搜索精确文本匹配 */
function findExactText(text) {
  const walker = document.createTreeWalker(
    document.querySelector('article') || document.body,
    NodeFilter.SHOW_TEXT,
    { acceptNode: (n) => n.textContent.includes(text) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP }
  );
  
  let node;
  while ((node = walker.nextNode())) {
    const idx = node.textContent.indexOf(text);
    if (idx !== -1) {
      const range = document.createRange();
      range.setStart(node, idx);
      range.setEnd(node, idx + text.length);
      return range;
    }
  }
  return null;
}

/** 获取 Range 前后的上下文文本 */
function getSurroundingContext(range, len) {
  const beforeRange = document.createRange();
  const afterRange = document.createRange();
  
  beforeRange.setStartBefore(range.startContainer.parentElement || range.startContainer);
  beforeRange.setEnd(range.startContainer, range.startOffset);
  
  afterRange.setStart(range.endContainer, range.endOffset);
  const lastNode = range.endContainer.parentElement || range.endContainer;
  afterRange.setEndAfter(lastNode);
  
  return {
    before: beforeRange.toString().replace(/\s+/g, ' ').trim().slice(-len),
    after: afterRange.toString().replace(/\s+/g, ' ').trim().slice(0, len),
  };
}

/** 模糊查找：用 prefix/suffix 定位 */
function fuzzyFind(prefix, suffix) {
  if (!prefix && !suffix) return null;
  // 简化实现：在文档中找 prefix，验证 suffix
  if (prefix) {
    const trimmed = prefix.slice(-15);
    const found = findExactText(trimmed);
    if (found && (!suffix || getSurroundingContext(found, 100).after.includes(suffix.slice(0, 15)))) {
      return found;
    }
  }
  return null;
}
