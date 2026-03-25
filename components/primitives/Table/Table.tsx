import React, { forwardRef } from 'react';
import './Table.css';

export type TableDensity = 'compact' | 'default' | 'comfortable';

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  striped?: boolean;
  density?: TableDensity;
  stickyHeader?: boolean;
}

export interface TableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {}
export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {}
export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {}
export interface TableHeaderCellProps extends React.ThHTMLAttributes<HTMLTableCellElement> {}

const TableHeader = forwardRef<HTMLTableSectionElement, TableHeaderProps>(
  ({ className, children, ...rest }, ref) => (
    <thead
      ref={ref}
      className={['lex-table__header', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </thead>
  )
);
TableHeader.displayName = 'Table.Header';

const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, children, ...rest }, ref) => (
    <tr
      ref={ref}
      className={['lex-table__row', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </tr>
  )
);
TableRow.displayName = 'Table.Row';

const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, children, ...rest }, ref) => (
    <td
      ref={ref}
      className={['lex-table__cell', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </td>
  )
);
TableCell.displayName = 'Table.Cell';

const TableHeaderCell = forwardRef<HTMLTableCellElement, TableHeaderCellProps>(
  ({ className, children, ...rest }, ref) => (
    <th
      ref={ref}
      className={['lex-table__header-cell', className].filter(Boolean).join(' ')}
      scope="col"
      {...rest}
    >
      {children}
    </th>
  )
);
TableHeaderCell.displayName = 'Table.HeaderCell';

export const Table = forwardRef<HTMLTableElement, TableProps>(
  (
    {
      striped = false,
      density = 'default',
      stickyHeader = false,
      className,
      style,
      children,
      ...rest
    },
    ref
  ) => {
    const classNames = [
      'lex-table',
      `lex-table--density-${density}`,
      striped && 'lex-table--striped',
      stickyHeader && 'lex-table--sticky-header',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <table ref={ref} className={classNames} style={style} role="table" {...rest}>
        {children}
      </table>
    );
  }
) as React.ForwardRefExoticComponent<TableProps & React.RefAttributes<HTMLTableElement>> & {
  Header: typeof TableHeader;
  Row: typeof TableRow;
  Cell: typeof TableCell;
  HeaderCell: typeof TableHeaderCell;
};

Table.displayName = 'Table';
Table.Header = TableHeader;
Table.Row = TableRow;
Table.Cell = TableCell;
Table.HeaderCell = TableHeaderCell;

export default Table;
