/**
 * Mega Menu Hover Fix
 * 
 * Docusaurus dropdown 在鼠标从 trigger 移到 position:fixed 的 mega menu 时会消失。
 * 此脚本添加 200ms 延迟隐藏，并确保鼠标在菜单区域内时保持显示。
 * 使用 MutationObserver 处理 React hydration 后的 DOM 替换。
 */
(function () {
  if (typeof window === 'undefined') return;

  var setupDone = new WeakSet();

  function setupOne(dropdown) {
    if (setupDone.has(dropdown)) return;
    setupDone.add(dropdown);

    var trigger = dropdown.querySelector('.navbar__link');
    var menu = dropdown.querySelector('.dropdown__menu');
    if (!trigger || !menu) return;

    var hideTimer = null;

    function show() {
      clearTimeout(hideTimer);
      dropdown.classList.add('dropdown--show');
    }

    function hide() {
      hideTimer = setTimeout(function () {
        dropdown.classList.remove('dropdown--show');
      }, 200);
    }

    trigger.addEventListener('mouseenter', show);
    trigger.addEventListener('mouseleave', hide);
    menu.addEventListener('mouseenter', show);
    menu.addEventListener('mouseleave', hide);

    // 点击菜单中的链接后立即收起
    menu.addEventListener('click', function (e) {
      var link = e.target.closest('a');
      if (link) {
        clearTimeout(hideTimer);
        dropdown.classList.remove('dropdown--show');
      }
    });
  }

  function setupAll() {
    document.querySelectorAll('.dropdown--hoverable').forEach(function (dropdown) {
      if (dropdown.querySelector('.mega-dropdown')) {
        setupOne(dropdown);
      }
    });
  }

  // 修复 Docusaurus 错误地给链接加上 /index 后缀的问题
  function fixIndexLinks() {
    document.querySelectorAll('.mega-menu-link[href$="/index"]').forEach(function (link) {
      link.setAttribute('href', link.getAttribute('href').replace(/\/index$/, ''));
    });
  }

  // 初次尝试
  setupAll();
  fixIndexLinks();

  // 监听 DOM 变化（处理 React hydration 替换 DOM）
  var observer = new MutationObserver(function () {
    setupAll();
    fixIndexLinks();
  });
  observer.observe(document.body, { childList: true, subtree: true });
})();
