/**
 * Remark plugin to escape angle brackets and curly braces that cause
 * MDX parsing errors in HarmonyOS documentation Markdown files.
 * 
 * Escapes <, >, {, } outside of code blocks to prevent them from being
 * interpreted as JSX expressions or HTML tags.
 */
const visit = require('unist-util-visit');

module.exports = function remarkEscapeMdxConflicts() {
  return (tree) => {
    visit(tree, 'text', (node) => {
      if (node.value) {
        // Escape angle brackets (prevents <tag> being treated as JSX)
        node.value = node.value
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          // Escape curly braces (prevents {expr} being treated as JSX expressions)
          // Only replace { that starts an expression-like pattern
          .replace(/\{([a-zA-Z_"'$])/g, '&#123;$1')
          .replace(/\}/g, '&#125;');
      }
    });
    
    // Also handle inlineCode nodes - keep them as-is (code should be literal)
    // But check if they're actually in the right context
    
    // Handle tableCell nodes too
    visit(tree, 'tableCell', (node) => {
      visit(node, 'text', (textNode) => {
        if (textNode.value) {
          textNode.value = textNode.value
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/\{/g, '&#123;')
            .replace(/\}/g, '&#125;');
        }
      });
    });
  };
};
