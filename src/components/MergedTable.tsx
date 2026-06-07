import React from 'react';

interface CellData {
  content?: string;
  text?: string;
  rowspan?: number;
  rowSpan?: number;
  colspan?: number;
  colSpan?: number;
}

type RawCell = string | CellData;

interface MergedTableProps {
  headers?: string[] | CellData[][];
  rows?: RawCell[][];
  caption?: string;
}

function normalizeCell(cell: RawCell): CellData {
  if (typeof cell === 'string') {
    return { content: cell };
  }
  if (!cell || typeof cell !== 'object') {
    return { content: '' };
  }
  return {
    ...cell,
    content: cell.content || cell.text || '',
  };
}

function normalizeHeaders(headers?: string[] | CellData[][]): CellData[][] {
  if (!headers || !headers.length) return [];
  if (typeof headers[0] === 'string') {
    return [(headers as string[]).map((h: string) => normalizeCell(h))];
  }
  return (headers as CellData[][]).map(row =>
    (Array.isArray(row) ? row : []).map(normalizeCell),
  );
}

function normalizeRows(rows?: RawCell[][]): CellData[][] {
  if (!rows || !rows.length) return [];
  return rows
    .filter(row => Array.isArray(row))
    .map(row => row.map(normalizeCell));
}

export default function MergedTable({ headers, rows, caption }: MergedTableProps): JSX.Element {
  const headerRows = normalizeHeaders(headers);
  const bodyRows = normalizeRows(rows);

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
        {headerRows.length > 0 && (
          <thead>
            {headerRows.map((row, i) => (
              <tr key={`h-${i}`}>
                {row.map((cell, j) => {
                  const rowSpan = cell.rowspan || cell.rowSpan || 1;
                  const colSpan = cell.colspan || cell.colSpan || 1;
                  return (
                    <th
                      key={`h-${i}-${j}`}
                      rowSpan={rowSpan}
                      colSpan={colSpan}
                      style={{
                        border: '1px solid #dfe2e5',
                        padding: '8px 12px',
                        backgroundColor: '#f6f8fa',
                        fontWeight: 600,
                        textAlign: 'left',
                        verticalAlign: 'top',
                      }}
                      dangerouslySetInnerHTML={{ __html: cell.content || '' }}
                    />
                  );
                })}
              </tr>
            ))}
          </thead>
        )}
        <tbody>
          {bodyRows.map((row, i) => (
            <tr key={`r-${i}`}>
              {row.map((cell, j) => {
                const rowSpan = cell.rowspan || cell.rowSpan || 1;
                const colSpan = cell.colspan || cell.colSpan || 1;
                return (
                  <td
                    key={`r-${i}-${j}`}
                    rowSpan={rowSpan}
                    colSpan={colSpan}
                    style={{
                      border: '1px solid #dfe2e5',
                      padding: '8px 12px',
                      verticalAlign: 'top',
                    }}
                    dangerouslySetInnerHTML={{ __html: cell.content || '' }}
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
