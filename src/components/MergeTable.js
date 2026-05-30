import React from 'react';

/**
 * MergeTable — 支持 colspan/rowspan 合并单元格的表格组件。
 *
 * 用法：
 *   headers: string[] — 表头
 *   rows: Cell[][] — 数据行，每行为 Cell 数组
 *     每个 Cell 可以是 string（纯文本），或 { text, colspan?, rowspan?, bold?, style? }
 *
 * 示例：
 *   <MergeTable
 *     headers={['维度', '管控维度', '分类', '规则描述']}
 *     rows={[
 *       ['素材美观', '色彩', '配色舒适', '饱和度与明度合理搭配...'],
 *       [{ text: '色彩', rowspan: 1 }, { text: '色相', colspan: 2 }, '描述内容'],
 *     ]}
 *   />
 */
export default function MergeTable({ headers, rows, className = '' }) {
  return (
    <table className={`merge-table ${className}`}>
      {headers && headers.length > 0 && (
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i}>{h}</th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {rows.map((row, ri) => {
          const cells = [];
          let ci = 0;
          // Skip cells consumed by rowspan from previous rows
          while (ci < row.length) {
            const cell = row[ci];
            if (cell === null || cell === undefined) {
              // Skip — this slot was consumed by a rowspan from above
              ci++;
              continue;
            }
            const isObj = typeof cell === 'object';
            const text = isObj ? cell.text : String(cell);
            const colspan = isObj && cell.colspan ? cell.colspan : 1;
            const rowspan = isObj && cell.rowspan ? cell.rowspan : 1;
            const bold = isObj && cell.bold;
            const style = isObj && cell.style ? cell.style : {};

            cells.push(
              <td
                key={ci}
                colSpan={colspan}
                rowSpan={rowspan}
                style={style}
              >
                {bold ? <strong>{text}</strong> : text}
              </td>
            );
            ci++;
          }
          return <tr key={ri}>{cells}</tr>;
        })}
      </tbody>
    </table>
  );
}
