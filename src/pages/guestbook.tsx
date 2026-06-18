import React, { useEffect, useRef, useState } from 'react';
import Layout from '@theme/Layout';
import { useColorMode } from '@docusaurus/theme-common';

function GiscusComments() {
  const ref = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);
  const { colorMode } = useColorMode();
  const theme = colorMode === 'dark' ? 'dark' : 'light';

  // 初始化 Giscus
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'YouniQiao/developer_hos');
    script.setAttribute('data-repo-id', 'R_kgDOJqMdJg');
    script.setAttribute('data-category', 'General');
    script.setAttribute('data-category-id', 'DIC_kwDOJqMdJs4C9gQe');
    script.setAttribute('data-mapping', 'specific');
    script.setAttribute('data-term', 'Guestbook');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'top');
    script.setAttribute('data-theme', theme);
    script.setAttribute('data-lang', 'zh-CN');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    const timeout = setTimeout(() => setFailed(true), 8000);

    script.onload = () => clearTimeout(timeout);
    script.onerror = () => { clearTimeout(timeout); setFailed(true); };

    if (ref.current) {
      ref.current.appendChild(script);
    }

    return () => {
      clearTimeout(timeout);
      script.remove();
    };
  }, []);

  // 主题切换时通知 Giscus
  useEffect(() => {
    const iframe = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame');
    if (iframe?.contentWindow) {
      iframe.contentWindow.postMessage(
        { giscus: { setConfig: { theme } } },
        'https://giscus.app'
      );
    }
  }, [theme]);

  if (failed) {
    return (
      <div className="margin-top--lg" style={{ padding: '2rem', background: 'var(--ifm-color-emphasis-100)', borderRadius: 8, textAlign: 'center' }}>
        <p style={{ marginBottom: '1rem' }}>😿 留言板加载失败（可能需要访问 GitHub）</p>
        <p>
          你可以直接到{' '}
          <a href="https://github.com/YouniQiao/developer_hos/issues" target="_blank" rel="noopener noreferrer">
            GitHub Issues
          </a>{' '}
          提反馈，或者发送邮件至 <a href="mailto:hhu_gis@qq.com">hhu_gis@qq.com</a>
        </p>
      </div>
    );
  }

  return <div ref={ref} />;
}

export default function Guestbook() {
  return (
    <Layout title="留言板" description="HarmonyOS 开发者文档站点留言板">
      <main className="container margin-vert--lg">
        <h1>💬 留言板</h1>
        <p>
          欢迎留言、建议、反馈。使用 GitHub 账号登录即可参与讨论。
        </p>
        <GiscusComments />
      </main>
    </Layout>
  );
}
