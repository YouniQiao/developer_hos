import React from 'react';

interface CellData {
  text: string;
  rowSpan?: number;
  colSpan?: number;
  header?: boolean;
}

/**
 * 合并单元格表格组件。
 * 用法：
 * <MergedTable
 *   headers={['类别', 'API', '说明']}
 *   rows={[
 *     [
 *       { text: '基础通信', rowSpan: 2 },
 *       { text: 'fetch()' },
 *       { text: '支持GET/POST' },
 *     ],
 *     [
 *       { text: 'POST请求' },
 *       { text: '发送数据' },
 *     ],
 *   ]}
 * />
 *
 * 普通文本单元格可直接用字符串代替 { text: '...' }：
 *   ['A', { text: 'B', rowSpan: 2 }, 'C']
 */
export default function MergedTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: (string | CellData)[][];
}) {
  // 规范化单元格数据
  const normalize = (cell: string | CellData): CellData =>
    typeof cell === 'string' ? { text: cell } : cell;

  return (
    <div className="merged-table-wrapper">
      <table className="merged-table">
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => {
                const c = normalize(cell);
                // rowSpan=0 表示被上方合并吃掉，跳过
                if (c.rowSpan === 0 || c.colSpan === 0) return null;
                const Tag = c.header ? 'th' : 'td';
                return (
                  <Tag
                    key={ci}
                    rowSpan={c.rowSpan || undefined}
                    colSpan={c.colSpan || undefined}
                  >
                    {c.text}
                  </Tag>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
