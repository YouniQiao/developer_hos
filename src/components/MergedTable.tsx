import React from 'react';

interface CellData {
  content: string;
  rowspan?: number;
  colspan?: number;
}

interface MergedTableProps {
  headers: CellData[][];
  rows: CellData[][];
  caption?: string;
}

export default function MergedTable({ headers, rows, caption }: MergedTableProps): JSX.Element {
  return (
    <div style={{ overflowX: 'auto', margin: '16px 0' }}>
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        fontSize: '14px',
        lineHeight: '1.6',
      }}>
        {caption && (
          <caption style={{
            captionSide: 'top',
            fontWeight: 600,
            marginBottom: 8,
            textAlign: 'left',
          }}>
            {caption}
          </caption>
        )}
        {headers.length > 0 && (
          <thead>
            {headers.map((row, i) => (
              <tr key={`h-${i}`}>
                {row.map((cell, j) => {
                  if (!cell || Object.keys(cell).length === 0) return null;
                  return (
                    <th
                      key={`h-${i}-${j}`}
                      rowSpan={cell.rowspan || 1}
                      colSpan={cell.colspan || 1}
                      style={{
                        border: '1px solid #dfe2e5',
                        padding: '8px 12px',
                        backgroundColor: '#f6f8fa',
                        fontWeight: 600,
                        textAlign: 'left',
                        verticalAlign: 'top',
                      }}
                      dangerouslySetInnerHTML={{ __html: cell.content }}
                    />
                  );
                })}
              </tr>
            ))}
          </thead>
        )}
        <tbody>
          {rows.map((row, i) => (
            <tr key={`r-${i}`}>
              {row.map((cell, j) => {
                if (!cell || Object.keys(cell).length === 0) return null;
                return (
                  <td
                    key={`r-${i}-${j}`}
                    rowSpan={cell.rowspan || 1}
                    colSpan={cell.colspan || 1}
                    style={{
                      border: '1px solid #dfe2e5',
                      padding: '8px 12px',
                      verticalAlign: 'top',
                    }}
                    dangerouslySetInnerHTML={{ __html: cell.content }}
                  />
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
