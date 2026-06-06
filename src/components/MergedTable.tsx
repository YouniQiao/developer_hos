import React from 'react';

interface CellData {
  text?: string;
  content?: string;
  rowSpan?: number;
  rowspan?: number;
  colspan?: number;
}

interface MergedTableProps {
  headers: string[];
  rows: (string | CellData)[][];
  caption?: string;
}

export default function MergedTable({ headers, rows, caption }: MergedTableProps): JSX.Element {
  function getText(cell: string | CellData): string {
    if (typeof cell === 'string') return cell;
    return cell.content || cell.text || '';
  }

  function getRowSpan(cell: string | CellData): number {
    if (typeof cell === 'string') return 1;
    return cell.rowSpan || cell.rowspan || 1;
  }

  function getColSpan(cell: string | CellData): number {
    if (typeof cell === 'string') return 1;
    return cell.colspan || 1;
  }

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
        {headers && headers.length > 0 && (
          <thead>
            <tr>
              {headers.map((h, i) => (
                <th
                  key={`h-${i}`}
                  style={{
                    border: '1px solid #dfe2e5',
                    padding: '8px 12px',
                    backgroundColor: '#f6f8fa',
                    fontWeight: 600,
                    textAlign: 'left',
                    verticalAlign: 'top',
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {rows.map((row, i) => (
            <tr key={`r-${i}`}>
              {row.map((cell, j) => {
                if (cell === null || cell === undefined || (typeof cell === 'object' && Object.keys(cell).length === 0)) {
                  return null;
                }
                return (
                  <td
                    key={`r-${i}-${j}`}
                    rowSpan={getRowSpan(cell)}
                    colSpan={getColSpan(cell)}
                    style={{
                      border: '1px solid #dfe2e5',
                      padding: '8px 12px',
                      verticalAlign: 'top',
                    }}
                    dangerouslySetInnerHTML={{ __html: getText(cell) }}
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
