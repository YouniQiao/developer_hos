import React from 'react';

interface SourceLinkProps {
  name: string;
  url: string;
}

/**
 * 代码块右下角源码链接标签。
 * 用法：紧跟在 ``` 代码块之后 ——
 * <SourceLink name="NoInfoJumpTo.ets" url="https://gitcode.com/..." />
 */
export default function SourceLink({ name, url }: SourceLinkProps) {
  return (
    <div className="source-link-wrapper">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="source-link"
      >
        <svg
          className="source-link-icon"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
        {' '}查看源码：{name}
      </a>
    </div>
  );
}
