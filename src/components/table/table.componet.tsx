import { useState } from 'react';
import { capitalize } from '../../utils/capitalize';
import { TableContainer, TableRow } from './table.styles';

type Order = {
  orderBy: string;
  direction: 'asc' | 'desc';
};

type Cell = {
  id: string;
  label: string;
  align: 'left' | 'center';
  checked: boolean;
};

interface TableProps {
  cells: Cell[];
  rows: { [x: string]: any }[];
  initialOrder: Order;
  onClick: (row: { [x: string]: any }) => void;
  onSortByClick: (cellId: string, direction: 'asc' | 'desc') => void;
  onCheck: (favoriteCells: Cell[]) => void;
}
export const Table: React.FC<TableProps> = ({ cells, rows, onClick, initialOrder, onSortByClick, onCheck }) => {
  const [selected, setSelected] = useState<any[]>([]);
  const [order, setOrder] = useState<Order>(initialOrder);

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelected(rows);
      return;
    }
    setSelected([]);
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
    if (cellId === order.orderBy) {
      onSortByClick(cellId, order.direction === 'asc' ? 'desc' : 'asc');
      setOrder((prev) => ({
        ...prev,
        direction: prev.direction === 'asc' ? 'desc' : 'asc'
      }));
    } else {
      onSortByClick(cellId, order.direction);
      setOrder((prev) => ({ ...prev, orderBy: cellId }));
    }
  };

  const isSelected = (id: string) => {
    return selected.some((a: any) => a.id === id);
  };

  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>, cellId: string) => {
    const updateCells = [...cells];
    const updateCell = updateCells.find((cell) => cell.id === cellId);
    if (updateCell) {
      updateCell.checked = event.target.checked;
    }
    onCheck(updateCells.filter((cell) => cell.checked));
  };

  return (
    <TableContainer>
      <thead>
        <tr>
          {cells?.map((cell) => (
            <th key={cell.id} align={cell.align}>
              {capitalize(cell.label)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => {
          const isItemSelected = isSelected(row.id);
          return (
            <TableRow onClick={() => onClick(row)} key={row.id}>
              <td>
                <p>{isItemSelected}</p>
              </td>
              {cells.map((cell) => (
                <td key={cell.id} align={cell.align}>
                  {row[cell.id]}
                </td>
              ))}
            </TableRow>
          );
        })}
      </tbody>
    </TableContainer>
  );
};
