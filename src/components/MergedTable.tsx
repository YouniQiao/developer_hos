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
  headers: (string[] | CellData[][]);
  rows: RawCell[][];
  caption?: string;
}

function normalizeCell(cell: RawCell): CellData {
  if (typeof cell === 'string') {
    return { content: cell };
  }
  return {
    ...cell,
    content: cell.content || cell.text || '',
  };
}

function normalizeHeaders(headers: string[] | CellData[][]): CellData[][] {
  // Flat string array → nested array
  if (headers.length > 0 && typeof headers[0] === 'string') {
    return [(headers as string[]).map((h: string) => normalizeCell(h))];
  }
  return (headers as CellData[][]).map(row => row.map(normalizeCell));
}

function buildStyle(cell: CellData, baseStyle: React.CSSProperties): React.CSSProperties {
  const rowSpan = cell.rowspan || cell.rowSpan || 1;
  const colSpan = cell.colspan || cell.colSpan || 1;
  const isEmpty = !cell.content || cell.content.trim() === '';
  return {
    ...baseStyle,
    ...(isEmpty ? {} : {}),
  };
}

export default function MergedTable({ headers, rows, caption }: MergedTableProps): JSX.Element {
  const headerRows = normalizeHeaders(headers);

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
          {rows.map((row, i) => (
            <tr key={`r-${i}`}>
              {row.map((cell, j) => {
                const normalized = normalizeCell(cell);
                const rowSpan = normalized.rowspan || normalized.rowSpan || 1;
                const colSpan = normalized.colspan || normalized.colSpan || 1;
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
                    dangerouslySetInnerHTML={{ __html: normalized.content || '' }}
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
