import { Fragment, useCallback, useEffect, useState } from 'react';
import { capitalize } from '../../utils/capitalize.util';
import {
  CheckBoxIcon,
  IndexLabel,
  Panel,
  TableCell,
  TableContainer,
  TableItem,
  TableRow
} from './table.styles';

type Order = {
  orderBy: string;
  direction: 'asc' | 'desc';
};

export type Cell = {
  id: string;
  label: string;
  align: 'left' | 'center' | 'right';
  checked: boolean;
  type?: 'text' | 'currency' | 'percent';
  icon?: string;
  isResponsive?: boolean;
};

interface TableProps {
  cells: Cell[];
  rows: { [x: string]: any }[];
  initialOrder: Order;
  hasDetails?: boolean;
}
export const Table: React.FC<TableProps> = ({
  cells,
  rows,
  initialOrder,
  hasDetails = false
}) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 960;
  const [sortedRows, setSortedRows] = useState(rows);
  const [selected, setSelected] = useState<any[]>([]);
  const [order, setOrder] = useState<Order>(initialOrder);

  const [isShowing, setIsShowing] = useState('');

  const toggle = (rowId: string) => {
    setIsShowing((prev) => (prev === rowId ? '' : rowId));
  };

  const onSelectItem = (event: React.MouseEvent<unknown>, row: any) => {
    const newSelected = [...selected];
    const index = newSelected.findIndex((r) => r === row);
    if (index < 0) {
      newSelected.push(row);
    } else {
      newSelected.splice(index, 1);
    }
    setSelected(newSelected);
    event.stopPropagation();
  };

  const handleSortByClick = (cellId: string) => {
    let newOrder: Order;
    if (cellId === order.orderBy) {
      newOrder = {
        ...order,
        direction: order.direction === 'asc' ? 'desc' : 'asc'
      };
    } else {
      newOrder = { ...order, orderBy: cellId };
    }
    setOrder(newOrder);
    handleSort(newOrder.orderBy, newOrder.direction);
  };

  const isSelected = useCallback(
    (id: string) => {
      return selected.some((a: any) => a.id === id);
    },
    [selected]
  );

  const handleSort = useCallback(
    (column: string, direction: 'asc' | 'desc') => {
      const rowsTemp = [...rows];
      rowsTemp.sort((rowA, rowB) => {
        if (isSelected(rowA.id) && !isSelected(rowB.id)) {
          return -1;
        }
        if (isSelected(rowB.id) && !isSelected(rowA.id)) {
          return 1;
        }
        if (direction === 'asc') {
          return rowA[column] > rowB[column]
            ? 1
            : rowB[column] > rowA[column]
            ? -1
            : 0;
        }
        return rowB[column] > rowA[column]
          ? 1
          : rowA[column] > rowB[column]
          ? -1
          : 0;
      });
      setSortedRows(rowsTemp);
    },
    [isSelected, rows]
  );

  useEffect(() => {
    handleSort(order.orderBy, order.direction);
  }, [handleSort, order.direction, order.orderBy, selected]);

  return (
    <TableContainer>
      <thead>
        <tr>
          <TableCell align={'left'} style={{ paddingLeft: '16px' }}>
            #
          </TableCell>
          {cells?.map((cell) => {
            return (
              ((isMobile && cell.isResponsive) || !isMobile) && (
                <TableCell
                  key={cell.id}
                  align={cell.align}
                  onClick={() => handleSortByClick(cell.id)}
                  style={{ cursor: 'pointer' }}
                >
                  {capitalize(cell.label)}
                  {!!cell?.icon && <i className={cell.icon} />}
                  {order?.orderBy === cell.id && (
                    <>
                      {order?.direction === 'asc' ? (
                        <i
                          className="fa fa-chevron-down"
                          style={{ marginLeft: '4px' }}
                        />
                      ) : (
                        <i
                          className="fa fa-chevron-up"
                          style={{ marginLeft: '4px' }}
                        />
                      )}
                    </>
                  )}
                </TableCell>
              )
            );
          })}
        </tr>
      </thead>
      <tbody>
        {sortedRows.map((row, index) => {
          const isItemSelected = isSelected(row.id);
          return (
            <Fragment key={row.id}>
              <TableRow
                onClick={() => toggle(row.id)}
                className={isShowing === row.id ? 'active' : 'inactive'}
              >
                <td
                  onClick={(event) => onSelectItem(event, row)}
                  align={'left'}
                >
                  {isItemSelected ? (
                    <CheckBoxIcon className="fa fa-star" />
                  ) : (
                    <CheckBoxIcon className="fa fa-star-o" />
                  )}
                  <IndexLabel>{index}</IndexLabel>
                </td>
                {cells.map((cell) => {
                  return (
                    ((isMobile && cell.isResponsive) || !isMobile) && (
                      <TableItem
                        key={cell.id}
                        align={cell.align}
                        type={cell?.type}
                        isPositive={!row[cell.id].includes('-')}
                      >
                        {row[cell.id]}
                      </TableItem>
                    )
                  );
                })}
              </TableRow>
              {isShowing === row.id && !isMobile && hasDetails && (
                <tr>
                  <td colSpan={8}>
                    <Panel>
                      {Object.keys(row.details).map(
                        (item: any, index: number) => (
                          <div key={item}>
                            <p>{item.replace('_', ' ')}:</p>
                            <span>
                              {Object.values(row.details)[index] as string}
                            </span>
                          </div>
                        )
                      )}
                    </Panel>
                  </td>
                </tr>
              )}
            </Fragment>
          );
        })}
      </tbody>
    </TableContainer>
  );
};
